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
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domain += pronoun[i] + adj[j] + noun[k] + extensions[l] + "<br>";
        }
      }
    }
  }
  return domain;
}

document.getElementById("dg").addEventListener("click", function() {
  this.innerHTML = domaingenerator();
});
