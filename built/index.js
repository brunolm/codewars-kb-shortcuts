"use strict";
document.addEventListener("keydown", function (e) {
    let id = e.keyIdentifier;
    let stop = () => {
        e.preventDefault();
        e.stopImmediatePropagation();
    };
    let testBtn = document.querySelector("#validate_btn");
    let submitBtn = document.querySelector("#attempt_btn");
    let tabs = document.querySelector("#play dl.tabs");
    if (id === "F5") {
        testBtn.click();
        stop();
    }
    else if (id === "F6") {
        submitBtn.click();
        stop();
    }
    else if (id === "F1") {
        tabs.querySelector("dd:nth-child(1) a").click();
        stop();
    }
    else if (id === "F2") {
        tabs.querySelector("dd:nth-child(2) a").click();
        stop();
    }
}, false);
let src = `var mainProfileHeader = document.querySelector("#main_header .profile-item");
if (mainProfileHeader) {
  var score = window.intercomSettings.javascript_rank_score;
  mainProfileHeader.setAttribute("title", "JS exp: " + score);
}`;
let s = document.createElement("script");
s.innerHTML = src;
document.body.appendChild(s);
