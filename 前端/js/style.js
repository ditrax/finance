(function($) {
    var oWidth, oHeight;
    //初始化字体
    var resetFontSize = function() {
        oWidth = $(window).width();
        oHeight = $(window).height();
        $('html').css("font-size", parseInt(oWidth / 75 * 10) + "px");
    }
    resetFontSize();
    $(window).resize(function() {
        resetFontSize();
    })
}(jQuery))