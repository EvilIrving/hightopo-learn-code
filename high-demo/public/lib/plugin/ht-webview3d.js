!function(h){"use strict";var _=h.ht,I=_.Default,R=I.getInternal(),N=R.superCall,h=_.graph3d.Graph3dView,Y=h.prototype.validateImpl;function K(z){var r,q,b,S,f,p,Q=[],T=0,C=I.createDiv(!0),Y=z.getView(),t=(Y.insertBefore(C,z.getCanvas()),(r=_.Default.createDiv()).style.WebkitTransformStyle="preserve-3d",r.style.MozTransformStyle="preserve-3d",r.style.transformStyle="preserve-3d",C.appendChild(r),[{event:"mousedown",style:"none"},{event:"mouseup",style:"auto"},{event:"touchstart",style:"none"},{event:"touchend",style:"auto"}].forEach(function(h){var N=h.style;R.addEventListener(Y,h.event,function(){z.isDragProtectForWebView()&&(C.style.pointerEvents=N)})}),new _.Math.Vector3(0,0,1)),n=new _.Math.Vector3(0,0,1),a=new _.Math.Quaternion,y=new _.Math.Matrix4,d=_.Math.randomFloat,g=new _.Math.Euler,D=new _.Math.Matrix4,E=new _.Math.Matrix4,Z=new _.Math.Matrix4,A=(this.updateWebView=function(){if(z.getWidth()&&z.getHeight()){var h,N,Y,R,K,x=z.getCanvas(),y=+x.style.width.slice(0,-2),x=+x.style.height.slice(0,-2),y=(Q[0]===y&&Q[1]===x||(Q[0]=y,Q[1]=x,C.style.width=y+"px",C.style.height=x+"px",r.style.width=y+"px",r.style.height=x+"px"),z._projectMatrix[5]*Q[1]/2),A=(y!==q&&(q=y,C.style.WebkitPerspective=q+"px",C.style.MozPerspective=q+"px",C.style.perspective=q+"px"),[]),I=(z.dm().each(function(h){h.isWebView&&A.push(h)}),h=A.length,100),l=z.getCamera();do{for(K=!0,B=0;B<=h;B++)if((B===h?l:A[B]).getQuaternion(a),N&&a.premultiply(N),Y=n.set(1,0,0).applyQuaternion(a).dot(t),R=n.set(0,1,0).applyQuaternion(a).dot(t),Math.abs(Math.abs(Y)-1)<.1||Math.abs(Math.abs(R)-1)<.1){K=!1,p?(N=p,p=null):(N=N||new _.Math.Quaternion,g.set(0,d(-Math.PI,Math.PI),0),N.setFromEuler(g));break}}while(I--&&!K);for(var X,x=z._viewMatrix,x=(N&&(x=D.makeRotationFromQuaternion(N.inverse()).premultiply(x).toArray(),D.makeRotationFromQuaternion(N.inverse())),E.fromArray(x),E.setPosition(n.set(0,0,-100)),Z.copy(E).invert().multiply(x),x=E.toArray(),(f="translateZ("+q+"px)"+("matrix3d("+P((y=x)[0])+","+P(-y[1])+","+P(y[2])+","+P(y[3])+","+P(y[4])+","+P(-y[5])+","+P(y[6])+","+P(y[7])+","+P(y[8])+","+P(-y[9])+","+P(y[10])+","+P(y[11])+","+P(y[12])+","+P(-y[13])+","+P(y[14])+","+P(y[15])+")"))+"translate("+Q[0]/2+"px,"+Q[1]/2+"px)"),m=(b===x||S||(r.style.WebkitTransform=x,r.style.MozTransform=x,r.style.transform=x,b=x),T++,A.forEach(function(h){G(h,N?D:null,Z)}),r.children),$=[],B=0,J=m.length;B<J;B++)(X=m[B])._isHtWebView&&X._renderCookie!==T&&$.push(X);$.length&&$.forEach(function(h){r.removeChild(h)}),p=N}},new Array(16)),G=function(h,N,Y){var R,K,x=h.getAttach();x&&((K=z.isVisible(h))&&x.parentNode!==r?r.appendChild(x):!K&&x.parentNode&&I.removeHTML(x),K&&(x._renderCookie=T,K=h.getFinalScale3d(),(R=h._prefrenceSize)&&R[0]?R[1]||(R[1]=R[0]/K[0]*K[1]):R=[K[0],K[1]],x.style.width=R[0]+"px",x.style.height=R[1]+"px",K=1/R[0],R=1/R[1],h=h.mat,A[0]=h[0]*K,A[1]=h[1]*K,A[2]=h[2]*K,A[3]=h[3]*K,A[4]=h[4]*R,A[5]=h[5]*R,A[6]=h[6]*R,A[7]=h[7]*R,A[8]=+h[8],A[9]=+h[9],A[10]=+h[10],A[11]=+h[11],A[12]=h[12],A[13]=h[13],A[14]=h[14],A[15]=h[15],N&&(A=y.multiplyMatrices(N,A).toArray()),K=function(h,N){h="matrix3d("+P(h[0])+","+P(h[1])+","+P(h[2])+","+P(h[3])+","+P(-h[4])+","+P(-h[5])+","+P(-h[6])+","+P(-h[7])+","+P(h[8])+","+P(h[9])+","+P(h[10])+","+P(h[11])+","+P(h[12])+","+P(h[13])+","+P(h[14])+","+P(h[15])+")";return"translate(-50%,-50%)"+(N||"")+h}(A=Y?y.multiplyMatrices(Y,A).toArray():A,S?"translate("+Q[0]/2+"px,"+Q[1]/2+"px)"+f:""),x.$a2!==K&&(x.$a2=K,x.style.WebkitTransform=K,x.style.MozTransform=K,x.style.transform=K)))}}function P(h){return Math.abs(h)<1e-10?0:h}h.prototype.validateImpl=function(){Y.call(this),(this._webViewRenderer||(this._webViewRenderer=new K(this))).updateWebView()},h.prototype.isDragProtectForWebView=function(){return this._dragProtectForWebView},h.prototype.setDragProtectForWebView=function(h){this._dragProtectForWebView=h},_.Default.setShader("htWebView3d",["attribute vec3 aPosition;","uniform mat4 uModelViewMatrix ;","uniform mat4 uProjectMatrix;","void main(void) {","gl_Position = uProjectMatrix * uModelViewMatrix  * vec4(aPosition, 1.0);","}","// FS","void main(void) {","gl_FragColor = vec4(0.0);","}"].join("\n"));var x={type:"htWebView3d"},y=_.WebView3d=function(){N(y,this),this.s({shape3d:"billboard","shape3d.reverse.flip":!0})};I.def("ht.WebView3d",_.Node,{ms_ac:["attach"],isWebView:!0,attachDOM:function(h,N,Y){if(!h)return this.detachDOM();"string"==typeof h&&((R=document.createElement("iframe")).src=h,h=R);var R=h.style;R.position="absolute",R.outline=0,R.margin=0,h._isHtWebView=!0,this.setAttach(h),this._prefrenceSize=[N,Y],this.s("shape3d.material",x)},detachDOM:function(){this.setAttach(null),this.s("shape3d.material",void 0)}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);