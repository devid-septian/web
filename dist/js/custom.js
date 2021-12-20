(function($){

	// header
	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 320) {
	        $(".navbar").addClass("active");
	    } else {
	        //remove the background property so it comes transparent again (defined in your css)
	       $(".navbar").removeClass("active");
	    }
	});
	// Add scrollspy to <body>
  // $('body').scrollspy({target: ".navbar", offset: 50});   

  // mobile menu
	var openMobileMenu = function () {
	  var body = $('body');
	  if (body.hasClass('open')) {
	      closeMobileMenu();
	    } else {
	      body.addClass('open');
	    }
	  }
	  var closeMobileMenu = function () {
	    $('body').removeClass('open');
	  }

	  /* MOBILE MENU */
	  var mobileMenu = $('.js-mobile-menu');
	  $(document).on('click', '.js-mobile-button', function () {
	    openMobileMenu();
	    return false;
	  });

	  $(document).off('click.mobileMenu').on('click.mobileMenu', function (e) {
	    var t = $(e.target);
	    closeMobileMenu(mobileMenu);
	    if (t.closest('.js-mobile-menu').length < 1 && t.closest('.js-mobile-button').length < 1) {
	  	    closeMobileMenu(mobileMenu);
	 	 }
 	  });

	// ===
	var rellax = new Rellax('.rellax');
	
   // ===
    var Shuffle = window.Shuffle;
	var element = document.querySelector('.my-shuffle-container');
	var sizer = element.querySelector('.my-sizer-element');

	var shuffleInstance = new Shuffle(element, {
	  itemSelector: '.picture-item',
	  sizer: sizer // could also be a selector: '.my-sizer-element'
	});
	// shuffleInstance.filter('animal');
	$("#all").on("click", function(){
	   shuffleInstance.filter();
	});
	$(".btn-group button").on("click", function(){
		var dataGroup = $(this).attr('data-group');
		$(this).parent('.btn-group').find('.active').removeClass('active');
		$(this).addClass('active');
	    shuffleInstance.filter(dataGroup);
	});
	$(document).ready(function() {
		$('.nav').onePageNav({
			currentClass: 'current',
			changeHash: true,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing'
		});
	});
})(jQuery);