// 弹窗
function hint() {
    alert("暂无该功能!")
}
// 页面加载时
$(window).load(function() {
                // Slideshow 4
        $("#slider3").responsiveSlides({
            auto: true,
            pager:true,
            nav:false,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              $('.events').append("<li>after event fired.</li>");
            }
        });

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
        // 游戏资讯模块-轮播图
        $("#flexiselDemo4").flexisel({
            autoPlay:true,//自动播放
            visibleItems:1,//轮播初始可见数量
            animationSpeed:1000,//轮播速度
            autoPlaySpeed:2000,//自动播放速度
            responsiveBreakpoints:{
                portrait: {
                    changePoint:480,
                    visibleItems:1
                },
                landscape: {
                    changePoint:640,
                    visibleItems:1
                },
                tablet: {
                    changePoint:768,
                    visibleItems:1
                }
            }
        })
        
        
        // 游戏资讯模块-新闻标题悬停时触发
        $('#listGroup li').hover(function(){
            // console.log($(this).next().context.id);//li1
            var i = $(this).next().context.id
            var index = i.replace('li','')
            // console.log(index)

            // 通过上面index索引 对图片列表中的对应的图片 内容获取出来
            imageDiv = $('div.col-md-12.trailer-big-img  div').eq(index-1).next();
            imageDiv.find('img').addClass('block');
        },function(){
            imageDiv.find('img').removeClass('block');
        })

    })