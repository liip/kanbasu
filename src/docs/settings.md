# Settings

The complete list of Kanbasu overridable settings.

<table class="settings">
	<tbody>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Common</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td width="20%">Variable</td>
			<td width="30%">Default value</td>
			<td width="30%">Notice</td>
		</tr>
		<tr>
			<th>$namespace</th>
			<td></td>
			<td>Since 1.1.0</td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Colors</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$brand-color</th>
			<td><code class="language-scss">#6ea644</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$alt-color-lighter</th>
			<td><code class="language-scss">#eee</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$alt-color-light</th>
			<td><code class="language-scss">#999</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$alt-color</th>
			<td><code class="language-scss">#777</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$alt-color-dark</th>
			<td><code class="language-scss">#555</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$alt-color-darker</th>
			<td><code class="language-scss">#333</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Typography</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$font-family-default</th>
			<td><code class="language-scss">'Helvetica Neue', Helvetica, Arial, sans-serif</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$font-size-default</th>
			<td><code class="language-scss">16px</code></td>
			<td>Has to be in pixels.</td>
		</tr>
		<tr>
			<th>$font-size-small</th>
			<td><code class="language-scss">0.75rem</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$font-size-large</th>
			<td><code class="language-scss">1.5rem</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$line-height-default</th>
			<td><code class="language-scss">1.45</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$text-color</th>
			<td><code class="language-scss">$alt-color-darker</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$link-color</th>
			<td><code class="language-scss">$brand-color</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$muted-color</th>
			<td><code class="language-scss">transparentize($text-color,.4)</code></td>
			<td>Since 1.3.0</td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Spacings</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$ratio</th>
			<td><code class="language-scss">1.61803398875</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$spacing-unit-default</th>
			<td><code class="language-scss">24px</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$spacing-unit-tiny</th>
			<td><code class="language-scss">floor($spacing-unit-default / ($ratio * 2))</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$spacing-unit-small</th>
			<td><code class="language-scss">floor($spacing-unit-default / $ratio)</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$spacing-unit-large</th>
			<td><code class="language-scss">floor($spacing-unit-default * $ratio)</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$spacing-unit-huge</th>
			<td><code class="language-scss">floor($spacing-unit-default * ($ratio * 2))</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$spacings</th>
			<td><pre class="mrg0 pdg-- language-scss"><code>(
	'tight' 0,
	'tiny' $spacing-unit-tiny,
	'small' $spacing-unit-small,
	'large' $spacing-unit-large,
	'huge' $spacing-unit-huge
)</code></pre></td>
			<td>
				<p>Since 1.6.0</p>
				<p>Used to generate all the alternative spacings for lists, boxes, grid, …</p>
			</td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Breakpoints</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$screen-xs-max</th>
			<td><code class="language-scss">640px / 16px * 1em</code></td>
			<td>Use EMs since 1.3.1</td>
		</tr>
		<tr>
			<th>$screen-sm-min</th>
			<td><code class="language-scss">641px / 16px * 1em</code></td>
			<td>Use EMs since 1.3.1</td>
		</tr>
		<tr>
			<th>$screen-sm-max</th>
			<td><code class="language-scss">768px / 16px * 1em</code></td>
			<td>Use EMs since 1.3.1</td>
		</tr>
		<tr>
			<th>$screen-md-min</th>
			<td><code class="language-scss">769px / 16px * 1em</code></td>
			<td>Use EMs since 1.3.1</td>
		</tr>
		<tr>
			<th>$screen-md-max</th>
			<td><code class="language-scss">1024px / 16px * 1em</code></td>
			<td>Use EMs since 1.3.1</td>
		</tr>
		<tr>
			<th>$screen-lg-min</th>
			<td><code class="language-scss">1025px / 16px * 1em</code></td>
			<td>Use EMs since 1.3.1</td>
		</tr>
		<tr>
			<th>$mq-xs</th>
			<td><code class="language-scss">'(max-width: #{$screen-xs-max})'</code></td>
			<td>Deprecated</td>
		</tr>
		<tr>
			<th>$mq-sm</th>
			<td><code class="language-scss">'(min-width: #{$screen-sm-min}) and (max-width: #{$screen-sm-max})'</code></td>
			<td>Deprecated</td>
		</tr>
		<tr>
			<th>$mq-md</th>
			<td><code class="language-scss">'(min-width: #{$screen-md-min}) and (max-width: #{$screen-md-max})'</code></td>
			<td>Deprecated</td>
		</tr>
		<tr>
			<th>$mq-lg</th>
			<td><code class="language-scss">'(min-width: #{$screen-lg-min})'</code></td>
			<td>Deprecated</td>
		</tr>
		<tr>
			<th>$breakpoints-default</th>
			<td><pre class="mrg0 pdg-- language-scss"><code>(
	'sm' '(min-width: #{$screen-sm-min})',
	'md' '(min-width: #{$screen-md-min})',
	'lg' '(min-width: #{$screen-lg-min})'
)</code></pre></td>
			<td>Min-only since 1.3.0</td>
		</tr>
		<tr>
			<th>$breakpoints-desc</th>
			<td><pre class="mrg0 pdg-- language-scss"><code>(
	'xs' '(max-width: #{$screen-xs-max})',
	'sm' '(max-width: #{$screen-sm-max})',
	'md' '(max-width: #{$screen-md-max})'
)</code></pre></td>
			<td>Since 1.3.0</td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Styling</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$border-radius-default</th>
			<td><code class="language-scss">4px</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$border-radius-small</th>
			<td><code class="language-scss">2px</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$border-radius-large</th>
			<td><code class="language-scss">6px</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h2 class="mrg0">Components</h2>
			</th>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Button</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$btn-use-padding-ratio</th>
			<td><code class="language-scss">true</code></td>
			<td>
				<p class="mrgt0">Since 1.4.0</p>
				<p class="mrgb0">Use the <code>$ratio</code> to calculate buttons’ top and bottom padding resulting in more natural proportions.<br>This apply only if the variable (<code>$btn-padding</code>, <code>$btn-small-padding</code>, <code>$btn-large-padding</code>) is a single value.</p>
			</td>
		</tr>
		<tr>
			<th>$btn-padding</th>
			<td><code class="language-scss">$spacing-unit-small</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-color</th>
			<td><code class="language-scss">inherit</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-border</th>
			<td><code class="language-scss">1px solid transparent</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-bkg</th>
			<td><code class="language-scss">transparent</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-border-radius</th>
			<td><code class="language-scss">$border-radius-default</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-small-padding</th>
			<td><code class="language-scss">$spacing-unit-tiny</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-small-font-size</th>
			<td><code class="language-scss">$font-size-small</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-small-border-radius</th>
			<td><code class="language-scss">$border-radius-small</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-large-padding</th>
			<td><code class="language-scss">$spacing-unit-default</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-large-font-size</th>
			<td><code class="language-scss">$font-size-large</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-large-border-radius</th>
			<td><code class="language-scss">$border-radius-large</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-default-color</th>
			<td><code class="language-scss">$text-color</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-default-bkg-color</th>
			<td><code class="language-scss">$alt-color-lighter</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-default-hover-bkg-color</th>
			<td><code class="language-scss">lighten($btn-default-bkg-color, 3%)</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-default-active-bkg-color</th>
			<td><code class="language-scss">darken($btn-default-bkg-color, 5%)</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-primary-color</th>
			<td><code class="language-scss">white</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-primary-bkg-color</th>
			<td><code class="language-scss">$brand-color</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-primary-hover-bkg-color</th>
			<td><code class="language-scss">lighten($btn-primary-bkg-color, 8%)</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$btn-primary-active-bkg-color</th>
			<td><code class="language-scss">darken($btn-primary-bkg-color, 5%)</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Form field</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$field-use-padding-ratio</th>
			<td><code class="language-scss">true</code></td>
			<td>
				<p class="mrgt0">Since 1.5.0</p>
				<p class="mrgb0">Use the <code>$ratio</code> to calculate fields’ top and bottom padding resulting in more natural proportions.<br>This apply only if the variable (<code>$field-padding</code>, <code>$field-small-padding</code>, <code>$field-large-padding</code>) is a single value.</p>
			</td>
		</tr>
		<tr>
			<th>$field-padding</th>
			<td><code class="language-scss">$spacing-unit-small</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-color</th>
			<td><code class="language-scss">inherit</code></td>
			<td>Since 1.2.0</td>
		</tr>
		<tr>
			<th>$field-font-size</th>
			<td><code class="language-scss">inherit</code></td>
			<td>Since 1.2.0</td>
		</tr>
		<tr>
			<th>$field-font-family</th>
			<td><code class="language-scss">inherit</code></td>
			<td>Since 1.2.0</td>
		</tr>
		<tr>
			<th>$field-line-height</th>
			<td><code class="language-scss">$line-height-default</code></td>
			<td>Since 1.2.0</td>
		</tr>
		<tr>
			<th>$field-bkg-color</th>
			<td><code class="language-scss">white</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-border</th>
			<td><code class="language-scss">1px solid $alt-color-light</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-focus-border-color</th>
			<td><code class="language-scss">$alt-color-darker</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-border-radius</th>
			<td><code class="language-scss">$border-radius-default</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-disabled-bkg-color</th>
			<td><code class="language-scss">$alt-color-lighter</code></td>
			<td>Since 1.2.0</td>
		</tr>
		<tr>
			<th>$field-disabled-color</th>
			<td><code class="language-scss">$alt-color</code></td>
			<td>Since 1.2.0</td>
		</tr>
		<tr>
			<th>$field-small-padding</th>
			<td><code class="language-scss">$spacing-unit-tiny</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-small-font-size</th>
			<td><code class="language-scss">$font-size-small</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-small-border-radius</th>
			<td><code class="language-scss">$border-radius-small</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-large-padding</th>
			<td><code class="language-scss">$spacing-unit-default</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-large-font-size</th>
			<td><code class="language-scss">$font-size-large</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-large-border-radius</th>
			<td><code class="language-scss">$border-radius-large</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$field-help-color</th>
			<td><code class="language-scss">$alt-color-light</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">List</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$list-separator-style</th>
			<td><code class="language-scss">1px solid $alt-color-lighter</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Box</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$box-default-color</th>
			<td><code class="language-scss">inherit</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$box-default-bkg-color</th>
			<td><code class="language-scss">$alt-color-lighter</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$box-primary-color</th>
			<td><code class="language-scss">white</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$box-primary-bkg-color</th>
			<td><code class="language-scss">$brand-color</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Grid</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$grid-flex</th>
			<td><code class="language-scss">false</code></td>
			<td>
				<p class="mrgt0">Since 1.4.0</p>
				<p class="mrgb0">Use the modern grid (using Flexbox) instead of the legacy one (using inline-block)</p>
			</td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Width</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$widths-columns</th>
			<td><code class="language-scss">6, 5, 4, 3, 2, 1</code></td>
			<td></td>
		</tr>
		<tr>
			<th>$widths-breakpoints</th>
			<td><code class="language-scss">$breakpoints-default</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Media</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$media-gutter</th>
			<td><code class="language-scss">$spacing-unit-default</code></td>
			<td>Since 1.3.0</td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Media responsive</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$media-collapse</th>
			<td><code class="language-scss">$screen-sm-max</code></td>
			<td></td>
		</tr>
		<tr class="settings--section">
			<th colspan="3">
				<h3 class="mrg0">Mosaic responsive</h3>
			</th>
		</tr>
		<tr class="text-muted">
			<td>Variable</td>
			<td>Default value</td>
			<td>Notice</td>
		</tr>
		<tr>
			<th>$mosaic-collapse</th>
			<td><code class="language-scss">$screen-sm-max</code></td>
			<td>Since 1.1.0</td>
		</tr>
	</tbody>
</table>
