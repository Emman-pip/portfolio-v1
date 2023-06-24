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
  z-index: 11;
  height: 10%;
  width: 30vw;
  border-bottom-left-radius: 3rem;
  display: inline;
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--white-shade);
  mix-blend-mode: normal;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  overflow-x: hidden;\r\n  max-width: 100vw;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  mix-blend-mode: difference;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  z-index: 11;\r\n  height: 10%;\r\n  width: 30vw;\r\n  border-bottom-left-radius: 3rem;\r\n  display: inline;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: var(--white-shade);\r\n  mix-blend-mode: normal;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\n.backgroundSea {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border: 1px solid var(--white-shade);\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n}\r\n.aboutmeButton:hover {\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n  position: relative;\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 2;\r\n}\r\n\r\n.slit {\r\n  z-index: 0;\r\n  height: 70vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  background-image: url(\"./pexels-myburgh-roux-4816921.jpg\");\r\n  background-position: center center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  /* transform: rotate(10deg); */\r\n  --linear-g: linear-gradient(\r\n    to bottom,\r\n    rgba(0, 0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0),\r\n    rgba(0, 0, 0, 0)\r\n  );\r\n  /* background-image: var(--linear-g); */\r\n  mask-image: var(--linear-g);\r\n  -webkit-mask-image: var(--linear-g);\r\n}\r\n\r\n.aboutMeContainer {\r\n  border: 0.2rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  border-radius: 1rem;\r\n  height: fit-content;\r\n  background-color: #00000015;\r\n  backdrop-filter: blur(1rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer::after {\r\n  content: \"I am not the one in the picture :)\";\r\n  font-family: Raj-light;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n  transition: font-size 0.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  transition: opacity 3s;\r\n  opacity: 0%;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.worksTitle {\r\n  text-align: center;\r\n  height: fit-content;\r\n  font-family: Raj-bold;\r\n  color: white;\r\n  background-color: var(--dark-accent);\r\n  font-size: 4rem;\r\n}\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.slideContainer {\r\n  height: auto;\r\n  width: 80vw;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n/* .prev,\r\n  .next {\r\n    font-family: Raj-bold;\r\n    font-size: 5rem;\r\n    color: var(--white-shade);\r\n    background-color: #00000051;\r\n    cursor: pointer;\r\n  } */\r\n\r\n.projects {\r\n  border-radius: 2rem;\r\n  outline: 1rem solid black;\r\n  width: 80vw;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  float: left;\r\n  /* transition: transform 2s;\r\n  transform: translateX(0vw); */\r\n  cursor: pointer;\r\n  box-shadow: 2rem 2rem 1rem rgba(0, 0, 0, 0.411);\r\n}\r\n\r\n.proj1Mobile {\r\n  z-index: 2;\r\n  height: 30vh;\r\n  width: auto;\r\n  position: absolute;\r\n  left: 5vh;\r\n  bottom: 0;\r\n  outline: 0.5rem solid gray;\r\n  border-radius: 1rem;\r\n  box-shadow: 0.5rem 0.5rem 0.5rem black;\r\n}\r\n\r\n.buttonContainer {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  background-color: var(--dark-accent);\r\n  border-radius: 10rem;\r\n  text-decoration: none;\r\n  font-family: Raj-bold;\r\n  font-size: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a:active {\r\n  background-color: var(--main-accent);\r\n}\r\n\r\n.projects:first-child::after {\r\n  content: \"1\";\r\n  margin-top: -10vw;\r\n  color: black;\r\n}\r\n\r\n.slider {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  margin-top: 10vh;\r\n  margin-bottom: 3vh;\r\n\r\n  transition: transform 2s;\r\n  -webkit-transition: transform 2s;\r\n  -moz-transition: transform 2s;\r\n  -o-transition: transform 2s;\r\n  transform: translateX(0vw);\r\n}\r\n\r\n#span1:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span3:target ~ .slider {\r\n  transform: translateX(-160vw);\r\n}\r\n\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 100vh;\r\n  text-align: center;\r\n}\r\n\r\n.emailSection100 {\r\n  display: flex;\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  display: inline;\r\n  padding: 1rem;\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  margin: 5rem;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n  border-radius: 1rem;\r\n  font-family: Raj-bold;\r\n  font-size: 3rem;\r\n  color: var(--main-color);\r\n  background-color: rgba(255, 255, 255, 0.478);\r\n  gap: 1rem;\r\n  backdrop-filter: blur(1rem);\r\n  mix-blend-mode: luminosity;\r\n}\r\n\r\n.glowingmail {\r\n  font-size: 2rem;\r\n  font-family: Raj-regular;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: Raj-regular;\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.submitButton {\r\n  font-family: Raj-medium;\r\n  font-size: 1.5rem;\r\n  color: black;\r\n  height: 2rem;\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 15vh;\r\n  border-top: 1px solid black;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.additional {\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.secondAdditional {\r\n  align-items: end;\r\n}\r\n\r\n/* .nameContainer2 {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n} */\r\n\r\n.CPnumber {\r\n  /* letter-spacing: 0.7rem; */\r\n  cursor: pointer;\r\n  user-select: all;\r\n  /* font-family: Raj-regular; */\r\n  /* font-size: 2rem; */\r\n  height: fit-content;\r\n  overflow: visible;\r\n  text-align: center;\r\n  position: relative;\r\n  width: fit-content;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.smallIcon {\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n/* .CPnumber:after {\r\n  content: \"\";\r\n  position: absolute;\r\n\r\n  height: 3px;\r\n  width: 10%;\r\n  background-color: var(--main-accent);\r\n  left: 0;\r\n  bottom: 0px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.CPnumber:hover:after {\r\n  width: 100%;\r\n} */\r\n\r\n/* ///////////////////////////////////// */\r\n\r\n@keyframes rise {\r\n  from {\r\n    transform: translateY(10rem);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rise {\r\n  animation-name: rise;\r\n  animation-duration: 3s;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: scale(-0.5, 1);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1, 1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.shiver {\r\n  opacity: 0;\r\n}\r\n\r\n.shake {\r\n  opacity: 1;\r\n  animation-name: shake;\r\n  animation-duration: 3s;\r\n}\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 4px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMscUlBQStDO0FBQzNGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLCtJQUFvRDtBQUNoRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0Isc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxTQUFTLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFNBQVMsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUNBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1Q0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyVXFCO0FBQ2E7QUFDbEM7QUFDQSwrQ0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhamRoYW5pLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhamRoYW5pLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL3BleGVscy1teWJ1cmdoLXJvdXgtNDgxNjkyMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtLW1haW4tY29sb3I6ICMwMDAwMDA7XHJcbiAgLS13aGl0ZS1zaGFkZTogd2hpdGU7XHJcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcclxuICAtLWxpZ2h0LWFjY2VudDogI2JmZmNmOTtcclxuICAtLWRhcmstYWNjZW50OiAjNDc4MTdmO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcclxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxyXG4gICk7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgbWluLWhlaWdodDogMzAwdmg7XHJcbn1cclxuXHJcbi8qIHNjcm9sbCBiYXIgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIHdpZHRoOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiB0b3AgYmFyICovXHJcblxyXG4udG9wQmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbn1cclxuXHJcbi5uYW1lQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGhlaWdodDogMC43cmVtO1xyXG4gIHdpZHRoOiAwLjdyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcbi5uYW1lIHtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuLnZTbWFsbFRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5zb2NtZWRDb250YWluZXIge1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5maXJzdFBhcnQge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJhY2tncm91bmRTZWEge1xyXG4gIHdpZHRoOiAxNjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hc2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNCksIHRyYW5zcGFyZW50KTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHRvcCxcclxuICAgIHRyYW5zcGFyZW50LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICAgdHJhbnNwYXJlbnRcclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmdyZWV0IHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xyXG59XHJcblxyXG4uYWJvdXRtZUJ1dHRvbiB7XHJcbiAgei1pbmRleDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjB2aDtcclxuICBsZWZ0OiAxMHZ3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5hYm91dG1lQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuODE1KTtcclxufVxyXG4uYWJvdXRtZUJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxufVxyXG5cclxuLmludHJvMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjB2aDtcclxuICByaWdodDogMTB2dztcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxufVxyXG5cclxuLyogcGFnZSBicmVhayAqL1xyXG5cclxuLnBhZ2VicmVhayB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgaGVpZ2h0OiAwLjNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMzB2dztcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbiAgb3BhY2l0eTogNDAlO1xyXG59XHJcblxyXG4vKiBzZWNvbmQgcGFydCAqL1xyXG5cclxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpIC8qIHZhcigtLWxpZ2h0LWFjY2VudCkgKi9cclxuICApO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLyogcGFkZGluZy10b3A6IDhyZW07ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaHVuZHJlZFZIY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zbGl0IHtcclxuICB6LWluZGV4OiAwO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7ICovXHJcbiAgLS1saW5lYXItZzogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSxcclxuICAgIHJnYmEoMCwgMCwgMCksXHJcbiAgICByZ2JhKDAsIDAsIDApLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKVxyXG4gICk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbGluZWFyLWcpOyAqL1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLWxpbmVhci1nKTtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWxpbmVhci1nKTtcclxufVxyXG5cclxuLmFib3V0TWVDb250YWluZXIge1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE1O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB3aWR0aDogODB2dztcclxufVxyXG5cclxuQGtleWZyYW1lcyB3aWRlbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcbn1cclxuXHJcbi5leHBhbmQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB3aWRlbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJJIGFtIG5vdCB0aGUgb25lIGluIHRoZSBwaWN0dXJlIDopXCI7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyOmhvdmVyOjphZnRlciB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uQU1UaXRsZSB7XHJcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxcyAxMHM7XHJcbn1cclxuXHJcbi5BTVRpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG59XHJcblxyXG4uYWJvdXRNZVBhcmFnIHtcclxuICB3aWR0aDogNDB2dztcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxLjVzO1xyXG59XHJcblxyXG5zcGFuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmEvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHZoKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZyb21SaWdodCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAvKiBvcGFjaXR5OiAxMDAlOyAqL1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2aCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5mcm9tTGVmdCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcblxyXG4ucG9wIHtcclxufVxyXG5cclxuLmFwcGVhciB7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcclxuICBvcGFjaXR5OiAwJTtcclxufVxyXG5cclxuLnBvcCB7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vd29ya3MvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ud29ya3NUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4ud29ya3Mge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLWRhcmstYWNjZW50KSxcclxuICAgIHZhcigtLW1haW4tYWNjZW50KVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZUNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbn1cclxuXHJcbi8qIC5wcmV2LFxyXG4gIC5uZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSAqL1xyXG5cclxuLnByb2plY3RzIHtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIG91dGxpbmU6IDFyZW0gc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnJlbSAycmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjQxMSk7XHJcbn1cclxuXHJcbi5wcm9qMU1vYmlsZSB7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDV2aDtcclxuICBib3R0b206IDA7XHJcbiAgb3V0bGluZTogMC41cmVtIHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDAuNXJlbSBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbkNvbnRhaW5lciA+IGEge1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uQ29udGFpbmVyID4gYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxufVxyXG5cclxuLnByb2plY3RzOmZpcnN0LWNoaWxkOjphZnRlciB7XHJcbiAgY29udGVudDogXCIxXCI7XHJcbiAgbWFyZ2luLXRvcDogLTEwdnc7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcclxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XHJcbn1cclxuXHJcbiNzcGFuMTp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwdncpO1xyXG59XHJcblxyXG4jc3BhbjI6dGFyZ2V0IH4gLnNsaWRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcclxufVxyXG5cclxuI3NwYW4yOnRhcmdldCB+IC5zbGlkZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODB2dyk7XHJcbn1cclxuXHJcbiNzcGFuMzp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2MHZ3KTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy9lbWFpbC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLmVtYWlsU2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpLFxyXG4gICAgdmFyKC0tbGlnaHQtYWNjZW50KSxcclxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbWFpbFNlY3Rpb24xMDAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3OCk7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcclxuICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcclxufVxyXG5cclxuLmdsb3dpbmdtYWlsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uc3VibWl0QnV0dG9uIHtcclxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubW9yZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWNvbmRBZGRpdGlvbmFsIHtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4vKiAubmFtZUNvbnRhaW5lcjIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn0gKi9cclxuXHJcbi5DUG51bWJlciB7XHJcbiAgLyogbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IGFsbDtcclxuICAvKiBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7ICovXHJcbiAgLyogZm9udC1zaXplOiAycmVtOyAqL1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc21hbGxJY29uIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi8qIC5DUG51bWJlcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLkNQbnVtYmVyOmhvdmVyOmFmdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuQGtleWZyYW1lcyByaXNlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnJpc2Uge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByaXNlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoLTAuNSwgMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnNoaXZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNoYWtlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcbi51bmRlcmxpbmU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmU6aG92ZXI6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFD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O0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7OztHQUtHOztBQUVIO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSCwwQ0FBMEM7O0FBRTFDO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xcclxcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcXHJcXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xcclxcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGwgYmFyICovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICB3aWR0aDogMnZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdG9wIGJhciAqL1xcclxcblxcclxcbi50b3BCYXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0b3A6IDByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZUNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgaGVpZ2h0OiAwLjdyZW07XFxyXFxuICB3aWR0aDogMC43cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlxcXCIpO1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi52U21hbGxUZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY21lZENvbnRhaW5lciB7XFxyXFxuICB6LWluZGV4OiAxMTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3RQYXJ0IHtcXHJcXG4gIGhlaWdodDogMTIwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZFNlYSB7XFxyXFxuICB3aWR0aDogMTYwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHRvcCxcXHJcXG4gICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC40KSxcXHJcXG4gICAgdHJhbnNwYXJlbnRcXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1NZWRpdW0udHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5ncmVldCB7XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzB2aDtcXHJcXG4gIGxlZnQ6IDEwdnc7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbnRybyB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0bWVCdXR0b24ge1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDYwdmg7XFxyXFxuICBsZWZ0OiAxMHZ3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDApO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmFib3V0bWVCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjgxNSk7XFxyXFxufVxcclxcbi5hYm91dG1lQnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxufVxcclxcblxcclxcbi5pbnRybzIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyMHZoO1xcclxcbiAgcmlnaHQ6IDEwdnc7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwYWdlIGJyZWFrICovXFxyXFxuXFxyXFxuLnBhZ2VicmVhayB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGhlaWdodDogMC4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxyXFxuICBvcGFjaXR5OiA0MCU7XFxyXFxufVxcclxcblxcclxcbi8qIHNlY29uZCBwYXJ0ICovXFxyXFxuXFxyXFxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLWRhcmstYWNjZW50KSAvKiB2YXIoLS1saWdodC1hY2NlbnQpICovXFxyXFxuICApO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgLyogcGFkZGluZy10b3A6IDhyZW07ICovXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5odW5kcmVkVkhjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpdCB7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3BleGVscy1teWJ1cmdoLXJvdXgtNDgxNjkyMS5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgLyogdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpOyAqL1xcclxcbiAgLS1saW5lYXItZzogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMCksXFxyXFxuICAgIHJnYmEoMCwgMCwgMCksXFxyXFxuICAgIHJnYmEoMCwgMCwgMCksXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMClcXHJcXG4gICk7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1saW5lYXItZyk7ICovXFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1saW5lYXItZyk7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWxpbmVhci1nKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0TWVDb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE1O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHdpZGVuIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogd2lkZW47XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiSSBhbSBub3QgdGhlIG9uZSBpbiB0aGUgcGljdHVyZSA6KVxcXCI7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0TWVDb250YWluZXI6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkFNVGl0bGUge1xcclxcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMXMgMTBzO1xcclxcbn1cXHJcXG5cXHJcXG4uQU1UaXRsZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZVBhcmFnIHtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwdmgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZyb21SaWdodCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxuICAvKiBvcGFjaXR5OiAxMDAlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tbGVmdCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2aCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZnJvbUxlZnQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxufVxcclxcblxcclxcbi5wb3Age1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyIHtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgM3M7XFxyXFxuICBvcGFjaXR5OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcCB7XFxyXFxuICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy93b3Jrcy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG5cXHJcXG4ud29ya3NUaXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29ya3Mge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLWRhcmstYWNjZW50KSxcXHJcXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpXFxyXFxuICApO1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxyXFxufVxcclxcblxcclxcbi8qIC5wcmV2LFxcclxcbiAgLm5leHQge1xcclxcbiAgICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9ICovXFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBvdXRsaW5lOiAxcmVtIHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7ICovXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAycmVtIDJyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2oxTW9iaWxlIHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDV2aDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG91dGxpbmU6IDAuNXJlbSBzb2xpZCBncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMC41cmVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db250YWluZXIgPiBhIHtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29udGFpbmVyID4gYTphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM6Zmlyc3QtY2hpbGQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIxXFxcIjtcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHZ3O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgbWFyZ2luLXRvcDogMTB2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4xOnRhcmdldCB+IC5zbGlkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4yOnRhcmdldCB+IC5zbGlkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4yOnRhcmdldCB+IC5zbGlkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4zOnRhcmdldCB+IC5zbGlkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNjB2dyk7XFxyXFxufVxcclxcblxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vZW1haWwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuLmVtYWlsU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1saWdodC1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWxTZWN0aW9uMTAwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkc2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDc4KTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2xvd2luZ21haWwge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy9tb3JlLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi5tb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uYWwge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpOyAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZEFkZGl0aW9uYWwge1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm5hbWVDb250YWluZXIyIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufSAqL1xcclxcblxcclxcbi5DUG51bWJlciB7XFxyXFxuICAvKiBsZXR0ZXItc3BhY2luZzogMC43cmVtOyAqL1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IGFsbDtcXHJcXG4gIC8qIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjsgKi9cXHJcXG4gIC8qIGZvbnQtc2l6ZTogMnJlbTsgKi9cXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbEljb24ge1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIC5DUG51bWJlcjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5DUG51bWJlcjpob3ZlcjphZnRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbkBrZXlmcmFtZXMgcmlzZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcmVtKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmlzZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogcmlzZTtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0wLjUsIDEpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaGl2ZXIge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoYWtlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hha2U7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcclxcbn1cXHJcXG4udW5kZXJsaW5lOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udW5kZXJsaW5lOmhvdmVyOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTZWEgZnJvbSBcIi4vcGV4ZWxzLXNhbXByZWV0eS1hbGktNjk1Nzk0LmpwZ1wiO1xyXG5pbXBvcnQgd2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyQXBwVjIucG5nXCI7XHJcbmltcG9ydCB3ZWF0aGVyTW9iaWxlIGZyb20gXCIuL3dlYXRoZXJBcHBWMm1vYmlsZS5wbmdcIjtcclxuaW1wb3J0IHByb2plY3QyIGZyb20gXCIuL3Byb2oyLnBuZ1wiO1xyXG5cclxuaW1wb3J0IEljb25QaG9uZSBmcm9tIFwiLi9waG9uZS1kaWFsLnN2Z1wiO1xyXG5pbXBvcnQgSWNvbkVtYWlsIGZyb20gXCIuL2VtYWlsLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxheW91dCgpIHtcclxuICAvL2JvZHlcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gIC8vdG9wIGJhclxyXG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHRvcEJhci5jbGFzc0xpc3QuYWRkKFwidG9wQmFyXCIpO1xyXG5cclxuICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIHRvcEJhci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG4gIGNvbnN0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIG15TmFtZS50ZXh0Q29udGVudCA9IFwiRW1tYW51ZWwgUGFycmXDsW9cIjtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG15TmFtZSk7XHJcblxyXG4gIGNvbnN0IHNvY21lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc29jbWVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzb2NtZWRDb250YWluZXJcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChzb2NtZWRDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBteU5hbWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWVEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ2U21hbGxUZXh0XCIpO1xyXG4gIG15TmFtZS5hcHBlbmRDaGlsZChteU5hbWVEZXRhaWxzKTtcclxuICBteU5hbWVEZXRhaWxzLnRleHRDb250ZW50ID0gXCJCU0lUIFNUVURFTlQgQVQgQkFUQU5HQVMgU1RBVEUgVU5JVkVSU0lUWVwiO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XHJcblxyXG4gIC8vZmlyc3QgcHJvbXB0XHJcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZmlyc3RQYXJ0LmNsYXNzTGlzdC5hZGQoXCJmaXJzdFBhcnRcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChmaXJzdFBhcnQpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kU2VhID0gbmV3IEltYWdlKCk7XHJcbiAgYmFja2dyb3VuZFNlYS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFNlYVwiKTtcclxuICBiYWNrZ3JvdW5kU2VhLnNyYyA9IFNlYTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFNlYSk7XHJcbiAgYmFja2dyb3VuZFNlYS5hbHQgPSBcImJhY2tncm91bmRcIjtcclxuXHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJIRUxMTyxcIjtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRcIik7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChncmVldGluZyk7XHJcblxyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIkkgYW0gRU1NQU5VRUxcIjtcclxuICBncmVldGluZy5hcHBlbmRDaGlsZChpbnRybyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbi5ocmVmID0gXCIjYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dG1lQnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGludHJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJpbnRybzJcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIGludHJvMi50ZXh0Q29udGVudCA9IFwiQSBzZWxmLXRhdWdodCBwcm9ncmFtbWVyXCI7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGludHJvMik7XHJcblxyXG4gIC8vcGFnZSBicmVha1xyXG5cclxuICBjb25zdCBwYWdlYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VicmVhay5jbGFzc0xpc3QuYWRkKFwicGFnZWJyZWFrXCIpO1xyXG5cclxuICAvL2Fib3V0IG1lXHJcbiAgY29uc3QgYWJvdXRNZUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQmFja2dyb3VuZFwiKTtcclxuICAvLyBhYm91dE1lQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmlkID0gXCJhYm91dE1lQmFja2dyb3VuZFwiO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRNZUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBodW5kcmVkVkhjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGh1bmRyZWRWSGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaHVuZHJlZFZIY29udGFpbmVyXCIpO1xyXG5cclxuICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChodW5kcmVkVkhjb250YWluZXIpO1xyXG5cclxuICBjb25zdCBzbGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGl0LmNsYXNzTGlzdC5hZGQoXCJzbGl0XCIpO1xyXG5cclxuICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChzbGl0KTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUNvbnRhaW5lclwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBBTVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJBTVRpdGxlXCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBBTVRpdGxlLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoQU1UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVQYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZVBhcmFnXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5pbm5lckhUTUwgPVxyXG4gICAgXCJJIGFtIGEgc2VsZi10YXVnaHQgPHNwYW4+d2ViIGRldmVsb3Blcjwvc3Bhbj4uIEN1cnJlbnRseSwgSSBhbSBzdHVkeWluZyA8c3Bhbj5CUyBpbiBpbmZvcm1hdGlvbiB0ZWNobm9sb2d5IGF0IHRoZSBCYXRhbmdhcyBTdGF0ZSBVbml2ZXJzaXR5PC9zcGFuPi4gSSBoYXZlIGJlZW4gaG9uaW5nIG15IHNraWxscyBzaW5jZSBsYXRlIDIwMjIgKHRocm91Z2ggdGhlIDxzcGFuPk9kaW4gUHJvamVjdDwvc3Bhbj4gYW5kIG90aGVyIG9ubGluZSByZXNvdXJjZXMpLiA8c3Bhbj5JIGFtIGNvbmZpZGVudCB3aXRoIG15IGVudHJ5LWxldmVsIGZyb250LWVuZCBkZXZlbG9wbWVudCBza2lsbHM8L3NwYW4+LiBNeSBwcmltYXJ5IGxhbmd1YWdlcyBhcmUgPHNwYW4+SFRNTCwgQ1NTLCBhbmQgSmF2YXNjcmlwdDwvc3Bhbj4gLSBidXQgSSBjYW4gYWxzbyB1c2UgUHl0aG9uLCBXZWJwYWNrLCBDTEksIGFuZCBDKysgdG8gYSBjZXJ0YWluIGV4dGVudC5cIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQYXJhZyk7XHJcblxyXG4gIC8vcHJvamVjdHNcclxuICBjb25zdCB3b3Jrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHdvcmtzVGl0bGUpO1xyXG4gIHdvcmtzVGl0bGUuY2xhc3NMaXN0LmFkZChcIndvcmtzVGl0bGVcIik7XHJcblxyXG4gIGNvbnN0IHdvcmtzVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwid29ya3NUaXRsZVwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJTT01FIE9GIE1ZIFdPUktTXCI7XHJcbiAgd29ya3NUaXRsZS5hcHBlbmRDaGlsZCh3b3Jrc1RpdGxlVGV4dCk7XHJcblxyXG4gIGNvbnN0IHdvcmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgLy8gd29ya3MuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwid29ya3NcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrcyk7XHJcblxyXG4gIC8vIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIHByZXYudGV4dENvbnRlbnQgPSBcIjxcIjtcclxuICAvLyBwcmV2LmNsYXNzTGlzdC5hZGQoXCJwcmV2XCIpO1xyXG4gIC8vIHdvcmtzLmFwcGVuZENoaWxkKHByZXYpO1xyXG5cclxuICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUNvbnRhaW5lclwiKTtcclxuICB3b3Jrcy5hcHBlbmRDaGlsZChzbGlkZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIG5leHQudGV4dENvbnRlbnQgPSBcIj5cIjtcclxuICAvLyBuZXh0LmNsYXNzTGlzdC5hZGQoXCJuZXh0XCIpO1xyXG4gIC8vIHdvcmtzLmFwcGVuZENoaWxkKG5leHQpO1xyXG5cclxuICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHNwYW4xLmlkID0gXCJzcGFuMVwiO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4xKTtcclxuXHJcbiAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBzcGFuMi5pZCA9IFwic3BhbjJcIjtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuMik7XHJcblxyXG4gIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgc3BhbjIuaWQgPSBcInNwYW4zXCI7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbjMpO1xyXG5cclxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblxyXG4gIGNvbnN0IHByb2oxID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajEuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMS5zcmMgPSB3ZWF0aGVyO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBwcm9qMS5jbGFzc0xpc3QuYWRkKFwicHJvajFcIik7XHJcblxyXG4gIGNvbnN0IHByb2oxTW9iaWxlID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajFNb2JpbGUuY2xhc3NMaXN0LmFkZChcInByb2oxTW9iaWxlXCIpO1xyXG4gIHByb2oxTW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajFNb2JpbGUuc3JjID0gd2VhdGhlck1vYmlsZTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajFNb2JpbGUpO1xyXG5cclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajEpO1xyXG5cclxuICBjb25zdCBwcm9qMiA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajIuc3JjID0gcHJvamVjdDI7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMik7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2oyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qMyA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2ozLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajMuc3JjID0gd2VhdGhlcjtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2ozKTtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvajNcIik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIik7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbjJcIik7XHJcbiAgYnV0dG9uMi5ocmVmID0gXCIjc3BhbjJcIjtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24xLmNsYXNzTGlzdC5hZGQoXCJidXR0b24xXCIpO1xyXG4gIGJ1dHRvbjEuaHJlZiA9IFwiI3NwYW4xXCI7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbjEpO1xyXG5cclxuICBjb25zdCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uM1wiKTtcclxuICBidXR0b24zLmhyZWYgPSBcIiNzcGFuM1wiO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24zKTtcclxuXHJcbiAgLy9jb250YWN0IG1lISBlbWFpbCBwYWdlXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb25cIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBlbWFpbFNlY3Rpb24xMDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24xMDAuY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvbjEwMFwiKTtcclxuICBlbWFpbFNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWxTZWN0aW9uMTAwKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCJodHRwczovL2Zvcm1zdWJtaXQuY28vcGFycmVub2VtbWFudWVsNzU2QGdtYWlsLmNvbVwiO1xyXG4gIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgZW1haWxTZWN0aW9uMTAwLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwiZmllbGRzZXRcIik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInNoaXZlclwiKTtcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICBsZWdlbmQuaW5uZXJIVE1MID0gYEludGVyZXN0ZWQ/IDxzcGFuIGNsYXNzPVwiZ2xvd2luZ21haWxcIj5FbWFpbCBtZSBub3chPC9zcGFuPmA7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuXHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZW1haWwucGxhY2Vob2xkZXIgPSBcIkVNQUlMXCI7XHJcbiAgZW1haWwudHlwZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbC5uYW1lID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcblxyXG4gIGNvbnN0IHNlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZW5kZXIucGxhY2Vob2xkZXIgPSBcIk5BTUVcIjtcclxuICBzZW5kZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlbmRlci5uYW1lID0gXCJuYW1lXCI7XHJcbiAgc2VuZGVyLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzZW5kZXIpO1xyXG5cclxuICBjb25zdCBzdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHN1YmplY3QucGxhY2Vob2xkZXIgPSBcIk1BSUwnUyBTVUJKRUNUXCI7XHJcbiAgc3ViamVjdC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc3ViamVjdC5uYW1lID0gXCJzdWJqZWN0XCI7XHJcbiAgc3ViamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3ViamVjdCk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiTUVTU0FHRVwiO1xyXG4gIG1lc3NhZ2UubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gIG1lc3NhZ2UuY29scyA9IDMwO1xyXG4gIG1lc3NhZ2Uucm93cyA9IDEwO1xyXG4gIG1lc3NhZ2Uuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgbWVzc2FnZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnV0dG9uXCIpO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vbW9yZSBhYm91dCBtZVxyXG4gIGNvbnN0IG1vcmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbW9yZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vcmVcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChtb3JlU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZpcnN0VGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpcnN0VGV4dHMuY2xhc3NMaXN0LmFkZChcImFkZGl0aW9uYWxcIik7XHJcblxyXG4gIGNvbnN0IHNlY29uZFRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzZWNvbmRUZXh0cy5jbGFzc0xpc3QuYWRkKFwiYWRkaXRpb25hbFwiKTtcclxuICBzZWNvbmRUZXh0cy5jbGFzc0xpc3QuYWRkKFwic2Vjb25kQWRkaXRpb25hbFwiKTtcclxuXHJcbiAgY29uc3QgQ1BudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKENQbnVtYmVyKTtcclxuICBDUG51bWJlci5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIENQbnVtYmVyLnRleHRDb250ZW50ID0gXCIrNjMgOTU2IDY4OCAxNDg5XCI7XHJcbiAgQ1BudW1iZXIuY2xhc3NMaXN0LmFkZChcIkNQbnVtYmVyXCIpO1xyXG5cclxuICBjb25zdCBjcEljb24gPSBuZXcgSW1hZ2UoKTtcclxuICBjcEljb24uY2xhc3NMaXN0LmFkZChcInNtYWxsSWNvblwiKTtcclxuICBjcEljb24uc3JjID0gSWNvblBob25lO1xyXG4gIENQbnVtYmVyLmFwcGVuZENoaWxkKGNwSWNvbik7XHJcblxyXG4gIGNvbnN0IHBlcnNvbmFsTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2Vjb25kVGV4dHMuYXBwZW5kQ2hpbGQocGVyc29uYWxNYWlsKTtcclxuICBwZXJzb25hbE1haWwudGV4dENvbnRlbnQgPSBcInBhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcIkNQbnVtYmVyXCIpO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxBZGRyZXNzXCIpO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKHBlcnNvbmFsTWFpbCk7XHJcblxyXG4gIGNvbnN0IGVtYWlsSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGxJY29uXCIpO1xyXG4gIGVtYWlsSWNvbi5zcmMgPSBJY29uRW1haWw7XHJcbiAgcGVyc29uYWxNYWlsLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcblxyXG4gIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKGZpcnN0VGV4dHMpO1xyXG4gIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFRleHRzKTtcclxuICBjb25zdCBuYW1lQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXJcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJkaWZmZXJlbmNlXCI7XHJcblxyXG4gIGNvbnN0IGNpcmNsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNpcmNsZTIuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5hcHBlbmRDaGlsZChjaXJjbGUyKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lMi5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBteU5hbWUyLnRleHRDb250ZW50ID0gXCJFbW1hbnVlbCBQYXJyZcOxb1wiO1xyXG4gIG5hbWVDb250YWluZXIyLmFwcGVuZENoaWxkKG15TmFtZTIpO1xyXG5cclxuICAvLyBuYW1lQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lcjJcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBmaXJzdFRleHRzLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIyKTtcclxufVxyXG4vL1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwiLi9kb20uanNcIjtcclxuXHJcbmxheW91dCgpO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9uVHJpZ2dlcihzZWN0aW9uLCBhbmltYXRpb25OYW1lLCBleHBhbmQgPSBudWxsKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJvb3Q6IG51bGwsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNCxcclxuICAgIHJvb3RNYXJnaW46IFwiMjVweFwiLFxyXG4gIH07XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWJvdXRNZUNvbnRhaW5lclwiKSAmJlxyXG4gICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGV4cGFuZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFib3V0TWVDb250YWluZXJcIikgJiZcclxuICAgICAgICAhZW50cnkuaXNJbnRlcnNlY3RpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZXhwYW5kKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25OYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgb3B0aW9ucyk7XHJcblxyXG4gIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XHJcbn1cclxuXHJcbigoKSA9PiB7XHJcbiAgY29uc3QgcmlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yaWdodFwiKTtcclxuICByaWdodHMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwiZnJvbVJpZ2h0XCIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsZWZ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVmdFwiKTtcclxuICBsZWZ0cy5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgYW5pbWF0aW9uVHJpZ2dlcihpdGVtcywgXCJmcm9tTGVmdFwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwZWFyXCIpO1xyXG4gIGFwcGVhcnMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwicG9wXCIsIFwiZXhwYW5kXCIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByaXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBcIik7XHJcbiAgcmlzZXMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwicmlzZVwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2hpdmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpdmVyXCIpO1xyXG4gIHNoaXZlcnMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwic2hha2VcIik7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbi8vIGNvbnN0IG5hbWUgPSBcImZyb21SaWdodFwiO1xyXG4vLyBhbmltYXRpb25UcmlnZ2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQU1UaXRsZVwiKSwgbmFtZSk7XHJcbihmdW5jdGlvbiBvcGVuV2Vic2l0ZSgpIHtcclxuICBjb25zdCBwcm9qMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvajFcIik7XHJcbiAgcHJvajEub25jbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9lbW1hbi1waXAuZ2l0aHViLmlvL3dlYXRoZXJBcHB2Mi9cIik7XHJcbiAgfTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9