function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
}
const student={
    rollNo:1,
    name:"Krishna",
    course:"Applied Electronics & Instrumentation"
};
console.log("Student Name:",getProperty(student,"name"));
console.log("Student Course:",getProperty(student,"course"));

export {};