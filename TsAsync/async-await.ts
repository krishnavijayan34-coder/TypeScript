const fetchMessage=():Promise<string>=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hlo from Async Await");
        },2000);
    });
};
async function displayMessage(){
    const message = await fetchMessage();
    console.log(message);
}
displayMessage();