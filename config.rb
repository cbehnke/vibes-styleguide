###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# General configuration
redirect "index.html", to: "introduction.html"
config[:trailing_slash] = false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
  activate :sprockets
  activate :directory_indexes
end

###
# Helpers
###

helpers do
  def check_current_path(path)
    if path == current_page.path
      return "active"
    end
  end
end

# Build-specific configuration
configure :build do
  activate :directory_indexes
end
