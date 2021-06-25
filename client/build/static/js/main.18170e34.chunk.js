(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,n){},115:function(e,n){},132:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(67),a=t.n(i),o=(t(79),t(73)),u=t(2),s=t(134),f=t(1),l=function(e){return Object(f.jsx)("button",{onClick:function(){var n=Object(s.a)();e.history.push("/room/".concat(n))},children:"Create room"})},d=t(35),j=t.n(d),p=t(74),b=t(68),h=t(28),O=t(36),v=t(69),m=t.n(v),g=t(38),x=t(37),I=t.n(x);function D(e,n,t,r){var c=new I.a({initiator:!0,trickle:!1,stream:t});return c.on("signal",(function(t){r.current.emit("offer",{userToSignal:e,callerID:n,data:t})})),c}function k(e,n,t,r){var c=new I.a({initiator:!1,trickle:!1,stream:t});return c.on("signal",(function(e){r.current.emit("answer",{data:e,callerID:n})})),c.signal(e),c}var w,y,T=function(e){var n=e.audio,t=e.video;return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return function(e){e&&e.audioTracks&&e.audioTracks.forEach((function(e){return e.enabled=!e.enabled}))}(n)},children:"Mute"}),Object(f.jsx)("button",{onClick:function(){return function(e){e&&e.videoTracks&&e.videoTracks.forEach((function(e){return e.enabled=!e.enabled}))}(t)},children:"Video"})]})},C=g.a.div(w||(w=Object(O.a)(["\n  padding: 20px;\n  display: flex;\n  height: 100vh;\n  width: 90%;\n  margin: auto;\n  flex-wrap: wrap;\n"]))),S=g.a.video(y||(y=Object(O.a)(["\n  height: 40%;\n  width: 50%;\n"]))),E=function(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){n.current.srcObject=e}))}),[]),Object(f.jsx)(S,{playsInline:!0,autoPlay:!0,ref:n})},F={audio:{echoCancellation:!0},video:{width:{min:1280},height:{min:720}}},M=function(e){var n=Object(r.useState)([]),t=Object(h.a)(n,2),c=t[0],i=t[1],a=Object(r.useState)({}),o=Object(h.a)(a,2),u=o[0],s=o[1],l=Object(r.useState)({}),d=Object(h.a)(l,2),O=d[0],v=d[1],g=Object(r.useRef)(),x=Object(r.useRef)(),I=Object(r.useRef)([]),w=e.match.params.roomID;function y(){return(y=Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.current=m.a.connect("/"),e.next=3,navigator.mediaDevices.getUserMedia(F);case 3:n=e.sent,x.current.srcObject=n,s({isMuted:!1,audioTracks:n.getAudioTracks()}),v({isOn:!0,videoTracks:n.getVideoTracks()}),g.current.emit("join-room",w),g.current.on("room-full",(function(){return console.log("Sorry the room is full!")})),g.current.on("all-users",(function(e){var t=[];e.forEach((function(e){var r=D(e,g.current.id,n,g);I.current.push({peerID:e,peer:r}),t.push({peerID:e,peer:r})})),i(t)})),g.current.on("user-joined",(function(e){var t=k(e.data,e.callerID,n,g);I.current.push({peerID:e.callerID,peer:t});var r={peerID:e.callerID,peer:t};i((function(e){return[].concat(Object(p.a)(e),[r])}))})),g.current.on("receiving-answer",(function(e){I.current.find((function(n){return n.peerID===e.id})).peer.signal(e.data)})),g.current.on("user-left",(function(e){var n=I.current.find((function(n){return n.peerID===e}));n&&n.peer.destroy();var t=I.current.filter((function(n){return n.peerID!==e}));I.current=t,i(t)}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(f.jsxs)(C,{children:[Object(f.jsx)(S,{muted:!0,ref:x,autoPlay:!0,playsInline:!0}),c.map((function(e){return Object(f.jsx)(E,{peer:e.peer},e.peerID)})),Object(f.jsx)(T,{audio:u,video:O})]})};var P=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/",exact:!0,component:l}),Object(f.jsx)(u.a,{path:"/room/:roomID",component:M})]})})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,135)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),R()},79:function(e,n,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.18170e34.chunk.js.map