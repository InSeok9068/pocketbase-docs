import{S as J,i as K,s as B,e as H,b as I,g as y,d as E,h as v,C as q,a0 as M,k as L,a as N,q as O,l as S,m as w,c as A,r as P,n as C,a1 as D,G as g,D as F,E as G,F as U,u as Q,a2 as R}from"./index.a7566c1a.js";import{C as T}from"./CommonHelper.7329e1a7.js";const V=t=>({}),j=t=>({}),W=t=>({}),z=t=>({});function k(t){let n,s,u,l,a,m,d,i;const _=t[5].before,f=q(_,t,t[4],z),b=t[5].after,r=q(b,t,t[4],j);let p=[{id:t[0]},{class:d="heading-link "+t[3]}],h={};for(let e=0;e<p.length;e+=1)h=M(h,p[e]);return{c(){n=L(t[2]),s=L("a"),f&&f.c(),u=N(),l=O(t[1]),a=N(),r&&r.c(),this.h()},l(e){n=S(e,(t[2]||"null").toUpperCase(),{id:!0,class:!0});var o=w(n);s=S(o,"A",{href:!0,class:!0});var c=w(s);f&&f.l(c),u=A(c),l=P(c,t[1]),a=A(c),r&&r.l(c),c.forEach(v),o.forEach(v),this.h()},h(){C(s,"href",m=t[0]?"#"+t[0]:null),C(s,"class","link-primary"),D(t[2])(n,h)},m(e,o){I(e,n,o),g(n,s),f&&f.m(s,null),g(s,u),g(s,l),g(s,a),r&&r.m(s,null),i=!0},p(e,o){f&&f.p&&(!i||o&16)&&F(f,_,e,e[4],i?U(_,e[4],o,W):G(e[4]),z),(!i||o&2)&&Q(l,e[1]),r&&r.p&&(!i||o&16)&&F(r,b,e,e[4],i?U(b,e[4],o,V):G(e[4]),j),(!i||o&1&&m!==(m=e[0]?"#"+e[0]:null))&&C(s,"href",m),D(e[2])(n,h=R(p,[(!i||o&1)&&{id:e[0]},(!i||o&8&&d!==(d="heading-link "+e[3]))&&{class:d}]))},i(e){i||(y(f,e),y(r,e),i=!0)},o(e){E(f,e),E(r,e),i=!1},d(e){e&&v(n),f&&f.d(e),r&&r.d(e)}}}function X(t){let n=t[2],s,u,l=t[2]&&k(t);return{c(){l&&l.c(),s=H()},l(a){l&&l.l(a),s=H()},m(a,m){l&&l.m(a,m),I(a,s,m),u=!0},p(a,[m]){a[2]?n?B(n,a[2])?(l.d(1),l=k(a),n=a[2],l.c(),l.m(s.parentNode,s)):l.p(a,m):(l=k(a),n=a[2],l.c(),l.m(s.parentNode,s)):n&&(l.d(1),l=null,n=a[2])},i(a){u||(y(l),u=!0)},o(a){E(l),u=!1},d(a){a&&v(s),l&&l.d(a)}}}function Y(t,n,s){let{$$slots:u={},$$scope:l}=n,{title:a}=n,{tag:m="h3"}=n,{id:d=""}=n,{class:i=""}=n;return t.$$set=_=>{"title"in _&&s(1,a=_.title),"tag"in _&&s(2,m=_.tag),"id"in _&&s(0,d=_.id),"class"in _&&s(3,i=_.class),"$$scope"in _&&s(4,l=_.$$scope)},t.$$.update=()=>{t.$$.dirty&3&&(d||s(0,d=T.slugify(a,"-").toLowerCase()))},[d,a,m,i,l,u]}class x extends J{constructor(n){super(),K(this,n,Y,X,B,{title:1,tag:2,id:0,class:3})}}export{x as H};
