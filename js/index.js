var her = document.getElementById("her"),
    bg = document.getElementById("bg"),
    ho = document.getElementById("ho"),
    ikonWrapper = document.getElementById("ikonWrapper"),
    github = document.getElementById("github"),
    mail = document.getElementById("mail"),
    mailAdr = document.getElementById("mailAdr"),
    menyTrigger = document.getElementById("menyTrigger");

var data = [
  { text: ["R", "G", "N", "R"], class: "red"},
  { text: ["R", "G", "N", "R"], class: "blue"},
  { text: ["R", "G", "N", "R"], class: "green"},
  { text: ["R", "G", "N", "R"], class: "gray"}
]

var genNum = function(end, start){
      return Math.floor(Math.random() * (end - start)) + start;
    }

var num = genNum(data.length, 0);

var putIt = function(el, cnt, time){
  setTimeout(function(){el.innerHTML += cnt }, time)
}

var hallo = function(ar, cl, el, bg){
  el.innerHTML = "";
  this.ar = ar;
  this.el = el;
  this.time = 0;
  bg.classList = "";
  bg.classList = cl;
  var time = 500;
  for (var i = 0; i < ar.length; i++){
      time += 150
      putIt(el, ar[i], time);
    };

}

hallo(data[num].text, data[num].class, her, bg);
console.log("num: " + num + " and data.length: " + data.length)
ho.classList = "nopacity";

setTimeout(function(){
  ho.classList = "opacity";
}, 500);
/*setTimeout(function(){
  menyTrigger.classList = "opacity";
}, 2250);*/

setTimeout(function(){
  github.classList.remove("nopacity");
  github.classList.add("opacity");
}, 2000)
setTimeout(function(){
  mail.classList.remove("nopacity");
  mail.classList.add("opacity");
}, 2600)

var clickState = false;

menyTrigger.addEventListener("click", function(){
  if(clickState){
    clickState = false;
  } else {
    clickState = true;
  }
  menyTrigger.classList.remove("hover");
  menyTrigger.classList.toggle("clicked");

  setTimeout(function(){
      meny.classList.toggle("clicked");
      menyUl.classList.toggle("clicked");

  }, 200);
  setTimeout(function(){
      menyUl.classList.toggle("clicked");

  }, 300);
  wrapper.classList.toggle("clicked");
});
menyTrigger.addEventListener("mouseenter", function(){
  if(!clickState){
    menyTrigger.classList.add("hover");
  }
});
menyTrigger.addEventListener("mouseleave", function(){
  if(!clickState){
    menyTrigger.classList.remove("hover");
  }
});


mail.addEventListener("click", function(){
  mailAdr.classList.toggle("nopacity");
  mailAdr.classList.toggle("opacity");
  mailAdr.classList.toggle("mailPos");
})
