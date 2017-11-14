// INDEX.HTML
// =================================================================
// =================================================================

// VARIABLES
// +++++++++++++++++++++++++++
var enterHr = document.getElementById("enterHr");

// FUNCTIONS
// +++++++++++++++++++++++++++

// On document load and ready...
$(document).ready(function(){
	// ...shift hr to the right
	TweenLite.to(enterHr, 2.5, {width:500});
});


// HOME.HTML
// =================================================================
// =================================================================

// FUNCTIONS
// +++++++++++++++++++++++++++

// On document load and ready...
$(document).ready(function(){
	// ...add class to fadeIn hr
	$("#homeHr").addClass("animated fadeIn delay2s9ms");
});


