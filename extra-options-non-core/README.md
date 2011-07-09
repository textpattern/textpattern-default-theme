# Extra code options

This snippets of code are purely optional and allow you to extend the functionality of the original theme.

### Extra code option: analytics

Add [Google Analytics](http://www.google.com/analytics/) tracking to your pages.

#### /extra-options-non-core/analytics/analytics.misc.txp

you can either paste the contents of this form directly into the bottom your page templates (just before the `</body>` tag) or put a `<txp:output_form form="analytics" />` tag in the bottom of the your page templates instead, create a new form in the system with name of 'analytics' and type of 'misc', then copy/paste the code from this form into it. Add your unique Google Analytics ID into the code where indicated.

### Extra code option: chrome_frame

Add the option for politely informing any users of Internet Explorer 6 that they could install [Chrome Frame](http://code.google.com/chrome/chromeframe/) on their browser to support modern web page layouts.

#### /extra-options-non-core/chrome_frame/chrome_frame.misc.txp

You could also target IE 7 (or newer) if you so desired by amending the code `<!--[if lt IE 7]>` to `<!--[if lt IE 8]>` for example for IE 7 (the code `lt IE 8` means lower than IE 8).

#### /extra-options-non-core/jquery/

The ubiquitous [jQuery](http://jquery.com/) JavaScript library is used on thousands of sites worldwide.

#### /extra-options-non-core/jquery/jquery.txp

You can either paste the contents of this form directly into your page templates or put a `<txp:output_form form="jquery" />` tag in your page templates instead, create a new form in the system with name of 'jquery' and type of 'misc', then copy/paste the code from this form into it. Note that preferred link is via Google's CDN hosted copy of jQuery, with a fallback to the locally hosted copy if the CDN is unavailable.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="<txp:site_url />js/libs/jquery.js"><\/script>')</script>

The advantages of using the CDN version over your own hosted copy is threefold - one, it saves bandwidth on your own server; two, Google's servers are extremely low latency and high bandwidth; three, there is a fair chance an end user will already have a copy of Google's CDN jQuery already cached in their browser if they have been to another site that has also used this method to provide jQuery, that means they will not have to reload it and ultimately makes your site render quicker - bonus points!

#### /extra-options-non-core/jquery/js/jquery.js

Place this file into your root /js/ directory.