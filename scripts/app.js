
$(function(){


	let images = ["https://www.w3schools.com/css/trolltunga.jpg","https://www.w3schools.com/css/img_lights.jpg","http://1.bp.blogspot.com/-NRSs8Yxj7DY/T19SJDLLgtI/AAAAAAAArGQ/We46krkRl24/s1600/mulher-ao-cair-da-tarde.jpg"];
	let index=0;

	setInterval(function(){

	
		if(index==images.length) // Vérification dernière image
			index=0;

		$("#sliderImage").attr("src",images[index]); // Modification source image via array

		index++; // incrément index

	}, 3000);


});