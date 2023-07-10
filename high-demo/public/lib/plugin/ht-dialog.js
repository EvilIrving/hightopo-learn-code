!function(x,S){"use strict";function b(S){return A().createElement(S)}function g(){var S=b("div");return S.tabIndex=-1,S.style.outline="none",S}function V(){return b("canvas")}function o(S,h){E(S,"-webkit-transform",h),E(S,"-ms-transform",h),E(S,"transform",h)}function E(S,h,f){S.style.setProperty(h,f,_)}function v(S,h){S.appendChild(h)}function h(){return A().documentElement}function k(){return h().clientWidth}function i(){return h().clientHeight}function N(S){var h=S.touches[0];return h||S.changedTouches[0]}function q(S){this.$1d=S,this.addListeners()}var B=x.ht,s="px",p="left",M="top",t="bottom",n="right",G="innerHTML",O="className",I="width",R="height",r="position",Y="absolute",J="0",m="opacity",d="background",e=B.Default,W=e.getInternal(),f=B.Color,K=e.animate,a=e.isTouchable,Q=e.isTouchEvent,_=null,c=(Math.sqrt,x.parseInt),z=x.setTimeout,X=(Math.round,f.titleIconBackground),A=function(){return document},P=W.addEventListener,j=W.removeEventListener;W.addMethod(e,{dialogCloseIcon:{width:100,height:100,comps:[{type:"shape",points:[10,10,90,90],segments:[1,2],borderWidth:8,borderColor:X},{type:"shape",points:[90,10,10,90],segments:[1,2],borderWidth:8,borderColor:X}]},dialogMaximizeIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,15,80,75],borderWidth:6,borderColor:X},{type:"rect",rect:[10,10,80,20],background:X}]},dialogRestoreIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,34,56,56],borderWidth:8,borderColor:X},{type:"rect",rect:[10,34,56,14],background:X},{type:"rect",rect:[34,10,56,14],background:X},{type:"rect",rect:[82,10,8,56],background:X},{type:"rect",rect:[66,62,24,8],background:X}]},dialogTitleLabelColor:e.labelSelectColor,dialogTitleLabelFont:(a?"18":"14")+"px arial, sans-serif",dialogContentLabelFont:e.labelFont,dialogTitleBackground:f.titleBackground,dialogHeaderBackground:f.headerBackground,dialogButtonBackground:"#1ABC9C",dialogButtonSelectBackground:"#16A085",dialogButtonLabelColor:"#fff"},!0);e.def(q,S,{ms_listener:1,getView:function(){return this.$1d.getView()},clear:function(){delete this.$2d,delete this.$3d,delete this.$4d,delete this.$5d},handle_touchstart:function(S){var h=this,f=h.$1d,V=f.$6d,q=f._config,f=f.$7d,W=S,x=S.target;f.contains(x)||e.preventDefault(S),e.isLeftButton(S)&&(Q(S)&&(W=N(S)),W=h.$8d={x:W.pageX,y:W.pageY},h.$9d={x:W.x,y:W.y},!q.maximized&&q.draggable&&V.contains(x)&&(h.$4d=!0,e.startDragging(h,S)),h.handle_mousemove(S)&&(h.$2d=!0,e.startDragging(h,S)),f.contains(x)||x.focus())},handle_mousedown:function(S){this.handle_touchstart(S)},handle_touchend:function(S){if(e.isLeftButton(S)&&!this.$5d&&!this.$3d){var h=this.$1d,f=S.target,V=h._config,q=h.$18d,W=h.$16d;for(V.closable&&q.contains(f)&&h.hide(),V.maximizable&&W.contains(f)&&(V.maximized?h.restore():h.maximize());f&&(f.className||"").indexOf("dialog-button")<0;)f=f.parentNode;f&&f.buttonItem&&h.action&&h.action(f.buttonItem,S),delete this.$8d,delete this.$9d}},handle_mouseup:function(S){this.handle_touchend(S)},handleWindowTouchEnd:function(S){var h=this,f=h.$1d,V=f.$10d;h.$2d&&h.$3d?V.fire({kind:"endResize",target:f,originEvent:S}):h.$4d&&h.$5d&&V.fire({kind:"endMove",target:f,originEvent:S}),this.clear()},handleWindowMouseUp:function(S){this.handleWindowTouchEnd(S)},handle_mousemove:function(S){var h,f,V=this.$1d._config;return!V.maximized&&(("w"===V.resizeMode||"h"===V.resizeMode||"wh"===V.resizeMode)&&(h={x:(h=(V=this.getView()).querySelector(".resize-area").getBoundingClientRect()).left,y:h.top,width:h.width,height:h.height},f=(S=Q(S)?N(S):S).clientX,S=S.clientY,e.containsPoint(h,{x:f,y:S})?(E(V,"cursor","nwse-resize"),!0):void E(V,"cursor","")))},handleWindowTouchMove:function(S){S.preventDefault();var h,f,V,q,W,x,b,o,R,g,v=S,B=(Q(S)&&(v=N(S)),this),t=B.$8d,n=B.$9d;n.x==t.x&&n.y==t.y&&e.getDistance(n,{x:v.pageX,y:v.pageY})<=1||(h=(n=B.$1d)._config,f=n.$21d,g=h.resizeMode||"wh",o=v.pageX-t.x,v=v.pageY-t.y,B.$2d?(V=(q=f.offsetWidth)+o,W=(x=f.offsetHeight)+v,V=Math.max(V,50),W=Math.max(W,50),"center"!==h.position&&h.position!=_||(R={},b=f.getBoundingClientRect(),R.x=b.left,R.y=b.top,h.position=R),"w"===g?(n.setSize(V,x),t.x+=V-q):"h"===g?(n.setSize(q,W),t.y+=W-x):"wh"===g&&(n.setSize(V,W),t.x+=V-q,t.y+=W-x),B.$3d?n.$10d.fire({kind:"betweenResize",target:n,originEvent:S}):(B.$3d=!0,n.$10d.fire({kind:"beginResize",target:n,originEvent:S}))):B.$4d&&(R=(b=f.getBoundingClientRect()).width,g=b.height,V=k(),q=i(),W=c(f.style.left)||0,x=c(f.style.top)||0,(v=n.adjustPosition({x:b=W+o,y:o=x+v},{width:R,height:g},{width:V,height:q}))&&(b=v.x,o=v.y),R=b-W,g=o-x,E(f,p,b+s),E(f,M,o+s),t.x+=R,t.y+=g,h.position={x:b,y:o},B.$5d?n.$10d.fire({kind:"betweenMove",target:n,originEvent:S}):(B.$5d=!0,n.$10d.fire({kind:"beginMove",target:n,originEvent:S}))))},handleWindowMouseMove:function(S){this.handleWindowTouchMove(S)},handleWindowResize:function(){var S=this,h=S._config,f=S.$21d,V=k(),q=i(),W=h.width,x=h.height,b=h.position||"center";h.maximized?(E(f,I,V+s),E(f,R,q+s),E(f,M,J),E(f,p,J)):(E(f,I,W+s),E(f,R,x+s),"center"===b?(E(f,p,(V-W)/2+s),E(f,M,(q-x)/2+s)):(E(f,p,b.x+s),E(f,M,b.y+s))),S.iv()},handle_mousewheel:function(S){S.stopPropagation()},handle_DOMMouseScroll:function(S){S.stopPropagation()}}),B.widget.Dialog=function(S){var h=this,f=h._view=W.createView(null,h),f=(f[O]="ht-widget-dialog",E(f,r,Y),E(f,M,J),E(f,t,J),E(f,p,J),E(f,n,J),E(f,I,"auto"),E(f,R,"auto"),e.baseZIndex!=_&&E(f,"z-index",e.baseZIndex+""),h.$11d=new q(h));h.bindingHandleWindowResize=f.handleWindowResize.bind(h),h.$10d=new B.Notifier,S&&h.setConfig(S)},X="Dialog",f={ms_v:1,ms_fire:1,_modal:!0,setTitle:function(S){this._config.title=S,this.getView().querySelector(".dialog-container-title span").innerHTML=S},clearNodes:function(S){if(S)for(;S.firstChild;)S.removeChild(S.firstChild)},$31d:function(){var S,h=this,f=h.$6d=g(),V=h._config,q=h.$12d=h.$13d(),W=(f[O]="dialog-container-title",E(f,"cursor","default"),E(f,"white-space","nowrap"),E(f,"overflow","hidden"),E(f,"font",e.dialogTitleLabelFont),E(f,d,V.titleBackground||e.dialogTitleBackground),E(f,"color",V.titleColor||e.dialogTitleLabelColor),b("span")),x=h.$25d();return V.titleAlign&&E(f,"text-align",V.titleAlign),V.titleIcon&&(S=h.$14d=h.$15d(),v(f,S)),V.title&&V.title.trim&&(V.title=V.title.trim()),W[G]=V.title||"&nbsp;",v(f,W),V.maximizable&&(S=h.$16d=h.$17d(),v(q,S)),V.closable&&(W=h.$18d=h.$19d(),v(q,W)),v(f,q),E(f,"display","block"),E(f,"line-height",x+s),f},$13d:function(){var S=g();return E(S,r,Y),E(S,p,J),E(S,n,5+s),E(S,M,J),E(S,t,J),E(S,"text-align",n),E(S,"white-space","nowrap"),S[O]="dialog-title-controls",S},$20d:function(){var S=this.$21d=g(),h=this._config,f=h.borderWidth;return E(S,r,"fixed"),E(S,"box-shadow","rgba(0, 0, 0, 0.2) 0px 5px 10px 0px"),E(S,"padding","0 "+f+s+" "+f+s+" "+f+s),E(S,"box-sizing","border-box"),E(S,"-moz-box-sizing","border-box"),S[O]="dialog-container",E(S,d,h.titleBackground||e.dialogTitleBackground),S},$22d:function(){var S,h=this._config,f=this.$7d=g(),V=h.content,q=0,W=h.contentPadding||0,x=(h.buttons!=_&&0<h.buttons.length&&(q=32),"string"==typeof(x=V)||x instanceof String?f[G]=V:V.getView?(S=V.getView(),v(f,S)):v(f,S=V),E(f,r,Y),E(f,"font",e.dialogContentLabelFont),h.width&&E(f,I,h.width-10-2*W+s),B.Default.appendToScreen(f),f.offsetWidth+1),V=f.offsetHeight,b=this.$25d();return h.width==_?h.width=x+10+2*W:E(f,I,"auto"),h.height==_&&(h.height=V+b+q+5+2*W),B.Default.removeHTML(f),S&&(E(S,"box-sizing","border-box"),E(S,"-moz-box-sizing","border-box"),E(S,I,"100%"),E(S,R,"100%")),f[O]="dialog-content",E(f,M,b+W+s),E(f,t,q+W+s),E(f,p,W+s),E(f,n,W+s),E(f,"overflow","hidden"),f},getOverlayDiv:function(){return this.$41d},$23d:function(){if(this.$41d)return this.$41d;var S=this.$41d=g();return S[O]="dialog-overlay",E(S,r,Y),E(S,M,J),E(S,t,J),E(S,p,J),E(S,n,J),E(S,d,"rgba(235, 235, 235, 0.7)"),S},_config:_,setSize:function(S,h){var f=this._config;f&&(f.width=S,f.height=h,this.isShowing()&&(this.bindingHandleWindowResize(),this.iv()))},getConfig:function(){return this._config},$24d:function(){var S=this._config.titleIconSize||16;return a&&(S*=1.2),S},$25d:function(){return this._config.titleHeight||e.widgetTitleHeight},$26d:function(S){var h=this._config;E(S,"margin-right",(h.titleIconGap||(a?8:4))+s),E(S,"cursor","pointer"),E(S,"display","inline-block"),E(S,"vertical-align",M)},$27d:function(){var S=this.$30d=g(),h=a?20:10;return E(S,I,h+s),E(S,R,h+s),E(S,r,Y),E(S,t,J),E(S,n,J),S[O]="resize-area",S},$15d:function(){var S=V(),h=(S[O]="dialog-title-control dialog-title-control-icon",this.$25d()),f=this.$24d();return this.$26d(S),W.setCanvas(S,f,h),S},$17d:function(){var S=V(),h=(S[O]="dialog-title-control dialog-title-control-maximize",this.$25d()),f=this.$24d();return this.$26d(S),W.setCanvas(S,f,h),S},$19d:function(){var S=V(),h=(S[O]="dialog-title-control dialog-title-control-close",this.$25d()),f=this.$24d();return this.$26d(S),W.setCanvas(S,f,h),S},$28d:function(){var S=g();return E(S,d,e.dialogContentBackground||"white"),E(S,I,"100%"),E(S,R,"100%"),E(S,r,"relative"),S},$29d:function(){var x=this,b=g(),S=(E(b,"line-height",32+s),E(b,"font-size",0+s),E(b,r,Y),E(b,t,J),E(b,p,J),E(b,"white-space","nowrap"),E(b,"overflow","hidden"),E(b,n,J),E(b,d,e.dialogHeaderBackground),b[O]="dialog-container-buttons",this._config),o=S.buttonsAlign||n,R=0;return E(b,"text-align",o),x.$42d=[],S.buttons.forEach(function(h){var S,f={};for(S in h)f[S]=h[S];h.background||(f.background=e.dialogButtonBackground),h.selectBackground||(f.selectBackground=e.dialogButtonSelectBackground),h.labelColor||(f.labelColor=e.dialogButtonLabelColor);var V=e.createObject(B.widget.Button,f),q=V.getView(),W=(q[O]="dialog-button "+h.className,q.buttonItem=h,x.$42d.push(V),E(q,r,"relative"),E(q,"display","inline-block"),E(q,"text-align",p),E(q,"height",24+s),a?10:5),W=(o===p||o===n?E(q,"margin-"+o,W+s):0!==R&&E(q,"margin-"+p,W+s),E(q,"vertical-align","middle"),e.getTextSize(V.getLabelFont(),h.label).width+10);V.onClicked=function(S){h.action&&h.action.call(x,h,S)},E(q,I,W+s),v(b,V.getView()),R++}),b},setConfig:function(S){var h,f,V,q,W,x,b,o;S&&(f=(h=this)._view,h._config=S,h.action=S.action,h.clearNodes(f),S.borderWidth==_&&(S.borderWidth=5),o=h.$23d(),V=h.$28d(),q=h.$31d(),W=h.$22d(),x=h.$20d(),b=h.$30d=h.$27d(),v(f,o),v(f,x),v(x,V),v(V,q),v(V,W),S.buttons!=_&&0<S.buttons.length&&(o=h.$29d(),v(V,o)),v(x,b),S.maximized?(S.maximized=!1,h.bindingHandleWindowResize(),h.maximize(!0)):h.bindingHandleWindowResize(),h.isShowing()&&h.iv())},hide:function(){var S=this,h=S.$21d,f=S.$41d,V=S._view;V[O]="ht-widget-dialog",K(h).duration(200).scale(.7).set(m,J).end(function(){S.onHidden&&S.onHidden(),B.Default.removeHTML(V),S.$10d.fire({kind:"hide",target:S})}),K(f).duration(200).set(m,J).end(),j(x,"resize",S.bindingHandleWindowResize)},isShowing:function(){return!!this._view.parentNode},setModal:function(S){this._modal=S;this.$23d().style.display=S?"block":"none";var h=this._view;E(h,I,S?"auto":J),E(h,R,S?"auto":J)},isModal:function(){return this._modal},$32d:function(){var S=this,h=S._config,f=S.$21d;o(f,""),S.iv(),h.maximized?S.$10d.fire({kind:"maximize",target:S}):S.$10d.fire({kind:"restore",target:S})},maximize:function(S){var h,f,V,q=this,W=q.$21d,x=q._config;x.maximized||(x.maximized=!0,q.$33d(),q.$16d[O]="dialog-title-control dialog-title-control-minimize",f=x.width,x=x.height,V=c(W.style.left)||0,h=c(W.style.top)||0,q.$36d=f,q.$37d=x,q.$34d=V,q.$35d=h,f=S?0:200,V=(x=this._view.parentNode)&&x!==document.body?this._view.parentNode.getBoundingClientRect():e.getWindowInfo(),K(W).duration(f).set(p,V.left+s).set(M,V.top+s).set(I,V.width+s).set(R,V.height+s).end(function(){q.$32d()}))},restore:function(){var S=this,h=S.$34d,f=S.$35d,V=S.$36d,q=S.$37d,W=S._config;W.maximized&&(W.maximized=!1,S.$33d(),S.$16d[O]="dialog-title-control dialog-title-control-maximize",S.isShowing()&&h!=_&&f!=_&&V!=_&&q!=_&&(W=S.$21d,K(W).duration(200).set(p,h+s).set(M,f+s).set(I,V+s).set(R,q+s).end(function(){S.$32d()}))),delete S.$34d,delete S.$35d,delete S.$36d,delete S.$37d},show:function(S){var h=this,f=h._view,V=h._config,q=h.$21d,W=h.$41d;S=S||V.parentDOM,V&&V.zIndex!=_&&E(f,"z-index",V.zIndex+""),S?B.Default.appendChild(S,f):B.Default.appendToScreen(f),o(q,"scale(0.7)"),E(q,m,J),h.iv(),h.validate(),h._view[O]+=" dialog-show",z(function(){K(q).duration(200).scale(1).set(m,"1").end(function(){E(q,I,q.clientWidth+s),E(q,R,q.clientHeight+s),h.onShown&&h.onShown(),h.$10d.fire({kind:"show",target:h});var S=V&&V.content;S&&S.iv&&S.iv()}),K(W).duration(200).set(m,"1").end(),P(x,"resize",h.bindingHandleWindowResize)},30)},setPosition:function(S){var h=this.$21d;h.style.left=S.x+"px",h.style.top=S.y+"px"},addEventListener:function(S,h,f){this.$10d.add(S,h,f)},removeEventListener:function(S,h){this.$10d.remove(S,h)},$38d:function(S,h,f,V){S=W.initContext(S),W.translateAndScale(S,0,0,1),S.clearRect(0,0,f,f),f=(f-V)/2;e.drawStretchImage(S,e.getImage(h),"fill",0,f,V,V),S.restore()},$33d:function(){var S,h,f=this,V=f._config,q=f.$16d,V=V.maximized?e.dialogRestoreIcon:e.dialogMaximizeIcon;q&&V&&(S=f.$25d(),h=f.$24d(),f.$38d(q,e.getImage(V),S,h))},$39d:function(){var S,h,f=this,V=f._config,q=f.$14d,V=V.titleIcon;q&&V&&(S=f.$25d(),h=f.$24d(),f.$38d(q,e.getImage(V),S,h))},$40d:function(){var S,h,f=this.$18d,V=e.dialogCloseIcon;f&&V&&(S=this.$25d(),h=this.$24d(),this.$38d(f,e.getImage(V),S,h))},invalidate:function(S){var h=this,f=h.$42d,S=(h._68I||(h._68I=1,e.callLater(h.validate,h,_,S),h.onInvalidated&&h.onInvalidated(),h.fireViewEvent("invalidate")),h._config.content);S.invalidate&&S.invalidate(),f&&f.forEach(function(S){S.iv()})},validateImpl:function(){var S=this,h=(S.$40d(),S.$33d(),S.$39d(),S._config.content);h.initView&&(h.setX(0),h.setY(0),h.setWidth(S.$7d.clientWidth),h.setHeight(S.$7d.clientHeight))},adjustPosition:function(S,h,f){var V=h.width,h=h.height,q=f.width,f=f.height,W=S.x,S=S.y,x=this._config,b=x.minDragSize||20;return"inside"===x.dragMode?((W=q<W+V?q-V:W)<0&&(W=0),(S=f<S+h?f-h:S)<0&&(S=0)):null!=x.dragMode&&"none"!==x.dragMode||(q-b<(W=W<-V+b?-V+b:W)&&(W=q-b),(S=f-b<S?f-b:S)<0&&(S=0)),{x:W,y:S}}},e.def(B.widget[X],S,f)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);