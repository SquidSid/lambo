(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return x}));var a=n(1),c=n.n(a),r=n(4),i=n(32),s=n(64),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),u=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(r.a)(c.a.mark((function e(t,n,a){var i,s,o,l,u,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,l={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(r.a)(c.a.mark((function e(d,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{u=a.onSignature(t,(function(e,t){o=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(l)):(console.log("Resolved via websocket",e),d(l))}),i)}catch(j){o=!0,console.error("WS error in setup",t,j)}case 2:if(o||!s){e.next=8;break}return Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],o||(l?l.err?(console.log("REST error for",t,l),o=!0,b(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),o=!0,d(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,g(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,a._signatureSubscriptions[u]&&a.removeSignatureListener(u),o=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(t,n,a,c){var r=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:r,programId:l,data:e.from([])})},j=function(){var e=Object(r.a)(c.a.mark((function e(t,n,a){var r,s,l,u,d,b,j,m,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new i.b(a,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,r);case 3:return s=e.sent,l=new i.a(s,o,r),u={id:n,connection:a,program:l},e.next=8,l.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),j=d.itemsRedeemed.toNumber(),m=b-j,f=d.data.goLiveDate.toNumber(),f=new Date(1e3*f),console.log({itemsAvailable:b,itemsRedeemed:j,itemsRemaining:m,goLiveDate:f}),e.abrupt("return",{candyMachine:u,itemsAvailable:b,itemsRedeemed:j,itemsRemaining:m,goLiveDate:f});case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),u.toBuffer(),n.toBuffer(),e.from("edition")],u);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),u.toBuffer(),n.toBuffer()],u);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(c.a.mark((function e(t,n,a,r){var o,l,d,j,p,x,g;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,h(a,o.publicKey);case 3:return l=e.sent,d=t.connection,j=t.program,e.next=7,f(o.publicKey);case 7:return p=e.sent,e.next=10,m(o.publicKey);case 10:return x=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return g=e.sent,e.next=16,j.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:a,wallet:r,mint:o.publicKey,metadata:p,masterEdition:x,mintAuthority:a,updateAuthority:a,tokenMetadataProgram:u,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:a,newAccountPubkey:o.publicKey,space:s.a.span,lamports:g,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,a,a),b(l,a,a,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,l,a,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t,n){},358:function(e,t){},360:function(e,t){},376:function(e,t){},377:function(e,t){},408:function(e,t){},464:function(e,t){},466:function(e,t){},480:function(e,t){},484:function(e,t){},486:function(e,t){},496:function(e,t){},498:function(e,t){},525:function(e,t){},527:function(e,t){},532:function(e,t){},534:function(e,t){},540:function(e,t){},542:function(e,t){},554:function(e,t){},557:function(e,t){},569:function(e,t){},570:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s=n(2),o=n.n(s),l=n(29),u=n.n(l),d=(n(353),n(354),n(13)),b=n(1),j=n.n(b),m=n(4),f=n(14),h=n(132),p=n(134),x=n(313),g=n(597),O=n(602),v=n(606),y=n(605),R=(n(357),n.p+"static/media/bgm.a08ce8f9.png"),E=n.p+"static/media/lineup.4d19fa98.png",I=n.p+"static/media/aboutimage.e2e6da78.png",w=n.p+"static/media/discord.41a54583.png",S=n.p+"static/media/twitter.1b704970.png",q=n.p+"static/media/airdrop.83e98f07.png",V=n.p+"static/media/marketplace.7791cc8a.png",k=n.p+"static/media/merch.a4400362.png",N=n(16),D=n(52),K=n(175),L=n(133),M=n(10),P=Object(p.a)(K.a)(a||(a=Object(h.a)([""]))),T=p.a.span(c||(c=Object(h.a)([""]))),A=p.a.div(r||(r=Object(h.a)([""]))),U=Object(p.a)(g.a)(i||(i=Object(h.a)([""]))),C=function(e){var t=e.days,n=e.hours,a=e.minutes,c=e.seconds;e.completed;return Object(M.jsxs)(T,{children:[n+24*(t||0)," hours, ",a," minutes, ",c," seconds"]})},H=function(e){var t=Object(s.useState)(),n=Object(f.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(!1),i=Object(f.a)(r,2),o=i[0],l=i[1],u=Object(s.useState)(!1),b=Object(f.a)(u,2),h=b[0],p=b[1],g=Object(s.useState)(!1),K=Object(f.a)(g,2),T=K[0],H=K[1],F=Object(s.useState)(0),X=Object(f.a)(F,2),B=X[0],Y=X[1],W=Object(s.useState)(0),G=Object(f.a)(W,2),Q=G[0],J=G[1],z=Object(s.useState)(0),Z=Object(f.a)(z,2),_=Z[0],$=Z[1],ee=Object(s.useState)({open:!1,message:"",severity:void 0}),te=Object(f.a)(ee,2),ne=te[0],ae=te[1],ce=Object(s.useState)(new Date(e.startDate)),re=Object(f.a)(ce,2),ie=re[0],se=re[1],oe=Object(D.c)(),le=Object(s.useState)(),ue=Object(f.a)(le,2),de=ue[0],be=ue[1],je=function(){Object(m.a)(j.a.mark((function t(){var n,a,c,r,i,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(oe){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(L.b)(oe,e.candyMachineId,e.connection);case 4:n=t.sent,a=n.candyMachine,c=n.goLiveDate,r=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,Y(r),$(i),J(s),p(0===i),se(c),be(a);case 16:case"end":return t.stop()}}),t)})))()},me=function(){var t=Object(m.a)(j.a.mark((function t(){var n,a,r,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,H(!0),!oe||!(null===de||void 0===de?void 0:de.program)){t.next=10;break}return t.next=5,Object(L.c)(de,e.config,oe.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(L.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(a=t.sent)||void 0===a?void 0:a.err)?ae({open:!0,message:"Mint failed! Please try again!",severity:"error"}):ae({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),r=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(r="SOLD OUT!",p(!0)):312===t.t0.code&&(r="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?r="SOLD OUT!":t.t0.message.indexOf("0x135")&&(r="Insufficient funds to mint. Please fund your wallet.")),ae({open:!0,message:r,severity:"error"});case 17:if(t.prev=17,!oe){t.next=23;break}return t.next=21,e.connection.getBalance(oe.publicKey);case 21:i=t.sent,c(i/N.LAMPORTS_PER_SOL);case 23:return H(!1),je(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){Object(m.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!oe){t.next=5;break}return t.next=3,e.connection.getBalance(oe.publicKey);case 3:n=t.sent,c(n/N.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[oe,e.connection]),Object(s.useEffect)(je,[oe,e.candyMachineId,e.connection]);var fe=Object(M.jsx)("a",{className:"blocklink",href:"https://discord.gg/cpJ3seJM",children:"More info on our discord"});return Object(M.jsx)("div",{className:"container",style:{backgroundImage:"url(".concat(R,")")},children:Object(M.jsxs)("div",{className:"wrap",children:[Object(M.jsxs)("section",{className:"hero",children:[Object(M.jsxs)("div",{className:"cta",children:[Object(M.jsxs)("div",{className:"hl",children:["The Lambo",Object(M.jsx)("br",{}),"Diamond Hands Club"]}),Object(M.jsxs)("div",{className:"cp",children:["Own a Lambo in the metaverse while you HODL for a Lambo in your garage!",Object(M.jsx)("br",{})]}),Object(M.jsxs)("div",{className:"mint",children:[oe&&Object(M.jsxs)("div",{className:"nftinfo",children:["Availability: ",_," out of ",B," remaining"]}),Object(M.jsx)(A,{children:oe?Object(M.jsx)(U,{disabled:h||T||!o,onClick:me,variant:"contained",className:"mintbtn",children:h?"SOLD OUT":o?T?Object(M.jsx)(O.a,{}):"MINT Cost: 2 SOL":Object(M.jsx)(x.a,{date:ie,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:C})}):Object(M.jsx)(P,{fullWidth:!1,className:"mintbtn",children:"Connect Wallet"})}),Object(M.jsx)("div",{className:"price",children:"2 SOL"})]}),Object(M.jsxs)("div",{className:"cp",children:["The Lambo Diamond Hands Club is a collection of 5555 hand drawn pixel Lambos.",Object(M.jsx)("br",{}),"We don\u2019t have any of those algorithmically generated pieces here, that\u2019s right! We did it like they would at the Lambo Factory in Sant\u2019Agata Bolognese, Italy.",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"All 5555 Lambo pieces are unique and have different attributes. Our pixel perfect Lambos can be used as profile images, avatars, wallpapers and even as printable art! No two artworks are the same and they are all unique in their own way."]}),Object(M.jsxs)("div",{className:"somelinks",children:[Object(M.jsx)("a",{href:"https://discord.gg/cpJ3seJM",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(w,")")}})}),Object(M.jsx)("a",{href:"https://twitter.com/PixeLambo",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(S,")")}})})]})]}),Object(M.jsx)("div",{className:"mi",children:Object(M.jsx)("img",{src:S,alt:"animated"})})]}),Object(M.jsxs)("div",{className:"content",children:[Object(M.jsx)("section",{className:"about",children:Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:"hl",children:"About"}),Object(M.jsx)("img",{src:I,alt:"",className:"spacer icon"}),Object(M.jsxs)("span",{className:"aboutp",children:[Object(M.jsx)("p",{children:"All 3900 Lambo pieces are unique and have different attributes. Our pixel perfect Lambos can be used as profile images, avatars, wallpapers and even as printable art! No two artworks are the same and they are all unique in their own way."}),Object(M.jsxs)("p",{className:"list",children:[Object(M.jsx)("strong",{children:"How are the combos made?"}),Object(M.jsx)("br",{}),"Our hand drawn Lambo art works are a combination of",Object(M.jsx)("br",{}),Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{children:"18 Production Lambo Models (from 1964 to today)"}),Object(M.jsx)("li",{children:"10 Factory Colours for each"}),Object(M.jsx)("li",{children:"50+ Backgrounds and Landscapes"}),Object(M.jsx)("li",{children:"10 Unique Drivers (is one of them you?)"}),Object(M.jsx)("li",{children:"1 Rare Shiba Driver"}),Object(M.jsx)("li",{children:"1 Rare Police Lambo "})]})]}),Object(M.jsxs)("p",{className:"aboutmark",children:["For Lambo NFT hodlers:\xa0",Object(M.jsx)("br",{}),"\xa0we have ultra rare ",Object(M.jsx)("strong",{style:{display:"inline"},children:"concept Lambos"})," being airdropped."]})]}),Object(M.jsx)("img",{src:E,alt:"",className:"icon"})]})}),Object(M.jsx)("section",{className:"details",children:Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{children:Object(M.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"spacer"})}),Object(M.jsx)("div",{className:"hl",children:"Roadmap and Details"}),Object(M.jsxs)("p",{children:["We have all the up-to-date details on our Discord!",Object(M.jsx)("br",{}),"We suggest heading on over there to get the latest."]}),Object(M.jsxs)("div",{className:"somelinks",children:[Object(M.jsx)("a",{href:"https://discord.gg/cpJ3seJM",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(w,")")}})}),Object(M.jsx)("a",{href:"https://twitter.com/PixeLambo",children:Object(M.jsx)("div",{style:{backgroundImage:"url(".concat(S,")")}})})]})]})}),Object(M.jsxs)("section",{className:"items",children:[Object(M.jsxs)("div",{className:"item",children:[Object(M.jsx)("div",{className:"blk",children:Object(M.jsx)("img",{src:V,alt:"",className:"icon"})}),Object(M.jsxs)("div",{className:"ctx",children:[Object(M.jsx)("strong",{children:"Marketplace Listing"}),Object(M.jsxs)("p",{children:["Once we have minted and sent all of your Lambos The Lambo Diamonds Hands Club will be listed on one of the Solana Marketplaces. Stay tuned!",fe]})]})]}),Object(M.jsxs)("div",{className:"item",children:[Object(M.jsx)("div",{className:"blk",children:Object(M.jsx)("img",{src:q,alt:"",className:"icon"})}),Object(M.jsxs)("div",{className:"ctx",children:[Object(M.jsx)("strong",{children:"Airdrop Only Exclusives"}),Object(M.jsxs)("p",{children:["Think ultra custom models (there are plenty of concept Lambos), custom colours and attributes. These will only be reserved for airdops. No other way to get them!",fe]})]})]}),Object(M.jsxs)("div",{className:"item",children:[Object(M.jsx)("div",{className:"blk",children:Object(M.jsx)("img",{src:k,alt:"",className:"icon"})}),Object(M.jsxs)("div",{className:"ctx",children:[Object(M.jsx)("strong",{children:"Merch Store"}),Object(M.jsxs)("p",{children:["Just in time for all your Christmas shopping!",fe]})]})]})]})]}),Object(M.jsx)("section",{className:"footer",children:"@ 2021 Lambo Diamond Hands Club. All rights reserved."}),Object(M.jsxs)("div",{className:"wallet",children:[oe&&Object(M.jsxs)("p",{children:["Wallet ",Object(L.d)(oe.publicKey.toBase58()||"")]}),oe&&Object(M.jsxs)("p",{children:["Balance: ",(a||0).toLocaleString()," SOL"]}),oe&&Object(M.jsxs)("p",{children:["Total Available: ",B]}),oe&&Object(M.jsxs)("p",{children:["Redeemed: ",Q]}),oe&&Object(M.jsxs)("p",{children:["Remaining: ",_]})]}),Object(M.jsx)(v.a,{open:ne.open,autoHideDuration:6e3,onClose:function(){return ae(Object(d.a)(Object(d.a)({},ne),{},{open:!1}))},children:Object(M.jsx)(y.a,{onClose:function(){return ae(Object(d.a)(Object(d.a)({},ne),{},{open:!1}))},severity:ne.severity,children:ne.message})})]})})},F=n(32),X=n(116),B=n(340),Y=n(603),W=new F.d.PublicKey("3FVZgDq6szHAEDBeXeACfWN3juS2irBSUd8ma9nDrDBE"),G=new F.d.PublicKey("F9fLBEzimJ5PHdq9mQnXLsesrmL5CHMYHo7bo7WwV1xE"),Q=new F.d.PublicKey("29ZKE49kjoHB3uNeRGmmijx5LayNYNBZZSqwS2pbWswA"),J="mainnet-beta",z=new F.d.Connection("https://explorer-api.mainnet-beta.solana.com"),Z=parseInt("1633435200",10),_=Object(B.a)({overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),$=function(){var e=Object(s.useMemo)((function(){return Object(N.clusterApiUrl)(J)}),[]),t=Object(s.useMemo)((function(){return[Object(X.a)(),Object(X.b)(),Object(X.c)(),Object(X.e)({network:J}),Object(X.d)({network:J})]}),[]);return Object(M.jsx)(Y.a,{theme:_,children:Object(M.jsx)(D.a,{endpoint:e,children:Object(M.jsx)(D.b,{wallets:t,autoConnect:!0,children:Object(M.jsx)(K.b,{children:Object(M.jsx)(H,{candyMachineId:Q,config:G,connection:z,startDate:Z,treasury:W,txTimeout:3e4})})})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,607)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};u.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)($,{})}),document.getElementById("root")),ee()}},[[570,1,2]]]);
//# sourceMappingURL=main.a7f25dbf.chunk.js.map