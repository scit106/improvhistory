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
		subscribe({email: 'banana@rama.com', firstName: 'Banana', lastName:'Man'});
		});

	function subscribe(input){
		$.post(
			'/subscribers'
			, {email: 'apple@rama.com', firstName: 'Johnny', lastName:'Appleseed'}
			);
	}

	function logPostResponse(data){
		console.log(data);
	}

});
