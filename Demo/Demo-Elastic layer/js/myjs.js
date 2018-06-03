
$(function(){
	$(".showdiv").click(function(){
		var box_w=600,
		    box_h=$(".show").height(),
		    width=document.body.clientWidth,
		    height=document.body.clientHeight,
		    _width=(width-box_w)/2,
		    _height=(height-box_h)/2;
		  $("#zhezhao").show();
        $(".show").animate(
        {
        	top:140,
        	right:_width,
        	width:box_w,
        	opacity:"show"
        },500);
             
	});
	$(".show .close").click(function(){
           $(".show").animate(
        {
        	top:0,
        	right:0,
        	width:0,
        	opacity:"hide"
        },500);
         $("#zhezhao").hide();
	});

})