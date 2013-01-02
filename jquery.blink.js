/**
 * Simple and Lightweight jQuery blink plugin ( https://github.com/WeareJH/jquery-blink )
 * Copyright JH ( wearejh.com )
 */

(function( $, window ) {
	jQuery.fn.blink = function( options ) {
		var defaults = {
			'times': 3,
			'speed': 200
		};
		
		options = $.extend(defaults, options);
		
		this.each(function() {
			var $this = $(this);
			
			for (var i = 0; i < options.times; i++) {
				window.setTimeout(function() {
					$this.fadeOut( options.speed ).fadeIn( options.speed );
				}, (options.speed * 2) * i );
			}
		});
	};
})( jQuery, window );