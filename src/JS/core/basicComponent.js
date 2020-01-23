import React, { Component } from "react";
import { preservedData } from "core/NSStore";
import deepEql from "deep-eql";
import mapObject, { ContinueDeepper } from "core/mapObject";
import filterObject, { EscapeFilteration } from "core/filterObject";
import mergeAdvanced from "object-merge-advanced";
import clone from "clone";
import blackOrWhite from "blackorwhite";
import anime from "animejs";
import parseStyleValue from "parsers/styleValue";
import * as declarations from "core/declarations";
import * as Grid from "react-grid-system";
export default class extends Component {
  constructor(props) {
    super(props);
    const componentPreservedData = preservedData.getState()[this.props.name];
    if (componentPreservedData) {
      this.state = clone(componentPreservedData.state);
      this.internalData = clone(componentPreservedData.internalData);
      preservedData.dispatch({
        type: "DEL_PRESERVED_DATA",
        componentName: this.props.name
      });
      this.isRestored = true;
    } else {
      const prestate = parseStringValue(
        filterObject(
          clone(this.props.prestate),
          ({ key }) => key !== "children"
        ),
        false,
        clone(this.props.prestate).scopes,
        clone(this.props.prestate).parentFnParams
      );
      const commonState = { children: [] };
      this.state = mergeAdvanced(commonState, prestate);
      this.internalData = {
        dynamicDataPaths: [],
        events: {
          sys: {},
          custom: {}
        },
        styles: { natural: {}, parsed: {} }
      };
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (deepEql(nextProps, this.props) && deepEql(nextState, this.state)) {
      return false;
    } else {
      return true;
    }
  }
  componentWillUnmount() {
    const internalData = this.internalData;
    const state = this.state;
    preservedData.dispatch({
      type: "PRESERVE_DATA",
      componentName: this.state.name,
      data: { state: state, internalData: internalData }
    });
  }
  updateProps = (patch = {}) => {
    patch = parseStringValue(
      patch,
      false,
      this.state.scopes,
      this.state.parentFnParams
    );
    this.setState(prevState => {
      return mergeAdvanced(prevState, patch);
    });
    if (patch.routes) {
      this.forceUpdate();
    }
  };
  animate = animationProps =>
    anime({
      targets: this.myRef.current,
      ...animationProps
    });
  getState = () => {
    const dynamicStateData = parseStringValue(
      filterObject(clone(this.state), ({ key }) => key !== "children"),
      true,
      clone(this.state).scopes,
      clone(this.state).parentFnParams
    );
    const children = this.state.children;
    this.internalData.dynamicDataPaths = dynamicStateData.dynamicDataPaths;
    return mergeAdvanced(dynamicStateData.result, { children });
  };
  addChild = child => {
    this.setState(prevState => {
      if (prevState.isGrid) {
        const originalChild = clone(child);
        child = (
          <Grid.Col key={child.key} style={{ margin: "1em 0" }}>
            {originalChild}
          </Grid.Col>
        );
      }
      const prevChildren = prevState.children;
      const nextChildren = prevChildren.concat([child]);
      const nextState = { ...prevState, ...{ children: nextChildren } };
      return nextState;
    });
  };
  removeChild = childName => {
    this.setState(prevState => {
      for (const [key, value] of prevState.state.children) {
        if (key == childName) {
          prevState.state.children.splice(key, 1);
        }
      }
      return prevState;
    });
  };
  attatchHandler = (id, fn, isSys) => {
    if (isSys) {
      this.internalData.events.sys[id] = this.internalData.events.sys[id]
        ? this.internalData.events.sys[id]
        : [];
      this.internalData.events.sys[id].push(fn);
    } else {
      this.internalData.events.custom[id] = this.internalData.events.custom[id]
        ? this.internalData.events.custom[id]
        : [];
      this.internalData.events.custom[id].push(fn);
    }
  };
  executeHandler = event => {
    const supportedEvents = {
      click: "E1",
      mouseenter: "E2",
      mouseleave: "E3",
      mouseout: "E4",
      mousemove: "E5",
      mouseup: "E6",
      dblclick: "E7",
      contextmenu: "E8",
      keypress: "E9",
      keydown: "E10",
      change: "E11"
    };
    const sysHandlers =
      this.internalData.events.sys[supportedEvents[event.type]] || [];
    const customHandlers =
      this.internalData.events.custom[supportedEvents[event.type]] || [];
    const handlers = sysHandlers.concat(customHandlers);
    for (const handler of handlers) {
      handler(event);
    }
  };
  getStyles(state = this.getState()) {
    const natural2cssStylingProps = {
      distanceFromBottom: "bottom",
      distanceFromTop: "top",
      distanceFromLeft: "left",
      distanceFromRight: "right",
      width: "width",
      length: "height",
      position: "position",
      transparency: "opacity",
      background: "backgroundColor",
      backgroundColor: "backgroundColor",
      backgroundImage: "backgroundImage",
      fontColor: "color",
      fontStyle: "fontFamily",
      fontThickness: "fontWeight",
      shape: "clipPath",
      fontSize: "fontSize"
    };
    const supportedStylingProps = Object.keys(natural2cssStylingProps);
    const prevStyles = this.internalData.styles;
    let nextStyles = { parsed: {}, natural: {} };
    nextStyles.natural = filterObject(clone(state), ({ value, key, path }) => {
      if (supportedStylingProps.includes(key)) {
        return EscapeFilteration;
      } else {
        return supportedStylingProps.includes(key);
      }
    });
    if (!deepEql(prevStyles.natural, nextStyles.natural)) {
      nextStyles.parsed = mapObject(
        clone(nextStyles.natural),
        ({ key, value }) => {
          if (typeof value === "object") {
            if (supportedStylingProps.includes(key)) {
              return parseStyleValue(key, value);
            } else {
              return ContinueDeepper;
            }
          } else {
            return parseStyleValue(key, value);
          }
        },
        { autoDigger: false }
      );
      if (
        nextStyles.parsed.backgroundColor &&
        !Object.keys(nextStyles.parsed).includes("color")
      ) {
        const hexcolor = nextStyles.parsed.backgroundColor;
        nextStyles.parsed.color = blackOrWhite.get(hexcolor);
      }
      if (nextStyles.parsed.landscape) {
        if (
          nextStyles.parsed.landscape.backgroundColor &&
          !Object.keys(nextStyles.parsed.landscape).includes("color")
        ) {
          const hexcolor = nextStyles.parsed.landscape.backgroundColor;
          nextStyles.parsed.landscape.color = blackOrWhite.get(hexcolor);
        }
      }
      if (nextStyles.parsed.portrait) {
        if (
          nextStyles.parsed.portrait.backgroundColor &&
          !Object.keys(nextStyles.parsed.portrait).includes("color")
        ) {
          const hexcolor = nextStyles.parsed.portrait.backgroundColor;
          nextStyles.parsed.portrait.color = blackOrWhite.get(hexcolor);
        }
      }
      if (this.isAttributedByBeing("centered")) {
        nextStyles.parsed.margin = "0 auto";
        if (nextStyles.parsed.landscape) {
          nextStyles.parsed.landscape.margin = "0 auto";
        }
        if (nextStyles.parsed.portrait) {
          nextStyles.parsed.portrait.margin = "0 auto";
        }
      }
      mapObject(
        nextStyles.parsed,
        ({ key }) => {
          if (key === "landscape") {
            return "@media screen and (orientation: landscape)";
          } else if (key === "portrait") {
            return "@media screen and (orientation: portrait)";
          } else if (natural2cssStylingProps[key]) {
            return natural2cssStylingProps[key];
          } else {
            return key;
          }
        },
        {
          byKey: true
        }
      );
      this.internalData.styles = clone(nextStyles);
      return nextStyles.parsed;
    } else {
      return prevStyles.parsed;
    }
  }
  filterStyles = (styles, opts = {}) => {
    let { includes = [], excludes = [], presets = [] } = opts;
    const natural2cssStylingProps = {
      distanceFromBottom: "bottom",
      distanceFromTop: "top",
      distanceFromLeft: "left",
      distanceFromRight: "right",
      width: "width",
      length: "height",
      position: "position",
      transparency: "opacity",
      background: "backgroundColor",
      backgroundColor: "backgroundColor",
      backgroundImage: "backgroundImage",
      fontColor: "color",
      fontStyle: "fontFamily",
      fontThickness: "fontWeight",
      shape: "clipPath",
      fontSize: "fontSize"
    };
    const presetsStore = { video: [], image: [] };
    for (const preset of presets) {
      includes = includes.concat(presetsStore[natural2cssStylingProps[preset]]);
    }
    return filterObject(clone(styles), ({ key }) => {
      const cssPropName = natural2cssStylingProps[key];
      let shouldNotFiltered;
      if (includes) {
        shouldNotFiltered = includes.includes(cssPropName);
      } else if (excludes) {
        shouldNotFiltered = !excludes.includes(cssPropName);
      }
      if (shouldNotFiltered) {
        return EscapeFilteration;
      } else {
        return shouldNotFiltered;
      }
    });
  };
  isAttributedByBeing(requiredAttr) {
    if (this.state.attributes) {
      const attrs = this.state.attributes.split(
        XRegExp(` ${getTranslations("and")} `, "gmi")
      );
      for (const attr of attrs) {
        if (
          attr.findBestMatch(
            window.wordsTranslationsDB.Words[requiredAttr][
              declarations.langCode
            ]
          ).rating > 0.9
        ) {
          return true;
        }
      }
    }
    return false;
  }
  getEvents({ includedEvents = [], excludedEvents = [] } = {}) {
    const supportedEvents = [
      "onClick",
      "onMouseEnter",
      "onMouseLeave",
      "onMouseOut",
      "onMouseMove",
      "onDoubleClick",
      "onContextMenu",
      "onMouseUp",
      "onKeyDown",
      "onKeyPress",
      "onChange"
    ];
    const requestedEvents = supportedEvents.filter(
      event => includedEvents.includes(event) || !excludedEvents.includes(event)
    );
    return requestedEvents.reduce((allEvents, event) => {
      allEvents[event] = this.executeHandler;
      return allEvents;
    }, {});
  }
  render() {
    return <this.thisComponent />;
  }
}
