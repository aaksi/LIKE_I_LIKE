
$(function(){

    

    $("#phone").mask("+38 (099) 999 99 99 ");


    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.full-page',
        scrollOverflow: true,
        fixedElements: '#footer',
        normalScrollElements: '#footer',
	    menu: '#menu',
        anchors: ['top', 'info', 'portfolio', 'services',],
    });

    $('.services__item-title').on("click", function(){
        const parent = $(this).parent();

            if(parent.hasClass('services__item--active')){
                parent.removeClass('services__item--active');
            }else{
                $('.services__item').removeClass('services__item--active')
                parent.addClass('services__item--active')
            }
     
    });

    $('.project-descr__slider').slick({
        infinite: true,
        dots: true,
        prevArrow:' <button type = "button" class = "slider__btn-left slider__btn"></button>',
        nextArrow:' <button type = "button" class = "slider__btn-right slider__btn"></button>'
    });

    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:' <button type = "button" class = "slider__btn-left slider__btn"></button>',
        nextArrow:' <button type = "button" class = "slider__btn-right slider__btn"></button>'
      });
   
    

    


});



// $('.services__item-list').toggleClass('services__item-list--active')
// $(".services__item-list--active").css({
//     "opacity":"0",
//     "display":"block",
// }).show().animate({opacity:1})