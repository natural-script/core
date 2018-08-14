/*!
 * Image
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import {
	setAnimation
} from 'core/animations.js'
import {
	verifyBLOB
} from 'core/BLOBGet.js'
import analyseImage from 'core/mediaCVAnalysis'
import {
	setBG
} from 'core/colors.js'
import {
	inheritStyle
} from 'core/styleInheritor.js'
import {
	appendComponent
} from 'core/componentAppend.js'
import {
	getSafe
} from 'core/getSafe.js'
import {
	elementSettingsAnalyze
} from 'core/elementSettingsAnalyze.js'
import {
	getFileSize
} from 'core/fileSizeGet.js'
import {
	getTranslations
} from 'core/translationsGet.js'
import {
	setDimension
} from 'measurements/Dimensions.js'
import {
	setDistance
} from 'measurements/Distances.js'
import {
	getUniqueID
} from 'core/uniqueID.js'
import componentTemplate from './image.pug'
import photoIcon from '../../Media/img/icons/photoA.svg'
import * as declarations from 'core/declarations'

function setImgProp(name, settings, isTitled) {
	if (isTitled) {
		$(`#${name}`).prop('isTitled', true)
	} else {
		$(`#${name}`).prop('isTitled', false)
	}
	$(`#${name}`).prop('type', 'img')
	if (elementSettingsAnalyze(settings, 'background')) {
		setBG(name, elementSettingsAnalyze(settings, 'background'))
	}
	if (elementSettingsAnalyze(settings, 'title')) {
		$(`#${name}`).attr('alt', elementSettingsAnalyze(settings, 'title'))
	}
	if (elementSettingsAnalyze(settings, 'width')) {
		setDimension(name, 'width', elementSettingsAnalyze(settings, 'width'))
	}
	if (elementSettingsAnalyze(settings, 'length')) {
		setDimension(name, 'length', elementSettingsAnalyze(settings, 'length'))
	}
	if (elementSettingsAnalyze(settings, 'distanceFromBottom')) {
		setDistance(`${name}_container`, 'bottom', elementSettingsAnalyze(settings, 'distanceFromBottom'))
	}
	if (elementSettingsAnalyze(settings, 'distanceFromTop')) {
		setDistance(`${name}_container`, 'top', elementSettingsAnalyze(settings, 'distanceFromTop'))
	}
	if (elementSettingsAnalyze(settings, 'distanceFromLeft')) {
		setDistance(`${name}_container`, 'left', elementSettingsAnalyze(settings, 'distanceFromLeft'))
	}
	if (elementSettingsAnalyze(settings, 'distanceFromRight')) {
		setDistance(`${name}_container`, 'right', elementSettingsAnalyze(settings, 'distanceFromRight'))
	}
	if (elementSettingsAnalyze(settings, 'animation')) {
		setAnimation(name, elementSettingsAnalyze(settings, 'animation'))
	}
	if (elementSettingsAnalyze(settings, 'transparency')) {
		$(`#${name}`).css('-webkit-filter', 'opacity(' + elementSettingsAnalyze(settings, 'transparency') + '%)')
	}
	if (elementSettingsAnalyze(settings, 'FX') == 'rain') {
		$(`#${name}`).attr('fx', 'rain')
	}
}
export default function(settings) {
	settings = inheritStyle(settings, elementSettingsAnalyze(settings, 'style'))
	let isIcon = false
	let isTitled = false
	let isTransparent = false
	let name = elementSettingsAnalyze(settings, 'name')
	let source = elementSettingsAnalyze(settings, 'source')
	let URLID = encodeURIComponent(source).replace(/\./g, '%2E')
	analyseImage(name, source)
	if (elementSettingsAnalyze(settings, 'attributes')) {
		var propertiesArray = elementSettingsAnalyze(settings, 'attributes').split(XRegExp(` ${getTranslations('and')} `, 'gmi'))
		for (var i = 0; i < propertiesArray.length; i++) {
			if (propertiesArray[i].findBestMatch(window.wordsTranslationsDB.Words['transparent'][declarations.langCode]).rating > 0.8) {
				isTransparent = true
			}
		}
	}
	if (getSafe(() => elementSettingsAnalyze(settings, 'type').findBestMatch(window.wordsTranslationsDB.Words['icon'][declarations.langCode]).rating > 0.8)) {
		getFileSize(source, function(size) {
			if (size.split(' kb')[0] < 100) {
				isIcon = true
			}
			let componentProp = {
				isIcon,
				isTransparent,
				name,
				source,
        URLID,
        photoIcon
			}
			appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
			if (window.isLive) {
				if (isIcon) {
					var uniqueID = getUniqueID()
					document[uniqueID + 'checker'] = setInterval(function() {
						if ($('#receiver').prop('ready')) {
							showImageA(name, URLID, source)
							clearInterval(document[uniqueID + 'checker'])
						}
					}, 1)
				} else {
					getFileSize(source, function(size) {
						$(`#image_${name}_mainButton`).html('<i class="material-icons">file_download</i> ' + size)
					})
					var uniqueID = getUniqueID()
					document[uniqueID + 'checker'] = setInterval(function() {
						if ($('#receiver').prop('ready')) {
							verifyBLOB(name, 'img', source, URLID)
							clearInterval(document[uniqueID + 'checker'])
						}
					}, 1)
				}
			} else {
				if (isIcon) {
					showImageA(name, URLID, source)
				} else {
					verifyBLOB(URLID, function(data) {
						if (data == 'not exist') {
							getFileSize(source, function(size) {
								$('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size)
							})
						} else if (data == 'exists') {
							showImageA(name, URLID, source)
						}
					})
				}
			}
			setImgProp(name, settings, isTitled)
		})
	} else {
    let title
		if (elementSettingsAnalyze(settings, 'title')) {
      isTitled = true
			title = elementSettingsAnalyze(settings, 'title')
		}
		let componentProp = {
			isIcon,
			title,
			isTransparent,
			name,
			source,
			URLID,
      photoIcon
		}
		appendComponent(elementSettingsAnalyze(settings, 'container'), componentTemplate(componentProp))
		if (window.isLive) {
			getFileSize(source, function(size) {
				$(`#image_${name}_mainButton`).html(`<i class="material-icons">file_download</i> ${size}`)
			})
			var uniqueID = getUniqueID()
			document[uniqueID + 'checker'] = setInterval(function() {
				if ($('#receiver').prop('ready')) {
					verifyBLOB(name, 'img', source, URLID)
					clearInterval(document[uniqueID + 'checker'])
				}
			}, 1)
		} else {
			verifyBLOB(URLID, function(data) {
				if (data == 'not exist') {
					getFileSize(source, function(size) {
						$('#image_' + name + '_mainButton').html('<i class="material-icons">file_download</i> ' + size)
					})
				} else if (data == 'exists') {
					showImageA(name, URLID, source)
				}
			})
		}
		setImgProp(name, settings, isTitled)
	}
}