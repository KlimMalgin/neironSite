        
            
            function getStart(){
                
                var str = document.location.href;
                var p = str.indexOf('?');
                if (str.indexOf('?') + 1){
                    parts=String(document.location).split("?",2)[1].split("&");
                    GET={};
                    for (i=0; i<parts.length; i++) {
                       curr = parts[i].split('=');
                       GET[curr[0]] = curr[1];
                    }
                    return GET.slide;
                }
                else
                {
                    return 1;
                }
                
                return 1;

            }        
        
        $(function(){
            
            
            $('#slides').slides({
                preload: true,
                preloadImage: 'img/loading.gif',
                play: 5000,
                pause: 2500,
                hoverPause: true,
                start: getStart()
            });
            

            var _width = 0;
            $("ul.pagination li").each(
                function(){_width += 35;}
            );
            $("ul.pagination").css("width", _width);
            
        });
