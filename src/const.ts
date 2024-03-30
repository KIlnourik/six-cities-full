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
