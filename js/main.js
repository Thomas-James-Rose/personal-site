$(window).on('scroll',function(){
    if (Math.round($(window).scrollTop()) > getElementBottom('page-header')) {
        $('#main-nav').addClass('topnav');
        $('#top-arrow').addClass('top-arrow-active')
    } else {
        $('#main-nav').removeClass('topnav');
        $('#top-arrow').removeClass('top-arrow-active')
    }
});

function getElementBottom(id) {
    return $('#' + id).offset().top + $('#' + id).height();
}
