$("#mate20-title").append("<a href='首页.html'><img src='img/menu/左箭头.svg'/></a> <p>商品</p>")
$("#mate20-picture").append("<img src='img/商品/华为.jpg' />")
$("#mate20-word").append("<div id='w-left'></div> <div id='w-right'></div>")
$("#w-left").append("华为 HUAWEI Mate 20 Pro (UD)屏内指纹版麒麟980芯片全面屏超大广角徕卡三摄8GB+128GB极光色宝石蓝全网通双4G手机")
$("#w-right").append("<div id='imgTwo'></div> <p>关注</p>")
$("#w-right #imgTwo").append("<img  id='heartGray' src='img/menu/灰心.svg' /> <img id='heartRed' src='img/menu/红心2.svg'/>")
$("#mate20-price").append("<div id='p-left'>￥5499.00</div> <div id='p-right'>睿乐安心购 七天无理由退换</div>")
$("#mate20-menu").append("<div id='menu1'></div> <div id='menu2'></div> <div id='menu3'></div> <div id='menu4'></div>")
$("#menu1").append("<img src='img/menu/客服.svg'/> <span>客服</span>")
$("#menu2").append("<img src='img/menu/购物车-灰.svg'/> <span>购物车</span>")
$("#menu3").append("加入购物车")
$("#menu4").append("立即购买")


$(function(){
	$("#imgTwo").click(function(){
		$("#heartRed").toggle()
		$("#heartGray").toggle()
	})
})