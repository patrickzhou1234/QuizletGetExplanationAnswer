// ==UserScript==
// @name         Quizlet Explanations Get Answer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://quizlet.com/explanations/questions/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=quizlet.com
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11.6.16/dist/sweetalert2.all.min.js
// @grant        GM_addStyle
// ==/UserScript==

/* global Swal */

Swal.fire(
    "Here's your answer!",
    document.querySelectorAll(".katex-html")[document.querySelectorAll(".katex-html").length-1].textContent,
    'success'
);
