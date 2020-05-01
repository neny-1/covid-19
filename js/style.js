$(document).ready(function(){
	/*start home*/
	$('.know h6').click(function(){
		$('.know h6').removeClass('active');
		 $(this).addClass('active');
		console.log($(this).hasClass('symp'));
		
		if($(this).hasClass('symp'))
		{
		$('.data').addClass('hidden_data');
		 $('.data').css({display:'none'});
		 $('.data.Symptoms').fadeIn(1000);
		}
		else if($(this).hasClass('Cont'))
		{
		$('.data').addClass('hidden_data');
		 $('.data').css({display:'none'});
		 $('.data.Contagion').fadeIn(1000);	
		}
		else if($(this).hasClass('Preve')){
		 $('.data').addClass('hidden_data');
		 $('.data').css({display:'none'});
		 $('.data.Prevention').fadeIn(1000);
		}	
	});
	/*start .Symptoms-sec*/
	$('.Symptoms-sec .info h5').click(function(){
		$('.Symptoms-sec .info h5').removeClass('active-li');
		$(this).addClass('active-li');
		
	if($(this).hasClass('High')){
			$('.Symptoms-sec img ,.Symptoms-sec .img').removeClass('active-data').addClass('hidden-data');
			$('.High-data').addClass('active-data');
	}
	else if($(this).hasClass('Cough')){
			$('.Symptoms-sec img ,.Symptoms-sec .img').removeClass('active-data').addClass('hidden-data');
			$('.Cough-data').addClass('active-data');
	}
	else if($(this).hasClass('Sore')){
			$('.Symptoms-sec img ,.Symptoms-sec .img').removeClass('active-data').addClass('hidden-data');
			$('.Sore-data').addClass('active-data');
	}
	else if($(this).hasClass('Headache')){
			$('.Symptoms-sec img ,.Symptoms-sec .img').removeClass('active-data').addClass('hidden-data');
			$('.Headache-data').addClass('active-data');
	}
	else if($(this).hasClass('Tiredness')){
			$('.Symptoms-sec img ,.Symptoms-sec .img').removeClass('active-data').addClass('hidden-data');
			$('.Tiredness-data').addClass('active-data');
			
		}
	});
	/*start Prevention */
	$('.Prevention ul li').hover(function(){
		$('.Prevention ul li').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.Prevention ul li').hover(function(){
		if($(this).hasClass('wash')){
			$('.Prevention .img-shaow, .Prevention .img-slider').removeClass('active-data').addClass('hidden-data');
			$('.Prevention .wash-data').addClass('active-data');
		}
		else if($(this).hasClass('Wear')){
			$('.Prevention .img-shaow, .Prevention .img-slider').removeClass('active-data').addClass('hidden-data');
			$('.Prevention .Wear-data').addClass('active-data');
		}
		else if($(this).hasClass('Close')){
			$('.Prevention .img-shaow, .Prevention .img-slider').removeClass('active-data').addClass('hidden-data');
			$('.Prevention .Close-data').addClass('active-data');
		}
		else if($(this).hasClass('Crowded')){
			$('.Prevention .img-shaow, .Prevention .img-slider').removeClass('active-data').addClass('hidden-data');
			$('.Prevention .Crowded-data').addClass('active-data');
		}
		else if($(this).hasClass('home')){
			$('.Prevention .img-shaow, .Prevention .img-slider').removeClass('active-data').addClass('hidden-data');
			$('.Prevention .home-data').addClass('active-data');
		}
	});
	$('.family .layer  button').click(function(){
		$('.family .layer .read').slideToggle(1000);
	});
	$('.family .layer .cov h4').click(function(){
		$('.family .layer .cov h4').removeClass('active-li');
		$(this).addClass('active-li');
	});
	$('.family .layer .cov h4').click(function(){
		if($(this).hasClass('cov_19-li')){
		 $('.family .layer .all').removeClass('active-data').slideUp(1000);
		 $('.family .layer .covid-data').slideDown(1000);
		}
		else if($(this).hasClass('mars-li')){
		 $('.family .layer .all').removeClass('active-data').slideUp(1000);
		 $('.family .layer .mars-data').slideDown(1000);
		}
		else if($(this).hasClass('sars-li')){
		 $('.family .layer .all').removeClass('active-data').addClass('hidden-data').slideUp(1000);
		 $('.family .layer .sars-data').slideDown(1000);
		}
	});
	/*start faq*/
 $(window).scroll(function() {
		console.log($(window).scrollTop());
		if($(window).scrollTop()>=500)
			$(".scroll-top,.scroll-top-ar").show();
		      else
			$(".scroll-top,.scroll-top-ar").hide();
	 
	});
	
	$(".scroll-top,.foo-home,.scroll-top-ar").click(function() {
		
	$("html").animate({scrollTop:0},1400);
		
	});
	
  
	  $('.spread-li,.foo-spread').click(function(){
		if ((window).innerWidth >=1000){
	 		 $("html").animate({scrollTop:1600},1400);
			}
		  else if((window).innerWidth >700 && (window).innerWidth <1000 ){
		  $("html").animate({scrollTop:2032},1400);
			  }
		   else if((window).innerWidth >100 && (window).innerWidth <699 ){
		  $("html").animate({scrollTop:2540},1400);
			   }
  });
	
	$('.symptopm-li,.foo-symptopm').click(function(){
	if ((window).innerWidth >=1000){
	 		 $("html").animate({scrollTop:2700},1400);
			}
		  else if((window).innerWidth >700 && (window).innerWidth <1000 ){
		  $("html").animate({scrollTop:3540},1400);
			  }
		   else if((window).innerWidth >100 && (window).innerWidth <699 ){
		  $("html").animate({scrollTop:4727},1400);
			   }
	 
  });
	
	$('.instructions-li,.foo-instructions').click(function(){
	 if ((window).innerWidth >=1000){ 
	 		 $("html").animate({scrollTop:3480},1400);
			}
		  else if((window).innerWidth >700 && (window).innerWidth <1000 ){
		  $("html").animate({scrollTop:4785},1400);
			  }
		   else if((window).innerWidth >100 && (window).innerWidth <699 ){
		  $("html").animate({scrollTop:5700},1400);
			   }
  });
  
	$('.dropdown-item,.Cf').click(function(){
	 if ((window).innerWidth >=1000){ 
	 		 $("html").animate({scrollTop:4070},1400);
			}
		else if((window).innerWidth >700 && (window).innerWidth <1000 ){
		  $("html").animate({scrollTop:6250},1400);
			  }
		   else if((window).innerWidth >100 && (window).innerWidth <699 ){
		  $("html").animate({scrollTop:7100},1400);
			   }
  });
	
	$('.faq-li,.foo-faq').click(function(){
	 if ((window).innerWidth >=1000){
	 		 $("html").animate({scrollTop:4610},1400);
			}
		 else if((window).innerWidth >700 && (window).innerWidth <1000 ){
		  $("html").animate({scrollTop:7170},1400);
			  }
		   else if((window).innerWidth >100 && (window).innerWidth <699 ){
		  $("html").animate({scrollTop:8300},1400);
			   }
	 
	  
  });
	
	$('.contact-li,.foo-contact,.ConButton').click(function(){
	  if ((window).innerWidth >=1000){
	 		 $("html").animate({scrollTop:5468},1400);
			}
		  else if((window).innerWidth >700 && (window).innerWidth <1000 ){
		  $("html").animate({scrollTop:8625},1400);
			  }
		   else if((window).innerWidth >100 && (window).innerWidth <699 ){
		  $("html").animate({scrollTop:9700},1400);
			   }
	 
  });
 $('.lang-icon ').click(function(){
	 $('.lang .hid,.lan .hid').slideToggle(500)
 });
	/*nice scroll */
	
	
	
 /*else if ($(window).width <=575){
	 console.log(window.scrollTop())
	  $('.spread-li,.foo-spread').click(function(){
	  $("html").animate({scrollTop:3340},1400);
  });
	$('.symptopm-li,.foo-symptopm').click(function(){
	  $("html").animate({scrollTop:5500},1400);
  });
	$('.instructions-li,.foo-instructions').click(function(){
	  $("html").animate({scrollTop:6725},1400);
  });
	$('.dropdown-item,.Cf').click(function(){
	  $("html").animate({scrollTop:8400},1400);
  });
	$('.faq-li,.foo-faq').click(function(){
	  $("html").animate({scrollTop:9600},1400);
  });
	$('.contact-li,.foo-contact,.ConButton').click(function(){
	  $("html").animate({scrollTop:1800},1400);
  });
  }
  */
});

