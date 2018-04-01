/**
 * Created by Administrator on 2018/1/10.
 */
//导航栏跟随

/*$(".navbar>ul>li").click(function(){
    //$(this).addClass("current").siblings().removeClass("current");
    $(".navbar>ul>li").removeClass("current");
    $(this).addClass("current");
});*/

/*$(".navbar ul li a").on("click",function(){
    $(".navbar ul li a").removeClass("current");
    $(this).addClass("current");
})*/

 $(".navbar a").each(function(){  
        $this = $(this);  
        if($this[0].href==String(window.location)){  
            $this.addClass("current");  
        }  
    });  


//返回顶部
$(".toTop").click(function(){
    $("html,body").animate({scrollTop:0});
});




//轮播图
$(function(){
    var i=0;
    //---复制---//
    var clone= $(".banner .banner-img li").eq(0).clone();
    $(".banner .banner-img ").append(clone);

    //---定时器---//
    function move(){

        if(i==4){
            $(".banner .banner-img").css({left:0});
            i=1;
        }
        $(".banner .banner-img").animate({left:-1920*i},1000);

        if(i==3){
            $(".banner .banner-btn li").eq(0).addClass("focus").siblings().removeClass("focus");
        }else{
            $(".banner .banner-btn li").eq(i).addClass("focus").siblings().removeClass("focus");
        }
    }

    var t=setInterval(function(){
        i++;
        move();
    },2500);




    //---鼠标经过的效果---//
    $(".banner").hover(function(){
        clearInterval(t);

    },function(){

        t=setInterval(function(){
            i++;
            move();
        },2500);

    });
//---单击按钮---//
    $(".banner .banner-btn li").click(function(){
        var index=$(this).index();
        i=index;
        $(".banner .banner-img").animate({left:-1920*index});
        $(".banner .banner-btn li").eq(i).addClass("focus").siblings().removeClass("focus");

    });
//---鼠标经过时---//
    $(".banner").hover(function(){
        $(".banner .prev,.banner .next").fadeToggle();
    });
//---前进和后退---//
    $(".banner .prev").click(function(){
        i--;
        if(i<0){i=0};
        move();
    });
    $(".banner .next").click(function(){
        i++;

        move();
    });

});



//首页家装案例和工装案例tab切换
function change(tab,content){
var $tab =  $(tab);
$tab.find("li").eq(0).addClass("active");
$tab.find("li").on("click",function(){
var index = $(this).index();
$(this).addClass("active").siblings().removeClass("active");
$(content).children("div").eq(index).show().siblings().hide();
})
}
change(".tabs",".con");







