#!/usr/bin/env ruby
result = `sass src/assets/scss/kanbasu.scss kanbasu.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('kanbasu.css')
puts "Sass compiled successfully"
