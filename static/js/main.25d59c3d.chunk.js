(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){e.exports={catImg:"NoFound_catImg__X_XqQ",text:"NoFound_text__lQ2s2"}},16:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__1S0ZD",imageGalleryItem:"ImageGallery_imageGalleryItem__IeKUw"}},17:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2reBt",Modal:"Modal_Modal__2wxRT"}},27:function(e,t,a){e.exports={container:"Container_container__1_9Bh"}},29:function(e,t,a){e.exports={Button:"Button_Button__2fXdf"}},31:function(e,t,a){e.exports={galleryItemImage:"ImageGalleryItem_galleryItemImage__3Vfu3"}},37:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(37),a(18)),i=a(4),l=a(5),u=a(7),h=a(6),d=a(11),m=(a(38),a(27)),g=a.n(m),j=a(1);function b(e){var t=e.children;return Object(j.jsx)("div",{className:g.a.container,children:t})}var f=a(32),p=a(8),y=a.n(p),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleSearchQueryChange=function(t){e.setState({searchQuery:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):d.b.error("Please,enter the correct request!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:y.a.searchbar,children:Object(j.jsxs)("form",{className:y.a.searchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{className:y.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleSearchQueryChange}),Object(j.jsx)("button",{className:y.a.searchFormButton,type:"submit",children:Object(j.jsx)(f.a,{style:{marginRight:4,marginLeft:4,width:20,height:20}})})]})})}}]),a}(n.Component),x=a(28),v=function(){return Object(j.jsxs)(x.a,{height:140,speed:1,backgroundColor:"#333",foregroundColor:"#999",viewBox:"0 0 380 70",children:[Object(j.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"70",height:"70"}),Object(j.jsx)("rect",{x:"80",y:"17",rx:"4",ry:"4",width:"300",height:"13"}),Object(j.jsx)("rect",{x:"80",y:"40",rx:"3",ry:"3",width:"250",height:"10"})]})},_=a(29),w=a.n(_);function I(e){var t=e.onClick;return Object(j.jsx)("button",{onClick:t,className:w.a.Button,children:"Load more"})}var S=a(13),k=a.n(S),C=a(30),L=a(14),M=a.n(L),F="22851319-26dce2435af98d9caa304e2ac";M.a.defaults.baseURL="https://pixabay.com/api/";var N=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n,r,c=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.prev=1,e.next=4,M.a.get("?&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat(F));case 4:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function Q(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}var B=a.p+"static/media/cat.a0e99a37.jpg",U=a(15),G=a.n(U);function R(){return Object(j.jsxs)("div",{role:"alert",children:[Object(j.jsx)("img",{className:G.a.catImg,src:B,width:"500",alt:"sad\u0421at"}),Object(j.jsx)("p",{className:G.a.text,children:"Nothing was found for your query!"})]})}var D=a(31),E=a.n(D),q=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{src:t,alt:a,"data-url":n,className:E.a.galleryItemImage})})},T=a(16),K=a.n(T);function A(e){var t=e.images,a=e.onOpenModal;return Object(j.jsx)("ul",{className:K.a.imageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(j.jsx)("li",{className:K.a.imageGalleryItem,children:Object(j.jsx)(q,{webformatURL:a,tags:n,largeImageURL:r})},t)}))})}var X=a(17),J=a.n(X),P=document.querySelector("#modal-root"),z=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:J.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:J.a.Modal,children:this.props.children})}),P)}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1,searchQuery:"",images:[],loading:!1,showModal:!1,url:"",tag:""},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;return e.setState({loading:!0}),N(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))}))},e.handleOnLoadClick=function(){e.setState({loading:!0}),e.fetchImages().then((function(){Q()})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({loading:!1})}))},e.handleClickImages=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.url,r=a.alt;e.setState({url:n,tag:r,loading:!0}),e.toggleModal()}},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleFormSubmit=function(t){e.setState({page:1,searchQuery:t,images:[]})},e.hideLoaderInModal=function(){return e.setState({loading:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.searchQuery!==t.searchQuery&&this.fetchImages().catch((function(e){return console.log(e)})).finally((function(){return a.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.showModal,r=e.url,c=e.tag,o=e.searchQuery;return Object(j.jsxs)(b,{children:[Object(j.jsx)(d.a,{autoClose:3e3}),Object(j.jsx)(O,{onSubmit:this.handleFormSubmit}),a&&Object(j.jsx)(v,{}),0!==t.length?Object(j.jsx)(A,{images:t,onOpenModal:this.handleClickImages}):""!==o&&Object(j.jsx)(R,{}),a&&!n&&Object(j.jsx)(v,{}),!a&&t[0]&&Object(j.jsx)(I,{onClick:this.handleOnLoadClick}),n&&Object(j.jsxs)(z,{onClose:this.toggleModal,onClick:this.handleClickImages,children:[a&&Object(j.jsx)(v,{}),Object(j.jsx)("img",{src:r,alt:c,onLoad:this.hideLoaderInModal})]})]})}}]),a}(n.Component),V=H;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__iwz8s",searchForm:"Searchbar_searchForm__EUce0",searchFormButton:"Searchbar_searchFormButton__2STQ8",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__5OTOO",searchFormInput:"Searchbar_searchFormInput__27xsk"}}},[[59,1,2]]]);
//# sourceMappingURL=main.25d59c3d.chunk.js.map