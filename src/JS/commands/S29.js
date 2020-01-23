import parseList from "parsers/list";
import { appFirebase } from "core/initFirebase";
import * as declarations from "core/declarations";
let firebase = appFirebase;
export default function({ data, scopes, parentFnParams }) {
  console.log(data);
  data = parseList(data, scopes, parentFnParams);
  console.log(data);
  const email =
    data[
      window.wordsTranslationsDB.Words["email"][
        declarations.langCode
      ][0]
    ];
  const password =
    data[
      window.wordsTranslationsDB.Words["password"][
        declarations.langCode
      ][0]
    ];
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
