$(document).ready(function() {

	$('a[href*=#]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	        	$('html,body').animate({
	          	scrollTop: target.offset().top - 50
	        }, 600);
	        	return false;
	      	}
    	}
  	});

});

$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
	
	$('include').click(function() {
		var dataFile = $(this).attr('data-include');
		alert(dataFile);
		$(this).load(dataFile);
	});

});

$(document).ready(function() {

	$(document).ready(function(){
		$('#slider-section ul').bxSlider();
	});

});


$(document).ready(function() {

	function initialize() {
	    var myLatlng = new google.maps.LatLng(16.067991, 108.198755);
	    var myLatlng_cemter = myLatlng;

	    // BEGIN STYLE
	    var styles = [{
	        stylers: [{
	            saturation: 0
	        }]
	    }];
	    var styledMap = new google.maps.StyledMapType(styles, {
	        name: "Styled Map"
	    });
	    // END STYLE


	    var mapOptions = {
	        zoom: 16,
	        center: myLatlng_cemter,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        disableDefaultUI: false,

	        // BEGIN STYLE
	        mapTypeControlOptions: {
	            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	        }
	        // END STYLE
	    }
	    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
	    var marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
	        title: 'Hello'
	    });

	    // BEGIN STYLE
	    map.mapTypes.set('map_style', styledMap);
	    map.setMapTypeId('map_style');
	    // END STYLE
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});