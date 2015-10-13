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

	$('#venue-update').submit(function(event){
		event.preventDefault();
		var venueInfo = $('form#venue-update').serialize();
		updateVenue(venueInfo);
		});

	function updateVenue(input){
		$.post(
			'/venues/edit'
			, input
			)
			.done(function (data){
				$('#venue-update').addClass('hide');
				$('#venue-success').removeClass('hide');
			})
			.error(function(err){
				alert(err.responseText);
			});
	}

	$('#show-update').submit(function(event){
		event.preventDefault();
		var showInfo = $('form#show-update').serialize();
		updateShow(showInfo);
		});

	function updateShow(input){
		$.post(
			'/shows/edit'
			, input
			)
			.done(function (data){
				$('#show-update').addClass('hide');
				$('#show-success').removeClass('hide');
			})
			.error(function(err){
				alert(err.responseText);
			});
	}


});
