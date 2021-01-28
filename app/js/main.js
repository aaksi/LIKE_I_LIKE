
$(function(){

    

    $("#phone").mask("+38 (099) 999 99 99 ");


    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        // scrollHorizontally: true,
        sectionSelector: '.full-page',
        scrollOverflow: true,
        // scrollOverflowReset: true,
        fixedElements: '#footer',
        normalScrollElements: '#footer',
	    menu: '#menu',
        anchors: ['top', 'info', 'portfolio', 'services', 'contacts', 'news', 'footer'],
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
        nextArrow:' <button type = "button" class = "slider__btn-right slider__btn"></button>',
        responsive: [
          {
            breakpoint: 901,
            settings: {
              prevArrow:false,
              nextArrow:false,
            }
          },
        
        ]
    });

    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:' <button type = "button" class = "slider__btn-left slider__btn"></button>',
        nextArrow:' <button type = "button" class = "slider__btn-right slider__btn"></button>',
        responsive: [
            {
              breakpoint: 1451,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 901,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow:false,
              nextArrow:false,
              }
            },
            {
              breakpoint: 701,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:false,
              nextArrow:false,
              }
            },
          ]
      });
   
      $('.burger__btn').on('click', function(){
        $('.burger__btn').toggleClass('burger__btn--active'),
        $('.menu').toggleClass('menu--active')
      });
    
     
    


});




// $('.services__item-list').toggleClass('services__item-list--active')
// $(".services__item-list--active").css({
//     "opacity":"0",
//     "display":"block",
// }).show().animate({opacity:1})