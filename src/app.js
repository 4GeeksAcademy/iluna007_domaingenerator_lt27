import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  domainGenerator();
};

const p = document.getElementById("dg");

const pronoun = ["the", "our", "a", "you"];
const adj = ["yellow", "fat", "skinny", "red"];
const noun = ["kitty", "cat", "pussycat", "kitten", "wildcat", "michi"];
const extensions = [".com", ".net", ".us", ".io"];

function domainGenerator() {
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

p.addEventListener("click", function() {
  this.innerHTML = domainGenerator();
});
