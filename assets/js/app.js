var slider = $(".slider");
var next = $("#btn-next");
var prev = $("#btn-prev");

$(".slider .container-img:last").insertBefore(".slider .container-img:first");

slider.css("margin-left", "-"+100+"%");

function moveRight(){
  slider.animate({marginLeft:"-"+200+"%"},700, function(){
    $(".slider .container-img:first").insertAfter(".container-img:last");
    slider.css("margin-left", "-"+100+"%");
  });
}

next.on("click", function(){
  moveRight();
});


function moveLeft(){
  slider.animate({marginLeft:0},700, function(){
    $(".slider .container-img:last").insertBefore(".container-img:first");
    slider.css("margin-left", "-"+100+"%");
  });
}

prev.on("click", function(){
  moveLeft();
});

function autoPlay(){
  interval = setInterval(function(){
    moveRight();
  }, 5000);
}

autoPlay();
