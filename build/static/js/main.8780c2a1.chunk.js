(this["webpackJsonpreact-router-app"]=this["webpackJsonpreact-router-app"]||[]).push([[0],{140:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/media/logo.0df96699.png"},207:function(e,t,a){e.exports=a(434)},213:function(e,t,a){},214:function(e,t,a){},231:function(e,t,a){},346:function(e,t,a){var n={"./image_four_edited.jpg":347,"./image_one_edited.jpg":348,"./image_three_edited.jpg":349,"./image_two_edited.jpg":350};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=346},347:function(e,t,a){e.exports=a.p+"static/media/image_four_edited.1a7039e9.jpg"},348:function(e,t,a){e.exports=a.p+"static/media/image_one_edited.d7225335.jpg"},349:function(e,t,a){e.exports=a.p+"static/media/image_three_edited.385820a1.jpg"},350:function(e,t,a){e.exports=a.p+"static/media/image_two_edited.5376ae89.jpg"},351:function(e,t,a){e.exports=a.p+"static/media/thomas.7bb861e7.png"},352:function(e,t,a){e.exports=a.p+"static/media/florin.3ed958aa.png"},353:function(e,t,a){e.exports=a.p+"static/media/ryuu.3ed958aa.png"},354:function(e,t,a){},355:function(e,t,a){e.exports=a.p+"static/media/map.1e07fa66.png"},356:function(e,t,a){},357:function(e,t,a){},375:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},432:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),s=a(31),i=(a(212),a(11)),l=a(12),u=a(14),m=a(13),p=a(15),h=a(40),d=a(437),f=a(438),g=(a(213),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"About page")}}]),t}(r.a.PureComponent)),y=(a(214),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Home page")}}]),t}(r.a.PureComponent)),b=(a(140),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Articles page")}}]),t}(r.a.PureComponent)),E=a(48),v=a.n(E),C=(a(231),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).convertHandler=function(){a.props.fromCurrency!==a.props.toCurrency?v.a.get("https://api.exchangeratesapi.io/latest?base=".concat(a.props.fromCurrency,"&symbols=").concat(a.props.toCurrency)).then((function(e){var t=a.state.amount*e.data.rates[a.props.toCurrency];a.setState({result:Intl.NumberFormat({style:"currency",currency:a.props.toCurrency}).format(t.toFixed(2))})})).catch((function(e){console.log("Oppsies",e.message)})):a.setState({result:"Nani! Why would you convert the same currency?"})},a.selectHandler=function(e){"from"===e.target.name&&e.target.value!==a.state.fromCurrency?a.props.updateFromCurrency(e.target.value):"to"===e.target.name&&e.target.value!==a.state.toCurrency&&a.props.updateToCurrency(e.target.value)},a.state={result:null,amount:100,toCurrency:e.toCurrency,fromCurrency:e.fromCurrency},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.fromCurrency!==this.state.fromCurrency&&this.setState({fromCurrency:this.props.fromCurrency}),e.toCurrency!==this.state.toCurrency&&this.setState({toCurrency:this.props.toCurrency})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Converter"},r.a.createElement("h2",null,r.a.createElement("span",null,"Currency"),"Converter",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb5")),r.a.createElement("div",{className:"From"},r.a.createElement("input",{name:"amount",type:"text",value:this.state.amount,onChange:function(t){return e.setState({amount:t.target.value})}}),r.a.createElement("select",{name:"from",onChange:function(t){return e.selectHandler(t)},value:this.props.fromCurrency},this.props.currencies.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("select",{name:"to",onChange:function(t){return e.selectHandler(t)},value:this.props.toCurrency},this.props.currencies.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("button",{onClick:this.convertHandler},"Convert"),this.state.result&&r.a.createElement("h3",null,this.state.result)))}}]),t}(r.a.Component)),j=a(134),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getPrevDate=function(e){var t=e.slice(0,4),a=parseInt(t);a--;var n=e.replace(t,a.toString());console.log(n+" to "+e)},a.state={toCurrency:a.props.toCurrency,fromCurrency:a.props.fromCurrency,latestDate:"",prevDate:"",historicalDates:[],historicalValues:[],latestValues:[],historyData:{},chartData:{},charLegends:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getLatestData(),this.setState({prevDate:this.getPrevDate(this.state.latestDate)}),this.getHistoryData()}},{key:"componentDidUpdate",value:function(e){e.fromCurrency!==this.props.fromCurrency&&(this.setState({fromCurrency:this.props.fromCurrency}),this.getHistoryData(),this.getLatestData()),e.toCurrency!==this.props.toCurrency&&(this.setState({toCurrency:this.props.toCurrency}),this.getHistoryData())}},{key:"getHistoryData",value:function(){var e=this;v.a.get("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=".concat(this.state.latestDate,"&base=").concat(this.state.toCurrency,"&symbols=").concat(this.state.fromCurrency)).then((function(t){var a=[],n=[];for(var r in t.data.rates)a.push(r),n.push(t.data.rates[r][e.state.fromCurrency]);e.setState({historicalDates:a,historicalValues:n}),e.setHistoricalData()})).catch((function(e){console.log("oppps history api error",e)}))}},{key:"setHistoricalData",value:function(){this.setState({historyData:{labels:this.state.historicalDates,datasets:[{label:"Value",data:this.state.historicalValues,backgroundColor:["rgba(255, 99, 132, 0.6)"]}]}})}},{key:"getLatestData",value:function(){var e=this;v.a.get("https://api.exchangeratesapi.io/latest?base=".concat(this.state.fromCurrency)).then((function(t){var a=[];for(var n in t.data.rates)"EUR"===n&&"EUR"===e.state.fromCurrency?a.push(1):a.push(t.data.rates[n]);e.setState({latestDate:t.data.date,latestValues:a,charLegends:e.props.currencies}),e.setChartData()}))}},{key:"setChartData",value:function(){this.setState({chartData:{labels:this.state.charLegends,datasets:[{label:"Value",data:this.state.latestValues,backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)"]}]}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"chart"},r.a.createElement(j.a,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Currency exchange based on "+this.state.fromCurrency+" as of "+this.state.latestDate,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}),r.a.createElement(j.b,{data:this.state.historyData,options:{title:{display:this.props.displayTitle,text:"Currency history of "+this.state.fromCurrency+" against "+this.state.toCurrency,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),t}(n.Component);O.defaultProps={displayTitle:!0,displayLegend:!1,legendPosition:"right"};var k=O,N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onNewToCurrency=function(e){a.state.toCurrency!==e&&a.setState({toCurrency:e})},a.onNewFromCurrency=function(e){a.state.fromCurrency!==e&&a.setState({fromCurrency:e})},a.state={toCurrency:"PHP",fromCurrency:"JPY",currencies:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.exchangeratesapi.io/latest?base=".concat(this.state.fromCurrency)).then((function(t){var a=[];for(var n in t.data.rates)a.push(n);e.setState({currencies:a})})).catch((function(e){console.log("oppps",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,{toCurrency:this.state.toCurrency,fromCurrency:this.state.fromCurrency,currencies:this.state.currencies,updateFromCurrency:this.onNewFromCurrency,updateToCurrency:this.onNewToCurrency}),r.a.createElement(k,{toCurrency:this.state.toCurrency,fromCurrency:this.state.fromCurrency,currencies:this.state.currencies}))}}]),t}(r.a.Component),w=function(){var e=Object(h.g)().id;return console.log(e),r.a.createElement("h1",null,"Article ID: ",e)},D=a(3),S=a(189),x=a.n(S),_=(a(88),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:a(165),alt:"logo",title:"logo",className:"header-logo"})))}),L=function(){return r.a.createElement("footer",{className:D("footer","footer-position")},r.a.createElement("p",{className:D("footer-brand","footer-brand-size")},"Sotheby's International Realty\xae and the Sotheby's International Realty Logo are service marks licensed to Sotheby's International Realty Affiliates LLC and used with permission. List Sotheby's International Realty fully supports the principles of the Fair Housing Act and the Equal Opportunity Act. Each franchise is independently owned and operated. Any services or products provided by independently owned and operated franchisees are not provided by, affiliated with or related to Sotheby's International Realty Affiliates LLC nor any of its affiliated companies. If your property is listed with a real estate broker, please disregard. It is not our intention to solicit the offerings of other real estate brokers."),r.a.createElement("img",{src:a(165),alt:"logo",title:"logo",className:"footer-logo"}))},A=a(436),I=["image_one","image_two","image_three","image_four"],H=function(){return r.a.createElement(A.a,{dotPosition:"top",autoplay:!0,arrows:!0,className:"carousel"},I.map((function(e,t){return r.a.createElement("img",{key:t,src:a(346)("./".concat(e,"_edited.jpg")),alt:"".concat(t+1),title:"".concat(t+1),className:"carousel-img"})})))},P=[{lastname:"ALUNNI",firstname:"Thomas",photo:a(351)},{lastname:"MAVROIAN",firstname:"Florin",photo:a(352)},{lastname:"SENDA",firstname:"Ryuunosuke",photo:a(353)}],T=function(){return P.map((function(e){return r.a.createElement("div",{className:D("team-card","team-card-space")},r.a.createElement("img",{className:"team-card-photo",src:e.photo,alt:e.firstname}),r.a.createElement("span",null,e.lastname),r.a.createElement("span",null,e.firstname))}))},F=(a(354),function(){return r.a.createElement("div",{className:"Thomas"},r.a.createElement(_,null),r.a.createElement("div",{className:"main"},r.a.createElement(H,null),r.a.createElement("div",{className:D("parallax","city-height")},r.a.createElement("div",{className:"mask"})),r.a.createElement("div",{className:D("contact","contact-position")},r.a.createElement("div",{style:{padding:20,fontSize:20,fontWeight:"bold"}},r.a.createElement("p",null,"+81 45 671 1195"),r.a.createElement("p",null,"Morinaga Plaza Main Building 2F,",r.a.createElement("br",null),"5-33-1 Shiba, Minato-ku, Tokyo, 108 - 0014")),r.a.createElement("img",{src:a(355),alt:"map",className:D("map-img","map-size")})),r.a.createElement("div",{className:D("team","team-position")},r.a.createElement(T,null))),r.a.createElement(L,null),r.a.createElement(x.a,null))}),R=a(51),M=a.n(R),V=(a(356),function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"#section",className:"sd"},r.a.createElement("img",{className:"down-arrow-image",alt:"down arrow",src:"./down_arrow.png"})))}),z=(a(357),a(192)),U=a.n(z),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleScrollCallback=function(e){window.scrollY>0&&M()(".hero, .content,.hero-inner").addClass("scrolled")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){M()(".sd").click((function(){M()(".hero, .content").addClass("scrolled")})),M()(window).on("scroll",(function(){0===M()(window).scrollTop()&&M()(".hero, .content").removeClass("scrolled")}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"hero"},r.a.createElement(U.a,{handleScrollCallback:this.handleScrollCallback}),r.a.createElement("div",{className:"hero-inner"},r.a.createElement("div",{className:"hero-title"},r.a.createElement("h1",{className:"text-light title font-2"},"List Sothebys"),r.a.createElement("p",{className:"text-capitalize text-light"},"here starts awesomeness")),r.a.createElement(V,null))),r.a.createElement("section",{id:"section"}," "),r.a.createElement("div",{className:"content clearfix"},r.a.createElement("div",{className:"container",style:{paddingTop:"60px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h2",{className:"text-uppercase"},"Tomato Ramen"),r.a.createElement("p",{className:"font-alt"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatibus molestia!")),r.a.createElement("div",{className:"col-md-7"},r.a.createElement("p",{style:{paddingTop:" 47px"}},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam earum eos corporis totam vel, eaque sapiente officiis sint culpa inventore blanditiis hic cupiditate illo nam assumenda reprehenderit suscipit dolorum.")))),r.a.createElement("div",{className:"container",style:{height:"100vh"}})))}}]),t}(n.Component),W=(a(375),a(79)),J=a(105),q=a(52),Y=function(){return r.a.createElement(W.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(W.a.Brand,{className:"logo-brand",href:"#home"},r.a.createElement("img",{alt:"",src:"./logo-light.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","LSIR Landing Page"),r.a.createElement(W.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(W.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(J.a,{className:"nav-container"},r.a.createElement(J.a.Link,{href:"#home"},"Home"),r.a.createElement(J.a.Link,{href:"#link"},"Link"),r.a.createElement(q.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(q.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(q.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(q.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(q.a.Divider,null),r.a.createElement(q.a.Item,{href:"#action/3.4"},"Separated link")))))},K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(B,null))}}]),t}(r.a.PureComponent),Q=(a(379),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"404 - No page here!")}}]),t}(r.a.PureComponent)),$=(a(380),d.a.Header),G=d.a.Content,X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).disableHeader=function(){return!("/thomas"===a.props.location.pathname||"/fpage"===a.props.location.pathname)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{style:{minHeight:"100vh"}},this.disableHeader()&&r.a.createElement($,{style:{background:"#fff",padding:0}},r.a.createElement(f.a,{theme:"dark",mode:"horizontal",selectedKeys:[this.props.location.pathname],style:{lineHeight:"64px"}},r.a.createElement(f.a.Item,{className:"App-menu-item",key:"/"},r.a.createElement("span",null,"Home"),r.a.createElement(s.b,{to:"/"})),r.a.createElement(f.a.Item,{className:"App-menu-item",key:"/articles"},r.a.createElement("span",null,"Articles"),r.a.createElement(s.b,{to:"/articles"})),r.a.createElement(f.a.Item,{className:"App-menu-item",key:"/about"},r.a.createElement("span",null,"About"),r.a.createElement(s.b,{to:"/about"})),r.a.createElement(f.a.Item,{className:"App-menu-item",key:"/thomas"},r.a.createElement("span",null,"Thomas"),r.a.createElement(s.b,{to:"/thomas"})),r.a.createElement(f.a.Item,{className:"App-menu-item",key:"/fpage"},r.a.createElement("span",null,"Florin"),r.a.createElement(s.b,{to:"/fpage"})))),r.a.createElement(G,{className:"App"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/about"},r.a.createElement(g,null)),r.a.createElement(h.b,{path:"/articles"},r.a.createElement(b,null)),r.a.createElement(h.b,{path:"/article/currency"},r.a.createElement(N,null)),r.a.createElement(h.b,{path:"/article/:id"},r.a.createElement(w,null)),r.a.createElement(h.a,{from:"/article/",to:"/articles"}),r.a.createElement(h.b,{path:"/fpage"},r.a.createElement(K,null)),r.a.createElement(h.b,{path:"/thomas"},r.a.createElement(F,null)),r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(h.b,{path:"*"},r.a.createElement(Q,null)))))}}]),t}(r.a.PureComponent),Z=Object(h.h)(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(432),a(433);c.a.render(r.a.createElement(s.a,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){}},[[207,1,2]]]);
//# sourceMappingURL=main.8780c2a1.chunk.js.map