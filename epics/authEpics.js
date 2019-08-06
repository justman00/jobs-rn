import { ofType } from "redux-observable";
import * as Facebook from "expo-facebook";
import { mergeMap, catchError } from "rxjs/operators";
import { AsyncStorage } from "react-native";

import {
  FACEBOOK_LOGIN_ATTEMPT,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from "../actions/types";

const AUTH_KEY = "fb_token";

export function authEpic(action$, state$) {
  return action$.pipe(
    ofType(FACEBOOK_LOGIN_ATTEMPT),
    mergeMap(async action => {
      const token = await AsyncStorage.getItem(AUTH_KEY);

      if (!token) {
        throw new Error("No token found!");
      }

      // instantly authenticate our user
      return { type: FACEBOOK_LOGIN_SUCCESS, payload: token };
    }),
    catchError(async err => {
      // start the logging process
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "499122980837665",
        {
          permissions: ["public_profile"]
        }
      );

      if (type === "cancel") {
        return { type: FACEBOOK_LOGIN_FAIL };
      } else {
        AsyncStorage.setItem(AUTH_KEY, JSON.stringify(token));
        return { type: FACEBOOK_LOGIN_SUCCESS, payload: token };
      }
    })
  );

  // return action$.pipe(
  //   ofType(SET_CONFIG),
  //   withLatestFrom(state$.pipe(pluck("config"))),
  //   tap(([action, config]) => {
  //     localStorage.setItem(CACHE_KEY, JSON.stringify(config));
  //   }),
  //   ignoreElements()
  // );
}

// export function hydrateEpic() {
//   const maybeConfig = localStorage.getItem(CACHE_KEY);
//   if (typeof maybeConfig === "string") {
//     try {
//       const parsed = JSON.parse(maybeConfig);
//       return of(setConfig(parsed));
//     } catch (e) {
//       return EMPTY;
//     }
//   }
//   return EMPTY;
// }
