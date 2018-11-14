const initComponent = require.context('components', true, /\.js$/)
import parseStringValue from 'parsers/stringValue'
import propSet from 'core/propSet'
import cloneComponent from 'core/cloneComponent'
import getTranslations from 'core/translationsGet'
export default function manageComponent(data, props = {}, scopes, parentFnParams) {
  if (data.mode) {
    props.mode = data.mode
  }
  if (data.attributes && data.withAttributes) {
    props.attributes = `${data.attributes} and ${data.withAttributes}`
  } else if (data.attributes && data.withoutAttributes) {
    props.attributes = `${data.attributes} and ${data.withoutAttributes}`
  } else if (data.withAttributes) {
    props.attributes = `with ${data.withAttributes}`
  } else if (data.withoutAttributes) {
    props.attributes = `without ${data.withoutAttributes}`
  } else if (data.attributes) {
    props.attributes = `${data.attributes}`
  }
  for (const prop in props) {
    if (prop == 'text') {
      props[prop] = parseStringValue(props[prop], true, scopes, parentFnParams)
    } else if (props[prop] && props[prop] != undefined) {
      props[prop] = parseStringValue(props[prop], false, scopes, parentFnParams)
    }
  }
  props = {
    scopes,
    parentFnParams,
    ...props
  }
  if (data.id == 'CI1') {
    initComponent(`./setup.js`).default(props);
  } else if (data.id == 'CI2') {
    initComponent(`./${getTranslations(data.component, true)}.js`).default(props);
  } else if (data.id == 'CI3') {
    propSet(data.name, props)
  } else if (data.id == 'CI4') {
    cloneComponent(data.clonedElement, props, false)
  } else if (data.id == 'CI5') {
    cloneComponent(data.clonedElement, props, true)
  }
}