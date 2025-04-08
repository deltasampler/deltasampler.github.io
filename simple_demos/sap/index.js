var ht=Object.defineProperty;var yt=(t,o,e)=>o in t?ht(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var c=(t,o,e)=>yt(t,typeof o!="symbol"?o+"":o,e);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();let r;function vt(t){return r=t.getContext("webgl2")}function bt(t,o){const e=r.createShader(t);if(!e)return null;if(r.shaderSource(e,o),r.compileShader(e),!r.getShaderParameter(e,r.COMPILE_STATUS)){const n=r.getShaderInfoLog(e);return console.error(n),r.deleteShader(e),null}return e}function gt(t){const o=r.createProgram(),e=[];for(const n in t){const s=t[n],u=bt(parseInt(n),s);if(!u){for(const h of e)r.deleteShader(h);return null}e.push(u)}for(const n of e)r.attachShader(o,n);r.linkProgram(o);for(const n of e)r.detachShader(o,n),r.deleteShader(n);if(!r.getProgramParameter(o,r.LINK_STATUS)){const n=r.getProgramInfoLog(o);return console.error(n),r.deleteProgram(o),null}return o}const m=Float32Array;function $(t=1,o=0,e=0,i=0,n=0,s,u=0,h=0,x=0,f=0,H,A=0,E=0,U=0,D=0,V){const a=new m(16);return a[0]=t,a[1]=o,a[2]=e,a[3]=i,a[4]=n,a[5]=t,a[6]=u,a[7]=h,a[8]=x,a[9]=f,a[10]=t,a[11]=A,a[12]=E,a[13]=U,a[14]=D,a[15]=t,a}function nt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}const q=Math.abs;function b(t,o){return Math.floor(Math.random()*(o-t+1)+t)}function d(t=0,o){const e=new m(2);return e[0]=t,e[1]=o??t,e}function S(t,o,e){return t[0]=o,t[1]=e,t}function C(t,o){return t[0]=o[0],t[1]=o[1],t}function it(t,o,e){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e}function mt(t,o){return it(t,o,new m(2))}function j(t,o){return it(t,o,t)}function wt(t,o,e){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e}function Ft(t,o){return wt(t,o,new m(2))}function xt(t,o,e){return e[0]=t[0]*o,e[1]=t[1]*o,e}function M(t,o){return xt(t,o,new m(2))}function zt(t,o,e){return e[0]=t[0]/o,e[1]=t[1]/o,e}function Y(t,o){return zt(t,o,new m(2))}function St(t,o,e,i){return i[0]=t[0]+o[0]*e,i[1]=t[1]+o[1]*e,i}function rt(t,o,e){return St(t,o,e,t)}function kt(t,o,e){const i=o[0],n=o[1],s=o[2];return e[12]=t[0]*i+t[4]*n+t[8]*s+t[12],e[13]=t[1]*i+t[5]*n+t[9]*s+t[13],e[14]=t[2]*i+t[6]*n+t[10]*s+t[14],e[15]=t[3]*i+t[7]*n+t[11]*s+t[15],e}function Kt(t,o,e){const i=o[0],n=o[1],s=o[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function st(t=0,o,e){const i=new m(3);return i[0]=t,i[1]=o??t,i[2]=e??t,i}class Lt{constructor(){c(this,"position");c(this,"scale");c(this,"roll");c(this,"right");c(this,"up");c(this,"world_up");c(this,"projection");c(this,"near");c(this,"far");c(this,"view");c(this,"movement_speed");c(this,"roll_speed");c(this,"zoom_speed")}}function At(){const t=new Lt;return t.position=d(),t.right=d(1,0),t.up=d(0,1),t.world_up=d(0,1),t.projection=$(1),t.near=-100,t.far=100,t.view=$(1),t.scale=50,t.roll=0,t.movement_speed=.1,t.roll_speed=.1,t.zoom_speed=.1,t}function Q(t,o){rt(t.position,t.right,t.movement_speed*o)}function Z(t,o){rt(t.position,t.up,t.movement_speed*o)}function J(t,o){t.scale+=t.zoom_speed*o}function Et(t,o,e){return nt(t.projection),Kt(t.projection,st(t.scale/o,t.scale/e,1),t.projection),t.projection}function Ut(t){return nt(t.view),kt(t.view,st(-t.position[0],-t.position[1],0),t.view),t.view}function ct(t,o,e,i){const n=o[0]/e*2-1,s=o[1]/i*-2+1,u=e/t.scale,h=i/t.scale;return d(t.position[0]+n*u,t.position[1]+s*h)}const l={keys:{},buttons:{},kb_key_down:function(){},kb_key_up:function(){},m_move:function(){},m_button_down:function(){},m_button_up:function(){},m_wheel_scroll:function(){}};function Dt(t){l.kb_key_down=t}function jt(t){l.m_move=t}function Mt(t){l.m_button_down=t}function Nt(t){l.m_button_up=t}function Ot(){addEventListener("keydown",function(t){l.keys[t.code]=0,l.kb_key_down({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,event:t})}),addEventListener("keyup",function(t){l.keys[t.code]=1,l.kb_key_up({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,event:t})}),addEventListener("mousemove",function(t){l.m_move({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("mousedown",function(t){l.buttons[t.button]=0,l.m_button_down({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("mouseup",function(t){l.buttons[t.button]=1,l.m_button_up({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("wheel",function(t){l.m_wheel_scroll({xd:Math.sign(t.deltaX),yd:Math.sign(t.deltaY),event:t})})}function z(t){return l.keys[t]===0}function Rt(t){const o=document.createElement("canvas");return t.append(o),o.width=t.clientWidth,o.height=t.clientHeight,addEventListener("resize",function(){o.width=t.clientWidth,o.height=t.clientHeight}),o}function T(t=0,o,e,i){const n=new m(4);return n[0]=t,n[1]=o??t,n[2]=e??t,n[3]=i,n}function tt(t){return((t[0]&255)<<24|(t[1]&255)<<16|(t[2]&255)<<8|t[3]&255)>>>0}var F=(t=>(t[t.S8=0]="S8",t[t.U8=1]="U8",t[t.S16=2]="S16",t[t.U16=3]="U16",t[t.S32=4]="S32",t[t.U32=5]="U32",t[t.F32=6]="F32",t))(F||{});const ut={0:1,1:1,2:2,3:2,4:4,5:4,6:4};function It(t){switch(t){case 0:return r.BYTE;case 1:return r.UNSIGNED_BYTE;case 2:return r.SHORT;case 3:return r.UNSIGNED_SHORT;case 4:return r.INT;case 5:return r.UNSIGNED_INT;case 6:return r.FLOAT;default:return r.FLOAT}}class Pt{constructor(){c(this,"type");c(this,"size")}}function Ht(t,o){const e=new Pt;return e.type=t,e.size=o,e}class Vt{constructor(){c(this,"attribs");c(this,"stride")}}function Xt(){const t=new Vt;return t.attribs=[],t.stride=0,t}function k(t,o,e){const i=Ht(o,e);return t.attribs.push(i),t.stride+=ut[i.type]*i.size,i}function Ct(t,o=!1){const e=t.attribs;let i=0;for(let n=0;n<e.length;n+=1){const s=e[n],u=It(s.type);r.enableVertexAttribArray(n),s.type===6?r.vertexAttribPointer(n,s.size,u,!1,t.stride,i):r.vertexAttribIPointer(n,s.size,u,t.stride,i),o&&r.vertexAttribDivisor(n,1),i+=ut[s.type]*s.size}}let N,at,lt,B,G;const y=Xt();k(y,F.F32,3);k(y,F.F32,2);k(y,F.F32,1);k(y,F.S32,1);k(y,F.S32,1);k(y,F.F32,1);class Bt{constructor(){c(this,"data");c(this,"len");c(this,"cap");c(this,"instances")}}function Gt(){const t=new Bt;return t.data=new ArrayBuffer(0),t.len=0,t.cap=0,t.instances=[],t}function Wt(t,o){const e=new ArrayBuffer(o*y.stride),i=[];for(let n=0;n<o;n+=1)i.push(new DataView(e,n*y.stride,y.stride));t.data=e,t.len=o,t.cap=o,t.instances=i}function $t(t,o,e,i,n,s,u,h,x){const f=t.instances[o];f.setFloat32(0,e[0],!0),f.setFloat32(4,e[1],!0),f.setFloat32(8,s,!0),f.setFloat32(12,i[0],!0),f.setFloat32(16,i[1],!0),f.setFloat32(20,n,!0),f.setInt32(24,tt(u),!0),f.setInt32(28,tt(h),!0),f.setFloat32(32,x,!0)}function qt(){N=gt({[r.VERTEX_SHADER]:`#version 300 es
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
        `,[r.FRAGMENT_SHADER]:`#version 300 es
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
        `}),at=r.getUniformLocation(N,"u_projection"),lt=r.getUniformLocation(N,"u_view")}function Yt(t){B=r.createVertexArray(),r.bindVertexArray(B),G=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,G),r.bufferData(r.ARRAY_BUFFER,t.data,r.STATIC_DRAW),Ct(y,!0)}function Qt(t,o){r.useProgram(N),r.uniformMatrix4fv(at,!1,o.projection),r.uniformMatrix4fv(lt,!1,o.view),r.bindVertexArray(B),r.bindBuffer(r.ARRAY_BUFFER,G),r.bufferSubData(r.ARRAY_BUFFER,0,t.data),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,t.len)}function Zt(t,o,e){const i=o[0]/2,n=o[1]/2,s=e[0]-t[0],u=e[1]-t[1];return q(s)<=i&&q(u)<=n}function Jt(t,o,e,i){const n=Y(o,2),s=Y(i,2),u=t[0]-n[0],h=t[0]+n[0],x=t[1]-n[1],f=t[1]+n[1],H=e[0]-s[0],A=e[0]+s[0],E=e[1]-s[1],U=e[1]+s[1];if(!(u<A&&h>H&&f>E&&x<U))return null;const D=Math.min(h-H,A-u),V=Math.min(f-E,U-x);return D<V?{dir:d(t[0]<e[0]?-1:1,0),depth:D}:{dir:d(0,t[1]<e[1]?-1:1),depth:V}}const v=Rt(document.body),K=vt(v),p=document.createElement("div");p.style.position="absolute";p.style.left="0";p.style.top="0";p.style.width="100vw";p.style.height="100vh";p.style.fontSize="16px";p.style.color="#ffffff";p.style.padding="16px";p.style.fontFamily="monospace";document.body.append(p);const _=At();_.scale=10;_.movement_speed=2;const O=d();let W=!1;const ft=d();let g=null,R=!0,L=0;class Tt{constructor(){c(this,"position");c(this,"size");c(this,"is_static");c(this,"drag_pos")}}function te(t,o){const e=new Tt;return e.position=t,e.size=o,e.is_static=!1,e.drag_pos=d(),e}function X(t){return t.position[0]-t.size[0]/2}function ee(t){return t.position[0]+t.size[0]/2}function et(t){return t.position[1]-t.size[1]/2}function ot(t){return t.position[1]+t.size[1]/2}function _t(t,o){const e=Jt(t.position,t.size,o.position,o.size);e&&(t.is_static&&!o.is_static?j(o.position,M(e.dir,-e.depth)):!t.is_static&&o.is_static?j(t.position,M(e.dir,e.depth)):(j(t.position,M(e.dir,e.depth/2)),j(o.position,M(e.dir,-e.depth/2))))}function oe(t){L=0;for(let o=0;o<t.length;o+=1)for(let e=o+1;e<t.length;e+=1)_t(t[o],t[e]),L+=1}function ne(t){const o=t.sort((e,i)=>X(e)-X(i));L=0;for(let e=0;e<o.length;e+=1){const i=o[e];for(let n=e+1;n<o.length;n+=1){const s=o[n];if(X(s)>ee(i))break;et(i)<ot(s)&&ot(i)>et(s)&&(_t(i,s),L+=1)}}}const I=4096,w=[];for(let t=0;t<I;t+=1)w.push(te(d(b(-16,16),b(-16,16)),d(b(1,4),b(1,4))));dt(w);function dt(t){for(const i of t)S(i.position,b(-64,64),b(-64,64)),S(i.size,b(2,4),b(2,4));const o=t[0];S(o.size,32,128),o.is_static=!0;const e=t[1];S(e.size,128,32),e.is_static=!0}Ot();const P=Gt();Wt(P,I);qt();Yt(P);jt(function(t){S(O,t.x,t.y);const o=ct(_,O,v.width,v.height);W&&g&&C(g.position,mt(g.drag_pos,Ft(o,ft)))});Mt(function(t){S(O,t.x,t.y);const o=ct(_,O,v.width,v.height);for(const e of w)if(Zt(e.position,e.size,o)){g=e;break}g&&(W=!0,C(ft,o),C(g.drag_pos,g.position))});Nt(function(t){W=!1,g=null});Dt(function(t){t.code==="KeyR"&&dt(w),t.code==="Digit1"&&(R=!0),t.code==="Digit2"&&(R=!1)});function ie(){z("KeyA")&&Q(_,-1),z("KeyD")&&Q(_,1),z("KeyS")&&Z(_,-1),z("KeyW")&&Z(_,1),z("KeyQ")&&J(_,-1),z("KeyE")&&J(_,1),Et(_,v.width,v.height),Ut(_),R?ne(w):oe(w)}function re(){K.viewport(0,0,v.width,v.height),K.clearColor(0,0,0,1),K.clear(K.COLOR_BUFFER_BIT|K.DEPTH_BUFFER_BIT);for(let o=0;o<I;o+=1){const e=w[o];$t(P,o,e.position,e.size,0,0,T(170,170,170,255),T(255,0,255,255),.1)}Qt(P,_);let t="";t+=`Box count: ${I}<br>`,t+=`Method: ${R?"Sweep And Prune":"Brute Force"}<br>`,t+=`Collision Checks Per Frame: ${L}`,p.innerHTML=t}function pt(){ie(),re(),requestAnimationFrame(pt)}pt();
