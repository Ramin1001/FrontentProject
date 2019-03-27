"use strict";

//(function($){
//function($) handlePreloader() {
//		if($('.preloader').length){
//			$('.preloader').delay(200).fadeOut(500);
//		}
//	}
//});



//function headerStyle() {
//		if($('.main-header').length){
//            
//			var scrolltop2 = $(window).scrollTop();
//			var mainHeader = $('.main-header');
//			var headHeight =250+"px";
//			var scrolable = $('.unvisibly_scroll');
//                    
//			            
//            if (scrolltop2 >= headHeight) {
//                
//                 $(".unvisibly_scroll").toggleClass("active-scroll");
//				
//				
//			} 
//            
//		}
//	}
//
//headerStyle();


$(".src_icon").click(function(){
  $(".search_ul").toggleClass("active");
     
})
//----------------------------------------------
	if($('.main-ul-box').length){
		$(".main-ul-box").on('click', '.btn-place', function() {
			
			var mainUl = $(this).parents('.main-ul-box');
			var choosen = $(this).parents('.li-list');
			
			if($(this).hasClass('active')!==true){
				$(mainUl).find('.li-list .btn-place').removeClass('active');
			}
			
			if ($(this).next('.text-box').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(mainUl).children('.li-list').removeClass('active-block');
				$(mainUl).find('.li-list').children('.text-box').slideUp(300);
				choosen.addClass('active-block');
				$(this).next('.text-box').slideDown(300);	
			}
		});	
	}

//-------------------------------------------
$('.videoWrapper .layout span').click(function(){
    $(".layout").addClass("hidden");
         
    document.querySelector('video').play();
})



if($('.scroll').length){
		$(".scroll").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	 

if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}



