// WARNING: If you modify this file, be sure to update the appended version number
// in the site template, otherwise users may not get the updated version of this
// file right away after syncing

// Define the libraries available by name in the JS framework
// Each entry should have a version number appended to the end so that
// if the file is updated then the version number can be changed and the
// file will recache in the user's browser
var JS_LIBS = new Array;
JS_LIBS['ajax'] = "/js/ajax.js?v=5";
JS_LIBS['forms'] = "/js/forms.js?v=1";
JS_LIBS['events'] = "/js/events.js?v=1";
JS_LIBS['lang'] = "/js/lang.js?v=3";

// PHP-style include for doing javascript includes on-the-fly
function include (library) {
	var script = document.getElementById ("js-framework");
	var JS_HOST = script.src.match (/http:\/\/.*neopets\.com/);
	var URL = JS_HOST + JS_LIBS[library];

	var head = document.getElementsByTagName ("head").item(0);
	var element = document.createElement ("script");
	element.setAttribute ("type", "text/javascript");
	element.setAttribute ("language", "JavaScript");
	element.setAttribute ("src", URL);
	head.appendChild (element);
}

// Extend include to facilitate include_once functionality
var JS_INCLUDED_FILES = new Array;
JS_INCLUDED_FILES.in_array = function (data) {
	for (var library in this) {
		if (library === data) return true;
	}
	return false;
}
function include_once (library) {
	if (!JS_INCLUDED_FILES.in_array (library)) {
		JS_INCLUDED_FILES.push (library);
		include (library);
	}
}
