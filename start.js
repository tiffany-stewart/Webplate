function loadJSON(a,b){var c=new XMLHttpRequest;c.onreadystatechange=b,c.open("GET",a,!0),c.send()}function loadProjectFiles(a,b){for($i=0;$i<a.length;$i++){var c=a[$i],d=c.trim(),e=web.getExtension(d);"css"==e&&$arExtraCSS.push($cssProjectPath+d)}for($i=0;$i<b.length;$i++){var c=b[$i],d=c.trim(),e=web.getExtension(d);"js"==e&&$arExtraJS.push($jsProjectPath+d)}$arExtraCSS.length>0?yepnope({load:$arExtraCSS,complete:function(){setTimeout(function(){yepnope({load:$arExtraJS}),setTimeout(function(){$bodyElement.removeAttribute("style")},50)},50)}}):$arExtraJS.length>0?setTimeout(function(){yepnope({load:$arExtraJS}),setTimeout(function(){$bodyElement.removeAttribute("style")},50)},50):setTimeout(function(){$bodyElement.removeAttribute("style")},50)}!function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document);var $crtScript=document.getElementById("webplate"),$bodyElement=document.getElementsByTagName("body")[0],$htmlElement=document.getElementsByTagName("html")[0],$crtScriptSrc=$crtScript.getAttribute("src").replace("start.js",""),$root=$crtScriptSrc,$configFile=$root+"project/config.json",$jsPath=$root+"engine/js/",$cssPath=$root+"engine/css/",$componentPath=$root+"project/component/",$componentJSON=[],$iconFontPath=$root+"project/icon-font/",$jsProjectPath=$root+"project/js/",$cssProjectPath=$root+"project/css/",$uiProjectPath=$root+"project/ui/",$arEngineFiles=[$jsPath+"min/script.min.js",$cssPath+"style.css"],$arComponentFiles=[],$arExtraCSS=[],$arExtraJS=[];yepnope([{load:$arEngineFiles,complete:function(){Modernizr.touch&&yepnope({load:$jsPath+"min/touch.min.js",complete:function(){FastClick.attach(document.body)}}),web.idAdd($htmlElement,"web-html");var a=document.createElement("div");web.idAdd(a,"web-overlay"),$bodyElement.appendChild(a),web.navigation(),web.windowType(),web.scroll(),$configJSON=loadJSON($configFile,function(){if(4==this.readyState&&200==this.status){var a=JSON.parse(this.responseText);if($urlData=web.getUrl(),$state=a.project.state||"production",$bodyClass=a.project["body-class"]||!1,$component=a.project.component||[],$formColour=a.project["form-colour"]||"blue",$iconFont=a.project["icon-font"]||!1,$navigation=a.project.navigation||!1,$projectCSS=a.project.css||[],$projectJS=a.project.js||[],$ui=a.project.ui||!1,$urlSite=$urlData.sitePath,$urlCheck=!1,$urlPageCheck=!1,""==$root||"../"==$root.substr(0,3)){for($exRoot=$root.split("/"),$exUrl=$urlSite.split("/"),$urlBase="",b=0;b<$exRoot.length;b++)$exUrl.pop();for(b=0;b<$exUrl.length;b++)$urlBase+=$exUrl[b]+"/"}else $urlBase=$root;$urlSegments=[],$exSegments=$urlSite.replace($urlBase,"").split("/");for(var b=0;b<$exSegments.length;b++){var c=$exSegments[b];web.exists(c)&&""!==c&&$urlSegments.push(c)}if(a.project.page)for(var b=0;b<a.project.page.length;b++){$page=a.project.page[b],$urlPageSegments=[],$exPageSegments=$page.url.split("/"),$pageMatch=!0;for(var b=0;b<$exPageSegments.length;b++){var c=$exPageSegments[b];web.exists(c)&&""!==c&&$urlPageSegments.push(c)}if($urlPageSegmentsLength=-1===$page.url.indexOf("*")?$urlPageSegments.length:$urlPageSegments.length-1,$urlSegments.length>=$urlPageSegmentsLength)for(var b=0;b<$urlSegments.length;b++){var c=$urlSegments[b];if("*"===$urlPageSegments[b])return!1;c!=$urlPageSegments[b]&&($pageMatch=!1)}else $pageMatch=!1;if($pageMatch===!0){if($configType=$page["config-type"]||"merge","new"==$configType)$bodyClass=$page["body-class"]||!1,$component=$page.component||[],$formColour=$page["form-colour"]||"blue",$iconFont=$page["icon-font"]||!1,$navivation=$page.navigation||!1,$projectCSS=$page.css||[],$projectJS=$page.js||[],$ui=$page.ui||!1;else{if($bodyClass=$page["body-class"]?$page["body-class"]:$bodyClass,$formColour=$page["form-colour"]?$page["form-colour"]:$formColour,$iconFont=$page["form-colour"]?$page["icon-font"]:$iconFont,$navivation=$page.navigation?$page.navigation:$navigation,$ui=$page.ui?$page.ui:$ui,$page.component)for(var b=0;b<$page.component.length;b++){var d=$page.component[b];-1==$component.indexOf(d)&&$component.push(d)}if($page.css)for(var b=0;b<$page.css.length;b++){var e=$page.css[b];-1===$projectCSS.indexOf(e)&&$projectCSS.push(e)}if($page.js)for(var b=0;b<$page.js.length;b++){var f=$page.js[b];-1===$projectJS.indexOf(f)&&$projectJS.push(f)}}break}}if($bodyClass!==!1&&web.classAdd($bodyElement,$bodyClass.trim()),$navigation=$navigation===!1?"web-nav-slide-from-left":"web-nav-"+$navigation,web.classAdd($htmlElement,$navigation),$bodyElement.setAttribute("data-formplate-colour",$formColour),0!=$iconFont&&("icomoon"==$iconFont?yepnope({load:[$iconFontPath+"icomoon/style.css"]}):"font-awesome"==$iconFont&&yepnope({load:[$iconFontPath+"font-awesome/css/font-awesome.min.css"]})),0!=$ui&&($arExtraCSS.push($uiProjectPath+$ui+"/style.css"),$arExtraJS.push($uiProjectPath+$ui+"/script.min.js")),$componentLength=$component.length,$componentLength>0)for(b=0;b<$componentLength;b++)!function(a){var c=$component[a++];$componentJSON=loadJSON($componentPath+c+"/.bower.json",function(){if(4==this.readyState&&200==this.status){var d=JSON.parse(this.responseText);if("object"==typeof d.main)for(b=0;b<d.main.length;b++)$arComponentFiles.push($componentPath+c+"/"+d.main[b]);else $arComponentFiles.push($componentPath+c+"/"+d.main);a==$componentLength&&yepnope({load:$arComponentFiles,complete:function(){loadProjectFiles($projectCSS,$projectJS)}})}})}(b);else loadProjectFiles($projectCSS,$projectJS)}})}}]);