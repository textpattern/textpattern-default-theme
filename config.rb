# Require any additional Compass plugins here:

# Set this to the root of your project when deployed:
http_path = "../"

sass_path = "sass"
css_path = "css"
images_dir = "img"
fonts_dir = "fonts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# The environment mode. Defaults to :production, can also be :development
environment = :production

# Chrome needs a precision of 7 to round properly
Sass::Script::Number.precision = 7

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
