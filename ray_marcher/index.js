var Ht=Object.defineProperty;var Gt=(t,r,e)=>r in t?Ht(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var s=(t,r,e)=>Gt(t,typeof r!="symbol"?r+"":r,e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();let y;function jt(t){return y=t.getContext("webgl2")}function Kt(t,r){const e=y.createShader(t);if(!e)return null;if(y.shaderSource(e,r),y.compileShader(e),!y.getShaderParameter(e,y.COMPILE_STATUS)){const i=y.getShaderInfoLog(e);return console.error(i),y.deleteShader(e),null}return e}function wt(t){const r=y.createProgram(),e=[];for(const i in t){const a=t[i],l=Kt(parseInt(i),a);if(!l){for(const _ of e)y.deleteShader(_);return null}e.push(l)}for(const i of e)y.attachShader(r,i);y.linkProgram(r);for(const i of e)y.detachShader(r,i),y.deleteShader(i);if(!y.getProgramParameter(r,y.LINK_STATUS)){const i=y.getProgramInfoLog(r);return console.error(i),y.deleteProgram(r),null}return r}const Z=1e-6;function I(t){return t*Math.PI/180}const gt=Math.sin,J=Math.cos;function Yt(t,r,e){return Math.min(Math.max(t,r),e)}const z=Float32Array;function c(t=0,r,e){const n=new z(3);return n[0]=t,n[1]=r??t,n[2]=e??t,n}function tt(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t}function $(t=0,r=0,e=0){const n=new z(3);return n[0]=t/255,n[1]=r/255,n[2]=e/255,n}function qt(t,r,e){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function $t(t,r){return qt(t,r,new z(3))}function Wt(t,r,e,n){return n[0]=t[0]+r[0]*e,n[1]=t[1]+r[1]*e,n[2]=t[2]+r[2]*e,n}function Tt(t,r,e){return Wt(t,r,e,t)}function Vt(t,r,e){const n=t[0],i=t[1],a=t[2],l=r[0],_=r[1],f=r[2];return e[0]=i*f-a*_,e[1]=a*l-n*f,e[2]=n*_-i*l,e}function vt(t,r){return Vt(t,r,new z(3))}function Qt(t,r){const e=t[0],n=t[1],i=t[2];let a=e*e+n*n+i*i;return a>0&&(a=1/Math.sqrt(a)),r[0]=e*a,r[1]=n*a,r[2]=i*a,r}function et(t){return Qt(t,t)}function yt(t=1,r=0,e=0,n=0,i=0,a,l=0,_=0,f=0,d=0,w,v=0,x=0,g=0,A=0,M){const m=new z(16);return m[0]=t,m[1]=r,m[2]=e,m[3]=n,m[4]=i,m[5]=t,m[6]=l,m[7]=_,m[8]=f,m[9]=d,m[10]=t,m[11]=v,m[12]=x,m[13]=g,m[14]=A,m[15]=t,m}function Zt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Jt(t,r,e,n,i){const a=1/Math.tan(t/2);if(i[0]=a/r,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=a,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,n!=null&&n!==1/0){const l=1/(e-n);i[10]=(n+e)*l,i[14]=2*n*e*l}else i[10]=-1,i[14]=-2*e;return i}function te(t,r,e,n){let i,a,l,_,f,d,w,v,x,g;const A=t[0],M=t[1],m=t[2],ut=e[0],ft=e[1],dt=e[2],mt=r[0],pt=r[1],ht=r[2];return Math.abs(A-mt)<Z&&Math.abs(M-pt)<Z&&Math.abs(m-ht)<Z?Zt(n):(w=A-mt,v=M-pt,x=m-ht,g=1/Math.hypot(w,v,x),w*=g,v*=g,x*=g,i=ft*x-dt*v,a=dt*w-ut*x,l=ut*v-ft*w,g=Math.hypot(i,a,l),g?(g=1/g,i*=g,a*=g,l*=g):(i=0,a=0,l=0),_=v*l-x*a,f=x*i-w*l,d=w*a-v*i,g=Math.hypot(_,f,d),g?(g=1/g,_*=g,f*=g,d*=g):(_=0,f=0,d=0),n[0]=i,n[1]=_,n[2]=w,n[3]=0,n[4]=a,n[5]=f,n[6]=v,n[7]=0,n[8]=l,n[9]=d,n[10]=x,n[11]=0,n[12]=-(i*A+a*M+l*m),n[13]=-(_*A+f*M+d*m),n[14]=-(w*A+v*M+x*m),n[15]=1,n)}class ee{constructor(){s(this,"position");s(this,"forward");s(this,"right");s(this,"up");s(this,"world_up");s(this,"projection");s(this,"view");s(this,"near");s(this,"far");s(this,"fov");s(this,"yaw");s(this,"pitch");s(this,"roll");s(this,"movement_speed");s(this,"yaw_speed");s(this,"pitch_speed");s(this,"roll_speed")}}function ne(){const t=new ee;return t.position=c(),t.forward=c(0,0,-1),t.right=c(1,0,0),t.up=c(0,1,0),t.world_up=c(0,1,0),t.projection=yt(1),t.view=yt(1),t.near=.01,t.far=1e3,t.fov=80,t.yaw=0,t.pitch=0,t.roll=0,t.movement_speed=.1,t.yaw_speed=.1,t.pitch_speed=.1,t.roll_speed=.1,t}function Et(t,r){Tt(t.position,t.forward,t.movement_speed*r)}function xt(t,r){Tt(t.position,t.right,t.movement_speed*r)}function ie(t,r){t.yaw+=t.yaw_speed*r}function oe(t,r){t.pitch=Yt(t.pitch-t.pitch_speed*r,-89,89)}function re(t){t.forward=et(c(gt(I(t.yaw))*J(I(t.pitch)),gt(I(t.pitch)),-J(I(t.yaw))*J(I(t.pitch)))),t.right=et(vt(t.forward,t.world_up)),t.up=et(vt(t.right,t.forward))}function Rt(t,r,e){Jt(I(t.fov),r/e,t.near,t.far,t.projection)}function ae(t){te(t.position,$t(t.position,t.forward),t.up,t.view)}const T={keys:{},buttons:{},kb_key_down:function(){},kb_key_up:function(){},m_move:function(){},m_button_down:function(){},m_button_up:function(){},m_wheel_scroll:function(){}};function se(t){T.kb_key_down=t}function ce(t){T.m_move=t}function le(){addEventListener("keydown",function(t){T.keys[t.code]=0,T.kb_key_down({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey})}),addEventListener("keyup",function(t){T.keys[t.code]=1,T.kb_key_up({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey})}),addEventListener("mousemove",function(t){T.m_move({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target})}),addEventListener("mousedown",function(t){T.buttons[t.button]=0,T.m_button_down({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target})}),addEventListener("mouseup",function(t){T.buttons[t.button]=1,T.m_button_up({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target})}),addEventListener("wheel",function(t){T.m_wheel_scroll({xd:Math.sign(t.deltaX),yd:Math.sign(t.deltaY)})})}function W(t){return T.keys[t]===0}function kt(t=0,r){const e=new z(2);return e[0]=t,e[1]=r??t,e}const it=[{fract_scaling:1.6,fract_rotation:c(-2.45,0,0),fract_translation:c(-1.5,1,-1),fract_color:c(.36,.89,.4)},{fract_scaling:1.8,fract_rotation:c(.5,0,-.12),fract_translation:c(-2.12,-2.75,.49),fract_color:c(.42,.38,.19)},{fract_scaling:1.9073,fract_rotation:c(-1.16,0,-9.83),fract_translation:c(-3.508,-3.593,3.295),fract_color:c(-.34,.12,-.08)},{fract_scaling:2.02,fract_rotation:c(1.62,0,-1.57),fract_translation:c(-3.31,6.19,1.53),fract_color:c(.12,-.09,-.09)},{fract_scaling:1.65,fract_rotation:c(5.26,0,.37),fract_translation:c(-1.41,-.22,-.77),fract_color:c(.14,-1.71,.31)},{fract_scaling:1.77,fract_rotation:c(5.62,0,-.22),fract_translation:c(-2.08,-1.42,-1.93),fract_color:c(.42,.38,.19)},{fract_scaling:1.66,fract_rotation:c(.19,0,1.52),fract_translation:c(-3.83,-1.94,-1.09),fract_color:c(.42,.38,.19)},{fract_scaling:1.58,fract_rotation:c(3.95,0,-1.45),fract_translation:c(-1.55,-.13,-2.52),fract_color:c(-1.17,-.4,-1)},{fract_scaling:1.87,fract_rotation:c(.02,0,-3.12),fract_translation:c(-3.57,.129,2.95),fract_color:c(.42,.38,.19)},{fract_scaling:1.81,fract_rotation:c(-2.99,0,-4.84),fract_translation:c(-2.905,.765,-4.165),fract_color:c(.16,.38,.15)},{fract_scaling:1.93,fract_rotation:c(1.58,0,1.34637),fract_translation:c(-2.31,1.123,1.56),fract_color:c(.42,.38,.19)},{fract_scaling:1.88,fract_rotation:c(4.91,0,1.52),fract_translation:c(-4.54,-1.26,.1),fract_color:c(-1,.3,-.43)},{fract_scaling:1.6,fract_rotation:c(3.93,0,3.77),fract_translation:c(-2,-.41,-1.43),fract_color:c(.42,.38,.19)},{fract_scaling:2.08,fract_rotation:c(3.16,0,-4.79),fract_translation:c(-7.43,5.96,-6.23),fract_color:c(.16,.38,.15)},{fract_scaling:2.0773,fract_rotation:c(-1.34,0,-9.66),fract_translation:c(-1.238,-1.533,1.085),fract_color:c(.42,.38,.19)},{fract_scaling:1.78,fract_rotation:c(3.28,0,-.1),fract_translation:c(-1.47,1.7,-.4),fract_color:c(.42,.38,.19)},{fract_scaling:2.0773,fract_rotation:c(-1.34,0,-9.66),fract_translation:c(-1.238,-1.533,1.085),fract_color:c(.42,.38,.19)},{fract_scaling:1.8093,fract_rotation:c(-3.2094777,0,-3.165),fract_translation:c(-1.0939,-.43495,-3.1113),fract_color:c(-.61,-.92,.33)},{fract_scaling:1.95,fract_rotation:c(0,0,1.570796),fract_translation:c(-6.75,-3,0),fract_color:c(.42,.38,.19)},{fract_scaling:1.91,fract_rotation:c(-.76,0,.06),fract_translation:c(-3.44,-.69,-1.14),fract_color:c(.42,.38,.19)},{fract_scaling:1.8986,fract_rotation:c(.00683,0,-.4166),fract_translation:c(-2.513,-5.4067,-2.51),fract_color:c(.42,.38,.19)},{fract_scaling:2.03413,fract_rotation:c(-1.57798,0,1.688),fract_translation:c(-4.803822,-4.1,-1.39063),fract_color:c(-.95,-.16,.14)},{fract_scaling:1.6516888,fract_rotation:c(-.7996324,0,.026083898),fract_translation:c(-3.85863,-5.13741,-.918303),fract_color:c(.42,.38,.19)},{fract_scaling:1.77746,fract_rotation:c(.0707307,0,4.62318),fract_translation:c(-4.6867,-.84376,1.98158),fract_color:c(-.35,1.5,.48)},{fract_scaling:2.13,fract_rotation:c(-1.62,0,-1.77),fract_translation:c(-4.99,-3.05,-4.48),fract_color:c(.42,.38,.19)},{fract_scaling:1.4731,fract_rotation:c(0,0,0),fract_translation:c(-10.27,3.28,-1.9),fract_color:c(1.17,.07,1.27)}];function ot(t,r,e){return Math.min(Math.max(t,r),e)}var F=(t=>(t[t.PX=0]="PX",t[t.PCT=1]="PCT",t[t.FR=2]="FR",t))(F||{});const _e={0:"px",1:"%",2:"fr"};class ue{constructor(){s(this,"x");s(this,"u")}}function P(t,r){const e=new ue;return e.x=t,e.u=r,e}function fe(t){return`${t.x}${_e[t.u]}`}class de{constructor(){s(this,"type");s(this,"object");s(this,"key");s(this,"call_get");s(this,"call_set")}get(){return this.type===0?this.object[this.key]:this.call_get()}set(r){this.type===0?this.object[this.key]=r:this.call_set(r)}}function E(t,r){const e=new de;return e.type=0,e.object=t,e.key=r,e}function S(t,r){if(!t)return null;const e=document.createElement("span");return e.className="gui_label",e.innerHTML=t,r.append(e),e}function D(){const t=document.createElement("div");return t.className="gui_container",t}function V(t,r,e,n,i){const a=document.createElement("input");return a.className="gui_input",a.type=t,a.step=e.toString(),a.min=n.toString(),a.max=i.toString(),a.value=r.toString(),a}class b{constructor(){s(this,"parent");s(this,"children",[]);s(this,"ref_el")}container(){return this.ref_el}render(){}mount(){}static mount(){}update(){}}class Lt extends b{constructor(){super(...arguments);s(this,"id");s(this,"title");s(this,"grid_x");s(this,"grid_y");s(this,"layout");s(this,"window_parent");s(this,"window_children")}grid_str(e){let n="";for(let i=0;i<e.length;i+=1){const a=e[i];n+=fe(a),i<e.length-1&&(n+=" ")}return n}layout_str(){let e="";const n=this.grid_x.length,i=this.grid_y.length,a=n*i;for(let l=0;l<a;l+=n){let _="";for(let f=l;f<l+n;f+=1){const d=this.layout[f];_+=`w${d}`,f<l+n-1&&(_+=" ")}e+=`"${_}"
`}return e}render(){const e=document.createElement("div");this.window_parent?e.className="gui_window":e.className="gui_window_root",this.window_children.length?(e.style.display="grid",e.style.gridTemplateColumns=this.grid_str(this.grid_x),e.style.gridTemplateRows=this.grid_str(this.grid_y),e.style.gridTemplateAreas=this.layout_str()):e.style.gridArea=`w${this.id}`,this.ref_el=e}}class rt extends b{constructor(){super(...arguments);s(this,"title");s(this,"is_collapsed");s(this,"container_el")}container(){return this.container_el}render(){const e=document.createElement("div");e.className="gui_collapsing_header"+(this.is_collapsed?" gui_is_collapsed":"");const n=document.createElement("div");n.className="gui_title",n.innerHTML=this.title,e.append(n),n.onclick=(function(){this.is_collapsed?(this.is_collapsed=!1,e.classList.remove("gui_is_collapsed")):(this.is_collapsed=!0,e.classList.add("gui_is_collapsed"))}).bind(this);const i=D();e.append(i),this.ref_el=e,this.container_el=i}}class St extends b{constructor(){super(...arguments);s(this,"value")}render(){const e=document.createElement("div");e.className="gui_text",e.innerHTML=this.value,this.ref_el=e}}class Nt extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"onchange");s(this,"input_el")}render(){const e=document.createElement("div");e.className="gui_bool";const n=document.createElement("div");n.className="gui_checkbox_group_option"+(this.value.get()?" gui_selected":""),n.innerHTML=this.label,e.append(n),n.onclick=(function(){this.value.get()?(this.value.set(!1),n.classList.remove("gui_selected")):(this.value.set(!0),n.classList.add("gui_selected")),this.onchange(this.value.get())}).bind(this),this.ref_el=e,this.input_el=n}update(){this.value.get()?this.input_el.classList.add("gui_selected"):this.input_el.classList.remove("gui_selected")}}class At extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"step");s(this,"min");s(this,"max");s(this,"onchange");s(this,"input_el")}render(){const e=document.createElement("div");e.className="gui_input_number",S(this.label,e);const n=V("number",this.value.get(),this.step,this.min,this.max);e.append(n),n.onchange=(function(){const i=ot(parseFloat(n.value),this.min,this.max);this.value.set(i),n.value=i.toString(),this.onchange(i)}).bind(this),this.ref_el=e,this.input_el=n}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.value.get().toString())}}class Ft extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"step");s(this,"min");s(this,"max");s(this,"container_el");s(this,"onchange");s(this,"input_el")}render(){const e=document.createElement("div");e.className="gui_slider_number",S(this.label,e);const n=D();n.className="gui_input_range_container",e.append(n);const i=V("range",this.value.get(),this.step,this.min,this.max);i.className="gui_input_range",n.dataset.content=i.value,n.append(i),i.onchange=(function(){const a=ot(parseFloat(i.value),this.min,this.max);this.value.set(a),n.dataset.content=i.value,this.onchange(a)}).bind(this),i.onmousemove=function(){n.dataset.content=i.value},this.ref_el=e,this.container_el=n,this.input_el=i}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.value.get().toString(),this.container_el.dataset.content=this.input_el.value)}}class Ut extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"step");s(this,"min");s(this,"max");s(this,"size");s(this,"onchange");s(this,"input_els")}render(){const e=document.createElement("div");e.className="gui_input_vec",e.style.setProperty("--size",this.size.toString()),S(this.label,e);const n=D();e.append(n);const i=[];for(let a=0;a<this.value.length;a+=1){const l=V("number",this.value[a],this.step,this.min,this.max);n.append(l),l.onchange=(function(){const _=ot(parseFloat(l.value),this.min,this.max);this.value[a]=_,l.value=_.toString(),this.onchange(this.value)}).bind(this),i.push(l)}this.ref_el=e,this.input_els=i}update(){for(let e=0;e<this.value.length;e+=1){const n=this.input_els[e];document.activeElement!=n&&(n.value=this.value[e].toString())}}}var B=(t=>(t[t.R_0_1=0]="R_0_1",t[t.R_0_255=1]="R_0_255",t))(B||{});class Mt extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"mode");s(this,"onchange");s(this,"input_el");s(this,"range_container_el");s(this,"range_el")}to_hex(e,n,i){const a=this.mode===0?255:1,l=Math.round(e*a).toString(16).padStart(2,"0"),_=Math.round(n*a).toString(16).padStart(2,"0"),f=Math.round(i*a).toString(16).padStart(2,"0");return`#${l}${_}${f}`}from_hex(e){const n=e.replace(/^#/,""),i=this.mode===0?255:1,a=parseInt(n.substring(0,2),16)/i,l=parseInt(n.substring(2,4),16)/i,_=parseInt(n.substring(4,6),16)/i;return[a,l,_]}render(){const e=document.createElement("div");e.className="gui_color_edit"+(this.value.length===4?" gui_rgba":""),S(this.label,e);const n=D();e.append(n);const i=document.createElement("input");if(i.className="gui_input_color",i.type="color",i.value=this.to_hex(this.value[0],this.value[1],this.value[2]),n.append(i),i.onchange=(function(){const a=this.from_hex(i.value);this.value[0]=a[0],this.value[1]=a[1],this.value[2]=a[2],this.onchange(this.value)}).bind(this),this.value.length==4){const a=document.createElement("div");a.className="gui_input_range_container",n.append(a);const l=V("range",this.value[3],.01,0,1);l.className="gui_input_range",a.dataset.content=l.value,a.append(l),l.onchange=(function(){this.value[3]=parseFloat(l.value)*(this.mode===1?255:1),a.dataset.content=l.value,this.onchange(this.value)}).bind(this),l.onmousemove=function(){a.dataset.content=l.value},this.range_el=l,this.range_container_el=a}this.ref_el=e,this.input_el=i}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.to_hex(this.value[0],this.value[1],this.value[2])),this.range_container_el&&this.range_el&&document.activeElement!=this.range_el&&(this.range_el.value=this.value[3].toString(),this.range_container_el.dataset.content=this.range_el.value)}}class me extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"onchange");s(this,"input_el")}render(){const e=document.createElement("div");e.className="gui_input_text",S(this.label,e);const n=document.createElement("input");n.className="gui_input",n.type="text",n.value=this.value.get().toString(),e.append(n),n.onchange=(function(){this.value.set(n.value),this.onchange(n.value)}).bind(this),this.ref_el=e,this.input_el=n}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.value.get().toString())}}class pe extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"keys");s(this,"values");s(this,"onchange");s(this,"option_els")}render(){const e=document.createElement("div");e.className="gui_radio_group",S(this.label,e);const n=D();e.append(n);const i=[],a=this.value.get();for(let l=0;l<this.keys.length;l+=1){const _=this.keys[l],f=this.values[l],d=document.createElement("div");d.className="gui_radio_group_option"+(f===a?" gui_selected":""),d.innerHTML=_,n.append(d),d.onclick=(function(){this.value.set(f);for(const w of this.option_els)w.classList.remove("gui_selected");d.classList.add("gui_selected"),this.onchange(f)}).bind(this),i.push(d)}this.ref_el=e,this.option_els=i}update(){const e=this.value.get();for(let n=0;n<this.option_els.length;n+=1){const i=this.option_els[n];this.values[n]===e?i.classList.add("gui_selected"):i.classList.remove("gui_selected")}}}class he extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"keys");s(this,"values");s(this,"onchange");s(this,"option_els")}render(){const e=document.createElement("div");e.className="gui_checkbox_group",S(this.label,e);const n=D();e.append(n);const i=[],a=this.value.get();for(let l=0;l<this.keys.length;l+=1){const _=this.keys[l],f=this.values[l],d=document.createElement("div");d.className="gui_checkbox_group_option"+(a.indexOf(f)>-1?" gui_selected":""),d.innerHTML=_,n.append(d),d.onclick=(function(){d.classList.contains("gui_selected")?(a.splice(a.indexOf(f),1),d.classList.remove("gui_selected")):(a.push(f),d.classList.add("gui_selected")),this.onchange(this.value.get())}).bind(this),i.push(d)}this.ref_el=e,this.option_els=i}update(){const e=this.value.get();for(let n=0;n<this.option_els.length;n+=1){const i=this.option_els[n];e.indexOf(this.values[n])>-1?i.classList.add("gui_selected"):i.classList.remove("gui_selected")}}}class Pt extends b{constructor(){super(...arguments);s(this,"label");s(this,"value");s(this,"keys");s(this,"values");s(this,"onchange");s(this,"button_el");s(this,"option_els")}render(){const e=document.createElement("div");e.className="gui_select",S(this.label,e);const n=document.createElement("div");n.className="gui_select",e.append(n),n.onclick=function(f){f.stopPropagation()};const i=document.createElement("div");i.className="gui_select_button",i.innerHTML="Select",n.append(i),i.onclick=function(){i.classList.contains("gui_open")?i.classList.remove("gui_open"):i.classList.add("gui_open")};const a=document.createElement("div");a.className="gui_select_container",n.append(a);const l=[],_=this.value.get();for(let f=0;f<this.keys.length;f+=1){const d=this.keys[f];this.values[f]===_&&(i.innerHTML=d);const v=document.createElement("div");v.className="gui_select_option",v.innerHTML=d,v.dataset.value=f.toString(),a.append(v),v.onclick=(function(){const x=this.values[parseInt(v.dataset.value||"")];this.value.set(x),i.innerHTML=d,i.classList.remove("gui_open"),this.onchange(x)}).bind(this),l.push(v)}this.ref_el=e,this.button_el=i,this.option_els=l}static mount(){const e=document.body.querySelector(".gui_window_root");e&&e.addEventListener("click",function(){const n=document.body.querySelector(".gui_select_button.gui_open");n&&n.classList.remove("gui_open")})}update(){const e=this.value.get();for(let n=0;n<this.option_els.length;n+=1)if(this.values[n]===e){this.button_el.innerHTML=this.keys[n];return}}}class It extends b{constructor(){super(...arguments);s(this,"label");s(this,"onclick")}render(){const e=document.createElement("div");e.className="gui_button";const n=document.createElement("button");n.innerHTML=this.label,n.onclick=this.onclick,e.append(n),this.ref_el=e}}class zt extends b{constructor(){super(...arguments);s(this,"auto_resize");s(this,"canvas_el")}render(){const e=document.createElement("div");e.className="gui_canvas";const n=this.canvas_el??document.createElement("canvas");e.append(n),this.auto_resize&&window.addEventListener("resize",function(){var i,a;n.width=((i=n.parentElement)==null?void 0:i.clientWidth)||0,n.height=((a=n.parentElement)==null?void 0:a.clientHeight)||0}),this.ref_el=e,this.canvas_el=n}mount(){var e,n;this.auto_resize&&(this.canvas_el.width=((e=this.canvas_el.parentElement)==null?void 0:e.clientWidth)||0,this.canvas_el.height=((n=this.canvas_el.parentElement)==null?void 0:n.clientHeight)||0)}}const ge=[Lt,rt,St,Nt,At,Ft,Ut,Mt,me,pe,he,Pt,It,zt];let bt=0;function at(t,r=""){const e=new Lt;return e.id=bt,e.title=r,e.grid_x=[],e.grid_y=[],e.layout=[],e.window_parent=t,e.window_children=[],e.parent=t,t&&(t.children.push(e),t.window_children.push(e)),bt+=1,e}function ve(t,r,e){t.grid_x=r,t.grid_y=e}function ye(t,r){const e=[];for(const n of r)e.push(n.id);t.layout=e}function H(t,r,e=!1){const n=new rt;return n.title=r,n.is_collapsed=e,n.parent=t,t.children.push(n),n}function Ee(t,r){const e=new St;return e.value=r,e.parent=t,t.children.push(e),e}function xe(t,r,e,n=()=>{}){const i=new Nt;return i.label=r,i.value=e,i.onchange=n,i.parent=t,t.children.push(i),i}function st(t,r,e,n,i,a,l=()=>{}){const _=new At;return _.label=r,_.value=e,_.step=n,_.min=i,_.max=a,_.onchange=l,_.parent=t,t.children.push(_),_}function L(t,r,e,n,i,a,l=()=>{}){const _=new Ft;return _.label=r,_.value=e,_.step=n,_.min=i,_.max=a,_.onchange=l,_.parent=t,t.children.push(_),_}function G(t,r,e,n,i,a,l,_=()=>{}){const f=new Ut;return f.label=r,f.value=e,f.step=n,f.min=i,f.max=a,f.size=l,f.onchange=_,f.parent=t,t.children.push(f),f}function Q(t,r,e,n,i=()=>{}){const a=new Mt;return a.label=r,a.value=n,a.mode=e,a.onchange=i,a.parent=t,t.children.push(a),a}function be(t,r,e,n,i,a=()=>{}){const l=new Pt;return l.label=r,l.value=e,l.keys=n,l.values=i,l.onchange=a,l.parent=t,t.children.push(l),l}function we(t,r,e){const n=new It;return n.label=r,n.onclick=e,n.parent=t,t.children.push(n),n}function Te(t,r=!0){const e=new zt;return e.auto_resize=r,e.parent=t,t.children.push(e),e}function ct(t,r){t.render(),r.append(t.ref_el),t.mount();for(const e of t.children)ct(e,t.container())}function Re(t){var n;if(!((n=t.parent)==null?void 0:n.ref_el))return;const e=t.ref_el;t.render(),e.replaceWith(t.ref_el),t.mount();for(const i of t.children)ct(i,t.container())}function ke(t,r,e=!0){if(ct(t,r),!!e)for(const n of ge)n.mount()}function Dt(t){if(!(t instanceof rt&&t.is_collapsed)){t.update();for(const r of t.children)Dt(r)}}const j=at(null);ve(j,[P(300,F.PX),P(1,F.FR),P(300,F.PX)],[P(1,F.FR),P(1,F.FR),P(1,F.FR)]);const k=at(j),U=at(j);ye(j,[k,U,U,k,U,U,k,U,U]);const Le=Te(U,!0);ke(j,document.body);const R=Le.canvas_el,o=jt(R),Xt=`#version 300 es
    out vec2 v_tex_coord;

    const vec2 positions[4] = vec2[4](
        vec2(-1.0, -1.0),
        vec2(-1.0, 1.0),
        vec2(1.0, -1.0),
        vec2(1.0, 1.0)
    );

    const vec2 tex_coords[4] = vec2[4](
        vec2(0.0, 0.0),
        vec2(0.0, 1.0),
        vec2(1.0, 0.0),
        vec2(1.0, 1.0)
    );

    void main() {
        gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
        v_tex_coord = tex_coords[gl_VertexID];
    }
`,Se=wt({[o.VERTEX_SHADER]:Xt,[o.FRAGMENT_SHADER]:`#version 300 es
        precision highp float;
        out vec4 o_frag_color;
        in vec2 v_tex_coord;
        uniform sampler2D u_texture;

        void main() {
            o_frag_color = texture(u_texture, v_tex_coord);
        }
    `}),h=wt({[o.VERTEX_SHADER]:Xt,[o.FRAGMENT_SHADER]:`#version 300 es
        precision highp float;
        out vec4 o_frag_color;
        in vec2 v_tex_coord;
        uniform vec2 u_viewport;
        uniform mat4 u_projection;
        uniform mat4 u_view;
        uniform float u_march_limit;
        uniform float u_shadow_limit;
        uniform float u_near;
        uniform float u_far;
        uniform vec3 u_light_dir;
        uniform vec3 u_light_color;
        uniform vec3 u_sky_low_color;
        uniform vec3 u_sky_high_color;
        uniform vec3 u_fract_translation;
        uniform vec3 u_fract_rotation;
        uniform float u_fract_scaling;
        uniform vec3 u_fract_color;
        uniform float u_time;
        uniform float u_ambient_stren;
        uniform float u_specular_stren;
        uniform float u_sun_size;
        uniform int u_aa_samples;
        uniform int u_fract_iter;

        #define FRACT_ITER 16
        #define ANTIALIASING_SAMPLES 1
        #define AMBIENT_OCCLUSION_COLOR_DELTA vec3(0.7)
        #define AMBIENT_OCCLUSION_STRENGTH 0.008
        #define SUN_SHARPNESS 2.0
        #define SUN_SIZE 0.002

        struct res_t {
            float d;
            vec3 c;
        };

        // fractal functions
        void rot_x(inout vec3 p, float c, float s) {
            p.yz = vec2(p.y * c + p.z * s, p.z * c - p.y * s);
        }

        void rot_y(inout vec3 p, float c, float s) {
            p.xz = vec2(p.x * c - p.z * s, p.z * c + p.x * s);
        }

        void rot_z(inout vec3 p, float c, float s) {
            p.xy = vec2(p.x * c + p.y * s, p.y * c - p.x * s);
        }

        void rot_x(inout vec3 p, float a) {
            rot_x(p, cos(a), sin(a));
        }

        void rot_y(inout vec3 p, float a) {
            rot_y(p, cos(a), sin(a));
        }

        void rot_z(inout vec3 p, float a) {
            rot_z(p, cos(a), sin(a));
        }

        void fold_plane(inout vec3 p, vec3 n, float d) {
            p -= 2.0 * min(0.0, dot(p, n) - d) * n;
        }

        void fold_sierpinski(inout vec3 p) {
            p.xy -= min(p.x + p.y, 0.0);
            p.xz -= min(p.x + p.z, 0.0);
            p.yz -= min(p.y + p.z, 0.0);
        }

        vec3 aces_film(vec3 x) {
            float a = 2.51;
            float b = 0.03;
            float c = 2.43;
            float d = 0.59;
            float e = 0.14;

            return (x * (a * x + b)) / (x * (c * x + d) + e);
        }

        void fold_menger(inout vec3 p) {
            float a = min(p.x - p.y, 0.0);
            p.x -= a;
            p.y += a;

            a = min(p.x - p.z, 0.0);
            p.x -= a;
            p.z += a;

            a = min(p.y - p.z, 0.0);
            p.y -= a;
            p.z += a;
        }

        void fold_box(inout vec3 p, vec3 b) {
            p = clamp(p, -b, b) * 2.0 - p;
        }

        // position functions
        vec3 p_translate(vec3 p, vec3 t) {
            return p - t;
        }

        vec3 p_rep(vec3 p, vec3 s) {
            return p - s * round(p / s);
        }

        // signed distance functions
        float sd_sphere(vec3 p, float r) {
            return length(p) - r;
        }

        float sd_box(vec3 p, vec3 b) {
            vec3 q = abs(p) - b;

            return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
        }

        // combination functions
        float op_union(float d0, float d1) {
            return min(d0, d1);
        }

        res_t op_union(res_t r0, res_t r1) {
            if (r0.d < r1.d) {
                return r0;
            }

            return r1;
        }

        float op_union_smooth(float d0, float d1, float k) {
            float h = clamp(0.5 + 0.5 * (d1 - d0) / k, 0.0, 1.0);

            return mix(d1, d0, h) - k * h * (1.0 - h);
        }

        res_t op_union_smooth(res_t r0, res_t r1, float k) {
            float h = clamp(0.5 + 0.5 * (r1.d - r0.d) / k, 0.0, 1.0);

            return res_t(mix(r1.d, r0.d, h) - k * h * (1.0 - h), mix(r0.c, r1.c, k));
        }

        // fractal
        res_t sd_fractal(vec3 p, int iter) {
            res_t res;
            float scaling = 1.0;
            vec3 orbit = vec3(0.0);

            for (int i = 0; i < iter; ++i) {
                p = abs(p);

                rot_z(p, u_fract_rotation.z);

                fold_menger(p);

                rot_x(p, u_fract_rotation.x);

                p *= u_fract_scaling;
                scaling *= u_fract_scaling;

                p += u_fract_translation;

                orbit = max(orbit, p * u_fract_color);
            }

            res.d = sd_box(p, vec3(6.0)) / scaling;
            res.c = orbit;

            return res;
        }

        // map
        res_t map(vec3 p) {
            return sd_fractal(p_rep(p, vec3(4.0, 0.0, 4.0)), u_fract_iter);
        }

        // marcher
        struct mar_t {
            vec3 pos;
            vec3 ray_dir;
            float dist;
            float dist_sum;
            float dist_min;
            float steps;
            int sign;
        };

        void march(inout mar_t mar, inout res_t res, float lim, float near, float far) {
            res = map(mar.pos);
            mar.dist = res.d;
            mar.dist_sum = 0.0;
            mar.dist_min = 1.0;
            mar.steps = 0.0;
            mar.sign = 0;

            for (; mar.steps < lim; mar.steps += 1.0) {
                if (mar.dist_sum < -0.1) {
                    mar.sign = -1;

                    break;
                }

                if (mar.dist < near) {
                    mar.steps += mar.dist / near;
                    mar.sign = 0;

                    break;
                }

               if (mar.dist_sum > far) {
                    mar.sign = 1;

                    break;
                }

                mar.dist_sum += mar.dist;
                mar.pos += mar.ray_dir * mar.dist;
                mar.dist_min = min(mar.dist_min, mar.dist / mar.dist_sum);
                res = map(mar.pos);
                mar.dist = res.d;
            }
        }

        float march_shadow(vec3 pos, vec3 ray_dir, float march_limit, float near, float far) {
            float dist_sum = near;

             for (float i = 0.0; i < march_limit && dist_sum < far; i += 1.0) {
                float dist = map(pos + ray_dir * dist_sum).d;

                if (dist < near) {
                    return 0.0;
                }

                dist_sum += dist;
            }

            return 1.0;
        }

        vec3 calc_normal(vec3 p, float d) {
            vec2 k = vec2(1.0, -1.0);

            return normalize(
                k.xyy * map(p + k.xyy * d).d +
                k.yyx * map(p + k.yyx * d).d +
                k.yxy * map(p + k.yxy * d).d +
                k.xxx * map(p + k.xxx * d).d
            );
        }

        vec3 smooth_color(vec3 p, vec3 s0, vec3 s1, float d) {
            return (
                map(p + s0 * d).c +
                map(p - s0 * d).c +
                map(p + s1 * d).c +
                map(p - s1 * d).c
            ) / 4.0;
        }

        vec3 render_skybox(vec3 ray_dir, vec3 light_dir, int sign) {
            vec3 col = mix(u_sky_low_color, u_sky_high_color, ray_dir.y);
            float sun_size = u_sun_size / 100.0;

            if (sign == 1) {
                float sun_spec = dot(ray_dir, light_dir) - 1.0 + sun_size;
                sun_spec = min(exp(sun_spec * SUN_SHARPNESS / sun_size), 1.0);
                col += u_light_color * sun_spec;
            }

            return col;
        }

        vec3 render(vec3 pos, vec3 ray_dir) {
            mar_t mar;
            mar.pos = pos;
            mar.ray_dir = ray_dir;

            res_t res;

            march(mar, res, u_march_limit, u_near, u_far);

            vec3 col = vec3(0.0);
            vec3 light_dir = normalize(u_light_dir);
            vec3 norm = calc_normal(mar.pos, u_near * 0.5);
            vec3 refl_dir = reflect(mar.ray_dir, norm);

            // background
            vec3 bg_color = render_skybox(mar.ray_dir, light_dir, mar.sign);

            if (mar.sign == 0) {
                float depth = mar.dist_sum / u_far;

                // not sure why
                // mar.pos -= norm * mar.dist;

                // res color
                vec3 res_col = clamp(res.c, 0.0, 1.0);

                // filtering
                vec3 s0 = normalize(cross(mar.ray_dir, norm));
                vec3 s1 = cross(s0, norm);
                res_col = clamp(smooth_color(mar.pos, s0, s1, u_near * 0.5), 0.0, 1.0);

                // ambient
                vec3 ambient = u_light_color * bg_color * u_ambient_stren;

                // diffuse
                float diffuse_factor = clamp(dot(norm, light_dir), 0.0, 1.0);
                vec3 diffuse = u_light_color * diffuse_factor;

                // shadow
                vec3 light_pos = mar.pos + norm * u_near * 100.0;
                diffuse *= march_shadow(light_pos, light_dir, u_shadow_limit, u_near, u_far);

                // specular
                float specular_factor = pow(max(dot(refl_dir, light_dir), 0.0), 16.0);
                vec3 specular = u_light_color * specular_factor * u_specular_stren;

                col += res_col * (ambient + diffuse + specular);

                // ao
                float ao_factor = 1.0 / (1.0 + mar.steps * AMBIENT_OCCLUSION_STRENGTH);
                col += (1.0 - ao_factor) * AMBIENT_OCCLUSION_COLOR_DELTA;

                // fog
                vec3 fog = depth * bg_color;

                col = (1.0 - depth) * col + fog;
            } else if (mar.sign == 1) {
                col += bg_color;
            }

            return col;
        }

        void main() {
            mat4 proj_inv = inverse(u_projection);
            mat4 view_inv = inverse(u_view);

            vec3 pos = view_inv[3].xyz;
            vec3 col = vec3(0.0);

            for (int i = 0; i < u_aa_samples; ++i) {
                for (int j = 0; j < u_aa_samples; ++j) {
                    vec2 delta = vec2(i, j) / float(u_aa_samples);
                    vec2 tex_coord = (gl_FragCoord.xy + delta) / u_viewport;
                    vec2 uv = tex_coord * 2.0 - 1.0;
                    vec4 clip = proj_inv * vec4(uv, 0.0, 0.0);
                    vec4 view = view_inv * vec4(clip.xy, -1.0, 0.0);
                    vec3 ray_dir = normalize(view.xyz);

                    col += render(pos, ray_dir);
                }
            }

            col /= float(u_aa_samples * u_aa_samples);

            o_frag_color = vec4(col, 1.0);
        }
    `}),Ne=o.getUniformLocation(h,"u_viewport"),Ae=o.getUniformLocation(h,"u_projection"),Fe=o.getUniformLocation(h,"u_view"),Ue=o.getUniformLocation(h,"u_march_limit"),Me=o.getUniformLocation(h,"u_shadow_limit"),Pe=o.getUniformLocation(h,"u_near"),Ie=o.getUniformLocation(h,"u_far"),ze=o.getUniformLocation(h,"u_light_dir"),De=o.getUniformLocation(h,"u_light_color"),Xe=o.getUniformLocation(h,"u_sky_low_color"),Ce=o.getUniformLocation(h,"u_sky_high_color"),Oe=o.getUniformLocation(h,"u_fract_translation"),Be=o.getUniformLocation(h,"u_fract_rotation"),He=o.getUniformLocation(h,"u_fract_scaling"),Ge=o.getUniformLocation(h,"u_fract_color"),je=o.getUniformLocation(h,"u_time"),Ke=o.getUniformLocation(h,"u_ambient_stren"),Ye=o.getUniformLocation(h,"u_specular_stren"),qe=o.getUniformLocation(h,"u_aa_samples"),$e=o.getUniformLocation(h,"u_fract_iter"),We=o.getUniformLocation(h,"u_sun_size"),u={preset:25,screenshot_res:kt(3840,2160),is_rendering:!0,divider:4,aa_samples:1,march_limit:512,shadow_limit:64,light_dir:c(1,1,1),light_color:$(255,252,207),sky_low_color:$(156,179,229),sky_high_color:$(69,102,190),ambient_stren:.1,specular_stren:.3,sun_size:.1,fract_iter:16,fract_translation:c(0,0,0),fract_rotation:c(0,0,0),fract_scaling:1,fract_color:$(255,255,255)};let X=Math.floor(R.width/u.divider),C=Math.floor(R.height/u.divider),O=o.createTexture();o.bindTexture(o.TEXTURE_2D,O);o.pixelStorei(o.UNPACK_ALIGNMENT,1);o.texImage2D(o.TEXTURE_2D,0,o.RGBA,X,C,0,o.RGBA,o.UNSIGNED_BYTE,null);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);const lt=o.createFramebuffer();o.bindFramebuffer(o.FRAMEBUFFER,lt);o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,O,0);const p=ne();p.movement_speed=.01;p.near=1e-5,p.far=32,p.position[1]=15;function Ct(t){const r=it[t];u.fract_scaling=r.fract_scaling,tt(u.fract_rotation,r.fract_rotation),tt(u.fract_translation,r.fract_translation),tt(u.fract_color,r.fract_color)}Ct(u.preset);le();ce(function(t){document.pointerLockElement===R&&(ie(p,t.xd),oe(p,t.yd))});se(function(t){t.code==="Backquote"&&(document.pointerLockElement===R?document.exitPointerLock():R.requestPointerLock())});function Ve(){document.pointerLockElement===R&&(W("KeyA")&&xt(p,-1),W("KeyD")&&xt(p,1),W("KeyS")&&Et(p,-1),W("KeyW")&&Et(p,1)),re(p),Rt(p,X,C),ae(p)}function Qe(){X=R.width/u.divider,C=R.height/u.divider,o.bindTexture(o.TEXTURE_2D,O),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,X,C,0,o.RGBA,o.UNSIGNED_BYTE,null),o.bindFramebuffer(o.FRAMEBUFFER,lt),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,O,0)}function Ze(){nt=!0,u.shadow_limit=1024,u.aa_samples=4,u.march_limit=1024;let t=u.screenshot_res[0],r=u.screenshot_res[1];const e=o.createTexture();o.bindTexture(o.TEXTURE_2D,e),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,t,r,0,o.RGBA,o.UNSIGNED_BYTE,null),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);const n=o.createFramebuffer();o.bindFramebuffer(o.FRAMEBUFFER,n),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),o.bindFramebuffer(o.FRAMEBUFFER,null),Rt(p,t,r),Ot(n,e,t,r);const i=new Uint8Array(t*r*4);o.bindFramebuffer(o.FRAMEBUFFER,n),o.bindTexture(o.TEXTURE_2D,e),o.readPixels(0,0,t,r,o.RGBA,o.UNSIGNED_BYTE,i),o.bindFramebuffer(o.FRAMEBUFFER,null);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=t,a.height=r;const _=new ImageData(new Uint8ClampedArray(i),t,r);l.putImageData(_,0,0),l.scale(1,-1),l.drawImage(a,0,-a.height);const f=document.createElement("a");f.download="image.png",f.href=a.toDataURL("image/png"),f.click(),u.shadow_limit=64,u.aa_samples=1,u.march_limit=512,nt=!1}function Ot(t,r,e,n){o.bindFramebuffer(o.FRAMEBUFFER,t),o.viewport(0,0,e,n),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.bindTexture(o.TEXTURE_2D,r),o.useProgram(h),o.uniform2fv(Ne,kt(e,n)),o.uniformMatrix4fv(Ae,!1,p.projection),o.uniformMatrix4fv(Fe,!1,p.view),o.uniform1f(Ue,u.march_limit),o.uniform1f(Me,u.shadow_limit),o.uniform1f(Pe,p.near),o.uniform1f(Ie,p.far),o.uniform3fv(ze,u.light_dir),o.uniform3fv(De,u.light_color),o.uniform3fv(Xe,u.sky_low_color),o.uniform3fv(Ce,u.sky_high_color),o.uniform3fv(Oe,u.fract_translation),o.uniform3fv(Be,u.fract_rotation),o.uniform1f(He,u.fract_scaling),o.uniform3fv(Ge,u.fract_color),o.uniform1f(je,performance.now()/1e3),o.uniform1f(Ke,u.ambient_stren),o.uniform1f(Ye,u.specular_stren),o.uniform1f(We,u.sun_size),o.uniform1i(qe,u.aa_samples),o.uniform1i($e,u.fract_iter),o.drawArrays(o.TRIANGLE_STRIP,0,4),o.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(){u.is_rendering&&Ot(lt,O,X,C),o.viewport(0,0,R.width,R.height),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.useProgram(Se),o.drawArrays(o.TRIANGLE_STRIP,0,4)}let nt=!1;function Bt(){nt||(Ve(),Je()),requestAnimationFrame(Bt)}Bt();const tn=Object.keys(it),en=Object.keys(it).map(t=>parseInt(t)),N=H(k,"Settings");Ee(N,`
<pre>
Info:
Press backtick '\`' to enter/exit camera
</pre>
`);be(N,"Preset",E(u,"preset"),tn,en,function(){Ct(u.preset),Dt(k)});xe(N,"Is Rendering",E(u,"is_rendering"));L(N,"Qaulity Divider",E(u,"divider"),1,1,16,function(){Qe()});L(N,"AA Samples",E(u,"aa_samples"),1,1,4);L(N,"March Limit",E(u,"march_limit"),1,1,1024);G(N,"Screenshot Resolution",u.screenshot_res,1,1,8192,2);we(N,"Make Screenshot",Ze);const K=H(k,"Canera");st(K,"Near",E(p,"near"),1e-5,1e-5,1024);st(K,"Far",E(p,"far"),1e-5,1e-5,1024);L(K,"FOV",E(p,"fov"),.1,0,180);G(K,"Position",p.position,.001,-1e3,1e3,3);L(K,"Speed",E(p,"movement_speed"),.001,0,1);const Y=H(k,"Lighting");G(Y,"Light Direction",u.light_dir,.01,-1,1,3);Q(Y,"Light Color",B.R_0_1,u.light_color);L(Y,"Ambient Strength",E(u,"ambient_stren"),.01,0,1);L(Y,"Specular Strength",E(u,"specular_stren"),.01,0,1);L(Y,"Shadow march_limit",E(u,"shadow_limit"),1,1,1024);const _t=H(k,"Skybox");Q(_t,"Sky Low Color",B.R_0_1,u.sky_low_color);Q(_t,"Sky High Color",B.R_0_1,u.sky_high_color);L(_t,"Sun Size",E(u,"sun_size"),.001,0,1);const q=H(k,"Fractal");st(q,"Fractal Scaling",E(u,"fract_scaling"),.01,-100,100);G(q,"Fractal Rotation",u.fract_rotation,.01,-180,180,3);G(q,"Fractal Translation",u.fract_translation,.01,-100,100,3);Q(q,"Fractal Color",B.R_0_1,u.fract_color);L(q,"Fractal Iterations",E(u,"fract_iter"),1,1,16);Re(k);
