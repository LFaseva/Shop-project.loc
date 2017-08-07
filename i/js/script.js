/**
 * Created by lfase on 30.06.2017.
 */
svg4everybody();
jQuery(document).ready(function($) {
    $('#lightSlider').lightSlider({
        item: 1,
        adaptiveHeight: true,
        slideMove:1,
        speed:500,
        slideMargin:30,
        loop:true,
        rtl:false,
        auto:true,
    });
    $(function() {
        $(window).scroll(function() {
           if($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });

});
