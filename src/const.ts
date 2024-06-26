export enum AppRoute {
  Login = '/login',
  Favourites = '/favourites',
  Room = '/offer/:id',
  Root = '/',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const HOUSING_TYPES = ['apartment', 'room', 'house', 'hotel'];
export const MAX_IMAGE_COUNT = 6;

export enum Rating {
  Min = 0,
  Max = 5
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
