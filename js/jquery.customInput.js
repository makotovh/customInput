(function($){
	
	$.fn.customInput = function (settings) {
		options = $.extend({}, $.fn.customInput.defaults, settings);
		
		$.each($(this), function (i, item) {
			item = $(item);
		
			if (item.attr('type') == 'checkbox' || item.attr('type') == 'radio') {
				item.hide();

				idInput = item.attr('id');

				label = $("label[for='"+ idInput +"']");
				label.css('padding-left', options.paddingLeft)
				.css('margin', '0 0 0 5px');

				changeImage(item, options);

				if (item.attr('type') == 'radio') {
					if ($.browser.msie) {
						label.click(function () {
							var item = $('input[type="radio"]#' + $(this).attr('for'));
							
							item.attr('checked', 'checked');

							inputName = item.attr('name');
							$.each($('input[name="'+ inputName +'"]'), function (i, radio) {
								changeImage($(radio), options);
							});
							
						});
					} else {
						item.click(function () {
							inputName = $(this).attr('name');
							$.each($('input[name="'+ inputName +'"]'), function (i, radio) {
								changeImage($(radio), options);
							});
						});
					}
					
				} else {
					if ($.browser.msie) {
						label.click(function () {
							var item = $('input[type="checkbox"]#' + $(this).attr('for'));
							
							if (item.attr('checked')) {
								item.removeAttr('checked');
							} else {
								item.attr('checked', 'checked');
							}
							
							changeImage(item, options);
						});
					} else {
						item.click(function () {
							changeImage($(this), options);
						});
					}
					
				}
			}
			
		});
		
	};
	

	
	function changeImage(item, options) {
		idInput = item.attr('id');
		label = $("label[for='"+ idInput +"']");
		
		var imageOn = "";
		var imageOf = "";
		switch (item.attr('type')) {
			case 'radio' : 
				imageOn = options.imageRadioOn;
				imageOff = options.imageRadioOff;
				break;
			case 'checkbox': 
				imageOn = options.imageCheckboxOn;
				imageOff = options.imageCheckboxOff;
				break;
		}
		
		if (item.attr('checked')) {
			label.css('background', "url('"+ imageOn +"') no-repeat");
		} else {
			label.css('background', "url('"+ imageOff +"') no-repeat");
		}
	};
	
	function changeImagesRadio() {
		
	};
	
	$.fn.customInput.defaults = {
		imageCheckboxOn: 'images/checkbox_on.png',
		imageCheckboxOff: 'images/checkbox_off.png',
		imageRadioOn: 'images/checkbox_on.png',
		imageRadioOff: 'images/checkbox_off.png',
		paddingLeft: '22px',
		debug: false
	};
})(jQuery);