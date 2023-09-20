import { MOVIES_URL } from './constants';

function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(res.status);
}
