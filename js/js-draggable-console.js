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
/**
 * The draggable console
 * Creates the DOM element, append it and make it draggable.
 * @type {Object}
 */
const dragConsole = 
	'<div class="container-fluid">'																															+
		'<div class="row">'																																				+
			'<div class="col-xl-12">'																																+
				'<div id="js-draggable-console" class="console">'																			+
					'<div id="console-title">'																													+
						'<h4>Js-Draggable-Console</h4>'																										+
							'<div id="console-close-icon">'																									+
								'<i class="far fa-times-circle"></i>'																					+
							'</div>'																																				+
						'</div>'																																					+
					'<input type="text" placeholder="> Enter your command here..." id="js-input-text">' +
				'</div>'																																							+
			'</div>'																																								+
		'</div>'																																									+
	'</div>';
$("body").append(dragConsole);
$("#js-draggable-console").draggable();
/**
 * The draggable button that opens the console.
 * Creates the DOM element, append it and make it draggable.
 * @type {Object}
 */
const dragButton = '<div id="js-draggable-button"></div';
$("body").append(dragButton);
$("#js-draggable-button").draggable();

/**
 * onClick event handler to toggle ON/OFF console.
 */
$("#js-draggable-button").on("click", () => {
	/**
	 * Select the element and cache it in a constant.
	 * @type {Object}
	 */
	const consoleElem = $("#js-draggable-console");
	if (consoleElem.css('display') === 'none') {
		/**
		 * The element is currently hidden, show it.
		 */
		consoleElem.show(500);
	} else {
		/**
		 * The element is currently displayed, hide it.
		 */
		consoleElem.hide(500);
	}
});
/**
 * Additional onClick event handler to toggle OFF the console.
 */
$("#console-close-icon").on("click", () => {
	$("#js-draggable-console").hide(500);
});

const JDC = {
	log: (param) => $("#js-draggable-console").append("<p class='jdc-message' style='color:black;background-color: #7CFC00;'>LOG ->" + param + "</p>"),
	warn: (param) => $("#js-draggable-console").append("<p class='jdc-message' style='color:black; background-color:yellow'>WARNING -> " + param + "</p>"),
	info: (param) => $("#js-draggable-console").append("<p class='jdc-message' style='color:white;'>INFO ->" + param + "</p>"),
	error: (param) => $("#js-draggable-console").append("<p class='jdc-message' style='color:black; background-color:red'>ERROR ->" + param + "</p>"),
	ajax: (param) => $("#js-draggable-console").append("<p class='jdc-message' style='color:gray; background-color:black'>AJAX error -> " + param + "</p>"),
}

const console = {
	log: (param) => JDC.log(param),
	warn: (param) => JDC.warn(param),
	error: (param) => JDC.error(param),
	info: (param) => JDC.info(param),
};

window.console = console;

const clear = () => {
	const dragConsole = $("#js-draggable-console");
	/**
	 * Checks if there are items to clear
	 */
	if (dragConsole.children().length < 3) {
		JDC.info('nothing to clear.');
		setTimeout(() => {
			dragConsole.children(".jdc-message").remove();
		}, (1500));
		return;
	}
	dragConsole.children(".jdc-message").remove();
}

$("#js-input-text").on("keydown", (e) => {
  if (e.which === 9 || e.which === 13) {
  	const input = $("#js-input-text");
    const command = input.val();
    input.val("");
    if (command === 'clear') {
    	clear();
    	return;
    }
    JDC.info(command);
    try {
    	eval(command);
    } catch(error) {
    	JDC.error(error);
    	const helpUrl = `https://stackoverflow.com/search?q=[js]+${error}`;
    	const link = `<a href="${helpUrl}" target="_blank">here</a>`;
    	JDC.info(`Get help! Click ${link}! (opens in a new page)`);
    } 
  }
});
