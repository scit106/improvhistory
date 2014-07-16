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

	$('#newsletter-subscribe').submit(function(event){
		event.preventDefault();
		var subscriberInfo = $('form#newsletter-subscribe').serialize();
		subscribe(subscriberInfo);
		});

	function subscribe(input){
		$.post(
			'/subscribers'
			, input
			)
			.done(function (data){
				$('#newsletter-subscribe').addClass('hide');
				$('#subscribe-success').removeClass('hide');
			})
			.error(function(err){
				alert(err.responseText);
			});
	}

});
