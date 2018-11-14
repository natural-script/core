/*!
 * Select Menu
 * https://project-jste.github.io/
 *
 * Copyright 2017 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-02-05
 */
import inheritStyle from 'core/styleInheritor'
import appendComponent from 'core/componentAppend'
import propSet from 'core/propSet'
import getTranslations from 'core/translationsGet'
import isAttributedByBeing from 'core/isAttributedByBeing'
import componentTemplate from './selectMenu.pug'
import * as declarations from 'core/declarations'
export default function (props) {
  props = inheritStyle(props, props.style)
  var name = props.name
  var title, items, isDisabled
  if (props.title) {
    title = props.title
  }
  if (props.items) {
    items = props.items.split(' &&& ')
  }
  isDisabled = isAttributedByBeing(props, 'disabled')
  let componentProps = {
    name,
    title,
    items,
    isDisabled
  }
  appendComponent(props.container, componentTemplate(componentProps))
  let ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      $(entry.target).find(`paper-listbox[slot="dropdown-content"]`).width($(entry.target).outerWidth())
    }
  })
  ro.observe($(`paper-dropdown-menu#${name}`).get(0))
  propSet(name + '', props)
}