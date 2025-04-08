(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();let a;function C(t){return a=t.getContext("webgl2")}function F(t,e){const o=a.createShader(t);if(!o)return null;if(a.shaderSource(o,e),a.compileShader(o),!a.getShaderParameter(o,a.COMPILE_STATUS)){const r=a.getShaderInfoLog(o);return console.error(r),a.deleteShader(o),null}return o}function v(t){const e=a.createProgram(),o=[];for(const r in t){const c=t[r],i=F(parseInt(r),c);if(!i){for(const d of o)a.deleteShader(d);return null}o.push(i)}for(const r of o)a.attachShader(e,r);a.linkProgram(e);for(const r of o)a.detachShader(e,r),a.deleteShader(r);if(!a.getProgramParameter(e,a.LINK_STATUS)){const r=a.getProgramInfoLog(e);return console.error(r),a.deleteProgram(e),null}return e}const l={keys:{},buttons:{},kb_key_down:function(){},kb_key_up:function(){},m_move:function(){},m_button_down:function(){},m_button_up:function(){},m_wheel_scroll:function(){}};function H(t){l.kb_key_down=t}function z(t){l.m_move=t}function W(t){l.m_button_down=t}function V(t){l.m_button_up=t}function q(t){l.m_wheel_scroll=t}function $(){addEventListener("keydown",function(t){l.keys[t.code]=0,l.kb_key_down({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,event:t})}),addEventListener("keyup",function(t){l.keys[t.code]=1,l.kb_key_up({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,event:t})}),addEventListener("mousemove",function(t){l.m_move({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("mousedown",function(t){l.buttons[t.button]=0,l.m_button_down({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("mouseup",function(t){l.buttons[t.button]=1,l.m_button_up({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("wheel",function(t){l.m_wheel_scroll({xd:Math.sign(t.deltaX),yd:Math.sign(t.deltaY),event:t})})}function b(t,e,o){return Math.min(Math.max(t,e),o)}function k(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function R(t,e,o){return e*o+t}const j=Float32Array;function J(t=0,e){const o=new j(2);return o[0]=t,o[1]=t,o}function Q(t,e,o){return t[0]=e,t[1]=o,t}const _=document.createElement("div");document.body.append(_);_.style.width="100vw";_.style.height="100vh";_.style.backgroundColor="#000000";const h=document.createElement("div");_.append(h);h.style.position="absolute";h.style.right="0";h.style.top="0";h.style.fontFamily="monospace";h.style.fontSize="16px";h.style.color="#ffffff";h.style.padding="16px";h.style.userSelect="none";h.innerHTML=`
    Controls:<br>
    LMB - Paint<br>
    Scroll - Brush size<br>
    1 - Erase<br>
    2 - Sand<br>
    R - Reset<br>
    Space - Pause/Unpause
`;const f=document.createElement("canvas");_.append(f);let U=_.clientWidth<_.clientHeight?_.clientWidth:_.clientHeight;f.width=f.height=U;addEventListener("resize",function(){U=_.clientWidth<_.clientHeight?_.clientWidth:_.clientHeight,f.width=f.height=U});const n=C(f),Z=v({[n.VERTEX_SHADER]:`#version 300 es
        out vec2 v_tex_coord;

        const vec2 positions[4] = vec2[](
            vec2(-1.0, 1.0),
            vec2(-1.0, -1.0),
            vec2(1.0, 1.0),
            vec2(1.0, -1.0)
        );

        const vec2 tex_coords[4] = vec2[](
            vec2(0.0, 0.0),
            vec2(0.0, 1.0),
            vec2(1.0, 0.0),
            vec2(1.0, 1.0)
        );

        void main() {
            gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
            v_tex_coord = tex_coords[gl_VertexID];
        }
    `,[n.FRAGMENT_SHADER]:`#version 300 es
        precision highp float;
        out vec4 o_frag_color;
        in vec2 v_tex_coord;
        uniform sampler2D u_texture;

        void main() {
            o_frag_color = vec4(texture(u_texture, v_tex_coord).yzw, 1.0);
        }
    `}),u=256,g=256,E=4,T=u*g*E,p=new Uint8Array(T),w=[new Uint8Array([0,64,64,64]),new Uint8Array([1,235,199,141])],G=w[0];function tt(t,e,o){t[e*E]=o[0],t[e*E+1]=o[1],t[e*E+2]=o[2],t[e*E+3]=o[3]}function O(t,e){for(let o=0;o<g;o+=1)for(let s=0;s<u;s+=1){const r=R(s,o,u);tt(t,r,e)}}function L(t,e,o){const s=t[e*4],r=t[e*4+1],c=t[e*4+2],i=t[e*4+3];t[e*4]=t[o*4],t[e*4+1]=t[o*4+1],t[e*4+2]=t[o*4+2],t[e*4+3]=t[o*4+3],t[o*4]=s,t[o*4+1]=r,t[o*4+2]=c,t[o*4+3]=i}function ot(t){for(let e=0;e<u;e+=1)for(let o=g-1;o>=0;o-=1){const r=R(e,o,u);let c=(r+u)%T;const i=Math.random()>.5?-1:1;let d=(c-i+T)%T,m=(c+i)%T;t[r*4]!==0&&(t[c*4]===0?L(t,r,c):t[d*4]===0?L(t,r,d):t[m*4]===0&&L(t,r,m))}}const N=32;function y(t,e){return b(t+e,0,255)}function et(t,e,o,s){const r=Math.floor(e[0]/f.width*u),c=Math.floor(e[1]/f.height*g);if(n.bindTexture(n.TEXTURE_2D,I),o<=1){const i=R(r,c,u)*4,d=s[0]>0?k(-32,N):0;t[i]=s[0],t[i+1]=y(s[1],d),t[i+2]=y(s[2],d),t[i+3]=y(s[3],d)}else{const i=Math.floor(o/2);for(let d=-i;d<=i;d++)for(let m=-i;m<=i;m++){const S=r+m,A=c+d;if(!(S<0||S>=u||A<0||A>=g)&&m*m+d*d<=i*i){const x=R(S,A,u)*4,P=s[0]>0?k(-32,N):0;t[x]=s[0],t[x+1]=y(s[1],P),t[x+2]=y(s[2],P),t[x+3]=y(s[3],P)}}}}const I=n.createTexture();n.bindTexture(n.TEXTURE_2D,I);n.pixelStorei(n.UNPACK_ALIGNMENT,1);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,u,g,0,n.RGBA,n.UNSIGNED_BYTE,p);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);const Y=J();let K=!1,D=1,M=w[1],X=!1;O(p,G);$();W(function(t){t.button===0&&(K=!0)});H(function(t){t.code==="Space"&&(X=!X),t.code==="KeyR"&&O(p,G),t.code==="Digit1"&&(M=w[0]),t.code==="Digit2"&&(M=w[1])});z(function(t){t.target===f&&Q(Y,t.x,t.y)});V(function(t){t.button===0&&(K=!1)});q(function(t){D=b(D-t.yd,1,32)});function nt(){K&&et(p,Y,D,M),X||ot(p)}function rt(){n.viewport(0,0,f.width,f.height),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.bindTexture(n.TEXTURE_2D,I),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,u,g,0,n.RGBA,n.UNSIGNED_BYTE,p),n.useProgram(Z),n.drawArrays(n.TRIANGLE_STRIP,0,4)}function B(){nt(),rt(),requestAnimationFrame(B)}B();
