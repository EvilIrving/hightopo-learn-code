!function(B,p){"use strict";function w(B){return(/ble$/.test(B)||/ed$/.test(B)||D.IsGetter[B]?"is":"get")+B.charAt(0).toUpperCase()+B.slice(1)}var D=B.ht;D.QuickFinder=function(B,p,r,w,D){var m=this;m.$9j={},m.$1j=B,m.$2j=p,m.$3j=r,m.$4j=w||m.getValue,m.$5j=D||m.$5j,B.each(m.$7j,m),B.mm(m.$11j,m,!0),B.md(m.$12j,m,!0)},D.Default.def(D.QuickFinder,p,{$6j:"__ht__null__",getValueFunc:function(){return this.$4j},getFilterFunc:function(){return this.$5j},$11j:function(B){"add"===B.kind?this.$7j(B.data):"remove"===B.kind?this.$8j(B.data):"clear"===B.kind&&(this.$9j={})},$12j:function(B){var p=this,r=p.$3j,w=p.$2j;p.$5j(B.data)&&(null==r&&w===B.property||"style"===r&&"s:"+w===B.property||"attr"===r&&"a:"+w===B.property)&&((r=p.$10j(B.oldValue))&&r.remove(B.data),p.$7j(B.data))},$10j:function(B){return B=null==B?this.$6j:B,this.$9j[B]},find:function(B){B=this.$10j(B);return B?B.toList():new D.List},findFirst:function(B){B=this.$10j(B);return!B||B.isEmpty()?null:B.get(0)},$7j:function(B){var p,r,w=this;w.$5j(B)&&(p=w.$4j(B),(r=w.$10j(p))||(r=new D.List,p=null==p?w.$6j:p,w.$9j[p]=r),r.add(B))},$8j:function(B){var p,r,w=this;w.$5j(B)&&(p=w.$4j(B),(r=w.$10j(p))&&(r.remove(B),r.isEmpty()&&(p=null==p?w.$6j:p,delete w.$9j[p])))},dispose:function(){this.$1j.umm(this.$11j,this),this.$1j.umd(this.$12j,this),delete this.$1j},getDataModel:function(){return this.$1j},getAccessType:function(){return this.$3j},getPropertyName:function(){return this.$2j},$5j:function(B){return!(null==this.$3j&&this.$4j===this.getValue&&!B[w(this.$2j)])},getValue:function(B){var p=this.$3j,r=this.$2j;return null==p?B[w(r)]():"style"===p?B.s(r):"attr"===p?B.a(r):void 0}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);