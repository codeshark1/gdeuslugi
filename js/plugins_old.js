// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */
!function(){"use strict";function t(t,e){var i;for(i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function e(t){if(!this||this.find!==e.prototype.find)return new e(t);if(this.length=0,t)if("string"==typeof t&&(t=this.find(t)),t.nodeType||t===t.window)this.length=1,this[0]=t;else{var i=t.length;for(this.length=i;i;)this[i-=1]=t[i]}}e.extend=t,e.contains=function(t,e){do{if((e=e.parentNode)===t)return!0}while(e);return!1},e.parseJSON=function(t){return window.JSON&&JSON.parse(t)},t(e.prototype,{find:function(t){var i=this[0]||document;return"string"==typeof t&&(t=i.querySelectorAll?i.querySelectorAll(t):"#"===t.charAt(0)?i.getElementById(t.slice(1)):i.getElementsByTagName(t)),new e(t)},hasClass:function(t){return!!this[0]&&new RegExp("(^|\\s+)"+t+"(\\s+|$)").test(this[0].className)},addClass:function(t){for(var e,i=this.length;i;){if(i-=1,!(e=this[i]).className)return e.className=t,this;if(this.hasClass(t))return this;e.className+=" "+t}return this},removeClass:function(t){for(var e,i=new RegExp("(^|\\s+)"+t+"(\\s+|$)"),s=this.length;s;)(e=this[s-=1]).className=e.className.replace(i," ");return this},on:function(t,e){for(var i,s,n=t.split(/\s+/);n.length;)for(t=n.shift(),i=this.length;i;)(s=this[i-=1]).addEventListener?s.addEventListener(t,e,!1):s.attachEvent&&s.attachEvent("on"+t,e);return this},off:function(t,e){for(var i,s,n=t.split(/\s+/);n.length;)for(t=n.shift(),i=this.length;i;)(s=this[i-=1]).removeEventListener?s.removeEventListener(t,e,!1):s.detachEvent&&s.detachEvent("on"+t,e);return this},empty:function(){for(var t,e=this.length;e;)for(t=this[e-=1];t.hasChildNodes();)t.removeChild(t.lastChild);return this},first:function(){return new e(this[0])}}),"function"==typeof define&&define.amd?define(function(){return e}):(window.blueimp=window.blueimp||{},window.blueimp.helper=e)}(),function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper"],t):(window.blueimp=window.blueimp||{},window.blueimp.Gallery=t(window.blueimp.helper||window.jQuery))}(function(t){"use strict";function e(t,i){return void 0===document.body.style.maxHeight?null:this&&this.options===e.prototype.options?void(t&&t.length?(this.list=t,this.num=t.length,this.initOptions(i),this.initialize()):this.console.log("blueimp Gallery: No or empty list provided as first argument.",t)):new e(t,i)}return t.extend(e.prototype,{options:{container:"#blueimp-gallery",slidesContainer:"div",titleElement:"h3",displayClass:"blueimp-gallery-display",controlsClass:"blueimp-gallery-controls",singleClass:"blueimp-gallery-single",leftEdgeClass:"blueimp-gallery-left",rightEdgeClass:"blueimp-gallery-right",playingClass:"blueimp-gallery-playing",slideClass:"slide",slideLoadingClass:"slide-loading",slideErrorClass:"slide-error",slideContentClass:"slide-content",toggleClass:"toggle",prevClass:"prev",nextClass:"next",closeClass:"close",playPauseClass:"play-pause",typeProperty:"type",titleProperty:"title",altTextProperty:"alt",urlProperty:"href",srcsetProperty:"urlset",displayTransition:!0,clearSlides:!0,stretchImages:!1,toggleControlsOnReturn:!0,toggleControlsOnSlideClick:!0,toggleSlideshowOnSpace:!0,enableKeyboardNavigation:!0,closeOnEscape:!0,closeOnSlideClick:!0,closeOnSwipeUpOrDown:!0,emulateTouchEvents:!0,stopTouchEventsPropagation:!1,hidePageScrollbars:!0,disableScroll:!0,carousel:!1,continuous:!0,unloadElements:!0,startSlideshow:!1,slideshowInterval:5e3,index:0,preloadRange:2,transitionSpeed:400,slideshowTransitionSpeed:void 0,event:void 0,onopen:void 0,onopened:void 0,onslide:void 0,onslideend:void 0,onslidecomplete:void 0,onclose:void 0,onclosed:void 0},carouselOptions:{hidePageScrollbars:!1,toggleControlsOnReturn:!1,toggleSlideshowOnSpace:!1,enableKeyboardNavigation:!1,closeOnEscape:!1,closeOnSlideClick:!1,closeOnSwipeUpOrDown:!1,disableScroll:!1,startSlideshow:!0},console:window.console&&"function"==typeof window.console.log?window.console:{log:function(){}},support:function(e){function i(){var t,i,s=n.transition;document.body.appendChild(e),s&&(t=s.name.slice(0,-9)+"ransform",void 0!==e.style[t]&&(e.style[t]="translateZ(0)",i=window.getComputedStyle(e).getPropertyValue(s.prefix+"transform"),n.transform={prefix:s.prefix,name:t,translate:!0,translateZ:!!i&&"none"!==i})),void 0!==e.style.backgroundSize&&(n.backgroundSize={},e.style.backgroundSize="contain",n.backgroundSize.contain="contain"===window.getComputedStyle(e).getPropertyValue("background-size"),e.style.backgroundSize="cover",n.backgroundSize.cover="cover"===window.getComputedStyle(e).getPropertyValue("background-size")),document.body.removeChild(e)}var s,n={touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},o={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}};for(s in o)if(o.hasOwnProperty(s)&&void 0!==e.style[s]){n.transition=o[s],n.transition.name=s;break}return document.body?i():t(document).on("DOMContentLoaded",i),n}(document.createElement("div")),requestAnimationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,cancelAnimationFrame:window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame,initialize:function(){if(this.initStartIndex(),!1===this.initWidget())return!1;this.initEventListeners(),this.onslide(this.index),this.ontransitionend(),this.options.startSlideshow&&this.play()},slide:function(t,e){window.clearTimeout(this.timeout);var i,s,n,o=this.index;if(o!==t&&1!==this.num){if(e||(e=this.options.transitionSpeed),this.support.transform){for(this.options.continuous||(t=this.circle(t)),i=Math.abs(o-t)/(o-t),this.options.continuous&&(s=i,(i=-this.positions[this.circle(t)]/this.slideWidth)!==s&&(t=-i*this.num+t)),n=Math.abs(o-t)-1;n;)n-=1,this.move(this.circle((t>o?t:o)-n-1),this.slideWidth*i,0);t=this.circle(t),this.move(o,this.slideWidth*i,e),this.move(t,0,e),this.options.continuous&&this.move(this.circle(t-i),-this.slideWidth*i,0)}else t=this.circle(t),this.animate(o*-this.slideWidth,t*-this.slideWidth,e);this.onslide(t)}},getIndex:function(){return this.index},getNumber:function(){return this.num},prev:function(){(this.options.continuous||this.index)&&this.slide(this.index-1)},next:function(){(this.options.continuous||this.index<this.num-1)&&this.slide(this.index+1)},play:function(t){var e=this;window.clearTimeout(this.timeout),this.interval=t||this.options.slideshowInterval,this.elements[this.index]>1&&(this.timeout=this.setTimeout(!this.requestAnimationFrame&&this.slide||function(t,i){e.animationFrameId=e.requestAnimationFrame.call(window,function(){e.slide(t,i)})},[this.index+1,this.options.slideshowTransitionSpeed],this.interval)),this.container.addClass(this.options.playingClass)},pause:function(){window.clearTimeout(this.timeout),this.interval=null,this.cancelAnimationFrame&&(this.cancelAnimationFrame.call(window,this.animationFrameId),this.animationFrameId=null),this.container.removeClass(this.options.playingClass)},add:function(t){var e;for(t.concat||(t=Array.prototype.slice.call(t)),this.list.concat||(this.list=Array.prototype.slice.call(this.list)),this.list=this.list.concat(t),this.num=this.list.length,this.num>2&&null===this.options.continuous&&(this.options.continuous=!0,this.container.removeClass(this.options.leftEdgeClass)),this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass),e=this.num-t.length;e<this.num;e+=1)this.addSlide(e),this.positionSlide(e);this.positions.length=this.num,this.initSlides(!0)},resetSlides:function(){this.slidesContainer.empty(),this.unloadAllSlides(),this.slides=[]},handleClose:function(){var t=this.options;this.destroyEventListeners(),this.pause(),this.container[0].style.display="none",this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass),t.hidePageScrollbars&&(document.body.style.overflow=this.bodyOverflowStyle),this.options.clearSlides&&this.resetSlides(),this.options.onclosed&&this.options.onclosed.call(this)},close:function(){function t(i){i.target===e.container[0]&&(e.container.off(e.support.transition.end,t),e.handleClose())}var e=this;this.options.onclose&&this.options.onclose.call(this),this.support.transition&&this.options.displayTransition?(this.container.on(this.support.transition.end,t),this.container.removeClass(this.options.displayClass)):this.handleClose()},circle:function(t){return(this.num+t%this.num)%this.num},move:function(t,e,i){this.translateX(t,e,i),this.positions[t]=e},translate:function(t,e,i,s){var n=this.slides[t].style,o=this.support.transition,a=this.support.transform;n[o.name+"Duration"]=s+"ms",n[a.name]="translate("+e+"px, "+i+"px)"+(a.translateZ?" translateZ(0)":"")},translateX:function(t,e,i){this.translate(t,e,0,i)},translateY:function(t,e,i){this.translate(t,0,e,i)},animate:function(t,e,i){if(i)var s=this,n=(new Date).getTime(),o=window.setInterval(function(){var a=(new Date).getTime()-n;if(a>i)return s.slidesContainer[0].style.left=e+"px",s.ontransitionend(),void window.clearInterval(o);s.slidesContainer[0].style.left=(e-t)*(Math.floor(a/i*100)/100)+t+"px"},4);else this.slidesContainer[0].style.left=e+"px"},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},onresize:function(){this.initSlides(!0)},onmousedown:function(t){t.which&&1===t.which&&"VIDEO"!==t.target.nodeName&&"AUDIO"!==t.target.nodeName&&(t.preventDefault(),(t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchstart(t))},onmousemove:function(t){this.touchStart&&((t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchmove(t))},onmouseup:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},onmouseout:function(e){if(this.touchStart){var i=e.target,s=e.relatedTarget;s&&(s===i||t.contains(i,s))||this.onmouseup(e)}},ontouchstart:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e=(t.originalEvent||t).touches[0];this.touchStart={x:e.pageX,y:e.pageY,time:Date.now()},this.isScrolling=void 0,this.touchDelta={}},ontouchmove:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e,i,s=(t.originalEvent||t).touches[0],n=(t.originalEvent||t).scale,o=this.index;if(!(s.length>1||n&&1!==n))if(this.options.disableScroll&&t.preventDefault(),this.touchDelta={x:s.pageX-this.touchStart.x,y:s.pageY-this.touchStart.y},e=this.touchDelta.x,void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(e)<Math.abs(this.touchDelta.y)),this.isScrolling)this.translateY(o,this.touchDelta.y+this.positions[o],0);else for(t.preventDefault(),window.clearTimeout(this.timeout),this.options.continuous?i=[this.circle(o+1),o,this.circle(o-1)]:(this.touchDelta.x=e/=!o&&e>0||o===this.num-1&&e<0?Math.abs(e)/this.slideWidth+1:1,i=[o],o&&i.push(o-1),o<this.num-1&&i.unshift(o+1));i.length;)o=i.pop(),this.translateX(o,e+this.positions[o],0)},ontouchend:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var e,i,s,n,o,a=this.index,r=this.options.transitionSpeed,l=this.slideWidth,h=Number(Date.now()-this.touchStart.time)<250,d=h&&Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.x)>l/2,c=!a&&this.touchDelta.x>0||a===this.num-1&&this.touchDelta.x<0,u=!d&&this.options.closeOnSwipeUpOrDown&&(h&&Math.abs(this.touchDelta.y)>20||Math.abs(this.touchDelta.y)>this.slideHeight/2);this.options.continuous&&(c=!1),e=this.touchDelta.x<0?-1:1,this.isScrolling?u?this.close():this.translateY(a,0,r):d&&!c?(i=a+e,s=a-e,n=l*e,o=-l*e,this.options.continuous?(this.move(this.circle(i),n,0),this.move(this.circle(a-2*e),o,0)):i>=0&&i<this.num&&this.move(i,n,0),this.move(a,this.positions[a]+n,r),this.move(this.circle(s),this.positions[this.circle(s)]+n,r),a=this.circle(s),this.onslide(a)):this.options.continuous?(this.move(this.circle(a-1),-l,r),this.move(a,0,r),this.move(this.circle(a+1),l,r)):(a&&this.move(a-1,-l,r),this.move(a,0,r),a<this.num-1&&this.move(a+1,l,r))},ontouchcancel:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},ontransitionend:function(t){var e=this.slides[this.index];t&&e!==t.target||(this.interval&&this.play(),this.setTimeout(this.options.onslideend,[this.index,e]))},oncomplete:function(e){var i,s=e.target||e.srcElement,n=s&&s.parentNode;s&&n&&(i=this.getNodeIndex(n),t(n).removeClass(this.options.slideLoadingClass),"error"===e.type?(t(n).addClass(this.options.slideErrorClass),this.elements[i]=3):this.elements[i]=2,s.clientHeight>this.container[0].clientHeight&&(s.style.maxHeight=this.container[0].clientHeight),this.interval&&this.slides[this.index]===n&&this.play(),this.setTimeout(this.options.onslidecomplete,[i,n]))},onload:function(t){this.oncomplete(t)},onerror:function(t){this.oncomplete(t)},onkeydown:function(t){switch(t.which||t.keyCode){case 13:this.options.toggleControlsOnReturn&&(this.preventDefault(t),this.toggleControls());break;case 27:this.options.closeOnEscape&&(this.close(),t.stopImmediatePropagation());break;case 32:this.options.toggleSlideshowOnSpace&&(this.preventDefault(t),this.toggleSlideshow());break;case 37:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.prev());break;case 39:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.next())}},handleClick:function(e){function i(e){return t(n).hasClass(e)||t(o).hasClass(e)}var s=this.options,n=e.target||e.srcElement,o=n.parentNode;i(s.toggleClass)?(this.preventDefault(e),this.toggleControls()):i(s.prevClass)?(this.preventDefault(e),this.prev()):i(s.nextClass)?(this.preventDefault(e),this.next()):i(s.closeClass)?(this.preventDefault(e),this.close()):i(s.playPauseClass)?(this.preventDefault(e),this.toggleSlideshow()):o===this.slidesContainer[0]?s.closeOnSlideClick?(this.preventDefault(e),this.close()):s.toggleControlsOnSlideClick&&(this.preventDefault(e),this.toggleControls()):o.parentNode&&o.parentNode===this.slidesContainer[0]&&s.toggleControlsOnSlideClick&&(this.preventDefault(e),this.toggleControls())},onclick:function(t){if(!(this.options.emulateTouchEvents&&this.touchDelta&&(Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.y)>20)))return this.handleClick(t);delete this.touchDelta},updateEdgeClasses:function(t){t?this.container.removeClass(this.options.leftEdgeClass):this.container.addClass(this.options.leftEdgeClass),t===this.num-1?this.container.addClass(this.options.rightEdgeClass):this.container.removeClass(this.options.rightEdgeClass)},handleSlide:function(t){this.options.continuous||this.updateEdgeClasses(t),this.loadElements(t),this.options.unloadElements&&this.unloadElements(t),this.setTitle(t)},onslide:function(t){this.index=t,this.handleSlide(t),this.setTimeout(this.options.onslide,[t,this.slides[t]])},setTitle:function(t){var e=this.slides[t].firstChild,i=e.title||e.alt,s=this.titleElement;s.length&&(this.titleElement.empty(),i&&s[0].appendChild(document.createTextNode(i)))},setTimeout:function(t,e,i){var s=this;return t&&window.setTimeout(function(){t.apply(s,e||[])},i||0)},imageFactory:function(e,i){function s(e){if(!n){if(e={type:e.type,target:o},!o.parentNode)return l.setTimeout(s,[e]);n=!0,t(h).off("load error",s),c&&"load"===e.type&&(o.style.background='url("'+d+'") center no-repeat',o.style.backgroundSize=c),i(e)}}var n,o,a,r,l=this,h=this.imagePrototype.cloneNode(!1),d=e,c=this.options.stretchImages;return"string"!=typeof d&&(d=this.getItemProperty(e,this.options.urlProperty),a=this.getItemProperty(e,this.options.titleProperty),r=this.getItemProperty(e,this.options.altTextProperty)||a),!0===c&&(c="contain"),(c=this.support.backgroundSize&&this.support.backgroundSize[c]&&c)?o=this.elementPrototype.cloneNode(!1):(o=h,h.draggable=!1),a&&(o.title=a),r&&(o.alt=r),t(h).on("load error",s),h.src=d,o},createElement:function(e,i){var s=e&&this.getItemProperty(e,this.options.typeProperty),n=s&&this[s.split("/")[0]+"Factory"]||this.imageFactory,o=e&&n.call(this,e,i),a=this.getItemProperty(e,this.options.srcsetProperty);return o||(o=this.elementPrototype.cloneNode(!1),this.setTimeout(i,[{type:"error",target:o}])),a&&o.setAttribute("srcset",a),t(o).addClass(this.options.slideContentClass),o},loadElement:function(e){this.elements[e]||(this.slides[e].firstChild?this.elements[e]=t(this.slides[e]).hasClass(this.options.slideErrorClass)?3:2:(this.elements[e]=1,t(this.slides[e]).addClass(this.options.slideLoadingClass),this.slides[e].appendChild(this.createElement(this.list[e],this.proxyListener))))},loadElements:function(t){var e,i=Math.min(this.num,2*this.options.preloadRange+1),s=t;for(e=0;e<i;e+=1)s+=e*(e%2==0?-1:1),s=this.circle(s),this.loadElement(s)},unloadElements:function(t){var e,i;for(e in this.elements)this.elements.hasOwnProperty(e)&&(i=Math.abs(t-e))>this.options.preloadRange&&i+this.options.preloadRange<this.num&&(this.unloadSlide(e),delete this.elements[e])},addSlide:function(t){var e=this.slidePrototype.cloneNode(!1);e.setAttribute("data-index",t),this.slidesContainer[0].appendChild(e),this.slides.push(e)},positionSlide:function(t){var e=this.slides[t];e.style.width=this.slideWidth+"px",this.support.transform&&(e.style.left=t*-this.slideWidth+"px",this.move(t,this.index>t?-this.slideWidth:this.index<t?this.slideWidth:0,0))},initSlides:function(e){var i,s;for(e||(this.positions=[],this.positions.length=this.num,this.elements={},this.imagePrototype=document.createElement("img"),this.elementPrototype=document.createElement("div"),this.slidePrototype=document.createElement("div"),t(this.slidePrototype).addClass(this.options.slideClass),this.slides=this.slidesContainer[0].children,i=this.options.clearSlides||this.slides.length!==this.num),this.slideWidth=this.container[0].clientWidth,this.slideHeight=this.container[0].clientHeight,this.slidesContainer[0].style.width=this.num*this.slideWidth+"px",i&&this.resetSlides(),s=0;s<this.num;s+=1)i&&this.addSlide(s),this.positionSlide(s);this.options.continuous&&this.support.transform&&(this.move(this.circle(this.index-1),-this.slideWidth,0),this.move(this.circle(this.index+1),this.slideWidth,0)),this.support.transform||(this.slidesContainer[0].style.left=this.index*-this.slideWidth+"px")},unloadSlide:function(t){var e,i;null!==(i=(e=this.slides[t]).firstChild)&&e.removeChild(i)},unloadAllSlides:function(){var t,e;for(t=0,e=this.slides.length;t<e;t++)this.unloadSlide(t)},toggleControls:function(){var t=this.options.controlsClass;this.container.hasClass(t)?this.container.removeClass(t):this.container.addClass(t)},toggleSlideshow:function(){this.interval?this.pause():this.play()},getNodeIndex:function(t){return parseInt(t.getAttribute("data-index"),10)},getNestedProperty:function(t,e){return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,function(e,i,s,n,o){var a=o||i||s||n&&parseInt(n,10);e&&t&&(t=t[a])}),t},getDataProperty:function(e,i){var s,n;if(e.dataset?(s=i.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()}),n=e.dataset[s]):e.getAttribute&&(n=e.getAttribute("data-"+i.replace(/([A-Z])/g,"-$1").toLowerCase())),"string"==typeof n){if(/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(n))try{return t.parseJSON(n)}catch(t){}return n}},getItemProperty:function(t,e){var i=this.getDataProperty(t,e);return void 0===i&&(i=t[e]),void 0===i&&(i=this.getNestedProperty(t,e)),i},initStartIndex:function(){var t,e=this.options.index,i=this.options.urlProperty;if(e&&"number"!=typeof e)for(t=0;t<this.num;t+=1)if(this.list[t]===e||this.getItemProperty(this.list[t],i)===this.getItemProperty(e,i)){e=t;break}this.index=this.circle(parseInt(e,10)||0)},initEventListeners:function(){function e(t){var e=i.support.transition&&i.support.transition.end===t.type?"transitionend":t.type;i["on"+e](t)}var i=this,s=this.slidesContainer;t(window).on("resize",e),t(document.body).on("keydown",e),this.container.on("click",e),this.support.touch?s.on("touchstart touchmove touchend touchcancel",e):this.options.emulateTouchEvents&&this.support.transition&&s.on("mousedown mousemove mouseup mouseout",e),this.support.transition&&s.on(this.support.transition.end,e),this.proxyListener=e},destroyEventListeners:function(){var e=this.slidesContainer,i=this.proxyListener;t(window).off("resize",i),t(document.body).off("keydown",i),this.container.off("click",i),this.support.touch?e.off("touchstart touchmove touchend touchcancel",i):this.options.emulateTouchEvents&&this.support.transition&&e.off("mousedown mousemove mouseup mouseout",i),this.support.transition&&e.off(this.support.transition.end,i)},handleOpen:function(){this.options.onopened&&this.options.onopened.call(this)},initWidget:function(){function e(t){t.target===i.container[0]&&(i.container.off(i.support.transition.end,e),i.handleOpen())}var i=this;return this.container=t(this.options.container),this.container.length?(this.slidesContainer=this.container.find(this.options.slidesContainer).first(),this.slidesContainer.length?(this.titleElement=this.container.find(this.options.titleElement).first(),1===this.num&&this.container.addClass(this.options.singleClass),this.options.onopen&&this.options.onopen.call(this),this.support.transition&&this.options.displayTransition?this.container.on(this.support.transition.end,e):this.handleOpen(),this.options.hidePageScrollbars&&(this.bodyOverflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"),this.container[0].style.display="block",this.initSlides(),void this.container.addClass(this.options.displayClass)):(this.console.log("blueimp Gallery: Slides container not found.",this.options.slidesContainer),!1)):(this.console.log("blueimp Gallery: Widget container not found.",this.options.container),!1)},initOptions:function(e){this.options=t.extend({},this.options),(e&&e.carousel||this.options.carousel&&(!e||!1!==e.carousel))&&t.extend(this.options,this.carouselOptions),t.extend(this.options,e),this.num<3&&(this.options.continuous=!!this.options.continuous&&null),this.support.transition||(this.options.emulateTouchEvents=!1),this.options.event&&this.preventDefault(this.options.event)}}),e}),function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],t):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";t.extend(e.prototype.options,{fullScreen:!1});var i=e.prototype.initialize,s=e.prototype.close;return t.extend(e.prototype,{getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement},requestFullScreen:function(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()},exitFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()},initialize:function(){i.call(this),this.options.fullScreen&&!this.getFullScreenElement()&&this.requestFullScreen(this.container[0])},close:function(){this.getFullScreenElement()===this.container[0]&&this.exitFullScreen(),s.call(this)}}),e}),function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],t):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";t.extend(e.prototype.options,{indicatorContainer:"ol",activeIndicatorClass:"active",thumbnailProperty:"thumbnail",thumbnailIndicators:!0});var i=e.prototype.initSlides,s=e.prototype.addSlide,n=e.prototype.resetSlides,o=e.prototype.handleClick,a=e.prototype.handleSlide,r=e.prototype.handleClose;return t.extend(e.prototype,{createIndicator:function(e){var i,s,n=this.indicatorPrototype.cloneNode(!1),o=this.getItemProperty(e,this.options.titleProperty),a=this.options.thumbnailProperty;return this.options.thumbnailIndicators&&(a&&(i=this.getItemProperty(e,a)),void 0===i&&(s=e.getElementsByTagName&&t(e).find("img")[0])&&(i=s.src),i&&(n.style.backgroundImage='url("'+i+'")')),o&&(n.title=o),n},addIndicator:function(t){if(this.indicatorContainer.length){var e=this.createIndicator(this.list[t]);e.setAttribute("data-index",t),this.indicatorContainer[0].appendChild(e),this.indicators.push(e)}},setActiveIndicator:function(e){this.indicators&&(this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),this.activeIndicator=t(this.indicators[e]),this.activeIndicator.addClass(this.options.activeIndicatorClass))},initSlides:function(t){t||(this.indicatorContainer=this.container.find(this.options.indicatorContainer),this.indicatorContainer.length&&(this.indicatorPrototype=document.createElement("li"),this.indicators=this.indicatorContainer[0].children)),i.call(this,t)},addSlide:function(t){s.call(this,t),this.addIndicator(t)},resetSlides:function(){n.call(this),this.indicatorContainer.empty(),this.indicators=[]},handleClick:function(t){var e=t.target||t.srcElement,i=e.parentNode;if(i===this.indicatorContainer[0])this.preventDefault(t),this.slide(this.getNodeIndex(e));else{if(i.parentNode!==this.indicatorContainer[0])return o.call(this,t);this.preventDefault(t),this.slide(this.getNodeIndex(i))}},handleSlide:function(t){a.call(this,t),this.setActiveIndicator(t)},handleClose:function(){this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),r.call(this)}}),e}),function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],t):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";t.extend(e.prototype.options,{videoContentClass:"video-content",videoLoadingClass:"video-loading",videoPlayingClass:"video-playing",videoPosterProperty:"poster",videoSourcesProperty:"sources"});var i=e.prototype.handleSlide;return t.extend(e.prototype,{handleSlide:function(t){i.call(this,t),this.playingVideo&&this.playingVideo.pause()},videoFactory:function(e,i,s){var n,o,a,r,l,h=this,d=this.options,c=this.elementPrototype.cloneNode(!1),u=t(c),p=[{type:"error",target:c}],m=s||document.createElement("video"),y=this.getItemProperty(e,d.urlProperty),f=this.getItemProperty(e,d.typeProperty),g=this.getItemProperty(e,d.titleProperty),v=this.getItemProperty(e,this.options.altTextProperty)||g,C=this.getItemProperty(e,d.videoPosterProperty),w=this.getItemProperty(e,d.videoSourcesProperty);if(u.addClass(d.videoContentClass),g&&(c.title=g),m.canPlayType)if(y&&f&&m.canPlayType(f))m.src=y;else if(w)for(;w.length;)if(o=w.shift(),y=this.getItemProperty(o,d.urlProperty),f=this.getItemProperty(o,d.typeProperty),y&&f&&m.canPlayType(f)){m.src=y;break}return C&&(m.poster=C,n=this.imagePrototype.cloneNode(!1),t(n).addClass(d.toggleClass),n.src=C,n.draggable=!1,n.alt=v,c.appendChild(n)),(a=document.createElement("a")).setAttribute("target","_blank"),s||a.setAttribute("download",g),a.href=y,m.src&&(m.controls=!0,(s||t(m)).on("error",function(){h.setTimeout(i,p)}).on("pause",function(){m.seeking||(r=!1,u.removeClass(h.options.videoLoadingClass).removeClass(h.options.videoPlayingClass),l&&h.container.addClass(h.options.controlsClass),delete h.playingVideo,h.interval&&h.play())}).on("playing",function(){r=!1,u.removeClass(h.options.videoLoadingClass).addClass(h.options.videoPlayingClass),h.container.hasClass(h.options.controlsClass)?(l=!0,h.container.removeClass(h.options.controlsClass)):l=!1}).on("play",function(){window.clearTimeout(h.timeout),r=!0,u.addClass(h.options.videoLoadingClass),h.playingVideo=m}),t(a).on("click",function(t){h.preventDefault(t),r?m.pause():m.play()}),c.appendChild(s&&s.element||m)),c.appendChild(a),this.setTimeout(i,[{type:"load",target:c}]),c}}),e}),function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],t):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";if(!window.postMessage)return e;t.extend(e.prototype.options,{vimeoVideoIdProperty:"vimeo",vimeoPlayerUrl:"//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",vimeoPlayerIdPrefix:"vimeo-player-",vimeoClickToPlay:!0});var i=e.prototype.textFactory||e.prototype.imageFactory,s=function(t,e,i,s){this.url=t,this.videoId=e,this.playerId=i,this.clickToPlay=s,this.element=document.createElement("div"),this.listeners={}},n=0;return t.extend(s.prototype,{canPlayType:function(){return!0},on:function(t,e){return this.listeners[t]=e,this},loadAPI:function(){function e(){!s&&n.playOnReady&&n.play(),s=!0}for(var i,s,n=this,o="//f.vimeocdn.com/js/froogaloop2.min.js",a=document.getElementsByTagName("script"),r=a.length;r;)if(r-=1,a[r].src===o){i=a[r];break}i||((i=document.createElement("script")).src=o),t(i).on("load",e),a[0].parentNode.insertBefore(i,a[0]),/loaded|complete/.test(i.readyState)&&e()},onReady:function(){var t=this;this.ready=!0,this.player.addEvent("play",function(){t.hasPlayed=!0,t.onPlaying()}),this.player.addEvent("pause",function(){t.onPause()}),this.player.addEvent("finish",function(){t.onPause()}),this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){this.listeners.pause(),delete this.playStatus},insertIframe:function(){var t=document.createElement("iframe");t.src=this.url.replace("VIDEO_ID",this.videoId).replace("PLAYER_ID",this.playerId),t.id=this.playerId,this.element.parentNode.replaceChild(t,this.element),this.element=t},play:function(){var t=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.api("play"):(this.playOnReady=!0,window.$f?this.player||(this.insertIframe(),this.player=$f(this.element),this.player.addEvent("ready",function(){t.onReady()})):this.loadAPI())},pause:function(){this.ready?this.player.api("pause"):this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),t.extend(e.prototype,{VimeoPlayer:s,textFactory:function(t,e){var o=this.options,a=this.getItemProperty(t,o.vimeoVideoIdProperty);return a?(void 0===this.getItemProperty(t,o.urlProperty)&&(t[o.urlProperty]="//vimeo.com/"+a),n+=1,this.videoFactory(t,e,new s(o.vimeoPlayerUrl,a,o.vimeoPlayerIdPrefix+n,o.vimeoClickToPlay))):i.call(this,t,e)}}),e}),function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],t):t(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(t,e){"use strict";if(!window.postMessage)return e;t.extend(e.prototype.options,{youTubeVideoIdProperty:"youtube",youTubePlayerVars:{wmode:"transparent"},youTubeClickToPlay:!0});var i=e.prototype.textFactory||e.prototype.imageFactory,s=function(t,e,i){this.videoId=t,this.playerVars=e,this.clickToPlay=i,this.element=document.createElement("div"),this.listeners={}};return t.extend(s.prototype,{canPlayType:function(){return!0},on:function(t,e){return this.listeners[t]=e,this},loadAPI:function(){var t,e=this,i=window.onYouTubeIframeAPIReady,s="//www.youtube.com/iframe_api",n=document.getElementsByTagName("script"),o=n.length;for(window.onYouTubeIframeAPIReady=function(){i&&i.apply(this),e.playOnReady&&e.play()};o;)if(o-=1,n[o].src===s)return;(t=document.createElement("script")).src=s,n[0].parentNode.insertBefore(t,n[0])},onReady:function(){this.ready=!0,this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){e.prototype.setTimeout.call(this,this.checkSeek,null,2e3)},checkSeek:function(){this.stateChange!==YT.PlayerState.PAUSED&&this.stateChange!==YT.PlayerState.ENDED||(this.listeners.pause(),delete this.playStatus)},onStateChange:function(t){switch(t.data){case YT.PlayerState.PLAYING:this.hasPlayed=!0,this.onPlaying();break;case YT.PlayerState.PAUSED:case YT.PlayerState.ENDED:this.onPause()}this.stateChange=t.data},onError:function(t){this.listeners.error(t)},play:function(){var t=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.playVideo():(this.playOnReady=!0,window.YT&&YT.Player?this.player||(this.player=new YT.Player(this.element,{videoId:this.videoId,playerVars:this.playerVars,events:{onReady:function(){t.onReady()},onStateChange:function(e){t.onStateChange(e)},onError:function(e){t.onError(e)}}})):this.loadAPI())},pause:function(){this.ready?this.player.pauseVideo():this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),t.extend(e.prototype,{YouTubePlayer:s,textFactory:function(t,e){var n=this.options,o=this.getItemProperty(t,n.youTubeVideoIdProperty);return o?(void 0===this.getItemProperty(t,n.urlProperty)&&(t[n.urlProperty]="//www.youtube.com/watch?v="+o),void 0===this.getItemProperty(t,n.videoPosterProperty)&&(t[n.videoPosterProperty]="//img.youtube.com/vi/"+o+"/maxresdefault.jpg"),this.videoFactory(t,e,new s(o,n.youTubePlayerVars,n.youTubeClickToPlay))):i.call(this,t,e)}}),e});
//# sourceMappingURL=blueimp-gallery.min.js.map


/* https://unpkg.com/tippy.js@2.5.3/dist/tippy.all.min.js */
(function(t,e){'object'==typeof exports&&'undefined'!=typeof module?module.exports=e():'function'==typeof define&&define.amd?define(e):t.tippy=e()})(this,function(){'use strict';function t(t){return'[object Object]'==={}.toString.call(t)}function a(t){return[].slice.call(t)}function o(e){if(e instanceof Element||t(e))return[e];if(e instanceof NodeList)return a(e);if(Array.isArray(e))return e;try{return a(document.querySelectorAll(e))}catch(t){return[]}}function r(t){t.refObj=!0,t.attributes=t.attributes||{},t.setAttribute=function(e,a){t.attributes[e]=a},t.getAttribute=function(e){return t.attributes[e]},t.removeAttribute=function(e){delete t.attributes[e]},t.hasAttribute=function(e){return e in t.attributes},t.addEventListener=function(){},t.removeEventListener=function(){},t.classList={classNames:{},add:function(e){return t.classList.classNames[e]=!0},remove:function(e){return delete t.classList.classNames[e],!0},contains:function(e){return e in t.classList.classNames}}}function p(t){for(var e=['','webkit'],a=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length;o++){var i=e[o],r=i?i+a:t;if('undefined'!=typeof document.body.style[r])return r}return null}function n(){return document.createElement('div')}function s(t,e,a){var i=n();i.setAttribute('class','tippy-popper'),i.setAttribute('role','tooltip'),i.setAttribute('id','tippy-'+t),i.style.zIndex=a.zIndex,i.style.maxWidth=a.maxWidth;var o=n();o.setAttribute('class','tippy-tooltip'),o.setAttribute('data-size',a.size),o.setAttribute('data-animation',a.animation),o.setAttribute('data-state','hidden'),a.theme.split(' ').forEach(function(e){o.classList.add(e+'-theme')});var r=n();if(r.setAttribute('class','tippy-content'),a.arrow){var s=n();s.style[p('transform')]=a.arrowTransform,'round'===a.arrowType?(s.classList.add('tippy-roundarrow'),s.innerHTML='<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>'):s.classList.add('tippy-arrow'),o.appendChild(s)}if(a.animateFill){o.setAttribute('data-animatefill','');var l=n();l.classList.add('tippy-backdrop'),l.setAttribute('data-state','hidden'),o.appendChild(l)}a.inertia&&o.setAttribute('data-inertia',''),a.interactive&&o.setAttribute('data-interactive','');var d=a.html;if(d){var c;d instanceof Element?(r.appendChild(d),c='#'+(d.id||'tippy-html-template')):(r.innerHTML=document.querySelector(d).innerHTML,c=d),i.setAttribute('data-html',''),o.setAttribute('data-template-id',c),a.interactive&&i.setAttribute('tabindex','-1')}else r[a.allowTitleHTML?'innerHTML':'textContent']=e;return o.appendChild(r),i.appendChild(o),i}function l(t,e,a,i){var o=a.onTrigger,r=a.onMouseLeave,p=a.onBlur,n=a.onDelegateShow,s=a.onDelegateHide,l=[];if('manual'===t)return l;var d=function(t,a){e.addEventListener(t,a),l.push({event:t,handler:a})};return i.target?(qt.supportsTouch&&i.touchHold&&(d('touchstart',n),d('touchend',s)),'mouseenter'===t&&(d('mouseover',n),d('mouseout',s)),'focus'===t&&(d('focusin',n),d('focusout',s)),'click'===t&&d('click',n)):(d(t,o),qt.supportsTouch&&i.touchHold&&(d('touchstart',o),d('touchend',r)),'mouseenter'===t&&d('mouseleave',r),'focus'===t&&d(Ft?'focusout':'blur',p)),l}function d(t,e){var a=Gt.reduce(function(a,i){var o=t.getAttribute('data-tippy-'+i.toLowerCase())||e[i];return'false'===o&&(o=!1),'true'===o&&(o=!0),isFinite(o)&&!isNaN(parseFloat(o))&&(o=parseFloat(o)),'target'!==i&&'string'==typeof o&&'['===o.trim().charAt(0)&&(o=JSON.parse(o)),a[i]=o,a},{});return Jt({},e,a)}function c(t,e){return e.arrow&&(e.animateFill=!1),e.appendTo&&'function'==typeof e.appendTo&&(e.appendTo=e.appendTo()),'function'==typeof e.html&&(e.html=e.html(t)),e}function m(t){var e=function(e){return t.querySelector(e)};return{tooltip:e(jt.TOOLTIP),backdrop:e(jt.BACKDROP),content:e(jt.CONTENT),arrow:e(jt.ARROW)||e(jt.ROUND_ARROW)}}function f(t){var e=t.getAttribute('title');e&&t.setAttribute('data-original-title',e),t.removeAttribute('title')}function h(t){return t&&'[object Function]'==={}.toString.call(t)}function b(t,e){if(1!==t.nodeType)return[];var a=getComputedStyle(t,null);return e?a[e]:a}function u(t){return'HTML'===t.nodeName?t:t.parentNode||t.host}function y(t){if(!t)return document.body;switch(t.nodeName){case'HTML':case'BODY':return t.ownerDocument.body;case'#document':return t.body;}var e=b(t),a=e.overflow,i=e.overflowX,o=e.overflowY;return /(auto|scroll|overlay)/.test(a+o+i)?t:y(u(t))}function g(t){return 11===t?ie:10===t?oe:ie||oe}function w(t){if(!t)return document.documentElement;for(var e=g(10)?document.body:null,a=t.offsetParent;a===e&&t.nextElementSibling;)a=(t=t.nextElementSibling).offsetParent;var i=a&&a.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(a.nodeName)&&'static'===b(a,'position')?w(a):a:t?t.ownerDocument.documentElement:document.documentElement}function x(t){var e=t.nodeName;return'BODY'!==e&&('HTML'===e||w(t.firstElementChild)===t)}function v(t){return null===t.parentNode?t:v(t.parentNode)}function k(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var a=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=a?t:e,o=a?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var p=r.commonAncestorContainer;if(t!==p&&e!==p||i.contains(o))return x(p)?p:w(p);var n=v(t);return n.host?k(n.host,e):k(t,v(e).host)}function E(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',a='top'===e?'scrollTop':'scrollLeft',i=t.nodeName;if('BODY'===i||'HTML'===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[a]}return t[a]}function T(t,e){var a=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=E(e,'top'),o=E(e,'left'),r=a?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function L(t,e){var a='x'===e?'Left':'Top',i='Left'==a?'Right':'Bottom';return parseFloat(t['border'+a+'Width'],10)+parseFloat(t['border'+i+'Width'],10)}function O(t,e,a,i){return Ut(e['offset'+t],e['scroll'+t],a['client'+t],a['offset'+t],a['scroll'+t],g(10)?a['offset'+t]+i['margin'+('Height'===t?'Top':'Left')]+i['margin'+('Height'===t?'Bottom':'Right')]:0)}function A(){var t=document.body,e=document.documentElement,a=g(10)&&getComputedStyle(e);return{height:O('Height',t,e,a),width:O('Width',t,e,a)}}function C(t){return se({},t,{right:t.left+t.width,bottom:t.top+t.height})}function S(t){var e={};try{if(g(10)){e=t.getBoundingClientRect();var a=E(t,'top'),i=E(t,'left');e.top+=a,e.left+=i,e.bottom+=a,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r='HTML'===t.nodeName?A():{},p=r.width||t.clientWidth||o.right-o.left,n=r.height||t.clientHeight||o.bottom-o.top,s=t.offsetWidth-p,l=t.offsetHeight-n;if(s||l){var d=b(t);s-=L(d,'x'),l-=L(d,'y'),o.width-=s,o.height-=l}return C(o)}function Y(t,e){var a=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=g(10),o='HTML'===e.nodeName,r=S(t),p=S(e),n=y(t),s=b(e),l=parseFloat(s.borderTopWidth,10),d=parseFloat(s.borderLeftWidth,10);a&&'HTML'===e.nodeName&&(p.top=Ut(p.top,0),p.left=Ut(p.left,0));var c=C({top:r.top-p.top-l,left:r.left-p.left-d,width:r.width,height:r.height});if(c.marginTop=0,c.marginLeft=0,!i&&o){var m=parseFloat(s.marginTop,10),f=parseFloat(s.marginLeft,10);c.top-=l-m,c.bottom-=l-m,c.left-=d-f,c.right-=d-f,c.marginTop=m,c.marginLeft=f}return(i&&!a?e.contains(n):e===n&&'BODY'!==n.nodeName)&&(c=T(c,e)),c}function P(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],a=t.ownerDocument.documentElement,i=Y(t,a),o=Ut(a.clientWidth,window.innerWidth||0),r=Ut(a.clientHeight,window.innerHeight||0),p=e?0:E(a),n=e?0:E(a,'left'),s={top:p-i.top+i.marginTop,left:n-i.left+i.marginLeft,width:o,height:r};return C(s)}function X(t){var e=t.nodeName;return'BODY'!==e&&'HTML'!==e&&('fixed'===b(t,'position')||X(u(t)))}function I(t){if(!t||!t.parentElement||g())return document.documentElement;for(var e=t.parentElement;e&&'none'===b(e,'transform');)e=e.parentElement;return e||document.documentElement}function D(t,e,a,i){var o=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],r={top:0,left:0},p=o?I(t):k(t,e);if('viewport'===i)r=P(p,o);else{var n;'scrollParent'===i?(n=y(u(e)),'BODY'===n.nodeName&&(n=t.ownerDocument.documentElement)):'window'===i?n=t.ownerDocument.documentElement:n=i;var s=Y(n,p,o);if('HTML'===n.nodeName&&!X(p)){var l=A(),d=l.height,c=l.width;r.top+=s.top-s.marginTop,r.bottom=d+s.top,r.left+=s.left-s.marginLeft,r.right=c+s.left}else r=s}return r.left+=a,r.top+=a,r.right-=a,r.bottom-=a,r}function _(t){var e=t.width,a=t.height;return e*a}function R(t,e,a,i,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf('auto'))return t;var p=D(a,i,r,o),n={top:{width:p.width,height:e.top-p.top},right:{width:p.right-e.right,height:p.height},bottom:{width:p.width,height:p.bottom-e.bottom},left:{width:e.left-p.left,height:p.height}},s=Object.keys(n).map(function(t){return se({key:t},n[t],{area:_(n[t])})}).sort(function(t,e){return e.area-t.area}),l=s.filter(function(t){var e=t.width,i=t.height;return e>=a.clientWidth&&i>=a.clientHeight}),d=0<l.length?l[0].key:s[0].key,c=t.split('-')[1];return d+(c?'-'+c:'')}function N(t,e,a){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,o=i?I(e):k(e,a);return Y(a,o,i)}function H(t){var e=getComputedStyle(t),a=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight),o={width:t.offsetWidth+i,height:t.offsetHeight+a};return o}function M(t){var e={left:'right',right:'left',bottom:'top',top:'bottom'};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function B(t,e,a){a=a.split('-')[0];var i=H(t),o={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(a),p=r?'top':'left',n=r?'left':'top',s=r?'height':'width',l=r?'width':'height';return o[p]=e[p]+e[s]/2-i[s]/2,o[n]=a===n?e[n]-i[l]:e[M(n)],o}function W(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function U(t,e,a){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===a});var i=W(t,function(t){return t[e]===a});return t.indexOf(i)}function z(t,e,a){var i=void 0===a?t:t.slice(0,U(t,'name',a));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var a=t['function']||t.fn;t.enabled&&h(a)&&(e.offsets.popper=C(e.offsets.popper),e.offsets.reference=C(e.offsets.reference),e=a(e,t))}),e}function F(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=R(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=B(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',t=z(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function q(t,e){return t.some(function(t){var a=t.name,i=t.enabled;return i&&a===e})}function j(t){for(var e=[!1,'ms','Webkit','Moz','O'],a=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length;o++){var i=e[o],r=i?''+i+a:t;if('undefined'!=typeof document.body.style[r])return r}return null}function K(){return this.state.isDestroyed=!0,q(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[j('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function G(t){var e=t.ownerDocument;return e?e.defaultView:window}function V(t,e,a,i){var o='BODY'===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,a,{passive:!0}),o||V(y(r.parentNode),e,a,i),i.push(r)}function Q(t,e,a,i){a.updateBound=i,G(t).addEventListener('resize',a.updateBound,{passive:!0});var o=y(t);return V(o,'scroll',a.updateBound,a.scrollParents),a.scrollElement=o,a.eventsEnabled=!0,a}function J(){this.state.eventsEnabled||(this.state=Q(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(t,e){return G(t).removeEventListener('resize',e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener('scroll',e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function $(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function tt(t){return''!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function et(t,e){Object.keys(e).forEach(function(a){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(a)&&tt(e[a])&&(i='px'),t.style[a]=e[a]+i})}function at(t,e){Object.keys(e).forEach(function(a){var i=e[a];!1===i?t.removeAttribute(a):t.setAttribute(a,e[a])})}function it(t,e,a){var i=W(t,function(t){var a=t.name;return a===e}),o=!!i&&t.some(function(t){return t.name===a&&t.enabled&&t.order<i.order});if(!o){var r='`'+e+'`';console.warn('`'+a+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return o}function ot(t){return'end'===t?'start':'start'===t?'end':t}function rt(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],a=de.indexOf(t),i=de.slice(a+1).concat(de.slice(0,a));return e?i.reverse():i}function pt(t,e,a,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],p=o[2];if(!r)return t;if(0===p.indexOf('%')){var n;switch(p){case'%p':n=a;break;case'%':case'%r':default:n=i;}var s=C(n);return s[e]/100*r}if('vh'===p||'vw'===p){var l;return l='vh'===p?Ut(document.documentElement.clientHeight,window.innerHeight||0):Ut(document.documentElement.clientWidth,window.innerWidth||0),l/100*r}return r}function nt(t,e,a,i){var o=[0,0],r=-1!==['right','left'].indexOf(i),p=t.split(/(\+|\-)/).map(function(t){return t.trim()}),n=p.indexOf(W(p,function(t){return-1!==t.search(/,|\s/)}));p[n]&&-1===p[n].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var s=/\s*,\s*|\s+/,l=-1===n?[p]:[p.slice(0,n).concat([p[n].split(s)[0]]),[p[n].split(s)[1]].concat(p.slice(n+1))];return l=l.map(function(t,i){var o=(1===i?!r:r)?'height':'width',p=!1;return t.reduce(function(t,e){return''===t[t.length-1]&&-1!==['+','-'].indexOf(e)?(t[t.length-1]=e,p=!0,t):p?(t[t.length-1]+=e,p=!1,t):t.concat(e)},[]).map(function(t){return pt(t,o,e,a)})}),l.forEach(function(t,e){t.forEach(function(a,i){tt(a)&&(o[e]+=a*('-'===t[i-1]?-1:1))})}),o}function st(t,e){var a,i=e.offset,o=t.placement,r=t.offsets,p=r.popper,n=r.reference,s=o.split('-')[0];return a=tt(+i)?[+i,0]:nt(i,p,n,s),'left'===s?(p.top+=a[0],p.left-=a[1]):'right'===s?(p.top+=a[0],p.left+=a[1]):'top'===s?(p.left+=a[0],p.top-=a[1]):'bottom'===s&&(p.left+=a[0],p.top+=a[1]),t.popper=p,t}function lt(t){void t.offsetHeight}function dt(t,e,a){var i=t.popper,o=t.options,r=o.onCreate,p=o.onUpdate;o.onCreate=o.onUpdate=function(){lt(i),e&&e(),p(),o.onCreate=r,o.onUpdate=p},a||t.scheduleUpdate()}function ct(t){return t.getAttribute('x-placement').replace(/-.+/,'')}function mt(t,e,a){if(!e.getAttribute('x-placement'))return!0;var i=t.clientX,o=t.clientY,r=a.interactiveBorder,p=a.distance,n=e.getBoundingClientRect(),s=ct(e),l=r+p,d={top:n.top-o>r,bottom:o-n.bottom>r,left:n.left-i>r,right:i-n.right>r};return'top'===s?d.top=n.top-o>l:'bottom'===s?d.bottom=o-n.bottom>l:'left'===s?d.left=n.left-i>l:'right'===s?d.right=i-n.right>l:void 0,d.top||d.bottom||d.left||d.right}function ft(t,e,a,i){if(!e.length)return'';var o={scale:function(){return 1===e.length?''+e[0]:a?e[0]+', '+e[1]:e[1]+', '+e[0]}(),translate:function(){return 1===e.length?i?-e[0]+'px':e[0]+'px':a?i?e[0]+'px, '+-e[1]+'px':e[0]+'px, '+e[1]+'px':i?-e[1]+'px, '+e[0]+'px':e[1]+'px, '+e[0]+'px'}()};return o[t]}function ht(t,e){if(!t)return'';return e?t:{X:'Y',Y:'X'}[t]}function bt(t,e,a){var i=ct(t),o='top'===i||'bottom'===i,r='right'===i||'bottom'===i,n=function(t){var e=a.match(t);return e?e[1]:''},s=function(t){var e=a.match(t);return e?e[1].split(',').map(parseFloat):[]},l={translate:/translateX?Y?\(([^)]+)\)/,scale:/scaleX?Y?\(([^)]+)\)/},d={translate:{axis:n(/translate([XY])/),numbers:s(l.translate)},scale:{axis:n(/scale([XY])/),numbers:s(l.scale)}},c=a.replace(l.translate,'translate'+ht(d.translate.axis,o)+'('+ft('translate',d.translate.numbers,o,r)+')').replace(l.scale,'scale'+ht(d.scale.axis,o)+'('+ft('scale',d.scale.numbers,o,r)+')');e.style[p('transform')]=c}function ut(t){return-(t-Kt.distance)+'px'}function yt(t){requestAnimationFrame(function(){setTimeout(t,1)})}function gt(t,a){var i=Element.prototype.closest||function(t){for(var a=this;a;){if(e.call(a,t))return a;a=a.parentElement}};return i.call(t,a)}function wt(t,e){return Array.isArray(t)?t[e]:t}function xt(t,e){t.forEach(function(t){t&&t.setAttribute('data-state',e)})}function vt(t,e){t.filter(Boolean).forEach(function(t){t.style[p('transitionDuration')]=e+'ms'})}function kt(t){var e=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset;t.focus(),scroll(e,a)}function Et(){var t=this._(be).lastTriggerEvent;return this.options.followCursor&&!qt.usingTouch&&t&&'focus'!==t.type}function Tt(t){var e=gt(t.target,this.options.target);if(e&&!e._tippy){var a=e.getAttribute('title')||this.title;a&&(e.setAttribute('title',a),Ht(e,Jt({},this.options,{target:null})),Lt.call(e._tippy,t))}}function Lt(t){var e=this,a=this.options;if(Yt.call(this),!this.state.visible){if(a.target)return void Tt.call(this,t);if(this._(be).isPreparingToShow=!0,a.wait)return void a.wait.call(this.popper,this.show.bind(this),t);if(Et.call(this)){this._(be).followCursorListener||Pt.call(this);var i=m(this.popper),o=i.arrow;o&&(o.style.margin='0'),document.addEventListener('mousemove',this._(be).followCursorListener)}var r=wt(a.delay,0);r?this._(be).showTimeout=setTimeout(function(){e.show()},r):this.show()}}function Ot(){var t=this;if(Yt.call(this),!!this.state.visible){this._(be).isPreparingToShow=!1;var e=wt(this.options.delay,1);e?this._(be).hideTimeout=setTimeout(function(){t.state.visible&&t.hide()},e):this.hide()}}function At(){var t=this;return{onTrigger:function(e){if(t.state.enabled){var a=qt.supportsTouch&&qt.usingTouch&&-1<['mouseenter','mouseover','focus'].indexOf(e.type);a&&t.options.touchHold||(t._(be).lastTriggerEvent=e,'click'===e.type&&'persistent'!==t.options.hideOnClick&&t.state.visible?Ot.call(t):Lt.call(t,e))}},onMouseLeave:function(e){if(!(-1<['mouseleave','mouseout'].indexOf(e.type)&&qt.supportsTouch&&qt.usingTouch&&t.options.touchHold)){if(t.options.interactive){var a=Ot.bind(t),i=function e(i){var o=gt(i.target,jt.REFERENCE),r=gt(i.target,jt.POPPER)===t.popper,p=o===t.reference;r||p||mt(i,t.popper,t.options)&&(document.body.removeEventListener('mouseleave',a),document.removeEventListener('mousemove',e),Ot.call(t,e))};return document.body.addEventListener('mouseleave',a),void document.addEventListener('mousemove',i)}Ot.call(t)}},onBlur:function(e){if(!(e.target!==t.reference||qt.usingTouch)){if(t.options.interactive){if(!e.relatedTarget)return;if(gt(e.relatedTarget,jt.POPPER))return}Ot.call(t)}},onDelegateShow:function(e){gt(e.target,t.options.target)&&Lt.call(t,e)},onDelegateHide:function(e){gt(e.target,t.options.target)&&Ot.call(t)}}}function Ct(){var t=this,e=this.popper,a=this.reference,i=this.options,o=m(e),r=o.tooltip,p=i.popperOptions,n='round'===i.arrowType?jt.ROUND_ARROW:jt.ARROW,s=r.querySelector(n),l=Jt({placement:i.placement},p||{},{modifiers:Jt({},p?p.modifiers:{},{arrow:Jt({element:n},p&&p.modifiers?p.modifiers.arrow:{}),flip:Jt({enabled:i.flip,padding:i.distance+5,behavior:i.flipBehavior},p&&p.modifiers?p.modifiers.flip:{}),offset:Jt({offset:i.offset},p&&p.modifiers?p.modifiers.offset:{})}),onCreate:function(){r.style[ct(e)]=ut(i.distance),s&&i.arrowTransform&&bt(e,s,i.arrowTransform)},onUpdate:function(){var t=r.style;t.top='',t.bottom='',t.left='',t.right='',t[ct(e)]=ut(i.distance),s&&i.arrowTransform&&bt(e,s,i.arrowTransform)}});return It.call(this,{target:e,callback:function(){t.popperInstance.update()},options:{childList:!0,subtree:!0,characterData:!0}}),new me(a,e,l)}function St(t){var e=this.options;if(this.popperInstance?(this.popperInstance.scheduleUpdate(),e.livePlacement&&!Et.call(this)&&this.popperInstance.enableEventListeners()):(this.popperInstance=Ct.call(this),!e.livePlacement&&this.popperInstance.disableEventListeners()),!Et.call(this)){var a=m(this.popper),i=a.arrow;i&&(i.style.margin=''),this.popperInstance.reference=this.reference}dt(this.popperInstance,t,!0),e.appendTo.contains(this.popper)||e.appendTo.appendChild(this.popper)}function Yt(){var t=this._(be),e=t.showTimeout,a=t.hideTimeout;clearTimeout(e),clearTimeout(a)}function Pt(){var t=this;this._(be).followCursorListener=function(e){var a=t._(be).lastMouseMoveEvent=e,i=a.clientX,o=a.clientY;t.popperInstance&&(t.popperInstance.reference={getBoundingClientRect:function(){return{width:0,height:0,top:o,left:i,right:i,bottom:o}},clientWidth:0,clientHeight:0},t.popperInstance.scheduleUpdate())}}function Xt(){var t=this,e=function(){t.popper.style[p('transitionDuration')]=t.options.updateDuration+'ms'},a=function(){t.popper.style[p('transitionDuration')]=''};(function i(){t.popperInstance&&t.popperInstance.update(),e(),t.state.visible?requestAnimationFrame(i):a()})()}function It(t){var e=t.target,a=t.callback,i=t.options;if(window.MutationObserver){var o=new MutationObserver(a);o.observe(e,i),this._(be).mutationObservers.push(o)}}function Dt(t,a){if(!t)return a();var e=m(this.popper),i=e.tooltip,o=function(t,e){e&&i[t+'EventListener']('ontransitionend'in window?'transitionend':'webkitTransitionEnd',e)},r=function t(r){r.target===i&&(o('remove',t),a())};o('remove',this._(be).transitionendListener),o('add',r),this._(be).transitionendListener=r}function _t(t,e){return t.reduce(function(t,a){var i=ge,o=c(a,e.performance?e:d(a,e)),r=a.getAttribute('title');if(!r&&!o.target&&!o.html&&!o.dynamicTitle)return t;a.setAttribute(o.target?'data-tippy-delegate':'data-tippy',''),f(a);var p=s(i,r,o),n=new ye({id:i,reference:a,popper:p,options:o,title:r,popperInstance:null});o.createPopperInstanceOnInit&&(n.popperInstance=Ct.call(n),n.popperInstance.disableEventListeners());var h=At.call(n);return n.listeners=o.trigger.trim().split(' ').reduce(function(t,e){return t.concat(l(e,a,h,o))},[]),o.dynamicTitle&&It.call(n,{target:a,callback:function(){var t=m(p),e=t.content,i=a.getAttribute('title');i&&(e[o.allowTitleHTML?'innerHTML':'textContent']=n.title=i,f(a))},options:{attributes:!0}}),a._tippy=n,p._tippy=n,p._reference=a,t.push(n),ge++,t},[])}function Rt(t){var e=a(document.querySelectorAll(jt.POPPER));e.forEach(function(e){var a=e._tippy;if(a){var i=a.options;(!0===i.hideOnClick||-1<i.trigger.indexOf('focus'))&&(!t||e!==t.popper)&&a.hide()}})}function Nt(){var t=function(){qt.usingTouch||(qt.usingTouch=!0,qt.iOS&&document.body.classList.add('tippy-touch'),qt.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',i),qt.onUserInputChange('touch'))},i=function(){var t;return function(){var e=performance.now();20>e-t&&(qt.usingTouch=!1,document.removeEventListener('mousemove',i),!qt.iOS&&document.body.classList.remove('tippy-touch'),qt.onUserInputChange('mouse')),t=e}}();document.addEventListener('click',function(t){if(!(t.target instanceof Element))return Rt();var e=gt(t.target,jt.REFERENCE),a=gt(t.target,jt.POPPER);if(!(a&&a._tippy&&a._tippy.options.interactive)){if(e&&e._tippy){var i=e._tippy.options,o=-1<i.trigger.indexOf('click'),r=i.multiple;if(!r&&qt.usingTouch||!r&&o)return Rt(e._tippy);if(!0!==i.hideOnClick||o)return}Rt()}}),document.addEventListener('touchstart',t),window.addEventListener('blur',function(){var t=document,a=t.activeElement;a&&a.blur&&e.call(a,jt.REFERENCE)&&a.blur()}),window.addEventListener('resize',function(){a(document.querySelectorAll(jt.POPPER)).forEach(function(t){var e=t._tippy;e&&!e.options.livePlacement&&e.popperInstance.scheduleUpdate()})}),!qt.supportsTouch&&(navigator.maxTouchPoints||navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',t)}function Ht(e,a,i){qt.supported&&!we&&(Nt(),we=!0),t(e)&&r(e),a=Jt({},Kt,a);var p=o(e),n=p[0];return{selector:e,options:a,tooltips:qt.supported?_t(i&&n?[n]:p,a):[],destroyAll:function(){this.tooltips.forEach(function(t){return t.destroy()}),this.tooltips=[]}}}var Mt=Math.min,Bt=Math.round,Wt=Math.floor,Ut=Math.max,zt='undefined'!=typeof window,Ft=zt&&/MSIE |Trident\//.test(navigator.userAgent),qt={};zt&&(qt.supported='requestAnimationFrame'in window,qt.supportsTouch='ontouchstart'in window,qt.usingTouch=!1,qt.dynamicInputDetection=!0,qt.iOS=/iPhone|iPad|iPod/.test(navigator.platform)&&!window.MSStream,qt.onUserInputChange=function(){});for(var jt={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-content',BACKDROP:'.tippy-backdrop',ARROW:'.tippy-arrow',ROUND_ARROW:'.tippy-roundarrow',REFERENCE:'[data-tippy]'},Kt={placement:'top',livePlacement:!0,trigger:'mouseenter focus',animation:'shift-away',html:!1,animateFill:!0,arrow:!1,delay:0,duration:[350,300],interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,updateDuration:350,sticky:!1,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,flip:!0,flipBehavior:'flip',arrowType:'sharp',arrowTransform:'',maxWidth:'',target:null,allowTitleHTML:!0,popperOptions:{},createPopperInstanceOnInit:!1,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}},Gt=qt.supported&&Object.keys(Kt),Vt=function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')},Qt=function(){function t(t,e){for(var a,o=0;o<e.length;o++)a=e[o],a.enumerable=a.enumerable||!1,a.configurable=!0,('value'in a)&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),Jt=Object.assign||function(t){for(var e,a=1;a<arguments.length;a++)for(var i in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Zt='undefined'!=typeof window&&'undefined'!=typeof document,$t=['Edge','Trident','Firefox'],te=0,ee=0;ee<$t.length;ee+=1)if(Zt&&0<=navigator.userAgent.indexOf($t[ee])){te=1;break}var i=Zt&&window.Promise,ae=i?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},te))}},ie=Zt&&!!(window.MSInputMethodContext&&document.documentMode),oe=Zt&&/MSIE 10/.test(navigator.userAgent),re=function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')},pe=function(){function t(t,e){for(var a,o=0;o<e.length;o++)a=e[o],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),ne=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},se=Object.assign||function(t){for(var e,a=1;a<arguments.length;a++)for(var i in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},le=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],de=le.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(e,a){var i=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ae(this.update.bind(this)),this.options=se({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=a&&a.jquery?a[0]:a,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return se({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&h(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return pe(t,[{key:'update',value:function(){return F.call(this)}},{key:'destroy',value:function(){return K.call(this)}},{key:'enableEventListeners',value:function(){return J.call(this)}},{key:'disableEventListeners',value:function(){return $.call(this)}}]),t}();me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=le,me.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,a=e.split('-')[0],i=e.split('-')[1];if(i){var o=t.offsets,r=o.reference,p=o.popper,n=-1!==['bottom','top'].indexOf(a),s=n?'left':'top',l=n?'width':'height',d={start:ne({},s,r[s]),end:ne({},s,r[s]+r[l]-p[l])};t.offsets.popper=se({},p,d[i])}return t}},offset:{order:200,enabled:!0,fn:st,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var a=e.boundariesElement||w(t.instance.popper);t.instance.reference===a&&(a=w(a));var i=j('transform'),o=t.instance.popper.style,r=o.top,p=o.left,n=o[i];o.top='',o.left='',o[i]='';var s=D(t.instance.popper,t.instance.reference,e.padding,a,t.positionFixed);o.top=r,o.left=p,o[i]=n,e.boundaries=s;var l=e.priority,d=t.offsets.popper,c={primary:function(t){var a=d[t];return d[t]<s[t]&&!e.escapeWithReference&&(a=Ut(d[t],s[t])),ne({},t,a)},secondary:function(t){var a='right'===t?'left':'top',i=d[a];return d[t]>s[t]&&!e.escapeWithReference&&(i=Mt(d[a],s[t]-('right'===t?d.width:d.height))),ne({},a,i)}};return l.forEach(function(t){var e=-1===['left','top'].indexOf(t)?'secondary':'primary';d=se({},d,c[e](t))}),t.offsets.popper=d,t},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,a=e.popper,i=e.reference,o=t.placement.split('-')[0],r=Wt,p=-1!==['top','bottom'].indexOf(o),n=p?'right':'bottom',s=p?'left':'top',l=p?'width':'height';return a[n]<r(i[s])&&(t.offsets.popper[s]=r(i[s])-a[l]),a[s]>r(i[n])&&(t.offsets.popper[s]=r(i[n])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var a;if(!it(t.instance.modifiers,'arrow','keepTogether'))return t;var i=e.element;if('string'==typeof i){if(i=t.instance.popper.querySelector(i),!i)return t;}else if(!t.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),t;var o=t.placement.split('-')[0],r=t.offsets,p=r.popper,n=r.reference,s=-1!==['left','right'].indexOf(o),l=s?'height':'width',d=s?'Top':'Left',c=d.toLowerCase(),m=s?'left':'top',f=s?'bottom':'right',h=H(i)[l];n[f]-h<p[c]&&(t.offsets.popper[c]-=p[c]-(n[f]-h)),n[c]+h>p[f]&&(t.offsets.popper[c]+=n[c]+h-p[f]),t.offsets.popper=C(t.offsets.popper);var u=n[c]+n[l]/2-h/2,y=b(t.instance.popper),g=parseFloat(y['margin'+d],10),w=parseFloat(y['border'+d+'Width'],10),x=u-t.offsets.popper[c]-g-w;return x=Ut(Mt(p[l]-h,x),0),t.arrowElement=i,t.offsets.arrow=(a={},ne(a,c,Bt(x)),ne(a,m,''),a),t},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(t,e){if(q(t.instance.modifiers,'inner'))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var a=D(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split('-')[0],o=M(i),r=t.placement.split('-')[1]||'',p=[];switch(e.behavior){case ce.FLIP:p=[i,o];break;case ce.CLOCKWISE:p=rt(i);break;case ce.COUNTERCLOCKWISE:p=rt(i,!0);break;default:p=e.behavior;}return p.forEach(function(n,s){if(i!==n||p.length===s+1)return t;i=t.placement.split('-')[0],o=M(i);var l=t.offsets.popper,d=t.offsets.reference,c=Wt,m='left'===i&&c(l.right)>c(d.left)||'right'===i&&c(l.left)<c(d.right)||'top'===i&&c(l.bottom)>c(d.top)||'bottom'===i&&c(l.top)<c(d.bottom),f=c(l.left)<c(a.left),h=c(l.right)>c(a.right),b=c(l.top)<c(a.top),u=c(l.bottom)>c(a.bottom),y='left'===i&&f||'right'===i&&h||'top'===i&&b||'bottom'===i&&u,g=-1!==['top','bottom'].indexOf(i),w=!!e.flipVariations&&(g&&'start'===r&&f||g&&'end'===r&&h||!g&&'start'===r&&b||!g&&'end'===r&&u);(m||y||w)&&(t.flipped=!0,(m||y)&&(i=p[s+1]),w&&(r=ot(r)),t.placement=i+(r?'-'+r:''),t.offsets.popper=se({},t.offsets.popper,B(t.instance.popper,t.offsets.reference,t.placement)),t=z(t.instance.modifiers,t,'flip'))}),t},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,a=e.split('-')[0],i=t.offsets,o=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(a),n=-1===['top','left'].indexOf(a);return o[p?'left':'top']=r[a]-(n?o[p?'width':'height']:0),t.placement=M(e),t.offsets.popper=C(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!it(t.instance.modifiers,'hide','preventOverflow'))return t;var e=t.offsets.reference,a=W(t.instance.modifiers,function(t){return'preventOverflow'===t.name}).boundaries;if(e.bottom<a.top||e.left>a.right||e.top>a.bottom||e.right<a.left){if(!0===t.hide)return t;t.hide=!0,t.attributes['x-out-of-boundaries']=''}else{if(!1===t.hide)return t;t.hide=!1,t.attributes['x-out-of-boundaries']=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var a=e.x,i=e.y,o=t.offsets.popper,r=W(t.instance.modifiers,function(t){return'applyStyle'===t.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p,n,s=void 0===r?e.gpuAcceleration:r,l=w(t.instance.popper),d=S(l),c={position:o.position},m={left:Wt(o.left),top:Bt(o.top),bottom:Bt(o.bottom),right:Wt(o.right)},f='bottom'===a?'top':'bottom',h='right'===i?'left':'right',b=j('transform');if(n='bottom'==f?-d.height+m.bottom:m.top,p='right'==h?-d.width+m.right:m.left,s&&b)c[b]='translate3d('+p+'px, '+n+'px, 0)',c[f]=0,c[h]=0,c.willChange='transform';else{var u='bottom'==f?-1:1,y='right'==h?-1:1;c[f]=n*u,c[h]=p*y,c.willChange=f+', '+h}var g={"x-placement":t.placement};return t.attributes=se({},g,t.attributes),t.styles=se({},c,t.styles),t.arrowStyles=se({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(t){return et(t.instance.popper,t.styles),at(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&et(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,a,i,o){var r=N(o,e,t,a.positionFixed),p=R(a.placement,r,e,t,a.modifiers.flip.boundariesElement,a.modifiers.flip.padding);return e.setAttribute('x-placement',p),et(e,{position:a.positionFixed?'fixed':'absolute'}),a},gpuAcceleration:void 0}}};var fe={};if(zt){var he=Element.prototype;fe=he.matches||he.matchesSelector||he.webkitMatchesSelector||he.mozMatchesSelector||he.msMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),a=e.length;0<=--a&&e.item(a)!==this;);return-1<a}}var e=fe,be={},ue=function(t){return function(e){return e===be&&t}},ye=function(){function t(e){for(var a in Vt(this,t),e)this[a]=e[a];this.state={destroyed:!1,visible:!1,enabled:!0},this._=ue({mutationObservers:[]})}return Qt(t,[{key:'enable',value:function(){this.state.enabled=!0}},{key:'disable',value:function(){this.state.enabled=!1}},{key:'show',value:function(t){var e=this;if(!this.state.destroyed&&this.state.enabled){var a=this.popper,i=this.reference,o=this.options,r=m(a),n=r.tooltip,s=r.backdrop,l=r.content;return o.dynamicTitle&&!i.getAttribute('data-original-title')||i.hasAttribute('disabled')?void 0:i.refObj||document.documentElement.contains(i)?void(o.onShow.call(a,this),t=wt(void 0===t?o.duration:t,0),vt([a,n,s],0),a.style.visibility='visible',this.state.visible=!0,St.call(this,function(){if(e.state.visible){if(Et.call(e)||e.popperInstance.scheduleUpdate(),Et.call(e)){e.popperInstance.disableEventListeners();var r=wt(o.delay,0),d=e._(be).lastTriggerEvent;d&&e._(be).followCursorListener(r&&e._(be).lastMouseMoveEvent?e._(be).lastMouseMoveEvent:d)}vt([n,s,s?l:null],t),s&&getComputedStyle(s)[p('transform')],o.interactive&&i.classList.add('tippy-active'),o.sticky&&Xt.call(e),xt([n,s],'visible'),Dt.call(e,t,function(){o.updateDuration||n.classList.add('tippy-notransition'),o.interactive&&kt(a),i.setAttribute('aria-describedby','tippy-'+e.id),o.onShown.call(a,e)})}})):void this.destroy()}}},{key:'hide',value:function(t){var e=this;if(!this.state.destroyed&&this.state.enabled){var a=this.popper,i=this.reference,o=this.options,r=m(a),p=r.tooltip,n=r.backdrop,s=r.content;o.onHide.call(a,this),t=wt(void 0===t?o.duration:t,1),o.updateDuration||p.classList.remove('tippy-notransition'),o.interactive&&i.classList.remove('tippy-active'),a.style.visibility='hidden',this.state.visible=!1,vt([p,n,n?s:null],t),xt([p,n],'hidden'),o.interactive&&-1<o.trigger.indexOf('click')&&kt(i),yt(function(){Dt.call(e,t,function(){e.state.visible||!o.appendTo.contains(a)||(!e._(be).isPreparingToShow&&(document.removeEventListener('mousemove',e._(be).followCursorListener),e._(be).lastMouseMoveEvent=null),e.popperInstance&&e.popperInstance.disableEventListeners(),i.removeAttribute('aria-describedby'),o.appendTo.removeChild(a),o.onHidden.call(a,e))})})}}},{key:'destroy',value:function(){var t=this,e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];if(!this.state.destroyed){this.state.visible&&this.hide(0),this.listeners.forEach(function(e){t.reference.removeEventListener(e.event,e.handler)}),this.title&&this.reference.setAttribute('title',this.title),delete this.reference._tippy;['data-original-title','data-tippy','data-tippy-delegate'].forEach(function(e){t.reference.removeAttribute(e)}),this.options.target&&e&&a(this.reference.querySelectorAll(this.options.target)).forEach(function(t){return t._tippy&&t._tippy.destroy()}),this.popperInstance&&this.popperInstance.destroy(),this._(be).mutationObservers.forEach(function(t){t.disconnect()}),this.state.destroyed=!0}}}]),t}(),ge=1,we=!1;return Ht.version='2.5.3',Ht.browser=qt,Ht.defaults=Kt,Ht.one=function(t,e){return Ht(t,e,!0).tooltips[0]},Ht.disableAnimations=function(){Kt.updateDuration=Kt.duration=0,Kt.animateFill=!1},function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'';if(zt&&qt.supported){var e=document.head||document.querySelector('head'),a=document.createElement('style');a.type='text/css',e.insertBefore(a,e.firstChild),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('.tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}'),Ht});





/**
 * Display a nice easy to use multiselect list
 * @Version: 2.4.15
 * @Author: Patrick Springstubbe
 * @Contact: @JediNobleclem
 * @Website: springstubbe.us
 * @Source: https://github.com/nobleclem/jQuery-MultiSelect
 *
 * Usage:
 *     $('select[multiple]').multiselect();
 *     $('select[multiple]').multiselect({ texts: { placeholder: 'Select options' } });
 *     $('select[multiple]').multiselect('reload');
 *     $('select[multiple]').multiselect( 'loadOptions', [{
 *         name   : 'Option Name 1',
 *         value  : 'option-value-1',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     },{
 *         name   : 'Option Name 2',
 *         value  : 'option-value-2',
 *         checked: false,
 *         attributes : {
 *             custom1: 'value1',
 *             custom2: 'value2'
 *         }
 *     }]);
 *
 **/
(function($){
    var defaults = {
        columns: 1,     // how many columns should be use to show options
        search : false, // include option search box

        // search filter options
        searchOptions : {
            delay        : 250,                  // time (in ms) between keystrokes until search happens
            showOptGroups: false,                // show option group titles if no options remaining
            searchText   : true,                 // search within the text
            searchValue  : false,                // search within the value
            onSearch     : function( element ){} // fires on keyup before search on options happens
        },

        // plugin texts
        texts: {
            placeholder    : 'Select options', // text to use in dummy input
            search         : 'Search',         // search input placeholder text
            selectedOptions: ' выбрано',      // selected suffix text
            selectAll      : 'Select all',     // select all text
            unselectAll    : 'Unselect all',   // unselect all text
            noneSelected   : 'None Selected'   // None selected text
        },

        // general options
        selectAll          : false, // add select all option
        selectGroup        : false, // select entire optgroup
        minHeight          : 200,   // minimum height of option overlay
        maxHeight          : null,  // maximum height of option overlay
        maxWidth           : null,  // maximum width of option overlay (or selector)
        maxPlaceholderWidth: null,  // maximum width of placeholder button
        maxPlaceholderOpts : 10,    // maximum number of placeholder options to show until "# selected" shown instead
        showCheckbox       : true,  // display the checkbox to the user
        checkboxAutoFit    : false,  // auto calc checkbox padding
        optionAttributes   : [],    // attributes to copy to the checkbox from the option element

        // Callbacks
        onLoad        : function( element ){},           // fires at end of list initialization
        onOptionClick : function( element, option ){},   // fires when an option is clicked
        onControlClose: function( element ){},           // fires when the options list is closed
        onSelectAll   : function( element, selected ){}, // fires when (un)select all is clicked
    };

    var msCounter    = 1; // counter for each select list
    var msOptCounter = 1; // counter for each option on page

    // FOR LEGACY BROWSERS (talking to you IE8)
    if( typeof Array.prototype.map !== 'function' ) {
        Array.prototype.map = function( callback, thisArg ) {
            if( typeof thisArg === 'undefined' ) {
                thisArg = this;
            }

            return $.isArray( thisArg ) ? $.map( thisArg, callback ) : [];
        };
    }
    if( typeof String.prototype.trim !== 'function' ) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    function MultiSelect( element, options )
    {
        this.element           = element;
        this.options           = $.extend( true, {}, defaults, options );
        this.updateSelectAll   = true;
        this.updatePlaceholder = true;
        this.listNumber        = msCounter;

        msCounter = msCounter + 1; // increment counter

        /* Make sure its a multiselect list */
        if( !$(this.element).attr('multiple') ) {
            throw new Error( '[jQuery-MultiSelect] Select list must be a multiselect list in order to use this plugin' );
        }

        /* Options validation checks */
        if( this.options.search ){
            if( !this.options.searchOptions.searchText && !this.options.searchOptions.searchValue ){
                throw new Error( '[jQuery-MultiSelect] Either searchText or searchValue should be true.' );
            }
        }

        /** BACKWARDS COMPATIBILITY **/
        if( 'placeholder' in this.options ) {
            this.options.texts.placeholder = this.options.placeholder;
            delete this.options.placeholder;
        }
        if( 'default' in this.options.searchOptions ) {
            this.options.texts.search = this.options.searchOptions['default'];
            delete this.options.searchOptions['default'];
        }
        /** END BACKWARDS COMPATIBILITY **/

        // load this instance
        this.load();
    }

    MultiSelect.prototype = {
        /* LOAD CUSTOM MULTISELECT DOM/ACTIONS */
        load: function() {
            var instance = this;

            // make sure this is a select list and not loaded
            if( (instance.element.nodeName != 'SELECT') || $(instance.element).hasClass('jqmsLoaded') ) {
                return true;
            }

            // sanity check so we don't double load on a select element
            $(instance.element).addClass('jqmsLoaded ms-list-'+ instance.listNumber ).data( 'plugin_multiselect-instance', instance );

            // add option container
            $(instance.element).after('<div id="ms-list-'+ instance.listNumber +'" class="ms-options-wrap"><button type="button"><span>None Selected</span></button><div class="ms-options"><ul></ul></div></div>');

            var placeholder = $(instance.element).siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> button:first-child');
            var optionsWrap = $(instance.element).siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');
            var optionsList = optionsWrap.find('> ul');

            // don't show checkbox (add class for css to hide checkboxes)
            if( !instance.options.showCheckbox ) {
                optionsWrap.addClass('hide-checkbox');
            }
            else if( instance.options.checkboxAutoFit ) {
                optionsWrap.addClass('checkbox-autofit');
            }

            // check if list is disabled
            if( $(instance.element).prop( 'disabled' ) ) {
                placeholder.prop( 'disabled', true );
            }

            // set placeholder maxWidth
            if( instance.options.maxPlaceholderWidth ) {
                placeholder.css( 'maxWidth', instance.options.maxPlaceholderWidth );
            }

            // override with user defined maxHeight
            if( instance.options.maxHeight ) {
                var maxHeight = instance.options.maxHeight;
            }
            else {
                // cacl default maxHeight
                var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
            }

            // maxHeight cannot be less than options.minHeight
            maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

            optionsWrap.css({
                maxWidth : instance.options.maxWidth,
                minHeight: instance.options.minHeight,
                maxHeight: maxHeight,
            });

            // isolate options scroll
            // @source: https://github.com/nobleclem/jQuery-IsolatedScroll
            optionsWrap.on( 'touchmove mousewheel DOMMouseScroll', function ( e ) {
                if( ($(this).outerHeight() < $(this)[0].scrollHeight) ) {
                    var e0 = e.originalEvent,
                        delta = e0.wheelDelta || -e0.detail;

                    if( ($(this).outerHeight() + $(this)[0].scrollTop) > $(this)[0].scrollHeight ) {
                        e.preventDefault();
                        this.scrollTop += ( delta < 0 ? 1 : -1 );
                    }
                }
            });

            // hide options menus if click happens off of the list placeholder button
            $(document).off('click.ms-hideopts').on('click.ms-hideopts', function( event ){
                if( !$(event.target).closest('.ms-options-wrap').length ) {
                    $('.ms-options-wrap.ms-active > .ms-options').each(function(){
                        $(this).closest('.ms-options-wrap').removeClass('ms-active');

                        var listID = $(this).closest('.ms-options-wrap').attr('id');

                        var thisInst = $(this).parent().siblings('.'+ listID +'.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if( typeof thisInst.options.onControlClose == 'function' ) {
                            thisInst.options.onControlClose( thisInst.element );
                        }
                    });
                }
            // hide open option lists if escape key pressed
            }).on('keydown', function( event ){
                if( (event.keyCode || event.which) == 27 ) { // esc key
                    $(this).trigger('click.ms-hideopts');
                }
            });

            // handle pressing enter|space while tabbing through
            placeholder.on('keydown', function( event ){
                var code = (event.keyCode || event.which);
                if( (code == 13) || (code == 32) ) { // enter OR space
                    placeholder.trigger( 'mousedown' );
                }
            });

            // disable button action
            placeholder.on( 'mousedown', function( event ){
                // ignore if its not a left click
                if( event.which && (event.which != 1) ) {
                    return true;
                }

                // hide other menus before showing this one
                $('.ms-options-wrap.ms-active').each(function(){
                    if( $(this).siblings( '.'+ $(this).attr('id') +'.jqmsLoaded')[0] != optionsWrap.parent().siblings('.ms-list-'+ instance.listNumber +'.jqmsLoaded')[0] ) {
                        $(this).removeClass('ms-active');

                        var thisInst = $(this).siblings( '.'+ $(this).attr('id') +'.jqmsLoaded').data('plugin_multiselect-instance');

                        // USER CALLBACK
                        if( typeof thisInst.options.onControlClose == 'function' ) {
                            thisInst.options.onControlClose( thisInst.element );
                        }
                    }
                });

                // show/hide options
                optionsWrap.closest('.ms-options-wrap').toggleClass('ms-active');

                // recalculate height
                if( optionsWrap.closest('.ms-options-wrap').hasClass('ms-active') ) {
                    optionsWrap.css( 'maxHeight', '' );

                    // override with user defined maxHeight
                    if( instance.options.maxHeight ) {
                        var maxHeight = instance.options.maxHeight;
                    }
                    else {
                        // cacl default maxHeight
                        var maxHeight = ($(window).height() - optionsWrap.offset().top + $(window).scrollTop() - 20);
                    }

                    if( maxHeight ) {
                        // maxHeight cannot be less than options.minHeight
                        maxHeight = maxHeight < instance.options.minHeight ? instance.options.minHeight : maxHeight;

                        optionsWrap.css( 'maxHeight', maxHeight );
                    }
                }
                else if( typeof instance.options.onControlClose == 'function' ) {
                    instance.options.onControlClose( instance.element );
                }
            }).click(function( event ){ event.preventDefault(); });

            // add placeholder copy
            if( instance.options.texts.placeholder ) {
                placeholder.find('span').text( instance.options.texts.placeholder );
            }

            // add search box
            if( instance.options.search ) {
                optionsList.before('<div class="ms-search"><input type="text" value="" placeholder="'+ instance.options.texts.search +'" /></div>');

                var search = optionsWrap.find('.ms-search input');
                search.on('keyup', function(){
                    // ignore keystrokes that don't make a difference
                    if( $(this).data('lastsearch') == $(this).val() ) {
                        return true;
                    }

                    // pause timeout
                    if( $(this).data('searchTimeout') ) {
                        clearTimeout( $(this).data('searchTimeout') );
                    }

                    var thisSearchElem = $(this);

                    $(this).data('searchTimeout', setTimeout(function(){
                        thisSearchElem.data('lastsearch', thisSearchElem.val() );

                        // USER CALLBACK
                        if( typeof instance.options.searchOptions.onSearch == 'function' ) {
                            instance.options.searchOptions.onSearch( instance.element );
                        }

                        // search non optgroup li's
                        var searchString = $.trim( search.val().toLowerCase() );
                        if( searchString ) {
                            optionsList.find('li[data-search-term*="'+ searchString +'"]:not(.optgroup)').removeClass('ms-hidden');
                            optionsList.find('li:not([data-search-term*="'+ searchString +'"], .optgroup)').addClass('ms-hidden');
                        }
                        else {
                            optionsList.find('.ms-hidden').removeClass('ms-hidden');
                        }

                        // show/hide optgroups based on if there are items visible within
                        if( !instance.options.searchOptions.showOptGroups ) {
                            optionsList.find('.optgroup').each(function(){
                                if( $(this).find('li:not(.ms-hidden)').length ) {
                                    $(this).show();
                                }
                                else {
                                    $(this).hide();
                                }
                            });
                        }

                        instance._updateSelectAllText();
                    }, instance.options.searchOptions.delay ));
                });
            }

            // add global select all options
            if( instance.options.selectAll ) {
                optionsList.before('<a href="#" class="ms-selectall global">' + instance.options.texts.selectAll + '</a>');
            }

            // handle select all option
            optionsWrap.on('click', '.ms-selectall', function( event ){
                event.preventDefault();

                instance.updateSelectAll   = false;
                instance.updatePlaceholder = false;

                var select = optionsWrap.parent().siblings('.ms-list-'+ instance.listNumber +'.jqmsLoaded');

                if( $(this).hasClass('global') ) {
                    // check if any options are not selected if so then select them
                    if( optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').length ) {
                        // get unselected vals, mark as selected, return val list
                        optionsList.find('li:not(.optgroup, .selected, .ms-hidden)').addClass('selected');
                        optionsList.find('li.selected input[type="checkbox"]:not(:disabled)').prop( 'checked', true );
                    }
                    // deselect everything
                    else {
                        optionsList.find('li:not(.optgroup, .ms-hidden).selected').removeClass('selected');
                        optionsList.find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop( 'checked', false );
                    }
                }
                else if( $(this).closest('li').hasClass('optgroup') ) {
                    var optgroup = $(this).closest('li.optgroup');

                    // check if any selected if so then select them
                    if( optgroup.find('li:not(.selected, .ms-hidden)').length ) {
                        optgroup.find('li:not(.selected, .ms-hidden)').addClass('selected');
                        optgroup.find('li.selected input[type="checkbox"]:not(:disabled)').prop( 'checked', true );
                    }
                    // deselect everything
                    else {
                        optgroup.find('li:not(.ms-hidden).selected').removeClass('selected');
                        optgroup.find('li:not(.ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop( 'checked', false );
                    }
                }

                var vals = [];
                optionsList.find('li.selected input[type="checkbox"]').each(function(){
                    vals.push( $(this).val() );
                });
                select.val( vals ).trigger('change');

                instance.updateSelectAll   = true;
                instance.updatePlaceholder = true;

                // USER CALLBACK
                if( typeof instance.options.onSelectAll == 'function' ) {
                    instance.options.onSelectAll( instance.element, vals.length );
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // add options to wrapper
            var options = [];
            $(instance.element).children().each(function(){
                if( this.nodeName == 'OPTGROUP' ) {
                    var groupOptions = [];

                    $(this).children('option').each(function(){
                        var thisOptionAtts = {};
                        for( var i = 0; i < instance.options.optionAttributes.length; i++ ) {
                            var thisOptAttr = instance.options.optionAttributes[ i ];

                            if( $(this).attr( thisOptAttr ) !== undefined ) {
                                thisOptionAtts[ thisOptAttr ] = $(this).attr( thisOptAttr );
                            }
                        }

                        groupOptions.push({
                            name   : $(this).text(),
                            value  : $(this).val(),
                            checked: $(this).prop( 'selected' ),
                            attributes: thisOptionAtts
                        });
                    });

                    options.push({
                        label  : $(this).attr('label'),
                        options: groupOptions
                    });
                }
                else if( this.nodeName == 'OPTION' ) {
                    var thisOptionAtts = {};
                    for( var i = 0; i < instance.options.optionAttributes.length; i++ ) {
                        var thisOptAttr = instance.options.optionAttributes[ i ];

                        if( $(this).attr( thisOptAttr ) !== undefined ) {
                            thisOptionAtts[ thisOptAttr ] = $(this).attr( thisOptAttr );
                        }
                    }

                    options.push({
                        name      : $(this).text(),
                        value     : $(this).val(),
                        checked   : $(this).prop( 'selected' ),
                        attributes: thisOptionAtts
                    });
                }
                else {
                    // bad option
                    return true;
                }
            });
            instance.loadOptions( options, true, false );

            // BIND SELECT ACTION
            optionsWrap.on( 'click', 'input[type="checkbox"]', function(){
                $(this).closest( 'li' ).toggleClass( 'selected' );

                var select = optionsWrap.parent().siblings('.ms-list-'+ instance.listNumber +'.jqmsLoaded');

                // toggle clicked option
                select.find('option[value="'+ $(this).val() +'"]').prop(
                    'selected', $(this).is(':checked')
                ).closest('select').trigger('change');

                // USER CALLBACK
                if( typeof instance.options.onOptionClick == 'function' ) {
                    instance.options.onOptionClick(instance.element, this);
                }

                instance._updateSelectAllText();
                instance._updatePlaceholderText();
            });

            // BIND FOCUS EVENT
            optionsWrap.on('focusin', 'input[type="checkbox"]', function(){
                $(this).closest('label').addClass('focused');
            }).on('focusout', 'input[type="checkbox"]', function(){
                $(this).closest('label').removeClass('focused');
            });

            // USER CALLBACK
            if( typeof instance.options.onLoad === 'function' ) {
                instance.options.onLoad( instance.element );
            }

            // hide native select list
            $(instance.element).hide();
        },

        /* LOAD SELECT OPTIONS */
        loadOptions: function( options, overwrite, updateSelect ) {
            overwrite    = (typeof overwrite == 'boolean') ? overwrite : true;
            updateSelect = (typeof updateSelect == 'boolean') ? updateSelect : true;

            var instance    = this;
            var select      = $(instance.element);
            var optionsList = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options > ul');
            var optionsWrap = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');

            if( overwrite ) {
                optionsList.find('> li').remove();

                if( updateSelect ) {
                    select.find('> *').remove();
                }
            }

            var containers = [];
            for( var key in options ) {
                // Prevent prototype methods injected into options from being iterated over.
                if( !options.hasOwnProperty( key ) ) {
                    continue;
                }

                var thisOption      = options[ key ];
                var container       = $('<li/>');
                var appendContainer = true;

                // OPTION
                if( thisOption.hasOwnProperty('value') ) {
                    if( instance.options.showCheckbox && instance.options.checkboxAutoFit ) {
                        container.addClass('ms-reflow');
                    }

                    // add option to ms dropdown
                    instance._addOption( container, thisOption );

                    if( updateSelect ) {
                        var selOption = $('<option value="'+ thisOption.value +'">'+ thisOption.name +'</option>');

                        // add custom user attributes
                        if( thisOption.hasOwnProperty('attributes') && Object.keys( thisOption.attributes ).length ) {
                            selOption.attr( thisOption.attributes );
                        }

                        // mark option as selected
                        if( thisOption.checked ) {
                            selOption.prop( 'selected', true );
                        }

                        select.append( selOption );
                    }
                }
                // OPTGROUP
                else if( thisOption.hasOwnProperty('options') ) {
                    var optGroup = $('<optgroup label="'+ thisOption.label +'"></optgroup>');

                    optionsList.find('> li.optgroup > span.label').each(function(){
                        if( $(this).text() == thisOption.label ) {
                            container       = $(this).closest('.optgroup');
                            appendContainer = false;
                        }
                    });

                    // prepare to append optgroup to select element
                    if( updateSelect ) {
                        if( select.find('optgroup[label="'+ thisOption.label +'"]').length ) {
                            optGroup = select.find('optgroup[label="'+ thisOption.label +'"]');
                        }
                        else {
                            select.append( optGroup );
                        }
                    }

                    // setup container
                    if( appendContainer ) {
                        container.addClass('optgroup');
                        container.append('<span class="label">'+ thisOption.label +'</span>');
                        container.find('> .label').css({
                            clear: 'both'
                        });

                        // add select all link
                        if( instance.options.selectGroup ) {
                            container.append('<a href="#" class="ms-selectall">' + instance.options.texts.selectAll + '</a>');
                        }

                        container.append('<ul/>');
                    }

                    for( var gKey in thisOption.options ) {
                        // Prevent prototype methods injected into options from
                        // being iterated over.
                        if( !thisOption.options.hasOwnProperty( gKey ) ) {
                            continue;
                        }

                        var thisGOption = thisOption.options[ gKey ];
                        var gContainer  = $('<li/>');
                        if( instance.options.showCheckbox && instance.options.checkboxAutoFit ) {
                            gContainer.addClass('ms-reflow');
                        }

                        // no clue what this is we hit (skip)
                        if( !thisGOption.hasOwnProperty('value') ) {
                            continue;
                        }

                        instance._addOption( gContainer, thisGOption );

                        container.find('> ul').append( gContainer );

                        // add option to optgroup in select element
                        if( updateSelect ) {
                            var selOption = $('<option value="'+ thisGOption.value +'">'+ thisGOption.name +'</option>');

                            // add custom user attributes
                            if( thisGOption.hasOwnProperty('attributes') && Object.keys( thisGOption.attributes ).length ) {
                                selOption.attr( thisGOption.attributes );
                            }

                            // mark option as selected
                            if( thisGOption.checked ) {
                                selOption.prop( 'selected', true );
                            }

                            optGroup.append( selOption );
                        }
                    }
                }
                else {
                    // no clue what this is we hit (skip)
                    continue;
                }

                if( appendContainer ) {
                    containers.push( container );
                }
            }
            optionsList.append( containers );

            // pad out label for room for the checkbox
            if( instance.options.checkboxAutoFit && instance.options.showCheckbox && !optionsWrap.hasClass('hide-checkbox') ) {
                var chkbx = optionsList.find('.ms-reflow:eq(0) input[type="checkbox"]');
                if( chkbx.length ) {
                    var checkboxWidth = chkbx.outerWidth();
                        checkboxWidth = checkboxWidth ? checkboxWidth : 15;

                    optionsList.find('.ms-reflow label').css(
                        'padding-left',
                        (parseInt( chkbx.closest('label').css('padding-left') ) * 2) + checkboxWidth
                    );

                    optionsList.find('.ms-reflow').removeClass('ms-reflow');
                }
            }

            // update placeholder text
            instance._updatePlaceholderText();

            // RESET COLUMN STYLES
            optionsWrap.find('ul').css({
                'column-count'        : '',
                'column-gap'          : '',
                '-webkit-column-count': '',
                '-webkit-column-gap'  : '',
                '-moz-column-count'   : '',
                '-moz-column-gap'     : ''
            });

            // COLUMNIZE
            if( select.find('optgroup').length ) {
                // float non grouped options
                optionsList.find('> li:not(.optgroup)').css({
                    'float': 'left',
                    width: (100 / instance.options.columns) +'%'
                });

                // add CSS3 column styles
                optionsList.find('li.optgroup').css({
                    clear: 'both'
                }).find('> ul').css({
                    'column-count'        : instance.options.columns,
                    'column-gap'          : 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap'  : 0,
                    '-moz-column-count'   : instance.options.columns,
                    '-moz-column-gap'     : 0
                });

                // for crappy IE versions float grouped options
                if( this._ieVersion() && (this._ieVersion() < 10) ) {
                    optionsList.find('li.optgroup > ul > li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) +'%'
                    });
                }
            }
            else {
                // add CSS3 column styles
                optionsList.css({
                    'column-count'        : instance.options.columns,
                    'column-gap'          : 0,
                    '-webkit-column-count': instance.options.columns,
                    '-webkit-column-gap'  : 0,
                    '-moz-column-count'   : instance.options.columns,
                    '-moz-column-gap'     : 0
                });

                // for crappy IE versions float grouped options
                if( this._ieVersion() && (this._ieVersion() < 10) ) {
                    optionsList.find('> li').css({
                        'float': 'left',
                        width: (100 / instance.options.columns) +'%'
                    });
                }
            }

            // update un/select all logic
            instance._updateSelectAllText();
        },

        /* UPDATE MULTISELECT CONFIG OPTIONS */
        settings: function( options ) {
            this.options = $.extend( true, {}, this.options, options );
            this.reload();
        },

        /* RESET THE DOM */
        unload: function() {
            $(this.element).siblings('#ms-list-'+ this.listNumber +'.ms-options-wrap').remove();
            $(this.element).show(function(){
                $(this).css('display','').removeClass('jqmsLoaded');
            });
        },

        /* RELOAD JQ MULTISELECT LIST */
        reload: function() {
            // remove existing options
            $(this.element).siblings('#ms-list-'+ this.listNumber +'.ms-options-wrap').remove();
            $(this.element).removeClass('jqmsLoaded');

            // load element
            this.load();
        },

        // RESET BACK TO DEFAULT VALUES & RELOAD
        reset: function() {
            var defaultVals = [];
            $(this.element).find('option').each(function(){
                if( $(this).prop('defaultSelected') ) {
                    defaultVals.push( $(this).val() );
                }
            });

            $(this.element).val( defaultVals );

            this.reload();
        },

        disable: function( status ) {
            status = (typeof status === 'boolean') ? status : true;
            $(this.element).prop( 'disabled', status );
            $(this.element).siblings('#ms-list-'+ this.listNumber +'.ms-options-wrap').find('button:first-child')
                .prop( 'disabled', status );
        },

        /** PRIVATE FUNCTIONS **/
        // update the un/select all texts based on selected options and visibility
        _updateSelectAllText: function(){
            if( !this.updateSelectAll ) {
                return;
            }

            var instance = this;

            // select all not used at all so just do nothing
            if( !instance.options.selectAll && !instance.options.selectGroup ) {
                return;
            }

            var optionsWrap = $(instance.element).siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');

            // update un/select all text
            optionsWrap.find('.ms-selectall').each(function(){
                var unselected = $(this).parent().find('li:not(.optgroup,.selected,.ms-hidden)');

                $(this).text(
                    unselected.length ? instance.options.texts.selectAll : instance.options.texts.unselectAll
                );
            });
        },

        // update selected placeholder text
        _updatePlaceholderText: function(){
            if( !this.updatePlaceholder ) {
                return;
            }

            var instance       = this;
            var select         = $(instance.element);
            var selectVals     = select.val() ? select.val() : [];
            var placeholder    = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> button:first-child');
            var placeholderTxt = placeholder.find('span');
            var optionsWrap    = select.siblings('#ms-list-'+ instance.listNumber +'.ms-options-wrap').find('> .ms-options');

            // if there are disabled options get those values as well
            if( select.find('option:selected:disabled').length ) {
                selectVals = [];
                select.find('option:selected').each(function(){
                    selectVals.push( $(this).val() );
                });
            }

            // get selected options
            var selOpts = [];
            for( var key in selectVals ) {
                // Prevent prototype methods injected into options from being iterated over.
                if( !selectVals.hasOwnProperty( key ) ) {
                    continue;
                }

                selOpts.push(
                    $.trim( select.find('option[value="'+ selectVals[ key ] +'"]').text() )
                );

                if( selOpts.length >= instance.options.maxPlaceholderOpts ) {
                    break;
                }
            }

            // UPDATE PLACEHOLDER TEXT WITH OPTIONS SELECTED
            placeholderTxt.text( selOpts.join( ', ' ) );

            if( selOpts.length ) {
                optionsWrap.closest('.ms-options-wrap').addClass('ms-has-selections');
            }
            else {
                optionsWrap.closest('.ms-options-wrap').removeClass('ms-has-selections');
            }

            // replace placeholder text
            if( !selOpts.length ) {
                placeholderTxt.text( instance.options.texts.placeholder );
            }
            // if copy is larger than button width use "# selected"
            else if( (placeholderTxt.width() > placeholder.width()) || (selOpts.length != selectVals.length) ) {
                placeholderTxt.text( selectVals.length + instance.options.texts.selectedOptions );
            }
        },

        // Add option to the custom dom list
        _addOption: function( container, option ) {
            var instance = this;
            var thisOption = $('<label/>', {
                for : 'ms-opt-'+ msOptCounter,
                text: option.name
            });

            var thisCheckbox = $('<input>', {
                type : 'checkbox',
                title: option.name,
                id   : 'ms-opt-'+ msOptCounter,
                value: option.value
            });

            // add user defined attributes
            if( option.hasOwnProperty('attributes') && Object.keys( option.attributes ).length ) {
                thisCheckbox.attr( option.attributes );
            }

            if( option.checked ) {
                container.addClass('default selected');
                thisCheckbox.prop( 'checked', true );
            }

            thisOption.prepend( thisCheckbox );

            var searchTerm = '';
            if( instance.options.searchOptions.searchText ) {
                searchTerm += ' ' + option.name.toLowerCase();
            }
            if( instance.options.searchOptions.searchValue ) {
                searchTerm += ' ' + option.value.toLowerCase();
            }

            container.attr( 'data-search-term', $.trim( searchTerm ) ).prepend( thisOption );

            msOptCounter = msOptCounter + 1;
        },

        // check ie version
        _ieVersion: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        }
    };

    // ENABLE JQUERY PLUGIN FUNCTION
    $.fn.multiselect = function( options ){
        if( !this.length ) {
            return;
        }

        var args = arguments;
        var ret;

        // menuize each list
        if( (options === undefined) || (typeof options === 'object') ) {
            return this.each(function(){
                if( !$.data( this, 'plugin_multiselect' ) ) {
                    $.data( this, 'plugin_multiselect', new MultiSelect( this, options ) );
                }
            });
        } else if( (typeof options === 'string') && (options[0] !== '_') && (options !== 'init') ) {
            this.each(function(){
                var instance = $.data( this, 'plugin_multiselect' );

                if( instance instanceof MultiSelect && typeof instance[ options ] === 'function' ) {
                    ret = instance[ options ].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                // special destruct handler
                if( options === 'unload' ) {
                    $.data( this, 'plugin_multiselect', null );
                }
            });

            return ret;
        }
    };
}(jQuery));