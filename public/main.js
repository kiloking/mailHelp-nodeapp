


const startFetch = ()=>{
  fetch('/api')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
}