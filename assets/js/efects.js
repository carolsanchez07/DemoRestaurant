$(document).ready(function() {

    //Efecto navbar
    $('.menu a').each(function(index,element){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            'top':'0'
        },1500 + (index*500))
    });  


    //Header

    if( $(window).width() > 800 ){
        $('header .texts').css({
            opacity:0,
            marginTop:0
        });

        $('header .texts').animate({
            opacity:1,
            marginTop:'-52px'
        }, 1500);
    };

    //Scroll Navbar 
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#about').on('click', function(){
        $('html, body').animate({
            scrollTop: 380
        }, 500)
    });

    $('#menu').on('click', function(){
        $('html, body').animate({
            scrollTop: menu
        }, 500)
    });

    $('#galery').on('click', function(){
        $('html, body').animate({
            scrollTop: galeria
        }, 500)
    });

    $('#location').on('click', function(){
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500)
    });

   
})