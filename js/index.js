var her = document.getElementById("her"),
    bg = document.getElementById("bg"),
    ho = document.getElementById("ho"),
    ikonWrapper = document.getElementById("ikonWrapper"),
    github = document.getElementById("github"),
    mail = document.getElementById("mail"),
    mailAdr = document.getElementById("mailAdr");
var data = [
  { text: ["R", "G", "N", "R"], class: "red"},
  { text: ["R", "G", "N", "R"], class: "blue"},
  { text: ["R", "G", "N", "R"], class: "green"},
  { text: ["R", "G", "N", "R"], class: "gray"}
];

var genNum = function(end, start){
      return Math.floor(Math.random() * (end - start)) + start;
};

var num = genNum(data.length, 0);

var putIt = function(el, cnt, time){
  setTimeout(function(){el.innerHTML += cnt;}, time);
};

var hallo = function(ar, cl, el, bg){
  el.innerHTML = "";
  this.ar = ar;
  this.el = el;
  this.time = 0;
  bg.classList.add(cl);
  var time = 500;
  for (var i = 0; i < ar.length; i++){
      time += 150;
      putIt(el, ar[i], time);
    }
};

hallo(data[num].text, data[num].class, her, bg);


setTimeout(function(){
  ho.classList.remove("nopacity");
  ho.classList.add("opacity");
}, 500);

setTimeout(function(){
  github.classList.remove("nopacity");
  github.classList.add("opacity");
}, 2000);
setTimeout(function(){
  mail.classList.remove("nopacity");
  mail.classList.add("opacity");
}, 2600);



mail.addEventListener("click", function(){
  mailAdr.classList.toggle("nopacity");
  mailAdr.classList.toggle("opacity");
  mailAdr.classList.toggle("mailPos");
});
