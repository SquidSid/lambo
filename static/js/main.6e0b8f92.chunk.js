(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O}));var c=n(1),r=n.n(c),a=n(4),i=n(32),s=n(64),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var i,s,o,u,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(a.a)(r.a.mark((function e(d,b){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=c.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(j){o=!0,console.error("WS error in setup",t,j)}case 2:if(o||!s){e.next=8;break}return Object(a.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,c._signatureSubscriptions[l]&&c.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),b=function(t,n,c,r){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,s,u,l,d,b,j,m,f,p,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(c,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,a);case 3:return s=e.sent,u=new i.a(s,o,a),l={id:n,connection:c,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.price.toNumber(),j=1e-9*b,m=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),p=m-f,h=d.data.goLiveDate.toNumber(),h=new Date(1e3*h),console.log({itemsAvailable:m,itemsRedeemed:f,itemsRemaining:p,goLiveDate:h}),e.abrupt("return",{candyMachine:l,itemsAvailable:m,itemsRedeemed:f,itemsRemaining:p,goLiveDate:h,price:j});case 18:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c,a){var o,u,d,j,h,O,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,p(c,o.publicKey);case 3:return u=e.sent,d=t.connection,j=t.program,e.next=7,f(o.publicKey);case 7:return h=e.sent,e.next=10,m(o.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return x=e.sent,e.next=16,j.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:c,wallet:a,mint:o.publicKey,metadata:h,masterEdition:O,mintAuthority:c,updateAuthority:c,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:c,newAccountPubkey:o.publicKey,space:s.a.span,lamports:x,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,c,c),b(u,c,c,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,c,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,c,r){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},352:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},355:function(e,t){},357:function(e,t){},373:function(e,t){},374:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s=n(2),o=n.n(s),u=n(29),l=n.n(u),d=(n(352),n(353),n(13)),b=n(1),j=n.n(b),m=n(4),f=n(14),p=n(132),h=n(134),O=n(596),x=n(604),g=n(603),v=(n(354),n.p+"static/media/m-04.9897aaea.png"),y=n.p+"static/media/lineup.4d19fa98.png",w=n.p+"static/media/m-03.1fc4c976.png",k=n.p+"static/media/m-09.c85e47c7.png",S=n.p+"static/media/m-10.ffaf356d.png",N=n.p+"static/media/m-11.9b704485.png",P=n.p+"static/media/discord.41a54583.png",L=n.p+"static/media/twitter.1b704970.png",A=n(15),R=n(52),I=n(175),K=n(133),M=n(10),B=(Object(h.a)(I.a)(c||(c=Object(p.a)([""]))),h.a.span(r||(r=Object(p.a)([""]))),h.a.div(a||(a=Object(p.a)([""]))),Object(h.a)(O.a)(i||(i=Object(p.a)([""]))),function(e){var t=Object(s.useState)(),n=Object(f.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(!1),i=Object(f.a)(a,2),o=(i[0],i[1],Object(s.useState)(!1)),u=Object(f.a)(o,2),l=(u[0],u[1]),b=Object(s.useState)(!1),p=Object(f.a)(b,2),h=(p[0],p[1],Object(s.useState)(0)),O=Object(f.a)(h,2),I=O[0],B=O[1],E=Object(s.useState)(0),T=Object(f.a)(E,2),D=T[0],W=T[1],C=Object(s.useState)(0),F=Object(f.a)(C,2),q=F[0],Y=F[1],H=Object(s.useState)("-"),_=Object(f.a)(H,2),G=(_[0],_[1]),U=Object(s.useState)({open:!1,message:"",severity:void 0}),Z=Object(f.a)(U,2),J=Z[0],V=Z[1],z=Object(s.useState)(new Date(e.startDate)),X=Object(f.a)(z,2),Q=(X[0],X[1]),$=Object(R.c)(),ee=Object(s.useState)(),te=Object(f.a)(ee,2),ne=(te[0],te[1]),ce=function(){Object(m.a)(j.a.mark((function t(){var n,c,r,a,i,s,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if($){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(K.b)($,e.candyMachineId,e.connection);case 4:n=t.sent,c=n.candyMachine,r=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,o=n.price,B(a),Y(i),W(s),l(0===i),Q(r),ne(c),G((null===o||void 0===o?void 0:o.toFixed(10))+""||"-");case 18:case"end":return t.stop()}}),t)})))()};Object(s.useEffect)((function(){Object(m.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!$){t.next=5;break}return t.next=3,e.connection.getBalance($.publicKey);case 3:n=t.sent,r(n/A.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[$,e.connection]),Object(s.useEffect)(ce,[$,e.candyMachineId,e.connection]);return Object(M.jsxs)("div",{className:"container",style:{backgroundImage:"url(".concat(v,")")},children:[Object(M.jsx)("div",{className:"wrap",children:Object(M.jsx)("section",{className:"hero",children:Object(M.jsxs)("div",{className:"cta",children:[Object(M.jsxs)("div",{className:"hl",children:["The Lambo",Object(M.jsx)("br",{}),"Diamond Hands Club"]}),Object(M.jsxs)("div",{className:"cp",children:["Own 1 of a kind PIXEL LAMBOS.",Object(M.jsx)("br",{}),"Each LAMBO is unique and there doesn't exist another like it."]}),Object(M.jsxs)("div",{className:"somelinks",children:[Object(M.jsx)("a",{href:"https://discord.gg/DuxthFgF6q",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(P,")")}})}),Object(M.jsx)("a",{href:"https://twitter.com/PixeLambo",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(L,")")}})})]})]})})}),Object(M.jsx)("div",{className:"lineup",style:{backgroundImage:"url(".concat(w,")")},children:Object(M.jsx)("img",{src:w,alt:"",className:"icon"})}),Object(M.jsx)("div",{className:"wrap-blk",children:Object(M.jsxs)("div",{className:"wrap",children:[Object(M.jsxs)("div",{className:"content",children:[Object(M.jsx)("section",{className:"about",children:Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:"hl",children:"About"}),Object(M.jsxs)("span",{className:"aboutp",children:[Object(M.jsx)("p",{children:"Incredibly awesome hand drawn Pixel Lambos, drivers and backgrounds all come together in unique 1 off custom art work."}),Object(M.jsx)("p",{children:"We are only releasing 3333 Lambos out into the world for mint so they are going to be ultra exclusive. We are then giving away upto a 1000 free Lambos to lucky holders! So there\u2019s a pretty high chance you come out of this with 2 ULTRA AWESOME AND RARE LAMBOS!"})]})]})}),Object(M.jsxs)("section",{className:"itemcontainer",children:[Object(M.jsxs)("div",{className:"item",children:[Object(M.jsx)("div",{children:Object(M.jsx)("img",{className:"itemimg",src:k,alt:""})}),Object(M.jsxs)("div",{className:"itemc",children:[Object(M.jsx)("strong",{children:"All Lambos"}),Object(M.jsx)("p",{children:"18 production Lambos from 1964 to 2021. Every single one painstakingly drawn and hand crafted to perfection"})]})]}),Object(M.jsxs)("div",{className:"item",children:[Object(M.jsx)("div",{children:Object(M.jsx)("img",{className:"itemimg",src:S,alt:""})}),Object(M.jsxs)("div",{className:"itemc",children:[Object(M.jsx)("strong",{children:"Drivers"}),Object(M.jsx)("p",{children:"Half the Lambos have 11 different drivers! Maybe you\u2019ll get lucky with one that\u2019s just like you!"})]})]}),Object(M.jsxs)("div",{className:"item",children:[Object(M.jsx)("div",{children:Object(M.jsx)("img",{className:"itemimg",src:N,alt:""})}),Object(M.jsxs)("div",{className:"itemc",children:[Object(M.jsx)("strong",{children:"Backgrounds"}),Object(M.jsx)("p",{children:"50 Stunning and unique pixel drawn backgrounds inspired from Geek and Crypto culture"})]})]})]}),Object(M.jsx)("img",{src:y,alt:"",className:"reflectionlineup"}),Object(M.jsx)("section",{className:"details",children:Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:"hl",children:"Roadmap and Details"}),Object(M.jsxs)("p",{children:["We have all the up to date details on our discord!",Object(M.jsx)("br",{}),"We suggest heading over there to get the latest."]}),Object(M.jsxs)("p",{children:["Info about MarketPlace Listing, Exclusive Airdrops,",Object(M.jsx)("br",{}),"Floorsweeping, Collabs and Special Giveaways"]}),Object(M.jsxs)("div",{className:"somelinks",children:[Object(M.jsx)("a",{href:"https://discord.gg/DuxthFgF6q",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(P,")")}})}),Object(M.jsx)("a",{href:"https://twitter.com/PixeLambo",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(L,")")}})})]})]})})]}),Object(M.jsx)("section",{className:"footer",children:"@ 2021 Lambo Diamond Hands Club. All rights reserved."}),Object(M.jsxs)("div",{className:"wallet",children:[$&&Object(M.jsxs)("p",{children:["Wallet ",Object(K.d)($.publicKey.toBase58()||"")]}),$&&Object(M.jsxs)("p",{children:["Balance: ",(c||0).toLocaleString()," SOL"]}),$&&Object(M.jsxs)("p",{children:["Total Available: ",I]}),$&&Object(M.jsxs)("p",{children:["Redeemed: ",D]}),$&&Object(M.jsxs)("p",{children:["Remaining: ",q]})]}),Object(M.jsx)(x.a,{open:J.open,autoHideDuration:6e3,onClose:function(){return V(Object(d.a)(Object(d.a)({},J),{},{open:!1}))},children:Object(M.jsx)(g.a,{onClose:function(){return V(Object(d.a)(Object(d.a)({},J),{},{open:!1}))},severity:J.severity,children:J.message})})]})})]})}),E=n(32),T=n(116),D=n(339),W=n(601),C=new E.d.PublicKey("7F4qPqte3GnzXxnuRdneHbQ6pSzj2wf8nbopJKpnGAZg"),F=new E.d.PublicKey("EMhfY723X5k2pdiN9jHGTVvgbxTxeSLvqrvMY7xdYFSY"),q=new E.d.PublicKey("EHumS4cZHtZ6Yy6t1bDwMd4f3s2469e6JZG9DDNPQTuU"),Y="mainnet-beta",H=new E.d.Connection("https://api.mainnet-beta.solana.com"),_=parseInt("1634731200",10),G=Object(D.a)({overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),U=function(){var e=Object(s.useMemo)((function(){return Object(A.clusterApiUrl)(Y)}),[]),t=Object(s.useMemo)((function(){return[Object(T.a)(),Object(T.b)(),Object(T.c)(),Object(T.e)({network:Y}),Object(T.d)({network:Y})]}),[]);return Object(M.jsx)(W.a,{theme:G,children:Object(M.jsx)(R.a,{endpoint:e,children:Object(M.jsx)(R.b,{wallets:t,autoConnect:!0,children:Object(M.jsx)(I.b,{children:Object(M.jsx)(B,{candyMachineId:q,config:F,connection:H,startDate:_,treasury:C,txTimeout:3e4})})})})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,605)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};l.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(U,{})}),document.getElementById("root")),Z()}},[[569,1,2]]]);
//# sourceMappingURL=main.6e0b8f92.chunk.js.map