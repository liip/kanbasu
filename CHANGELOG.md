# CHANGELOG

## Current development

* Remove the declaration about links inside boxes which cause more headhache than solve problems

## 1.4.0

* Add silent-classes in addition to classes where it makes sense to extend, fix #33
* Allow more flexibility on buttons’ padding with optional ratio ($btn-use-padding-ratio)
* Introduce optional flexbox grid ($grid-flex), fix #23
* Add media query shortcut mixin
* Allow to pass a custom base font-size to rem function
* Document mixins and functions, fix #35

## 1.3.1

* Use percentage value for font-size on html element, fix #29
* Use EM unit for media queries, fix #31
* Introduce scaffolding script, fix #30

## 1.3.0

* **Change default breakpoints to be minimum width and above**
* $mq-xs, $mq-sm, $mq-md and $mq-lg are now deprecated
* Replace visibility helper by display helper with extended features
* Allow customization of media gutter size
* Introduce horizontal alignment for blocks
* Add heading classes for styling without semantic (.h1, .h2, …)
* Responsive embed matches element (iframe, object, embed) in addition to classes
* Allow top and bottom alignment of mosaic cells (.mosaic--top, .mosaic--bottom)
* Mosaic responsive target direct child only to allow nesting with default mosaic
* Add basic `<caption/>` styling
* Fix missing float clear on descriptions list

## 1.2.2

* Move awesomplete to dev dependencies

## 1.2.1

* Introduce visibility helper

## 1.2.0

* Add basic styling for disabled input
* Improve documentation readability and usability
* Expose inputs typography styling as variables
* Add documentation for box component
* Extend input size classes to select element

## 1.1.1

* Apply default styling to input type datetime & datetime-local
* Correctly set $namespace as !default value (Thanks @maiis)

## 1.1.0

* Vertically align list-inline elements in the middle
* Do not handle list-inline extra white space with font-size reset anymore
* Introduce responsive Mosaic component
* Allow component namespacing (Thanks @maiis)
* Moved "Embed responsive" from helpers to components

## 1.0.3

* Fix Sass compilation error due to missing $field-border-width
* Introduce Travis CI test of Sass compilation

## 1.0.2

* Reverse inline radios/checkboxes margin for better multiline

## 1.0.1

* Better getting started guide

## 1.0.0

* Initial release
