!function(Z,I){"use strict";function z(){return document}function O(j,J){return j.querySelectorAll(J)}function H(j){var J=z().createElement(j);return"ul"===j&&(Y(J,b,"relative"),Y(J,$,N),Y(J,i,N),Y(J,"list-style",m),Y(J,"box-sizing","border-box"),Y(J,"-moz-box-sizing","border-box"),Y(J,C,"inline-block"),Y(J,"vertical-align","text-bottom"),Y(J,"border","1px solid "+S.contextMenuBorderColor),Y(J,"box-shadow","0 0 16px 1px "+S.contextMenuShadowColor),Y(J,"overflow","hidden"),S.contextMenuBorderRadius&&Y(J,"border-radius",S.contextMenuBorderRadius+U)),J}function R(j){var J=j.touches[0];return J||j.changedTouches[0]}function a(){return H("div")}function M(){return H("canvas")}function Y(j,J,E){j.style.setProperty(J,E,l)}function r(j,J){j.appendChild(J)}function Q(j){var J=this,E=j._view,j=(J.$11b=j,J.addListeners(),u(E,"contextmenu",function(j){j.preventDefault()}),J.$37b=J.$36b.bind(J));u(E,"mouseover",j),u(E,"mouseout",j)}var d=Z.ht,b="position",p="absolute",U="px",o="left",y="top",k="innerHTML",A="className",T="width",K="height",N="0",C="display",m="none",W="visibility",P="user-select",$="margin",i="padding",l=null,j=d.Color,S=d.Default,c=S.getInternal(),e=Z.setTimeout,G=Z.setInterval,F=Z.clearTimeout,f=Z.clearInterval,L=Z.parseInt,_=S.isLeftButton,t=S.isDragging,g=S.startDragging,n=S.getDistance,s=S.isTouchable,D=S.isTouchEvent,V=S.getPagePoint,B=S.isRightButton,w=j.widgetIconHighlight,J=j.widgetIconBorder,j=j.widgetIconGradient,u=c.addEventListener,E=c.removeEventListener;c.addMethod(S,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:J},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:w}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:J},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:w,gradient:S.imageGradient,gradientColor:j,background:w}]},contextMenuLabelFont:(s?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)",contextMenuBorderRadius:5,contextMenuSubmenuMark:"▶"},!0);S.def(Q,I,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(j){if(S.preventDefault(j),_(j)){for(var J=this,E=J.$11b,P=J.getView().children,m=0;m<P.length;m++){var Z=P[m],L=Z.$24b,I=Z.$25b;if(L&&L.contains(j.target))return E.scrollUp(Z),J.$28b=e(function(){J.$29b=G(function(){E.scrollUp(Z)},100)},500),void g(J,j);if(I&&I.contains(j.target))return E.scrollDown(Z),J.$28b=e(function(){J.$29b=G(function(){E.scrollDown(Z)},100)},500),void g(J,j)}J.$30b=V(j)}},handle_mousedown:function(j){this.handle_touchstart(j)},handle_touchend:function(j){if(_(j)){var J=this,E=J.$30b,P=D(j)?{x:R(j).pageX,y:R(j).pageY}:{x:j.pageX,y:j.pageY};if(!E||1<n(E,P))delete J.$30b;else{for(var E=J.getView(),P=J.$11b,m=j.target,Z=l,L=l,I=P._items,e=E.$26b,g=0;g<e.length;g++)if((L=e[g]).contains(m)){Z=L.getAttribute("data-id");break}Z&&I&&((E=P.$17b(I,function(j){return j._id===Z}))&&(I=!1,E.disabled instanceof Function?I=E.disabled.call(P,E):!0===E.disabled&&(I=!0),I||(E.items?D(j)&&J.$36b(L,!0):P.$1b(E,j)))),delete J.$30b}}},$36b:function(j,J){if(!t()){var E,P=this.$11b,m=this.getView(),Z=P.$20b||m.children[0],L=P._currentMenuLi,I=m.$26b,e=m.children,g=j.target,c=m.getBoundingClientRect(),H=S.getWindowInfo(),d=H.width,K=H.height,z=function(j){for(var J=0;J<e.length;J++){var E=e[J],P=new RegExp(j+"$"),m=E[A];if(m&&(P.test(m)||0<=m.indexOf(j+" ")))return E}},O=function(j){for(var J=0;J<I.length;J++){var E=I[J],P=new RegExp(j+"$"),m=E[A];if(m&&(P.test(m)||0<=m.indexOf(j+" ")))return E}};if(J)E=j;else{if("mouseover"===j.type){for(var R=0;R<I.length;R++){var a=I[R];if(a.contains(g)){E=a;break}}!E&&L&&(H=L.parentNode,((J=z("submenu"+L.getAttribute("data-id")))&&J.contains(g)||H&&H.contains(g))&&(E=L))}else if("mouseout"===j.type){for(var r=!1,b=j.relatedTarget,R=0;R<e.length;R++){var p=e[R];if("hidden"!==p.style.visibility&&p.contains(b)){r=!0;break}}if(r)return}!E&&Z&&(E=O("menu-item"+(Z.$45b||"NaN")))}if(E!=L){if(L)for(var k=L;k;){k[A]=k[A].replace(" menu-item-hover",""),k[A].indexOf("disabled")<0&&(null!=(T=P.getItemByProperty("_id",k.getAttribute("data-id"))).background?T.background instanceof Function?Y(k,"background-color",T.background.call(P,T)):Y(k,"background-color",T.background):Y(k,"background-color",S.contextMenuBackground),Y(k,"color",S.contextMenuLabelColor));var T=z("submenu"+k.getAttribute("data-id")),N=(T&&Y(T,W,"hidden"),k.parentNode),k=O("menu-item"+(N.$45b||"NaN"))}if(E){for(var C=E,l=[];C;){C[A]+=" menu-item-hover",C[A].indexOf("disabled")<0&&(Y(C,"background-color",S.contextMenuHoverBackground),Y(C,"color",S.contextMenuHoverLabelColor));var _=z("submenu"+C.getAttribute("data-id")),N=(_&&(Y(_,W,"visible"),l.push(_)),C.parentNode),C=O("menu-item"+(N.$45b||"NaN"))}l.reverse(),l.forEach(function(j){var J,E,P,m,Z,L;J=O("menu-item"+(j=j).$45b).getBoundingClientRect(),E=J.top-c.top,P=J.left-c.left,Y(j,y,E+U),Y(j,o,P+J.width+U),J=j.getBoundingClientRect(),m=J.top,Z=J.left,L=J.height,J=J.width,m=m+L+2,L=Z+J+2,K<m&&Y(j,y,E+K-m+U),d<L&&Y(j,o,P-J+U)})}}P.setCurrentMenuItem(E),P.$20b=E?E.parentNode:m.children[0]}},handle_mouseup:function(j){this.handle_touchend(j)},handleWindowTouchEnd:function(j){var J=this;J.$28b!=l&&(F(J.$28b),delete J.$28b),J.$29b!=l&&(f(J.$29b),delete J.$29b),delete J.$34b,delete J.$30b,delete J.$35b},handleWindowMouseUp:function(j){this.handleWindowTouchEnd(j)},handle_mousemove:function(j){this.handle_touchmove(j)},handle_touchmove:function(j){if(!t()&&_(j)){for(var J=this,E=J.getView().children,P=l,m=0;m<E.length;m++){var Z=E[m];if(Z.contains(j.target)){P=Z;break}}var L=J.$30b,I=D(j)?{x:R(j).pageX,y:R(j).pageY}:{x:j.pageX,y:j.pageY};P&&L&&2<n(L,I)&&(g(J,j),J.$34b=P,J.$35b=P.$18b)}},handleWindowTouchMove:function(j){j.preventDefault();var J=this.$11b,E=this.$34b,P=this.$35b,m=this.$30b;m&&E&&(0<(j=(D(j)?{x:R(j).pageX,y:R(j).pageY}:{x:j.pageX,y:j.pageY}).y-m.y)?J.scrollUp(E,E.$18b-(P-j)):J.scrollDown(E,P-j-E.$18b))},handleWindowMouseMove:function(j){this.handleWindowTouchMove(j)},$10b:function(j,J){j.preventDefault();for(var E,P,m=this.getView().children,Z=l,L=0;L<m.length;L++){var I=m[L];if(I.contains(j.target)){Z=I;break}}Z&&(P=(E=this.$11b).getRowHeight(),.05<Math.abs(J)&&(0<J?E.scrollUp(Z,J*P):J<0&&E.scrollDown(Z,-J*P)))},handle_mousewheel:function(j){this.$10b(j,j.wheelDelta/40)},handle_DOMMouseScroll:function(j){this.$10b(j,-j.detail)},$44b:function(j){this.getView().contains(j.target)||this.$11b.hide()},$41b:function(j){S.preventDefault(j)},$4b:function(j,J){var E,P,m=this.$11b;(J=J||m._items)&&J.length&&j.keyCode&&(P=[j.keyCode],j.shiftKey&&P.push(16),j.ctrlKey&&P.push(17),j.altKey&&P.push(18),/mac/.test(Z.navigator?Z.navigator.userAgent.toLowerCase():"")?j.metaKey&&P.push(17):j.metaKey&&P.push(91),P.sort(),E=P.join(),(P=m.$17b(J,function(j){if(j.key)return(j=j.key.slice(0)).sort(),E===j.join()}))&&(!1!==P.preventDefault&&j.preventDefault(),J=!1,P.disabled instanceof Function?J=P.disabled.call(m,P):!0===P.disabled&&(J=!0),J||m.$1b(P,j)))},$39b:function(j){this.$32b=V(j)},$38b:function(j){var J;S.preventDefault(j),_(j)||((J=this)._showContextMenu=B(j),J._showContextMenu||(J.$31b=V(j),J.$33b=e(function(){J._showContextMenu=!0,delete J.$33b},600)))},$40b:function(j){var J=this;J._showContextMenu&&(B(j)||J.$31b&&(!J.$32b||n(J.$31b,J.$32b)<10))&&J.$11b.show(j),J.$33b!=l&&(F(J.$33b),delete J.$33b),delete J.$31b,delete J.$32b}}),d.widget.ContextMenu=function(j){var J=this,E=J._view=c.createView(null,J);E[A]="ht-widget-contextmenu",J.setItems(j),J.$13b=new Q(J),Y(E,"font",S.contextMenuLabelFont),Y(E,b,p),Y(E,"cursor","default"),Y(E,"-webkit-"+P,m),Y(E,"-moz-"+P,m),Y(E,"-ms-"+P,m),Y(E,P,m),Y(E,"box-sizing","border-box"),Y(E,"-moz-box-sizing","border-box"),S.baseZIndex!=l&&Y(E,"z-index",L(S.baseZIndex)+2+""),J.$3b=function(j){J.$13b.$4b(j)}},j={$16b:l,$5b:0,_items:l,$21b:l,$19b:l,_enableGlobalKey:!(J="ContextMenu"),ms_v:1,ms_ac:["currentMenuItem"],enableGlobalKey:function(){!1===this._enableGlobalKey&&(u(z(),"keydown",this.$3b),this._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,E(z(),"keydown",this.$3b)},setItems:function(j){this._items=j},getItems:function(){return this._items},getVisibleFunc:function(){return this.$16b},setVisibleFunc:function(j){this.$16b=j},setLabelMaxWidth:function(j){this.$43b=j},$1b:function(j,J){var E;"check"===j.type?j.selected=!j.selected:"radio"===j.type&&(E=j.groupId,this.$17b(this._items,function(j){j.groupId===E&&(j.selected=!1)}),j.selected=!0),this.hide(),j.action?j.action.apply(j.scope||this,[j,J]):j.href&&(J=j.linkTarget||"_self",Z.open(j.href,J))},getItemById:function(j){return this.getItemByProperty("id",j)},setItemVisible:function(j,J){j=this.getItemById(j);j&&(j.visible=J)},getItemByProperty:function(J,E,j){return(j=j||this._items)&&0!==j.length&&this.$17b(j,function(j){return j[J]===E})||l},scrollUp:function(j,J){var E;0!==(J=L(J=J==l?20:J))&&(E=0,j.$18b>J&&(E=j.$18b-J),this.$42b(j,E),j.scrollTop=E,j.$18b=E)},scrollDown:function(j,J){var E,P,m;0!==(J=L(J=J==l?20:J))&&(m=(E=j.$22b)-(P=j.$23b),P+j.$18b+J<E&&(m=j.$18b+J),this.$42b(j,m),j.scrollTop=m,j.$18b=m)},$42b:function(j,J){J=J==l?j.$18b:J;var E=j.$24b,P=j.$25b;E&&(Y(E,"top",J+U),Y(E,C,0==J?m:"block")),P&&(Y(P,"bottom",-J+U),J==j.$22b-j.$23b?Y(P,C,m):Y(P,C,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(j,J){for(var E=0;E<j.length;E++){var P=j[E];if(J(P))return P;if(P.items){P=this.$17b(P.items,J);if(P)return P}}},$2b:function(j,J){for(var E=this,P=0;P<j.length;P++){E.$5b++;var m,Z,L,I,e,g,c=j[P];!1===c.visible?this._clearItemId(c):S.isFunction(c.visible)&&!1===c.visible()||E.$16b&&!E.$16b.call(E,c)?this._clearItemId(c):(m=H("li"),Z=E.$5b+"",Y(m,"white-space","nowrap"),Y(m,C,"block"),"separator"===c||!0===c.separator?((L=a())[A]="separator",Y(L,K,S.contextMenuSeparatorWidth+U),Y(L,"background",S.contextMenuSeparatorColor),r(m,L)):(c._id=Z,m.setAttribute("data-id",Z),L=H("span"),I=H("span"),g=M(),e=a(),Y(L,C,"inline-block"),Y(L,K,"1.2em"),Y(I,C,"inline-block"),Y(I,K,"1.2em"),Y(I,"line-height","1.2em"),g[A]="prefix",Y(g,C,"inline-block"),Y(g,T,"1em"),Y(g,K,"1em"),Y(g,"vertical-align","middle"),Y(g,$,"0 0.2em"),"check"===c.type&&c.selected?g[A]+=" check-prefix":"radio"===c.type&&c.selected&&(g[A]+=" radio-prefix"),g._item=c,r(m,g),c.icon&&((g=M())[A]="contextmenu-item-icon",Y(g,C,"inline-block"),Y(g,K,"1.2em"),Y(g,T,"1.2em"),Y(g,"margin-right","0.2em"),Y(g,"float","left"),g.$50b=c.icon,g._item=c,r(L,g)),I[k]=c.label,r(L,I),r(m,L),e[A]="suffix",Y(e,C,"inline-block"),Y(e,"margin-left","1em"),Y(e,"margin-right","0.4em"),Y(e,"text-align","right"),Y(e,"font-size","75%"),c.items&&(e[k]=S.contextMenuSubmenuMark),c.suffix&&(e[k]=c.suffix),r(m,e),m[A]="menu-item menu-item"+Z,null!=c.background?c.background instanceof Function?Y(m,"background-color",c.background.call(E,c)):Y(m,"background-color",c.background):Y(m,"background-color",S.contextMenuBackground),Y(m,"color",S.contextMenuLabelColor),Y(m,i,"3px 0"),c.disabled instanceof Function?c.disabled.call(E,c)&&(m[A]+=" disabled",Y(m,"color",S.contextMenuDisabledLabelColor)):c.disabled&&(m[A]+=" disabled",Y(m,"color",S.contextMenuDisabledLabelColor)),c.items&&(E.$21b||(E.$21b=new d.List),(g=H("ul"))[A]="submenu"+Z,g.$45b=Z,Y(g,W,"hidden"),Y(g,b,p),r(E._view,g),E.$21b.add(g),E.$2b(c.items,g))),r(J,m))}},setCurrentMenuItem:function(j){if(this._currentMenuLi=j,this.$19b=l,this.iv(),j){var J=this._items;if(J&&0!==J.length)for(var E=j.getAttribute("data-id"),P=0,m=J.length;P<m;P++)if(E===(j=J[P])._id)return void(this.$19b=j)}},rebuild:function(){var j,J=this,E=J._items,P=J._view;P&&(P[k]="",J.$21b=l,J.$5b=0,J._currentMenuLi=l,J.$19b=l,J.$20b=l,P.$26b=l,E&&0!==E.length&&(j=H("ul",J._r),r(P,j),J.$2b(E,j)))},addTo:function(j){var J,E,P,m,Z;j&&(E=(J=this).$13b,J.$12b=j,J.$9b=function(j){E.$44b(j)},P=J.$6b=function(j){E.$38b(j)},m=J.$7b=function(j){E.$39b(j)},Z=J.$8b=function(j){E.$40b(j)},S.mockTouch&&(u(j,"touchstart",P,!0),u(j,"touchmove",m),u(j,"touchend",Z)),u(j,"mousedown",P,!0),u(j,"mousemove",m),u(j,"mouseup",Z),J.$27b=function(j){E.$41b(j)},u(j,"contextmenu",J.$27b))},showOnView:function(j,J,E){j=j.getView?j.getView():j;var P=S.getWindowInfo(),j=j.getBoundingClientRect();this.show(j.left+P.left+J,j.top+P.top+E)},show:function(j,J,E){var P,m,Z,L,I,e,g,c,H,d=this,E=E==l,K=d._view;K&&(d.invalidate(),1===arguments.length&&(J=D(g=j)?(j=(Z=R(g)).pageX,Z.pageY):(j=g.pageX,g.pageY)),P=(Z=S.getWindowInfo()).width,m=Z.height,H=(Z={pageX:j,pageY:J,clientX:j-(j=Z.left),clientY:J-(J=Z.top),target:1,originEvent:g}).clientX,c=Z.clientY,L=function(j){j.style.height=m-6+U;function J(j){Y(j,b,p),Y(j,"text-align","center"),Y(j,T,"100%"),Y(j,"font-size",10+U),Y(j,"padding","2px 0"),Y(j,"border","0px solid "+S.contextMenuScrollerBorderColor),Y(j,"background-color",S.contextMenuScrollerColor1),j.style.backgroundImage="-webkit-linear-gradient(top, "+S.contextMenuScrollerColor1+", "+S.contextMenuScrollerColor2+")",j.style.backgroundImage="linear-gradient(to bottom, "+S.contextMenuScrollerColor1+", "+S.contextMenuScrollerColor2+")"}var E=a(),P=a();E[A]="menu-arrow-item menu-arrow-item-top",P[A]="menu-arrow-item menu-arrow-item-bottom",J(E),Y(E,"top",N),Y(E,"left",N),Y(E,"border-bottom-width",1+U),E[k]="▲",J(P),Y(P,"bottom",N),Y(P,"left",N),Y(P,"border-top-width",1+U),P[k]="▼",j.$24b=E,j.$25b=P,j.$18b=j.scrollTop,j.$22b=j.scrollHeight,j.$23b=j.clientHeight,r(j,E),r(j,P),d.$42b(j)},d.beforeShow&&d.beforeShow(Z),(I=d._items)&&(g&&g.preventDefault(),I.length&&(d.rebuild(),(K.$26b=O(K,".menu-item")).length&&(S.appendToScreen(K),(g=K.children[0]).offsetHeight>m&&L(g),I=c+(E?1:0),E=H+(E?1:0),(e=function(j){for(var J,E,P,m,Z,L,I=0,e=0,g=0,c=d.$43b;g<j.children.length;g++)(P=j.children[g]).getAttribute("data-id")&&(m=P.children[1],Z=P.children[2],J=m.children,c&&(E=J[0],(E=1<J.length?J[1]:E).offsetWidth>c&&(E[k]="<marquee scrollamount='3'>"+E[k]+"</marquee>",E.children[0].style.verticalAlign="text-bottom",Y(E,T,c+U),Y(E,C,"inline-block"))),I<(J=m.offsetWidth)&&(I=J),e<(E=Z.offsetWidth)&&(e=E));for(g=0;g<j.children.length;g++)(P=j.children[g]).getAttribute("data-id")&&(m=P.children[1],Z=P.children[2],L=m.children[0],!m.children[1]&&L.style.width&&Y(L,T,I+U),Y(m,T,I+U),Y(Z,T,e+U))})(g),g=c+3+K.offsetHeight,c=H+3+K.offsetWidth,Y(K,y,m<g?I-(g-m)+J+U:I+J+U),Y(K,o,P<c?E-(c-P)+j+U:E+j+U),(H=d.$21b)&&H.each(function(j){e(j),j.offsetHeight>m&&L(j)}),d.$9b&&(S.mockTouch&&u(z(),"touchstart",d.$9b,!0),u(z(),"mousedown",d.$9b,!0)),d.afterShow&&d.afterShow(Z),d.$47b()))))},isShowing:function(){return!!this._view&&this._view.parentNode!=l},getRelatedView:function(){return this.$12b},hide:function(){var j=this,J=j._view;J&&J.parentNode&&(J.parentNode.removeChild(J),S.mockTouch&&E(z(),"touchstart",j.$9b,!0),E(z(),"mousedown",j.$9b,!0),j.afterHide&&j.afterHide())},dispose:function(){var j=this,J=j.$12b;j._view&&(this.hide(),j.disableGlobalKey(),J&&(S.mockTouch&&(E(J,"touchstart",j.$6b,!0),E(J,"touchmove",j.$7b),E(J,"touchend",j.$8b)),E(J,"mousedown",j.$6b,!0),E(J,"mousemove",j.$7b),E(J,"mouseup",j.$8b),E(J,"contextmenu",j.$27b)),j._view=j._items=j.$21b=j._currentMenuLi=j.$19b=j.$12b=j.beforeShow=j.afterShow=j.afterHide=j.$9b=j.$3b=j.$6b=j.$7b=j.$8b=j.$27b=l)},$46b:function(j,J,E,P,m){j=c.initContext(j);c.translateAndScale(j,0,0,1),j.clearRect(0,0,E,P),S.drawStretchImage(j,S.getImage(J),"fill",0,0,E,P,m,this),j.restore()},$47b:function(){var j=this._view;if(this.isShowing()){for(var J=O(j,".check-prefix"),E=0;E<J.length;E++){var P=J[E],m=P.clientWidth,Z=P.clientHeight;P.$48b=m,P.$49b=Z,c.setCanvas(P,m,Z)}var L=O(j,".radio-prefix");for(E=0;E<L.length;E++){var I=L[E];m=I.clientWidth,Z=I.clientHeight,I.$48b=m,I.$49b=Z,c.setCanvas(I,m,Z)}var e=O(j,".contextmenu-item-icon");for(E=0;E<e.length;E++){var g=e[E];m=g.clientWidth,Z=g.clientHeight,g.$48b=m,g.$49b=Z,c.setCanvas(g,m,Z)}}},validateImpl:function(){var j=this,J=j._view;if(j.isShowing()){for(var E=O(J,".check-prefix"),P=0;P<E.length;P++){var m=E[P],Z=m.$48b,L=m.$49b;Z&&L&&j.$46b(m,S.contextMenuCheckIcon,Z,L,m._item)}var I=O(J,".radio-prefix");for(P=0;P<I.length;P++){var e=I[P];Z=e.$48b,L=e.$49b,Z&&L&&j.$46b(e,S.contextMenuRadioIcon,Z,L,e._item)}var g=O(J,".contextmenu-item-icon");for(P=0;P<g.length;P++){var c=g[P];Z=c.$48b,L=c.$49b,Z&&L&&j.$46b(c,S.getImage(c.$50b),Z,L,c._item)}}},_clearItemId:function(j){var J=this;delete j._id,j.items&&j.items.forEach(function(j){J._clearItemId(j)})}},S.def(d.widget[J],I,j)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);