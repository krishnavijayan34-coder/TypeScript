export type HttpMethod="GET"|"POST"|"PUT"|"DELETE";

export type Resource="users"|"products"|"orders";

type BaseRoue<T extends HttpMethod,K extends Resource>=`${T}/${K}`;

type IdRoute<T extends HttpMethod,K extends Resource>=`${T}/${K}/:id`;

export type ApiRoute=|BaseRoue<HttpMethod,Resource>|IdRoute<HttpMethod,Resource>;