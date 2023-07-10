!function(l,X,V){"use strict";function Q(l){return b().createElement(l)}function v(){return Q("div")}function I(){return Q("canvas")}function Y(l,X,E){l.style.setProperty(X,E,K)}function y(l,X){return l.style.getPropertyValue(X)}function n(l,X){l.appendChild(X)}function W(l){var X=l.scrollWidth,E=l.scrollHeight;return l===b().body&&(X=Math.max(X,b().documentElement.scrollWidth),E=Math.max(E,b().documentElement.scrollHeight)),{width:X,height:E}}function t(l){var X=l.touches[0];return X||l.changedTouches[0]}var j=l.ht,d=j.Default,s=d.isTouchable,C=d.isTouchEvent,E=j.Color,f="px",a="0",z="innerHTML",w="className",F="position",D="absolute",A="width",J="height",_="left",q="top",h="right",o="bottom",e="max-width",m="max-height",K=null,N="none",c="",P=l.parseInt,R=l.setTimeout,G=d.getInternal(),S=d.animate,l=E.titleIconBackground,b=function(){return document},T=G.addEventListener,l=(G.removeEventListener,G.addMethod(d,{panelExpandIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:l,rotation:3.14}]},panelCollapseIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:l}]},panelLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:l},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,44],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:l}]},panelUnLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:l},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,26],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:l}]},panelMinimizeIcon:{width:100,height:100,comps:[{type:"shape",points:[10,35,35,35,35,10],segments:[1,2,2],borderWidth:8,borderColor:l},{type:"shape",points:[90,35,65,35,65,10],segments:[1,2,2],borderWidth:8,borderColor:l},{type:"shape",points:[10,65,35,65,35,90],segments:[1,2,2],borderWidth:8,borderColor:l},{type:"shape",points:[65,90,65,65,90,65],segments:[1,2,2],borderWidth:8,borderColor:l}]},panelRestoreIcon:{width:300,height:300,comps:[{type:"rect",rect:[10,24,268,56],background:l},{type:"rect",rect:[10,118,268,56],background:l},{type:"rect",rect:[10,213,268,56],background:l}]},panelTitleLabelColor:d.labelSelectColor,panelTitleLabelFont:d.labelFont,panelContentLabelFont:d.labelFont,panelTitleBackground:E.titleBackground,panelSeparatorWidth:1,panelSeparatorColor:V},!0),j.widget.Panel=function(l){var s=this,X=s._view=G.createView(null,s);s.$1i=0,s.$18i=new j.Notifier,s.$2i="leftTop",Y(X,q,a),Y(X,_,a),Y(X,F,D),Y(X,"overflow","hidden"),s._interactor=new g(s),s.setConfig(l),s.addEventListener(function(l){var X=s.getPanelConfig(l.id),E=X.content;"beginRestore"!==l.kind&&"betweenResize"!==l.kind&&"endToggle"!==l.kind||(E&&E.invalidate&&E.invalidate(),X.items&&X.items.forEach(function(l){l&&l.content&&l.content.invalidate&&l.content.invalidate()}))})}),g=(d.def(l,X,{ms_v:1,_dragContainment:"parent",setConfig:function(l){if(l){for(var X=this,E=X._view.parentNode;this._view.children.length;)this._view.removeChild(this._view.children[0]);X._config=l,X.$35i=[],l.expanded==K&&(l.expand!=K?l.expanded=l.expand:l.expanded=!0);var s=X._view,T=X.$24i(l,s,!0),g=T[2],V=l.width,T=(X.$35i.push(T[1]),l.items&&l.items.forEach(function(l){l.expanded==K&&(l.expand!=K?l.expanded=l.expand:l.expanded=!0);l=X.$24i(l,g.children[0]);X.$35i.push(l[1])}),v()),T=(Y(T,A,10+f),Y(T,J,10+f),Y(T,F,D),Y(T,o,a),Y(T,h,a),T[w]="resize-area",n(s,T),X.$10i(),l.flowLayout&&Y(s,F,"relative"),Y(s,"opacity",a),n(b().body,s),V==K&&(V=s.offsetWidth),Y(s,A,V+f),Y(s,e,V+f),l.content);T&&T.isSelfViewEvent&&(T.setX(0),T.setY(0),T.setWidth(V-2*(l.borderWidth||0)),T.setHeight(l.contentHeight)),l.items&&l.items.forEach(function(l){r(l)}),l.buttons&&l.buttons.indexOf("toggle")<0||r(l),l.minimized==K&&l.minimize!=K&&(l.minimized=l.minimize),l.minimized&&!1!==l.minimizable&&X.minimize(!0),b().body.removeChild(s),Y(s,"opacity",c),E&&n(E,s),X.iv()}function r(l){l.expanded=!l.expanded,X.togglePanel(l.id,!0,!0)}},getPanelConfig:function(l){var X=this._config,E=X.items;if(X.id===l)return X;if(E)for(var s=0;s<E.length;s++){var T=E[s];if(T.id===l)return T}},getPanelView:function(l){for(var X=this.$35i,E=0;E<X.length;E++){var s=X[E].parentNode;if(s.$15i===l)return s}},setDragContainment:function(l){this._dragContainment=l},getDragContainment:function(){return this._dragContainment},$20i:function(){return this._config.restoreIconSize||24},$5i:function(l){l=l.titleIconSize||16;return s&&(l*=1.2),l},$4i:function(l){return l.titleHeight||d.widgetTitleHeight},setTitle:function(l,X){var E;(X=X==K?this._config.id:X)!=K&&(E=this.getPanelConfig(X),X=this.getPanelView(X),E.title=l,X.querySelector(".panel-title span").innerHTML=l)},setInnerPanel:function(l){var X,E=this,s=l.id,T=E.$35i,g=!1;if(l.expanded==K&&(l.expanded=!0),s!=K){var V=E.getPanelConfig(s);if(V){var r,g=!0,s=E.getPanelView(s),b=s.parentNode,H=s.children[0];if(s!==E._view){for(r in E.$11i(),V)delete V.key;for(r in l)V[r]=l[r];X=E.$24i(l,b,!1,s)[1],b.removeChild(s);for(var j=0;j<T.length;j++)if(T[j]===H){T.splice(j,1,X);break}E.$12i(),V.expanded=!V.expanded,E.togglePanel(V.id,!0,!0),E.iv()}}}g||(E.$11i(),X=E.$24i(l,E._view.children[1])[1],T.push(X),E._config.items||(E._config.items=[]),(b=E._config.items).push(l),E.$12i(),1<b.length&&(s=b[b.length-2],g=E.getPanelView(s.id).children[0],Y(g,"border-bottom",E.$55i(s))),l.expanded=!l.expanded,E.togglePanel(l.id,!0,!0),E.iv())},removeInnerPanel:function(l){var X,E=this,s=-1,T=E._config.items;if(T)for(b=0;b<T.length;b++)if(T[b].id===l){s=b;break}if(E.$11i(),0<=s){for(var g=E.$35i,V=E.getPanelView(l),r=V.children[0],b=0;b<g.length;b++)if(g[b]===r){g.splice(b,1);break}T.splice(s,1),V.parentNode.removeChild(V)}E.$12i(),0<T.length&&(V=T[T.length-1],X=E.getPanelView(V.id).children[0],Y(X,"border-bottom",E.$55i(V)))},$6i:function(l){Y(l,"cursor","pointer"),Y(l,"display","inline-block"),Y(l,"margin-right",(s?8:4)+f),Y(l,"vertical-align",q)},$24i:function(l,X,E,s){var T=this,g=T._config.flowLayout,V=E?X:v(),r=T.$50i(l),b=T.$3i(l,E),H=(V[w]="ht-widget-panel"+(E?" outer-panel":" inner-panel"),l.borderWidth==K&&(l.borderWidth=E?2:0),l.borderWidth),E=(Y(V,"border-width","0 "+H+f+" "+H+f+" "+H+f+" "),Y(V,"border-color",l.titleBackground||d.panelTitleBackground),Y(V,"border-style","solid"),n(V,b),n(V,r),E||(s?X.insertBefore(V,s):n(X,V)),!g&&E&&!1!==l.minimizable&&(H=I(),s=T.$20i(),g=l.restoreToolTip,G.setCanvas(H,s,s),H[w]="control-button button-minimize button-minimize-restore",T.$6i(H),Y(H,"display","none"),n(X,H),H.title=g||""),l.panelBackground||l.titleBackground||d.panelTitleBackground);if(Y(V,"background-color",E),l.id==K){for(var j=T.$1i++;T.getPanelConfig(j);)j=T.$1i++;l.id=j}return V.$15i=l.id,l.width&&(V.style.width=l.width+f),[V,b,r]},$9i:function(l){var X=I(),E=(X[w]="control-button button-toggle button-toggle-expand",X.title=l.toggleToolTip||"",this.$4i(l)),l=this.$5i(l);return this.$6i(X),G.setCanvas(X,l,E),X},$8i:function(l){var X=I(),E="control-button button-independent-switch",E=(!0===l.independent?X[w]=E+" button-independent-switch-on":X[w]=E+" button-independent-switch-off",X.title=l.independentSwitchToolTip||"",this.$4i(l)),l=this.$5i(l);return this.$6i(X),G.setCanvas(X,l,E),X},$7i:function(l){var X=I(),E=(X[w]="control-button button-minimize button-minimize-minimize",X.title=l.minimizeToolTip||"",this.$4i(l)),l=this.$5i(l);return this.$6i(X),G.setCanvas(X,l,E),X},$55i:function(l){var X=this._config,E=X.items,s=l.separatorWidth||d.panelSeparatorWidth,T=l.titleBackground||d.panelTitleBackground,T=!1!==l.expanded?T:l.separatorColor||d.panelSeparatorColor||d.brighter(T);return(s=X===l||E&&E.indexOf(l)===E.length-1?0:s)+f+" solid "+T},$3i:function(X,E){function l(){var l=V.$9i(X);n(H,l)}function s(){var l;!r&&E&&!1!==X.minimizable&&(l=V.$7i(X),n(H,l))}var T,g,V=this,r=V._config.flowLayout,b=v(),H=v(),j=V.$4i(X),U=X.titleBackground,L=X.titleColor,Z=X.titleIcon,B=X.buttons,Z=(b[w]="panel-title",Y(b,F,"relative"),Y(b,"background",U||d.panelTitleBackground),Y(b,"color",L||d.panelTitleLabelColor),Y(b,q,a),Y(b,"box-sizing","border-box"),Y(b,"-moz-box-sizing","border-box"),Y(b,"padding","0 5px 0 0"),Y(b,A,"100%"),Y(b,"cursor","default"),Y(b,"white-space","nowrap"),Y(b,"font",d.panelTitleLabelFont),Z&&((U=I())[w]="control-button panel-title-icon",L=V.$4i(X),Z=V.$5i(X),V.$6i(U),G.setCanvas(U,Z,L),n(b,U)),Q("span"));Y(Z,"display","inline-block"),Y(Z,"margin-left","5px"),Z[z]="<span>"+X.title+"</span>",n(b,Z),Y(b,"line-height",j+f),H[w]="panel-title-controls",Y(H,F,D),Y(H,_,a),Y(H,h,5+f),Y(H,q,a),Y(H,o,a),Y(H,"text-align",h);if(B)for(var x=0;x<B.length;x++){var k=B[x];"string"==typeof k?"minimize"===k?s():"independentSwitch"===k?(g=void 0,E||(g=V.$8i(X),n(H,g))):"toggle"===k&&l():"object"==typeof k&&(g=k,T=k=void 0,(k=I())[w]="control-button custombutton-"+g.name,k.title=g.toolTip||"",k._action=g.action,g=V.$4i(X),T=V.$5i(X),V.$6i(k),G.setCanvas(k,T,g),n(H,k))}else s(),l();return n(b,H),b},$50i:function(l){var X,E=v(),s=l.contentHeight,T=v(),g=(Y(T,F,"relative"),E[w]="panel-body",Y(E,"overflow","hidden"),l.contentBackground);return Y(E,"background",g=g===V?"white":g),Y(E,"font",d.panelContentLabelFont),n(E,T),l.content&&((g=l.content).getView?(n(T,g.getView()),X=T.children[0]):g instanceof Element?(n(T,g),X=T.children[0]):T[z]=g,g.isSelfViewEvent||X&&(Y(X,A,"100%"),Y(X,J,"100%")),s&&Y(T,J,s+f)),E},$10i:function(){var l=this._config,X=this._view.querySelector(".resize-area").style;l.flowLayout||!0===l.minimized||!1===l.expanded?X.display=N:X.display="block"},$11i:function(){var l=this._view,X=l.children[1];0<=this.$13i?this.$13i++:this.$13i=1,Y(X,m,c),Y(l,e,c)},$12i:function(){var l,X;0==--this.$13i&&(X=(l=this._view).children[1],Y(X,m,X.scrollHeight+f),Y(l,e,l.offsetWidth+f))},$14i:function(){var l=this._view,X=l.children[0],E=X.children[1].children,s=this._config,T=0;l.$26i=l.offsetWidth,T+=X.children[0].offsetWidth,s.titleIcon&&(T+=X.children[1].offsetWidth,E=X.children[2].children);for(var g=0;g<E.length;g++)T+=E[g].offsetWidth+5;l.$51i=T+15},togglePanel:function(l,X,E){var s=this,T=s._view,g=T.children[1],V=K,r=s.$35i,b=r.length,H=s._config.exclusive,j=s.$2i,U=[],L=s._config.narrowWhenCollapse;function Z(l){var l=l.target,X=l.parentNode,E=s.getPanelConfig(X.$15i);delete X.$19i,l!==g&&s.$12i(),s.$18i.fire({kind:"endToggle",target:s,id:E.id})}for(var B,x,k,Q=0;Q<b;Q++){var v=r[Q].parentNode,I=v.$15i,n=s.getPanelConfig(I);I===l&&(V=v),!X&&H&&n.expanded&&v!==T&&I!==l&&!0!==n.independent&&U.push(v)}V&&!V.$19i&&(V.$19i=!0,B=V.children[1],x=V.querySelector(".button-toggle"),k=s.getPanelConfig(V.$15i),x&&(V===T||k.expanded||!0===k.independent||U.forEach(function(l){s.togglePanel(l.$15i,!0)}),V!==T&&s.$11i(),E=E?0:200,s.$18i.fire({kind:"beginToggle",target:s,id:V.$15i}),k.expanded?(L&&V===T&&s.$14i(),x[w]="control-button button-toggle",0<=j.indexOf("Bottom")?x[w]+=" button-toggle-expand":x[w]+=" button-toggle-collapse",Y(B,A,B.clientWidth+f),k.expanded=!1,Y(V.children[0],"border-bottom",s.$55i(k)),S(B).duration(E).set("opacity",a).set(m,a).end(Z),L&&V===T&&S(V).duration(E).set(e,V.$51i+f).end(),V[w]+=" panel-collapse",S(V).duration(E).set("padding-bottom",a).end()):(x[w]="control-button button-toggle",0<=j.indexOf("Bottom")?x[w]+=" button-toggle-collapse":x[w]+=" button-toggle-expand",Y(B,A,c),k.expanded=!0,Y(V.children[0],"border-bottom",s.$55i(k)),S(B).duration(E).set("opacity","1").set(m,B.scrollHeight+f).end(Z),L&&V===T&&S(V).duration(E).set(e,(V.$26i||V.offsetWidth)+f).end(),V[w]=V[w].replace(" panel-collapse",c),S(V).duration(E).end()),s.$28i(k,!0),s.$10i()))},$16i:function(){var l=this._view,X=l.$22i,E=l.$23i,s=this.$2i;return X==K&&(0<=s.indexOf(_)?X=l.$22i=0:0<=s.indexOf(h)&&(X=l.$22i=100)),E==K&&(0<=s.indexOf("Top")?E=l.$23i=0:0<=s.indexOf("Bottom")&&(E=l.$23i=100)),[X,E]},$25i:function(){var l=this,X=l._view,E=X.$21i,s=l.$20i(),T=l.$16i(),g=T[0],T=T[1],V=l.$2i;X.children[0].style.display=N,X.children[1].style.display=N,X.children[2].style.display=c,Y(X,"padding",a),Y(X,e,s+f),"leftTop"===V?(Y(X,_,P(y(X,_))+(E.width-s)*g/100+f),Y(X,q,P(y(X,q))+(E.height-s)*T/100+f)):"leftBottom"===V?(Y(X,_,P(y(X,_))+(E.width-s)*g/100+f),Y(X,o,P(y(X,o))+(E.height-s)*(1-T/100)+f)):"rightTop"===V?(Y(X,h,P(y(X,h))+(E.width-s)*(1-g/100)+f),Y(X,q,P(y(X,q))+(E.height-s)*T/100+f)):"rightBottom"===V&&(Y(X,h,P(y(X,h))+(E.width-s)*(1-g/100)+f),Y(X,o,P(y(X,o))+(E.height-s)*(1-T/100)+f)),X[w]+=" panel-minimized",l.$18i.fire({kind:"endMinimize",target:l,id:X.$15i})},$17i:function(){var l=this,X=l._config,E=l._view;Y(E,"-webkit-transform",c),Y(E,"-ms-transform",c),Y(E,"transform",c),X.minimized?l.$25i():(l.$18i.fire({kind:"endRestore",target:l,id:X.id}),E[w]=E[w].replace(" panel-minimized",c)),delete E.$19i},minimize:function(l){var X,E,s,T,g,V,r=this,b=r._view;b.$19i||b.children[0].style.display!==N&&(X=r._config,V=b.getBoundingClientRect(),E=(s=r.$20i())/V.width,s=s/V.height,T=(g=r.$16i())[0],g=g[1],b.$52i=E,b.$53i=s,b.$21i=V,r.$18i.fire({kind:"beginMinimize",target:r,id:b.$15i}),V=l?0:200,X.minimized=!0,b.$19i=!0,X.expanded&&(b.$26i=b.offsetWidth),Y(b,"-webkit-transform-origin",l=T+"% "+g+"%"),Y(b,"-ms-transform-origin",l),Y(b,"transform-origin",l),S(b).duration(V).scale(E,s).end(function(){r.$17i()}),r.$10i())},restore:function(){var l,X,E,s,T,g,V,r,b,H,j,U,L,Z,B,x,k,Q=this,v=Q._view,I=v.parentNode,n=Q._config;v.$19i||n.minimized&&(L=v.$21i,Z=v.$52i,B=v.$53i,n.borderWidth,x=Q.$20i(),I=W(I),"leftTop"===(k=Q.$2i)?(l=P(y(v,_)),V=E=P(y(v,q)),0<(b=(T=l)+L.width-I.width)&&(l<=b?l=0:l-=b),0<(H=E+L.height-I.height)&&(E<=H?E=0:E-=H),j=(T-l)/(L.width-x)*100,U=(V-E)/(L.height-x)*100,Y(v,_,l+f),Y(v,q,E+f)):"leftBottom"===k?(l=P(y(v,_)),r=s=P(y(v,o)),0<(b=(T=l)+L.width-I.width)&&(l<=b?l=0:l-=b),0<(H=s+L.height-I.height)&&(s<=H?s=0:s-=H),j=(T-l)/(L.width-x)*100,U=100*(1-(r-s)/(L.height-x)),Y(v,_,l+f),Y(v,o,s+f)):"rightTop"===k?(X=P(y(v,h)),V=E=P(y(v,q)),0<(b=(g=X)+L.width-I.width)&&(X<=b?X=0:X-=b),0<(H=E+L.height-I.height)&&(E<=H?E=0:E-=H),j=100*(1-(g-X)/(L.width-x)),U=(V-E)/(L.height-x)*100,Y(v,h,X+f),Y(v,q,E+f)):"rightBottom"===k&&(X=P(y(v,h)),r=s=P(y(v,o)),0<(b=(g=X)+L.width-I.width)&&(X<=b?X=0:X-=b),0<(H=s+L.height-I.height)&&(s<=H?s=0:s-=H),j=100*(1-(g-X)/(L.width-x)),U=100*(1-(r-s)/(L.height-x)),Y(v,h,X+f),Y(v,o,s+f)),v.children[0].style.display="block",v.children[1].style.display="block",v.children[2].style.display=N,Y(v,"-webkit-transform","scale("+Z+", "+B+")"),Y(v,"-ms-transform","scale("+Z+", "+B+")"),Y(v,"transform","scale("+Z+", "+B+")"),v.$22i=j,v.$23i=U,Y(v,"-webkit-transform-origin",j+"% "+U+"%"),Y(v,"-ms-transform-origin",j+"% "+U+"%"),Y(v,"transform-origin",j+"% "+U+"%"),n.narrowWhenCollapse&&!n.expanded?Y(v,e,v.$51i+f):Y(v,e,v.$26i+f),Q.$18i.fire({kind:"beginRestore",target:Q,id:v.$15i}),v.$19i=!0,n.minimized=!1,R(function(){S(v).scale(1,1).end(function(){Q.$17i()})},30),Q.$10i())},addEventListener:function(l,X,E){this.$18i.add(l,X,E)},removeEventListener:function(l,X){this.$18i.remove(l,X)},setPosition:function(l,X){var E=this._view,s=this.$2i;"leftTop"===s?(Y(E,_,l+f),Y(E,q,X+f),Y(E,h,c),Y(E,o,c)):"leftBottom"===s?(Y(E,_,l+f),Y(E,o,X+f),Y(E,h,c),Y(E,q,c)):"rightTop"===s?(Y(E,h,l+f),Y(E,q,X+f),Y(E,_,c),Y(E,o,c)):"rightBottom"===s&&(Y(E,h,l+f),Y(E,o,X+f),Y(E,_,c),Y(E,q,c)),delete E.$22i,delete E.$23i},getPosition:function(){var l=this._view,X=this.$2i;return"leftTop"===X?{x:P(y(l,_)),y:P(y(l,q))}:"leftBottom"===X?{x:P(y(l,_)),y:P(y(l,o))}:"rightTop"===X?{x:P(y(l,h)),y:P(y(l,q))}:"rightBottom"===X?{x:P(y(l,h)),y:P(y(l,o))}:void 0},setPositionRelativeTo:function(l){var X=this,E=X._view.querySelectorAll(".button-toggle"),s="control-button button-toggle",T=X.getPosition();X.$2i=l,X.setPosition(T.x,T.y);for(var g=0;g<E.length;g++){var V=E[g];X.getPanelConfig(V.parentNode.parentNode.parentNode.$15i).expanded?0<=l.indexOf("Bottom")?V[w]=s+" button-toggle-collapse":V[w]=s+" button-toggle-expand":0<=l.indexOf("Bottom")?V[w]=s+" button-toggle-expand":V[w]=s+" button-toggle-collapse"}X.iv()},getPositionRelativeTo:function(){return this.$2i},invalidate:function(l){var X=this,l=(X._68I||(X._68I=1,d.callLater(X.validate,X,K,l),X.onInvalidated&&X.onInvalidated(),X.fireViewEvent("invalidate")),this._config),X=l.content;X&&X.invalidate&&X.invalidate(),l.items&&l.items.forEach(function(l){l&&l.content&&l.content.invalidate&&l.content.invalidate()})},getIconStretch:function(l){return this._config.iconStretch||"fill"},$27i:function(l,X,E,s,T){l=G.initContext(l),G.translateAndScale(l,0,0,1),l.clearRect(0,0,E,E),E=(E-s)/2;d.drawStretchImage(l,d.getImage(X),this.getIconStretch(T),0,E,s,s),l.restore()},$28i:function(l){var X=this,E=l.id,E=X.getPanelView(E).querySelector(".button-toggle"),s=0<=X.$2i.indexOf("Bottom"),T=s?d.panelCollapseIcon:d.panelExpandIcon,s=s?d.panelExpandIcon:d.panelCollapseIcon;E&&(s=l.expanded?d.getImage(s):d.getImage(T),T=X.$4i(l),l=X.$5i(l),X.$27i(E,s,T,l,"toggle"))},$29i:function(l){var X=l.id,X=this.getPanelView(X).querySelector(".button-independent-switch"),E=d.panelUnLockIcon,s=d.panelLockIcon;X&&(s=!0!==l.independent?d.getImage(s):d.getImage(E),E=this.$4i(l),l=this.$5i(l),this.$27i(X,s,E,l,"switch"))},$30i:function(l){var X,E=l.id,E=this.getPanelView(E).querySelector(".button-minimize-minimize"),s=d.panelMinimizeIcon;E&&(X=this.$4i(l),l=this.$5i(l),this.$27i(E,d.getImage(s),X,l,"miminize"))},$31i:function(l){var X,E=l.id,E=this.getPanelView(E).querySelector(".button-minimize-restore"),l=l.titleIcon||d.panelRestoreIcon;E&&(X=this.$20i(),this.$27i(E,d.getImage(l),X,X,"restore"))},$32i:function(T){var g=this,l=T.id,V=g.getPanelView(l);T.buttons&&T.buttons.forEach(function(l){var X,E,s=l.name,l=l.icon;s&&l&&((s=V.querySelector(".custombutton-"+s))&&(X=g.$4i(T),E=g.$5i(T)-1,g.$27i(s,d.getImage(l),X,E,"custom")))})},$33i:function(l){var X,E=l.id,E=this.getPanelView(E).querySelector(".panel-title-icon"),s=l.titleIcon;E&&s&&(X=this.$4i(l),l=this.$5i(l),this.$27i(E,d.getImage(s),X,l,"title"))},validateImpl:function(){var X=this,l=X._config;X.$28i(l),X.$30i(l),X.$31i(l),X.$32i(l),X.$33i(l),l.items&&l.items.forEach(function(l){X.$28i(l),X.$29i(l),X.$32i(l)})},setWidth:function(l){var X=this,E=X._view,s=X._config;X._view.style.width=l+f,s&&(s.width=l,Y(E,e,c)),X.iv(),X.fp&&X.fp(A,K,l)},setHeight:function(l){var X=this,E=X._config,s=X._view.children[1],T=X.$4i(E);l=Math.max(T,l-T),E&&(E.contentHeight=l),s&&((T=s.children[0])&&Y(T,J,l+f),Y(s,m,c)),X.iv(),X.fp&&X.fp(J,K,l)}}),function(l){var X=l.getView();this.$34i=l,this.addListeners(),T(X,"dblclick",this.$42i.bind(this))}),E=(d.def(g,X,{ms_listener:1,getView:function(){return this.$34i.getView()},clear:function(){delete this.$37i,delete this.$38i,delete this.$36i,delete this.$39i},$42i:function(l){for(var X=this.$34i,E=l.target,s=X.$35i,T=s.length,g=0;g<T;g++){var V=s[g];V.contains(E)&&(l.preventDefault(),X.togglePanel(V.parentNode.$15i))}},handle_touchstart:function(l){var X,E,s,T=this,g=T.$34i,V=g._config.flowLayout,r=l;d.isLeftButton(l)&&(X=l.target,E=g.getView().children[0],s=g.getView().querySelector(".button-minimize-restore"),C(l)&&(r=t(l)),r=T.$40i={x:r.pageX,y:r.pageY},T.$41i={x:r.x,y:r.y},(!V&&E.contains(X)||s&&s.contains(X))&&(T.$38i=!0,d.startDragging(T,l)),!V&&T.handle_mousemove(l)&&(T.$37i=!0,d.startDragging(T,l),g.$11i()))},handle_mousedown:function(l){this.handle_touchstart(l)},handle_touchend:function(l){var X=this,E=X.$34i,s=l.target,T=E.$35i,g=T.length,V=0,r=E.getView(),b=r.querySelector(".button-minimize"),r=r.querySelector(".button-minimize-restore");if(!X.$39i&&!X.$36i){if(b&&b.contains(s)||r&&r.contains(s))l.preventDefault(),E._config.minimized?E.restore():E.minimize();else for(;V<g;V++){var H,j=T[V],U=j.parentNode.$15i,L=E.getPanelConfig(U),Z=j.querySelector(".button-toggle"),B=j.querySelector(".button-independent-switch");Z===s?(l.preventDefault(),E.togglePanel(U)):B===s?(l.preventDefault(),Z="button-independent-switch-off",H="button-independent-switch-on",L.independent==K?L.independent=!0:L.independent=!L.independent,L.independent?B[w]=B[w].replace(Z,H):B[w]=B[w].replace(H,Z),E.$29i(L)):s[w]&&0<=s[w].indexOf("control-button custombutton-")&&j.contains(s)&&s._action.call(E,L,E.getPanelView(U),l)}delete X.$40i,delete X.$41i}},handle_mouseup:function(l){this.handle_touchend(l)},handleWindowTouchEnd:function(l){var X=this,E=X.$34i;X.$37i&&X.$36i?(E.$18i.fire({kind:"endResize",target:E,id:E.getView().$15i}),E.$12i()):X.$38i&&X.$39i&&E.$18i.fire({kind:"endMove",target:E,id:E.getView().$15i}),this.clear()},handleWindowMouseUp:function(l){this.handleWindowTouchEnd(l)},handle_mousemove:function(l){var X=this.getView(),E=X.querySelector(".resize-area").getBoundingClientRect(),E={x:E.left,y:E.top,width:E.width,height:E.height},s=(l=C(l)?t(l):l).clientX,l=l.clientY,T=this.$34i._config;if(T.expanded&&!0!==T.minimized&&d.containsPoint(E,{x:s,y:l}))return X.style.cursor="nwse-resize",!0;X.style.cursor=c},handleWindowTouchMove:function(l){l.preventDefault();var X,E,s,T,g,V,r,b,H,j,U,L,Z,B,x,k,Q,v,I,n,a,w,F=l,l=(C(l)&&(F=t(l)),this),D=l.$40i,e=l.$41i;e.x==D.x&&e.y==D.y&&d.getDistance(e,{x:F.pageX,y:F.pageY})<=1||(e=l.$34i,E=(X=l.getView()).parentNode,L=(s=e._config).resizeMode||"wh",T=F.pageX-D.x,g=F.pageY-D.y,V=e.$2i,l.$37i?(r=X.children[1].children[0],b=(H=X.offsetWidth)+T,j=(U=r.offsetHeight)+g,b=Math.max(b,100),j=Math.max(j,100),"w"===L?(Y(X,A,b+f),s.width=b):"h"===L?(Y(r,J,j+f),s.contentHeight=j):"wh"===L&&(Y(X,A,b+f),Y(r,J,j+f),s.width=b,s.contentHeight=j),0<=V.indexOf("right")&&Y(X,h,P(y(X,h))-(b-H)+f),0<=V.indexOf("Bottom")&&Y(X,o,P(y(X,o))-(j-U)+f),D.x=F.pageX,D.y=F.pageY,(L=s.content)&&L.isSelfViewEvent&&(L.setX(0),L.setY(0),L.setWidth(s.width-2*(s.borderWidth||0)),L.setHeight(s.contentHeight)),l.$36i?e.$18i.fire({kind:"betweenResize",target:e,id:e.getView().$15i}):(l.$36i=!0,e.$18i.fire({kind:"beginResize",target:e,id:e.getView().$15i}))):l.$38i&&(b=(r=X.getBoundingClientRect()).width,H=r.height,U=(j=W(E)).width,F=j.height,L=e._dragContainment,"leftTop"===V?(Q=(Z=P(y(X,_))||0)+T,I=(x=P(y(X,q))||0)+g,"parent"===L&&((Q=U<Q+b?U-b:Q)<0&&(Q=0),(I=F<I+H?F-H:I)<0&&(I=0)),a=Q-Z,w=I-x,e.setPosition(Q,I),D.x+=a,D.y+=w):"rightBottom"===V?(v=(B=P(y(X,h))||0)-T,n=(k=P(y(X,o))||0)-g,"parent"===L&&(U<(v=v<0?0:v)+b&&(v=U-b),F<(n=n<0?0:n)+H&&(n=F-H)),a=v-B,w=n-k,e.setPosition(v,n),D.x-=a,D.y-=w):"rightTop"===V?(v=(B=P(y(X,h))||0)-T,I=(x=P(y(X,q))||0)+g,"parent"===L&&(U<(v=v<0?0:v)+b&&(v=U-b),F<(I=I<0?0:I)+H&&(I=F-H)),a=v-B,w=I-x,e.setPosition(v,I),D.x-=a,D.y+=w):"leftBottom"===V&&(Q=(Z=P(y(X,_))||0)+T,n=(k=P(y(X,o))||0)-g,"parent"===L&&(U<(Q=Q<0?0:Q)+b&&(Q=U-b),F<(n=n<0?0:n)+H&&(n=F-H)),a=Q-Z,w=n-k,e.setPosition(Q,n),D.x+=a,D.y-=w),l.$39i?e.$18i.fire({kind:"betweenMove",target:e,id:e.getView().$15i}):(l.$39i=!0,e.$18i.fire({kind:"beginMove",target:e,id:e.getView().$15i}))))},handleWindowMouseMove:function(l){this.handleWindowTouchMove(l)}}),j.widget.PanelGroup=function(l){var X=this,E=X._view=G.createView(null,X);E.style.border="1px dashed black",E.style.position="absolute",E.style.background="rgba(120, 120, 120, 0.4)",X.$48i=new j.List,X._tolerance=100,X._config=l||{hGap:0,vGap:0},X.bindHandlePanelMove=X.handlePanelMove.bind(X),X.bindHandlePanelEvent=X.handlePanelEvent.bind(X),X.invalidate()});d.def(E,X,{invalidate:function(){var l=this;l._68I||(l._68I=1,R(function(){l.validate()},50))},validate:function(){var l;this._68I&&(delete this._68I,(l=this.$48i.get(0))&&(l=l.getView().parentNode)&&(this.layoutPanels(l,"leftTop"),this.layoutPanels(l,"rightTop"),this.layoutPanels(l,"leftBottom"),this.layoutPanels(l,"rightBottom")))},setLeftTopPanels:function(){var l=this.$43i,X=this.$48i;l==K&&(l=this.$43i=new j.List);for(var E=0;E<arguments.length;E++){var s=arguments[E];"string"==typeof s?l.$49i=s:s._config.flowLayout||(s.setPositionRelativeTo("leftTop"),l.contains(s)||l.add(s),X.contains(s)||this.add(s))}},setRightTopPanels:function(){var l=this.$44i,X=this.$48i;l==K&&(l=this.$44i=new j.List);for(var E=0;E<arguments.length;E++){var s=arguments[E];"string"==typeof s?l.$49i=s:s._config.flowLayout||(s.setPositionRelativeTo("rightTop"),l.contains(s)||l.add(s),X.contains(s)||this.add(s))}},setLeftBottomPanels:function(){var l=this.$45i,X=this.$48i;l==K&&(l=this.$45i=new j.List);for(var E=0;E<arguments.length;E++){var s=arguments[E];"string"==typeof s?l.$49i=s:s._config.flowLayout||(s.setPositionRelativeTo("leftBottom"),l.contains(s)||l.add(s),X.contains(s)||this.add(s))}},setRightBottomPanels:function(){var l=this.$46i,X=this.$48i;l==K&&(l=this.$46i=new j.List);for(var E=0;E<arguments.length;E++){var s=arguments[E];"string"==typeof s?l.$49i=s:s._config.flowLayout||(s.setPositionRelativeTo("rightBottom"),l.contains(s)||l.add(s),X.contains(s)||this.add(s))}},add:function(l){var X;l._config.flowLayout||((X=this.$48i).contains(l)||(l.addEventListener(this.bindHandlePanelMove),l.addEventListener(this.bindHandlePanelEvent),X.add(l)))},remove:function(l){var X=this,E=X.$48i;E.contains(l)&&(l.removeEventListener(X.bindHandlePanelMove),l.removeEventListener(X.bindHandlePanelEvent),E.remove(l),X.$43i.contains(l)&&X.$43i.remove(l),X.$44i.contains(l)&&X.$44i.remove(l),X.$45i.contains(l)&&X.$45i.remove(l),X.$46i.contains(l)&&X.$46i.remove(l))},layoutPanels:function(l,X,E){var s=this,T=s._config,g=T.hGap||0,V=T.vGap||0;if(l){var r=s.$43i;if("leftBottom"===X?r=s.$45i:"rightTop"===X?r=s.$44i:"rightBottom"===X&&(r=s.$46i),r){var b=r.$49i,H=g,j=V;if(l.contains(s._view)&&l.removeChild(s._view),r&&0<r.size())for(var U=0;U<r.size();U++){var L=r.get(U),Z=L.getView();l=l||Z.parentNode,E!==U?L.setPosition(H,j):("leftTop"===X?(s._view.style.right="",s._view.style.bottom="",s._view.style.left=H+f,s._view.style.top=j+f):"leftBottom"===X?(s._view.style.right="",s._view.style.top="",s._view.style.left=H+f,s._view.style.bottom=j+f):"rightTop"===X?(s._view.style.left="",s._view.style.bottom="",s._view.style.right=H+f,s._view.style.top=j+f):"rightBottom"===X&&(s._view.style.left="",s._view.style.top="",s._view.style.right=H+f,s._view.style.bottom=j+f),s._view.style.width=Z.offsetWidth+f,s._view.style.height=Z.offsetHeight+f,l.insertBefore(s._view,Z)),"h"===b?H+=Z.offsetWidth+g:"v"===b&&(j+=Z.offsetHeight+V)}}}},handlePanelEvent:function(l){var X,E,s,T,g,V,r,b,H,j,U,L,Z;"beginToggle"!==l.kind&&"endToggle"!==l.kind&&"beginRestore"!==l.kind&&"endMinimize"!==l.kind&&"endResize"!==l.kind||(X=this,E=l.target,s=E.getView().parentNode,U=X.$43i,T=X.$44i,Z=X.$45i,g=X.$46i,V=X._config,b=r=K,(H=E.$47i)==K&&(H=E.$47i=0),"beginToggle"===l.kind?H=E.$47i=H+1:"endToggle"===l.kind&&(H=E.$47i=H-1),U&&U.contains(E)?(r="leftTop",b=U):Z&&Z.contains(E)?(r="leftBottom",b=Z):T&&T.contains(E)?(r="rightTop",b=T):g&&g.contains(E)&&(r="rightBottom",b=g),"beginToggle"===l.kind&&r&&1===H?(U=(j=v()).style,L=b.$49i,Z="each",U.fontSize="0",U.position="absolute",U.width="100%","leftTop"===r?(U.left=0,U.top=0):"leftBottom"===r?(U.left=0,U.bottom=0,"v"===L&&(Z="reverseEach")):"rightTop"===r?(U.right=0,U.top=0,U.textAlign="right","h"===L&&(Z="reverseEach")):"rightBottom"===r&&(U.right=0,U.bottom=0,U.textAlign="right",Z="reverseEach"),b[Z](function(l){var l=l.getView(),X=l.style,E=v();X.position="static",E.style.textAlign="left",E.style.position="relative",E.style.display="inline-block","leftTop"===r?(E.style.marginLeft=V.hGap+f,E.style.marginTop=V.vGap+f):"leftBottom"===r?(E.style.marginLeft=V.hGap+f,E.style.marginBottom=V.vGap+f):"rightTop"===r?(E.style.marginRight=V.hGap+f,E.style.marginTop=V.vGap+f):"rightBottom"===r&&(E.style.marginRight=V.hGap+f,E.style.marginBottom=V.vGap+f),E.appendChild(l),j.appendChild(E),"h"===L?E.style.verticalAlign="leftTop"===r||"rightTop"===r?"top":"bottom":j.appendChild(Q("br"))}),X.$54i=j,s.appendChild(j)):"endToggle"===l.kind&&r&&0===H?R(function(){(s=s.parentNode.parentNode).removeChild(X.$54i),delete X.$54i,b.each(function(l){l=l.getView();l.style.position="absolute",s.appendChild(l)}),X.layoutPanels(s,r)},30):"beginRestore"!==l.kind&&"endMinimize"!==l.kind&&"endResize"!==l.kind||r&&X.layoutPanels(s,r))},handlePanelMove:function(l){var F,D,e,Y,X,E,s,y,W,t,T,g,V,r,b,d,C,f,A,J,_,q,H;l.kind.indexOf("Move")<0||(T=(F=this)._config,D=T.hGap||0,e=T.vGap||0,E=(X=(T=(Y=l.target)._view).getBoundingClientRect()).width,s=X.height,y=E/2,W=s/2,t=T.parentNode,T=F.$43i,g=F.$44i,V=F.$45i,r=F.$46i,b=t.getBoundingClientRect(),d=F._tolerance,"endMove"===l.kind&&((H=F._corner)&&(Y.setPositionRelativeTo(H),F.layoutPanels(t,H)),delete F._corner),"betweenMove"===l.kind&&(C=b.left,f=b.top,A=b.width,J=b.height,_=X.left+E/2,q=X.top+s/2,T==K&&(T=F.$43i=new j.List),V==K&&(V=F.$45i=new j.List),g==K&&(g=F.$44i=new j.List),r==K&&(r=F.$46i=new j.List),delete F._corner,T.contains(Y)?(T.remove(Y),F.layoutPanels(t,"leftTop")):V.contains(Y)?(V.remove(Y),F.layoutPanels(t,"leftBottom")):g.contains(Y)?(g.remove(Y),F.layoutPanels(t,"rightTop")):r.contains(Y)&&(r.remove(Y),F.layoutPanels(t,"rightBottom")),(H=function(l,X){var E=C+D,s=f+e;if(0===X.size()){var T=E+y,g=s+W,V=("leftBottom"===l?g=f+J-e-W:"rightTop"===l?T=C+A-D-y:"rightBottom"===l&&(T=C+A-D-y,g=f+J-e-W),_-T),r=q-g;if((I=Math.sqrt(V*V+r*r))<d)return F._corner=l,X.add(Y),F.layoutPanels(t,l,0),!0}else if(1===X.size()){var b=X.get(0).getView().getBoundingClientRect(),H=b.left+y,j=b.top+W,U=b.left+b.width+D+y,L=s+W,Z=E+y,B=b.top+b.height+e+W,b=("leftBottom"===l?(j=b.top+b.height-W,L=f+J-e-W,B=b.top-e-W):"rightTop"===l?(H=b.left+b.width-y,U=b.left-D-y,Z=C+A-D-y):"rightBottom"===l&&(H=b.left+b.width-y,j=b.top+b.height-W,U=b.left-D-y,L=f+J-e-W,Z=C+A-D-y,B=b.top-e-W),_-H),H=q-j,j=_-U,U=q-L,L=_-Z,Z=q-B,B=P(Math.sqrt(b*b+H*H)),b=P(Math.sqrt(j*j+U*U)),H=P(Math.sqrt(L*L+Z*Z)),j=[B,b,H];if(j.sort(function(l,X){return l-X}),(U=j[0])<d)return F._corner=l,U===B?(X.add(Y,0),F.layoutPanels(t,l,0),!0):U===b?(X.add(Y),X.$49i="h",F.layoutPanels(t,l,1),!0):U===H?(X.add(Y),X.$49i="v",F.layoutPanels(t,l,1),!0):void 0}else if(1<X.size()){for(var x=K,k={},Q=[],L=X.$49i,v=0;v<X.size();v++){var I,n=X.get(v).getView().getBoundingClientRect(),a=n.left+y,w=n.top+W,V=("leftBottom"===l?w=n.top+n.height-W:"rightTop"===l?a=n.left+n.width-y:"rightBottom"===l&&(a=n.left+n.width-y,w=n.top+n.height-W),v===X.size()-1&&(x=n),_-a),r=q-w;k[I=P(Math.sqrt(V*V+r*r))]=v,Q.push(I)}if("leftTop"===l&&"h"===L?(T=x.left+x.width+D+y,g=s+W):"leftTop"===l&&"v"===L?(T=E+y,g=x.top+x.height+e+W):"leftBottom"===l&&"h"===L?(T=x.left+x.width+D+y,g=f+J-e-W):"leftBottom"===l&&"v"===L?(T=E+y,g=x.top-e-W):"rightTop"===l&&"h"===L?(T=x.left-D-y,g=s+W):"rightTop"===l&&"v"===L?(T=C+A-D-y,g=x.top+x.height+e+W):"rightBottom"===l&&"h"===L?(T=x.left-D-y,g=f+J-e-W):"rightBottom"===l&&"v"===L&&(T=C+A-D-y,g=x.top-e-W),V=_-T,r=q-g,k[I=P(Math.sqrt(V*V+r*r))]=v,Q.push(I),Q.sort(function(l,X){return l-X}),(U=Q[0])<d)return F._corner=l,X.add(Y,k[U]),F.layoutPanels(t,l,k[U]),!0}})("leftTop",T)||H("leftBottom",V)||H("rightTop",g)||H("rightBottom",r)))}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);