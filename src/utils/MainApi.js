import { BASE_URL } from './constants';

class MainApi {
  constructor({ baseUrl, credentials, headers }) {
    this._baseUrl = baseUrl;
    this._credentials = credentials;
    this._headers = headers;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
