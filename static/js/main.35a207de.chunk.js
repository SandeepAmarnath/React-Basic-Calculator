(this["webpackJsonpmy-calci"]=this["webpackJsonpmy-calci"]||[]).push([[0],[,function(e,_,a){e.exports={erase:"Button_erase__3R6Le",get:"Button_get__7bJFl",operation:"Button_operation__34YFl"}},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Display_Display__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(13),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_8__),Calculator=function(_Component){function Calculator(){var _getPrototypeOf2,_this;Object(_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={valueOnScreen:0},_this.calculateString="",_this.onClickHandler=function(input){if("mod"===input&&(input="%"),"="===input){_this.calculateString=_this.calculateString.replace(/^(?!0$)0+/,"");var result=eval(_this.calculateString);result%1!==0&&(result=result.toFixed(2)),_this.calculateString=String(result),_this.setState({valueOnScreen:result})}else"AC"===input?(_this.calculateString="",_this.setState({valueOnScreen:0})):(_this.calculateString=_this.calculateString+input,_this.setState({valueOnScreen:String(_this.calculateString)}))},_this}return Object(_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component),Object(_Users_sandeepamarnath_Desktop_Git_Calculator_React_React_Basic_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.Calculator},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{style:{textAlign:"center",fontStyle:"italic",fontSize:"1.5em",color:"white"}},"Simple Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Display_Display__WEBPACK_IMPORTED_MODULE_6__.a,{value:this.state.valueOnScreen}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_7__.a,{clicked:this.onClickHandler}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calculator},function(e,_,a){"use strict";var t=a(0),l=a.n(t),c=a(11),r=a.n(c);_.a=function(e){return l.a.createElement("div",null,l.a.createElement("h3",{className:r.a.Display},e.value))}},function(e,_,a){e.exports={Display:"Display_Display__ydvBr"}},function(e,_,a){e.exports={ButtonPanel:"Buttons_ButtonPanel__3BmDY"}},function(e,_,a){e.exports={Calculator:"Calculator_Calculator__3F3wg"}},function(e,_,a){"use strict";var t=a(0),l=a.n(t),c=a(1),r=a.n(c),n=function(e){var _=[r.a.ColorIt];return e.erase&&_.push(r.a.erase),e.operation&&_.push(r.a.operation),e.get&&_.push(r.a.get),l.a.createElement(t.Fragment,null,l.a.createElement("button",{className:_.join(""),onClick:function(){return e.click(e.value)}},e.value))},i=a(12),s=a.n(i);_.a=function(e){return l.a.createElement(t.Fragment,null,l.a.createElement("div",{className:s.a.ButtonPanel},l.a.createElement("div",null,l.a.createElement(n,{value:"0",click:e.clicked}),l.a.createElement(n,{value:"1",click:e.clicked}),l.a.createElement(n,{value:"2",click:e.clicked})),l.a.createElement("div",null,l.a.createElement(n,{value:"3",click:e.clicked}),l.a.createElement(n,{value:"4",click:e.clicked}),l.a.createElement(n,{value:"5",click:e.clicked})),l.a.createElement("div",null,l.a.createElement(n,{value:"6",click:e.clicked}),l.a.createElement(n,{value:"7",click:e.clicked}),l.a.createElement(n,{value:"8",click:e.clicked})),l.a.createElement("div",null,l.a.createElement(n,{value:"9",click:e.clicked}),l.a.createElement(n,{value:".",click:e.clicked}),l.a.createElement(n,{value:"mod",click:e.clicked,operation:!0})),l.a.createElement("div",null,l.a.createElement(n,{value:"+",click:e.clicked,operation:!0}),l.a.createElement(n,{value:"-",click:e.clicked,operation:!0}),l.a.createElement(n,{value:"*",click:e.clicked,operation:!0})),l.a.createElement("div",null,l.a.createElement(n,{value:"/",click:e.clicked,operation:!0}),l.a.createElement(n,{value:"=",click:e.clicked,get:!0}),l.a.createElement(n,{value:"AC",click:e.clicked,erase:!0}))))}},function(e,_,a){e.exports=a(22)},,,,,function(e,_,a){},function(e,_,a){},function(e,_,a){"use strict";a.r(_);var t=a(0),l=a.n(t),c=a(8),r=a.n(c),n=(a(20),a(2)),i=a(3),s=a(5),u=a(4),o=a(6),E=(a(21),a(9)),m=function(e){function _(){return Object(n.a)(this,_),Object(s.a)(this,Object(u.a)(_).apply(this,arguments))}return Object(o.a)(_,e),Object(i.a)(_,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,null))}}]),_}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.35a207de.chunk.js.map