$(document).ready(function () {
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next1'),
        prevArrow: $('.prev1'),
        responsive: [
            {
                breakpoint: 1161,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    })
    $(".slick-dots li button").text("")
    //$(".slick-dots li button").css("backgroundColor", "red");


    // Tab js
    $('.happening .l-inner ul.tabs li').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('.happening .l-inner ul.tabs li').removeClass('active');
        $('.happen-container').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

    // Tab js world news
    $('.news-tab .l-inner .ab ul.tabs li').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('.news-tab .l-inner .ab ul.tabs li').removeClass('active');
        // $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })


    // Burger
    $('.menu-trigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        if ($('.nav ul li').hasClass('show')) {
            $('.nav ul li').removeClass('show');
        } else {
            $('.nav ul li').addClass('show');
        }
    });
});