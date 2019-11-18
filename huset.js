window.addEventListener("DOMContentLoaded", getData);

function getData(){
    console.log("getData")
    fetch("https://michaljaworski.dk/wordpress/wp-json/wp/v2/Event")
    .then(res=>res.json())
    .then(handleData)
}
function handleData(myData){
    console.log(myData);
}