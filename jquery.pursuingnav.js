!function($){$.fn.pursuingnav=function(){var delta,element,height,is_fixed,is_pursuing,offsetLeft,offsetTop,presc,stick,userAgent,width;return userAgent=navigator.userAgent,is_pursuing=!0,is_fixed=!1,/android|iphone|ipad/i.test(userAgent)&&(is_pursuing=!1,is_fixed=!0),element=this,height=element.outerHeight(),width=element.outerWidth(),offsetTop=element.offset().top,offsetLeft=element.offset().left,stick=height+offsetTop,presc=0,delta=0,is_pursuing?(element.css({position:"absolute",top:offsetTop,width:width}),$(window).on("scroll",function(){var sc;return sc=$(document).scrollTop(),height=element.outerHeight(),width=element.outerWidth(),offsetTop=element.offset().top,offsetLeft=element.offset().left,stick=height+offsetTop,sc>0&&(delta=sc>presc?-1:presc>sc?1:0),0>delta?sc===element.offset().top?element.css({position:"absolute",top:sc}):sc>stick&&element.css({position:"absolute",top:sc-height}):delta>0&&(stick=height+element.offset().top,sc<=element.offset().top&&element.css({position:"fixed",top:0})),presc=sc})):is_fixed?element.css({position:"fixed",top:offsetTop}):void 0}}(jQuery);