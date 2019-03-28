$("#top").css({
				"width":"100%",
				"height":"44px",
				"background-color":"white",
				"display":"flex"
			})
 
$("#top").append(
				"<div id='top-center'>"+
					"<input id='input-search' type='text' placeholder='搜索'/>"+
				"</div>"+
				"<div id='top-right'>"+
					"<img src='img/logo/睿乐logo.svg'/>"+
				"</div>");
 
 
// 左中右三栏的共同属性
$("#top-left,#top-center,#top-right").css({                 
				"height":"100%",
				"display":"flex",
				"justify-content":"center",
				"align-items":"center",
			})

$("#top-left").css({
				"width":"60px",
			})

$("#top-center").css({
				"flex":"1",
			})

$("#top-right").css({
				"width":"100px",
			})

$("#top-left img").css({
				"width":"20px",
				"height":"20px",	
			})

$("#top-right img").css({
				"width":"75px",
				"height":"30px",	
			})

$("#input-search").css({
				"width":"200px",
				"height":"25px",
				"border-radius":"10px",
				"padding-left":"10px",
			})

