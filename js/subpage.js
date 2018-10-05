"use strict"

// get the index of the project from the url
let urlParams = new URLSearchParams(window.location.search);
let index = urlParams.get("index");
console.log(index);
let image = document.querySelector("img");




function displayProject(currentArray) {

    console.log(currentArray);
    const myProject = currentArray.find(p => p.id == index);

    console.log(myProject);
    console.log(myProject.category);
    document.querySelector("h1").textContent = myProject.name;

    image.src = myProject.image;


}

document.querySelector("#next").addEventListener("click", nextProject);

document.querySelector("#previous").addEventListener("click", previousProject);

function nextProject() {
    console.log("next");
    index++;
    displayProject(currentArray);
    let newUrl = "subpage.html?index=" + index++;
    console.log(newUrl);
    document.querySelector("#next").setAttribute("href", newUrl);
}

function previousProject() {
    console.log("next");
    index--;
    displayProject(currentArray);
    let newUrl = "subpage.html?index=" + index--;
    console.log(newUrl);
    document.querySelector("#previous").setAttribute("href", newUrl);
}




