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
  padding: 0;
  margin: 0;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: white; */
  min-height: 300vh;
  max-width: 100vw;
  overflow: hidden;
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
  position: fixed;
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
  z-index: 11;
  height: 10%;
  width: 25vw;
  border-bottom-left-radius: 3rem;
  display: inline;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--white-shade);
  transition: background-color 3s;
  mix-blend-mode: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

.socmedContent {
  display: flex;
}
.socicons {
  width: 3rem;
  cursor: pointer;
}
.soctext {
  margin-left: 1rem;
  font-family: Raj-light;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
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
  -webkit-outline-radius: 2rem;
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
  -webkit-outline-radius: 1rem;
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
  /* TODO */
  /* display: none; */
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
  position: relative;
  overflow: hidden;
}

.emailSection100 {
  display: flex;
  text-align: center;
  /* background-color: black; */
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.lastBackground {
  position: absolute;
  z-index: 1;
  width: 120vw;
  height: 30vh;
  /* background-color: black; */
  margin-top: auto;
  margin-bottom: auto;
  left: -10vw;
  top: 0;
  bottom: 0;
  /* background-color: black; */
  background: var(--linear-g);
  backdrop-filter: blur(5rem);
  transform: rotate(15deg);
}

.lastBackground2 {
  bottom: 20vh;
}

form {
  z-index: 2;
  display: inline;
  padding: 2rem;
  /* background-color: var(--white-shade); */
  background-color: rgba(255, 255, 255, 0.564);
  backdrop-filter: blur(1rem);
  border-radius: 2rem;
  border: 0.1rem solid rgba(111, 111, 111, 0.137);
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.086);
}

.fieldset {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border-radius: 1rem;
  font-family: Raj-bold;
  font-size: 3rem;
  color: var(--main-color);
  /* background-color: rgba(255, 255, 255, 0.478); */
  gap: 1rem;
  /* backdrop-filter: blur(1rem); */
  /* mix-blend-mode: luminosity; */
  border: 0.1rem solid rgba(111, 111, 111, 0.137);
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
  border: 0.1rem solid rgba(111, 111, 111, 0.137);
  border-radius: 0.5rem;
}

.submitButton {
  font-family: Raj-medium;
  font-size: 1.5rem;
  color: rgb(61, 61, 61);
  height: 2rem;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(111, 111, 111, 0.137);
}

.submitButton:hover {
  border: 0.1rem solid rgba(111, 111, 111, 0.537);
}

.submitButton:active {
  border: 0.1rem solid rgba(111, 111, 111);
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
  text-decoration: none;
  color: var(--main-color);
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

.black {
  background-color: var(--main-color);
}

.mainAccent {
  background-color: var(--main-accent);
}

.nameContainer2 {
  position: absolute;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  max-width: 100vw;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n  max-width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  mix-blend-mode: difference;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  position: fixed;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  z-index: 11;\r\n  height: 10%;\r\n  width: 25vw;\r\n  border-bottom-left-radius: 3rem;\r\n  display: inline;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--white-shade);\r\n  transition: background-color 3s;\r\n  mix-blend-mode: normal;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.socmedContent {\r\n  display: flex;\r\n}\r\n.socicons {\r\n  width: 3rem;\r\n  cursor: pointer;\r\n}\r\n.soctext {\r\n  margin-left: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.3rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\n.backgroundSea {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border: 1px solid var(--white-shade);\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n}\r\n.aboutmeButton:hover {\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n  position: relative;\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.slit {\r\n  z-index: 0;\r\n  height: 70vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  background-image: url(\"./pexels-myburgh-roux-4816921.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  /* transform: rotate(10deg); */\r\n  --linear-g: linear-gradient(\r\n    to bottom,\r\n    rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  /* background-image: var(--linear-g); */\r\n  mask-image: var(--linear-g);\r\n  -webkit-mask-image: var(--linear-g);\r\n}\r\n\r\n.aboutMeContainer {\r\n  border: 0.2rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  border-radius: 1rem;\r\n  height: fit-content;\r\n  background-color: #00000015;\r\n  backdrop-filter: blur(1rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  transition: opacity 3s;\r\n  opacity: 0%;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.worksTitle {\r\n  text-align: center;\r\n  height: fit-content;\r\n  font-family: Raj-bold;\r\n  color: white;\r\n  background-color: var(--dark-accent);\r\n  font-size: 4rem;\r\n}\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.slideContainer {\r\n  height: auto;\r\n  width: 80vw;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n/* .prev,\r\n  .next {\r\n    font-family: Raj-bold;\r\n    font-size: 5rem;\r\n    color: var(--white-shade);\r\n    background-color: #00000051;\r\n    cursor: pointer;\r\n  } */\r\n\r\n.projects {\r\n  border-radius: 2rem;\r\n  outline: 1rem solid black;\r\n  -webkit-outline-radius: 2rem;\r\n  width: 80vw;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  float: left;\r\n  /* transition: transform 2s;\r\n  transform: translateX(0vw); */\r\n  cursor: pointer;\r\n  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.411);\r\n}\r\n\r\n.proj1Mobile {\r\n  z-index: 2;\r\n  height: 30vh;\r\n  width: auto;\r\n  position: absolute;\r\n  left: 5vh;\r\n  bottom: 0;\r\n  outline: 0.5rem solid gray;\r\n  -webkit-outline-radius: 1rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.5rem 0.5rem 0.5rem black;\r\n}\r\n\r\n.buttonContainer {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  background-color: var(--dark-accent);\r\n  border-radius: 10rem;\r\n  text-decoration: none;\r\n  font-family: Raj-bold;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a:active {\r\n  background-color: var(--main-accent);\r\n}\r\n\r\n.projects:first-child::after {\r\n  content: \"1\";\r\n  margin-top: -10vw;\r\n  color: black;\r\n}\r\n\r\n.slider {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  margin-top: 10vh;\r\n  margin-bottom: 3vh;\r\n\r\n  transition: transform 2s;\r\n  -webkit-transition: transform 2s;\r\n  -moz-transition: transform 2s;\r\n  -o-transition: transform 2s;\r\n  transform: translateX(0vw);\r\n  /* TODO */\r\n  /* display: none; */\r\n}\r\n\r\n#span1:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span3:target ~ .slider {\r\n  transform: translateX(-160vw);\r\n}\r\n\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 100vh;\r\n  text-align: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.emailSection100 {\r\n  display: flex;\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.lastBackground {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 120vw;\r\n  height: 30vh;\r\n  /* background-color: black; */\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  left: -10vw;\r\n  top: 0;\r\n  bottom: 0;\r\n  /* background-color: black; */\r\n  background: var(--linear-g);\r\n  backdrop-filter: blur(5rem);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n.lastBackground2 {\r\n  bottom: 20vh;\r\n}\r\n\r\nform {\r\n  z-index: 2;\r\n  display: inline;\r\n  padding: 2rem;\r\n  /* background-color: var(--white-shade); */\r\n  background-color: rgba(255, 255, 255, 0.564);\r\n  backdrop-filter: blur(1rem);\r\n  border-radius: 2rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.086);\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  font-family: Raj-bold;\r\n  font-size: 3rem;\r\n  color: var(--main-color);\r\n  /* background-color: rgba(255, 255, 255, 0.478); */\r\n  gap: 1rem;\r\n  /* backdrop-filter: blur(1rem); */\r\n  /* mix-blend-mode: luminosity; */\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n}\r\n\r\n.glowingmail {\r\n  font-size: 2rem;\r\n  font-family: Raj-regular;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: Raj-regular;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.submitButton {\r\n  font-family: Raj-medium;\r\n  font-size: 1.5rem;\r\n  color: rgb(61, 61, 61);\r\n  height: 2rem;\r\n  border-radius: 0.5rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n}\r\n\r\n.submitButton:hover {\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.537);\r\n}\r\n\r\n.submitButton:active {\r\n  border: 0.1rem solid rgba(111, 111, 111);\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 15vh;\r\n  border-top: 1px solid black;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.additional {\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.secondAdditional {\r\n  align-items: end;\r\n}\r\n\r\n/* .nameContainer2 {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n} */\r\n\r\n.CPnumber {\r\n  /* letter-spacing: 0.7rem; */\r\n  cursor: pointer;\r\n  user-select: all;\r\n  /* font-family: Raj-regular; */\r\n  /* font-size: 2rem; */\r\n  height: fit-content;\r\n  overflow: visible;\r\n  text-align: center;\r\n  position: relative;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  color: var(--main-color);\r\n}\r\n\r\n.smallIcon {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n/* .CPnumber:after {\r\n  content: \"\";\r\n  position: absolute;\r\n\r\n  height: 3px;\r\n  width: 10%;\r\n  background-color: var(--main-accent);\r\n  left: 0;\r\n  bottom: 0px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.CPnumber:hover:after {\r\n  width: 100%;\r\n} */\r\n\r\n/* ///////////////////////////////////// */\r\n\r\n@keyframes rise {\r\n  from {\r\n    transform: translateY(10rem);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rise {\r\n  animation-name: rise;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: scale(-0.5, 1);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.shiver {\r\n  opacity: 0;\r\n}\r\n\r\n.shake {\r\n  opacity: 1;\r\n  animation-name: shake;\r\n  animation-duration: 3s;\r\n}\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 4px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n.black {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n.mainAccent {\r\n  background-color: var(--main-accent);\r\n}\r\n\r\n.nameContainer2 {\r\n  position: absolute;\r\n}\r\n"],"sourceRoot":""}]);
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
  body.appendChild(socmedContainer);

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

  const lastBackground = document.createElement("DIV");
  lastBackground.classList.add("lastBackground");
  emailSection.appendChild(lastBackground);

  const lastBackground2 = document.createElement("DIV");
  lastBackground2.classList.add("lastBackground");
  lastBackground2.classList.add("lastBackground2");
  emailSection.appendChild(lastBackground2);

  const emailSection100 = document.createElement("section");
  emailSection100.classList.add("emailSection100");
  emailSection.appendChild(emailSection100);

  const form = document.createElement("form");
  form.action = "https://formsubmit.co/parrenoemmanuel756@gmail.com";
  form.method = "POST";
  form.classList.add("shiver");
  emailSection100.appendChild(form);

  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("fieldset");
  form.appendChild(fieldset);

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

  const CPnumber = document.createElement("a");
  secondTexts.appendChild(CPnumber);
  CPnumber.classList.add("underline");
  CPnumber.textContent = "+63 956 688 1489";
  CPnumber.href = "tel:+639566881489";
  CPnumber.classList.add("CPnumber");

  const cpIcon = new Image();
  cpIcon.classList.add("smallIcon");
  cpIcon.src = _phone_dial_svg__WEBPACK_IMPORTED_MODULE_4__;
  CPnumber.appendChild(cpIcon);

  const personalMail = document.createElement("a");
  secondTexts.appendChild(personalMail);
  personalMail.href = "mailto:parrenoemmanuel756@gmail.com";
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
  nameContainer2.classList.add("nameContainer2");
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
/* harmony import */ var _linkedinLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedinLogo.png */ "./src/linkedinLogo.png");
/* harmony import */ var _igLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./igLogo.png */ "./src/igLogo.png");
/* harmony import */ var _githubLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./githubLogo.png */ "./src/githubLogo.png");
/* harmony import */ var _comment_quote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-quote.svg */ "./src/comment-quote.svg");






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
    threshold: 0.4,
    rootMargin: "25px",
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
    if (icon == _linkedinLogo_png__WEBPACK_IMPORTED_MODULE_2__) {
      window.open("https://www.linkedin.com/in/emmanuel-undefined-997042259/");
    } else if (icon == _igLogo_png__WEBPACK_IMPORTED_MODULE_3__) {
      window.open("https://www.instagram.com/em.n71/");
    } else if (icon == _githubLogo_png__WEBPACK_IMPORTED_MODULE_4__) {
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

console.log(socmedContent(_linkedinLogo_png__WEBPACK_IMPORTED_MODULE_2__, "see my LinkedIn!"));
useColorChangeOnScroll(
  ".backgroundSea",
  "white",
  socmedContent(_linkedinLogo_png__WEBPACK_IMPORTED_MODULE_2__, "see my LinkedIn!")
);
useColorChangeOnScroll(
  ".hundredVHcontainer",
  "#47817f",
  socmedContent(_githubLogo_png__WEBPACK_IMPORTED_MODULE_4__, "<- GitHub!!!")
);
useColorChangeOnScroll(
  ".slideContainer",
  "#00c9c8",
  socmedContent(_igLogo_png__WEBPACK_IMPORTED_MODULE_3__, "I also have Insta :)")
);
useColorChangeOnScroll(
  "form",
  "white",
  // "bffcf9",
  socmedContent(_comment_quote_svg__WEBPACK_IMPORTED_MODULE_5__, "You could send feedbacks too.")
);

// changeColorOnScroll(
//   ".backgroundSea",
//   document.querySelector(".socmedContainer"),
//   "black"
// );


/***/ }),

/***/ "./src/comment-quote.svg":
/*!*******************************!*\
  !*** ./src/comment-quote.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffa51ce4ef858d2addb9.svg";

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

/***/ "./src/githubLogo.png":
/*!****************************!*\
  !*** ./src/githubLogo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

/***/ }),

/***/ "./src/igLogo.png":
/*!************************!*\
  !*** ./src/igLogo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82b7427cf5bb2f702053.png";

/***/ }),

/***/ "./src/linkedinLogo.png":
/*!******************************!*\
  !*** ./src/linkedinLogo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1adbbd6e550e9a7d9909.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMscUlBQStDO0FBQzNGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLCtJQUFvRDtBQUNoRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLE1B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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9VcUI7QUFDYTtBQUNRO0FBQ1o7QUFDUTtBQUNLO0FBQzNDLCtDQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBUTtBQUN4QjtBQUNBLE1BQU0saUJBQWlCLHdDQUFFO0FBQ3pCO0FBQ0EsTUFBTSxpQkFBaUIsNENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3Q0FBRTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhamRoYW5pLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhamRoYW5pLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL3BleGVscy1teWJ1cmdoLXJvdXgtNDgxNjkyMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcclxuICAtLXdoaXRlLXNoYWRlOiB3aGl0ZTtcclxuICAtLW1haW4tYWNjZW50OiAjMDBjOWM4O1xyXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xyXG4gIC0tZGFyay1hY2NlbnQ6ICM0NzgxN2Y7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXHJcbiAgKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgbWluLWhlaWdodDogMzAwdmg7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBzY3JvbGwgYmFyICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICB3aWR0aDogMnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogdG9wIGJhciAqL1xyXG5cclxuLnRvcEJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0b3A6IDByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG59XHJcblxyXG4ubmFtZUNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgaGVpZ2h0OiAwLjdyZW07XHJcbiAgd2lkdGg6IDAuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuLm5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG4udlNtYWxsVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLnNvY21lZENvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3JlbTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzcztcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnNvY21lZENvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNvY2ljb25zIHtcclxuICB3aWR0aDogM3JlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvY3RleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmlyc3RQYXJ0IHtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kU2VhIHtcclxuICB3aWR0aDogMTYwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXNrOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpLCB0cmFuc3BhcmVudCk7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byB0b3AsXHJcbiAgICB0cmFuc3BhcmVudCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAgIHRyYW5zcGFyZW50XHJcbiAgKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbn1cclxuXHJcbi5ncmVldCB7XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwdmg7XHJcbiAgbGVmdDogMTB2dztcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uaW50cm8ge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTsgKi9cclxufVxyXG5cclxuLmFib3V0bWVCdXR0b24ge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwdmg7XHJcbiAgbGVmdDogMTB2dztcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYWJvdXRtZUJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjgxNSk7XHJcbn1cclxuLmFib3V0bWVCdXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbn1cclxuXHJcbi5pbnRybzIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwdmg7XHJcbiAgcmlnaHQ6IDEwdnc7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbn1cclxuXHJcbi8qIHBhZ2UgYnJlYWsgKi9cclxuXHJcbi5wYWdlYnJlYWsge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGhlaWdodDogMC4zcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBtYXJnaW4tbGVmdDogMzB2dztcclxuICBtYXJnaW4tcmlnaHQ6IDMwdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG4gIG9wYWNpdHk6IDQwJTtcclxufVxyXG5cclxuLyogc2Vjb25kIHBhcnQgKi9cclxuXHJcbi5hYm91dE1lQmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcclxuICAgIHZhcigtLWRhcmstYWNjZW50KSAvKiB2YXIoLS1saWdodC1hY2NlbnQpICovXHJcbiAgKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIC8qIHBhZGRpbmctdG9wOiA4cmVtOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmh1bmRyZWRWSGNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc2xpdCB7XHJcbiAgei1pbmRleDogMDtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgLyogdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpOyAqL1xyXG4gIC0tbGluZWFyLWc6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICApO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxpbmVhci1nKTsgKi9cclxuICBtYXNrLWltYWdlOiB2YXIoLS1saW5lYXItZyk7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1saW5lYXItZyk7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyIHtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2lkZW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhwYW5kIHtcclxuICBhbmltYXRpb24tbmFtZTogd2lkZW47XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG59XHJcblxyXG4uYWJvdXRNZUNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLkFNVGl0bGUge1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMXMgMTBzO1xyXG59XHJcblxyXG4uQU1UaXRsZTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxufVxyXG5cclxuLmFib3V0TWVQYXJhZyB7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMS41cztcclxufVxyXG5cclxuc3Bhbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTB2aCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5mcm9tUmlnaHQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgLyogb3BhY2l0eTogMTAwJTsgKi9cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwdmgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZnJvbUxlZnQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuLnBvcCB7XHJcbn1cclxuXHJcbi5hcHBlYXIge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgM3M7XHJcbiAgb3BhY2l0eTogMCU7XHJcbn1cclxuXHJcbi5wb3Age1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dvcmtzLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLndvcmtzVGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuLndvcmtzIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1kYXJrLWFjY2VudCksXHJcbiAgICB2YXIoLS1tYWluLWFjY2VudClcclxuICApO1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGVDb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogODB2dztcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcblxyXG4vKiAucHJldixcclxuICAubmV4dCB7XHJcbiAgICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0gKi9cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBvdXRsaW5lOiAxcmVtIHNvbGlkIGJsYWNrO1xyXG4gIC13ZWJraXQtb3V0bGluZS1yYWRpdXM6IDJyZW07XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnJlbSAycmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQxMSk7XHJcbn1cclxuXHJcbi5wcm9qMU1vYmlsZSB7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDV2aDtcclxuICBib3R0b206IDA7XHJcbiAgb3V0bGluZTogMC41cmVtIHNvbGlkIGdyYXk7XHJcbiAgLXdlYmtpdC1vdXRsaW5lLXJhZGl1czogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMC41cmVtIGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uQ29udGFpbmVyID4gYSB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25Db250YWluZXIgPiBhOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG59XHJcblxyXG4ucHJvamVjdHM6Zmlyc3QtY2hpbGQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIjFcIjtcclxuICBtYXJnaW4tdG9wOiAtMTB2dztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcclxuICAvKiBUT0RPICovXHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxufVxyXG5cclxuI3NwYW4xOnRhcmdldCB+IC5zbGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODB2dyk7XHJcbn1cclxuXHJcbiNzcGFuMjp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xyXG59XHJcblxyXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcclxufVxyXG5cclxuI3NwYW4zOnRhcmdldCB+IC5zbGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTYwdncpO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vL2VtYWlsLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4uZW1haWxTZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWFjY2VudCksXHJcbiAgICB2YXIoLS1saWdodC1hY2NlbnQpLFxyXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVtYWlsU2VjdGlvbjEwMCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYXN0QmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHZ3O1xyXG4gIGhlaWdodDogMzB2aDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgbGVmdDogLTEwdnc7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saW5lYXItZyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVyZW0pO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxufVxyXG5cclxuLmxhc3RCYWNrZ3JvdW5kMiB7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTY0KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxuICBib3gtc2hhZG93OiAxcmVtIDFyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcclxufVxyXG5cclxuLmZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzgpOyAqL1xyXG4gIGdhcDogMXJlbTtcclxuICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7ICovXHJcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7ICovXHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjEzNyk7XHJcbn1cclxuXHJcbi5nbG93aW5nbWFpbCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjUzNyk7XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b246YWN0aXZlIHtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEpO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubW9yZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWNvbmRBZGRpdGlvbmFsIHtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4vKiAubmFtZUNvbnRhaW5lcjIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn0gKi9cclxuXHJcbi5DUG51bWJlciB7XHJcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IGFsbDtcclxuICAvKiBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7ICovXHJcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5zbWFsbEljb24ge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLyogLkNQbnVtYmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uQ1BudW1iZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG5Aa2V5ZnJhbWVzIHJpc2Uge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcmVtKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlzZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJpc2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMC41LCAxKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hpdmVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uc2hha2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuLnVuZGVybGluZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnVuZGVybGluZTpob3Zlcjo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4ubWFpbkFjY2VudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG59XHJcblxyXG4ubmFtZUNvbnRhaW5lcjIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wi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QUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSCwwQ0FBMEM7O0FBRTFDO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLS1tYWluLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgLS13aGl0ZS1zaGFkZTogd2hpdGU7XFxyXFxuICAtLW1haW4tYWNjZW50OiAjMDBjOWM4O1xcclxcbiAgLS1saWdodC1hY2NlbnQ6ICNiZmZjZjk7XFxyXFxuICAtLWRhcmstYWNjZW50OiAjNDc4MTdmO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbCBiYXIgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0b3AgYmFyICovXFxyXFxuXFxyXFxuLnRvcEJhciB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRvcDogMHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XFxyXFxufVxcclxcblxcclxcbi5uYW1lQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuICBoZWlnaHQ6IDAuN3JlbTtcXHJcXG4gIHdpZHRoOiAwLjdyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLUJvbGQudHRmXFxcIik7XFxyXFxufVxcclxcbi5uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1MaWdodC50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZTbWFsbFRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jbWVkQ29udGFpbmVyIHtcXHJcXG4gIHotaW5kZXg6IDExO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgM3M7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NtZWRDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5zb2NpY29ucyB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnNvY3RleHQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0UGFydCB7XFxyXFxuICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmRTZWEge1xcclxcbiAgd2lkdGg6IDE2MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCksIHRyYW5zcGFyZW50KTtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byB0b3AsXFxyXFxuICAgIHRyYW5zcGFyZW50LFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCksXFxyXFxuICAgIHRyYW5zcGFyZW50XFxyXFxuICApO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktTWVkaXVtLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZXQge1xcclxcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDMwdmg7XFxyXFxuICBsZWZ0OiAxMHZ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8ge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7ICovXFxyXFxufVxcclxcblxcclxcbi5hYm91dG1lQnV0dG9uIHtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA2MHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5hYm91dG1lQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xcclxcbn1cXHJcXG4uYWJvdXRtZUJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8yIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjB2aDtcXHJcXG4gIHJpZ2h0OiAxMHZ3O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogcGFnZSBicmVhayAqL1xcclxcblxcclxcbi5wYWdlYnJlYWsge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBoZWlnaHQ6IDAuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcclxcbiAgb3BhY2l0eTogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWNvbmQgcGFydCAqL1xcclxcblxcclxcbi5hYm91dE1lQmFja2dyb3VuZCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIC8qIHBhZGRpbmctdG9wOiA4cmVtOyAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVuZHJlZFZIY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaXQge1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9wZXhlbHMtbXlidXJnaC1yb3V4LTQ4MTY5MjEuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgKi9cXHJcXG4gIC0tbGluZWFyLWc6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDApXFxyXFxuICApO1xcclxcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbGluZWFyLWcpOyAqL1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1saW5lYXItZyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB3aWRlbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZUNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uQU1UaXRsZSB7XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxcyAxMHM7XFxyXFxufVxcclxcblxcclxcbi5BTVRpdGxlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lUGFyYWcge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XFxyXFxufVxcclxcblxcclxcbnNwYW46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTB2aCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZnJvbVJpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mcm9tTGVmdCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcCB7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXIge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcXHJcXG4gIG9wYWNpdHk6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wIHtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dvcmtzLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi53b3Jrc1RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1tYWluLWFjY2VudClcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogLnByZXYsXFxyXFxuICAubmV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG91dGxpbmU6IDFyZW0gc29saWQgYmxhY2s7XFxyXFxuICAtd2Via2l0LW91dGxpbmUtcmFkaXVzOiAycmVtO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7ICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAycmVtIDJyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2oxTW9iaWxlIHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDV2aDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG91dGxpbmU6IDAuNXJlbSBzb2xpZCBncmF5O1xcclxcbiAgLXdlYmtpdC1vdXRsaW5lLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDAuNXJlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyID4gYSB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbnRhaW5lciA+IGE6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzOmZpcnN0LWNoaWxkOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiMVxcXCI7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTB2dztcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XFxyXFxuICAvKiBUT0RPICovXFxyXFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjE6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BhbjM6dGFyZ2V0IH4gLnNsaWRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2MHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy9lbWFpbC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4uZW1haWxTZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWFjY2VudCksXFxyXFxuICAgIHZhcigtLWxpZ2h0LWFjY2VudCksXFxyXFxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxcclxcbiAgKTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWxTZWN0aW9uMTAwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFzdEJhY2tncm91bmQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMjB2dztcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxuICBsZWZ0OiAtMTB2dztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGluZWFyLWcpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVyZW0pO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFzdEJhY2tncm91bmQyIHtcXHJcXG4gIGJvdHRvbTogMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NjQpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xcclxcbiAgYm94LXNoYWRvdzogMXJlbSAxcmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxyXFxufVxcclxcblxcclxcbi5maWVsZHNldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3OCk7ICovXFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7ICovXFxyXFxuICAvKiBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTsgKi9cXHJcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2xvd2luZ21haWwge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC41MzcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuLm1vcmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaXRpb25hbCB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kQWRkaXRpb25hbCB7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubmFtZUNvbnRhaW5lcjIge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLkNQbnVtYmVyIHtcXHJcXG4gIC8qIGxldHRlci1zcGFjaW5nOiAwLjdyZW07ICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogYWxsO1xcclxcbiAgLyogZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyOyAqL1xcclxcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsSWNvbiB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLkNQbnVtYmVyOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLkNQbnVtYmVyOmhvdmVyOmFmdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyByaXNlIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yaXNlIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiByaXNlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTAuNSwgMSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoaXZlciB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hha2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxufVxcclxcbi51bmRlcmxpbmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmU6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5ibGFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5BY2NlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUNvbnRhaW5lcjIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTZWEgZnJvbSBcIi4vcGV4ZWxzLXNhbXByZWV0eS1hbGktNjk1Nzk0LmpwZ1wiO1xyXG5pbXBvcnQgd2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyQXBwVjIucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyTW9iaWxlIGZyb20gXCIuL3dlYXRoZXJBcHBWMm1vYmlsZS5wbmdcIjtcclxuaW1wb3J0IHByb2plY3QyIGZyb20gXCIuL3Byb2oyLnBuZ1wiO1xyXG5cclxuaW1wb3J0IEljb25QaG9uZSBmcm9tIFwiLi9waG9uZS1kaWFsLnN2Z1wiO1xyXG5pbXBvcnQgSWNvbkVtYWlsIGZyb20gXCIuL2VtYWlsLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxheW91dCgpIHtcclxuICAvL2JvZHlcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gIC8vdG9wIGJhclxyXG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHRvcEJhci5jbGFzc0xpc3QuYWRkKFwidG9wQmFyXCIpO1xyXG5cclxuICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIHRvcEJhci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG4gIGNvbnN0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIG15TmFtZS50ZXh0Q29udGVudCA9IFwiRW1tYW51ZWwgUGFycmXDsW9cIjtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG15TmFtZSk7XHJcblxyXG4gIGNvbnN0IHNvY21lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc29jbWVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzb2NtZWRDb250YWluZXJcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChzb2NtZWRDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBteU5hbWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWVEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ2U21hbGxUZXh0XCIpO1xyXG4gIG15TmFtZS5hcHBlbmRDaGlsZChteU5hbWVEZXRhaWxzKTtcclxuICBteU5hbWVEZXRhaWxzLnRleHRDb250ZW50ID0gXCJCU0lUIFNUVURFTlQgQVQgQkFUQU5HQVMgU1RBVEUgVU5JVkVSU0lUWVwiO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XHJcblxyXG4gIC8vZmlyc3QgcHJvbXB0XHJcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZmlyc3RQYXJ0LmNsYXNzTGlzdC5hZGQoXCJmaXJzdFBhcnRcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChmaXJzdFBhcnQpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kU2VhID0gbmV3IEltYWdlKCk7XHJcbiAgYmFja2dyb3VuZFNlYS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFNlYVwiKTtcclxuICBiYWNrZ3JvdW5kU2VhLnNyYyA9IFNlYTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFNlYSk7XHJcbiAgYmFja2dyb3VuZFNlYS5hbHQgPSBcImJhY2tncm91bmRcIjtcclxuXHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJIRUxMTyxcIjtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRcIik7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChncmVldGluZyk7XHJcblxyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIkkgYW0gRU1NQU5VRUxcIjtcclxuICBncmVldGluZy5hcHBlbmRDaGlsZChpbnRybyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbi5ocmVmID0gXCIjYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dG1lQnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGludHJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJpbnRybzJcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIGludHJvMi50ZXh0Q29udGVudCA9IFwiQSBzZWxmLXRhdWdodCBwcm9ncmFtbWVyXCI7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGludHJvMik7XHJcblxyXG4gIC8vcGFnZSBicmVha1xyXG5cclxuICAvL2Fib3V0IG1lXHJcbiAgY29uc3QgYWJvdXRNZUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQmFja2dyb3VuZFwiKTtcclxuICAvLyBhYm91dE1lQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmlkID0gXCJhYm91dE1lQmFja2dyb3VuZFwiO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRNZUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBodW5kcmVkVkhjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGh1bmRyZWRWSGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaHVuZHJlZFZIY29udGFpbmVyXCIpO1xyXG5cclxuICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChodW5kcmVkVkhjb250YWluZXIpO1xyXG5cclxuICBjb25zdCBzbGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGl0LmNsYXNzTGlzdC5hZGQoXCJzbGl0XCIpO1xyXG5cclxuICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChzbGl0KTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUNvbnRhaW5lclwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBBTVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJBTVRpdGxlXCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBBTVRpdGxlLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoQU1UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVQYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZVBhcmFnXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5pbm5lckhUTUwgPVxyXG4gICAgXCJJIGFtIGEgc2VsZi10YXVnaHQgPHNwYW4+d2ViIGRldmVsb3Blcjwvc3Bhbj4uIEN1cnJlbnRseSwgSSBhbSBzdHVkeWluZyA8c3Bhbj5CUyBpbiBpbmZvcm1hdGlvbiB0ZWNobm9sb2d5IGF0IHRoZSBCYXRhbmdhcyBTdGF0ZSBVbml2ZXJzaXR5PC9zcGFuPi4gSSBoYXZlIGJlZW4gaG9uaW5nIG15IHNraWxscyBzaW5jZSBsYXRlIDIwMjIgKHRocm91Z2ggdGhlIDxzcGFuPk9kaW4gUHJvamVjdDwvc3Bhbj4gYW5kIG90aGVyIG9ubGluZSByZXNvdXJjZXMpLiA8c3Bhbj5JIGFtIGNvbmZpZGVudCB3aXRoIG15IGVudHJ5LWxldmVsIGZyb250LWVuZCBkZXZlbG9wbWVudCBza2lsbHM8L3NwYW4+LiBNeSBwcmltYXJ5IGxhbmd1YWdlcyBhcmUgPHNwYW4+SFRNTCwgQ1NTLCBhbmQgSmF2YXNjcmlwdDwvc3Bhbj4gLSBidXQgSSBjYW4gYWxzbyB1c2UgUHl0aG9uLCBXZWJwYWNrLCBDTEksIGFuZCBDKysgdG8gYSBjZXJ0YWluIGV4dGVudC5cIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQYXJhZyk7XHJcblxyXG4gIC8vcHJvamVjdHNcclxuICBjb25zdCB3b3Jrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHdvcmtzVGl0bGUpO1xyXG4gIHdvcmtzVGl0bGUuY2xhc3NMaXN0LmFkZChcIndvcmtzVGl0bGVcIik7XHJcblxyXG4gIGNvbnN0IHdvcmtzVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwid29ya3NUaXRsZVwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJTT01FIE9GIE1ZIFdPUktTXCI7XHJcbiAgd29ya3NUaXRsZS5hcHBlbmRDaGlsZCh3b3Jrc1RpdGxlVGV4dCk7XHJcblxyXG4gIGNvbnN0IHdvcmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgLy8gd29ya3MuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwid29ya3NcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrcyk7XHJcblxyXG4gIC8vIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIHByZXYudGV4dENvbnRlbnQgPSBcIjxcIjtcclxuICAvLyBwcmV2LmNsYXNzTGlzdC5hZGQoXCJwcmV2XCIpO1xyXG4gIC8vIHdvcmtzLmFwcGVuZENoaWxkKHByZXYpO1xyXG5cclxuICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUNvbnRhaW5lclwiKTtcclxuICB3b3Jrcy5hcHBlbmRDaGlsZChzbGlkZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIG5leHQudGV4dENvbnRlbnQgPSBcIj5cIjtcclxuICAvLyBuZXh0LmNsYXNzTGlzdC5hZGQoXCJuZXh0XCIpO1xyXG4gIC8vIHdvcmtzLmFwcGVuZENoaWxkKG5leHQpO1xyXG5cclxuICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHNwYW4xLmlkID0gXCJzcGFuMVwiO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4xKTtcclxuXHJcbiAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBzcGFuMi5pZCA9IFwic3BhbjJcIjtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuMik7XHJcblxyXG4gIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgc3BhbjIuaWQgPSBcInNwYW4zXCI7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbjMpO1xyXG5cclxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblxyXG4gIGNvbnN0IHByb2oxID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajEuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMS5zcmMgPSB3ZWF0aGVyO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBwcm9qMS5jbGFzc0xpc3QuYWRkKFwicHJvajFcIik7XHJcblxyXG4gIGNvbnN0IHByb2oxTW9iaWxlID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajFNb2JpbGUuY2xhc3NMaXN0LmFkZChcInByb2oxTW9iaWxlXCIpO1xyXG4gIHByb2oxTW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajFNb2JpbGUuc3JjID0gd2VhdGhlck1vYmlsZTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajFNb2JpbGUpO1xyXG5cclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajEpO1xyXG5cclxuICBjb25zdCBwcm9qMiA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajIuc3JjID0gcHJvamVjdDI7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMik7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2oyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qMyA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2ozLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajMuc3JjID0gd2VhdGhlcjtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2ozKTtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvajNcIik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIik7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbjJcIik7XHJcbiAgYnV0dG9uMi5ocmVmID0gXCIjc3BhbjJcIjtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24xLmNsYXNzTGlzdC5hZGQoXCJidXR0b24xXCIpO1xyXG4gIGJ1dHRvbjEuaHJlZiA9IFwiI3NwYW4xXCI7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbjEpO1xyXG5cclxuICBjb25zdCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uM1wiKTtcclxuICBidXR0b24zLmhyZWYgPSBcIiNzcGFuM1wiO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24zKTtcclxuXHJcbiAgLy9jb250YWN0IG1lISBlbWFpbCBwYWdlXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb25cIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBsYXN0QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgbGFzdEJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImxhc3RCYWNrZ3JvdW5kXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5hcHBlbmRDaGlsZChsYXN0QmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGxhc3RCYWNrZ3JvdW5kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgbGFzdEJhY2tncm91bmQyLmNsYXNzTGlzdC5hZGQoXCJsYXN0QmFja2dyb3VuZFwiKTtcclxuICBsYXN0QmFja2dyb3VuZDIuY2xhc3NMaXN0LmFkZChcImxhc3RCYWNrZ3JvdW5kMlwiKTtcclxuICBlbWFpbFNlY3Rpb24uYXBwZW5kQ2hpbGQobGFzdEJhY2tncm91bmQyKTtcclxuXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uMTAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uMTAwLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb24xMDBcIik7XHJcbiAgZW1haWxTZWN0aW9uLmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbjEwMCk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiaHR0cHM6Ly9mb3Jtc3VibWl0LmNvL3BhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInNoaXZlclwiKTtcclxuICBlbWFpbFNlY3Rpb24xMDAuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICBsZWdlbmQuaW5uZXJIVE1MID0gYEludGVyZXN0ZWQ/IDxzcGFuIGNsYXNzPVwiZ2xvd2luZ21haWxcIj5FbWFpbCBtZSBub3chPC9zcGFuPmA7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuXHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZW1haWwucGxhY2Vob2xkZXIgPSBcIkVNQUlMXCI7XHJcbiAgZW1haWwudHlwZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbC5uYW1lID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcblxyXG4gIGNvbnN0IHNlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZW5kZXIucGxhY2Vob2xkZXIgPSBcIk5BTUVcIjtcclxuICBzZW5kZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlbmRlci5uYW1lID0gXCJuYW1lXCI7XHJcbiAgc2VuZGVyLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzZW5kZXIpO1xyXG5cclxuICBjb25zdCBzdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHN1YmplY3QucGxhY2Vob2xkZXIgPSBcIk1BSUwnUyBTVUJKRUNUXCI7XHJcbiAgc3ViamVjdC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc3ViamVjdC5uYW1lID0gXCJzdWJqZWN0XCI7XHJcbiAgc3ViamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3ViamVjdCk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiTUVTU0FHRVwiO1xyXG4gIG1lc3NhZ2UubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gIG1lc3NhZ2UuY29scyA9IDMwO1xyXG4gIG1lc3NhZ2Uucm93cyA9IDEwO1xyXG4gIG1lc3NhZ2Uuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgbWVzc2FnZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnV0dG9uXCIpO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vbW9yZSBhYm91dCBtZVxyXG4gIGNvbnN0IG1vcmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbW9yZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vcmVcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChtb3JlU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZpcnN0VGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpcnN0VGV4dHMuY2xhc3NMaXN0LmFkZChcImFkZGl0aW9uYWxcIik7XHJcblxyXG4gIGNvbnN0IHNlY29uZFRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzZWNvbmRUZXh0cy5jbGFzc0xpc3QuYWRkKFwiYWRkaXRpb25hbFwiKTtcclxuICBzZWNvbmRUZXh0cy5jbGFzc0xpc3QuYWRkKFwic2Vjb25kQWRkaXRpb25hbFwiKTtcclxuXHJcbiAgY29uc3QgQ1BudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChDUG51bWJlcik7XHJcbiAgQ1BudW1iZXIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBDUG51bWJlci50ZXh0Q29udGVudCA9IFwiKzYzIDk1NiA2ODggMTQ4OVwiO1xyXG4gIENQbnVtYmVyLmhyZWYgPSBcInRlbDorNjM5NTY2ODgxNDg5XCI7XHJcbiAgQ1BudW1iZXIuY2xhc3NMaXN0LmFkZChcIkNQbnVtYmVyXCIpO1xyXG5cclxuICBjb25zdCBjcEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBjcEljb24uY2xhc3NMaXN0LmFkZChcInNtYWxsSWNvblwiKTtcclxuICBjcEljb24uc3JjID0gSWNvblBob25lO1xyXG4gIENQbnVtYmVyLmFwcGVuZENoaWxkKGNwSWNvbik7XHJcblxyXG4gIGNvbnN0IHBlcnNvbmFsTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKHBlcnNvbmFsTWFpbCk7XHJcbiAgcGVyc29uYWxNYWlsLmhyZWYgPSBcIm1haWx0bzpwYXJyZW5vZW1tYW51ZWw3NTZAZ21haWwuY29tXCI7XHJcbiAgcGVyc29uYWxNYWlsLnRleHRDb250ZW50ID0gXCJwYXJyZW5vZW1tYW51ZWw3NTZAZ21haWwuY29tXCI7XHJcbiAgcGVyc29uYWxNYWlsLmNsYXNzTGlzdC5hZGQoXCJDUG51bWJlclwiKTtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcImVtYWlsQWRkcmVzc1wiKTtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChwZXJzb25hbE1haWwpO1xyXG5cclxuICBjb25zdCBlbWFpbEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZChcInNtYWxsSWNvblwiKTtcclxuICBlbWFpbEljb24uc3JjID0gSWNvbkVtYWlsO1xyXG4gIHBlcnNvbmFsTWFpbC5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xyXG5cclxuICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChmaXJzdFRleHRzKTtcclxuICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmRUZXh0cyk7XHJcblxyXG4gIGNvbnN0IG5hbWVDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lclwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lcjJcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJkaWZmZXJlbmNlXCI7XHJcblxyXG4gIGNvbnN0IGNpcmNsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNpcmNsZTIuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5hcHBlbmRDaGlsZChjaXJjbGUyKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lMi5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBteU5hbWUyLnRleHRDb250ZW50ID0gXCJFbW1hbnVlbCBQYXJyZcOxb1wiO1xyXG4gIG5hbWVDb250YWluZXIyLmFwcGVuZENoaWxkKG15TmFtZTIpO1xyXG5cclxuICAvLyBuYW1lQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lcjJcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBmaXJzdFRleHRzLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIyKTtcclxufVxyXG4vL1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwiLi9kb20uanNcIjtcclxuaW1wb3J0IGxpbmtlZGluIGZyb20gXCIuL2xpbmtlZGluTG9nby5wbmdcIjtcclxuaW1wb3J0IGlnIGZyb20gXCIuL2lnTG9nby5wbmdcIjtcclxuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi9naXRodWJMb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZmVlZGJhY2sgZnJvbSBcIi4vY29tbWVudC1xdW90ZS5zdmdcIjtcclxubGF5b3V0KCk7XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25UcmlnZ2VyKHNlY3Rpb24sIGFuaW1hdGlvbk5hbWUsIGV4cGFuZCA9IG51bGwpIHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcm9vdDogbnVsbCxcclxuICAgIHRocmVzaG9sZDogMC40LFxyXG4gICAgcm9vdE1hcmdpbjogXCIyNXB4XCIsXHJcbiAgfTtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJhYm91dE1lQ29udGFpbmVyXCIpICYmXHJcbiAgICAgICAgZW50cnkuaXNJbnRlcnNlY3RpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoZXhwYW5kKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWJvdXRNZUNvbnRhaW5lclwiKSAmJlxyXG4gICAgICAgICFlbnRyeS5pc0ludGVyc2VjdGluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShleHBhbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBvcHRpb25zKTtcclxuXHJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9uVXNlKGNsYXNzbmFtZSwgYW5pbWF0aW9uMSwgYW5pbWF0aW9uMiA9IG51bGwpIHtcclxuICBjb25zdCByaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzbmFtZSk7XHJcbiAgcmlnaHRzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBhbmltYXRpb24xLCBhbmltYXRpb24yKTtcclxuICB9KTtcclxufVxyXG4vL2xvb3AgY2FuIGJlIHVzZWQgaGVyZVxyXG4oKCkgPT4ge1xyXG4gIGFuaW1hdGlvblVzZShcIi5yaWdodFwiLCBcImZyb21SaWdodFwiKTtcclxuICBhbmltYXRpb25Vc2UoXCIubGVmdFwiLCBcImZyb21MZWZ0XCIpO1xyXG4gIGFuaW1hdGlvblVzZShcIi5hcHBlYXJcIiwgXCJwb3BcIiwgXCJleHBhbmRcIik7XHJcbiAgYW5pbWF0aW9uVXNlKFwiLnVwXCIsIFwicmlzZVwiKTtcclxuICBhbmltYXRpb25Vc2UoXCIuc2hpdmVyXCIsIFwic2hha2VcIik7XHJcbn0pKCk7XHJcblxyXG4vLyBjb25zdCBuYW1lID0gXCJmcm9tUmlnaHRcIjtcclxuLy8gYW5pbWF0aW9uVHJpZ2dlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkFNVGl0bGVcIiksIG5hbWUpO1xyXG4oZnVuY3Rpb24gb3BlbldlYnNpdGUoKSB7XHJcbiAgY29uc3QgcHJvajEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2oxXCIpO1xyXG4gIHByb2oxLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZW1tYW4tcGlwLmdpdGh1Yi5pby93ZWF0aGVyQXBwdjIvXCIpO1xyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDb2xvck9uU2Nyb2xsKHRvT2JzZXJ2ZSwgZWxlbWVudCwgY29sb3IsIGljb24pIHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgcm9vdDogbnVsbCxcclxuICAgIHRocmVzaG9sZDogMC40LFxyXG4gICAgcm9vdE1hcmdpbjogXCIyNXB4XCIsXHJcbiAgfTtcclxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgfSBlbHNlIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGljb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBvcHRpb25zKTtcclxuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodG9PYnNlcnZlKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUNvbG9yQ2hhbmdlT25TY3JvbGwob2JzZXJ2ZSwgY29sb3IsIGljb24pIHtcclxuICAvLyBjb25zdCB0b09ic2VydmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9ic2VydmUpO1xyXG4gIGNvbnN0IHRvQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb2NtZWRDb250YWluZXJcIik7XHJcbiAgY2hhbmdlQ29sb3JPblNjcm9sbChvYnNlcnZlLCB0b0NoYW5nZSwgY29sb3IsIGljb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb2NtZWRDb250ZW50KGljb24sIG1lc3NhZ2UsIGFuaW1hdGlvbiA9IG51bGwpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29jbWVkQ29udGVudFwiKTtcclxuICBjb25zdCBzb2NJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgc29jSWNvbi5jbGFzc0xpc3QuYWRkKFwic29jaWNvbnNcIik7XHJcbiAgc29jSWNvbi5zcmMgPSBpY29uO1xyXG4gIHNvY0ljb24ub25jbGljayA9ICgpID0+IHtcclxuICAgIGlmIChpY29uID09IGxpbmtlZGluKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2VtbWFudWVsLXVuZGVmaW5lZC05OTcwNDIyNTkvXCIpO1xyXG4gICAgfSBlbHNlIGlmIChpY29uID09IGlnKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9lbS5uNzEvXCIpO1xyXG4gICAgfSBlbHNlIGlmIChpY29uID09IGdpdGh1Yikge1xyXG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9FbW1hbi1waXBcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc29jSWNvbik7XHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwic29jdGV4dFwiKTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gIHJldHVybiBbY29udGFpbmVyXVswXTtcclxufVxyXG5cclxuY29uc29sZS5sb2coc29jbWVkQ29udGVudChsaW5rZWRpbiwgXCJzZWUgbXkgTGlua2VkSW4hXCIpKTtcclxudXNlQ29sb3JDaGFuZ2VPblNjcm9sbChcclxuICBcIi5iYWNrZ3JvdW5kU2VhXCIsXHJcbiAgXCJ3aGl0ZVwiLFxyXG4gIHNvY21lZENvbnRlbnQobGlua2VkaW4sIFwic2VlIG15IExpbmtlZEluIVwiKVxyXG4pO1xyXG51c2VDb2xvckNoYW5nZU9uU2Nyb2xsKFxyXG4gIFwiLmh1bmRyZWRWSGNvbnRhaW5lclwiLFxyXG4gIFwiIzQ3ODE3ZlwiLFxyXG4gIHNvY21lZENvbnRlbnQoZ2l0aHViLCBcIjwtIEdpdEh1YiEhIVwiKVxyXG4pO1xyXG51c2VDb2xvckNoYW5nZU9uU2Nyb2xsKFxyXG4gIFwiLnNsaWRlQ29udGFpbmVyXCIsXHJcbiAgXCIjMDBjOWM4XCIsXHJcbiAgc29jbWVkQ29udGVudChpZywgXCJJIGFsc28gaGF2ZSBJbnN0YSA6KVwiKVxyXG4pO1xyXG51c2VDb2xvckNoYW5nZU9uU2Nyb2xsKFxyXG4gIFwiZm9ybVwiLFxyXG4gIFwid2hpdGVcIixcclxuICAvLyBcImJmZmNmOVwiLFxyXG4gIHNvY21lZENvbnRlbnQoZmVlZGJhY2ssIFwiWW91IGNvdWxkIHNlbmQgZmVlZGJhY2tzIHRvby5cIilcclxuKTtcclxuXHJcbi8vIGNoYW5nZUNvbG9yT25TY3JvbGwoXHJcbi8vICAgXCIuYmFja2dyb3VuZFNlYVwiLFxyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29jbWVkQ29udGFpbmVyXCIpLFxyXG4vLyAgIFwiYmxhY2tcIlxyXG4vLyApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=