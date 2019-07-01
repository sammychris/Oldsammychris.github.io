(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),o=(t(15),t(4)),s=t(5),i=t(7),m=t(6),u=t(1),d=t(8),p=(t(16),function(){return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{id:"minimize"},r.a.createElement("header",null,r.a.createElement("h1",null,"Hey I'm Samuel"),r.a.createElement("p",{style:{marginTop:"5px"}},"a Web developer")),r.a.createElement("main",null,r.a.createElement("div",{id:"profilePic"},r.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/29807328?s=400&u=4e49f08616b02550468c8939aa644982f0052732&v=4",alt:""})),r.a.createElement("div",{id:"about"},r.a.createElement("p",null,"A web developer who lives in Lagos, Nigeria. I code every day and I'm always looking for an opportunity to design aswell."),r.a.createElement("p",null,"Right now I'm immersed in MERN Stack and also love learning new things.")),r.a.createElement("div",{id:"skills"},r.a.createElement("h3",null,"My Skills:"),r.a.createElement("div",{id:"skill"},r.a.createElement("span",{style:{background:"#ca2b03"}},"HTML5"),r.a.createElement("span",{style:{background:"#379ad6"}},"CSS3"),r.a.createElement("span",{style:{background:"#cea11a"}},"JavaScript"),r.a.createElement("span",{style:{background:"#218e94"}},"React"),r.a.createElement("span",{style:{background:"#f5824c"}},"D3"),r.a.createElement("span",{style:{background:"#172c45"}},"jQuery"),r.a.createElement("span",{style:{background:"#5f3f88"}},"Bootstrap"),r.a.createElement("span",{style:{background:"#b55f8c"}},"Sass"),r.a.createElement("span",{style:{background:"#7649bb"}},"Redux"),r.a.createElement("span",{style:{background:"#76ac64"}},"Node"),r.a.createElement("span",{style:{background:"#f03c2e"}},"Git")))),r.a.createElement("footer",null,r.a.createElement("a",{href:"mailto:ebusameric@gmail.com",className:"icons"},r.a.createElement("i",{className:"fa fa-envelope-square"}),r.a.createElement("span",null,"Email")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sammychris",className:"icons"},r.a.createElement("i",{className:"fa fa-github"}),r.a.createElement("span",null,"Github")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/sammychrise",className:"icons"},r.a.createElement("i",{className:"fa fa-twitter"}),r.a.createElement("span",null,"Twitter")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"#",className:"icons"},r.a.createElement("i",{className:"fa fa-linkedin"}),r.a.createElement("span",null,"LinkedIn")))))}),E=function(e){var a={react:{name:"React",background:"#218e94"},html5:{name:"HTML5",background:"#ca2b03"},javascript:{name:"JavaScript",background:"#cea11a"},d3:{name:"D3",background:"#f5824c"},jquery:{name:"jQuery",background:"#172c45"},sass:{name:"Sass",background:"#b55f8c"},express:{name:"Expressjs",background:"#888585"},mongodb:{name:"MongoDB",background:"#4aad3a"},boostrap:{name:"Bootstrap",background:"#5f3f88"},css3:{name:"CSS3",background:"#379ad6"}}[e];return a||{name:e,background:"#284748"}},f=function(e){var a,t,n,l=e.project.description;return l&&(a=l.split(".").map(function(e){return r.a.createElement("p",null,e,".")}),t=new Date(e.project.create_on).toDateString(),n=e.project.skills.map(function(e,a){return r.a.createElement("span",{style:{background:E(e).background,top:30*a}},E(e).name)})),r.a.createElement("div",{className:"contents",style:{backgroundColor:e.backgr}},r.a.createElement("div",{className:"each-project"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.demo_url,className:"project-img"},n,r.a.createElement("img",{src:e.project.img_url,alt:""})),r.a.createElement("div",{className:"project-info"},r.a.createElement("h1",null,r.a.createElement("span",null,e.project.name),r.a.createElement("span",{className:"dates"},t)),r.a.createElement("div",{className:"text-btn"},r.a.createElement("div",{className:"text"},a),r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.code_url},"Code"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.project.demo_url},"Demo")))))))},g=function(e){return r.a.createElement("div",{id:"projects",ref:e.scroll},r.a.createElement("header",null,r.a.createElement("div",{className:"contacts"},r.a.createElement("a",{href:"mailto:ebusameric@gmail.com",className:"icons"},r.a.createElement("i",{className:"fa fa-envelope-square"}),r.a.createElement("span",null,"Email")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sammychris",className:"icons"},r.a.createElement("i",{className:"fa fa-github"}),r.a.createElement("span",null,"Github")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/sammychrise",className:"icons"},r.a.createElement("i",{className:"fa fa-twitter"}),r.a.createElement("span",null,"Twitter")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"#",className:"icons"},r.a.createElement("i",{className:"fa fa-linkedin"}),r.a.createElement("span",null,"LinkedIn")))),r.a.createElement("main",null,r.a.createElement("div",{id:"list-header"},r.a.createElement("p",null,"The newest projects are selected from the top"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{id:"all",className:"active",onClick:e.control},"All Projects"),r.a.createElement("li",{id:"frontend",onClick:e.control},"Front-end"),r.a.createElement("li",{id:"d3",onClick:e.control},"Data visualisation"),r.a.createElement("li",{id:"fullstack",onClick:e.control},"Full-stack")))),r.a.createElement("div",{id:"all-project",className:"first"},e.project.map(function(e,a){return a%2===0?r.a.createElement(f,{project:e,backgr:"rgb(43, 43, 43)",key:a}):r.a.createElement(f,{project:e,index:a,key:a})}))),r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Let's work together..."),r.a.createElement("p",null,"How do you take your coffee?",r.a.createElement("a",{href:"mailto:ebusameric@gmail.com"}," Email Me!")))))},b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={store:[],project:[""],activeTag:"All Projects"},t.controlTag=t.controlTag.bind(Object(u.a)(t)),t.childDiv=r.a.createRef(),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://sammy-portfolio-api.glitch.me/api/project").then(function(e){return e.json()}).then(function(a){e.setState({store:a.project,project:a.project})}),setTimeout(function(){e.childDiv.current.scrollIntoView({behavior:"smooth"})},500)}},{key:"controlTag",value:function(e){var a=document.getElementsByClassName("active")[0],t=document.getElementById("all-project");a&&(a.className="No Name"),t.className="first"!==t.className?"first":"second";var n=this.state.store,r="all"===e.target.id?n:n.filter(function(a){return a.type===e.target.id});e.target.className="active",this.setState({project:r})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(g,{project:this.state.project,tag:this.state.activeTag,control:this.controlTag,scroll:this.childDiv}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9f4dba4a.chunk.js.map