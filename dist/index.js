"use strict";var x=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var d=x(function(G,j){
var o=4;function b(i,r,v,a,s,e,f,q){var u,t,c,n;if(i<=0||r===0)return e;if(u=s,t=q,a===1&&f===1){if(c=i%o,c>0)for(n=0;n<c;n++)e[t]+=r*v[u],u+=a,t+=f;if(i<o)return e;for(n=c;n<i;n+=o)e[t]+=r*v[u],e[t+1]+=r*v[u+1],e[t+2]+=r*v[u+2],e[t+3]+=r*v[u+3],u+=o,t+=o;return e}for(n=0;n<i;n++)e[t]+=r*v[u],u+=a,t+=f;return e}j.exports=b
});var _=x(function(H,R){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=d();function k(i,r,v,a,s,e){var f,q;return i<=0||r===0?s:(f=p(i,a),q=p(i,e),g(i,r,v,a,f,s,e,q))}R.exports=k
});var M=x(function(I,E){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=_(),z=d();w(y,"ndarray",z);E.exports=y
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=M(),m,O=B(A(__dirname,"./native.js"));C(O)?m=D:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
