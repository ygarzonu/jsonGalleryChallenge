$(document).ready(function(){

	$.getJSON('js/gallery.json', function (data) {
		var html = "";
	    $.each(data.photos, function (i, f) {
	    //	var img = "<li><img id='" + f.id + "' src='" + f.thumb_url + "' alt='" + f.title + "' /></li>";
	    	console.log(f);
	    	html += "<ul>" + f.thumb_url;
	//    	$("ul").append(img);
	//    	$("#Thumbnail").click( function(){
	//	    	var fullImg = "<li data-full-url='" + f.image +"'></li>";
	//	    	var info = "<li '" + f.title + "' Taken at the Intel Conference in '" + f.location + "', '"f.date + "'></li>";
	//	    	$(".mainImage").select(fullImg);
	//	    	$(".info").text(info);
	//	    });
		});
		$("#img-thumbnail").append(html);
	});

	
	$('.btnPrev').click( function(){			
		$('.mainImage').fadeOut(500).delay(300).slideDown(800);
	});
});

