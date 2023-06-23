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

img {
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
  outline: 1px solid black;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n  --main-color: #000000;\r\n  --white-shade: white;\r\n  --main-accent: #00c9c8;\r\n  --light-accent: #bffcf9;\r\n  --dark-accent: #47817f;\r\n  cursor: default;\r\n  user-select: none;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--main-color),\r\n    var(--white-shade)\r\n  );\r\n  /* background-color: white; */\r\n  min-height: 300vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* scroll bar */\r\n\r\n::-webkit-scrollbar-track {\r\n  width: 2vw;\r\n  background-color: var(--light-accent);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: var(--main-color);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* top bar */\r\n\r\n.topBar {\r\n  position: sticky;\r\n  height: 6rem;\r\n  display: flex;\r\n  mix-blend-mode: difference;\r\n  top: 0rem;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nameContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.circle {\r\n  height: 0.7rem;\r\n  width: 0.7rem;\r\n  background-color: var(--light-accent);\r\n  border-radius: 100rem;\r\n}\r\n@font-face {\r\n  font-family: Raj-bold;\r\n  src: url(\"./fonts/Rajdhani-Bold.ttf\");\r\n}\r\n.name {\r\n  font-family: Raj-bold;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n  /* mix-blend-mode: difference; */\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-light;\r\n  src: url(\"./fonts/Rajdhani-Light.ttf\");\r\n}\r\n\r\n.vSmallText {\r\n  font-family: Raj-light;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.socmedContainer {\r\n  mix-blend-mode: none;\r\n  /* background-color: var(--main-accent); */\r\n  height: 100%;\r\n  width: 30vw;\r\n  border-bottom-left-radius: 3rem;\r\n}\r\n\r\n.firstPart {\r\n  height: 120vh;\r\n  display: flex;\r\n}\r\n\r\nimg {\r\n  width: 1600px;\r\n  height: auto;\r\n  mask: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.4), transparent);\r\n  -webkit-mask-image: linear-gradient(\r\n    to top,\r\n    transparent,\r\n    rgba(0, 0, 0, 0.4),\r\n    transparent\r\n  );\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-regular;\r\n  src: url(\"./fonts/Rajdhani-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Raj-medium;\r\n  src: url(\"./fonts/Rajdhani-Medium.ttf\");\r\n}\r\n\r\n.greet {\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  position: absolute;\r\n  top: 30vh;\r\n  left: 10vw;\r\n  font-family: Raj-medium;\r\n  font-size: 6rem;\r\n  color: var(--white-shade);\r\n  letter-spacing: 1rem;\r\n  height: fit-content;\r\n}\r\n\r\n.intro {\r\n  letter-spacing: 0.7rem;\r\n  cursor: default;\r\n  font-family: Raj-regular;\r\n  font-size: 2rem;\r\n  /* border-bottom: 3px solid var(--dark-accent); */\r\n}\r\n\r\n.aboutmeButton {\r\n  z-index: 0;\r\n  cursor: pointer;\r\n  font-family: Raj-light;\r\n  font-size: 1rem;\r\n  /* animation-name: slide-from-left;\r\n  animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  position: absolute;\r\n  top: 60vh;\r\n  left: 10vw;\r\n  border: 1px solid var(--white-shade);\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n  background-color: rgba(36, 36, 36, 0);\r\n  backdrop-filter: blur(2rem);\r\n  width: fit-content;\r\n  height: fit-content;\r\n  text-decoration: none;\r\n}\r\n.aboutmeButton:hover {\r\n  background-color: rgba(36, 36, 36, 0.815);\r\n}\r\n.aboutmeButton:active {\r\n  background-color: var(--white-shade);\r\n}\r\n\r\n.intro2 {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  right: 10vw;\r\n  color: var(--white-shade);\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  /* animation-name: slide-from-right;\r\n  animation-duration: 2s; */\r\n}\r\n\r\n/* page break */\r\n\r\n.pagebreak {\r\n  z-index: 10;\r\n  height: 0.3rem;\r\n  background-color: var(--white-shade);\r\n  margin-left: 30vw;\r\n  margin-right: 30vw;\r\n  border-radius: 100rem;\r\n  opacity: 40%;\r\n}\r\n\r\n/* second part */\r\n\r\n.aboutMeBackground {\r\n  height: 120vh;\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-color),\r\n    var(--dark-accent) /* var(--light-accent) */\r\n  );\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;\r\n  scroll-behavior: smooth;\r\n  /* padding-top: 8rem; */\r\n}\r\n\r\n.hundredVHcontainer {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.aboutMeContainer {\r\n  background-image: linear-gradient(\r\n      to bottom,\r\n      rgba(0, 0, 0, 0.864),\r\n      #0000008b,\r\n      rgba(0, 0, 0, 0.851)\r\n    ),\r\n    url(\"./pexels-djordje-petrovic-2102416.jpg\");\r\n  background-position: center -30px;\r\n  background-size: 80vw auto;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  border: 0.5rem solid;\r\n  border-color: var(--main-color);\r\n  padding: 2rem;\r\n  height: fit-content;\r\n  clip-path: polygon(\r\n    10% 0%,\r\n    90% 0%,\r\n    100% 10%,\r\n    100% 90%,\r\n    90% 100%,\r\n    10% 100%,\r\n    0% 90%,\r\n    0% 10%,\r\n    10% 0%\r\n  );\r\n  width: fit-content;\r\n  height: fit-content;\r\n  width: 80vw;\r\n  outline: 1px solid black;\r\n}\r\n\r\n@keyframes widen {\r\n  0% {\r\n    transform: scaleX(0.1);\r\n  }\r\n  100% {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n.expand {\r\n  animation-name: widen;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n.aboutMeContainer::after {\r\n  content: \"I am not the one in the picture :)\";\r\n  font-family: Raj-light;\r\n  color: white;\r\n  font-size: 0.8rem;\r\n  transition: font-size 0.5s;\r\n}\r\n\r\n.aboutMeContainer:hover::after {\r\n  font-size: 1rem;\r\n}\r\n\r\n.AMTitle {\r\n  /* animation-name: slide-from-right;\r\n    animation-duration: 2s; */\r\n  color: var(--white-shade);\r\n  font-family: Raj-bold;\r\n  font-size: 5rem;\r\n  transition: color 1s 10s;\r\n}\r\n\r\n.AMTitle:hover {\r\n  color: var(--main-accent);\r\n}\r\n\r\n.aboutMeParag {\r\n  width: 40vw;\r\n  font-family: Raj-light;\r\n  font-size: 1.5rem;\r\n  color: var(--white-shade);\r\n}\r\n\r\nspan {\r\n  font-family: Raj-regular;\r\n  transition: color 1.5s;\r\n}\r\n\r\nspan:hover {\r\n  color: var(--main-accent);\r\n  font-weight: 900;\r\n}\r\n\r\n/* ////////////////////extra/////////////////////////////// */\r\n.underline::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-accent);\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.underline:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n@keyframes slide-from-right {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(-10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromRight {\r\n  animation-name: slide-from-right;\r\n  animation-duration: 3s;\r\n  /* opacity: 100%; */\r\n}\r\n\r\n@keyframes slide-from-left {\r\n  0% {\r\n    opacity: 0%;\r\n    transform: translateX(10vh);\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.fromLeft {\r\n  animation-name: slide-from-left;\r\n  animation-duration: 3s;\r\n}\r\n\r\n.pop {\r\n}\r\n\r\n.appear {\r\n  opacity: 0%;\r\n  transition: opacity 3s;\r\n}\r\n\r\n.pop {\r\n  opacity: 100%;\r\n}\r\n\r\n/* /////////////////////works/////////////////// */\r\n\r\n.works {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--dark-accent),\r\n    var(--main-accent)\r\n  );\r\n  height: 120vh;\r\n}\r\n/* /////////////////email////////////////////// */\r\n.emailSection {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    var(--main-accent),\r\n    var(--light-accent),\r\n    var(--white-shade)\r\n  );\r\n  height: 120vh;\r\n  text-align: center;\r\n}\r\n\r\n.emailSection100 {\r\n  text-align: center;\r\n  /* background-color: black; */\r\n  height: 100vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  display: inline;\r\n  padding: 1rem;\r\n}\r\n\r\n.fieldset {\r\n  display: flex;\r\n  margin: 5rem;\r\n  padding: 1rem;\r\n  flex-direction: column;\r\n}\r\n\r\n/* //////////////more/////////////////// */\r\n\r\n.more {\r\n  background: var(--white-shade);\r\n  height: 40vh;\r\n  border-top: 1px solid black;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _pexels_pixabay_50711_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pexels-pixabay-50711.jpg */ "./src/pexels-pixabay-50711.jpg");


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

  //projects

  const works = document.createElement("section");
  works.classList.add("works");
  body.appendChild(works);

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

/***/ "./src/pexels-pixabay-50711.jpg":
/*!**************************************!*\
  !*** ./src/pexels-pixabay-50711.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d46a1e5918c94bc41273.jpg";

/***/ }),

/***/ "./src/pexels-sampreety-ali-695794.jpg":
/*!*********************************************!*\
  !*** ./src/pexels-sampreety-ali-695794.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f36df44166bd045538c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlJQUE2QztBQUN6Riw0Q0FBNEMscUlBQStDO0FBQzNGLDRDQUE0QyxtSUFBOEM7QUFDMUYsNENBQTRDLHVKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxPQUFPLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsYUFBYSxh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwS3FCO0FBQ2E7QUFDbEM7QUFDQSwrQ0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tdjEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXYxLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhamRoYW5pLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JhamRoYW5pLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SYWpkaGFuaS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9wZXhlbHMtZGpvcmRqZS1wZXRyb3ZpYy0yMTAyNDE2LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcclxuICAtLXdoaXRlLXNoYWRlOiB3aGl0ZTtcclxuICAtLW1haW4tYWNjZW50OiAjMDBjOWM4O1xyXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xyXG4gIC0tZGFyay1hY2NlbnQ6ICM0NzgxN2Y7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcclxuICAgIHZhcigtLW1haW4tY29sb3IpLFxyXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXHJcbiAgKTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cclxuICBtaW4taGVpZ2h0OiAzMDB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIHNjcm9sbCBiYXIgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIHdpZHRoOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiB0b3AgYmFyICovXHJcblxyXG4udG9wQmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG4gIHRvcDogMHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hbWVDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgaGVpZ2h0OiAwLjdyZW07XHJcbiAgd2lkdGg6IDAuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuLm5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG4udlNtYWxsVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG5cclxuLnNvY21lZENvbnRhaW5lciB7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vbmU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpOyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMzB2dztcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcmVtO1xyXG59XHJcblxyXG4uZmlyc3RQYXJ0IHtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDE2MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSwgdHJhbnNwYXJlbnQpO1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gdG9wLFxyXG4gICAgdHJhbnNwYXJlbnQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgICB0cmFuc3BhcmVudFxyXG4gICk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbWVkaXVtO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG4uZ3JlZXQge1xyXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGxlZnQ6IDEwdnc7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmludHJvIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBmb250LWZhbWlseTogUmFqLXJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIC8qIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7ICovXHJcbn1cclxuXHJcbi5hYm91dG1lQnV0dG9uIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2MHZoO1xyXG4gIGxlZnQ6IDEwdnc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmFib3V0bWVCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC44MTUpO1xyXG59XHJcbi5hYm91dG1lQnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG59XHJcblxyXG4uaW50cm8yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG4gIHJpZ2h0OiAxMHZ3O1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xyXG59XHJcblxyXG4vKiBwYWdlIGJyZWFrICovXHJcblxyXG4ucGFnZWJyZWFrIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBoZWlnaHQ6IDAuM3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICBvcGFjaXR5OiA0MCU7XHJcbn1cclxuXHJcbi8qIHNlY29uZCBwYXJ0ICovXHJcblxyXG4uYWJvdXRNZUJhY2tncm91bmQge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXHJcbiAgICB2YXIoLS1kYXJrLWFjY2VudCkgLyogdmFyKC0tbGlnaHQtYWNjZW50KSAqL1xyXG4gICk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAvKiBwYWRkaW5nLXRvcDogOHJlbTsgKi9cclxufVxyXG5cclxuLmh1bmRyZWRWSGNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dE1lQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg2NCksXHJcbiAgICAgICMwMDAwMDA4YixcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg1MSlcclxuICAgICksXHJcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC0zMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODB2dyBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICBib3JkZXI6IDAuNXJlbSBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oXHJcbiAgICAxMCUgMCUsXHJcbiAgICA5MCUgMCUsXHJcbiAgICAxMDAlIDEwJSxcclxuICAgIDEwMCUgOTAlLFxyXG4gICAgOTAlIDEwMCUsXHJcbiAgICAxMCUgMTAwJSxcclxuICAgIDAlIDkwJSxcclxuICAgIDAlIDEwJSxcclxuICAgIDEwJSAwJVxyXG4gICk7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdpZGVuIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuLmFib3V0TWVDb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIkkgYW0gbm90IHRoZSBvbmUgaW4gdGhlIHBpY3R1cmUgOilcIjtcclxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cztcclxufVxyXG5cclxuLmFib3V0TWVDb250YWluZXI6aG92ZXI6OmFmdGVyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5BTVRpdGxlIHtcclxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1yaWdodDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7ICovXHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxuICBmb250LWZhbWlseTogUmFqLWJvbGQ7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDFzIDEwcztcclxufVxyXG5cclxuLkFNVGl0bGU6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbn1cclxuXHJcbi5hYm91dE1lUGFyYWcge1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDEuNXM7XHJcbn1cclxuXHJcbnNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy9leHRyYS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLnVuZGVybGluZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnVuZGVybGluZTpob3Zlcjo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHZoKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmZyb21SaWdodCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAvKiBvcGFjaXR5OiAxMDAlOyAqL1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTB2aCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5mcm9tTGVmdCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tbGVmdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcblxyXG4ucG9wIHtcclxufVxyXG5cclxuLmFwcGVhciB7XHJcbiAgb3BhY2l0eTogMCU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcztcclxufVxyXG5cclxuLnBvcCB7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vd29ya3MvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ud29ya3Mge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHZhcigtLWRhcmstYWNjZW50KSxcclxuICAgIHZhcigtLW1haW4tYWNjZW50KVxyXG4gICk7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxufVxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vL2VtYWlsLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4uZW1haWxTZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICB2YXIoLS1tYWluLWFjY2VudCksXHJcbiAgICB2YXIoLS1saWdodC1hY2NlbnQpLFxyXG4gICAgdmFyKC0td2hpdGUtc2hhZGUpXHJcbiAgKTtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtYWlsU2VjdGlvbjEwMCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5maWVsZHNldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4ubW9yZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRTs7Ozs7R0FLQztFQUNELDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxVQUFV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REFBa0Q7O0FBRWxEO0VBQ0U7Ozs7R0FJQztFQUNELGFBQWE7QUFDZjtBQUNBLGlEQUFpRDtBQUNqRDtFQUNFOzs7OztHQUtDO0VBQ0QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLDBDQUEwQzs7QUFFMUM7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIC0td2hpdGUtc2hhZGU6IHdoaXRlO1xcclxcbiAgLS1tYWluLWFjY2VudDogIzAwYzljODtcXHJcXG4gIC0tbGlnaHQtYWNjZW50OiAjYmZmY2Y5O1xcclxcbiAgLS1kYXJrLWFjY2VudDogIzQ3ODE3ZjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLXdoaXRlLXNoYWRlKVxcclxcbiAgKTtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgbWluLWhlaWdodDogMzAwdmg7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbCBiYXIgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIHdpZHRoOiAydnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0b3AgYmFyICovXFxyXFxuXFxyXFxuLnRvcEJhciB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xcclxcbiAgdG9wOiAwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lyY2xlIHtcXHJcXG4gIGhlaWdodDogMC43cmVtO1xcclxcbiAgd2lkdGg6IDAuN3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUmFqZGhhbmktQm9sZC50dGZcXFwiKTtcXHJcXG59XFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1ib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLUxpZ2h0LnR0ZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4udlNtYWxsVGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUmFqLWxpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NtZWRDb250YWluZXIge1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IG5vbmU7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFjY2VudCk7ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5maXJzdFBhcnQge1xcclxcbiAgaGVpZ2h0OiAxMjB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMTYwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFzazogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC40KSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIHRvcCxcXHJcXG4gICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC40KSxcXHJcXG4gICAgdHJhbnNwYXJlbnRcXHJcXG4gICk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotcmVndWxhcjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JhamRoYW5pLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1tZWRpdW07XFxyXFxuICBzcmM6IHVybChcXFwiLi9mb250cy9SYWpkaGFuaS1NZWRpdW0udHRmXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5ncmVldCB7XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzB2aDtcXHJcXG4gIGxlZnQ6IDEwdnc7XFxyXFxuICBmb250LWZhbWlseTogUmFqLW1lZGl1bTtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbnRybyB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgLyogYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0bWVCdXR0b24ge1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICAvKiBhbmltYXRpb24tbmFtZTogc2xpZGUtZnJvbS1sZWZ0O1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsgKi9cXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDYwdmg7XFxyXFxuICBsZWZ0OiAxMHZ3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDApO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmFib3V0bWVCdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjgxNSk7XFxyXFxufVxcclxcbi5hYm91dG1lQnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxufVxcclxcblxcclxcbi5pbnRybzIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyMHZoO1xcclxcbiAgcmlnaHQ6IDEwdnc7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgLyogYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwYWdlIGJyZWFrICovXFxyXFxuXFxyXFxuLnBhZ2VicmVhayB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGhlaWdodDogMC4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwdnc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDByZW07XFxyXFxuICBvcGFjaXR5OiA0MCU7XFxyXFxufVxcclxcblxcclxcbi8qIHNlY29uZCBwYXJ0ICovXFxyXFxuXFxyXFxuLmFib3V0TWVCYWNrZ3JvdW5kIHtcXHJcXG4gIGhlaWdodDogMTIwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1jb2xvciksXFxyXFxuICAgIHZhcigtLWRhcmstYWNjZW50KSAvKiB2YXIoLS1saWdodC1hY2NlbnQpICovXFxyXFxuICApO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgLyogcGFkZGluZy10b3A6IDhyZW07ICovXFxyXFxufVxcclxcblxcclxcbi5odW5kcmVkVkhjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICB0byBib3R0b20sXFxyXFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjg2NCksXFxyXFxuICAgICAgIzAwMDAwMDhiLFxcclxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44NTEpXFxyXFxuICAgICksXFxyXFxuICAgIHVybChcXFwiLi9wZXhlbHMtZGpvcmRqZS1wZXRyb3ZpYy0yMTAyNDE2LmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC0zMHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA4MHZ3IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgYm9yZGVyOiAwLjVyZW0gc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDEwJSAwJSxcXHJcXG4gICAgOTAlIDAlLFxcclxcbiAgICAxMDAlIDEwJSxcXHJcXG4gICAgMTAwJSA5MCUsXFxyXFxuICAgIDkwJSAxMDAlLFxcclxcbiAgICAxMCUgMTAwJSxcXHJcXG4gICAgMCUgOTAlLFxcclxcbiAgICAwJSAxMCUsXFxyXFxuICAgIDEwJSAwJVxcclxcbiAgKTtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB3aWRlbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuMSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHdpZGVuO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZUNvbnRhaW5lcjo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIkkgYW0gbm90IHRoZSBvbmUgaW4gdGhlIHBpY3R1cmUgOilcXFwiO1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1saWdodDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5hYm91dE1lQ29udGFpbmVyOmhvdmVyOjphZnRlciB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5BTVRpdGxlIHtcXHJcXG4gIC8qIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLXJpZ2h0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAqL1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLXNoYWRlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDFzIDEwcztcXHJcXG59XFxyXFxuXFxyXFxuLkFNVGl0bGU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0TWVQYXJhZyB7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBSYWotbGlnaHQ7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1zaGFkZSk7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IFJhai1yZWd1bGFyO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMS41cztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1hY2NlbnQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy9leHRyYS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cXHJcXG4udW5kZXJsaW5lOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udW5kZXJsaW5lOmhvdmVyOjphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tcmlnaHQge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHZoKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mcm9tUmlnaHQge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWZyb20tcmlnaHQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcclxcbiAgLyogb3BhY2l0eTogMTAwJTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLWxlZnQge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwdmgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZyb21MZWZ0IHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1mcm9tLWxlZnQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wIHtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhciB7XFxyXFxuICBvcGFjaXR5OiAwJTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgM3M7XFxyXFxufVxcclxcblxcclxcbi5wb3Age1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vd29ya3MvLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuLndvcmtzIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gYm90dG9tLFxcclxcbiAgICB2YXIoLS1kYXJrLWFjY2VudCksXFxyXFxuICAgIHZhcigtLW1haW4tYWNjZW50KVxcclxcbiAgKTtcXHJcXG4gIGhlaWdodDogMTIwdmg7XFxyXFxufVxcclxcbi8qIC8vLy8vLy8vLy8vLy8vLy8vZW1haWwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuLmVtYWlsU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHRvIGJvdHRvbSxcXHJcXG4gICAgdmFyKC0tbWFpbi1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS1saWdodC1hY2NlbnQpLFxcclxcbiAgICB2YXIoLS13aGl0ZS1zaGFkZSlcXHJcXG4gICk7XFxyXFxuICBoZWlnaHQ6IDEyMHZoO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWxTZWN0aW9uMTAwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRzZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvLy8vLy8vLy8vLy8vL21vcmUvLy8vLy8vLy8vLy8vLy8vLy8vICovXFxyXFxuXFxyXFxuLm1vcmUge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtc2hhZGUpO1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTZWEgZnJvbSBcIi4vcGV4ZWxzLXNhbXByZWV0eS1hbGktNjk1Nzk0LmpwZ1wiO1xyXG5pbXBvcnQgQ2lyY3VpdCBmcm9tIFwiLi9wZXhlbHMtcGl4YWJheS01MDcxMS5qcGdcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGxheW91dCgpIHtcclxuICAvL2JvZHlcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gIC8vdG9wIGJhclxyXG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHRvcEJhci5jbGFzc0xpc3QuYWRkKFwidG9wQmFyXCIpO1xyXG5cclxuICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIHRvcEJhci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZSk7XHJcblxyXG4gIGNvbnN0IG15TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbXlOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIG15TmFtZS50ZXh0Q29udGVudCA9IFwiRW1tYW51ZWwgUGFycmXDsW9cIjtcclxuICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG15TmFtZSk7XHJcblxyXG4gIGNvbnN0IHNvY21lZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc29jbWVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzb2NtZWRDb250YWluZXJcIik7XHJcbiAgdG9wQmFyLmFwcGVuZENoaWxkKHNvY21lZENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG15TmFtZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZURldGFpbHMuY2xhc3NMaXN0LmFkZChcInZTbWFsbFRleHRcIik7XHJcbiAgbXlOYW1lLmFwcGVuZENoaWxkKG15TmFtZURldGFpbHMpO1xyXG4gIG15TmFtZURldGFpbHMudGV4dENvbnRlbnQgPSBcIkJTSVQgU1RVREVOVCBBVCBCQVRBTkdBUyBTVEFURSBVTklWRVJTSVRZXCI7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wQmFyKTtcclxuXHJcbiAgLy9maXJzdCBwcm9tcHRcclxuICBjb25zdCBmaXJzdFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBmaXJzdFBhcnQuY2xhc3NMaXN0LmFkZChcImZpcnN0UGFydFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGZpcnN0UGFydCk7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRTZWEgPSBuZXcgSW1hZ2UoKTtcclxuICBiYWNrZ3JvdW5kU2VhLnNyYyA9IFNlYTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFNlYSk7XHJcbiAgYmFja2dyb3VuZFNlYS5hbHQgPSBcImJhY2tncm91bmRcIjtcclxuXHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJIRUxMTyxcIjtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRcIik7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChncmVldGluZyk7XHJcblxyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIkkgYW0gRU1NQU5VRUxcIjtcclxuICBncmVldGluZy5hcHBlbmRDaGlsZChpbnRybyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbi5ocmVmID0gXCIjYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dG1lQnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGludHJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJpbnRybzJcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIGludHJvMi50ZXh0Q29udGVudCA9IFwiQSBzZWxmLXRhdWdodCBwcm9ncmFtbWVyXCI7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGludHJvMik7XHJcblxyXG4gIC8vcGFnZSBicmVha1xyXG5cclxuICBjb25zdCBwYWdlYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VicmVhay5jbGFzc0xpc3QuYWRkKFwicGFnZWJyZWFrXCIpO1xyXG5cclxuICAvL2Fib3V0IG1lXHJcbiAgY29uc3QgYWJvdXRNZUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQmFja2dyb3VuZFwiKTtcclxuICBhYm91dE1lQmFja2dyb3VuZC5pZCA9IFwiYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBib2R5LmFwcGVuZENoaWxkKGFib3V0TWVCYWNrZ3JvdW5kKTtcclxuXHJcbiAgY29uc3QgaHVuZHJlZFZIY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBodW5kcmVkVkhjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImh1bmRyZWRWSGNvbnRhaW5lclwiKTtcclxuXHJcbiAgYWJvdXRNZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaHVuZHJlZFZIY29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUNvbnRhaW5lclwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBBTVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJBTVRpdGxlXCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBBTVRpdGxlLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoQU1UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVQYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZVBhcmFnXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5pbm5lckhUTUwgPVxyXG4gICAgXCJJIGFtIGEgc2VsZi10YXVnaHQgPHNwYW4+d2ViIGRldmVsb3Blcjwvc3Bhbj4uIEN1cnJlbnRseSwgSSBhbSBzdHVkeWluZyA8c3Bhbj5CUyBpbiBpbmZvcm1hdGlvbiB0ZWNobm9sb2d5IGF0IHRoZSBCYXRhbmdhcyBTdGF0ZSBVbml2ZXJzaXR5PC9zcGFuPi4gSSBoYXZlIGJlZW4gaG9uaW5nIG15IHNraWxscyBzaW5jZSBsYXRlIDIwMjIgKHRocm91Z2ggdGhlIDxzcGFuPk9kaW4gUHJvamVjdDwvc3Bhbj4gYW5kIG90aGVyIG9ubGluZSByZXNvdXJjZXMpLiA8c3Bhbj5JIGFtIGNvbmZpZGVudCB3aXRoIG15IGVudHJ5LWxldmVsIGZyb250LWVuZCBkZXZlbG9wbWVudCBza2lsbHM8L3NwYW4+LiBNeSBwcmltYXJ5IGxhbmd1YWdlcyBhcmUgPHNwYW4+SFRNTCwgQ1NTLCBhbmQgSmF2YXNjcmlwdDwvc3Bhbj4gLSBidXQgSSBjYW4gYWxzbyB1c2UgUHl0aG9uLCBXZWJwYWNrLCBDTEksIGFuZCBDKysgdG8gYSBjZXJ0YWluIGV4dGVudC5cIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQYXJhZyk7XHJcblxyXG4gIC8vcHJvamVjdHNcclxuXHJcbiAgY29uc3Qgd29ya3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwid29ya3NcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrcyk7XHJcblxyXG4gIC8vY29udGFjdCBtZSEgZW1haWwgcGFnZVxyXG4gIGNvbnN0IGVtYWlsU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZW1haWxTZWN0aW9uXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZW1haWxTZWN0aW9uKTtcclxuXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uMTAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uMTAwLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb24xMDBcIik7XHJcbiAgZW1haWxTZWN0aW9uLmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbjEwMCk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiaHR0cHM6Ly9mb3Jtc3VibWl0LmNvL3BhcnJlbm9lbW1hbnVlbDc1NkBlbWFpbC5jb21cIjtcclxuICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gIGVtYWlsU2VjdGlvbjEwMC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcImZpZWxkc2V0XCIpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xyXG5cclxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xyXG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiRU1BSUwgTUUgTk9XIVwiO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XHJcblxyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGVtYWlsLnBsYWNlaG9sZGVyID0gXCJFTUFJTFwiO1xyXG4gIGVtYWlsLnR5cGUgPSBcImVtYWlsXCI7XHJcbiAgZW1haWwubmFtZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZW1haWwpO1xyXG5cclxuICBjb25zdCBzZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc2VuZGVyLnBsYWNlaG9sZGVyID0gXCJOQU1FXCI7XHJcbiAgc2VuZGVyLnR5cGUgPSBcInRleHRcIjtcclxuICBzZW5kZXIubmFtZSA9IFwibmFtZVwiO1xyXG4gIHNlbmRlci5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc2VuZGVyKTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBtZXNzYWdlLnBsYWNlaG9sZGVyID0gXCJNRVNTQUdFXCI7XHJcbiAgbWVzc2FnZS5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgbWVzc2FnZS5jb2xzID0gMzA7XHJcbiAgbWVzc2FnZS5yb3dzID0gMTA7XHJcbiAgbWVzc2FnZS5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcclxuICBtZXNzYWdlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kXCI7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgLy9tb3JlIGFib3V0IG1lXHJcbiAgY29uc3QgbW9yZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBtb3JlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibW9yZVwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKG1vcmVTZWN0aW9uKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwiLi9kb20uanNcIjtcclxuXHJcbmxheW91dCgpO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9uVHJpZ2dlcihzZWN0aW9uLCBhbmltYXRpb25OYW1lLCBleHBhbmQgPSBudWxsKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJvb3Q6IG51bGwsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNCxcclxuICAgIHJvb3RNYXJnaW46IFwiMjVweFwiLFxyXG4gIH07XHJcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWJvdXRNZUNvbnRhaW5lclwiKSAmJlxyXG4gICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGV4cGFuZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImFib3V0TWVDb250YWluZXJcIikgJiZcclxuICAgICAgICAhZW50cnkuaXNJbnRlcnNlY3RpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZXhwYW5kKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25OYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25OYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgb3B0aW9ucyk7XHJcblxyXG4gIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XHJcbn1cclxuXHJcbigoKSA9PiB7XHJcbiAgY29uc3QgcmlnaHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yaWdodFwiKTtcclxuICByaWdodHMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwiZnJvbVJpZ2h0XCIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsZWZ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVmdFwiKTtcclxuICBsZWZ0cy5mb3JFYWNoKChpdGVtcykgPT4ge1xyXG4gICAgYW5pbWF0aW9uVHJpZ2dlcihpdGVtcywgXCJmcm9tTGVmdFwiKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXBwZWFyXCIpO1xyXG4gIGFwcGVhcnMuZm9yRWFjaCgoaXRlbXMpID0+IHtcclxuICAgIGFuaW1hdGlvblRyaWdnZXIoaXRlbXMsIFwicG9wXCIsIFwiZXhwYW5kXCIpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4vLyBjb25zdCBuYW1lID0gXCJmcm9tUmlnaHRcIjtcclxuLy8gYW5pbWF0aW9uVHJpZ2dlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkFNVGl0bGVcIiksIG5hbWUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=