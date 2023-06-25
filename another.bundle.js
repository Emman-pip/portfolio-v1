"use strict";
(self["webpackChunkportfolio_v1"] = self["webpackChunkportfolio_v1"] || []).push([["another"],{

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

/***/ "./src/email.svg":
/*!***********************!*\
  !*** ./src/email.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7a364af28c1fc7cbb30.svg";

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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/dom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNYO0FBQ1k7QUFDbEI7QUFDbkM7QUFDeUM7QUFDTDtBQUNwQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1Q0FBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDRDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVDQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYSBmcm9tIFwiLi9wZXhlbHMtc2FtcHJlZXR5LWFsaS02OTU3OTQuanBnXCI7XHJcbmltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJBcHBWMi5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJNb2JpbGUgZnJvbSBcIi4vd2VhdGhlckFwcFYybW9iaWxlLnBuZ1wiO1xyXG5pbXBvcnQgcHJvamVjdDIgZnJvbSBcIi4vcHJvajIucG5nXCI7XHJcblxyXG5pbXBvcnQgSWNvblBob25lIGZyb20gXCIuL3Bob25lLWRpYWwuc3ZnXCI7XHJcbmltcG9ydCBJY29uRW1haWwgZnJvbSBcIi4vZW1haWwuc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF5b3V0KCkge1xyXG4gIC8vYm9keVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgLy90b3AgYmFyXHJcbiAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgdG9wQmFyLmNsYXNzTGlzdC5hZGQoXCJ0b3BCYXJcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXJcIik7XHJcbiAgdG9wQmFyLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcclxuXHJcbiAgY29uc3QgbXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbXlOYW1lLnRleHRDb250ZW50ID0gXCJFbW1hbnVlbCBQYXJyZcOxb1wiO1xyXG4gIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobXlOYW1lKTtcclxuXHJcbiAgY29uc3Qgc29jbWVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzb2NtZWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNvY21lZENvbnRhaW5lclwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHNvY21lZENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG15TmFtZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZURldGFpbHMuY2xhc3NMaXN0LmFkZChcInZTbWFsbFRleHRcIik7XHJcbiAgbXlOYW1lLmFwcGVuZENoaWxkKG15TmFtZURldGFpbHMpO1xyXG4gIG15TmFtZURldGFpbHMudGV4dENvbnRlbnQgPSBcIkJTSVQgU1RVREVOVCBBVCBCQVRBTkdBUyBTVEFURSBVTklWRVJTSVRZXCI7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9wQmFyKTtcclxuXHJcbiAgLy9maXJzdCBwcm9tcHRcclxuICBjb25zdCBmaXJzdFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBmaXJzdFBhcnQuY2xhc3NMaXN0LmFkZChcImZpcnN0UGFydFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGZpcnN0UGFydCk7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRTZWEgPSBuZXcgSW1hZ2UoKTtcclxuICBiYWNrZ3JvdW5kU2VhLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kU2VhXCIpO1xyXG4gIGJhY2tncm91bmRTZWEuc3JjID0gU2VhO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kU2VhKTtcclxuICBiYWNrZ3JvdW5kU2VhLmFsdCA9IFwiYmFja2dyb3VuZFwiO1xyXG5cclxuICBjb25zdCBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkhFTExPLFwiO1xyXG4gIGdyZWV0aW5nLmNsYXNzTGlzdC5hZGQoXCJncmVldFwiKTtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcclxuXHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBpbnRyby50ZXh0Q29udGVudCA9IFwiSSBhbSBFTU1BTlVFTFwiO1xyXG4gIGdyZWV0aW5nLmFwcGVuZENoaWxkKGludHJvKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uLmhyZWYgPSBcIiNhYm91dE1lQmFja2dyb3VuZFwiO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUJPVVQgTUVcIjtcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFib3V0bWVCdXR0b25cIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgY29uc3QgaW50cm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRybzIuY2xhc3NMaXN0LmFkZChcImludHJvMlwiKTtcclxuICBpbnRybzIuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XHJcbiAgaW50cm8yLnRleHRDb250ZW50ID0gXCJBIHNlbGYtdGF1Z2h0IHByb2dyYW1tZXJcIjtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoaW50cm8yKTtcclxuXHJcbiAgLy9wYWdlIGJyZWFrXHJcblxyXG4gIC8vYWJvdXQgbWVcclxuICBjb25zdCBhYm91dE1lQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImFib3V0TWVCYWNrZ3JvdW5kXCIpO1xyXG4gIC8vIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgYWJvdXRNZUJhY2tncm91bmQuaWQgPSBcImFib3V0TWVCYWNrZ3JvdW5kXCI7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChhYm91dE1lQmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGh1bmRyZWRWSGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJodW5kcmVkVkhjb250YWluZXJcIik7XHJcblxyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGh1bmRyZWRWSGNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHNsaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaXQuY2xhc3NMaXN0LmFkZChcInNsaXRcIik7XHJcblxyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHNsaXQpO1xyXG5cclxuICBjb25zdCBhYm91dE1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQ29udGFpbmVyXCIpO1xyXG4gIGFib3V0TWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBodW5kcmVkVkhjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IEFNVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcIkFNVGl0bGVcIik7XHJcbiAgQU1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIEFNVGl0bGUudGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5hcHBlbmRDaGlsZChBTVRpdGxlKTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZVBhcmFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWJvdXRNZVBhcmFnLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lUGFyYWdcIik7XHJcbiAgYWJvdXRNZVBhcmFnLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgYWJvdXRNZVBhcmFnLmlubmVySFRNTCA9XHJcbiAgICBcIkkgYW0gYSBzZWxmLXRhdWdodCA8c3Bhbj53ZWIgZGV2ZWxvcGVyPC9zcGFuPi4gQ3VycmVudGx5LCBJIGFtIHN0dWR5aW5nIDxzcGFuPkJTIGluIGluZm9ybWF0aW9uIHRlY2hub2xvZ3kgYXQgdGhlIEJhdGFuZ2FzIFN0YXRlIFVuaXZlcnNpdHk8L3NwYW4+LiBJIGhhdmUgYmVlbiBob25pbmcgbXkgc2tpbGxzIHNpbmNlIGxhdGUgMjAyMiAodGhyb3VnaCB0aGUgPHNwYW4+T2RpbiBQcm9qZWN0PC9zcGFuPiBhbmQgb3RoZXIgb25saW5lIHJlc291cmNlcykuIDxzcGFuPkkgYW0gY29uZmlkZW50IHdpdGggbXkgZW50cnktbGV2ZWwgZnJvbnQtZW5kIGRldmVsb3BtZW50IHNraWxsczwvc3Bhbj4uIE15IHByaW1hcnkgbGFuZ3VhZ2VzIGFyZSA8c3Bhbj5IVE1MLCBDU1MsIGFuZCBKYXZhc2NyaXB0PC9zcGFuPiAtIGJ1dCBJIGNhbiBhbHNvIHVzZSBQeXRob24sIFdlYnBhY2ssIENMSSwgYW5kIEMrKyB0byBhIGNlcnRhaW4gZXh0ZW50LlwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZVBhcmFnKTtcclxuXHJcbiAgLy9wcm9qZWN0c1xyXG4gIGNvbnN0IHdvcmtzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQod29ya3NUaXRsZSk7XHJcbiAgd29ya3NUaXRsZS5jbGFzc0xpc3QuYWRkKFwid29ya3NUaXRsZVwiKTtcclxuXHJcbiAgY29uc3Qgd29ya3NUaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3b3Jrc1RpdGxlXCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgd29ya3NUaXRsZVRleHQudGV4dENvbnRlbnQgPSBcIlNPTUUgT0YgTVkgV09SS1NcIjtcclxuICB3b3Jrc1RpdGxlLmFwcGVuZENoaWxkKHdvcmtzVGl0bGVUZXh0KTtcclxuXHJcbiAgY29uc3Qgd29ya3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAvLyB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHdvcmtzLmNsYXNzTGlzdC5hZGQoXCJ3b3Jrc1wiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHdvcmtzKTtcclxuXHJcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJldi50ZXh0Q29udGVudCA9IFwiPFwiO1xyXG4gIHByZXYuY2xhc3NMaXN0LmFkZChcInByZXZcIik7XHJcbiAgd29ya3MuYXBwZW5kQ2hpbGQocHJldik7XHJcblxyXG4gIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvLyBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidXBcIik7XHJcbiAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlQ29udGFpbmVyXCIpO1xyXG4gIHdvcmtzLmFwcGVuZENoaWxkKHNsaWRlQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmV4dC50ZXh0Q29udGVudCA9IFwiPlwiO1xyXG4gIG5leHQuY2xhc3NMaXN0LmFkZChcIm5leHRcIik7XHJcbiAgd29ya3MuYXBwZW5kQ2hpbGQobmV4dCk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vL1NMSURFUi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcclxuICAvLyBzbGlkZXIuY2xhc3NMaXN0LmFkZChcInVwXCIpO1xyXG5cclxuICBjb25zdCBwcm9qMSA9IG5ldyBJbWFnZSgpO1xyXG4gIC8vIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJ1cFwiKTtcclxuICBwcm9qMS5zcmMgPSB3ZWF0aGVyO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBwcm9qMS5jbGFzc0xpc3QuYWRkKFwicHJvajFcIik7XHJcblxyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMSk7XHJcblxyXG4gIGNvbnN0IHByb2oyID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gcHJvajIuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMi5zcmMgPSBwcm9qZWN0MjtcclxuICBwcm9qMi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2oyKTtcclxuICBwcm9qMi5jbGFzc0xpc3QuYWRkKFwicHJvajJcIik7XHJcblxyXG4gIGNvbnN0IHByb2ozID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gcHJvajMuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMy5zcmMgPSB3ZWF0aGVyO1xyXG4gIHByb2ozLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajMpO1xyXG4gIHByb2ozLmNsYXNzTGlzdC5hZGQoXCJwcm9qM1wiKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vU0xJREVSLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy9jb250YWN0IG1lISBlbWFpbCBwYWdlXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb25cIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBsYXN0QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgbGFzdEJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImxhc3RCYWNrZ3JvdW5kXCIpO1xyXG4gIGVtYWlsU2VjdGlvbi5hcHBlbmRDaGlsZChsYXN0QmFja2dyb3VuZCk7XHJcblxyXG4gIGNvbnN0IGxhc3RCYWNrZ3JvdW5kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgbGFzdEJhY2tncm91bmQyLmNsYXNzTGlzdC5hZGQoXCJsYXN0QmFja2dyb3VuZFwiKTtcclxuICBsYXN0QmFja2dyb3VuZDIuY2xhc3NMaXN0LmFkZChcImxhc3RCYWNrZ3JvdW5kMlwiKTtcclxuICBlbWFpbFNlY3Rpb24uYXBwZW5kQ2hpbGQobGFzdEJhY2tncm91bmQyKTtcclxuXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uMTAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uMTAwLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb24xMDBcIik7XHJcbiAgZW1haWxTZWN0aW9uLmFwcGVuZENoaWxkKGVtYWlsU2VjdGlvbjEwMCk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmFjdGlvbiA9IFwiaHR0cHM6Ly9mb3Jtc3VibWl0LmNvL3BhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInNoaXZlclwiKTtcclxuICBlbWFpbFNlY3Rpb24xMDAuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoXCJmaWVsZHNldFwiKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICBsZWdlbmQuaW5uZXJIVE1MID0gYEludGVyZXN0ZWQ/IDxzcGFuIGNsYXNzPVwiZ2xvd2luZ21haWxcIj5FbWFpbCBtZSBub3chPC9zcGFuPmA7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuXHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZW1haWwucGxhY2Vob2xkZXIgPSBcIkVNQUlMXCI7XHJcbiAgZW1haWwudHlwZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbC5uYW1lID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcblxyXG4gIGNvbnN0IHNlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZW5kZXIucGxhY2Vob2xkZXIgPSBcIk5BTUVcIjtcclxuICBzZW5kZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlbmRlci5uYW1lID0gXCJuYW1lXCI7XHJcbiAgc2VuZGVyLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzZW5kZXIpO1xyXG5cclxuICBjb25zdCBzdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHN1YmplY3QucGxhY2Vob2xkZXIgPSBcIk1BSUwnUyBTVUJKRUNUXCI7XHJcbiAgc3ViamVjdC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc3ViamVjdC5uYW1lID0gXCJzdWJqZWN0XCI7XHJcbiAgc3ViamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3ViamVjdCk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiTUVTU0FHRVwiO1xyXG4gIG1lc3NhZ2UubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gIG1lc3NhZ2UuY29scyA9IDMwO1xyXG4gIG1lc3NhZ2Uucm93cyA9IDEwO1xyXG4gIG1lc3NhZ2Uuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgbWVzc2FnZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnV0dG9uXCIpO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vbW9yZSBhYm91dCBtZVxyXG4gIGNvbnN0IG1vcmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbW9yZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vcmVcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChtb3JlU2VjdGlvbik7XHJcbiAgbW9yZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuXHJcbiAgY29uc3QgZmlyc3RUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZmlyc3RUZXh0cy5jbGFzc0xpc3QuYWRkKFwiYWRkaXRpb25hbFwiKTtcclxuXHJcbiAgY29uc3Qgc2Vjb25kVGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNlY29uZFRleHRzLmNsYXNzTGlzdC5hZGQoXCJhZGRpdGlvbmFsXCIpO1xyXG4gIHNlY29uZFRleHRzLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRBZGRpdGlvbmFsXCIpO1xyXG5cclxuICBjb25zdCBDUG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKENQbnVtYmVyKTtcclxuICBDUG51bWJlci5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIENQbnVtYmVyLnRleHRDb250ZW50ID0gXCIrNjMgOTU2IDY4OCAxNDg5XCI7XHJcbiAgQ1BudW1iZXIuaHJlZiA9IFwidGVsOis2Mzk1NjY4ODE0ODlcIjtcclxuICBDUG51bWJlci5jbGFzc0xpc3QuYWRkKFwiQ1BudW1iZXJcIik7XHJcblxyXG4gIGNvbnN0IGNwSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGNwSWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGxJY29uXCIpO1xyXG4gIGNwSWNvbi5zcmMgPSBJY29uUGhvbmU7XHJcbiAgQ1BudW1iZXIuYXBwZW5kQ2hpbGQoY3BJY29uKTtcclxuXHJcbiAgY29uc3QgcGVyc29uYWxNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgc2Vjb25kVGV4dHMuYXBwZW5kQ2hpbGQocGVyc29uYWxNYWlsKTtcclxuICBwZXJzb25hbE1haWwuaHJlZiA9IFwibWFpbHRvOnBhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBwZXJzb25hbE1haWwudGV4dENvbnRlbnQgPSBcInBhcnJlbm9lbW1hbnVlbDc1NkBnbWFpbC5jb21cIjtcclxuICBwZXJzb25hbE1haWwuY2xhc3NMaXN0LmFkZChcIkNQbnVtYmVyXCIpO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxBZGRyZXNzXCIpO1xyXG4gIHBlcnNvbmFsTWFpbC5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKHBlcnNvbmFsTWFpbCk7XHJcblxyXG4gIGNvbnN0IGVtYWlsSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwic21hbGxJY29uXCIpO1xyXG4gIGVtYWlsSWNvbi5zcmMgPSBJY29uRW1haWw7XHJcbiAgcGVyc29uYWxNYWlsLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcblxyXG4gIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKGZpcnN0VGV4dHMpO1xyXG4gIG1vcmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlY29uZFRleHRzKTtcclxuXHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyMlwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5zdHlsZS5taXhCbGVuZE1vZGUgPSBcImRpZmZlcmVuY2VcIjtcclxuXHJcbiAgY29uc3QgY2lyY2xlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2lyY2xlMi5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmFwcGVuZENoaWxkKGNpcmNsZTIpO1xyXG5cclxuICBjb25zdCBteU5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWUyLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gIG15TmFtZTIudGV4dENvbnRlbnQgPSBcIkVtbWFudWVsIFBhcnJlw7FvXCI7XHJcbiAgbmFtZUNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQobXlOYW1lMik7XHJcblxyXG4gIC8vIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyMlwiKTtcclxuICBuYW1lQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKFwidW5kZXJsaW5lXCIpO1xyXG4gIGZpcnN0VGV4dHMuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcjIpO1xyXG59XHJcbi8vXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==