        $(function(){
            $('#slides').slides({
                preload: true,
                preloadImage: 'img/loading.gif',
                play: 5000,
                pause: 2500,
                hoverPause: true
            });
            

            var _width = 0;
            $("ul.pagination li").each(
                function(){_width += 35;}
            );
            $("ul.pagination").css("width", _width);
            
        });
