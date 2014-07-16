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

	$('#newsletter-unsubscribe').submit(function(event){
		event.preventDefault();
		var subscriberInfo = $('form#newsletter-unsubscribe').serialize();
		unsubscribe(subscriberInfo);
		});

	function unsubscribe(input){
		$.ajax({
			url: '/subscribers?' + input
			, type: 'DELETE'
			})
			.done(function (data){
				$('#newsletter-unsubscribe').addClass('hide');
				$('#unsubscribe-success').removeClass('hide');
			})
			.error(function(err){
				alert(err.responseText);
			});
	}

});
