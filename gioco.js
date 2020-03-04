
// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }
var mode = 0,x,timeout = 0,count = 0;

$(document).ready(function (){
  $("img").css("left", "-10000000px")
  $("img").css("display", "inline")
  $(document).keydown(function(objEvent) {
    if (objEvent.keyCode == 9) {  //tab pressed
        objEvent.preventDefault(); // stops its action
    }
})
})

function moveBtn(){
  if(mode == 1){
    var width = $('body').width();
    var height = $('body').height();
    $("#hide_id").attr('style','cursor: none ; position: fixed; bottom:'+ Math.floor(Math.random() * height)   + 'px; left:'+ Math.floor(Math.random() * width) + 'px; transition: none !important;  border: none !important;');
    if(timeout != 0) x = setTimeout(moveBtn,timeout)
  }
  else clearTimeout(x)
}

function start(){
  $(document).width
  console.log('in start');
  $("img").css("left", "-10000000px")
  $("#body").css("cursor" , "none");
  $("#body").attr('name',"start");
  count = 0;
  $("#body").attr('onclick',"count++;");
  $("#hide_id").css("cursor" , "none");
  $("#hide_id").attr('onclick','stop()');
  mode = 1;
  moveBtn();
}

function stop(){
  console.log('in stop');
  $("#body").css("cursor" , "auto");
  $("#hide_id").attr('style','cursor: auto ; position: fixed; bottom:50%; left:50%;');
  $("#body").attr('name',"stop");
  $("#hide_id").attr('onclick',"start()");
  $("img").animate({left:"0px"});
  document.getElementById('miao').play();
  mode = 0;
  moveBtn();



}
