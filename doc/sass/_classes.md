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


### s-panel-classes

Print out the bare and style component css
Generated classes:
- `.panel`
- `.panel--{color}`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-panel-classes-bare

Print out the bare component css
Generated classes:
- `.panel`


### s-panel-classes-style

Print out the style component css
Generated classes:
- `.panel`
- `.panel--{color}`


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary