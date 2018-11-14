/*!
 * Properties Setter
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-07
 */
import {
	setFontColour,
	setBG
} from 'core/colors'
import setAnimation from 'core/animations'
import arli from 'arli'
import getTranslations from 'core/translationsGet'
import setDimension from 'measurements/Dimensions'
import setDistance from 'measurements/Distances'
import setFontSize from 'measurements/fontSize'
import isAttributedByBeing from 'core/isAttributedByBeing'
import nanoid from 'nanoid'
import {
	requestBLOB
} from 'core/BLOBGet'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import * as declarations from 'core/declarations'
export default function propSet(elementName, props) {
	let elementContainerName
	if ($(`#${elementName}`).parent().parent().attr('id') == `${elementName}_container`) {
		elementContainerName = `${elementName}_container`
	}
	if (props.text) {
		$(`#${elementName}`).html((/^(ar|arz)$/.test(declarations.langCode)) ? arli.arabize(props.text) : props.text)
	}
	if (props.distanceFromBottom) {
		if (elementContainerName) {
			setDistance(elementContainerName, 'bottom', props.distanceFromBottom)
		} else {
			setDistance(elementName, 'bottom', props.distanceFromBottom)
		}
	}
	if (props.distanceFromTop) {
		if (elementContainerName) {
			setDistance(elementContainerName, 'top', props.distanceFromTop)
		} else {
			setDistance(elementName, 'top', props.distanceFromTop)
		}
	}
	if (props.distanceFromLeft) {
		if (elementContainerName) {
			setDistance(elementContainerName, 'left', props.distanceFromLeft)
		} else {
			setDistance(elementName, 'left', props.distanceFromLeft)
		}
	}
	if (props.distanceFromRight) {
		if (elementContainerName) {
			setDistance(elementContainerName, 'right', props.distanceFromRight)
		} else {
			setDistance(elementName, 'right', props.distanceFromRight)
		}
	}
	if (props.width) {
		setDimension(elementName, 'width', props.width)
	}
	if (props.length) {
		setDimension(elementName, 'length', props.length)
	}
	if (props.animation) {
		if (elementContainerName) {
			setAnimation(elementContainerName, props.animation)
		} else {
			setAnimation(elementName, props.animation)
		}
	}
	if (props.transparency) {
		$(`#${elementName}`).css('-webkit-filter', 'opacity(' + props.transparency + '%)')
	}
	if (props.attributes) {
		if (props.attributes.search(XRegExp('' + getTranslations('parallax') + '', 'gmi')) > -1) {
			if (props.background) {
				if (window.isLive) {
					$(`#${elementName}`).css({
						'background': 'url(' + props.background + ') no-repeat',
						'background-size': 'cover'
					})
					if (declarations.deviceForm == 'desktop') {
						$(`#${elementName}`).addClass('parallax')
					}
				} else {
					requestBLOB(props.background, encodeURIComponent(props.background).replace(/\./g, '%2E'), function (BLOBURL) {
						$(`#${elementName}`).css({
							'background': 'url(' + BLOBURL + ') no-repeat',
							'background-size': 'cover'
						})
						if (declarations.deviceForm == 'desktop') {
							$(`#${elementName}`).addClass('parallax')
						}
						setTimeout(function () {
							window.URL.revokeObjectURL(BLOBURL)
						}, 10000)
					})
				}
			}
		} else {
			if (props.background) {
				setBG(elementName, props.background)
			}
		}
	} else {
		if (props.background) {
			setBG(elementName, props.background)
		}
	}
	if (props.fontColor) {
		setFontColour(elementName, props.fontColor)
	}
	if (props.fontStyle) {
		$(`#${elementName}`).css('font-style', props.fontStyle)
	}
	if (props.fontThickness) {
		if (props.fontThickness.findBestMatch(window.wordsTranslationsDB.Words['thick'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).css('font-weight', 'bold')
		} else {
			$(`#${elementName}`).css('font-weight', props.fontThickness)
		}
	}
	if (props.shape) {
		if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['triangle'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('triangle')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['trapezoid'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('trapezoid')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['parallelogram'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('parallelogram')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['rhombus'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('rhombus')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['pentagon'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('pentagon')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['hexagon'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('hexagon')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['heptagon'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('heptagon')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['octagon'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('octagon')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['decagon'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('decagon')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['circle'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('circle')
		} else if (props.shape.findBestMatch(window.wordsTranslationsDB.Words['ellipse'][declarations.langCode]).rating > 0.8) {
			$(`#${elementName}`).addClass('ellipse')
		}
	}
	if (props.fontSize) {
		setFontSize(elementName, props.fontSize)
	}
	if ($('#' + props.container + '').hasClass('row') == true) {
		$(`#${elementName}`).addClass('col')
	}
	if (props.position) {
		$(`#${elementName}`).css('position', props.position)
	} else {
		$(`#${elementName}`).css('position', 'relative')
	}
	if (isAttributedByBeing(props, 'scrollable')) {
		document[nanoid(10)] = new PerfectScrollbar(`#${elementName}`)
	}
}