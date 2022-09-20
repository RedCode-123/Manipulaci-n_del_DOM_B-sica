"use strict";

const x = document.querySelector(".value1");
const y = document.querySelector(".value2");
const btn1 = document.querySelector(".send1");
const result1 = document.querySelector(".result");

function btnOnClick() {
    const add1 = +x.value + +y.value;
    result1.innerText = "Resultado " + add1;
}


btn1.addEventListener('click',btnOnClick);
