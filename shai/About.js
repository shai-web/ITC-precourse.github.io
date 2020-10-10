// About Me - G-MAP Iframe 

let index = 0;
let ol = document.getElementById("geography-list");
let list = ol.getElementsByTagName("li");
let list_size = list.length;
let linkByCity = {
  "North Jerusalem":
   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27129.376974140967!2d35.227381624688064!3d31.793058696031558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329f2701b89f7%3A0x322d1def870ce80b!2sMt%20Scopus!5e0!3m2!1sen!2sil!4v1601738444459!5m2!1sen!2sil", 
  "Karmiel": 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26794.840751114923!2d35.256196427162386!3d32.91521527353663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c338e3f86d769%3A0xba656e02ef89b775!2z15LXkdei16og16jXnSwgS2FybWllbA!5e0!3m2!1sen!2sil!4v1601760171290!5m2!1sen!2sil",
  "London": 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7603959187577!2d-0.21234304925554606!3d51.517611679536884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876101f0f6b45b7%3A0x57553259f6875402!2sLadbroke%20Grove%2C%20London%2C%20UK!5e0!3m2!1sen!2sil!4v1601738605440!5m2!1sen!2sil",
"Jerusalem": 
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27133.928886743222!2d35.171887424654365!3d31.777546296355553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7b68e21bad5%3A0x897e928a3cf01a8d!2sBeit%20HaKerem%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1601738546350!5m2!1sen!2sil",
"Netherlands":
 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26249.728545135786!2d5.1633216219641955!3d52.22564399802494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66b15468c698d%3A0xae1876fe0ffc2d61!2sZilvermeeuwstraat%2C%201221%20KK%20Hilversum%2C%20Netherlands!5e0!3m2!1sen!2sil!4v1601738826034!5m2!1sen!2sil",
 "South Jerusalem":
 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27138.782490164827!2d35.18944742461845!3d31.76099829670156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7dc50a67e9f%3A0x6015a8f7d55649dd!2sKatamon%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1601760270748!5m2!1sen!2sil",
"Tel-Aviv":
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27034.94149488368!2d34.81908452538655!3d32.113370989420616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d49be654c59fd%3A0xf3f7213077689d06!2sRamat%20HaHayal%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1601758666173!5m2!1sen!2sil"
}

let press_next = document.getElementById("toNext");
let press_previous = document.getElementById("toPrevious");

function hidePrev() {
  if (index <= 0) {
    press_previous.style.visibility = "hidden";
  }
  else {
    press_previous.style.visibility = "visible";
  }
}

function hideNext() {
  if (index >= list_size - 1) {
    press_next.style.visibility = "hidden";
  }
  else {
    press_next.style.visibility = "visible";
  }
}

function show() {
  let city = list[index].innerText;
  console.log (`index: ${index} city: ${city}`);
  
  hidePrev()
  hideNext()
  let iframe = document.getElementById("location-iframe");
  iframe.src = linkByCity[city]; //current city name

}

function init() { //it'actually a mistake, copied from google, can call show() in window.
  show()
}

/*  */


function next() {
  
  
  if (index >= list_size - 1) {
    return;
  }
  index = index + 1;
  show()
}

function previous(){
  if (index <= 0) {
      return;
  }
  index = index - 1;
  show()
}

init();