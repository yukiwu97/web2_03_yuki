$(document).ready(function(){

//Sign up for an account at https://thecatapi.com/ to get your API Key and insert below
const key = '6db54d1f-9ff3-4826-a8bc-2a5abdf76817';
let headers = new Headers();
headers.set('x-api-key', key);

//how many cat images do you want to pull in
const limit = '50';
const url = 'https://api.thecatapi.com/v1/images/search?limit=' + limit;

//getJSON
$.getJSON(url, function(data){
	//loop through the returned cat images using either for or $.each()

	//append the returned cat images to the #content div
 	console.log(data);

 	var bodycontent = document.getElementById("content");

 	data.forEach(cat => {
 		console.log(cat.url);
 		// create img for each image
 		var elem = document.createElement("img");
 		elem.src = cat.url;
 		bodycontent.appendChild(elem);
 	});

 	$('img').click(function(){
 		alert("Meow ~ ~");
 	});


});


});