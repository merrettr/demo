import fetch from "isomorphic-fetch";
import { normalize } from 'normalizr';
import { put } from "redux-saga/effects";

const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Call the API
 * @param endpoint The url to invoke
 * @param method The HTTP method to use
 * @param body The body to include with the request
 * @param schema The normalize schema to use on the response json
 * @returns {*}
 */
function* callApi({ endpoint, method, schema }) {
  const response = yield fetch(
    `${BASE_URL}${endpoint}`, {
      method: method || 'GET'
    }
  );

  const text = yield response.text();

  if (!response.ok) {
    throw text
      ? JSON.parse(text)
      : {status: response.status, message: response.statusText};
  }

  if (!text) {
    return null;
  }
  if (schema) {
    return normalize(JSON.parse(text), schema);
  }

  return JSON.parse(text);
}

/**
 * Make a call to the api
 *
 * @param requestType Action to dispatch when the request is sent
 * @param successType Action to dispatch when the request succeeds
 * @param errorType Action to dispatch when the request fails
 * @param request The request information
 * @param action The original action
 */
export default function*([ requestType, successType, errorType ], request, action) {
  try {
    yield put({type: requestType, payload: action});

    yield put({
      type: successType,
      payload: action,
      response: yield* callApi({
        ...request
      }),
    });
  } catch (e) {
    yield put({
      type: errorType,
      payload: action,
      error: e.message || e.error || e || 'An unknown error occurred',
    });
  }
}