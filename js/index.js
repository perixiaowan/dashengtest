(function() {

	//配置
	var config = {
		'audio': {
			'icon': 'audio-record-play',
			'text': true
		},
		'loading': 'loading-ic'
	};

	//loading
	window.onload = function() {
		$('#loading').hide();
	}

	/*
	//分享
	$('#js-btn-share').bind('tap', function() {
		$('#js-share').show();
	})
	$('#js-share').bind('tap', function() {
		$(this).hide();
	});
	*/

	var pageIndex = 1,
		pageTotal = $('.page').length,
		towards = {
			up: 1,
			right: 2,
			down: 3,
			left: 4
		},
		isAnimating = false;

	//禁用手机默认的触屏滚动行为
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);

	/*
	$(document).swipeUp(function() {
		if (isAnimating) return;
		if (pageIndex < pageTotal) {
			pageIndex += 1;
		} else {
			pageIndex = 1;
		};
		pageMove(towards.up);
	})

	$(document).swipeDown(function() {
		if (isAnimating) return;
		if (pageIndex > 1) {
			pageIndex -= 1;
		} else {
			pageIndex = pageTotal;
		};
		pageMove(towards.down);
	})
	*/

	function pageUp(){
		if (isAnimating) return;
		if (pageIndex > 1) {
			pageIndex -= 1;
		} else {
			pageIndex = pageTotal;
		};
		pageMove(towards.down);
	}

	function pageDown() {
		if (isAnimating) return;
		if (pageIndex < pageTotal) {
			pageIndex += 1;
		} else {
			pageIndex = 1;
		};
		pageMove(towards.up);
	};


	function dashengShow(){
		$(".dasheng").hide();
		var randomNum = Math.floor(Math.random()*12+1);
		console.log("randomNum="+randomNum);
		if(randomNum==1){
			$(".fm1").show();
			document.title='原来我是“霸道总裁”版大圣，赶紧看看你是什么';	
		}else if(randomNum==2){
			$(".fm2").show();
			document.title='原来我是“阳光少年”版大圣，赶紧看看你是什么';	
		}else if(randomNum==3){
			$(".fm3").show();
			document.title='原来我是“最经典型”大圣，赶紧看看你是什么';	
		}else if(randomNum==4){
			$(".fm4").show();
			document.title='原来我是“吃货”版大圣，赶紧看看你是什么';	
		}else if(randomNum==5){
			$(".fm5").show();
			document.title='原来我是“戴白手套”的大圣，赶紧看看你是什么';	
		}else if(randomNum==6){
			$(".fm6").show();
			document.title='原来我是“纸片”版大圣，赶紧看看你是什么';	
		}else if(randomNum==7){
			$(".fm7").show();
			document.title='原来我是“贴布”版大圣，赶紧看看你是什么';	
		}else if(randomNum==8){
			$(".fm8").show();
			document.title='原来我是“木偶”版大圣，赶紧看看你是什么';	
		}else if(randomNum==9){
			$(".fm9").show();
			document.title='原来我是“飞机头”版大圣，赶紧看看你是什么';	
		}else if(randomNum==10){
			$(".fm10").show();
			document.title='原来我是“星际宝贝”版大圣，赶紧看看你是什么';	
		}else if(randomNum==11){
			$(".fm11").show();
			document.title='原来我是“多彩”版大圣，赶紧看看你是什么';	
		}else if(randomNum==12){
			$(".fm12").show();
			document.title='原来我是“打酱油”版大圣，赶紧看看你是什么';	
		}
	}

	$('.enter').on('touchstart', function(){  
   		pageDown();
		dashengShow();
    });  

    $('.again').on('touchstart', function(){  
   		document.title='谁是我心目中的大圣？';	
		//pageUp();
		dashengShow();
    });  

    $('.next').on('touchstart', function(){  
   		pageDown();
    });  


	/*
	$(".enter").click(function() {
		pageDown();
		dashengShow();
	});

	$(".again").click(function() {
		document.title='测测你是哪一版大圣？';	
		//pageUp();
		dashengShow();
	});

	$(".next").click(function() {
		pageDown();
	});
	*/


	//人物移动
	$("#des12").click(function() {
		console.log("des12 click!");
		$("#xp12").animate({
			top: "3%",
			left: "58%"
		}, 4000, 'linear', function() {
			pageDown();
		});
		//pageDown();
	});

	function pageMove(tw) {
		var lastPage;
		if (tw == '1') {
			if (pageIndex == 1) {
				lastPage = ".page-" + pageTotal;
			} else {
				lastPage = ".page-" + (pageIndex - 1);
			}

		} else if (tw == '3') {
			if (pageIndex == pageTotal) {
				lastPage = ".page-1";
			} else {
				lastPage = ".page-" + (pageIndex + 1);
			}

		}

		var nowPage = ".page-" + pageIndex;

		switch (tw) {
			case towards.up:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case towards.down:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
		}
		isAnimating = true;
		$(nowPage).removeClass("hide");

		$(lastPage).addClass(outClass);
		$(nowPage).addClass(inClass);

		setTimeout(function() {
			$(lastPage).removeClass('page-current');
			$(lastPage).removeClass(outClass);
			$(lastPage).addClass("hide");
			$(lastPage).find("img").addClass("hide");

			$(nowPage).addClass('page-current');
			$(nowPage).removeClass(inClass);
			$(nowPage).find("img").removeClass("hide");

			isAnimating = false;
		}, 600);
	}

})();