!function(R){"use strict";function $(R,F){return v(R,F).width}function t(R,F){return v(R,F).height}function a(R,F){return y.getEdgeHostPosition(R,F,"source")}function Y(R,F){return y.getEdgeHostPosition(R,F,"target")}function x(R,F){var y=R.s(k),K=R.getEdgeGroup();if(K){var j=0;if(K.eachSiblingEdge(function(R){F.isVisible(R)&&R.s(k)==y&&j++}),1<j)return R.s(b)*(j-1)/2}return 0}function O(y,K){var j=y.s(k),R=y.isLooped();if(!y.getEdgeGroup())return R?y.s(b):0;var c,_=0,M=0,h=0;return y.getEdgeGroup().getSiblings().each(function(R){R.each(function(R){var F;R._40I===y._40I&&R.s(k)==j&&K.isVisible(R)&&(F=R.s(b),h=(c?M+=h/2+F/2:c=R,F),R===y&&(_=M))})}),R?M-_+h:_-M/2}function Q(R,F){return F=F.s("edge.corner.radius"),r.toRoundedCorner(R,F)}function _(R,j,c,F,y){if(F.sort(function(R,F){var y=R.getSourceAgent()===j?R.getTargetAgent():R.getSourceAgent(),K=F.getSourceAgent()===j?F.getTargetAgent():F.getSourceAgent(),y=y.p(),K=K.p();if(c===e||c===E){if(y.y>K.y)return 1;if(y.y<K.y)return-1}else{if(y.x>K.x)return 1;if(y.x<K.x)return-1}return r.sortFunc(R.getId(),F.getId())}),y){for(var K,_,M,h=R.getSourceAgent(),k=R.getTargetAgent(),n=0;n<F.size();n++){var U=F.get(n);U.getSourceAgent()===h&&U.getTargetAgent()===k||U.getTargetAgent()===h&&U.getSourceAgent()===k?(_=_||new P).add(U,0):(_?M=M||new P:K=K||new P).add(U)}F.clear(),K&&F.addAll(K),_&&F.addAll(_),M&&F.addAll(M)}var y=F.indexOf(R),B=F.size(),R=R.s(b);return{side:c,index:y,size:B,offset:-R*(B-1)/2+R*y}}function G(F,R,y,K,j){var c=R.s(k);return _(R,y,K,y.getAgentEdges().toList(function(R){return F.isVisible(R)&&R.s(k)===c}),j)}function c(R,F,y){return F=F.getSourceAgent()===y?F.getTargetAgent():F.getSourceAgent(),y=y instanceof m.Edge?l(R,y):y.p(),F=(R=F instanceof m.Edge?l(R,F):F.p()).x-y.x,R=R.y-y.y,0<F&&Z(R)<=F?E:F<0&&Z(R)<=-F?e:0<R&&Z(F)<=R?p:H}function C(F,R,y){var K=R.s(k),j=c(F,R,y);return _(R,y,j,y.getAgentEdges().toList(function(R){return F.isVisible(R)&&R.s(k)===K&&c(F,R,y)===j}))}function M(R,F,y){var K=F.getSourceAgent()===y,F=K?F.getTargetAgent():F.getSourceAgent(),j=y instanceof m.Edge,c=F instanceof m.Edge,j=j?l(R,y):y.p(),y=c?l(R,F):F.p();return K?j.y>y.y?H:p:j.x<y.x?E:e}function j(F,R,y){var K=R.s(k),j=M(F,R,y);return _(R,y,j,y.getAgentEdges().toList(function(R){return F.isVisible(R)&&R.s(k)===K&&M(F,R,y)===j}),j===E||j===p)}function h(R,F,y){var K=F.getSourceAgent()===y,F=K?F.getTargetAgent():F.getSourceAgent(),j=y instanceof m.Edge,c=F instanceof m.Edge,j=j?l(R,y):y.p(),y=c?l(R,F):F.p();return K?j.x<y.x?E:e:j.y>y.y?H:p}function n(F,R,y){var K=R.s(k),j=h(F,R,y);return _(R,y,j,y.getAgentEdges().toList(function(R){return F.isVisible(R)&&R.s(k)===K&&h(F,R,y)===j}),j===E||j===p)}function K(R,F,y){var K=R.getSourceAgent(),j=R.getTargetAgent(),c=K.getId()>j.getId(),_=c?j:K,K=c?K:j,j=_ instanceof m.Edge,M=K instanceof m.Edge,h=j?l(F,_):_.p(),k=M?l(F,K):K.p(),n=y(F,R,_),y=y(F,R,K),U=(G=R.s(q))||j?0:$(F,_)/2,B=G||M?0:$(F,K)/2,j=G||j?0:t(F,_)/2,_=G||M?0:t(F,K)/2,G=n.offset,M=y.offset,F=n.side,K=y.side,n=new P;return F===H?(n.add({x:h.x+G,y:h.y-j}),n.add({x:h.x+G,y:k.y+M}),K===e?n.add({x:k.x-B,y:k.y+M}):n.add({x:k.x+B,y:k.y+M})):F===p?(n.add({x:h.x+G,y:h.y+j}),n.add({x:h.x+G,y:k.y+M}),K===e?n.add({x:k.x-B,y:k.y+M}):n.add({x:k.x+B,y:k.y+M})):F===e?(n.add({x:h.x-U,y:h.y+G}),n.add({x:k.x+M,y:h.y+G}),K===p?n.add({x:k.x+M,y:k.y+_}):n.add({x:k.x+M,y:k.y-_})):F===E&&(n.add({x:h.x+U,y:h.y+G}),n.add({x:k.x+M,y:h.y+G}),K===p?n.add({x:k.x+M,y:k.y+_}):n.add({x:k.x+M,y:k.y-_})),c&&n.reverse(),Q(n,R)}var m=R.ht,R=Math,I=R.max,A=R.min,Z=R.abs,D=R.atan2,i=(R.cos,R.sin,R.ceil),r=m.Default,y=r.getInternal(),P=m.List,z=y.Mat,v=y.getNodeRect,J=y.intersectionLineRect,o=r.getDistance,R=r.setEdgeType,F=(r.unionRect,r._edgeProtectMethod),U=F.getStraightLinePoints,B=F.getPercentPosition,e="left",E="right",H="top",p="bottom",k="edge.type",b="edge.gap",q="edge.center",N="edge.extend",l=function(R,F){R=R.getDataUI(F),F=U(R);return B(F,50)};y.addMethod(m.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),R("boundary",function(R,F,y,K){K||(F=-F);var K=a(y,R),j=Y(y,R),c=R._40I,R=R._41I,_=c instanceof m.Edge,M=R instanceof m.Edge,h=new z(D(j.y-K.y,j.x-K.x)),k=o(K,j),n=K.x,U=K.y,B=h.tf(0,F),K={x:B.x+n,y:B.y+U},j={x:(B=h.tf(k,F)).x+n,y:B.y+U};return _?K={x:(B=l(y,c)).x,y:B.y}:(h=v(y,c),(B=J(K,j,h))&&(K={x:B[0],y:B[1]})),M?j={x:(B=l(y,R)).x,y:B.y}:(k=v(y,R),(B=J(K,j,k))&&(j={x:B[0],y:B[1]})),{points:new P([K,j])}}),R("ripple",function(R,F,y,K){K||(F=-F);var j=a(y,R),y=Y(y,R),c=o(j,y),_=A(R.s("edge.offset"),c/2),M=R.s("edge.ripple.size"),h=R.s("edge.ripple.length"),k=R.s("edge.ripple.both"),n=R.s(q),U=R.s("edge.ripple.elevation"),B=new P,G=R.s("edge.ripple.straight")?null:new P,I=new z(D(y.y-j.y,y.x-j.x)),O=(K||(U=-U),(c-=2*_)/(M=0<h?i(c/h):M));G&&G.add(1);for(var r=0;r<M;r++)G&&G.add(3),0===r?B.add({x:_+O*r,y:n?0:F}):B.add({x:_+O*r,y:F}),B.add({x:_+O*r+O/2,y:U+F}),k&&(U=-U);for(B.add({x:_+c,y:n?0:F}),r=0;r<B.size();r++){var x=I.tf(B.get(r));x.x+=j.x,x.y+=j.y,B.set(r,x)}return{points:B,segments:G}}),R("h.v",function(R,F,y){F=O(R,y);var K=new P,j=R.s(q),c=a(y,R),_=c.x,c=c.y,M=Y(y,R),h=M.x,M=M.y,k=R._40I instanceof m.Edge,n=R._41I instanceof m.Edge,U=0,B=0,G=h-_,I=M-c;return j||(U=k?0:$(y,R._40I)/2,B=n?0:t(y,R._41I)/2),0<=G&&I<=0?(K.add({x:_+U,y:c+F}),K.add({x:h+F,y:c+F}),K.add({x:h+F,y:M+B})):G<=0&&0<=I?(K.add({x:_-U,y:c+F}),K.add({x:h+F,y:c+F}),K.add({x:h+F,y:M-B})):0<=G&&0<=I?(K.add({x:_+U,y:c+F}),K.add({x:h-F,y:c+F}),K.add({x:h-F,y:M-B})):(K.add({x:_-U,y:c+F}),K.add({x:h-F,y:c+F}),K.add({x:h-F,y:M+B})),Q(K,R)}),R("v.h",function(R,F,y){F=O(R,y);var K=new P,j=R.s(q),c=a(y,R),_=c.x,c=c.y,M=Y(y,R),h=M.x,M=M.y,k=R._40I instanceof m.Edge,n=R._41I instanceof m.Edge,U=0,B=0,G=h-_,I=M-c;return j||(U=n?0:$(y,R._41I)/2,B=k?0:t(y,R._40I)/2),0<=G&&I<=0?(K.add({x:_+F,y:c-B}),K.add({x:_+F,y:M+F}),K.add({x:h-U,y:M+F})):G<=0&&0<=I?(K.add({x:_+F,y:c+B}),K.add({x:_+F,y:M+F}),K.add({x:h+U,y:M+F})):0<=G&&0<=I?(K.add({x:_-F,y:c+B}),K.add({x:_-F,y:M+F}),K.add({x:h-U,y:M+F})):(K.add({x:_-F,y:c-B}),K.add({x:_-F,y:M+F}),K.add({x:h+U,y:M+F})),Q(K,R)}),R("ortho",function(R,F,y){var K=new P,j=R.s(q),c=R.s("edge.ortho"),_=R._40I,M=R._41I,h=a(y,R),k=h.x,h=h.y,n=Y(y,R),U=n.x,n=n.y,B=U-k,G=n-h,I=_ instanceof m.Edge,O=M instanceof m.Edge,r=j||I?0:$(y,_)/2,I=j||I?0:t(y,_)/2,_=j||O?0:$(y,M)/2,j=j||O?0:t(y,M)/2,O=(B-(r+_)*(0<B?1:-1))*c,y=(G-(I+j)*(0<G?1:-1))*c;return Z(B)<Z(G)?0<=B&&G<=0?(K.add({x:k+F,y:h-I}),K.add({x:k+F,y:h+y+F-I}),K.add({x:U+F,y:h+y+F-I}),K.add({x:U+F,y:n+j})):B<=0&&0<=G?(K.add({x:k+F,y:h+I}),K.add({x:k+F,y:h+y+F+I}),K.add({x:U+F,y:h+y+F+I}),K.add({x:U+F,y:n-j})):0<=B&&0<=G?(K.add({x:k+F,y:h+I}),K.add({x:k+F,y:h+y-F+I}),K.add({x:U+F,y:h+y-F+I}),K.add({x:U+F,y:n-j})):(K.add({x:k+F,y:h-I}),K.add({x:k+F,y:h+y-F-I}),K.add({x:U+F,y:h+y-F-I}),K.add({x:U+F,y:n+j})):0<=B&&G<=0?(K.add({x:k+r,y:h+F}),K.add({x:k+O+F+r,y:h+F}),K.add({x:k+O+F+r,y:n+F}),K.add({x:U-_,y:n+F})):B<=0&&0<=G?(K.add({x:k-r,y:h+F}),K.add({x:k+O+F-r,y:h+F}),K.add({x:k+O+F-r,y:n+F}),K.add({x:U+_,y:n+F})):0<=B&&0<=G?(K.add({x:k+r,y:h+F}),K.add({x:k+O-F+r,y:h+F}),K.add({x:k+O-F+r,y:n+F}),K.add({x:U-_,y:n+F})):(K.add({x:k-r,y:h+F}),K.add({x:k+O-F-r,y:h+F}),K.add({x:k+O-F-r,y:n+F}),K.add({x:U+_,y:n+F})),Q(K,R)}),R("flex",function(R,F,y){var K=new P,j=R.s("edge.flex")+x(R,y),c=R.s(q),_=R._40I,M=R._41I,h=a(y,R),k=h.x,h=h.y,n=Y(y,R),U=n.x,n=n.y,B=_ instanceof m.Edge,G=M instanceof m.Edge,I=U-k,O=n-h,r=c||B?0:$(y,_)/2,B=c||B?0:t(y,_)/2,_=c||G?0:$(y,M)/2,c=c||G?0:t(y,M)/2,G=0<I?j:-j,y=0<O?j:-j;return Z(I)<Z(O)?0<=I&&O<=0?(K.add({x:k+F,y:h-B}),K.add({x:k+F,y:h+y+F-B}),K.add({x:U+F,y:n-y+F+c}),K.add({x:U+F,y:n+c})):I<=0&&0<=O?(K.add({x:k+F,y:h+B}),K.add({x:k+F,y:h+y+F+B}),K.add({x:U+F,y:n-y+F-c}),K.add({x:U+F,y:n-c})):0<=I&&0<=O?(K.add({x:k+F,y:h+B}),K.add({x:k+F,y:h+y-F+B}),K.add({x:U+F,y:n-y-F-c}),K.add({x:U+F,y:n-c})):(K.add({x:k+F,y:h-B}),K.add({x:k+F,y:h+y-F-B}),K.add({x:U+F,y:n-y-F+c}),K.add({x:U+F,y:n+c})):0<=I&&O<=0?(K.add({x:k+r,y:h+F}),K.add({x:k+G+F+r,y:h+F}),K.add({x:U-G+F-_,y:n+F}),K.add({x:U-_,y:n+F})):I<=0&&0<=O?(K.add({x:k-r,y:h+F}),K.add({x:k+G+F-r,y:h+F}),K.add({x:U-G+F+_,y:n+F}),K.add({x:U+_,y:n+F})):0<=I&&0<=O?(K.add({x:k+r,y:h+F}),K.add({x:k+G-F+r,y:h+F}),K.add({x:U-G-F-_,y:n+F}),K.add({x:U-_,y:n+F})):(K.add({x:k-r,y:h+F}),K.add({x:k+G-F-r,y:h+F}),K.add({x:U-G-F+_,y:n+F}),K.add({x:U+_,y:n+F})),Q(K,R)}),R("extend.east",function(R,F,y){var K=new P,j=R.s(N)+x(R,y),c=R.s(q),_=a(y,R),M=R._40I instanceof m.Edge,h=R._41I instanceof m.Edge,M=_.x+(c||M?0:$(y,R._40I)/2),_=_.y,k=Y(y,R),c=k.x+(c||h?0:$(y,R._41I)/2),h=k.y,y=I(M,c)+j;return h<_?(K.add({x:M,y:_+F}),K.add({x:y+F,y:_+F}),K.add({x:y+F,y:h-F}),K.add({x:c,y:h-F})):(K.add({x:M,y:_-F}),K.add({x:y+F,y:_-F}),K.add({x:y+F,y:h+F}),K.add({x:c,y:h+F})),Q(K,R)}),R("extend.west",function(R,F,y){var K=new P,j=R.s(N)+x(R,y),c=R.s(q),_=R._40I instanceof m.Edge,M=R._41I instanceof m.Edge,h=a(y,R),_=h.x-(c||_?0:$(y,R._40I)/2),h=h.y,k=Y(y,R),c=k.x-(c||M?0:$(y,R._41I)/2),M=k.y,y=A(_,c)-j;return M<h?(K.add({x:_,y:h+F}),K.add({x:y-F,y:h+F}),K.add({x:y-F,y:M-F}),K.add({x:c,y:M-F})):(K.add({x:_,y:h-F}),K.add({x:y-F,y:h-F}),K.add({x:y-F,y:M+F}),K.add({x:c,y:M+F})),Q(K,R)}),R("extend.north",function(R,F,y){var K=new P,j=R.s(N)+x(R,y),c=R.s(q),_=R._40I instanceof m.Edge,M=R._41I instanceof m.Edge,h=a(y,R),k=h.x,h=h.y-(c||_?0:t(y,R._40I)/2),_=Y(y,R),n=_.x,_=_.y-(c||M?0:t(y,R._41I)/2),c=A(h,_)-j;return n<k?(K.add({y:h,x:k+F}),K.add({y:c-F,x:k+F}),K.add({y:c-F,x:n-F}),K.add({y:_,x:n-F})):(K.add({y:h,x:k-F}),K.add({y:c-F,x:k-F}),K.add({y:c-F,x:n+F}),K.add({y:_,x:n+F})),Q(K,R)}),R("extend.south",function(R,F,y){var K=new P,j=R.s(N)+x(R,y),c=R.s(q),_=R._40I instanceof m.Edge,M=R._41I instanceof m.Edge,h=a(y,R),k=h.x,h=h.y+(c||_?0:t(y,R._40I)/2),_=Y(y,R),n=_.x,_=_.y+(c||M?0:t(y,R._41I)/2),c=I(h,_)+j;return n<k?(K.add({y:h,x:k+F}),K.add({y:c+F,x:k+F}),K.add({y:c+F,x:n-F}),K.add({y:_,x:n-F})):(K.add({y:h,x:k-F}),K.add({y:c+F,x:k-F}),K.add({y:c+F,x:n+F}),K.add({y:_,x:n+F})),Q(K,R)});R("ortho2",function(R,F,y,K){var j,c,_=R.s(q),M=R.s("edge.ortho"),h=R.getSourceAgent(),k=R.getTargetAgent(),n=h.getId()>k.getId(),U=n?k:h,h=n?h:k,k=U instanceof m.Edge,B=h instanceof m.Edge,G=k?l(y,U):U.p(),I=B?l(y,h):h.p(),O=C(y,R,U),r=C(y,R,h),x=_||k?0:$(y,U)/2,k=_||k?0:t(y,U)/2,U=_||B?0:$(y,h)/2,_=_||B?0:t(y,h)/2,B=new P,y=O.offset,h=r.offset,r=O.side;return r===E?(j=I.y>G.y?-y:y,c=G.x+x+(I.x-U-G.x-x)*M,B.add({x:G.x+x,y:G.y+y}),B.add({x:c+j,y:G.y+y}),B.add({x:c+j,y:I.y+h}),B.add({x:I.x-U,y:I.y+h})):r===e?(j=I.y>G.y?-y:y,c=G.x-x-(G.x-x-I.x-U)*M,B.add({x:G.x-x,y:G.y+y}),B.add({x:c-j,y:G.y+y}),B.add({x:c-j,y:I.y+h}),B.add({x:I.x+U,y:I.y+h})):r===p?(j=I.x>G.x?-y:y,c=G.y+k+(I.y-_-G.y-k)*M,B.add({x:G.x+y,y:G.y+k}),B.add({x:G.x+y,y:c+j}),B.add({x:I.x+h,y:c+j}),B.add({x:I.x+h,y:I.y-_})):r===H&&(j=I.x>G.x?-y:y,c=G.y-k-(G.y-k-I.y-_)*M,B.add({x:G.x+y,y:G.y-k}),B.add({x:G.x+y,y:c-j}),B.add({x:I.x+h,y:c-j}),B.add({x:I.x+h,y:I.y+_})),n&&B.reverse(),Q(B,R)},!0),R("flex2",function(R,F,y,K){var j,c=R.getSourceAgent(),_=R.getTargetAgent(),M=c.getId()>_.getId(),h=M?_:c,c=M?c:_,_=h instanceof m.Edge,k=c instanceof m.Edge,n=_?l(y,h):h.p(),U=k?l(y,c):c.p(),B=C(y,R,h),G=C(y,R,c),I=R.s(q),O=R.s("edge.flex")+(B.size-1)/2*R.s(b),r=I||_?0:$(y,h)/2,_=I||_?0:t(y,h)/2,h=I||k?0:$(y,c)/2,I=I||k?0:t(y,c)/2,k=new P,y=B.offset,c=G.offset,G=B.side;return G===E?(j=U.y>n.y?-y:y,k.add({x:n.x+r,y:n.y+y}),k.add({x:n.x+r+O+j,y:n.y+y}),k.add({x:U.x-h-O+j,y:U.y+c}),k.add({x:U.x-h,y:U.y+c})):G===e?(j=U.y>n.y?-y:y,k.add({x:n.x-r,y:n.y+y}),k.add({x:n.x-r-O-j,y:n.y+y}),k.add({x:U.x+h+O-j,y:U.y+c}),k.add({x:U.x+h,y:U.y+c})):G===p?(j=U.x>n.x?-y:y,k.add({x:n.x+y,y:n.y+_}),k.add({x:n.x+y,y:n.y+_+O+j}),k.add({x:U.x+c,y:U.y-I-O+j}),k.add({x:U.x+c,y:U.y-I})):G===H&&(j=U.x>n.x?-y:y,k.add({x:n.x+y,y:n.y-_}),k.add({x:n.x+y,y:n.y-_-O-j}),k.add({x:U.x+c,y:U.y+I+O-j}),k.add({x:U.x+c,y:U.y+I})),M&&k.reverse(),Q(k,R)},!0),R("extend.north2",function(R,F,y){var K=R.getSourceAgent(),j=R.getTargetAgent(),c=K.getId()>j.getId(),_=c?j:K,K=c?K:j,j=_ instanceof m.Edge,M=K instanceof m.Edge,h=j?l(y,_):_.p(),k=M?l(y,K):K.p(),n=G(y,R,_,H),U=G(y,R,K,H,!0),B=R.s(q),j=B||j?0:t(y,_)/2,_=B||M?0:t(y,K)/2,B=n.offset,M=U.offset,y=R.s(N)+(n.size-1)/2*R.s(b),K=A(h.y-j,k.y-_)-y+(h.x<k.x?B:-B),U=new P;return U.add({x:h.x+B,y:h.y-j}),U.add({x:h.x+B,y:K}),U.add({x:k.x+M,y:K}),U.add({x:k.x+M,y:k.y-_}),c&&U.reverse(),Q(U,R)},!0),R("extend.south2",function(R,F,y){var K=R.getSourceAgent(),j=R.getTargetAgent(),c=K.getId()>j.getId(),_=c?j:K,K=c?K:j,j=_ instanceof m.Edge,M=K instanceof m.Edge,h=j?l(y,_):_.p(),k=M?l(y,K):K.p(),n=G(y,R,_,p),U=G(y,R,K,p,!0),B=R.s(q),j=B||j?0:t(y,_)/2,_=B||M?0:t(y,K)/2,B=n.offset,M=U.offset,y=R.s(N)+(n.size-1)/2*R.s(b),K=I(h.y+j,k.y+_)+y+(h.x>k.x?B:-B),U=new P;return U.add({x:h.x+B,y:h.y+j}),U.add({x:h.x+B,y:K}),U.add({x:k.x+M,y:K}),U.add({x:k.x+M,y:k.y+_}),c&&U.reverse(),Q(U,R)},!0),R("extend.west2",function(R,F,y){var K=R.getSourceAgent(),j=R.getTargetAgent(),c=K.getId()>j.getId(),_=c?j:K,K=c?K:j,j=_ instanceof m.Edge,M=K instanceof m.Edge,h=j?l(y,_):_.p(),k=M?l(y,K):K.p(),n=G(y,R,_,H),U=G(y,R,K,H,!0),B=R.s(q),j=B||j?0:$(y,_)/2,_=B||M?0:$(y,K)/2,B=n.offset,M=U.offset,y=R.s(N)+(n.size-1)/2*R.s(b),K=A(h.x-j,k.x-_)-y+(h.y<k.y?B:-B),U=new P;return U.add({x:h.x-j,y:h.y+B}),U.add({x:K,y:h.y+B}),U.add({x:K,y:k.y+M}),U.add({x:k.x-_,y:k.y+M}),c&&U.reverse(),Q(U,R)},!0),R("extend.east2",function(R,F,y){var K=R.getSourceAgent(),j=R.getTargetAgent(),c=K.getId()>j.getId(),_=c?j:K,K=c?K:j,j=_ instanceof m.Edge,M=K instanceof m.Edge,h=j?l(y,_):_.p(),k=M?l(y,K):K.p(),n=G(y,R,_,H),U=G(y,R,K,H,!0),B=R.s(q),j=B||j?0:$(y,_)/2,_=B||M?0:$(y,K)/2,B=n.offset,M=U.offset,y=R.s(N)+(n.size-1)/2*R.s(b),K=I(h.x+j,k.x+_)+y+(h.y>k.y?B:-B),U=new P;return U.add({x:h.x+j,y:h.y+B}),U.add({x:K,y:h.y+B}),U.add({x:K,y:k.y+M}),U.add({x:k.x+_,y:k.y+M}),c&&U.reverse(),Q(U,R)},!0),R("v.h2",function(R,F,y){return K(R,y,j)},!0),R("h.v2",function(R,F,y){return K(R,y,n)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);