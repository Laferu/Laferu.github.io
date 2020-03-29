(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),a=(t("8Kt/"),t("7+CT")),o=t("hUtz"),l=t("YFqc"),c=t.n(l),s=t("h4VS"),u=t("vOnD");function p(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  height: 75px;\n  overflow: hidden;\n  && {\n    margin-top: 30px;\n    margin-bottom: 30px;\n  }\n\n  @media screen and (min-width: 320px) {\n    grid-template-columns: 1fr 2fr;\n  }\n\n  @media screen and (min-width: 425px) {\n    height: 100px;\n    grid-template-columns: 120px 1fr;\n  }\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: 150px 1fr;\n  }\n\n  .title {\n    margin-top: 20px;\n    @media screen and (min-width: 960px) {\n      padding-left: 5px;\n    }\n\n    h1 {\n      font-size: 1.4rem;\n      width: 0;\n      transform: rotateZ(-10deg);\n      margin: 0;\n      margin-bottom: -5px;\n    }\n\n    h2 {\n      font-size: .8rem;\n      text-align: right;\n      width: 70px;\n      transform: rotateZ(-10deg);\n      margin: 0;\n\n      @media screen and (min-width: 425px) {\n        width: 90px;\n      }\n    }\n  }\n\n  nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-family: alternate-gothic;\n    font-size: 1.4rem;\n\n    @media screen and (min-width: 320px) {\n      grid-template-columns: 60px 70px 40px;\n    }\n\n    @media screen and (min-width: 425px) {\n      font-size: 1.2rem;\n      grid-template-columns: 80px 100px 1fr;\n    }\n\n    @media screen and (min-width: 768px) {\n      font-size: 1.5rem;\n      grid-template-columns: 150px 150px 1fr;\n    }\n\n    ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n      padding-top: 10px;\n      overflow: hidden;\n\n      li + li {\n        margin-top: 3px;\n      }\n    }\n\n    .nav-hidden {\n      @media screen and (min-width: 320px) {\n        display: none;\n      }\n    }\n\n    .nav-show {\n      display: none;\n    }\n  }\n"]);return p=function(){return n},n}var f=u.c.header(p()),d=i.a.createElement,h=function(){var n=Object(r.useState)(!1),e=n[0],t=n[1];return d("div",{className:"container-fluid"},d(f,{className:"container ".concat(e&&"nav-toggle-show")},d("div",{className:"title"},d("h1",null,"Rafael Araujo"),d("h2",null,"Desenvolvedor Front-End")),d("nav",null,d("ul",null,d("li",null,d(c.a,{href:"/"},d("a",{title:"In\xedcio"},"In\xedcio"))),d("li",null,"Perfil"),d("li",null,"Projetos")),d("ul",{className:e?"nav-show":"nav-hidden"},d("li",null,"React"),d("li",null,"React Native"),d("li",{onClick:function(){return t(!0)}},"Ver mais...")),d("ul",null,d("li",null,"React"),d("li",null,"React Native"),d("li",null,"Flutter")),d("ul",null,d("li",null,"PHP"),d("li",null,"Github"),d("li",null,"Linkedin")),d("ul",{className:e?"nav-hidden":"nav-show"},d("li",{onClick:function(){return t(!1)}},"Recolher...")))))};function m(){var n=Object(s.a)(["\n  box-shadow: 2.5px 2.5px 8px #ccc;\n  border-radius: 3px;\n  padding: 10px;\n  .section-container {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n\n  h2 {\n    margin: 0;\n    margin-left: 20px;\n    margin-bottom: 20px;\n  }\n"]);return m=function(){return n},n}var v=u.c.section(m());function g(){var n=Object(s.a)(["\n  width: 200px;\n  height: 300px;\n  box-shadow: 2.5px 2.5px 8px #CCC;\n  border-radius: 5px;\n\n  .flipper {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    transition: transform .8s;\n\n    .front {\n      /* padding: 10px; */\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      background: url(",");\n\n      h3 {\n        color: #FFF;\n        text-shadow: 2.5px 2.5px 8px #000;\n        padding: 10px;\n        background: #00000040;\n      }\n    }\n\n    .back {\n      padding: 10px;\n      display: flex;\n      flex-direction: column;\n      background: #FFF;\n      justify-content: center;\n      transform: rotate3d(0, 1, 0, 180deg);\n\n      ul {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        font-size: .9rem;\n\n        h4 {\n          margin: 0;\n          margin-bottom: 10px;\n        }\n\n        li + li {\n          margin-top: 3px;\n        }\n      }\n    }\n\n    .back, .front {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      backface-visibility: hidden;\n    }\n  }\n\n  :hover .flipper {\n    transform: rotate3d(0, 1, 0, 180deg);\n  }\n\n  h3 {\n    margin: 0;\n  }\n"]);return g=function(){return n},n}var x=u.c.a(g(),(function(n){return n.img})),w=i.a.createElement,y=function(n){var e=n.data;return w(x,{img:e.img,title:e.title,href:e.url,target:"_blank",rel:"noopener"},w("div",{className:"flipper"},w("div",{className:"front"},w("h3",null,e.title)),w("div",{className:"back"},w("ul",null,w("h4",null,"Tecnologias usadas:"),e.tecnologias.map((function(n,e){return w("li",{key:e},n)}))))))},b=i.a.createElement,k=function(n){return b(v,null,b("h2",null,n.title),b("div",{className:"section-container"},n.data.map((function(n){return b(y,{key:n.id,data:n})}))))},N=i.a.createElement;e.default=function(){var n=Object(r.useContext)(a.a);return N(r.Fragment,null,N(h,null),N(o.a,null,N(o.b,{className:"container"},N(o.c,null),N(k,{title:"React",data:n.data.projects.react}))))}},YFqc:function(n,e,t){n.exports=t("cTJO")},cTJO:function(n,e,t){"use strict";var r=t("lwsE"),i=t("W8MJ"),a=t("a1gu"),o=t("Nsbk"),l=t("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var s=t("TqRt"),u=t("284h");e.__esModule=!0,e.default=void 0;var p,f=u(t("q1tI")),d=t("QmWs"),h=t("g/15"),m=s(t("nOHt"));function v(n){return n&&"object"===typeof n?(0,h.formatWithValidation)(n):n}var g=new Map,x=window.IntersectionObserver,w={};function y(){return p||(x?p=new x((function(n){n.forEach((function(n){if(g.has(n.target)){var e=g.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(p.unobserve(n.target),g.delete(n.target),e())}}))}),{rootMargin:"200px"}):void 0)}var b=function(n){l(u,n);var e,s=(e=u,function(){var n,t=o(e);if(c()){var r=o(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return a(this,n)});function u(n){var e;return r(this,u),(e=s.call(this,n)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(n){var e=null,t=null,r=null;return function(i,a){if(r&&i===e&&a===t)return r;var o=n(i,a);return e=i,t=a,r=o,o}}((function(n,e){return{href:v(n),as:e?v(e):e}})),e.linkClicked=function(n){var t=n.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),o=a.href,l=a.as;if(function(n){var e=(0,d.parse)(n,!1,!0),t=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===t.protocol&&e.host===t.host}(o)){var c=window.location.pathname;o=(0,d.resolve)(c,o),l=l?(0,d.resolve)(c,l):o,n.preventDefault();var s=e.props.scroll;null==s&&(s=l.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](o,l,{shallow:e.props.shallow}).then((function(n){n&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==n.prefetch,e}return i(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),t=e.href,r=e.as,i=(0,d.resolve)(n,t);return[i,r?(0,d.resolve)(n,r):i]}},{key:"handleRef",value:function(n){var e=this;this.p&&x&&n&&n.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,e){var t=y();return t?(t.observe(n),g.set(n,e),function(){try{t.unobserve(n)}catch(e){console.error(e)}g.delete(n)}):function(){}}(n,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],n).catch((function(n){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var n=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),i=r.href,a=r.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var o=f.Children.only(e),l={ref:function(e){n.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),n.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||n.linkClicked(e)}};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=a||i);var c=t("P5f7").rewriteUrlForNextExport;return l.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=c(l.href)),f.default.cloneElement(o,l)}}]),u}(f.Component);e.default=b},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1,3]]]);