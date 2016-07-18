$(window).on('load',function(){
	waterfall();

	var dataInt = {"data":[{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'},{"src":'37.jpg'},{"src":'38.jpg'},{"src":'39.jpg'},{"src":'40.jpg'},{"src":'41.jpg'},{"src":'42.jpg'},{"src":'43.jpg'},{"src":'44.jpg'},{"src":'45.jpg'},{"src":'46.jpg'},{"src":'47.jpg'},{"src":'48.jpg'},{"src":'49.jpg'}]}

	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(key,value){ //遍历对象
				var oBox = $('<div>').addClass("box").appendTo($('#main'));
				var oPic = $('<div>').addClass("pic").appendTo($(oBox));
				$('<img>').attr('src','images/'+dataInt.data[key].value);
			});
		}
	});
});

// jQuery优点 支持连缀，隐形迭代

function waterfull(){
	var $boxs = $("#main>div");
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);

	$("#main").width(w*cols).css('margin','0 auto');

	var hArr = [];
	$boxs.each(function(index.value){
		var h = $boxs.eq(index).outHeight();
		if(index < cols){
			hArr[index]=(h);
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr); //JQ直接就判断了，返回索引
			$(value).css({ //dom转成jq对象
				'position':'absolute',
				'top':minH + 'px',
				'left': minHIndex + 'px'
			})
			hArr[minHIndex] += $boxs.eq(index);
		}
	});

}


function checkScrollSlide(){
	var $lastBox = $('#main').last();
	var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerheight/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop + documentH)?true:false;

}


