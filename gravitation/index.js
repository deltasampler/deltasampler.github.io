(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}})();function L(t,e){return Math.random()*(e-t)+t}const w=Float32Array;function p(t=0,e){const i=new w(2);return i[0]=t,i[1]=e??t,i}function G(t,e,i){t[0]=e,t[1]=i}function R(t,e){t[0]=e[0],t[1]=e[1]}function Et(t){const e=new w(2);return R(e,t),e}function wt(t){t[0]=0,t[1]=0}function tt(t,e,i){t[0]=e[0]+i[0],t[1]=e[1]+i[1]}function xt(t,e){const i=new w(2);return tt(i,t,e),i}function S(t,e){tt(t,t,e)}function bt(t,e,i){t[0]=e[0]-i[0],t[1]=e[1]-i[1]}function Rt(t,e){const i=new w(2);return bt(i,t,e),i}function et(t,e,i){t[0]=e[0]*i,t[1]=e[1]*i}function M(t,e){const i=new w(2);return et(i,t,e),i}function C(t,e){et(t,t,e)}function Tt(t,e,i,r){t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r}function D(t,e,i){Tt(t,t,e,i)}function ot(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}function Ft(t,e){const i=t[0]-e[0],r=t[1]-e[1];return i*i+r*r}function At(t,e,i){const r=e[0]-i[0],n=e[1]-i[1];let c=r*r+n*n;c>0&&(c=1/Math.sqrt(c)),t[0]=r*c,t[1]=n*c}function it(t,e){const i=new w(2);return At(i,t,e),i}const Ut=Float32Array;function B(t=0,e,i,r){const n=new Ut(4);return n[0]=t,n[1]=e??t,n[2]=i??t,n[3]=r,n}function z(t,e,i){return Math.min(Math.max(t,e),i)}function St(t,e,i){return Ft(t,i)<=e*e}const Dt=Float32Array;function H(t=1,e=0,i=0,r=0,n=0,c,s=0,f=0,u=0,y=0,we,gt=0,mt=0,ht=0,yt=0,xe){const _=new Dt(16);return _[0]=t,_[1]=e,_[2]=i,_[3]=r,_[4]=n,_[5]=t,_[6]=s,_[7]=f,_[8]=u,_[9]=y,_[10]=t,_[11]=gt,_[12]=mt,_[13]=ht,_[14]=yt,_[15]=t,_}function nt(t){t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1}function Lt(t,e,i){const r=i[0],n=i[1],c=i[2];t[12]=e[0]*r+e[4]*n+e[8]*c+e[12],t[13]=e[1]*r+e[5]*n+e[9]*c+e[13],t[14]=e[2]*r+e[6]*n+e[10]*c+e[14],t[15]=e[3]*r+e[7]*n+e[11]*c+e[15]}function Pt(t,e,i){const r=i[0],n=i[1],c=i[2];t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*c,t[9]=e[9]*c,t[10]=e[10]*c,t[11]=e[11]*c,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]}const Nt=Float32Array;function rt(t=0,e,i){const r=new Nt(3);return r[0]=t,r[1]=e??t,r[2]=i??t,r}class Mt{}function Xt(){const t=new Mt;return t.position=p(),t.right=p(1,0),t.up=p(0,1),t.world_up=p(0,1),t.projection=H(1),t.near=-100,t.far=100,t.view=H(1),t.scale=50,t.roll=0,t.movement_speed=.1,t.roll_speed=.1,t.zoom_speed=.1,t}function V(t,e){D(t.position,t.right,t.movement_speed*e)}function W(t,e){D(t.position,t.up,t.movement_speed*e)}function Y(t,e){t.scale+=t.zoom_speed*e}function It(t,e,i){return nt(t.projection),Pt(t.projection,t.projection,rt(t.scale/e,t.scale/i,1)),t.projection}function kt(t){return nt(t.view),Lt(t.view,t.view,rt(-t.position[0],-t.position[1],0)),t.view}function ct(t,e,i,r){const n=e[0]/i*2-1,c=e[1]/r*-2+1,s=i/t.scale,f=r/t.scale;return p(t.position[0]+n*s,t.position[1]+c*f)}const l={keys:{},buttons:{},kb_key_down:function(){},kb_key_up:function(){},m_move:function(){},m_button_down:function(){},m_button_up:function(){},m_wheel_scroll:function(){}};function Kt(t){l.kb_key_down=t}function Ot(t){l.m_move=t}function Gt(t){l.m_button_down=t}function jt(t){l.m_button_up=t}function Ct(){addEventListener("keydown",function(t){l.keys[t.code]=0,l.kb_key_down({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,event:t})}),addEventListener("keyup",function(t){l.keys[t.code]=1,l.kb_key_up({code:t.code,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,event:t})}),addEventListener("mousemove",function(t){l.m_move({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("mousedown",function(t){l.buttons[t.button]=0,l.m_button_down({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("mouseup",function(t){l.buttons[t.button]=1,l.m_button_up({x:t.offsetX,y:t.offsetY,xd:t.movementX,yd:t.movementY,button:t.button,alt:t.altKey,ctrl:t.ctrlKey,shift:t.shiftKey,target:t.target,event:t})}),addEventListener("wheel",function(t){l.m_wheel_scroll({xd:Math.sign(t.deltaX),yd:Math.sign(t.deltaY),event:t})})}function E(t){return l.keys[t]===0}function Bt(t){const e=document.createElement("canvas");return t.append(e),e.width=t.clientWidth,e.height=t.clientHeight,addEventListener("resize",function(){e.width=t.clientWidth,e.height=t.clientHeight}),e}let o;function zt(t){return o=t.getContext("webgl2")}function Ht(t,e){const i=o.createShader(t);if(!i)return null;if(o.shaderSource(i,e),o.compileShader(i),!o.getShaderParameter(i,o.COMPILE_STATUS)){const n=o.getShaderInfoLog(i);return console.error(n),o.deleteShader(i),null}return i}function X(t){const e=o.createProgram(),i=[];for(const n in t){const c=t[n],s=Ht(parseInt(n),c);if(!s){for(const f of i)o.deleteShader(f);return null}i.push(s)}for(const n of i)o.attachShader(e,n);o.linkProgram(e);for(const n of i)o.detachShader(e,n),o.deleteShader(n);if(!o.getProgramParameter(e,o.LINK_STATUS)){const n=o.getProgramInfoLog(e);return console.error(n),o.deleteProgram(e),null}return e}function q(t){return((t[0]&255)<<24|(t[1]&255)<<16|(t[2]&255)<<8|t[3]&255)>>>0}var x=(t=>(t[t.S8=0]="S8",t[t.U8=1]="U8",t[t.S16=2]="S16",t[t.U16=3]="U16",t[t.S32=4]="S32",t[t.U32=5]="U32",t[t.F32=6]="F32",t))(x||{});const st={0:1,1:1,2:2,3:2,4:4,5:4,6:4};function Vt(t){switch(t){case 0:return o.BYTE;case 1:return o.UNSIGNED_BYTE;case 2:return o.SHORT;case 3:return o.UNSIGNED_SHORT;case 4:return o.INT;case 5:return o.UNSIGNED_INT;case 6:return o.FLOAT;default:return o.FLOAT}}class Wt{}function Yt(t,e){const i=new Wt;return i.type=t,i.size=e,i}class qt{}function $t(){const t=new qt;return t.attribs=[],t.stride=0,t}function A(t,e,i){const r=Yt(e,i);return t.attribs.push(r),t.stride+=st[r.type]*r.size,r}function Qt(t,e=!1){const i=t.attribs;let r=0;for(let n=0;n<i.length;n+=1){const c=i[n],s=Vt(c.type);o.enableVertexAttribArray(n),c.type===6?o.vertexAttribPointer(n,c.size,s,!1,t.stride,r):o.vertexAttribIPointer(n,c.size,s,t.stride,r),e&&o.vertexAttribDivisor(n,1),r+=st[c.type]*c.size}}let U,at,_t,I,k;const m=$t();A(m,x.F32,3);A(m,x.F32,1);A(m,x.S32,1);A(m,x.S32,1);A(m,x.F32,1);class Zt{}function Jt(){const t=new Zt;return t.data=new ArrayBuffer(0),t.len=0,t.cap=0,t.instances=[],t}function te(t,e){const i=new ArrayBuffer(e*m.stride),r=[];for(let n=0;n<e;n+=1)r.push(new DataView(i,n*m.stride,m.stride));t.data=i,t.len=e,t.cap=e,t.instances=r}function ee(t,e,i,r,n,c,s,f){const u=t.instances[e];u.setFloat32(0,i[0],!0),u.setFloat32(4,i[1],!0),u.setFloat32(8,n,!0),u.setFloat32(12,r,!0),u.setInt32(16,q(c),!0),u.setInt32(20,q(s),!0),u.setFloat32(24,f,!0)}function oe(){U=X({[o.VERTEX_SHADER]:`#version 300 es
            layout(location = 0) in vec3 i_position;
            layout(location = 1) in float i_radius;
            layout(location = 2) in int i_inner_color;
            layout(location = 3) in int i_outer_color;
            layout(location = 4) in float i_outline;
            flat out float v_radius;
            flat out int v_inner_color;
            flat out int v_outer_color;
            flat out float v_outline;
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
                v_inner_color = i_inner_color;
                v_outer_color = i_outer_color;
                v_outline = i_outline;
                v_tex_coord = tex_coords[gl_VertexID];
            }
        `,[o.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            flat in float v_radius;
            flat in int v_inner_color;
            flat in int v_outer_color;
            flat in float v_outline;
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
                float l = length(cp);
                vec4 inner_color = unpack256(v_inner_color);
                vec4 outer_color = unpack256(v_outer_color);
                float alias_width = fwidth(l / v_radius);
                float inner_mask = smoothstep(1.0 - v_outline / v_radius, 1.0 - alias_width, l);
                vec4 color = mix(inner_color, outer_color, inner_mask);
                color.w *= smoothstep(1.0, 1.0 - alias_width, l);

                o_frag_color = color;
            }
        `}),at=o.getUniformLocation(U,"u_projection"),_t=o.getUniformLocation(U,"u_view")}function ie(t){I=o.createVertexArray(),o.bindVertexArray(I),k=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,k),o.bufferData(o.ARRAY_BUFFER,t.data,o.STATIC_DRAW),Qt(m,!0)}function ne(t,e){o.useProgram(U),o.uniformMatrix4fv(at,!1,e.projection),o.uniformMatrix4fv(_t,!1,e.view),o.bindVertexArray(I),o.bindBuffer(o.ARRAY_BUFFER,k),o.bufferSubData(o.ARRAY_BUFFER,0,t.data),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,t.len)}function K(t,e){return Math.cbrt(3*t/(4*Math.PI*e))}class re{}function ce(t,e,i){const r=new re;return r.position=Et(t),r.radius=K(e,i),r.mass=e,r.density=i,r.force=p(),r.acceleration=p(),r.velocity=p(),r.drag_pos=p(),r}function P(t){return t.position[0]-t.radius}function se(t){return t.position[0]+t.radius}function $(t){return t.position[1]-t.radius}function Q(t){return t.position[1]+t.radius}function ae(t,e=!1){const i=t.sort((r,n)=>P(r)-P(n));for(let r=0;r<i.length;r+=1){const n=i[r];for(let c=r+1;c<i.length;c+=1){const s=i[c];if(P(s)>se(n))break;if($(n)<Q(s)&&Q(n)>$(s)){const f=ot(n.position,s.position)-(n.radius+s.radius),u=it(s.position,n.position);if(f<0){const y={depth:f,dir:u};e?n.mass>s.mass?(n.mass+=s.mass,n.radius=K(n.mass,n.density),t[c]=t[t.length-1],t.pop()):(s.mass+=n.mass,s.radius=K(s.mass,s.density),t[r]=t[t.length-1],t.pop()):(S(n.position,M(y.dir,y.depth/2)),S(s.position,M(y.dir,-y.depth/2)))}}}}}function _e(t,e){D(t.position,t.velocity,e),R(t.acceleration,M(t.force,1/t.mass)),D(t.velocity,t.acceleration,e),wt(t.force)}const b=4;class ue{}function le(t){const e=new Float32Array(t*b),i=[];for(let c=0;c<t;c+=1)i.push(new Float32Array(e.buffer,c*b*4,b));const r=o.createTexture();o.bindTexture(o.TEXTURE_2D,r),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texImage2D(o.TEXTURE_2D,0,o.RGBA32F,t*b/4,1,0,o.RGBA,o.FLOAT,e);const n=new ue;return n.data=e,n.len=0,n.cap=t,n.instances=i,n.tbo=r,n}function de(t,e,i,r,n){const c=t.instances[e];c[0]=i[0],c[1]=i[1],c[2]=r,c[3]=n}class fe{}function pe(t,e){const i=new fe;return i.w=t,i.h=e,i.tex_prog={},i.out_prog={},i.fbo=0,i.tbo=0,i}function ve(t){const e=t.tex_prog;e.id=X({[o.VERTEX_SHADER]:`#version 300 es
            layout(location = 0) in vec2 i_position;
            layout(location = 1) in float i_radius;

            const vec2 positions[4] = vec2[4](
                vec2(-1.0, -1.0),
                vec2(-1.0, 1.0),
                vec2(1.0, -1.0),
                vec2(1.0, 1.0)
            );

            void main() {
                gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
            }
        `,[o.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            uniform vec2 u_viewport;
            uniform mat4 u_projection;
            uniform mat4 u_view;
            uniform int u_instance_count;
            uniform float u_time;
            uniform sampler2D u_texture;

            int px_per_instance = 4;

            struct res_t {
                float voronoi;
                vec2 field;
            };

            res_t map(vec2 p) {
                float d1 = 1e10;
                float d2 = 1e10;
                vec2 field;

                for (int i = 0; i < u_instance_count; i += 1) {
                    vec4 tex0 = texelFetch(u_texture, ivec2(i * px_per_instance / 4, 0), 0);
                    vec2 position = tex0.xy;
                    float radius = tex0.z;
                    float mass = tex0.w;

                    vec2 diff = p - position;
                    vec2 dir = normalize(diff);
                    float len = length(diff);
                    float dist = len - radius;

                    if (dist < d1) {
                        d2 = d1;
                        d1 = dist;
                    } else if (dist < d2) {
                        d2 = dist;
                    }

                    field += dir * (mass / (dist * dist));
                }

                float voronoi = exp(-abs(d1 - d2) * 0.5);

                return res_t(voronoi, field);
            }

            float grid(vec2 p, float spacing) {
                vec2 grid = abs(fract(p / spacing - 0.5) - 0.5);

                vec2 aa = fwidth(p / spacing);
                vec2 grid_aa = smoothstep(vec2(0.0), aa, grid);

                return min(grid_aa.x, grid_aa.y);
            }

            float smooth_grid(vec2 uv, vec2 line_width) {
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
                mat4 proj_inv = inverse(u_projection);
                mat4 view_inv = inverse(u_view);
                vec2 tex_coord = gl_FragCoord.xy / u_viewport;
                vec2 uv = tex_coord * 2.0 - 1.0;
                vec2 pos = (view_inv * proj_inv * vec4(uv, 0.0, 1.0)).xy;
                res_t res = map(pos);

                vec2 distorted_pos = pos + res.field;
                float g = smooth_grid(distorted_pos, vec2(0.05));
                vec3 color = mix(vec3(0.0), vec3(1.0), g) * vec3(0.2, 0.6, 0.4);

                o_frag_color = vec4(color + vec3(0.5, 0.2, 0.6) * res.voronoi * 0.5, 1.0);
            }
        `}),e.u_viewport=o.getUniformLocation(e.id,"u_viewport"),e.u_projection=o.getUniformLocation(e.id,"u_projection"),e.u_view=o.getUniformLocation(e.id,"u_view"),e.u_instance_count=o.getUniformLocation(e.id,"u_instance_count");const i=t.out_prog;i.id=X({[o.VERTEX_SHADER]:`#version 300 es
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
        `,[o.FRAGMENT_SHADER]:`#version 300 es
            precision highp float;
            out vec4 o_frag_color;
            in vec2 v_tex_coord;
            uniform sampler2D u_texture;

            void main() {
                o_frag_color = texture(u_texture, v_tex_coord);
            }
        `}),t.fbo=o.createFramebuffer(),t.tbo=o.createTexture(),o.bindTexture(o.TEXTURE_2D,t.tbo),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,t.w,t.h,0,o.RGBA,o.UNSIGNED_BYTE,null),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}function ge(t,e,i){o.bindTexture(o.TEXTURE_2D,e.tbo),o.texImage2D(o.TEXTURE_2D,0,o.RGBA32F,e.cap*b/4,1,0,o.RGBA,o.FLOAT,e.data),o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,t.tbo,0),o.viewport(0,0,t.w,t.h),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.useProgram(t.tex_prog.id),o.uniform2f(t.tex_prog.u_viewport,t.w,t.h),o.uniformMatrix4fv(t.tex_prog.u_projection,!1,i.projection),o.uniformMatrix4fv(t.tex_prog.u_view,!1,i.view),o.uniform1i(t.tex_prog.u_instance_count,e.len),o.bindTexture(o.TEXTURE_2D,e.tbo),o.drawArrays(o.TRIANGLE_STRIP,0,4),o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.useProgram(t.out_prog.id),o.bindTexture(o.TEXTURE_2D,t.tbo),o.drawArrays(o.TRIANGLE_STRIP,0,4)}Ct();const v=Bt(document.body),g=zt(v),a=Xt();a.movement_speed=.2;a.zoom_speed=.2;const ut=256,me=256,Z=64,d=[];function lt(){for(let t=d.length;d.length<me;t+=1){const e=p(L(-64,Z),L(-64,Z)),i=L(1,100);d.push(ce(e,i,10))}}lt();const T=p();let j=!1,h=null;const dt=p();oe();const F=Jt();te(F,ut);ie(F);const he=1,ft=pe(Math.trunc(v.width/2),Math.trunc(v.height/he));ve(ft);const O=le(ut);let N=0,J=0,pt=0;g.enable(g.BLEND);g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);Ot(function(t){G(T,t.x,t.y);const e=ct(a,T,v.width,v.height);j&&h&&R(h.position,xt(h.drag_pos,Rt(e,dt)))});Gt(function(t){G(T,t.x,t.y);const e=ct(a,T,v.width,v.height);for(const i of d)if(St(i.position,i.radius,e)){h=i;break}h&&(j=!0,R(dt,e),R(h.drag_pos,h.position))});jt(function(t){G(T,t.x,t.y),j=!1,h=null});Kt(function(t){t.code==="KeyR"&&lt()});function ye(){E("KeyA")&&V(a,-1),E("KeyD")&&V(a,1),E("KeyS")&&W(a,-1),E("KeyW")&&W(a,1),E("KeyQ")&&(Y(a,-1),a.scale=z(a.scale,10,300)),E("KeyE")&&(Y(a,1),a.scale=z(a.scale,10,300)),It(a,v.width,v.height),kt(a),ae(d,!0);for(let t=0;t<d.length;t+=1){const e=d[t];for(let i=t+1;i<d.length;i+=1){const r=d[i],n=ot(e.position,r.position)+.001,c=1,s=e.mass*r.mass,f=c*s/(n*n),u=it(r.position,e.position);C(u,f),S(e.force,u),C(u,-1),S(r.force,u)}}for(let t=0;t<d.length;t+=1){const e=d[t];ee(F,t,e.position,e.radius,0,B(84,84,84,255),B(219,219,219,255),.2),de(O,t,e.position,e.radius,e.mass),_e(e,pt/1e3)}}function Ee(){g.viewport(0,0,v.width,v.height),g.clearColor(0,0,0,1),g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT),O.len=d.length,ge(ft,O,a),F.len=d.length,ne(F,a)}function vt(){N=performance.now()/1e3,pt=J/N,J=N,ye(),Ee(),requestAnimationFrame(vt)}vt();
