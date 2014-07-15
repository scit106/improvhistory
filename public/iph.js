$( document ).ready(function(){

	var openPerformance;

	$( "#show-dates tr" ).click(function(){
		showDetails($( this ).attr("id"));
	});

	function showDetails(performance){
		$( '.location-info' ).addClass("hide");
		openPerformance = performance
		$( "#" + openPerformance + "-expand").removeClass("hide");
	}

	$('#newsletter-submit').click(function(){
		var subscriberInfo = $('form#newsletter-subscribe').serialize();
		subscribe(subscriberInfo);
		});

	function subscribe(input){
		$.post(
			'/subscribers'
			, input
			);
	}

	function logPostResponse(data){
		console.log(data);
	}

});
