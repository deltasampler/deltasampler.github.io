(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();function Se(e,t,o){return Math.min(Math.max(e,t),o)}var ie=(e=>(e[e.PX=0]="PX",e[e.PCT=1]="PCT",e[e.FR=2]="FR",e))(ie||{});const mn={0:"px",1:"%",2:"fr"};class vn{}function _e(e,t){const o=new vn;return o.x=e,o.u=t,o}function yn(e){return`${e.x}${mn[e.u]}`}class hn{get(){return this.type===0?this.object[this.key]:this.call_get()}set(t){this.type===0?this.object[this.key]=t:this.call_set(t)}}function m(e,t){const o=new hn;return o.type=0,o.object=e,o.key=t,o}function ue(e){const t=Object.values(e);return t.slice(0,t.length/2).map(o=>String(o))}function fe(e){const t=Object.keys(e);return t.slice(0,t.length/2).map(o=>Number(o))}function ne(e,t){if(!e)return null;const o=document.createElement("span");return o.className="gui_label",o.innerHTML=e,t.append(o),o}function xe(){const e=document.createElement("div");return e.className="gui_container",e}function Xe(e,t,o,n,i){const r=document.createElement("input");return r.className="gui_input",r.type=e,r.step=o.toString(),r.min=n.toString(),r.max=i.toString(),r.value=t.toString(),r}class L{constructor(){this.children=[]}container(){return this.ref_el}render(){}mount(){}static mount(){}update(){}}class to extends L{grid_str(t){let o="";for(let n=0;n<t.length;n+=1){const i=t[n];o+=yn(i),n<t.length-1&&(o+=" ")}return o}layout_str(){let t="";const o=this.grid_x.length,n=this.grid_y.length,i=o*n;for(let r=0;r<i;r+=o){let a="";for(let c=r;c<r+o;c+=1){const _=this.layout[c];a+=`w${_}`,c<r+o-1&&(a+=" ")}t+=`"${a}"
`}return t}render(){const t=document.createElement("div");this.window_parent?t.className="gui_window":t.className="gui_window_root",this.window_children.length?(t.style.display="grid",t.style.gridTemplateColumns=this.grid_str(this.grid_x),t.style.gridTemplateRows=this.grid_str(this.grid_y),t.style.gridTemplateAreas=this.layout_str()):t.style.gridArea=`w${this.id}`,this.ref_el=t}}class zt extends L{container(){return this.container_el}render(){const t=document.createElement("div");t.className="gui_collapsing_header"+(this.is_collapsed?" gui_is_collapsed":"");const o=document.createElement("div");o.className="gui_title",o.innerHTML=this.title,t.append(o),o.onclick=(function(){this.is_collapsed?(this.is_collapsed=!1,t.classList.remove("gui_is_collapsed")):(this.is_collapsed=!0,t.classList.add("gui_is_collapsed"))}).bind(this);const n=xe();t.append(n),this.ref_el=t,this.container_el=n}}class oo extends L{render(){const t=document.createElement("div");t.className="gui_text",t.innerHTML=this.value,this.ref_el=t}}class no extends L{render(){const t=document.createElement("div");t.className="gui_bool";const o=document.createElement("div");o.className="gui_checkbox_group_option"+(this.value.get()?" gui_selected":""),o.innerHTML=this.label,t.append(o),o.onclick=(function(){this.value.get()?(this.value.set(!1),o.classList.remove("gui_selected")):(this.value.set(!0),o.classList.add("gui_selected")),this.onchange(this.value.get())}).bind(this),this.ref_el=t,this.input_el=o}update(){this.value.get()?this.input_el.classList.add("gui_selected"):this.input_el.classList.remove("gui_selected")}}class io extends L{render(){const t=document.createElement("div");t.className="gui_input_number",ne(this.label,t);const o=Xe("number",this.value.get(),this.step,this.min,this.max);t.append(o),o.onchange=(function(){const n=Se(parseFloat(o.value),this.min,this.max);this.value.set(n),o.value=n.toString(),this.onchange(n)}).bind(this),this.ref_el=t,this.input_el=o}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.value.get().toString())}}class ro extends L{render(){const t=document.createElement("div");t.className="gui_slider_number",ne(this.label,t);const o=xe();o.className="gui_input_range_container",t.append(o);const n=Xe("range",this.value.get(),this.step,this.min,this.max);n.className="gui_input_range",o.dataset.content=n.value,o.append(n),n.onchange=(function(){const i=Se(parseFloat(n.value),this.min,this.max);this.value.set(i),o.dataset.content=n.value,this.onchange(i)}).bind(this),n.onmousemove=function(){o.dataset.content=n.value},this.ref_el=t,this.container_el=o,this.input_el=n}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.value.get().toString(),this.container_el.dataset.content=this.input_el.value)}}class so extends L{render(){const t=document.createElement("div");t.className="gui_input_vec",t.style.setProperty("--size",this.size.toString()),ne(this.label,t);const o=xe();t.append(o);const n=[];for(let i=0;i<this.value.length;i+=1){const r=Xe("number",this.value[i],this.step,this.min,this.max);o.append(r),r.onchange=(function(){const a=Se(parseFloat(r.value),this.min,this.max);this.value[i]=a,r.value=a.toString(),this.onchange(this.value)}).bind(this),n.push(r)}this.ref_el=t,this.input_els=n}update(){for(let t=0;t<this.value.length;t+=1){const o=this.input_els[t];document.activeElement!=o&&(o.value=this.value[t].toString())}}}var Le=(e=>(e[e.R_0_1=0]="R_0_1",e[e.R_0_255=1]="R_0_255",e))(Le||{});class ao extends L{to_hex(t,o,n){const i=this.mode===0?255:1,r=Math.round(t*i).toString(16).padStart(2,"0"),a=Math.round(o*i).toString(16).padStart(2,"0"),c=Math.round(n*i).toString(16).padStart(2,"0");return`#${r}${a}${c}`}from_hex(t){const o=t.replace(/^#/,""),n=this.mode===0?255:1,i=parseInt(o.substring(0,2),16)/n,r=parseInt(o.substring(2,4),16)/n,a=parseInt(o.substring(4,6),16)/n;return[i,r,a]}render(){const t=document.createElement("div");t.className="gui_color_edit"+(this.value.length===4?" gui_rgba":""),ne(this.label,t);const o=xe();t.append(o);const n=document.createElement("input");if(n.className="gui_input_color",n.type="color",n.value=this.to_hex(this.value[0],this.value[1],this.value[2]),o.append(n),n.onchange=(function(){const i=this.from_hex(n.value);this.value[0]=i[0],this.value[1]=i[1],this.value[2]=i[2],this.onchange(this.value)}).bind(this),this.value.length==4){const i=document.createElement("div");i.className="gui_input_range_container",o.append(i);const r=Xe("range",this.value[3],.01,0,1);r.className="gui_input_range",i.dataset.content=r.value,i.append(r),r.onchange=(function(){this.value[3]=parseFloat(r.value)*(this.mode===1?255:1),i.dataset.content=r.value,this.onchange(this.value)}).bind(this),r.onmousemove=function(){i.dataset.content=r.value},this.range_el=r,this.range_container_el=i}this.ref_el=t,this.input_el=n}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.to_hex(this.value[0],this.value[1],this.value[2])),this.range_container_el&&this.range_el&&document.activeElement!=this.range_el&&(this.range_el.value=this.value[3].toString(),this.range_container_el.dataset.content=this.range_el.value)}}class co extends L{render(){const t=document.createElement("div");t.className="gui_input_text",ne(this.label,t);const o=document.createElement("input");o.className="gui_input",o.type="text",o.value=this.value.get().toString(),t.append(o),o.onchange=(function(){this.value.set(o.value),this.onchange(o.value)}).bind(this),this.ref_el=t,this.input_el=o}update(){document.activeElement!=this.input_el&&(this.input_el.value=this.value.get().toString())}}class xn extends L{render(){const t=document.createElement("div");t.className="gui_radio_group",ne(this.label,t);const o=xe();t.append(o);const n=[],i=this.value.get();for(let r=0;r<this.keys.length;r+=1){const a=this.keys[r],c=this.values[r],_=document.createElement("div");_.className="gui_radio_group_option"+(c===i?" gui_selected":""),_.innerHTML=a,o.append(_),_.onclick=(function(){this.value.set(c);for(const u of this.option_els)u.classList.remove("gui_selected");_.classList.add("gui_selected"),this.onchange(c)}).bind(this),n.push(_)}this.ref_el=t,this.option_els=n}update(){const t=this.value.get();for(let o=0;o<this.option_els.length;o+=1){const n=this.option_els[o];this.values[o]===t?n.classList.add("gui_selected"):n.classList.remove("gui_selected")}}}class bn extends L{render(){const t=document.createElement("div");t.className="gui_checkbox_group",ne(this.label,t);const o=xe();t.append(o);const n=[],i=this.value.get();for(let r=0;r<this.keys.length;r+=1){const a=this.keys[r],c=this.values[r],_=document.createElement("div");_.className="gui_checkbox_group_option"+(i.indexOf(c)>-1?" gui_selected":""),_.innerHTML=a,o.append(_),_.onclick=(function(){_.classList.contains("gui_selected")?(i.splice(i.indexOf(c),1),_.classList.remove("gui_selected")):(i.push(c),_.classList.add("gui_selected")),this.onchange(this.value.get())}).bind(this),n.push(_)}this.ref_el=t,this.option_els=n}update(){const t=this.value.get();for(let o=0;o<this.option_els.length;o+=1){const n=this.option_els[o];t.indexOf(this.values[o])>-1?n.classList.add("gui_selected"):n.classList.remove("gui_selected")}}}class lo extends L{render(){const t=document.createElement("div");t.className="gui_select",ne(this.label,t);const o=document.createElement("div");o.className="gui_select",t.append(o),o.onclick=function(c){c.stopPropagation()};const n=document.createElement("div");n.className="gui_select_button",n.innerHTML="Select",o.append(n),n.onclick=function(){n.classList.contains("gui_open")?n.classList.remove("gui_open"):n.classList.add("gui_open")};const i=document.createElement("div");i.className="gui_select_container",o.append(i);const r=[],a=this.value.get();for(let c=0;c<this.keys.length;c+=1){const _=this.keys[c];this.values[c]===a&&(n.innerHTML=_);const f=document.createElement("div");f.className="gui_select_option",f.innerHTML=_,f.dataset.value=c.toString(),i.append(f),f.onclick=(function(){const d=this.values[parseInt(f.dataset.value||"")];this.value.set(d),n.innerHTML=_,n.classList.remove("gui_open"),this.onchange(d)}).bind(this),r.push(f)}this.ref_el=t,this.button_el=n,this.option_els=r}static mount(){const t=document.body.querySelector(".gui_window_root");t&&t.addEventListener("click",function(){const o=document.body.querySelector(".gui_select_button.gui_open");o&&o.classList.remove("gui_open")})}update(){const t=this.value.get();for(let o=0;o<this.option_els.length;o+=1)if(this.values[o]===t){this.button_el.innerHTML=this.keys[o];return}}}class _o extends L{render(){const t=document.createElement("div");t.className="gui_button";const o=document.createElement("button");o.innerHTML=this.label,o.onclick=this.onclick,t.append(o),this.ref_el=t}}class uo extends L{render(){const t=document.createElement("div");t.className="gui_canvas";const o=this.canvas_el??document.createElement("canvas");t.append(o),this.auto_resize&&window.addEventListener("resize",function(){var n,i;o.width=((n=o.parentElement)==null?void 0:n.clientWidth)||0,o.height=((i=o.parentElement)==null?void 0:i.clientHeight)||0}),this.ref_el=t,this.canvas_el=o}mount(){var t,o;this.auto_resize&&(this.canvas_el.width=((t=this.canvas_el.parentElement)==null?void 0:t.clientWidth)||0,this.canvas_el.height=((o=this.canvas_el.parentElement)==null?void 0:o.clientHeight)||0)}}const wn=[to,zt,oo,no,io,ro,so,ao,co,xn,bn,lo,_o,uo];let Pt=0;function qe(e,t=""){const o=new to;return o.id=Pt,o.title=t,o.grid_x=[],o.grid_y=[],o.layout=[],o.window_parent=e,o.window_children=[],o.parent=e,e&&(e.children.push(o),e.window_children.push(o)),Pt+=1,o}function zn(e,t,o){e.grid_x=t,e.grid_y=o}function En(e,t){const o=[];for(const n of t)o.push(n.id);e.layout=o}function Ue(e,t,o=!1){const n=new zt;return n.title=t,n.is_collapsed=o,n.parent=e,e&&e.children.push(n),n}function re(e,t){const o=new oo;return o.value=t,o.parent=e,e&&e.children.push(o),o}function ze(e,t,o,n=()=>{}){const i=new no;return i.label=t,i.value=o,i.onchange=n,i.parent=e,e&&e.children.push(i),i}function je(e,t,o,n,i,r,a=()=>{}){const c=new io;return c.label=t,c.value=o,c.step=n,c.min=i,c.max=r,c.onchange=a,c.parent=e,e&&e.children.push(c),c}function Ee(e,t,o,n,i,r,a=()=>{}){const c=new ro;return c.label=t,c.value=o,c.step=n,c.min=i,c.max=r,c.onchange=a,c.parent=e,e&&e.children.push(c),c}function $(e,t,o,n,i,r,a,c=()=>{}){const _=new so;return _.label=t,_.value=o,_.step=n,_.min=i,_.max=r,_.size=a,_.onchange=c,_.parent=e,e&&e.children.push(_),_}function Ke(e,t,o,n,i=()=>{}){const r=new ao;return r.label=t,r.value=n,r.mode=o,r.onchange=i,r.parent=e,e&&e.children.push(r),r}function An(e,t,o,n=()=>{}){const i=new co;return i.label=t,i.value=o,i.onchange=n,i.parent=e,e&&e.children.push(i),i}function se(e,t,o,n,i,r=()=>{}){const a=new lo;return a.label=t,a.value=o,a.keys=n,a.values=i,a.onchange=r,a.parent=e,e&&e.children.push(a),a}function Ve(e,t,o){const n=new _o;return n.label=t,n.onclick=o,n.parent=e,e&&e.children.push(n),n}function Fn(e,t=!0){const o=new uo;return o.auto_resize=t,o.parent=e,e&&e.children.push(o),o}function Et(e,t){e.render(),t.append(e.ref_el),e.mount();for(const o of e.children)Et(o,e.container())}function fo(e){var n;if(!((n=e.parent)==null?void 0:n.ref_el))return;const o=e.ref_el;e.render(),o.replaceWith(e.ref_el),e.mount();for(const i of e.children)Et(i,e.container())}function Nn(e,t,o=!0){if(Et(e,t),!!o)for(const n of wn)n.mount()}function po(e){if(!(e instanceof zt&&e.is_collapsed)){e.update();for(const t of e.children)po(t)}}let s;function Rn(e){return s=e.getContext("webgl2")}function Sn(e,t){const o=s.createShader(e);if(!o)return null;if(s.shaderSource(o,t),s.compileShader(o),!s.getShaderParameter(o,s.COMPILE_STATUS)){const i=s.getShaderInfoLog(o);return console.error(i),s.deleteShader(o),null}return o}function oe(e){const t=s.createProgram(),o=[];for(const i in e){const r=e[i],a=Sn(parseInt(i),r);if(!a){for(const c of o)s.deleteShader(c);return null}o.push(a)}for(const i of o)s.attachShader(t,i);s.linkProgram(t);for(const i of o)s.detachShader(t,i),s.deleteShader(i);if(!s.getProgramParameter(t,s.LINK_STATUS)){const i=s.getProgramInfoLog(t);return console.error(i),s.deleteProgram(t),null}return t}const Ge=Math.abs,Ln=Math.pow;function kn(e){return e*Math.PI/180}const In=Math.min;function Dn(e,t){return(e+t)%t}function T(e){return e/90%2===1}const Tn=Float32Array;function Ct(e=1,t=0,o=0,n=0,i=0,r,a=0,c=0,_=0,u=0,f,d=0,S=0,I=0,M=0,Y){const v=new Tn(16);return v[0]=e,v[1]=t,v[2]=o,v[3]=n,v[4]=i,v[5]=e,v[6]=a,v[7]=c,v[8]=_,v[9]=u,v[10]=e,v[11]=d,v[12]=S,v[13]=I,v[14]=M,v[15]=e,v}function go(e){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1}function Mn(e,t,o){const n=o[0],i=o[1],r=o[2];e[12]=t[0]*n+t[4]*i+t[8]*r+t[12],e[13]=t[1]*n+t[5]*i+t[9]*r+t[13],e[14]=t[2]*n+t[6]*i+t[10]*r+t[14],e[15]=t[3]*n+t[7]*i+t[11]*r+t[15]}function Un(e,t,o){const n=o[0],i=o[1],r=o[2];e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]}const P=Float32Array;function l(e=0,t){const o=new P(2);return o[0]=e,o[1]=t??e,o}function ae(e,t,o){e[0]=t,e[1]=o}function p(e,t){e[0]=t[0],e[1]=t[1]}function h(e){const t=new P(2);return p(t,e),t}function it(e){e[0]=0,e[1]=0}function jn(e,t){e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1])}function Vn(e){const t=new P(2);return jn(t,e),t}function mo(e,t,o){e[0]=t[0]+o[0],e[1]=t[1]+o[1]}function Ae(e,t){const o=new P(2);return mo(o,e,t),o}function ye(e,t){mo(e,e,t)}function Hn(e,t,o){e[0]=t[0]-o[0],e[1]=t[1]-o[1]}function ke(e,t){const o=new P(2);return Hn(o,e,t),o}function Pn(e,t,o){e[0]=t[0]*o[0],e[1]=t[1]*o[1]}function Ot(e,t){const o=new P(2);return Pn(o,e,t),o}function vo(e,t,o){e[0]=t[0]*o,e[1]=t[1]*o}function he(e,t){const o=new P(2);return vo(o,e,t),o}function Cn(e,t){vo(e,e,t)}function On(e,t,o){e[0]=t[0]/o,e[1]=t[1]/o}function le(e,t){const o=new P(2);return On(o,e,t),o}function Kn(e,t,o,n){e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n}function rt(e,t,o){Kn(e,e,t,o)}function $e(e,t){return e[0]*t[0]+e[1]*t[1]}function Gn(e){return Math.hypot(e[0],e[1])}function $n(e,t){const o=e[0]-t[0],n=e[1]-t[1];return o*o+n*n}function Zn(e,t,o){const n=t[0]-o[0],i=t[1]-o[1];let r=n*n+i*i;r>0&&(r=1/Math.sqrt(r)),e[0]=n*r,e[1]=i*r}function Wn(e,t){const o=new P(2);return Zn(o,e,t),o}function Xn(e,t,o,n){const i=t[0],r=t[1];e[0]=i+n*(o[0]-i),e[1]=r+n*(o[1]-r)}function At(e,t,o){const n=new P(2);return Xn(n,e,t,o),n}const Ft=Float32Array;function Nt(e=0,t,o){const n=new Ft(3);return n[0]=e,n[1]=t??e,n[2]=o??e,n}function st(e,t){e[0]=t[0],e[1]=t[1],e[2]=t[2]}function Ie(e){const t=new Ft(3);return st(t,e),t}class Bn{}function yo(){const e=new Bn;return e.position=l(),e.right=l(1,0),e.up=l(0,1),e.world_up=l(0,1),e.projection=Ct(1),e.near=-100,e.far=100,e.view=Ct(1),e.scale=50,e.roll=0,e.movement_speed=.1,e.roll_speed=.1,e.zoom_speed=.1,e}function qn(e,t,o){return go(e.projection),Un(e.projection,e.projection,Nt(e.scale/t,e.scale/o,1)),e.projection}function Yn(e){return go(e.view),Mn(e.view,e.view,Nt(-e.position[0],-e.position[1],0)),e.view}function Rt(e,t,o,n){const i=t[0]/o*2-1,r=t[1]/n*-2+1,a=o/e.scale,c=n/e.scale;return l(e.position[0]+i*a,e.position[1]+r*c)}function at(e=0,t=0,o=0){const n=new Ft(3);return n[0]=e/255,n[1]=t/255,n[2]=o/255,n}function Jn(e,t,o){return e+t*256+o*65536}const ho=Float32Array;function y(e=0,t,o,n){const i=new ho(4);return i[0]=e,i[1]=t??e,i[2]=o??e,i[3]=n??e,i}function be(e,t,o,n,i){e[0]=t,e[1]=o,e[2]=n,e[3]=i}function Qn(e,t){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]}function Ye(e){const t=new ho(4);return Qn(t,e),t}function R(e){return Array.from(e)}function A(e,t){return e&&Array.isArray(e)&&e.length===t?new Float32Array(e):null}class xo{}function St(){const e=new xo;return e.position=l(),e.rotation=0,e.scaling=l(1),e}function ei(e){const t=new xo;return t.position=h(e.position),t.rotation=e.rotation,t.scaling=h(e.scaling),t}function ti(e){return{position:R(e.position),rotation:e.rotation,scaling:R(e.scaling)}}function oi(e){const t=St();return t.position=A(e.position,2)??t.position,t.rotation=e.rotation??t.rotation,t.scaling=A(e.scaling,2)??t.scaling,t}var ct=(e=>(e[e.BOX=0]="BOX",e[e.CIRCLE=1]="CIRCLE",e))(ct||{});class Lt{}function bo(){const e=new Lt;return e.type=0,e.size=l(1),e.radius=1,e}function ni(e){const t=new Lt;return t.type=e.type,t.size=h(e.size),t.radius=e.radius,t}function ii(e){return{type:e.type,size:R(e.size),radius:e.radius}}function ri(e){const t=new Lt;return t.type=e.type??t.type,t.size=A(e.size,2)??t.size,t.radius=e.radius??t.radius,t}class kt{}function wo(){const e=new kt;return e.mass=1,e.force=l(),e.acceleration=l(),e.velocity=l(),e.damping=.01,e.friction=.2,e.restitution=.5,e.dynamic_flag=!1,e.collision_flag=!0,e}function si(e){const t=new kt;return t.mass=e.mass,t.force=h(e.force),t.acceleration=h(e.acceleration),t.velocity=h(e.velocity),t.damping=e.damping,t.friction=e.friction,t.restitution=e.restitution,t.dynamic_flag=e.dynamic_flag,t.collision_flag=e.collision_flag,t}function ai(e){return{mass:e.mass,force:R(e.force),acceleration:R(e.acceleration),velocity:R(e.velocity),damping:e.damping,friction:e.friction,restitution:e.restitution,dynamic_flag:e.dynamic_flag,collision_flag:e.collision_flag}}function ci(e){const t=new kt;return t.mass=e.mass??t.mass,t.force=A(e.force,2)??t.force,t.acceleration=A(e.acceleration,2)??t.acceleration,t.velocity=A(e.velocity,2)??t.velocity,t.damping=e.damping??t.damping,t.friction=e.friction??t.friction,t.restitution=e.restitution??t.restitution,t.dynamic_flag=e.dynamic_flag??t.dynamic_flag,t.collision_flag=e.collision_flag??t.collision_flag,t}var lt=(e=>(e[e.DEFAULT=0]="DEFAULT",e[e.SPIKES=1]="SPIKES",e))(lt||{}),_t=(e=>(e[e.NONE=0]="NONE",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.BOTTOM=3]="BOTTOM",e[e.TOP=4]="TOP",e[e.ALL=5]="ALL",e))(_t||{}),ut=(e=>(e[e.FLAT=0]="FLAT",e[e.CHECK=1]="CHECK",e[e.BRICK=2]="BRICK",e))(ut||{});class It{}function zo(){const e=new It;return e.zindex=0,e.inner_color=y(0,0,0,255),e.outer_color=y(255),e.option=y(),e.params=Nt(),e}function li(e){const t=new It;return t.zindex=e.zindex,t.inner_color=Ye(e.inner_color),t.outer_color=Ye(e.outer_color),t.option=Ye(e.option),t.params=Ie(e.params),t}function _i(e){return{zindex:e.zindex,inner_color:R(e.inner_color),outer_color:R(e.outer_color),option:[e.option[0],e.option[1],e.option[2],0],params:R(e.params)}}function ui(e){const t=new It;return t.zindex=e.zindex??t.zindex,t.inner_color=A(e.inner_color,4)??t.inner_color,t.outer_color=A(e.outer_color,4)??t.outer_color,t.option=A(e.option,4)??t.option,t.params=A(e.params,3)??t.params,t}class Dt{}function fi(e){const t=new Dt;return t.start=h(e.start),t.end=h(e.end),t.force=e.force,t.dir=e.dir,t.looping_flag=e.looping_flag,t}function pi(e,t,o,n,i){const r=new Dt;return r.start=h(e),r.end=h(t),r.force=o,r.dir=n,r.looping_flag=i,r}function di(e){return{start:R(e.start),end:R(e.end),force:e.force,dir:e.dir,looping_flag:e.looping_flag}}function gi(e){const t=new Dt;return t.start=A(e.start,2)??t.start,t.end=A(e.end,2)??t.end,t.force=e.force??t.force,t.dir=e.dir??t.dir,t.looping_flag=e.looping_flag??t.looping_flag,t}var K=(e=>(e[e.DEFAULT=0]="DEFAULT",e[e.START_ZONE=1]="START_ZONE",e[e.END_ZONE=2]="END_ZONE",e))(K||{});class Tt{}function we(){const e=new Tt;return e.type=0,e.transform=St(),e.geometry=bo(),e.body=wo(),e.style=zo(),e.animation=null,e.platform_flag=!1,e.death_flag=!1,e.drag_position=l(),e.drag_size=l(),e}function Eo(e){const t=new Tt;return t.type=e.type,t.transform=ei(e.transform),t.geometry=ni(e.geometry),t.body=si(e.body),t.style=li(e.style),t.animation=e.animation?fi(e.animation):null,t.platform_flag=e.platform_flag,t.death_flag=e.death_flag,t.drag_position=h(e.drag_position),t.drag_size=h(e.drag_size),t}function mi(e){return{type:e.type,transform:ti(e.transform),geometry:ii(e.geometry),body:ai(e.body),style:_i(e.style),animation:e.animation?di(e.animation):null,platform_flag:e.platform_flag,death_flag:e.death_flag,drag_position:R(e.drag_position),drag_size:R(e.drag_size)}}function vi(e){const t=new Tt;return t.type=e.type??t.type,t.transform=oi(e.transform)??t.transform,t.geometry=ri(e.geometry)??t.geometry,t.body=ci(e.body)??t.body,t.style=ui(e.style)??t.style,t.animation=e.animation?gi(e.animation):null,t.platform_flag=e.platform_flag??t.platform_flag,t.death_flag=e.death_flag??t.death_flag,t.drag_position=A(e.drag_position,2)??t.drag_position,t.drag_size=A(e.drag_size,2)??t.drag_size,t}var O=(e=>(e[e.GROUND=0]="GROUND",e[e.BRICK=1]="BRICK",e[e.SPIKES=2]="SPIKES",e[e.MOVER=3]="MOVER",e[e.START_ZONE=4]="START_ZONE",e[e.END_ZONE=5]="END_ZONE",e[e.EFFECT=6]="EFFECT",e[e.PORTAL=7]="PORTAL",e[e.SHOOTER=8]="SHOOTER",e))(O||{});function Ao(e,t){const o=we();return p(o.transform.position,e),p(o.geometry.size,t),o.style.inner_color=y(128,100,97,255),o.style.outer_color=y(40,199,135,255),be(o.style.option,0,4,0,0),o.style.params[0]=1,o}function yi(e,t){const o=we();return p(o.transform.position,e),p(o.geometry.size,t),o.style.inner_color=y(212,133,91,255),o.style.outer_color=y(145,145,145,255),be(o.style.option,0,5,2,0),o.style.params[0]=.1,o.style.params[1]=1,o.style.params[2]=.5,o}function hi(e,t){const o=we();return p(o.transform.position,e),p(o.geometry.size,t),o.style.inner_color=y(207,207,207,255),o.style.outer_color=y(207,207,207,255),be(o.style.option,1,0,0,0),o.style.params[0]=1,o.death_flag=!0,o}function xi(e,t,o,n,i){const r=we();return r.type=0,p(r.transform.position,t),p(r.geometry.size,e),r.body.mass=10,r.body.restitution=.3,r.body.dynamic_flag=!0,r.style.inner_color=y(204,204,204,255),r.style.outer_color=y(0,0,0,255),be(r.style.option,0,5,0,0),r.style.params[0]=.1,r.animation=pi(t,o,n,i,!0),r}function Fo(e,t){const o=we();return o.type=1,p(o.transform.position,e),p(o.geometry.size,t),o.body.collision_flag=!1,o.style.inner_color=y(0,0,0,25),o.style.outer_color=y(178,255,161,255),be(o.style.option,0,5,0,0),o.style.params[0]=.2,o}function No(e,t){const o=we();return o.type=2,p(o.transform.position,e),p(o.geometry.size,t),o.body.collision_flag=!1,o.style.inner_color=y(0,0,0,25),o.style.outer_color=y(255,131,82,255),be(o.style.option,0,5,0,0),o.style.params[0]=.2,o}class bi{}function Ro(){const e=new bi;return e.transform=St(),e.geometry=bo(),e.body=wo(),e.body.mass=10,e.contact=null,e.style=zo(),e}class So{}function Lo(){const e=new So;return e.name="Level 1",e.boxes=[],W(e,Ao(l(0,-4),l(32,8))),e.start_zone=W(e,Fo(l(-14,2),l(4))),e.end_zone=W(e,No(l(14,2),l(4))),e.bg_lower_color=at(124,198,228),e.bg_upper_color=at(30,116,214),e}function wi(e){const t=new So;return t.name=e.name,t.boxes=e.boxes.map(o=>Eo(o)),t.start_zone=t.boxes.find(o=>o.type===1),t.end_zone=t.boxes.find(o=>o.type===2),t.bg_lower_color=Ie(e.bg_lower_color),t.bg_upper_color=Ie(e.bg_upper_color),t}function ko(e){return{name:e.name,boxes:e.boxes.map(mi),bg_lower_color:R(e.bg_lower_color),bg_upper_color:R(e.bg_upper_color)}}function Io(e,t){return e.name=t.name??e.name,e.boxes=(t.boxes||[]).map(o=>vi(o)),e.start_zone=e.boxes.find(o=>o.type===1),e.end_zone=e.boxes.find(o=>o.type===2),e.bg_lower_color=A(t.bg_lower_color,3)??e.bg_lower_color,e.bg_upper_color=A(t.bg_upper_color,3)??e.bg_upper_color,e}function W(e,t){return e.boxes.push(t),t}function me(e){return((e[0]&255)<<24|(e[1]&255)<<16|(e[2]&255)<<8|e[3]&255)>>>0}var w=(e=>(e[e.S8=0]="S8",e[e.U8=1]="U8",e[e.S16=2]="S16",e[e.U16=3]="U16",e[e.S32=4]="S32",e[e.U32=5]="U32",e[e.F32=6]="F32",e))(w||{});const Do={0:1,1:1,2:2,3:2,4:4,5:4,6:4};function zi(e){switch(e){case 0:return s.BYTE;case 1:return s.UNSIGNED_BYTE;case 2:return s.SHORT;case 3:return s.UNSIGNED_SHORT;case 4:return s.INT;case 5:return s.UNSIGNED_INT;case 6:return s.FLOAT;default:return s.FLOAT}}class Ei{}function Ai(e,t){const o=new Ei;return o.type=e,o.size=t,o}class Fi{}function Mt(){const e=new Fi;return e.attribs=[],e.stride=0,e}function F(e,t,o){const n=Ai(t,o);return e.attribs.push(n),e.stride+=Do[n.type]*n.size,n}function Ut(e,t=!1){const o=e.attribs;let n=0;for(let i=0;i<o.length;i+=1){const r=o[i],a=zi(r.type);s.enableVertexAttribArray(i),r.type===6?s.vertexAttribPointer(i,r.size,a,!1,e.stride,n):s.vertexAttribIPointer(i,r.size,a,e.stride,n),t&&s.vertexAttribDivisor(i,1),n+=Do[r.type]*r.size}}let Pe,To,Mo,ft,pt;const H=Mt();F(H,w.F32,3);F(H,w.F32,2);F(H,w.F32,1);F(H,w.S32,1);F(H,w.S32,1);F(H,w.S32,1);F(H,w.F32,3);class Ni{}function Ri(){const e=new Ni;return e.data=new ArrayBuffer(0),e.len=0,e.cap=0,e.instances=[],e}function Si(e,t){const o=new ArrayBuffer(t*H.stride),n=[];for(let i=0;i<t;i+=1)n.push(new DataView(o,i*H.stride,H.stride));e.data=o,e.len=t,e.cap=t,e.instances=n}function Li(e,t,o,n,i,r,a,c,_,u){const f=e.instances[t];f.setFloat32(0,o[0],!0),f.setFloat32(4,o[1],!0),f.setFloat32(8,r,!0),f.setFloat32(12,n[0],!0),f.setFloat32(16,n[1],!0),f.setFloat32(20,i,!0),f.setInt32(24,me(a),!0),f.setInt32(28,me(c),!0),f.setInt32(32,me(_),!0),f.setFloat32(36,u[0],!0),f.setFloat32(40,u[1],!0),f.setFloat32(44,u[2],!0)}function ki(){Pe=oe({[s.VERTEX_SHADER]:`#version 300 es
            layout(location = 0) in vec3 i_position;
            layout(location = 1) in vec2 i_size;
            layout(location = 2) in float i_rotation;
            layout(location = 3) in int i_inner_color;
            layout(location = 4) in int i_outer_color;
            layout(location = 5) in int i_option;
            layout(location = 6) in vec3 i_params;
            out vec2 v_size;
            out vec2 v_tex_coord;
            flat out int v_inner_color;
            flat out int v_outer_color;
            flat out int v_option;
            out vec3 v_params;
            uniform mat4 u_projection;
            uniform mat4 u_view;

            const vec2 positions[4] = vec2[](
                vec2(-0.5, -0.5),
                vec2(0.5, -0.5),
                vec2(-0.5, 0.5),
                vec2(0.5, 0.5)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            vec2 rotate(vec2 p, float r) {
                float c = cos(r), s = sin(r);

                return vec2(
                    p.x * c - p.y * s,
                    p.x * s + p.y * c
                );
            }

            void main() {
                vec2 position = rotate(positions[gl_VertexID] * i_size, i_rotation) + i_position.xy;

                gl_Position = u_projection * u_view * vec4(position, (i_position.z + 100.0) / -200.0 , 1.0);
                v_size = i_size;
                v_tex_coord = tex_coords[gl_VertexID];
                v_inner_color = i_inner_color;
                v_outer_color = i_outer_color;
                v_option = i_option;
                v_params = i_params;
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            in vec2 v_size;
            in vec2 v_tex_coord;
            flat in int v_inner_color;
            flat in int v_outer_color;
            flat in int v_option;
            in vec3 v_params;

            vec4 unpack256(int packed) {
                return vec4(
                    (packed >> 24) & 0xFF,
                    (packed >> 16) & 0xFF,
                    (packed >> 8) & 0xFF,
                    packed & 0xFF
                ) / 255.0;
            }

            float uv_border_width(vec2 uv, vec2 size) {
                float left = smoothstep(0.0, size.x, uv.x);
                float right = smoothstep(0.0, size.x, 1.0 - uv.x);
                float bottom = smoothstep(0.0, size.y, 1.0 - uv.y);
                float top = smoothstep(0.0, size.y, uv.y);

                return min(min(left, right), min(top, bottom));
            }

            vec2 uv_tile(vec2 uv, vec2 size, vec2 tile_size) {
                return uv * size / tile_size;
            }

            vec2 uv_offset_x(vec2 uv, float offset) {
                uv.x += step(1.0, mod(uv.y, 2.0)) * offset;

                return uv;
            }

            void main() {
                vec2 uv = v_tex_coord;

                int opt_mask = (v_option >> 24) & 0xFF;
                int opt_border = (v_option >> 16) & 0xFF;
                int opt_texture = (v_option >> 8) & 0xFF;
                int opt_selected = v_option & 0xFF;

                vec4 inner_color = unpack256(v_inner_color);
                vec4 outer_color = unpack256(v_outer_color);
                float spike_count = v_size.x / 2.0;
                vec4 color = vec4(1.0);
                float border_width = v_params.x;
                vec2 cell_size = v_params.yz;

                if (opt_mask == 0) {
                    vec2 border_size = border_width / v_size;
                    float left = (opt_border == 1 || opt_border == 5) ? smoothstep(0.0, border_size.x, uv.x) : 1.0;
                    float right = (opt_border == 2 || opt_border == 5) ? smoothstep(0.0, border_size.x, 1.0 - uv.x) : 1.0;
                    float bottom = (opt_border == 3 || opt_border == 5) ? smoothstep(0.0, border_size.y, uv.y) : 1.0;
                    float top = (opt_border == 4 || opt_border == 5) ? smoothstep(0.0, border_size.y, 1.0 - uv.y) : 1.0;
                    float mask = min(min(left, right), min(top, bottom));
                    color = mix(vec4(outer_color.xyz, 1.0), inner_color, mask);

                } else if (opt_mask == 1) {
                    float edge = abs(2.0 * fract(uv.x * v_size.x + 0.5) - 1.0);
                    float alias_width = max(fwidth(edge) * 2.0, 0.05);
                    float mask = smoothstep(uv.y - alias_width, uv.y, edge);

                    color = vec4(inner_color.xyz, mask);
                }

                if (opt_texture == 1) {
                    vec2 cell = floor(uv * v_size / cell_size);
                    float mask = mod(cell.x + cell.y, 2.0);
                    color += vec4(vec3(mask) * 0.1, 0.0);
                } else if (opt_texture == 2) {
                    vec2 brick_border_size = border_width / cell_size;
                    vec2 brick_uv = fract(uv_offset_x(uv_tile(uv, v_size, cell_size), 0.5));
                    float mask = uv_border_width(brick_uv, brick_border_size);

                    color = mix(vec4(outer_color.xyz, 1.0), color, mask);
                }

                if (opt_selected == 1) {
                    color += vec4(0.0, 0.0, 0.3, 0.0);
                }

                o_frag_color = color;
            }
        `}),To=s.getUniformLocation(Pe,"u_projection"),Mo=s.getUniformLocation(Pe,"u_view")}function Ii(e){ft=s.createVertexArray(),s.bindVertexArray(ft),pt=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,pt),s.bufferData(s.ARRAY_BUFFER,new Float32Array(e.data),s.STATIC_DRAW),Ut(H,!0)}function Di(e,t){s.enable(s.DEPTH_TEST),s.useProgram(Pe),s.uniformMatrix4fv(To,!1,t.projection),s.uniformMatrix4fv(Mo,!1,t.view),s.bindVertexArray(ft),s.bindBuffer(s.ARRAY_BUFFER,pt),s.bufferSubData(s.ARRAY_BUFFER,0,e.data),s.drawArraysInstanced(s.TRIANGLE_STRIP,0,4,e.len),s.disable(s.DEPTH_TEST)}const N={keys:{},buttons:{},kb_key_down:function(){},kb_key_up:function(){},m_move:function(){},m_button_down:function(){},m_button_up:function(){},m_wheel_scroll:function(){}};function Ti(e){N.kb_key_down=e}function Mi(e){N.m_move=e}function Ui(e){N.m_button_down=e}function ji(e){N.m_button_up=e}function Vi(){addEventListener("keydown",function(e){N.keys[e.code]=0,N.kb_key_down({code:e.code,alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,event:e})}),addEventListener("keyup",function(e){N.keys[e.code]=1,N.kb_key_up({code:e.code,alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,event:e})}),addEventListener("mousemove",function(e){N.m_move({x:e.offsetX,y:e.offsetY,xd:e.movementX,yd:e.movementY,button:e.button,alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,target:e.target,event:e})}),addEventListener("mousedown",function(e){N.buttons[e.button]=0,N.m_button_down({x:e.offsetX,y:e.offsetY,xd:e.movementX,yd:e.movementY,button:e.button,alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,target:e.target,event:e})}),addEventListener("mouseup",function(e){N.buttons[e.button]=1,N.m_button_up({x:e.offsetX,y:e.offsetY,xd:e.movementX,yd:e.movementY,button:e.button,alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,target:e.target,event:e})}),addEventListener("wheel",function(e){N.m_wheel_scroll({xd:Math.sign(e.deltaX),yd:Math.sign(e.deltaY),event:e})})}function X(e){return N.keys[e]===0}function Hi(e,t,o){return e[0]=Math.round(t[0]/o[0])*o[0],e[1]=Math.round(t[1]/o[1])*o[1],e}function He(e,t){Hi(e,e,t)}function Pi(e,t,o,n){e[0]=Math.min(Math.max(t[0],o[0]),n[0]),e[1]=Math.min(Math.max(t[1],o[1]),n[1])}function dt(e,t,o){Pi(e,e,t,o)}function Uo(e,t){e[0]=t[1],e[1]=t[0]}function Ze(e){const t=new P(2);return Uo(t,e),t}function Je(e){Uo(e,e)}function Q(e,t,o){return $n(e,o)<=t*t}function Fe(e,t,o){const n=t[0]/2,i=t[1]/2,r=o[0]-e[0],a=o[1]-e[1];return Ge(r)<=n&&Ge(a)<=i}function Ci(e,t,o,n){let i=t[0]/2,r=t[1]/2;if(o){const _=i;i=r,r=_}const a=n[0]-e[0],c=n[1]-e[1];return Ge(a)<=i&&Ge(c)<=r}function Oi(e,t,o,n){const i=le(t,2),r=le(n,2),a=e[0]-i[0],c=e[0]+i[0],_=e[1]-i[1],u=e[1]+i[1],f=o[0]-r[0],d=o[0]+r[0],S=o[1]-r[1],I=o[1]+r[1];return a<d&&c>f&&u>S&&_<I}function Ki(e,t,o,n){const i=le(t,2),r=le(n,2),a=e[0]-i[0],c=e[0]+i[0],_=o[0]-r[0],u=o[0]+r[0];return a<u&&c>_}function Gi(e,t,o,n,i,r){const a=t,c=r?Ze(h(i)):i;return Oi(e,a,n,c)}function $i(e,t,o,n,i,r){const a=t,c=r?Ze(h(i)):i;return Ki(e,a,n,c)}function Zi(e,t,o,n){const i=le(t,2),r=le(n,2),a=e[0]-i[0],c=e[0]+i[0],_=e[1]-i[1],u=e[1]+i[1],f=o[0]-r[0],d=o[0]+r[0],S=o[1]-r[1],I=o[1]+r[1];if(!(a<d&&c>f&&u>S&&_<I))return null;const M=Math.min(c-f,d-a),Y=Math.min(u-S,I-_);return M<Y?{dir:l(e[0]<o[0]?-1:1,0),depth:M}:{dir:l(0,e[1]<o[1]?-1:1),depth:Y}}function Wi(e,t,o,n,i,r){const a=o?Ze(h(t)):t,c=r?Ze(h(i)):i;return Zi(e,a,n,c)}let Ce,jo,Vo,gt,mt;const ce=Mt();F(ce,w.F32,3);F(ce,w.F32,1);F(ce,w.S32,1);class Xi{}function Bi(){const e=new Xi;return e.data=new ArrayBuffer(0),e.len=0,e.cap=0,e.instances=[],e}function qi(e,t){const o=new ArrayBuffer(t*ce.stride),n=[];for(let i=0;i<t;i+=1)n.push(new DataView(o,i*ce.stride,ce.stride));e.data=o,e.len=t,e.cap=t,e.instances=n}function ee(e,t,o,n,i,r){const a=e.instances[t];a.setFloat32(0,o[0],!0),a.setFloat32(4,o[1],!0),a.setFloat32(8,i,!0),a.setFloat32(12,n,!0),a.setInt32(16,me(r),!0)}function Yi(){Ce=oe({[s.VERTEX_SHADER]:`#version 300 es
            layout(location = 0) in vec3 i_position;
            layout(location = 1) in float i_radius;
            layout(location = 2) in int i_color;
            flat out float v_radius;
            flat out int v_color;
            out vec2 v_tex_coord;
            uniform mat4 u_projection;
            uniform mat4 u_view;

            const vec2 positions[4] = vec2[](
                vec2(-1.0, -1.0),
                vec2(1.0, -1.0),
                vec2(-1.0, 1.0),
                vec2(1.0, 1.0)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            void main() {
                vec2 position = positions[gl_VertexID] * i_radius + i_position.xy;

                gl_Position = u_projection * u_view * vec4(position, i_position.z, 1.0);
                v_radius = i_radius;
                v_color = i_color;
                v_tex_coord = tex_coords[gl_VertexID];
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            flat in int v_color;
            in vec2 v_tex_coord;

            vec4 unpack256(int packed) {
                return vec4(
                    (packed >> 24) & 0xFF,
                    (packed >> 16) & 0xFF,
                    (packed >> 8) & 0xFF,
                    packed & 0xFF
                ) / 255.0;
            }

            void main() {
                vec2 uv = v_tex_coord;
                vec2 cp = uv * 2.0 - 1.0;

                if (cp.x * cp.x + cp.y * cp.y > 1.0) {
                    discard;
                }

                o_frag_color = unpack256(v_color);
            }
        `}),jo=s.getUniformLocation(Ce,"u_projection"),Vo=s.getUniformLocation(Ce,"u_view")}function Ji(e){gt=s.createVertexArray(),s.bindVertexArray(gt),mt=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,mt),s.bufferData(s.ARRAY_BUFFER,e.data,s.STATIC_DRAW),Ut(ce,!0)}function Qi(e,t){s.useProgram(Ce),s.uniformMatrix4fv(jo,!1,t.projection),s.uniformMatrix4fv(Vo,!1,t.view),s.bindVertexArray(gt),s.bindBuffer(s.ARRAY_BUFFER,mt),s.bufferSubData(s.ARRAY_BUFFER,0,e.data),s.drawArraysInstanced(s.TRIANGLE_STRIP,0,4,e.len)}const x={},b={};let vt;const Ho=2,Qe=8;var Po=(e=>(e[e.NONE=0]="NONE",e[e.SQUARE=1]="SQUARE",e[e.TRIANGLE=2]="TRIANGLE",e[e.ARROW=3]="ARROW",e[e.ROUND=4]="ROUND",e))(Po||{}),Co=(e=>(e[e.NONE=0]="NONE",e[e.BEVEL=1]="BEVEL",e[e.MITER=2]="MITER",e[e.ROUND=3]="ROUND",e))(Co||{});class er{}function tr(){const e=new er;return e.data=new Float32Array(0),e.len=0,e.cap=0,e.instances=[],e.cap_type=0,e.join_type=0,e}function or(e,t){const o=new Float32Array(t*Qe),n=[];for(let i=0;i<t;i+=1)n.push(new Float32Array(o.buffer,i*Qe*4,Qe));e.data=o,e.len=t,e.cap=t,e.instances=n}function te(e,t,o,n,i,r,a){const c=e.instances[t];c[0]=o[0],c[1]=o[1],c[2]=r,c[3]=n,c[4]=i,c[5]=0,c[6]=Jn(a[0],a[1],a[2]),c[7]=a[3]}function nr(){x.id=oe({[s.VERTEX_SHADER]:`#version 300 es
            out vec4 v_color;
            uniform mat4 u_projection;
            uniform mat4 u_view;
            uniform int u_instance_count;
            uniform int u_cap_type;
            uniform int u_join_type;
            uniform sampler2D u_texture;

            #define PX_PER_INSTANCE 2
            #define CAP_TYPE_ARROW 3

            vec2 offsets[4] = vec2[](
                vec2(-0.5, 0.0),
                vec2(0.5, 0.0),
                vec2(-0.5, 1.0),
                vec2(0.5, 1.0)
            );

            vec3 unpack256(float value) {
                float r = mod(value, 256.0) / 255.0;
                float g = mod(floor(value / 256.0), 256.0) / 255.0;
                float b = mod(floor(value / 65536.0), 256.0) / 255.0;

                return vec3(r, g, b);
            }

            void main() {
                int curr = gl_InstanceID * PX_PER_INSTANCE;
                vec4 curr1 = texelFetch(u_texture, ivec2(curr + 1, 0), 0);

                if (curr1.x == 0.0) {
                    return;
                }

                vec4 curr0 = texelFetch(u_texture, ivec2(curr, 0), 0);

                int prev = ((gl_InstanceID - 1 + u_instance_count) % u_instance_count) * PX_PER_INSTANCE;
                vec4 prev0 = texelFetch(u_texture, ivec2(prev, 0), 0);
                vec4 prev1 = texelFetch(u_texture, ivec2(prev + 1, 0), 0);

                int next = ((gl_InstanceID + 1) % u_instance_count) * PX_PER_INSTANCE;
                vec4 next0 = texelFetch(u_texture, ivec2(next, 0), 0);
                vec4 next1 = texelFetch(u_texture, ivec2(next + 1, 0), 0);

                vec2 point_curr = curr0.xy;
                float width_curr = curr0.w;
                vec4 color_curr = vec4(unpack256(curr1.z), curr1.w);

                vec2 point_next = next0.xy;
                float width_next = next0.w;
                vec4 color_next = vec4(unpack256(next1.z), next1.w);

                vec2 dir = normalize(point_next - point_curr);
                vec2 perp = vec2(dir.y, -dir.x);

                float dx = offsets[gl_VertexID].x, dy = offsets[gl_VertexID].y;

                bool is_cap = curr1.x == 0.0 || next1.x == 0.0;
                vec2 arrow_offset = is_cap && u_cap_type == CAP_TYPE_ARROW ? dir * width_next * 2.0 * dy : vec2(0.0);
                vec2 point = mix(point_curr, point_next - arrow_offset, dy);
                float width = mix(width_curr, width_next, dy);
                vec2 position = point + perp * width * dx;
                vec4 color = mix(color_curr, color_next, dy);

                gl_Position = u_projection * u_view * vec4(position, 0.0, 1.0);
                v_color = color;
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            in vec4 v_color;

            void main() {
                o_frag_color = v_color;
            }
        `}),x.u_projection=s.getUniformLocation(x.id,"u_projection"),x.u_view=s.getUniformLocation(x.id,"u_view"),x.u_instance_count=s.getUniformLocation(x.id,"u_instance_count"),x.u_cap_type=s.getUniformLocation(x.id,"u_cap_type"),x.u_join_type=s.getUniformLocation(x.id,"u_join_type"),b.id=oe({[s.VERTEX_SHADER]:`#version 300 es
            uniform mat4 u_projection;
            uniform mat4 u_view;
            uniform int u_instance_count;
            uniform int u_cap_type;
            uniform int u_join_type;
            uniform sampler2D u_texture;
            out vec4 v_color;
            out vec2 v_tex_coord;
            flat out int v_is_cap;
            flat out int v_is_join;

            #define PX_PER_INSTANCE 2
            #define CAP_TYPE_SQUARE 1
            #define CAP_TYPE_TRIANGLE 2
            #define CAP_TYPE_ARROW 3
            #define CAP_TYPE_ROUND 4
            #define JOIN_TYPE_BEVEL 1
            #define JOIN_TYPE_MITER 2
            #define JOIN_TYPE_ROUND 3

            vec2 offsets[4] = vec2[](
                vec2(-0.5, 0.0),
                vec2(0.5, 0.0),
                vec2(-0.5, 1.0),
                vec2(0.5, 1.0)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            vec3 unpack256(float value) {
                float r = mod(value, 256.0) / 255.0;
                float g = mod(floor(value / 256.0), 256.0) / 255.0;
                float b = mod(floor(value / 65536.0), 256.0) / 255.0;

                return vec3(r, g, b);
            }

            void main() {
                int prev = ((gl_InstanceID - 1 + u_instance_count) % u_instance_count) * PX_PER_INSTANCE;
                int curr = gl_InstanceID * PX_PER_INSTANCE;

                vec4 prev1 = texelFetch(u_texture, ivec2(prev + 1, 0), 0);
                vec4 curr1 = texelFetch(u_texture, ivec2(curr + 1, 0), 0);

                if (prev1.x == 0.0 && curr1.x == 0.0) {
                    return;
                }

                int next = ((gl_InstanceID + 1) % u_instance_count) * PX_PER_INSTANCE;

                vec4 prev0 = texelFetch(u_texture, ivec2(prev, 0), 0);
                vec4 curr0 = texelFetch(u_texture, ivec2(curr, 0), 0);
                vec4 next0 = texelFetch(u_texture, ivec2(next, 0), 0);

                vec2 point_prev = prev0.xy;

                vec2 point_curr = curr0.xy;
                float width_curr = curr0.w;
                vec4 color_curr = vec4(unpack256(curr1.z), curr1.w);

                vec2 point_next = next0.xy;

                vec2 position;
                vec4 color;
                vec2 tex_coord;

                float dx = offsets[gl_VertexID].x, dy = offsets[gl_VertexID].y;

                // cap or join
                if (prev1.x == 0.0 || curr1.x == 0.0) {
                    vec2 point_adj = prev1.x == 0.0 ? point_next : point_prev;
                    vec2 dir = normalize(point_curr - point_adj);
                    vec2 perp = vec2(dir.y, -dir.x);

                    if (u_cap_type == CAP_TYPE_SQUARE) {
                        vec2 point = mix(point_curr, point_curr + dir * width_curr / 2.0, dy);

                        position = point + perp * width_curr * dx;
                    } else if (u_cap_type == CAP_TYPE_TRIANGLE) {
                        vec2 point = mix(point_curr, point_curr + dir * width_curr / 2.0, dy);
                        float factor = gl_VertexID < 2 ? 1.0 : 0.0;

                        position = point + perp * width_curr * dx * factor;
                    } else if (u_cap_type == CAP_TYPE_ARROW && prev1.x == 1.0) {
                        vec2 point = mix(point_curr - dir * width_curr * 2.0, point_curr, dy);
                        float factor = gl_VertexID < 2 ? 1.0 : 0.0;

                        position = point + perp * width_curr * dx * factor * 2.0;
                    } else if (u_cap_type == CAP_TYPE_ROUND) {
                        vec2 point = mix(point_curr - dir * width_curr / 2.0, point_curr + dir * width_curr / 2.0, dy);

                        position = point + perp * width_curr * dx;
                        tex_coord = tex_coords[gl_VertexID];
                    }

                    v_is_cap = 1;
                } else {
                    vec2 dir_prev = normalize(point_curr - point_prev);
                    vec2 perp_prev = vec2(dir_prev.y, -dir_prev.x);
                    vec2 dir_curr = normalize(point_next - point_curr);
                    vec2 perp_curr = vec2(dir_curr.y, -dir_curr.x);
                    float width = width_curr / 2.0;
                    float sigma = sign(dot(dir_prev, perp_curr));
                    vec2 point0 = point_curr + perp_prev * width * sigma;
                    vec2 point1 = point_curr + perp_curr * width * sigma;

                    if (u_join_type == JOIN_TYPE_BEVEL) {
                        offsets[0] = sigma > 0.0 ? point0 : point1;
                        offsets[1] = sigma > 0.0 ? point1 : point0;
                        offsets[2] = point_curr;
                        offsets[3] = point_curr;

                        position = offsets[gl_VertexID];
                    } else if (u_join_type == JOIN_TYPE_MITER) {
                        vec2 miter_dir = normalize(dir_prev - dir_curr);
                        float miter_length = width / dot(miter_dir, perp_prev);
                        vec2 miter = point_curr + miter_dir * miter_length * sigma;

                        offsets[0] = point_curr;
                        offsets[1] = sigma > 0.0 ? point0 : point1;
                        offsets[2] = sigma > 0.0 ? point1 : point0;
                        offsets[3] = miter;

                        position = offsets[gl_VertexID];
                    } else if (u_join_type == JOIN_TYPE_ROUND) {
                        vec2 point = mix(point_curr - dir_curr * width, point_curr + dir_curr * width, dy);
                        position = point + perp_curr * width_curr * dx;

                        tex_coord = tex_coords[gl_VertexID];
                    }

                    v_is_join = 1;
                }

                gl_Position = u_projection * u_view * vec4(position, 0.0, 1.0);
                v_color = color_curr;
                v_tex_coord = tex_coord;
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            flat in int v_is_cap;
            flat in int v_is_join;
            in vec4 v_color;
            in vec2 v_tex_coord;
            uniform highp int u_cap_type;
            uniform highp int u_join_type;
            uniform sampler2D u_texture;

            #define CAP_TYPE_ROUND 4
            #define JOIN_TYPE_ROUND 3

            void main() {
                // rounding
                if (v_is_cap == 1 && u_cap_type == CAP_TYPE_ROUND || v_is_join == 1 && u_join_type == JOIN_TYPE_ROUND) {
                    vec2 uv = v_tex_coord;
                    vec2 cp = uv * 2.0 - 1.0;

                    if (cp.x * cp.x + cp.y * cp.y > 1.0) {
                        discard;
                    }
                }

                o_frag_color = v_color;
            }
        `}),b.u_projection=s.getUniformLocation(b.id,"u_projection"),b.u_view=s.getUniformLocation(b.id,"u_view"),b.u_instance_count=s.getUniformLocation(b.id,"u_instance_count"),b.u_cap_type=s.getUniformLocation(b.id,"u_cap_type"),b.u_join_type=s.getUniformLocation(b.id,"u_join_type")}function ir(e){vt=s.createTexture(),s.bindTexture(s.TEXTURE_2D,vt),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.pixelStorei(s.UNPACK_ALIGNMENT,1),s.texImage2D(s.TEXTURE_2D,0,s.RGBA32F,e.cap*Ho,1,0,s.RGBA,s.FLOAT,e.data)}function rr(e,t){s.bindTexture(s.TEXTURE_2D,vt),s.texSubImage2D(s.TEXTURE_2D,0,0,0,e.len*Ho,1,s.RGBA,s.FLOAT,e.data),s.useProgram(x.id),s.uniformMatrix4fv(x.u_projection,!1,t.projection),s.uniformMatrix4fv(x.u_view,!1,t.view),s.uniform1i(x.u_instance_count,e.cap),s.uniform1i(x.u_cap_type,e.cap_type),s.uniform1i(x.u_join_type,e.join_type),s.drawArraysInstanced(s.TRIANGLE_STRIP,0,4,e.cap),s.useProgram(b.id),s.uniformMatrix4fv(b.u_projection,!1,t.projection),s.uniformMatrix4fv(b.u_view,!1,t.view),s.uniform1i(b.u_instance_count,e.cap),s.uniform1i(b.u_cap_type,e.cap_type),s.uniform1i(b.u_join_type,e.join_type),s.drawArraysInstanced(s.TRIANGLE_STRIP,0,4,e.cap)}let Oe,Oo,Ko,yt,ht;const G=Mt();F(G,w.F32,3);F(G,w.F32,2);F(G,w.F32,1);F(G,w.S32,1);F(G,w.S32,1);F(G,w.F32,1);class sr{}function ar(){const e=new sr;return e.data=new ArrayBuffer(0),e.len=0,e.cap=0,e.instances=[],e}function cr(e,t){const o=new ArrayBuffer(t*G.stride),n=[];for(let i=0;i<t;i+=1)n.push(new DataView(o,i*G.stride,G.stride));e.data=o,e.len=t,e.cap=t,e.instances=n}function Kt(e,t,o,n,i,r,a,c,_){const u=e.instances[t];u.setFloat32(0,o[0],!0),u.setFloat32(4,o[1],!0),u.setFloat32(8,r,!0),u.setFloat32(12,n[0],!0),u.setFloat32(16,n[1],!0),u.setFloat32(20,i,!0),u.setInt32(24,me(a),!0),u.setInt32(28,me(c),!0),u.setFloat32(32,_,!0)}function lr(){Oe=oe({[s.VERTEX_SHADER]:`#version 300 es
            layout(location = 0) in vec3 i_position;
            layout(location = 1) in vec2 i_size;
            layout(location = 2) in float i_rotation;
            layout(location = 3) in int i_inner_color;
            layout(location = 4) in int i_outer_color;
            layout(location = 5) in float i_outline;
            out vec2 v_size;
            flat out int v_inner_color;
            flat out int v_outer_color;
            flat out float v_outline;
            out vec2 v_tex_coord;
            uniform mat4 u_projection;
            uniform mat4 u_view;

            const vec2 positions[4] = vec2[](
                vec2(-0.5, -0.5),
                vec2(0.5, -0.5),
                vec2(-0.5, 0.5),
                vec2(0.5, 0.5)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            vec2 rotate(vec2 p, float r) {
                float c = cos(r), s = sin(r);

                return vec2(
                    p.x * c - p.y * s,
                    p.x * s + p.y * c
                );
            }

            void main() {
                vec2 position = rotate(positions[gl_VertexID] * i_size, i_rotation) + i_position.xy;

                gl_Position = u_projection * u_view * vec4(position, i_position.z, 1.0);
                v_size = i_size;
                v_inner_color = i_inner_color;
                v_outer_color = i_outer_color;
                v_outline = i_outline;
                v_tex_coord = tex_coords[gl_VertexID];
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            in vec2 v_size;
            in vec2 v_tex_coord;
            flat in int v_inner_color;
            flat in int v_outer_color;
            flat in float v_outline;
            in vec3 v_params;

            vec4 unpack256(int packed) {
                return vec4(
                    (packed >> 24) & 0xFF,
                    (packed >> 16) & 0xFF,
                    (packed >> 8) & 0xFF,
                    packed & 0xFF
                ) / 255.0;
            }

            float uv_border_width(vec2 uv, vec2 size) {
                float left = smoothstep(0.0, size.x, uv.x);
                float right = smoothstep(0.0, size.x, 1.0 - uv.x);
                float bottom = smoothstep(0.0, size.y, 1.0 - uv.y);
                float top = smoothstep(0.0, size.y, uv.y);

                return min(min(left, right), min(top, bottom));
            }

            void main() {
                vec2 uv = v_tex_coord;
                vec4 inner_color = unpack256(v_inner_color);
                vec4 outer_color = unpack256(v_outer_color);
                float mask = v_outline == 0.0 ? 1.0 : uv_border_width(uv, v_outline / v_size);
                vec4 color = mix(vec4(outer_color.xyz, 1.0), inner_color, mask);

                o_frag_color = color;
            }
        `}),Oo=s.getUniformLocation(Oe,"u_projection"),Ko=s.getUniformLocation(Oe,"u_view")}function _r(e){yt=s.createVertexArray(),s.bindVertexArray(yt),ht=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,ht),s.bufferData(s.ARRAY_BUFFER,e.data,s.STATIC_DRAW),Ut(G,!0)}function ur(e,t){s.useProgram(Oe),s.uniformMatrix4fv(Oo,!1,t.projection),s.uniformMatrix4fv(Ko,!1,t.view),s.bindVertexArray(yt),s.bindBuffer(s.ARRAY_BUFFER,ht),s.bufferSubData(s.ARRAY_BUFFER,0,e.data),s.drawArraysInstanced(s.TRIANGLE_STRIP,0,4,e.len)}let Z,Go,$o,Zo,Wo,Xo,Bo,qo;class fr{}function pr(e,t,o,n,i){const r=new fr;return r.position=e,r.size=t,r.cell_size=o,r.line_width=n,r.color=i,r}function dr(){Z=oe({[s.VERTEX_SHADER]:`#version 300 es
            uniform mat4 u_projection;
            uniform mat4 u_view;
            uniform vec2 u_position;
            uniform vec2 u_size;
            out vec2 v_tex_coord;

            const vec2 positions[4] = vec2[](
                vec2(-0.5, -0.5),
                vec2(0.5, -0.5),
                vec2(-0.5, 0.5),
                vec2(0.5, 0.5)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            void main() {
                vec2 position = positions[gl_VertexID] * u_size + u_position;
                gl_Position = u_projection * u_view * vec4(position, 0.0, 1.0);
                v_tex_coord = tex_coords[gl_VertexID];
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            in vec2 v_tex_coord;
            uniform vec2 u_size;
            uniform vec2 u_cell_size;
            uniform float u_line_width;
            uniform vec3 u_color;
            out vec4 o_frag_color;

            float grid(vec2 uv, vec2 line_width) {
                vec2 ddx = dFdx(uv);
                vec2 ddy = dFdy(uv);
                vec2 uv_deriv = vec2(length(vec2(ddx.x, ddy.x)), length(vec2(ddx.y, ddy.y)));
                bvec2 invert_line = bvec2(line_width.x > 0.5, line_width.y > 0.5);
                vec2 target_width = vec2(
                    invert_line.x ? 1.0 - line_width.x : line_width.x,
                    invert_line.y ? 1.0 - line_width.y : line_width.y
                );
                vec2 draw_width = clamp(target_width, uv_deriv, vec2(0.5));
                vec2 line_aa = uv_deriv * 1.5;
                vec2 grid_uv = abs(fract(uv) * 2.0 - 1.0);
                grid_uv.x = invert_line.x ? grid_uv.x : 1.0 - grid_uv.x;
                grid_uv.y = invert_line.y ? grid_uv.y : 1.0 - grid_uv.y;
                vec2 grid2 = smoothstep(draw_width + line_aa, draw_width - line_aa, grid_uv);
                grid2 *= clamp(target_width / draw_width, 0.0, 1.0);
                grid2 = mix(grid2, target_width, clamp(uv_deriv * 2.0 - 1.0, 0.0, 1.0));
                grid2.x = invert_line.x ? 1.0 - grid2.x : grid2.x;
                grid2.y = invert_line.y ? 1.0 - grid2.y : grid2.y;

                return mix(grid2.x, 1.0, grid2.y);
            }

            void main() {
                vec2 uv = v_tex_coord * u_size / u_cell_size;

                o_frag_color = vec4(u_color, grid(uv, vec2(u_line_width)));
            }
        `}),Go=s.getUniformLocation(Z,"u_projection"),$o=s.getUniformLocation(Z,"u_view"),Zo=s.getUniformLocation(Z,"u_position"),Wo=s.getUniformLocation(Z,"u_size"),Xo=s.getUniformLocation(Z,"u_cell_size"),Bo=s.getUniformLocation(Z,"u_line_width"),qo=s.getUniformLocation(Z,"u_color")}function gr(e,t){s.useProgram(Z),s.uniformMatrix4fv(Go,!1,t.projection),s.uniformMatrix4fv($o,!1,t.view),s.uniform2fv(Zo,e.position),s.uniform2fv(Wo,e.size),s.uniform2fv(Xo,e.cell_size),s.uniform1f(Bo,e.line_width),s.uniform3fv(qo,e.color),s.drawArrays(s.TRIANGLE_STRIP,0,4)}const et=["Level 1","Level 2","Level 3","Level 4"],mr=['{"name":"Level 1","boxes":[{"type":0,"transform":{"position":[0,-4],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[32,8],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},{"type":1,"transform":{"position":[-14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[178,255,161,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},{"type":2,"transform":{"position":[14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[255,131,82,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]}],"start_zone":{"type":1,"transform":{"position":[-14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[178,255,161,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},"end_zone":{"type":2,"transform":{"position":[14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[255,131,82,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},"bg_lower_color":[0.6980392336845398,0.5764706134796143,0.843137264251709],"bg_upper_color":[0.886274516582489,0.8627451062202454,0.5960784554481506]}','{"name":"Level 2","boxes":[{"type":0,"transform":{"position":[-14,-4],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,8],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,-4],"drag_size":[32,8]},{"type":1,"transform":{"position":[-14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[178,255,161,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},{"type":2,"transform":{"position":[14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[255,131,82,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},{"type":0,"transform":{"position":[14,-4],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,8],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[-14,-4],"drag_size":[4,8]},{"type":0,"transform":{"position":[0,-6],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[24,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,-6],"drag_size":[24,4]},{"type":0,"transform":{"position":[0,-3],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[24,2],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[207,207,207,255],"outer_color":[207,207,207,255],"option":[1,0,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":true,"drag_position":[0,-3.5],"drag_size":[24,1]},{"type":0,"transform":{"position":[0,3.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[212,133,91,255],"outer_color":[145,145,145,255],"option":[0,5,2,0],"params":[0.10000000149011612,1,0.5]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,3.5],"drag_size":[4,1]}],"start_zone":{"type":1,"transform":{"position":[-14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[178,255,161,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},"end_zone":{"type":2,"transform":{"position":[14,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[255,131,82,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,0],"drag_size":[0,0]},"bg_lower_color":[0.48627451062202454,0.7764706015586853,0.8941176533699036],"bg_upper_color":[0.6196078658103943,0.4588235318660736,0.6235294342041016]}','{"name":"Level 3","boxes":[{"type":0,"transform":{"position":[0,21.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[20,59],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":-1,"inner_color":[220,193,163,255],"outer_color":[82,82,82,255],"option":[0,5,1,0],"params":[0,1,1]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,21.5],"drag_size":[20,59]},{"type":0,"transform":{"position":[0,-4],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[12,8],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,-4],"drag_size":[12,8]},{"type":1,"transform":{"position":[0,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[178,255,161,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,2],"drag_size":[4,4]},{"type":2,"transform":{"position":[0,45],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[255,131,82,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,45],"drag_size":[4,4]},{"type":0,"transform":{"position":[-9,14],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,44],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[-9,14],"drag_size":[2,44]},{"type":0,"transform":{"position":[-7,-0.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,15],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[-7,-0.5],"drag_size":[2,15]},{"type":0,"transform":{"position":[0,12.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[6,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[207,207,207,255],"outer_color":[207,207,207,255],"option":[1,0,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":true,"drag_position":[0,12.5],"drag_size":[6,1]},{"type":0,"transform":{"position":[8,1],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,18],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[8,1],"drag_size":[4,18]},{"type":0,"transform":{"position":[0,11],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[6,2],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,11],"drag_size":[6,2]},{"type":0,"transform":{"position":[9,29.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,13],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[9,29.5],"drag_size":[2,13]},{"type":0,"transform":{"position":[-7.5,14.5],"rotation":270,"scaling":[1,1]},"geometry":{"type":0,"size":[3,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[207,207,207,255],"outer_color":[207,207,207,255],"option":[1,0,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":true,"drag_position":[-7.5,14.5],"drag_size":[3,1]},{"type":0,"transform":{"position":[0,9.5],"rotation":180,"scaling":[1,1]},"geometry":{"type":0,"size":[6,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[207,207,207,255],"outer_color":[207,207,207,255],"option":[1,0,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":true,"drag_position":[0,9.5],"drag_size":[6,1]},{"type":0,"transform":{"position":[0,42],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[8,2],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[212,133,91,255],"outer_color":[145,145,145,255],"option":[0,5,2,0],"params":[0.10000000149011612,1,0.5]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,42],"drag_size":[8,2]},{"type":0,"transform":{"position":[0,28.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,1],"radius":1},"body":{"mass":10,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.3,"dynamic_flag":true,"collision_flag":true},"style":{"zindex":0,"inner_color":[204,204,204,255],"outer_color":[0,0,0,255],"option":[0,5,0,0],"params":[0.10000000149011612,0,0]},"animation":{"start":[0,28.5],"end":[0,18.5],"force":200,"dir":1,"looping_flag":true},"platform_flag":false,"death_flag":false,"drag_position":[0,28.5],"drag_size":[2,1]},{"type":0,"transform":{"position":[9,16.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[9,16.5],"drag_size":[2,1]},{"type":0,"transform":{"position":[-4,33],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,2],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[-4,33],"drag_size":[2,2]},{"type":0,"transform":{"position":[4,33],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[2,2],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[4,33],"drag_size":[2,2]},{"type":0,"transform":{"position":[0,40.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[10,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[212,133,91,255],"outer_color":[145,145,145,255],"option":[0,5,2,0],"params":[0.10000000149011612,1,0.5]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,40.5],"drag_size":[10,1]},{"type":0,"transform":{"position":[0,39.5],"rotation":180,"scaling":[1,1]},"geometry":{"type":0,"size":[8,1],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[207,207,207,255],"outer_color":[207,207,207,255],"option":[1,0,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":true,"drag_position":[0,39.5],"drag_size":[8,1]}],"bg_lower_color":[0.6980392336845398,0.5764706134796143,0.843137264251709],"bg_upper_color":[0.886274516582489,0.8627451062202454,0.5960784554481506]}','{"name":"Level 4","boxes":[{"type":0,"transform":{"position":[-36,-4],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,8],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[-36,-4],"drag_size":[4,8]},{"type":1,"transform":{"position":[-36,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[178,255,161,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[-36,2],"drag_size":[4,4]},{"type":2,"transform":{"position":[36,2],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":false},"style":{"zindex":0,"inner_color":[0,0,0,25],"outer_color":[255,131,82,255],"option":[0,5,0,0],"params":[0.20000000298023224,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[36,2],"drag_size":[4,4]},{"type":0,"transform":{"position":[36,-4],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,8],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[36,-4],"drag_size":[4,8]},{"type":0,"transform":{"position":[0,-6],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[68,4],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[128,100,97,255],"outer_color":[40,199,135,255],"option":[0,4,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":false,"drag_position":[0,-6],"drag_size":[68,4]},{"type":0,"transform":{"position":[0,-3],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[68,2],"radius":1},"body":{"mass":1,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.5,"restitution":0.5,"dynamic_flag":false,"collision_flag":true},"style":{"zindex":0,"inner_color":[207,207,207,255],"outer_color":[207,207,207,255],"option":[1,0,0,0],"params":[1,0,0]},"animation":null,"platform_flag":false,"death_flag":true,"drag_position":[0,-3],"drag_size":[68,2]},{"type":0,"transform":{"position":[-3,5.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,1],"radius":1},"body":{"mass":10,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.3,"dynamic_flag":true,"collision_flag":true},"style":{"zindex":0,"inner_color":[204,204,204,255],"outer_color":[0,0,0,255],"option":[0,5,0,0],"params":[0.10000000149011612,0,0]},"animation":{"start":[-3,5.5],"end":[-32,5.5],"force":400,"dir":1,"looping_flag":true},"platform_flag":false,"death_flag":false,"drag_position":[-3,5.5],"drag_size":[4,1]},{"type":0,"transform":{"position":[3,5.5],"rotation":0,"scaling":[1,1]},"geometry":{"type":0,"size":[4,1],"radius":1},"body":{"mass":10,"force":[0,0],"acceleration":[0,0],"velocity":[0,0],"damping":0.01,"friction":0.2,"restitution":0.3,"dynamic_flag":true,"collision_flag":true},"style":{"zindex":0,"inner_color":[204,204,204,255],"outer_color":[0,0,0,255],"option":[0,5,0,0],"params":[0.10000000149011612,0,0]},"animation":{"start":[3,5.5],"end":[32,5.5],"force":400,"dir":1,"looping_flag":true},"platform_flag":false,"death_flag":false,"drag_position":[3,5.5],"drag_size":[4,1]}],"bg_lower_color":[0.48627451062202454,0.7764706015586853,0.8941176533699036],"bg_upper_color":[0.6196078658103943,0.4588235318660736,0.6235294342041016]}'],Yo="levels";function jt(){const e=localStorage.getItem(Yo)??"[]";return JSON.parse(e)??[]}function Jo(e){localStorage.setItem(Yo,JSON.stringify(e))}function vr(e){const t=jt();t.indexOf(e)<0&&t.push(e),Jo(t)}function Qo(e){localStorage.setItem(e.name,JSON.stringify(e))}function en(e){const t=localStorage.getItem(e);if(!t)return null;const o=JSON.parse(t)??{};return o.name?o:null}function yr(){if(!jt().length){Jo(et);for(let t=0;t<et.length;t+=1){const o=et[t];localStorage.setItem(o,mr[t])}}}const Gt=1024,tn=1024,hr=1024;class xr{}function br(){const e=new xr;e.grid_size=l(.5),e.select_width=.15,e.select_color=y(36,71,242,255),e.point_radius=.15,e.point_radius_factor=2,e.point_color=y(43,237,156,255),e.arrow_len=1.5,e.arrow_width=.15,e.arrow_width_factor=4,e.arrow_color=y(250,83,45,255),e.mouse_pos=l(),e.preset=O.GROUND,e.load_level=0,e.select_flag=!1,e.select_start=l(),e.select_end=l(),e.select_pos=l(),e.select_size=l(),e.select_boxes=[],e.copy_boxes=[],e.bound_min=l(),e.bound_max=l(),e.bound_pos=l(),e.bound_size=l(),e.drag_flag=0,e.drag_point_flag=0,e.drag_arrow_flag=0,e.drag_box_flag=0,e.drag_pos=l(),e.drag_dir=l(),e.level=Lo(),e.camera=yo(),e.camera.movement_speed=.3,e.camera.zoom_speed=.3,e.target=l(),e.box_ch=null,e.on_select=function(){},e.on_copy=function(){},e.on_level_load=function(){};const t=en("Level 1");return t&&Io(e.level,t),e}const wr=[l(0,0),l(-1,0),l(1,0),l(0,-1),l(0,1),l(-1,-1),l(1,-1),l(-1,1),l(1,1)],zr=pr(l(),l(1024),l(1),.01,at(255,255,250)),Ne=ar(),j=Bi(),k=tr();function Er(){dr(),cr(Ne,2),lr(),_r(Ne),qi(j,8),Yi(),Ji(j),k.cap_type=Po.ARROW,k.join_type=Co.NONE,or(k,8),nr(),ir(k)}function Vt(e){p(e.select_pos,At(e.select_start,e.select_end,.5)),p(e.select_size,Vn(ke(e.select_end,e.select_start)))}function on(e,t){const o=e.level,n=[];for(const i of o.boxes){const r=i.transform,a=i.geometry;if(Ci(r.position,a.size,T(r.rotation),t)){if(n.indexOf(i)>-1)continue;n.push(i)}}return n.sort((i,r)=>r.style.zindex-i.style.zindex)[0]}function Ar(e){const t=e.level;if(Gn(e.select_size)<.5){const o=on(e,e.select_pos);o&&e.select_boxes.indexOf(o)<0&&(o.style.option[3]=1,e.select_boxes.push(o))}else for(const o of t.boxes){const n=o.transform,i=o.geometry;if(Gi(e.select_pos,e.select_size,!1,n.position,i.size,T(n.rotation))){if(e.select_boxes.indexOf(o)>-1)continue;o.style.option[3]=1,e.select_boxes.push(o)}}e.on_select(e.select_boxes)}function Re(e){if(!(e.select_boxes.length<1)){for(const t of e.select_boxes)t.style.option[3]=0;e.select_boxes=[]}}function Te(e){if(e.select_boxes.length<1){it(e.bound_pos),it(e.bound_size);return}let t=1/0,o=-1/0,n=1/0,i=-1/0;for(const r of e.select_boxes){const a=r.transform,c=r.geometry;let _=c.size[0],u=c.size[1];if(T(a.rotation)){const f=_;_=u,u=f}t=Math.min(t,a.position[0]-_/2),o=Math.max(o,a.position[0]+_/2),n=Math.min(n,a.position[1]-u/2),i=Math.max(i,a.position[1]+u/2)}ae(e.bound_min,t,n),ae(e.bound_max,o,i),ae(e.bound_pos,(t+o)/2,(n+i)/2),ae(e.bound_size,o-t,i-n)}function Fr(e,t,o,n){ae(t.mouse_pos,e.x,e.y);const i=Rt(t.camera,t.mouse_pos,o,n);if(e.button===0&&!t.select_flag&&t.select_boxes.length){const r=t.bound_pos[0],a=t.bound_pos[1],c=t.bound_size[0]/2,_=t.bound_size[1]/2,u=t.bound_size[0]/2+t.arrow_len/2,f=t.bound_size[1]/2+t.arrow_len/2;t.drag_flag=0,t.drag_point_flag=0;const d=Number(Q(l(r-c,a),t.point_radius*t.point_radius_factor,i))*1,S=Number(Q(l(r+c,a),t.point_radius*t.point_radius_factor,i))*2,I=Number(Q(l(r,a-_),t.point_radius*t.point_radius_factor,i))*3,M=Number(Q(l(r,a+_),t.point_radius*t.point_radius_factor,i))*4,Y=Number(Q(l(r-c,a-_),t.point_radius*t.point_radius_factor,i))*5,v=Number(Q(l(r+c,a-_),t.point_radius*t.point_radius_factor,i))*6,Me=Number(Q(l(r-c,a+_),t.point_radius*t.point_radius_factor,i))*7,Be=Number(Q(l(r+c,a+_),t.point_radius*t.point_radius_factor,i))*8;if(t.drag_point_flag=d+S+I+M+Y+v+Me+Be,t.drag_arrow_flag=0,!t.drag_point_flag){const U=Number(Fe(l(r-u,a),l(t.arrow_len,t.arrow_width*t.arrow_width_factor),i))*1,C=Number(Fe(l(r+u,a),l(t.arrow_len,t.arrow_width*t.arrow_width_factor),i))*2,J=Number(Fe(l(r,a-f),l(t.arrow_width*t.arrow_width_factor,t.arrow_len),i))*3,gn=Number(Fe(l(r,a+f),l(t.arrow_width*t.arrow_width_factor,t.arrow_len),i))*4;t.drag_arrow_flag=U+C+J+gn}if(t.drag_box_flag=0,!t.drag_point_flag&&!t.drag_arrow_flag){const U=Number(Fe(t.bound_pos,t.bound_size,i));let C=!1;const J=on(t,i);U&&J&&t.select_boxes.indexOf(J)>-1&&(C=!0),t.drag_box_flag=Number(C)*8}t.drag_flag=t.drag_point_flag+t.drag_arrow_flag+t.drag_box_flag,p(t.drag_pos,i),p(t.drag_dir,wr[t.drag_flag]);for(const U of t.select_boxes){const C=U.transform,J=U.geometry;U.drag_position=h(C.position),U.drag_size=h(J.size)}}e.button===0&&!t.drag_flag&&(t.select_flag=!0,p(t.select_start,i),p(t.select_end,i),Vt(t),e.ctrl||(Re(t),Te(t)))}function Nr(e,t,o,n){ae(t.mouse_pos,e.x,e.y);const i=Rt(t.camera,t.mouse_pos,o,n);if(e.button===0&&t.select_flag&&(p(t.select_end,i),Vt(t)),e.button===0&&t.drag_flag){const r=l((i[0]-t.drag_pos[0])*t.drag_dir[0],(i[1]-t.drag_pos[1])*t.drag_dir[1]),a=Ot(r,t.drag_dir);for(const c of t.select_boxes){const _=c.transform,u=c.geometry;if(t.drag_point_flag)if(e.shift)T(_.rotation)&&Je(r),p(u.size,Ae(c.drag_size,he(r,2))),He(u.size,he(t.grid_size,2)),dt(u.size,l(1),l(1e3));else{T(_.rotation)&&Je(r),p(u.size,Ae(c.drag_size,r)),He(u.size,t.grid_size),dt(u.size,l(1),l(1e3));const f=ke(u.size,c.drag_size);T(_.rotation)&&Je(f);const d=Ot(f,t.drag_dir);p(_.position,Ae(c.drag_position,le(d,2)))}else t.drag_arrow_flag?(p(_.position,Ae(c.drag_position,a)),He(_.position,t.grid_size)):t.drag_box_flag&&(p(_.position,Ae(c.drag_position,r)),He(_.position,t.grid_size));Te(t),nn(t.box_ch)}}}function Rr(e,t,o,n){ae(t.mouse_pos,e.x,e.y);const i=Rt(t.camera,t.mouse_pos,o,n);e.button===0&&t.select_flag&&(t.select_flag=!1,Ar(t),Te(t),p(t.select_start,i),p(t.select_end,i),Vt(t)),e.button===0&&t.drag_flag&&(t.drag_flag=0)}function Sr(e,t){const o=t.level;if(e.code==="KeyR"&&(e.ctrl||e.shift)&&(e.event.preventDefault(),t.select_boxes.length===1)){const i=t.select_boxes[0].transform;i.rotation=Dn(i.rotation+(e.shift?90:-90),360),nn(t.box_ch)}if(e.code==="KeyC"&&e.ctrl&&t.select_boxes.length){t.copy_boxes=[];for(const n of t.select_boxes)n.type===K.START_ZONE||n.type===K.END_ZONE||t.copy_boxes.push(Eo(n))}if(e.code==="KeyV"&&e.ctrl&&t.copy_boxes.length){if(o.boxes.length+t.copy_boxes.length>tn){Re(t);return}Re(t),o.boxes.push(...t.copy_boxes),t.select_boxes=[...t.copy_boxes],t.copy_boxes=[],t.on_select(t.select_boxes)}if(e.code==="Delete"){for(const n of t.select_boxes){if(n.type===K.START_ZONE||n.type===K.END_ZONE)continue;const i=o.boxes.indexOf(n);i>-1&&o.boxes.splice(i,1)}Re(t),Te(t)}e.code==="KeyS"&&e.ctrl&&(e.event.preventDefault(),Qo(ko(o)))}function Lr(e){const t=e.camera;X("KeyA")&&(e.target[0]-=t.movement_speed),X("KeyD")&&(e.target[0]+=t.movement_speed),X("KeyS")&&(e.target[1]-=t.movement_speed),X("KeyW")&&(e.target[1]+=t.movement_speed),X("KeyQ")&&(t.scale=Se(t.scale-t.zoom_speed,20,100)),X("KeyE")&&(t.scale=Se(t.scale+t.zoom_speed,20,100)),t.position=At(t.position,e.target,.05)}function kr(e){gr(zr,e.camera)}function nn(e){e&&po(e)}function Ir(e){const t=e.camera;if(Te(e),Kt(Ne,0,e.select_pos,e.select_size,0,0,y(e.select_color[0],e.select_color[1],e.select_color[2],10),e.select_color,e.select_width),Kt(Ne,1,e.bound_pos,e.bound_size,0,0,y(e.select_color[0],e.select_color[1],e.select_color[2],10),e.select_color,e.select_width),ur(Ne,t),e.select_boxes.length){const o=e.bound_pos[0],n=e.bound_pos[1],i=e.bound_size[0]/2,r=e.bound_size[0]/2+e.arrow_len,a=e.bound_size[1]/2,c=e.bound_size[1]/2+e.arrow_len;te(k,0,l(o-i,n),e.arrow_width,1,0,e.arrow_color),te(k,1,l(o-r,n),e.arrow_width,0,0,e.arrow_color),te(k,2,l(o+i,n),e.arrow_width,1,0,e.arrow_color),te(k,3,l(o+r,n),e.arrow_width,0,0,e.arrow_color),te(k,4,l(o,n-a),e.arrow_width,1,0,e.arrow_color),te(k,5,l(o,n-c),e.arrow_width,0,0,e.arrow_color),te(k,6,l(o,n+a),e.arrow_width,1,0,e.arrow_color),te(k,7,l(o,n+c),e.arrow_width,0,0,e.arrow_color),ee(j,0,l(o-i,n),e.point_radius,0,e.point_color),ee(j,1,l(o+i,n),e.point_radius,0,e.point_color),ee(j,2,l(o,n-a),e.point_radius,0,e.point_color),ee(j,3,l(o,n+a),e.point_radius,0,e.point_color),ee(j,4,l(o-i,n-a),e.point_radius,0,e.point_color),ee(j,5,l(o+i,n-a),e.point_radius,0,e.point_color),ee(j,6,l(o+i,n+a),e.point_radius,0,e.point_color),ee(j,7,l(o-i,n+a),e.point_radius,0,e.point_color),rr(k,t),Qi(j,t)}}function $t(e,t){if(e.children=[],t.length===1){const o=t[0],n=o.transform,i=o.geometry,r=o.body,a=o.style,c=o.animation;re(e,"General:"),se(e,"Type",m(o,"type"),ue(K),fe(K)),re(e,"Transform:"),$(e,"Position",n.position,.5,-1e3,1e3,2),Ee(e,"Rotation",m(n,"rotation"),90,0,270),$(e,"Scaling",n.scaling,.5,-1e3,1e3,2),re(e,"Geometry:"),se(e,"Type",m(i,"type"),ue(ct),fe(ct)),$(e,"Size",i.size,.5,-1e3,1e3,2),je(e,"Radius",m(i,"radius"),.1,0,1e3),re(e,"Body:"),je(e,"Mass",m(r,"mass"),.1,0,1e3),$(e,"Force",r.force,.1,-1e4,1e4,2),$(e,"Acceleration",r.acceleration,.1,-1e4,1e4,2),$(e,"Velocity",r.velocity,.1,-1e4,1e4,2),Ee(e,"Damping",m(r,"damping"),.01,0,1),Ee(e,"Friction",m(r,"friction"),.01,0,1),Ee(e,"Restitution",m(r,"restitution"),.01,0,1),ze(e,"Dynamic Flag",m(r,"dynamic_flag")),ze(e,"Collision Flag",m(r,"collision_flag")),re(e,"Style:"),je(e,"Zindex",m(a,"zindex"),1,-100,100),Ke(e,"Inner Color",Le.R_0_255,a.inner_color),Ke(e,"Outer Color",Le.R_0_255,a.outer_color),se(e,"Mask",m(a.option,"0"),ue(lt),fe(lt)),se(e,"Border",m(a.option,"1"),ue(_t),fe(_t)),se(e,"Texture",m(a.option,"2"),ue(ut),fe(ut)),$(e,"Params",a.params,.1,-1e4,1e4,3),c&&(re(e,"Animation:"),$(e,"Start",c.start,.5,-1e3,1e3,2),$(e,"End",c.end,.5,-1e3,1e3,2),je(e,"Force",m(c,"force"),.1,0,1e4),Ee(e,"Animation",m(c,"dir"),0,-1,1),ze(e,"Looping Flag",m(c,"looping_flag"))),ze(e,"Platform Flag",m(o,"platform_flag")),ze(e,"Death Flag",m(o,"death_flag"))}fo(e)}function Dr(e){vr(e.name),Qo(ko(e))}function Zt(e,t){t&&(t.children=[],An(t,"Name",m(e.level,"name")),Ke(t,"Background Lower Color",Le.R_0_1,e.level.bg_lower_color),Ke(t,"Background Upper Color",Le.R_0_1,e.level.bg_upper_color),fo(t))}function Tr(e,t){const o=e.level,n=Ue(t,"Info",!1);re(n,"Press '`' (backquote) to enter/exit editor");const i=Ue(t,"Editor",!1),r=jt(),a=Object.values(r),c=Object.keys(r).map(f=>parseInt(f));se(i,"Levels",m(e,"load_level"),a,c),Ve(i,"Load Level",function(){const f=r[e.load_level],d=en(f);d&&(console.log(JSON.stringify(d)),Io(e.level,d),e.on_level_load())}),Ve(i,"Save Level",function(){Dr(o)}),Ve(i,"Sort Zindex",function(){o.boxes.sort((f,d)=>f.style.zindex-d.style.zindex)}),se(i,"Preset",m(e,"preset"),ue(O),fe(O)),Ve(i,"Add",function(){const f=e.level;switch(e.preset){case O.GROUND:W(f,Ao(l(),l(1)));break;case O.BRICK:W(f,yi(l(),l(1)));break;case O.SPIKES:W(f,hi(l(),l(1)));break;case O.MOVER:W(f,xi(l(1),l(),l(),0,0));break;case O.START_ZONE:W(f,Fo(l(),l(1)));break;case O.END_ZONE:W(f,No(l(),l(1)));break}});const _=Ue(t,"Level",!1);Zt(e,_);const u=Ue(t,"Box",!1);e.box_ch=u,e.on_select=function(f){$t(u,f)},e.on_copy=function(f){$t(u,f)},e.on_level_load=function(){Zt(e,_)}}let pe,rn,sn,an,cn;class Mr{}function Ur(e,t){const o=new Mr;return o.lower_color=Ie(e),o.upper_color=Ie(t),o}function jr(){pe=oe({[s.VERTEX_SHADER]:`#version 300 es
            out vec2 v_tex_coord;

            const vec2 positions[4] = vec2[](
                vec2(-1.0, -1.0),
                vec2(1.0, -1.0),
                vec2(-1.0, 1.0),
                vec2(1.0, 1.0)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            void main() {
                vec2 position = positions[gl_VertexID];
                gl_Position = vec4(position, 0.0, 1.0);
                v_tex_coord = tex_coords[gl_VertexID];
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            in vec2 v_tex_coord;
            uniform vec3 u_lower_color;
            uniform vec3 u_upper_color;
            uniform vec2 u_position;
            uniform float u_time;
            out vec4 o_frag_color;

            void main() {
                vec2 uv = v_tex_coord;
                vec3 color = mix(u_lower_color, u_upper_color, uv.y);

                o_frag_color = vec4(color, 1.0);
            }
        `}),rn=s.getUniformLocation(pe,"u_lower_color"),sn=s.getUniformLocation(pe,"u_upper_color"),an=s.getUniformLocation(pe,"u_position"),cn=s.getUniformLocation(pe,"u_time")}function Vr(e,t,o){s.useProgram(pe),s.uniform2fv(an,t.position),s.uniform3fv(rn,e.lower_color),s.uniform3fv(sn,e.upper_color),s.uniform1f(cn,o),s.drawArrays(s.TRIANGLE_STRIP,0,4)}function ge(e){const t=T(e.transform.rotation)?1:0;return e.transform.position[0]-e.geometry.size[t]/2}function Wt(e){const t=T(e.transform.rotation)?0:1;return e.transform.position[1]-e.geometry.size[t]/2}function Xt(e){const t=T(e.transform.rotation)?0:1;return e.transform.position[1]+e.geometry.size[t]/2}function Bt(e){return e.transform.position[0]+e.geometry.size[0]/2}function qt(e){return e.transform.position[1]-e.geometry.size[1]/2}function Yt(e){return e.transform.position[1]+e.geometry.size[1]/2}class Hr{}function Pr(){const e=new Hr;return e.boxes=[],e.dynamic_boxes=[],e.kinematic_boxes=[],e.touching_curr=[],e.touching_prev=[],e.on_touch_start=function(){},e.on_touch_end=function(){},e}function Cr(e,t){e.boxes=[],e.static_boxes=[],e.dynamic_boxes=[],e.kinematic_boxes=[];for(const o of t){const n=o.body;e.boxes.push(o),n.dynamic_flag?e.dynamic_boxes.push(o):e.static_boxes.push(o),o.animation&&e.kinematic_boxes.push(o)}e.static_boxes.sort((o,n)=>ge(o)-ge(n))}function Jt(e,t,o){rt(e.position,t.velocity,o),p(t.acceleration,he(t.force,1/t.mass)),rt(t.velocity,t.acceleration,o),Cn(t.velocity,Ln(t.damping,o)),it(t.force)}function Qt(e,t,o){const n=t.transform,i=t.geometry,r=t.body,a=o.transform,c=o.geometry,_=o.body,u=Wi(n.position,i.size,T(n.rotation),a.position,c.size,T(a.rotation));if(!u)return!1;if(e.touching_curr.push(o),e.on_touch_start(o),_.collision_flag){u.dir[1]>0&&(t.contact=o),rt(n.position,u.dir,u.depth);const f=ke(r.velocity,_.velocity),d=$e(f,u.dir),S=l(-u.dir[1],u.dir[0]),I=$e(f,S);if(d<0){const M=1/r.mass,Y=1/_.mass,Me=-(1+Math.min(r.restitution,_.restitution))*d/(M+Y),Be=he(u.dir,Me*M);ye(r.velocity,Be);const U=Math.sqrt(r.friction*_.friction)*Math.abs(Me);let C=-I/(M+Y);C=Math.max(-U,Math.min(C,U));const J=he(S,C*M*2);ye(r.velocity,J)}dt(r.velocity,l(-1024),l(hr))}return!0}function Or(e,t,o){for(const a of e.kinematic_boxes){const c=a.transform,_=a.body,u=a.animation,f=Wn(u.end,u.start),d=ke(c.position,u.start),S=$e(d,f),I=$e(ke(u.end,u.start),f);S>I?u.dir=-1:S<0&&(u.dir=1),ye(_.force,he(f,u.force*u.dir))}const n=t.transform,i=t.geometry,r=t.body;ye(r.force,l(0,-2e3)),e.touching_curr=[];for(let a=0;a<e.static_boxes.length;a+=1){const c=e.static_boxes[a];if(ge(c)>Bt(t))break;qt(t)<Xt(c)&&Yt(t)>Wt(c)&&Qt(e,t,c)}e.dynamic_boxes.sort((a,c)=>ge(a)-ge(c));for(let a=0;a<e.dynamic_boxes.length;a+=1){const c=e.dynamic_boxes[a];if(ge(c)>Bt(t))break;qt(t)<Xt(c)&&Yt(t)>Wt(c)&&Qt(e,t,c)}for(const a of e.touching_prev)e.touching_curr.indexOf(a)<0&&e.on_touch_end(a);e.touching_prev=[...e.touching_curr],t.contact&&($i(n.position,i.size,!1,t.contact.transform.position,t.contact.geometry.size,T(t.contact.transform.rotation))||(t.contact=null)),Jt(n,r,o);for(const a of e.dynamic_boxes)Jt(a.transform,a.body,o)}let de,ln,_n,un,fn;function Kr(){de=oe({[s.VERTEX_SHADER]:`#version 300 es
            uniform mat4 u_projection;
            uniform mat4 u_view;
            uniform vec2 u_position;
            uniform vec2 u_size;
            out vec2 v_tex_coord;

            const vec2 positions[4] = vec2[](
                vec2(-0.5, -0.5),
                vec2(0.5, -0.5),
                vec2(-0.5, 0.5),
                vec2(0.5, 0.5)
            );

            const vec2 tex_coords[4] = vec2[](
                vec2(0.0, 0.0),
                vec2(1.0, 0.0),
                vec2(0.0, 1.0),
                vec2(1.0, 1.0)
            );

            void main() {
                vec2 position = positions[gl_VertexID] * u_size + u_position;
                gl_Position = u_projection * u_view * vec4(position, 0.0, 1.0);
                v_tex_coord = tex_coords[gl_VertexID];
            }
        `,[s.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            in vec2 v_tex_coord;
            in vec4 v_color;
            out vec4 o_frag_color;

            void main() {
                vec2 uv = v_tex_coord * 2.0 - 1.0;
                float r = 0.5 / length(uv);

                o_frag_color = vec4(r, 0.4, 0.3, 1.0);
            }
        `}),ln=s.getUniformLocation(de,"u_projection"),_n=s.getUniformLocation(de,"u_view"),un=s.getUniformLocation(de,"u_position"),fn=s.getUniformLocation(de,"u_size")}function Gr(e,t){s.useProgram(de),s.uniformMatrix4fv(ln,!1,t.projection),s.uniformMatrix4fv(_n,!1,t.view),s.uniform2fv(un,e.transform.position),s.uniform2fv(fn,e.geometry.size),s.drawArrays(s.TRIANGLE_STRIP,0,4)}function $r(e){const t=document.createElement("div");return t.className="timer",t.style.width="100vw",t.style.height="100vh",t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.zIndex="1",t.style.fontSize="48px",t.style.color="#ffffff",t.style.lineHeight="1.5",t.style.textAlign="center",t.style.fontFamily="monospace",t.style.pointerEvents="none",t.innerHTML="0:00.000",e.append(t),t}function Zr(e){const t=Math.floor(e/60),o=Math.floor(e%60),n=Math.round(e%1*1e3);return String(t).padStart(2,"0")+":"+String(o).padStart(2,"0")+"."+String(n).padStart(3,"0")}yr();const pn=document.createElement("style");pn.innerHTML=`
    .fullscreen {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
`;document.head.append(pn);const g=document.createElement("canvas"),D=Rn(g);Vi();let Ht=0,tt=0,eo=0,V=!0;const E=br();let ot=Lo();const Wr=yo(),De=Pr(),xt=$r(document.body);let bt=0,We=!1,wt=!1;De.on_touch_start=function(e){!wt&&e.type===K.START_ZONE&&(wt=!0,bt=0,We=!1),e.type===K.END_ZONE&&(We=!1),e.death_flag&&e.death_flag&&p(z.transform.position,B.start_zone.transform.position)};De.on_touch_end=function(e){e.type===K.START_ZONE&&(wt=!1,We=!0)};let B=E.level,q=E.camera,z=Ro();const nt=Ur(E.level.bg_lower_color,E.level.bg_upper_color);jr();const ve=Ri();Si(ve,tn);ve.len=0;ki();Ii(ve);Kr();Er();D.enable(D.BLEND);D.blendFunc(D.SRC_ALPHA,D.ONE_MINUS_SRC_ALPHA);D.enable(D.CULL_FACE);Mi(function(e){e.target===g&&V&&Nr(e,E,g.width,g.height)});Ui(function(e){e.target===g&&V&&Fr(e,E,g.width,g.height)});ji(function(e){e.target===g&&V&&Rr(e,E,g.width,g.height)});Ti(function(e){if(e.code==="Backquote"&&(V=!V,V?(q=E.camera,B=E.level,g.classList.remove("fullscreen"),g.width=g.parentElement.clientWidth,g.height=g.parentElement.clientHeight,xt.style.display="none"):(q=Wr,Re(E),ot=wi(E.level),B=ot,z=Ro(),p(z.transform.position,ot.start_zone.transform.position),g.classList.add("fullscreen"),g.width=window.innerWidth,g.height=window.innerHeight,xt.style.display="block",Cr(De,B.boxes))),V)Sr(e,E);else if(e.code==="KeyR"){p(z.transform.position,B.start_zone.transform.position);for(const t of De.kinematic_boxes)t.animation&&(p(t.transform.position,t.animation.start),t.animation.dir=1)}});function Xr(){if(V?Lr(E):q.position=At(q.position,z.transform.position,.05),qn(q,g.width,g.height),Yn(q),!V){const e=z.contact?3e3:1500;X("KeyA")&&ye(z.body.force,l(-e,0)),X("KeyD")&&ye(z.body.force,l(e,0)),X("Space")&&z.contact&&(z.body.velocity[1]=80,z.contact=null),Or(De,z,Ht),(Math.abs(z.transform.position[0])>Gt||Math.abs(z.transform.position[1])>Gt)&&p(z.transform.position,B.start_zone.transform.position)}}function Br(){D.viewport(0,0,g.width,g.height),D.clearColor(0,0,0,1),D.clear(D.COLOR_BUFFER_BIT|D.DEPTH_BUFFER_BIT);const e=B.boxes;for(let t=0;t<e.length;t+=1){const o=e[t];Li(ve,t,o.transform.position,o.geometry.size,kn(o.transform.rotation),o.style.zindex,o.style.inner_color,o.style.outer_color,o.style.option,o.style.params)}st(nt.lower_color,B.bg_lower_color),st(nt.upper_color,B.bg_upper_color),Vr(nt,q,0),V&&kr(E),ve.len=e.length,Di(ve,q),V?Ir(E):Gr(z,q),We&&(bt+=Ht),xt.innerHTML=Zr(bt)}function dn(){tt=performance.now(),Ht=In((tt-eo)/1e3,.1),eo=tt,Xr(),Br(),requestAnimationFrame(dn)}function qr(){const e=qe(null);zn(e,[_e(300,ie.PX),_e(1,ie.FR),_e(300,ie.PX)],[_e(1,ie.FR),_e(1,ie.FR),_e(1,ie.FR)]);const t=qe(e);Tr(E,t);const o=qe(e),n=Fn(o);n.canvas_el=g,En(e,[t,o,o,t,o,o,t,o,o]),Nn(e,document.body)}dn();qr();
