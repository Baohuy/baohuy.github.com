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
	    var myLatlng = new google.maps.LatLng(10.794568, 106.628194);
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
	        zoom: 17,
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
	        title: 'Bảo Huy: 17/42 Gò Dầu, Tân Phú, TP. Hồ Chí Minh'
	    });

	    // BEGIN STYLE
	    map.mapTypes.set('map_style', styledMap);
	    map.setMapTypeId('map_style');
	    // END STYLE
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});