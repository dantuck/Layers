Layers is a plugin for [jQuery](http://jquery.com) that gives you the ability to apply layers of functionality to a given element. Right now the functionality is limited to events but later may expand.

## Features

## Usage

Default usage:

```js
$('.layers').layers();
```


Initialize with layers:

```js
$('.layers').layers({
	"layers" : {
      "layer1": {
          "click" : { 
              "handler": function(e) { 
                    console.log('clicked layer1 element: ' + $(this).text())
              } 
          }
      }
  }
});
```


## Options

Object containing layer definitions.
	
	layers


Glass overlay template

	glassOverlay

Default: 
```
<div class="layers glass" />
```

Class Identifier that is applied to elements created by layers

	identifier

Default: 
```layers```



## Methods

##### .layers(options)

```js
$('.layers').layers({
	"layers" : {
      "layer1": {
          "click" : { 
              "handler": function(e) { 
                    console.log('clicked layer1 element: ' + $(this).text())
              } 
          }
      }
  }
});
```

##### .layers('glass')

```js
$('.layers').layers('glass');
```


##### .layers('activate')

##### .layers('destroy')

##### .layers('addLayer')

```js
$('.layers').layers('addLayer',
	'layer2', { 
		'mouseleave': { 
			'handler': function(e) { console.log($(this).offset().left + 'layer3 mouseleave'); } 
		}
	} 
)
```

##### .layers('enableLayer')

```js
$('.layers').layers('enableLayer','layer2')
```

##### .layers('disableLayer')

```js
$('.layers').layers('disableLayer','layer2')
```

##### .layers('disableEvent')

## License

Layers is licensed under MIT http://www.opensource.org/licenses/MIT

### Copyright

Copyright (c) 2013, Daniel Tucker
<layers@yourdesignalive.com>, [@yourdesignalive](http://twitter.com/yourdesignalive)