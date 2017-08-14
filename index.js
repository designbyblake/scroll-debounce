global.scrollDebounce = {
	fire: [],
	pause: 100,
	didScroll: false,
	addEvent: function(func, params) {
		this.fire.push([func, params]);
	},
	runFunctions: function() {
		for (var i = 0; i < scrollDebounce.fire.length; i++) {
			scrollDebounce.fire[i][0].apply(this, scrollDebounce.fire[i][1]);
		}
	},
	didWindowScroll: function() {
		scrollDebounce.didScroll = true;
	},
	init: function() {
		window.onscroll = scrollDebounce.didWindowScroll;
		setInterval(function() {
			if (scrollDebounce.didScroll) {
				scrollDebounce.didScroll = false;
				scrollDebounce.runFunctions();
			}
		}, scrollDebounce.pause);
	}
};
module.exports = scrollDebounce;
