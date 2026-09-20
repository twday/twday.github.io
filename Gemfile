# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem "github-pages"#, "~> 228", group: :jekyll_plugins
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem 'thread_safe', '0.2.0'
gem "webrick", "~> 1.8"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end