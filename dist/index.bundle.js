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
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./pexels-djordje-petrovic-2102416.jpg */ "./src/pexels-djordje-petrovic-2102416.jpg"), __webpack_require__.b);
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
  overflow-x: hidden;
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
  mix-blend-mode: difference;
  top: 0rem;
  display: flex;
  align-items: center;
  z-index: 2;
  display: flex;
  justify-content: space-between;
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
  mix-blend-mode: none;
  /* background-color: var(--main-accent); */
  height: 100%;
  width: 30vw;
  border-bottom-left-radius: 3rem;
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
  height: 120vh;
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
}

.hundredVHcontainer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aboutMeContainer {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.864),
      #0000008b,
      rgba(0, 0, 0, 0.851)
    ),
    url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-position: center -30px;
  background-size: 80vw auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  border: 0.5rem solid;
  border-color: var(--main-color);
  padding: 2rem;
  height: fit-content;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%,
    10% 0%
  );
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
.underline::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
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
  opacity: 0%;
  transition: opacity 3s;
}

.pop {
  opacity: 100%;
}

/* /////////////////////works/////////////////// */

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
  overflow: hidden;
}

.prev,
.next {
  font-family: Raj-bold;
  font-size: 5rem;
  color: var(--white-shade);
  background-color: #00000051;
  cursor: pointer;
}

.projects {
  outline: 2px solid black;
  border-radius: 10px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  float: left;
  /* transition: transform 2s;
  transform: translateX(0vw); */
}

.buttonContainer {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.buttonContainer > a {
  height: 1rem;
  width: 1rem;
  background-color: var(--dark-accent);
  border-radius: 10rem;
}
.slider {
  width: 100%;
  height: 100%;

  display: flex;
  scroll-behavior: smooth;
  transition: transform 3s;
  -webkit-transition: transform 2s;
  transform: translateX(0vw);
  margin-top: 10vh;
  margin-bottom: 3vh;
  transform: translateX(-80vw);
}

#span1:target ~ .slider {
  transform: translateX(0vw);
}

#span2:target ~ .slider {
  /* transform: translateX(-80px); */
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
  height: 120vh;
  text-align: center;
}

.emailSection100 {
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
}

/* //////////////more/////////////////// */

.more {
  background: var(--white-shade);
  height: 40vh;
  border-top: 1px solid black;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  mix-blend-mode: difference;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  mix-blend-mode: none;\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 30vw;\r\n  border-bottom-left-radius: 3rem;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\n.backgroundSea {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border: 1px solid var(--white-shade);\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n}\r\n.aboutmeButton:hover {\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 120vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.aboutMeContainer {\r\n  background-image: linear-gradient(\r\n      to bottom,\r\n      rgba(0, 0, 0, 0.864),\r\n      #0000008b,\r\n      rgba(0, 0, 0, 0.851)\r\n    ),\r\n    url(\"./pexels-djordje-petrovic-2102416.jpg\");\r\n  background-position: center -30px;\r\n  background-size: 80vw auto;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  border: 0.5rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  height: fit-content;\r\n  clip-path: polygon(\r\n    10% 0%,\r\n    90% 0%,\r\n    100% 10%,\r\n    100% 90%,\r\n    90% 100%,\r\n    10% 100%,\r\n    0% 90%,\r\n    0% 10%,\r\n    10% 0%\r\n  );\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer::after {\r\n  content: \"I am not the one in the picture :)\";\r\n  font-family: Raj-light;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n  transition: font-size 0.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  opacity: 0%;\r\n  transition: opacity 3s;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.slideContainer {\r\n  height: auto;\r\n  width: 80vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.prev,\r\n.next {\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  color: var(--white-shade);\r\n  background-color: #00000051;\r\n  cursor: pointer;\r\n}\r\n\r\n.projects {\r\n  outline: 2px solid black;\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  float: left;\r\n  /* transition: transform 2s;\r\n  transform: translateX(0vw); */\r\n}\r\n\r\n.buttonContainer {\r\n  display: flex;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.buttonContainer > a {\r\n  height: 1rem;\r\n  width: 1rem;\r\n  background-color: var(--dark-accent);\r\n  border-radius: 10rem;\r\n}\r\n.slider {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  scroll-behavior: smooth;\r\n  transition: transform 3s;\r\n  -webkit-transition: transform 2s;\r\n  transform: translateX(0vw);\r\n  margin-top: 10vh;\r\n  margin-bottom: 3vh;\r\n  transform: translateX(-80vw);\r\n}\r\n\r\n#span1:target ~ .slider {\r\n  transform: translateX(0vw);\r\n}\r\n\r\n#span2:target ~ .slider {\r\n  /* transform: translateX(-80px); */\r\n}\r\n\r\n#span3:target ~ .slider {\r\n  transform: translateX(-160vw);\r\n}\r\n\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 120vh;\r\n  text-align: center;\r\n}\r\n\r\n.emailSection100 {\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  display: inline;\r\n  padding: 1rem;\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  margin: 5rem;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 40vh;\r\n  border-top: 1px solid black;\r\n}\r\n"],"sourceRoot":""}]);
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
  aboutMeBackground.id = "aboutMeBackground";
  body.appendChild(aboutMeBackground);

  const hundredVHcontainer = document.createElement("div");
  hundredVHcontainer.classList.add("hundredVHcontainer");

  aboutMeBackground.appendChild(hundredVHcontainer);

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

  //slideshow

  //projects

  const works = document.createElement("section");
  works.classList.add("works");
  body.appendChild(works);

  const prev = document.createElement("div");
  prev.textContent = "<";
  prev.classList.add("prev");
  works.appendChild(prev);

  const slideContainer = document.createElement("div");
  slideContainer.classList.add("slideContainer");
  works.appendChild(slideContainer);

  const next = document.createElement("div");
  next.textContent = ">";
  next.classList.add("next");
  works.appendChild(next);

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
  proj1.textContent = "1!";
  proj1.src = _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__;
  proj1.classList.add("projects");
  slider.appendChild(proj1);

  const proj2 = new Image();
  proj2.textContent = "2!";
  proj2.src = _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__;
  proj2.classList.add("projects");
  slider.appendChild(proj2);

  const proj3 = new Image();
  proj3.textContent = "3!";
  proj3.src = _weatherAppV2_png__WEBPACK_IMPORTED_MODULE_1__;
  proj3.classList.add("projects");
  slider.appendChild(proj3);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  slideContainer.appendChild(buttonContainer);

  const button1 = document.createElement("a");
  button1.classList.add("button1");
  button1.href = "#span1";
  buttonContainer.appendChild(button1);

  const button2 = document.createElement("a");
  button2.classList.add("button2");
  button2.href = "#span2";
  buttonContainer.appendChild(button2);

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
  form.action = "https://formsubmit.co/parrenoemmanuel756@email.com";
  form.method = "POST";
  emailSection100.appendChild(form);

  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("fieldset");
  form.appendChild(fieldset);

  const legend = document.createElement("legend");
  legend.textContent = "EMAIL ME NOW!";
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
  fieldset.appendChild(submitButton);

  //more about me
  const moreSection = document.createElement("section");
  moreSection.classList.add("more");
  body.appendChild(moreSection);
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
})();
// const name = "fromRight";
// animationTrigger(document.querySelector(".AMTitle"), name);


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

/***/ "./src/pexels-djordje-petrovic-2102416.jpg":
/*!*************************************************!*\
  !*** ./src/pexels-djordje-petrovic-2102416.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c4d91ad0983edbf6c19.jpg";

/***/ }),

/***/ "./src/pexels-sampreety-ali-695794.jpg":
/*!*********************************************!*\
  !*** ./src/pexels-sampreety-ali-695794.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f36df44166bd045538c.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMscUlBQStDO0FBQzNGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLHVKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksZUFBZSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JvRDtBQUNYO0FBQ1k7QUFDOUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNU9xQjtBQUNhO0FBQ2xDO0FBQ0EsK0NBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvUmFqZGhhbmktTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcGV4ZWxzLWRqb3JkamUtcGV0cm92aWMtMjEwMjQxNi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtLW1haW4tY29sb3I6ICMwMDAwMDA7XHJcbiAgLS13aGl0ZS1zaGFkZTogd2hpdGU7XHJcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcclxuICAtLWxpZ2h0LWFjY2VudDogI2JmZmNmOTtcclxuICAtLWRhcmstYWNjZW50OiAjNDc4MTdmO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcclxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxyXG4gICk7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgbWluLWhlaWdodDogMzAwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBzY3JvbGwgYmFyICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICB3aWR0aDogMnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogdG9wIGJhciAqL1xyXG5cclxuLnRvcEJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBoZWlnaHQ6IDZyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxuICB0b3A6IDByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uYW1lQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGhlaWdodDogMC43cmVtO1xyXG4gIHdpZHRoOiAwLjdyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcbi5uYW1lIHtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuLnZTbWFsbFRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5zb2NtZWRDb250YWluZXIge1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub25lO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3JlbTtcclxufVxyXG5cclxuLmZpcnN0UGFydCB7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZFNlYSB7XHJcbiAgd2lkdGg6IDE2MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSwgdHJhbnNwYXJlbnQpO1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gdG9wLFxyXG4gICAgdHJhbnNwYXJlbnQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICB0cmFuc3BhcmVudFxyXG4gICk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG4uZ3JlZXQge1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGxlZnQ6IDEwdnc7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmludHJvIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7ICovXHJcbn1cclxuXHJcbi5hYm91dG1lQnV0dG9uIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2MHZoO1xyXG4gIGxlZnQ6IDEwdnc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmFib3V0bWVCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xyXG59XHJcbi5hYm91dG1lQnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG59XHJcblxyXG4uaW50cm8yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG4gIHJpZ2h0OiAxMHZ3O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG59XHJcblxyXG4vKiBwYWdlIGJyZWFrICovXHJcblxyXG4ucGFnZWJyZWFrIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICBvcGFjaXR5OiA0MCU7XHJcbn1cclxuXHJcbi8qIHNlY29uZCBwYXJ0ICovXHJcblxyXG4uYWJvdXRNZUJhY2tncm91bmQge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xyXG4gICk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAvKiBwYWRkaW5nLXRvcDogOHJlbTsgKi9cclxufVxyXG5cclxuLmh1bmRyZWRWSGNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg2NCksXHJcbiAgICAgICMwMDAwMDA4YixcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg1MSlcclxuICAgICksXHJcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC0zMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODB2dyBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICBib3JkZXI6IDAuNXJlbSBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oXHJcbiAgICAxMCUgMCUsXHJcbiAgICA5MCUgMCUsXHJcbiAgICAxMDAlIDEwJSxcclxuICAgIDEwMCUgOTAlLFxyXG4gICAgOTAlIDEwMCUsXHJcbiAgICAxMCUgMTAwJSxcclxuICAgIDAlIDkwJSxcclxuICAgIDAlIDEwJSxcclxuICAgIDEwJSAwJVxyXG4gICk7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2lkZW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZXhwYW5kIHtcclxuICBhbmltYXRpb24tbmFtZTogd2lkZW47XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG59XHJcblxyXG4uYWJvdXRNZUNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiSSBhbSBub3QgdGhlIG9uZSBpbiB0aGUgcGljdHVyZSA6KVwiO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjVzO1xyXG59XHJcblxyXG4uYWJvdXRNZUNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLkFNVGl0bGUge1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMXMgMTBzO1xyXG59XHJcblxyXG4uQU1UaXRsZTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxufVxyXG5cclxuLmFib3V0TWVQYXJhZyB7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMS41cztcclxufVxyXG5cclxuc3Bhbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4udW5kZXJsaW5lOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4udW5kZXJsaW5lOmhvdmVyOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwdmgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZnJvbVJpZ2h0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIC8qIG9wYWNpdHk6IDEwMCU7ICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHZoKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZyb21MZWZ0IHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbn1cclxuXHJcbi5wb3Age1xyXG59XHJcblxyXG4uYXBwZWFyIHtcclxuICBvcGFjaXR5OiAwJTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xyXG59XHJcblxyXG4ucG9wIHtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy93b3Jrcy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcbi53b3JrcyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpLFxyXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDUxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpOyAqL1xyXG59XHJcblxyXG4uYnV0dG9uQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uQ29udGFpbmVyID4gYSB7XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcclxufVxyXG4uc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwdncpO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODB2dyk7XHJcbn1cclxuXHJcbiNzcGFuMTp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcclxufVxyXG5cclxuI3NwYW4yOnRhcmdldCB+IC5zbGlkZXIge1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7ICovXHJcbn1cclxuXHJcbiNzcGFuMzp0YXJnZXQgfiAuc2xpZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2MHZ3KTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy9lbWFpbC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLmVtYWlsU2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpLFxyXG4gICAgdmFyKC0tbGlnaHQtYWNjZW50KSxcclxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbWFpbFNlY3Rpb24xMDAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uZmllbGRzZXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiA1cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy9tb3JlLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLm1vcmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0U7Ozs7O0dBS0M7RUFDRCw2QkFBNkI7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OEI7RUFDOUIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xcclxcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcXHJcXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xcclxcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxcclxcbiAgKTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgbWluLWhlaWdodDogMzAwdmg7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbCBiYXIgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0b3AgYmFyICovXFxyXFxuXFxyXFxuLnRvcEJhciB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbiAgdG9wOiAwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gIGhlaWdodDogMC43cmVtO1xcclxcbiAgd2lkdGg6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktQm9sZC50dGZcXFwiKTtcXHJcXG59XFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLUxpZ2h0LnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4udlNtYWxsVGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NtZWRDb250YWluZXIge1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IG5vbmU7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5maXJzdFBhcnQge1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kU2VhIHtcXHJcXG4gIHdpZHRoOiAxNjAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXNrOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjQpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gdG9wLFxcclxcbiAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpLFxcclxcbiAgICB0cmFuc3BhcmVudFxcclxcbiAgKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktUmVndWxhci50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLU1lZGl1bS50dGZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWV0IHtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRtZUJ1dHRvbiB7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNjB2aDtcXHJcXG4gIGxlZnQ6IDEwdnc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMCk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uYWJvdXRtZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuODE1KTtcXHJcXG59XFxyXFxuLmFib3V0bWVCdXR0b246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmludHJvMiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDIwdmg7XFxyXFxuICByaWdodDogMTB2dztcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXFxyXFxufVxcclxcblxcclxcbi8qIHBhZ2UgYnJlYWsgKi9cXHJcXG5cXHJcXG4ucGFnZWJyZWFrIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgaGVpZ2h0OiAwLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBtYXJnaW4tbGVmdDogMzB2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMzB2dztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcXHJcXG4gIG9wYWNpdHk6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2Vjb25kIHBhcnQgKi9cXHJcXG5cXHJcXG4uYWJvdXRNZUJhY2tncm91bmQge1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcXHJcXG4gICAgdmFyKC0tZGFyay1hY2NlbnQpIC8qIHZhcigtLWxpZ2h0LWFjY2VudCkgKi9cXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICAvKiBwYWRkaW5nLXRvcDogOHJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmh1bmRyZWRWSGNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0TWVDb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuODY0KSxcXHJcXG4gICAgICAjMDAwMDAwOGIsXFxyXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg1MSlcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKFxcXCIuL3BleGVscy1kam9yZGplLXBldHJvdmljLTIxMDI0MTYuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLTMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwdncgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxyXFxuICBib3JkZXI6IDAuNXJlbSBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMTAlIDAlLFxcclxcbiAgICA5MCUgMCUsXFxyXFxuICAgIDEwMCUgMTAlLFxcclxcbiAgICAxMDAlIDkwJSxcXHJcXG4gICAgOTAlIDEwMCUsXFxyXFxuICAgIDEwJSAxMDAlLFxcclxcbiAgICAwJSA5MCUsXFxyXFxuICAgIDAlIDEwJSxcXHJcXG4gICAgMTAlIDAlXFxyXFxuICApO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHdpZGVuIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC4xKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogd2lkZW47XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiSSBhbSBub3QgdGhlIG9uZSBpbiB0aGUgcGljdHVyZSA6KVxcXCI7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0TWVDb250YWluZXI6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkFNVGl0bGUge1xcclxcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMXMgMTBzO1xcclxcbn1cXHJcXG5cXHJcXG4uQU1UaXRsZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZVBhcmFnIHtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcbi51bmRlcmxpbmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmU6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1yaWdodCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwdmgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZyb21SaWdodCB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxuICAvKiBvcGFjaXR5OiAxMDAlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tbGVmdCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2aCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZnJvbUxlZnQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxyXFxufVxcclxcblxcclxcbi5wb3Age1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyIHtcXHJcXG4gIG9wYWNpdHk6IDAlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcCB7XFxyXFxuICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy93b3Jrcy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG5cXHJcXG4ud29ya3Mge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLWRhcmstYWNjZW50KSxcXHJcXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpXFxyXFxuICApO1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wcmV2LFxcclxcbi5uZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7ICovXFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkNvbnRhaW5lciA+IGEge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG59XFxyXFxuLnNsaWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MHZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwYW4xOnRhcmdldCB+IC5zbGlkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDB2dyk7XFxyXFxufVxcclxcblxcclxcbiNzcGFuMjp0YXJnZXQgfiAuc2xpZGVyIHtcXHJcXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7ICovXFxyXFxufVxcclxcblxcclxcbiNzcGFuMzp0YXJnZXQgfiAuc2xpZGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTYwdncpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vLy8vL2VtYWlsLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcbi5lbWFpbFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB0byBib3R0b20sXFxyXFxuICAgIHZhcigtLW1haW4tYWNjZW50KSxcXHJcXG4gICAgdmFyKC0tbGlnaHQtYWNjZW50KSxcXHJcXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXFxyXFxuICApO1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVtYWlsU2VjdGlvbjEwMCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkc2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy9tb3JlLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xcclxcblxcclxcbi5tb3JlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGhlaWdodDogNDB2aDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2VhIGZyb20gXCIuL3BleGVscy1zYW1wcmVldHktYWxpLTY5NTc5NC5qcGdcIjtcclxuaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlckFwcFYyLnBuZ1wiO1xyXG5pbXBvcnQgd2VhdGhlck1vYmlsZSBmcm9tIFwiLi93ZWF0aGVyQXBwVjJtb2JpbGUucG5nXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQoKSB7XHJcbiAgLy9ib2R5XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAvL3RvcCBiYXJcclxuICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICB0b3BCYXIuY2xhc3NMaXN0LmFkZChcInRvcEJhclwiKTtcclxuXHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lclwiKTtcclxuICB0b3BCYXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cclxuICBjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBteU5hbWUudGV4dENvbnRlbnQgPSBcIkVtbWFudWVsIFBhcnJlw7FvXCI7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChteU5hbWUpO1xyXG5cclxuICBjb25zdCBzb2NtZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNvY21lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29jbWVkQ29udGFpbmVyXCIpO1xyXG4gIHRvcEJhci5hcHBlbmRDaGlsZChzb2NtZWRDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBteU5hbWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWVEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ2U21hbGxUZXh0XCIpO1xyXG4gIG15TmFtZS5hcHBlbmRDaGlsZChteU5hbWVEZXRhaWxzKTtcclxuICBteU5hbWVEZXRhaWxzLnRleHRDb250ZW50ID0gXCJCU0lUIFNUVURFTlQgQVQgQkFUQU5HQVMgU1RBVEUgVU5JVkVSU0lUWVwiO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XHJcblxyXG4gIC8vZmlyc3QgcHJvbXB0XHJcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZmlyc3RQYXJ0LmNsYXNzTGlzdC5hZGQoXCJmaXJzdFBhcnRcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChmaXJzdFBhcnQpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kU2VhID0gbmV3IEltYWdlKCk7XHJcbiAgYmFja2dyb3VuZFNlYS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFNlYVwiKTtcclxuICBiYWNrZ3JvdW5kU2VhLnNyYyA9IFNlYTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFNlYSk7XHJcbiAgYmFja2dyb3VuZFNlYS5hbHQgPSBcImJhY2tncm91bmRcIjtcclxuXHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJIRUxMTyxcIjtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRcIik7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChncmVldGluZyk7XHJcblxyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIkkgYW0gRU1NQU5VRUxcIjtcclxuICBncmVldGluZy5hcHBlbmRDaGlsZChpbnRybyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbi5ocmVmID0gXCIjYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dG1lQnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGludHJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJpbnRybzJcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIGludHJvMi50ZXh0Q29udGVudCA9IFwiQSBzZWxmLXRhdWdodCBwcm9ncmFtbWVyXCI7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGludHJvMik7XHJcblxyXG4gIC8vcGFnZSBicmVha1xyXG5cclxuICBjb25zdCBwYWdlYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VicmVhay5jbGFzc0xpc3QuYWRkKFwicGFnZWJyZWFrXCIpO1xyXG5cclxuICAvL2Fib3V0IG1lXHJcbiAgY29uc3QgYWJvdXRNZUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQmFja2dyb3VuZFwiKTtcclxuICBhYm91dE1lQmFja2dyb3VuZC5pZCA9IFwiYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBib2R5LmFwcGVuZENoaWxkKGFib3V0TWVCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgaHVuZHJlZFZIY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBodW5kcmVkVkhjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImh1bmRyZWRWSGNvbnRhaW5lclwiKTtcclxuXHJcbiAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaHVuZHJlZFZIY29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUNvbnRhaW5lclwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBBTVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJBTVRpdGxlXCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBBTVRpdGxlLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoQU1UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVQYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZVBhcmFnXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5pbm5lckhUTUwgPVxyXG4gICAgXCJJIGFtIGEgc2VsZi10YXVnaHQgPHNwYW4+d2ViIGRldmVsb3Blcjwvc3Bhbj4uIEN1cnJlbnRseSwgSSBhbSBzdHVkeWluZyA8c3Bhbj5CUyBpbiBpbmZvcm1hdGlvbiB0ZWNobm9sb2d5IGF0IHRoZSBCYXRhbmdhcyBTdGF0ZSBVbml2ZXJzaXR5PC9zcGFuPi4gSSBoYXZlIGJlZW4gaG9uaW5nIG15IHNraWxscyBzaW5jZSBsYXRlIDIwMjIgKHRocm91Z2ggdGhlIDxzcGFuPk9kaW4gUHJvamVjdDwvc3Bhbj4gYW5kIG90aGVyIG9ubGluZSByZXNvdXJjZXMpLiA8c3Bhbj5JIGFtIGNvbmZpZGVudCB3aXRoIG15IGVudHJ5LWxldmVsIGZyb250LWVuZCBkZXZlbG9wbWVudCBza2lsbHM8L3NwYW4+LiBNeSBwcmltYXJ5IGxhbmd1YWdlcyBhcmUgPHNwYW4+SFRNTCwgQ1NTLCBhbmQgSmF2YXNjcmlwdDwvc3Bhbj4gLSBidXQgSSBjYW4gYWxzbyB1c2UgUHl0aG9uLCBXZWJwYWNrLCBDTEksIGFuZCBDKysgdG8gYSBjZXJ0YWluIGV4dGVudC5cIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQYXJhZyk7XHJcblxyXG4gIC8vc2xpZGVzaG93XHJcblxyXG4gIC8vcHJvamVjdHNcclxuXHJcbiAgY29uc3Qgd29ya3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwid29ya3NcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrcyk7XHJcblxyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByZXYudGV4dENvbnRlbnQgPSBcIjxcIjtcclxuICBwcmV2LmNsYXNzTGlzdC5hZGQoXCJwcmV2XCIpO1xyXG4gIHdvcmtzLmFwcGVuZENoaWxkKHByZXYpO1xyXG5cclxuICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlQ29udGFpbmVyXCIpO1xyXG4gIHdvcmtzLmFwcGVuZENoaWxkKHNsaWRlQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV4dC50ZXh0Q29udGVudCA9IFwiPlwiO1xyXG4gIG5leHQuY2xhc3NMaXN0LmFkZChcIm5leHRcIik7XHJcbiAgd29ya3MuYXBwZW5kQ2hpbGQobmV4dCk7XHJcblxyXG4gIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgc3BhbjEuaWQgPSBcInNwYW4xXCI7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbjEpO1xyXG5cclxuICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHNwYW4yLmlkID0gXCJzcGFuMlwiO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4yKTtcclxuXHJcbiAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBzcGFuMi5pZCA9IFwic3BhbjNcIjtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuMyk7XHJcblxyXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcclxuXHJcbiAgY29uc3QgcHJvajEgPSBuZXcgSW1hZ2UoKTtcclxuICBwcm9qMS50ZXh0Q29udGVudCA9IFwiMSFcIjtcclxuICBwcm9qMS5zcmMgPSB3ZWF0aGVyO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajEpO1xyXG5cclxuICBjb25zdCBwcm9qMiA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2oyLnRleHRDb250ZW50ID0gXCIyIVwiO1xyXG4gIHByb2oyLnNyYyA9IHdlYXRoZXI7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMik7XHJcblxyXG4gIGNvbnN0IHByb2ozID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajMudGV4dENvbnRlbnQgPSBcIjMhXCI7XHJcbiAgcHJvajMuc3JjID0gd2VhdGhlcjtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2ozKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbkNvbnRhaW5lclwiKTtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uMS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uMVwiKTtcclxuICBidXR0b24xLmhyZWYgPSBcIiNzcGFuMVwiO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24xKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbjJcIik7XHJcbiAgYnV0dG9uMi5ocmVmID0gXCIjc3BhbjJcIjtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24zLmNsYXNzTGlzdC5hZGQoXCJidXR0b24zXCIpO1xyXG4gIGJ1dHRvbjMuaHJlZiA9IFwiI3NwYW4zXCI7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xyXG5cclxuICAvL2NvbnRhY3QgbWUhIGVtYWlsIHBhZ2VcclxuICBjb25zdCBlbWFpbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvblwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGVtYWlsU2VjdGlvbjEwMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGVtYWlsU2VjdGlvbjEwMC5jbGFzc0xpc3QuYWRkKFwiZW1haWxTZWN0aW9uMTAwXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24xMDApO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5hY3Rpb24gPSBcImh0dHBzOi8vZm9ybXN1Ym1pdC5jby9wYXJyZW5vZW1tYW51ZWw3NTZAZW1haWwuY29tXCI7XHJcbiAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcclxuICBlbWFpbFNlY3Rpb24xMDAuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIkVNQUlMIE1FIE5PVyFcIjtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xyXG5cclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBlbWFpbC5wbGFjZWhvbGRlciA9IFwiRU1BSUxcIjtcclxuICBlbWFpbC50eXBlID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLm5hbWUgPSBcImVtYWlsXCI7XHJcbiAgZW1haWwucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGVtYWlsKTtcclxuXHJcbiAgY29uc3Qgc2VuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNlbmRlci5wbGFjZWhvbGRlciA9IFwiTkFNRVwiO1xyXG4gIHNlbmRlci50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc2VuZGVyLm5hbWUgPSBcIm5hbWVcIjtcclxuICBzZW5kZXIucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHNlbmRlcik7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiTUVTU0FHRVwiO1xyXG4gIG1lc3NhZ2UubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gIG1lc3NhZ2UuY29scyA9IDMwO1xyXG4gIG1lc3NhZ2Uucm93cyA9IDEwO1xyXG4gIG1lc3NhZ2Uuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgbWVzc2FnZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vbW9yZSBhYm91dCBtZVxyXG4gIGNvbnN0IG1vcmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbW9yZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vcmVcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChtb3JlU2VjdGlvbik7XHJcbn1cclxuLy9cclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcIi4vZG9tLmpzXCI7XHJcblxyXG5sYXlvdXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvblRyaWdnZXIoc2VjdGlvbiwgYW5pbWF0aW9uTmFtZSwgZXhwYW5kID0gbnVsbCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByb290OiBudWxsLFxyXG4gICAgdGhyZXNob2xkOiAwLjQsXHJcbiAgICByb290TWFyZ2luOiBcIjI1cHhcIixcclxuICB9O1xyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFib3V0TWVDb250YWluZXJcIikgJiZcclxuICAgICAgICBlbnRyeS5pc0ludGVyc2VjdGluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChleHBhbmQpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJhYm91dE1lQ29udGFpbmVyXCIpICYmXHJcbiAgICAgICAgIWVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGV4cGFuZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIG9wdGlvbnMpO1xyXG5cclxuICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG59XHJcblxyXG4oKCkgPT4ge1xyXG4gIGNvbnN0IHJpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmlnaHRcIik7XHJcbiAgcmlnaHRzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBcImZyb21SaWdodFwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbGVmdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZnRcIik7XHJcbiAgbGVmdHMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwiZnJvbUxlZnRcIik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFwcGVhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFwcGVhclwiKTtcclxuICBhcHBlYXJzLmZvckVhY2goKGl0ZW1zKSA9PiB7XHJcbiAgICBhbmltYXRpb25UcmlnZ2VyKGl0ZW1zLCBcInBvcFwiLCBcImV4cGFuZFwiKTtcclxuICB9KTtcclxufSkoKTtcclxuLy8gY29uc3QgbmFtZSA9IFwiZnJvbVJpZ2h0XCI7XHJcbi8vIGFuaW1hdGlvblRyaWdnZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BTVRpdGxlXCIpLCBuYW1lKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9