/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);


/*!
 * Js-Draggable-Console
 */

var drag_console = `<div id="js-draggable-console" style="height: 70vh; width: 80vw; background-color: rgba(0,0,0,0.7); border: 4px solid #0060FF; position: fixed; top: 0; bottom: 0; left: 0; right: 0; margin: auto; overflow-y: scroll; display: none"><div style='width: 100%; background-color: #0060FF; color: white;'><h4 style='margin:0; padding-top:5px; padding-bottom:5px; padding-left:5px;'>Js-Draggable-Console</h4></div><input type='text' id='js-input-text' style='width:100%; position:absolute; bottom:0;'></div>`;
var drag_button = `<div id="js-draggable-button" style="height: 40px; width: 40px; background-color: white; border: 5px solid #0060FF; z-index: 999;  border-radius: 25px; left:50%;"></div>`;
$("body").append(drag_console);
$("body").append(drag_button);
$("#js-draggable-button").draggable();

/*Function click */
$("#js-draggable-button").on("click", function(){
	$("#js-draggable-console").toggle("drop", 500);
});

$("body").append("<style>.jdc-message{margin:0}</style>");


var JDC = {
	"log" : "",
	"warn" : "",
	"info" : "",
	"error" : "",
	"ajax" : ""
}
JDC.log = function(param){
	$("#js-draggable-console").append("<p class='jdc-message' style='color:black;background-color: #7CFC00;'>LOG ->" + param + "</p>");
};
JDC.warn = function(param){
	$("#js-draggable-console").append("<p class='jdc-message' style='color:black; background-color:yellow'>WARNING -> " + param + "</p>");
};
JDC.error = function(param){
	$("#js-draggable-console").append("<p class='jdc-message' style='color:black; background-color:red'>ERROR ->" + param + "</p>");
};
JDC.info = function(param){
	$("#js-draggable-console").append("<p class='jdc-message' style='color:white;'>INFO ->" + param + "</p>");
};
JDC.ajax = function(param){
	$("#js-draggable-console").append("<p class='jdc-message' style='color:gray; background-color:black'>AJAX error -> " + param + "</p>");
};

var console = {};
console.log = function(param){
	JDC.log(param);
};
console.warn = function(param){
	JDC.warn(param);
};
console.error = function(param){
	JDC.error(param);
};
console.info = function(param){
	JDC.info(param);
};

window.console = console;

$('input').on('keydown', function(e){
    if(e.which === 9 || e.which === 13) {
        var command = $("#js-input-text").val();
        eval(command);
    }
});
