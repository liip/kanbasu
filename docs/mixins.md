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

## clearfix()

The famous self-clear technique.

```scss
.foo {
  @include clearfix();
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
