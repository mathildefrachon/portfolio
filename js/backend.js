"use strict"

const json_link = "https://portfolio-backend.mathildefrachon.com/wp-json/wp/v2/projects?_embed";

// CREATE OBJECT PROJECT

const objProject = {
    name: "",
    image: "",
    category: "",
}

let project = "";
const projectsArray = [];
let currentArray = [];


// FETCHING

window.addEventListener("DOMContentLoaded", init);

function init() {
    // fetch JSON
    fetch(json_link)
        .then(e => e.json())
        .then(data => showData(data));
}

function showData(data) {
    // build the list
    data.forEach(dataProject => {
        console.log(dataProject);
        project = Object.create(objProject);
        project.name = dataProject.title.rendered;
        project.image = dataProject._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
        project.category = dataProject.categories;
        projectsArray.push(project);
    });

    // this was a try to force the filtered array being current array
    //doesnt work because current array set to empty when reload
    if (currentArray.length === 0) {
        currentArray = projectsArray;
        console.log("this array is main array" + currentArray);
    }
    else {
        currentArray = currentArray;
        console.log("this array is filtered array" + currentArray);
    }

    // display the list
    displayArray(currentArray);
}

// SEE IF WE ARE ON THE SUBPAGE OR NOT TO DISPLAY THE LIST OR THE PROJECT
function displayArray(currentArray) {

    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    let urlIndex = urlParams.get("index");
    console.log(urlIndex);

    if (urlIndex === null) {
        displayList(currentArray);
        console.log("we are on gallery");
    }
    else {
        displayProject(currentArray);
        console.log("we are on subpage");
    }
}

// FILTER BY CATEGORIES
function filterByCat(filter) {
    currentArray = projectsArray.filter(byCat);

    function byCat(project) {
        if (project.category.toString() === filter.toString()) {
            return true;
        } else {
            return false;
        }
    }
    console.log(currentArray + "is array after filtering");
    return currentArray;
}
