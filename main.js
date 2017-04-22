'use strict'


var API = '&api-key=5201dc8135bd49bc94abddf0e4527534';
var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=';



$(document).ready(function(){

	$("#search-button").on("click", function(event){

		event.preventDefault();

		var queryParam = $(this).prev().val();

		if ($(this).prev().attr("data-value") == "search") {
	            var search = queryURL + queryParam + API;
	         } else if ($(this).prev().attr("data-value") == "num-records") {
	            var numRecords = queryURL + queryParam + API;
	         } else if ($(this).prev().attr("data-value") == "start-year") {
	            var startYear = queryURL + queryParam + API;
	         } else if ($(this).prev().attr("data-value") == "end-year") {
	            var endYear = queryURL + queryParam + API;
	        }

	       console.log(search);
	       console.log(numRecords);
	       console.log(startYear);
	       console.log(endYear);

			$.ajax({
				url: queryURL+queryParam+API,
				method: 'GET'
			}).done(function(json){
				console.log(json);
				console.log("name");
				console.log("author");
				console.log("section");
				console.log("articlenumber");
				console.log("url");

				//$("#display").html(JSON.stringify(json));
			}).fail(function(err){
				console.log(err);
				console.log("failed");
			})
	});


	$("#clear-button").on("click", function(){
		$(".form-group").empty();
	});

});

