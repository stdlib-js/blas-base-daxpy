"use strict";var m=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var _=m(function(I,R){
var j=4;function x(i,e,v,o,f,u){var q,s,n,r;if(i<=0||e===0)return f;if(o===1&&u===1){if(n=i%j,n>0)for(r=0;r<n;r++)f[r]+=e*v[r];if(i<j)return f;for(r=n;r<i;r+=j)f[r]+=e*v[r],f[r+1]+=e*v[r+1],f[r+2]+=e*v[r+2],f[r+3]+=e*v[r+3];return f}for(o<0?q=(1-i)*o:q=0,u<0?s=(1-i)*u:s=0,r=0;r<i;r++)f[s]+=e*v[q],q+=o,s+=u;return f}R.exports=x
});var O=m(function(J,E){
var a=4;function z(i,e,v,o,f,u,q,s){var n,r,c,t;if(i<=0||e===0)return u;if(n=f,r=s,o===1&&q===1){if(c=i%a,c>0)for(t=0;t<c;t++)u[r]+=e*v[n],n+=o,r+=q;if(i<a)return u;for(t=c;t<i;t+=a)u[r]+=e*v[n],u[r+1]+=e*v[n+1],u[r+2]+=e*v[n+2],u[r+3]+=e*v[n+3],n+=a,r+=a;return u}for(t=0;t<i;t++)u[r]+=e*v[n],n+=o,r+=q;return u}E.exports=z
});var k=m(function(K,g){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),B=O();A(b,"ndarray",B);g.exports=b
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=k(),M,w=D(C(__dirname,"./native.js"));F(w)?M=G:M=w;module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
