import "./style.css";
import { layout } from "./dom.js";

layout();

function animationTrigger(section, animationName, expand = null) {
  const options = {
    root: null,
    threshold: 0.4,
    rootMargin: "25px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (
        entry.target.className.includes("aboutMeContainer") &&
        entry.isIntersecting
      ) {
        entry.target.classList.add(expand);
      } else if (
        entry.target.className.includes("aboutMeContainer") &&
        !entry.isIntersecting
      ) {
        entry.target.classList.remove(expand);
      }
      if (entry.isIntersecting) {
        entry.target.classList.add(animationName);
      } else {
        entry.target.classList.remove(animationName);
      }
    });
  }, options);

  observer.observe(section);
}

function animationUse(classname, animation1, animation2 = null) {
  const rights = document.querySelectorAll(classname);
  rights.forEach((items) => {
    animationTrigger(items, animation1, animation2);
  });
}
//loop can be used here
(() => {
  animationUse(".right", "fromRight");
  animationUse(".left", "fromLeft");
  animationUse(".appear", "pop", "expand");
  animationUse(".up", "rise");
  animationUse(".shiver", "shake");
})();

// const name = "fromRight";
// animationTrigger(document.querySelector(".AMTitle"), name);
(function openWebsite() {
  const proj1 = document.querySelector(".proj1");
  proj1.onclick = () => {
    window.open("https://emman-pip.github.io/weatherAppv2/");
  };
})();

function changeColorOnScroll(toObserve, element, color) {
  const options = {
    root: null,
    threshold: 0.4,
    rootMargin: "25px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      console.log("lol");
      if (entry.isIntersecting) {
        element.style.backgroundColor = color;
      }
    });
  }, options);
  observer.observe(document.querySelector(toObserve));
}

function useColorChangeOnScroll(observe, color) {
  // const toObserve = document.querySelector(observe);
  const toChange = document.querySelector(".socmedContainer");
  changeColorOnScroll(observe, toChange, color);
}

useColorChangeOnScroll(".backgroundSea", "white");
useColorChangeOnScroll(".hundredVHcontainer", "#47817f");
useColorChangeOnScroll(".slideContainer", "#00c9c8");
useColorChangeOnScroll("form", "bffcf9");

// changeColorOnScroll(
//   ".backgroundSea",
//   document.querySelector(".socmedContainer"),
//   "black"
// );
