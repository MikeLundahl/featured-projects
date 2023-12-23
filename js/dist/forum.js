/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new F(n||[]);return s(i,"_invoke",{value:T(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var m="suspendedStart",v="suspendedYield",y="executing",g="completed",b={};function w(){}function x(){}function j(){}var _={};p(_,c,(function(){return this}));var L=Object.getPrototypeOf,I=L&&L(L(C([])));I&&I!==i&&a.call(I,c)&&(_=I);var P=j.prototype=w.prototype=Object.create(_);function k(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,s,u){var c=d(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var o;s(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function T(t,r,n){var o=m;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var u=E(s,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=d(t,r,n);if("normal"===c.type){if(o=n.done?g:v,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function E(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=j,s(P,"constructor",{value:j,configurable:!0}),s(j,"constructor",{value:x,configurable:!0}),x.displayName=p(j,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,p(t,f,"GeneratorFunction")),t.prototype=Object.create(P),t},r.awrap=function(t){return{__await:t}},k(O.prototype),p(O.prototype,l,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(P),p(P,f,"Generator"),p(P,c,(function(){return this})),p(P,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{extend:()=>F});const t=flarum.core.compat["common/app"];function e(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function s(t){e(a,o,i,s,u,"next",t)}function u(t){e(a,o,i,s,u,"throw",t)}s(void 0)}))}}r.n(t)().initializers.add("mbl/featured-projects",(function(){console.log("[mbl/featured-projects] Hello, forum and admin!")}));var i=r(357),a=r.n(i);const s=flarum.core.compat["forum/app"];var u=r.n(s);const c=flarum.core.compat["common/extend"],l=flarum.core.compat["forum/components/IndexPage"];var f=r.n(l);const p=flarum.core.compat["forum/components/DiscussionPage"];var h=r.n(p);function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}const y=flarum.core.compat["common/Model"];var g=r.n(y),b=function(t){function e(){return t.apply(this,arguments)||this}v(e,t);var r=e.prototype;return r.type=function(){return g().attribute<string>"type".call(this)},r.discussionId=function(){return g().attribute<number|null>"discussionId".call(this)},r.userId=function(){return g().attribute<number|null>"userId".call(this)},r.createdAt=function(){return g().attribute<Date>"createdAt".call(this)},e}(g());const w=flarum.core.compat["common/components/Link"];var x=r.n(w);const j=flarum.core.compat["common/Component"];var _=r.n(j),L=function(t){function e(){return t.apply(this,arguments)||this}v(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.title=e.attrs.title,this.image=e.attrs.image},r.oncreate=function(e){t.prototype.oncreate.call(this,e)},r.onupdate=function(e){t.prototype.onupdate.call(this,e)},r.view=function(){return m("div",{className:"FeaturedCard",style:{backgroundImage:"url("+this.image+")"}},m("div",{className:"FeatureCardTitle"},this.title))},e}(_());function I(t,e){void 0===e&&(e=1);var r=app.forum.attribute("mbl-featured-projects.image"),n=app.forum.attribute("baseUrl")+"/assets/"+r;if(t){var o=/<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/.exec(t.contentHtml());return"number"==typeof e&&e>0?o?o[e]:r?n:null:"~"===e?o:null}}function P(t){for(var e={},r=0;r<t.length;r++){var n=t[r].data.attributes.discussionId;"number"!=typeof e[n]?e[n]=0:e[n]+=1}var o=[];for(var i in e)o.push({discussionId:i,votes:e[i]});o.sort((function(t,e){return e.votes-t.votes}));for(var a=o.slice(0,3),s=[],u=0;u<a.length;u++)s.push(a[u].discussionId);return s}var k=function(t){function e(){return t.apply(this,arguments)||this}v(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.defaultImage=u().forum.attribute("mbl-featured-projects.default_image"),this.cardPrevLoading=[],this.cardPrev=[],this.loading=!0,this.clickTag=u().forum.attribute("mbl-featured-projects.plausibleTag"),this.clickTagSponsor=u().forum.attribute("mbl-featured-projects.sponsor_tracking_tag"),this.sponsorImg=u().forum.attribute("mbl-featured-projects.sponsor_image_url"),this.sponsorUrl=u().forum.attribute("mbl-featured-projects.sponsor_url"),this.sponsorTitle=u().forum.attribute("mbl-featured-projects.sponsor_title"),this.sponsorIsActive=u().forum.attribute("mbl-featured-projects.sponsor_is_active"),this.sponsorNewTab=u().forum.attribute("mbl-featured-projects.sponsor_new_tab"),this.sponsorTarget="_self",this.classesSponsor="FeaturedCardLink "+this.clickTagSponsor;for(var r=0;r<3;r++)this.cardPrevLoading.push(m(L,{title:"Loading...",image:this.defaultImage}))},r.oncreate=function(){var e=o(a().mark((function e(r){var n,o,i,s=this;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.prototype.oncreate.call(this,r),parseInt(this.sponsorNewTab)&&(this.sponsorTarget="_blank"),n=3,e.next=5,u().store.find("featured-projects-vote");case 5:if(0!==(o=e.sent).length){e.next=10;break}return this.loading=!1,m.redraw(),e.abrupt("return");case 10:if((i=P(o)).length!==n){e.next=14;break}return e.next=14,u().store.find("discussions",{filter:{id:i},include:"firstPost,user,tags"}).then((function(t){s.cardPrev=[],console.log("length is ",s.cardPrev.length);for(var e=0;e<t.length;e++){var r=I(t[e].firstPost()),n="FeaturedCardLink "+s.clickTag;s.cardPrev.push(m(x(),{className:n,href:u().route.discussion(t[e])},m(L,{title:t[e].title(),image:r})))}s.loading=!1,m.redraw()}));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r.onupdate=function(e){t.prototype.onupdate.call(this,e)},r.view=function(){return m("div",{className:"FeaturedCardsContainer"},this.cardPrev.length>0&&m("h3",{className:"FeaturedTitle"},"Featured projects"),m("div",{className:"CardsContainer"},this.sponsorIsActive>0&&m("a",{className:this.classesSponsor,href:this.sponsorUrl,target:this.sponsorTarget},m(L,{title:this.sponsorTitle,image:this.sponsorImg})),this.cardPrev.length>0?this.cardPrev.map((function(t){return t})):this.cardPrevLoading.map((function(t){return t}))),this.cardPrev.length>0&&m("div",{className:"FeaturedCardsAboutLink"},m(x(),{href:"/p/featured-projects"},"About featured projects")))},e}(_());const O=flarum.core.compat["common/components/Button"];var T=r.n(O),E=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={votes:0,loading:!1},e}v(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.discussionId=this.getDiscussionId()},r.oncreate=function(){var e=o(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.prototype.oncreate.call(this,r),e.next=3,this.getVotesByDiscussionId(this.discussionId);case 3:n=e.sent,this.state.votes=n.length,m.redraw();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r.onupdate=function(e){t.prototype.onupdate.call(this,e)},r.view=function(){var t=this;return m("div",{className:"ButtonVoteFeatured"},this.state.votes,m(T(),{className:"ButtonVoteFeatured-button Button",type:"submit",loading:this.state.loading,onclick:function(e){return t.onclick(e)}},"Vote featured"))},r.onclick=function(t){var e=this;if(t.preventDefault(),this.state.loading=!0,u().current.matches(h())){var r=u().session.user.id();u().store.createRecord("featured-projects-vote").save({discussionId:this.discussionId,userId:r}).then(function(){var t=o(a().mark((function t(r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getVotesByDiscussionId(e.discussionId);case 2:n=t.sent,e.state.votes=n.length,e.state.loading=!1,m.redraw();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}},r.getDiscussionId=function(){return u().current.get("discussion").id()},r.getVotesByDiscussionId=function(){var t=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().store.find("featured-projects-vote",{discussionId:e});case 2:return r=t.sent,t.abrupt("return",r.payload.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}(_());const S=flarum.core.compat["common/extenders"];var N=r.n(S);const F=[(new(N().Routes)).add("featured-projects-vote","/featured-projects-vote/",b),(new(N().Store)).add("featured-projects-vote",b)];u().initializers.add("mbl/featured-projects",(function(){u().store.models.featuredProjectsVote=b,(0,c.extend)(h().prototype,"sidebarItems",function(){var t=o(a().mark((function t(e){var r,n,o,i,s,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u().forum.attribute("canVoteFeaturedProjects"),n=u().forum.attribute("mbl-featured-projects.tags"),o=u().current.data.discussion.tags(),i=o.map((function(t){return t.data.attributes.name})),s=[],null!==n&&(s=i.filter((function(t){return n.includes(t)}))),c=n&&s.length>0,r&&c&&e.add("mblButtonVoteFeatured",m(E));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(0,c.override)(f().prototype,"hero",(function(t){return[t(),m(k)]}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map