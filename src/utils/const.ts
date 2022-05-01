export const enum AppRoute {
  Root = '/',
  Login = '/login',
  Contacts = '/contacts',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export const enum APIRoute {
  Users = '/users',
}

export enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
  Rejected = 'Rejected',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export const enum NameSpace {
  App = 'App',
  User = 'User',
}
