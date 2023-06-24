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

(() => {
  // const rights = document.querySelectorAll(".right");
  // rights.forEach((items) => {
  //   animationTrigger(items, "fromRight");
  // });
  animationUse(".right", "fromRight");

  // const lefts = document.querySelectorAll(".left");
  // lefts.forEach((items) => {
  //   animationTrigger(items, "fromLeft");
  // });
  animationUse(".left", "fromLeft");

  // const appears = document.querySelectorAll(".appear");
  // appears.forEach((items) => {
  //   animationTrigger(items, "pop", "expand");
  // });
  animationUse(".appear", "pop", "expand");

  // const rises = document.querySelectorAll(".up");
  // rises.forEach((items) => {
  //   animationTrigger(items, "rise");
  // });
  animationUse(".up", "rise");

  // const shivers = document.querySelectorAll(".shiver");
  // shivers.forEach((items) => {
  //   animationTrigger(items, "shake");
  // });
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
