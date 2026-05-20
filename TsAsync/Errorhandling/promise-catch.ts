function fetchMessage():Promise<string>{
    return Promise.reject("Network failed");
}
fetchMessage()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
export default{};