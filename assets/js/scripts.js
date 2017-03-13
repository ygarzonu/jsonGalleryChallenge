$(document).ready( function(){

	$.getJSON('js/gallery.json', function (data) {
	    $.each(data.photos, function (i, f) {
	    	var img = "<li><img id='" + f.id + "' src='" + f.thumb_url + "' alt='" + f.title + "' /></li>";
	    	$("ul").append(img);
	    	$("#Thumbnail").click( function(){
		    	var fullImg = "<li data-full-url='" + f.image +"'></li><li caption='" + f.title + "'></li>";
		    	$(".mainImage").select(fullImg);
		    });
		});
	});

	$('#prevImg').click( function(){

	});

});
$.getJSON('data.json', function(data) { // Get data from JSON file
     try{
      var json = $.parseJSON(data);
      for (var i =0; i< json.images.length; i++) {
        var output+=json.images[i].bannerImg1; // Place image in variable output
     }
      document.getElementById("banner-img").innerHTML=output;
     }catch{}
    }); 