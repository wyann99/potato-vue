function AnimationQueue(animators){
	this.animators = animators || [];
}

AnimationQueue.prototype = {
	append: function(){
		var args = [].slice.call(arguments);
		this.animators.push.apply(this.animators,args);
	},
	flush: function(){
		if(this.animators.length){
			var self = this;

			function play(){
				var animator = self.animators.shift();

				if(animator instanceof Animator){
					animator.start(function(){
						if(self.animators.length){
							play();
						}
					});
				}else{
					animator.apply(self);
					if(self.animators.length){
						play();
					}
				}
			}

			play();
		}
	}
}


var a1 = new Animator(1000,function(p){
	var tx = 100*p;
	block.style.transform = "translateX(" + tx + "px)";
});

var a2 = new Animator(1000,function(p){
	var ty = 100*p;
	block.style.transform = "translate(100px," + ty + "px)";
})

var a3 = new Animator(1000,function(p){
	var tx = 100*(1-p);
	block.style.transform = "translate(" + ty + "px,100px)";
})

var a4 = new Animator(1000,function(p){
	var ty = 100*(1-p);
	block.style.transform = "translateY(" + ty + "px)";
})

block.addEventListener("click",function(){
	var animators = new AnimationQueue();
	animators.append(a1,a2,a3,a4);
	animators.flush();
})









