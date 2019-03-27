$("#bottom").css({
				"width":"100%",
				"height":"50px",
				"display":"flex",
			})

$("#bottom").append("<div class='bottom-menu'>"+
					"<img  id='index' src='img/menu/index.svg'/>"+
					"<span class='menu-word'>首页</span>"+
				"</div>"+
				"<div class='bottom-menu'>"+
					"<img id='fenlei' src='img/menu/fenlei.svg'/>"+
					"<span class='menu-word'>分类</span>"+
				"</div>"+
				"<div class='bottom-menu'>"+
					"<a href='登录界面.html'><img id='me' src='img/logo/睿乐logo.svg'/></a>"+
				"</div>"+
				"<div class='bottom-menu'>"+
					"<img id='gouwuche' src='img/menu/gouwuche.svg'/>"+
					"<span class='menu-word'>购物车</span>"+
				"</div>"+
				"<div class='bottom-menu'>"+
					"<img id='gengduo' src='img/menu/gengduo.svg'/>"+
					"<span class='menu-word'>更多</span>"+
				"</div>");

$(".bottom-menu").css({
				"width":"75px",
				"height":"100px",
//				"border":"1px solid black",
				"display":"flex",
				"flex-direction":"column",
				"align-items":"center",	
})
$("#index").css({
				"width":"35px",
				"height":"25px",
				"margin-top":"5px",
})
$("#fenlei").css({
				"width":"24px",
				"height":"24px",
				"margin-top":"6px",
})
$("#me").css({
				"width":"75px",
				"height":"30px",
				"margin-top":"12px",
})
$("#gouwuche").css({
				"width":"30px",
				"height":"30px",
				"margin-top":"1px",
})
$("#gengduo").css({
				"width":"30px",
				"height":"30px",
				"margin-top":"1px",
})

$(".menu-word").css({
				"font-size":"12px",
})