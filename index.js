global.scrollDebounce = {
 	fire:[],
 	$the_window:'',
	pause:100,
	didScroll:false,
 	addEvent:function(func, params){
 		this.fire.push([func, params]);
 	},
	runFunctions:function(){
		for(let i=0; i<windowScrolled.fire.length; i++){
			windowScrolled.fire[i][0].apply(this, windowScrolled.fire[i][1]);
		}
	},
	didWindowScroll:function(){
		windowScrolled.didScroll = true;
	},
 	init:function(){
 		this.$the_window = window;
       	windowScrolled.$the_window.onscroll = windowScrolled.didWindowScroll; 
        setInterval(function(){
        	if(windowScrolled.didScroll){
        		windowScrolled.didScroll = false;
        		windowScrolled.runFunctions();
        	}
        },windowScrolled.pause);
 	}
};
module.exports = scrollDebounce;