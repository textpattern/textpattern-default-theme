# txp-h5bp-theme: a replacement for Textpattern default theme

This project is designed as a replacement for the default theme that comes as standard with the Textpattern CMS. It is intended as a starting point for new users or existing users that want to adapt their current code and is not intended as a finished theme (though you could use it 'as is' if you want to).

## How to use these files

Textpattern differs from many CMS solutions in that it stores the all template files (used to build the final page a browser sees) directly in the mySQL database as 'styles' (the CSS styling), 'pages' (the main page templates) and 'forms' snippets of code and logical that form building blocks within the 'pages'.

However, many of us like to use our preferred IDE (integrated development environment) to write code and leverage all the tools those applications provide to make code writing easier. That means you will have to copy/paste from your IDE into the corresponding parts of the Textpattern admin-side which adds a bit of time.

With CSS files you could simply use external stylesheet and link in the traditional way (see below). However there is another solution in the form of the 'cnk_versioning' Textpattern plugin (http://forum.textpattern.com/viewtopic.php?id=27516), which effectively moves the 'styles', 'pages' and 'forms' back out of the database and into external directories for easier editing - a good solution when used in combination with an IDE.

### CSS

#### /css/textpattern.css

You can either copy/paste the whole stylesheet into admin area > presentation > style > default, and link as:

    <txp:css format="link" />

or serve as an external stylesheet and link as (for example):

    <link rel="stylesheet" href="/css/textpattern.css">

There are advantages/disadvanatges to both methods...

Keeping style within the database by using the first method means you can make adjustments to the code without the need for FTP or a text editor, but is less flexible because you either lose the tools available in a dedicated IDE (integrated development environment) or have to paste your new code from the IDE which is time consuming. You can however make use of versioning tools such as 'cnk_versioning' Textpattern plugin to streamline this process somewhat (see above).

The second method is much more traditional and flexible though it relies on you having FTP access to change the CSS files.

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

### Forms

TO BE DONE
