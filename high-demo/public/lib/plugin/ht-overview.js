!function(q,o){"use strict";var q=q.ht,K=q.graph,G=q.Default,q=q.Color,U=null,h="px",y=G.getInternal(),$=y.getPinchDist,I=G.preventDefault,s=G.getTouchCount,l=G.startDragging;y.addMethod(G,{overviewBackground:q.widgetBackground,overviewMaskBackground:q.transparent,overviewContentBorderColor:q.widgetBorder,overviewContentBackground:q.background},!0),K.Overview=function(q){var o=this,K=o._view=y.createView(1,o);o._canvas=y.createCanvas(K),K.style.background=G.overviewBackground,K.appendChild(o._mask=y.createDiv()),o.setGraphView(q),o.addListeners()},G.def("ht.graph.Overview",o,{ms_v:1,ms_fire:1,ms_listener:1,ms_ac:["maskBackground","contentBorderColor","contentBackground","autoUpdate","fixToRect"],_autoUpdate:!0,_fixToRect:!1,_rate:1,_scrollRect:{x:0,y:0,width:0,height:0},_maskBackground:G.overviewMaskBackground,_contentBorderColor:G.overviewContentBorderColor,_contentBackground:G.overviewContentBackground,getGraphView:function(){return this.gv},setGraphView:function(q){var o,K=this;K.gv!==q&&(o=K.gv,K.gv=q,o&&(o.removeViewListener(K.handleGraphViewChanged,K),o.ump(K.handleGraphViewPropertyChanged,K)),q&&(q.addViewListener(K.handleGraphViewChanged,K),q.mp(K.handleGraphViewPropertyChanged,K)),K.fp("graphView",o,q),K.redraw())},getCanvas:function(){return this._canvas},getMask:function(){return this._mask},dispose:function(){this.setGraphView(null)},onPropertyChanged:function(q){this.redraw()},handleGraphViewChanged:function(q){this._autoUpdate&&"validate"===q.kind&&this.redraw()},handleGraphViewPropertyChanged:function(q){"canvasBackground"!==q.property&&(!this.getFixToRect()||"zoom"!==q.property&&"translateX"!==q.property&&"translateY"!==q.property)||this.redraw()},redraw:function(){var q=this;q._redraw||(q._redraw=1,q.iv(50))},validateImpl:function(){var q,o,K,Z,$,I,s,l,d,g,B,V,n,e=this,L=e.gv,v=e._canvas,r=e.getWidth(),i=e.getHeight(),M=e._redraw,O=G.devicePixelRatio;L?(q=e._mask.style,o=L.getViewRect(),K=(n=(n=this.getFixToRect())?"boolean"==typeof n?L.getContentRect():n:L.getScrollRect()).x,Z=n.y,$=n.width,I=n.height,s=e._rate=Math.max($/r,I/i),l=e._x=(r-$/s)/2,d=e._y=(i-I/s)/2,0!==o.width&&0!==o.height||e.hasRetry||(G.callLater(e.iv,e,U),e.hasRetry=!0),r===v.clientWidth&&i===v.clientHeight||(y.setCanvas(v,r,i),M=1),y.isSameRect(n,e._scrollRect)||(e._scrollRect=n,M=1),M&&(g=y.initContext(v),B=(n=L.getDataModel()).getBackground()||e._contentBackground,V=e._contentBorderColor,g.clearRect(0,0,r*O,i*O),n=n.getBackground()&&0<n.a("width")&&0<n.a("height"),B&&!n&&y.fillRect(g,l*O,d*O,$/s*O,I/s*O,B),y.translateAndScale(g,-K/s+l,-Z/s+d,1/s),L._42(g),g.restore(),V&&y.drawBorder(g,V,l*O,d*O,$/s*O,I/s*O)),q.background=e._maskBackground,q.left=l+(o.x-K)/s+h,q.top=d+(o.y-Z)/s+h,q.width=o.width/s+h,q.height=o.height/s+h,e._redraw=null):M&&((g=y.initContext(v)).clearRect(0,0,r*O,i*O),g.restore(),e._redraw=null)},center:function(q){var o,K,Z,$,I,s=this,l=s.gv;l&&(o=l._zoom,K=l._29I,Z=s._rate,I=s._scrollRect,q=G.getLogicalPoint(q,s._canvas),$=I.x+(q.x-s._x)*Z,I=I.y+(q.y-s._y)*Z,l.setTranslate((K.width/2-$)*o,(K.height/2-I)*o))},handle_mousedown:function(q){this.handle_touchstart(q)},handleWindowMouseUp:function(q){this.handleWindowTouchEnd(q)},handleWindowMouseMove:function(q){this.handleWindowTouchMove(q)},handle_mousewheel:function(q){this.handleScroll(q,q.wheelDelta)},handle_DOMMouseScroll:function(q){2===q.axis&&this.handleScroll(q,-q.detail)},handleScroll:function(q,o){I(q),this.gv&&(q=this.gv,0<o?q.scrollZoomIn():o<0&&q.scrollZoomOut())},handle_touchstart:function(q){var o,K,Z;I(q),this.gv&&G.isLeftButton(q)&&(K=(o=this).gv,1===(Z=s(q))?G.isDoubleClick(q)&&K.isResettable()?K.reset():(o.center(q),l(o,q)):2===Z&&(o._dist=$(q),l(o,q)))},handleWindowTouchEnd:function(q){delete this._dist},handleWindowTouchMove:function(q){var o,K;this.gv&&(o=this._dist,1===(K=s(q))?this.center(q):2===K&&o!=U&&this.gv.handlePinch(U,$(q),o))}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);