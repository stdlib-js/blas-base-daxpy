"use strict";var x=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var d=x(function(G,j){
var o=4;function b(i,r,u,a,s,e,f,q){var t,n,c,v;if(i<=0||r===0)return e;if(t=s,n=q,a===1&&f===1){if(c=i%o,c>0)for(v=0;v<c;v++)e[n]+=r*u[t],t+=a,n+=f;if(i<o)return e;for(v=c;v<i;v+=o)e[n]+=r*u[t],e[n+1]+=r*u[t+1],e[n+2]+=r*u[t+2],e[n+3]+=r*u[t+3],t+=o,n+=o;return e}for(v=0;v<i;v++)e[n]+=r*u[t],t+=a,n+=f;return e}j.exports=b
});var _=x(function(H,R){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=d();function k(i,r,u,a,s,e){var f,q;return i<=0||r===0?s:(f=p(i,a),q=p(i,e),g(i,r,u,a,f,s,e,q))}R.exports=k
});var M=x(function(I,E){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=_(),z=d();w(y,"ndarray",z);E.exports=y
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=M(),m,O=B(A(__dirname,"./native.js"));C(O)?m=D:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
