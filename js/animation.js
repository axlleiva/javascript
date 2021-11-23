var div = $("div");

$(document).ready(function(){
  $(".izquierda").click(function(){ 
    div.fadeOut("slow");
    div.animate({left: '100px',
    height:'150px',
    width:'150px'},"slow");
    
    div.fadeIn("slow");
    
    
  })
  $(".abajo").click(function(){
    div.fadeOut()
    .animate({top: '150px',
    left:'50px',
    height:'150px',
    width:'150px'},"slow")
    .fadeIn("slow")
    .delay(800).animate({
    height:'100px',
    width:'100px'
    }).fadeIn()
  })
 
})