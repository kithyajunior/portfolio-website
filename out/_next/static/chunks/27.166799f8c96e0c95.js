(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{2263:(e,r,t)=>{"use strict";t.d(r,{Im:()=>v,VD:()=>o,ZA:()=>c,dY:()=>l,hf:()=>m,i6:()=>d});var n=t(4796),a=t(2179),u=t(307);n.l2R.enabled=!0;let s=new a.Z,i=new u.B;s.setDecoderPath("/draco/"),i.setDRACOLoader(s);let c=i,o=new n.Tap,v=e=>{e?.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else for(let r of e.material)f(r)})},f=e=>{for(let r of(e.dispose(),Object.keys(e))){let t=e[r];t&&"object"==typeof t&&"minFilter"in t&&(t.dispose(),t.source?.data?.close?.())}},l=e=>{e.dispose(),e=null},d=e=>{for(let r of e)r.parent.remove(r)},m=(e,r)=>{let t;return r.traverse(r=>{r.name===e&&(t=r)}),t}},2940:e=>{e.exports={model:"Model_model__YBuiu",canvas:"Model_canvas__wPXWi"}},2985:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Model:()=>D});var n=t(7876),a=t(7689),u=t(8097),s=t(4336),i=t(9803),c=t(4232),o=t(4796);let v={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},f={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `};var l=t(6486),d=t(7554),m=t(2263),p=t(2940),x=t.n(p);t.p,t.p;let y={SpringUp:"spring-up",LaptopOpen:"laptop-open"};y.SpringUp,y.LaptopOpen;let w={Frame:"Frame",Screen:"Screen"},g={stiffness:40,damping:20,mass:1.4,restSpeed:.001},D=({models:e,show:r=!0,showDelay:t=0,cameraPosition:s={x:0,y:0,z:8},style:l,className:p,alt:y,...w})=>{let[D,h]=(0,c.useState)(!1),R=(0,c.useRef)(),S=(0,c.useRef)(),M=(0,c.useRef)(),P=(0,c.useRef)(),b=(0,c.useRef)(),k=(0,c.useRef)(),C=(0,c.useRef)(),_=(0,c.useRef)(),A=(0,c.useRef)(),E=(0,c.useRef)(),j=(0,c.useRef)(),F=(0,c.useRef)(),L=(0,c.useRef)(),T=(0,c.useRef)(),z=(0,c.useRef)(),B=(0,c.useRef)(),I=(0,c.useRef)(),Z=(0,i.B4)(R,!1,{threshold:.2}),N=(0,a.I)(),O=(0,u.z)(0,g),V=(0,u.z)(0,g);(0,c.useEffect)(()=>{let{clientWidth:e,clientHeight:r}=R.current;k.current=new o.JeP({canvas:S.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),k.current.setPixelRatio(2),k.current.setSize(e,r),k.current.outputEncoding=o.S2Q,k.current.physicallyCorrectLights=!0,M.current=new o.ubm(36,e/r,.1,100),M.current.position.set(s.x,s.y,s.z),b.current=new o.Z58,P.current=new o.YJl,b.current.add(P.current);let t=new o.$p8(0xffffff,1.2),n=new o.ZyN(0xffffff,1.1),a=new o.ZyN(0xffffff,.8);a.position.set(-6,2,2),n.position.set(.5,0,.866),z.current=[t,n,a],z.current.forEach(e=>b.current.add(e)),C.current=new o.YJl,b.current.add(C.current),C.current.position.set(0,0,-.8),C.current.rotateX(Math.PI/2),_.current=new o.nWS(512,512),_.current.texture.generateMipmaps=!1,A.current=new o.nWS(512,512),A.current.texture.generateMipmaps=!1;let u=new o.pxj(8,8).rotateX(Math.PI/2),i=new o.V9B({map:_.current.texture,opacity:.8,transparent:!0});T.current=new o.eaF(u,i),T.current.scale.y=-1,C.current.add(T.current),B.current=new o.eaF(u),B.current.visible=!1,C.current.add(B.current);let c=new o.V9B({color:0xffffff,opacity:0,transparent:!0});I.current=new o.eaF(u,c),I.current.rotateX(Math.PI),I.current.position.y-=1e-5,C.current.add(I.current),E.current=new o.qUd(-4,4,4,-4,0,1.5),E.current.rotation.x=Math.PI/2,C.current.add(E.current),j.current=new o.CSG,j.current.userData.darkness={value:3},j.current.onBeforeCompile=e=>{e.uniforms.darkness=j.current.userData.darkness,e.fragmentShader=`
        uniform float darkness;
        ${e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},j.current.depthTest=!1,j.current.depthWrite=!1,F.current=new o.BKk(v),F.current.depthTest=!1,L.current=new o.BKk(f),L.current.depthTest=!1;let l=O.onChange(q),d=V.onChange(q);return()=>{_.current.dispose(),A.current.dispose(),(0,m.i6)(z.current),(0,m.Im)(b.current),(0,m.dY)(k.current),l(),d()}},[]);let Y=(0,c.useCallback)(e=>{B.current.visible=!0,B.current.material=F.current,B.current.material.uniforms.tDiffuse.value=_.current.texture,F.current.uniforms.h.value=1/256*e,k.current.setRenderTarget(A.current),k.current.render(B.current,E.current),B.current.material=L.current,B.current.material.uniforms.tDiffuse.value=A.current.texture,L.current.uniforms.v.value=1/256*e,k.current.setRenderTarget(_.current),k.current.render(B.current,E.current),B.current.visible=!1},[]),q=(0,c.useCallback)(()=>{let e=b.current.background;b.current.background=null,b.current.overrideMaterial=j.current,k.current.setRenderTarget(_.current),k.current.render(b.current,E.current),b.current.overrideMaterial=null,Y(5),Y(2),k.current.setRenderTarget(null),b.current.background=e,P.current.rotation.x=O.get(),P.current.rotation.y=V.get(),k.current.render(b.current,M.current)},[Y,O,V]);return(0,c.useEffect)(()=>{let e=e=>{let{innerWidth:r,innerHeight:t}=window,n={x:(e.clientX-r/2)/r,y:(e.clientY-t/2)/t};V.set(n.x/2),O.set(n.y/2)};return Z&&!N&&window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[Z,N,O,V]),(0,c.useEffect)(()=>{let e=()=>{if(!R.current)return;let{clientWidth:e,clientHeight:r}=R.current;k.current.setSize(e,r),M.current.aspect=e/r,M.current.updateProjectionMatrix(),q()};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[q]),(0,n.jsxs)("div",{className:(0,d.Ly)(x().model,p),"data-loaded":D,style:(0,d.ow)({delay:(0,d._P)(t)},l),ref:R,role:"img","aria-label":y,...w,children:[(0,n.jsx)("canvas",{className:x().canvas,ref:S}),e.map((e,a)=>(0,n.jsx)(U,{renderer:k,modelGroup:P,show:r,showDelay:t,renderFrame:q,index:a,setLoaded:h,model:e},JSON.stringify(e.position)))]})},U=({renderer:e,model:r,modelGroup:t,renderFrame:n,index:u,showDelay:i,setLoaded:v,show:f})=>{let[d,p]=(0,c.useState)(),x=(0,a.I)(),g=(0,c.createRef)();(0,c.useEffect)(()=>{let a=async(r,t)=>{r.encoding=o.S2Q,r.flipY=!1,r.anisotropy=e.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await e.current.initTexture(r),t.material.color=new o.Q1f(0xffffff),t.material.transparent=!0,t.material.map=r};p({start:async()=>{let e,c,{texture:v,position:f,url:d}=r,[p,D]=await Promise.all([await m.VD.loadAsync(v.placeholder.src),await m.ZA.loadAsync(d)]);t.current.add(D.scene),D.scene.traverse(async r=>{r.material&&(r.material.color=new o.Q1f(2039845),r.material.color.convertSRGBToLinear()),r.name===w.Screen&&(g.current=r.clone(),g.current.material=r.material.clone(),r.parent.add(g.current),g.current.material.opacity=1,g.current.position.z+=.001,a(p,g.current),e=async()=>{let e=await (0,l.jH)(v),t=await m.VD.loadAsync(e);await a(t,r),(0,s.i)(1,0,{onUpdate:e=>{g.current.material.opacity=e,n()}})})});let U=new o.Pq0(f.x,f.y,f.z);return x&&D.scene.position.set(...U.toArray()),r.animation===y.SpringUp&&(c=()=>{let e=new o.Pq0(U.x,U.y-1,U.z);D.scene.position.set(...e.toArray()),(0,s.i)(e.y,U.y,{type:"spring",delay:(300*u+i)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:e=>{D.scene.position.y=e,n()}})}),r.animation===y.LaptopOpen&&(c=()=>{let e=D.scene.children.find(e=>e.name===w.Frame),r=new o.Pq0(o.cj9.degToRad(90),0,0),t=new o.Pq0(0,0,0);return D.scene.position.set(...U.toArray()),e.rotation.set(...r.toArray()),(0,s.i)(r.x,t.x,{type:"spring",delay:(300*u+i+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:r=>{e.rotation.x=r,n()}})}),{loadFullResTexture:e,playAnimation:c}}})},[]),(0,c.useEffect)(()=>{let e;if(!d||!f)return;let r=async()=>{let{loadFullResTexture:r,playAnimation:t}=await d.start();v(!0),x||(e=t()),await r(),x&&n()};return(0,c.startTransition)(()=>{r()}),()=>{e?.stop()}},[d,f])}},4336:(e,r,t)=>{"use strict";t.d(r,{i:()=>s});var n=t(280),a=t(2981),u=t(8697);function s(e,r,t){void 0===t&&(t={});var s=(0,a.S)(e)?e:(0,n.O)(e);return(0,u.bM)("",s,r,t),{stop:function(){return s.stop()},isAnimating:function(){return s.isAnimating()}}}}}]);