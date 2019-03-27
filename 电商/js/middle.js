//中间分为四个部分
$("#middle").append("<div id='first'></div>"+
				"<div id='second'></div>"+	  	
				"<div id='third'></div>"+
				"<div id='forth'></div>")
//第一部分
$("#first").append("<img src='img/商品/轮播图3.jpg'/>")
$("#first img").addClass("lunbo")
//第二部分
$("#second").append("<div></div> <div></div>")
$("#second div").addClass("tubiaokuai")

$("#second div:first").append("<div><img src='img/logo/外星人.svg'></div>"+
						"<div><img src='img/logo/华为.svg'></div>"+ 
						"<div><img src='img/logo/苹果.svg'></div>")

$("#second div:last").append("<div><img src='img/logo/小米.svg'></div>"+
						"<div><img src='img/logo/联想.svg'></div>"+ 
						"<div><img src='img/logo/微软.svg'></div>")
$("#second img:eq(1)").addClass("img60px")
$("#second img:eq(2)").addClass("img60px")
$("#second img:eq(3)").addClass("img60px")
$("#second img:eq(4)").addClass("img60px")

$("#second img:eq(0)").addClass("img50px")
$("#second img:eq(5)").addClass("img50px")

//第三部分 热卖单品
$("#third").append("<div id='third-top'></div> <div id='third-bottom'></div>")
$("#third-top").append("热卖单品")
$("#third-bottom").append("<a href='华为mate20.html'><div></div></a> <div></div> <div></div> <div></div>")

$("#third-bottom div:eq(0)").append("<img src='img/商品/华为.jpg'><p>华为Mate20</p><p>￥5499</p>")
$("#third-bottom div:eq(1)").append("<img src='img/商品/苹果.jpg'><p>iphoneXR</p><p>￥5949</p>")
$("#third-bottom div:eq(2)").append("<img src='img/商品/小米9.jpg'><p>小米9</p><p>￥2999</p>")
$("#third-bottom div:eq(3)").append("<img src='img/商品/微软电脑.jpg'><p>Surface Book 2</p><p>￥22888</p>")

//第四部分 猜你喜欢
$("#forth").append("<div id='forth-top'></div> <div id='forth-bottom'></div>")
$("#forth-top").append("猜你喜欢")
$("#forth-bottom").append("<div></div> <div></div> <div></div> <div></div>")

$("#forth-bottom div:eq(0)").append("<img src='img/商品/iwatch.jpg'><p>Apple Watch</p><p>￥3499</p>")
$("#forth-bottom div:eq(1)").append("<img src='img/商品/佳能相机.jpg'><p>佳能相机</p><p>￥5098</p>")
$("#forth-bottom div:eq(2)").append("<img src='img/商品/耳机.jpg'><p>Beats耳机</p><p>￥899</p>")
$("#forth-bottom div:eq(3)").append("<img src='img/商品/戴森吹风机.jpg'><p>戴森吹风机</p><p>￥2990</p>")