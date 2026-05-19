export type HttpMethod="GET"|"POST"|"PUT"|"DELETE";

export type Resource="users"|"products"|"orders";

type BaseRoute<T extends HttpMethod,K extends Resource>=`${T}/${K}`;

type IdRoute<T extends HttpMethod,K extends Resource>=`${T}/${K}/:id`;

export type ApiRoute=|BaseRoute<HttpMethod,Resource>|IdRoute<HttpMethod,Resource>;