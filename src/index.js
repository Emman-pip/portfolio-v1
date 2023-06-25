import "./style.css";
import { layout } from "./dom.js";
import linkedin from "./linkedinLogo.png";
import ig from "./igLogo.png";
import github from "./githubLogo.png";
import feedback from "./comment-quote.svg";
layout();

function animationTrigger(section, animationName, expand = null) {
  const options = {
    root: null,
    threshold: 0,
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

function changeColorOnScroll(toObserve, element, color, icon) {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.innerHTML = "";
        element.style.backgroundColor = color;
        element.appendChild(icon);
      } else if (!entry.isIntersecting) {
        element.removeChild(icon);
      }
    });
  }, options);
  observer.observe(document.querySelector(toObserve));
}

function useColorChangeOnScroll(observe, color, icon) {
  // const toObserve = document.querySelector(observe);
  const toChange = document.querySelector(".socmedContainer");
  changeColorOnScroll(observe, toChange, color, icon);
}

function socmedContent(icon, message, animation = null) {
  const container = document.createElement("div");
  container.classList.add("socmedContent");
  const socIcon = new Image();
  socIcon.classList.add("socicons");
  socIcon.src = icon;
  socIcon.onclick = () => {
    if (icon == linkedin) {
      window.open("https://www.linkedin.com/in/emmanuel-undefined-997042259/");
    } else if (icon == ig) {
      window.open("https://www.instagram.com/em.n71/");
    } else if (icon == github) {
      window.open("https://github.com/Emman-pip");
    }
  };
  container.appendChild(socIcon);
  const text = document.createElement("div");
  text.classList.add("soctext");
  text.textContent = message;
  container.appendChild(text);

  return [container][0];
}

useColorChangeOnScroll(
  ".backgroundSea",
  "white",
  socmedContent(linkedin, "see my LinkedIn!")
);
useColorChangeOnScroll(
  ".hundredVHcontainer",
  "#47817f",
  socmedContent(github, "<- GitHub!!!")
);
useColorChangeOnScroll(
  ".slideContainer",
  "#00c9c8",
  socmedContent(ig, "I also have Insta :)")
);
useColorChangeOnScroll(
  "form",
  "white",
  // "bffcf9",
  socmedContent(feedback, "You could send feedbacks too.")
);

// changeColorOnScroll(
//   ".backgroundSea",
//   document.querySelector(".socmedContainer"),
//   "black"
// );

// slider
function sliderFunc() {
  const projects = document.querySelectorAll(".projects");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  projects.forEach((image, index) => {
    image.style.left = `${index * 100}%`;
  });

  function slider(sign = "") {
    projects.forEach((image, index) => {
      image.style.transform += `translate(${sign}${80}vw)`;
    });
  }
  (function sliderButtons() {
    let i = 0;
    next.onclick = () => {
      if (i == 2) {
        return;
      }
      slider("-");
      i++;
    };
    prev.onclick = () => {
      if (i == 0) {
        return;
      }
      slider();
      i--;
    };
  })();
}

sliderFunc();
