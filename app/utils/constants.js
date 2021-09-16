export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const PROD_DOMAIN = 'https://api.loopedincode.com/klife'
export const NO_IMAGE = 'https://klife.s3.ap-south-1.amazonaws.com/important/No+Image.png';
export const STATUS_CODES = {
  SUCCESS : 200,
  LOGIN_EXPIRED : 401,
}
export const APP_ROUTES = {
  HOME : '/',
  LOGIN : '/login',
  EDITOR : '/editor',
  LOGOUT : '/logout',
  REGISTER : '/register',
  FORGOT_PASSWORD : '/forgotPassword',
}
export const FORM_ERROR_MESSAGES = {
  REQUIRED_MESSAGE: 'Required!',
  EMPTY_MESSAGE: 'Please select a value',
  INVALID_EMAIL_ADDRESS: 'Please enter a valid email address',
  PASSWORD_CRITERIA: 'Password should be of atleast 8 characters',
  PASSWORD_UNMATCH: "Passwords don't match",
  INVALID_NAME: 'Please enter a valid full name',
  INVALID_NUMBER : 'please enter valid contact number',
  INVALID_INPUT :'please enter a valid input',
  INVALID_DOMAIN : 'please enter a valid domain',
};
export const BRAND_TITLE = 'Kids Code'
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};
export const API_CONSTANTS = {
  init: null,
  loading: 0,
  success: 1,
  error: -1,
};
export const LOGIN_FORM_CONSTANTS = {
  USERNAME: 'username',
  PASSWORD: 'password'
};
export const REGISTER_FORM_CONSTANTS = {
  FIRSTNAME: 'firstname',
  LASTNAME: 'lastname',
  EMAIL: 'email',
  PHONE: 'phone',
  PASSWORD: 'password',
  CONFIRM_PASS: 'confirmPass',
};
