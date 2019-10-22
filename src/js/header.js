let mobile = false;
$('.toggle-btn__open-js').on('click', function () {
    $(this).addClass('toggle-btn_none');
    $('.toggle-btn__close-js').removeClass('toggle-btn_none');
    $('.menu-list-js').removeClass('menu-list_close').addClass('menu-list_mob-open');
});

$('.toggle-btn__close-js').on('click', function () {
    $(this).addClass('toggle-btn_none');
    $('.toggle-btn__open-js').removeClass('toggle-btn_none');
    $('.menu-list-js').removeClass('menu-list_mob-open').addClass('menu-list_close');
});

$(window).on('resize', function() {
    if ($(window).width() <= 480) {
        mobile = true;
        hideMobileMenu();
        showBtnOpen();
    } else {
        mobile = false;
        showMobileMenu();
        hideBtnOpen();
        hideBtnClose();
        $('.toggle-btn__open-js').removeClass('toggle-btn_none');
    }
});
$(window).on('load', function() {
    if ($(window).width() <= 480) {
        mobile = true;
    }
    if (mobile === true) {
        showBtnOpen();
        hideMobileMenu();
    }
});

hideMobileMenu = function () {
    $('.menu-list-js').addClass('menu-list_close').removeClass('menu-list_open');

};
showMobileMenu = function () {
    $('.menu-list-js').addClass('menu-list_open').removeClass('menu-list_close').removeClass('menu-list_mob-open');
};

showBtnOpen = function () {
    $('.toggle-btn__open-js').addClass('toggle-btn_open');
};

hideBtnOpen = function () {
    $('.toggle-btn__open-js').removeClass('toggle-btn_open');
};

hideBtnClose = function () {
    $('.toggle-btn__close-js').addClass('toggle-btn_none');
};

// плавный скролл к секциям
$('.btn-scroll-js').on('click',function (e) {
    if (mobile === true) {
        $('.toggle-btn__close-js').addClass('toggle-btn_none');
        $('.toggle-btn__open-js').removeClass('toggle-btn_none');
        $('.menu-list-js').removeClass('menu-list_mob-open').addClass('menu-list_close');
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 600, 'swing', function () {
        });
    } else {
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 600, 'swing', function () {
        });
    }
});
