"use strict";
$(document).ready( () => {

	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		const link = evt.currentTarget;
		
		const imageURL = $(link).attr("href");
		const title = $(link).attr("title");
		const figcaption = $(link).attr("data-figcaption");
		

		$("#image , #title, #figcaption").fadeOut(0, function() { 
			$("#image").attr("src", imageURL);
			$("#title").text(title);
			$("#figcaption").text(figcaption);
		}
		).fadeIn();

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	// $("li:first-child a").focus();

}); // end ready
