require "staticmatic/compass"

project_type = :staticmatic

# CSS output style - :nested, :expanded, :compact, or :compressed
output_style          = :expanded

# Determine whether Compass asset helper functions generate relative
# or absolute paths
relative_assets       = false

# Set to true for easier debugging
line_comments         = false


ROOT = File.join(File.dirname(__FILE__), '/')

# Project path, must be set for Compass to work 
project_path          = ROOT

# File system locations
sass_dir              = '../src/stylesheets'
images_dir            = '../site/images'
http_images_path = '/images'


# Learn more: http://compass-style.org/docs/tutorials/configuration-reference/
