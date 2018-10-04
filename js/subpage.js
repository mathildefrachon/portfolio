"use strict"

// get the index of the project from the url
let urlParams = new URLSearchParams(window.location.search);
let index = urlParams.get("index");
console.log(index);


function displayProject(currentArray) {

    console.log(currentArray[index].name);
    document.querySelector("h1").textContent = currentArray[index].name;
}




