(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&_(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function _(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();let r;function R(a){return r=a.getContext("webgl2")}function v(a,n){const o=r.createShader(a);if(!o)return null;if(r.shaderSource(o,n),r.compileShader(o),!r.getShaderParameter(o,r.COMPILE_STATUS)){const t=r.getShaderInfoLog(o);return console.error(t),r.deleteShader(o),null}return o}function d(a){const n=r.createProgram(),o=[];for(const t in a){const i=a[t],s=v(parseInt(t),i);if(!s){for(const A of o)r.deleteShader(A);return null}o.push(s)}for(const t of o)r.attachShader(n,t);r.linkProgram(n);for(const t of o)r.detachShader(n,t),r.deleteShader(t);if(!r.getProgramParameter(n,r.LINK_STATUS)){const t=r.getProgramInfoLog(n);return console.error(t),r.deleteProgram(n),null}return n}document.body.style.margin="0";document.body.style.height="100vh";document.body.style.overflow="hidden";const c=document.createElement("canvas");c.width=document.body.clientWidth;c.height=document.body.clientHeight;document.body.append(c);addEventListener("resize",function(){c.width=document.body.clientWidth,c.height=document.body.clientHeight});const e=R(c),l=d({[e.VERTEX_SHADER]:`#version 300 es
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
`}),x=e.getUniformLocation(l,"u_scale_x"),p=e.getUniformLocation(l,"u_scale_y"),y=d({[e.VERTEX_SHADER]:`#version 300 es
    layout(location = 0) in vec2 i_position;
    layout(location = 1) in vec2 i_tex_coord;
    out vec2 v_tex_coord;

    void main() {
        gl_Position = vec4(i_position, 0.0, 1.0);
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
`}),b=[-1,1,0,0,-1,-1,0,1,1,-1,1,1,1,1,1,0],f=[0,1,2,0,2,3],E=f.length,u=e.createVertexArray();e.bindVertexArray(u);const F=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,F);e.bufferData(e.ARRAY_BUFFER,new Float32Array(b),e.STATIC_DRAW);e.enableVertexAttribArray(0);e.vertexAttribPointer(0,2,e.FLOAT,!1,16,0);e.enableVertexAttribArray(1);e.vertexAttribPointer(1,2,e.FLOAT,!1,16,8);const S=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,S);e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint32Array(f),e.STATIC_DRAW);const m=4,T=4,h=e.createTexture();e.bindTexture(e.TEXTURE_2D,h);e.pixelStorei(e.UNPACK_ALIGNMENT,1);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,m,T,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const U=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,U);e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,h,0);e.viewport(0,0,m,T);e.clearColor(0,0,0,1);e.clear(e.COLOR_BUFFER_BIT);e.useProgram(y);e.bindVertexArray(u);e.drawElements(e.TRIANGLES,E,e.UNSIGNED_INT,0);e.bindFramebuffer(e.FRAMEBUFFER,null);function P(){const a=Math.min(c.width,c.height);e.viewport(0,0,c.width,c.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(l),e.uniform1f(x,a/c.width),e.uniform1f(p,a/c.height),e.bindVertexArray(u),e.drawElements(e.TRIANGLES,E,e.UNSIGNED_INT,0)}function g(){P(),requestAnimationFrame(g)}g();
