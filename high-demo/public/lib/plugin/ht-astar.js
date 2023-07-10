!function(r,v,I){"use strict";var d,m,N=r.ht;N.Astar={};function H(r){for(var v=r,m=[];v.parent;)m.unshift(v),v=v.parent;return m}function P(r,v){v=v||{},this.nodes=[],this.diagonal=!!v.diagonal,this.grid=[];for(var m=0;m<r.length;m++){this.grid[m]=[];for(var I=0,P=r[m];I<P.length;I++){var S=new Z(m,I,P[I]);this.grid[m][I]=S,this.nodes.push(S)}}this.$13x()}function Z(r,v,m){this.x=r,this.y=v,this.weight=m}function w(r){this.content=[],this.scoreFunction=r}d={search:function(r,v,m,I){r.$6x();var P=(P=(I=I||{}).heuristic)||(r.diagonal?d.$4x.diagonal:d.$4x.manhattan),S=I.closest||!1,Z=I.punish,l=new w(function(r){return r.f}),i=v;for(v.h=P(v,m),r.$7x(v),l.push(v);0<l.size();){var p=l.pop();if(p===m)return H(p);p.closed=!0;for(var R=r.neighbors(p),a=0,F=R.length;a<F;++a){var k,Y,B=R[a];B.closed||B.$9x()||(k=p.g+B.getCost(p,Z),(!(Y=B.visited)||k<B.g)&&(B.visited=!0,B.parent=p,B.h=B.h||P(B,m),B.g=k,B.f=B.g+B.h,r.$7x(B),S&&(B.h<i.h||B.h===i.h&&B.g<i.g)&&(i=B),Y?l.$10x(B):l.push(B)))}}return S?H(i):[]},$4x:{manhattan:function(r,v){return Math.abs(v.x-r.x)+Math.abs(v.y-r.y)},diagonal:function(r,v){var m=Math.sqrt(2),I=Math.abs(v.x-r.x),v=Math.abs(v.y-r.y);return+(I+v)+(m-2)*Math.min(I,v)}},$5x:function(r){r.f=0,r.g=0,r.h=0,r.visited=!1,r.closed=!1,r.parent=null}},P.prototype.$13x=function(){this.dirtyNodes=[];for(var r=0;r<this.nodes.length;r++)d.$5x(this.nodes[r])},P.prototype.$6x=function(){for(var r=0;r<this.dirtyNodes.length;r++)d.$5x(this.dirtyNodes[r]);this.dirtyNodes=[]},P.prototype.$7x=function(r){this.dirtyNodes.push(r)},P.prototype.neighbors=function(r){var v=[],m=r.x,r=r.y,I=this.grid;return I[m-1]&&I[m-1][r]&&v.push(I[m-1][r]),I[m+1]&&I[m+1][r]&&v.push(I[m+1][r]),I[m]&&I[m][r-1]&&v.push(I[m][r-1]),I[m]&&I[m][r+1]&&v.push(I[m][r+1]),this.diagonal&&(I[m-1]&&I[m-1][r-1]&&v.push(I[m-1][r-1]),I[m+1]&&I[m+1][r-1]&&v.push(I[m+1][r-1]),I[m-1]&&I[m-1][r+1]&&v.push(I[m-1][r+1]),I[m+1]&&I[m+1][r+1]&&v.push(I[m+1][r+1])),v},P.prototype.toString=function(){for(var r=[],v=this.grid,m=0;m<v.length;m++){for(var I=[],P=v[m],S=0;S<P.length;S++)I.push(P[S].weight);r.push(I.join(" "))}return r.join("\n")},Z.prototype.toString=function(){return"["+this.x+" "+this.y+"]"},Z.prototype.getCost=function(r,v){var m=r&&r.x!=this.x&&r.y!=this.y?1.41421*this.weight:this.weight;if(v){if(!r)return m;var I=r.parent;if(!I)return m;if(1e-5<Math.abs(I.x+this.x-2*r.x))return m+v;if(1e-5<Math.abs(I.y+this.y-2*r.y))return m+v}return m},Z.prototype.$9x=function(){return 0===this.weight},w.prototype={push:function(r){this.content.push(r),this.$11x(this.content.length-1)},pop:function(){var r=this.content[0],v=this.content.pop();return 0<this.content.length&&(this.content[0]=v,this.$12x(0)),r},remove:function(r){var v=this.content.indexOf(r),m=this.content.pop();v!==this.content.length-1&&(this.content[v]=m,this.scoreFunction(m)<this.scoreFunction(r)?this.$11x(v):this.$12x(v))},size:function(){return this.content.length},$10x:function(r){this.$11x(this.content.indexOf(r))},$11x:function(r){for(var v=this.content[r];0<r;){var m=(r+1>>1)-1,I=this.content[m];if(!(this.scoreFunction(v)<this.scoreFunction(I)))break;this.content[m]=v,this.content[r]=I,r=m}},$12x:function(r){for(var v=this.content.length,m=this.content[r],I=this.scoreFunction(m);;){var P,S=r+1<<1,Z=S-1,l=null;if(Z<v&&(P=this.content[Z],(P=this.scoreFunction(P))<I&&(l=Z)),S<v&&(Z=this.content[S],this.scoreFunction(Z)<(null===l?I:P)&&(l=S)),null===l)break;this.content[r]=this.content[l],this.content[l]=m,r=l}}},m={astar:d,Graph:P},r.AStar=m.astar,r.AStar.Graph=m.Graph;r=N.Astar.Finder=function(r,v){this.gv=r,this.$13x(v),this.refreshMap()};(r.prototype={}).constructor=r,v.defineProperties(r.prototype,{_debugInfo:{get:function(){return this.gv._astarDebugInfo},set:function(r){this.gv._astarDebugInfo=r}}}),r.prototype.$13x=function(r){var v=this.$14x={},m=(r=r||{}).gridSize||10;v.gridSizeX=r.gridSizeX||m,v.gridSizeY=r.gridSizeY||m,v.rect=r.rect,v.filter=r.filter,v.extendBlocks=r.extendBlocks||3,v.fastOverlap=r.fastOverlap===I||r.fastOverlap,v.nodeRectExtend=r.nodeRectExtend||0,v.diagonal=r.diagonal===I||r.diagonal,v.turnPunish=r.turnPunish===I?.1:r.turnPunish,v.simplify=r.simplify===I||r.simplify,v.toGridCenter=r.toGridCenter!==I&&r.toGridCenter,v.closest=r.closest===I||r.closest},r.prototype.refreshMap=function(){var r=this,v=r.$14x,m=v.gridSizeX,I=v.gridSizeY,P=v.extendBlocks,v=(v.rect?Z=v.rect:(Z=r.$15x(),N.Default.grow(Z,m*P,I*P)),N.Default.grow(Z,m,I),Math.floor(Z.x/m)*m),P=Math.floor(Z.y/I)*I,S=Math.ceil(Z.width/m),Z=Math.ceil(Z.height/I);r.$16x={x:v,y:P,w:S*m,h:Z*I,gridX:m,gridY:I,xLen:S,yLen:Z},r.$17x(),r.$21x()},r.prototype.$15x=function(){var v,m=this.gv;if(m instanceof N.graph.GraphView)return m.getContentRect();var I=N.Default.unionRect;return m.dm().each(function(r){m.isVisible(r)&&r.getRect&&(v=I(v,r.getRect()))}),v},r.prototype.$17x=function(){for(var r,v,m=this,I=m.$16x,P=I.xLen,S=I.yLen,Z=new Array(P),l=0;l<P;l++)for(Z[l]=r=new Array(S),v=S;v--;)r[v]=1;var i=m.$14x.filter;for(m.gv.dm().each(function(r){i&&!1===i(r)||m._debugInfo&&(r===m._debugInfo.grid||r==m._debugInfo.path)||m.$1cw(Z,r)}),l=0;l<P;l++)Z[l][0]=1,Z[l][S-1]=1;for(v=0;v<S;v++)Z[0][v]=1,Z[P-1][v]=1;m.grid=Z;I=new AStar.Graph(Z,{diagonal:m.$14x.diagonal});m.graph=I},r.prototype.$18x=function(r,v,m,I,P,S,Z,l){var i=this.$19x,p=i(m-r,P-Z,I-v,S-l);if(p<=1e-6&&-1e-6<=p)return!1;Z=i(P-r,P-Z,S-v,S-l)/p;if(Z<0||1<Z)return!1;l=i(m-r,P-r,I-v,S-v)/p;return!(l<0||1<l)},r.prototype.$19x=function(r,v,m,I){return r*I-v*m},r.prototype.$1aw=function(r,v,m,I){for(var P=[-(v[1]-r[1]),v[0]-r[0]],S=0<=P[0]*(m[0]-r[0])+P[1]*(m[1]-r[1]),Z=0,l=I.length;Z<l;Z+=2)if(0<=P[0]*(I[Z]-r[0])+P[1]*(I[Z+1]-r[1])==S)return!1;return!0},r.prototype.$1bw=function(r,v){for(var m,I,P=0,S=r.length;P<S;P+=2)if(this.$1aw([r[P],r[P+1]],[r[m=P===S-2?0:P+2],r[m+1]],[r[I=m===S-2?0:m+2],r[I+1]],v))return!1;for(P=0,S=v.length;P<S;P+=2)if(this.$1aw([v[P],v[P+1]],[v[m=P===S-2?0:P+2],v[m+1]],[v[I=m===S-2?0:m+2],v[I+1]],r))return!1;return!0},r.prototype.$1cw=function(r,v){if(v.getRect){var m,I,P,S,Z,l,i,p,R,a,F,k,Y=this,B=v.getRect(),d=(N.Default.grow(B,Y.$14x.nodeRectExtend),Y.$1dw({x:B.x,y:B.y})),B=Y.$1dw({x:B.x+B.width,y:B.y+B.height}),H=Y.$14x.fastOverlap;for(H||(v=v.getCorners(),p=[],v.forEach(function(r){p.push(r.x,r.y)}),l=Y.$14x.gridSizeX/2,i=Y.$14x.gridSizeY/2),v=Math.max(0,d.x),I=Math.min(B.x,r.length-1),S=Math.max(0,d.y),Z=Math.min(B.y,r.length?r[0].length-1:-1),m=v;m<=I;m++)for(P=S;P<=Z;P++)H?r[m][P]=0:(R=(k=Y.$1ew({x:m,y:P})).x-l,a=k.x+l,F=k.y-i,k=k.y+i,Y.$1bw(p,[R,F,R,k,a,k,a,F])&&(r[m][P]=0))}},r.prototype.$1dw=function(r,v){var m=this.$16x,I=(r.x-m.x)/m.gridX,r=(r.y-m.y)/m.gridY;return!1!==v&&(I=Math.round(I),r=Math.round(r)),{x:I,y:r}},r.prototype.$1ew=function(r){var v=this.$16x;return{x:r.x*v.gridX+v.x,y:r.y*v.gridY+v.y}},r.prototype.$1fw=function(r){var v=this.$16x,m=v.xLen,v=v.yLen;if(0<=r.x&&r.x<m&&0<=r.y&&r.y<v)return r;r={x:r.x,y:r.y};return r.x<0?r.x=0:r.x>=m&&(r.x=m-1),r.y<0?r.y=0:r.y>=v&&(r.y=v-1),r},r.prototype.findPath=function(r,v){var m,I,P=this,S=P.$1dw(r),Z=P.$1dw(v),l=P.$1fw(S),i=P.$1fw(Z);if(l!==S&&i!==Z){var p=P.$16x,R=p.x-p.gridX/2,a=p.y-p.gridY/2,F=R+p.gridX*p.xLen,p=a+p.gridY*p.yLen;if(!(P.$18x(r.x,r.y,v.x,v.y,R,a,F,a)||P.$18x(r.x,r.y,v.x,v.y,F,a,F,p)||P.$18x(r.x,r.y,v.x,v.y,F,p,R,p)||P.$18x(r.x,r.y,v.x,v.y,R,p,R,a)))return[r,v]}l!==S&&(m=!0,S=l),i!==Z&&(I=!0,Z=i);var F=P.graph.grid[S.x][S.y],p=P.graph.grid[Z.x][Z.y],k=AStar.search(P.graph,F,p,{closest:P.$14x.closest,punish:P.$14x.turnPunish});if(!k||!k.length)return null;var Y=[];Y.push(r),m&&Y.push(P.$1ew(k[0]));for(var B=1,d=k.length;B<d-1;B++)Y.push(P.$1ew(k[B]));return I?(Y.push(P.$1ew(k[d-1])),Y.push(v)):(R=k[d-1],Z.x!==R.x||Z.y!==R.y||P.$14x.toGridCenter?Y.push(P.$1ew(R)):Y.push(v)),P.$14x.simplify&&(Y=P.simplifyPath(Y)),P.$20x=Y,P.$21x(),Y},r.prototype.debugOn=function(r){this.debugFlag=!0,this.debugSettings=r||{},this.$21x()},r.prototype.simplifyPath=function(r){var v=r.length;if(v<=2)return r;for(var m,I=[r[0],r[1]],P=I[0],S=I[1],Z=2;Z<v;Z++)m=r[Z],Math.abs((S.x-P.x)*(m.y-P.y)-(S.y-P.y)*(m.x-P.x))<1e-5?S=I[I.length-1]=m:(P=S,I.push(S=m));return I},r.prototype.$21x=function(){var r=this;if(r.$22x(),this.debugFlag){var v=r.grid;if(v){var m=r.gv;if(!1!==r.debugSettings.$16x){for(var I,P,S,Z,l=[],i=[],p=r.$14x.gridSizeX/2,R=r.$14x.gridSizeY/2,a=v.length,F=a?v[0].length:0,k=1;k<a-1;k++)for(var Y=1;Y<F-1;Y++)v[k][Y]||(I=(Z=r.$1ew({x:k,y:Y})).x-p,P=Z.x+p,S=Z.y-R,Z=Z.y+R,l.push({x:I,y:S},{x:I,y:Z},{x:P,y:Z},{x:P,y:S}),i.push(1,2,2,2,5));var B=new N.Shape;B.s("shape.border.color","rgba(50, 50, 50, 0.2)"),B.s("shape.border.width",1),B.s("shape.background","rgba(200, 50, 100, 0.2)"),B.s("2d.editable",!1),B.s("2d.selectable",!1),B.setPoints(l),B.setSegments(i),r._debugInfo={grid:B},m.dm().add(B)}!1!==r.debugSettings.path&&(l=new N.Shape,r.$20x&&(l.setPoints(r.$20x),l.s("shape.border.color","red"),l.s("shape.border.width",1),l.s("2d.editable",!1),l.s("2d.selectable",!1),l.s("shape.background",null),r._debugInfo||(r._debugInfo={}),r._debugInfo.path=l,m.dm().add(l)))}}},r.prototype.debugOff=function(){this.debugFlag=!1,this.$22x()},r.prototype.$22x=function(){var r,v,m,I=this;I._debugInfo&&(r=I._debugInfo.grid,v=I._debugInfo.path,m=I.gv,r&&m.dm().remove(r),v&&m.dm().remove(v),I._debugInfo=null)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);