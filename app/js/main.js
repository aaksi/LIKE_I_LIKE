
$(function(){
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.full-page',
        scrollOverflow: true,
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

   

});



// $('.services__item-list').toggleClass('services__item-list--active')
// $(".services__item-list--active").css({
//     "opacity":"0",
//     "display":"block",
// }).show().animate({opacity:1})