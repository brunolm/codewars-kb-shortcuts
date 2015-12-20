"use strict";

let testBtn = <HTMLButtonElement>document.querySelector("#validate_btn");
let submitBtn = <HTMLButtonElement>document.querySelector("#attempt_btn");

let tabs = document.querySelector("#play dl.tabs");

document.addEventListener("keydown", function(e) {
  let id = (<any>e).keyIdentifier;
  let stop = () => {
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  if (id === "F5") { // test
    testBtn.click();
    console.log("F5 OK");
    stop();
  }
  else if (id === "F6") { // submit
    submitBtn.click();
    stop();
  }
  else if (id === "F1") { // instructions
    (<HTMLDDElement>tabs.querySelector("dd:nth-child(1) a")).click();
    stop();
  }
  else if (id === "F2") { // output
    (<HTMLDDElement>tabs.querySelector("dd:nth-child(2) a")).click();
    stop();
  }
}, false);

let src = `var mainProfileHeader = document.querySelector("#main_header .profile-item");
if (mainProfileHeader) {
  var score = window.intercomSettings.javascript_rank_score;
  mainProfileHeader.setAttribute("title", score);
}`;

let s = document.createElement("script");
s.innerHTML = src;
document.body.appendChild(s);