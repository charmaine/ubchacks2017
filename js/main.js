function playSound() {
      var sound = document.getElementById("audio");
      sound.play();
  }

$(document).ready(function(){
    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});

      var hashTagActive = "";
        $(".scroll").on("click touchstart" , function (event) {
            if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
                event.preventDefault();
                //calculate destination place
                var dest = 0;
                if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                    dest = $(document).height() - $(window).height();
                } else {
                    dest = $(this.hash).offset().top;
                }
                //go to destination
                $('html,body').animate({
                    scrollTop: dest
                }, 2000, 'swing');
                hashTagActive = this.hash;
            }
        });

  wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false        // trigger animations on mobile devices (true is default)
        }
      );
      wow.init();



});
