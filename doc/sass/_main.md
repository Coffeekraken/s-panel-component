# SPanelComponent

Provide some clean panel with colors support


### Example
```html
	<div class="panel panel--success">
  <p class="p">
    Etiam ut leo sit amet nibh lacinia finibus. Pellentesque ultricies.
  </p>
</div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Mixins


### s-panel

Print out the bare and style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The color to generate  |  optional  |  default


### s-panel-bare

Print out the bare component css


### s-panel-style

Print out the style component css


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ [Color](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#colors) }**  |  The color to generate  |  optional  |  default