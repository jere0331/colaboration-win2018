
$(document).ready(function(){
    
    $('#btn1').click(function(){
        $('#box1').toggle(3000);
    })
    
    $('#btn2').click(function(){
        $('#box2').toggle('slow');
    })
    
    $('#btn3').click(function(){
        $('#box3').toggle('slow');
    })
    
    
    $('#btn4').click(function(){
        $('#box4').toggle(2000);
    })
    // $('#btn4').click(function(){
    //   $('#box4').fadeIn(2000);
    // })
    
    $('#btn5').click(function(){
        $('#box5').fadeOut(3000);
    })
    $('#btn5').click(function(){
        $('#box5').fadeIn(3000);
    })
    
    $('#btn6').click(function(){
        $('#box6').fadeToggle();
    })
    
     $('#btn4').click(function(){
        $('#box4').fadeTo('slow', 0.75);
    })
    
    
    
    
    
})