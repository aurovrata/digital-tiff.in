(function( $ ) {
	'use strict';


	 
    $(function() {
        const wrapper = document.querySelector('.scroll-video-wrap'); 
        const video = wrapper.querySelector('video'); 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                video.classList.add('is-visible'); 
                video.play(); 
            } else { 
                video.classList.remove('is-visible'); 
                video.pause(); 
                video.currentTime = 0; // reset so it replays next time 
            } 
            });
        }, { threshold: 0.9 }); // fires when 90% of the cover is visible/scrolled 
        observer.observe(wrapper);
    });

})( jQuery );
