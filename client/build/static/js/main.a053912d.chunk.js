(this.webpackJsonpgeet=this.webpackJsonpgeet||[]).push([[0],{50:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(39),l=s.n(a),i=(s(50),s(17)),o=s(4),r=s(0),j="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("f8a20825f0214028b72b59cd14a4ac2e","&response_type=code&redirect_uri=").concat("https://spotify-clone-866b.onrender.com","&scope=").concat(["user-read-email","user-read-private","user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-follow-read","user-follow-modify","user-library-read","user-library-modify","user-modify-playback-state","playlist-read-private","playlist-read-collaborative","playlist-modify-public","playlist-modify-private"].join("%20")),d=function(){return Object(r.jsxs)("div",{className:"Login",children:[Object(r.jsx)("h1",{children:"LET THE MUSIC PLAY"}),Object(r.jsx)("a",{href:j,children:"Login with Spotify"})]})},u=s(3),b=Object(n.createContext)(),m=s(88),O=s(90),h=s(91),x=s(92),p=s(99),v=function(){var e=Object(n.useContext)(b).user;return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("h2",{className:"heading",children:"Music"}),Object(r.jsxs)("div",{className:"navItems",children:[Object(r.jsx)(i.c,{exact:!0,activeClassName:"navItemActive",className:"navItem",to:"/",children:Object(r.jsxs)("p",{className:"navLink",children:[" ",Object(r.jsx)(m.a,{className:"navIcons"}),"Home"]})}),Object(r.jsx)(i.c,{exact:!0,activeClassName:"navItemActive",className:"navItem",to:"/search",children:Object(r.jsxs)("p",{className:"navLink",children:[" ",Object(r.jsx)(O.a,{className:"navIcons"}),"Search"]})}),Object(r.jsx)(i.c,{exact:!0,activeClassName:"navItemActive",className:"navItem",to:"/playlists",children:Object(r.jsxs)("p",{className:"navLink",children:[" ",Object(r.jsx)(h.a,{className:"navIcons"}),"Playlist"]})}),Object(r.jsx)(i.c,{exact:!0,activeClassName:"navItemActive",className:"navItem",to:"/yourlibrary",children:Object(r.jsxs)("p",{className:"navLink",children:[" ",Object(r.jsx)(x.a,{className:"navIcons"}),"Your Library"]})})]}),e&&Object(r.jsxs)("div",{className:"navUser",children:[Object(r.jsx)(p.a,{className:"avatar"}),Object(r.jsx)("h3",{className:"navUsername",children:e.display_name})]})]})},f=s(93),g=function(e){var t,s=e.cardInfo,n={name:s.name,type:s.type,id:s.id,img:null===(t=s.images[0])||void 0===t?void 0:t.url},c=n.name,a=n.type,l=n.id,o=n.img;return Object(r.jsx)(i.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(a,"/").concat(l)},children:Object(r.jsxs)("div",{className:"infocard",children:[Object(r.jsx)("img",{src:o}),Object(r.jsx)("h4",{children:c}),"playlist"===a?Object(r.jsxs)("p",{children:["By ",s.owner.display_name]}):Object(r.jsx)("p",{children:s.type}),Object(r.jsx)(f.a,{className:"infocardPlayBtn"})]})})},y=function(){var e=Object(n.useContext)(b),t=e.token,s=e.spotifyApi,c=e.getUserPlaylists,a=e.user,l=Object(n.useState)(null),i=Object(u.a)(l,2),o=i[0],j=i[1],d=Object(n.useState)(null),m=Object(u.a)(d,2),O=m[0],h=m[1];return Object(n.useEffect)((function(){null!==t&&(s.getMyTopArtists().then((function(e){j(e)})),c(),s.getNewReleases().then((function(e){console.log(e),h(e.albums)})))}),[t]),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"home scrollable",children:[o&&a&&Object(r.jsxs)("div",{className:"mainContainer scrollable",children:[Object(r.jsxs)("h2",{className:"heading",children:[null===a||void 0===a?void 0:a.display_name,"'s Top Artists"]}),Object(r.jsx)("div",{className:"cardContainer",children:null===o||void 0===o?void 0:o.items.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]}),O&&a&&Object(r.jsxs)("div",{className:"mainContainer scrollable",children:[Object(r.jsx)("h2",{className:"heading",children:"New Releases"}),Object(r.jsx)("div",{className:"cardContainer",children:null===O||void 0===O?void 0:O.items.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]})]})]})},N=s(23),C=s(6),I=s(94),k=function(){var e=Object(n.useContext)(b),t=e.spotifyApi,s=e.user,c=e.userPlaylist,a=e.getUserPlaylists,l=e.setAlert,i=Object(n.useState)(!1),o=Object(u.a)(i,2),j=o[0],d=o[1],m=Object(n.useState)({name:"",description:"",public:!1}),O=Object(u.a)(m,2),h=O[0],x=O[1],p=function(e){return x(Object(C.a)(Object(C.a)({},h),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"mainContainer scrollable",children:[Object(r.jsx)("h2",{className:"heading",children:"Uniquely Yours!"}),Object(r.jsx)("div",{className:"cardContainer",children:c&&c.items.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))}),Object(r.jsxs)("button",{className:"newPlaylistBtn",onClick:function(){d(!0)},children:[Object(r.jsx)(I.a,{className:"newPlaylistBtnIcon"})," New Playlist"]}),Object(r.jsx)("div",{className:"modal ".concat(j?"modalShow":"modalHide"),children:Object(r.jsxs)("div",{className:"modalContent",children:[Object(r.jsx)("button",{className:"modalClose",onClick:function(){return d(!j)},children:"\xd7"}),Object(r.jsxs)("form",{action:"#",className:"newPlaylistForm",children:[Object(r.jsx)("label",{htmlFor:"playlistName",children:"Name "}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"playlistName",name:"name",onChange:p,value:h.name,required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"playlistDescription",children:"Description "}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{type:"text",id:"playlistDescription",name:"description",onChange:p,value:h.description}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"public",children:"Public "}),Object(r.jsx)("input",{type:"radio",id:"public",name:"playlistType",onChange:function(e){return x(Object(C.a)(Object(C.a)({},h),{},{public:!h.public}))},checked:h.public}),Object(r.jsx)("span",{className:"inputRadio"}),Object(r.jsx)("label",{htmlFor:"private",children:"Private "}),Object(r.jsx)("input",{type:"radio",id:"private",name:"playlistType",onChange:function(e){return x(Object(C.a)(Object(C.a)({},h),{},{public:!h.public}))},checked:!h.public}),Object(r.jsx)("span",{className:"inputRadio"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(e){!function(e){e.preventDefault(),console.log(h),t.createPlaylist(null===s||void 0===s?void 0:s.id,{name:h.name,description:h.description,public:h.public}).then((function(e){console.log(e),l("Playlist created"),a()}))}(e),d(!1)},children:"Make Playlist"})]})]})})]})]})},S=s(29),T=s.n(S);var A=s(95),P=s(96),w=function(e){var t,s,c,a=e.songInfo,l=e.setSomething,i=e.currPlaylistId,o=Object(n.useContext)(b),j=o.spotifyApi,d=o.getTime,u=o.userPlaylist,m=o.setAlert,O={id:a.id,trackName:a.name,duration:a.duration_ms,img:null===(t=a.album)||void 0===t||null===(s=t.images[0])||void 0===s?void 0:s.url,artists:a.artists.map((function(e){return e.name}))};return Object(r.jsxs)("div",{className:"songInfo",children:[Object(r.jsx)("img",{className:"songImg",src:O.img,alt:""}),Object(r.jsxs)("div",{className:"songName",children:[O.trackName,Object(r.jsx)("br",{}),null===(c=O.artists)||void 0===c?void 0:c.map((function(e){return Object(r.jsx)("small",{children:e},e)}))]}),Object(r.jsx)("div",{className:"songDuration",children:d(O.duration)}),Object(r.jsx)(A.a,{className:"songLikeBtn"}),Object(r.jsxs)("div",{className:"dropup",children:[Object(r.jsx)(P.a,{className:"songAddToPlaylist"}),Object(r.jsx)("div",{className:"dropupContent",children:null===u||void 0===u?void 0:u.items.map((function(e){return Object(r.jsx)(n.Fragment,{children:e.id===i?Object(r.jsxs)("button",{className:"removeFromPlaylistButton",onClick:function(){return e=i,t=["spotify:track:".concat(O.id)],console.log("removing...."),void j.removeTracksFromPlaylist(e,t).then((function(e){l(e),m("Song removed from the playlist"),console.log("song removed")}));var e,t},children:[Object(r.jsx)("small",{children:"Remove From"}),Object(r.jsx)("br",{}),e.name]}):Object(r.jsxs)("button",{onClick:function(){return t=e.id,s=["spotify:track:".concat(O.id)],console.log("Adding song to playlist ..."),void j.addTracksToPlaylist(t,s).then((function(e){console.log("song added"),m("Song added to playlist")}));var t,s},children:[Object(r.jsx)("small",{children:"Add to"}),Object(r.jsx)("br",{}),e.name]})},e.id)}))})]})]})},E=function(){var e,t,s,c,a,l=Object(n.useContext)(b).spotifyApi,i=Object(n.createRef)(),o=Object(n.useState)(""),j=Object(u.a)(o,2),d=j[0],m=j[1],h=Object(n.useState)(null),x=Object(u.a)(h,2),p=x[0],f=x[1],y=Object(n.useState)(null),N=Object(u.a)(y,2),C=N[0],I=N[1];return Object(n.useEffect)((function(){l.getCategories({offset:0,country:"IN"}).then((function(e){console.log(e),f(e.categories)}),(function(e){console.log("Something went wrong!",e)}))}),[]),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"search scrollable",ref:i,children:[Object(r.jsx)("div",{className:"searchHeader",children:Object(r.jsxs)("form",{action:"#",children:[Object(r.jsx)("button",{className:"searchBtn",onClick:function(e){return function(e){e.preventDefault(),console.log("Searching for ".concat(d)),l.search(d,["track","artist","playlist","album"],{limit:10}).then((function(e){console.log(e),I(e)}))}(e)},children:Object(r.jsx)(O.a,{className:"searchIcon"})}),Object(r.jsx)("input",{type:"search",value:d,onChange:function(e){m(e.target.value)},placeholder:"Search"})]})}),C&&Object(r.jsxs)(n.Fragment,{children:[C.tracks&&Object(r.jsxs)("div",{className:"songs",children:[Object(r.jsx)("h2",{className:"heading",children:"Songs"}),Object(r.jsx)("div",{className:"songsList",children:C&&(null===(e=C.tracks.items)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)(w,{songInfo:e},e.id)})))})]}),C.artists&&Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)("h2",{className:"heading",children:"Artists"}),Object(r.jsx)("div",{className:"cardContainer",children:null===(t=C.artists.items)||void 0===t?void 0:t.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]}),C.playlists&&Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)("h2",{className:"heading",children:"Playlists"}),Object(r.jsx)("div",{className:"cardContainer",children:null===(s=C.playlists.items)||void 0===s?void 0:s.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]}),C.albums&&Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)("h2",{className:"heading",children:"Albums"}),Object(r.jsx)("div",{className:"cardContainer",children:null===(c=C.albums.items)||void 0===c?void 0:c.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]})]}),p&&Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)("h2",{className:"heading",children:"Search by Category"}),Object(r.jsx)("div",{className:"categoryCardContainer",children:null===p||void 0===p||null===(a=p.items)||void 0===a?void 0:a.map((function(e){return Object(r.jsxs)("div",{className:"categoryCard",onClick:function(){return t=e.id,console.log("Getting Category playlist ..."),i.current.scrollTo({top:0,behavior:"smooth"}),void l.getCategoryPlaylists(t).then((function(e){console.log(e),I(e)}));var t},children:[Object(r.jsx)("img",{src:e.icons[0].url,alt:""}),Object(r.jsx)("p",{children:e.name})]},e.id)}))})]})]})]})},F=s(97),_=s(98),L=function(){var e,t,s,c,a,l=Object(o.f)(),i=l.id,j=l.type,d=Object(n.useContext)(b),m=d.spotifyApi,O=d.formatNumber,h=d.user,x=d.getUserPlaylists,p=Object(n.useState)("something"),f=Object(u.a)(p,2),g=f[0],y=f[1],N=Object(n.useState)(null),C=Object(u.a)(N,2),I=C[0],k=C[1],S=Object(n.useState)(null),T=Object(u.a)(S,2),A=T[0],P=T[1],E=Object(n.useState)(null),L=Object(u.a)(E,2),R=L[0],U=L[1],M=Object(n.useState)(null),B=Object(u.a)(M,2),H=B[0],D=B[1],Y=Object(n.useState)("Follow"),G=Object(u.a)(Y,2),K=G[0],$=G[1],q=Object(n.useState)(!1),J=Object(u.a)(q,2),V=J[0],Z=J[1],z=Object(n.useState)(!1),Q=Object(u.a)(z,2),W=Q[0],X=Q[1],ee=function(){V?m.removeFromMySavedAlbums(["".concat(i)]).then((function(){Z(!1)})):m.addToMySavedAlbums(["".concat(i)]).then((function(){Z(!0)}))},te=function(){W?m.unfollowPlaylist(i).then((function(){X(!1)})):m.followPlaylist(i).then((function(){X(!0)})),x()};return Object(n.useEffect)((function(){"playlist"===j&&(console.log("playlist"),console.log("getting songs from playlist..."),m.getPlaylistTracks(i).then((function(e){console.log(e.items),k(e.items)})),m.getPlaylist(i).then((function(e){console.log(e),P(e)})),m.areFollowingPlaylist(i,["".concat(h.id)]).then((function(e){!1===!e[0]?X(!0):X(!1)}))),"artist"===j&&(console.log("Getting artist's songs ..."),m.getArtistTopTracks(i,"IN").then((function(e){console.log(e.tracks),k(e.tracks)})),m.getArtist(i).then((function(e){console.log(e),U(e)})),m.isFollowingArtists(["".concat(i)]).then((function(e){!1===!e[0]&&$("Unfollow")}))),"album"===j&&(console.log("Getting album songs ..."),m.getAlbumTracks(i).then((function(e){console.log(e.items),k(e.items)})),m.getAlbum(i).then((function(e){console.log(e),D(e)})),m.containsMySavedAlbums(["".concat(i)]).then((function(e){!0===e[0]&&Z(!0)})))}),[g]),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"songs scrollable",children:[A&&Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("div",{className:"songsHeading",children:[Object(r.jsx)("img",{src:null===(e=A.images[0])||void 0===e?void 0:e.url,alt:""}),Object(r.jsxs)("div",{className:"songsHeadingInfo",children:[Object(r.jsx)("p",{children:A.type}),Object(r.jsx)("h2",{className:"heading",children:A.name}),Object(r.jsx)("p",{children:A.description}),Object(r.jsxs)("p",{children:["By ",A.owner.display_name]}),Object(r.jsxs)("p",{children:["Total Tracks ",A.tracks.total]})]})]}),A.owner.id!==h.id&&Object(r.jsx)(n.Fragment,{children:W?Object(r.jsx)(F.a,{className:"favBtn",onClick:te}):Object(r.jsx)(_.a,{className:"favBtn",onClick:te})})]}),R&&Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("div",{className:"songsHeading",children:[Object(r.jsx)("img",{src:null===(t=R.images[0])||void 0===t?void 0:t.url,alt:""}),Object(r.jsxs)("div",{className:"songsHeadingInfo",children:[Object(r.jsx)("p",{children:R.type}),Object(r.jsx)("h2",{className:"heading",children:R.name}),Object(r.jsxs)("p",{children:["Followers : ",O(R.followers.total)]}),R.genres.length>0&&Object(r.jsxs)("p",{children:["Genres:"," ",null===(s=R.genres)||void 0===s?void 0:s.map((function(e){return Object(r.jsx)("small",{children:e},e)}))]})]})]}),Object(r.jsx)("button",{className:"glowBtn",onClick:function(){"Follow"===K?m.followArtists(["".concat(i)]).then((function(){$("Unfollow")})):m.unfollowArtists(["".concat(i)]).then((function(){$("Follow")}))},children:K})]}),H&&Object(r.jsxs)(n.Fragment,{children:[Object(r.jsxs)("div",{className:"songsHeading",children:[Object(r.jsx)("img",{src:null===(c=H.images[0])||void 0===c?void 0:c.url,alt:""}),Object(r.jsxs)("div",{className:"songsHeadingInfo",children:[Object(r.jsx)("p",{children:H.album_type}),Object(r.jsx)("h2",{className:"heading",children:H.name}),Object(r.jsxs)("p",{children:["Label : ",H.label]}),Object(r.jsxs)("p",{children:[H.total_tracks," songs"]}),H.artists.length>0&&Object(r.jsxs)("p",{children:["Artists:"," ",null===(a=H.artists)||void 0===a?void 0:a.map((function(e){return Object(r.jsx)("small",{children:e.name},e.id)}))]})]})]}),V?Object(r.jsx)(F.a,{className:"favBtn",onClick:ee}):Object(r.jsx)(_.a,{className:"favBtn",onClick:ee})]}),Object(r.jsx)("div",{className:"songsList",children:"playlist"===j?Object(r.jsx)(n.Fragment,{children:null===I||void 0===I?void 0:I.map((function(e){return Object(r.jsx)(w,{songInfo:e.track,currPlaylistId:i,setSomething:y},e.track.id)}))}):Object(r.jsx)(n.Fragment,{children:null===I||void 0===I?void 0:I.map((function(e){return Object(r.jsx)(w,{songInfo:e,currPlaylistId:i,setTracks:null},e.id)}))})})]})]})},R=function(){var e,t,s=Object(n.useContext)(b),c=s.spotifyApi,a=s.userPlaylist,l=s.user,i=Object(n.useState)(null),o=Object(u.a)(i,2),j=o[0],d=o[1],m=Object(n.useState)(null),O=Object(u.a)(m,2),h=O[0],x=O[1],p=Object(n.useState)(null),f=Object(u.a)(p,2),y=f[0],N=f[1];return Object(n.useEffect)((function(){c.getMySavedAlbums().then((function(e){console.log(e),d(e)})),c.getFollowedArtists().then((function(e){console.log(e),x(e.artists)})),c.getMyTopTracks().then((function(e){N(e.items)}))}),[]),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"library scrollable",children:[j&&Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)("h2",{className:"heading",children:"Albums"}),Object(r.jsx)("div",{className:"cardContainer",children:null===(e=j.items)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)(g,{cardInfo:e.album},e.album.id)}))})]}),h&&Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)("h2",{className:"heading",children:"Artists"}),Object(r.jsx)("div",{className:"cardContainer",children:null===(t=h.items)||void 0===t?void 0:t.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]}),a&&Object(r.jsxs)("div",{className:"mainContainer",children:[Object(r.jsx)("h2",{className:"heading",children:"Playlists"}),Object(r.jsx)("div",{className:"cardContainer",children:a&&a.items.map((function(e){return Object(r.jsx)(g,{cardInfo:e},e.id)}))})]}),y&&l&&Object(r.jsxs)("div",{className:"songs scrollable",children:[Object(r.jsxs)("h2",{className:"heading",children:[null===l||void 0===l?void 0:l.display_name,"'s Top Tracks"]}),Object(r.jsx)("div",{className:"songsList",children:null===y||void 0===y?void 0:y.map((function(e){return Object(r.jsx)(w,{songInfo:e,setTracks:null},e.id)}))})]})]})]})},U=function(){var e=Object(n.useContext)(b).alerts;return console.log(e),Object(r.jsx)(n.Fragment,{children:e&&Object(r.jsx)("div",{className:"alert",children:null===e||void 0===e?void 0:e.msg})})},M=new URLSearchParams(window.location.search).get("code");var B=function(){var e=function(e){var t=Object(n.useState)(),s=Object(u.a)(t,2),c=s[0],a=s[1],l=Object(n.useState)(),i=Object(u.a)(l,2),o=i[0],r=i[1],j=Object(n.useState)(),d=Object(u.a)(j,2),b=d[0],m=d[1];return Object(n.useEffect)((function(){T.a.post("/api/login",{code:e}).then((function(e){a(e.data.accessToken),r(e.data.refreshToken),m(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),[e]),Object(n.useEffect)((function(){if(o&&b){var e=setInterval((function(){T.a.post("/api/refresh",{refreshToken:o}).then((function(e){a(e.data.accessToken),m(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(b-60));return function(){return clearInterval(e)}}}),[o,b]),c}(M),t=Object(n.useContext)(b).setToken;return Object(n.useEffect)((function(){e&&t(e)}),[e]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(U,{}),M?Object(r.jsx)(i.a,{children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/:type/:id",component:L}),Object(r.jsx)(o.a,{exact:!0,path:"/:type/:id",component:L}),Object(r.jsx)(o.a,{exact:!0,path:"/search",component:E}),Object(r.jsx)(o.a,{exact:!0,path:"/yourlibrary",component:R}),Object(r.jsx)(o.a,{exact:!0,path:"/playlists",component:k}),Object(r.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(r.jsx)(o.a,{path:"*",component:y})]})}):Object(r.jsx)(d,{})]})},H=function(e,t){switch(t.type){case"SET_USER":return console.log(t.payload),Object(C.a)(Object(C.a)({},e),{},{user:t.payload});case"SET_TOKEN":return console.log(t.payload),Object(C.a)(Object(C.a)({},e),{},{token:t.payload});case"INITIALIZE_SPOTIFY_API":return Object(C.a)(Object(C.a)({},e),{},{spotifyApi:t.payload});case"SET_USER_PLAYLISTS":return console.log(t.payload),Object(C.a)(Object(C.a)({},e),{},{userPlaylist:t.payload});case"SET_ALERT":return console.log("action.payload"),Object(C.a)(Object(C.a)({},e),{},{alerts:t.payload});case"REMOVE_ALERT":return Object(C.a)(Object(C.a)({},e),{},{alerts:null});default:return e}},D=s(44),Y=s.n(D),G=function(e){var t={spotifyApi:null,token:null,loading:!1,user:null,userPlaylist:null,alerts:null},s=Object(n.useReducer)(H,t),c=Object(u.a)(s,2),a=c[0],l=c[1],i=new Y.a,o=function(){console.log("Getting User ..."),i.getMe().then((function(e){l({type:"SET_USER",payload:e})}))};return Object(r.jsx)(b.Provider,{value:{token:a.token,spotifyApi:a.spotifyApi,loading:a.loading,user:a.user,userPlaylist:a.userPlaylist,alerts:a.alerts,getTime:function(e){var t=(e/1e3).toFixed(0),s=Math.floor(t/60),n="";return s>59&&(s=(s-=60*(n=(n=Math.floor(s/60))>=10?n:"0"+n))>=10?s:"0"+s),t=(t=Math.floor(t%60))>=10?t:"0"+t,""!==n?n+":"+s+":"+t:s+":"+t},setToken:function(e){i.setAccessToken(e),l({type:"SET_TOKEN",payload:e}),l({type:"INITIALIZE_SPOTIFY_API",payload:i}),o()},getUser:o,getUserPlaylists:function(){var e;console.log("getting user playlist..."),i.getUserPlaylists(null===(e=t.user)||void 0===e?void 0:e.id).then((function(e){l({type:"SET_USER_PLAYLISTS",payload:e})}))},setAlert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3;l({type:"SET_ALERT",payload:{msg:e}}),setTimeout((function(){return l({type:"REMOVE_ALERT"})}),t)},formatNumber:function(e){if(e<1e3)return e;var t,s=[{v:1e3,s:"K"},{v:1e6,s:"M"},{v:1e9,s:"B"},{v:1e12,s:"T"},{v:1e15,s:"P"},{v:1e18,s:"E"}];for(t=s.length-1;t>0&&!(e>=s[t].v);t--);return(e/s[t].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+s[t].s}},children:e.children})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{children:Object(r.jsx)(B,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a053912d.chunk.js.map