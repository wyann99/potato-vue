;(function($){

	var Carousel = function(poster){
		// 保存单个旋转木马对象
		this.poster = poster;
		this.posterItemMain = poster.find("poster-list");
		this.prevBtn = poster.find("div.poster-prev-btn");
		this.nextBtn = poster.find("div.poster-next-btn");
		this.posterFirstItem = this.posterItemMain.find("li").eq(0);
		this.posterItems = poster.find("li.poster-item");


		// 默认配置蚕食
		this.setting = {
			"width":1000, //幻灯片的宽度
			"height":270, //幻灯片的高度
			"posterWidth":640, //幻灯片第一帧的宽度
			"posterHeight":270, //幻灯片第一帧的高度
			"scale":0.9,
			"speed":500,
			"verticalAlign":'middle'
		}
		$.extend(this.setting,this.getSetting());
	}

	Carousel.prototype = {
		// 写方法
		// 设置配置参数值去控制基本的宽高
		setSettingValue:function(){
			this.poster.css({
				width:this.setting.width,
				height:this.setting.height
			});
			this.posterItemMain.css({
				width:this.setting.width,
				height:this.setting.height
			});

			// 计算上下切换按钮的宽度
			var w = (this.setting.width-this.setting.posterWidth)/2;
			this.nextBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});
			this.prevBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});

			// 设置第一帧
			this.posterFirstItem.css({
				left:w,
				zIndex:Math.floor(this.posterItems.size()/2)
			})

		},

		// 获取人工配置参数
		getSetting:function(){
			var setting = this.poster.attr("data-setting");
			if(setting && setting != ""){ 	//容错
				return $.parseJSON(setting);
			}else{
				return {};
			}
		}

	}

	Carousel.init= function(posters){
		var _this_ = this;
		posters.each(function(){
			new _this_($(this));
		})
	}

	window["Carousel"]= Carousel;

})(jQuery);