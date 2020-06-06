// 弹窗
function hint() {
    alert("暂无该功能!")
}
// 页面加载时
$(window).load(function() {

        // 热门游戏模块-轮播图（轮播图Jquery插件flexisel.js）
        $("#flexiselDemo3").flexisel({
            visibleItems:3,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,    		
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: { 
                portrait: { 
                    changePoint:480,
                    visibleItems:3
                }, 
                landscape: { 
                    changePoint:640,
                    visibleItems:3
                },
                tablet: { 
                    changePoint:768,
                    visibleItems:3
                }
            }
        });

    })