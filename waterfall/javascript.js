window.onload = function(){
	waterfull('main','box');

	var dataInt = {"data":[{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'},{"src":'37.jpg'},{"src":'38.jpg'},{"src":'39.jpg'},{"src":'40.jpg'},{"src":'41.jpg'},{"src":'42.jpg'},{"src":'43.jpg'},{"src":'44.jpg'},{"src":'45.jpg'},{"src":'46.jpg'},{"src":'47.jpg'},{"src":'48.jpg'},{"src":'49.jpg'}]}
	window.onscroll = function(){
		if(checkScrollSlide){
			var oParent = document.getElementById('main');

			//讲数据块渲染到当前页面的尾部
			for(var i =0;i<dataInt.data.length;i++){
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = "pic";
				oBox.appendChild(oPic);
				var oImg = document.createElement("img");
				oImg.src = 'images/'+ dataInt.data[i].src;
				oPic.appendChild(oImg);
			}

			waterfull('main','box');

		}
	}
}

function waterfull(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,box);

	//计算整个页面显示的列数（页面宽/box的宽）
	var oBoxW = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / oBoxW) ;
	//设置main的宽
	oParent.style.cssText = 'width:'+oBoxW*cols +'px;margin:0 auto';

	//存放每张图片高度的数组
	var hArr = [];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,hArr);//找最小值
			var index = getMinhIndex(hArr,minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			// oBoxs[i].style.left = oBoxW*index + 'px';//第一种方法
			oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';//第二种方法
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}

}

//根据class获取元素
function getByClass(parent,clsName){
	var boxArr = [], //用来存储获取到的所有class的box的元素
		oElements = parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className == clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

//获取 最小高度的 索引值
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return i;
		}
	}
}

//检测是否具备了滚动加载数据块的条件
function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,'box');
	var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);

	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight;

	return (lastBoxH < scrollTop+height)? true:false;

}



