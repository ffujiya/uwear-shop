(this.webpackJsonpscandishop=this.webpackJsonpscandishop||[]).push([[0],{80:function(t,e,c){},81:function(t,e,c){},84:function(t,e,c){},85:function(t,e,c){},86:function(t,e,c){},87:function(t,e,c){},88:function(t,e,c){},89:function(t,e,c){},90:function(t,e,c){},91:function(t,e,c){},92:function(t,e,c){},93:function(t,e,c){"use strict";c.r(e);var r,n,a,i,s,o,u=c(1),l=c.n(u),d=c(49),b=c.n(d),j=c(30),p=c(15),m=c(22),h=c(16),O=c(19),v=c(25),y=c(13),f={activeCategory:"all",activeCurrency:"USD",itemsInCartNumber:0,currencyListVisible:!1,minicartVisible:!1,productsInCart:[]},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ACTIVE_CATEGORY":return Object(y.a)(Object(y.a)({},t),{},{activeCategory:e.payload});case"SET_ACTIVE_CURRENCY":return Object(y.a)(Object(y.a)({},t),{},{activeCurrency:e.payload});case"ADD_PRODUCT_TO_CART":var c,r=Object(v.a)(t.productsInCart),n=!1,a=Object(O.a)(r);try{for(a.s();!(c=a.n()).done;){var i=c.value;i.productId===e.payload.productId&&JSON.stringify(i.selectedAttributes)===JSON.stringify(e.payload.selectedAttributes)&&(n=!0,i.selectedProductCount++)}}catch(N){a.e(N)}finally{a.f()}return n||r.push(e.payload),Object(y.a)(Object(y.a)({},t),{},{productsInCart:Object(v.a)(r),itemsInCartNumber:t.itemsInCartNumber+1});case"INCREASE_PRODUCT_AMOUNT":var s,o=Object(v.a)(t.productsInCart),u=t.itemsInCartNumber,l=Object(O.a)(o);try{for(l.s();!(s=l.n()).done;){var d=s.value;d.productId===e.payload.productId&&d.selectedAttributes===e.payload.selectedAttributes&&d.selectedProductCount++}}catch(N){l.e(N)}finally{l.f()}return Object(y.a)(Object(y.a)({},t),{},{productsInCart:Object(v.a)(o),itemsInCartNumber:++u});case"DECREASE_PRODUCT_AMOUNT":var b,j=null,p=Object(v.a)(t.productsInCart),m=t.itemsInCartNumber,C=Object(O.a)(p.entries());try{for(C.s();!(b=C.n()).done;){var _=Object(h.a)(b.value,2),x=_[0],g=_[1];g.productId===e.payload.productId&&g.selectedAttributes===e.payload.selectedAttributes&&(g.selectedProductCount>1?g.selectedProductCount--:j=x)}}catch(N){C.e(N)}finally{C.f()}return null!==j&&p.splice(j,1),Object(y.a)(Object(y.a)({},t),{},{productsInCart:Object(v.a)(p),itemsInCartNumber:--m});default:return t}},_=Object(m.b)(C),x=(c(80),c(7)),g=c(8),N=c(11),A=c(12),I=c(103),k=c(37),w=c(102),P=(Object(w.a)(r||(r=Object(k.a)(["query{\n  categories{\n    name\n    products{\n      id\n      name\n      gallery\n      inStock\n      attributes {\n        id\n        name\n        type\n        items {\n          displayValue\n          id\n          value\n        }\n      }\n      prices{\n        currency\n        amount\n      }\n    }\n  } \n}"]))),Object(w.a)(n||(n=Object(k.a)(["query {\n  categories{\n    name\n  }\n}"])))),V=Object(w.a)(a||(a=Object(k.a)(["query CategoryQuery($categoryName: CategoryInput) {\n  category(input: $categoryName) {\n    name\n    products {\n      id\n      name\n      gallery\n      inStock\n      attributes {\n        id\n        name\n        type\n        items {\n          displayValue\n          id\n          value\n        }\n      }\n      prices{\n        currency{\n          label\n          symbol\n        }\n        amount\n      }\n    }\n  }\n}"]))),E=Object(w.a)(i||(i=Object(k.a)(["\nquery ProductQuery($productId: String!) {\n  product(id: $productId) {\n    id\n    name\n    gallery\n    description\n    inStock\n    attributes {\n      id\n      name\n      type\n      items {\n        displayValue\n        id\n        value\n      }\n    }\n    prices {\n      currency{\n        label\n        symbol\n      }\n      amount\n    }\n    brand\n  }\n}\n"]))),T=Object(w.a)(s||(s=Object(k.a)(["query{\n  currencies{\n    label\n    symbol\n  }\n}"]))),L=Object(w.a)(o||(o=Object(k.a)(['query {\n  category(input: {title: "all"}){\n    name\n    products {\n      id\n      prices {\n        currency{\n          symbol\n          label\n        }\n        amount\n      }\n    }\n  }\n}']))),S=function(t){return{type:"ADD_PRODUCT_TO_CART",payload:t}},R=function(t,e){return{type:"INCREASE_PRODUCT_AMOUNT",payload:{productId:t,selectedAttributes:e}}},D=function(t,e){return{type:"DECREASE_PRODUCT_AMOUNT",payload:{productId:t,selectedAttributes:e}}},U=(c(81),c(2)),M=function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).onCategorySelect=function(e){var c=e.target.innerHTML;t.props.setActiveCategory(c)},t}return Object(g.a)(c,[{key:"render",value:function(){var t=this,e=this.props,c=e.data,r=c.loading,n=c.error,a=c.categories,i=e.activeCategory;if(r)return Object(U.jsx)("p",{children:"Loading..."});if(n)return Object(U.jsx)("p",{children:"Error!"});var s=a.map((function(t){return t.name}));return Object(U.jsx)("ul",{className:"categories",children:s.map((function(e,c){return Object(U.jsx)("li",{className:"categories__item ".concat(i===e?"active":""),onClick:t.onCategorySelect,children:Object(U.jsx)(j.b,{to:"/",children:e})},"".concat(c,"_").concat(e))}))})}}]),c}(l.a.Component),q=Object(m.a)(Object(p.b)((function(t){return{activeCategory:t.activeCategory}}),{setActiveCategory:function(t){return{type:"SET_ACTIVE_CATEGORY",payload:t}}}),Object(I.a)(P))(M),J=(c(84),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).curRef=l.a.createRef(),t.currencyListItems=function(e){return e.map((function(e,c){return Object(U.jsx)("li",{className:"currency-list__item",onClick:function(){return t.setActiveCurrency(e.label)},children:"".concat(e.symbol," ").concat(e.label)},"".concat(e,"_").concat(c))}))},t.setActiveCurrency=function(e){t.props.setActiveCurrency(e)},t.handleOutsideClick=function(e){t.props.currencyListVisible&&!e.path.includes(t.curRef.current)&&t.props.toggleCurrencyList()},t}return Object(g.a)(c,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var t=this.props,e=t.data,c=e.loading,r=e.error,n=e.currencies,a=t.activeCurrency,i=t.currencyListVisible,s=t.toggleCurrencyList;return c?Object(U.jsx)("p",{children:"Loading..."}):r?Object(U.jsx)("p",{children:"Error!"}):Object(U.jsxs)("div",{className:"currency-selector",ref:this.curRef,onClick:s,children:[Object(U.jsx)("span",{className:"currency-switch",children:n.filter((function(t){return t.label===a}))[0].symbol}),i?Object(U.jsx)("ul",{className:"currency-list",children:this.currencyListItems(n)}):null]})}}]),c}(l.a.Component)),Y=Object(m.a)(Object(p.b)((function(t){return{activeCurrency:t.activeCurrency}}),{setActiveCurrency:function(t){return{type:"SET_ACTIVE_CURRENCY",payload:t}}}),Object(I.a)(T))(J),$=(c(85),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).showPrice=function(t,e){var c=t.filter((function(t){return t.currency.label===e}));return"".concat(c[0].currency.symbol," ").concat(c[0].amount)},t}return Object(g.a)(c,[{key:"showAttributes",value:function(t,e){return t.map((function(t){return Object(U.jsx)("div",{className:"minicart-attr__row",children:Object(U.jsx)("ul",{className:"minicart-attr__list",children:t.items.map((function(c){var r="swatch"===t.type?" swatch":"",n="swatch"===t.type?"":c.displayValue,a="swatch"===t.type?{backgroundColor:c.value}:{},i=e[t.name]===c.displayValue?"active":"";return Object(U.jsx)("li",{children:Object(U.jsx)("div",{className:"minicart-attr__btn "+i+r,style:a,children:n})},c.id)}))})},t.id)}))}},{key:"increaseProductInCartAmount",value:function(t,e,c){t.stopPropagation(),this.props.increaseProductInCartAmount(e,c)}},{key:"decreaseProductInCartAmount",value:function(t,e,c){t.stopPropagation(),this.props.decreaseProductInCartAmount(e,c)}},{key:"render",value:function(){var t=this,e=this.props,c=e.data,r=e.currency,n=e.productId,a=e.productInCart,i=e.amount,s=a.selectedAttributes;if(c.loading)return Object(U.jsx)("p",{children:"Loading..."});if(c.loading)return Object(U.jsx)("p",{children:"Error..."});var o=c.product,u=o.brand,l=o.name,d=o.gallery,b=o.attributes,j=o.prices;return Object(U.jsxs)("li",{className:"minicart-products__item minicart-product",children:[Object(U.jsxs)("div",{className:"minicart-product__details",children:[Object(U.jsxs)("div",{className:"mproduct",children:[Object(U.jsx)("div",{className:"mproduct__name",children:u}),Object(U.jsx)("div",{className:"mproduct__name",children:l}),Object(U.jsx)("div",{className:"mproduct__price",children:this.showPrice(j,r)}),Object(U.jsx)("div",{className:"mproduct__sizes",children:Object(U.jsx)("ul",{className:"minicart-sizes",children:this.showAttributes(b,s)})})]}),Object(U.jsxs)("div",{className:"m-amount",children:[Object(U.jsx)("div",{onClick:function(e){return t.increaseProductInCartAmount(e,n,s)},className:"m-amount__more"}),Object(U.jsx)("div",{className:"m-amount__num",children:i}),Object(U.jsx)("div",{onClick:function(e){return t.decreaseProductInCartAmount(e,n,s)},className:"m-amount__less"})]})]}),Object(U.jsx)("div",{className:"minicart-product__image",children:Object(U.jsx)("img",{src:d[0],alt:"product"})})]})}}]),c}(l.a.Component)),z=Object(m.a)(Object(p.b)(null,{increaseProductInCartAmount:R,decreaseProductInCartAmount:D}),Object(I.a)(E,{options:function(t){return{variables:{productId:t.productId},fetchPolicy:"no-cache"}}}))($),B=c(5);var G,Q=function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){return Object(x.a)(this,c),e.apply(this,arguments)}return Object(g.a)(c,[{key:"countTotal",value:function(t,e,c){var r=0;return e.forEach((function(e){var n=t.filter((function(t){return t.id===e.productId}))[0].prices.filter((function(t){return t.currency.label===c}))[0];r+=n.amount*e.selectedProductCount})),r.toFixed(2)}},{key:"render",value:function(){var t=this.props,e=t.data,c=e.loading,r=e.error,n=e.category,a=t.productsInCart,i=t.activeCurrency;if(c)return Object(U.jsx)("p",{children:"Loading..."});if(r)return Object(U.jsx)("p",{children:"Error!"});var s=n.products;return Object(U.jsxs)("div",{className:"minicart-total",children:[Object(U.jsx)("div",{className:"minicart-total__header",children:"Total:"}),Object(U.jsx)("div",{className:"minicart-total__sum",children:this.countTotal(s,a,i)})]})}}]),c}(l.a.Component),W=(G=Object(I.a)(L)(Q),function(t){return Object(U.jsx)(G,Object(y.a)(Object(y.a)({},t),{},{params:Object(B.g)()}))}),F=(c(86),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).curRef=l.a.createRef(),t.handleOutsideClick=function(e){t.props.minicartVisible&&!e.path.includes(t.curRef.current)&&t.props.toggleMinicart()},t.countTotal=function(t,e){},t}return Object(g.a)(c,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var t=this.props,e=t.minicartVisible,c=t.productsInCart,r=t.itemsInCartNumber,n=t.toggleMinicart,a=t.activeCurrency;return Object(U.jsxs)("div",{className:"cart-widget",onClick:n,ref:this.curRef,children:[Object(U.jsx)("div",{className:"cart-widget__items-count",children:r}),e?document.body.classList.add("lock"):document.body.classList.remove("lock"),e?Object(U.jsx)("div",{className:"minicart-overlay"}):null,e?Object(U.jsxs)("div",{className:"minicart",children:[Object(U.jsxs)("div",{className:"minicart__header",children:["My Bag, ",Object(U.jsxs)("span",{className:"item-num",children:[r," items"]})]}),Object(U.jsx)("ul",{className:"minicart-products",children:c.map((function(t,e){return Object(U.jsx)(z,{productId:t.productId,amount:t.selectedProductCount,currency:a,productInCart:t},"".concat(t.productId,"_").concat(e))}))}),Object(U.jsx)(W,{productsInCart:c,activeCurrency:a}),Object(U.jsxs)("div",{className:"minicart-buttons",children:[Object(U.jsx)(j.b,{to:"/cart",className:"viewbag-btn minicart-btn",children:"View bag"}),Object(U.jsx)("div",{className:"checkout-btn minicart-btn",children:"Check out"})]})]}):null]})}}]),c}(l.a.Component)),H=Object(p.b)((function(t){return{activeCurrency:t.activeCurrency,itemsInCartNumber:t.itemsInCartNumber,productsInCart:t.productsInCart}}))(F),K=function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={currencyListVisible:!1,minicartVisible:!1},t.toggleCurrencyList=function(){t.state.minicartVisible&&t.setState({minicartVisible:!1}),t.setState((function(t){return{currencyListVisible:!t.currencyListVisible}}))},t.toggleMinicart=function(){t.state.currencyListVisible&&t.setState((function(t){return{currencyListVisible:!t.currencyListVisible}})),t.setState((function(t){return{minicartVisible:!t.minicartVisible}}))},t}return Object(g.a)(c,[{key:"render",value:function(){return Object(U.jsxs)("ul",{className:"header__widgets",children:[Object(U.jsx)("li",{children:Object(U.jsx)(Y,{currencyListVisible:this.state.currencyListVisible,toggleCurrencyList:this.toggleCurrencyList})}),Object(U.jsx)("li",{children:Object(U.jsx)(H,{toggleMinicart:this.toggleMinicart,minicartVisible:this.state.minicartVisible})})]})}}]),c}(l.a.Component),X=(c(87),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){return Object(x.a)(this,c),e.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){return Object(U.jsx)("div",{className:"header",children:Object(U.jsxs)("div",{className:"container header__container",children:[Object(U.jsx)("div",{className:"header__categories",children:Object(U.jsx)(q,{})}),Object(U.jsx)("div",{className:"header__logo",children:"uwear"}),Object(U.jsx)(K,{})]})})}}]),c}(l.a.Component)),Z=c(41),tt=(c(88),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).addDefaultToCart=function(e,c){c.preventDefault();var r={};e.attributes.forEach((function(t){r=Object(y.a)(Object(y.a)({},r),{},Object(Z.a)({},t.name,t.items[0].displayValue))}));var n={productId:e.id,selectedAttributes:r,selectedProductCount:1};t.props.addProductToCart(n)},t.showPrice=function(t,e){var c=t.filter((function(t){return t.currency.label===e}));return"".concat(c[0].currency.symbol," ").concat(c[0].amount)},t}return Object(g.a)(c,[{key:"render",value:function(){var t=this,e=this.props,c=e.product,r=e.activeCurrency,n=e.inStock;return Object(U.jsx)("div",{className:"product-card",children:Object(U.jsxs)(j.b,{to:"/products/"+c.id,children:[Object(U.jsxs)("div",{className:"product-card__image",children:[n?null:Object(U.jsx)("div",{className:"product-card__outofstock",children:"Out of stock"}),Object(U.jsx)("img",{src:c.gallery[0],alt:"product"}),n?Object(U.jsx)("button",{className:"add-to-card",onClick:function(e){return t.addDefaultToCart(c,e)}}):null]}),Object(U.jsx)("div",{className:"product-card__text",children:c.name}),Object(U.jsx)("div",{className:"product-card__price",children:this.showPrice(c.prices,r)})]})})}}]),c}(l.a.Component)),et=Object(p.b)(null,{addProductToCart:S})(tt),ct=(c(89),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).showProducts=function(t,e){return t.map((function(t){return Object(U.jsx)(et,{product:t,activeCurrency:e,inStock:t.inStock},t.id)}))},t}return Object(g.a)(c,[{key:"render",value:function(){var t=this.props,e=t.data,c=e.loading,r=e.error,n=e.category,a=t.activeCurrency;if(c)return Object(U.jsx)("p",{children:"Loading..."});if(r)return Object(U.jsx)("p",{children:"Error!"});var i=n.categoryName,s=n.products;return Object(U.jsx)("div",{className:"category",children:Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("h1",{className:"category__header",children:i}),Object(U.jsx)("div",{className:"category__wrapper",children:this.showProducts(s,a)})]})})}}]),c}(l.a.Component)),rt=Object(m.a)(Object(p.b)((function(t){return{activeCategory:t.activeCategory,activeCurrency:t.activeCurrency}})),Object(I.a)(V,{options:function(t){return{variables:{categoryName:{title:t.activeCategory}},fetchPolicy:"no-cache"}}}))(ct);c(90);var nt=function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).state={selectedAttributes:{},selectedImage:0},t.setDefaultAttributes=function(){0===Object.keys(t.state.selectedAttributes).length&&t.props.data.product.attributes.forEach((function(e){t.setActiveAttribute(e.name,e.items[0].displayValue)}))},t.setActiveAttribute=function(e,c){t.setState((function(t){return{selectedAttributes:Object(y.a)(Object(y.a)({},t.selectedAttributes),{},Object(Z.a)({},e,c))}}))},t.changeImage=function(e){t.setState({selectedImage:e})},t.onAddToCard=function(e){var c={productId:t.props.params.id,selectedAttributes:t.state.selectedAttributes,selectedProductCount:1};t.props.addProductToCart(c)},t.showPrice=function(t,e){var c=t.filter((function(t){return t.currency.label===e}));return"".concat(c[0].currency.symbol," ").concat(c[0].amount)},t}return Object(g.a)(c,[{key:"componentDidUpdate",value:function(){this.props.data&&!this.props.data.error&&!this.props.data.loading&&this.props.data.product.inStock&&this.setDefaultAttributes()}},{key:"componentDidMount",value:function(){this.props.data&&!this.props.data.error&&!this.props.data.loading&&this.props.data.product.inStock&&this.setDefaultAttributes()}},{key:"showAttributes",value:function(t,e){var c=this;return t.map((function(t){return Object(U.jsxs)("div",{className:"pdp-attr__row",children:[Object(U.jsx)("div",{className:"pdp-attr__header",children:t.name}),Object(U.jsx)("ul",{className:"pdp-attr__list",children:t.items.map((function(r){var n="swatch"===t.type?" swatch":"",a="swatch"===t.type?"":r.displayValue,i="swatch"===t.type?{backgroundColor:r.value}:{},s=c.state.selectedAttributes[t.name]===r.displayValue?"active":"";return Object(U.jsx)("li",{children:e?Object(U.jsx)("button",{className:"pdp-attr__btn "+s+n,style:i,onClick:function(){return c.setActiveAttribute(t.name,r.displayValue)},children:a}):Object(U.jsx)("button",{className:"pdp-attr__btn "+n,style:i,children:a})},r.id)}))})]},t.id)}))}},{key:"render",value:function(){var t=this,e=this.props,c=e.data,r=c.loading,n=c.error,a=c.product,i=e.activeCurrency;if(r)return Object(U.jsx)("p",{children:"Loading..."});if(n)return Object(U.jsx)("p",{children:"Error!"});var s=a.brand,o=a.name,u=a.description,l=a.gallery,d=a.attributes,b=a.prices,j=a.inStock;return Object(U.jsx)("div",{className:"pdp",children:Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"product-description",children:[Object(U.jsxs)("div",{className:"product-description__gallery gallery",children:[Object(U.jsx)("div",{className:"gallery__thumbs",children:Object(U.jsx)("ul",{className:"pdp-thumbs",children:l.map((function(e,c){return Object(U.jsx)("li",{className:"pdp-thumbs__item",onClick:function(){return t.changeImage(c)},children:Object(U.jsx)("img",{src:e,alt:"thumb"})},e)}))})}),Object(U.jsx)("div",{className:"gallery__image",children:Object(U.jsx)("img",{src:l[this.state.selectedImage],alt:"product"})})]}),Object(U.jsxs)("div",{className:"product-description__details product-details",children:[Object(U.jsx)("div",{className:"product-details__header",children:s}),Object(U.jsx)("div",{className:"product-details__subheader",children:o}),Object(U.jsx)("div",{className:"product-details__attr pdp-attr",children:this.showAttributes(d,j)}),Object(U.jsxs)("div",{className:"product-details__price pdp-price",children:[Object(U.jsx)("div",{className:"pdp-price__header",children:"Price:"}),Object(U.jsx)("div",{className:"pdp-price__amount",children:this.showPrice(b,i)})]}),j?Object(U.jsx)("button",{onClick:this.onAddToCard,className:"product-details__add-btn",children:"Add to cart"}):Object(U.jsx)("div",{className:"product-details__out-of-stock",children:"Out of stock"}),Object(U.jsx)("p",{className:"product-details__text",children:u.replace(/<[^>]+>/g,"")})]})]})})})}}]),c}(l.a.Component),at=Object(p.b)((function(t){return{activeCurrency:t.activeCurrency}}),{addProductToCart:S})(function(t){return function(e){return Object(U.jsx)(t,Object(y.a)(Object(y.a)({},e),{},{params:Object(B.g)()}))}}(Object(I.a)(E,{options:function(t){return{variables:{productId:t.params.id},fetchPolicy:"no-cache"}}})(nt))),it=(c(91),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){var t;Object(x.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).showPrice=function(t,e){var c=t.filter((function(t){return t.currency.label===e}));return"".concat(c[0].currency.symbol," ").concat(c[0].amount)},t}return Object(g.a)(c,[{key:"showAttributes",value:function(t,e){return t.map((function(t){return Object(U.jsxs)("div",{className:"cart-attr__row",children:[Object(U.jsx)("div",{className:"cart-attr__header",children:t.id}),Object(U.jsx)("ul",{className:"cart-attr__list",children:t.items.map((function(c){var r=e[t.name]===c.displayValue?"active":"";return Object(U.jsx)("li",{children:Object(U.jsx)("button",{className:"cart-attr__btn "+r,children:c.displayValue})},c.id)}))})]},t.id)}))}},{key:"render",value:function(){var t=this.props,e=t.data,c=t.amount,r=t.activeCurrency,n=t.productInCart,a=t.productId,i=t.increaseProductInCartAmount,s=t.decreaseProductInCartAmount,o=n.selectedAttributes;if(e.loading)return Object(U.jsx)("p",{children:"Loading..."});if(e.loading)return Object(U.jsx)("p",{children:"Error..."});var u=e.product,l=u.brand,d=u.name,b=u.gallery,j=u.attributes,p=u.prices;return Object(U.jsxs)("li",{className:"cart-list__item cart-product",children:[Object(U.jsxs)("div",{className:"cart-product__details",children:[Object(U.jsxs)("div",{className:"product-info",children:[Object(U.jsx)("div",{className:"product-info__header",children:l}),Object(U.jsx)("div",{className:"product-info__subheader",children:d}),Object(U.jsx)("div",{className:"product-info__price",children:this.showPrice(p,r)}),Object(U.jsx)("div",{className:"product-info__attr",children:Object(U.jsx)("ul",{className:"cart-attr",children:this.showAttributes(j,o)})})]}),Object(U.jsxs)("div",{className:"amount",children:[Object(U.jsx)("div",{onClick:function(){return i(a,o)},className:"amount__more"}),Object(U.jsx)("div",{className:"amount__num",children:c}),Object(U.jsx)("div",{onClick:function(){return s(a,o)},className:"amount__less"})]})]}),Object(U.jsx)("div",{className:"cart-product__image",children:Object(U.jsx)("img",{src:b[0],alt:"product"})})]})}}]),c}(l.a.Component)),st=Object(m.a)(Object(p.b)((function(t){return{activeCurrency:t.activeCurrency}}),{increaseProductInCartAmount:R,decreaseProductInCartAmount:D}),Object(I.a)(E,{options:function(t){return{variables:{productId:t.productId},fetchPolicy:"no-cache"}}}))(it),ot=(c(92),function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){return Object(x.a)(this,c),e.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){var t=this.props.productsInCart;return Object(U.jsx)("div",{className:"cart",children:Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("h1",{className:"cart__header",children:"Cart"}),Object(U.jsx)("ul",{className:"cart__list cart-list",children:t.map((function(t){return Object(U.jsx)(st,{productId:t.productId,amount:t.selectedProductCount,productInCart:t},t.productId)}))})]})})}}]),c}(l.a.Component)),ut=Object(p.b)((function(t){return{productsInCart:t.productsInCart}}))(ot),lt=function(t){Object(N.a)(c,t);var e=Object(A.a)(c);function c(){return Object(x.a)(this,c),e.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(X,{}),Object(U.jsxs)(B.c,{children:[Object(U.jsx)(B.a,{exact:!0,path:"/",element:Object(U.jsx)(rt,{})}),Object(U.jsx)(B.a,{path:"/cart",element:Object(U.jsx)(ut,{})}),Object(U.jsx)(B.a,{path:"/products/:id",element:Object(U.jsx)(at,{})})]})]})}}]),c}(l.a.Component),dt=c(101),bt=c(104),jt=c(100),pt=new dt.a({uri:"https://uwear-backend.herokuapp.com/",cache:new bt.a});b.a.render(Object(U.jsx)(l.a.StrictMode,{children:Object(U.jsx)(p.a,{store:_,children:Object(U.jsx)(jt.a,{client:pt,children:Object(U.jsx)(j.a,{children:Object(U.jsx)(lt,{})})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.e2ba40fd.chunk.js.map