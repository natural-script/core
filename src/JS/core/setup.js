import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { components } from "core/NSStore";
import Container from "components/container";
import Router from "components/router";
import * as declarations from "core/declarations";
export let router;
export default function setup(props) {
  let mode, logoURL, title;
  if (
    props.mode == undefined ||
    props.mode.findBestMatch(
      window.wordsTranslationsDB.Words["site"][declarations.langCode]
    ).rating > 0.8
  ) {
    mode = "site";
  } else if (
    props.mode.findBestMatch(
      window.wordsTranslationsDB.Words["app"][declarations.langCode]
    ).rating > 0.8
  ) {
    mode = "app";
  }
  declarations.setMode(mode);
  if (props.title) {
    title = props.title.replace(/[_]/g, " ").replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  declarations.setTitle(title);
  if (props.logo) {
    logoURL = props.logo;
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={logoURL} />
        <title>{title}</title>
      </Helmet>
      <Router 
        ref={ourComponent => {
          router = ourComponent;
        }} />
      <Container
        prestate={{
          name: "NSMAINCONTAINER",
          elevation: "0",
          scopes: [],
          parentFnParams: []
        }}
        ref={ourComponent => {
          components.dispatch({
            type: "ADD_COMPONENT",
            componentName: "NSMAINCONTAINER",
            component: ourComponent
          });
        }}
      />
    </>,
    rootElement
  );
}
