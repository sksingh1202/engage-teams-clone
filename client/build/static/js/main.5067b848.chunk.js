(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){},161:function(e,t){},163:function(e,t){},177:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(16),a=n.n(o),i=(n(124),n(114)),s=n(7),l=n(14),u=n(100),d=n(211),j=n(204),b=n(209),h=n(210),f=n(102),x=n.n(f),p=n(58),m=n.n(p),g=n(101),O=n.n(g),v=n(103),w=n.n(v),y=n.p+"static/media/meeting.54508598.jpg",k=n.p+"static/media/logo.6dcdae02.jpg",N=n(2),T=function(e){return Object(N.jsx)(h.a,Object(u.a)({elevation:6,variant:"filled"},e))},S=Object(j.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),C=function(e){var t=S(),n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],a=c[1],i=Object(r.useState)(""),s=Object(l.a)(i,2),u=s[0],j=s[1],h=function(e,t){"clickaway"!==t&&a(!1)},f=function(){var e=u.lastIndexOf("/"),t=u.substring(0,e+1),n=u.substring(e+1);return"http://localhost:3000/room/"===t||"https://localhost:3000/room/"===t||"https://engage-teams-clone.herokuapp.com/room/"===t||"http://engage-teams-clone.herokuapp.com/room/"===t?n:""};return Object(N.jsxs)("div",{children:[Object(N.jsx)("header",{className:"text-gray-700 body-font border-b border-gray-200",children:Object(N.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(N.jsx)("img",{src:k,className:"h-16 w-20"}),Object(N.jsx)("span",{className:"ml-3 text-xl",children:"TEEMS"})]})}),Object(N.jsx)("section",{className:"text-gray-700 body-font",children:Object(N.jsxs)("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",children:[Object(N.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(N.jsx)("h1",{className:"title-font text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-gray-900",children:"Microsof Teems"}),Object(N.jsx)("p",{className:"mb-8 leading-relaxed text-xl md:text-2xl lg:text-3xl",children:"Meet, chat, and call in just one place."}),Object(N.jsxs)("div",{className:"flex justify-center",children:[Object(N.jsxs)("button",{className:"inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){var t=Object(d.a)();e.history.push("/room/".concat(t))},children:[Object(N.jsx)("span",{className:"mr-3",children:Object(N.jsx)(m.a,{})}),"New meeting"]}),Object(N.jsxs)("button",{className:"ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:[Object(N.jsx)("span",{className:"mr-3",children:Object(N.jsx)(O.a,{})}),"Chat"]})]}),Object(N.jsxs)("div",{className:"mt-5 relative flex-col xl:flex-row flex w-full flex-wrap items-stretch mb-3 space-y-5 xl:space-y-0 xl:space-x-5",children:[Object(N.jsxs)("div",{className:"flex-1",children:[Object(N.jsx)("span",{className:"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3",children:Object(N.jsx)(x.a,{})}),Object(N.jsx)("input",{autoComplete:"off",id:"meeting-link",type:"text",placeholder:"Enter the link to join meeting",className:"leading-3 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(N.jsxs)("button",{className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){if(function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(u)&&0!==f().length){var t=f();e.history.push("/room/".concat(t))}else a(!0),j("")},children:[Object(N.jsx)("span",{className:"mr-3",children:Object(N.jsx)(w.a,{})}),"Join meeting"]})]})]}),Object(N.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(N.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:y})})]})}),Object(N.jsx)("div",{className:t.root,children:Object(N.jsx)(b.a,{open:o,autoHideDuration:4e3,onClose:h,children:Object(N.jsx)(T,{onClose:h,severity:"error",children:"Invalid meeting link!"})})})]})},I=n(41),D=n.n(I),E=n(13),R=n(59),M=n(67),L=n(104),P=n.n(L),F=n(69),z=n(207),A=n(208),G=n(68),H=n.n(G);function J(e,t,n,r){var c=new H.a({initiator:!0,trickle:!1});try{n.getTracks().forEach((function(e){return c.addTrack(e,n)}))}catch(o){console.log("Error in createPeer: ".concat(o))}return c.on("signal",(function(n){r.current.emit("offer",{userToSignal:e,callerID:t,data:n})})),c}function V(e,t,n,r){var c=new H.a({initiator:!1,trickle:!1});try{n.getTracks().forEach((function(e){return c.addTrack(e,n)}))}catch(o){console.log("Error in addPeer: ".concat(o))}return c.on("signal",(function(e){r.current.emit("answer",{data:e,callerID:t})})),c.signal(e),c}var W=n(205),B=n(206),U=n(106),q=n.n(U),K=n(105),Q=n.n(K),X=n(107),Y=n.n(X),Z=n(110),$=n.n(Z),_=n(109),ee=n.n(_),te=n(108),ne=n.n(te),re=Object(j.a)({root:{position:"absolute",bottom:"2%",width:"100%",backgroundColor:"#202124"}});function ce(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function oe(){return(oe=Object(R.a)(D.a.mark((function e(t,n,r,c,o,a){var i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(a.current),c){e.next=12;break}return e.next=5,navigator.mediaDevices.getDisplayMedia({cursor:!0});case 5:i=e.sent,a.current=i.getTracks()[0],r.current.forEach((function(e){e.peer.replaceTrack(t.videoTracks[0],a.current,n.current)})),o(!0),a.current.onended=function(){r.current.forEach((function(e){e.peer.replaceTrack(a.current,t.videoTracks[0],n.current)}))},e.next=13;break;case 12:a.current&&(console.log("RAN"),a.current.stop(),o(!1));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var ae,ie,se=function(e){var t=e.audio,n=e.video,c=e.screenShare,o=e.setAudio,a=e.setVideo,i=e.setScreenShare,s=e.leaveRoom,l=e.peersRef,u=e.userStream,d=Object(r.useRef)(),j=re();return Object(N.jsxs)(W.a,{showLabels:!0,className:j.root,children:[Object(N.jsx)(B.a,{onClick:function(){return function(e,t){if(e&&e.audioTracks){e.audioTracks.forEach((function(e){return e.enabled=!e.enabled})),e.isMuted=!e.isMuted,t(ce(e))}}(t,o)},label:t.isMuted?Object(N.jsx)("span",{style:{color:"white"},children:"Turn on microphone"}):Object(N.jsx)("span",{style:{color:"white"},children:"Turn off microphone"}),icon:t.isMuted?Object(N.jsx)(Q.a,{color:"secondary"}):Object(N.jsx)(q.a,{style:{color:"white"}})}),Object(N.jsx)(B.a,{onClick:function(){return function(e,t){if(e&&e.videoTracks){e.videoTracks.forEach((function(e){return e.enabled=!e.enabled})),e.isOn=!e.isOn,t(ce(e))}}(n,a)},label:n.isOn?Object(N.jsx)("span",{style:{color:"white"},children:"Turn off camera"}):Object(N.jsx)("span",{style:{color:"white"},children:"Turn on camera"}),icon:n.isOn?Object(N.jsx)(m.a,{style:{color:"white"}}):Object(N.jsx)(Y.a,{color:"secondary"})}),Object(N.jsx)(B.a,{onClick:function(){return function(e,t,n,r,c,o){return oe.apply(this,arguments)}(n,u,l,c,i,d)},label:c?Object(N.jsx)("span",{style:{color:"white"},children:"Stop presenting"}):Object(N.jsx)("span",{style:{color:"white"},children:"Present now"}),icon:c?Object(N.jsx)(ne.a,{color:"secondary"}):Object(N.jsx)(ee.a,{style:{color:"white"}})}),Object(N.jsx)(B.a,{onClick:function(){return s()},label:Object(N.jsx)("span",{style:{color:"white"},children:"Leave call"}),icon:Object(N.jsx)($.a,{color:"secondary"})})]})},le=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"#202124"},gridList:{width:"100%",height:"100%",display:"flex",padding:0,flexWrap:"wrap",listStyle:"none",overflow:"auto",justifyContent:"center"}}})),ue=F.a.div(ae||(ae=Object(M.a)(["\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  background-color: #202124;\n"]))),de=F.a.video(ie||(ie=Object(M.a)(["\n  position: absolute;\n  right: 1%;\n  bottom: 5%;\n  height: 16%;\n  width: 20%;\n  z-index: 1;\n"]))),je={audio:{echoCancellation:!0},video:{width:{min:1280},height:{min:720}}},be=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),Object(N.jsx)("video",{height:"100%",width:"100%",playsInline:!0,autoPlay:!0,controls:!0,ref:t,style:{padding:0,objectFit:"cover",position:"absolute",right:0,bottom:0,minWidth:"100%",minHeight:"100%",width:"auto",height:"auto",backgroundSize:"cover",overflow:"hidden"}})},he=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)({}),i=Object(l.a)(a,2),s=i[0],u=i[1],d=Object(r.useState)({}),j=Object(l.a)(d,2),b=j[0],h=j[1],f=Object(r.useState)(),x=Object(l.a)(f,2),p=x[0],m=x[1],g=Object(r.useState)(!1),O=Object(l.a)(g,2),v=O[0],w=O[1],y=Object(r.useRef)(),k=Object(r.useRef)(),T=Object(r.useRef)([]),S=Object(r.useRef)();Object(r.useEffect)((function(){var t=window.screen.height;m(t),window.addEventListener("resize",(function(){var e=window.screen.height;console.log(e),m(e)}));var n=e.match.params.roomID;(function(){var e=Object(R.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.current=P.a.connect("/"),e.next=3,navigator.mediaDevices.getUserMedia(je);case 3:t=e.sent,S.current=t,k.current.srcObject=t,u({isMuted:!1,audioTracks:t.getAudioTracks()}),h({isOn:!0,videoTracks:t.getVideoTracks()}),y.current.emit("join-room",n),y.current.on("room-full",(function(){return console.log("Sorry the room is full!")})),y.current.on("all-users",(function(e){var n=[];e.forEach((function(e){var r=J(e,y.current.id,t,y);T.current.push({peerID:e,peer:r}),n.push({peerID:e,peer:r})})),o(Object(E.a)(T.current))})),y.current.on("user-joined",(function(e){var n=V(e.data,e.callerID,t,y);T.current.push({peerID:e.callerID,peer:n}),o(Object(E.a)(T.current))})),y.current.on("receiving-answer",(function(e){T.current.find((function(t){return t.peerID===e.id})).peer.signal(e.data)})),y.current.on("user-left",(function(e){var t=T.current.find((function(t){return t.peerID===e}));t&&t.peer.destroy();var n=T.current.filter((function(t){return t.peerID!==e}));T.current=n,o(n)}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(e){return console.log("Cols: "+e),1===e?60:e<=4?30:e<=9?20:e<=16?15:void 0},I=le();return Object(N.jsxs)(ue,{children:[Object(N.jsx)(de,{controls:!0,muted:!0,ref:k,autoPlay:!0,playsInline:!0}),Object(N.jsx)("div",{className:I.root,children:Object(N.jsx)(z.a,{cellHeight:Math.floor(p/35),cols:60,className:I.gridList,children:c.map((function(e){return Object(N.jsx)(A.a,{rows:(t=c.length,console.log("Rows: "+t),t<=2?30:t<=6?15:t<=9?10:t<=16?7:void 0),cols:C(c.length),children:Object(N.jsx)(be,{peer:e.peer})},e.peerID);var t}))})}),Object(N.jsx)(se,{audio:s,video:b,screenShare:v,setAudio:u,setVideo:h,setScreenShare:w,leaveRoom:function(){k.current.srcObject.getTracks().forEach((function(e){return e.stop()})),T.current=null,o(T.current),y.current.disconnect(),e.history.push("/")},peersRef:T,userStream:S})]})};var fe=function(){return Object(N.jsx)(i.a,{children:Object(N.jsxs)(s.c,{children:[Object(N.jsx)(s.a,{path:"/",exact:!0,component:C}),Object(N.jsx)(s.a,{path:"/room/:roomID",component:he})]})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};n(176);a.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(fe,{})}),document.getElementById("root")),xe()}},[[177,1,2]]]);
//# sourceMappingURL=main.5067b848.chunk.js.map