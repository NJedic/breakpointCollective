// VARIABLES
// +++++++++++++++++++++++++++
var enterHr = document.getElementById("enterHr");


// FUNCTIONS
// +++++++++++++++++++++++++++

// On document load and ready...
$(document).ready(function(){
	// when the user clicks the enter button...
	$("#enterButton").on("click", function(){
		console.log("HELLO");
		TweenLite.to(enterHr, 2.5, {width:500});
		location.href = www.breakpointcollective.com/home.html;
	})
})