var hei = ["H", "a", "l", "l", "o", "!"],
    her = document.getElementById("her");

function putIt(el, cnt, time){
  setTimeout(function(){el.innerHTML += cnt }, time)
}

function hallo(ar, el){
  this.ar = ar
  this.el = el
  this.time = 0
  for (var i = 0; i < ar.length; i++){
      time += 150
      putIt(el, ar[i], time);
    };
  
}

setTimeout(function(){ hallo(hei, her); }, 500)
