(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{127:function(n,t,e){"use strict";e.r(t);var i,r,a,c,o,l,s,d,u=e(8),h=e(0),b=e(45),p=e.n(b),j=e(92),g=e(5),v=e(35),x=e(15),O=e(11),f=e(7),m=e(131),w=e(133),y=e(134),k=e(87),_=e(2),z=Object(g.c)(m.a.nav)(i||(i=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  font-size: 14px;\n  padding: 20px 60px;\n  color: white;\n"]))),I=g.c.div(r||(r=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]))),S=Object(g.c)(m.a.svg)(a||(a=Object(u.a)(["\n  margin-right: 50px;\n  width: 95px;\n  height: 25px;\n  fill: ",";\n  path {\n    stroke-width: 6px;\n    stroke: white;\n  }\n"])),(function(n){return n.theme.red})),C=g.c.ul(c||(c=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]))),P=g.c.li(o||(o=Object(u.a)(["\n  margin-right: 20px;\n  color: ",";\n  transition: color 0.3s ease-in-out;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),L=g.c.form(l||(l=Object(u.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  position: relative;\n  svg {\n    height: 25px;\n  }\n"]))),F=Object(g.c)(m.a.span)(s||(s=Object(u.a)(["\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 2.5px;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(n){return n.theme.red})),q=Object(g.c)(m.a.input)(d||(d=Object(u.a)(["\n  transform-origin: right center;\n  position: absolute;\n  right: 0px;\n  padding: 5px 10px;\n  padding-left: 40px;\n  z-index: -1;\n  color: white;\n  font-size: 16px;\n  background-color: transparent;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.white.lighter})),M={normal:{fillOpacity:1},active:{fillOpacity:[0,1,0],transition:{repeat:1/0}}},D={top:{backgroundColor:"rgba(0, 0, 0, 0)"},scroll:{backgroundColor:"rgba(0, 0, 0, 1)"}};var H=function(){var n=Object(h.useState)(!1),t=Object(f.a)(n,2),e=t[0],i=t[1],r=Object(x.h)("/"),a=Object(x.h)("/tv"),c=Object(w.a)(),o=Object(w.a)(),l=Object(y.a)().scrollY,s=Object(x.f)(),d=Object(k.a)(),u=d.register,b=d.handleSubmit;return Object(h.useEffect)((function(){l.onChange((function(){l.get()>80?o.start("scroll"):o.start("top")}))}),[l,o]),Object(_.jsxs)(z,{variants:D,animate:o,initial:"top",children:[Object(_.jsxs)(I,{children:[Object(_.jsx)(v.b,{to:"/",children:Object(_.jsx)(S,{variants:M,whileHover:"active",animate:"normal",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(_.jsx)(m.a.path,{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})})}),Object(_.jsxs)(C,{children:[Object(_.jsx)(P,{children:Object(_.jsxs)(v.b,{to:"/",children:["Home ",(null===r||void 0===r?void 0:r.isExact)&&Object(_.jsx)(F,{layoutId:"circle"})]})}),Object(_.jsx)(P,{children:Object(_.jsxs)(v.b,{to:"/tv",children:["Tv Shows ",a&&Object(_.jsx)(F,{layoutId:"circle"})]})})]})]}),Object(_.jsx)(I,{children:Object(_.jsxs)(L,{onSubmit:b((function(n){s.push("/search?keyword=".concat(n.keyword)),window.location.reload()})),children:[Object(_.jsx)(m.a.svg,{onClick:function(){e?c.start({scaleX:0}):c.start({scaleX:1}),i((function(n){return!n}))},animate:{x:e?-185:0},transition:{type:"linear"},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(_.jsx)(q,Object(O.a)(Object(O.a)({},u("keyword",{required:!0,minLength:2})),{},{animate:c,initial:{scaleX:0},transition:{type:"linear"},placeholder:"Search for movie or tv show..."}))]})})]})},Q=e(22),U=e(132),E="10923b261ba94d897ac6b81148314a3f",N="https://api.themoviedb.org/3";function R(){return fetch("".concat(N,"/movie/latest?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function T(){return fetch("".concat(N,"/movie/top_rated?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function W(){return fetch("".concat(N,"/movie/upcoming?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function B(){return fetch("".concat(N,"/movie/now_playing?api_key=").concat(E)).then((function(n){return n.json()}))}function A(){return fetch("".concat(N,"/tv/airing_today?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function Y(){return fetch("".concat(N,"/tv/top_rated?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function X(){return fetch("".concat(N,"/tv/popular?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function G(){return fetch("".concat(N,"/tv/latest?api_key=").concat(E,"&language=en-US&page=1")).then((function(n){return n.json()}))}function J(n,t){return"https://image.tmdb.org/t/p/".concat(t||"original","/").concat(n)}var V,K,Z,$,nn,tn,en,rn,an,cn,on,ln,sn,dn,un,hn="https://www.whats-on-netflix.com/wp-content/uploads/2023/06/first-look-whats-coming-to-netflix-july-2023-jpg.webp",bn="https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80",pn=g.c.div(V||(V=Object(u.a)(["\n  background: black;\n  padding-bottom: 200px;\n"]))),jn=g.c.div(K||(K=Object(u.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),gn=g.c.div(Z||(Z=Object(u.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),vn=g.c.h2($||($=Object(u.a)(["\n  font-size: 68px;\n  margin-bottom: 20px; ;\n"]))),xn=g.c.p(nn||(nn=Object(u.a)(["\n  font-size: 30px;\n  width: 50%;\n"]))),On=g.c.div(tn||(tn=Object(u.a)(["\n  &.branch_0 {\n  position: relative;\n  top: -100px;\n}\n  &.branch_1 {\n    margin-top:150px;\n  }\n  &.branch_2 {\n    margin-top:250px;\n  }\n  &.branch_3 {\n    margin-top:250px;\n  }\n"]))),fn=Object(g.c)(m.a.div)(en||(en=Object(u.a)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n"]))),mn=Object(g.c)(m.a.div)(rn||(rn=Object(u.a)(["\n  background-color: purple;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  font-size: 66px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),wn=Object(g.c)(m.a.div)(an||(an=Object(u.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),yn=Object(g.c)(m.a.div)(cn||(cn=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),kn=Object(g.c)(m.a.div)(on||(on=Object(u.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: ",";\n  box-shadow: 5px 10px 30px 10px red;\n"])),(function(n){return n.theme.black.lighter})),_n=g.c.div(ln||(ln=Object(u.a)(["\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  height: 400px;\n"]))),zn=g.c.h3(sn||(sn=Object(u.a)(["\n  color: ",";\n  padding: 20px;\n  font-size: 46px;\n  position: relative;\n  top: -80px;\n  font-weight:400;\n"])),(function(n){return n.theme.white.lighter})),In=g.c.p(dn||(dn=Object(u.a)(["\n  padding: 20px;\n  position: relative;\n  top: -80px;\n  color: ",";\n"])),(function(n){return n.theme.white.lighter})),Sn=g.c.h2(un||(un=Object(u.a)(["\n  padding:10px;\n  margin-left:10px;\n"]))),Cn={hidden:{x:window.outerWidth+5},visible:{x:0},exit:{x:-window.outerWidth-5}},Pn={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duaration:.1,type:"tween"}}},Ln={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}};var Fn,qn,Mn,Dn,Hn,Qn,Un,En,Nn,Rn,Tn,Wn,Bn,An,Yn,Xn=function(){var n,t=Object(Q.useQuery)(["movies","nowPlaying"],B),e=t.data,i=t.isLoading,r=Object(Q.useQuery)(["movies","topRated"],T),a=r.data,c=r.isLoading,o=Object(Q.useQuery)(["movies","latest"],R),l=o.data,s=o.isLoading,d=Object(Q.useQuery)(["movies","upcoming"],W),u=d.data,b=d.isLoading,p=[e,a,u,l],j=i&&c&&b&&s,g=Object(h.useState)(0),v=Object(f.a)(g,2),O=v[0],m=v[1],w=p[O],k=Object(h.useState)(0),z=Object(f.a)(k,2),I=z[0],S=z[1],C=Object(h.useState)(!1),P=Object(f.a)(C,2),L=P[0],F=P[1],q=Object(x.f)(),M=Object(x.h)("/movies/:movieId"),D=Object(y.a)().scrollY,H=(null===M||void 0===M?void 0:M.params.movieId)&&(null===w||void 0===w||null===(n=w.results)||void 0===n?void 0:n.find((function(n){return n.id===+M.params.movieId}))),E=(null===M||void 0===M?void 0:M.params.movieId)&&w;console.log(E);var N=function(){return F((function(n){return!n}))},A=function(n,t){q.push("/movies/".concat(n)),m(t)};return Object(_.jsx)(pn,{children:j?Object(_.jsx)(jn,{children:"Loading..."}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(gn,{onClick:function(){if(w){var n,t;if(L)return;N();var e=0===(null===w||void 0===w||null===(n=w.results)||void 0===n?void 0:n.length)?1:(null===w||void 0===w||null===(t=w.results)||void 0===t?void 0:t.length)-1,i=Math.floor(e/6)-1;S((function(n){return n===i?0:n+1}))}},bgPhoto:J((null===e||void 0===e?void 0:e.results[0].backdrop_path)||""),children:[Object(_.jsx)(vn,{children:null===e||void 0===e?void 0:e.results[0].title}),Object(_.jsx)(xn,{children:null===e||void 0===e?void 0:e.results[0].overview})]}),[0,1,2,3].map((function(n){var t,e,i,r,a;return Object(_.jsx)(_.Fragment,{children:3!==n?Object(_.jsxs)(On,{className:"branch_".concat(n),children:[Object(_.jsx)(Sn,{children:0===n?"Playing":1===n?"Rated ":2===n?"Upcoming ":"Latest"}),Object(_.jsx)(U.a,{initial:!1,onExitComplete:N,children:Object(_.jsx)(fn,{variants:Cn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===(t=p[n])||void 0===t||null===(e=t.results)||void 0===e?void 0:e.slice(1).slice(6*I,6*I+6).map((function(t){return Object(_.jsx)(mn,{layoutId:t.id+"",whileHover:"hover",initial:"normal",variants:Pn,onClick:function(){return A(t.id,n)},transition:{type:"tween"},bgPhoto:J(t.backdrop_path,"w500"),children:Object(_.jsx)(wn,{variants:Ln,children:Object(_.jsx)("h4",{children:t.title})})},t.id)}))},I)})]}):Object(_.jsxs)(On,{className:"branch_".concat(n),children:[Object(_.jsx)(Sn,{children:"Latest"}),Object(_.jsx)(U.a,{initial:!1,onExitComplete:N,children:Object(_.jsx)(fn,{variants:Cn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:Object(_.jsx)(mn,{layoutId:(null===(i=p[3])||void 0===i?void 0:i.id)+"",whileHover:"hover",initial:"normal",variants:Pn,onClick:function(){var t;return A(null===(t=p[3])||void 0===t?void 0:t.id,n)},transition:{type:"tween"},bgPhoto:hn,children:Object(_.jsx)(wn,{variants:Ln,children:Object(_.jsx)("h4",{children:null===(a=p[3])||void 0===a?void 0:a.title})})},null===(r=p[3])||void 0===r?void 0:r.id)},I)})]})})})),Object(_.jsx)(U.a,{children:M?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(yn,{onClick:function(){return q.push("/")},exit:{opacity:0},animate:{opacity:1}}),Object(_.jsxs)(kn,{style:{top:D.get()+100,backgroundImage:null===E.poster_path?"linear-gradient(to top, black, transparent),url(".concat(hn,")"):"linear-gradient(to top, black, transparent),url(".concat(J(H.poster_path,"w500"),")")},layoutId:M.params.movieId,children:[H&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(_n,{style:{backgroundImage:"linear-gradient(to top, black, transparent),url(".concat(J(H.backdrop_path,"w500"),")")}}),Object(_.jsx)(zn,{children:H.title}),Object(_.jsx)(In,{children:H.overview}),Object(_.jsx)(In,{children:H.original_language}),Object(_.jsx)(In,{children:H.release_date})]}),E&&!H&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(_n,{style:{backgroundImage:"linear-gradient(to top, black, transparent),url(".concat(hn,")")}}),Object(_.jsx)(zn,{children:E.title}),Object(_.jsx)(In,{children:E.overview?E.overview:"No overview"}),Object(_.jsxs)(In,{children:["Status : ",E.status]})]})]})]}):null})]})})},Gn=g.c.div(Fn||(Fn=Object(u.a)(["\n  background: black;\n  padding-bottom: 200px;\n"]))),Jn=g.c.div(qn||(qn=Object(u.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Vn=g.c.div(Mn||(Mn=Object(u.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),Kn=g.c.h2(Dn||(Dn=Object(u.a)(["\n  font-size: 68px;\n  margin-bottom: 20px; ;\n"]))),Zn=g.c.p(Hn||(Hn=Object(u.a)(["\n  font-size: 30px;\n  width: 50%;\n"]))),$n=g.c.div(Qn||(Qn=Object(u.a)(["\n  &.branch_0 {\n  position: relative;\n  top: -100px;\n}\n  &.branch_1 {\n    margin-top:150px;\n  }\n"]))),nt=Object(g.c)(m.a.div)(Un||(Un=Object(u.a)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n"]))),tt=Object(g.c)(m.a.div)(En||(En=Object(u.a)(["\n  background-color: purple;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  font-size: 66px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),et=Object(g.c)(m.a.div)(Nn||(Nn=Object(u.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),it=Object(g.c)(m.a.div)(Rn||(Rn=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),rt=Object(g.c)(m.a.div)(Tn||(Tn=Object(u.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),at=g.c.div(Wn||(Wn=Object(u.a)(["\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  height: 400px;\n"]))),ct=g.c.h3(Bn||(Bn=Object(u.a)(["\n  color: ",";\n  padding: 20px;\n  font-size: 46px;\n  position: relative;\n  top: -80px;\n  font-weight:400;\n"])),(function(n){return n.theme.white.lighter})),ot=g.c.p(An||(An=Object(u.a)(["\n  padding: 20px;\n  position: relative;\n  top: -80px;\n  color: ",";\n"])),(function(n){return n.theme.white.lighter})),lt=g.c.h2(Yn||(Yn=Object(u.a)(["\n  padding:10px;\n  margin-left:10px;\n"]))),st={hidden:{x:window.outerWidth+5},visible:{x:0},exit:{x:-window.outerWidth-5}},dt={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duaration:.1,type:"tween"}}},ut={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}};var ht,bt,pt,jt,gt,vt,xt,Ot,ft,mt,wt,yt,kt,_t,zt,It=function(){var n,t,e,i,r,a,c=Object(x.g)(),o=new URLSearchParams(c.search).get("keyword"),l=Object(Q.useQuery)(["movies","searchMovieData"],(function(){return function(n){return fetch("".concat(N,"/search/movie?api_key=").concat(E,"&query=").concat(n,"&language=en-US&page=1")).then((function(n){return n.json()}))}(o)})),s=l.data,d=l.isLoading,u=Object(Q.useQuery)(["movies","searchTvData"],(function(){return function(n){return fetch("".concat(N,"/search/tv?api_key=").concat(E,"&query=").concat(n,"&language=en-US&page=1")).then((function(n){return n.json()}))}(o)})),b=u.data,p=u.isLoading,j=[s,b],g=d&&p,v=Object(h.useState)(0),O=Object(f.a)(v,2),m=O[0],w=O[1],k=j[m],z=Object(h.useState)(0),I=Object(f.a)(z,2),S=I[0],C=I[1],P=Object(h.useState)(!1),L=Object(f.a)(P,2),F=L[0],q=L[1],M=Object(x.f)(),D=Object(x.h)("/search/:searchDataId"),H=Object(y.a)().scrollY,R=(null===D||void 0===D?void 0:D.params.searchDataId)&&(null===k||void 0===k?void 0:k.results.find((function(n){return n.id===+D.params.searchDataId}))),T=function(){return q((function(n){return!n}))},W=function(){if(k){if(F)return;T();var n=(null===k||void 0===k?void 0:k.results.length)-1,t=Math.floor(n/6);console.log(S,t),C((function(n){return n===t?0:n+1}))}};return Object(_.jsx)(Gn,{children:g?Object(_.jsx)(Jn,{children:"Loading"}):Object(_.jsxs)(_.Fragment,{children:[s?Object(_.jsxs)(Vn,{onClick:W,bgPhoto:(null===(n=s.results[0])||void 0===n?void 0:n.backdrop_path)?J(s.results[0].backdrop_path,"w500"):bn,children:[Object(_.jsx)(Kn,{children:null===s||void 0===s||null===(t=s.results[0])||void 0===t?void 0:t.title}),Object(_.jsx)(Zn,{children:(null===s||void 0===s?void 0:s.results[0].overview.slice(0,400))+"..."})]}):b?Object(_.jsxs)(Vn,{onClick:W,bgPhoto:(null===b||void 0===b||null===(e=b.results[0])||void 0===e?void 0:e.backdrop_path)?J(null===b||void 0===b||null===(i=b.results[0])||void 0===i?void 0:i.backdrop_path,"w500"):bn,children:[Object(_.jsx)(Kn,{children:null===b||void 0===b||null===(r=b.results[0])||void 0===r?void 0:r.name}),Object(_.jsx)(Zn,{children:(null===b||void 0===b||null===(a=b.results[0])||void 0===a?void 0:a.overview.slice(0,400))+"..."})]}):"Not Found",[0,1].map((function(n){var t;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)($n,{className:"branch_".concat(n),children:[Object(_.jsx)(lt,{children:0===n?"Movies":"TV Shows"}),Object(_.jsx)(U.a,{onExitComplete:T,initial:!1,children:Object(_.jsx)(nt,{variants:st,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===(t=j[n])||void 0===t?void 0:t.results.slice(1).slice(6*S,6*S+6).map((function(t){return Object(_.jsx)(tt,{bgPhoto:t.backdrop_path?J(t.backdrop_path,"w500"):bn,whileHover:"hover",initial:"normal",layoutId:t.id+"",variants:dt,onClick:function(){return function(n,t){M.push("/search/".concat(n)),w(t)}(t.id,n)},children:Object(_.jsx)(et,{variants:ut,children:Object(_.jsx)("h4",{children:t.title})})},t.id)}))},S)})]})})})),Object(_.jsx)(U.a,{children:D?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(it,{onClick:function(){return M.goBack()},animate:{opacity:1},exit:{opacity:0}}),Object(_.jsx)(rt,{style:{top:H.get()+100},layoutId:D.params.searchDataId,children:R&&Object(_.jsxs)(_.Fragment,{children:[R.backdrop_path?Object(_.jsx)(at,{style:{backgroundImage:"linear-gradient(to top, black, transparent), \n                            url(".concat(J(R.backdrop_path,"w500"),")")}}):Object(_.jsx)(at,{style:{backgroundImage:"linear-gradient(to top, black, transparent), \n                            url(".concat(bn,")")}}),Object(_.jsx)(ct,{children:R.title?R.title:R.name}),Object(_.jsx)(ot,{children:R.overview.slice(0,400)+"..."})]})})]}):null})]})})},St=g.c.div(ht||(ht=Object(u.a)(["\n  background: black;\n  padding-bottom: 200px;\n"]))),Ct=g.c.div(bt||(bt=Object(u.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Pt=g.c.div(pt||(pt=Object(u.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),Lt=g.c.h2(jt||(jt=Object(u.a)(["\n  font-size: 68px;\n  margin-bottom: 20px; ;\n"]))),Ft=g.c.p(gt||(gt=Object(u.a)(["\n  font-size: 30px;\n  width: 50%;\n"]))),qt=g.c.div(vt||(vt=Object(u.a)(["\n  &.branch_0 {\n  position: relative;\n  top: -100px;\n}\n  &.branch_1 {\n    margin-top:150px;\n  }\n  &.branch_2 {\n    margin-top:250px;\n  }\n  &.branch_3 {\n    margin-top:250px;\n  }\n"]))),Mt=Object(g.c)(m.a.div)(xt||(xt=Object(u.a)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n"]))),Dt=Object(g.c)(m.a.div)(Ot||(Ot=Object(u.a)(["\n  background-color: purple;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  font-size: 66px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto})),Ht=Object(g.c)(m.a.div)(ft||(ft=Object(u.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),Qt=Object(g.c)(m.a.div)(mt||(mt=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),Ut=Object(g.c)(m.a.div)(wt||(wt=Object(u.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),Et=g.c.div(yt||(yt=Object(u.a)(["\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  height: 400px;\n"]))),Nt=g.c.h3(kt||(kt=Object(u.a)(["\n  color: ",";\n  padding: 20px;\n  font-size: 46px;\n  position: relative;\n  top: -80px;\n  font-weight:400;\n"])),(function(n){return n.theme.white.lighter})),Rt=g.c.p(_t||(_t=Object(u.a)(["\n  padding: 20px;\n  position: relative;\n  top: -80px;\n  color: ",";\n"])),(function(n){return n.theme.white.lighter})),Tt=g.c.h2(zt||(zt=Object(u.a)(["\n  padding:10px;\n  margin-left:10px;\n"]))),Wt={hidden:{x:window.outerWidth+5},visible:{x:0},exit:{x:-window.outerWidth-5}},Bt={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duaration:.1,type:"tween"}}},At={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}};var Yt=function(){var n,t=Object(Q.useQuery)(["airingTv","nowAiring"],A),e=t.data,i=t.isLoading,r=Object(Q.useQuery)(["tv","topRated"],Y),a=r.data,c=r.isLoading,o=Object(Q.useQuery)(["tv","latest"],G),l=o.data,s=o.isLoading,d=Object(Q.useQuery)(["tv","popular"],X),u=d.data,b=d.isLoading,p=[e,a,u,l],j=i&&c&&b&&s,g=Object(h.useState)(0),v=Object(f.a)(g,2),O=v[0],m=v[1],w=p[O],k=Object(h.useState)(0),z=Object(f.a)(k,2),I=z[0],S=z[1],C=Object(h.useState)(!1),P=Object(f.a)(C,2),L=P[0],F=P[1],q=Object(x.f)(),M=Object(x.h)("/tv/:tvId"),D=Object(y.a)().scrollY,H=(null===M||void 0===M?void 0:M.params.tvId)&&(null===w||void 0===w||null===(n=w.results)||void 0===n?void 0:n.find((function(n){return n.id===+M.params.tvId}))),E=w;console.log(E);var N=function(){return F((function(n){return!n}))},R=function(n,t){q.push("/tv/".concat(n)),m(t)},T=function(){return q.push("/tv")};return Object(_.jsx)(St,{children:j?Object(_.jsx)(Ct,{children:"Loading..."}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(Pt,{onClick:function(){if(w){var n,t;if(L)return;N();var e=0===(null===w||void 0===w||null===(n=w.results)||void 0===n?void 0:n.length)?1:(null===w||void 0===w||null===(t=w.results)||void 0===t?void 0:t.length)-1,i=Math.floor(e/6)-1;S((function(n){return n===i?0:n+1}))}},bgPhoto:J((null===a||void 0===a?void 0:a.results[0].backdrop_path)||""),children:[Object(_.jsx)(Lt,{children:null===a||void 0===a?void 0:a.results[0].name}),Object(_.jsx)(Ft,{children:null===a||void 0===a?void 0:a.results[0].overview})]}),[0,1,2,3].map((function(n){var t,e,i,r,a;return Object(_.jsx)(_.Fragment,{children:3!==n?Object(_.jsxs)(qt,{className:"branch_".concat(n),children:[Object(_.jsx)(Tt,{children:0===n?"On Airing":1===n?"TopRated ":2===n?"Popular ":"Latest"}),Object(_.jsx)(U.a,{initial:!1,onExitComplete:N,children:Object(_.jsx)(Mt,{variants:Wt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===(t=p[n])||void 0===t||null===(e=t.results)||void 0===e?void 0:e.slice(1).slice(6*I,6*I+6).map((function(t){return Object(_.jsx)(Dt,{layoutId:"".concat(t.id-n),whileHover:"hover",initial:"normal",variants:Bt,onClick:function(){return R(t.id,n)},transition:{type:"tween"},bgPhoto:t.backdrop_path?J(t.backdrop_path,"w500"):bn,children:Object(_.jsx)(Ht,{variants:At,children:Object(_.jsx)("h4",{children:t.name})})},t.id)}))},I)})]}):Object(_.jsxs)(qt,{className:"branch_".concat(n),children:[Object(_.jsx)(Tt,{children:"Latest"}),Object(_.jsx)(U.a,{initial:!1,onExitComplete:N,children:Object(_.jsx)(Mt,{variants:Wt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:Object(_.jsx)(Dt,{layoutId:"".concat(null===(i=p[3])||void 0===i?void 0:i.id,"-").concat(n)+"",whileHover:"hover",initial:"normal",variants:Bt,onClick:function(){var t;return R(null===(t=p[3])||void 0===t?void 0:t.id,n)},transition:{type:"tween"},bgPhoto:hn,children:Object(_.jsx)(Ht,{variants:At,children:Object(_.jsx)("h4",{children:null===(a=p[3])||void 0===a?void 0:a.name})})},null===(r=p[3])||void 0===r?void 0:r.id)},I)})]})})})),[0,1,2,3].map((function(n){return Object(_.jsx)(U.a,{children:M?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Qt,{onClick:T,exit:{opacity:0},animate:{opacity:1}}),Object(_.jsxs)(Ut,{style:{top:D.get()+100},layoutId:"".concat(M.params.tvId-n),children:[H&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Et,{style:{backgroundImage:H.backdrop_path?"linear-gradient(to top, black, transparent),url(".concat(J(H.backdrop_path,"w500"),")"):"linear-gradient(to top, black, transparent),url(".concat(bn,")")}}),Object(_.jsx)(Nt,{children:H.name}),Object(_.jsx)(Rt,{children:H.overview})]}),E&&!H&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Et,{style:{backgroundImage:E.backdrop_path?"linear-gradient(to top, black, transparent),url(".concat(J(E.backdrop_path,"w500"),")"):"linear-gradient(to top, black, transparent),url(".concat(bn,")")}}),Object(_.jsx)(Nt,{children:E.name}),Object(_.jsx)(Rt,{children:E.overview?E.overview:"No overview"}),Object(_.jsxs)(Rt,{children:["Status : ",E.status]})]})]})]}):null})}))]})})};var Xt,Gt=function(){return Object(_.jsxs)(v.a,{children:[Object(_.jsx)(H,{}),Object(_.jsxs)(x.c,{children:[Object(_.jsx)(x.a,{path:["/tv","/tv/:tvId"],children:Object(_.jsx)(Yt,{})}),Object(_.jsx)(x.a,{path:["/search","/search/:searchDataId"],children:Object(_.jsx)(It,{})}),Object(_.jsx)(x.a,{path:["/","/movies/:movieId"],children:Object(_.jsx)(Xn,{})})]})]})},Jt=Object(g.b)(Xt||(Xt=Object(u.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: black;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.white.darker})),Vt=new Q.QueryClient;p.a.render(Object(_.jsx)(j.a,{children:Object(_.jsx)(Q.QueryClientProvider,{client:Vt,children:Object(_.jsxs)(g.a,{theme:{red:"#E51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(_.jsx)(Jt,{}),Object(_.jsx)(Gt,{})]})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.61552890.chunk.js.map