**Notice:** most of the mixins use values defined in the settings file by default.
The exact outputed value may differ from the examples below.

## foreach-breakpoint(<span class="text-muted">$breakpoints: $breakpoints-default, $prefix: null</span>)

Loop through the given breakpoints list. Each iteration get the breakpoint name as `$breakpoint-name`.
Both parameters are optional.

```scss
@include foreach-breakpoint($breakpoints-default, 'screen and') {
  .#{$breakpoint-name}-text-center {
    text-align: center;
  }
}
```

Will generate:

```scss
@media screen and (min-width: 40.0625em) {
  .sm-text-center {
    text-align: center;
  }
}

@media screen and (min-width: 48.0625em) {
  .md-text-center {
    text-align: center;
  }
}

@media screen and (min-width: 64.0625em) {
  .lg-text-center {
    text-align: center;
  }
}
```

## foreach-alternative-spacing(<span class="text-muted">$spacings: $spacings</span>)

Loop through the given spacings list, defaults to `$spacings`. `$spacing-name` and `$spacing-value` are available inside the loop.

```scss
@include foreach-alternative-spacing() {
  .box--#{$spacing-name} {
    padding: #{$spacing-value};
  }
}
```

Will generate:

```scss
.box--tight {
  padding: 0;
}

.box--tiny {
  padding: 7px;
}

.box--small {
  padding: 14px;
}

.box--large {
  padding: 38px;
}

.box--huge {
  padding: 77px;
}
```

## media($mq<span class="text-muted">, $breakpoints: $breakpoints-default</span>)

Shortcut to scope content into a media query by using the breakpoint name as a parameter.

```scss
@include media('md') {
  .foo {
    bar: baz;
  }
}
```

Will generate:

```scss
@media (min-width: 48.0625em) {
  .foo {
    bar: baz;
  }
}
```

## clearfix

The famous self-clear technique.

```scss
.foo {
  @include clearfix;
}
```

Will generate:

```scss
.foo::after {
  content: '';
  display: table;
  clear: both;
}
```

## wrap-words

Wrap words with hyphenation when they can’t fit their container. Also available as `.text-wrap` helper class.

```scss
.foo {
  @include wrap-words;
}
```

Will generate:

```scss
.foo {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
}
```

## headings

Shortcut to match all heading levels.

```scss
@include headings {
  color: inherit;
}
```

Will generate:

```scss
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  color: inherit;
}
```
