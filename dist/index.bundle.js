"use strict";
(self["webpackChunkportfolio_v1"] = self["webpackChunkportfolio_v1"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rajdhani-Bold.ttf */ "./src/fonts/Rajdhani-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rajdhani-Light.ttf */ "./src/fonts/Rajdhani-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rajdhani-Regular.ttf */ "./src/fonts/Rajdhani-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Rajdhani-Medium.ttf */ "./src/fonts/Rajdhani-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./pexels-myburgh-roux-4816921.jpg */ "./src/pexels-myburgh-roux-4816921.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  --main-color: #000000;
  --white-shade: white;
  --main-accent: #00c9c8;
  --light-accent: #bffcf9;
  --dark-accent: #47817f;
  cursor: default;
  user-select: none;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  max-width: 100vw;
}
body {
  background: linear-gradient(
    to bottom,
    var(--main-color),
    var(--main-color),
    var(--white-shade)
  );
  /* background-color: white; */
  min-height: 300vh;
}

/* scroll bar */

::-webkit-scrollbar-track {
  width: 2vw;
  background-color: var(--light-accent);
}

::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
}

::-webkit-scrollbar {
  width: 10px;
}

/* top bar */

.topBar {
  position: sticky;
  height: 6rem;
  display: flex;
  top: 0rem;
  display: flex;
  align-items: center;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  mix-blend-mode: difference;
}

.nameContainer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.circle {
  height: 0.7rem;
  width: 0.7rem;
  background-color: var(--light-accent);
  border-radius: 100rem;
}
@font-face {
  font-family: Raj-bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.name {
  font-family: Raj-bold;
  font-size: 1.5rem;
  color: var(--white-shade);
  /* mix-blend-mode: difference; */
}

@font-face {
  font-family: Raj-light;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.vSmallText {
  font-family: Raj-light;
  font-size: 0.7rem;
}

.socmedContainer {
  mix-blend-mode: normal;
  background-color: var(--white-shade);
  height: 100%;
  width: 30vw;
  border-bottom-left-radius: 3rem;
  display: fixed;
}

.firstPart {
  height: 120vh;
  display: flex;
}

.backgroundSea {
  width: 1600px;
  height: auto;
  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);
  -webkit-mask-image: linear-gradient(
    to top,
    transparent,
    rgba(0, 0, 0, 0.4),
    transparent
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

@font-face {
  font-family: Raj-regular;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
  font-family: Raj-medium;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.greet {
  /* animation-name: slide-from-left;
  animation-duration: 2s; */
  position: absolute;
  top: 30vh;
  left: 10vw;
  font-family: Raj-medium;
  font-size: 6rem;
  color: var(--white-shade);
  letter-spacing: 1rem;
  height: fit-content;
}

.intro {
  letter-spacing: 0.7rem;
  cursor: default;
  font-family: Raj-regular;
  font-size: 2rem;
  /* border-bottom: 3px solid var(--dark-accent); */
}

.aboutmeButton {
  z-index: 0;
  cursor: pointer;
  font-family: Raj-light;
  font-size: 1rem;
  /* animation-name: slide-from-left;
  animation-duration: 2s; */
  color: var(--white-shade);
  position: absolute;
  top: 60vh;
  left: 10vw;
  border: 1px solid var(--white-shade);
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgba(36, 36, 36, 0);
  backdrop-filter: blur(2rem);
  width: fit-content;
  height: fit-content;
  text-decoration: none;
}
.aboutmeButton:hover {
  background-color: rgba(36, 36, 36, 0.815);
}
.aboutmeButton:active {
  background-color: var(--white-shade);
}

.intro2 {
  position: absolute;
  bottom: 20vh;
  right: 10vw;
  color: var(--white-shade);
  font-family: Raj-light;
  font-size: 1.5rem;
  /* animation-name: slide-from-right;
  animation-duration: 2s; */
}

/* page break */

.pagebreak {
  z-index: 10;
  height: 0.3rem;
  background-color: var(--white-shade);
  margin-left: 30vw;
  margin-right: 30vw;
  border-radius: 100rem;
  opacity: 40%;
}

/* second part */

.aboutMeBackground {
  height: 100vh;
  background: linear-gradient(
    to bottom,
    var(--main-color),
    var(--dark-accent) /* var(--light-accent) */
  );
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  scroll-behavior: smooth;
  /* padding-top: 8rem; */
  position: relative;
}

.hundredVHcontainer {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.slit {
  z-index: 0;
  height: 70vh;
  width: 100vw;
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  /* transform: rotate(10deg); */
  --linear-g: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0),
    rgba(0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  /* background-image: var(--linear-g); */
  mask-image: var(--linear-g);
  -webkit-mask-image: var(--linear-g);
}

.aboutMeContainer {
  border: 0.2rem solid;
  border-color: var(--main-color);
  padding: 2rem;
  border-radius: 1rem;
  height: fit-content;
  background-color: #00000015;
  backdrop-filter: blur(1rem);
  width: fit-content;
  height: fit-content;
  width: 80vw;
}

@keyframes widen {
  0% {
    transform: scaleX(0.1);
  }
  100% {
    transform: scaleX(1);
  }
}

.expand {
  animation-name: widen;
  animation-duration: 1.5s;
}

.aboutMeContainer::after {
  content: "I am not the one in the picture :)";
  font-family: Raj-light;
  color: white;
  font-size: 0.8rem;
  transition: font-size 0.5s;
}

.aboutMeContainer:hover::after {
  font-size: 1rem;
}

.AMTitle {
  /* animation-name: slide-from-right;
    animation-duration: 2s; */
  color: var(--white-shade);
  font-family: Raj-bold;
  font-size: 5rem;
  transition: color 1s 10s;
}

.AMTitle:hover {
  color: var(--main-accent);
}

.aboutMeParag {
  width: 40vw;
  font-family: Raj-light;
  font-size: 1.5rem;
  color: var(--white-shade);
}

span {
  font-family: Raj-regular;
  transition: color 1.5s;
}

span:hover {
  color: var(--main-accent);
  font-weight: 900;
}

/* ////////////////////extra/////////////////////////////// */

@keyframes slide-from-right {
  0% {
    opacity: 0%;
    transform: translateX(-10vh);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
}

.fromRight {
  animation-name: slide-from-right;
  animation-duration: 3s;
  /* opacity: 100%; */
}

@keyframes slide-from-left {
  0% {
    opacity: 0%;
    transform: translateX(10vh);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
}

.fromLeft {
  animation-name: slide-from-left;
  animation-duration: 3s;
}

.pop {
}

.appear {
  transition: opacity 3s;
  opacity: 0%;
}

.pop {
  opacity: 100%;
}

/* /////////////////////works/////////////////// */

.worksTitle {
  text-align: center;
  height: fit-content;
  font-family: Raj-bold;
  color: white;
  background-color: var(--dark-accent);
  font-size: 4rem;
}

.works {
  background: linear-gradient(
    to bottom,
    var(--dark-accent),
    var(--main-accent)
  );
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slideContainer {
  height: auto;
  width: 80vw;
  /* overflow: hidden; */
}

/* .prev,
  .next {
    font-family: Raj-bold;
    font-size: 5rem;
    color: var(--white-shade);
    background-color: #00000051;
    cursor: pointer;
  } */

.projects {
  border-radius: 2rem;
  outline: 1rem solid black;
  width: 80vw;
  margin-right: auto;
  margin-left: auto;
  float: left;
  /* transition: transform 2s;
  transform: translateX(0vw); */
  cursor: pointer;
  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.411);
}

.proj1Mobile {
  z-index: 2;
  height: 30vh;
  width: auto;
  position: absolute;
  left: 5vh;
  bottom: 0;
  outline: 0.5rem solid gray;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem black;
}

.buttonContainer {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.buttonContainer > a {
  height: 2rem;
  width: 2rem;
  background-color: var(--dark-accent);
  border-radius: 10rem;
  text-decoration: none;
  font-family: Raj-bold;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonContainer > a:active {
  background-color: var(--main-accent);
}

.projects:first-child::after {
  content: "1";
  margin-top: -10vw;
  color: black;
}

.slider {
  width: 100%;
  height: 100%;

  display: flex;
  scroll-behavior: smooth;
  margin-top: 10vh;
  margin-bottom: 3vh;

  transition: transform 2s;
  -webkit-transition: transform 2s;
  -moz-transition: transform 2s;
  -o-transition: transform 2s;
  transform: translateX(0vw);
}

#span1:target ~ .slider {
  transform: translateX(-80vw);
}

#span2:target ~ .slider {
  transform: translateX(-80vw);
}

#span2:target ~ .slider {
  transform: translateX(-80vw);
}

#span3:target ~ .slider {
  transform: translateX(-160vw);
}

/* /////////////////email////////////////////// */
.emailSection {
  background: linear-gradient(
    to bottom,
    var(--main-accent),
    var(--light-accent),
    var(--white-shade)
  );
  height: 100vh;
  text-align: center;
}

.emailSection100 {
  display: flex;
  text-align: center;
  /* background-color: black; */
  height: 100vh;
  justify-content: center;
  align-items: center;
}

form {
  display: inline;
  padding: 1rem;
}

.fieldset {
  display: flex;
  margin: 5rem;
  padding: 1rem;
  flex-direction: column;
  border-radius: 1rem;
  font-family: Raj-bold;
  font-size: 3rem;
  color: var(--main-color);
  background-color: rgba(255, 255, 255, 0.478);
  gap: 1rem;
  backdrop-filter: blur(1rem);
  mix-blend-mode: luminosity;
}

.glowingmail {
  font-size: 2rem;
  font-family: Raj-regular;
}

input,
textarea {
  font-family: Raj-regular;
  font-size: 1rem;
  padding: 0.5rem;
}

.submitButton {
  font-family: Raj-medium;
  font-size: 1.5rem;
  color: black;
  height: 2rem;
}

/* //////////////more/////////////////// */

.more {
  background: var(--white-shade);
  height: 15vh;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-around;
}

.additional {
  /* background-color: var(--main-accent); */
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-family: Raj-light;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
}

.secondAdditional {
  align-items: end;
}

/* .nameContainer2 {
  letter-spacing: 0.7rem;
  cursor: default;
  font-family: Raj-regular;
  font-size: 2rem;
} */

.CPnumber {
  /* letter-spacing: 0.7rem; */
  cursor: pointer;
  user-select: all;
  /* font-family: Raj-regular; */
  /* font-size: 2rem; */
  height: fit-content;
  overflow: visible;
  text-align: center;
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}

.smallIcon {
  height: 2rem;
  width: 2rem;
}

/* .CPnumber:after {
  content: "";
  position: absolute;

  height: 3px;
  width: 10%;
  background-color: var(--main-accent);
  left: 0;
  bottom: 0px;
  transition: 0.3s;
}

.CPnumber:hover:after {
  width: 100%;
} */

/* ///////////////////////////////////// */

@keyframes rise {
  from {
    transform: translateY(10rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.rise {
  animation-name: rise;
  animation-duration: 3s;
}

@keyframes shake {
  0% {
    transform: scale(-0.5, 1);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

.shiver {
  opacity: 0;
}

.shake {
  opacity: 1;
  animation-name: shake;
  animation-duration: 3s;
}
.underline::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: var(--light-accent);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  max-width: 100vw;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  mix-blend-mode: difference;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  mix-blend-mode: normal;\r\n  background-color: var(--white-shade);\r\n  height: 100%;\r\n  width: 30vw;\r\n  border-bottom-left-radius: 3rem;\r\n  display: fixed;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\n.backgroundSea {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border: 1px solid var(--white-shade);\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n}\r\n.aboutmeButton:hover {\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n  position: relative;\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.slit {\r\n  z-index: 0;\r\n  height: 70vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  background-image: url(\"./pexels-myburgh-roux-4816921.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  /* transform: rotate(10deg); */\r\n  --linear-g: linear-gradient(\r\n    to bottom,\r\n    rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  /* background-image: var(--linear-g); */\r\n  mask-image: var(--linear-g);\r\n  -webkit-mask-image: var(--linear-g);\r\n}\r\n\r\n.aboutMeContainer {\r\n  border: 0.2rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  border-radius: 1rem;\r\n  height: fit-content;\r\n  background-color: #00000015;\r\n  backdrop-filter: blur(1rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer::after {\r\n  content: \"I am not the one in the picture :)\";\r\n  font-family: Raj-light;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n  transition: font-size 0.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  transition: opacity 3s;\r\n  opacity: 0%;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.worksTitle {\r\n  text-align: center;\r\n  height: fit-content;\r\n  font-family: Raj-bold;\r\n  color: white;\r\n  background-color: var(--dark-accent);\r\n  font-size: 4rem;\r\n}\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.slideContainer {\r\n  height: auto;\r\n  width: 80vw;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n/* .prev,\r\n  .next {\r\n    font-family: Raj-bold;\r\n    font-size: 5rem;\r\n    color: var(--white-shade);\r\n    background-color: #00000051;\r\n    cursor: pointer;\r\n  } */\r\n\r\n.projects {\r\n  border-radius: 2rem;\r\n  outline: 1rem solid black;\r\n  width: 80vw;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  float: left;\r\n  /* transition: transform 2s;\r\n  transform: translateX(0vw); */\r\n  cursor: pointer;\r\n  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.411);\r\n}\r\n\r\n.proj1Mobile {\r\n  z-index: 2;\r\n  height: 30vh;\r\n  width: auto;\r\n  position: absolute;\r\n  left: 5vh;\r\n  bottom: 0;\r\n  outline: 0.5rem solid gray;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.5rem 0.5rem 0.5rem black;\r\n}\r\n\r\n.buttonContainer {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  background-color: var(--dark-accent);\r\n  border-radius: 10rem;\r\n  text-decoration: none;\r\n  font-family: Raj-bold;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a:active {\r\n  background-color: var(--main-accent);\r\n}\r\n\r\n.projects:first-child::after {\r\n  content: \"1\";\r\n  margin-top: -10vw;\r\n  color: black;\r\n}\r\n\r\n.slider {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  margin-top: 10vh;\r\n  margin-bottom: 3vh;\r\n\r\n  transition: transform 2s;\r\n  -webkit-transition: transform 2s;\r\n  -moz-transition: transform 2s;\r\n  -o-transition: transform 2s;\r\n  transform: translateX(0vw);\r\n}\r\n\r\n#span1:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span3:target ~ .slider {\r\n  transform: translateX(-160vw);\r\n}\r\n\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 100vh;\r\n  text-align: center;\r\n}\r\n\r\n.emailSection100 {\r\n  display: flex;\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  display: inline;\r\n  padding: 1rem;\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  margin: 5rem;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  font-family: Raj-bold;\r\n  font-size: 3rem;\r\n  color: var(--main-color);\r\n  background-color: rgba(255, 255, 255, 0.478);\r\n  gap: 1rem;\r\n  backdrop-filter: blur(1rem);\r\n  mix-blend-mode: luminosity;\r\n}\r\n\r\n.glowingmail {\r\n  font-size: 2rem;\r\n  font-family: Raj-regular;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: Raj-regular;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.submitButton {\r\n  font-family: Raj-medium;\r\n  font-size: 1.5rem;\r\n  color: black;\r\n  height: 2rem;\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 15vh;\r\n  border-top: 1px solid black;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.additional {\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.secondAdditional {\r\n  align-items: end;\r\n}\r\n\r\n/* .nameContainer2 {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n} */\r\n\r\n.CPnumber {\r\n  /* letter-spacing: 0.7rem; */\r\n  cursor: pointer;\r\n  user-select: all;\r\n  /* font-family: Raj-regular; */\r\n  /* font-size: 2rem; */\r\n  height: fit-content;\r\n  overflow: visible;\r\n  text-align: center;\r\n  position: relative;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.smallIcon {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n/* .CPnumber:after {\r\n  content: \"\";\r\n  position: absolute;\r\n\r\n  height: 3px;\r\n  width: 10%;\r\n  background-color: var(--main-accent);\r\n  left: 0;\r\n  bottom: 0px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.CPnumber:hover:after {\r\n  width: 100%;\r\n} */\r\n\r\n/* ///////////////////////////////////// */\r\n\r\n@keyframes rise {\r\n  from {\r\n    transform: translateY(10rem);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rise {\r\n  animation-name: rise;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: scale(-0.5, 1);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.shiver {\r\n  opacity: 0;\r\n}\r\n\r\n.shake {\r\n  opacity: 1;\r\n  animation-name: shake;\r\n  animation-duration: 3s;\r\n}\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 4px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layout: () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var _pexels_sampreety_ali_695794_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pexels-sampreety-ali-695794.jpg */ "./src/pexels-sampreety-ali-695794.jpg");
/* harmony import */ var _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAppV2.png */ "./src/weatherAppV2.png");
/* harmony import */ var _weatherAppV2mobile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherAppV2mobile.png */ "./src/weatherAppV2mobile.png");
/* harmony import */ var _proj2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proj2.png */ "./src/proj2.png");
/* harmony import */ var _phone_dial_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phone-dial.svg */ "./src/phone-dial.svg");
/* harmony import */ var _email_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email.svg */ "./src/email.svg");








function layout() {
  //body
  const body = document.querySelector("body");

  //top bar
  const topBar = document.createElement("section");
  topBar.classList.add("topBar");

  const nameContainer = document.createElement("div");
  nameContainer.classList.add("nameContainer");
  topBar.appendChild(nameContainer);

  const circle = document.createElement("div");
  circle.classList.add("circle");
  nameContainer.appendChild(circle);

  const myName = document.createElement("div");
  myName.classList.add("name");
  myName.textContent = "Emmanuel Parreño";
  nameContainer.appendChild(myName);

  const socmedContainer = document.createElement("div");
  socmedContainer.classList.add("socmedContainer");
  topBar.appendChild(socmedContainer);

  const myNameDetails = document.createElement("div");
  myNameDetails.classList.add("vSmallText");
  myName.appendChild(myNameDetails);
  myNameDetails.textContent = "BSIT STUDENT AT BATANGAS STATE UNIVERSITY";

  body.appendChild(topBar);

  //first prompt
  const firstPart = document.createElement("section");
  firstPart.classList.add("firstPart");
  body.appendChild(firstPart);

  const backgroundSea = new Image();
  backgroundSea.classList.add("backgroundSea");
  backgroundSea.src = _pexels_sampreety_ali_695794_jpg__WEBPACK_IMPORTED_MODULE_0__;
  firstPart.appendChild(backgroundSea);
  backgroundSea.alt = "background";

  const greeting = document.createElement("div");
  greeting.textContent = "HELLO,";
  greeting.classList.add("greet");
  greeting.classList.add("right");
  firstPart.appendChild(greeting);

  const intro = document.createElement("div");
  intro.classList.add("intro");
  intro.classList.add("underline");
  intro.classList.add("right");
  intro.textContent = "I am EMMANUEL";
  greeting.appendChild(intro);

  const button = document.createElement("a");
  button.href = "#aboutMeBackground";
  button.textContent = "ABOUT ME";
  button.classList.add("aboutmeButton");
  button.classList.add("right");
  firstPart.appendChild(button);

  const intro2 = document.createElement("div");
  intro2.classList.add("intro2");
  intro2.classList.add("left");
  intro2.textContent = "A self-taught programmer";
  firstPart.appendChild(intro2);

  //page break

  const pagebreak = document.createElement("div");
  pagebreak.classList.add("pagebreak");

  //about me
  const aboutMeBackground = document.createElement("div");
  aboutMeBackground.classList.add("aboutMeBackground");
  // aboutMeBackground.classList.add("appear");
  aboutMeBackground.id = "aboutMeBackground";
  body.appendChild(aboutMeBackground);

  const hundredVHcontainer = document.createElement("div");
  hundredVHcontainer.classList.add("hundredVHcontainer");

  aboutMeBackground.appendChild(hundredVHcontainer);

  const slit = document.createElement("div");
  slit.classList.add("slit");

  aboutMeBackground.appendChild(slit);

  const aboutMeContainer = document.createElement("div");
  aboutMeContainer.classList.add("aboutMeContainer");
  aboutMeContainer.classList.add("appear");
  hundredVHcontainer.appendChild(aboutMeContainer);

  const AMTitle = document.createElement("div");
  AMTitle.classList.add("AMTitle");
  AMTitle.classList.add("appear");
  AMTitle.textContent = "ABOUT ME";
  aboutMeContainer.appendChild(AMTitle);

  const aboutMeParag = document.createElement("p");
  aboutMeParag.classList.add("aboutMeParag");
  aboutMeParag.classList.add("appear");
  aboutMeParag.innerHTML =
    "I am a self-taught <span>web developer</span>. Currently, I am studying <span>BS in information technology at the Batangas State University</span>. I have been honing my skills since late 2022 (through the <span>Odin Project</span> and other online resources). <span>I am confident with my entry-level front-end development skills</span>. My primary languages are <span>HTML, CSS, and Javascript</span> - but I can also use Python, Webpack, CLI, and C++ to a certain extent.";
  aboutMeContainer.appendChild(aboutMeParag);

  //projects
  const worksTitle = document.createElement("div");
  body.appendChild(worksTitle);
  worksTitle.classList.add("worksTitle");

  const worksTitleText = document.createElement("div");
  worksTitleText.classList.add("worksTitle");
  worksTitleText.classList.add("appear");
  worksTitleText.textContent = "SOME OF MY WORKS";
  worksTitle.appendChild(worksTitleText);

  const works = document.createElement("section");
  // works.classList.add("appear");
  works.classList.add("works");
  body.appendChild(works);

  // const prev = document.createElement("div");
  // prev.textContent = "<";
  // prev.classList.add("prev");
  // works.appendChild(prev);

  const slideContainer = document.createElement("div");
  slideContainer.classList.add("up");
  slideContainer.classList.add("slideContainer");
  works.appendChild(slideContainer);

  // const next = document.createElement("div");
  // next.textContent = ">";
  // next.classList.add("next");
  // works.appendChild(next);

  const span1 = document.createElement("span");
  span1.id = "span1";
  slideContainer.appendChild(span1);

  const span2 = document.createElement("span");
  span2.id = "span2";
  slideContainer.appendChild(span2);

  const span3 = document.createElement("span");
  span2.id = "span3";
  slideContainer.appendChild(span3);

  const slider = document.createElement("div");
  slider.classList.add("slider");
  slideContainer.appendChild(slider);

  const proj1 = new Image();
  proj1.classList.add("appear");
  proj1.src = _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__;
  proj1.classList.add("projects");
  proj1.classList.add("proj1");

  const proj1Mobile = new Image();
  proj1Mobile.classList.add("proj1Mobile");
  proj1Mobile.classList.add("appear");
  proj1Mobile.src = _weatherAppV2mobile_png__WEBPACK_IMPORTED_MODULE_2__;
  slider.appendChild(proj1Mobile);

  slider.appendChild(proj1);

  const proj2 = new Image();
  proj2.classList.add("appear");
  proj2.src = _proj2_png__WEBPACK_IMPORTED_MODULE_3__;
  proj2.classList.add("projects");
  slider.appendChild(proj2);
  proj2.classList.add("proj2");

  const proj3 = new Image();
  proj3.classList.add("appear");
  proj3.src = _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__;
  proj3.classList.add("projects");
  slider.appendChild(proj3);
  proj3.classList.add("proj3");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  slideContainer.appendChild(buttonContainer);

  const button2 = document.createElement("a");
  button2.classList.add("button2");
  button2.href = "#span2";
  buttonContainer.appendChild(button2);

  const button1 = document.createElement("a");
  button1.classList.add("button1");
  button1.href = "#span1";
  buttonContainer.appendChild(button1);

  const button3 = document.createElement("a");
  button3.classList.add("button3");
  button3.href = "#span3";
  buttonContainer.appendChild(button3);

  //contact me! email page
  const emailSection = document.createElement("section");
  emailSection.classList.add("emailSection");
  body.appendChild(emailSection);

  const emailSection100 = document.createElement("section");
  emailSection100.classList.add("emailSection100");
  emailSection.appendChild(emailSection100);

  const form = document.createElement("form");
  form.action = "https://formsubmit.co/parrenoemmanuel756@gmail.com";
  form.method = "POST";
  emailSection100.appendChild(form);

  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("fieldset");
  form.appendChild(fieldset);
  fieldset.classList.add("shiver");

  const legend = document.createElement("legend");
  legend.innerHTML = `Interested? <span class="glowingmail">Email me now!</span>`;
  fieldset.appendChild(legend);

  const email = document.createElement("input");
  email.placeholder = "EMAIL";
  email.type = "email";
  email.name = "email";
  email.required = true;
  fieldset.appendChild(email);

  const sender = document.createElement("input");
  sender.placeholder = "NAME";
  sender.type = "text";
  sender.name = "name";
  sender.required = true;
  fieldset.appendChild(sender);

  const subject = document.createElement("input");
  subject.placeholder = "MAIL'S SUBJECT";
  subject.type = "text";
  subject.name = "subject";
  subject.required = true;
  fieldset.appendChild(subject);

  const message = document.createElement("textarea");
  message.placeholder = "MESSAGE";
  message.name = "message";
  message.cols = 30;
  message.rows = 10;
  message.style.resize = "none";
  message.required = true;
  fieldset.appendChild(message);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send";
  submitButton.classList.add("submitButton");
  fieldset.appendChild(submitButton);

  //more about me
  const moreSection = document.createElement("section");
  moreSection.classList.add("more");
  body.appendChild(moreSection);

  const firstTexts = document.createElement("div");
  firstTexts.classList.add("additional");

  const secondTexts = document.createElement("div");
  secondTexts.classList.add("additional");
  secondTexts.classList.add("secondAdditional");

  const CPnumber = document.createElement("div");
  secondTexts.appendChild(CPnumber);
  CPnumber.classList.add("underline");
  CPnumber.textContent = "+63 956 688 1489";
  CPnumber.classList.add("CPnumber");

  const cpIcon = new Image();
  cpIcon.classList.add("smallIcon");
  cpIcon.src = _phone_dial_svg__WEBPACK_IMPORTED_MODULE_4__;
  CPnumber.appendChild(cpIcon);

  const personalMail = document.createElement("div");
  secondTexts.appendChild(personalMail);
  personalMail.textContent = "parrenoemmanuel756@gmail.com";
  personalMail.classList.add("CPnumber");
  personalMail.classList.add("emailAddress");
  personalMail.classList.add("underline");
  secondTexts.appendChild(personalMail);

  const emailIcon = new Image();
  emailIcon.classList.add("smallIcon");
  emailIcon.src = _email_svg__WEBPACK_IMPORTED_MODULE_5__;
  personalMail.appendChild(emailIcon);

  moreSection.appendChild(firstTexts);
  moreSection.appendChild(secondTexts);
  const nameContainer2 = document.createElement("div");
  nameContainer2.classList.add("nameContainer");
  nameContainer2.style.mixBlendMode = "difference";

  const circle2 = document.createElement("div");
  circle2.classList.add("circle");
  nameContainer2.appendChild(circle2);

  const myName2 = document.createElement("div");
  myName2.classList.add("name");
  myName2.textContent = "Emmanuel Parreño";
  nameContainer2.appendChild(myName2);

  // nameContainer2.classList.add("nameContainer2");
  nameContainer2.classList.add("underline");
  firstTexts.appendChild(nameContainer2);
}
//


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.layout)();

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

(() => {
  const rights = document.querySelectorAll(".right");
  rights.forEach((items) => {
    animationTrigger(items, "fromRight");
  });

  const lefts = document.querySelectorAll(".left");
  lefts.forEach((items) => {
    animationTrigger(items, "fromLeft");
  });

  const appears = document.querySelectorAll(".appear");
  appears.forEach((items) => {
    animationTrigger(items, "pop", "expand");
  });

  const rises = document.querySelectorAll(".up");
  rises.forEach((items) => {
    animationTrigger(items, "rise");
  });

  const shivers = document.querySelectorAll(".shiver");
  shivers.forEach((items) => {
    animationTrigger(items, "shake");
  });
})();
// const name = "fromRight";
// animationTrigger(document.querySelector(".AMTitle"), name);
(function openWebsite() {
  const proj1 = document.querySelector(".proj1");
  proj1.onclick = () => {
    window.open("https://emman-pip.github.io/weatherAppv2/");
  };
})();


/***/ }),

/***/ "./src/email.svg":
/*!***********************!*\
  !*** ./src/email.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7a364af28c1fc7cbb30.svg";

/***/ }),

/***/ "./src/fonts/Rajdhani-Bold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Rajdhani-Bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5a831c1b8c8eb1b83ff.ttf";

/***/ }),

/***/ "./src/fonts/Rajdhani-Light.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Rajdhani-Light.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f948ddb3029f1193092.ttf";

/***/ }),

/***/ "./src/fonts/Rajdhani-Medium.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Rajdhani-Medium.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69a9f7bccb45c01931a2.ttf";

/***/ }),

/***/ "./src/fonts/Rajdhani-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Rajdhani-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "148606c1eb703f6e597a.ttf";

/***/ }),

/***/ "./src/pexels-myburgh-roux-4816921.jpg":
/*!*********************************************!*\
  !*** ./src/pexels-myburgh-roux-4816921.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5528dae00a88884af321.jpg";

/***/ }),

/***/ "./src/pexels-sampreety-ali-695794.jpg":
/*!*********************************************!*\
  !*** ./src/pexels-sampreety-ali-695794.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f36df44166bd045538c.jpg";

/***/ }),

/***/ "./src/phone-dial.svg":
/*!****************************!*\
  !*** ./src/phone-dial.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87d761fa4c57543b0dfa.svg";

/***/ }),

/***/ "./src/proj2.png":
/*!***********************!*\
  !*** ./src/proj2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3722b9f03302240d9100.png";

/***/ }),

/***/ "./src/weatherAppV2.png":
/*!******************************!*\
  !*** ./src/weatherAppV2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4a3e4f72b0e5386346d.png";

/***/ }),

/***/ "./src/weatherAppV2mobile.png":
/*!************************************!*\
  !*** ./src/weatherAppV2mobile.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9caf471fa125e101b4f.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssU0FBUyxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sU0FBUyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVDQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JVcUI7QUFDYTtBQUNsQztBQUNBLCtDQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcGV4ZWxzLW15YnVyZ2gtcm91eC00ODE2OTIxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcclxuICAtLXdoaXRlLXNoYWRlOiB3aGl0ZTtcclxuICAtLW1haW4tYWNjZW50OiAjMDBjOWM4O1xyXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xyXG4gIC0tZGFyay1hY2NlbnQ6ICM0NzgxN2Y7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXHJcbiAgKTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuICBtaW4taGVpZ2h0OiAzMDB2aDtcclxufVxyXG5cclxuLyogc2Nyb2xsIGJhciAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgd2lkdGg6IDJ2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi8qIHRvcCBiYXIgKi9cclxuXHJcbi50b3BCYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdG9wOiAwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxufVxyXG5cclxuLm5hbWVDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgaGVpZ2h0OiAwLjdyZW07XHJcbiAgd2lkdGg6IDAuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuLm5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG4udlNtYWxsVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLnNvY21lZENvbnRhaW5lciB7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XHJcbiAgZGlzcGxheTogZml4ZWQ7XHJcbn1cclxuXHJcbi5maXJzdFBhcnQge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJhY2tncm91bmRTZWEge1xyXG4gIHdpZHRoOiAxNjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCksIHRyYW5zcGFyZW50KTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHRvcCxcclxuICAgIHRyYW5zcGFyZW50LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICAgdHJhbnNwYXJlbnRcclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmdyZWV0IHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xyXG59XHJcblxyXG4uYWJvdXRtZUJ1dHRvbiB7XHJcbiAgei1pbmRleDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5hYm91dG1lQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuODE1KTtcclxufVxyXG4uYWJvdXRtZUJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxufVxyXG5cclxuLmludHJvMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjB2aDtcclxuICByaWdodDogMTB2dztcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxufVxyXG5cclxuLyogcGFnZSBicmVhayAqL1xyXG5cclxuLnBhZ2VicmVhayB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgaGVpZ2h0OiAwLjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMzB2dztcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbiAgb3BhY2l0eTogNDAlO1xyXG59XHJcblxyXG4vKiBzZWNvbmQgcGFydCAqL1xyXG5cclxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpIC8qIHZhcigtLWxpZ2h0LWFjY2VudCkgKi9cclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLyogcGFkZGluZy10b3A6IDhyZW07ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaHVuZHJlZFZIY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zbGl0IHtcclxuICB6LWluZGV4OiAwO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7ICovXHJcbiAgLS1saW5lYXItZzogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKVxyXG4gICk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbGluZWFyLWcpOyAqL1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLWxpbmVhci1nKTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWxpbmVhci1nKTtcclxufVxyXG5cclxuLmFib3V0TWVDb250YWluZXIge1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE1O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB3aWR0aDogODB2dztcclxufVxyXG5cclxuQGtleWZyYW1lcyB3aWRlbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB3aWRlbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJJIGFtIG5vdCB0aGUgb25lIGluIHRoZSBwaWN0dXJlIDopXCI7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyOmhvdmVyOjphZnRlciB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uQU1UaXRsZSB7XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxcyAxMHM7XHJcbn1cclxuXHJcbi5BTVRpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG59XHJcblxyXG4uYWJvdXRNZVBhcmFnIHtcclxuICB3aWR0aDogNDB2dztcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxLjVzO1xyXG59XHJcblxyXG5zcGFuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHZoKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZyb21SaWdodCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAvKiBvcGFjaXR5OiAxMDAlOyAqL1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2aCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5mcm9tTGVmdCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcblxyXG4ucG9wIHtcclxufVxyXG5cclxuLmFwcGVhciB7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcclxuICBvcGFjaXR5OiAwJTtcclxufVxyXG5cclxuLnBvcCB7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vd29ya3MvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ud29ya3NUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4ud29ya3Mge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLWRhcmstYWNjZW50KSxcclxuICAgIHZhcigtLW1haW4tYWNjZW50KVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZUNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbn1cclxuXHJcbi8qIC5wcmV2LFxyXG4gIC5uZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSAqL1xyXG5cclxuLnByb2plY3RzIHtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIG91dGxpbmU6IDFyZW0gc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnJlbSAycmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQxMSk7XHJcbn1cclxuXHJcbi5wcm9qMU1vYmlsZSB7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDV2aDtcclxuICBib3R0b206IDA7XHJcbiAgb3V0bGluZTogMC41cmVtIHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDAuNXJlbSBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbkNvbnRhaW5lciA+IGEge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uQ29udGFpbmVyID4gYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxufVxyXG5cclxuLnByb2plY3RzOmZpcnN0LWNoaWxkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIxXCI7XHJcbiAgbWFyZ2luLXRvcDogLTEwdnc7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XHJcbn1cclxuXHJcbiNzcGFuMTp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xyXG59XHJcblxyXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcclxufVxyXG5cclxuI3NwYW4yOnRhcmdldCB+IC5zbGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODB2dyk7XHJcbn1cclxuXHJcbiNzcGFuMzp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2MHZ3KTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy9lbWFpbC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLmVtYWlsU2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpLFxyXG4gICAgdmFyKC0tbGlnaHQtYWNjZW50KSxcclxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbWFpbFNlY3Rpb24xMDAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3OCk7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcclxuICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcclxufVxyXG5cclxuLmdsb3dpbmdtYWlsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uc3VibWl0QnV0dG9uIHtcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubW9yZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWNvbmRBZGRpdGlvbmFsIHtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4vKiAubmFtZUNvbnRhaW5lcjIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn0gKi9cclxuXHJcbi5DUG51bWJlciB7XHJcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IGFsbDtcclxuICAvKiBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7ICovXHJcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc21hbGxJY29uIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi8qIC5DUG51bWJlcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLkNQbnVtYmVyOmhvdmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuQGtleWZyYW1lcyByaXNlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnJpc2Uge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByaXNlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTAuNSwgMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnNoaXZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNoYWtlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcbi51bmRlcmxpbmU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmU6aG92ZXI6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7Ozs7O0dBS0M7RUFDRCw2QkFBNkI7RUFDN0IsaUJBQWlC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bUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSCwwQ0FBMEM7O0FBRTFDO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xcclxcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcXHJcXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xcclxcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGwgYmFyICovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICB3aWR0aDogMnZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdG9wIGJhciAqL1xcclxcblxcclxcbi50b3BCYXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0b3A6IDByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgaGVpZ2h0OiAwLjdyZW07XFxyXFxuICB3aWR0aDogMC43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52U21hbGxUZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY21lZENvbnRhaW5lciB7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcclxcbiAgZGlzcGxheTogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5maXJzdFBhcnQge1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kU2VhIHtcXHJcXG4gIHdpZHRoOiAxNjAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXNrOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gdG9wLFxcclxcbiAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxcclxcbiAgICB0cmFuc3BhcmVudFxcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLU1lZGl1bS50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0IHtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRtZUJ1dHRvbiB7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNjB2aDtcXHJcXG4gIGxlZnQ6IDEwdnc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uYWJvdXRtZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuODE1KTtcXHJcXG59XFxyXFxuLmFib3V0bWVCdXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvMiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDIwdmg7XFxyXFxuICByaWdodDogMTB2dztcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXFxyXFxufVxcclxcblxcclxcbi8qIHBhZ2UgYnJlYWsgKi9cXHJcXG5cXHJcXG4ucGFnZWJyZWFrIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgaGVpZ2h0OiAwLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBtYXJnaW4tbGVmdDogMzB2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMzB2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG4gIG9wYWNpdHk6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2Vjb25kIHBhcnQgKi9cXHJcXG5cXHJcXG4uYWJvdXRNZUJhY2tncm91bmQge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcXHJcXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpIC8qIHZhcigtLWxpZ2h0LWFjY2VudCkgKi9cXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICAvKiBwYWRkaW5nLXRvcDogOHJlbTsgKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bmRyZWRWSGNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5zbGl0IHtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vcGV4ZWxzLW15YnVyZ2gtcm91eC00ODE2OTIxLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7ICovXFxyXFxuICAtLWxpbmVhci1nOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwKSxcXHJcXG4gICAgcmdiYSgwLCAwLCAwKSxcXHJcXG4gICAgcmdiYSgwLCAwLCAwKSxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwKVxcclxcbiAgKTtcXHJcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxpbmVhci1nKTsgKi9cXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLWxpbmVhci1nKTtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZUNvbnRhaW5lciB7XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgd2lkZW4ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjEpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiB3aWRlbjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0TWVDb250YWluZXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJJIGFtIG5vdCB0aGUgb25lIGluIHRoZSBwaWN0dXJlIDopXFxcIjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZUNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uQU1UaXRsZSB7XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxcyAxMHM7XFxyXFxufVxcclxcblxcclxcbi5BTVRpdGxlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lUGFyYWcge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XFxyXFxufVxcclxcblxcclxcbnNwYW46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTB2aCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZnJvbVJpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mcm9tTGVmdCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcCB7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXIge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcXHJcXG4gIG9wYWNpdHk6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wIHtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dvcmtzLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi53b3Jrc1RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1tYWluLWFjY2VudClcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogLnByZXYsXFxyXFxuICAubmV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG91dGxpbmU6IDFyZW0gc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTsgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDJyZW0gMnJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC40MTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvajFNb2JpbGUge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNXZoO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgb3V0bGluZTogMC41cmVtIHNvbGlkIGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAwLjVyZW0gYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbnRhaW5lciA+IGEge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db250YWluZXIgPiBhOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0czpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIjFcXFwiO1xcclxcbiAgbWFyZ2luLXRvcDogLTEwdnc7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjE6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjM6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2MHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy9lbWFpbC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4uZW1haWxTZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWFjY2VudCksXFxyXFxuICAgIHZhcigtLWxpZ2h0LWFjY2VudCksXFxyXFxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxcclxcbiAgKTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lbWFpbFNlY3Rpb24xMDAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzgpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XFxyXFxufVxcclxcblxcclxcbi5nbG93aW5nbWFpbCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuLm1vcmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaXRpb25hbCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kQWRkaXRpb25hbCB7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubmFtZUNvbnRhaW5lcjIge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLkNQbnVtYmVyIHtcXHJcXG4gIC8qIGxldHRlci1zcGFjaW5nOiAwLjdyZW07ICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogYWxsO1xcclxcbiAgLyogZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyOyAqL1xcclxcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsSWNvbiB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLkNQbnVtYmVyOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLkNQbnVtYmVyOmhvdmVyOmFmdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyByaXNlIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yaXNlIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiByaXNlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTAuNSwgMSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXZlciB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hha2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxufVxcclxcbi51bmRlcmxpbmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmU6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNlYSBmcm9tIFwiLi9wZXhlbHMtc2FtcHJlZXR5LWFsaS02OTU3OTQuanBnXCI7XHJcbmltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJBcHBWMi5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJNb2JpbGUgZnJvbSBcIi4vd2VhdGhlckFwcFYybW9iaWxlLnBuZ1wiO1xyXG5pbXBvcnQgcHJvamVjdDIgZnJvbSBcIi4vcHJvajIucG5nXCI7XHJcblxyXG5pbXBvcnQgSWNvblBob25lIGZyb20gXCIuL3Bob25lLWRpYWwuc3ZnXCI7XHJcbmltcG9ydCBJY29uRW1haWwgZnJvbSBcIi4vZW1haWwuc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF5b3V0KCkge1xyXG4gIC8vYm9keVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgLy90b3AgYmFyXHJcbiAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgdG9wQmFyLmNsYXNzTGlzdC5hZGQoXCJ0b3BCYXJcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXJcIik7XHJcbiAgdG9wQmFyLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbXlOYW1lLnRleHRDb250ZW50ID0gXCJFbW1hbnVlbCBQYXJyZcOxb1wiO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobXlOYW1lKTtcclxuXHJcbiAgY29uc3Qgc29jbWVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzb2NtZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNvY21lZENvbnRhaW5lclwiKTtcclxuICB0b3BCYXIuYXBwZW5kQ2hpbGQoc29jbWVkQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidlNtYWxsVGV4dFwiKTtcclxuICBteU5hbWUuYXBwZW5kQ2hpbGQobXlOYW1lRGV0YWlscyk7XHJcbiAgbXlOYW1lRGV0YWlscy50ZXh0Q29udGVudCA9IFwiQlNJVCBTVFVERU5UIEFUIEJBVEFOR0FTIFNUQVRFIFVOSVZFUlNJVFlcIjtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xyXG5cclxuICAvL2ZpcnN0IHByb21wdFxyXG4gIGNvbnN0IGZpcnN0UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGZpcnN0UGFydC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RQYXJ0XCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZmlyc3RQYXJ0KTtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZFNlYSA9IG5ldyBJbWFnZSgpO1xyXG4gIGJhY2tncm91bmRTZWEuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRTZWFcIik7XHJcbiAgYmFja2dyb3VuZFNlYS5zcmMgPSBTZWE7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJhY2tncm91bmRTZWEpO1xyXG4gIGJhY2tncm91bmRTZWEuYWx0ID0gXCJiYWNrZ3JvdW5kXCI7XHJcblxyXG4gIGNvbnN0IGdyZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiSEVMTE8sXCI7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcImdyZWV0XCIpO1xyXG4gIGdyZWV0aW5nLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGludHJvLnRleHRDb250ZW50ID0gXCJJIGFtIEVNTUFOVUVMXCI7XHJcbiAgZ3JlZXRpbmcuYXBwZW5kQ2hpbGQoaW50cm8pO1xyXG5cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24uaHJlZiA9IFwiI2Fib3V0TWVCYWNrZ3JvdW5kXCI7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRtZUJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICBjb25zdCBpbnRybzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvMi5jbGFzc0xpc3QuYWRkKFwiaW50cm8yXCIpO1xyXG4gIGludHJvMi5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICBpbnRybzIudGV4dENvbnRlbnQgPSBcIkEgc2VsZi10YXVnaHQgcHJvZ3JhbW1lclwiO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChpbnRybzIpO1xyXG5cclxuICAvL3BhZ2UgYnJlYWtcclxuXHJcbiAgY29uc3QgcGFnZWJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwYWdlYnJlYWsuY2xhc3NMaXN0LmFkZChcInBhZ2VicmVha1wiKTtcclxuXHJcbiAgLy9hYm91dCBtZVxyXG4gIGNvbnN0IGFib3V0TWVCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dE1lQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUJhY2tncm91bmRcIik7XHJcbiAgLy8gYWJvdXRNZUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBhYm91dE1lQmFja2dyb3VuZC5pZCA9IFwiYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBib2R5LmFwcGVuZENoaWxkKGFib3V0TWVCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgaHVuZHJlZFZIY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBodW5kcmVkVkhjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImh1bmRyZWRWSGNvbnRhaW5lclwiKTtcclxuXHJcbiAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaHVuZHJlZFZIY29udGFpbmVyKTtcclxuXHJcbiAgY29uc3Qgc2xpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpdC5jbGFzc0xpc3QuYWRkKFwic2xpdFwiKTtcclxuXHJcbiAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2xpdCk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0TWVDb250YWluZXJcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGh1bmRyZWRWSGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgQU1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgQU1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiQU1UaXRsZVwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgQU1UaXRsZS50ZXh0Q29udGVudCA9IFwiQUJPVVQgTUVcIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKEFNVGl0bGUpO1xyXG5cclxuICBjb25zdCBhYm91dE1lUGFyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhYm91dE1lUGFyYWcuY2xhc3NMaXN0LmFkZChcImFib3V0TWVQYXJhZ1wiKTtcclxuICBhYm91dE1lUGFyYWcuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBhYm91dE1lUGFyYWcuaW5uZXJIVE1MID1cclxuICAgIFwiSSBhbSBhIHNlbGYtdGF1Z2h0IDxzcGFuPndlYiBkZXZlbG9wZXI8L3NwYW4+LiBDdXJyZW50bHksIEkgYW0gc3R1ZHlpbmcgPHNwYW4+QlMgaW4gaW5mb3JtYXRpb24gdGVjaG5vbG9neSBhdCB0aGUgQmF0YW5nYXMgU3RhdGUgVW5pdmVyc2l0eTwvc3Bhbj4uIEkgaGF2ZSBiZWVuIGhvbmluZyBteSBza2lsbHMgc2luY2UgbGF0ZSAyMDIyICh0aHJvdWdoIHRoZSA8c3Bhbj5PZGluIFByb2plY3Q8L3NwYW4+IGFuZCBvdGhlciBvbmxpbmUgcmVzb3VyY2VzKS4gPHNwYW4+SSBhbSBjb25maWRlbnQgd2l0aCBteSBlbnRyeS1sZXZlbCBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgc2tpbGxzPC9zcGFuPi4gTXkgcHJpbWFyeSBsYW5ndWFnZXMgYXJlIDxzcGFuPkhUTUwsIENTUywgYW5kIEphdmFzY3JpcHQ8L3NwYW4+IC0gYnV0IEkgY2FuIGFsc28gdXNlIFB5dGhvbiwgV2VicGFjaywgQ0xJLCBhbmQgQysrIHRvIGEgY2VydGFpbiBleHRlbnQuXCI7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lUGFyYWcpO1xyXG5cclxuICAvL3Byb2plY3RzXHJcbiAgY29uc3Qgd29ya3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrc1RpdGxlKTtcclxuICB3b3Jrc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3b3Jrc1RpdGxlXCIpO1xyXG5cclxuICBjb25zdCB3b3Jrc1RpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd29ya3NUaXRsZVRleHQuY2xhc3NMaXN0LmFkZChcIndvcmtzVGl0bGVcIik7XHJcbiAgd29ya3NUaXRsZVRleHQuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiU09NRSBPRiBNWSBXT1JLU1wiO1xyXG4gIHdvcmtzVGl0bGUuYXBwZW5kQ2hpbGQod29ya3NUaXRsZVRleHQpO1xyXG5cclxuICBjb25zdCB3b3JrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIC8vIHdvcmtzLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgd29ya3MuY2xhc3NMaXN0LmFkZChcIndvcmtzXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQod29ya3MpO1xyXG5cclxuICAvLyBjb25zdCBwcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvLyBwcmV2LnRleHRDb250ZW50ID0gXCI8XCI7XHJcbiAgLy8gcHJldi5jbGFzc0xpc3QuYWRkKFwicHJldlwiKTtcclxuICAvLyB3b3Jrcy5hcHBlbmRDaGlsZChwcmV2KTtcclxuXHJcbiAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1cFwiKTtcclxuICBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGVDb250YWluZXJcIik7XHJcbiAgd29ya3MuYXBwZW5kQ2hpbGQoc2xpZGVDb250YWluZXIpO1xyXG5cclxuICAvLyBjb25zdCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvLyBuZXh0LnRleHRDb250ZW50ID0gXCI+XCI7XHJcbiAgLy8gbmV4dC5jbGFzc0xpc3QuYWRkKFwibmV4dFwiKTtcclxuICAvLyB3b3Jrcy5hcHBlbmRDaGlsZChuZXh0KTtcclxuXHJcbiAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBzcGFuMS5pZCA9IFwic3BhbjFcIjtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuMSk7XHJcblxyXG4gIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgc3BhbjIuaWQgPSBcInNwYW4yXCI7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbjIpO1xyXG5cclxuICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHNwYW4yLmlkID0gXCJzcGFuM1wiO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4zKTtcclxuXHJcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xyXG5cclxuICBjb25zdCBwcm9qMSA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajEuc3JjID0gd2VhdGhlcjtcclxuICBwcm9qMS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgcHJvajEuY2xhc3NMaXN0LmFkZChcInByb2oxXCIpO1xyXG5cclxuICBjb25zdCBwcm9qMU1vYmlsZSA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2oxTW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qMU1vYmlsZVwiKTtcclxuICBwcm9qMU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2oxTW9iaWxlLnNyYyA9IHdlYXRoZXJNb2JpbGU7XHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2oxTW9iaWxlKTtcclxuXHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2oxKTtcclxuXHJcbiAgY29uc3QgcHJvajIgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMi5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2oyLnNyYyA9IHByb2plY3QyO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajIpO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJwcm9qMlwiKTtcclxuXHJcbiAgY29uc3QgcHJvajMgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2ozLnNyYyA9IHdlYXRoZXI7XHJcbiAgcHJvajMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMyk7XHJcbiAgcHJvajMuY2xhc3NMaXN0LmFkZChcInByb2ozXCIpO1xyXG5cclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQ29udGFpbmVyXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24yLmNsYXNzTGlzdC5hZGQoXCJidXR0b24yXCIpO1xyXG4gIGJ1dHRvbjIuaHJlZiA9IFwiI3NwYW4yXCI7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xyXG5cclxuICBjb25zdCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uMS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uMVwiKTtcclxuICBidXR0b24xLmhyZWYgPSBcIiNzcGFuMVwiO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24xKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbjNcIik7XHJcbiAgYnV0dG9uMy5ocmVmID0gXCIjc3BhbjNcIjtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XHJcblxyXG4gIC8vY29udGFjdCBtZSEgZW1haWwgcGFnZVxyXG4gIGNvbnN0IGVtYWlsU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1haWxTZWN0aW9uXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZW1haWxTZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uMTAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uMTAwLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb24xMDBcIik7XHJcbiAgZW1haWxTZWN0aW9uLmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbjEwMCk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiaHR0cHM6Ly9mb3Jtc3VibWl0LmNvL3BhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gIGVtYWlsU2VjdGlvbjEwMC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImZpZWxkc2V0XCIpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG4gIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJzaGl2ZXJcIik7XHJcblxyXG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XHJcbiAgbGVnZW5kLmlubmVySFRNTCA9IGBJbnRlcmVzdGVkPyA8c3BhbiBjbGFzcz1cImdsb3dpbmdtYWlsXCI+RW1haWwgbWUgbm93ITwvc3Bhbj5gO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XHJcblxyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGVtYWlsLnBsYWNlaG9sZGVyID0gXCJFTUFJTFwiO1xyXG4gIGVtYWlsLnR5cGUgPSBcImVtYWlsXCI7XHJcbiAgZW1haWwubmFtZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG5cclxuICBjb25zdCBzZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc2VuZGVyLnBsYWNlaG9sZGVyID0gXCJOQU1FXCI7XHJcbiAgc2VuZGVyLnR5cGUgPSBcInRleHRcIjtcclxuICBzZW5kZXIubmFtZSA9IFwibmFtZVwiO1xyXG4gIHNlbmRlci5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc2VuZGVyKTtcclxuXHJcbiAgY29uc3Qgc3ViamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzdWJqZWN0LnBsYWNlaG9sZGVyID0gXCJNQUlMJ1MgU1VCSkVDVFwiO1xyXG4gIHN1YmplY3QudHlwZSA9IFwidGV4dFwiO1xyXG4gIHN1YmplY3QubmFtZSA9IFwic3ViamVjdFwiO1xyXG4gIHN1YmplY3QucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHN1YmplY3QpO1xyXG5cclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIG1lc3NhZ2UucGxhY2Vob2xkZXIgPSBcIk1FU1NBR0VcIjtcclxuICBtZXNzYWdlLm5hbWUgPSBcIm1lc3NhZ2VcIjtcclxuICBtZXNzYWdlLmNvbHMgPSAzMDtcclxuICBtZXNzYWdlLnJvd3MgPSAxMDtcclxuICBtZXNzYWdlLnN0eWxlLnJlc2l6ZSA9IFwibm9uZVwiO1xyXG4gIG1lc3NhZ2UucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlbmRcIjtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvblwiKTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAvL21vcmUgYWJvdXQgbWVcclxuICBjb25zdCBtb3JlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIG1vcmVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtb3JlXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9yZVNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBmaXJzdFRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmaXJzdFRleHRzLmNsYXNzTGlzdC5hZGQoXCJhZGRpdGlvbmFsXCIpO1xyXG5cclxuICBjb25zdCBzZWNvbmRUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kVGV4dHMuY2xhc3NMaXN0LmFkZChcImFkZGl0aW9uYWxcIik7XHJcbiAgc2Vjb25kVGV4dHMuY2xhc3NMaXN0LmFkZChcInNlY29uZEFkZGl0aW9uYWxcIik7XHJcblxyXG4gIGNvbnN0IENQbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChDUG51bWJlcik7XHJcbiAgQ1BudW1iZXIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBDUG51bWJlci50ZXh0Q29udGVudCA9IFwiKzYzIDk1NiA2ODggMTQ4OVwiO1xyXG4gIENQbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJDUG51bWJlclwiKTtcclxuXHJcbiAgY29uc3QgY3BJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgY3BJY29uLmNsYXNzTGlzdC5hZGQoXCJzbWFsbEljb25cIik7XHJcbiAgY3BJY29uLnNyYyA9IEljb25QaG9uZTtcclxuICBDUG51bWJlci5hcHBlbmRDaGlsZChjcEljb24pO1xyXG5cclxuICBjb25zdCBwZXJzb25hbE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKHBlcnNvbmFsTWFpbCk7XHJcbiAgcGVyc29uYWxNYWlsLnRleHRDb250ZW50ID0gXCJwYXJyZW5vZW1tYW51ZWw3NTZAZ21haWwuY29tXCI7XHJcbiAgcGVyc29uYWxNYWlsLmNsYXNzTGlzdC5hZGQoXCJDUG51bWJlclwiKTtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcImVtYWlsQWRkcmVzc1wiKTtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChwZXJzb25hbE1haWwpO1xyXG5cclxuICBjb25zdCBlbWFpbEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZChcInNtYWxsSWNvblwiKTtcclxuICBlbWFpbEljb24uc3JjID0gSWNvbkVtYWlsO1xyXG4gIHBlcnNvbmFsTWFpbC5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xyXG5cclxuICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChmaXJzdFRleHRzKTtcclxuICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmRUZXh0cyk7XHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwiZGlmZmVyZW5jZVwiO1xyXG5cclxuICBjb25zdCBjaXJjbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoY2lyY2xlMik7XHJcblxyXG4gIGNvbnN0IG15TmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZTIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbXlOYW1lMi50ZXh0Q29udGVudCA9IFwiRW1tYW51ZWwgUGFycmXDsW9cIjtcclxuICBuYW1lQ29udGFpbmVyMi5hcHBlbmRDaGlsZChteU5hbWUyKTtcclxuXHJcbiAgLy8gbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXIyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgZmlyc3RUZXh0cy5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyMik7XHJcbn1cclxuLy9cclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcIi4vZG9tLmpzXCI7XHJcblxyXG5sYXlvdXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvblRyaWdnZXIoc2VjdGlvbiwgYW5pbWF0aW9uTmFtZSwgZXhwYW5kID0gbnVsbCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByb290OiBudWxsLFxyXG4gICAgdGhyZXNob2xkOiAwLjQsXHJcbiAgICByb290TWFyZ2luOiBcIjI1cHhcIixcclxuICB9O1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFib3V0TWVDb250YWluZXJcIikgJiZcclxuICAgICAgICBlbnRyeS5pc0ludGVyc2VjdGluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChleHBhbmQpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJhYm91dE1lQ29udGFpbmVyXCIpICYmXHJcbiAgICAgICAgIWVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGV4cGFuZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIG9wdGlvbnMpO1xyXG5cclxuICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG59XHJcblxyXG4oKCkgPT4ge1xyXG4gIGNvbnN0IHJpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmlnaHRcIik7XHJcbiAgcmlnaHRzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBcImZyb21SaWdodFwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGVmdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZnRcIik7XHJcbiAgbGVmdHMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwiZnJvbUxlZnRcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFwcGVhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcGVhclwiKTtcclxuICBhcHBlYXJzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBcInBvcFwiLCBcImV4cGFuZFwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmlzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwXCIpO1xyXG4gIHJpc2VzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBcInJpc2VcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNoaXZlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXZlclwiKTtcclxuICBzaGl2ZXJzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBcInNoYWtlXCIpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4vLyBjb25zdCBuYW1lID0gXCJmcm9tUmlnaHRcIjtcclxuLy8gYW5pbWF0aW9uVHJpZ2dlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkFNVGl0bGVcIiksIG5hbWUpO1xyXG4oZnVuY3Rpb24gb3BlbldlYnNpdGUoKSB7XHJcbiAgY29uc3QgcHJvajEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2oxXCIpO1xyXG4gIHByb2oxLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZW1tYW4tcGlwLmdpdGh1Yi5pby93ZWF0aGVyQXBwdjIvXCIpO1xyXG4gIH07XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==