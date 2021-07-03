//**BEGIN MAIN SCROLLMAGIC SLIDES AND NAVBAR SETTINGS~~>
$(function () {
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = document.querySelectorAll(".panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }

    // fix navbar when scrolling
    var banner = $('#nav-container');
    new ScrollMagic.Scene({
        triggerElement: '#sectionIndustries',
        triggerHook: 'onCenter',
        offset: -150
    })
        .setClassToggle(banner[0], 'fixed')
        .setTween(banner[0], 0.3, {top: 0, ease: Power2.EaseIn})
        .addTo(controller);
});
//~~<END MAIN SCROLLMAGIC AND NAVBAR SETTINGS**


//**BEGIN CANVAS IMAGE ANIMATION SECTION~~>
  // Targeting our HTML Canvas element named SmartCity and filling with a series of 2d images
  const html = document.documentElement;
  const canvas = document.getElementById("SmartCity");
  const context = canvas.getContext("2d");

  // Selecting image from img folder and dynamically increasing the file name up through 093
  const frameCount = 093;
  const currentFrame = index => (
    `images/SmartCity/Smart${index.toString().padStart(3, '0')}.jpg`
  );

  // Preloading the images' new network requests to increase speed
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  //Setting size of image and placing it in the canvas at 0x, 0y
  const img = new Image()
  img.src = currentFrame(1);
  canvas.width=1920;
  canvas.height=1080;
  img.onload=function(){
    context.drawImage(img, 0, 0);
  }

  //The callback function we pass to update the image 
  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  };

  //An event listener to track user scroll progress relative to the page height and calculate which image to load
  window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );
    
  // Will match the browser refresh rate and enable hardware acceleration
    requestAnimationFrame(() => updateImage(frameIndex + 1))
  })

  preloadImages()
//~~<END CANVAS IMAGE SECTION**

//**BEGIN INDUSTY CARD SECTION~~>
$(document).ready(function() {
	
	$('.card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});
//~~<END INDUSTRY CARD SECTION**

