txp-h5bp-theme: a replacement for Textpattern default theme
===========================================================

This project is designed as a replacement for the default theme that comes as standard with the Textpattern CMS. It is intended as a starting point for new users or existing users that want to adapt their current code and is not intended as a finished theme (though you could use it 'as is' if you want to).

How to use these files
----------------------

**BOOST** uses the 'mobile-first' methodology & to find out more, please read the excellent post 'Mobile First' by Luke Wroblewski at http://www.lukew.com/ff/entry.asp?933


## CSS

### style.css
Mostly a mix of the HTML5 Boilerplate & Inuit.css. Watch out for the .keywords (line ~201), .message (line ~362) & the non-semantic but very useful helper classes (line ~674)

### forms.css
Mostly styles from http://formalize.me with a small amount from Inuit

### handheld.css
Straight from the HTML5 Boilerplate

## HTML
1.	Mixture of '320 and up' & HTML5 Boilerplate.
2.	example.html has almost every 

## Javascript 

### script.js
Fix for orientation change glitch in iOS

### helper.js
Mobile related fixes & utilities


### Polyfills
1.	respond.js - get mediaqueries working in older browsers
2.	imgsizer.js - better responsive images in Internet Explorer (Find out more: )
3.	dd_belatedpng.js - transparent png support in IE6

