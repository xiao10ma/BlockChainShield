(function(){var e={6355:function(e,t,n){let o,r,i,c;
    async function a(e){
        return new Promise((t=>{setTimeout((()=>{
            console.log(`Fetching data for: ${e}`); // 输出请求的键
            fetch("https://xblock.pro/api/cloud/detect?category=Account&pks="+e).then((e=>e.json())).then((n=>{n=n.data,localStorage.setItem("tag",n[e]),console.log(n[e]),t(n[e])})).catch((e=>{console.log(e)}))}),100)}))}
    function s(e){
        return new Promise((t=>{fetch("http://8.134.73.140:60080/get_label_phishing?address="+e).then((e=>e.json())).then((e=>{e.predict_result?(localStorage.setItem("phish",e.predict_result),t(e.predict_result)):(localStorage.setItem("phish",1),t(1))})).catch((e=>(console.log(e),e)))}))}
    function u(e){
        return new Promise((t=>{setTimeout((()=>{fetch("http://8.134.73.140:60080/get_label_ponzi?address="+e).then((e=>e.json())).then((e=>{localStorage.setItem("ponzi",e.predict_result),t(e.predict_result)})).catch((e=>(console.log(e),e)))}),100)}))}
    n(7658);
    let l=1;
    chrome.runtime.onMessage.addListener((
        async function(e,t,n){if(e.name&&(c?(c=!1,n({success:"true"})):n({})),e.selectText){const t=e.selectText;o=await a(t),r=await s(t),i=await u(t),o.push({phish:r,ponzi:i}),console.log(o,r,i),chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,o,(e=>{console.log("from content:",e)}))}))}else{if(e.address){const t=e.address;return localStorage.setItem("address",t),await a(t),await s(t),await u(t),chrome.windows.create({url:chrome.runtime.getURL("pages.html"),type:"popup",top:100,left:1e3,width:350,height:450}),!0}if(e.sign){const e=chrome.windows.create({url:chrome.runtime.getURL("notice.html"),type:"popup",top:100,left:1e3,width:350,height:340});n(e)}else if(e.approve)return await chrome.windows.create({url:chrome.runtime.getURL("approval.html"),type:"popup",top:100,left:1e3,width:350,height:340}),!0}})),
    chrome.runtime.onConnect.addListener((
        function(e){
            "popup"!==e.name&&"notice"!==e.name&&"approval"!==e.name||e.onDisconnect.addListener((function(){console.log("popup has been closed"),c=!0,l=1}))}))}},
            t={};
        function n(o){
            var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}
            n.m=e,
        function(){
            var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<c&&(c=i));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),
        function(){
            n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),
        function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),
        function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),
        function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),
        function(){n.j=352}(),
        function(){var e={352:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],a=o[1],s=o[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var l=s(n)}for(t&&t(o);u<c.length;u++)i=c[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkdemo2"]=self["webpackChunkdemo2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();
        var o=n.O(void 0,[998],(function(){return n(6355)}));o=n.O(o)})();
