"use strict";

const screenWelcome = document.querySelector("#welcome_screen");
const screenAbout = document.querySelector("#about_screen");
const screenProject = document.querySelector("#project_screen");

const aboutButton = document.querySelector("#a_about");
const projectButton = document.querySelector("#a_projects");

const imgArray = document.querySelectorAll(".imgwrapper");

const right = "right";
const left = "left";

aboutButton.addEventListener("click", function () {
  checkScreen(right);
});
projectButton.addEventListener("click", function () {
  checkScreen(left);
});

function checkScreen(e) {
  console.log(e);
  if (e === "right") {
    // CLICK ON ABOUT
    console.log("click right");
    screenAbout.classList.remove("none");

    if (screenWelcome.classList.contains("here")) {
      // ARE ON WELCOME
      console.log("was on welcome");
      notHere(screenWelcome);
      screenWelcome.classList.add("moveleftWelcome");
      screenAbout.classList.add("moveleftWelcome");
    } else if (screenProject.classList.contains("here")) {
      // ARE ON PROJECTS
      console.log("was on projects");
      notHere(screenProject);
      clear(screenAbout, screenProject);
      screenProject.style.left = "0";
      screenProject.classList.add("moveleft");
      screenAbout.style.left = "100vw";
      screenAbout.classList.add("moveleft");
      // setTimeout(function () {
      //   imgArray.forEach(img => {
      //     img.classList.remove("imgArriving");
      //     img.classList.add("imgdisappear");
      //   });
      // }, 100);
      // screenAbout.classList.add("colorChange");
    }
    here(screenAbout);
    console.log("in about");

    screenAbout.addEventListener("animationend", function () {
      if (screenAbout.classList.contains("here")) {
        none(screenWelcome, screenProject);
      }
    });
  } else if (e === "left") {
    // CLICK ON PROJECT
    console.log("clicked left");
    screenProject.classList.remove("none");
    if (screenWelcome.classList.contains("here")) {
      // ARE ON WELCOME
      console.log("was on welcome");
      screenProject.classList.add("moverightWelcome");
      screenWelcome.classList.add("moverightWelcome");
      notHere(screenWelcome);
      // imgArrive();
      // callImg();
    } else if (screenAbout.classList.contains("here")) {
      // ARE ON ABOUT
      console.log("was on about");
      screenProject.style.left = "-100vw";
      screenAbout.style.left = "0";
      clear(screenProject, screenAbout);
      screenProject.classList.add("moveright");
      screenAbout.classList.add("moveright");
      notHere(screenAbout);
      // imgArrive();
      // callImg();
    }
    here(screenProject);
    console.log("project here");
    screenProject.addEventListener("animationend", function () {
      if (screenProject.classList.contains("here")) {
        none(screenWelcome, screenAbout);
      }
    });
  }
}

function here(screen) {
  screen.classList.add("here");
}

function notHere(screen) {
  screen.classList.remove("here");
}

function none(screen1, screen2) {
  console.log("deleting rest of screens");
  screen1.classList.add("none");
  screen2.classList.add("none");
  console.log(screen1);
}

function clear(screen1, screen2) {
  screen1.classList.remove("moveleft");
  screen1.classList.remove("moverightWelcome");
  screen2.classList.remove("moveleft");
  screen2.classList.remove("moverightWelcome");
  screen1.classList.remove("moveleftWelcome");
  screen2.classList.remove("moveleftWelcome");
  screen1.classList.remove("moveright");
  screen2.classList.remove("moveright");
}

// function imgArrive() {
//   imgArray.forEach(img => {
//     img.classList.remove("imgdisappear");
//     img.classList.add("imgArriving");
//   });
// }

// function imgArrive() {
//   TweenMax.staggerTo(".imgwrapper", 2, { translateX: -95, opacity: 1 }, 0.3);
// }

// function imgDisappear() {
//   imgArray.forEach(img => {
//     img.classList.remove("imgArriving");
//     img.classList.add("imgdisappear");
//   });
// }

// function callImg() {
//   imgArray.forEach(img => {
//     img.classList.remove("imgdisappear");
//   });
//   let i = 12;
//   setInterval(function() {
//     imgArray[i].classList.add("imgArriving");
//     i--;
//     if (i < 0) {
//       i = imgArray.length;
//       console.log(i);
//       imgArray[i].classList.add("imgArriving");
//       i--;
//     }
//   }, 100);
// }
