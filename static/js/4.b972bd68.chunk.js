(this.webpackJsonpportfoliov2=this.webpackJsonpportfoliov2||[]).push([[4],{134:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(76),c=t(51),o=function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],o=a[1];function i(){o(!t),function(){var e=document.getElementById("menu-button");!1===t&&(e.classList.add("button-on"),e.classList.remove("button-off")),!0===t&&(e.classList.remove("button-on"),e.classList.add("button-off"))}()}return window.onscroll=function(){var e=document.getElementById("navbar-container"),a=document.getElementById("home"),t=document.getElementById("aboutme"),n=document.getElementById("proyects"),l=document.getElementById("contact");document.documentElement.scrollTop>400?(e.classList.add("yes-navbar"),e.classList.remove("no-navbar"),a.classList.add("home-anim"),t.classList.add("about-anim"),n.classList.add("proyects-anim"),l.classList.add("contact-anim")):(e.classList.add("no-navbar"),e.classList.remove("yes-navbar"),o(!1))},l.a.createElement("nav",{className:"navbar_container no-navbar",id:"navbar-container"},l.a.createElement("button",{id:"menu-button",className:"navbar-toggle",type:"button",onClick:i},!1===t?l.a.createElement("i",{className:"fas fa-bars"}):l.a.createElement("i",{className:"fas fa-times-circle"})),l.a.createElement("ul",{className:!0===t?"links-container lale":"links-container lolo"},l.a.createElement("li",{className:"home-link",id:"home"},l.a.createElement(c.Link,{onClick:i,activeClass:"spy-on",to:"home-container",spy:!0,smooth:!0,offset:0,duration:1200},"       ",l.a.createElement("i",{className:"fas fa-circle ibn"},"  ")," "),"  "),l.a.createElement("li",{className:"aboutme-link",id:"aboutme"},l.a.createElement(c.Link,{onClick:i,activeClass:"spy-on",to:"aboutme-container",spy:!0,smooth:!0,offset:0,duration:1200},l.a.createElement("i",{className:"fas fa-circle ibn"},"  "),"  ")," "),l.a.createElement("li",{className:"proyects-link",id:"proyects"},l.a.createElement(c.Link,{onClick:i,activeClass:"spy-on",to:"proyects-container",spy:!0,smooth:!0,offset:0,duration:1200},l.a.createElement("i",{className:"fas fa-circle ibn"},"  ")," "),"   "),l.a.createElement("li",{className:"contact-link",id:"contact"},l.a.createElement(c.Link,{onClick:i,activeClass:"spy-on",to:"contact-container",spy:!0,smooth:!0,offset:0,duration:1200},l.a.createElement("i",{className:"fas fa-circle ibn"},"  "),"  ")," ")))},i=t(56),s=t.n(i),m=function(){return l.a.createElement("div",{className:"main_home_container"},l.a.createElement("div",{className:"home-links-container"},l.a.createElement("a",{className:"iconA",rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/axelleonr/"}," ",l.a.createElement("i",{className:"fab fa-linkedin"}),"        "),l.a.createElement("a",{className:"iconB",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/AxelLr"}," ",l.a.createElement("i",{className:"fab fa-github"}),"     ")),l.a.createElement("div",{className:"text-container"},l.a.createElement("h1",{className:"name-title"},"Axel Le\xf3n"),l.a.createElement("h1",{className:"sub-title"}," Full-stack ",l.a.createElement("span",null," Developer "),"  ")),l.a.createElement("div",null,l.a.createElement("div",{className:"home-button-container"},l.a.createElement(s.a,{bottom:!0},l.a.createElement(c.Link,{to:"proyects-container",spy:!0,smooth:!0,offset:0,duration:1200}," ",l.a.createElement("h4",null," Explorar Proyectos  ")),l.a.createElement(c.Link,{to:"contact-container",spy:!0,smooth:!0,offset:0,duration:1200},"  ",l.a.createElement("h4",null," Contactame  "))))),l.a.createElement("div",{className:"arrow-container"},l.a.createElement(c.Link,{to:"aboutme-container",spy:!0,smooth:!0,offset:0,duration:1200}," ",l.a.createElement("i",{className:"fas fa-chevron-down arrow-animation"}))))},u=function(e){return l.a.createElement(s.a,{bottom:!0},l.a.createElement("div",{className:"grill-comp"},l.a.createElement("div",null," ",l.a.createElement("i",{className:e.iconclass},"  ")," "),l.a.createElement("h1",null,e.title," "),l.a.createElement("p",null," ",e.paragraph," ")))},p=function(e){return l.a.createElement("div",{className:"grill-container",style:{background:e.backcolor}},l.a.createElement(u,{iconclass:"fas fa-chalkboard-teacher",title:"Orientac\xedon al usuario",paragraph:e.paragraph3}),l.a.createElement(u,{iconclass:"fab fa-audible",title:"Performance",paragraph:e.paragraph1}),l.a.createElement(u,{iconclass:"fas fa-object-group",title:"Responsive Design",paragraph:e.paragraph2}))},E=function(e){return l.a.createElement(s.a,{left:!0},l.a.createElement("div",{className:"seccion-title-container",style:{marginTop:e.margin,color:e.textcolor}},l.a.createElement("h1",{className:"seccion-title"}," ",e.title," "),l.a.createElement("div",{className:"underline"},"  ")))},d=t(89),f=t.n(d),h=t(66),b=t.n(h),g=function(){return l.a.createElement("div",{className:"main-about-container"},l.a.createElement("div",{className:"about-title"},l.a.createElement(E,{title:"SOBRE MI",margin:"10vh",textcolor:"var(--white)",iconClass:"fas fa-user"})),l.a.createElement("div",{className:"about-body"},l.a.createElement("div",{className:"about-body-picture"},l.a.createElement("div",{className:"profile-image-container"},l.a.createElement("img",{src:f.a,alt:"foto-perfil"})),l.a.createElement(b.a,{bottom:!0},l.a.createElement("div",{className:"profile-paragraph-container"},l.a.createElement("p",null,"Desarrollador web Full-Stack. Nacido en Buenos Aires, Argentina, residiendo actualmente en la provincia de San Luis."),l.a.createElement("p",null,"Autodidacta, perfeccionista y perserverante, con una gran afinidad por los dise\xf1os din\xe1micos e intuitivos, y los desafios l\xf3gicos inherentes a la programaci\xf3n."),l.a.createElement("h3",null," ",l.a.createElement("span",null," Nombre:  "),"Axel Le\xf3n Rodr\xedguez "),l.a.createElement("h3",null," ",l.a.createElement("span",null," Perfil:  ")," Desarrollador web Full Stack"),l.a.createElement("h3",null,l.a.createElement("span",null," Ingl\xe9s:  ")," Avanzado ")))),l.a.createElement(p,{backcolor:"transparent",paragraph1:"Tiempos de carga r\xe1pidos e interacci\xf3n libre de lag. Siempre pensando en el costo computacional.",paragraph2:"Dise\xf1os que funcionen en cualquier dispositivo,  grande o peque\xf1o.",paragraph3:"Preferencia por dise\xf1os intuitivos y din\xe1micos, considerando siempre al usuario final. "}),l.a.createElement("div",{className:"about-body-skills"},l.a.createElement(E,{title:"HABILIDADES",margin:"5vh",textcolor:"var(--white)"}),l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"list-skills"},l.a.createElement("h1",null," Front-End   "),l.a.createElement("h2",null," ",l.a.createElement("p",null," ",l.a.createElement("span",null," HTML        ")," ")," "),l.a.createElement("h2",null,"  ",l.a.createElement("p",null," ",l.a.createElement("span",null," CSS         ")," ")," "),l.a.createElement("h2",null,"  ",l.a.createElement("p",null," ",l.a.createElement("span",null," JavaScript  "),"  ")," "),l.a.createElement("h2",null," ",l.a.createElement("p",null," ",l.a.createElement("span",null," SASS        "),"  ")," "),l.a.createElement("h2",null,l.a.createElement("p",null," ",l.a.createElement("span",null," ReactJS     ")," "),"   "),l.a.createElement("h2",null," ",l.a.createElement("p",null,"  ",l.a.createElement("span",null," Redux       ")," ")," ")),l.a.createElement("div",{className:"list-skills"},l.a.createElement("h1",null," Back-End   "),l.a.createElement("h2",null," ",l.a.createElement("p",null," ",l.a.createElement("span",null," Node        ")," ")," "),l.a.createElement("h2",null,"  ",l.a.createElement("p",null," ",l.a.createElement("span",null," Express         ")," ")," "),l.a.createElement("h2",null,"  ",l.a.createElement("p",null," ",l.a.createElement("span",null," WebSockets  "),"  ")," "),l.a.createElement("h2",null," ",l.a.createElement("p",null," ",l.a.createElement("span",null," Firebase        "),"  ")," "),l.a.createElement("h2",null,l.a.createElement("p",null," ",l.a.createElement("span",null," SQL     ")," "),"   "),l.a.createElement("h2",null," ",l.a.createElement("p",null,"  ",l.a.createElement("span",null," MongoDB       ")," ")," "))))))},v=function(e){return l.a.createElement(b.a,{bottom:!0},l.a.createElement("div",{className:"card-container"},l.a.createElement("img",{src:e.imagen,alt:e.alt,width:"100%",height:"100%"}),l.a.createElement("div",{className:"card-text-container"},l.a.createElement("h1",{className:"lulu"}," ",e.proyectTitle," "),l.a.createElement("p",null,e.description," "),l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement("a",{href:e.RepLink,rel:"noopener noreferrer",target:"_blank"}," Repositorio ")," "),l.a.createElement("li",null," ",l.a.createElement("a",{href:e.GitLink,rel:"noopener noreferrer",target:"_blank"}," Live App    ")," ")))))},y=function(){return l.a.createElement("div",{className:"main-proyects-container"},l.a.createElement("div",{className:"proyects-navbar-container"},l.a.createElement(E,{title:"PROYECTOS",margin:"10vh",textcolor:"var(--white)"})),l.a.createElement("div",{className:"proyects-cards-container"},l.a.createElement("div",{className:"grid-card"},l.a.createElement(v,{imagen:t(90),alt:"clonetagram",proyectTitle:"Clonetagram",GitLink:"https://axellr.github.io/Clonetagram/#/",RepLink:"https://github.com/AxelLr/Clonetagram",description:"App inspirada en Instagram, desarrollada con React, Redux y MongoDB"}),l.a.createElement(v,{imagen:t(91),alt:"chat app",proyectTitle:"Real time Chat App",GitLink:"https://axellr.github.io/React---socket.io-Client/#/",RepLink:"https://github.com/AxelLr/React---socket.io-Client",description:"Real time chat, desarrollado con React y Socket.io"}),l.a.createElement(v,{imagen:t(92),alt:"song finder",proyectTitle:"Song Finder",GitLink:"https://axellr.github.io/Buscador-de-canciones/#/",RepLink:"https://github.com/AxelLr/Buscador-de-canciones",description:"Simple buscador de canciones, desarrollado con React."}),l.a.createElement(v,{imagen:t(93),alt:"twitter clone",proyectTitle:"Red Social",GitLink:"https://dolphapp.firebaseapp.com/SignUp",RepLink:"https://github.com/AxelLr/React-Firebase-Client",description:"Red social similar a Twitter, desarrollada con React, Redux y Firebase"}))))},N=t(4),k=t(94),x=t.n(k),L=t(95),w=t.n(L),O=t(133),j=t(135),S=t(41);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function A(e){var a={subject:"",email:"",text:""},t=Object(n.useState)(a),c=Object(r.a)(t,2),o=c[0],i=c[1],s=Object(n.useState)(!1),m=Object(r.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)(!1),f=Object(r.a)(d,2),h=f[0],b=f[1],g=Object(n.useState)(!1),v=Object(r.a)(g,2),y=v[0],k=v[1],L=Object(n.useState)(!1),A=Object(r.a)(L,2),R=A[0],P=A[1],I=function(e){i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach((function(a){Object(N.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},o,Object(N.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"main-contact-container"},l.a.createElement("div",{className:"form-container"},l.a.createElement(E,{title:"Env\xedame un mensaje",textcolor:"var(--white)"}),l.a.createElement("form",{onSubmit:function(e){h?(e.preventDefault(),p(!0),w.a.post("https://portfolio-back-end2.herokuapp.com/Send",o).then((function(e){p(!1),i(a),P(!0)})).catch((function(e){p(!1),k(e.response.data)}))):(alert("Verifica si eres humano completando el Captcha"),e.preventDefault())}},l.a.createElement(O.a,{autoComplete:"off",InputLabelProps:{style:{color:"#e5e5e5"}},InputProps:{style:{color:"#e5e5e5"}},required:!0,id:"email",name:"email",type:"email",label:"Correo",value:o.email,onChange:I,fullWidth:!0,error:!!y,helperText:y&&y}),l.a.createElement(O.a,{autoComplete:"off",InputLabelProps:{style:{color:"#e5e5e5"}},InputProps:{style:{color:"#e5e5e5"},maxLength:100},required:!0,id:"subject",name:"subject",type:"text",label:"Asunto",value:o.subject,onChange:I,fullWidth:!0}),l.a.createElement(O.a,{autoComplete:"off",InputLabelProps:{style:{color:"#e5e5e5"}},InputProps:{style:{color:"#e5e5e5"},maxLength:100},required:!0,id:"text",name:"text",type:"text",label:"Mensaje",value:o.text,onChange:I,fullWidth:!0,multiline:!0,rows:"8",inputProps:{maxLength:2500}}),l.a.createElement(j.a,{disabled:u,type:"submit",variant:"contained",color:"primary",style:{margin:"25px auto 25px auto"}},"Enviar Mensaje! ",u&&l.a.createElement(S.a,null)," ",R&&l.a.createElement("i",{className:" ready fas fa-check"}))),l.a.createElement("div",{className:"captcha"},l.a.createElement(x.a,{sitekey:"6Le-M8wUAAAAAPo3fvfxpWl0sQxg51HBS5QNcyzr",render:"explicit",verifyCallback:function(e){e&&b(!0)},onExpired:function(){b(!1)},style:{width:30},compact:!0}))))}var R=function(){return l.a.createElement("div",{className:"main-footer-container"},l.a.createElement("div",{className:"arrow-footer-container"},l.a.createElement(c.Link,{to:"home-container",smooth:!0,offset:0,duration:1200},l.a.createElement("i",{className:"fas fa-chevron-up"}," "))),l.a.createElement("div",{className:"contacticons-container"},l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/axelleonr/"}," ",l.a.createElement("i",{className:"fab fa-linkedin"}),"        "),l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/AxelLr"}," ",l.a.createElement("i",{className:"fab fa-github"}),"          "),l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.facebook.com/axel.leon.52"}," ",l.a.createElement("i",{className:"fab fa-facebook-square"})," ")),l.a.createElement("div",{className:"phone-number"},l.a.createElement("h3",null,"  ",l.a.createElement("i",{className:"fas fa-phone-alt"}),l.a.createElement("span",null," (+54) 2664871368 ")),l.a.createElement("h3",null,"  ",l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("span",null," axelleonr12@gmail.com "))),l.a.createElement("div",{className:"footer-text"},l.a.createElement("h1",null,"Made with React "),l.a.createElement("h1",null," \xa92019 Axel Le\xf3n. All Rights reserved")))},P=t(113),I=t.n(P);a.default=function(){return l.a.createElement("div",{className:"total_container"},l.a.createElement("section",{className:"home_container ",id:"home-container"},l.a.createElement(o,null),l.a.createElement(m,null)),l.a.createElement("section",{className:"about_container ",id:"aboutme-container"},l.a.createElement(g,{iconsize:"40px"})),l.a.createElement("section",{className:"proyects-container ",id:"proyects-container"},l.a.createElement(y,null),l.a.createElement("div",{className:"triangle"},"  ")),l.a.createElement("section",{className:"contact-container ",id:"contact-container"},l.a.createElement(A,null)),l.a.createElement("section",{className:"footer-container",id:"footer-container"},l.a.createElement(I.a,{bottom:!0},l.a.createElement(R,null))))}},89:function(e,a,t){e.exports=t.p+"static/media/profilepic.a4ddcfa4.jpg"},90:function(e,a,t){e.exports=t.p+"static/media/Clonetagram.29e95a4d.png"},91:function(e,a,t){e.exports=t.p+"static/media/react-chat-2.6f1c3955.png"},92:function(e,a,t){e.exports=t.p+"static/media/songfinder.82502332.png"},93:function(e,a,t){e.exports=t.p+"static/media/dolphapp.af80131e.png"}}]);
//# sourceMappingURL=4.b972bd68.chunk.js.map