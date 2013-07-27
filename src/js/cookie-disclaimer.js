if (!$.cookie('acceptedCookies'))
{
    var disclaimer = $('<aside id="cookie-disclaimer"><div class="container"><p><strong>This website uses cookies to enhance your experience.</strong> By continuing to use this website you agree to cookies being placed on your computer. If you wish to use this website but do not wish for cookies to be placed on your computer you can change the settings in your internet browser. <a href="#" data-action="close">Close</a>.</p></div></aside>');
    $('body').prepend(disclaimer);
    $.cookie('acceptedCookies', 1, {expires: 1461});

    disclaimer.find('a').on('click', function (e)
    {
        e.preventDefault();

        disclaimer.slideUp('fast', function ()
        {
            disclaimer.remove();
        });
    });
}