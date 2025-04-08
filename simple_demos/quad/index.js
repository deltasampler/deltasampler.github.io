(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();let o;function m(s){return o=s.getContext("webgl2")}function g(s,n){const r=o.createShader(s);if(!r)return null;if(o.shaderSource(r,n),o.compileShader(r),!o.getShaderParameter(r,o.COMPILE_STATUS)){const t=o.getShaderInfoLog(r);return console.error(t),o.deleteShader(r),null}return r}function y(s){const n=o.createProgram(),r=[];for(const t in s){const i=s[t],a=g(parseInt(t),i);if(!a){for(const h of r)o.deleteShader(h);return null}r.push(a)}for(const t of r)o.attachShader(n,t);o.linkProgram(n);for(const t of r)o.detachShader(n,t),o.deleteShader(t);if(!o.getProgramParameter(n,o.LINK_STATUS)){const t=o.getProgramInfoLog(n);return console.error(t),o.deleteProgram(n),null}return n}document.body.style.margin="0";document.body.style.height="100vh";document.body.style.overflow="hidden";const c=document.createElement("canvas");c.width=document.body.clientWidth;c.height=document.body.clientHeight;document.body.append(c);addEventListener("resize",function(){c.width=document.body.clientWidth,c.height=document.body.clientHeight});const e=m(c),d=y({[e.VERTEX_SHADER]:`#version 300 es
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

    void main() {
        vec2 uv = v_tex_coord;

        o_frag_color = vec4(uv.x, 0.0, uv.y, 1.0);
    }
`}),p=e.getUniformLocation(d,"u_scale_x"),v=e.getUniformLocation(d,"u_scale_y"),A=[-1,1,0,0,-1,-1,0,1,1,-1,1,1,1,1,1,0],u=[0,1,2,0,2,3],b=u.length,f=e.createVertexArray();e.bindVertexArray(f);const E=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,E);e.bufferData(e.ARRAY_BUFFER,new Float32Array(A),e.STATIC_DRAW);e.enableVertexAttribArray(0);e.vertexAttribPointer(0,2,e.FLOAT,!1,16,0);e.enableVertexAttribArray(1);e.vertexAttribPointer(1,2,e.FLOAT,!1,16,8);const R=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,R);e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint32Array(u),e.STATIC_DRAW);function S(){const s=Math.min(c.width,c.height);e.viewport(0,0,c.width,c.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(d),e.uniform1f(p,s/c.width),e.uniform1f(v,s/c.height),e.bindVertexArray(f),e.drawElements(e.TRIANGLES,b,e.UNSIGNED_INT,0)}function _(){S(),requestAnimationFrame(_)}_();
