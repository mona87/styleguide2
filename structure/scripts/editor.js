	$(function() {

    var colorHTML = `<section id="colors" class=" anchor clearfix">
					<ul class=" huge-list--unstyled list-colors">
                    <li class="small-12 medium-2 column ">
                        <div class="color primary-color-one"></div>
            
                    </li>
                    <li class="small-12 medium-2 column ">
                        <div class="color primary-color-two"></div>
                      
                    </li>
                    <li class="small-12 medium-2 column ">
                        <div class="color primary-color-three"></div>
                      
                    </li>
                    <li class="small-12 medium-2 column end">
                        <div class="color primary-color-four"></div>                 
                    </li>
                </ul></section>`;

	    var colorCSS = 
 `<pre class="color-code">
 .primary-color-one {
    background-color: #ec008c
 }
 .primary-color-two {
    background-color: #000
 }
 .primary-color-three {
    background-color: gray
 }
 .primary-color-four {
    background-color: #2fbbf9
 }</pre>`;

 
	colorCSS = colorCSS.replace(/\./g,'<span class="token tag">.').replace(/{/g,"</span>{ <span class='token attr-name'> ").replace(/:/g,":</span> <span class='token attr-value'>").replace(/}/g,"</span> }");
	$('#color-preview').html(colorCSS);

var buttonCSS = `<pre><button.black {
    background: #000;
    width: 160px;
    height: 54px;
    line-height: 54px;
    font-size: 13px;</pre>`;

    buttonCSS = buttonCSS.replace(/\./g,'<span class="token tag">.').replace(/{/g,"</span>{ <span class='token attr-name'> ").replace(/:/g,":</span> <span class='token attr-value'>").replace(/}/g,"</span> }");
	$('#button-preview').html(buttonCSS);

var buttonHTML = `<ul class="huge-list--unstyled"><li><a href="#" class="snippet button black">Load more</a></li></ul>`;
$('#button-preview').html(buttonCSS);



		var buttons = { iframeID: '#button-preview-iframe',
						previewID: '#button-preview',
						HTML: buttonHTML,
						urlCSS: 'modules/4_buttons/buttons.css',
						previewBtn: '#preview-change-button'

		}

		var colors = { iframeID: '#previewTarget',
						previewID: '#color-preview',
						HTML: colorHTML,
						urlCSS: 'modules/2_colors/colors.css',
						previewBtn: '#preview-change-color'
		}
		var array = [colors, buttons];

		//prevents flicker
	    $('#previewTarget').on('load', function() {
	        // console.log('iframe loaded');
	        // updateIframe(this, '#color-preview', colorHTML);

	    });
	   	$('#button-preview-iframe').on('load', function() {
	        // console.log('iframe loaded');
	        
	        // updateIframe(this, '#button-preview', buttons.buttonHTML);
	    });


	    // $(window).load(function(){
	    // 	$('#previewTarget').height($('#previewTarget').contents().height());
	    // 	$('#button-preview-iframe').height($('#button-preview-iframe').contents().height());
	    // });

	    //   $(window).resize(function(){
	
	    //   	$('#previewTarget').height($('#previewTarget').contents().height());
	      	
	    //   });

	    

	    //initialize
	    updateIframe(colors.iframeID, colors.previewID, colors.HTML, colors.urlCSS);
	    updateIframe(buttons.iframeID,  buttons.previewID,  buttons.HTML, buttons.urlCSS  );

	    function updateIframe(iframe, previewID, html, urlCSS) {
	        var target = $(iframe)[0].contentWindow.document;
	        target.open();
	        target.close();

	        	console.log('iframe ',iframe);
	        	console.log('previewID ',previewID);
	        	console.log('html ', html)
	 
	        var css = getCSS(previewID);


	        var url = 'assets/styles/structure.css';

	        $('body', target).html(html);	     
	        $('head', target).append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" }));
	        $('head', target).append($("<link/>", { rel: "stylesheet", href: urlCSS, type: "text/css" }));
	        $('head', target).append('<style>' + css + '</style>');


	    }

	 

	   //add eventlistener to preview button
	    $(array).each(function(key, value){
	    		console.log(value.previewBtn)
	    		$(value.previewBtn).click(function(){
	    			 updateIframe(value.iframeID, value.previewID, value.HTML, value.urlCSS);
	    		})
	    })


	   	function GetHtml(iframe) {
	        var html = $('.html code').html();

	        return html
	    }

	    function getCSS(previewID) {
	        var css = $(previewID).text();
	        return css
	    }

	});