	// var css = require('./colors.css');
	// console.log(css);
$(function(){


	console.log('test');
	function GetHtml(){
		var html = $('.html').val();

		return html
	}
	function getCSS(){
		var css = $('.css').html();
		return css
	}
	function getColors(){
		//get only colors ul
		var ul = $('#colors').clone().children('ul').wrap('<p/>').parent().remove().html();
		//clone parent wrapper
		var section = $('#colors').clone().empty();
		//wrap children in parent wrapper
		var colorHTML =  $(section).html(ul).wrap('<p/>').parent().html();

		return colorHTML;
	}
	var colorCSS = '';
	$.get('http://localhost:8080/modules/2_colors/colors.css')
		.done(function(response){
			colorCSS = response;
			
		
			
				$('.innerbox.css').html('<pre>'+colorCSS+'</pre>');
			
	
	});

	// var array = [];
	// 	console.log( document.styleSheets[1])
	// array.slice.call(document.styleSheets[1].cssRules).forEach(function(rule){
	
 //  		if(rule.selectorText.match(/primary-color/g)){
 //  				colorCSS = '<pre>'+colorCSS + rule.cssText + '</br/></pre>'
 //  			// colorCSS = colorCSS + '<span class="token attr-name">'+rule.selectorText+'</span> {' + rule.style.cssText+ '}</br>';
 //  		} 		
	// });

	$('.innerbox.css').html(colorCSS);
	
	var ul = $('#colors').clone().children('ul').wrap('<p/>').parent().remove().html();
	// console.log(ul);
	var section = $('#colors').clone().empty();
	var div = $(section).html(ul);
	// $('body').append(section);
	// var colorHTML = $('#colors').wrap('<p/>').parent().html().trim();
	// console.log($(section).html(ul).wrap('<p/>').parent().html());
	var colorHTML =  $(section).html(ul).wrap('<p/>').parent().html();
	// var colorCSS = '.primary-color-one{\nbackground-color:#ec008c\n}\n.primary-color-two{\nbackground-color:#000\n}.primary-color-three{\nbackground-color:gray\n}.primary-color-four{\nbackground-color:#2fbbf9\n}';
	// console.log(colorCSS);
	$('.innerbox.html').val(colorHTML);
	// $('.innerbox.css').html(colorCSS);
	// $('.innerbox.css').val(colorCSS);

	$('#previewTarget').on('load', function(){
		// console.log('iframe loaded');
		updateIframe();
	});
	function updateIframe(){
		var target= $('#previewTarget')[0].contentWindow.document;
		target.open();
		target.close();

		// var html = GetHtml();
		var colors = getColors();
		var css = getCSS();

		colors = colors.replace('huge-module','');
		var url = 'assets/styles/structure.css';
		var urlCSS = 'modules/2_colors/colors.css';



		$('body', target).html(colors);
		$('head', target).append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" } ));
		$('head', target).append($("<link/>", { rel: "stylesheet", href: urlCSS, type: "text/css" } ));

		$('head', target).append('<style>' + css + '</style>');

		
	}
	
	updateIframe();

	$('#preview').on('click', function(){
			updateIframe();
	});



	$('#getSource').click(function(){
		var source = $('#previewTarget').contents().find('html').html();
		console.log(source);
		return false;
	});

	

	var origColors = [];
	var newColors = [];

$('button.update-color').click(function(){
	//save colors from input
	$('.colors').each(function(key, value){
	// console.log($(value).val());

	//check for valid hex
	var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test($(value).val());

	if(isOk){
		origColors[key] = $(value).val();
	}

});
	$('.color').each(function(key, value){

		
		//save orginal colors to obj 
		var rgb = $(value).css('backgroundColor').match(/\d+/g);
		var r   = parseInt(rgb[0], 10);
		var g   = parseInt(rgb[1], 10);
		var b   = parseInt(rgb[2], 10);
		var hex = '#'+ r.toString(16) + g.toString(16) + b.toString(16);
		newColors.push({className: value, hexValue: hex});
	
	});

	newColors.map(function(i, index){


		if(!!origColors[index]){
			$(i.className).css('backgroundColor', origColors[index]);
		}
			
			
			
	})
	
});

});
