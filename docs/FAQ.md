---
title: Frenquently Asked Questions
---

## Why some classes are between parenthesis in code examples?
Those classes are required to make the documentation looks great but they are not required in the context of the example.

## Kanbasu class names conflict with other stylesheets
If you’re introducing Kanbasu in an existing project, it’s recommended to prefix classes with a namespace. To do so, change the `$namespace` variable in the settings file.

## Changing settings break the build
This is most probably because you entered a wrong value or changed the type of it. Some values are used to calculate others and therefor have to be set in a specific unit (pixels for example).
