import {
  CODE_BAD_REQUEST,
  CODE_UNAUTHORIZED,
  CODE_CONFLICT,
  CODE_INTERNAL_SERVER_ERR,
  MSG_WRONG_USER_DATA,
  MSG_USER_EXISTS,
  MSG_BAD_LOGIN,
  MSG_BAD_REGISTER,
  MSG_BAD_UPDATE,
  MSG_SERVER_ERR,
  MSG_DEFAULT_ERR,
} from './constants';

export default function handleErr(err, setMessage) {
  const pathname = window.location.pathname;

  switch (err) {
    case CODE_BAD_REQUEST:
      if (pathname === '/signup') {
        setMessage(MSG_BAD_REGISTER);
      } else if (pathname === '/signin') {
        setMessage(MSG_BAD_LOGIN);
      } else {
        setMessage(MSG_BAD_UPDATE);
      }
      break;
    case CODE_UNAUTHORIZED:
      setMessage(MSG_WRONG_USER_DATA);
      break;
    case CODE_CONFLICT:
      setMessage(MSG_USER_EXISTS);
      break;
    case CODE_INTERNAL_SERVER_ERR:
      setMessage(MSG_SERVER_ERR);
      break;
    default:
      setMessage(MSG_DEFAULT_ERR);
  }

  setTimeout(() => {
    setMessage('');
  }, 3000);
}
