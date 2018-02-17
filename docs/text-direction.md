By default, Kanbasu build a stylesheet for left-to-right languages. To switch to right-to-left, set the `$rtl` setting to `true`.

This will flip all the properties/values so the layout looks good with a right-to-left text direction.

The tools used to make this switch possible comes from [GEL Sass tools](https://github.com/bbc/gel-sass-tools). Here’s an excerpt from the documentation:

## RTL Tools

Support for Right-to-Left language is offered via two methods to flip CSS styles: interpolated properties and the `flip()` function.

Interpolation should be used for any property which has a direction (e.g. `padding-left`, `margin-right`, `border-right`, `left`, etc), `flip()` should be used for all other properties.

### Which properties need to be flipped?

- `background`
- `background-position`
- `border`
- `border-radius`
- `clear`
- `cursor`
- `direction`
- `float`
- `left/right`
- `margin`
- `padding`
- `text-align`
- `text-indent`

### Flip

Taking the following CSS as an example:

```sass
// Original Sass
.my-component {
  float: left;
}
```

For a RTL layout, `float: left;` should be flipped to `float: right;`. We can use the `flip()` function to accomplish this.

```sass
// Flipped Sass
.my-component {
  float: flip(left, right);
}
```

When Sass comes across the `flip()` function, it will check the value of the `$rtl` variable. If `$rtl` is `false`, the `flip()` function will take the first parameter. If `$rtl` is `true`, the `flip()` function will take the second parameter.

The Sass will compile out as follows:

```sass
// Compiled LTR style
.my-component {
  float: left;
}

// Compiled RTL style
.my-component {
  float: right;
}
```

### Interpolation

Interpolation is used to adjust CSS properties which contain a direction within their name. For example `padding-left` would need to change to `padding-right` in a RTL context. Our interpolation technique works by changing the value of variables based on the value of the `$rtl` variable.

Taking the following CSS as an example:

```sass
// Original Sass
.my-component {
  padding-left: $default-spacing-unit;
}
```

For a RTL layout, `padding-left` should be flipped to `padding-right`.

In order to flip this, we have to interpolate the style property:

```sass
// Flipped Sass
.my-component {
  #{$padding-left}: $default-spacing-unit;
}
```

This will compile out to:

```sass
// Compiled LTR style
.my-component {
  padding-left: 24px;
}

// Compiled RTL style
.my-component {
  padding-right: 24px;
}
```

### Best practices & Tips

- Don't flip everything! Only flip what needs to be flipped. This will help keep the CSS as clean and predictable as possible.
- Styles which are hiding elements by pushing them off the screen (e.g. `text-align: -320px;` or `right: 5000%;`) don't need to be flipped unless they are being transitioned or overridden.
- If left and right properties have the same values in the same selector, they don't need to be flipped (e.g. `margin-left: 0;` `margin-right: 0;`)
