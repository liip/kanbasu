<a name="2.5.0-beta.0"></a>
# [2.5.0-beta.0](https://github.com/liip/kanbasu/compare/2.4.0...2.5.0-beta.0) (2019-03-04)


### Features

* Introduce flex helpers (resolve [#62](https://github.com/liip/kanbasu/issues/62)) ([7ff1d3a](https://github.com/liip/kanbasu/commit/7ff1d3a))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/liip/kanbasu/compare/2.4.0-beta.1...2.4.0) (2019-01-14)



<a name="2.4.0-beta.1"></a>
# [2.4.0-beta.1](https://github.com/liip/kanbasu/compare/2.4.0-beta.0...2.4.0-beta.1) (2018-11-21)


### Bug Fixes

* **media:** target only direct children to prevent unintentional inheritance while nested ([45f2429](https://github.com/liip/kanbasu/commit/45f2429))



<a name="2.4.0-beta.0"></a>
# [2.4.0-beta.0](https://github.com/liip/kanbasu/compare/2.3.0...2.4.0-beta.0) (2018-11-20)


### Features

* **align:** ensure helper takes precedence over other styles ([b6d75e2](https://github.com/liip/kanbasu/commit/b6d75e2))
* **btn:** do not style button with « disabled » attribute ([c4c036c](https://github.com/liip/kanbasu/commit/c4c036c))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/liip/kanbasu/compare/2.2.1...2.3.0) (2018-10-23)


### Bug Fixes

* **Pusher:** disable wrapping for vertical variant ([2167c32](https://github.com/liip/kanbasu/commit/2167c32))


### Features

* Introduce field--inline variant, fix [#60](https://github.com/liip/kanbasu/issues/60) ([d8f8f26](https://github.com/liip/kanbasu/commit/d8f8f26))
* Introduce screen-readers-only mixin ([998083b](https://github.com/liip/kanbasu/commit/998083b))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/liip/kanbasu/compare/2.2.0...2.2.1) (2018-06-14)


### Features

* **Display:** add placeholder selector for visible-sr ([c496bfe](https://github.com/liip/kanbasu/commit/c496bfe))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/liip/kanbasu/compare/2.1.0...2.2.0) (2018-05-03)


### Bug Fixes

* **Container:** Ensure correct width inside flex context ([50c0968](https://github.com/liip/kanbasu/commit/50c0968))


### Features

* **Buttons:** Remove border on bare button ([3c4a651](https://github.com/liip/kanbasu/commit/3c4a651))
* **Forms:** Allow to customize form groups spacing with dedicated variable ([2ff9168](https://github.com/liip/kanbasu/commit/2ff9168))
* **Display:** Apply `.hidden` class behavior to `[hidden]` attribute as well ([cb20015](https://github.com/liip/kanbasu/commit/cb20015))



# 2.1.0

### Added

* Full right-to-left languages support! [Read more](http://kanbasu.liip.ch/2/docs/text-direction.html)
* Binary to simplify scaffolding command, thanks @greut


# 2.0.0

### Changed

* The flex grid becomes the default, the legacy inline-block version has been removed as well as the `$grid-flex` option
* `%clearfix` placeholder selector gets replaced by a `clearfix()` mixin
* Media component is now made with Flex, with alternate gutter sizes and customizable vertical alignment
* Move `list-inline` to flex & introduce `center`, `right` and `justified` alignments
* No more auto-styling of form elements, a class is always required (`.field`, `.label`, `.checkbox`, …)
* `field--large` and `select--large` have been merged into `field--large`
* `field--small` and `select--small` have been merged into `field--small`
* Use default operating system font for default font-family
* The documentation has been completely reviewed and is now powered by [Fractal](http://fractal.build/)
* Function `parseInt` is now named `parse-int` for consistency

### Added

* Introduce `grid--even` for equal grid items height per row
* New `text-nowrap` and `text-wrap` helpers
* Introduce alignment helper to align block elements (including images) easily
* More flexibility on default values with `$btn-font-family`, `$btn-small-border`, `$btn-large-border`, `$field-small-border` and `$field-large-border`
* New components: container, pusher & table-responsive
* New mixins: headings, clearfix, text-wrap

### Removed

* Mosaic component has been removed, use grid or media instead
* Drop positionning classes `h-align`, `v-align` and `vh-align`
* `$btn-use-padding-ratio` and `$field-use-padding-ratio` have been removed, buttons and fields default padding changed accordingly
* Legacy media query variables `$mq-xs`, `$mq-sm`, `$mq-md` & `$mq-lg` are gone


# 1.7.0

* Do not remove margins on first/last children of `.box` element (prevent `.grid--multiline` to work properly)


## 1.6.1

* Exclude more useless files from NPM module archive


# 1.6.0

* Remove optional/documentation-related files from the NPM package (see .npmignore)
* Generate all alternative spacings classes using a mixin based on new $spacings variable
* Introduce `.grid--multiline` to add space between grid rows
* Add `$btn-font-size` settings to allow changing default button font-size
* Do not remove margins on first/last children of `.media__body` element (prevent `.grid--multiline` to work properly)
* Apply disabled form fields styling also to read-only fields


# 1.5.0

* Remove the declaration about links inside boxes which cause more headhache than solve problems
* Add per-breakpoint text alignment classes
* Allow more flexibility on fields’ padding with optional ratio ($field-use-padding-ratio)


# 1.4.0

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


# 1.3.0

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


# 1.2.0

* Add basic styling for disabled input
* Improve documentation readability and usability
* Expose inputs typography styling as variables
* Add documentation for box component
* Extend input size classes to select element


## 1.1.1

* Apply default styling to input type datetime & datetime-local
* Correctly set $namespace as !default value (Thanks @maiis)


# 1.1.0

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


# 1.0.0

* Initial release
