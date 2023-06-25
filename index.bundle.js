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
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgba(36, 36, 36, 0);
  backdrop-filter: blur(2rem);
  width: fit-content;
  height: fit-content;
  text-decoration: none;
  border: 1px solid var(--white-shade);
  transition: outline 1s;
}
.aboutmeButton:hover {
  border: 1px solid var(--main-accent);
  color: var(--main-accent);
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

/* //////////////////SLIDER////////////////////////////////////////// */

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

/* //////////////////SLIDER////////////////////////////////////////// */

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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  max-width: 100vw;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n  max-width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  mix-blend-mode: difference;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  position: fixed;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  z-index: 11;\r\n  height: 10%;\r\n  width: 25vw;\r\n  border-bottom-left-radius: 3rem;\r\n  display: inline;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--white-shade);\r\n  transition: background-color 3s;\r\n  mix-blend-mode: normal;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.socmedContent {\r\n  display: flex;\r\n}\r\n.socicons {\r\n  width: 3rem;\r\n  cursor: pointer;\r\n}\r\n.soctext {\r\n  margin-left: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.3rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\n.backgroundSea {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n  border: 1px solid var(--white-shade);\r\n  transition: outline 1s;\r\n}\r\n.aboutmeButton:hover {\r\n  border: 1px solid var(--main-accent);\r\n  color: var(--main-accent);\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n  position: relative;\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.slit {\r\n  z-index: 0;\r\n  height: 70vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  background-image: url(\"./pexels-myburgh-roux-4816921.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  /* transform: rotate(10deg); */\r\n  --linear-g: linear-gradient(\r\n    to bottom,\r\n    rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  /* background-image: var(--linear-g); */\r\n  mask-image: var(--linear-g);\r\n  -webkit-mask-image: var(--linear-g);\r\n}\r\n\r\n.aboutMeContainer {\r\n  border: 0.2rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  border-radius: 1rem;\r\n  height: fit-content;\r\n  background-color: #00000015;\r\n  backdrop-filter: blur(1rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  transition: opacity 3s;\r\n  opacity: 0%;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.worksTitle {\r\n  text-align: center;\r\n  height: fit-content;\r\n  font-family: Raj-bold;\r\n  color: white;\r\n  background-color: var(--dark-accent);\r\n  font-size: 4rem;\r\n}\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* //////////////////SLIDER////////////////////////////////////////// */\r\n\r\n.slideContainer {\r\n  height: auto;\r\n  width: 80vw;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n/* .prev,\r\n  .next {\r\n    font-family: Raj-bold;\r\n    font-size: 5rem;\r\n    color: var(--white-shade);\r\n    background-color: #00000051;\r\n    cursor: pointer;\r\n  } */\r\n\r\n.projects {\r\n  border-radius: 2rem;\r\n  outline: 1rem solid black;\r\n  -webkit-outline-radius: 2rem;\r\n  width: 80vw;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  float: left;\r\n  /* transition: transform 2s;\r\n  transform: translateX(0vw); */\r\n  cursor: pointer;\r\n  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.411);\r\n}\r\n\r\n.proj1Mobile {\r\n  z-index: 2;\r\n  height: 30vh;\r\n  width: auto;\r\n  position: absolute;\r\n  left: 5vh;\r\n  bottom: 0;\r\n  outline: 0.5rem solid gray;\r\n  -webkit-outline-radius: 1rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.5rem 0.5rem 0.5rem black;\r\n}\r\n\r\n.projects:first-child::after {\r\n  content: \"1\";\r\n  margin-top: -10vw;\r\n  color: black;\r\n}\r\n\r\n.slider {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  margin-top: 10vh;\r\n  margin-bottom: 3vh;\r\n\r\n  transition: transform 2s;\r\n  -webkit-transition: transform 2s;\r\n  -moz-transition: transform 2s;\r\n  -o-transition: transform 2s;\r\n  transform: translateX(0vw);\r\n  /* TODO */\r\n  /* display: none; */\r\n}\r\n\r\n/* //////////////////SLIDER////////////////////////////////////////// */\r\n\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 100vh;\r\n  text-align: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.emailSection100 {\r\n  display: flex;\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.lastBackground {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 120vw;\r\n  height: 30vh;\r\n  /* background-color: black; */\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  left: -10vw;\r\n  top: 0;\r\n  bottom: 0;\r\n  /* background-color: black; */\r\n  background: var(--linear-g);\r\n  backdrop-filter: blur(5rem);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n.lastBackground2 {\r\n  bottom: 20vh;\r\n}\r\n\r\nform {\r\n  z-index: 2;\r\n  display: inline;\r\n  padding: 2rem;\r\n  /* background-color: var(--white-shade); */\r\n  background-color: rgba(255, 255, 255, 0.564);\r\n  backdrop-filter: blur(1rem);\r\n  border-radius: 2rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.086);\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  font-family: Raj-bold;\r\n  font-size: 3rem;\r\n  color: var(--main-color);\r\n  /* background-color: rgba(255, 255, 255, 0.478); */\r\n  gap: 1rem;\r\n  /* backdrop-filter: blur(1rem); */\r\n  /* mix-blend-mode: luminosity; */\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n}\r\n\r\n.glowingmail {\r\n  font-size: 2rem;\r\n  font-family: Raj-regular;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: Raj-regular;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.submitButton {\r\n  font-family: Raj-medium;\r\n  font-size: 1.5rem;\r\n  color: rgb(61, 61, 61);\r\n  height: 2rem;\r\n  border-radius: 0.5rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n}\r\n\r\n.submitButton:hover {\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.537);\r\n}\r\n\r\n.submitButton:active {\r\n  border: 0.1rem solid rgba(111, 111, 111);\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 15vh;\r\n  border-top: 1px solid black;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.additional {\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.secondAdditional {\r\n  align-items: end;\r\n}\r\n\r\n/* .nameContainer2 {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n} */\r\n\r\n.CPnumber {\r\n  /* letter-spacing: 0.7rem; */\r\n  cursor: pointer;\r\n  user-select: all;\r\n  /* font-family: Raj-regular; */\r\n  /* font-size: 2rem; */\r\n  height: fit-content;\r\n  overflow: visible;\r\n  text-align: center;\r\n  position: relative;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  color: var(--main-color);\r\n}\r\n\r\n.smallIcon {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n/* .CPnumber:after {\r\n  content: \"\";\r\n  position: absolute;\r\n\r\n  height: 3px;\r\n  width: 10%;\r\n  background-color: var(--main-accent);\r\n  left: 0;\r\n  bottom: 0px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.CPnumber:hover:after {\r\n  width: 100%;\r\n} */\r\n\r\n/* ///////////////////////////////////// */\r\n\r\n@keyframes rise {\r\n  from {\r\n    transform: translateY(10rem);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rise {\r\n  animation-name: rise;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: scale(-0.5, 1);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.shiver {\r\n  opacity: 0;\r\n}\r\n\r\n.shake {\r\n  opacity: 1;\r\n  animation-name: shake;\r\n  animation-duration: 3s;\r\n}\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 4px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n.black {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n.mainAccent {\r\n  background-color: var(--main-accent);\r\n}\r\n\r\n.nameContainer2 {\r\n  position: absolute;\r\n}\r\n"],"sourceRoot":""}]);
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

  //////////////////SLIDER//////////////////////////////////////////
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
  proj1.appendChild(proj1Mobile);

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

  //////////////////SLIDER//////////////////////////////////////////
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMscUlBQStDO0FBQzNGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLCtJQUFvRDtBQUNoRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLGtCQUFrQixNQUFNLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcs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Z0IsK0NBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcGV4ZWxzLW15YnVyZ2gtcm91eC00ODE2OTIxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLS1tYWluLWNvbG9yOiAjMDAwMDAwO1xyXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xyXG4gIC0tbWFpbi1hY2NlbnQ6ICMwMGM5Yzg7XHJcbiAgLS1saWdodC1hY2NlbnQ6ICNiZmZjZjk7XHJcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuICBtaW4taGVpZ2h0OiAzMDB2aDtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIHNjcm9sbCBiYXIgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIHdpZHRoOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiB0b3AgYmFyICovXHJcblxyXG4udG9wQmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbn1cclxuXHJcbi5uYW1lQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBoZWlnaHQ6IDAuN3JlbTtcclxuICB3aWR0aDogMC43cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbi52U21hbGxUZXh0IHtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uc29jbWVkQ29udGFpbmVyIHtcclxuICB6LWluZGV4OiAxMTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogMjV2dztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDNzO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uc29jbWVkQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29jaWNvbnMge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc29jdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maXJzdFBhcnQge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJhY2tncm91bmRTZWEge1xyXG4gIHdpZHRoOiAxNjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCksIHRyYW5zcGFyZW50KTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHRvcCxcclxuICAgIHRyYW5zcGFyZW50LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICAgdHJhbnNwYXJlbnRcclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmdyZWV0IHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xyXG59XHJcblxyXG4uYWJvdXRtZUJ1dHRvbiB7XHJcbiAgei1pbmRleDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIHRyYW5zaXRpb246IG91dGxpbmUgMXM7XHJcbn1cclxuLmFib3V0bWVCdXR0b246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYWNjZW50KTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xyXG59XHJcbi5hYm91dG1lQnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG59XHJcblxyXG4uaW50cm8yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG4gIHJpZ2h0OiAxMHZ3O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG59XHJcblxyXG4vKiBwYWdlIGJyZWFrICovXHJcblxyXG4ucGFnZWJyZWFrIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICBvcGFjaXR5OiA0MCU7XHJcbn1cclxuXHJcbi8qIHNlY29uZCBwYXJ0ICovXHJcblxyXG4uYWJvdXRNZUJhY2tncm91bmQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xyXG4gICk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAvKiBwYWRkaW5nLXRvcDogOHJlbTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5odW5kcmVkVkhjb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnNsaXQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgKi9cclxuICAtLWxpbmVhci1nOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApXHJcbiAgKTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1saW5lYXItZyk7ICovXHJcbiAgbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xyXG59XHJcblxyXG4uYWJvdXRNZUNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdpZGVuIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLmFib3V0TWVDb250YWluZXI6aG92ZXI6OmFmdGVyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5BTVRpdGxlIHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDFzIDEwcztcclxufVxyXG5cclxuLkFNVGl0bGU6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbn1cclxuXHJcbi5hYm91dE1lUGFyYWcge1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XHJcbn1cclxuXHJcbnNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy9leHRyYS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwdmgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZnJvbVJpZ2h0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZyb21MZWZ0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuXHJcbi5wb3Age1xyXG59XHJcblxyXG4uYXBwZWFyIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xyXG4gIG9wYWNpdHk6IDAlO1xyXG59XHJcblxyXG4ucG9wIHtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy93b3Jrcy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi53b3Jrc1RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcclxuICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuXHJcbi53b3JrcyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxyXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vU0xJREVSLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4uc2xpZGVDb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogODB2dztcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcblxyXG4vKiAucHJldixcclxuICAubmV4dCB7XHJcbiAgICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0gKi9cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBvdXRsaW5lOiAxcmVtIHNvbGlkIGJsYWNrO1xyXG4gIC13ZWJraXQtb3V0bGluZS1yYWRpdXM6IDJyZW07XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnJlbSAycmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQxMSk7XHJcbn1cclxuXHJcbi5wcm9qMU1vYmlsZSB7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDV2aDtcclxuICBib3R0b206IDA7XHJcbiAgb3V0bGluZTogMC41cmVtIHNvbGlkIGdyYXk7XHJcbiAgLXdlYmtpdC1vdXRsaW5lLXJhZGl1czogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMC41cmVtIGJsYWNrO1xyXG59XHJcblxyXG4ucHJvamVjdHM6Zmlyc3QtY2hpbGQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIjFcIjtcclxuICBtYXJnaW4tdG9wOiAtMTB2dztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcclxuICAvKiBUT0RPICovXHJcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vU0xJREVSLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vL2VtYWlsLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4uZW1haWxTZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWFjY2VudCksXHJcbiAgICB2YXIoLS1saWdodC1hY2NlbnQpLFxyXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVtYWlsU2VjdGlvbjEwMCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYXN0QmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEyMHZ3O1xyXG4gIGhlaWdodDogMzB2aDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgbGVmdDogLTEwdnc7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saW5lYXItZyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVyZW0pO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxufVxyXG5cclxuLmxhc3RCYWNrZ3JvdW5kMiB7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTY0KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxuICBib3gtc2hhZG93OiAxcmVtIDFyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcclxufVxyXG5cclxuLmZpZWxkc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzgpOyAqL1xyXG4gIGdhcDogMXJlbTtcclxuICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7ICovXHJcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7ICovXHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjEzNyk7XHJcbn1cclxuXHJcbi5nbG93aW5nbWFpbCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjUzNyk7XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b246YWN0aXZlIHtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEpO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubW9yZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWNvbmRBZGRpdGlvbmFsIHtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4vKiAubmFtZUNvbnRhaW5lcjIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn0gKi9cclxuXHJcbi5DUG51bWJlciB7XHJcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IGFsbDtcclxuICAvKiBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7ICovXHJcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5zbWFsbEljb24ge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLyogLkNQbnVtYmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uQ1BudW1iZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG5Aa2V5ZnJhbWVzIHJpc2Uge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcmVtKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlzZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJpc2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMC41LCAxKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uc2hpdmVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uc2hha2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuLnVuZGVybGluZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnVuZGVybGluZTpob3Zlcjo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG4ubWFpbkFjY2VudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG59XHJcblxyXG4ubmFtZUNvbnRhaW5lcjIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7Ozs7O0dBS0M7RUFDRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsaUJBQWlC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RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xcclxcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcXHJcXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xcclxcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxyXFxuICBtaW4taGVpZ2h0OiAzMDB2aDtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGwgYmFyICovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICB3aWR0aDogMnZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdG9wIGJhciAqL1xcclxcblxcclxcbi50b3BCYXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0b3A6IDByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgaGVpZ2h0OiAwLjdyZW07XFxyXFxuICB3aWR0aDogMC43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52U21hbGxUZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY21lZENvbnRhaW5lciB7XFxyXFxuICB6LWluZGV4OiAxMTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDNzO1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jbWVkQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uc29jaWNvbnMge1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zb2N0ZXh0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXJzdFBhcnQge1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kU2VhIHtcXHJcXG4gIHdpZHRoOiAxNjAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXNrOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gdG9wLFxcclxcbiAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxcclxcbiAgICB0cmFuc3BhcmVudFxcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLU1lZGl1bS50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0IHtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRtZUJ1dHRvbiB7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNjB2aDtcXHJcXG4gIGxlZnQ6IDEwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgdHJhbnNpdGlvbjogb3V0bGluZSAxcztcXHJcXG59XFxyXFxuLmFib3V0bWVCdXR0b246aG92ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xcclxcbn1cXHJcXG4uYWJvdXRtZUJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8yIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjB2aDtcXHJcXG4gIHJpZ2h0OiAxMHZ3O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogcGFnZSBicmVhayAqL1xcclxcblxcclxcbi5wYWdlYnJlYWsge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBoZWlnaHQ6IDAuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcclxcbiAgb3BhY2l0eTogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWNvbmQgcGFydCAqL1xcclxcblxcclxcbi5hYm91dE1lQmFja2dyb3VuZCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIC8qIHBhZGRpbmctdG9wOiA4cmVtOyAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVuZHJlZFZIY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaXQge1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9wZXhlbHMtbXlidXJnaC1yb3V4LTQ4MTY5MjEuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgKi9cXHJcXG4gIC0tbGluZWFyLWc6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDApXFxyXFxuICApO1xcclxcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbGluZWFyLWcpOyAqL1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1saW5lYXItZyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB3aWRlbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZUNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uQU1UaXRsZSB7XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxcyAxMHM7XFxyXFxufVxcclxcblxcclxcbi5BTVRpdGxlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lUGFyYWcge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XFxyXFxufVxcclxcblxcclxcbnNwYW46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTB2aCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZnJvbVJpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mcm9tTGVmdCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcCB7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXIge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcXHJcXG4gIG9wYWNpdHk6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wIHtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dvcmtzLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi53b3Jrc1RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1tYWluLWFjY2VudClcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vU0xJREVSLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuLnNsaWRlQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogLnByZXYsXFxyXFxuICAubmV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG91dGxpbmU6IDFyZW0gc29saWQgYmxhY2s7XFxyXFxuICAtd2Via2l0LW91dGxpbmUtcmFkaXVzOiAycmVtO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7ICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAycmVtIDJyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2oxTW9iaWxlIHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDV2aDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG91dGxpbmU6IDAuNXJlbSBzb2xpZCBncmF5O1xcclxcbiAgLXdlYmtpdC1vdXRsaW5lLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDAuNXJlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzOmZpcnN0LWNoaWxkOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiMVxcXCI7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTB2dztcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XFxyXFxuICAvKiBUT0RPICovXFxyXFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy9TTElERVIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vL2VtYWlsLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcbi5lbWFpbFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLW1haW4tYWNjZW50KSxcXHJcXG4gICAgdmFyKC0tbGlnaHQtYWNjZW50KSxcXHJcXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXFxyXFxuICApO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5lbWFpbFNlY3Rpb24xMDAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sYXN0QmFja2dyb3VuZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEyMHZ3O1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gIGxlZnQ6IC0xMHZ3O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saW5lYXItZyk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXJlbSk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5sYXN0QmFja2dyb3VuZDIge1xcclxcbiAgYm90dG9tOiAyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpOyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2NCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjEzNyk7XFxyXFxuICBib3gtc2hhZG93OiAxcmVtIDFyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkc2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc4KTsgKi9cXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTsgKi9cXHJcXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5OyAqL1xcclxcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjEzNyk7XFxyXFxufVxcclxcblxcclxcbi5nbG93aW5nbWFpbCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjEzNyk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b246aG92ZXIge1xcclxcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjUzNyk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b246YWN0aXZlIHtcXHJcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSk7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vbW9yZS8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG5cXHJcXG4ubW9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbmFsIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTsgKi9cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRBZGRpdGlvbmFsIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi8qIC5uYW1lQ29udGFpbmVyMiB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uQ1BudW1iZXIge1xcclxcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTsgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBhbGw7XFxyXFxuICAvKiBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7ICovXFxyXFxuICAvKiBmb250LXNpemU6IDJyZW07ICovXFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc21hbGxJY29uIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuQ1BudW1iZXI6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uQ1BudW1iZXI6aG92ZXI6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJpc2Uge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJpc2Uge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHJpc2U7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMC41LCAxKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaGFrZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuLnVuZGVybGluZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZGVybGluZTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkFjY2VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uYW1lQ29udGFpbmVyMiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNlYSBmcm9tIFwiLi9wZXhlbHMtc2FtcHJlZXR5LWFsaS02OTU3OTQuanBnXCI7XHJcbmltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJBcHBWMi5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJNb2JpbGUgZnJvbSBcIi4vd2VhdGhlckFwcFYybW9iaWxlLnBuZ1wiO1xyXG5pbXBvcnQgcHJvamVjdDIgZnJvbSBcIi4vcHJvajIucG5nXCI7XHJcblxyXG5pbXBvcnQgSWNvblBob25lIGZyb20gXCIuL3Bob25lLWRpYWwuc3ZnXCI7XHJcbmltcG9ydCBJY29uRW1haWwgZnJvbSBcIi4vZW1haWwuc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF5b3V0KCkge1xyXG4gIC8vYm9keVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgLy90b3AgYmFyXHJcbiAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgdG9wQmFyLmNsYXNzTGlzdC5hZGQoXCJ0b3BCYXJcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXJcIik7XHJcbiAgdG9wQmFyLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbXlOYW1lLnRleHRDb250ZW50ID0gXCJFbW1hbnVlbCBQYXJyZcOxb1wiO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobXlOYW1lKTtcclxuXHJcbiAgY29uc3Qgc29jbWVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzb2NtZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNvY21lZENvbnRhaW5lclwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHNvY21lZENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG15TmFtZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZURldGFpbHMuY2xhc3NMaXN0LmFkZChcInZTbWFsbFRleHRcIik7XHJcbiAgbXlOYW1lLmFwcGVuZENoaWxkKG15TmFtZURldGFpbHMpO1xyXG4gIG15TmFtZURldGFpbHMudGV4dENvbnRlbnQgPSBcIkJTSVQgU1RVREVOVCBBVCBCQVRBTkdBUyBTVEFURSBVTklWRVJTSVRZXCI7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wQmFyKTtcclxuXHJcbiAgLy9maXJzdCBwcm9tcHRcclxuICBjb25zdCBmaXJzdFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBmaXJzdFBhcnQuY2xhc3NMaXN0LmFkZChcImZpcnN0UGFydFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGZpcnN0UGFydCk7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRTZWEgPSBuZXcgSW1hZ2UoKTtcclxuICBiYWNrZ3JvdW5kU2VhLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kU2VhXCIpO1xyXG4gIGJhY2tncm91bmRTZWEuc3JjID0gU2VhO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kU2VhKTtcclxuICBiYWNrZ3JvdW5kU2VhLmFsdCA9IFwiYmFja2dyb3VuZFwiO1xyXG5cclxuICBjb25zdCBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkhFTExPLFwiO1xyXG4gIGdyZWV0aW5nLmNsYXNzTGlzdC5hZGQoXCJncmVldFwiKTtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcclxuXHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBpbnRyby50ZXh0Q29udGVudCA9IFwiSSBhbSBFTU1BTlVFTFwiO1xyXG4gIGdyZWV0aW5nLmFwcGVuZENoaWxkKGludHJvKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uLmhyZWYgPSBcIiNhYm91dE1lQmFja2dyb3VuZFwiO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUJPVVQgTUVcIjtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFib3V0bWVCdXR0b25cIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgY29uc3QgaW50cm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRybzIuY2xhc3NMaXN0LmFkZChcImludHJvMlwiKTtcclxuICBpbnRybzIuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XHJcbiAgaW50cm8yLnRleHRDb250ZW50ID0gXCJBIHNlbGYtdGF1Z2h0IHByb2dyYW1tZXJcIjtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoaW50cm8yKTtcclxuXHJcbiAgLy9wYWdlIGJyZWFrXHJcblxyXG4gIC8vYWJvdXQgbWVcclxuICBjb25zdCBhYm91dE1lQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImFib3V0TWVCYWNrZ3JvdW5kXCIpO1xyXG4gIC8vIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgYWJvdXRNZUJhY2tncm91bmQuaWQgPSBcImFib3V0TWVCYWNrZ3JvdW5kXCI7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChhYm91dE1lQmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGh1bmRyZWRWSGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJodW5kcmVkVkhjb250YWluZXJcIik7XHJcblxyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGh1bmRyZWRWSGNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHNsaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaXQuY2xhc3NMaXN0LmFkZChcInNsaXRcIik7XHJcblxyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHNsaXQpO1xyXG5cclxuICBjb25zdCBhYm91dE1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQ29udGFpbmVyXCIpO1xyXG4gIGFib3V0TWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBodW5kcmVkVkhjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IEFNVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcIkFNVGl0bGVcIik7XHJcbiAgQU1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIEFNVGl0bGUudGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5hcHBlbmRDaGlsZChBTVRpdGxlKTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZVBhcmFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWJvdXRNZVBhcmFnLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lUGFyYWdcIik7XHJcbiAgYWJvdXRNZVBhcmFnLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgYWJvdXRNZVBhcmFnLmlubmVySFRNTCA9XHJcbiAgICBcIkkgYW0gYSBzZWxmLXRhdWdodCA8c3Bhbj53ZWIgZGV2ZWxvcGVyPC9zcGFuPi4gQ3VycmVudGx5LCBJIGFtIHN0dWR5aW5nIDxzcGFuPkJTIGluIGluZm9ybWF0aW9uIHRlY2hub2xvZ3kgYXQgdGhlIEJhdGFuZ2FzIFN0YXRlIFVuaXZlcnNpdHk8L3NwYW4+LiBJIGhhdmUgYmVlbiBob25pbmcgbXkgc2tpbGxzIHNpbmNlIGxhdGUgMjAyMiAodGhyb3VnaCB0aGUgPHNwYW4+T2RpbiBQcm9qZWN0PC9zcGFuPiBhbmQgb3RoZXIgb25saW5lIHJlc291cmNlcykuIDxzcGFuPkkgYW0gY29uZmlkZW50IHdpdGggbXkgZW50cnktbGV2ZWwgZnJvbnQtZW5kIGRldmVsb3BtZW50IHNraWxsczwvc3Bhbj4uIE15IHByaW1hcnkgbGFuZ3VhZ2VzIGFyZSA8c3Bhbj5IVE1MLCBDU1MsIGFuZCBKYXZhc2NyaXB0PC9zcGFuPiAtIGJ1dCBJIGNhbiBhbHNvIHVzZSBQeXRob24sIFdlYnBhY2ssIENMSSwgYW5kIEMrKyB0byBhIGNlcnRhaW4gZXh0ZW50LlwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVBhcmFnKTtcclxuXHJcbiAgLy9wcm9qZWN0c1xyXG4gIGNvbnN0IHdvcmtzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQod29ya3NUaXRsZSk7XHJcbiAgd29ya3NUaXRsZS5jbGFzc0xpc3QuYWRkKFwid29ya3NUaXRsZVwiKTtcclxuXHJcbiAgY29uc3Qgd29ya3NUaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3b3Jrc1RpdGxlXCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgd29ya3NUaXRsZVRleHQudGV4dENvbnRlbnQgPSBcIlNPTUUgT0YgTVkgV09SS1NcIjtcclxuICB3b3Jrc1RpdGxlLmFwcGVuZENoaWxkKHdvcmtzVGl0bGVUZXh0KTtcclxuXHJcbiAgY29uc3Qgd29ya3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAvLyB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHdvcmtzLmNsYXNzTGlzdC5hZGQoXCJ3b3Jrc1wiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHdvcmtzKTtcclxuXHJcbiAgLy8gY29uc3QgcHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy8gcHJldi50ZXh0Q29udGVudCA9IFwiPFwiO1xyXG4gIC8vIHByZXYuY2xhc3NMaXN0LmFkZChcInByZXZcIik7XHJcbiAgLy8gd29ya3MuYXBwZW5kQ2hpbGQocHJldik7XHJcblxyXG4gIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidXBcIik7XHJcbiAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlQ29udGFpbmVyXCIpO1xyXG4gIHdvcmtzLmFwcGVuZENoaWxkKHNsaWRlQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gY29uc3QgbmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy8gbmV4dC50ZXh0Q29udGVudCA9IFwiPlwiO1xyXG4gIC8vIG5leHQuY2xhc3NMaXN0LmFkZChcIm5leHRcIik7XHJcbiAgLy8gd29ya3MuYXBwZW5kQ2hpbGQobmV4dCk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vL1NMSURFUi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcclxuXHJcbiAgY29uc3QgcHJvajEgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMS5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2oxLnNyYyA9IHdlYXRoZXI7XHJcbiAgcHJvajEuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qMVwiKTtcclxuXHJcbiAgY29uc3QgcHJvajFNb2JpbGUgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvajFNb2JpbGVcIik7XHJcbiAgcHJvajFNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMU1vYmlsZS5zcmMgPSB3ZWF0aGVyTW9iaWxlO1xyXG4gIHByb2oxLmFwcGVuZENoaWxkKHByb2oxTW9iaWxlKTtcclxuXHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2oxKTtcclxuXHJcbiAgY29uc3QgcHJvajIgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMi5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2oyLnNyYyA9IHByb2plY3QyO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajIpO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJwcm9qMlwiKTtcclxuXHJcbiAgY29uc3QgcHJvajMgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2ozLnNyYyA9IHdlYXRoZXI7XHJcbiAgcHJvajMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMyk7XHJcbiAgcHJvajMuY2xhc3NMaXN0LmFkZChcInByb2ozXCIpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy9TTElERVIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvL2NvbnRhY3QgbWUhIGVtYWlsIHBhZ2VcclxuICBjb25zdCBlbWFpbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvblwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGxhc3RCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICBsYXN0QmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwibGFzdEJhY2tncm91bmRcIik7XHJcbiAgZW1haWxTZWN0aW9uLmFwcGVuZENoaWxkKGxhc3RCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgbGFzdEJhY2tncm91bmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICBsYXN0QmFja2dyb3VuZDIuY2xhc3NMaXN0LmFkZChcImxhc3RCYWNrZ3JvdW5kXCIpO1xyXG4gIGxhc3RCYWNrZ3JvdW5kMi5jbGFzc0xpc3QuYWRkKFwibGFzdEJhY2tncm91bmQyXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5hcHBlbmRDaGlsZChsYXN0QmFja2dyb3VuZDIpO1xyXG5cclxuICBjb25zdCBlbWFpbFNlY3Rpb24xMDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24xMDAuY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvbjEwMFwiKTtcclxuICBlbWFpbFNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWxTZWN0aW9uMTAwKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCJodHRwczovL2Zvcm1zdWJtaXQuY28vcGFycmVub2VtbWFudWVsNzU2QGdtYWlsLmNvbVwiO1xyXG4gIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2hpdmVyXCIpO1xyXG4gIGVtYWlsU2VjdGlvbjEwMC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImZpZWxkc2V0XCIpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gIGxlZ2VuZC5pbm5lckhUTUwgPSBgSW50ZXJlc3RlZD8gPHNwYW4gY2xhc3M9XCJnbG93aW5nbWFpbFwiPkVtYWlsIG1lIG5vdyE8L3NwYW4+YDtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG5cclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBlbWFpbC5wbGFjZWhvbGRlciA9IFwiRU1BSUxcIjtcclxuICBlbWFpbC50eXBlID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLm5hbWUgPSBcImVtYWlsXCI7XHJcbiAgZW1haWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGVtYWlsKTtcclxuXHJcbiAgY29uc3Qgc2VuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNlbmRlci5wbGFjZWhvbGRlciA9IFwiTkFNRVwiO1xyXG4gIHNlbmRlci50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc2VuZGVyLm5hbWUgPSBcIm5hbWVcIjtcclxuICBzZW5kZXIucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHNlbmRlcik7XHJcblxyXG4gIGNvbnN0IHN1YmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc3ViamVjdC5wbGFjZWhvbGRlciA9IFwiTUFJTCdTIFNVQkpFQ1RcIjtcclxuICBzdWJqZWN0LnR5cGUgPSBcInRleHRcIjtcclxuICBzdWJqZWN0Lm5hbWUgPSBcInN1YmplY3RcIjtcclxuICBzdWJqZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzdWJqZWN0KTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBtZXNzYWdlLnBsYWNlaG9sZGVyID0gXCJNRVNTQUdFXCI7XHJcbiAgbWVzc2FnZS5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgbWVzc2FnZS5jb2xzID0gMzA7XHJcbiAgbWVzc2FnZS5yb3dzID0gMTA7XHJcbiAgbWVzc2FnZS5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcclxuICBtZXNzYWdlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdXR0b25cIik7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgLy9tb3JlIGFib3V0IG1lXHJcbiAgY29uc3QgbW9yZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBtb3JlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9yZVwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKG1vcmVTZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgZmlyc3RUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmlyc3RUZXh0cy5jbGFzc0xpc3QuYWRkKFwiYWRkaXRpb25hbFwiKTtcclxuXHJcbiAgY29uc3Qgc2Vjb25kVGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY29uZFRleHRzLmNsYXNzTGlzdC5hZGQoXCJhZGRpdGlvbmFsXCIpO1xyXG4gIHNlY29uZFRleHRzLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRBZGRpdGlvbmFsXCIpO1xyXG5cclxuICBjb25zdCBDUG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKENQbnVtYmVyKTtcclxuICBDUG51bWJlci5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIENQbnVtYmVyLnRleHRDb250ZW50ID0gXCIrNjMgOTU2IDY4OCAxNDg5XCI7XHJcbiAgQ1BudW1iZXIuaHJlZiA9IFwidGVsOis2Mzk1NjY4ODE0ODlcIjtcclxuICBDUG51bWJlci5jbGFzc0xpc3QuYWRkKFwiQ1BudW1iZXJcIik7XHJcblxyXG4gIGNvbnN0IGNwSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGNwSWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGxJY29uXCIpO1xyXG4gIGNwSWNvbi5zcmMgPSBJY29uUGhvbmU7XHJcbiAgQ1BudW1iZXIuYXBwZW5kQ2hpbGQoY3BJY29uKTtcclxuXHJcbiAgY29uc3QgcGVyc29uYWxNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgc2Vjb25kVGV4dHMuYXBwZW5kQ2hpbGQocGVyc29uYWxNYWlsKTtcclxuICBwZXJzb25hbE1haWwuaHJlZiA9IFwibWFpbHRvOnBhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBwZXJzb25hbE1haWwudGV4dENvbnRlbnQgPSBcInBhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcIkNQbnVtYmVyXCIpO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxBZGRyZXNzXCIpO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKHBlcnNvbmFsTWFpbCk7XHJcblxyXG4gIGNvbnN0IGVtYWlsSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGxJY29uXCIpO1xyXG4gIGVtYWlsSWNvbi5zcmMgPSBJY29uRW1haWw7XHJcbiAgcGVyc29uYWxNYWlsLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcblxyXG4gIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKGZpcnN0VGV4dHMpO1xyXG4gIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFRleHRzKTtcclxuXHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyMlwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5zdHlsZS5taXhCbGVuZE1vZGUgPSBcImRpZmZlcmVuY2VcIjtcclxuXHJcbiAgY29uc3QgY2lyY2xlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2lyY2xlMi5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmFwcGVuZENoaWxkKGNpcmNsZTIpO1xyXG5cclxuICBjb25zdCBteU5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWUyLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIG15TmFtZTIudGV4dENvbnRlbnQgPSBcIkVtbWFudWVsIFBhcnJlw7FvXCI7XHJcbiAgbmFtZUNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobXlOYW1lMik7XHJcblxyXG4gIC8vIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyMlwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIGZpcnN0VGV4dHMuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcjIpO1xyXG59XHJcbi8vXHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGxheW91dCB9IGZyb20gXCIuL2RvbS5qc1wiO1xyXG5pbXBvcnQgbGlua2VkaW4gZnJvbSBcIi4vbGlua2VkaW5Mb2dvLnBuZ1wiO1xyXG5pbXBvcnQgaWcgZnJvbSBcIi4vaWdMb2dvLnBuZ1wiO1xyXG5pbXBvcnQgZ2l0aHViIGZyb20gXCIuL2dpdGh1YkxvZ28ucG5nXCI7XHJcbmltcG9ydCBmZWVkYmFjayBmcm9tIFwiLi9jb21tZW50LXF1b3RlLnN2Z1wiO1xyXG5sYXlvdXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvblRyaWdnZXIoc2VjdGlvbiwgYW5pbWF0aW9uTmFtZSwgZXhwYW5kID0gbnVsbCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByb290OiBudWxsLFxyXG4gICAgdGhyZXNob2xkOiAwLjQsXHJcbiAgICByb290TWFyZ2luOiBcIjI1cHhcIixcclxuICB9O1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFib3V0TWVDb250YWluZXJcIikgJiZcclxuICAgICAgICBlbnRyeS5pc0ludGVyc2VjdGluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChleHBhbmQpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJhYm91dE1lQ29udGFpbmVyXCIpICYmXHJcbiAgICAgICAgIWVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGV4cGFuZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIG9wdGlvbnMpO1xyXG5cclxuICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25Vc2UoY2xhc3NuYW1lLCBhbmltYXRpb24xLCBhbmltYXRpb24yID0gbnVsbCkge1xyXG4gIGNvbnN0IHJpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NuYW1lKTtcclxuICByaWdodHMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIGFuaW1hdGlvbjEsIGFuaW1hdGlvbjIpO1xyXG4gIH0pO1xyXG59XHJcbi8vbG9vcCBjYW4gYmUgdXNlZCBoZXJlXHJcbigoKSA9PiB7XHJcbiAgYW5pbWF0aW9uVXNlKFwiLnJpZ2h0XCIsIFwiZnJvbVJpZ2h0XCIpO1xyXG4gIGFuaW1hdGlvblVzZShcIi5sZWZ0XCIsIFwiZnJvbUxlZnRcIik7XHJcbiAgYW5pbWF0aW9uVXNlKFwiLmFwcGVhclwiLCBcInBvcFwiLCBcImV4cGFuZFwiKTtcclxuICBhbmltYXRpb25Vc2UoXCIudXBcIiwgXCJyaXNlXCIpO1xyXG4gIGFuaW1hdGlvblVzZShcIi5zaGl2ZXJcIiwgXCJzaGFrZVwiKTtcclxufSkoKTtcclxuXHJcbi8vIGNvbnN0IG5hbWUgPSBcImZyb21SaWdodFwiO1xyXG4vLyBhbmltYXRpb25UcmlnZ2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQU1UaXRsZVwiKSwgbmFtZSk7XHJcbihmdW5jdGlvbiBvcGVuV2Vic2l0ZSgpIHtcclxuICBjb25zdCBwcm9qMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvajFcIik7XHJcbiAgcHJvajEub25jbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9lbW1hbi1waXAuZ2l0aHViLmlvL3dlYXRoZXJBcHB2Mi9cIik7XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9yT25TY3JvbGwodG9PYnNlcnZlLCBlbGVtZW50LCBjb2xvciwgaWNvbikge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByb290OiBudWxsLFxyXG4gICAgdGhyZXNob2xkOiAwLjQsXHJcbiAgICByb290TWFyZ2luOiBcIjI1cHhcIixcclxuICB9O1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICB9IGVsc2UgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoaWNvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIG9wdGlvbnMpO1xyXG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0b09ic2VydmUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQ29sb3JDaGFuZ2VPblNjcm9sbChvYnNlcnZlLCBjb2xvciwgaWNvbikge1xyXG4gIC8vIGNvbnN0IHRvT2JzZXJ2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JzZXJ2ZSk7XHJcbiAgY29uc3QgdG9DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvY21lZENvbnRhaW5lclwiKTtcclxuICBjaGFuZ2VDb2xvck9uU2Nyb2xsKG9ic2VydmUsIHRvQ2hhbmdlLCBjb2xvciwgaWNvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvY21lZENvbnRlbnQoaWNvbiwgbWVzc2FnZSwgYW5pbWF0aW9uID0gbnVsbCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzb2NtZWRDb250ZW50XCIpO1xyXG4gIGNvbnN0IHNvY0ljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBzb2NJY29uLmNsYXNzTGlzdC5hZGQoXCJzb2NpY29uc1wiKTtcclxuICBzb2NJY29uLnNyYyA9IGljb247XHJcbiAgc29jSWNvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGljb24gPT0gbGlua2VkaW4pIHtcclxuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZW1tYW51ZWwtdW5kZWZpbmVkLTk5NzA0MjI1OS9cIik7XHJcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gaWcpIHtcclxuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VtLm43MS9cIik7XHJcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gZ2l0aHViKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL0VtbWFuLXBpcFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NJY29uKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJzb2N0ZXh0XCIpO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgcmV0dXJuIFtjb250YWluZXJdWzBdO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhzb2NtZWRDb250ZW50KGxpbmtlZGluLCBcInNlZSBteSBMaW5rZWRJbiFcIikpO1xyXG51c2VDb2xvckNoYW5nZU9uU2Nyb2xsKFxyXG4gIFwiLmJhY2tncm91bmRTZWFcIixcclxuICBcIndoaXRlXCIsXHJcbiAgc29jbWVkQ29udGVudChsaW5rZWRpbiwgXCJzZWUgbXkgTGlua2VkSW4hXCIpXHJcbik7XHJcbnVzZUNvbG9yQ2hhbmdlT25TY3JvbGwoXHJcbiAgXCIuaHVuZHJlZFZIY29udGFpbmVyXCIsXHJcbiAgXCIjNDc4MTdmXCIsXHJcbiAgc29jbWVkQ29udGVudChnaXRodWIsIFwiPC0gR2l0SHViISEhXCIpXHJcbik7XHJcbnVzZUNvbG9yQ2hhbmdlT25TY3JvbGwoXHJcbiAgXCIuc2xpZGVDb250YWluZXJcIixcclxuICBcIiMwMGM5YzhcIixcclxuICBzb2NtZWRDb250ZW50KGlnLCBcIkkgYWxzbyBoYXZlIEluc3RhIDopXCIpXHJcbik7XHJcbnVzZUNvbG9yQ2hhbmdlT25TY3JvbGwoXHJcbiAgXCJmb3JtXCIsXHJcbiAgXCJ3aGl0ZVwiLFxyXG4gIC8vIFwiYmZmY2Y5XCIsXHJcbiAgc29jbWVkQ29udGVudChmZWVkYmFjaywgXCJZb3UgY291bGQgc2VuZCBmZWVkYmFja3MgdG9vLlwiKVxyXG4pO1xyXG5cclxuLy8gY2hhbmdlQ29sb3JPblNjcm9sbChcclxuLy8gICBcIi5iYWNrZ3JvdW5kU2VhXCIsXHJcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb2NtZWRDb250YWluZXJcIiksXHJcbi8vICAgXCJibGFja1wiXHJcbi8vICk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==