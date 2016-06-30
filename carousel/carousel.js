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
			"scale":0.9,	//记录显示比例关系
			"speed":500,
			"verticalAlign":'middle'
		}
		$.extend(this.setting,this.getSetting());

		this.setSettingValue();
		this.setPosterPos();

	}

	Carousel.prototype = {
		// 写方法

		//设置剩余的帧的位置关系
		setPosterPos:function(){
			var self = this;

			var sliceItems = this.posterItems.slice(1),
				sliceSize = sliceItems.size()/2,
				rightSlice = sliceItems.slice(0,sliceSize),
				level = Math.floor(this.posterItems.size()/2),
				leftSlice = sliceItems.slice(sliceSize);

			// 设置右边帧的位置关系和宽度高度 top值
			var rw = this.setting.posterWidth,
				rh = this.setting.posterHeight,
				gap = ((this.setting.width-this.setting.posterWidth)/2)/level;

			var firstLeft = (this.setting.width-this.setting.posterWidth)/2;
			var fixOffsetLeft = firstLeft+rw;


			rightSlice.each(function(i){
				level--;
				rw = rw*self.setting.scale;
				rh = rh*self.setting.scale;

				var j=i;
				

				$(this).css({
					zIndex:level,
					width:rw,
					height:rh,
					opacity:1/(++i),
					left:fixOffsetLeft+(++j)*gap-rw,
					top:(self.setting.height-rh)/2
				});
			});

			// 设置左边的位置关系
			var lw = rightSlice.last().width(),
				lh = rightSlice.last().height(),
				oloop = Math.floor(this.posterItems.size()/2);


			leftSlice.each(function(i){

				$(this).css({
					zIndex:level,
					width:lw,
					height:lh,
					opacity:1/oloop,
					left:i*gap,
					top:(self.setting.height-lh)/2
				});

				lw = lw/self.setting.scale;
				lh = lh/self.setting.scale;
				oloop--;
			});

		},


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