# CHANGELOG

## 2.0.0

* The flex grid becomes the default, the legacy inline-block version has been removed as well as the $grid-flex option
* %clearfix placeholder selector gets replaced by a clearfix() mixin
* Introduce `grid--even` for equal grid items height per row
* Mosaic component has been removed, use grid or media instead
* Media component is now made with Flex, with alternate gutter sizes and customizable vertical alignment
* `text-nowrap` helper was added
* Move `list-inline` to flex & introduce `center`, `right` and `justified` alignments
* Drop positionning classes `h-align`, `v-align` and `vh-align`
* Introduce alignment helper to align block elements (including images) easily

## Unreleased

* Do not remove margins on first/last children of `.box` element (prevent `.grid--multiline` to work properly).

## 1.6.0

* Remove optional/documentation-related files from the NPM package (see .npmignore)
* Generate all alternative spacings classes using a mixin based on new $spacings variable
* Introduce `.grid--multiline` to add space between grid rows
* Add `$btn-font-size` settings to allow changing default button font-size
* Do not remove margins on first/last children of `.media__body` element (prevent `.grid--multiline` to work properly)
* Apply disabled form fields styling also to read-only fields

## 1.5.0

* Remove the declaration about links inside boxes which cause more headhache than solve problems
* Add per-breakpoint text alignment classes
* Allow more flexibility on fields’ padding with optional ratio ($field-use-padding-ratio)

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
