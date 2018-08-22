define(['jquery-1.12.4'],function() {
    var dialog = {
        open : function(arg){
            defaultArg={
                width:300,
                height:300
            };
            _this=this
            var options = $.extend(defaultArg,arg);
            this.$mask=$('<div class="dialog-mask"></div>');
            this.$content=$('<div class="dialog-content"></div>').css({
                width: options.width,
                height: options.height
            });
            this.$title=$('<div class="dialog-title"><</div>');
            this.$txt=$('<div class="dialog-txt">登录</div>').html(options.title);
            _this.$close=$('<div class="dialog-close">X</div>').on('click',function(){
                $('.dialog-mask').remove();
            });
            this.$body=$('<div class="dialog-body">666</div>').load(options.content);

            $mask.append($content);
            $content.append($title).append($body);
            $title.append($txt).append($close);
            $('body').append($mask);


            
        },
        close:function(){
            // $('.dialog-mask').remove();
        }



    };
    return dialog;
});
