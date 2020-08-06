(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='# color-statistics\n\nReact color-statistics\n\n[![NPM version][npm-image]][npm-url]\n[![build status][travis-image]][travis-url]\n\n\x3c!-- [![Test coverage][coveralls-image]][coveralls-url] --\x3e\n\n[![node version][node-image]][node-url]\n[![npm download][download-image]][download-url]\n\n[npm-image]: https://img.shields.io/npm/v/color-statistics.svg?style=flat-square\n[npm-url]: https://npmjs.org/package/color-statistics\n[travis-image]: https://travis-ci.org/ybzjsxh/color-statistics.svg?branch=master\n[travis-url]: https://travis-ci.org/ybzjsxh/color-statistics\n[coveralls-image]: https://img.shields.io/coveralls/ybzjsxh/color-statistics.svg?style=flat-square\n[coveralls-url]: https://coveralls.io/r/ybzjsxh/color-statistics?branch=master\n[gemnasium-image]: https://img.shields.io/gemnasium/ybzjsxh/color-statistics.svg?style=flat-square\n[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square\n[node-url]: https://nodejs.org/download/\n[download-image]: https://img.shields.io/npm/dm/color-statistics.svg?style=flat-square\n[download-url]: https://npmjs.org/package/color-statistics\n\n## Screenshot\n\n<img src="https://front-images.oss-cn-hangzhou.aliyuncs.com/i4/8e7d52524baffa614678e9a7bd1118c7-1175-149.png" width="1000"/>\n\n## Browsers support\n\n| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |\n| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| IE 8 + ✔                                                                                                                                                                                                        | Firefox 31.0+ ✔                                                                                                                                                                                                   | Chrome 31.0+ ✔                                                                                                                                                                                                | Safari 7.0+ ✔                                                                                                                                                                                                 | Opera 30.0+ ✔                                                                                                                                                                                             |\n\n## Install\n\n[![color-statistics](https://nodei.co/npm/color-statistics.png)](https://npmjs.org/package/color-statistics)\n\n## Usage\n\n```js\nvar Statistics = require(\'color-statistics\');\nvar React = require(\'react\');\nvar ReactDOM = require(\'react-dom\');\n\nReactDOM.render(\n  <Statistics title=\'\' align=\'left\' type=\'success\' tip={<span>Statistics</span>} />,\n  container,\n);\n```\n\n## Examples\n\n`npm start` and then go to\n<http://localhost:9001>\n\nOnline examples: [github-pages](https://ybzjsxh.github.io/color-statistics/?path=/story/color-statistics--simple) or [vercel](https://color-statistics.vercel.app/?path=/story/color-statistics--simple)\n\n## API\n\n### Props\n\n|  name  |        type         |  default  |                                        description                                         |\n| :----: | :-----------------: | :-------: | :----------------------------------------------------------------------------------------: |\n|  type  |       string        | \'primary\' |                      one of [\'primary\', \'success\', \'warning\', \'info\']                      |\n| align  |       string        |  \'right\'  | one of [\'left\',\'right\',\'top\',\'bottom\', \'topLeft\', \'topRight\', \'bottomLeft\', \'bottomRight\'] |\n|  tip   | string \\| ReactNode |    \'\'     |                                         tips info                                          |\n| number |  string \\| number   |           |                                           number                                           |\n\n## Development\n\n```bash\nnpm install\nnpm start\n```\n\n## Test Case\n\n```bash\nnpm test\nnpm run chrome-test\n```\n\n## Coverage\n\n```bash\nnpm run coverage\n```\n\n## License\n\n`color-statistics` is released under the MIT license.\n'},334:function(module,exports){module.exports='import React from \'react\';\nimport Statistics from \'../src\';\n\nexport default () => (\n  <div>\n    <Statistics\n      title="default"\n      tip={<div>this is default tip</div>}\n      type="primary"\n      number={123123}\n    />\n    <Statistics\n      title="success"\n      tip={\n        <Statistics\n          title="success"\n          tip={<div>this is success tip</div>}\n          type="success"\n          number={123123}\n        />\n      }\n      align="bottom"\n      type="success"\n      number={123123}\n    />\n    <Statistics\n      title="warning"\n      tip={<div>this is warning tip</div>}\n      type="warning"\n      number={123123}\n    />\n    <Statistics title="info" tip={<div>this is info tip</div>} type="info" number={123123} />\n  </div>\n);\n'},335:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(209);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0)),_src=_interopRequireDefault(__webpack_require__(784));exports.default=function _default(){return _react.default.createElement("div",null,_react.default.createElement(_src.default,{title:"default",tip:_react.default.createElement("div",null,"this is default tip"),type:"primary",number:123123}),_react.default.createElement(_src.default,{title:"success",tip:_react.default.createElement(_src.default,{title:"success",tip:_react.default.createElement("div",null,"this is success tip"),type:"success",number:123123}),align:"bottom",type:"success",number:123123}),_react.default.createElement(_src.default,{title:"warning",tip:_react.default.createElement("div",null,"this is warning tip"),type:"warning",number:123123}),_react.default.createElement(_src.default,{title:"info",tip:_react.default.createElement("div",null,"this is info tip"),type:"info",number:123123}))}},343:function(module,exports,__webpack_require__){__webpack_require__(344),__webpack_require__(494),module.exports=__webpack_require__(495)},410:function(module,exports){},495:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(78),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(329),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(683),__webpack_require__(330)),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(685)}),module)}.call(this,__webpack_require__(258)(module))},685:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(332),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(78),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(333),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(334),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5__),_examples_simple__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(335),_examples_simple__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_examples_simple__WEBPACK_IMPORTED_MODULE_6__),_storybook_theming__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(339),_README_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(210);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_7__.themes.light,name:"color-statistics",url:"https://github.com/ybzjsxh/color-statistics#readme",title:"color-statistics"}});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a,{escapeHtml:!1,source:_README_md__WEBPACK_IMPORTED_MODULE_8__.a}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simple__WEBPACK_IMPORTED_MODULE_6___default.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("color-statistics",module).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y).addDecorator((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})).add("README",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown-body entry-content",style:{padding:24}},_ref)}),{source:{code:_README_md__WEBPACK_IMPORTED_MODULE_8__.a}}).add("simple",(function(){return _ref2}),{source:{code:rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5___default.a}})}.call(this,__webpack_require__(258)(module))},784:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(209);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=_interopRequireDefault(__webpack_require__(785)).default;exports.default=_default},785:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(209),_interopRequireWildcard=__webpack_require__(786);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0)),_rcTooltip=_interopRequireDefault(__webpack_require__(810)),_icons=__webpack_require__(809),_utils=__webpack_require__(790);__webpack_require__(791),__webpack_require__(793);var _default=(0,_react.forwardRef)((function Statistics(props,ref){var _props$type=props.type,type=void 0===_props$type?"primary":_props$type,_props$tip=props.tip,tip=void 0===_props$tip?"":_props$tip,title=props.title,_props$align=props.align,align=void 0===_props$align?"right":_props$align,number=props.number,domRef=(0,_react.useRef)(null);return(0,_react.useImperativeHandle)(ref,(function(){return domRef.current})),_react.default.createElement("div",{className:"container-".concat(type)},_react.default.createElement("div",{className:"title"},_react.default.createElement("div",{className:"title-content"},title),_react.default.createElement("div",{className:"title-tips"},_react.default.createElement(_rcTooltip.default,{overlay:tip,placement:align},_react.default.createElement(_icons.QuestionCircleOutlined,null)))),_react.default.createElement("div",{className:"number"},(0,_utils.formatNumber)(number)))}));exports.default=_default},790:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatNumber=function formatNumber(value){var seperator=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",digitNum=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,initV=value;if(null==="".concat(value).replace(/^\s*|\s*$|,*/g,"").match(/^\d*\.?\d*$/))return initV;value=digitNum>=0?"".concat(Number(value).toFixed(digitNum)):value;var r=[],tl=value.split(".")[0],tr=value.split(".")[1];if(tr=void 0!==tr?tr:"",null!==seperator&&""!==seperator){for(;tl.length>=3;)r.push(tl.substring(tl.length-3)),tl=tl.substring(0,tl.length-3);tl.length>0&&r.push(tl),r.reverse();var s=r.join(seperator);return""===tr?s:"".concat(s,".").concat(tr)}return value}},791:function(module,exports,__webpack_require__){var api=__webpack_require__(320),content=__webpack_require__(792);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},792:function(module,exports,__webpack_require__){(exports=__webpack_require__(321)(!1)).push([module.i,".container-style {\n  display: inline-block;\n  margin: 10px;\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  border: 1px solid #eee;\n  box-shadow: 0 10px 15px -5px rgba(13, 69, 141, 0.2);\n  border-radius: 6px;\n  color: #ffffff;\n  text-align: center;\n}\n.container-primary {\n  display: inline-block;\n  margin: 10px;\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  border: 1px solid #eee;\n  box-shadow: 0 10px 15px -5px rgba(13, 69, 141, 0.2);\n  border-radius: 6px;\n  color: #ffffff;\n  text-align: center;\n  background-image: linear-gradient(146deg, #78b9f8 0%, #4383ef 100%);\n}\n.container-success {\n  display: inline-block;\n  margin: 10px;\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  border: 1px solid #eee;\n  box-shadow: 0 10px 15px -5px rgba(13, 69, 141, 0.2);\n  border-radius: 6px;\n  color: #ffffff;\n  text-align: center;\n  background-image: linear-gradient(142deg, #7ce3b3 0%, #46c37c 100%);\n}\n.container-warning {\n  display: inline-block;\n  margin: 10px;\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  border: 1px solid #eee;\n  box-shadow: 0 10px 15px -5px rgba(13, 69, 141, 0.2);\n  border-radius: 6px;\n  color: #ffffff;\n  text-align: center;\n  background-image: linear-gradient(156deg, #fdd500 0%, #faaa00 100%);\n}\n.container-info {\n  display: inline-block;\n  margin: 10px;\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  border: 1px solid #eee;\n  box-shadow: 0 10px 15px -5px rgba(13, 69, 141, 0.2);\n  border-radius: 6px;\n  color: #ffffff;\n  text-align: center;\n  background-image: linear-gradient(157deg, #51e4ed 0%, #28c5d6 100%);\n}\n.title {\n  position: relative;\n  height: 40px;\n  text-align: center;\n  font-size: 16px;\n}\n.title-tips {\n  position: absolute;\n  top: 0;\n  right: 2px;\n  width: 12px;\n  height: 12px;\n}\n.number {\n  width: 100%;\n  font-size: 24px;\n  letter-spacing: 1.11px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n",""]),module.exports=exports},793:function(module,exports,__webpack_require__){var api=__webpack_require__(320),content=__webpack_require__(794);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},794:function(module,exports,__webpack_require__){(exports=__webpack_require__(321)(!1)).push([module.i,".rc-tooltip.rc-tooltip-zoom-enter,\n.rc-tooltip.rc-tooltip-zoom-leave {\n  display: block;\n}\n.rc-tooltip-zoom-enter,\n.rc-tooltip-zoom-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n          animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-tooltip-zoom-leave {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n          animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,\n.rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {\n  -webkit-animation-name: rcToolTipZoomIn;\n          animation-name: rcToolTipZoomIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {\n  -webkit-animation-name: rcToolTipZoomOut;\n          animation-name: rcToolTipZoomOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes rcToolTipZoomIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcToolTipZoomIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes rcToolTipZoomOut {\n  0% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n}\n@keyframes rcToolTipZoomOut {\n  0% {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(0, 0);\n  }\n}\n.rc-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.5;\n  opacity: 0.9;\n}\n.rc-tooltip-hidden {\n  display: none;\n}\n.rc-tooltip-placement-top,\n.rc-tooltip-placement-topLeft,\n.rc-tooltip-placement-topRight {\n  padding: 5px 0 9px 0;\n}\n.rc-tooltip-placement-right,\n.rc-tooltip-placement-rightTop,\n.rc-tooltip-placement-rightBottom {\n  padding: 0 5px 0 9px;\n}\n.rc-tooltip-placement-bottom,\n.rc-tooltip-placement-bottomLeft,\n.rc-tooltip-placement-bottomRight {\n  padding: 9px 0 5px 0;\n}\n.rc-tooltip-placement-left,\n.rc-tooltip-placement-leftTop,\n.rc-tooltip-placement-leftBottom {\n  padding: 0 9px 0 5px;\n}\n.rc-tooltip-inner {\n  padding: 8px 10px;\n  color: #fff;\n  text-align: left;\n  text-decoration: none;\n  background-color: #373737;\n  border-radius: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);\n  min-height: 34px;\n}\n.rc-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow,\n.rc-tooltip-placement-topLeft .rc-tooltip-arrow,\n.rc-tooltip-placement-topRight .rc-tooltip-arrow {\n  bottom: 4px;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #373737;\n}\n.rc-tooltip-placement-top .rc-tooltip-arrow {\n  left: 50%;\n}\n.rc-tooltip-placement-topLeft .rc-tooltip-arrow {\n  left: 15%;\n}\n.rc-tooltip-placement-topRight .rc-tooltip-arrow {\n  right: 15%;\n}\n.rc-tooltip-placement-right .rc-tooltip-arrow,\n.rc-tooltip-placement-rightTop .rc-tooltip-arrow,\n.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {\n  left: 4px;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #373737;\n}\n.rc-tooltip-placement-right .rc-tooltip-arrow {\n  top: 50%;\n}\n.rc-tooltip-placement-rightTop .rc-tooltip-arrow {\n  top: 15%;\n  margin-top: 0;\n}\n.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {\n  bottom: 15%;\n}\n.rc-tooltip-placement-left .rc-tooltip-arrow,\n.rc-tooltip-placement-leftTop .rc-tooltip-arrow,\n.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {\n  right: 4px;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #373737;\n}\n.rc-tooltip-placement-left .rc-tooltip-arrow {\n  top: 50%;\n}\n.rc-tooltip-placement-leftTop .rc-tooltip-arrow {\n  top: 15%;\n  margin-top: 0;\n}\n.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {\n  bottom: 15%;\n}\n.rc-tooltip-placement-bottom .rc-tooltip-arrow,\n.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,\n.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {\n  top: 4px;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #373737;\n}\n.rc-tooltip-placement-bottom .rc-tooltip-arrow {\n  left: 50%;\n}\n.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {\n  left: 15%;\n}\n.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {\n  right: 15%;\n}\n",""]),module.exports=exports}},[[343,1,2]]]);
//# sourceMappingURL=main.47ecbfe234f53e09e068.bundle.js.map