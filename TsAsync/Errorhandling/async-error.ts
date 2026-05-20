async function fetchData():Promise<string>{
    throw new Error("Server is down");
    
}
async function displayData() {
    try{
        const data=await fetchData();
        console.log(data);
    } catch (error){
        if(error instanceof Error){
            console.log(error.message);
        }
    }
}
displayData();
export default{};