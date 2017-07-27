---
title: Frenquently Asked Questions
---

## Kanbasu class names conflict with other stylesheets
If you’re introducing Kanbasu in an existing project, it’s recommended to prefix classes with a namespace. To do so, change the `$namespace` variable in the settings file.

## Changing settings break the build
This is most probably because you entered a wrong value or changed the type of it. Some values are used to calculate others and therefor have to be set in a specific unit (pixels for example).

## I need more widths in my grid
You need more than halves, thirds, fourths, fifths and sixths? Sure, you can add as many ratios as you need to the `$widths-columns` setting in your settings file. For example, if you need twelves, change it to: `12,6,5,4,3,2,1`. This will generate `w-1/12`, `w-5/12`, `w-7/12` & `w-11/12`.

## Some widths ratios doesn’t work
Are you trying to use `w-2/4` or `w-3/6`? Those are not generated because they are the same as `w-1/2`. To avoid bloating the code, we only keep the smallest possible.
