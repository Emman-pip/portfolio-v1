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
  gap: 1rem;
}

/* //////////////////SLIDER////////////////////////////////////////// */

.slideContainer {
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: auto;
  width: 80vw;
  /* overflow: hidden; */
  /* background-color: black; */
  position: relative;
}
.slider {
  width: 80vw;
  height: 65vh;
  display: flex;
  scroll-behavior: smooth;
  overflow: hidden;

  /* outline: 10px solid red; */
  /* background-color: #000000; */
  /* transition: transform 2s; */
  /* -webkit-transition: transform 2s; */
  /* -moz-transition: transform 2s; */
  /* -o-transition: transform 2s; */
  /* transform: translateX(0vw); */
  /* TODO */
  /* display: none; */
}

.prev,
.next {
  font-family: Raj-bold;
  font-size: 5rem;
  color: var(--white-shade);
  background-color: #00000051;
  cursor: pointer;
  z-index: 3;
}

.projects {
  border-radius: 2rem;
  /* outline: 1rem solid black; */
  /* -webkit-outline-radius: 2rem; */
  width: 80vw;
  transition: transform 2s;
  cursor: pointer;
  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.193);
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  /* opacity: 0.7; */
}

/* .proj1Mobile {
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
} */

/* .projects:first-child::after {
  content: "1";
  margin-top: -10vw;
  color: black;
} */

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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  max-width: 100vw;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n  max-width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  mix-blend-mode: difference;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  position: fixed;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  z-index: 11;\r\n  height: 10%;\r\n  width: 25vw;\r\n  border-bottom-left-radius: 3rem;\r\n  display: inline;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--white-shade);\r\n  transition: background-color 3s;\r\n  mix-blend-mode: normal;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.socmedContent {\r\n  display: flex;\r\n}\r\n.socicons {\r\n  width: 3rem;\r\n  cursor: pointer;\r\n}\r\n.soctext {\r\n  margin-left: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.3rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\n.backgroundSea {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n  border: 1px solid var(--white-shade);\r\n  transition: outline 1s;\r\n}\r\n.aboutmeButton:hover {\r\n  border: 1px solid var(--main-accent);\r\n  color: var(--main-accent);\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n  position: relative;\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.slit {\r\n  z-index: 0;\r\n  height: 70vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  background-image: url(\"./pexels-myburgh-roux-4816921.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  /* transform: rotate(10deg); */\r\n  --linear-g: linear-gradient(\r\n    to bottom,\r\n    rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  /* background-image: var(--linear-g); */\r\n  mask-image: var(--linear-g);\r\n  -webkit-mask-image: var(--linear-g);\r\n}\r\n\r\n.aboutMeContainer {\r\n  border: 0.2rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  border-radius: 1rem;\r\n  height: fit-content;\r\n  background-color: #00000015;\r\n  backdrop-filter: blur(1rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  transition: opacity 3s;\r\n  opacity: 0%;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.worksTitle {\r\n  text-align: center;\r\n  height: fit-content;\r\n  font-family: Raj-bold;\r\n  color: white;\r\n  background-color: var(--dark-accent);\r\n  font-size: 4rem;\r\n}\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n/* //////////////////SLIDER////////////////////////////////////////// */\r\n\r\n.slideContainer {\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  height: auto;\r\n  width: 80vw;\r\n  /* overflow: hidden; */\r\n  /* background-color: black; */\r\n  position: relative;\r\n}\r\n.slider {\r\n  width: 80vw;\r\n  height: 65vh;\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  overflow: hidden;\r\n\r\n  /* outline: 10px solid red; */\r\n  /* background-color: #000000; */\r\n  /* transition: transform 2s; */\r\n  /* -webkit-transition: transform 2s; */\r\n  /* -moz-transition: transform 2s; */\r\n  /* -o-transition: transform 2s; */\r\n  /* transform: translateX(0vw); */\r\n  /* TODO */\r\n  /* display: none; */\r\n}\r\n\r\n.prev,\r\n.next {\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  color: var(--white-shade);\r\n  background-color: #00000051;\r\n  cursor: pointer;\r\n  z-index: 3;\r\n}\r\n\r\n.projects {\r\n  border-radius: 2rem;\r\n  /* outline: 1rem solid black; */\r\n  /* -webkit-outline-radius: 2rem; */\r\n  width: 80vw;\r\n  transition: transform 2s;\r\n  cursor: pointer;\r\n  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.193);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  /* opacity: 0.7; */\r\n}\r\n\r\n/* .proj1Mobile {\r\n  z-index: 2;\r\n  height: 30vh;\r\n  width: auto;\r\n  position: absolute;\r\n  left: 5vh;\r\n  bottom: 0;\r\n  outline: 0.5rem solid gray;\r\n  -webkit-outline-radius: 1rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.5rem 0.5rem 0.5rem black;\r\n} */\r\n\r\n/* .projects:first-child::after {\r\n  content: \"1\";\r\n  margin-top: -10vw;\r\n  color: black;\r\n} */\r\n\r\n/* //////////////////SLIDER////////////////////////////////////////// */\r\n\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 100vh;\r\n  text-align: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.emailSection100 {\r\n  display: flex;\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.lastBackground {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 120vw;\r\n  height: 30vh;\r\n  /* background-color: black; */\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  left: -10vw;\r\n  top: 0;\r\n  bottom: 0;\r\n  /* background-color: black; */\r\n  background: var(--linear-g);\r\n  backdrop-filter: blur(5rem);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n.lastBackground2 {\r\n  bottom: 20vh;\r\n}\r\n\r\nform {\r\n  z-index: 2;\r\n  display: inline;\r\n  padding: 2rem;\r\n  /* background-color: var(--white-shade); */\r\n  background-color: rgba(255, 255, 255, 0.564);\r\n  backdrop-filter: blur(1rem);\r\n  border-radius: 2rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.086);\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  font-family: Raj-bold;\r\n  font-size: 3rem;\r\n  color: var(--main-color);\r\n  /* background-color: rgba(255, 255, 255, 0.478); */\r\n  gap: 1rem;\r\n  /* backdrop-filter: blur(1rem); */\r\n  /* mix-blend-mode: luminosity; */\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n}\r\n\r\n.glowingmail {\r\n  font-size: 2rem;\r\n  font-family: Raj-regular;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: Raj-regular;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.submitButton {\r\n  font-family: Raj-medium;\r\n  font-size: 1.5rem;\r\n  color: rgb(61, 61, 61);\r\n  height: 2rem;\r\n  border-radius: 0.5rem;\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.137);\r\n}\r\n\r\n.submitButton:hover {\r\n  border: 0.1rem solid rgba(111, 111, 111, 0.537);\r\n}\r\n\r\n.submitButton:active {\r\n  border: 0.1rem solid rgba(111, 111, 111);\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 15vh;\r\n  border-top: 1px solid black;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.additional {\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.secondAdditional {\r\n  align-items: end;\r\n}\r\n\r\n/* .nameContainer2 {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n} */\r\n\r\n.CPnumber {\r\n  /* letter-spacing: 0.7rem; */\r\n  cursor: pointer;\r\n  user-select: all;\r\n  /* font-family: Raj-regular; */\r\n  /* font-size: 2rem; */\r\n  height: fit-content;\r\n  overflow: visible;\r\n  text-align: center;\r\n  position: relative;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  color: var(--main-color);\r\n}\r\n\r\n.smallIcon {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n/* .CPnumber:after {\r\n  content: \"\";\r\n  position: absolute;\r\n\r\n  height: 3px;\r\n  width: 10%;\r\n  background-color: var(--main-accent);\r\n  left: 0;\r\n  bottom: 0px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.CPnumber:hover:after {\r\n  width: 100%;\r\n} */\r\n\r\n/* ///////////////////////////////////// */\r\n\r\n@keyframes rise {\r\n  from {\r\n    transform: translateY(10rem);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rise {\r\n  animation-name: rise;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: scale(-0.5, 1);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.shiver {\r\n  opacity: 0;\r\n}\r\n\r\n.shake {\r\n  opacity: 1;\r\n  animation-name: shake;\r\n  animation-duration: 3s;\r\n}\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 4px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n.black {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n.mainAccent {\r\n  background-color: var(--main-accent);\r\n}\r\n\r\n.nameContainer2 {\r\n  position: absolute;\r\n}\r\n"],"sourceRoot":""}]);
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

  const prev = document.createElement("div");
  prev.textContent = "<";
  prev.classList.add("prev");
  works.appendChild(prev);

  const slideContainer = document.createElement("div");
  // slideContainer.classList.add("up");
  slideContainer.classList.add("slideContainer");
  works.appendChild(slideContainer);

  const next = document.createElement("div");
  next.textContent = ">";
  next.classList.add("next");
  works.appendChild(next);

  //////////////////SLIDER//////////////////////////////////////////
  const slider = document.createElement("div");
  slider.classList.add("slider");
  slideContainer.appendChild(slider);
  // slider.classList.add("up");

  const proj1 = new Image();
  // proj1.classList.add("up");
  proj1.src = _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__;
  proj1.classList.add("projects");
  proj1.classList.add("proj1");

  const proj1Mobile = new Image();
  proj1Mobile.classList.add("proj1Mobile");
  // proj1Mobile.classList.add("appear");
  proj1Mobile.src = _weatherAppV2mobile_png__WEBPACK_IMPORTED_MODULE_2__;
  proj1.appendChild(proj1Mobile);

  slider.appendChild(proj1);

  const proj2 = new Image();
  // proj2.classList.add("appear");
  proj2.src = _proj2_png__WEBPACK_IMPORTED_MODULE_3__;
  proj2.classList.add("projects");
  slider.appendChild(proj2);
  proj2.classList.add("proj2");

  const proj3 = new Image();
  // proj3.classList.add("appear");
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
  moreSection.classList.add("appear");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMscUlBQStDO0FBQzNGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLCtJQUFvRDtBQUNoRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QWEsYUFBYSxNQUFNLEtBQUssU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxlQUFlLE1BQU0sUUFBUSxNQUFNLGFBQWEsYUFBYSxNQUFNLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxrQkFBa0IsTUFBTSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUNBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUcUI7QUFDYTtBQUNRO0FBQ1o7QUFDUTtBQUNLO0FBQzNDLCtDQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBUTtBQUN4QjtBQUNBLE1BQU0saUJBQWlCLHdDQUFFO0FBQ3pCO0FBQ0EsTUFBTSxpQkFBaUIsNENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUFFO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0NBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxLQUFLLEVBQUUsR0FBRztBQUN0RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcGV4ZWxzLW15YnVyZ2gtcm91eC00ODE2OTIxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLS1tYWluLWNvbG9yOiAjMDAwMDAwO1xyXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xyXG4gIC0tbWFpbi1hY2NlbnQ6ICMwMGM5Yzg7XHJcbiAgLS1saWdodC1hY2NlbnQ6ICNiZmZjZjk7XHJcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuICBtaW4taGVpZ2h0OiAzMDB2aDtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIHNjcm9sbCBiYXIgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIHdpZHRoOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiB0b3AgYmFyICovXHJcblxyXG4udG9wQmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbn1cclxuXHJcbi5uYW1lQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBoZWlnaHQ6IDAuN3JlbTtcclxuICB3aWR0aDogMC43cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbi52U21hbGxUZXh0IHtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uc29jbWVkQ29udGFpbmVyIHtcclxuICB6LWluZGV4OiAxMTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICB3aWR0aDogMjV2dztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDNzO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uc29jbWVkQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc29jaWNvbnMge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc29jdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maXJzdFBhcnQge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJhY2tncm91bmRTZWEge1xyXG4gIHdpZHRoOiAxNjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCksIHRyYW5zcGFyZW50KTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHRvcCxcclxuICAgIHRyYW5zcGFyZW50LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICAgdHJhbnNwYXJlbnRcclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmdyZWV0IHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xyXG59XHJcblxyXG4uYWJvdXRtZUJ1dHRvbiB7XHJcbiAgei1pbmRleDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIHRyYW5zaXRpb246IG91dGxpbmUgMXM7XHJcbn1cclxuLmFib3V0bWVCdXR0b246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYWNjZW50KTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xyXG59XHJcbi5hYm91dG1lQnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG59XHJcblxyXG4uaW50cm8yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG4gIHJpZ2h0OiAxMHZ3O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG59XHJcblxyXG4vKiBwYWdlIGJyZWFrICovXHJcblxyXG4ucGFnZWJyZWFrIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICBvcGFjaXR5OiA0MCU7XHJcbn1cclxuXHJcbi8qIHNlY29uZCBwYXJ0ICovXHJcblxyXG4uYWJvdXRNZUJhY2tncm91bmQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xyXG4gICk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAvKiBwYWRkaW5nLXRvcDogOHJlbTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5odW5kcmVkVkhjb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnNsaXQge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgKi9cclxuICAtLWxpbmVhci1nOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApXHJcbiAgKTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1saW5lYXItZyk7ICovXHJcbiAgbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xyXG59XHJcblxyXG4uYWJvdXRNZUNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdpZGVuIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLmFib3V0TWVDb250YWluZXI6aG92ZXI6OmFmdGVyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5BTVRpdGxlIHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDFzIDEwcztcclxufVxyXG5cclxuLkFNVGl0bGU6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbn1cclxuXHJcbi5hYm91dE1lUGFyYWcge1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XHJcbn1cclxuXHJcbnNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy9leHRyYS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwdmgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZnJvbVJpZ2h0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZyb21MZWZ0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuXHJcbi5wb3Age1xyXG59XHJcblxyXG4uYXBwZWFyIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xyXG4gIG9wYWNpdHk6IDAlO1xyXG59XHJcblxyXG4ucG9wIHtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy93b3Jrcy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi53b3Jrc1RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcclxuICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuXHJcbi53b3JrcyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxyXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vL1NMSURFUi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLnNsaWRlQ29udGFpbmVyIHtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNsaWRlciB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiA2NXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLyogb3V0bGluZTogMTBweCBzb2xpZCByZWQ7ICovXHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgKi9cclxuICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7ICovXHJcbiAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7ICovXHJcbiAgLyogLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7ICovXHJcbiAgLyogLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzOyAqL1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpOyAqL1xyXG4gIC8qIFRPRE8gKi9cclxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG59XHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAvKiBvdXRsaW5lOiAxcmVtIHNvbGlkIGJsYWNrOyAqL1xyXG4gIC8qIC13ZWJraXQtb3V0bGluZS1yYWRpdXM6IDJyZW07ICovXHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAycmVtIDJyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTkzKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgLyogb3BhY2l0eTogMC43OyAqL1xyXG59XHJcblxyXG4vKiAucHJvajFNb2JpbGUge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1dmg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG91dGxpbmU6IDAuNXJlbSBzb2xpZCBncmF5O1xyXG4gIC13ZWJraXQtb3V0bGluZS1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDAuNXJlbSBibGFjaztcclxufSAqL1xyXG5cclxuLyogLnByb2plY3RzOmZpcnN0LWNoaWxkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIxXCI7XHJcbiAgbWFyZ2luLXRvcDogLTEwdnc7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59ICovXHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy9TTElERVIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vZW1haWwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcbi5lbWFpbFNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLW1haW4tYWNjZW50KSxcclxuICAgIHZhcigtLWxpZ2h0LWFjY2VudCksXHJcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcclxuICApO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZW1haWxTZWN0aW9uMTAwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhc3RCYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTIwdnc7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICBsZWZ0OiAtMTB2dztcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpbmVhci1nKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXJlbSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG59XHJcblxyXG4ubGFzdEJhY2tncm91bmQyIHtcclxuICBib3R0b206IDIwdmg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NjQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xyXG4gIGJveC1zaGFkb3c6IDFyZW0gMXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wODYpO1xyXG59XHJcblxyXG4uZmllbGRzZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3OCk7ICovXHJcbiAgZ2FwOiAxcmVtO1xyXG4gIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTsgKi9cclxuICAvKiBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTsgKi9cclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcclxufVxyXG5cclxuLmdsb3dpbmdtYWlsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSwgMC4xMzcpO1xyXG59XHJcblxyXG4uc3VibWl0QnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuNTM3KTtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbjphY3RpdmUge1xyXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMTExLCAxMTEsIDExMSk7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vbW9yZS8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi5tb3JlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uYWRkaXRpb25hbCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpOyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNlY29uZEFkZGl0aW9uYWwge1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbi8qIC5uYW1lQ29udGFpbmVyMiB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufSAqL1xyXG5cclxuLkNQbnVtYmVyIHtcclxuICAvKiBsZXR0ZXItc3BhY2luZzogMC43cmVtOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogYWxsO1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjsgKi9cclxuICAvKiBmb250LXNpemU6IDJyZW07ICovXHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLnNtYWxsSWNvbiB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4vKiAuQ1BudW1iZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoZWlnaHQ6IDNweDtcclxuICB3aWR0aDogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5DUG51bWJlcjpob3ZlcjphZnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbkBrZXlmcmFtZXMgcmlzZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5yaXNlIHtcclxuICBhbmltYXRpb24tbmFtZTogcmlzZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0wLjUsIDEpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zaGl2ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zaGFrZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBhbmltYXRpb24tbmFtZTogc2hha2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxufVxyXG4udW5kZXJsaW5lOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udW5kZXJsaW5lOmhvdmVyOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbn1cclxuXHJcbi5ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi5tYWluQWNjZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbn1cclxuXHJcbi5uYW1lQ29udGFpbmVyMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTs7Ozs7R0FLQztFQUNELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsVUFBVTtFQUNWLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7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QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xcclxcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcXHJcXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xcclxcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxyXFxuICBtaW4taGVpZ2h0OiAzMDB2aDtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGwgYmFyICovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICB3aWR0aDogMnZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdG9wIGJhciAqL1xcclxcblxcclxcbi50b3BCYXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0b3A6IDByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgaGVpZ2h0OiAwLjdyZW07XFxyXFxuICB3aWR0aDogMC43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52U21hbGxUZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY21lZENvbnRhaW5lciB7XFxyXFxuICB6LWluZGV4OiAxMTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDNzO1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jbWVkQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uc29jaWNvbnMge1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zb2N0ZXh0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXJzdFBhcnQge1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kU2VhIHtcXHJcXG4gIHdpZHRoOiAxNjAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXNrOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gdG9wLFxcclxcbiAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxcclxcbiAgICB0cmFuc3BhcmVudFxcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLU1lZGl1bS50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0IHtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRtZUJ1dHRvbiB7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNjB2aDtcXHJcXG4gIGxlZnQ6IDEwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgdHJhbnNpdGlvbjogb3V0bGluZSAxcztcXHJcXG59XFxyXFxuLmFib3V0bWVCdXR0b246aG92ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xcclxcbn1cXHJcXG4uYWJvdXRtZUJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8yIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjB2aDtcXHJcXG4gIHJpZ2h0OiAxMHZ3O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogcGFnZSBicmVhayAqL1xcclxcblxcclxcbi5wYWdlYnJlYWsge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBoZWlnaHQ6IDAuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xcclxcbiAgb3BhY2l0eTogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWNvbmQgcGFydCAqL1xcclxcblxcclxcbi5hYm91dE1lQmFja2dyb3VuZCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIC8qIHBhZGRpbmctdG9wOiA4cmVtOyAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaHVuZHJlZFZIY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaXQge1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9wZXhlbHMtbXlidXJnaC1yb3V4LTQ4MTY5MjEuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgKi9cXHJcXG4gIC0tbGluZWFyLWc6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDApLFxcclxcbiAgICByZ2JhKDAsIDAsIDAsIDApXFxyXFxuICApO1xcclxcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbGluZWFyLWcpOyAqL1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tbGluZWFyLWcpO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1saW5lYXItZyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB3aWRlbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZUNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uQU1UaXRsZSB7XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxcyAxMHM7XFxyXFxufVxcclxcblxcclxcbi5BTVRpdGxlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lUGFyYWcge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XFxyXFxufVxcclxcblxcclxcbnNwYW46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTB2aCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZnJvbVJpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mcm9tTGVmdCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcCB7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXIge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcXHJcXG4gIG9wYWNpdHk6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wIHtcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dvcmtzLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi53b3Jrc1RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1tYWluLWFjY2VudClcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vU0xJREVSLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuLnNsaWRlQ29udGFpbmVyIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zbGlkZXIge1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBoZWlnaHQ6IDY1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgLyogb3V0bGluZTogMTBweCBzb2xpZCByZWQ7ICovXFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyAqL1xcclxcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzOyAqL1xcclxcbiAgLyogLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7ICovXFxyXFxuICAvKiAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAyczsgKi9cXHJcXG4gIC8qIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAyczsgKi9cXHJcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpOyAqL1xcclxcbiAgLyogVE9ETyAqL1xcclxcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByZXYsXFxyXFxuLm5leHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLyogb3V0bGluZTogMXJlbSBzb2xpZCBibGFjazsgKi9cXHJcXG4gIC8qIC13ZWJraXQtb3V0bGluZS1yYWRpdXM6IDJyZW07ICovXFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDJyZW0gMnJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xOTMpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxuICAvKiBvcGFjaXR5OiAwLjc7ICovXFxyXFxufVxcclxcblxcclxcbi8qIC5wcm9qMU1vYmlsZSB7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA1dmg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBvdXRsaW5lOiAwLjVyZW0gc29saWQgZ3JheTtcXHJcXG4gIC13ZWJraXQtb3V0bGluZS1yYWRpdXM6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAwLjVyZW0gYmxhY2s7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIC5wcm9qZWN0czpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIjFcXFwiO1xcclxcbiAgbWFyZ2luLXRvcDogLTEwdnc7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vL1NMSURFUi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vZW1haWwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuLmVtYWlsU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1saWdodC1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVtYWlsU2VjdGlvbjEwMCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxhc3RCYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTIwdnc7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgbGVmdDogLTEwdnc7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpbmVhci1nKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cmVtKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhc3RCYWNrZ3JvdW5kMiB7XFxyXFxuICBib3R0b206IDIwdmg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTY0KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcXHJcXG4gIGJveC1zaGFkb3c6IDFyZW0gMXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wODYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzgpOyAqL1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pOyAqL1xcclxcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7ICovXFxyXFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsb3dpbmdtYWlsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjEzNyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuMTM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTEsIDAuNTM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbjphY3RpdmUge1xcclxcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgxMTEsIDExMSwgMTExKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy9tb3JlLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi5tb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uYWwge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpOyAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZEFkZGl0aW9uYWwge1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm5hbWVDb250YWluZXIyIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufSAqL1xcclxcblxcclxcbi5DUG51bWJlciB7XFxyXFxuICAvKiBsZXR0ZXItc3BhY2luZzogMC43cmVtOyAqL1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjsgKi9cXHJcXG4gIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbEljb24ge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIC5DUG51bWJlcjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5DUG51bWJlcjpob3ZlcjphZnRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgcmlzZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcmVtKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmlzZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogcmlzZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0wLjUsIDEpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaGl2ZXIge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWtlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcclxcbn1cXHJcXG4udW5kZXJsaW5lOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udW5kZXJsaW5lOmhvdmVyOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tYWluQWNjZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVDb250YWluZXIyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2VhIGZyb20gXCIuL3BleGVscy1zYW1wcmVldHktYWxpLTY5NTc5NC5qcGdcIjtcclxuaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlckFwcFYyLnBuZ1wiO1xyXG5pbXBvcnQgd2VhdGhlck1vYmlsZSBmcm9tIFwiLi93ZWF0aGVyQXBwVjJtb2JpbGUucG5nXCI7XHJcbmltcG9ydCBwcm9qZWN0MiBmcm9tIFwiLi9wcm9qMi5wbmdcIjtcclxuXHJcbmltcG9ydCBJY29uUGhvbmUgZnJvbSBcIi4vcGhvbmUtZGlhbC5zdmdcIjtcclxuaW1wb3J0IEljb25FbWFpbCBmcm9tIFwiLi9lbWFpbC5zdmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQoKSB7XHJcbiAgLy9ib2R5XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAvL3RvcCBiYXJcclxuICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICB0b3BCYXIuY2xhc3NMaXN0LmFkZChcInRvcEJhclwiKTtcclxuXHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lclwiKTtcclxuICB0b3BCYXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cclxuICBjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBteU5hbWUudGV4dENvbnRlbnQgPSBcIkVtbWFudWVsIFBhcnJlw7FvXCI7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChteU5hbWUpO1xyXG5cclxuICBjb25zdCBzb2NtZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNvY21lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29jbWVkQ29udGFpbmVyXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoc29jbWVkQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidlNtYWxsVGV4dFwiKTtcclxuICBteU5hbWUuYXBwZW5kQ2hpbGQobXlOYW1lRGV0YWlscyk7XHJcbiAgbXlOYW1lRGV0YWlscy50ZXh0Q29udGVudCA9IFwiQlNJVCBTVFVERU5UIEFUIEJBVEFOR0FTIFNUQVRFIFVOSVZFUlNJVFlcIjtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZCh0b3BCYXIpO1xyXG5cclxuICAvL2ZpcnN0IHByb21wdFxyXG4gIGNvbnN0IGZpcnN0UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGZpcnN0UGFydC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RQYXJ0XCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZmlyc3RQYXJ0KTtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZFNlYSA9IG5ldyBJbWFnZSgpO1xyXG4gIGJhY2tncm91bmRTZWEuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRTZWFcIik7XHJcbiAgYmFja2dyb3VuZFNlYS5zcmMgPSBTZWE7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJhY2tncm91bmRTZWEpO1xyXG4gIGJhY2tncm91bmRTZWEuYWx0ID0gXCJiYWNrZ3JvdW5kXCI7XHJcblxyXG4gIGNvbnN0IGdyZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiSEVMTE8sXCI7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcImdyZWV0XCIpO1xyXG4gIGdyZWV0aW5nLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xyXG5cclxuICBjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGludHJvLnRleHRDb250ZW50ID0gXCJJIGFtIEVNTUFOVUVMXCI7XHJcbiAgZ3JlZXRpbmcuYXBwZW5kQ2hpbGQoaW50cm8pO1xyXG5cclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24uaHJlZiA9IFwiI2Fib3V0TWVCYWNrZ3JvdW5kXCI7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRtZUJ1dHRvblwiKTtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICBjb25zdCBpbnRybzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvMi5jbGFzc0xpc3QuYWRkKFwiaW50cm8yXCIpO1xyXG4gIGludHJvMi5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICBpbnRybzIudGV4dENvbnRlbnQgPSBcIkEgc2VsZi10YXVnaHQgcHJvZ3JhbW1lclwiO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChpbnRybzIpO1xyXG5cclxuICAvL3BhZ2UgYnJlYWtcclxuXHJcbiAgLy9hYm91dCBtZVxyXG4gIGNvbnN0IGFib3V0TWVCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dE1lQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUJhY2tncm91bmRcIik7XHJcbiAgLy8gYWJvdXRNZUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBhYm91dE1lQmFja2dyb3VuZC5pZCA9IFwiYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBib2R5LmFwcGVuZENoaWxkKGFib3V0TWVCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgaHVuZHJlZFZIY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBodW5kcmVkVkhjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImh1bmRyZWRWSGNvbnRhaW5lclwiKTtcclxuXHJcbiAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaHVuZHJlZFZIY29udGFpbmVyKTtcclxuXHJcbiAgY29uc3Qgc2xpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpdC5jbGFzc0xpc3QuYWRkKFwic2xpdFwiKTtcclxuXHJcbiAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2xpdCk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0TWVDb250YWluZXJcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGh1bmRyZWRWSGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgQU1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgQU1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiQU1UaXRsZVwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgQU1UaXRsZS50ZXh0Q29udGVudCA9IFwiQUJPVVQgTUVcIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKEFNVGl0bGUpO1xyXG5cclxuICBjb25zdCBhYm91dE1lUGFyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhYm91dE1lUGFyYWcuY2xhc3NMaXN0LmFkZChcImFib3V0TWVQYXJhZ1wiKTtcclxuICBhYm91dE1lUGFyYWcuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBhYm91dE1lUGFyYWcuaW5uZXJIVE1MID1cclxuICAgIFwiSSBhbSBhIHNlbGYtdGF1Z2h0IDxzcGFuPndlYiBkZXZlbG9wZXI8L3NwYW4+LiBDdXJyZW50bHksIEkgYW0gc3R1ZHlpbmcgPHNwYW4+QlMgaW4gaW5mb3JtYXRpb24gdGVjaG5vbG9neSBhdCB0aGUgQmF0YW5nYXMgU3RhdGUgVW5pdmVyc2l0eTwvc3Bhbj4uIEkgaGF2ZSBiZWVuIGhvbmluZyBteSBza2lsbHMgc2luY2UgbGF0ZSAyMDIyICh0aHJvdWdoIHRoZSA8c3Bhbj5PZGluIFByb2plY3Q8L3NwYW4+IGFuZCBvdGhlciBvbmxpbmUgcmVzb3VyY2VzKS4gPHNwYW4+SSBhbSBjb25maWRlbnQgd2l0aCBteSBlbnRyeS1sZXZlbCBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgc2tpbGxzPC9zcGFuPi4gTXkgcHJpbWFyeSBsYW5ndWFnZXMgYXJlIDxzcGFuPkhUTUwsIENTUywgYW5kIEphdmFzY3JpcHQ8L3NwYW4+IC0gYnV0IEkgY2FuIGFsc28gdXNlIFB5dGhvbiwgV2VicGFjaywgQ0xJLCBhbmQgQysrIHRvIGEgY2VydGFpbiBleHRlbnQuXCI7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lUGFyYWcpO1xyXG5cclxuICAvL3Byb2plY3RzXHJcbiAgY29uc3Qgd29ya3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrc1RpdGxlKTtcclxuICB3b3Jrc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3b3Jrc1RpdGxlXCIpO1xyXG5cclxuICBjb25zdCB3b3Jrc1RpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd29ya3NUaXRsZVRleHQuY2xhc3NMaXN0LmFkZChcIndvcmtzVGl0bGVcIik7XHJcbiAgd29ya3NUaXRsZVRleHQuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiU09NRSBPRiBNWSBXT1JLU1wiO1xyXG4gIHdvcmtzVGl0bGUuYXBwZW5kQ2hpbGQod29ya3NUaXRsZVRleHQpO1xyXG5cclxuICBjb25zdCB3b3JrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIC8vIHdvcmtzLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgd29ya3MuY2xhc3NMaXN0LmFkZChcIndvcmtzXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQod29ya3MpO1xyXG5cclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmV2LnRleHRDb250ZW50ID0gXCI8XCI7XHJcbiAgcHJldi5jbGFzc0xpc3QuYWRkKFwicHJldlwiKTtcclxuICB3b3Jrcy5hcHBlbmRDaGlsZChwcmV2KTtcclxuXHJcbiAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1cFwiKTtcclxuICBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGVDb250YWluZXJcIik7XHJcbiAgd29ya3MuYXBwZW5kQ2hpbGQoc2xpZGVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuZXh0LnRleHRDb250ZW50ID0gXCI+XCI7XHJcbiAgbmV4dC5jbGFzc0xpc3QuYWRkKFwibmV4dFwiKTtcclxuICB3b3Jrcy5hcHBlbmRDaGlsZChuZXh0KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vU0xJREVSLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXIpO1xyXG4gIC8vIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwidXBcIik7XHJcblxyXG4gIGNvbnN0IHByb2oxID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gcHJvajEuY2xhc3NMaXN0LmFkZChcInVwXCIpO1xyXG4gIHByb2oxLnNyYyA9IHdlYXRoZXI7XHJcbiAgcHJvajEuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qMVwiKTtcclxuXHJcbiAgY29uc3QgcHJvajFNb2JpbGUgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwicHJvajFNb2JpbGVcIik7XHJcbiAgLy8gcHJvajFNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMU1vYmlsZS5zcmMgPSB3ZWF0aGVyTW9iaWxlO1xyXG4gIHByb2oxLmFwcGVuZENoaWxkKHByb2oxTW9iaWxlKTtcclxuXHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2oxKTtcclxuXHJcbiAgY29uc3QgcHJvajIgPSBuZXcgSW1hZ2UoKTtcclxuICAvLyBwcm9qMi5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2oyLnNyYyA9IHByb2plY3QyO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajIpO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJwcm9qMlwiKTtcclxuXHJcbiAgY29uc3QgcHJvajMgPSBuZXcgSW1hZ2UoKTtcclxuICAvLyBwcm9qMy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHByb2ozLnNyYyA9IHdlYXRoZXI7XHJcbiAgcHJvajMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMyk7XHJcbiAgcHJvajMuY2xhc3NMaXN0LmFkZChcInByb2ozXCIpO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy9TTElERVIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAvL2NvbnRhY3QgbWUhIGVtYWlsIHBhZ2VcclxuICBjb25zdCBlbWFpbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvblwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGxhc3RCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICBsYXN0QmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwibGFzdEJhY2tncm91bmRcIik7XHJcbiAgZW1haWxTZWN0aW9uLmFwcGVuZENoaWxkKGxhc3RCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgbGFzdEJhY2tncm91bmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICBsYXN0QmFja2dyb3VuZDIuY2xhc3NMaXN0LmFkZChcImxhc3RCYWNrZ3JvdW5kXCIpO1xyXG4gIGxhc3RCYWNrZ3JvdW5kMi5jbGFzc0xpc3QuYWRkKFwibGFzdEJhY2tncm91bmQyXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5hcHBlbmRDaGlsZChsYXN0QmFja2dyb3VuZDIpO1xyXG5cclxuICBjb25zdCBlbWFpbFNlY3Rpb24xMDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24xMDAuY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvbjEwMFwiKTtcclxuICBlbWFpbFNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWxTZWN0aW9uMTAwKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCJodHRwczovL2Zvcm1zdWJtaXQuY28vcGFycmVub2VtbWFudWVsNzU2QGdtYWlsLmNvbVwiO1xyXG4gIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2hpdmVyXCIpO1xyXG4gIGVtYWlsU2VjdGlvbjEwMC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImZpZWxkc2V0XCIpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gIGxlZ2VuZC5pbm5lckhUTUwgPSBgSW50ZXJlc3RlZD8gPHNwYW4gY2xhc3M9XCJnbG93aW5nbWFpbFwiPkVtYWlsIG1lIG5vdyE8L3NwYW4+YDtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG5cclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBlbWFpbC5wbGFjZWhvbGRlciA9IFwiRU1BSUxcIjtcclxuICBlbWFpbC50eXBlID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLm5hbWUgPSBcImVtYWlsXCI7XHJcbiAgZW1haWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGVtYWlsKTtcclxuXHJcbiAgY29uc3Qgc2VuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNlbmRlci5wbGFjZWhvbGRlciA9IFwiTkFNRVwiO1xyXG4gIHNlbmRlci50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc2VuZGVyLm5hbWUgPSBcIm5hbWVcIjtcclxuICBzZW5kZXIucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHNlbmRlcik7XHJcblxyXG4gIGNvbnN0IHN1YmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc3ViamVjdC5wbGFjZWhvbGRlciA9IFwiTUFJTCdTIFNVQkpFQ1RcIjtcclxuICBzdWJqZWN0LnR5cGUgPSBcInRleHRcIjtcclxuICBzdWJqZWN0Lm5hbWUgPSBcInN1YmplY3RcIjtcclxuICBzdWJqZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzdWJqZWN0KTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBtZXNzYWdlLnBsYWNlaG9sZGVyID0gXCJNRVNTQUdFXCI7XHJcbiAgbWVzc2FnZS5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgbWVzc2FnZS5jb2xzID0gMzA7XHJcbiAgbWVzc2FnZS5yb3dzID0gMTA7XHJcbiAgbWVzc2FnZS5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcclxuICBtZXNzYWdlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdXR0b25cIik7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgLy9tb3JlIGFib3V0IG1lXHJcbiAgY29uc3QgbW9yZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBtb3JlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9yZVwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKG1vcmVTZWN0aW9uKTtcclxuICBtb3JlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG5cclxuICBjb25zdCBmaXJzdFRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmaXJzdFRleHRzLmNsYXNzTGlzdC5hZGQoXCJhZGRpdGlvbmFsXCIpO1xyXG5cclxuICBjb25zdCBzZWNvbmRUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kVGV4dHMuY2xhc3NMaXN0LmFkZChcImFkZGl0aW9uYWxcIik7XHJcbiAgc2Vjb25kVGV4dHMuY2xhc3NMaXN0LmFkZChcInNlY29uZEFkZGl0aW9uYWxcIik7XHJcblxyXG4gIGNvbnN0IENQbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgc2Vjb25kVGV4dHMuYXBwZW5kQ2hpbGQoQ1BudW1iZXIpO1xyXG4gIENQbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgQ1BudW1iZXIudGV4dENvbnRlbnQgPSBcIis2MyA5NTYgNjg4IDE0ODlcIjtcclxuICBDUG51bWJlci5ocmVmID0gXCJ0ZWw6KzYzOTU2Njg4MTQ4OVwiO1xyXG4gIENQbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJDUG51bWJlclwiKTtcclxuXHJcbiAgY29uc3QgY3BJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgY3BJY29uLmNsYXNzTGlzdC5hZGQoXCJzbWFsbEljb25cIik7XHJcbiAgY3BJY29uLnNyYyA9IEljb25QaG9uZTtcclxuICBDUG51bWJlci5hcHBlbmRDaGlsZChjcEljb24pO1xyXG5cclxuICBjb25zdCBwZXJzb25hbE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChwZXJzb25hbE1haWwpO1xyXG4gIHBlcnNvbmFsTWFpbC5ocmVmID0gXCJtYWlsdG86cGFycmVub2VtbWFudWVsNzU2QGdtYWlsLmNvbVwiO1xyXG4gIHBlcnNvbmFsTWFpbC50ZXh0Q29udGVudCA9IFwicGFycmVub2VtbWFudWVsNzU2QGdtYWlsLmNvbVwiO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwiQ1BudW1iZXJcIik7XHJcbiAgcGVyc29uYWxNYWlsLmNsYXNzTGlzdC5hZGQoXCJlbWFpbEFkZHJlc3NcIik7XHJcbiAgcGVyc29uYWxNYWlsLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgc2Vjb25kVGV4dHMuYXBwZW5kQ2hpbGQocGVyc29uYWxNYWlsKTtcclxuXHJcbiAgY29uc3QgZW1haWxJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgZW1haWxJY29uLmNsYXNzTGlzdC5hZGQoXCJzbWFsbEljb25cIik7XHJcbiAgZW1haWxJY29uLnNyYyA9IEljb25FbWFpbDtcclxuICBwZXJzb25hbE1haWwuYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcclxuXHJcbiAgbW9yZVNlY3Rpb24uYXBwZW5kQ2hpbGQoZmlyc3RUZXh0cyk7XHJcbiAgbW9yZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dHMpO1xyXG5cclxuICBjb25zdCBuYW1lQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXJcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXIyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwiZGlmZmVyZW5jZVwiO1xyXG5cclxuICBjb25zdCBjaXJjbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoY2lyY2xlMik7XHJcblxyXG4gIGNvbnN0IG15TmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZTIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbXlOYW1lMi50ZXh0Q29udGVudCA9IFwiRW1tYW51ZWwgUGFycmXDsW9cIjtcclxuICBuYW1lQ29udGFpbmVyMi5hcHBlbmRDaGlsZChteU5hbWUyKTtcclxuXHJcbiAgLy8gbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXIyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgZmlyc3RUZXh0cy5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyMik7XHJcbn1cclxuLy9cclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcIi4vZG9tLmpzXCI7XHJcbmltcG9ydCBsaW5rZWRpbiBmcm9tIFwiLi9saW5rZWRpbkxvZ28ucG5nXCI7XHJcbmltcG9ydCBpZyBmcm9tIFwiLi9pZ0xvZ28ucG5nXCI7XHJcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4vZ2l0aHViTG9nby5wbmdcIjtcclxuaW1wb3J0IGZlZWRiYWNrIGZyb20gXCIuL2NvbW1lbnQtcXVvdGUuc3ZnXCI7XHJcbmxheW91dCgpO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9uVHJpZ2dlcihzZWN0aW9uLCBhbmltYXRpb25OYW1lLCBleHBhbmQgPSBudWxsKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJvb3Q6IG51bGwsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNCxcclxuICAgIHJvb3RNYXJnaW46IFwiMjVweFwiLFxyXG4gIH07XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWJvdXRNZUNvbnRhaW5lclwiKSAmJlxyXG4gICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGV4cGFuZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFib3V0TWVDb250YWluZXJcIikgJiZcclxuICAgICAgICAhZW50cnkuaXNJbnRlcnNlY3RpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZXhwYW5kKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25OYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgb3B0aW9ucyk7XHJcblxyXG4gIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvblVzZShjbGFzc25hbWUsIGFuaW1hdGlvbjEsIGFuaW1hdGlvbjIgPSBudWxsKSB7XHJcbiAgY29uc3QgcmlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc25hbWUpO1xyXG4gIHJpZ2h0cy5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgYW5pbWF0aW9uVHJpZ2dlcihpdGVtcywgYW5pbWF0aW9uMSwgYW5pbWF0aW9uMik7XHJcbiAgfSk7XHJcbn1cclxuLy9sb29wIGNhbiBiZSB1c2VkIGhlcmVcclxuKCgpID0+IHtcclxuICBhbmltYXRpb25Vc2UoXCIucmlnaHRcIiwgXCJmcm9tUmlnaHRcIik7XHJcbiAgYW5pbWF0aW9uVXNlKFwiLmxlZnRcIiwgXCJmcm9tTGVmdFwiKTtcclxuICBhbmltYXRpb25Vc2UoXCIuYXBwZWFyXCIsIFwicG9wXCIsIFwiZXhwYW5kXCIpO1xyXG4gIGFuaW1hdGlvblVzZShcIi51cFwiLCBcInJpc2VcIik7XHJcbiAgYW5pbWF0aW9uVXNlKFwiLnNoaXZlclwiLCBcInNoYWtlXCIpO1xyXG59KSgpO1xyXG5cclxuLy8gY29uc3QgbmFtZSA9IFwiZnJvbVJpZ2h0XCI7XHJcbi8vIGFuaW1hdGlvblRyaWdnZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BTVRpdGxlXCIpLCBuYW1lKTtcclxuKGZ1bmN0aW9uIG9wZW5XZWJzaXRlKCkge1xyXG4gIGNvbnN0IHByb2oxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qMVwiKTtcclxuICBwcm9qMS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL2VtbWFuLXBpcC5naXRodWIuaW8vd2VhdGhlckFwcHYyL1wiKTtcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3JPblNjcm9sbCh0b09ic2VydmUsIGVsZW1lbnQsIGNvbG9yLCBpY29uKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJvb3Q6IG51bGwsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNCxcclxuICAgIHJvb3RNYXJnaW46IFwiMjVweFwiLFxyXG4gIH07XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChpY29uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgb3B0aW9ucyk7XHJcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvT2JzZXJ2ZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VDb2xvckNoYW5nZU9uU2Nyb2xsKG9ic2VydmUsIGNvbG9yLCBpY29uKSB7XHJcbiAgLy8gY29uc3QgdG9PYnNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYnNlcnZlKTtcclxuICBjb25zdCB0b0NoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29jbWVkQ29udGFpbmVyXCIpO1xyXG4gIGNoYW5nZUNvbG9yT25TY3JvbGwob2JzZXJ2ZSwgdG9DaGFuZ2UsIGNvbG9yLCBpY29uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29jbWVkQ29udGVudChpY29uLCBtZXNzYWdlLCBhbmltYXRpb24gPSBudWxsKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNvY21lZENvbnRlbnRcIik7XHJcbiAgY29uc3Qgc29jSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIHNvY0ljb24uY2xhc3NMaXN0LmFkZChcInNvY2ljb25zXCIpO1xyXG4gIHNvY0ljb24uc3JjID0gaWNvbjtcclxuICBzb2NJY29uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWNvbiA9PSBsaW5rZWRpbikge1xyXG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lbW1hbnVlbC11bmRlZmluZWQtOTk3MDQyMjU5L1wiKTtcclxuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSBpZykge1xyXG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZW0ubjcxL1wiKTtcclxuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSBnaXRodWIpIHtcclxuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vRW1tYW4tcGlwXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNvY0ljb24pO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRleHQuY2xhc3NMaXN0LmFkZChcInNvY3RleHRcIik7XHJcbiAgdGV4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG5cclxuICByZXR1cm4gW2NvbnRhaW5lcl1bMF07XHJcbn1cclxuXHJcbnVzZUNvbG9yQ2hhbmdlT25TY3JvbGwoXHJcbiAgXCIuYmFja2dyb3VuZFNlYVwiLFxyXG4gIFwid2hpdGVcIixcclxuICBzb2NtZWRDb250ZW50KGxpbmtlZGluLCBcInNlZSBteSBMaW5rZWRJbiFcIilcclxuKTtcclxudXNlQ29sb3JDaGFuZ2VPblNjcm9sbChcclxuICBcIi5odW5kcmVkVkhjb250YWluZXJcIixcclxuICBcIiM0NzgxN2ZcIixcclxuICBzb2NtZWRDb250ZW50KGdpdGh1YiwgXCI8LSBHaXRIdWIhISFcIilcclxuKTtcclxudXNlQ29sb3JDaGFuZ2VPblNjcm9sbChcclxuICBcIi5zbGlkZUNvbnRhaW5lclwiLFxyXG4gIFwiIzAwYzljOFwiLFxyXG4gIHNvY21lZENvbnRlbnQoaWcsIFwiSSBhbHNvIGhhdmUgSW5zdGEgOilcIilcclxuKTtcclxudXNlQ29sb3JDaGFuZ2VPblNjcm9sbChcclxuICBcImZvcm1cIixcclxuICBcIndoaXRlXCIsXHJcbiAgLy8gXCJiZmZjZjlcIixcclxuICBzb2NtZWRDb250ZW50KGZlZWRiYWNrLCBcIllvdSBjb3VsZCBzZW5kIGZlZWRiYWNrcyB0b28uXCIpXHJcbik7XHJcblxyXG4vLyBjaGFuZ2VDb2xvck9uU2Nyb2xsKFxyXG4vLyAgIFwiLmJhY2tncm91bmRTZWFcIixcclxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvY21lZENvbnRhaW5lclwiKSxcclxuLy8gICBcImJsYWNrXCJcclxuLy8gKTtcclxuXHJcbi8vIHNsaWRlclxyXG5mdW5jdGlvbiBzbGlkZXJGdW5jKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0c1wiKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0XCIpO1xyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXZcIik7XHJcblxyXG4gIHByb2plY3RzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgaW1hZ2Uuc3R5bGUubGVmdCA9IGAke2luZGV4ICogMTAwfSVgO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzbGlkZXIoc2lnbiA9IFwiXCIpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZSgke3NpZ259JHs4MH12dylgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIChmdW5jdGlvbiBzbGlkZXJCdXR0b25zKCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbmV4dC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaSA9PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNsaWRlcihcIi1cIik7XHJcbiAgICAgIGkrKztcclxuICAgIH07XHJcbiAgICBwcmV2Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2xpZGVyKCk7XHJcbiAgICAgIGktLTtcclxuICAgIH07XHJcbiAgfSkoKTtcclxufVxyXG5cclxuc2xpZGVyRnVuYygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=