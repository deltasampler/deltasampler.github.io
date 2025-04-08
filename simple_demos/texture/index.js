(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(t){if(t.ep)return;t.ep=!0;const c=r(t);fetch(t.href,c)}})();let o;function A(i){return o=i.getContext("webgl2")}function R(i,n){const r=o.createShader(i);if(!r)return null;if(o.shaderSource(r,n),o.compileShader(r),!o.getShaderParameter(r,o.COMPILE_STATUS)){const t=o.getShaderInfoLog(r);return console.error(t),o.deleteShader(r),null}return r}function y(i){const n=o.createProgram(),r=[];for(const t in i){const c=i[t],s=R(parseInt(t),c);if(!s){for(const T of r)o.deleteShader(T);return null}r.push(s)}for(const t of r)o.attachShader(n,t);o.linkProgram(n);for(const t of r)o.detachShader(n,t),o.deleteShader(t);if(!o.getProgramParameter(n,o.LINK_STATUS)){const t=o.getProgramInfoLog(n);return console.error(t),o.deleteProgram(n),null}return n}document.body.style.margin="0";document.body.style.height="100vh";document.body.style.overflow="hidden";const a=document.createElement("canvas");a.width=document.body.clientWidth;a.height=document.body.clientHeight;document.body.append(a);addEventListener("resize",function(){a.width=document.body.clientWidth,a.height=document.body.clientHeight});const e=A(a),_=y({[e.VERTEX_SHADER]:`#version 300 es
    layout(location = 0) in vec2 i_position;
    layout(location = 1) in vec2 i_tex_coord;
    out vec2 v_tex_coord;
    uniform float u_scale_x;
    uniform float u_scale_y;

    void main() {
        gl_Position = vec4(i_position * vec2(u_scale_x, u_scale_y), 0.0, 1.0);
        v_tex_coord = i_tex_coord;
    }
`,[e.FRAGMENT_SHADER]:`#version 300 es
    precision highp float;
    in vec2 v_tex_coord;
    out vec4 o_frag_color;
    uniform sampler2D u_texture;

    void main() {
        o_frag_color = texture(u_texture, v_tex_coord);
    }
`}),p=e.getUniformLocation(_,"u_scale_x"),x=e.getUniformLocation(_,"u_scale_y"),v=[-1,1,0,0,-1,-1,0,1,1,-1,1,1,1,1,1,0],h=[0,1,2,0,2,3],b=h.length,m=e.createVertexArray();e.bindVertexArray(m);const S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S);e.bufferData(e.ARRAY_BUFFER,new Float32Array(v),e.STATIC_DRAW);e.enableVertexAttribArray(0);e.vertexAttribPointer(0,2,e.FLOAT,!1,16,0);e.enableVertexAttribArray(1);e.vertexAttribPointer(1,2,e.FLOAT,!1,16,8);const P=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,P);e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint32Array(h),e.STATIC_DRAW);const f=256,d=256,E=3,U=f*d*E,u=new Uint8Array(U);for(let i=0;i<d;++i)for(let n=0;n<d;++n){const r=(i*f+n)*E;u[r]=Math.round(Math.random()*255),u[r+1]=Math.round(Math.random()*255),u[r+2]=Math.round(Math.random()*255)}const L=e.createTexture();e.bindTexture(e.TEXTURE_2D,L);e.pixelStorei(e.UNPACK_ALIGNMENT,1);e.texImage2D(e.TEXTURE_2D,0,e.RGB,f,d,0,e.RGB,e.UNSIGNED_BYTE,u);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);function N(){const i=Math.min(a.width,a.height);e.viewport(0,0,a.width,a.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(_),e.uniform1f(p,i/a.width),e.uniform1f(x,i/a.height),e.bindVertexArray(m),e.drawElements(e.TRIANGLES,b,e.UNSIGNED_INT,0)}function g(){N(),requestAnimationFrame(g)}g();
