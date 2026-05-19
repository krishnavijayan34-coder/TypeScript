type HttpMethod="GET"|"POST"|"PUT"|"DELETE";
type Resource="users"|"products"|"orders";

type ApiRoute=`${HttpMethod} /${Resource}`;
type ApiRouteWithId=|`${HttpMethod}/${Resource}`
                    |`${HttpMethod}/${Resource}/${number}`;

const route1: ApiRouteWithId = "GET/users";

console.log(route1);
const route2: ApiRouteWithId = "POST/products";
const route3: ApiRouteWithId = "GET/users/1";
const route4: ApiRouteWithId = "DELETE/orders/10";
