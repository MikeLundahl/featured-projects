(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["common/app"];e.n(r)().initializers.add("mbl/featured-projects",(function(){console.log("[mbl/featured-projects] Hello, forum and admin!")}));const o=flarum.core.compat["admin/app"];var a=e.n(o);a().initializers.add("mbl/featured-projects",(function(){console.log("[mbl/featured-projects] Hello, admin!"),a().extensionData.for("mbl-featured-projects").registerPermission({icon:"fas fa-rocket",label:"Vote featured projects",permission:"discussion.vote_featured_projects"},"reply",95).registerSetting({setting:"mbl-featured-projects.sponsor_is_active",label:"Sponsor active",type:"boolean"}).registerSetting({setting:"mbl-featured-projects.sponsor_new_tab",label:"Open sponsor in new tab",type:"boolean"}).registerSetting({setting:"mbl-featured-projects.sponsor_title",label:"Sponsor title",type:"text"}).registerSetting({setting:"mbl-featured-projects.sponsor_image_url",label:"Sponsor image URL",type:"text"}).registerSetting({setting:"mbl-featured-projects.sponsor_url",label:"Sponsor URL",type:"text"}).registerSetting({setting:"mbl-featured-projects.plausible_sponsor_tracking_tag",label:"Sponsor Tracking Tag (Plausible.io)",type:"text"}).registerSetting({setting:"mbl-featured-projects.tags_allowed_for_voting",label:"Tags allowed for voting (separate by comma)",type:"text"}).registerSetting({setting:"mbl-featured-projects.default_image",label:"Default image as fallback",type:"text"}).registerSetting({setting:"mbl-featured-projects.plausible_tracking_tag",label:"Tracking Tag (Plausible.io)",type:"text"})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map