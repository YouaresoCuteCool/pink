$('.register').click(function(){
	$('.login').css('display','block');
})
$('.sign').click(function(){
	$('.login').css('display','block');
})
$('.close-login-box').click(function(){
	$('.login').css('display','none');
})
$('.login-btn').click(function(){
	if($('.login-input>input').val()==''){
		$('.login-warn').text('请输入账号');
	}
})
$('.sign').mouseover(function(){
	$(this).css('background-image','radial-gradient(at center,#55b668,rgba(101,181,117,0.9),white)');
}).mouseout(function(){
	$(this).css('background-image','radial-gradient(at center,rgba(101,181,117,0.9),#55b668)');
})
$('.type-title-cpt>span:eq(1)').click(function(){
	$('.type-title-cpt span').removeClass('active');
	$(this).addClass('active');
	$('.login-content').css('display','none');
	$('.register-content').css('display','block');
})
$('.type-title-cpt>span:eq(0)').click(function(){
	$('.type-title-cpt span').removeClass('active');
	$(this).addClass('active');
	$('.register-content').css('display','none');
	$('.login-content').css('display','block');
})
$('.register').mouseover(function(){
	$(this).css({
		'background-color':'#4bac58',
		'color':'white',
		'border-color':'#4bac58'
	})
}).mouseout(function(){
	$(this).css({
		'background-color':'white',
		'border-color':'#4bac58',
		'color':'#4bac58'
	})
})
$(function(){
 	var topHide=0;
 	$(".nav-header").addClass("on");
 	$(window).scroll(function(){ 
 		var topShow=$(window).scrollTop();
 		if(topShow>topHide){
 			$(".nav-header").removeClass("on"); 
 		}else{ 
 			$(".nav-header").addClass("on");
 		} 
 		topHide=topShow;
 	}) 
 })
$(window).scroll(function(){
 	if($(window).scrollTop()>300){
 		$('.backTotop').css("display","block");
 	}else{
 		$('.backTotop').css("display","none");
 	}
 }) 