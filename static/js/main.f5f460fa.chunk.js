(this["webpackJsonpsumit-project"]=this["webpackJsonpsumit-project"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"urlEndpoint":"https://jsonplaceholder.typicode.com/posts"}')},24:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.b3c09e89.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/sumit.6587c34c.jpg"},43:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(48),a(8)),s=a(9),i=a(11),u=a(10),m=a(12),d=(a(24),a(39)),p=a.n(d),b=a(6),E=function(){var e=Object(b.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t()},className:"btn btn-outline-light "},"Login"))},f=function(){var e=Object(b.b)(),t=e.logout;return e.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return t()},className:"btn btn-primary"},"Logout")," ")},h=function(){return Object(b.b)().isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{className:"nav-link lin",to:"/profile"},"Profile")))},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar navbar-expand-md navbar-dark bg-light",id:"navbar"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(m.b,{to:"/home"},r.a.createElement("img",{className:"logo rounded-circle",src:p.a,alt:""})),r.a.createElement("h1",{className:"navbar-brand ml-3"},"Restaurant")),r.a.createElement("ul",{className:"navbar-nav w-100 float-right"},r.a.createElement("li",{className:"navbar-item active"},r.a.createElement(m.b,{className:" col-2 nav-link lin",to:"/home"},"Home")),r.a.createElement(h,null),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{className:"nav-link lin",to:"/about"},"About")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(m.b,{className:"nav-link lin",to:"/contact"},"Contact Us"))),r.a.createElement("div",{className:"float-right"},r.a.createElement(E,null),r.a.createElement(f,null)))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"About")}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Contact")}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron",id:"jumbo"},"Home"))}}]),a}(n.Component),N=(a(55),a(42)),k=a(27),w=a(14),y=a.n(w),x=a(19),C=a(41),A=a.n(C),U=a(18),S=a(20),D=a(17),F=a.n(D);F.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500?U.b.error("Expected error occured"):Object(U.b)("Unexpected Error"),Promise.reject(e)}));var B={get:F.a.get,put:F.a.put,delete:F.a.delete,post:F.a.post},I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[]},e.getdetails=Object(x.a)(y.a.mark((function t(){var a,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.clear(),t.next=3,B.get(S.urlEndpoint);case 3:a=t.sent,n=a.data,e.setState({posts:n});case 6:case"end":return t.stop()}}),t)}))),e.handleAdd=Object(x.a)(y.a.mark((function t(){var a,n,r,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={title:"learning react",body:"React is easy to understand"},t.next=3,B.post(S.urlEndpoint,a);case 3:n=t.sent,r=n.data,console.log(r),c=[r].concat(Object(k.a)(e.state.posts)),e.setState({posts:c});case 8:case"end":return t.stop()}}),t)}))),e.handleUpdate=function(){var t=Object(x.a)(y.a.mark((function t(a){var n,r,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.title="Updated title",t.next=3,B.put(S.urlEndpoint+"/"+a.id,a);case 3:n=t.sent,n.data,r=Object(k.a)(e.state.posts),c=r.indexOf(a),r[c]=Object(N.a)({},a),e.setState({posts:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDelete=function(){var t=Object(x.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.delete(S.urlEndpoint+"/"+a.id);case 2:t.sent,n=e.state.posts.filter((function(e){return e.id!==a.id})),e.setState({posts:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-md-3 col-sm-6 float-right"},r.a.createElement("h3",null,"Sumit Kumar"),r.a.createElement("p",null,"Username: roy.sumit31"),r.a.createElement("p",null,"Gender:male"),r.a.createElement("p",null,"D.O.B: 31/07/1999"),r.a.createElement("p",null,"Phone no.: 8700018629")),r.a.createElement("img",{src:A.a,className:"col-md-3 col-sm-6 profile mb-2",alt:""})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-primary mr-2 mb-2",onClick:this.getdetails},"Fetch Details"),r.a.createElement(U.a,null),r.a.createElement("button",{className:"btn btn-primary mb-2",onClick:this.handleAdd}," ","Add"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Update"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.state.posts.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.title),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info btn-sm",onClick:function(){return e.handleUpdate(t)}},"Update")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return e.handleDelete(t)}},"Delete")))}))))))}}]),a}(n.Component),J=function(){var e=Object(b.b)(),t=e.user;return e.isAuthenticated&&r.a.createElement(I,{user:t})},L=a(1),P=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(L.d,null,r.a.createElement(L.a,{from:"/home",to:"/"}),r.a.createElement(L.b,{path:"/about",component:j}),r.a.createElement(L.b,{path:"/contact",component:O}),r.a.createElement(L.b,{path:"/profile",component:J}),r.a.createElement(L.b,{exact:!0,path:"/",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(b.a,{domain:"dev-rfextrlv.us.auth0.com",clientId:"nFMLts7E3lrX8NIzq9av6T5w63wbjOo6",redirectUri:window.location.origin},r.a.createElement(P,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.f5f460fa.chunk.js.map