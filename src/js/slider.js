$(document).ready(function(){
    $('.slider-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev slider__aktiv-arrow" title="Назад"></div>',
        nextArrow: '<div class="slick-next slider__aktiv-arrow" title="Вперед"></div>',
        fade: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                }
            }
        ]
    });
});
