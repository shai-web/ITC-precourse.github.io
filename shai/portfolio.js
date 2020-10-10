//HTML, CSS and JavaScript

let languages = [
  "HTML",
  "CSS",
  "JavaScript",
];


let length = languages.length;

let langText = "This page was built using:";

for (let i = 0; i < length;i++) {
    langText += " " + languages[i];
  if (i==length-2) {
    langText += " and";
  }
  else if (i < length-2) {
    langText += ",";
  }

}

document.getElementById("footer").innerText = langText;  


