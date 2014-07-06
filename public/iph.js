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

});
