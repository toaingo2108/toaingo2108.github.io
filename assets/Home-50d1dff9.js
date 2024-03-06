import{d as y,r as w,P as o,S as r,U as e,V as a,F as v,W as x,k as s,O as n,Q as S,b as L,c as T,N as g,X as m,u as p,Y as U,Z as q,m as G,_ as C}from"./@vue-3db5bd96.js";import{g as E,u as M,h as H,i as W,b as $,j as z,k as N,l as K,m as j,n as F,o as A,p as Q,q as J,r as R,s as Y,t as X,v as Z}from"./vuetify-a33b473f.js";const B="/assets/profile-46faf170.png",ee={class:"personal-info"},te={class:"text-h5 text-uppercase text-deep-purple-accent-1"},oe={class:"personal-info__icon"},ne={class:"personal-info__content"},se={class:"text-uppercase text-button"},ae={class:"font-weight-light"},ie=y({__name:"PersonalInfo",props:{header:String},setup(l){const c=w([{icon:"mdi-calendar-account",title:"Birth date",value:"21 August, 1998"},{icon:"mdi-city",title:"Birth place",value:"Ho Chi Minh, Vietnam"},{icon:"mdi-compass-rose",title:"Location",value:"Ho Chi Minh, Vietnam"}]);return(d,u)=>(o(),r("div",ee,[e("h5",te,a(l.header),1),(o(!0),r(v,null,x(c,(t,i)=>(o(),r("div",{class:"personal-info__item mt-3",key:i},[e("div",oe,[s(E,{size:"x-large"},{default:n(()=>[S(a(t.icon),1)]),_:2},1024)]),e("div",ne,[e("span",se,a(t.title),1),e("span",ae,a(t.value),1)])]))),128))]))}});const I=(l,c)=>{const d=l.__vccOpts||l;for(const[u,t]of c)d[u]=t;return d},le=I(ie,[["__scopeId","data-v-373b8a06"]]),ce={class:"contact-info"},re={class:"text-h5 text-uppercase text-deep-purple-accent-1"},de={class:"contact-info__icon"},pe={class:"contact-info__content"},ue={class:"text-uppercase text-button"},_e=["href","target"],me=y({__name:"ContactInfo",props:{header:String},setup(l){const c=w([{icon:"mdi-cellphone-sound",title:"Phone",value:"+ 84 986744529",href:"tel:+84986744529",target:void 0},{icon:"mdi-domain",title:"Upwork",value:"toaiq",href:"https://www.upwork.com/freelancers/toaiq",target:"_blank"},{icon:"mdi-gmail",title:"Gmail",value:"toaingoquoc00@gmail.com",href:"mailto:toaingoquoc00@gmail.com",target:void 0},{icon:"mdi-github",title:"GitHub",value:"toaingo2108",href:"https://github.com/toaingo2108",target:"_blank"},{icon:"mdi-linkedin",title:"LinkedIn",value:"nqtoai2181",href:"https://www.linkedin.com/in/nqtoai2181/",target:"_blank"}]);return(d,u)=>(o(),r("div",ce,[e("h5",re,a(l.header),1),(o(!0),r(v,null,x(c,(t,i)=>(o(),r("div",{class:"contact-info__item mt-3",key:i},[e("div",de,[s(E,{size:"x-large"},{default:n(()=>[S(a(t.icon),1)]),_:2},1024)]),e("div",pe,[e("span",ue,a(t.title),1),e("a",{href:t.href,target:t.target},a(t.value),9,_e)])]))),128))]))}});const he=I(me,[["__scopeId","data-v-ad8f592a"]]),fe=l=>(U("data-v-a4f8acf3"),l=l(),q(),l),ge={class:"technical-skills"},ve=fe(()=>e("h5",{class:"text-h5 text-uppercase text-center text-deep-purple-accent-1"}," Technical skills ",-1)),xe={class:"text-h5 text-center"},ye=y({__name:"Skills",setup(l){const{xs:c,sm:d,md:u,lg:t,xlAndUp:i}=M(),_=w({options:[{id:1,name:"Back-end"},{id:2,name:"Front-end"},{id:3,name:"Mobile"},{id:4,name:"UI"},{id:5,name:"DBMS"},{id:6,name:"DevOps"},{id:7,name:"Other"}],items:[{id:1,option:1,name:"Node.js",experience:"5 year"},{id:2,option:1,name:"Express.js",experience:"5 year"},{id:3,option:1,name:"Laravel",experience:"2 years"},{id:4,option:1,name:"Nest.js",experience:"2 years"},{id:5,option:1,name:"Yii2",experience:"2 years"},{id:6,option:2,name:"Vue.js",experience:"5 years"},{id:7,option:2,name:"Nuxt.js",experience:"4 years"},{id:8,option:2,name:"React.js",experience:"3 years"},{id:9,option:3,name:"Android/Kotlin",experience:"6 year"},{id:10,option:3,name:"iOS/Swift",experience:"6 year"},{id:11,option:3,name:"Flutter/Dart",experience:"5 year"},{id:12,option:4,name:"Vuetify",experience:"5 year"},{id:13,option:4,name:"Bootstrap",experience:"3 years"},{id:14,option:4,name:"Tailwind",experience:"1 year"},{id:15,option:5,name:"MySQL",experience:"3 years"},{id:16,option:5,name:"MongoDB",experience:"4 years"},{id:17,option:5,name:"PostgreSQL",experience:"2 years"},{id:18,option:5,name:"SQL Server",experience:"2 years"},{id:19,option:5,name:"Firebase",experience:"3 years"},{id:20,option:6,name:"Docker",experience:"1 year"},{id:21,option:6,name:"GCP",experience:"1 year"},{id:22,option:6,name:"AWS",experience:"2 years"},{id:23,option:6,name:"CI/CD",experience:"1 year"},{id:24,option:6,name:"Heroku",experience:"1 year"},{id:25,option:7,name:"Figma",experience:"2 years"},{id:22,option:7,name:"Photoshop",experience:"2 years"},{id:23,option:7,name:"Vite",experience:"2 year"},{id:24,option:7,name:"REST API",experience:"2 years"}]}),h=L(),k=T(()=>h.value!=null?_.items.filter(b=>b.option===h.value):_.items),O=b=>h.value=h.value===b.id?void 0:b.id;return(b,ot)=>(o(),r("div",ge,[ve,s(H,{"show-arrows":"","center-active":"",class:"mt-3"},{default:n(()=>[(o(!0),r(v,null,x(_.options,f=>(o(),g(z,{key:f.id},{default:n(({isSelected:V,toggle:P})=>[s($,{class:"ma-2",rounded:"",color:f.id===h.value?"primary":void 0,onClick:D=>O(f)},{default:n(()=>[S(a(f.name),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),s(W,{"selected-class":"bg-primary",class:"technical-skills__row"},{default:n(()=>[s(N,null,{default:n(()=>[(o(!0),r(v,null,x(k.value,f=>(o(),g(F,{key:f.id,cols:p(c)?"12":p(d)?"6":p(u)||p(t)?"4":p(i)?"3":void 0},{default:n(()=>[s(K,null,{default:n(({isSelected:V,selectedClass:P,toggle:D})=>[s(j,{class:m(["technical-skills__item",P]),onClick:D},{default:n(()=>[e("div",xe,a(V?f.experience:f.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)]),_:2},1032,["cols"]))),128))]),_:1})]),_:1})]))}});const we=I(ye,[["__scopeId","data-v-a4f8acf3"]]),ke="/assets/apple-store-b3db7627.png",be="/assets/akindervolunteer-f72c8ff1.png",$e="/assets/akinderwellness-e21020fb.png",Se="/assets/gopuff-food-drink-delivery-b731e4fe.png",Ie="/assets/smartshanghai-c825ba9c.png",Ce="/assets/billeasy-21135072.png",Ve="/assets/mobile-office-pro-a48db9e6.png",Pe={class:"ma-5"},De={style:{"font-size":"12px"}},Be={class:"d-flex flex-row"},Ee=e("img",{src:"https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0",width:"100",height:"30"},null,-1),Me=e("img",{src:ke,width:"100",height:"30"},null,-1),Ne=y({__name:"Projects",setup(l){const c=w([{id:1,title:"Gopuff - Food & Drink Delivery",description:"Gopuff is a leading Instant Commerce platform that brings thousands of everyday products to customers in minutes.",web:"https://www.gopuff.com",android:"https://play.google.com/store/apps/details?id=com.main.gopuff",ios:"https://apps.apple.com/us/app/gopuff-alcohol-food-delivery/id722804810",image:Se},{id:1,title:"SmartShanghai",description:"For over 15 years, SmartShanghai has been your irreverent, independent, and all-encompassing guide to Shanghai life – offering daily lifestyle content, extensive directories, community platforms, ticketing services, and even an online marketplace!",web:"https://www.smartshanghai.com/",android:"https://play.google.com/store/apps/details?id=com.smartshanghaiapp.smartshanghaicompany.smartshanghai&hl=en&gl=US&pli=1",ios:"https://apps.apple.com/us/app/smartshanghai/id353096339",image:Ie},{id:0,title:"aKinder™Volunteer",description:"aKinder™Volunteer is your passport to a world of meaningful volunteer opportunities",web:"https://akindervolunteer.com",image:be},{id:1,title:"aKinder™Wellness",description:"aKinder™Wellness is a web and app-based software solution that brings together nonprofits, volunteers, and individuals to address critical community needs.",web:"https://akinderwellness.com",image:$e},{id:1,title:"MobileOfficePro",description:"MobileOfficePro empowers you to manage your business essentials on the go.",web:"https://www.homeofficepro.net/mobileofficepro",android:"https://play.google.com/store/apps/details?id=com.main.mop&hl=en&gl=US&pli=1",ios:"https://apps.apple.com/ca/app/mobile-office-pro/id1131132715",image:Ve},{id:1,title:"Billeasy",description:"Kickstart your Vue 3, Vuetify, and TypeScript admin panel projects with the comprehensive boilerplate and example provided by Billeasy.",web:"https://toaingo2108.github.io/Billeasy-vue/",image:Ce}]),d=u=>{window.open(u,"_blank","noopener,noreferrer")};return(u,t)=>(o(),g(N,{class:"mt-5"},{default:n(()=>[(o(!0),r(v,null,x(c,i=>(o(),g(F,{cols:"4"},{default:n(()=>[s(J,null,{default:n(({isHovering:_,props:h})=>[s(j,G({class:{"on-hover":_},elevation:_?12:2},h,{style:{height:"100%"}}),{default:n(()=>[s(A,{src:i.image,height:"100%",cover:""},null,8,["src"]),s(Q,{"model-value":_,class:"align-center justify-center",scrim:"#000",contained:""},{default:n(()=>[e("div",Pe,[e("div",null,a(i.title),1),e("div",De,a(i.description),1),i.web?(o(),g($,{key:0,variant:"text","prepend-icon":"mdi-link",onClick:k=>d(i.web),class:"mt-2"},{default:n(()=>[S("See more info")]),_:2},1032,["onClick"])):C("",!0),e("div",Be,[i.android?(o(),g($,{key:0,variant:"plain",height:"30",width:"100",class:"me-2",onClick:k=>d(i.android)},{default:n(()=>[Ee]),_:2},1032,["onClick"])):C("",!0),i.ios?(o(),g($,{key:1,variant:"plain",height:"30",width:"100",onClick:k=>d(i.ios)},{default:n(()=>[Me]),_:2},1032,["onClick"])):C("",!0)])])]),_:2},1032,["model-value"])]),_:2},1040,["class","elevation"])]),_:2},1024)]),_:2},1024))),256))]),_:1}))}}),je={class:"timeline mt-5"},Fe=e("h5",{class:"text-h5 text-uppercase text-center text-deep-purple-accent-1"}," Education & work ",-1),Ae=["textContent"],Oe={class:"text-subtitle-2"},Le={class:"timeline mt-10 mb-10"},Te=e("h5",{class:"text-h5 text-uppercase text-center text-deep-purple-accent-1"}," Projects ",-1),Ue=y({__name:"Timelines",setup(l){const c=w([{id:0,icon:"mdi-book-education",color:"cyan lighten-1",title:"Ho Chi Minh University of Science",position:"Software Engineer",period:"SEP 2017 — JUN 2021",description:"Bachelor of Engineering"},{id:1,icon:"mdi-briefcase-variant",color:"amber darken-1",title:"Buymed",position:"Software Engineer",period:"MAR 2022 — MAY 2023",description:"As a Software Engineer at Buymed, I played a key role in developing and maintaining various software solutions. My technical expertise in Flutter, Vue, Node.js, and MongoDB enabled me to contribute significantly to the team. I was involved in the full software development lifecycle, from concept to deployment, ensuring high-quality and efficient software solutions. My work encompassed both front-end and back-end development, demonstrating versatility and a deep understanding of modern web technologies."},{id:4,icon:"mdi-briefcase-variant",color:"deep-orange-lighten-1",title:"Upwork",position:"Professional Full-stack developer",period:"JUL 2023 — PRESENT",description:"Skills: Flutter · Vue.js · Node.js · Mobile Application Development · Full-Stack Development · Back-End Web Development · Front-End Development · Dart · Kotlin · GitHub · Continuous Integration and Continuous Delivery (CI/CD) · Swift (Programming Language) · MongoDB"}]);return(d,u)=>(o(),r(v,null,[e("div",je,[Fe,s(Y,{class:"mt-5"},{default:n(()=>[(o(!0),r(v,null,x(c,t=>(o(),g(R,{key:t.id,"dot-color":t.color,icon:t.icon,size:"large"},{opposite:n(()=>[e("div",{class:m(`pt-1 headline font-weight-bold text-button text-${t.color}`),textContent:a(t.period)},null,10,Ae)]),default:n(()=>[e("div",null,[e("h2",{class:m(`mt-n1 headline font-weight-light mb-4 text-${t.color}`)},a(t.title),3),e("h5",{class:m(`text-button text-${t.color}`)},a(t.position),3),e("span",Oe,a(t.description),1)])]),_:2},1032,["dot-color","icon"]))),128))]),_:1})]),e("div",Le,[Te,s(Ne)])],64))}}),qe={class:"languages"},Ge={class:"text-h5 text-uppercase text-deep-purple-accent-1"},He={class:"text-subtitle-1 font-weight-light"},We={class:"d-flex align-center"},ze={class:"text-subtitle-1 font-weight-light ml-2"},Ke=y({__name:"Languages",props:{header:String},setup(l){const c=w([{name:"Vietnamese",value:100},{name:"English",value:70}]);return(d,u)=>(o(),r("div",qe,[e("h5",Ge,a(l.header),1),(o(!0),r(v,null,x(c,(t,i)=>(o(),r("div",{key:i,class:"mt-3"},[e("span",He,a(t.name),1),e("div",We,[s(X,{color:"primary","model-value":t.value},null,8,["model-value"]),e("span",ze,a(t.value)+"%",1)])]))),128))]))}}),Qe={class:"container"},Je={class:"profile"},Re={class:"profile__image"},Ye={class:"profile__text"},Xe={class:"text-h5 text-uppercase font-weight-light mt-5 text-deep-purple-lighten-1"},Ze={class:"block"},et={class:"block__element block__element-2"},tt=y({__name:"Home",setup(l){const{xs:c,sm:d,smAndDown:u,md:t,mdAndDown:i}=M(),_=w({fullName:"Toai Quoc Ngo",position:"Professional Full Stack Developer"});return(h,k)=>(o(),r("div",Qe,[e("div",Je,[e("div",Re,[s(Z,{size:p(u)?200:300},{default:n(()=>[s(A,{src:B,"lazy-src":B,alt:"Profile avatar",title:"Profile avatar",contain:""})]),_:1},8,["size"])]),e("div",Ye,[e("h1",{class:m(["text-uppercase font-weight-regular text-deep-purple-accent-1",p(c)?"text-h3":"text-h2"])},a(_.fullName),3),e("h2",Xe,a(_.position),1)])]),e("div",Ze,[e("div",{class:m(["block__row",p(i)?"flex-column":void 0])},[e("div",{class:m(["block__element block__element-1",p(c)?"flex-column":void 0])},[s(le,{header:"Personal Info"}),s(he,{header:"Contact Info",class:m(p(t)||p(d)?"mt-0":"mt-5")},null,8,["class"]),s(Ke,{header:"Languages",class:m(p(t)?"mt-0":p(u)?"w-100 mt-5":"mt-5")},null,8,["class"])],2),e("div",et,[s(we,{class:m(p(d)?"mt-5":"mt-0")},null,8,["class"]),s(Ue)])],2)])]))}});const at=I(tt,[["__scopeId","data-v-5822fcc5"]]);export{at as default};