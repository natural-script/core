// Rusha JS
(function () {
	var util = {
		getDataType: function (data) {
			if (typeof data === 'string') {
				return 'string';
			}
			if (data instanceof Array) {
				return 'array';
			}
			if (typeof global !== 'undefined' && global.Buffer && global.Buffer.isBuffer(data)) {
				return 'buffer';
			}
			if (data instanceof ArrayBuffer) {
				return 'arraybuffer';
			}
			if (data.buffer instanceof ArrayBuffer) {
				return 'view';
			}
			if (data instanceof Blob) {
				return 'blob';
			}
			throw new Error('Unsupported data type.');
		}
	};

	function Rusha(chunkSize) {
		'use strict';
		var // Private object structure.
			self$2 = {
				fill: 0
			};
		var // Calculate the length of buffer that the sha1 routine uses
			// including the padding.
			padlen = function (len) {
				for (len += 9; len % 64 > 0; len += 1);
				return len;
			};
		var padZeroes = function (bin, len) {
			var h8 = new Uint8Array(bin.buffer);
			var om = len % 4,
				align = len - om;
			switch (om) {
				case 0:
					h8[align + 3] = 0;
				case 1:
					h8[align + 2] = 0;
				case 2:
					h8[align + 1] = 0;
				case 3:
					h8[align + 0] = 0;
			}
			for (var i$2 = (len >> 2) + 1; i$2 < bin.length; i$2++) bin[i$2] = 0;
		};
		var padData = function (bin, chunkLen, msgLen) {
			bin[chunkLen >> 2] |= 128 << 24 - (chunkLen % 4 << 3);
			// To support msgLen >= 2 GiB, use a float division when computing the
			// high 32-bits of the big-endian message length in bits.
			bin[((chunkLen >> 2) + 2 & ~15) + 14] = msgLen / (1 << 29) | 0;
			bin[((chunkLen >> 2) + 2 & ~15) + 15] = msgLen << 3;
		};
		var // Convert a binary string and write it to the heap.
			// A binary string is expected to only contain char codes < 256.
			convStr = function (H8, H32, start, len, off) {
				var str = this,
					i$2, om = off % 4,
					lm = (len + om) % 4,
					j = len - lm;
				switch (om) {
					case 0:
						H8[off] = str.charCodeAt(start + 3);
					case 1:
						H8[off + 1 - (om << 1) | 0] = str.charCodeAt(start + 2);
					case 2:
						H8[off + 2 - (om << 1) | 0] = str.charCodeAt(start + 1);
					case 3:
						H8[off + 3 - (om << 1) | 0] = str.charCodeAt(start);
				}
				if (len < lm + om) {
					return;
				}
				for (i$2 = 4 - om; i$2 < j; i$2 = i$2 + 4 | 0) {
					H32[off + i$2 >> 2] = str.charCodeAt(start + i$2) << 24 | str.charCodeAt(start + i$2 + 1) << 16 | str.charCodeAt(start + i$2 + 2) << 8 | str.charCodeAt(start + i$2 + 3);
				}
				switch (lm) {
					case 3:
						H8[off + j + 1 | 0] = str.charCodeAt(start + j + 2);
					case 2:
						H8[off + j + 2 | 0] = str.charCodeAt(start + j + 1);
					case 1:
						H8[off + j + 3 | 0] = str.charCodeAt(start + j);
				}
			};
		var // Convert a buffer or array and write it to the heap.
			// The buffer or array is expected to only contain elements < 256.
			convBuf = function (H8, H32, start, len, off) {
				var buf = this,
					i$2, om = off % 4,
					lm = (len + om) % 4,
					j = len - lm;
				switch (om) {
					case 0:
						H8[off] = buf[start + 3];
					case 1:
						H8[off + 1 - (om << 1) | 0] = buf[start + 2];
					case 2:
						H8[off + 2 - (om << 1) | 0] = buf[start + 1];
					case 3:
						H8[off + 3 - (om << 1) | 0] = buf[start];
				}
				if (len < lm + om) {
					return;
				}
				for (i$2 = 4 - om; i$2 < j; i$2 = i$2 + 4 | 0) {
					H32[off + i$2 >> 2 | 0] = buf[start + i$2] << 24 | buf[start + i$2 + 1] << 16 | buf[start + i$2 + 2] << 8 | buf[start + i$2 + 3];
				}
				switch (lm) {
					case 3:
						H8[off + j + 1 | 0] = buf[start + j + 2];
					case 2:
						H8[off + j + 2 | 0] = buf[start + j + 1];
					case 1:
						H8[off + j + 3 | 0] = buf[start + j];
				}
			};
		var convBlob = function (H8, H32, start, len, off) {
			var blob = this,
				i$2, om = off % 4,
				lm = (len + om) % 4,
				j = len - lm;
			var buf = new Uint8Array(reader.readAsArrayBuffer(blob.slice(start, start + len)));
			switch (om) {
				case 0:
					H8[off] = buf[3];
				case 1:
					H8[off + 1 - (om << 1) | 0] = buf[2];
				case 2:
					H8[off + 2 - (om << 1) | 0] = buf[1];
				case 3:
					H8[off + 3 - (om << 1) | 0] = buf[0];
			}
			if (len < lm + om) {
				return;
			}
			for (i$2 = 4 - om; i$2 < j; i$2 = i$2 + 4 | 0) {
				H32[off + i$2 >> 2 | 0] = buf[i$2] << 24 | buf[i$2 + 1] << 16 | buf[i$2 + 2] << 8 | buf[i$2 + 3];
			}
			switch (lm) {
				case 3:
					H8[off + j + 1 | 0] = buf[j + 2];
				case 2:
					H8[off + j + 2 | 0] = buf[j + 1];
				case 1:
					H8[off + j + 3 | 0] = buf[j];
			}
		};
		var convFn = function (data) {
			switch (util.getDataType(data)) {
				case 'string':
					return convStr.bind(data);
				case 'array':
					return convBuf.bind(data);
				case 'buffer':
					return convBuf.bind(data);
				case 'arraybuffer':
					return convBuf.bind(new Uint8Array(data));
				case 'view':
					return convBuf.bind(new Uint8Array(data.buffer, data.byteOffset, data.byteLength));
				case 'blob':
					return convBlob.bind(data);
			}
		};
		var slice = function (data, offset) {
			switch (util.getDataType(data)) {
				case 'string':
					return data.slice(offset);
				case 'array':
					return data.slice(offset);
				case 'buffer':
					return data.slice(offset);
				case 'arraybuffer':
					return data.slice(offset);
				case 'view':
					return data.buffer.slice(offset);
			}
		};
		var // Precompute 00 - ff strings
			precomputedHex = new Array(256);
		for (var i = 0; i < 256; i++) {
			precomputedHex[i] = (i < 16 ? '0' : '') + i.toString(16);
		}
		var // Convert an ArrayBuffer into its hexadecimal string representation.
			hex = function (arrayBuffer) {
				var binarray = new Uint8Array(arrayBuffer);
				var res = new Array(arrayBuffer.byteLength);
				for (var i$2 = 0; i$2 < res.length; i$2++) {
					res[i$2] = precomputedHex[binarray[i$2]];
				}
				return res.join('');
			};
		var ceilHeapSize = function (v) {
			// The asm.js spec says:
			// The heap object's byteLength must be either
			// 2^n for n in [12, 24) or 2^24 * n for n ≥ 1.
			// Also, byteLengths smaller than 2^16 are deprecated.
			var p;
			if ( // If v is smaller than 2^16, the smallest possible solution
				// is 2^16.
				v <= 65536) return 65536;
			if ( // If v < 2^24, we round up to 2^n,
				// otherwise we round up to 2^24 * n.
				v < 16777216) {
				for (p = 1; p < v; p = p << 1);
			} else {
				for (p = 16777216; p < v; p += 16777216);
			}
			return p;
		};
		var // Initialize the internal data structures to a new capacity.
			init = function (size) {
				if (size % 64 > 0) {
					throw new Error('Chunk size must be a multiple of 128 bit');
				}
				self$2.offset = 0;
				self$2.maxChunkLen = size;
				self$2.padMaxChunkLen = padlen(size);
				// The size of the heap is the sum of:
				// 1. The padded input message size
				// 2. The extended space the algorithm needs (320 byte)
				// 3. The 160 bit state the algoritm uses
				self$2.heap = new ArrayBuffer(ceilHeapSize(self$2.padMaxChunkLen + 320 + 20));
				self$2.h32 = new Int32Array(self$2.heap);
				self$2.h8 = new Int8Array(self$2.heap);
				self$2.core = new Rusha._core({
					Int32Array: Int32Array,
					DataView: DataView
				}, {}, self$2.heap);
				self$2.buffer = null;
			};
		// Iinitializethe datastructures according
		// to a chunk siyze.
		init(chunkSize || 64 * 1024);
		var initState = function (heap, padMsgLen) {
			self$2.offset = 0;
			var io = new Int32Array(heap, padMsgLen + 320, 5);
			io[0] = 1732584193;
			io[1] = -271733879;
			io[2] = -1732584194;
			io[3] = 271733878;
			io[4] = -1009589776;
		};
		var padChunk = function (chunkLen, msgLen) {
			var padChunkLen = padlen(chunkLen);
			var view = new Int32Array(self$2.heap, 0, padChunkLen >> 2);
			padZeroes(view, chunkLen);
			padData(view, chunkLen, msgLen);
			return padChunkLen;
		};
		var // Write data to the heap.
			write = function (data, chunkOffset, chunkLen, off) {
				convFn(data)(self$2.h8, self$2.h32, chunkOffset, chunkLen, off || 0);
			};
		var // Initialize and call the RushaCore,
			// assuming an input buffer of length len * 4.
			coreCall = function (data, chunkOffset, chunkLen, msgLen, finalize) {
				var padChunkLen = chunkLen;
				write(data, chunkOffset, chunkLen);
				if (finalize) {
					padChunkLen = padChunk(chunkLen, msgLen);
				}
				self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);
			};
		var getRawDigest = function (heap, padMaxChunkLen) {
			var io = new Int32Array(heap, padMaxChunkLen + 320, 5);
			var out = new Int32Array(5);
			var arr = new DataView(out.buffer);
			arr.setInt32(0, io[0], false);
			arr.setInt32(4, io[1], false);
			arr.setInt32(8, io[2], false);
			arr.setInt32(12, io[3], false);
			arr.setInt32(16, io[4], false);
			return out;
		};
		var // Calculate the hash digest as an array of 5 32bit integers.
			rawDigest = this.rawDigest = function (str) {
				var msgLen = str.byteLength || str.length || str.size || 0;
				initState(self$2.heap, self$2.padMaxChunkLen);
				var chunkOffset = 0,
					chunkLen = self$2.maxChunkLen;
				for (chunkOffset = 0; msgLen > chunkOffset + chunkLen; chunkOffset += chunkLen) {
					coreCall(str, chunkOffset, chunkLen, msgLen, false);
				}
				coreCall(str, chunkOffset, msgLen - chunkOffset, msgLen, true);
				return getRawDigest(self$2.heap, self$2.padMaxChunkLen);
			};
		// The digest and digestFrom* interface returns the hash digest
		// as a hex string.
		this.digest = this.digestFromString = this.digestFromBuffer = this.digestFromArrayBuffer = function (str) {
			return hex(rawDigest(str).buffer);
		};
		this.resetState = function () {
			initState(self$2.heap, self$2.padMaxChunkLen);
			return this;
		};
		this.append = function (chunk) {
			var chunkOffset = 0;
			var chunkLen = chunk.byteLength || chunk.length || chunk.size || 0;
			var turnOffset = self$2.offset % self$2.maxChunkLen;
			var inputLen;
			self$2.offset += chunkLen;
			while (chunkOffset < chunkLen) {
				inputLen = Math.min(chunkLen - chunkOffset, self$2.maxChunkLen - turnOffset);
				write(chunk, chunkOffset, inputLen, turnOffset);
				turnOffset += inputLen;
				chunkOffset += inputLen;
				if (turnOffset === self$2.maxChunkLen) {
					self$2.core.hash(self$2.maxChunkLen, self$2.padMaxChunkLen);
					turnOffset = 0;
				}
			}
			return this;
		};
		this.getState = function () {
			var turnOffset = self$2.offset % self$2.maxChunkLen;
			var heap;
			if (!turnOffset) {
				var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);
				heap = io.buffer.slice(io.byteOffset, io.byteOffset + io.byteLength);
			} else {
				heap = self$2.heap.slice(0);
			}
			return {
				offset: self$2.offset,
				heap: heap
			};
		};
		this.setState = function (state) {
			self$2.offset = state.offset;
			if (state.heap.byteLength === 20) {
				var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);
				io.set(new Int32Array(state.heap));
			} else {
				self$2.h32.set(new Int32Array(state.heap));
			}
			return this;
		};
		var rawEnd = this.rawEnd = function () {
			var msgLen = self$2.offset;
			var chunkLen = msgLen % self$2.maxChunkLen;
			var padChunkLen = padChunk(chunkLen, msgLen);
			self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);
			var result = getRawDigest(self$2.heap, self$2.padMaxChunkLen);
			initState(self$2.heap, self$2.padMaxChunkLen);
			return result;
		};
		this.end = function () {
			return hex(rawEnd().buffer);
		};
	};
	// The low-level RushCore module provides the heart of Rusha,
	// a high-speed sha1 implementation working on an Int32Array heap.
	// At first glance, the implementation seems complicated, however
	// with the SHA1 spec at hand, it is obvious this almost a textbook
	// implementation that has a few functions hand-inlined and a few loops
	// hand-unrolled.
	Rusha._core = function RushaCore(stdlib, foreign, heap) {
		'use asm';
		var H = new stdlib.Int32Array(heap);

		function hash(k, x) {
			// k in bytes
			k = k | 0;
			x = x | 0;
			var i = 0,
				j = 0,
				y0 = 0,
				z0 = 0,
				y1 = 0,
				z1 = 0,
				y2 = 0,
				z2 = 0,
				y3 = 0,
				z3 = 0,
				y4 = 0,
				z4 = 0,
				t0 = 0,
				t1 = 0;
			y0 = H[x + 320 >> 2] | 0;
			y1 = H[x + 324 >> 2] | 0;
			y2 = H[x + 328 >> 2] | 0;
			y3 = H[x + 332 >> 2] | 0;
			y4 = H[x + 336 >> 2] | 0;
			for (i = 0;
				(i | 0) < (k | 0); i = i + 64 | 0) {
				z0 = y0;
				z1 = y1;
				z2 = y2;
				z3 = y3;
				z4 = y4;
				for (j = 0;
					(j | 0) < 64; j = j + 4 | 0) {
					t1 = H[i + j >> 2] | 0;
					t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;
					y4 = y3;
					y3 = y2;
					y2 = y1 << 30 | y1 >>> 2;
					y1 = y0;
					y0 = t0;
					H[k + j >> 2] = t1;
				}
				for (j = k + 64 | 0;
					(j | 0) < (k + 80 | 0); j = j + 4 | 0) {
					t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
					t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;
					y4 = y3;
					y3 = y2;
					y2 = y1 << 30 | y1 >>> 2;
					y1 = y0;
					y0 = t0;
					H[j >> 2] = t1;
				}
				for (j = k + 80 | 0;
					(j | 0) < (k + 160 | 0); j = j + 4 | 0) {
					t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
					t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) + 1859775393 | 0) | 0;
					y4 = y3;
					y3 = y2;
					y2 = y1 << 30 | y1 >>> 2;
					y1 = y0;
					y0 = t0;
					H[j >> 2] = t1;
				}
				for (j = k + 160 | 0;
					(j | 0) < (k + 240 | 0); j = j + 4 | 0) {
					t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
					t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | y1 & y3 | y2 & y3) | 0) + ((t1 + y4 | 0) - 1894007588 | 0) | 0;
					y4 = y3;
					y3 = y2;
					y2 = y1 << 30 | y1 >>> 2;
					y1 = y0;
					y0 = t0;
					H[j >> 2] = t1;
				}
				for (j = k + 240 | 0;
					(j | 0) < (k + 320 | 0); j = j + 4 | 0) {
					t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
					t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) - 899497514 | 0) | 0;
					y4 = y3;
					y3 = y2;
					y2 = y1 << 30 | y1 >>> 2;
					y1 = y0;
					y0 = t0;
					H[j >> 2] = t1;
				}
				y0 = y0 + z0 | 0;
				y1 = y1 + z1 | 0;
				y2 = y2 + z2 | 0;
				y3 = y3 + z3 | 0;
				y4 = y4 + z4 | 0;
			}
			H[x + 320 >> 2] = y0;
			H[x + 324 >> 2] = y1;
			H[x + 328 >> 2] = y2;
			H[x + 332 >> 2] = y3;
			H[x + 336 >> 2] = y4;
		}
		return {
			hash: hash
		};
	};
	if ( // If we'e running in Node.JS, export a module.
		typeof module !== 'undefined') {
		module.exports = Rusha;
	} else if ( // If we're running in a DOM context, export
		// the Rusha object to toplevel.
		typeof window !== 'undefined') {
		window.Rusha = Rusha;
	}
	if ( // If we're running in a webworker, accept
		// messages containing a jobid and a buffer
		// or blob object, and return the hash result.
		typeof FileReaderSync !== 'undefined') {
		var reader = new FileReaderSync();
		var hashData = function hash(hasher, data, cb) {
			try {
				return cb(null, hasher.digest(data));
			} catch (e) {
				return cb(e);
			}
		};
		var hashFile = function hashArrayBuffer(hasher, readTotal, blockSize, file, cb) {
			var reader$2 = new self.FileReader();
			reader$2.onloadend = function onloadend() {
				var buffer = reader$2.result;
				readTotal += reader$2.result.byteLength;
				try {
					hasher.append(buffer);
				} catch (e) {
					cb(e);
					return;
				}
				if (readTotal < file.size) {
					hashFile(hasher, readTotal, blockSize, file, cb);
				} else {
					cb(null, hasher.end());
				}
			};
			reader$2.readAsArrayBuffer(file.slice(readTotal, readTotal + blockSize));
		};
		self.onmessage = function onMessage(event) {
			var data = event.data.data,
				file = event.data.file,
				id = event.data.id;
			if (typeof id === 'undefined') return;
			if (!file && !data) return;
			var blockSize = event.data.blockSize || 4 * 1024 * 1024;
			var hasher = new Rusha(blockSize);
			hasher.resetState();
			var done = function done$2(err, hash) {
				if (!err) {
					self.postMessage({
						id: id,
						hash: hash
					});
				} else {
					self.postMessage({
						id: id,
						error: err.name
					});
				}
			};
			if (data) hashData(hasher, data, done);
			if (file) hashFile(hasher, 0, blockSize, file, done);
		};
	}
}());

function nodeScriptReplace(node) {
	if (nodeScriptIs(node) === true) {
		node.parentNode.replaceChild(nodeScriptClone(node), node);
	} else {
		var i = 0;
		var children = node.childNodes;
		while (i < children.length) {
			nodeScriptReplace(children[i++]);
		}
	}
	return node;
}

function nodeScriptIs(node) {
	return node.tagName === 'SCRIPT';
}

function nodeScriptClone(node) {
	var script = document.createElement("script");
	script.text = node.innerHTML;
	for (var i = node.attributes.length - 1; i >= 0; i--) {
		script.setAttribute(node.attributes[i].name, node.attributes[i].value);
	}
	return script;
}
/**
 * please-wait
 * Display a nice loading screen while your app loads
 * @author Pathgather <tech@pathgather.com>
 * @copyright Pathgather 2015
 * @license MIT <http://opensource.org/licenses/mit-license.php>
 * @link https://github.com/Pathgather/please-wait
 * @module please-wait
 * @version 0.0.5
 */
(function (root, factory) {
	if (typeof exports === "object") {
		factory(exports);
	} else if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else {
		factory(root);
	}
})(this, function (exports) {
	var PleaseWait, addClass, animationEvent, animationSupport, domPrefixes, elm, key, pfx, pleaseWait, removeClass, transEndEventNames, transitionEvent, transitionSupport, val, _i, _len;
	elm = document.createElement('fakeelement');
	animationSupport = false;
	transitionSupport = false;
	animationEvent = 'animationend';
	transitionEvent = null;
	domPrefixes = 'Webkit Moz O ms'.split(' ');
	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	};
	for (key in transEndEventNames) {
		val = transEndEventNames[key];
		if (elm.style[key] != null) {
			transitionEvent = val;
			transitionSupport = true;
			break;
		}
	}
	if (elm.style.animationName != null) {
		animationSupport = true;
	}
	if (!animationSupport) {
		for (_i = 0, _len = domPrefixes.length; _i < _len; _i++) {
			pfx = domPrefixes[_i];
			if (elm.style["" + pfx + "AnimationName"] != null) {
				switch (pfx) {
					case 'Webkit':
						animationEvent = 'webkitAnimationEnd';
						break;
					case 'Moz':
						animationEvent = 'animationend';
						break;
					case 'O':
						animationEvent = 'oanimationend';
						break;
					case 'ms':
						animationEvent = 'MSAnimationEnd';
				}
				animationSupport = true;
				break;
			}
		}
	}
	addClass = function (classname, elem) {
		if (elem.classList) {
			return elem.classList.add(classname);
		} else {
			return elem.className += " " + classname;
		}
	};
	removeClass = function (classname, elem) {
		if (elem.classList) {
			return elem.classList.remove(classname);
		} else {
			return elem.className = elem.className.replace(classname, "").trim();
		}
	};
	PleaseWait = (function () {
		PleaseWait._defaultOptions = {
			backgroundColor: null,
			logo: null,
			loadingHtml: null,
			template: "<div class='pg-loading-inner'>\n  <div class='pg-loading-center-outer'>\n    <div class='pg-loading-center-middle'>\n      <h1 class='pg-loading-logo-header'>\n        <img class='pg-loading-logo'></img>\n      </h1>\n      <div class='pg-loading-html'>\n      </div>\n    </div>\n  </div>\n</div>",
			onLoadedCallback: null
		};

		function PleaseWait(options) {
			var defaultOptions, k, listener, v;
			defaultOptions = this.constructor._defaultOptions;
			this.options = {};
			this.loaded = false;
			this.finishing = false;
			for (k in defaultOptions) {
				v = defaultOptions[k];
				this.options[k] = options[k] != null ? options[k] : v;
			}
			this._loadingElem = document.createElement("div");
			this._loadingHtmlToDisplay = [];
			this._loadingElem.className = "pg-loading-screen";
			if (this.options.backgroundColor != null) {
				this._loadingElem.style.backgroundColor = this.options.backgroundColor;
			}
			this._loadingElem.innerHTML = this.options.template;
			this._loadingHtmlElem = this._loadingElem.getElementsByClassName("pg-loading-html")[0];
			if (this._loadingHtmlElem != null) {
				this._loadingHtmlElem.innerHTML = this.options.loadingHtml;
			}
			this._readyToShowLoadingHtml = false;
			this._logoElem = this._loadingElem.getElementsByClassName("pg-loading-logo")[0];
			if (this._logoElem != null) {
				this._logoElem.src = this.options.logo;
			}
			removeClass("pg-loaded", document.body);
			addClass("pg-loading", document.body);
			document.body.appendChild(this._loadingElem);
			addClass("pg-loading", this._loadingElem);
			this._onLoadedCallback = this.options.onLoadedCallback;
			listener = (function (_this) {
				return function (evt) {
					_this.loaded = true;
					_this._readyToShowLoadingHtml = true;
					addClass("pg-loaded", _this._loadingHtmlElem);
					if (animationSupport) {
						_this._loadingHtmlElem.removeEventListener(animationEvent, listener);
					}
					if (_this._loadingHtmlToDisplay.length > 0) {
						_this._changeLoadingHtml();
					}
					if (_this.finishing) {
						if (evt != null) {
							evt.stopPropagation();
						}
						return _this._finish();
					}
				};
			})(this);
			if (this._loadingHtmlElem != null) {
				if (animationSupport) {
					this._loadingHtmlElem.addEventListener(animationEvent, listener);
				} else {
					listener();
				}
				this._loadingHtmlListener = (function (_this) {
					return function () {
						_this._readyToShowLoadingHtml = true;
						removeClass("pg-loading", _this._loadingHtmlElem);
						if (transitionSupport) {
							_this._loadingHtmlElem.removeEventListener(transitionEvent, _this._loadingHtmlListener);
						}
						if (_this._loadingHtmlToDisplay.length > 0) {
							return _this._changeLoadingHtml();
						}
					};
				})(this);
				this._removingHtmlListener = (function (_this) {
					return function () {
						_this._loadingHtmlElem.innerHTML = _this._loadingHtmlToDisplay.shift();
						removeClass("pg-removing", _this._loadingHtmlElem);
						addClass("pg-loading", _this._loadingHtmlElem);
						if (transitionSupport) {
							_this._loadingHtmlElem.removeEventListener(transitionEvent, _this._removingHtmlListener);
							return _this._loadingHtmlElem.addEventListener(transitionEvent, _this._loadingHtmlListener);
						} else {
							return _this._loadingHtmlListener();
						}
					};
				})(this);
			}
		}
		PleaseWait.prototype.finish = function (immediately, onLoadedCallback) {
			if (immediately == null) {
				immediately = false;
			}
			if (window.document.hidden) {
				immediately = true;
			}
			this.finishing = true;
			if (onLoadedCallback != null) {
				this.updateOption('onLoadedCallback', onLoadedCallback);
			}
			if (this.loaded || immediately) {
				return this._finish(immediately);
			}
		};
		PleaseWait.prototype.updateOption = function (option, value) {
			switch (option) {
				case 'backgroundColor':
					return this._loadingElem.style.backgroundColor = value;
				case 'logo':
					return this._logoElem.src = value;
				case 'loadingHtml':
					return this.updateLoadingHtml(value);
				case 'onLoadedCallback':
					return this._onLoadedCallback = value;
				default:
					throw new Error("Unknown option '" + option + "'");
			}
		};
		PleaseWait.prototype.updateOptions = function (options) {
			var k, v, _results;
			if (options == null) {
				options = {};
			}
			_results = [];
			for (k in options) {
				v = options[k];
				_results.push(this.updateOption(k, v));
			}
			return _results;
		};
		PleaseWait.prototype.updateLoadingHtml = function (loadingHtml, immediately) {
			if (immediately == null) {
				immediately = false;
			}
			if (this._loadingHtmlElem == null) {
				throw new Error("The loading template does not have an element of class 'pg-loading-html'");
			}
			if (immediately) {
				this._loadingHtmlToDisplay = [loadingHtml];
				this._readyToShowLoadingHtml = true;
			} else {
				this._loadingHtmlToDisplay.push(loadingHtml);
			}
			if (this._readyToShowLoadingHtml) {
				return this._changeLoadingHtml();
			}
		};
		PleaseWait.prototype._changeLoadingHtml = function () {
			this._readyToShowLoadingHtml = false;
			this._loadingHtmlElem.removeEventListener(transitionEvent, this._loadingHtmlListener);
			this._loadingHtmlElem.removeEventListener(transitionEvent, this._removingHtmlListener);
			removeClass("pg-loading", this._loadingHtmlElem);
			removeClass("pg-removing", this._loadingHtmlElem);
			if (transitionSupport) {
				addClass("pg-removing", this._loadingHtmlElem);
				return this._loadingHtmlElem.addEventListener(transitionEvent, this._removingHtmlListener);
			} else {
				return this._removingHtmlListener();
			}
		};
		PleaseWait.prototype._finish = function (immediately) {
			var listener;
			if (immediately == null) {
				immediately = false;
			}
			if (this._loadingElem == null) {
				return;
			}
			addClass("pg-loaded", document.body);
			if (typeof this._onLoadedCallback === "function") {
				this._onLoadedCallback.apply(this);
			}
			listener = (function (_this) {
				return function () {
					document.body.removeChild(_this._loadingElem);
					removeClass("pg-loading", document.body);
					if (animationSupport) {
						_this._loadingElem.removeEventListener(animationEvent, listener);
					}
					return _this._loadingElem = null;
				};
			})(this);
			if (!immediately && animationSupport) {
				addClass("pg-loaded", this._loadingElem);
				return this._loadingElem.addEventListener(animationEvent, listener);
			} else {
				return listener();
			}
		};
		return PleaseWait;
	})();
	pleaseWait = function (options) {
		if (options == null) {
			options = {};
		}
		return new PleaseWait(options);
	};
	exports.pleaseWait = pleaseWait;
	return pleaseWait;
});
var localAddress;
if (navigator.platform == 'Win32') {
	localAddress = 'localhost';
} else {
	localAddress = '0.0.0.0';
}
window.onload = function () {
	document.code = document.getElementsByTagName("BODY")[0].innerHTML;
	var css = 'body.pg-loading{overflow:hidden}.pg-loading-screen{position:fixed;bottom:0;left:0;right:0;top:0;z-index:1000000;opacity:1;background-color:#FFF;-webkit-transition:background-color .4s ease-in-out 0s;-moz-transition:background-color .4s ease-in-out 0s;-ms-transition:background-color .4s ease-in-out 0s;-o-transition:background-color .4s ease-in-out 0s;transition:background-color .4s ease-in-out 0s}.pg-loading-screen.pg-loaded{opacity:0;-webkit-animation:pgAnimLoaded .5s cubic-bezier(.7,0,.3,1) both;-moz-animation:pgAnimLoaded .5s cubic-bezier(.7,0,.3,1) both;-ms-animation:pgAnimLoaded .5s cubic-bezier(.7,0,.3,1) both;-o-animation:pgAnimLoaded .5s cubic-bezier(.7,0,.3,1) both;animation:pgAnimLoaded .5s cubic-bezier(.7,0,.3,1) both}.pg-loading-screen.pg-loading .pg-loading-html,.pg-loading-screen.pg-loading .pg-loading-logo-header{opacity:1}.pg-loading-screen.pg-loading .pg-loading-html:not(.pg-loaded),.pg-loading-screen.pg-loading .pg-loading-logo-header{-webkit-animation:pgAnimLoading 1s cubic-bezier(.7,0,.3,1) both;-moz-animation:pgAnimLoading 1s cubic-bezier(.7,0,.3,1) both;-ms-animation:pgAnimLoading 1s cubic-bezier(.7,0,.3,1) both;-o-animation:pgAnimLoading 1s cubic-bezier(.7,0,.3,1) both;animation:pgAnimLoading 1s cubic-bezier(.7,0,.3,1) both}.pg-loading-screen.pg-loading .pg-loading-html:not(.pg-loaded){-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-ms-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.pg-loading-screen .pg-loading-inner{height:100%;width:100%;margin:0;padding:0;position:static}.pg-loading-screen .pg-loading-center-outer{width:100%;padding:0;display:table!important;height:100%;position:absolute;top:0;left:0;margin:0}.pg-loading-screen .pg-loading-center-middle{padding:0;vertical-align:middle;display:table-cell!important;margin:0;text-align:center}.pg-loading-screen .pg-loading-html,.pg-loading-screen .pg-loading-logo-header{width:100%;opacity:0}.pg-loading-screen .pg-loading-logo-header{text-align:center}.pg-loading-screen .pg-loading-logo-header img{display:inline-block!important}.pg-loading-screen .pg-loading-html{margin-top:90px}.pg-loading-screen .pg-loading-html.pg-loaded{-webkit-transition:opacity .5s cubic-bezier(.7,0,.3,1);-moz-transition:opacity .5s cubic-bezier(.7,0,.3,1);-ms-transition:opacity .5s cubic-bezier(.7,0,.3,1);-o-transition:opacity .5s cubic-bezier(.7,0,.3,1);transition:opacity .5s cubic-bezier(.7,0,.3,1)}.pg-loading-screen .pg-loading-html.pg-loaded.pg-removing{opacity:0}.pg-loading-screen .pg-loading-html.pg-loaded.pg-loading{opacity:1}@-webkit-keyframes pgAnimLoading{from{opacity:0}}@-moz-keyframes pgAnimLoading{from{opacity:0}}@-o-keyframes pgAnimLoading{from{opacity:0}}@-ms-keyframes pgAnimLoading{from{opacity:0}}@keyframes pgAnimLoading{from{opacity:0}}@-webkit-keyframes pgAnimLoaded{from{opacity:1}}@-moz-keyframes pgAnimLoaded{from{opacity:1}}@-o-keyframes pgAnimLoaded{from{opacity:1}}@-ms-keyframes pgAnimLoaded{from{opacity:1}}@keyframes pgAnimLoaded{from{opacity:1}}.spinner{color:#FFFFFF;margin:100px auto;width:40px;height:40px;position:relative;text-align:center;-webkit-animation:sk-rotate 2s infinite linear;animation:sk-rotate 2s infinite linear}.dot1,.dot2{color:#FFFFFF;width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:#FFFFFF;border-radius:100%;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.dot2{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-rotate{100%{-webkit-transform:rotate(360deg)}}@keyframes sk-rotate{100%{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);
	var logoURL;
	if (document.getElementsByTagName("EN-UK").length == 1) {
		logoURL = document.getElementsByTagName("EN-UK")[0].innerHTML.split("its logo is ").pop().split(",").shift();
	} else if (document.getElementsByTagName("EN-US").length == 1) {
		logoURL = document.getElementsByTagName("EN-US")[0].innerHTML.split("its logo is ").pop().split(",").shift();
	} else if (document.getElementsByTagName("FR-FR").length == 1) {
		logoURL = document.getElementsByTagName("FR-FR")[0].innerHTML.split("son logo est ").pop().split(",").shift();
	} else if (document.getElementsByTagName("AR-AR").length == 1) {
		logoURL = document.getElementsByTagName("AR-AR")[0].innerHTML.split("الشعار بتاعه ").pop().split(",").shift();
	} else if (document.getElementsByTagName("AR-EG").length == 1) {
		logoURL = document.getElementsByTagName("AR-EG")[0].innerHTML.split("اللوجو بتاعه ").pop().split(",").shift();
	} else if (document.getElementsByTagName("JP-JP").length == 1) {
		logoURL = document.getElementsByTagName("JP-JP")[0].innerHTML.split("ロゴ: '").pop().split(",").shift();
	}
	var loading_screen = pleaseWait({
		logo: logoURL,
		backgroundColor: '#f46d3b',
		loadingHtml: '<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>'
	});
	window.importLiveVersion = function () {
		document.getElementsByTagName("BODY")[0].innerHTML = document.code;
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jste-manager.herokuapp.com/framework-LiveVersion.min.html', true);

		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				console.clear();
				document.getElementsByTagName("BODY")[0].removeAttribute('class');
				document.getElementsByTagName("BODY")[0].removeAttribute('style');
				setTimeout(function () {
					document.getElementsByTagName("HEAD")[0].innerHTML += request.responseText;
					nodeScriptReplace(document.getElementsByTagName("HEAD")[0]);
				}, 1000);
			}
		};
		request.send();
	}
	var JsteInstallationCheckingRequest = new XMLHttpRequest();
	JsteInstallationCheckingRequest.open('GET', 'http://' + localAddress + ':5050/UI/index.html', true);
	JsteInstallationCheckingRequest.onreadystatechange = function () {
		if (JsteInstallationCheckingRequest.readyState === 4) {
			if (JsteInstallationCheckingRequest.status === 200) {
				var reader = new XMLHttpRequest();
				var checkFor = 'http://' + localAddress + ':5050/framework.min.html';
				reader.open('get', checkFor, true);
				reader.onreadystatechange = checkReadyState;

				function checkReadyState() {
					if (reader.readyState === 4) {
						if ((reader.status == 200)) {
							var request = new XMLHttpRequest();
							request.open('GET', 'http://' + localAddress + ':5050/framework.min.html', true);
							request.responseType = 'blob';
							request.onload = function () {
								var reader = new FileReader();
								reader.readAsText(request.response);
								reader.onload = function (e) {
									var file_result = e.target.result; // this == reader, get the loaded file "result"
									var sha1_hash = new Rusha().digestFromArrayBuffer(file_result);
									var currentFileHash = sha1_hash.toString();
									var genuineFileHash = '3bde7cac7e7dd27ccee3e260c4958d8fd34dbf5c';
									console.log(currentFileHash);
									if (currentFileHash === genuineFileHash) {
										var pageLoadingChecker = setInterval(function () {
											if (document.getElementsByTagName("CONTENTS").length > 0) {
												loading_screen.finish();
												clearInterval(pageLoadingChecker);
											}
										}, 1);
										setTimeout(function () {
											document.getElementsByTagName("HEAD")[0].innerHTML += file_result;
											nodeScriptReplace(document.getElementsByTagName("HEAD")[0]);
										}, 1000);
									} else {
										document.getElementsByTagName("BODY")[0].style.background = 'black';
										document.getElementsByTagName("BODY")[0].innerHTML = '<center><h1 style="color: white;">It seems that you have modified version of Jste :(</h1><button onclick="window.importLiveVersion();">Use the live version instead</button></center>';
									}
								};
							};
							request.send();
						}
					}
				}
				reader.send(null);
			} else {
				document.getElementsByTagName("BODY")[0].style.background = 'black';
				document.getElementsByTagName("BODY")[0].innerHTML = "<center><h1 style='color: white;'>It seems that Jste isn't installed on your device :(</h1><button onclick='window.importLiveVersion();'>Use the live version instead</button></center>";
			}
		}
	};
	JsteInstallationCheckingRequest.send();
};