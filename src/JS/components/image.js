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
	verifyBLOB
} from 'core/BLOBGet'
import analyseImage from 'core/mediaCVAnalysis'
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import getFileSize from 'core/fileSizeGet'
import nanoid from 'nanoid'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './image.pug'
import photoIcon from '../../Media/img/icons/photoA.svg'
import * as declarations from 'core/declarations'

function setImgProp(name, props) {
	$('body').find(`#${name}`).prop('type', 'img')
	if (props.title) {
		$('body').find(`#${name}`).attr('alt', props.title)
	}
	if (props.FX == 'rain') {
		$('body').find(`#${name}`).attr('fx', 'rain')
	}
}
export default function (props) {
	if (!props.type) {
		props.type = 'normal'
	}
	props = inheritStyle(props, props.style)
	let isIcon = false
	let isTitled = false
	let isTransparent = false
	let name = props.name
	let source = props.source
	let URLID = encodeURIComponent(source).replace(/\./g, '%2E')
	analyseImage(name, source)
	isTransparent = isAttributedByBeing(props, 'transparent')
	let containerProps = {
		name,
		isContainerRequired: true
	}
	appendComponent(props.container, componentTemplate(containerProps))
	if (props.type.findBestMatch(window.wordsTranslationsDB.Words['icon'][declarations.langCode]).rating > 0.8) {
		getFileSize(source, function (size) {
			if (size.split(' kb')[0] < 100) {
				isIcon = true
			}
			let componentProps = {
				isIcon,
				name,
				source,
				URLID,
				photoIcon,
				isTitled
			}
			appendComponent(`${props.name}_container`, componentTemplate(componentProps))
			if (window.isLive) {
				if (isIcon) {
					var uniqueID = nanoid(10)
					document[uniqueID + 'checker'] = setInterval(function () {
						if ($('#receiver').prop('ready')) {
							showImageA(name, URLID, source)
							clearInterval(document[uniqueID + 'checker'])
						}
					}, 1)
				} else {
					getFileSize(source, function (size) {
						$('body').find(`#image_${name}_mainButton`).html('<i class="material-icons">file_download</i> ' + size)
					})
					var uniqueID = nanoid(10)
					document[uniqueID + 'checker'] = setInterval(function () {
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
					verifyBLOB(URLID, function (data) {
						if (data == 'not exist') {
							getFileSize(source, function (size) {
								$('body').find(`#image_${name}_mainButton`).html('<i class="material-icons">file_download</i> ' + size)
							})
						} else if (data == 'exists') {
							showImageA(name, URLID, source)
						}
					})
				}
			}
			propSet(name, props)
			setImgProp(name, props)
		})
	} else {
		let title
		if (props.title) {
			isTitled = true
			title = props.title
		}
		let componentProps = {
			isIcon,
			title,
			name,
			source,
			URLID,
			photoIcon,
			isTitled
		}
		appendComponent(`${props.name}_container`, componentTemplate(componentProps))
		if (window.isLive) {
			getFileSize(source, function (size) {
				$('body').find(`#image_${name}_mainButton`).html(`<i class="material-icons">file_download</i> ${size}`)
			})
			var uniqueID = nanoid(10)
			document[uniqueID + 'checker'] = setInterval(function () {
				if ($('#receiver').prop('ready')) {
					verifyBLOB(name, 'img', source, URLID)
					clearInterval(document[uniqueID + 'checker'])
				}
			}, 1)
		} else {
			verifyBLOB(URLID, function (data) {
				if (data == 'not exist') {
					getFileSize(source, function (size) {
						$('body').find(`#image_${name}_mainButton`).html('<i class="material-icons">file_download</i> ' + size)
					})
				} else if (data == 'exists') {
					showImageA(name, URLID, source)
				}
			})
		}
		propSet(name, props)
		setImgProp(name, props)
	}
}