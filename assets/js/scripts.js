$(document).ready(function(){

	$html = "";
	$fullimage = "";
	$.getJSON('assets/js/gallery.json', function (data) {
		
		var title = data.album;
		$("h1").show(title);

		$.each(data.photos, function (i, f) {
	  		var img = "<li><img id='" + f.id + "' src='" + f.thumb_url + "' alt='" + f.title + "' /></li>";
	    	
	  		$fullimage = "<img id='" + f.id + "' src='" + f.image + "' alt='" + f.title + "' />";
	    	//console.log(f);	
	    	$("ul").append(img); //DOM -> Insert html elements

	    	$html = "<li><h1>'" + f.title + "'</h1></li>'";
            $html += "'<li><p> Taken at the Intel Conference in '" + f.location + "', '" + f.date + "'</p></li>'";
            //console.log($html);
		});

		$("#json-gallery").on({
			mouseover: function(){
				$(this).css({
					'cursor': 'pointer'
				});
			},
			mouseout: function(){
				$(this).css({
					'cursor': 'default'
				});
			},
			click: function(){
				$(this).animate({
				    width: "14%",
				    opacity: 0.4,
				    marginLeft: "0.1in"
	  			}, 1000 ); 

				$('.info ul').appendTo($html);	

				var thumbnail = $(this).attr('src');
				//var fullimage = "<img id='" + data.photos.id + "' src='" + data.photos.image + "' alt='" + data.photos.title + "' />";
				$("#fullimg").fadeOut(300, function(){
					var fullimage
					for (var i=0; i<data.photos.length; i++) {
						//console.log(data.photos[i].image);
						var fullimage = data.photos[i].image;
						$(this).attr('src', fullimage);	
					}
				}).fadeIn(300);	

			}
		}, 'img');
		
	});
	

	$('.btnPrev').click( function(){			
		$('.mainImage').fadeOut(500).delay(300).slideDown(800);
	});

	$('.btnNext').click( function(){			
		$('.mainImage').fadeOut(500).delay(300).slideDown(800);
	});
});