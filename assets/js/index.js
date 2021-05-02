$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
            $('.txt-container').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
            $('.txt-container').removeClass("sticky");
        }
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });
});