(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(147)},116:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),c=a.n(o),s=(a(116),a(117),a(25)),l=a(34),i=a(18),m=a(19),u=a(21),p=a(20),d=a(22),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("i",{className:"material-icons"},"assignment ")," PostsApp"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.b,{to:"/",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/user",className:"nav-link"},"Registrar Usuario")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.b,{to:"/notelist",className:"nav-link"},"Posts")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/create",className:"nav-link"},"Crear Post"))))))}}]),t}(n.Component),f=a(4),g=a.n(f),v=a(8),b=a(11),E=a.n(b),w=a(91),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={notes:[],user:""},a.getNotes=Object(v.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("login_id"),e.next=3,E.a.get("http://localhost:4000/api/notes?id=".concat(t),{headers:{Authorization:localStorage.getItem("token")}});case 3:!1===(n=e.sent).data?window.location.href="/":a.setState({notes:n.data,user:localStorage.getItem("email")});case 5:case"end":return e.stop()}},e)})),a.deleteNote=function(){var e=Object(v.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.delete("http://localhost:4000/api/notes/"+t,{headers:{Authorization:localStorage.getItem("token")}});case 2:a.getNotes();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getNotes();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},this.state.notes.map(function(t){return r.a.createElement("div",{className:"col-md-4 p-2",key:t._id},r.a.createElement("img",{className:"card-img-top",src:t.imagen,alt:"Card"}),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h5",null,t.title),r.a.createElement(s.b,{to:"/edit/"+t._id,className:"btn btn-secondary"},r.a.createElement("i",{className:"material-icons"},"border_color"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Contenido: ",t.content),r.a.createElement("p",null,"Author: ",e.state.user),r.a.createElement("p",null,Object(w.format)(t.createdAt))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)}},"Delete"))))}))}}]),t}(n.Component),y=a(36),k=a(92),j=(a(89),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",imagen:"",pathfile:"",date:new Date,userSelected:"",users:[],list:[],editing:!1,_id:""},a.onSubmit=function(){var e=Object(v.a)(g.a.mark(function e(t){var n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.editing){e.next=7;break}return n={title:a.state.title,content:a.state.content,author:localStorage.getItem("login_id"),date:a.state.date,imagen:a.state.imagen},e.next=5,E.a.put("http://localhost:4000/api/notes/"+a.state._id,n,{headers:{Authorization:localStorage.getItem("token")}});case 5:e.next=9;break;case 7:r={title:a.state.title,content:a.state.content,author:localStorage.getItem("login_id"),date:a.state.date,imagen:a.state.imagen},E.a.post("http://localhost:4000/api/notes",r,{headers:{Authorization:localStorage.getItem("token")}});case 9:window.location.href="/notelist";case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.onChangeDate=function(e){a.setState({date:e})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,a=this;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}window.location.href="/",e.next=11;break;case 4:if(fetch("https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25").then(function(e){return e.json()}).then(function(e){console.log(e.hits),a.setState({list:e.hits}),console.log(a.state.list)}),!this.props.match.params.id){e.next=11;break}return console.log(this.props.match.params.id),e.next=9,E.a.get("http://localhost:4000/api/notes/"+this.props.match.params.id,{headers:{Authorization:localStorage.getItem("token")}});case 9:t=e.sent,this.setState({title:t.data.title,content:t.data.content,date:new Date(t.data.date),userSelected:t.data.author,_id:t.data._id,editing:!0});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Crear un Post"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Titulo",onChange:this.onInputChange,name:"title",value:this.state.title,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Contenido",name:"content",onChange:this.onInputChange,value:this.state.content,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement(k.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",onChange:this.onInputChange,name:"imagen",value:this.state.imagen,required:!0},r.a.createElement("option",null,"Selecciona la Imagen"),this.state.list.map(function(e){return r.a.createElement("option",{value:e.previewURL,key:e.id},e.previewURL)}))),r.a.createElement("button",{className:"btn btn-primary"},"Save ",r.a.createElement("i",{className:"material-icons"},"assignment")))))}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",users:[]},a.getUsers=Object(v.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:4000/api/users");case 2:t=e.sent,a.setState({users:t.data});case 4:case"end":return e.stop()}},e)})),a.onInputChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.a.post("http://localhost:4000/api/users",{username:a.state.username,email:a.state.email,password:a.state.password});case 3:!0===e.sent.data?(a.setState({username:"",email:"",password:""}),window.location.href="/"):console.log("email ya existe");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteUser=function(){var e=Object(v.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure you want to delete it?")){e.next=5;break}return e.next=4,E.a.delete("http://localhost:4000/api/users/"+t);case 4:a.getUsers();case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Registrar Usuario"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre de usuario",onChange:this.onInputChange,name:"username",value:this.state.username,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",onChange:this.onInputChange,name:"email",value:this.state.email,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",onChange:this.onInputChange,value:this.state.password,required:!0})),r.a.createElement("button",{className:"btn btn-primary"},"Registrar ",r.a.createElement("i",{className:"material-icons"},"assignment")))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",date:new Date,userSelected:"",users:[],editing:!1,_id:""},a.onSubmit=function(){var e=Object(v.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.a.post("http://localhost:4000/api/users/login",{email:a.state.email,password:a.state.password});case 3:!1===(n=e.sent).data?(console.log("usuario no valido"),localStorage.getItem("token")&&(localStorage.removeItem("token"),localStorage.removeItem("login_id"),localStorage.removeItem("email"))):(console.log(n.data),localStorage.setItem("token","".concat(n.data.login[0].email," ").concat(n.data.token)),localStorage.setItem("login_id","".concat(n.data.login[0]._id)),localStorage.setItem("email","".concat(n.data.login[0].email)),window.location.href="/notelist");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",null,"Inicair Sesi\xf3n"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",onChange:this.onInputChange,name:"email",value:this.state.email,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",onChange:this.onInputChange,value:this.state.password,required:!0})),r.a.createElement("button",{className:"btn btn-primary"},"Login ",r.a.createElement("i",{className:"material-icons"},"send")))))}}]),t}(n.Component);a(146);var x=function(){return r.a.createElement(s.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container p-4"},r.a.createElement(l.a,{path:"/",exact:!0,component:O}),r.a.createElement(l.a,{path:"/user",component:S}),r.a.createElement(l.a,{path:"/notelist",component:N}),r.a.createElement(l.a,{path:"/edit/:id",component:j}),r.a.createElement(l.a,{path:"/create",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.e4843350.chunk.js.map