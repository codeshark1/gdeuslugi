jQuery(document).ready(function($){

    function navigation_show(button, menu) {
        $(menu).hide();
        $(button).click(function(){
            if ( $(menu).is(':visible')){
                $(menu).slideUp(250);
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $(menu).slideDown(250);
            }
        });
    }

    navigation_show('#nav-toggle','#menu-categs-wrapper');
    navigation_show('#chatmenu-toggle','#chatmenu');

    function menu_nested(menu_id) {
        $(menu_id).find('ul').not('.current-menu-item ul').hide();
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

    /* HEADER SEARCH */
    $('#searchform .search-field').focus(function(){
        if ( $(window).width() <= 750) {
            //$('#searchform').css('width', 'auto');
            $('#searchform').addClass('absolute');
            console.log( 'click.registered' );
        }
    });

    $('#searchform .search-field').focusout(function(){        
        //$('#searchform').css('width', '33%');
        $('#searchform').removeClass('absolute');
    });

    /* --HEADER SEARCH */


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




    /* TABS /-DEL */ 
/*     function tabs() {
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
    tabs(); */

    $('.slick-arrow').click(function(e){
        e.stopPropagation();
    });


    /* COMPARE LINK VISUALS */
/*     $('.link-compare').click(function(e){
        e.preventDefault();
    });
    tippy('.link-compare', {
        trigger: 'click',
        animation: 'perspective',
        onShown(instance) {                            
            function delayHide() {
                instance.hide();
            }
            setTimeout(delayHide, 2000);
        }
    });   */
    
    
    $('.card-dash-master-orders-note').hide();
    $('.card-dash-master-orders').hide();        
    $('.card-dash-check-tablink').click(function(){
        var tab_id = $(this).attr('data-tab');

        if(tab_id == 'card-dash-master-orders') {
            if( $(this).parents('.card-dash-check-text').find('.card-dash-master-orders').is(':visible') ) {
                $(this).parents('.card-dash-check-text').find('.card-dash-master-orders').slideUp('fast');
                $(this).removeClass('active');
                $(this).siblings().removeClass('active');
            } else {
                $(this).parents('.card-dash-check-text').find('.card-dash-master-orders').slideDown('fast');
                $(this).addClass('active').siblings().removeClass('active');
            }            
        } else if (tab_id == 'card-dash-master-orders-note') {
            if( $(this).parents('.card-dash-check-text').find('.card-dash-master-orders-note').is(':visible') ) {
                $(this).parents('.card-dash-check-text').find('.card-dash-master-orders-note').slideUp('fast');
                $(this).removeClass('active');
                $(this).siblings().addClass('active');
            } else {
                $(this).parents('.card-dash-check-text').find('.card-dash-master-orders').show().find('.card-dash-master-orders-note').slideDown('fast');                
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            } 
        }  
    });

    $('#link-showphone').click(function(){
        $(this).hide();
        $('#master-phone').show();
    });


    //Custom checkboxes/radios:
    function setupLabel() {
        if ($('label.check-custom input').length) {
            $('label.check-custom').each(function(){
                $(this).removeClass('checked');
            });
            $('label.check-custom input:checked').each(function(){
                $(this).parent('label').addClass('checked');
            });
        }
    }
    setupLabel();
    $('label.check-custom').click(function(){
        setupLabel();
    });    
});