jQuery(document).ready(function($){

    function navigation_show(button, menu) {
        $(menu).hide();
        $(button).click(function(){
            if ( $(menu).is(':visible')){
                $(menu).slideUp();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $(menu).slideDown();
            }
        });
    }

    navigation_show('#nav-toggle','#menu-categs');

    function menu_nested(menu_id) {
        $(menu_id).find('ul').hide();
        $(menu_id).find('.menu-item--has-children>a').click(function(e){
            e.preventDefault();
            $(this).siblings('.sub-menu').slideDown();
            if ( $(this).parent().hasClass('menu-item--active') ) {
                $(this).siblings('.sub-menu').stop().slideUp();
                $(this).parent().removeClass('menu-item--active');
            } else {
                $(this).parent().addClass('menu-item--active').siblings('.menu-item--active').removeClass('expanded').find('.sub-menu').stop().slideUp();
                $(this).siblings('.sub-menu').stop().slideDown();
            }
        });
    }
    menu_nested('.menu-categs');



    /* LISTING VIEW---*/
    function unsquare() {
        $('#card-list')
            .removeClass('card-list-square')
            .find('.card-list-item-square')
            .removeClass('card-list-item-square')
            .addClass('card-list-item');
        $('#view-type-list').addClass('active').siblings().removeClass('active');
    }

    function view_type() {
        $('#view-type-list').click(function(e){
            e.preventDefault();
            unsquare();
        });

        $('#view-type-square').click(function(e){
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $('#card-list')
                .addClass('card-list-square')
                .find('.card-list-item')
                .removeClass('card-list-item')
                .addClass('card-list-item-square');
        });        
    }
    view_type();

    if( $(window).width() < 992) {
        unsquare();
    }

    $(window).resize(function(){
        if( $(window).width() < 992) {
            unsquare();
        }        
    });
    /* --LISTING VIEW*/


    /*FILTER--*/
    function filter_toggle() {
        $('#filter-extra').hide();
        $('#filter-extra-btn').click(function(){
            if ( $('#filter-extra').is(':visible')){
                $('#filter-extra').slideUp();
                $(this)
                    .removeClass('active')
                    .find('span')
                    .text('Показать Весь Фильтр')
                ;
            } else {
                $('#filter-extra').slideDown();
                $(this).addClass('active')
                    .find('span')
                    .text('Скрыть Весь Фильтр')
                ;
            }
        });
    }
    
    filter_toggle();
    /*FILTER--*/


    /*CAROUSEL/SLIDER*/
    $('#slider').slick({
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      responsive:true,
      prevArrow: "<button type='button' type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
      nextArrow: "<button type='button' type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>"
    });
    $('#carousel-gallery').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        responsive:true,        
        prevArrow: "<button type='button' type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>"        
    });

    /*BANNER*/
    /*Padding*/
    function setPadding() {
        if ( ($(window).width() > 992) && ($('#bnr').length) ) {
            $('#bnr').show();
            var spaceWidth = $('.container').offset();
            var bannerWidth = $('#bnr').width();
            $('.main-content .container').css('padding-left', (bannerWidth - spaceWidth.left + 15));
        } else {
            $('.main-content .container').css('padding-left', 15);
        }
    }    
    setPadding();

    $(window).resize(function(){
        setPadding();
    });

    /*Bottom positioning*/
    $(document).on('scroll resize', function() {
        var distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
        
        if ( $(window).width() > 992) {
            if(distanceFromBottom < $('#footer').outerHeight()) {
                $('#bnr').css('bottom', $('#footer').outerHeight() + 40)
            } else {
                $('#bnr').css('bottom', 0 )
            }
        }

    });   

    /*Close button*/
    $('#bnr-close').click(function(){
        $('#bnr').fadeOut();
    });
    /*--BANNER*/


    /* TABS */
    function tabs() {
        $('.tabs-tabcontent').hide();
        $('.tabs-tabcontent:first-child').show();
        $('.tab-button a').click(function(e) {
            e.preventDefault();
            if ( ! $(this).parent('li').hasClass('tab-button-active')) {
                $(this).parents('.tabs-buttons').siblings('.tabs-wrapper').find('.tabs-tabcontent').hide();
                $(this).parents('.tabs-buttons').find('.tab-button-active').removeClass('tab-button-active');
                $(this).parent().addClass('tab-button-active');
                var clicked = $(this).attr('href');
                $(clicked).fadeIn('fast');
            }
        });
    }
    tabs();

    $('.slick-arrow').click(function(e){
        e.stopPropagation();
    });
});