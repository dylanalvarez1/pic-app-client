webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(e){n("v4eS")},null,null).exports,r=n("/ocq"),i=n("Xxa5"),l=n.n(i),c=n("exGp"),u=n.n(c),p=n("dqTT"),d=n.n(p),m={name:"HomePage",props:["lon","lat"],data:function(){return{file:void 0,user:"dog",googleSignInParams:{client_id:"1069940581127-a38qeig8qq49angii20uif9nfqb5sfc1.apps.googleusercontent.com"}}},methods:{onSignInSuccess:function(e){},onSignInError:function(e){console.log("OH NOES",e)},myFunction:function(){},requestImage:function(e){var t=this;return u()(l.a.mark(function n(){var a,o,s;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:(a=new XMLHttpRequest).onreadystatechange=function(){4==a.readyState&&200==a.status&&t.processRequest(a.responseText)},o="https://api.imgur.com/3/image",s="bf6ae890fb73e6b",a.open("POST",o,!0),a.setRequestHeader("Authorization","Client-ID "+s),a.send(e);case 7:case"end":return n.stop()}},n,t)}))()},processRequest:function(e){var t=this;if("Not found"==e)console.log("Imgur album not found.");else{var n=JSON.parse(e).data.link;console.log(n);var a="http://localhost:3000/users/"+this.user+"?url="+n+"&lon="+this.lon+"&lat="+this.lat;console.log(a);var o=new XMLHttpRequest;o.open("PUT",a,!0),o.responseType="text",console.log("Request about to onload"),o.onload=function(){console.log("in onload for update image xmlhttpr"),o.readyState===o.DONE&&200===o.status&&(console.log("trying to add marker to map after image upload"),t.$emit("addedmarker"))},o.send(null)}},inputHandler:function(e){this.file=e.target.files[0],console.log("File has been changed"),this.requestImage(this.file)}},components:{}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-inverse"},[n("div",{staticClass:"container-fluid"},[e._m(0),e._v(" "),n("ul",{staticClass:"nav navbar-nav navbar-right"},[n("li",[n("g-signin-button",{attrs:{params:e.googleSignInParams},on:{success:e.onSignInSuccess,error:e.onSignInError}},[e._v("\n            Sign in\n          ")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:e.myFunction}},[n("span",{staticClass:"glyphicon glyphicon-user"}),e._v(" Sign Out")])]),e._v(" "),n("li",[n("a",[n("div",{staticClass:"custom-file"},[n("input",{staticClass:"custom-file-input",staticStyle:{display:"none"},attrs:{type:"file",id:"inputGroupFile02"},on:{change:function(t){e.inputHandler(t)}}}),e._v(" "),e._m(1)])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"navbar-header"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[this._v("PicMap")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"custom-file-label",attrs:{for:"inputGroupFile02"}},[t("span",{staticClass:"glyphicon glyphicon-upload"}),this._v(" Choose file ")])}]};var h=n("VU/8")(m,f,!1,function(e){n("f0vS")},"data-v-55d3907e",null).exports,g={name:"HomePage",data:function(){return{users:[],lon:void 0,lat:void 0,map:void 0}},components:{Mapbox:d.a,CustomNav:h},methods:{loadmap:function(e){var t=this;return u()(l.a.mark(function n(){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new XMLHttpRequest).open("GET","http://localhost:3000/users/",!0),a.responseType="json",a.onload=function(){a.readyState===a.DONE&&200===a.status&&(console.log(a.response),this.users=a.response,this.users.forEach(function(t){t.photos.forEach(function(t){console.log(t.url);var n=document.createElement("div").classList.add("marker");new mapboxgl.Marker(n).setLngLat([t.coordinates.longitude,t.coordinates.latitude]).setPopup(new mapboxgl.Popup({offset:25}).setHTML("<img src="+t.url+' alt="" height="84" width="84">')).addTo(e)})}))},t.next=6,a.send(null);case 6:case"end":return t.stop()}},n,t)}))()},addedMarker:function(){console.log("heard the addedMarker event from nav, passing it to root so that child (map) can hear it"),this.loadmap(this.map)},mapLoaded:function(e){this.map=e,this.loadmap(e),console.log("Map: "),console.log(e)},mapClicked:function(e,t){this.lon=t.lngLat.toArray()[0],this.lat=t.lngLat.toArray()[1],console.log(this.lon+", "+this.lat)},requestImage:function(e){var t=this;return u()(l.a.mark(function n(){var a,o,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(a=new XMLHttpRequest).onreadystatechange=function(){4==a.readyState&&200==a.status&&processRequest(a.responseText)},o="https://api.imgur.com/3/image",s="bf6ae890fb73e6b",a.open("POST",o,!0),a.setRequestHeader("Authorization","Client-ID "+s),a.send(e);case 7:case"end":return t.stop()}},n,t)}))()},processRequest:function(e){if("Not found"==e)console.log("Imgur album not found.");else{var t=JSON.parse(e);console.log(t),imageLink=t.data.link,console.log(imageLink)}}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map"},[t("CustomNav",{attrs:{lon:this.lon,lat:this.lat},on:{addedmarker:this.addedMarker}}),this._v(" "),t("mapbox",{ref:"map",attrs:{"access-token":"pk.eyJ1IjoiZHlsYW5hbHZhcmV6MSIsImEiOiJjam4wbjhhdnkxYjVkM3Fyb2luYjhqenZwIn0.XxYiYeuAkCkeBheh1_hYFA","map-options":{style:"mapbox://styles/mapbox/dark-v9",center:[-96,37.8],zoom:3}},on:{"map-load":this.mapLoaded,"map-click":this.mapClicked}})],1)},staticRenderFns:[]};var b=n("VU/8")(g,v,!1,function(e){n("WFYt")},"data-v-40f31ddc",null).exports;a.a.use(r.a);var k=new r.a({routes:[{path:"/",name:"HomePage",component:b}]}),S=n("fSYm"),y=n.n(S);a.a.use(y.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:k,components:{App:s},template:"<App/>"})},WFYt:function(e,t){},f0vS:function(e,t){},v4eS:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fc390b7598e10a20fee0.js.map