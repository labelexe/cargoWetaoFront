(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(145).default)("96cd9432",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";r(390)},437:function(t,e,r){var o=r(144)((function(i){return i[1]}));o.push([t.i,'.StoriesMain[data-v-69c1d23b]{overflow:hidden;width:100%}.StoriesMainWrapper[data-v-69c1d23b]{-ms-overflow-style:none;display:flex;overflow-x:scroll;scrollbar-width:none}.StoriesMainScrollList[data-v-69c1d23b]{display:flex;padding-bottom:10px}.StoriesMainItem[data-v-69c1d23b]{border-radius:18px;margin-right:8px;overflow:hidden}.StoriesMainItem[data-v-69c1d23b]:focus,.StoriesMainItem[data-v-69c1d23b]:hover{cursor:pointer;filter:opacity(.7)}.StoriesMainItem .StoriesMainItemBlock[data-v-69c1d23b]{height:10.8vh;overflow:hidden;padding:2px;position:relative;width:10.8vh}.StoriesMainItem:first-child .StoriesMainItemBlock[data-v-69c1d23b]:before{background:var(--stories-bd-bg-grd)}.StoriesMainItem .StoriesMainItemBlock[data-v-69c1d23b]:before,.StoriesMainItem:first-child .StoriesMainItemBlock[data-v-69c1d23b]:before{border-radius:var(--stories-bd-radius);bottom:0;content:"";height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:-1}.StoriesMainItem .StoriesMainItemBlock[data-v-69c1d23b]:before{background:#f0f0f0}.StoriesMainItemBlock img[data-v-69c1d23b]{border-radius:var(--stories-bd-radius);height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden;width:100%}',""]),o.locals={},t.exports=o},462:function(t,e,r){"use strict";r.r(e);var o={name:"storiesMainBlock",data:function(){return{storiesByUsers:[{img_src:"https://picsum.photos/200/300/?blur=1&random=1",username:"test1",user_stories:[{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"},{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"},{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"},{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"}]},{img_src:"https://picsum.photos/200/300/?blur=1&random=2",username:"test1",user_stories:[{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"},{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"},{src:"https://sun9-58.userapi.com/impg/q7JdOeKRac37BP6AhYwDnnfn44tddN6nT78YIw/GpnCvLQg0dQ.jpg?size=640x1000&quality=96&sign=45f56fc234291a1d022276ce394fa165&type=album",type:"image"}]}],userStories:[],showStorySlide:!1}},props:{},methods:{selectStory:function(t){this.userStories=[],this.showStorySlide=!0,this.userStories=t.user_stories}},components:{AppStorySlider:r(399).default}},n=(r(436),r(53)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"StoriesMain"},[e("div",{staticClass:"StoriesMainWrapper"},[e("div",{staticClass:"StoriesMainScrollList"},t._l(t.storiesByUsers,(function(r){return e("div",{staticClass:"StoriesMainItem",on:{click:function(e){return t.selectStory(r)}}},[e("div",{staticClass:"StoriesMainItemBlock"},[e("img",{attrs:{src:r.img_src}})])])})),0),t._v(" "),e("div",{staticClass:"StoriesMainOverlayStories"},[t.showStorySlide?e("AppStorySlider",{attrs:{username:"test",showSlider:t.showStorySlide,stories:t.userStories},on:{closeBtn:function(e){t.showStorySlide=!1}}}):t._e()],1)])])}),[],!1,null,"69c1d23b",null);e.default=component.exports;installComponents(component,{AppStorySlider:r(399).default})}}]);