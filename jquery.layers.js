//  jquery.layers.js
//  v0.5.0
//
//  A dynamic layout plugin for jQuery.
//
//  Copyright (c) 2013, Daniel Tucker, All rights reserved.
//  Licensed under MIT http://www.opensource.org/licenses/MIT

!function ($, window, undefined) {
 
    "use strict"; // jshint ;_;
 
 
    /* LAYERS PUBLIC CLASS DEFINITION
    * ================================ */
    
    var Layers = function (element, options) {
        this.$element = $(element)
        this.options = options //$.extend({}, $.fn.layers.defaults, options)
        this.glassOverlay = $('<div class="' + this.options.glassClass + '" />')
        this.layers = []
 
        this.init()
    }
 
    Layers.prototype = {
        constructor: Layers
 
      , init: function () {
          this.type = 'layers'
          this.activate()  
        }

      , glass: function (on) {
          var isActive = this.$element.children('.layers.glass').length > 0;
          if(on || !isActive) {
            $(this.glassOverlay)
              .css({ 'background-color':'transparent', 'height':'100%', 'width':'100%', 'position':'absolute', 'top':'0px', 'left':'0px' })
              .on('click.' + this.type + '.glass', function (e) { e.stopPropagation(); })
              .appendTo(this.$element)
          } else {
            $(this.glassOverlay).remove()
          }
        }

      , activate: function () {
          var that = this

          $.each( this.options.layers, function ( layer, events ) {
              that.addLayer(layer, events)
          })
        }

      , destroy: function () {
          var that = this
          that.$element.off('.' + this.type).removeData(this.type).find('.' + that.options.identifier).remove()
        }

      , addLayer: function (name, events) {
          var that = this

          if(that.layers[name] === undefined)
            that.options.layers[name] = events

          that.enableLayer(name)
        }

      , enableLayer: function (name) {
            var that = this

            $.each(this.options.layers[name], function (e, o) {
                o.data = o.data ? o.data : ''

                if( o.handler && $.isFunction(o.handler) ) {
                    if(!that.layers[name]) {
                        that.layers[name] = true
                        that.$element.on(e + '.' + that.type + '.' + name, o.data, o.handler)
                    } else console.log(name + ' has already been added.')
                }    
            })
        }


      , disableLayer: function (name) {
          this.layers[name] = false
          this.$element.off('.' + this.type + '.' + name)
        }
      
      , disableEvent: function (name, layer) { // layer is optional
          name = layer ? name + '.' + this.type + '.' + layer : name + '.' + this.type
          this.$element.off(name)
        }
    }

    /* LAYERS PLUGIN DEFINITION
    * ============================== */
 
    $.fn.layers = function (option, args) {
        if (typeof arguments[0] === 'string') {  
            args = Array.prototype.slice.call(arguments)
            args.splice(0,1)
        }

        return this.each(function () {
            var $this = $(this)
            , data = $this.data('layers')
            , options =  $.extend({}, $.fn.layers.defaults, $this.data(), typeof option == 'object' && option)

            if(args) console.log('we have args')
            if (!data) $this.data('layers', (data = new Layers(this, options)))
            //if (typeof option == 'string') data[option]()
            if (typeof option == 'string') args ? data[option].apply(data, args) : data[option]()
        })
    }
 
    $.fn.layers.defaults = {
        layers: {}
        , glassClass: 'layers glass'
        , identifier: 'layers'
        , callback: function () {}
    }
 
    $.fn.layers.Constructor = Layers
 
    /* LAYERS NO CONFLICT
    * ================= */
 
    $.fn.layers.noConflict = function () {
        $.fn.layers = old
        return this
    }
 
} (window.jQuery, window);