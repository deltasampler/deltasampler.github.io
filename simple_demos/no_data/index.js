(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();let t;function f(s){return t=s.getContext("webgl2")}function h(s,r){const o=t.createShader(s);if(!o)return null;if(t.shaderSource(o,r),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS)){const e=t.getShaderInfoLog(o);return console.error(e),t.deleteShader(o),null}return o}function g(s){const r=t.createProgram(),o=[];for(const e in s){const n=s[e],l=h(parseInt(e),n);if(!l){for(const u of o)t.deleteShader(u);return null}o.push(l)}for(const e of o)t.attachShader(r,e);t.linkProgram(r);for(const e of o)t.detachShader(r,e),t.deleteShader(e);if(!t.getProgramParameter(r,t.LINK_STATUS)){const e=t.getProgramInfoLog(r);return console.error(e),t.deleteProgram(r),null}return r}document.body.style.margin="0";document.body.style.height="100vh";document.body.style.overflow="hidden";const i=document.createElement("canvas");i.width=document.body.clientWidth;i.height=document.body.clientHeight;document.body.append(i);addEventListener("resize",function(){i.width=document.body.clientWidth,i.height=document.body.clientHeight});const c=f(i),m=g({[c.VERTEX_SHADER]:`#version 300 es
    const vec2 positions[4] = vec2[4](
        vec2(-0.5, 0.5),
        vec2(-0.5, -0.5),
        vec2(0.5, 0.5),
        vec2(0.5, -0.5)
    );

    void main() {
        gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
    }
`,[c.FRAGMENT_SHADER]:`#version 300 es
    precision highp float;
    out vec4 o_frag_color;

    void main() {
        o_frag_color = vec4(1.0);
    }
`});function p(){c.viewport(0,0,i.width,i.height),c.clearColor(0,0,0,1),c.clear(c.COLOR_BUFFER_BIT),c.useProgram(m),c.drawArrays(c.TRIANGLE_STRIP,0,4)}function a(){p(),requestAnimationFrame(a)}a();
