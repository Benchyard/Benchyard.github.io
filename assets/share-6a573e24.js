import{c as e}from"./UserApi-253232f7.js";import"./findPassword-042e4c3c.js";/* empty css                 */import{a as l,b as a,C as t,I as s,_ as o}from"./IconDropDown-8d9141bd.js";import{e as u,r as i,A as r,l as d,o as n,c as p,F as c,g as m,d as f,j as h,t as v,q as g,m as y,C as b,u as k,Q as _,h as x,D as V,k as w,B as I,H as P,E as U,s as C,L,J as j,i as M,y as T,p as z,b as A,R as D,K as F,M as R,S as E,U as q,V as B,I as H,W as N,X as O,N as $,O as G}from"./index-b5355031.js";import{_ as J}from"./_plugin-vue_export-helper-1b428a4d.js";import"./logo_head-4a1e4f8c.js";const K=u({props:{items:{type:Array,required:!0},modelValue:{type:Number,required:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const a=i(null),t=i(e.modelValue);r((()=>{d((()=>{s(t.value)}))}));const s=l=>{const t=document.getElementById(e.items[l].label);a.value.style.top=t.offsetTop-1+"px",a.value.style.left=t.offsetLeft+"px",a.value.style.width=t.offsetWidth+"px",a.value.style.height=t.offsetHeight+"px"};return{selectedIndex:t,selectItem:e=>{t.value=e,l("update:modelValue",e),d((()=>{s(t.value)}))},selectedMask:a}}}),S={class:"menu"},W=["id","onClick"],Y={key:0,style:{height:"16px",width:"16px","margin-right":"10px"}},Q=["href"],X={ref:"selectedMask",class:"selected-mask"};const Z=J(K,[["render",function(e,l,a,t,s,o){return n(),p("ul",S,[(n(!0),p(c,null,m(e.items,((l,a)=>(n(),p("li",{id:l.label,class:"icon",key:a,onClick:l=>e.selectItem(a)},[e.modelValue===a&&l.icon?(n(),p("svg",Y,[f("use",{href:l.icon},null,8,Q)])):h("",!0),f("span",null,v(l.label),1)],8,W)))),128)),f("div",X,null,512)])}],["__scopeId","data-v-7cf570df"]]),ee=e=>(z("data-v-31dd5616"),e=e(),A(),e),le={class:"post-box"},ae=ee((()=>f("h3",null,"Post Your Idea",-1))),te=ee((()=>f("img",{style:{"margin-right":"16px"},src:"/assets/save-d9ec1916.svg",alt:""},null,-1))),se=["onClick"],oe=[ee((()=>f("use",{href:"#shangchuantupian-guanbianniu"},null,-1)))],ue=ee((()=>f("svg",{class:"iconpark-icon"},[f("use",{href:"#shangchuan"})],-1))),ie=ee((()=>f("div",null,"Upload images",-1))),re=ee((()=>f("svg",{class:"iconpark-icon"},[f("use",{href:"#gouxuan"})],-1))),de={class:"el-textarea",style:{padding:"13px 12px"}},ne={class:"tags-row",style:{"margin-bottom":"8px"}},pe={style:{display:"flex","flex-direction":"column","justify-content":"space-around","margin-top":"13px"}},ce={class:"tags-row"},me=ee((()=>f("img",{src:o,alt:""},null,-1))),fe={key:2,style:{display:"flex","flex-direction":"row","margin-top":"12px",width:"100%"}},he=[ee((()=>f("img",{src:"/assets/ok-8994a3ba.svg",alt:""},null,-1))),ee((()=>f("span",{class:"hint"},[j("Price above "),f("span",{style:{color:"var(--el-color-primary-light-3)"}}," $5"),j(" requires either buyer’s confirmation or over 5 days, then money will be received in the T-wallet.")],-1)))],ve={key:3,style:{height:"20px",width:"2000px","margin-top":"12px"}},ge=["src"],ye=J(u({__name:"share",setup(o){const u=g(),z=y();let A=u.params.generateId?u.params.generateId:"",J=u.params.fileId?u.params.fileId:"";const K=i(!1),S=e+"/upload",W=i(),Y=i(),Q=i(),X=i(!1),ee=i([{name:"Midjourney",checked:!1},{name:"UHD",checked:!1},{name:"eyes",checked:!1},{name:"--aspect 2:3",checked:!1},{name:"wood",checked:!1}]);i([{name:"Midjourney",checked:!1},{name:"UHD",checked:!1},{name:"eyes",checked:!1},{name:"--aspect 2:3",checked:!1},{name:"wood",checked:!1}]);const ye=[{value:"1",label:"Midjourney"},{value:"2",label:"DALL·E"},{value:"3",label:"Stable Diffusion"}],be=b({title:"",prompt:"",aiPrompt:"",productType:"Prompt",aiModel:"1",introduction:"",fileList:[],fileIds:[],permission:1,price:"Free"}),ke=b({title:[{required:!0,message:"Please input title",trigger:"blur"}],prompt:[{required:!0,message:"Please input your prompt",trigger:"blur"}]}),_e={Authorization:k().getToken},xe=i(""),Ve=i(!1),we=i(""),Ie=i([]),Pe=i(!1),Ue=i(),Ce=()=>{Pe.value=!0,d((()=>{Ue.value.input.focus()}))},Le=()=>{we.value&&Ie.value.push(we.value),Pe.value=!1,we.value=""},je=e=>{X.value=e>5},Me=e=>{let l=Te(e.uid);-1!==l&&(be.fileList.splice(l,1),be.fileIds.splice(l,1))},Te=e=>{let l=-1;for(let a=0;a<be.fileList.length;a++)if(be.fileList[a].uid==e){l=a;break}return l},ze=e=>{xe.value=e.url,Ve.value=!0},Ae=e=>!(e.size/1024/1024>30)||(I.error("Picture size can not exceed 30MB!"),!1),De=(e,l)=>{be.fileIds.push(e.result.fileId)};r((()=>{A&&J&&l({generateId:A,fileId:J}).then((e=>{if(200==e.code){be.prompt=e.result.prompt,be.aiModel=e.result.aiModel;let l={uid:e.result.file.uid,name:e.result.file.name,url:e.result.file.url};be.fileList.push(l),be.fileIds.push(e.result.file.uid)}else I({message:e.message,type:"error",duration:3e3})})),window.addEventListener("scroll",Fe)})),_((()=>{window.removeEventListener("scroll",Fe)}));const Fe=()=>{let e=document.documentElement.scrollTop;K.value=e>10};return(e,l)=>{const o=D,u=F,i=R,r=E,d=q,g=B,y=H,b=N,k=O,_=$,J=G,Te=P,Fe=U;return n(),p(c,null,[x(t,{scrollUp:!1}),f("div",le,[f("div",{class:V(["back",[K.value?"scrollUp":""]])},[ae,f("div",null,[te,f("img",{class:"icon",src:"/assets/post-e3260337.svg",onClick:l[0]||(l[0]=e=>(async e=>{e&&await e.validate(((e,l)=>{if(e){if(0==be.fileIds.length)return I({message:"Please upload a image",type:"error",duration:3e3}),!1;let e={generateId:A,title:be.title,prompt:be.prompt,aiPrompt:be.aiPrompt,aiModel:be.aiModel,introduction:be.introduction,fileIds:be.fileIds,price:be.price,permission:be.permission,productType:be.productType};a(e).then((e=>{200==e.code?z.push({path:"/account/share"}):I({message:e.message,type:"error",duration:3e3})}))}}))})(W.value))})])],2),x(Te,{"scroll-to-error":"",ref_key:"ruleFormRef",ref:W,model:be,rules:ke,class:"ruleForm","label-position":"top"},{default:w((()=>[x(u,{action:S,"file-list":be.fileList,"onUpdate:fileList":l[1]||(l[1]=e=>be.fileList=e),"list-type":"picture-card","on-preview":ze,"on-remove":Me,headers:_e,"before-upload":Ae,"on-success":De,class:"upload-wrap",accept:".jpg,.jpeg,.png,.gif,.JPG,.PNG,.JPEG"},{file:w((({file:e})=>[x(o,{class:"thumbnail",src:e.url,fit:"cover"},null,8,["src"]),(n(),p("svg",{class:"iconpark-icon",onClick:l=>Me(e)},oe,8,se))])),default:w((()=>[ue,ie])),_:1},8,["file-list"]),x(i,{prop:"title"},{default:w((()=>[x(C(L),{modelValue:be.title,"onUpdate:modelValue":l[2]||(l[2]=e=>be.title=e),placeholder:"Title:Your first 40 characters are what usually show up in feeds",autocomplete:"off"},null,8,["modelValue"])])),_:1}),x(i,{prop:"introduction"},{default:w((()=>[x(C(L),{modelValue:be.introduction,"onUpdate:modelValue":l[3]||(l[3]=e=>be.introduction=e),type:"textarea",class:"textarea",autocomplete:"off",autosize:{minRows:4},placeholder:"Introduction of your art...(optional)"},null,8,["modelValue"])])),_:1}),x(i,{prop:"aiType"},{default:w((()=>[x(d,{teleported:!1,modelValue:be.aiModel,"onUpdate:modelValue":l[4]||(l[4]=e=>be.aiModel=e),placeholder:"Select",size:"large","popper-class":"blueBack","suffix-icon":s},{default:w((()=>[(n(),p(c,null,m(ye,(e=>x(r,{key:e.value,label:e.label,value:e.value},{default:w((()=>[j(v(e.label),1),re])),_:2},1032,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),x(i,null,{default:w((()=>[f("div",de,[f("div",ne,[(n(!0),p(c,null,m(Ie.value,(e=>(n(),M(g,{key:e,closable:"",onClose:l=>(e=>{Ie.value.splice(Ie.value.indexOf(e),1)})(e)},{default:w((()=>[j(v(e),1)])),_:2},1032,["onClose"])))),128)),Pe.value?(n(),M(C(L),{key:0,style:{height:"32px",width:"100px"},size:"small",ref_key:"InputRef",ref:Ue,modelValue:we.value,"onUpdate:modelValue":l[5]||(l[5]=e=>we.value=e),class:"ml-1 w-20",onKeyup:T(Le,["enter"]),onBlur:Le},null,8,["modelValue","onKeyup"])):(n(),M(y,{key:1,style:{height:"32px",width:"100px","border-radius":"6px"},onClick:Ce},{default:w((()=>[j(" + New Tag ")])),_:1}))]),x(b),f("div",pe,[f("div",ce,[me,(n(!0),p(c,null,m(ee.value,(e=>(n(),M(k,{onChange:l=>(e=>{if(e.checked=!e.checked,e.checked)Ie.value.push(e.name);else{const l=Ie.value.indexOf(e.name);l>-1&&Ie.value.splice(l,1)}})(e),checked:e.checked},{default:w((()=>[j(v(e.name),1)])),_:2},1032,["onChange","checked"])))),256))])])])])),_:1}),x(b,{style:{"padding-bottom":"20px"}}),x(i,null,{default:w((()=>[x(J,{modelValue:be.productType,"onUpdate:modelValue":l[7]||(l[7]=e=>be.productType=e)},{default:w((()=>[x(_,{label:"Prompt"},{default:w((()=>[j("Prompt")])),_:1}),x(_,{label:"Original Artworks"},{default:w((()=>[j("Original Artworks")])),_:1}),x(_,{label:"Checkpoint"},{default:w((()=>[j("Checkpoint")])),_:1}),x(_,{label:"LoRA"},{default:w((()=>[j("LoRA")])),_:1}),x(_,{label:"Course"},{default:w((()=>[j("Course")])),_:1}),x(_,{label:Y.value},{default:w((()=>[x(C(L),{size:"small",modelValue:Y.value,"onUpdate:modelValue":l[6]||(l[6]=e=>Y.value=e),placeholder:"Product Name",autocomplete:"off"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["modelValue"])])),_:1}),x(i,{prop:"prompt"},{default:w((()=>[x(C(L),{modelValue:be.prompt,"onUpdate:modelValue":l[8]||(l[8]=e=>be.prompt=e),type:"textarea",class:"textarea",autocomplete:"off",autosize:{minRows:4},placeholder:"please use “ , ” to separate the prompt, ex: a, cute, dog, HDR "},null,8,["modelValue"])])),_:1}),x(b),x(i,{label:"Permission"},{default:w((()=>[x(Z,{modelValue:be.permission,"onUpdate:modelValue":l[9]||(l[9]=e=>be.permission=e),items:[{label:"Public"},{label:"Private"}]},null,8,["modelValue"])])),_:1}),0==be.permission?(n(),M(i,{key:0,label:"Price"},{default:w((()=>["Prompt"===be.productType?(n(),M(J,{key:0,modelValue:be.price,"onUpdate:modelValue":l[10]||(l[10]=e=>be.price=e)},{default:w((()=>[x(_,{label:"0.99"},{default:w((()=>[j("0.99$")])),_:1}),x(_,{label:"1.99"},{default:w((()=>[j("1.99$")])),_:1}),x(_,{label:"2.99"},{default:w((()=>[j("2.99$")])),_:1}),x(_,{label:"Free"},{default:w((()=>[j("Free")])),_:1})])),_:1},8,["modelValue"])):(n(),M(J,{key:1,modelValue:be.price,"onUpdate:modelValue":l[12]||(l[12]=e=>be.price=e)},{default:w((()=>[x(_,{label:Q.value},{default:w((()=>[x(C(L),{"input-style":"text-align: center",modelValue:Q.value,"onUpdate:modelValue":l[11]||(l[11]=e=>Q.value=e),placeholder:"Price",autocomplete:"off",type:"number",size:"small",onInput:je},{prepend:w((()=>[j("$")])),_:1},8,["modelValue"])])),_:1},8,["label"]),x(_,{label:"Free"},{default:w((()=>[j("Free")])),_:1})])),_:1},8,["modelValue"])),X.value?(n(),p("div",fe,he)):(n(),p("div",ve))])),_:1})):h("",!0)])),_:1},8,["model","rules"])]),x(Fe,{modelValue:Ve.value,"onUpdate:modelValue":l[13]||(l[13]=e=>Ve.value=e)},{default:w((()=>[f("img",{"w-full":"",src:xe.value,alt:"Preview Image"},null,8,ge)])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-31dd5616"]]);export{ye as default};