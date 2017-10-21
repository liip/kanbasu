The complete list of Kanbasu overridable settings.

<h3>Common</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$namespace</th>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Colors</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$brand-color</th>
      <td><code class="lang-scss">#6ea644</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$alt-color-lighter</th>
      <td><code class="lang-scss">#eee</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$alt-color-light</th>
      <td><code class="lang-scss">#999</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$alt-color</th>
      <td><code class="lang-scss">#777</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$alt-color-dark</th>
      <td><code class="lang-scss">#555</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$alt-color-darker</th>
      <td><code class="lang-scss">#333</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Typography</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$font-family-default</th>
      <td><code class="lang-scss">'Helvetica Neue', Helvetica, Arial, sans-serif</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$font-size-default</th>
      <td><code class="lang-scss">16px</code></td>
      <td>Must be in pixels.</td>
    </tr>
    <tr>
      <th>$font-size-small</th>
      <td><code class="lang-scss">.75rem</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$font-size-large</th>
      <td><code class="lang-scss">1.5rem</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$line-height-default</th>
      <td><code class="lang-scss">1.45</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$text-color</th>
      <td><code class="lang-scss">$alt-color-darker</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$link-color</th>
      <td><code class="lang-scss">$brand-color</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$muted-color</th>
      <td><code class="lang-scss">transparentize($text-color,.4)</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Spacings</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$ratio</th>
      <td><code class="lang-scss">1.61803398875</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$spacing-unit-default</th>
      <td><code class="lang-scss">24px</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$spacing-unit-tiny</th>
      <td><code class="lang-scss">floor($spacing-unit-default / ($ratio * 2))</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$spacing-unit-small</th>
      <td><code class="lang-scss">floor($spacing-unit-default / $ratio)</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$spacing-unit-large</th>
      <td><code class="lang-scss">floor($spacing-unit-default * $ratio)</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$spacing-unit-huge</th>
      <td><code class="lang-scss">floor($spacing-unit-default * ($ratio * 2))</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$spacings</th>
      <td><pre class="mrg0 pdg-- lang-scss"><code>(
  'tight' 0,
  'tiny' $spacing-unit-tiny,
  'small' $spacing-unit-small,
  'large' $spacing-unit-large,
  'huge' $spacing-unit-huge
)</code></pre></td>
      <td>
        <p></p>
        <p>Used to generate all the alternative spacings for lists, boxes, grid, …</p>
      </td>
    </tr>
  </tbody>
</table>

<h3>Breakpoints</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$screen-xs-max</th>
      <td><code class="lang-scss">640px / 16px * 1em</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$screen-sm-min</th>
      <td><code class="lang-scss">641px / 16px * 1em</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$screen-sm-max</th>
      <td><code class="lang-scss">768px / 16px * 1em</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$screen-md-min</th>
      <td><code class="lang-scss">769px / 16px * 1em</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$screen-md-max</th>
      <td><code class="lang-scss">1024px / 16px * 1em</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$screen-lg-min</th>
      <td><code class="lang-scss">1025px / 16px * 1em</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$breakpoints-default</th>
      <td><pre class="mrg0 pdg-- lang-scss"><code>(
  'sm' '(min-width: #{$screen-sm-min})',
  'md' '(min-width: #{$screen-md-min})',
  'lg' '(min-width: #{$screen-lg-min})'
)</code></pre></td>
      <td></td>
    </tr>
    <tr>
      <th>$breakpoints-desc</th>
      <td><pre class="mrg0 pdg-- lang-scss"><code>(
  'xs' '(max-width: #{$screen-xs-max})',
  'sm' '(max-width: #{$screen-sm-max})',
  'md' '(max-width: #{$screen-md-max})'
)</code></pre></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Styling</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$border-radius-default</th>
      <td><code class="lang-scss">4px</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$border-radius-small</th>
      <td><code class="lang-scss">2px</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$border-radius-large</th>
      <td><code class="lang-scss">6px</code></td>
      <td></td>
    </tr>
  </tbody>
</table>


<h2>Components</h2>

<h3>Button</h3>

<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$btn-padding</th>
      <td><code class="lang-scss">$spacing-unit-small/$ratio $spacing-unit-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-font-size</th>
      <td><code class="lang-scss">inherit</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-color</th>
      <td><code class="lang-scss">inherit</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-border</th>
      <td><code class="lang-scss">1px solid transparent</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-bkg</th>
      <td><code class="lang-scss">transparent</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-border-radius</th>
      <td><code class="lang-scss">$border-radius-default</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-small-padding</th>
      <td><code class="lang-scss">$spacing-unit-tiny/2 $spacing-unit-tiny</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-small-font-size</th>
      <td><code class="lang-scss">$font-size-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-small-border-radius</th>
      <td><code class="lang-scss">$border-radius-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-large-padding</th>
      <td><code class="lang-scss">$spacing-unit-default/2 $spacing-unit-default</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-large-font-size</th>
      <td><code class="lang-scss">$font-size-large</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-large-border-radius</th>
      <td><code class="lang-scss">$border-radius-large</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-default-color</th>
      <td><code class="lang-scss">$text-color</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-default-bkg-color</th>
      <td><code class="lang-scss">$alt-color-lighter</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-default-hover-bkg-color</th>
      <td><code class="lang-scss">lighten($btn-default-bkg-color, 3%)</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-default-active-bkg-color</th>
      <td><code class="lang-scss">darken($btn-default-bkg-color, 5%)</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-primary-color</th>
      <td><code class="lang-scss">white</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-primary-bkg-color</th>
      <td><code class="lang-scss">$brand-color</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-primary-hover-bkg-color</th>
      <td><code class="lang-scss">lighten($btn-primary-bkg-color, 8%)</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$btn-primary-active-bkg-color</th>
      <td><code class="lang-scss">darken($btn-primary-bkg-color, 5%)</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Field</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$field-padding</th>
      <td><code class="lang-scss">$spacing-unit-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-color</th>
      <td><code class="lang-scss">inherit</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-font-size</th>
      <td><code class="lang-scss">inherit</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-font-family</th>
      <td><code class="lang-scss">inherit</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-line-height</th>
      <td><code class="lang-scss">$line-height-default</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-bkg-color</th>
      <td><code class="lang-scss">white</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-border</th>
      <td><code class="lang-scss">1px solid $alt-color-light</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-focus-border-color</th>
      <td><code class="lang-scss">$alt-color-darker</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-border-radius</th>
      <td><code class="lang-scss">$border-radius-default</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-disabled-bkg-color</th>
      <td><code class="lang-scss">$alt-color-lighter</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-disabled-color</th>
      <td><code class="lang-scss">$alt-color</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-small-padding</th>
      <td><code class="lang-scss">$spacing-unit-tiny</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-small-font-size</th>
      <td><code class="lang-scss">$font-size-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-small-border-radius</th>
      <td><code class="lang-scss">$border-radius-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-large-padding</th>
      <td><code class="lang-scss">$spacing-unit-default</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-large-font-size</th>
      <td><code class="lang-scss">$font-size-large</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-large-border-radius</th>
      <td><code class="lang-scss">$border-radius-large</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$field-help-color</th>
      <td><code class="lang-scss">$alt-color-light</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>List</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$list-separator-style</th>
      <td><code class="lang-scss">1px solid rgba(0, 0, 0, .15)</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Box</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$box-default-color</th>
      <td><code class="lang-scss">inherit</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$box-default-bkg-color</th>
      <td><code class="lang-scss">$alt-color-lighter</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$box-primary-color</th>
      <td><code class="lang-scss">white</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$box-primary-bkg-color</th>
      <td><code class="lang-scss">$brand-color</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Width</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$widths-columns</th>
      <td><code class="lang-scss">6, 5, 4, 3, 2, 1</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$widths-breakpoints</th>
      <td><code class="lang-scss">$breakpoints-default</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Media responsive</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$media-collapse</th>
      <td><code class="lang-scss">$screen-sm-max</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Container</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$container-gutter-width</th>
      <td><code class="lang-scss">$spacing-unit-small</code></td>
      <td></td>
    </tr>
    <tr>
      <th>$container-max-width</th>
      <td><code class="lang-scss">1200px</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>Table responsive</h3>
<table>
  <tbody>
    <tr>
      <th width="20%">Variable</th>
      <th width="30%">Default value</th>
      <th width="30%">Notice</th>
    </tr>
    <tr>
      <th>$table-responsive-collapse</th>
      <td><code class="lang-scss">$screen-sm-max</code></td>
      <td></td>
    </tr>
  </tbody>
</table>
