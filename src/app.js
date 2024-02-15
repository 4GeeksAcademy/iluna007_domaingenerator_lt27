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
  for (let i = 1; i < 9; i++) {
    let domain =
      pronoun[Math.floor(Math.random() * pronoun.length + 0)] +
      adj[Math.floor(Math.random() * adj.length + 0)] +
      noun[Math.floor(Math.random() * noun.length + 0)] +
      extensions[Math.floor(Math.random() * extensions.length + 0)];

    return domain;
  }
}

document.getElementById("dg").addEventListener("click", function() {
  this.innerHTML = domaingenerator();
});
