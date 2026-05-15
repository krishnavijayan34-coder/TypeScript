function printArray<T>(arr:T[]):void{
    console.log(arr);
}

printArray<number>([1,2,3]);

printArray<string>(["Rose","Jasmine","Lilly"]);

printArray<boolean>([true,false]);

export {};