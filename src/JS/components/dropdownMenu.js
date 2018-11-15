/*!
 * Dropdown Menu
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import inheritStyle from 'core/styleInheritor'
import propSet from 'core/propSet'
import getTranslations from 'core/translationsGet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './dropdownMenu.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  let name, items, emitterHTML, isInGrid, isDisabled
  name = props.name
  if (props.items) {
    items = props.items.split(' &&& ')
  }
  isDisabled = isAttributedByBeing(props, 'disabled')
  if (props.emitter) {
    var emitter = props.emitter
    if ($('body').find(`#${emitter}`).hasClass('col')) {
      isInGrid = true
    }
    emitterHTML = $('body').find(`#${emitter}`).get(0).outerHTML
    let componentProps = {
      name,
      items,
      emitterHTML,
      isInGrid,
      isDisabled
    }
    $('body').find(`#${emitter}`).replaceWith(componentTemplate(componentProps))
  }
  let ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      $(entry.target).parent().parent().find(`paper-listbox[slot="dropdown-content"]`).width($(entry.target).outerWidth())
    }
  })
  ro.observe($('body').find(`#${name}`).parent().find(`*[slot="dropdown-trigger"]`).children().get(0))
  propSet(name, props)
}