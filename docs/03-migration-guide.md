---
title: Migrating from version 1 to 2
---

This page describes the various changes required while migrating from Kanbasu 1 to 2. You may also want to have a look to the [Changelog](https://github.com/liip/kanbasu/blob/master/CHANGELOG.md).

## Mandatory

* Remove all imports of `components/mosaic` and `components/mosaic-responsive`, these components have been removed.
* Replace any usage of the `%clearfix` placeholder selector (most probably in @extend rules) to use the `clearfix` mixin instead.
* Rename any usage of the function `parseInt` to `parse-int`.
* Remove/replace any usage of positionning classes `h-align`, `v-align` and `vh-align`, these classes have been removed.
* Add `field` class to all your form elements (inputs except radios & checkboxes, select, textarea), those are no more styled by default.
* Add `checkbox` class to all checkbox inputs.
* Add `radio` class to all radio inputs.
* Add `label` class to all label elements.
* Change any usage of `select--large` class for `field--large`.
* Change any usage of `select--small` class for `field--small`.

## Recommended

* Remove all abandonned variables from your settings file:
  * `$mq-xs`
  * `$mq-sm`
  * `$mq-md`
  * `$mq-lg`
  * `$btn-use-padding-ratio`
  * `$field-use-padding-ratio`
  * `$grid-flex`
  * `$media-gutter`
  * `$mosaic-collapse`
* Add new variables to your settings file:
  * `$btn-font-family:                   inherit;`
  * `$btn-small-border:                  $btn-border;`
  * `$btn-large-border:                  $btn-border;`
  * `$field-small-border:                $field-border;`
  * `$field-large-border:                $field-border;`
  * `$container-gutter-width:            $spacing-unit-small;`
  * `$container-max-width:               1200px;`
  * `$table-responsive-collapse:         $screen-sm-max;`

## Depending on your project

* Import new components in your main Sass file:
  * `@import 'helpers/align';`
  * `@import 'components/container';`
  * `@import 'components/pusher';`
  * `@import 'components/table-responsive';`
* Check all your `list-inline` elements, since it now use flex it will no more follow text alignement. You should use `list-inline--center` or `list-inline--right` to position it horizontally.
* Check all your `media` elements, display flex can have a slightly different rendering in some cases.
