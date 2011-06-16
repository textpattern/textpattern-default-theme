# txp-h5bp-theme: a replacement for the Textpattern CMS default theme

This project is designed as a replacement for the default theme that comes as standard with the Textpattern CMS. It is intended as a starting point for new users learning Textpattern for the first time or existing users that want to adapt their current code for modern standards, and is not intended as a finished production theme (though can could use it as such if you want to).

#### Features

1. The code is commented throughout with helpful information to help you learn some of the techniques and tags available within Textpattern.
2. Current best practices gathered from all over the web - in particular the [HTML5 Boilerplate](http://html5boilerplate.com/).
3. Responsive CSS adapts to various device screen sizes.
4. No images used at all.
5. Tested on a wide range of devices, browsers and operating systems.

You can see the latest version of the theme running at http://www.philwareham.co.uk/.

## How to use these files

Textpattern differs from many CMS solutions in that it stores the all template files (used to build the final page a browser sees) directly in the database as 'styles' (the CSS styling), 'pages' (the main page templates) and 'forms' snippets of code and logic that form building blocks within the 'pages'.

However, many of us like to use our preferred IDE (integrated development environment) to write code and leverage all the tools those applications provide to make code writing easier. That means you will have to copy/paste from your IDE into the corresponding parts of the Textpattern admin-side which adds a bit of time.

With CSS files you could simply use external stylesheet and link in the traditional way (see below). However there is another solution in the form of the ['cnk_versioning' Textpattern plugin](http://forum.textpattern.com/viewtopic.php?id=27516), which effectively moves the 'styles', 'pages' and 'forms' back out of the database and into external directories for easier editing - a good solution when used in combination with an IDE. If you do use that plugin then dropping the files from this project into your correspondingly named directories will suffice. Detailed information on how to use ckn_versioning is [available at the Textpattern forum](http://forum.textpattern.com/viewtopic.php?id=27516).

### CSS

#### /css/default.css

You can either copy/paste the whole stylesheet into admin area > presentation > style > default, and link as:

    <txp:css format="link" />

or serve as an external stylesheet and link as (for example):

    <link rel="stylesheet" href="/css/default.css">

There are advantages/disadvanatges to both methods...

Keeping style within the database by using the first method means you can make adjustments to the code without the need for FTP or a text editor, but is less flexible because you either lose the tools available in a dedicated IDE (integrated development environment) or have to paste your new code from the IDE which is time consuming. You can however make use of versioning tools such as 'cnk_versioning' Textpattern plugin to streamline this process somewhat (see above).

The second method is much more traditional and flexible though it relies on you having FTP access to change the CSS files.

### Forms

The forms follow the cnk_versioning standard of labelling, in that 'xxxx.misc.txp' is a misc type form, 'xxxx.article.txp' is an article type form, etc. This is only for file structure, when you actually create new forms within Textpattern you should **not** include the '.xxxx.txp', just the first part of the filename. See the analytics form description below.

#### /forms/analytics.misc.txp

Add your unique Google Analytics ID into the code where indicated. Create a new form in the system with name 'analytics' and type 'misc', then copy/paste the code from this file into it, and save it. 

#### /forms/files.file.txp

Copy/paste over the existing form of the same name that was part of the standard Textpattern install. You can call this form from within an article by simply using `<txp:file_download id="xxx" />`. You can also call this form from other any other forms and pages using the same method as above (just mind your `<p>`'s).

#### /forms/search_input.misc.txp

Copy/paste over the existing form of the same name that was part of the standard Textpattern install. Note that this form makes use of the following tag:

    <txp:text />

Which is used to target language strings from the language you set in the Textpattern preferences. For example to display 'Search' in your chosen language the tag would be:

    <txp:text item="search" />

You can get a idea of the items you can target with this tag by looking through the specific language file within the textpattern > lang directory which was created as part of your installation. Personally I would not use this tag very often unless I was designing a multi-language site as it adds needlessly to the amount of PHP database calls (that is also true for other tags such as `<txp:site_name />`) - it's included here purely as an example of what the tag is for.

**CURRENTLY INCOMPLETE - MORE FORMS TO BE ADDED SOON**

### Pages

#### /pages/archive.txp

This page template is utilised when viewing a list of articles.

Copy/paste over the existing page of the same name that was part of the standard Textpattern install.

#### /pages/default.txp

This page template is utilised as the standard page layout.

Copy/paste over the existing page of the same name that was part of the standard Textpattern install.

#### /pages/error_default.txp

This page template is utilised when viewing a page error (such as a 404 page not found).

Copy/paste over the existing page of the same name that was part of the standard Textpattern install

### JavaScript

#### /js/libs/jquery.js

The ubiquitous jQuery JavaScript library used on thousands of sites worldwide. Although the theme contains no elements that actually require jQuery, it is included here for convenience.

Note that preferred link is via Google's CDN hosted copy of jQuery, with a fallback to the locally hosted copy if the CDN is unavailable.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="/js//libs/jquery.js"><\/script>')</script>

The advantages of using the CDN version over your own hosted copy is threefold - one, it saves bandwidth on your own server; two, Google's servers are extremely low latency and high bandwidth; three, there is a fair chance an end user will already have a copy of Google's CDN jQuery already cached in their browser if they have been to another site that has also used this method to provide jQuery, that means they will not have to reload it and ultimately makes your site render quicker - bonus points!

#### /js/libs/modernizr.js

The theme uses [Modernizr](http://www.modernizr.com/) to provide a HTML5 shim for older pre-HTML5 browsers. Modernizr is a great tool that also equips you with a set of tests that can be used to help provide a good experience to all end users, regardless of their browser choice (within limits!) - techniques commonly known as 'progressive enhancement' or 'graceful degradation' depending on whether you add features for capable browsers or provide fallback methods for less-capable browsers respectively.

It is strongly recommended that you read the Modernizr documentation available at their website and then build you own streamlined version of Modernizr with just the tests you'll actually foresee yourself using (the version included here is a full 'kitchen-sink' version with all tests included, not ideal for production use).
