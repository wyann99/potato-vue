

// var Base = {
// 	getid:function(id){
// 		return document.getElementById(id);
// 	},
// 	getName:function(name){
// 		return document.getElementsByName(name);
// 	},
// 	getTagName:function(tag){
// 		return document.getElementsByTagName(tag);
// 	}
// }


function Base(){
	// 创建一个数组，来保存获取的节点和节点数组
	this.elements = [];
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}
}



window.onload = function(){

}














