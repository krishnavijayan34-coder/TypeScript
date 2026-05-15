function display<T>(value:T):void{
    console.log(value);
}
display<string>("Welcome");
display<number>(500);
display<boolean>(true);
export {};