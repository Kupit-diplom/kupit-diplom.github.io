function validateTelef(telef){var reg=/^[+]{0,1}[- (),0-9]{6,}$/;return reg.test(telef);}
$(window).ready(function(){$(".modalbox").fancybox({topRatio:.05,padding:10,title:null,closeBtn:false});$('#contact')[0].reset();$("#contact").submit(function(){return false;});$("#send").on("click",function(){var telefval=$("#telef").val();var telefvalid=validateTelef(telefval);if(telefvalid==true){$.ajax({type:'POST',url:'../img/sendmessage.php',data:$("#contact").serialize(),success:function(data){if(data=="true"){$('#contact')[0].reset();window.location.href='https://dipmsk.com/thank.html';}
else if(data=="false"){$('#contact')[0].reset();$.fancybox.close();$.fancybox("<strong >'Ваше сообщение не отправлено.'</strong>");setTimeout("$.fancybox.close()",2500);}},error:function(e){$('#contact')[0].reset();$.fancybox.close();$.fancybox("<strong >'Сообщение не отправлено. Ошибка сервера.'</strong>");setTimeout("$.fancybox.close()",2500);}});}});});function validateTelef(telef){var reg=/^[+]{0,1}[- (),0-9]{6,}$/;return reg.test(telef4);}
$(window).ready(function(){$(".modalbox1").fancybox({topRatio:.05,padding:10,title:null,closeBtn:false});$('#contact4')[0].reset();$("#contact4").submit(function(){return false;});$("#snd4").on("click",function(){var telval=$("#telef4").val();var telvalid=validateTelef(telval);if(telvalid==true){$.ajax({type:'POST',url:'../img/sendmessage11.php',data:$("#contact4").serialize(),success:function(data){if(data=="true"){$('#contact4')[0].reset();window.location.href='https://dipmsk.com/thank.html';}
else if(data=="false"){$('#contact4')[0].reset();$.fancybox.close();$.fancybox("<strong >'Ваше сообщение не отправлено.'</strong>");setTimeout("$.fancybox.close()",2500);}},error:function(e){$('#contact4')[0].reset();$.fancybox.close();$.fancybox("<strong >'Сообщение не отправлено. Ошибка сервера.'</strong>");setTimeout("$.fancybox.close()",2500);}});}});});function validateTelef(tel){var reg=/^[+]{0,1}[- (),0-9]{6,}$/;return reg.test(tel);}
$(window).ready(function(){$('#contact2')[0].reset();$("#contact2").submit(function(){return false;});$("#bt").on("click",function(){var telval=$("#tl").val();var telvalid=validateTelef(telval);if(telvalid==true){$.ajax({type:'POST',url:'../img/sendmessage1.php',data:$("#contact2").serialize(),success:function(data){if(data=="true"){$('#contact2')[0].reset();window.location.href='https://dipmsk.com/thank.html';}
else if(data=="false"){$('#contact2')[0].reset();$.fancybox("<strong >'Ваше сообщение не отправлено.'</strong>");setTimeout("$.fancybox.close()",2500);}},error:function(e){$('#contact2')[0].reset();$.fancybox("<strong >'Сообщение не отправлено.Ошибка сервера.'</strong>");setTimeout("$.fancybox.close()",2500);}});}});});$(window).ready(function(){$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>500){$("#back-top").fadeIn()}else{$("#back-top").fadeOut()}});$("#back-top a").click(function(){$("body,html").animate({scrollTop:0},100);return false})})
$(window).load(function(){jQuery(function($){$(".form-field").mask("+7 (999) 999-99-99");});$(window).scrollTop(0);var b_main=$('#main');var hml=$('#main').height();var hcl=$('#carousel').height();var hfl=$('#sidebar').height();var hol=$('#sidebar1').height();if(((hml)<(hfl+hol))&&($("html").width()>801)){b_main.height(hfl+hol);console.log(b_main.height());}else if(((hml)<(hfl+hol))&&($("html").width()>481)&&($("html").width()<801)){b_main.height(hfl+hol);}});$(window).load(function(){var b_main=$('#main');var b_main1=$('#main1');var hm=$('#main').height();var hc=$('#carousel').height();var hf=$('#sidebar').height();var ho=$('#sidebar1').height();var h_header=$('#head').height();var h_article=$('#article').height();var hm1=$('#main1').height();if(((hm1)<(hf+ho))&&($("html").width()>801)){b_main.height(hf+ho+20);}else if(((hm1)>(hf+ho))&&($("html").width()>801)){b_main.height(100+"%");}else if(((hm1)<(hf+ho))&&($("html").width()>481)&&($("html").width()<801)){b_main.height(hf+ho+20);}else if(((hm1)>(hf+ho))&&($("html").width()>481)&&($("html").width()<801)){b_main.height(100+"%");console.log(hm);console.log(hm1);}else if(($("html").width()<481)){b_main.height(100+"%");}});});$(window).load(function(){$(window).resize(function(){if($("html").width()<1024){$('.d').css('display','none');}else{$('.d').css('display','block');}});if($("html").width()<1024){$('.d').css('display','none');}else{$('.d').css('display','block');}
$("#fancybox1").click(function(){if($("html").width()<981){return false;}});$("#fancybox2").click(function(){if($("html").width()<981){return false;}});$("#fancybox3").click(function(){if($("html").width()<981){return false;}});$("#fancybox4").click(function(){if($("html").width()<981){return false;}});$("#fancybox5").click(function(){if($("html").width()<981){return false;}});$("#fancybox6").click(function(){if($("html").width()<981){return false;}});$("#fancybox7").click(function(){if($("html").width()<981){return false;}});$("#fancybox8").click(function(){if($("html").width()<981){return false;}});$("#fancybox9").click(function(){if($("html").width()<981){return false;}});$("#fancybox10").click(function(){if($("html").width()<981){return false;}});$("#fancybox11").click(function(){if($("html").width()<981){return false;}});$("#fancybox12").click(function(){if($("html").width()<981){return false;}});$("#fancybox13").click(function(){if($("html").width()<981){return false;}});$("#fancybox14").click(function(){if($("html").width()<981){return false;}});$("#fancybox15").click(function(){if($("html").width()<981){return false;}});$("#fancybox16").click(function(){if($("html").width()<981){return false;}});$("#fancybox17").click(function(){if($("html").width()<981){return false;}});$("#fancybox19").click(function(){if($("html").width()<981){return false;}});$("#fancybox18").click(function(){if($("html").width()<981){return false;}});$("#fancybox21").click(function(){if($("html").width()<981){return false;}});$("#fancybox20").click(function(){if($("html").width()<981){return false;}});});

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});$(window).ready(function(){$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>500){$("#back-top").fadeIn()}else{$("#back-top").fadeOut()}});$("#back-top a").click(function(){$("body,html").animate({scrollTop:0},100);return false})})});$(window).ready(function(){var changeClass=function(r,className1,className2){var regex=new RegExp("(?:^|\\s+)"+className1+"(?:\\s+|$)");if(regex.test(r.className)){r.className=r.className.replace(regex,' '+className2+' ');}
else{r.className=r.className.replace(new RegExp("(?:^|\\s+)"+className2+"(?:\\s+|$)"),' '+className1+' ');}
return r.className;};var menuElements=document.getElementById('menu');menuElements.insertAdjacentHTML('afterBegin','<button type="button" id="menutoggle" class="navtoogle" aria-hidden="true"><i aria-hidden="true" class="fa fa-bars"> </i> Меню</button>');document.getElementById('menutoggle').onclick=function(){changeClass(this,'navtoogle active','navtoogle');}
document.onclick=function(e){var mobileButton=document.getElementById('menutoggle'),buttonStyle=mobileButton.currentStyle?mobileButton.currentStyle.display:getComputedStyle(mobileButton,null).display;if(buttonStyle==='block'&&e.target!==mobileButton&&new RegExp(' '+'active'+' ').test(' '+mobileButton.className+' ')){changeClass(mobileButton,'navtoogle active','navtoogle');}}});


/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+
this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

$(function(){var seoContent={"de96dd3df7c0a4db1f8d5612546acdbb":"0JTQuNC/0LvQvtC80Ys=","54cdc704188eee4573d9e6cafe5f708a":"0JTQuNC/0LvQvtC8","eGhqamt4Y3Y=":"0JDRgtGC0LXRgdGC0LDRgg==","Z2poZ2w=":"0LLRg9C3","amxqaGtsamprbA==":"0LrQvtC70LvQtdC00LY=","Z2doZmdoYzM=":"0YLQtdGF0L3QuNC60YPQvA=="};var seoHrefs={"43b7c3097587757d49558bdff19a8fcb":"a3VwaXRfZGlwbG9tLmh0bWw=","ZGhndmRmZ3Ziamg=":"YXR0ZXN0YXQuaHRtbA==","Z2hqZ2g=":"ZGlwbG9tX3Z1emEuaHRtbA==","dWhnamhnamdo":"ZGlwbG9tX2tvbGxlZGcuaHRtbA==","aG5lNTd1dmM=":"ZGlwbG9tX3RlaG5pa3VtLmh0bWw=","eHZ5ZnhqaGJ3ZWd1ZW4=":"ZGlwbG9tX3pha2F6Lmh0bWw=","Z2h2ZmdkdHZnYg==":"ZGlwbG9tX3RzZW55Lmh0bWw=","Z2hmdmh2Yng=":"ZG9zdGF2a2EuaHRtbA==","YmdobmJ6eG5qa24=":"Y29udGFjdC5odG1s","a25jbmNsbmxubC9tbg==":"b3R6b3Z5Lmh0bWw=","ZGZzZmRmc2Rkc2Rm":"ZGlwbG9tX3Z1emEuaHRtbA==","Lm0sbSxraG5jZnRz":"ZGlwbG9tX3RlaG5pa3VtLmh0bWw=","ZGNmdGlrbGwudA==":"ZGlwbG9tX2tvbGxlZGcuaHRtbA==","ZmZkZmRmZGZkZnl5cjQ=":"ZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfcmVkLmh0bWw=","ZWRoamxjYmRm":"ZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfYmFrYWxhdnIuaHRtbA==","am1uZGFqa2hlZHV5N3EzODY3":"ZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfc3BlY2lhbGlzdC5odG1s","c2NyIGogams=":"ZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfbWFnaXN0ci5odG1s","MzY3OGdoZmhqM28=":"ZGlwbG9tX3VuaWV2ZXJzaXRldGEuaHRtbA==","OXVmeWV6WixbTw==":"ZGlwbG9tX2luc3RpdHV0YS5odG1s","WVVJWVVUN01JLE9b":"YXR0ZXN0YXQvYXR0ZXN0YXRfMTEuaHRtbA==","amhqamhoamhvaQ==":"YXR0ZXN0YXQvYXR0ZXN0YXRfOS5odG1s","MDl1ZnN4ZGRb":"c3ZpZGV0ZWxzdHZvL3N2aWRldGVsc3R2b19vaHJhbm5pa2EuaHRtbA==","aG5nZHN0ci0wb2poamJr":"dWRvc3RvdmVyZW5pZS91ZG9zdG92ZXJlbmllX2ludGVybmF0dXJhLmh0bWw=","ZmZ1eWZndWd1":"c3ZpZGV0ZWxzdHZvL3N2aWRldGVsZHR2b19wb3Zfa2xhbGl2aWthY2lpLmh0bWw=","NzY2cnJ0ZmpvbA==":"c3ZpZGV0ZWxzdHZvL3N2aWRldGVsZHR2b19wb3Zfa2xhbGl2aWthY2lpLmh0bWw=","ODl1N2ZkZmhqaHA7":"c3ZpZGV0ZWxzdHZvL3N2aWRldGVsZHR2b19wb3Zfa2xhbGl2aWthY2lpLmh0bWw=","dnRqLHVibHlraw==":"Li4va3VwaXRfZGlwbG9tLmh0bWw=","bGlsa3VqaXVuaWx1":"Li4vZGlwbG9tX3Z1emEuaHRtbA==","amtiamtnaGlo":"Li4vZGlwbG9tX3RlaG5pa3VtLmh0bWw=","aGdoc2RmaHNr":"Li4vZGlwbG9tX2tvbGxlZGcuaHRtbA==","ZGZ4ZHJ5a3VnaQ":"Li4vYXR0ZXN0YXQuaHRtbA==","aHZ5dHZibmp1aw==":"Li4vZGlwbG9tX3pha2F6Lmh0bWw=","bW51Z2J0cg==":"Li4vZGlwbG9tX3RzZW55Lmh0bWw=","ZnZ5cjY2Ym5pOHN2":"Li4vZG9zdGF2a2EuaHRtbA==","ZjVuaThzdg==":"Li4vY29udGFjdC5odG1s","ZnZkY2VyN2k4a2xq":"Li4vb3R6b3Z5Lmh0bWw=","ZDZyNmptOTA=":"Li4vZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfcmVkLmh0bWw=","dHZyNXVvdWJkdg==":"Li4vZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfYmFrYWxhdnIuaHRtbA==","ZnR5cnR5cjY3N2g3OA==":"Li4vZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfc3BlY2lhbGlzdC5odG1s","Ymhn+":"Li4vZGlwbG9tX3Z1emEvZGlwbG9tX3Z1emFfbWFnaXN0ci5odG1s","Z3R1eW5taQ==":"Li4vYXR0ZXN0YXQvYXR0ZXN0YXRfMTEuaHRtbA==","dXlia24=":"Li4vYXR0ZXN0YXQvYXR0ZXN0YXRfOS5odG1s","dnJ0eXZidXk=":"Li4vc3ZpZGV0ZWxzdHZvL3N2aWRldGVsc3R2b19vaHJhbm5pa2EuaHRtbA==","YmZieWZ1bmk=":"Li4vdWRvc3RvdmVyZW5pZS91ZG9zdG92ZXJlbmllX2ludGVybmF0dXJhLmh0bWw=","YnZidHl1aQ==":"Li4vdWRvc3RvdmVyZW5pZS91ZG9zdG92ZXJlbmllX29yZGluYXR1cmEuaHRtbA==","Z2hmaGZiZ2g=":"Li4vc2VydGl2aWthdC9zZXJ0aXZpa2F0X21lZC5odG1s","Y3ZmZ2Q1Njg=":"Li4vc3ZpZGV0ZWxzdHZvL3N2aWRldGVsZHR2b19wb3Zfa2xhbGl2aWthY2lpLmh0bWw=","ZnZmeTg3OA==":"Li4vZGlwbG9tX3VuaWV2ZXJzaXRldGEuaHRtbA==","Znl0cmZ5cjY1":"Li4vZGlwbG9tX2luc3RpdHV0YS5odG1s","gvfty":"ZGlwbG9tLXNzc3IuaHRtbA==","Z3ZmZGR0dHk=":"Li4vZGlwbG9tLXNzc3IuaHRtbA=="};var $elements=$("[data-key]");for(var i=0,count=$elements.length;i<count;i++){var $element=$elements.eq(i);var key=$element.data("key");switch($element.data("type")){case"href":$element.attr("href",Base64.decode(seoHrefs[key]));break;case"content":$element.replaceWith(Base64.decode(seoContent[key]));break;}}
$(document).trigger("renderpage.finish");});

$(document).ready(function() {
	$("head").append("<link rel='stylesheet' type='text/css' href='https://dipmsk.com/fancybox/jquery.fancybox.css' />");
})


