
$.getJSON('js/gallery_json.js', function (data) {
    $.each(data.photos, function (i, f) {
    	var img = "<li><img id='" + f.id + "' src='" + f.thumb_url + "' alt='" + f.title + "' /></li>";
    	$("ul").append(img);
    	$("#Thumbnail").click( function(){
	    	var fullImg = "<li data-full-url='" + f.image +"'></li><li caption='" + f.title + "'></li>";
	    	$(".mainImage").select(fullImg);
	    });
	});
});
