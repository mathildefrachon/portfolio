"use strict"
window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
    //BUTTONS CATEGORIES
    document
        .querySelectorAll(".cat_link")
        .forEach(element => element.addEventListener("click", clickedFilter));
    // CLICK ON A PROJECT
    const gallery = document.querySelector("#gallery");
    gallery.addEventListener("click", clickedPost);
}

function clickedPost(event) {

    const postClicked = event.target;
    console.log(postClicked);
    let index = postClicked.dataset.projectId;
    console.log(index);
    let url = "subpage.html?index=" + index;
    postClicked.parentElement.setAttribute("href", url);
    // returnArray(currentArray);
}

// DISPLAY LIST 

function displayList(listOfProjects) {

    let template = document.querySelector("#projects_template").content;
    currentArray = listOfProjects;
    //CLEAR THE TABLE
    clearList();
    // CLONE A H2 FOR EACH STUDENT
    listOfProjects.forEach(oneProject => {
        let clone = template.cloneNode(true);
        // FILL IN THE CLONE
        clone.querySelector("h1").textContent = oneProject.name;
        clone.querySelector(".imgVert").setAttribute("src", oneProject.image);
        // LINK POST
        // let index = listOfProjects.indexOf(oneProject);
        // clone.querySelector('#subpage_link').addEventListener("click", function () {
        // displayProject(listOfProjects, index);
        // clone.querySelector('#subpage_link').href = "subpage.html?index=" + index;
        // })
        // GIVE AN ID = to the index 
        clone.querySelector(".imgVert").dataset.projectId = listOfProjects.indexOf(oneProject);
        // console.log(projectId);
        // APPEND THE CLONE TO THE LIST
        gallery.appendChild(clone);
    });
}

// CLEAR THE LIST 

function clearList() {
    document.querySelector("#gallery").innerHTML = "";
}


// FILTER BY CATEGORY 

function clickedFilter(event) {
    console.log("clickedFilter");
    const filter = this.dataset.filter;
    console.log(event);
    event.preventDefault(); // PREVENT FROM GOIN BACK TO BEGINNING AFTER FILTERING

    currentArray = filterByCat(filter);
    console.log(currentArray);
    displayArray(currentArray);

}


