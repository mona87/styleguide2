	// $(function() {

	//     function GetHtml() {
	//         var html = $('.html code').html();

	//         return html
	//     }

	//     function getCSS() {
	//         var css = $('.css').text();
	//         return css
	//     }

	//     var colorCSS = 
 // `<pre class="color-code">
 // .primary-color-one {
 //    background-color: #ec008c
 // }
 // .primary-color-two {
 //    background-color: #000
 // }
 // .primary-color-three {
 //    background-color: gray
 // }
 // .primary-color-four {
 //    background-color: #2fbbf9
 // }</pre>`;

	
	// colorCSS = colorCSS.replace(/\./g,'<span class="token tag">.').replace(/{/g,"</span>{ <span class='token attr-name'> ").replace(/:/g,":</span> <span class='token attr-value'>").replace(/}/g,"</span> }");
			


	//     var htmlSnippet = `<div class="color primary-color-one">text</div>`;


	//     $('.innerbox.css').html(colorCSS);
	//     $('.innerbox.html').text(htmlSnippet);


	//     $('#previewTarget').on('load', function() {
	//         // console.log('iframe loaded');
	//         updateIframe();


	//     });
	//     $(window).load(function(){
	//     	    $('#previewTarget').height($('#previewTarget').contents().height());
	//     });

	//       $(window).resize(function(){
	
	//       			  $('#previewTarget').height($('#previewTarget').contents().height());
	      	
	//       })

	//     function updateIframe() {
	//         var target = $('#previewTarget')[0].contentWindow.document;
	//         target.open();
	//         target.close();



	//         var css = getCSS();


	//         var url = 'assets/styles/structure.css';
	//         var urlCSS = 'modules/2_colors/colors.css';

	//         var html = `<section id="colors" class=" anchor clearfix">
	// 				<ul class=" huge-list--unstyled list-colors">
 //                    <li class="small-12 medium-2 column ">
 //                        <div class="color primary-color-one"></div>
            
 //                    </li>
 //                    <li class="small-12 medium-2 column ">
 //                        <div class="color primary-color-two"></div>
                      
 //                    </li>
 //                    <li class="small-12 medium-2 column ">
 //                        <div class="color primary-color-three"></div>
                      
 //                    </li>
 //                    <li class="small-12 medium-2 column end">
 //                        <div class="color primary-color-four"></div>                 
 //                    </li>
 //                </ul></section>`;

	//         $('body', target).html(html);
	//         $('head', target).append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" }));
	//         $('head', target).append($("<link/>", { rel: "stylesheet", href: urlCSS, type: "text/css" }));

	//         $('head', target).append('<style>' + css + '</style>');


	//     }

	//     updateIframe();

	//     $('.preview').on('click', function() {
	//         updateIframe();
	//     });


	    // 	var origColors = [];
	    // 	var newColors = [];

	    // $('button.update-color').click(function(){
	    // 	//save colors from input
	    // 	$('.colors').each(function(key, value){
	    // 	// console.log($(value).val());

	    // 	//check for valid hex
	    // 	var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test($(value).val());

	    // 	if(isOk){
	    // 		origColors[key] = $(value).val();
	    // 	}

	    // });
	    // 	$('.color').each(function(key, value){


	    // 		//save orginal colors to obj 
	    // 		var rgb = $(value).css('backgroundColor').match(/\d+/g);
	    // 		var r   = parseInt(rgb[0], 10);
	    // 		var g   = parseInt(rgb[1], 10);
	    // 		var b   = parseInt(rgb[2], 10);
	    // 		var hex = '#'+ r.toString(16) + g.toString(16) + b.toString(16);
	    // 		newColors.push({className: value, hexValue: hex});

	    // 	});

	    // 	newColors.map(function(i, index){


	    // 		if(!!origColors[index]){
	    // 			$(i.className).css('backgroundColor', origColors[index]);
	    // 		}



	    // 	})

	    // });

	});
