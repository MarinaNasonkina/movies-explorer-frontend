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

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._getResponseData);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: this._credentials,
    }).then(this._getResponseData);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: this._credentials,
    }).then(this._getResponseData);
  }

  editUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    }).then(this._getResponseData);
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
