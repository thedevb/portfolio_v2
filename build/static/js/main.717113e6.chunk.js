(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),r=t.n(s),c=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Inicio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"Sobre")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Curr\xedculo")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Trabalho")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contato")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Eu sou ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"Sou ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"/images/profile.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"Sobre mim"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"}))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("ul",{className:"skills eleven"},l.a.createElement("div",{className:"row"},l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[0].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[0].skillname)),l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[1].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[1].skillname))),l.a.createElement("div",{className:"row"},l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[2].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[2].skillname)),l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[3].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[3].skillname))),l.a.createElement("div",{className:"row"},l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[3].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[3].skillname)),l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[4].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[4].skillname))),l.a.createElement("div",{className:"row"},l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[5].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[5].skillname)),l.a.createElement("li",{className:"columns five"},l.a.createElement("span",{className:"bar-expand ".concat(e.skills[6].skillname.toLowerCase())}),l.a.createElement("em",null,e.skills[6].skillname))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Educa\xe7\xe3o"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",{className:"achievements"},e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Profissional"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",{class:"ten achievements"},e.Achievements)))}))),l.a.createElement("div",{className:"skill"},l.a.createElement("div",{className:"row three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Habilidades"))),l.a.createElement("div",{class:"row"},l.a.createElement("div",{className:"twelve columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement(E,{resumeData:e}))))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Meus projetos"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",null,l.a.createElement("div",{class:"flip-box"},l.a.createElement("div",{class:"flip-box-inner"},l.a.createElement("div",{class:"flip-box-front ".concat(e.classe)}),l.a.createElement("div",{class:"flip-box-back"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),f=(n.Component,n.Component,function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),b={imagebaseurl:"https://rbhatia46.github.io/",name:"Bruno Barbosa",role:"Desenvolvedor front-end",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"Estudante de tecnologia da informa\xe7\xe3o, focado na \xe1rea de programa\xe7\xe3o Web Client-side e Server-side",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/thedevjs/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/thedevb",className:"fa fa-github"}],aboutme:" apaixonado por aprender e descobrir, autodidata sempre buscando criar novas sinapses! Tenho boa comunica\xe7\xe3o aprecio um bom meetup para fazer novas amizades. Gosto de trabalhar com web, atualmente front-end em uma startup lawtech.",address:"India",website:"https://rbhatia46.github.io",education:[{UniversityName:"UMC - Mogi das Cruzes",specialization:"Sistema de informa\xe7\xe3o",MonthOfPassing:"Fev",YearOfPassing:"2018",Achievements:""},{UniversityName:"Programa\xe7\xe3o web completo",specialization:"Curso web online",MonthOfPassing:"Jan",YearOfPassing:"2018",Achievements:"Curso web de 108 horas com foco front-end na plataforma Udemy"},{UniversityName:"Aprenda a programar em um final de semana",specialization:"Curso presencial web",MonthOfPassing:"Dez",YearOfPassing:"2017",Achievements:"Curso de 16 horas oferecido pelo facebook na esta\xe7\xe3o hack S\xe3o Paulo"}],work:[{CompanyName:"Hackathon",specialization:"Hackathon da segura\xe7a p\xfablica de Mogi das Cruzes",MonthOfLeaving:"Jan",YearOfLeaving:"2018",Achievements:"Hackathon organizado pela prefeitura de Mogi das Cruzes visando buscar solu\xe7\xf5es para a cidade por meio da tecnologia onde eu tive a felicidade de ficar em segundo lugar"},{CompanyName:"Docket Brasil",specialization:"Estagi\xe1rio Front-end",MonthOfLeaving:"Ago",YearOfLeaving:"2018",Achievements:"Atual local de trabalho onde desenvolvo e fa\xe7o melhorias em uma plataforma financeira interna"}],skillsDescription:"Front-end",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"},{skillname:"Jquery"},{skillname:"SASS"},{skillname:"Git"},{skillname:"Scrum"}],portfolio:[{name:"Conversor moeda",description:"Um conversor de moeda criado para estudo em reactjs",imgurl:"./images/converosor.jpg",classe:"conversor"},{name:"Academia site",description:"Site de academia com sistema back-end de gerenciamento de contato (PHP)",imgurl:"./images/academia.jpg",classe:"academia"},{name:"Jogo mata mosquito",description:"Jogo criado para estudo",imgurl:"./images/mosquito.jpg",classe:"mosquito"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:b}),l.a.createElement(p,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(v,{resumeData:b}),l.a.createElement(f,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.717113e6.chunk.js.map