$(function () {
    var $bird = $("#divbird");
    var pos = $bird.offset();//小鸟位置top、left
    var birdSize = { width: $bird.width(), height: $bird.height() };//小鸟宽高
    var speed = 20;//小鸟移动速度
    var keyrecode = 39;//默认向右移动
    $(document).keydown(function (even) {
        var key = even.keyCode;//得到键盘事件代码数字
        if (key != keyrecode) {
            $bird.removeClass().addClass("dir_" + key);//旋转小鸟图片使其对应按键
            keyrecode = key;
        }
        
        switch (key) {
            case 37://向左
                pos.left -= speed;
                if (pos.left <= - birdSize.width)//当小鸟向左飞出浏览器窗口
                {
                    pos.left = $(window).width();
                }
                break;
            case 38://向上
                pos.top -= speed;
                if (pos.top <= -birdSize.height)//当小鸟向上飞出浏览器窗口
                {
                   pos.top = $(window).height();
                   // pos.bottom = -birdSize.height;
                }
                break;
            case 39://向右
                
                pos.left += speed;
                if (pos.left >= $(window).width())//当小鸟向右飞出浏览器窗口
                {
                    pos.left = -birdSize.width;
                }
                break;
            case 40://向下
                pos.top += speed;
                if (pos.top >= $(window).height())//当小鸟向上飞出浏览器窗口
                {
                    pos.top = -birdSize.height;
                    // pos.bottom = -birdSize.height;
                }
                break;
        }
        $bird.offset(pos);
    });

});