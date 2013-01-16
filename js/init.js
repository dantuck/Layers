;(function($){
	$(document).ready(function() {

		// First test
		for (i=0;i<10;i++) {
			var w = 64 * (parseInt(Math.random() * 3) + 1) - 1,
				h = 48 * (parseInt(Math.random() * 3) + 1) - 1;
			$('<div class="element layers" style="color:#fff;">'+ i +'</div>').width(w).height(h).appendTo('.first.test');
		}

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

	});
})(jQuery)
				
