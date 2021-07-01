(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){},140:function(e,t){},142:function(e,t){},161:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(32),a=n.n(o),i=(n(107),n(99)),s=n(4),u=n(187),l=n(2),d=function(e){return Object(l.jsx)("button",{onClick:function(){var t=Object(u.a)();e.history.push("/room/".concat(t))},children:"Create room"})},f=n(34),j=n.n(f),h=n(9),b=n(49),p=n(22),O=n(57),v=n(88),g=n.n(v),x=n(59),m=n(180),w=n(184),y=n(185),k=n(58),T=n.n(k);function S(e,t,n,r){var c=new T.a({initiator:!0,trickle:!1});try{n.getTracks().forEach((function(e){return c.addTrack(e,n)}))}catch(o){console.log("Error in createPeer: ".concat(o))}return c.on("signal",(function(n){r.current.emit("offer",{userToSignal:e,callerID:t,data:n})})),c}function D(e,t,n,r){var c=new T.a({initiator:!1,trickle:!1});try{n.getTracks().forEach((function(e){return c.addTrack(e,n)}))}catch(o){console.log("Error in addPeer: ".concat(o))}return c.on("signal",(function(e){r.current.emit("answer",{data:e,callerID:t})})),c.signal(e),c}var I=n(183),C=n(186),E=n(90),R=n.n(E),M=n(89),P=n.n(M),L=n(91),F=n.n(L),A=n(92),N=n.n(A),V=n(95),z=n.n(V),B=n(94),J=n.n(B),W=n(93),H=n.n(W),U=Object(m.a)({root:{position:"absolute",bottom:"3%",width:"100%",backgroundColor:"#202124"}});function q(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function G(){return(G=Object(b.a)(j.a.mark((function e(t,n,r,c,o,a){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(a.current),c){e.next=12;break}return e.next=5,navigator.mediaDevices.getDisplayMedia({cursor:!0});case 5:i=e.sent,a.current=i.getTracks()[0],r.current.forEach((function(e){e.peer.replaceTrack(t.videoTracks[0],a.current,n.current)})),o(!0),a.current.onended=function(){r.current.forEach((function(e){e.peer.replaceTrack(a.current,t.videoTracks[0],n.current)}))},e.next=13;break;case 12:a.current&&(console.log("RAN"),a.current.stop(),o(!1));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var K,Q,X=function(e){var t=e.audio,n=e.video,c=e.screenShare,o=e.setAudio,a=e.setVideo,i=e.setScreenShare,s=e.leaveRoom,u=e.peersRef,d=e.userStream,f=Object(r.useRef)(),j=U();return Object(l.jsxs)(I.a,{showLabels:!0,className:j.root,children:[Object(l.jsx)(C.a,{onClick:function(){return function(e,t){if(e&&e.audioTracks){e.audioTracks.forEach((function(e){return e.enabled=!e.enabled})),e.isMuted=!e.isMuted,t(q(e))}}(t,o)},label:t.isMuted?Object(l.jsx)("span",{style:{color:"white"},children:"Turn on microphone"}):Object(l.jsx)("span",{style:{color:"white"},children:"Turn off microphone"}),icon:t.isMuted?Object(l.jsx)(P.a,{color:"secondary"}):Object(l.jsx)(R.a,{style:{color:"white"}})}),Object(l.jsx)(C.a,{onClick:function(){return function(e,t){if(e&&e.videoTracks){e.videoTracks.forEach((function(e){return e.enabled=!e.enabled})),e.isOn=!e.isOn,t(q(e))}}(n,a)},label:n.isOn?Object(l.jsx)("span",{style:{color:"white"},children:"Turn off camera"}):Object(l.jsx)("span",{style:{color:"white"},children:"Turn on camera"}),icon:n.isOn?Object(l.jsx)(F.a,{style:{color:"white"}}):Object(l.jsx)(N.a,{color:"secondary"})}),Object(l.jsx)(C.a,{onClick:function(){return function(e,t,n,r,c,o){return G.apply(this,arguments)}(n,d,u,c,i,f)},label:c?Object(l.jsx)("span",{style:{color:"white"},children:"Stop presenting"}):Object(l.jsx)("span",{style:{color:"white"},children:"Present now"}),icon:c?Object(l.jsx)(H.a,{color:"secondary"}):Object(l.jsx)(J.a,{style:{color:"white"}})}),Object(l.jsx)(C.a,{onClick:function(){return s()},label:Object(l.jsx)("span",{style:{color:"white"},children:"Leave call"}),icon:Object(l.jsx)(z.a,{color:"secondary"})})]})},Y=Object(m.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"#202124"},gridList:{width:"100%",height:"100%",display:"flex",padding:0,flexWrap:"wrap",listStyle:"none",overflow:"auto",justifyContent:"center"}}})),Z=x.a.div(K||(K=Object(O.a)(["\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  background-color: #202124;\n"]))),$=x.a.video(Q||(Q=Object(O.a)(["\n  position: absolute;\n  right: 1%;\n  bottom: 5%;\n  height: 16%;\n  width: 20%;\n  z-index: 1;\n"]))),_={audio:{echoCancellation:!0},video:{width:{min:1280},height:{min:720}}},ee=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),Object(l.jsx)("video",{height:"100%",width:"100%",playsInline:!0,autoPlay:!0,controls:!0,ref:t,style:{padding:0,objectFit:"cover"}})},te=function(e){var t=Object(r.useState)([]),n=Object(p.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)({}),i=Object(p.a)(a,2),s=i[0],u=i[1],d=Object(r.useState)({}),f=Object(p.a)(d,2),O=f[0],v=f[1],x=Object(r.useState)(),m=Object(p.a)(x,2),k=m[0],T=m[1],I=Object(r.useState)(!1),C=Object(p.a)(I,2),E=C[0],R=C[1],M=Object(r.useRef)(),P=Object(r.useRef)(),L=Object(r.useRef)([]),F=Object(r.useRef)();Object(r.useEffect)((function(){var t=window.screen.height;T(t),window.addEventListener("resize",(function(){var e=window.screen.height;console.log(e),T(e)}));var n=e.match.params.roomID;(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M.current=g.a.connect("/"),e.next=3,navigator.mediaDevices.getUserMedia(_);case 3:t=e.sent,F.current=t,P.current.srcObject=t,u({isMuted:!1,audioTracks:t.getAudioTracks()}),v({isOn:!0,videoTracks:t.getVideoTracks()}),M.current.emit("join-room",n),M.current.on("room-full",(function(){return console.log("Sorry the room is full!")})),M.current.on("all-users",(function(e){var n=[];e.forEach((function(e){var r=S(e,M.current.id,t,M);L.current.push({peerID:e,peer:r}),n.push({peerID:e,peer:r})})),o(Object(h.a)(L.current))})),M.current.on("user-joined",(function(e){var n=D(e.data,e.callerID,t,M);L.current.push({peerID:e.callerID,peer:n}),o(Object(h.a)(L.current))})),M.current.on("receiving-answer",(function(e){L.current.find((function(t){return t.peerID===e.id})).peer.signal(e.data)})),M.current.on("user-left",(function(e){var t=L.current.find((function(t){return t.peerID===e}));t&&t.peer.destroy();var n=L.current.filter((function(t){return t.peerID!==e}));L.current=n,o(n)}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(e){return 1===e?60:e<=4?30:e<=9?20:e<=16?15:void 0},N=Y();return Object(l.jsxs)(Z,{children:[Object(l.jsx)($,{controls:!0,muted:!0,ref:P,autoPlay:!0,playsInline:!0}),Object(l.jsx)("div",{className:N.root,children:Object(l.jsx)(w.a,{cellHeight:Math.floor(k/35),cols:60,className:N.gridList,children:c.map((function(e){return Object(l.jsx)(y.a,{rows:(t=c.length,t<=2?30:t<=6?15:t<=9?10:t<=16?7:void 0),cols:A(c.length),children:Object(l.jsx)(ee,{peer:e.peer})},e.peerID);var t}))})}),Object(l.jsx)(X,{audio:s,video:O,screenShare:E,setAudio:u,setVideo:v,setScreenShare:R,leaveRoom:function(){P.current.srcObject.getTracks().forEach((function(e){return e.stop()})),L.current=null,o(L.current),M.current.disconnect(),e.history.push("/")},peersRef:L,userStream:F})]})};var ne=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",exact:!0,component:d}),Object(l.jsx)(s.a,{path:"/room/:roomID",component:te})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};n(159);a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(ne,{})}),document.getElementById("root")),re()}},[[161,1,2]]]);
//# sourceMappingURL=main.2a246dfc.chunk.js.map