!function(T,t,zQ){"use strict";var iQ,LQ,qQ,QQ,X,PQ=T.ht,rQ=null,_=Math,yQ=_.abs,lQ=_.max,oQ=Number.MAX_VALUE,jQ=PQ.Default,KQ=jQ.getInternal(),b=jQ.clone,W=KQ.vec3TransformMat4,J=[0,0],m=KQ.appendArray,I=(iQ=/v( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,LQ=/vt( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,qQ=/vn( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,QQ=/^[og]\s*(.+)?/,X=function(t,_){return 0<=(_=parseInt(_))?t[_-1]:t[_+t.length]},function(t,X,W){if(!t)return rQ;(KQ.isString(X)||X instanceof ArrayBuffer)&&(X=BQ(X)),(W=W||{}).flipY==rQ&&(W.flipY=!0),(W.s3||W.r3||W.t3||W.mat)&&(W.matrix=KQ.createWorldMatrix(W.mat,W.s3,W.r3,W.rotationMode,W.t3));var _,G,A,V,v,T,b,J,m,I,M,n=PQ.Style["wf.loadQuadWireframe"],w=[],Y=[],F=W.ignoreNormal?rQ:[],g=W.reverseFlipMtls,x={htdefault:H={vs:[],uv:[],ns:F?[]:rQ}},E=new ZQ(t),S="",p="";for(F&&W.matrix&&(W.normalMatrix=KQ.createNormalMatrix(W.matrix));null!=(_=E.stepNext());)if(0!==(_=_.trim()).length&&"#"!==_.charAt(0))if(_.indexOf("\\")===_.length-1)S+=_.substring(0,_.length-1);else if(S&&(_=S+_,S=""),0<=_.indexOf("#QNAN0")&&(_=_.replace(/#QNAN0/gi,"0")),G=iQ.exec(_))w.push([parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])]);else if(G=LQ.exec(_))Y.push([parseFloat(G[1]),parseFloat(G[2])]);else if(F&&(G=qQ.exec(_)))W.flipFace?F.push([parseFloat(-G[1]),parseFloat(-G[2]),parseFloat(-G[3])]):F.push([parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])]);else if("f"===_[0]){var k=_.split(/\s+/);if(!(k.length<4)){var C,u,h,z=[],i=[],L=[];for(u=1,h=k.length;u<h;u++)C=k[u].split("/"),z.push(parseInt(C[0],10)),1<C.length&&0<C[1].length&&L.push(parseInt(C[1],10)),2<C.length&&0<C[2].length&&i.push(parseInt(C[2],10));for(u=0,h=z.length-2;u<h;u++)A=H,V=w,v=Y,T=F,b=W,J=[z[0],z[u+1],z[u+2]],m=L.length?[L[0],L[u+1],L[u+2]]:rQ,I=i.length?[i[0],i[u+1],i[u+2]]:rQ,M=void 0,M=T&&T.length&&I,J[3]===zQ?(sQ(A,V,b,J[0],J[1],J[2]),m?eQ(A,v,b,m[0],m[1],m[2]):A.uv&&A.uv.length&&eQ(A,v,b),M&&$Q(A,T,b,I[0],I[1],I[2])):(sQ(A,V,b,J[0],J[1],J[3]),sQ(A,V,b,J[1],J[2],J[3]),m?(eQ(A,v,b,m[0],m[1],m[3]),eQ(A,v,b,m[1],m[2],m[3])):A.uv&&A.uv.length&&(eQ(A,v,b),eQ(A,v,b)),M&&($Q(A,T,b,I[0],I[1],I[3]),$Q(A,T,b,I[1],I[2],I[3])));if(n){Q=U=void 0;for(var c=H,d=w,f=W,q=z,U=q.length-1,Q=0;Q<U;++Q)OQ(c,d,f,q[Q],q[Q+1]);OQ(c,d,f,q[U],q[0])}}}else W.part&&null!==(G=QQ.exec(_))?p=(" "+G[0].substr(1).trim()).substr(1):/^usemtl /.test(_)&&_.substring(7).trim().split(" ").forEach(function(t){var _=W.part?p+"_"+t:t;if(!(H=x[_])){H=x[_]={name:_,vs:[],uv:[],ns:F?[]:rQ,lvs:n?[]:rQ},W.ignoreMtls&&0<=W.ignoreMtls.indexOf(t)&&delete H.vs,(W.reverseFlip||"*"===g||g&&0<=g.indexOf(t))&&(H.reverseFlip=!0);var _=X,G=H,A=W;if(_){_=_[t];if(_)if(A.ignoreColor||(G.color=_.kd),!A.ignoreTransparent&&0<_.d&&_.d<1&&(G.transparent=!0,G.opacity=_.d),!A.ignoreImage&&(v=_.map_kd)){for(var v=v.split(" "),T=-1,b=0;b<v.length;b++)"-o"===v[b]?(G.uvOffset=[parseFloat(v[b+1]),parseFloat(v[b+2])],T=b+=3):"-s"===v[b]&&(G.uvScale=[parseFloat(v[b+1]),parseFloat(v[b+2])],T=b+=3);G.image=(A.prefix||"")+v.splice(T+1).join(" ")}}}});var N,a=[];for(N in x){var R=x[N].vs;if(R&&0!==R.length){var tQ=x[N].uv;if(tQ)for(var _Q=2*R.length/3-tQ.length;0<_Q--;)tQ.push(0)}else a.push(N)}a.forEach(function(t){delete x[t]});var P,GQ,AQ,vQ,r,y,TQ,l,o,j,K=x,bQ=W.cube,t=W.center,XQ=W,O=oQ,s=oQ,e=oQ,$=-oQ,WQ=-oQ,JQ=-oQ;for(P in K)for(B=(r=K[P].vs).length,D=0;D<B;D+=3)(GQ=r[D+0])<O&&(O=GQ),(AQ=r[D+1])<s&&(s=AQ),(vQ=r[D+2])<e&&(e=vQ),$<GQ&&($=GQ),WQ<AQ&&(WQ=AQ),JQ<vQ&&(JQ=vQ);if(t){var mQ=O+($-O)/2,IQ=s+(WQ-s)/2,FQ=e+(JQ-e)/2;for(P in K){for(B=(r=K[P].vs).length,D=0;D<B;D+=3)r[D+0]-=mQ,r[D+1]-=IQ,r[D+2]-=FQ;if(y=K[P].lvs)for(B=y.length,D=0;D<B;D+=3)y[D+0]-=mQ,y[D+1]-=IQ,y[D+2]-=FQ}TQ=[mQ,IQ,FQ]}for(P in j=t?(l=$-O,o=WQ-s,JQ-e):(l=2*lQ(yQ(O),yQ($)),o=2*lQ(yQ(s),yQ(WQ)),2*lQ(yQ(e),yQ(JQ))),0===l&&(l=Math.min(o,j)/1e3||.001),0===o&&(o=Math.min(l,j)/1e3||.001),0===j&&(j=Math.min(l,o)/1e3||.001),XQ.rawS3=[l,o,j],K){if(r=K[P].vs,y=K[P].lvs,bQ){for(B=r.length,D=0;D<B;D+=3)l&&(r[D+0]/=l),o&&(r[D+1]/=o),j&&(r[D+2]/=j);if(y)for(B=y.length,D=0;D<B;D+=3)l&&(y[D+0]/=l),o&&(y[D+1]/=o),j&&(y[D+2]/=j);var Z=K[P].ns;if(Z)for(var B=Z.length,xQ=new PQ.Math.Vector3,D=0;D<B;D+=3)xQ.set(Z[D+0]*l,Z[D+1]*o,Z[D+2]*j).normalize(),Z[D+0]=xQ.x,Z[D+1]=xQ.y,Z[D+2]=xQ.z}K[P].rawS3=XQ.rawS3,TQ&&(K[P].center=TQ)}t=W.shape3d;if(t){var CQ,uQ=[];for(CQ in x){var H=x[CQ];uQ.rawS3=H.rawS3,H.center&&(uQ.center=H.center),uQ.push(H)}jQ.setShape3dModel(t,uQ)}return x}),BQ=function(t){var _={};if(t)for(var G,A,v,T,b=new ZQ(t),X=/\s+/;null!=(v=b.stepNext());)0!==(v=v.trim()).length&&"#"!==v.charAt(0)&&(A=((T=v.indexOf(" "))?v.substring(0,T):v).toLowerCase(),v=(T?v.substring(T+1):"").trim(),"newmtl"===A?_[v]=G={name:v}:G&&("ka"===A||"kd"===A||"ks"===A?(T=v.split(X,3),G[A]=[parseFloat(T[0]),parseFloat(T[1]),parseFloat(T[2]),1]):G[A]="ns"===A||"d"===A?parseFloat(v):v));return _};function OQ(t,_,G,A,v){t.lvs&&(A=X(_,A),_=X(_,v),v=G.matrix,G=t.lvs,v?(m(G,W(b(A),v)),m(G,W(b(_),v))):(m(G,A),m(G,_)))}function sQ(t,_,G,A,v,T){t.vs&&(A=X(_,A),v=X(_,v),_=X(_,T),T=G.matrix,t=t.vs,G.flipFace&&(G=v,v=_,_=G),T?(m(t,W(b(A),T)),m(t,W(b(v),T)),m(t,W(b(_),T))):(m(t,A),m(t,v),m(t,_)))}function eQ(t,_,G,A,v,T){var b;t.vs&&(b=G.flipY,A=A===zQ?J:X(_,A),v=v===zQ?J:X(_,v),_=T===zQ?J:X(_,T),G.flipFace&&(T=v,v=_,_=T),t.uv.push(A[0],b?1-A[1]:A[1],v[0],b?1-v[1]:v[1],_[0],b?1-_[1]:_[1]))}function $Q(t,_,G,A,v,T){t.vs&&(A=X(_,A),v=X(_,v),_=X(_,T),T=G.normalMatrix,t=t.ns,G.flipFace&&(G=v,v=_,_=G),T?(m(t,W(b(A),T)),m(t,W(b(v),T)),m(t,W(b(_),T))):(m(t,A),m(t,v),m(t,_)))}var ZQ=function(t){var A,v,T,_,G,b;t instanceof ArrayBuffer?(this.isBuffer=!0,A=0,v=new Uint8Array(t),T=v.length,b=v.length,this.stepNext=function(){for(var t,_,G=A;A<T;)if(12==(_=(t=v[A])>>4)||13==_)A+=2;else if(14==_)A+=3;else if(A++,10===t)return String.fromCharCode.apply(null,v.subarray(G,A));return G<A?String.fromCharCode.apply(null,v.subarray(G,A)):null}):(this.isBuffer=!1,_=t.split("\n"),G=0,b=_.length,this.stepNext=function(){return G<b?_[G++]:null})},F=(ZQ.prototype={},ZQ.prototype.constructor=ZQ,KQ.addMethod(jQ,{loadObj:function(t,_,b){b=b||{};function G(t){var _,G=b.finishFunc,A=b.shape3d,v=t?I(t[0],t[1],b):null;if(v){if(A)_=jQ.getShape3dModel(A);else for(var T in _=[],v){T=v[T];_.rawS3=T.rawS3,_.push(T)}G&&G(v,_,_.rawS3)}else G&&G(null)}var A,v=!1;/(MSIE |Trident\/|Edge\/)/.test(T.navigator.userAgent)&&(v=!0);v?(b.responseType="arraybuffer",A=function(_){jQ.xhrLoad(t,function(t){G([t,_])},b)},_?jQ.xhrLoad(_,function(t){A(t)},b):A()):jQ.xhrLoad(_?[t,_]:[t],G,b)},parseObj:function(t,_,G){return I(t,_,G)}}),PQ.ByteBuffer=function(t,_,G){if(void 0===t&&(t=F.DEFAULT_CAPACITY),void 0===_&&(_=F.DEFAULT_ENDIAN),!(G=void 0===G?F.DEFAULT_NOASSERT:G)){if((t|=0)<0)throw RangeError("Illegal capacity");_=!!_,G=!!G}this.buffer=0===t?v:new ArrayBuffer(t),this.view=0===t?null:new Uint8Array(this.buffer),this.offset=0,this.markedOffset=-1,this.limit=t,this.littleEndian=_,this.noAssert=G,this.bufferId=0}),v=new ArrayBuffer(0);function x(){var t=[],_=[];return function(){if(0===arguments.length)return _.join("")+G.apply(String,t);1024<t.length+arguments.length&&(_.push(G.apply(String,t)),t.length=0),Array.prototype.push.apply(t,arguments)}}t.defineProperties(F.prototype,{offset:{get:function(){return this._offset},set:function(t){(this._offset=t)&&t>=this.limit&&this.trySwitchNextBuffer()}}}),F.LITTLE_ENDIAN=!0,F.BIG_ENDIAN=!1,F.DEFAULT_CAPACITY=16,F.DEFAULT_ENDIAN=F.BIG_ENDIAN,F.DEFAULT_NOASSERT=!1,F.METRICS_BYTES="b";var G=String.fromCharCode,_=F.prototype;_.trySwitchNextBuffer=function(){var t=this.buffers[++this.bufferId];t&&(this.buffer=t,this.limit=t.byteLength,this.offset=0,this.view=0<t.byteLength?new Uint8Array(t):null)},_.readUint8=function(t){var _=void 0===t;if(_&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}t=this.view[t];return _&&(this.offset+=1),t},_.readUint16=function(t){var _=void 0===t;if(_&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+2) <= "+this.buffer.byteLength)}var G=0;return this.littleEndian?(G=this.view[t],G|=this.view[t+1]<<8):(G=this.view[t]<<8,G|=this.view[t+1]),_&&(this.offset+=2),G},_.readUint24=function(t){var _=void 0===t;if(_&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+3>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}var G=0,G=this.littleEndian?(G=this.view[t+2]<<16,(G|=this.view[t+1]<<8)|this.view[t]):(G=this.view[t+1]<<8,(G|=this.view[t+2])+(this.view[t]<<16>>>0));return G|=0,_&&(this.offset+=3),G},_.readUint32=function(t){var _=void 0===t;if(_&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}var G=0,G=this.littleEndian?(G=this.view[t+2]<<16,(G=(G|=this.view[t+1]<<8)|this.view[t])+(this.view[t+3]<<24>>>0)):(G=this.view[t+1]<<16,(G=(G|=this.view[t+2]<<8)|this.view[t+3])+(this.view[t]<<24>>>0));return _&&(this.offset+=4),G},_.readFloat32=function(t){var _=void 0===t;if(_&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}t=function(t,_,G,A,v){var T,b,X=8*v-A-1,W=(1<<X)-1,J=W>>1,m=-7,I=G?v-1:0,F=G?-1:1,v=t[_+I];for(I+=F,T=v&(1<<-m)-1,v>>=-m,m+=X;0<m;T=256*T+t[_+I],I+=F,m-=8);for(b=T&(1<<-m)-1,T>>=-m,m+=A;0<m;b=256*b+t[_+I],I+=F,m-=8);if(0===T)T=1-J;else{if(T===W)return b?NaN:1/0*(v?-1:1);b+=Math.pow(2,A),T-=J}return(v?-1:1)*b*Math.pow(2,T-A)}(this.view,t,this.littleEndian,23,4);return _&&(this.offset+=4),t};function C(t){if(t.length){for(var _=0;_<t.length;_++)if(!t[_])return;var G=t[0],A=new F(0),G=(A.buffer=G,A.limit=G.byteLength,A.view=0<G.byteLength?new Uint8Array(G):null,A.buffers=t,[]),v=A.readUint8(10);return L(G,A),P(G,A),y(G,A,v),G}}function q(t){var _=t.readUint16(),G=(16383&_)/16383,A=0;return(16384&_?1:-1)*((A=32768&_?t.readUint16():A)+G)}var A,u=A={MAX_CODEPOINT:1114111,decodeUTF8:function(t,_){for(var G,A,v,T,b=function(t){t=t.slice(0,t.indexOf(null));var _=Error(t.toString());throw _.name="TruncatedError",_.bytes=t,_};null!==(G=t());)if(0==(128&G))_(G);else if(192==(224&G))null===(A=t())&&b([G,A]),_((31&G)<<6|63&A);else if(224==(240&G))null!==(A=t())&&null!==(v=t())||b([G,A,v]),_((15&G)<<12|(63&A)<<6|63&v);else{if(240!=(248&G))throw RangeError("Illegal starting byte: "+G);null!==(A=t())&&null!==(v=t())&&null!==(T=t())||b([G,A,v,T]),_((7&G)<<18|(63&A)<<12|(63&v)<<6|63&T)}},UTF16toUTF8:function(t,_){for(var G,A=null;null!==(G=null!==A?A:t());)55296<=G&&G<=57343&&null!==(A=t())&&56320<=A&&A<=57343?(_(1024*(G-55296)+A-56320+65536),A=null):_(G);null!==A&&_(A)},UTF8toUTF16:function(t,_){var G=null;for("number"==typeof t&&(G=t,t=function(){return null});null!==G||null!==(G=t());)G<=65535?_(G):(_(55296+((G-=65536)>>10)),_(G%1024+56320)),G=null},decodeUTF8toUTF16:function(t,_){A.decodeUTF8(t,function(t){A.UTF8toUTF16(t,_)})},calculateCodePoint:function(t){return t<128?1:t<2048?2:t<65536?3:4},calculateUTF8:function(t){for(var _,G=0;null!==(_=t());)G+=_<128?1:_<2048?2:_<65536?3:4;return G},calculateUTF16asUTF8:function(t){var _=0,G=0;return A.UTF16toUTF8(t,function(t){++_,G+=t<128?1:t<2048?2:t<65536?3:4}),[_,G]}},L=(_.readString=function(t,_,G){"number"==typeof _&&(G=_,_=zQ);var A=void 0===G;if(A&&(G=this.offset),void 0===_&&(_=F.METRICS_CHARS),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal length: "+t+" (not an integer)");if(t|=0,"number"!=typeof G||G%1!=0)throw TypeError("Illegal offset: "+G+" (not an integer)");if((G>>>=0)<0||G+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+G+" (+0) <= "+this.buffer.byteLength)}var v,T=0,b=G;if(_===F.METRICS_CHARS){if(v=x(),u.decodeUTF8(function(){return T<t&&G<this.limit?this.view[G++]:null}.bind(this),function(t){++T,u.UTF8toUTF16(t,v)}),T!==t)throw RangeError("Illegal range: Truncated data, "+T+" == "+t);return A?(this.offset=G,v()):{string:v(),length:G-b}}if(_!==F.METRICS_BYTES)throw TypeError("Unsupported metrics: "+_);if(!this.noAssert){if("number"!=typeof G||G%1!=0)throw TypeError("Illegal offset: "+G+" (not an integer)");if((G>>>=0)<0||G+t>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+G+" (+"+t+") <= "+this.buffer.byteLength)}var X=G+t;if(u.decodeUTF8toUTF16(function(){return G<X?this.view[G++]:null}.bind(this),v=x(),this.noAssert),G!==X)throw RangeError("Illegal range: Truncated data, "+G+" == "+X);return A?(this.offset=G,v()):{string:v(),length:G-b}},function(t,_){_.offset+=19}),P=function(t,_){var G=_.readUint8();1&G&&(t.center=Q(_)),2&G&&(t.rawS3=Q(_))},r=function(t){return[t.readFloat32(),t.readFloat32()]},Q=function(t){return[t.readFloat32(),t.readFloat32(),t.readFloat32()]},z=function(t){var _=t.readUint32();return t.readString(_,F.METRICS_BYTES)},y=function(t,_,G){for(var A=((G||0)<<8)+_.readUint8(),v=0;v<A;v++)t.push(function(t){var _={},G=t.readUint32(),A=0,v=G&1<<A++,T=G&1<<A++,b=G&1<<A++,X=G&1<<A++,W=G&1<<A++,J=G&1<<A++,m=G&1<<A++,I=G&1<<A++,F=G&1<<A++,x=G&1<<A++,C=G&1<<A++,u=G&1<<A++;if(v||T)i(_,t,3,"vs","lvs");if(b)i(_,t,2,"uv");if(X)i(_,t,3,"ns");if(W)_.name=z(t);if(J)_.color=Q(t);if(m)_.transparent=!!t.readUint8();if(I)_.opacity=t.readFloat32();if(F)_.uvoffset=r(t);if(x)_.uvScale=Q(t);if(C)_.image=z(t);if(u)_.reverseFlip=!!t.readUint8();return _}(_))},i=function(t,_,G,A,v){var T,b,X,W,J,m,I,F,x,C=_.readUint32(),u=(_.readUint8(),_.readUint32()),z=_.readUint32(),i=[];if("uv"===A)for(L=0;L<C;L++)T=q(_),b=q(_),i.push([T,b]);else if("ns"===A)for(L=0;L<C;L++)i.push((m=J=W=void 0,X=(X=_).readUint32(),W=X&1<<28,[(J=(X>>14&16383)/16383)*(X&1<<30?1:-1),(m=(16383&X)/16383)*(X&1<<29?1:-1),(Math.sqrt(1-J*J-m*m)||0)*(W?1:-1)]));else for(var L=0;L<C;L++)i.push(Q(_));if(I=C<256?"readUint8":C<65536?"readUint16":C<16777216?"readUint24":"readUint32",u)for(F=t[A]=[],L=0;L<u;L++)x=i[_[I]()],"uv"===A?F.push(x[0],x[1]):F.push(x[0],x[1],x[2]);if(z)for(F=t[v]=[],L=0;L<z;L++)x=i[_[I]()],F.push(x[0],x[1],x[2])};jQ.getInternal().addMethod(jQ,{loadBin:function(b,X){function W(t){var _,G=X.finishFunc,A=X.shape3d,v=C(t);if(v){if(A)_=jQ.getShape3dModel(A);else for(var T in _=[],v){T=v[T];_.rawS3=T.rawS3,_.push(T)}G&&G(v,_,_.rawS3)}else G&&G(null)}(X=X||{}).responseType="arraybuffer",jQ.xhrLoad(b,function(t){var _=t,t=X.finishFunc;if(_){if(_.byteLength<50){var G=new Uint8Array(_)[9];if(1<G){for(var A=[],v=b.substr(0,b.length-4),T=1;T<G;T++)A.push(v+T+".bin");return void jQ.xhrLoad(A,function(t){t.splice(0,0,_),W(t)},X)}}W([_])}else t&&t(null)},X)},parseBin:function(t){return C([t])}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);