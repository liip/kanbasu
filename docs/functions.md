**Notice:** most of the functions use values defined in the settings file by default.
The exact outputed value may differ from the examples below.

## rem($value<span class="text-muted">, $base: $base-font-size</span>)

Calculate the corresponding `rem` value proportionnaly to the `$base-font-size` or the
value of your choice when specified as the second parameter.

```scss
font-size: rem(24px); //-> font-size: 1.5rem;
font-size: rem(30px, 15px); //-> font-size: 2rem;
```

## ratio($value<span class="text-muted">, $ratio: $ratio</span>)

Divide the given value by the `$ratio` rounded down. Useful to create “visually equal” spacings as
mathematically equal spacings never "visually" look equal around text.

```scss
padding: ratio(24px) 24px; //-> padding: 14px 24px;
```

## parse-int($value)

Return the value without unit.

```scss
parse-int(10px) //-> 10
```
