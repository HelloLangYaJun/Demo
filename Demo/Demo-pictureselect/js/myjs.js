$(function(){
    $(".pic").click(function(){
        $(".pic[title]").stop(true,true);
        $(".this").stop(true,true);
    	var left1=$(this).offset().left;
    	 var top1=$(this).offset().top;
         var zindex1=$(this).css("z-index");
         var left2=$(".pic[title]").offset().left;
    	 var top2=$(".pic[title]").offset().top;
         var zindex2=$(".pic[title]").css("z-index");
        $(".pic[title]").animate({"left":left1,"top":top1},1000).css("z-index",zindex1).removeAttr("title");
        $(this).animate({"left":left2,"top":top2},1000).css("z-index",zindex2).attr("title","");
    });
})