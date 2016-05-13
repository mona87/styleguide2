	$(function() {

var mysheet=document.styleSheets[1]
var myrules=mysheet.cssRules? mysheet.cssRules: mysheet.rules
console.log(myrules)
for (i=0; i<myrules.length; i++){
if(myrules[i].selectorText.toLowerCase()=="#colors"){ //find "a:hover" rule
targetrule=myrules[i]
console.log(targetrule);
break;
}
}


// console.log( 'test ',document.styleSheets[1].rules);
    var colorHTML = $('#colors').clone().removeClass('huge-module').wrap('<span/>').parent();
    $('#colors').hide();

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

var buttonCSS = `<pre class="color-code">.button.black {
    background: #000;
    width: 160px;
    height: 54px;
    line-height: 54px;
    font-size: 13px;
}
.button:hover {
    background-color: #ec008c!important;
    color: #fff;
}</pre>`;

    // buttonCSS = buttonCSS.replace(/\./g,'<span class="token tag">.button.').replace(/{/g,"</span>{ <span class='token attr-name'> ").replace(/:/g,"</span> <span class='token attr-value'>:").replace(/;/g,";<span class='token attr-name'> ");
	$('#button-preview').html(buttonCSS);

var buttonHTML = $('.button.black').clone().removeClass('huge-module').wrap('<span/>').parent();
 $('.button.black').hide();
$('#button-preview').html(buttonCSS);

var typographyCSS = `<pre class="color-code">
h1.font-huge {
    font-size: 100px;
    font-weight: normal;
    font-style: normal;
    font-family: 'HUGEAvantGardeBold',Helvetica,Arial,sans-serif;
    color: black;
}
<pre>`;

	typographyCSS = typographyCSS.replace(/\./g,'<span class="token tag">.').replace(/{/g,"</span>{ <span class='token attr-name'> ").replace(/:/g,":</span> <span class='token attr-value'>").replace(/}/g,"</span> }");
	$('#typography-preview').html(typographyCSS);


var typographyHTML = $('.titles h1').clone().removeClass('huge-module').wrap('<span/>').parent();
$('.titles h1').hide();

var listHTML = $('#lists').clone().removeClass('huge-module').wrap('<span/>').parent();
 $('#lists').hide();

var listCSS = `<pre class="color-code">
ul.list_huge li::before{
   content: '▶';
   font-size: 11px;
   color: #ec008c;
   
}
ul.list_huge li{
   font-size: 16px;
}
ol.list_huge li::before{
    content: counters(item,".") " ";
    counter-increment: item;
    color: #ec008c;
}
ol.list_huge li{
	font-size: 16px;
	font-family: 'Galaxie',Geneva,Helvetica,Arial,sans-serif;
} 
</pre>`;
// listCSS = listCSS.replace(listCSS.charAt(0),'<span class="token tag">'+listCSS.charAt(0)).replace(/{/g,"</span>{ <span class='token attr-name'> ").replace(/:/g,":</span> <span class='token attr-value'>").replace(/;/g,";</span>").replace(/}/g,"</span> }");
$('#list-preview').html(listCSS);

var formHTML = $('#forms').clone().removeClass('huge-module').wrap('<span/>').parent();
 $('#forms').hide();

var formCSS = `<pre class="color-code">
#forms input[type="email"]{
	height: 37px;
	width:  100%;
	color:  black;
	background-color: white;
}
#forms input[type="textarea"]{
	height: 37px;
	width:  100%;
	color:  black;
	background-color: white;
}
#forms fieldset{
	background-color: white;
	border: 1px solid #ddd;
} 

</pre>`;
$('#form-preview').html(formCSS);

		var colors = { iframeID: '#previewTarget',
						previewID: '#color-preview',
						HTML: colorHTML,
						urlCSS: 'modules/2_colors/colors.css',
						previewBtn: '#preview-change-color'
		}
		var typography = { iframeID: '#typography-preview-iframe',
						previewID: '#typography-preview',
						HTML: typographyHTML,
						urlCSS: 'modules/3_typography/typography.css',
						previewBtn: '#preview-change-typography'

		}
		var buttons = { iframeID: '#button-preview-iframe',
						previewID: '#button-preview',
						HTML: buttonHTML,
						urlCSS: 'modules/4_buttons/buttons.css',
						previewBtn: '#preview-change-button'

		}
		var lists = { 	iframeID: '#list-preview-iframe',
						previewID: '#list-preview',
						HTML: listHTML,
						urlCSS: 'modules/5_lists/lists.css',
						previewBtn: '#preview-change-list'

		}		
		var forms = { 	iframeID: '#form-preview-iframe',
						previewID: '#form-preview',
						HTML: formHTML,
						urlCSS: 'modules/6_forms/forms.css',
						previewBtn: '#preview-change-form'

		}
		var array = [colors, typography, buttons, lists, forms];

		// //prevents flicker
	    $(colors.iframeID).on('load', function() {
	        // console.log('iframe loaded');
	        updateIframe(this, colors.previewID, colors.HTML);

	    });
	   	$(buttons.iframeID).on('load', function() {
	        // console.log('iframe loaded');
	        
	        updateIframe(this, buttons.previewID, buttons.buttonHTML);
	    });
	   	$(forms.iframeID).on('load', function() {
	        // console.log('iframe loaded');
	        
	        updateIframe(this, forms.previewID, forms.buttonHTML);
	    });
	   	$(lists.iframeID).on('load', function() {
	        // console.log('iframe loaded');
	        
	        updateIframe(this, lists.previewID, lists.buttonHTML);
	    });



	      $(window).load(function(){
	
	      	$(colors.iframeID).height($(colors.iframeID).contents().height());
	      	 $(buttons.iframeID).height($(buttons.iframeID).contents().height());
	      	  $(typography.iframeID).height($(typography.iframeID).contents().height());
	      	  $(lists.iframeID).height($(lists.iframeID).contents().height());
	      });

	    

	    //initialize
	    updateIframe(colors.iframeID, colors.previewID, colors.HTML, colors.urlCSS);
	    updateIframe(buttons.iframeID,  buttons.previewID,  buttons.HTML, buttons.urlCSS);
	    updateIframe(typography.iframeID,  typography.previewID,  typography.HTML, typography.urlCSS);
	    updateIframe(lists.iframeID,  lists.previewID,  lists.HTML, lists.urlCSS);
	    updateIframe(forms.iframeID,  forms.previewID,  forms.HTML, forms.urlCSS);

	    function updateIframe(iframe, previewID, html, urlCSS) {
	        var target = $(iframe)[0].contentWindow.document;
	        target.open();
	        target.close();

	        	// console.log('iframe ',iframe);
	        	// console.log('previewID ',previewID);
	        	// console.log('html ', html)
	 
	        var css = getCSS(previewID);


	        var url = 'assets/styles/structure.css';

	        $('body', target).html(html);	     
	        $('head', target).append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" }));
	        $('head', target).append($("<link/>", { rel: "stylesheet", href: urlCSS, type: "text/css" }));
	        $('head', target).append('<style>' + css + '</style>');


	    }

//tabbing in editor
// $(document).on('keyup', '.css', function(e){
//   //detect 'tab' key
//   if(e.keyCode == 9){
//     //add tab
//          console.log('tab');

//     // document.execCommand('insertHTML', false, '&#009');
//     //prevent focusing on next element
//     e.preventDefault();  
//   }
// });

	   //add eventlistener to preview button
	    $(array).each(function(key, value){
	    		// console.log(value.previewBtn)
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