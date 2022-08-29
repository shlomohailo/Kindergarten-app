

export default async function GardenFetch (endpoint){
    try{
    return await fetch("https://my-json-server.typicode.com/shlomohailo/kindergatren-json/"+endpoint).then(response=>response.json())
}
catch(error){
    console.log(error);
}
}