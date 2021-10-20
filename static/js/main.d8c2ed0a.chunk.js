(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O}));var c=n(1),r=n.n(c),a=n(4),i=n(32),s=n(64),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var i,s,o,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(r.a.mark((function e(d,b){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=c.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(j){o=!0,console.error("WS error in setup",t,j)}case 2:if(o||!s){e.next=8;break}return Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,c._signatureSubscriptions[l]&&c.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),b=function(t,n,c,r){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,s,u,l,d,b,j,m,f,p,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(c,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,a);case 3:return s=e.sent,u=new i.a(s,o,a),l={id:n,connection:c,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,console.log("getCandyMachineState",d),console.log("getCandyMachineState price",d.data.price.toNumber()),b=d.data.price.toNumber(),j=1e-9*b,m=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),p=m-f,h=d.data.goLiveDate.toNumber(),h=new Date(1e3*h),console.log({itemsAvailable:m,itemsRedeemed:f,itemsRemaining:p,goLiveDate:h}),e.abrupt("return",{candyMachine:l,itemsAvailable:m,itemsRedeemed:f,itemsRemaining:p,goLiveDate:h,price:j});case 20:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c,a){var o,u,d,j,h,O,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,p(c,o.publicKey);case 3:return u=e.sent,d=t.connection,j=t.program,e.next=7,f(o.publicKey);case 7:return h=e.sent,e.next=10,m(o.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return x=e.sent,e.next=16,j.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:c,wallet:a,mint:o.publicKey,metadata:h,masterEdition:O,mintAuthority:c,updateAuthority:c,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:c,newAccountPubkey:o.publicKey,space:s.a.span,lamports:x,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,c,c),b(u,c,c,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,c,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,c,r){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t,n){},358:function(e,t){},360:function(e,t){},376:function(e,t){},377:function(e,t){},408:function(e,t){},464:function(e,t){},466:function(e,t){},480:function(e,t){},484:function(e,t){},486:function(e,t){},496:function(e,t){},498:function(e,t){},525:function(e,t){},527:function(e,t){},532:function(e,t){},534:function(e,t){},540:function(e,t){},542:function(e,t){},554:function(e,t){},557:function(e,t){},569:function(e,t){},570:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s=n(2),o=n.n(s),u=n(29),l=n.n(u),d=(n(353),n(354),n(13)),b=n(1),j=n.n(b),m=n(4),f=n(14),p=n(132),h=n(134),O=n(313),x=n(597),g=n(602),v=n(606),y=n(605),w=(n(357),n.p+"static/media/m-04.9897aaea.png"),k=n.p+"static/media/lineup.4d19fa98.png",S=n.p+"static/media/m-03.1fc4c976.png",N=n.p+"static/media/m-09.c85e47c7.png",P=n.p+"static/media/m-10.ffaf356d.png",L=n.p+"static/media/m-11.9b704485.png",A=n.p+"static/media/discord.41a54583.png",R=n.p+"static/media/twitter.1b704970.png",M=n(16),T=n(52),K=n(175),I=n(133),B=n(10),E=Object(h.a)(K.a)(c||(c=Object(p.a)([""]))),C=h.a.span(r||(r=Object(p.a)([""]))),W=h.a.div(a||(a=Object(p.a)([""]))),D=Object(h.a)(x.a)(i||(i=Object(p.a)([""]))),U=function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;e.completed;return Object(B.jsxs)(C,{children:[n+24*(t||0)," hours, ",c," minutes, ",r," seconds"]})},F=function(e){var t=Object(s.useState)(),n=Object(f.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(!1),i=Object(f.a)(a,2),o=i[0],u=i[1],l=Object(s.useState)(!1),b=Object(f.a)(l,2),p=b[0],h=b[1],x=Object(s.useState)(!1),K=Object(f.a)(x,2),C=K[0],F=K[1],Y=Object(s.useState)(0),_=Object(f.a)(Y,2),q=_[0],J=_[1],G=Object(s.useState)(0),H=Object(f.a)(G,2),V=H[0],z=H[1],X=Object(s.useState)(0),Q=Object(f.a)(X,2),Z=Q[0],$=Q[1],ee=Object(s.useState)("-"),te=Object(f.a)(ee,2),ne=te[0],ce=te[1],re=Object(s.useState)({open:!1,message:"",severity:void 0}),ae=Object(f.a)(re,2),ie=ae[0],se=ae[1],oe=Object(s.useState)(new Date(e.startDate)),ue=Object(f.a)(oe,2),le=ue[0],de=ue[1],be=Object(T.c)(),je=Object(s.useState)(),me=Object(f.a)(je,2),fe=me[0],pe=me[1],he=function(){Object(m.a)(j.a.mark((function t(){var n,c,r,a,i,s,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(be){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(I.b)(be,e.candyMachineId,e.connection);case 4:n=t.sent,c=n.candyMachine,r=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,o=n.price,J(a),$(i),z(s),h(0===i),de(r),pe(c),ce((null===o||void 0===o?void 0:o.toFixed(10))+""||"-");case 18:case"end":return t.stop()}}),t)})))()},Oe=function(){var t=Object(m.a)(j.a.mark((function t(){var n,c,a,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,F(!0),!be||!(null===fe||void 0===fe?void 0:fe.program)){t.next=10;break}return t.next=5,Object(I.c)(fe,e.config,be.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(I.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?se({open:!0,message:"Mint failed! Please try again!",severity:"error"}):se({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",h(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),se({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!be){t.next=23;break}return t.next=21,e.connection.getBalance(be.publicKey);case 21:i=t.sent,r(i/M.LAMPORTS_PER_SOL);case 23:return F(!1),he(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){Object(m.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!be){t.next=5;break}return t.next=3,e.connection.getBalance(be.publicKey);case 3:n=t.sent,r(n/M.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[be,e.connection]),Object(s.useEffect)(he,[be,e.candyMachineId,e.connection]);var xe=be?"mint connected":"mint";return Object(B.jsxs)("div",{className:"container",style:{backgroundImage:"url(".concat(w,")")},children:[Object(B.jsxs)("div",{className:"wrap",children:[Object(B.jsx)("section",{className:"hero",children:Object(B.jsxs)("div",{className:"cta",children:[Object(B.jsxs)("div",{className:"hl",children:["The Lambo",Object(B.jsx)("br",{}),"Diamond Hands Club"]}),Object(B.jsxs)("div",{className:"cp",children:["Own 1 of a kind PIXEL LAMBOS.",Object(B.jsx)("br",{}),"Each LAMBO is unique and there doesn't exist another like it."]}),Object(B.jsxs)("div",{className:"somelinks",children:[Object(B.jsx)("a",{href:"https://discord.gg/cpJ3seJM",children:Object(B.jsx)("div",{style:{backgroundImage:"url(".concat(A,")")}})}),Object(B.jsx)("a",{href:"https://twitter.com/PixeLambo",children:Object(B.jsx)("div",{style:{backgroundImage:"url(".concat(R,")")}})})]})]})}),Object(B.jsxs)("div",{className:xe,children:[Object(B.jsx)(W,{children:be?Object(B.jsx)(D,{disabled:p||C||!o,onClick:Oe,variant:"contained",className:"mintbtn",style:{width:"50%"},children:p?"SOLD OUT":o?C?Object(B.jsx)(g.a,{}):"MINT":Object(B.jsx)(O.a,{date:le,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:U})}):Object(B.jsx)(E,{fullWidth:!1,className:"mintbtn",children:"Connect Wallet"})}),be&&Object(B.jsxs)("div",{className:"price",children:[ne," SOL"]}),be&&Object(B.jsxs)("div",{className:"nftinfo",children:[Z," out of ",q," available"]})]})]}),Object(B.jsx)("div",{className:"lineup",style:{backgroundImage:"url(".concat(S,")")},children:Object(B.jsx)("img",{src:S,alt:"",className:"icon"})}),Object(B.jsx)("div",{className:"wrap-blk",children:Object(B.jsxs)("div",{className:"wrap",children:[Object(B.jsxs)("div",{className:"content",children:[Object(B.jsx)("section",{className:"about",children:Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"hl",children:"About"}),Object(B.jsxs)("span",{className:"aboutp",children:[Object(B.jsx)("p",{children:"Incredibly awesome hand drawn Pixel Lambos, drivers and backgrounds all come together in unique 1 off custom art work."}),Object(B.jsx)("p",{children:"We are only releasing 3333 Lambos out into the world for mint so they are going to be ultra exclusive. We are then giving away upto a 1000 free Lambos to lucky holders! So there\u2019s a pretty high chance you come out of this with 2 ULTRA AWESOME AND RARE LAMBOS!"})]})]})}),Object(B.jsxs)("section",{className:"itemcontainer",children:[Object(B.jsxs)("div",{className:"item",children:[Object(B.jsx)("div",{children:Object(B.jsx)("img",{className:"itemimg",src:N,alt:""})}),Object(B.jsxs)("div",{className:"itemc",children:[Object(B.jsx)("strong",{children:"All Lambos"}),Object(B.jsx)("p",{children:"18 production Lambos from 1964 to 2021. Every single one painstakingly drawn and hand crafted to perfection"})]})]}),Object(B.jsxs)("div",{className:"item",children:[Object(B.jsx)("div",{children:Object(B.jsx)("img",{className:"itemimg",src:P,alt:""})}),Object(B.jsxs)("div",{className:"itemc",children:[Object(B.jsx)("strong",{children:"Drivers"}),Object(B.jsx)("p",{children:"Half the Lambos have 11 different drivers! Maybe you\u2019ll get lucky with one that\u2019s just like you!"})]})]}),Object(B.jsxs)("div",{className:"item",children:[Object(B.jsx)("div",{children:Object(B.jsx)("img",{className:"itemimg",src:L,alt:""})}),Object(B.jsxs)("div",{className:"itemc",children:[Object(B.jsx)("strong",{children:"Backgrounds"}),Object(B.jsx)("p",{children:"50 Stunning and unique pixel drawn backgrounds inspired from Geek and Crypto culture"})]})]})]}),Object(B.jsx)("img",{src:k,alt:"",className:"reflectionlineup"}),Object(B.jsx)("section",{className:"details",children:Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"hl",children:"Roadmap and Details"}),Object(B.jsxs)("p",{children:["We have all the up to date details on our discord!",Object(B.jsx)("br",{}),"We suggest heading over there to get the latest."]}),Object(B.jsxs)("p",{children:["Info about MarketPlace Listing, Exclusive Airdrops,",Object(B.jsx)("br",{}),"Floorsweeping, Collabs and Special Giveaways"]}),Object(B.jsxs)("div",{className:"somelinks",children:[Object(B.jsx)("a",{href:"https://discord.gg/cpJ3seJM",children:Object(B.jsx)("div",{style:{backgroundImage:"url(".concat(A,")")}})}),Object(B.jsx)("a",{href:"https://twitter.com/PixeLambo",children:Object(B.jsx)("div",{style:{backgroundImage:"url(".concat(R,")")}})})]})]})})]}),Object(B.jsx)("section",{className:"footer",children:"@ 2021 Lambo Diamond Hands Club. All rights reserved."}),Object(B.jsxs)("div",{className:"wallet",children:[be&&Object(B.jsxs)("p",{children:["Wallet ",Object(I.d)(be.publicKey.toBase58()||"")]}),be&&Object(B.jsxs)("p",{children:["Balance: ",(c||0).toLocaleString()," SOL"]}),be&&Object(B.jsxs)("p",{children:["Total Available: ",q]}),be&&Object(B.jsxs)("p",{children:["Redeemed: ",V]}),be&&Object(B.jsxs)("p",{children:["Remaining: ",Z]})]}),Object(B.jsx)(v.a,{open:ie.open,autoHideDuration:6e3,onClose:function(){return se(Object(d.a)(Object(d.a)({},ie),{},{open:!1}))},children:Object(B.jsx)(y.a,{onClose:function(){return se(Object(d.a)(Object(d.a)({},ie),{},{open:!1}))},severity:ie.severity,children:ie.message})})]})})]})},Y=n(32),_=n(116),q=n(340),J=n(603),G=new Y.d.PublicKey("6ifTTUyAEm3kcxnYKmi3LSFF7hwPam2Wcbm11Gr1pP2n"),H=new Y.d.PublicKey("8UJNiqehGfQNwoK4LFkYvT1hhRcaobJmdaU5PTcHw3Tw"),V=new Y.d.PublicKey("29ku7yPtBC1XRksGztAh5hfFYww9EAsaVbukmb83hY97"),z="devnet",X=new Y.d.Connection("https://wandering-dry-shape.solana-devnet.quiknode.pro/"),Q=parseInt("1634731200",10),Z=Object(q.a)({overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),$=function(){var e=Object(s.useMemo)((function(){return Object(M.clusterApiUrl)(z)}),[]),t=Object(s.useMemo)((function(){return[Object(_.a)(),Object(_.b)(),Object(_.c)(),Object(_.e)({network:z}),Object(_.d)({network:z})]}),[]);return Object(B.jsx)(J.a,{theme:Z,children:Object(B.jsx)(T.a,{endpoint:e,children:Object(B.jsx)(T.b,{wallets:t,autoConnect:!0,children:Object(B.jsx)(K.b,{children:Object(B.jsx)(F,{candyMachineId:V,config:H,connection:X,startDate:Q,treasury:G,txTimeout:3e4})})})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,607)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};l.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)($,{})}),document.getElementById("root")),ee()}},[[570,1,2]]]);
//# sourceMappingURL=main.d8c2ed0a.chunk.js.map