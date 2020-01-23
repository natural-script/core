import { appFirebase } from "core/initFirebase";
let firebase = appFirebase;
export default function({ scopes, parentFnParams }) {
  return firebase.auth().signOut();
}
