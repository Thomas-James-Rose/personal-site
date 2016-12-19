// on scroll (source: http://stackoverflow.com/questions/28392145/change-css-after-scrolling)
$(window).on('scroll',function(){

    var headerbottom = $('#page-header').offset().top + $('#page-header').height();

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > headerbottom) {
        $('#main-nav').addClass('topnav');
        $('#top-arrow').addClass('top-arrow-active')
    } else {
        $('#main-nav').removeClass('topnav');
        $('#top-arrow').removeClass('top-arrow-active')
    }

});
