import { ButtonClasses } from "@mui/material";
import { colors } from "@mui/material";

//Template Literal Types
type Color="red" | "green" |"blue";
type HexColor<T extends Color>=`#${string}`;

let blueColor:HexColor<"blue">="#0000FF";
console.log(blueColor);

//example2
type ButtonClass=`btn-${string}`;
let btn1: ButtonClass ="btn-primary";
let btn2: ButtonClass ="btn-danger";
console.log(btn1);
console.log(btn2);

//Index signature labels
//keys must starts with dynamic_

type DynamicObject={
    [key:`dynamic_${string}`]:string;
};

let user:DynamicObject={
    dynamic_name:"krishna",
    dynamic_city:"Trivandrum",
};
console.log(user);

//example2
type ApiResponse={
    [key:`api_${string}`]:number;
};
let response:ApiResponse={
    api_users:100,
    api_posts:50,
};
console.log(response);
