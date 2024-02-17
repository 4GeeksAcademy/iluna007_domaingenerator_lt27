/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our", "a", "you"];
let adj = ["yellow", "fat", "skinny", "red"];
let noun = ["kitty", "cat", "pussycat", "kitten", "wildcat", "michi"];
let extensions = [".com", ".net", ".us", ".io"];

function domaingenerator() {
  let domain = "";
  for (let i = 1; i < 9; i++) {
    for (let j = 0; j < 1; j++) {
      domain +=
        i +
        " " +
        pronoun[Math.floor(Math.random() * pronoun.length)] +
        adj[Math.floor(Math.random() * adj.length)] +
        noun[Math.floor(Math.random() * noun.length)] +
        extensions[Math.floor(Math.random() * extensions.length)] +
        "<br>";
    }
  }
  return domain;
}

document.getElementById("dg").addEventListener("click", function() {
  this.innerHTML = domaingenerator();
});
