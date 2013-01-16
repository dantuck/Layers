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

##### layers: {}

Object containing layer definitions.

##### glassClass: 'glass'

Glass overlay class

##### identifier: 'layers'

Class Identifier that is applied to elements created by layers


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

##### .layers('glass', events)

```js
$('.layers').layers('glass');
```


##### .layers('activate')

##### .layers('destroy')

##### .layers('add', name, events)

```js
$('.layers').layers('add',
	'layer2', { 
		'mouseleave': { 
			'handler': function(e) { console.log($(this).offset().left + 'layer3 mouseleave'); } 
		}
	} 
)
```

##### .layers('remove', name)

```js
$('.layers').layers('remove', 'layer2')
```

##### .layers('toggle', name)

```js
$('.layers').layers('toggleLayer','layer2')
```

##### .layers('disableEvent', name, layer)

## License

Layers is licensed under MIT http://www.opensource.org/licenses/MIT

### Copyright

Copyright (c) 2013, Daniel Tucker
<layers@yourdesignalive.com>, [@yourdesignalive](http://twitter.com/yourdesignalive)