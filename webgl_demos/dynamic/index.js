var D=Object.defineProperty;var Y=(t,o,e)=>o in t?D(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var u=(t,o,e)=>Y(t,typeof o!="symbol"?o+"":o,e);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=e(n);fetch(n.href,l)}})();let c;function j(t){return c=t.getContext("webgl2")}function B(t,o){const e=c.createShader(t);if(!e)return null;if(c.shaderSource(e,o),c.compileShader(e),!c.getShaderParameter(e,c.COMPILE_STATUS)){const n=c.getShaderInfoLog(e);return console.error(n),c.deleteShader(e),null}return e}function U(t){const o=c.createProgram(),e=[];for(const n in t){const l=t[n],d=B(parseInt(n),l);if(!d){for(const g of e)c.deleteShader(g);return null}e.push(d)}for(const n of e)c.attachShader(o,n);c.linkProgram(o);for(const n of e)c.detachShader(o,n),c.deleteShader(n);if(!c.getProgramParameter(o,c.LINK_STATUS)){const n=c.getProgramInfoLog(o);return console.error(n),c.deleteProgram(o),null}return o}const v=Float32Array;function m(t=1,o=0,e=0,i=0,n=0,l,d=0,g=0,T=0,k=0,Z,I=0,M=0,O=0,z=0,tt){const s=new v(16);return s[0]=t,s[1]=o,s[2]=e,s[3]=i,s[4]=n,s[5]=t,s[6]=d,s[7]=g,s[8]=T,s[9]=k,s[10]=t,s[11]=I,s[12]=M,s[13]=O,s[14]=z,s[15]=t,s}function K(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(t=0,o){const e=new v(2);return e[0]=t,e[1]=o??t,e}function R(t,o,e){return t[0]+=o[0]*e,t[1]+=o[1]*e,t}function X(t,o){const e=o[0],i=o[1],n=o[2];return t[12]=t[0]*e+t[4]*i+t[8]*n+t[12],t[13]=t[1]*e+t[5]*i+t[9]*n+t[13],t[14]=t[2]*e+t[6]*i+t[10]*n+t[14],t[15]=t[3]*e+t[7]*i+t[11]*n+t[15],t}function C(t,o){const e=o[0],i=o[1],n=o[2];return t[0]=t[0]*e,t[1]=t[1]*e,t[2]=t[2]*e,t[3]=t[3]*e,t[4]=t[4]*i,t[5]=t[5]*i,t[6]=t[6]*i,t[7]=t[7]*i,t[8]=t[8]*n,t[9]=t[9]*n,t[10]=t[10]*n,t[11]=t[11]*n,t[12]=t[12],t[13]=t[13],t[14]=t[14],t[15]=t[15],t}function S(t=0,o,e){const i=new v(3);return i[0]=t,i[1]=o??t,i[2]=e??t,i}class V{constructor(){u(this,"position");u(this,"scale");u(this,"roll");u(this,"right");u(this,"up");u(this,"world_up");u(this,"projection");u(this,"view");u(this,"movement_speed");u(this,"roll_speed")}}function N(){const t=new V;return t.position=p(),t.right=p(1,0),t.up=p(0,1),t.world_up=p(0,1),t.projection=m(1),t.view=m(1),t.scale=50,t.roll=0,t.movement_speed=.1,t.roll_speed=.1,t}function L(t,o){R(t.position,t.right,t.movement_speed*o)}function E(t,o){R(t.position,t.up,t.movement_speed*o)}function H(t,o,e){return K(t.projection),C(t.projection,S(t.scale/o,t.scale/e,1)),t.projection}function W(t){return K(t.view),X(t.view,S(-t.position[0],-t.position[1],0)),t.view}const a={keys:{},buttons:{},kb_key_down:function(){},kb_key_up:function(){},m_move:function(){},m_button_down:function(){},m_button_up:function(){},m_wheel_scroll:function(){}};function q(){addEventListener("keydown",function(t){a.keys[t.code]=0,a.kb_key_down({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey})}),addEventListener("keyup",function(t){a.keys[t.code]=1,a.kb_key_up({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey})}),addEventListener("mousemove",function(t){a.m_move({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target})}),addEventListener("mousedown",function(t){a.buttons[t.button]=0,a.m_button_down({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target})}),addEventListener("mouseup",function(t){a.buttons[t.button]=1,a.m_button_up({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target})}),addEventListener("wheel",function(t){a.m_wheel_scroll({xd:Math.sign(t.deltaX),yd:Math.sign(t.deltaY)})})}function y(t){return a.keys[t]===0}document.body.style.margin="0";document.body.style.height="100vh";document.body.style.overflow="hidden";const f=document.createElement("canvas");f.width=document.body.clientWidth;f.height=document.body.clientHeight;document.body.append(f);addEventListener("resize",function(){f.width=document.body.clientWidth,f.height=document.body.clientHeight});const r=j(f),b=U({[r.VERTEX_SHADER]:`#version 300 es
        layout(location = 0) in vec2 i_position;
        layout(location = 1) in vec2 i_size;
        layout(location = 2) in float i_rotation;
        layout(location = 3) in vec4 i_color;
        out vec2 v_size;
        out vec2 v_tex_coord;
        out vec4 v_color;
        uniform mat4 u_projection;
        uniform mat4 u_view;

        const vec2 positions[4] = vec2[4](
            vec2(-0.5, 0.5),
            vec2(-0.5, -0.5),
            vec2(0.5, 0.5),
            vec2(0.5, -0.5)
        );

        const vec2 tex_coords[4] = vec2[4](
            vec2(0.0, 0.0),
            vec2(0.0, 1.0),
            vec2(1.0, 0.0),
            vec2(1.0, 1.0)
        );

        vec2 rotate(vec2 pos, float angle) {
            float s = sin(angle);
            float c = cos(angle);
            return vec2(
                pos.x * c - pos.y * s,
                pos.x * s + pos.y * c
            );
        }

        void main() {
            vec2 p = rotate(positions[gl_VertexID] * i_size, i_rotation) + i_position;

            gl_Position = u_projection * u_view * vec4(p, 0.0, 1.0);
            v_size = i_size;
            v_tex_coord = tex_coords[gl_VertexID];
            v_color = i_color;
        }
    `,[r.FRAGMENT_SHADER]:`#version 300 es
        precision highp float;
        in vec2 v_size;
        in vec2 v_tex_coord;
        in vec4 v_color;
        out vec4 o_frag_color;

        void main() {
            vec2 uv = v_tex_coord;
            vec2 border = 0.2 / v_size;
            float softness = 1.0 / v_size.x;
            float left = smoothstep(0.0, border.x, uv.x);
            float right = smoothstep(0.0, border.x, 1.0 - uv.x);
            float top = smoothstep(0.0, border.y, uv.y);
            float bottom = smoothstep(0.0, border.y, 1.0 - uv.y);
            float outline = min(min(left, right), min(top, bottom));
            vec4 outlineColor = vec4(v_color.xyz * 0.5, 1.0);

            o_frag_color = mix(outlineColor, v_color, outline);
        }
    `}),G=r.getUniformLocation(b,"u_projection"),$=r.getUniformLocation(b,"u_view"),A=1e3,w=new Float32Array(A*9),x=[];function h(t,o){return Math.random()*(o-t+1)+t}for(let t=0;t<A;++t)x.push(new v(w.buffer,t*9*4,9));for(const t of x){const o=h(-50,50),e=h(-50,50),i=h(1,4),n=h(1,2);t[0]=o,t[1]=e,t[2]=i,t[3]=n,t[4]=Math.random(),t[5]=Math.random(),t[6]=Math.random(),t[7]=Math.random(),t[8]=1}const F=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,F);r.bufferData(r.ARRAY_BUFFER,new Float32Array(w),r.STATIC_DRAW);r.enableVertexAttribArray(0);r.vertexAttribPointer(0,2,r.FLOAT,!1,36,0);r.vertexAttribDivisor(0,1);r.enableVertexAttribArray(1);r.vertexAttribPointer(1,2,r.FLOAT,!1,36,8);r.vertexAttribDivisor(1,1);r.enableVertexAttribArray(2);r.vertexAttribPointer(2,1,r.FLOAT,!1,36,16);r.vertexAttribDivisor(2,1);r.enableVertexAttribArray(3);r.vertexAttribPointer(3,4,r.FLOAT,!1,36,20);r.vertexAttribDivisor(3,1);const _=N();q();setInterval(function(){for(const t of x)t[4]+=Math.random()*.01},1e3/30);function J(){y("KeyA")&&L(_,-1),y("KeyD")&&L(_,1),y("KeyS")&&E(_,-1),y("KeyW")&&E(_,1),H(_,f.width,f.height),W(_)}function Q(){r.viewport(0,0,f.width,f.height),r.clearColor(.9,.9,.9,1),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(b),r.uniformMatrix4fv(G,!1,_.projection),r.uniformMatrix4fv($,!1,_.view),r.bindBuffer(r.ARRAY_BUFFER,F),r.bufferSubData(r.ARRAY_BUFFER,0,w),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,A)}function P(){J(),Q(),requestAnimationFrame(P)}P();
