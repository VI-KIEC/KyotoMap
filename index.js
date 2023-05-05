"use strict";

// p[0].addEventListener("click", () => {
//   const p = document.getElementsByClassName("p");
//   p[0].style.animation = "clicked 0.5s";
//   //   p[0].style.animation = "none";
// });

const hamburger = document.querySelector(".hamburger");
const line = document.querySelectorAll(".line");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  line[0].classList.toggle("active");
  line[1].classList.toggle("active");
  line[2].classList.toggle("active");
  container.classList.remove("active");
  instruction_button_line[0].classList.remove("active");
  instruction_button_line[1].classList.remove("active");
  instruction_button.classList.remove("active");
});

const instruction_button = document.querySelector(".instruction_button");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const instruction_button_line = document.querySelectorAll(
  ".instruction_button_line"
);
instruction_button.addEventListener("click", () => {
  header.classList.toggle("active");
  container.classList.toggle("active");
  instruction_button.classList.toggle("active");
  menu.classList.remove("active");
  line[0].classList.remove("active");
  line[1].classList.remove("active");
  line[2].classList.remove("active");

  instruction_button_line[0].classList.toggle("active");
  instruction_button_line[1].classList.toggle("active");
});

instruction_button_line[0].addEventListener("click", () => {
  instruction_button_line[0].classList.toggle("active");
  instruction_button_line[1].classList.toggle("active");
  instruction_button.classList.toggle("active");
  container.classList.toggle("active");
});

instruction_button_line[1].addEventListener("click", () => {
  instruction_button_line[0].classList.toggle("active");
  instruction_button_line[1].classList.toggle("active");
  instruction_button.classList.toggle("active");
  container.classList.toggle("active");
});
