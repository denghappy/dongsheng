/**
 * Created by Administrator on 2018/1/10.
 */
//导航栏跟随

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
/*$(function(){
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

});*/

$(document).ready(function () {
                $(".main_visual").hover(function(){
                    $("#btn_prev,#btn_next").fadeIn()
                    },function(){
                    $("#btn_prev,#btn_next").fadeOut()
                    })
                $dragBln = false;
                $(".main_image").touchSlider({
                    flexible : true,
                    speed : 500,
                    btn_prev : $("#btn_prev"),
                    btn_next : $("#btn_next"),
                    paging : $(".flicking_con a"),
                    counter : function (e) {
                        $(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
                    }
                });
                $(".main_image").bind("mousedown", function() {
                    $dragBln = false;
                })
                $(".main_image").bind("dragstart", function() {
                    $dragBln = true;
                })
                $(".main_image a").click(function() {
                    if($dragBln) {
                        return false;
                    }
                })
                timer = setInterval(function() { $("#btn_next").click();}, 5000);
                $(".main_visual").hover(function() {
                    clearInterval(timer);
                }, function() {
                    timer = setInterval(function() { $("#btn_next").click();}, 5000);
                })
                $(".main_image").bind("touchstart", function() {
                    clearInterval(timer);
                }).bind("touchend", function() {
                    timer = setInterval(function() { $("#btn_next").click();}, 5000);
                })
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







