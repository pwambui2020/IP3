
$(document).ready(function(){
    $("#img1").hover(function(){
        console.log('any');
      $("#design-div").toggle(1000);
    });
  });
  $(document).ready(function(){
    $("#img2").hover(function(){
        console.log('any');
      $("#development-div").toggle(1000);
    });
  });
  $(document).ready(function(){
    $("#img3").hover(function(){
        console.log('any');
      $("#planning-div").toggle(1000);
    });
 $('#port1').hover(function(){
     $('.porttext').toggle();
 })
});

$(document).ready(function(){
  $("#port1").hover(function(){
  document.getElementById('porttext1').style.zIndex="1";
  })
  
  $("#port2").hover(function(){
  document.getElementById('porttext2').style.zIndex="1";
  })


  $("#port3").hover(function(){
  document.getElementById('porttext3').style.zIndex="1";
  })


  $("#port4").hover(function(){
  document.getElementById('porttext4').style.zIndex="1";
  })


  $("#port5").hover(function(){
  document.getElementById('porttext5').style.zIndex="1";
  })


  $("#port6").hover(function(){
  document.getElementById('porttext6').style.zIndex="1";
  })

  $("#port7").hover(function(){
    document.getElementById('porttext7').style.zIndex="1";
    })

    $("#port8").hover(function(){
      document.getElementById('porttext8').style.zIndex="1";
      })
});
