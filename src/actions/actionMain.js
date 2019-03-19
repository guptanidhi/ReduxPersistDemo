/*  
  actionMain.js

  Collection of all sample actions in the app

*/

import axios from "./axios";
import { APPEND_USER } from "./actionTypes";

export function appendUser(user) {
  return {
    type: APPEND_USER,
    payload: user
  };
}