(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{257:function(e,t,n){},310:function(e,t){},312:function(e,t){},322:function(e,t,n){},474:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(16),a=n.n(c),o=(n(257),n(234)),s=n(19),i=n(5),l=n.n(i),u=n(11),d=n(9),j=n(35),b=n(522),p=n(507),h=n(66),f=n(523),m=n(520),x=n(219),O=n.n(x),g=n(108),v=n.n(g),w=n(218),y=n.n(w),k=n(220),N=n.n(k),C=n(10),S=n.n(C);function D(e){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={email:t.email,first_name:t.given_name||t.name,last_name:t.family_name,username:t.email},r={method:"post",url:"/create_user",data:n},e.next=5,S()(r);case 5:return c=e.sent,e.abrupt("return",c.data.id);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function I(e,t){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function e(t,n){var r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={userData:{email:t.email,first_name:t.given_name||t.name,last_name:t.family_name,username:t.email},roomID:n},c={method:"post",url:"/add_user",data:r},e.next=5,S()(c);case 5:return a=e.sent,e.abrupt("return",a.data.id);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function E(e,t){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(l.a.mark((function e(t,n){var r,c,a,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date,c="".concat(t.given_name||t.name||t.email,"'s Meeting Chat: ").concat(r.getDate(),"/").concat(r.getMonth()+1,"/").concat(r.getFullYear()," @ ").concat(r.getHours(),":").concat(r.getMinutes(),":").concat(r.getSeconds()),a={userData:{title:c,admin_username:t.email},roomID:n},o={method:"post",url:"/create_chat",data:a},e.next=7,S()(o);case 7:return s=e.sent,console.log(s),e.abrupt("return",s.data.id);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function R(e,t){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(l.a.mark((function e(t,n){var r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={username:t.email,roomID:n},console.log("roomID: ".concat(n)),c={method:"post",url:"/get_chat_msgs",data:r},e.next=6,S()(c);case 6:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function z(e,t,n){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(l.a.mark((function e(t,n,r){var c,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={username:t.email,data:{text:n},roomID:r},console.log(c),a={method:"post",url:"/post_chat_msg",data:c},e.next=6,S()(a);case 6:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var F=n.p+"static/media/meeting.54508598.jpg",H=n.p+"static/media/logo.6dcdae02.jpg",P=n(514),U=n(521),W=n(513),G=n(511),B=n(512),J=n(510),V=n(508),Y=n(107),q=n(3),K=function(e){return Object(q.jsx)(m.a,Object(j.a)({elevation:6,variant:"filled"},e))},X=Object(p.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),Z=function(e){var t=X(),n=Object(r.useState)(!1),c=Object(d.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(!1),i=Object(d.a)(s,2),j=i[0],p=i[1],m=Object(r.useState)(""),x=Object(d.a)(m,2),g=x[0],w=x[1],k=Object(h.b)(),C=k.isAuthenticated,S=k.loginWithRedirect,_=k.logout,I=k.user,T=Object(Y.a)(),M=Object(V.a)(T.breakpoints.down("sm")),R=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C||S(),!C){t.next=7;break}return n=Object(b.a)(),t.next=5,E(I,n);case 5:t.sent?e.history.push("/room/".concat(n)):(p(!0),console.log("Error"));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var e=g.lastIndexOf("/"),t=g.substring(0,e+1),n=g.substring(e+1);return"http://localhost:3000/room/"===t||"https://localhost:3000/room/"===t||"https://engage-teams-clone.herokuapp.com/room/"===t||"http://engage-teams-clone.herokuapp.com/room/"===t?n:""};return Object(r.useEffect)((function(){C&&function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(I);case 2:e.sent||(p(!0),setTimeout(_,2500));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[C,_,I]),Object(q.jsxs)("div",{children:[Object(q.jsx)("header",{className:"text-gray-700 body-font border-b border-gray-200",children:Object(q.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(q.jsx)("img",{src:H,className:"h-16 w-20",alt:""}),Object(q.jsx)("span",{className:"ml-3 text-xl",children:"TEEMS"}),Object(q.jsx)("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:C?Object(q.jsx)("button",{className:"mt-5 md:mt-0 md:mr-5 inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){return _({returnTo:window.location.origin})},children:Object(q.jsx)("span",{className:"cursor-pointer",children:"Logout"})}):Object(q.jsx)("button",{className:"mt-5 md:mt-0 md:mr-5 inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){return S()},children:Object(q.jsx)("span",{className:"cursor-pointer",children:"Login"})})})]})}),Object(q.jsx)("section",{className:"text-gray-700 body-font",children:Object(q.jsxs)("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",children:[Object(q.jsxs)("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[Object(q.jsx)("h1",{className:"title-font text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-gray-900",children:"Microsof Teems"}),Object(q.jsx)("p",{className:"mb-8 leading-relaxed text-xl md:text-2xl lg:text-3xl",children:"Meet, chat, and call in just one place."}),Object(q.jsxs)("div",{className:"flex justify-center",children:[Object(q.jsxs)("button",{className:"inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:R,children:[Object(q.jsx)("span",{className:"mr-3",children:Object(q.jsx)(v.a,{})}),"New meeting"]}),Object(q.jsxs)("button",{className:"ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){C||S(),C&&e.history.push({pathname:"/chat",state:{username:I.email}})},children:[Object(q.jsx)("span",{className:"mr-3",children:Object(q.jsx)(y.a,{})}),"Chat"]})]}),Object(q.jsxs)("div",{className:"mt-5 relative flex-col xl:flex-row flex w-full flex-wrap items-stretch mb-3 space-y-5 xl:space-y-0 xl:space-x-5",children:[Object(q.jsxs)("div",{className:"flex-1",children:[Object(q.jsx)("span",{className:"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3",children:Object(q.jsx)(O.a,{})}),Object(q.jsx)("input",{autoComplete:"off",id:"meeting-link",type:"text",placeholder:"Enter the link to join meeting",className:"leading-3 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10",value:g,onChange:function(e){return w(e.target.value)}})]}),Object(q.jsxs)("button",{className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",onClick:function(){if(function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(g)&&0!==L().length){if(C||S(),C){var t=L();e.history.push("/room/".concat(t))}}else o(!0),w("")},children:[Object(q.jsx)("span",{className:"mr-3",children:Object(q.jsx)(N.a,{})}),"Join meeting"]})]})]}),Object(q.jsx)("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:Object(q.jsx)("img",{className:"object-cover object-center rounded",alt:"hero",src:F})})]})}),Object(q.jsx)("div",{className:t.root,children:Object(q.jsx)(f.a,{open:a,autoHideDuration:4e3,onClose:function(){return o(!1)},children:Object(q.jsx)(K,{onClose:function(){return o(!1)},severity:"error",children:"Invalid meeting link!"})})}),Object(q.jsx)("div",{children:Object(q.jsxs)(U.a,{fullScreen:M,open:j,onClose:function(){return p(!1)},"aria-labelledby":"responsive-dialog-title",children:[Object(q.jsx)(J.a,{id:"responsive-dialog-title",children:"Problem connecting"}),Object(q.jsx)(G.a,{children:Object(q.jsx)(B.a,{children:"It seems that something is temporarily wrong with your network connection. Please check your internet connection and try again."})}),Object(q.jsx)(W.a,{children:Object(q.jsx)(P.a,{autoFocus:!0,onClick:function(){return p(!1)},color:"primary",children:"OK"})})]})})]})},Q=n(13),$=n(132),ee=n(221),te=n.n(ee),ne=n(134),re=n(517),ce=n(518),ae=n(133),oe=n.n(ae);function se(e,t,n,r){var c=new oe.a({initiator:!0,trickle:!1});try{n.getTracks().forEach((function(e){return c.addTrack(e,n)}))}catch(a){console.log("Error in createPeer: ".concat(a))}return c.on("signal",(function(n){r.current.emit("offer",{userToSignal:e,callerID:t,data:n})})),c}function ie(e,t,n,r){var c=new oe.a({initiator:!1,trickle:!1});try{n.getTracks().forEach((function(e){return c.addTrack(e,n)}))}catch(a){console.log("Error in addPeer: ".concat(a))}return c.on("signal",(function(e){r.current.emit("answer",{data:e,callerID:t})})),c.signal(e),c}var le=n(515),ue=n(516),de=n(223),je=n.n(de),be=n(222),pe=n.n(be),he=n(224),fe=n.n(he),me=n(229),xe=n.n(me),Oe=n(226),ge=n.n(Oe),ve=n(225),we=n.n(ve),ye=n(227),ke=n.n(ye),Ne=n(228),Ce=n.n(Ne),Se=Object(p.a)({root:{position:"absolute",bottom:0,width:"100%",backgroundColor:"#202124"}});function De(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function _e(){return(_e=Object(u.a)(l.a.mark((function e(t,n,r,c,a,o){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(o.current),c){e.next=12;break}return e.next=5,navigator.mediaDevices.getDisplayMedia({cursor:!0});case 5:s=e.sent,o.current=s.getTracks()[0],r.current.forEach((function(e){e.peer.replaceTrack(t.videoTracks[0],o.current,n.current)})),a(!0),o.current.onended=function(){r.current.forEach((function(e){e.peer.replaceTrack(o.current,t.videoTracks[0],n.current)}))},e.next=13;break;case 12:o.current&&(console.log("RAN"),o.current.stop(),a(!1));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var Ie,Te,Ee=function(e){var t=e.audio,n=e.video,c=e.screenShare,a=e.showChat,o=e.setAudio,s=e.setVideo,i=e.setScreenShare,l=e.setShowChat,u=e.leaveRoom,d=e.peersRef,j=e.userStream,b=Object(r.useRef)(),p=Se();return Object(q.jsxs)(le.a,{showLabels:!0,className:p.root,children:[Object(q.jsx)(ue.a,{onClick:function(){return function(e,t){if(e&&e.audioTracks){e.audioTracks.forEach((function(e){return e.enabled=!e.enabled})),e.isMuted=!e.isMuted,t(De(e))}}(t,o)},label:t.isMuted?Object(q.jsx)("span",{style:{color:"white"},children:"Turn on microphone"}):Object(q.jsx)("span",{style:{color:"white"},children:"Turn off microphone"}),icon:t.isMuted?Object(q.jsx)(pe.a,{color:"secondary"}):Object(q.jsx)(je.a,{style:{color:"white"}})}),Object(q.jsx)(ue.a,{onClick:function(){return function(e,t){if(e&&e.videoTracks){e.videoTracks.forEach((function(e){return e.enabled=!e.enabled})),e.isOn=!e.isOn,t(De(e))}}(n,s)},label:n.isOn?Object(q.jsx)("span",{style:{color:"white"},children:"Turn off camera"}):Object(q.jsx)("span",{style:{color:"white"},children:"Turn on camera"}),icon:n.isOn?Object(q.jsx)(v.a,{style:{color:"white"}}):Object(q.jsx)(fe.a,{color:"secondary"})}),Object(q.jsx)(ue.a,{onClick:function(){return function(e,t,n,r,c,a){return _e.apply(this,arguments)}(n,j,d,c,i,b)},label:c?Object(q.jsx)("span",{style:{color:"white"},children:"Stop presenting"}):Object(q.jsx)("span",{style:{color:"white"},children:"Present now"}),icon:c?Object(q.jsx)(we.a,{color:"secondary"}):Object(q.jsx)(ge.a,{style:{color:"white"}})}),Object(q.jsx)(ue.a,{onClick:function(){return l(!a)},label:a?Object(q.jsx)("span",{style:{color:"white"},children:"Hide Chat"}):Object(q.jsx)("span",{style:{color:"white"},children:"Show Chat"}),icon:a?Object(q.jsx)(ke.a,{style:{color:"yellow"}}):Object(q.jsx)(Ce.a,{style:{color:"white"}})}),Object(q.jsx)(ue.a,{onClick:function(){return u()},label:Object(q.jsx)("span",{style:{color:"white"},children:"Leave call"}),icon:Object(q.jsx)(xe.a,{color:"secondary"})})]})},Me=(n(322),n(323)(window)),Re=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"#202124"},gridList:{width:"100%",height:"100%",display:"flex",padding:0,flexWrap:"wrap",listStyle:"none",overflow:"auto",justifyContent:"center"},snackRoot:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function Le(e){return Object(q.jsx)(m.a,Object(j.a)({elevation:6,variant:"filled"},e))}var ze=ne.a.div(Ie||(Ie=Object($.a)(["\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  background-color: #202124;\n"]))),Ae=ne.a.video(Te||(Te=Object($.a)(["\n  position: absolute;\n  right: 1%;\n  bottom: 5%;\n  height: 16%;\n  width: 20%;\n  z-index: 1;\n"]))),Fe={audio:{echoCancellation:!0},video:{width:{min:1280},height:{min:720}}},He=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[e.peer]),Object(q.jsx)("video",{height:"100%",width:"100%",playsInline:!0,autoPlay:!0,controls:!0,ref:t,style:{padding:0,objectFit:"cover",position:"absolute",right:0,bottom:0,minWidth:"100%",minHeight:"100%",width:"auto",height:"auto",backgroundSize:"cover",overflow:"hidden"}})},Pe=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)({}),s=Object(d.a)(o,2),i=s[0],j=s[1],b=Object(r.useState)({}),p=Object(d.a)(b,2),m=p[0],x=p[1],O=Object(r.useState)(),g=Object(d.a)(O,2),v=g[0],w=g[1],y=Object(r.useState)([]),k=Object(d.a)(y,2),N=k[0],C=k[1],S=Object(r.useState)(""),D=Object(d.a)(S,2),_=D[0],T=D[1],E=Object(r.useState)(!1),M=Object(d.a)(E,2),L=M[0],A=M[1],F=Object(r.useState)(!1),H=Object(d.a)(F,2),K=H[0],X=H[1],Z=Object(r.useState)(!1),$=Object(d.a)(Z,2),ee=$[0],ne=$[1],ae=Object(r.useState)(""),oe=Object(d.a)(ae,2),le=oe[0],ue=oe[1],de=Object(r.useRef)(),je=Object(r.useRef)(),be=Object(r.useRef)([]),pe=Object(r.useRef)(),he=Object(r.useRef)(),fe=Object(r.useRef)(),me=Object(h.b)(),xe=me.user,Oe=me.isAuthenticated,ge=me.loginWithRedirect,ve=Object(Y.a)(),we=Object(V.a)(ve.breakpoints.down("sm")),ye=e.match.params.roomID;Object(r.useEffect)((function(){var e=window.screen.height;w(e),window.addEventListener("resize",(function(){var e=window.screen.height;w(e)})),de.current=te.a.connect("/");var t=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia(Fe);case 2:t=e.sent,pe.current=t,je.current.srcObject=t,j({isMuted:!1,audioTracks:t.getAudioTracks()}),x({isOn:!0,videoTracks:t.getVideoTracks()}),de.current.emit("join-room",{roomID:ye,email:xe.email}),de.current.on("all-users",(function(e){var n=[];e.forEach((function(e){var r=se(e,de.current.id,t,de);be.current.push({peerID:e,peer:r}),n.push({peerID:e,peer:r})})),a(Object(Q.a)(be.current))})),de.current.on("user-joined",(function(e){var n=ie(e.data,e.callerID,t,de);be.current.push({peerID:e.callerID,peer:n}),a(Object(Q.a)(be.current))})),de.current.on("receiving-answer",(function(e){be.current.find((function(t){return t.peerID===e.id})).peer.signal(e.data),I(xe,ye)})),de.current.on("user-left",(function(e){var t=be.current.find((function(t){return t.peerID===e}));t&&t.peer.destroy();var n=be.current.filter((function(t){return t.peerID!==e}));be.current=n,a(n)})),de.current.on("reload_msgs",(function(e){Ne()}));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Oe?function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:de.current.emit("permission",{userName:xe.name||xe.email,roomID:ye,email:xe.email}),de.current.on("no permit required",Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return e.next=5,Ne();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))),de.current.on("permit?",(function(e){var t=e.userAlias,n=e.id;fe.current=n,ue("1 ".concat(t))})),de.current.on("denied",(function(){ue("denied to join")})),de.current.on("allowed",function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return e.next=5,Ne();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():ge()}),[Oe,ge,ye,xe]);var ke=function(e){return 1===e?60:e<=4?30:e<=9?20:e<=16?15:void 0},Ne=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(xe,ye);case 2:(t=e.sent)&&"function"===typeof t[Symbol.iterator]&&C(Object(Q.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(e){var t="";return e.first_name&&(t+=e.first_name.substr(0,1).toUpperCase()),e.last_name&&(t+=e.last_name.substr(0,1).toUpperCase()),t},Se=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==_.length){e.next=4;break}ne(!0),e.next=9;break;case 4:return e.next=6,z(xe,_,ye);case 6:de.current.emit("reload"),T(""),Ne();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=Re();return Object(q.jsxs)(ze,{children:[Object(q.jsx)(Ae,{controls:!0,muted:!0,ref:je,autoPlay:!0,playsInline:!0}),Object(q.jsx)("div",{className:De.root,children:Object(q.jsx)(re.a,{cellHeight:Math.floor(v/35),cols:60,className:De.gridList,children:c.map((function(e){return Object(q.jsx)(ce.a,{rows:(t=c.length,t<=2?30:t<=6?15:t<=9?10:t<=16?7:void 0),cols:ke(c.length),children:Object(q.jsx)(He,{peer:e.peer})},e.peerID);var t}))})}),Object(q.jsx)("div",{style:{position:"absolute",height:"100%",width:"100%",top:0},children:Object(q.jsx)("div",{className:"flex justify-between",style:{minHeight:"95%"},children:Object(q.jsx)("section",{className:"flex",children:Object(q.jsxs)("div",{id:"chat-div",className:(L?"":"hidden")+" bg-gray-100 text-gray-700 sm:max-w-sm p-4 border-t border-b-4 border-gray-300 flex flex-col justify-between",children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{className:"flex justify-between items-center",children:Object(q.jsx)("h1",{className:"font-semibold",children:"Meeting chat"})}),Object(q.jsxs)("div",{className:"py-3 flex justify-center items-center space-x-4 text-sm",children:[Object(q.jsx)("svg",{className:"w-6 h-6 text-indigo-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})}),Object(q.jsx)("h2",{className:"font-semibold",children:"Meeting started"})]}),Object(q.jsx)("div",{style:{maxHeight:"23.2rem"},className:"text-sm mt-4 space-y-4 overflow-scroll scrollbar-hidden",children:N.map((function(e){return Object(q.jsxs)("div",{className:"flex",children:[Object(q.jsx)("span",{className:"bg-indigo-900 text-gray-300 h-8 w-10 p-2 rounded-full flex items-center justify-center mt-2 z-10",children:Ce(e.sender)}),Object(q.jsxs)("div",{className:"-ml-2 py-2 px-4 bg-gray-200 rounded",children:[Object(q.jsxs)("div",{className:"flex justify-between items-center",children:[Object(q.jsx)("h1",{className:"font-semibold text-gray-800",children:e.sender.first_name||e.sender.username}),Object(q.jsx)("span",{className:"text-xs",children:(t=e.created,t.substring(11,19))})]}),Object(q.jsx)("p",{dangerouslySetInnerHTML:{__html:Me.sanitize(e.text)}})]})]},parseInt(e.id));var t}))})]}),Object(q.jsxs)("div",{className:"flex mt-10",children:[Object(q.jsx)("input",{type:"text",className:"p-3 bg-transparent border border-r-0 border-gray-400 text-sm outline-none rounded-tl rounded-bl w-full tracking-wide",placeholder:"Type a new message",value:_,ref:he,onChange:function(e){return T(e.target.value)}}),Object(q.jsx)("button",{className:"p-2 bg-blue-800 text-gray-200 rounded-tr rounded-br",onClick:function(e){return Se(e)},children:Object(q.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"})})})]})]})})})}),Object(q.jsx)(Ee,{audio:i,video:m,screenShare:K,showChat:L,setAudio:j,setVideo:x,setScreenShare:X,setShowChat:A,leaveRoom:function(){je.current.srcObject.getTracks().forEach((function(e){return e.stop()})),be.current=null,a(be.current),de.current.disconnect(),e.history.push("/")},peersRef:be,userStream:pe}),"1"===le[0]&&Object(q.jsx)("div",{children:Object(q.jsxs)(U.a,{fullScreen:we,open:!0,onClose:function(){de.current.emit("permit status",{allowed:!1,id:fe.current}),ue("")},"aria-labelledby":"responsive-dialog-title",children:[Object(q.jsx)(J.a,{id:"responsive-dialog-title",children:"Someone wants to join this meeting"}),Object(q.jsx)(G.a,{children:Object(q.jsx)(B.a,{children:"Hey, ".concat(le.substr(2)," wants to join the call.")})}),Object(q.jsxs)(W.a,{children:[Object(q.jsx)(P.a,{autoFocus:!0,onClick:function(){de.current.emit("permit status",{allowed:!1,id:fe.current}),ue("")},color:"primary",children:"Deny Entry"}),Object(q.jsx)(P.a,{onClick:function(){de.current.emit("permit status",{allowed:!0,id:fe.current}),ue("")},color:"primary",autoFocus:!0,children:"Admit"})]})]})}),"denied to join"===le&&Object(q.jsx)("div",{children:Object(q.jsxs)(U.a,{fullScreen:we,open:!0,onClose:function(){ue(""),window.location.href=window.location.origin},"aria-labelledby":"responsive-dialog-title",children:[Object(q.jsx)(J.a,{id:"responsive-dialog-title",children:"Permission Denied"}),Object(q.jsx)(G.a,{children:Object(q.jsx)(B.a,{children:"You are not allowed to join this call. Kindly contact the organizer for the permission."})}),Object(q.jsx)(W.a,{children:Object(q.jsx)(P.a,{autoFocus:!0,onClick:function(){ue(""),window.location.href=window.location.origin},color:"primary",children:"Ok"})})]})}),Object(q.jsx)("div",{className:De.snackRoot,children:Object(q.jsx)(f.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:ee,autoHideDuration:6e3,onClose:function(){return ne(!1)},children:Object(q.jsx)(Le,{onClose:function(){return ne(!1)},severity:"error",children:"The message cannot be empty!"})})})]})},Ue=n(235),We=n(509),Ge=n(519),Be=Object(p.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Je=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],a=n[1],o=Object(r.useRef)(),s=Be();return Object(r.useEffect)((function(){(function(){var t=Object(u.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={method:"post",url:"/fetch_keys"},t.next=4,S()(n);case 4:r=t.sent,o.current={},o.current.projectID=r.data.projectID,o.current.userName=e.location.state.username,o.current.userSecret=r.data.userSecret,o.current.projectID&&o.current.userName&&o.current.userSecret&&a(!0),console.log(c),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0),e.history.push("/");case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}})()()}),[c,e.history,e.location.state.username]),Object(q.jsx)(q.Fragment,{children:c?Object(q.jsx)(Ue.d,{height:"100vh",projectID:o.current.projectID,userName:o.current.userName,userSecret:o.current.userSecret}):Object(q.jsx)(We.a,{className:s.backdrop,open:!0,children:Object(q.jsx)(Ge.a,{color:"inherit"})})})},Ve=function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",url:"/create_user",data:{username:"bob_baker"}},e.next=5,S()(t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",url:"/create_chat",data:{title:"Baker's Chat",admin_username:"bob_baker"}},e.next=5,S()(t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",url:"/add_user",data:{username:"bob_baker"}},e.next=5,S()(t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",url:"/get_chat_msgs",data:{username:"Saket"}},e.next=5,S()(t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",url:"/post_chat_msg",data:{username:"Saket",data:{text:"Hello World",custom_json:{gif:"https://giphy.com/clips/ufc-4eZuG5kNYvDrGc6gYk"}}}},e.next=5,S()(t);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("button",{onClick:e,children:"Create User"}),Object(q.jsx)("br",{}),Object(q.jsx)("button",{onClick:function(){return t()},children:"Create Chat"}),Object(q.jsx)("br",{}),Object(q.jsx)("button",{onClick:function(){return n()},children:"Add User"}),Object(q.jsx)("br",{}),Object(q.jsx)("button",{onClick:function(){return r()},children:"Get Chat"}),Object(q.jsx)("br",{}),Object(q.jsx)("button",{onClick:function(){return c()},children:"Send Chat Msg"})]})};var Ye=function(){return Object(q.jsx)(o.a,{children:Object(q.jsxs)(s.c,{children:[Object(q.jsx)(s.a,{path:"/room/:roomID",component:Pe}),Object(q.jsx)(s.a,{path:"/chat",component:Je}),Object(q.jsx)(s.a,{path:"/create",component:Ve}),Object(q.jsx)(s.a,{path:"/",component:Z})]})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,524)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(473);a.a.render(Object(q.jsx)(h.a,{domain:"dev-h72otjre.us.auth0.com",clientId:"uepAKWqvGUsJyYEVE10EjqeTJ2MUSAXz",redirectUri:window.location.origin,children:Object(q.jsx)(Ye,{})}),document.getElementById("root")),qe()}},[[474,1,2]]]);
//# sourceMappingURL=main.f6a0312b.chunk.js.map