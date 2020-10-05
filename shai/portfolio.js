//HTML, CSS and JavaScript

var languages = [
  "HTML",
  "CSS",
  "JavaScript"
];

document.getElementById("footer").innerText = "This page was built using:";

for (let i = 0; i < languages.length;i++) {
  document.getElementById("footer").innerText += " " + languages[i];
  if (i==languages.length-2) {
    document.getElementById("footer").innerText += " and";
  }
  else if (i<languages.length-2) {
    document.getElementById("footer").innerText += ",";
  }
}
