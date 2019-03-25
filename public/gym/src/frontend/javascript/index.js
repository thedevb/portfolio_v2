$(document).ready(function(){

    ScrollReveal().reveal('.my-card', { duration: 500 });
    ScrollReveal().reveal('.my-card1', { origin: 'left' });
    ScrollReveal().reveal('.my-card3', { origin: 'right' });
    ScrollReveal().reveal('.my-card2', { origin: 'bottom' });
    ScrollReveal().reveal('.my-card', {distance: '60px' });
    

    //ARRUMAR O SCROLL QUANDO NA MEDIA QUERY
    $("#input-check").change(function() {
        if($("#input-check").is(':checked')){
            $("nav").css({position: 'fixed', zIndex: '100'});
        }else{
            $(this).parent().parent().parent().css('position', 'block');
        }
      });
});