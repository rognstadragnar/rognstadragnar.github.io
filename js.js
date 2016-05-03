$(document).ready(function(){
var hei = ["H", "e", "i", "."]
var her = document.getElementById("her")
var kontakther = document.getElementById("kontakther")
var index = 0

function putIt(el, cnt, time){
  setTimeout(function(){el.innerHTML += cnt }, time)
}

function hallo(ar, el){
  this.ar = ar
  this.el = el
  var time = 0
  for (var i = 0; i < ar.length; i++){
      time += 150
      putIt(el, ar[i], time);
      console.log(ar[i])
    };
  
}

function asd(){
  $(".mail").toggleClass("opacity");
}
start()

function start(){
  $(".mail").removeClass("opacity");
  if (her.length > 3){
    hei.innerHTML = " ";
  }
  setTimeout(function(){ hallo(hei, her); }, 2500)
  setTimeout(function(){ asd(); }, 5500)
  setTimeout(function(){ yo(kontakther);}, 5500)
}

function yo(el){
 // el.innerHTML = "<p><a href='#'> rognstad.ragnar@gmail.com</a></p>"
}});
