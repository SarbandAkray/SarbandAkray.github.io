//import Typed from 'typed.js';
$(document).ready(() => {
  $(".firstscroll").hide();
    setTimeout(() => {
        $(".loading").remove();
        
        new Typed('.typing', {
            strings: ["Hey! my name is Sarband scroll down to know more about me"],
            typeSpeed: 25,
            onComplete: () =>{
              $(".firstscroll").show();
            }
        });
        
    }, 2500);

  
});


//humberger menu 
var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");
McButton.click( function() {
  $(".terminal").toggleClass("hide");
  $(this).toggleClass("active");
  
  if (McButton.hasClass("active")) {
    McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
          .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    McButton.velocity("reverse");
    McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
          .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
    McBar1.velocity("reverse", {delay: 800});
  }
});


//title animation
anime({
    targets: '.path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});


