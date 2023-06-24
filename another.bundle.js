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

  const CPnumber = document.createElement("p");
  secondTexts.appendChild(CPnumber);
  CPnumber.textContent = "+63 956 688 1489";
  CPnumber.classList.add("CPnumber");

  const personalMail = document.createElement("p");
  secondTexts.appendChild(personalMail);
  personalMail.textContent = "parrenoemmanuel756@gmail.com";
  personalMail.classList.add("CPnumber");
  secondTexts.appendChild(personalMail);

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

/***/ "./src/pexels-sampreety-ali-695794.jpg":
/*!*********************************************!*\
  !*** ./src/pexels-sampreety-ali-695794.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f36df44166bd045538c.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDWDtBQUNZO0FBQ2xCO0FBQzVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUNBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby12MS8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYSBmcm9tIFwiLi9wZXhlbHMtc2FtcHJlZXR5LWFsaS02OTU3OTQuanBnXCI7XHJcbmltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJBcHBWMi5wbmdcIjtcclxuaW1wb3J0IHdlYXRoZXJNb2JpbGUgZnJvbSBcIi4vd2VhdGhlckFwcFYybW9iaWxlLnBuZ1wiO1xyXG5pbXBvcnQgcHJvamVjdDIgZnJvbSBcIi4vcHJvajIucG5nXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBsYXlvdXQoKSB7XHJcbiAgLy9ib2R5XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAvL3RvcCBiYXJcclxuICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICB0b3BCYXIuY2xhc3NMaXN0LmFkZChcInRvcEJhclwiKTtcclxuXHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmFtZUNvbnRhaW5lclwiKTtcclxuICB0b3BCYXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xyXG5cclxuICBjb25zdCBteU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBteU5hbWUudGV4dENvbnRlbnQgPSBcIkVtbWFudWVsIFBhcnJlw7FvXCI7XHJcbiAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChteU5hbWUpO1xyXG5cclxuICBjb25zdCBzb2NtZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNvY21lZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic29jbWVkQ29udGFpbmVyXCIpO1xyXG4gIHRvcEJhci5hcHBlbmRDaGlsZChzb2NtZWRDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBteU5hbWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBteU5hbWVEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ2U21hbGxUZXh0XCIpO1xyXG4gIG15TmFtZS5hcHBlbmRDaGlsZChteU5hbWVEZXRhaWxzKTtcclxuICBteU5hbWVEZXRhaWxzLnRleHRDb250ZW50ID0gXCJCU0lUIFNUVURFTlQgQVQgQkFUQU5HQVMgU1RBVEUgVU5JVkVSU0lUWVwiO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKHRvcEJhcik7XHJcblxyXG4gIC8vZmlyc3QgcHJvbXB0XHJcbiAgY29uc3QgZmlyc3RQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZmlyc3RQYXJ0LmNsYXNzTGlzdC5hZGQoXCJmaXJzdFBhcnRcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChmaXJzdFBhcnQpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kU2VhID0gbmV3IEltYWdlKCk7XHJcbiAgYmFja2dyb3VuZFNlYS5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZFNlYVwiKTtcclxuICBiYWNrZ3JvdW5kU2VhLnNyYyA9IFNlYTtcclxuICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZFNlYSk7XHJcbiAgYmFja2dyb3VuZFNlYS5hbHQgPSBcImJhY2tncm91bmRcIjtcclxuXHJcbiAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJIRUxMTyxcIjtcclxuICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRcIik7XHJcbiAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGZpcnN0UGFydC5hcHBlbmRDaGlsZChncmVldGluZyk7XHJcblxyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcInVuZGVybGluZVwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgaW50cm8udGV4dENvbnRlbnQgPSBcIkkgYW0gRU1NQU5VRUxcIjtcclxuICBncmVldGluZy5hcHBlbmRDaGlsZChpbnRybyk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbi5ocmVmID0gXCIjYWJvdXRNZUJhY2tncm91bmRcIjtcclxuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFCT1VUIE1FXCI7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dG1lQnV0dG9uXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IGludHJvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJpbnRybzJcIik7XHJcbiAgaW50cm8yLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIGludHJvMi50ZXh0Q29udGVudCA9IFwiQSBzZWxmLXRhdWdodCBwcm9ncmFtbWVyXCI7XHJcbiAgZmlyc3RQYXJ0LmFwcGVuZENoaWxkKGludHJvMik7XHJcblxyXG4gIC8vcGFnZSBicmVha1xyXG5cclxuICBjb25zdCBwYWdlYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VicmVhay5jbGFzc0xpc3QuYWRkKFwicGFnZWJyZWFrXCIpO1xyXG5cclxuICAvL2Fib3V0IG1lXHJcbiAgY29uc3QgYWJvdXRNZUJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lQmFja2dyb3VuZFwiKTtcclxuICAvLyBhYm91dE1lQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVCYWNrZ3JvdW5kLmlkID0gXCJhYm91dE1lQmFja2dyb3VuZFwiO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRNZUJhY2tncm91bmQpO1xyXG5cclxuICBjb25zdCBodW5kcmVkVkhjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGh1bmRyZWRWSGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaHVuZHJlZFZIY29udGFpbmVyXCIpO1xyXG5cclxuICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChodW5kcmVkVkhjb250YWluZXIpO1xyXG5cclxuICBjb25zdCBzbGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGl0LmNsYXNzTGlzdC5hZGQoXCJzbGl0XCIpO1xyXG5cclxuICBhYm91dE1lQmFja2dyb3VuZC5hcHBlbmRDaGlsZChzbGl0KTtcclxuXHJcbiAgY29uc3QgYWJvdXRNZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXRNZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZUNvbnRhaW5lclwiKTtcclxuICBhYm91dE1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgaHVuZHJlZFZIY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBBTVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBBTVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJBTVRpdGxlXCIpO1xyXG4gIEFNVGl0bGUuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBBTVRpdGxlLnRleHRDb250ZW50ID0gXCJBQk9VVCBNRVwiO1xyXG4gIGFib3V0TWVDb250YWluZXIuYXBwZW5kQ2hpbGQoQU1UaXRsZSk7XHJcblxyXG4gIGNvbnN0IGFib3V0TWVQYXJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZVBhcmFnXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIGFib3V0TWVQYXJhZy5pbm5lckhUTUwgPVxyXG4gICAgXCJJIGFtIGEgc2VsZi10YXVnaHQgPHNwYW4+d2ViIGRldmVsb3Blcjwvc3Bhbj4uIEN1cnJlbnRseSwgSSBhbSBzdHVkeWluZyA8c3Bhbj5CUyBpbiBpbmZvcm1hdGlvbiB0ZWNobm9sb2d5IGF0IHRoZSBCYXRhbmdhcyBTdGF0ZSBVbml2ZXJzaXR5PC9zcGFuPi4gSSBoYXZlIGJlZW4gaG9uaW5nIG15IHNraWxscyBzaW5jZSBsYXRlIDIwMjIgKHRocm91Z2ggdGhlIDxzcGFuPk9kaW4gUHJvamVjdDwvc3Bhbj4gYW5kIG90aGVyIG9ubGluZSByZXNvdXJjZXMpLiA8c3Bhbj5JIGFtIGNvbmZpZGVudCB3aXRoIG15IGVudHJ5LWxldmVsIGZyb250LWVuZCBkZXZlbG9wbWVudCBza2lsbHM8L3NwYW4+LiBNeSBwcmltYXJ5IGxhbmd1YWdlcyBhcmUgPHNwYW4+SFRNTCwgQ1NTLCBhbmQgSmF2YXNjcmlwdDwvc3Bhbj4gLSBidXQgSSBjYW4gYWxzbyB1c2UgUHl0aG9uLCBXZWJwYWNrLCBDTEksIGFuZCBDKysgdG8gYSBjZXJ0YWluIGV4dGVudC5cIjtcclxuICBhYm91dE1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVQYXJhZyk7XHJcblxyXG4gIC8vcHJvamVjdHNcclxuICBjb25zdCB3b3Jrc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHdvcmtzVGl0bGUpO1xyXG4gIHdvcmtzVGl0bGUuY2xhc3NMaXN0LmFkZChcIndvcmtzVGl0bGVcIik7XHJcblxyXG4gIGNvbnN0IHdvcmtzVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwid29ya3NUaXRsZVwiKTtcclxuICB3b3Jrc1RpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpO1xyXG4gIHdvcmtzVGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJTT01FIE9GIE1ZIFdPUktTXCI7XHJcbiAgd29ya3NUaXRsZS5hcHBlbmRDaGlsZCh3b3Jrc1RpdGxlVGV4dCk7XHJcblxyXG4gIGNvbnN0IHdvcmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgLy8gd29ya3MuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICB3b3Jrcy5jbGFzc0xpc3QuYWRkKFwid29ya3NcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrcyk7XHJcblxyXG4gIC8vIGNvbnN0IHByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIHByZXYudGV4dENvbnRlbnQgPSBcIjxcIjtcclxuICAvLyBwcmV2LmNsYXNzTGlzdC5hZGQoXCJwcmV2XCIpO1xyXG4gIC8vIHdvcmtzLmFwcGVuZENoaWxkKHByZXYpO1xyXG5cclxuICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUNvbnRhaW5lclwiKTtcclxuICB3b3Jrcy5hcHBlbmRDaGlsZChzbGlkZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIG5leHQudGV4dENvbnRlbnQgPSBcIj5cIjtcclxuICAvLyBuZXh0LmNsYXNzTGlzdC5hZGQoXCJuZXh0XCIpO1xyXG4gIC8vIHdvcmtzLmFwcGVuZENoaWxkKG5leHQpO1xyXG5cclxuICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHNwYW4xLmlkID0gXCJzcGFuMVwiO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4xKTtcclxuXHJcbiAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBzcGFuMi5pZCA9IFwic3BhbjJcIjtcclxuICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuMik7XHJcblxyXG4gIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgc3BhbjIuaWQgPSBcInNwYW4zXCI7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbjMpO1xyXG5cclxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xyXG4gIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblxyXG4gIGNvbnN0IHByb2oxID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajEuY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcclxuICBwcm9qMS5zcmMgPSB3ZWF0aGVyO1xyXG4gIHByb2oxLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcclxuICBwcm9qMS5jbGFzc0xpc3QuYWRkKFwicHJvajFcIik7XHJcblxyXG4gIGNvbnN0IHByb2oxTW9iaWxlID0gbmV3IEltYWdlKCk7XHJcbiAgcHJvajFNb2JpbGUuY2xhc3NMaXN0LmFkZChcInByb2oxTW9iaWxlXCIpO1xyXG4gIHByb2oxTW9iaWxlLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajFNb2JpbGUuc3JjID0gd2VhdGhlck1vYmlsZTtcclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajFNb2JpbGUpO1xyXG5cclxuICBzbGlkZXIuYXBwZW5kQ2hpbGQocHJvajEpO1xyXG5cclxuICBjb25zdCBwcm9qMiA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2oyLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajIuc3JjID0gcHJvamVjdDI7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xyXG4gIHNsaWRlci5hcHBlbmRDaGlsZChwcm9qMik7XHJcbiAgcHJvajIuY2xhc3NMaXN0LmFkZChcInByb2oyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qMyA9IG5ldyBJbWFnZSgpO1xyXG4gIHByb2ozLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XHJcbiAgcHJvajMuc3JjID0gd2VhdGhlcjtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHByb2ozKTtcclxuICBwcm9qMy5jbGFzc0xpc3QuYWRkKFwicHJvajNcIik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIik7XHJcbiAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbjJcIik7XHJcbiAgYnV0dG9uMi5ocmVmID0gXCIjc3BhbjJcIjtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBidXR0b24xLmNsYXNzTGlzdC5hZGQoXCJidXR0b24xXCIpO1xyXG4gIGJ1dHRvbjEuaHJlZiA9IFwiI3NwYW4xXCI7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbjEpO1xyXG5cclxuICBjb25zdCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uM1wiKTtcclxuICBidXR0b24zLmhyZWYgPSBcIiNzcGFuM1wiO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24zKTtcclxuXHJcbiAgLy9jb250YWN0IG1lISBlbWFpbCBwYWdlXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgZW1haWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlbWFpbFNlY3Rpb25cIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChlbWFpbFNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBlbWFpbFNlY3Rpb24xMDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBlbWFpbFNlY3Rpb24xMDAuY2xhc3NMaXN0LmFkZChcImVtYWlsU2VjdGlvbjEwMFwiKTtcclxuICBlbWFpbFNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWxTZWN0aW9uMTAwKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uYWN0aW9uID0gXCJodHRwczovL2Zvcm1zdWJtaXQuY28vcGFycmVub2VtbWFudWVsNzU2QGdtYWlsLmNvbVwiO1xyXG4gIGZvcm0ubWV0aG9kID0gXCJQT1NUXCI7XHJcbiAgZW1haWxTZWN0aW9uMTAwLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcclxuICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKFwiZmllbGRzZXRcIik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZChcInNoaXZlclwiKTtcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcclxuICBsZWdlbmQuaW5uZXJIVE1MID0gYEludGVyZXN0ZWQ/IDxzcGFuIGNsYXNzPVwiZ2xvd2luZ21haWxcIj5FbWFpbCBtZSBub3chPC9zcGFuPmA7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcclxuXHJcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZW1haWwucGxhY2Vob2xkZXIgPSBcIkVNQUlMXCI7XHJcbiAgZW1haWwudHlwZSA9IFwiZW1haWxcIjtcclxuICBlbWFpbC5uYW1lID0gXCJlbWFpbFwiO1xyXG4gIGVtYWlsLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcblxyXG4gIGNvbnN0IHNlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZW5kZXIucGxhY2Vob2xkZXIgPSBcIk5BTUVcIjtcclxuICBzZW5kZXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlbmRlci5uYW1lID0gXCJuYW1lXCI7XHJcbiAgc2VuZGVyLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChzZW5kZXIpO1xyXG5cclxuICBjb25zdCBzdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHN1YmplY3QucGxhY2Vob2xkZXIgPSBcIk1BSUwnUyBTVUJKRUNUXCI7XHJcbiAgc3ViamVjdC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgc3ViamVjdC5uYW1lID0gXCJzdWJqZWN0XCI7XHJcbiAgc3ViamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoc3ViamVjdCk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiTUVTU0FHRVwiO1xyXG4gIG1lc3NhZ2UubmFtZSA9IFwibWVzc2FnZVwiO1xyXG4gIG1lc3NhZ2UuY29scyA9IDMwO1xyXG4gIG1lc3NhZ2Uucm93cyA9IDEwO1xyXG4gIG1lc3NhZ2Uuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgbWVzc2FnZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xyXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnV0dG9uXCIpO1xyXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gIC8vbW9yZSBhYm91dCBtZVxyXG4gIGNvbnN0IG1vcmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbW9yZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vcmVcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChtb3JlU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZpcnN0VGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZpcnN0VGV4dHMuY2xhc3NMaXN0LmFkZChcImFkZGl0aW9uYWxcIik7XHJcblxyXG4gIGNvbnN0IHNlY29uZFRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzZWNvbmRUZXh0cy5jbGFzc0xpc3QuYWRkKFwiYWRkaXRpb25hbFwiKTtcclxuXHJcbiAgY29uc3QgQ1BudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChDUG51bWJlcik7XHJcbiAgQ1BudW1iZXIudGV4dENvbnRlbnQgPSBcIis2MyA5NTYgNjg4IDE0ODlcIjtcclxuICBDUG51bWJlci5jbGFzc0xpc3QuYWRkKFwiQ1BudW1iZXJcIik7XHJcblxyXG4gIGNvbnN0IHBlcnNvbmFsTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHNlY29uZFRleHRzLmFwcGVuZENoaWxkKHBlcnNvbmFsTWFpbCk7XHJcbiAgcGVyc29uYWxNYWlsLnRleHRDb250ZW50ID0gXCJwYXJyZW5vZW1tYW51ZWw3NTZAZ21haWwuY29tXCI7XHJcbiAgcGVyc29uYWxNYWlsLmNsYXNzTGlzdC5hZGQoXCJDUG51bWJlclwiKTtcclxuICBzZWNvbmRUZXh0cy5hcHBlbmRDaGlsZChwZXJzb25hbE1haWwpO1xyXG5cclxuICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChmaXJzdFRleHRzKTtcclxuICBtb3JlU2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmRUZXh0cyk7XHJcbiAgY29uc3QgbmFtZUNvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29udGFpbmVyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwiZGlmZmVyZW5jZVwiO1xyXG5cclxuICBjb25zdCBjaXJjbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVcIik7XHJcbiAgbmFtZUNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoY2lyY2xlMik7XHJcblxyXG4gIGNvbnN0IG15TmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG15TmFtZTIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgbXlOYW1lMi50ZXh0Q29udGVudCA9IFwiRW1tYW51ZWwgUGFycmXDsW9cIjtcclxuICBuYW1lQ29udGFpbmVyMi5hcHBlbmRDaGlsZChteU5hbWUyKTtcclxuXHJcbiAgLy8gbmFtZUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcIm5hbWVDb250YWluZXIyXCIpO1xyXG4gIG5hbWVDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJ1bmRlcmxpbmVcIik7XHJcbiAgZmlyc3RUZXh0cy5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyMik7XHJcbn1cclxuLy9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9