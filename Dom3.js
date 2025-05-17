//  access multiple html tag  at a same time
var h = document.querySelectorAll("h1");
console.log(h);
 h.forEach(function(e){
    console.log(e)
 })