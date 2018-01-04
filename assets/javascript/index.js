// INDEX.HTML
// =================================================================
// =================================================================

// FUNCTIONS
// +++++++++++++++++++++++++++

// On document load and ready...
$(document).ready(function(){
	// set interval for blinking enter button
	setInterval(blinker,1500);
	// and run function for blinking
	function blinker(){
		$("#enterLink").fadeOut(600);
		$("#enterLink").fadeIn(600);
	}
})


