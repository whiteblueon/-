// require.config({
//     paths: {
//         // the left side is the module ID,
//         // the right side is the path to
//         // the jQuery file, relative to baseUrl.
//         // Also, the path should NOT include
//         // the '.js' file extension. This example
//         // is using jQuery 1.9.0 located at
//         // js/lib/jquery-1.9.0.js, relative to
//         // the HTML page.
//         jquery: '../jquery-1.12.4'
//     }
// });
define(['jquery-1.12.4'],function() {
    var dialog = {
        open : function(arg){
            defaultArg={
                width:300,
                height:300
            };
            var html='<div class="dialog-mask ">'
                +'<div class="dialog-content">'
                    +'<div class="dialog-title">'
                        +'<span class="dialog-txt">登录</span>'
                        +'<span class="dialog-close">X</span>'
                    +'</div>'
                    +'<div class="dialog-body">'+'刘宇阳是'+'<h3>铁</h3>'+'Gay'
                    +'</div>'
                +'</div>'
            +'</div>';


            var options = $.extend(defaultArg,arg);
            $('body').append(html)
            $('.dialog-content').css({
                width: options.width,
                height: options.height
            });
            $('.dialog-txt').html(options.title);
            $('.dialog-body').load(options.content);
            $('.dialog-close').on('click',function(){
                $('.dialog-mask').remove();
                console.log(666)
            })
        },
        close:function(){
            // $('.dialog-mask').remove();
        }



    };
    return dialog;
});