/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonOptions = {
    classKind: 'kind',
    name: 'name',
    platform: 'platform',
    description: 'description',
    children: 'children',
    value: 'value',
    instance: 'instance',
    kind: 'kind',
    members: 'members',
    methodType: 'returns',
    params: 'params',
    paramType: 'type',
    properties: 'properties',
    examples: 'examples',
    type: 'type',
    tags: 'tags',
    title: 'title',
    static: 'static'
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(19);
exports.Metadata = metadata_1.Metadata;
var class_1 = __webpack_require__(13);
exports.Class = class_1.Class;
var example_1 = __webpack_require__(14);
exports.Example = example_1.Example;
var method_1 = __webpack_require__(15);
exports.Method = method_1.Method;
var param_1 = __webpack_require__(16);
exports.Param = param_1.Param;
var prop_1 = __webpack_require__(17);
exports.Prop = prop_1.Prop;
var model_1 = __webpack_require__(20);
exports.Model = model_1.Model;
var style_1 = __webpack_require__(18);
exports.Style = style_1.Style;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var doc_js_parser_options_1 = __webpack_require__(0);
var Common = (function () {
    function Common() {
    }
    Common.prototype.getName = function (obj) {
        return obj[doc_js_parser_options_1.CommonOptions.name] ? obj[doc_js_parser_options_1.CommonOptions.name] : '';
    };
    Common.prototype.getShortDescription = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value];
        }
        else {
            return '';
        }
    };
    Common.prototype.getDescription = function (obj) {
        var str = '';
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            if (obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children].length > 1)
                obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children]
                    .forEach(function (item) {
                    item[doc_js_parser_options_1.CommonOptions.children]
                        .forEach(function (item) {
                        str += item[doc_js_parser_options_1.CommonOptions.value] + ' ';
                    });
                });
            return str;
        }
        else {
            return '';
        }
    };
    Common.prototype.getKind = function (obj) {
        return obj[doc_js_parser_options_1.CommonOptions.classKind] ? obj[doc_js_parser_options_1.CommonOptions.classKind] : 'class';
    };
    return Common;
}());
exports.Common = Common;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var doc_js_parser_options_1 = __webpack_require__(0);
var GetExamples = (function () {
    function GetExamples() {
    }
    GetExamples.prototype.parseExample = function (obj) {
        return new model_1.Example({
            code: this.getCode(obj),
            description: this.getDescription(obj),
            shortDescription: this.getShortDescription(obj)
        });
    };
    GetExamples.prototype.getCode = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description].split(/```/g)[1];
        }
        else {
            return '';
        }
    };
    GetExamples.prototype.getDescriptionArr = function (obj) {
        var outArr = [];
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            var temp = obj[doc_js_parser_options_1.CommonOptions.description].replace(/\r\n\r\n/g, '\n\n').split('\n\n');
            temp.forEach(function (item) {
                if (!/```/g.test(item)) {
                    outArr.push(item);
                }
            });
            return outArr;
        }
        else {
            return [];
        }
    };
    GetExamples.prototype.getDescription = function (obj) {
        return this.getDescriptionArr(obj)[1];
    };
    GetExamples.prototype.getShortDescription = function (obj) {
        return this.getDescriptionArr(obj)[0];
    };
    GetExamples.prototype.getExamples = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.examples].length) {
            return obj[doc_js_parser_options_1.CommonOptions.examples].map(function (item) { return _this.parseExample(item); });
        }
        else {
            return [];
        }
    };
    return GetExamples;
}());
exports.GetExamples = GetExamples;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var doc_js_parser_options_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var GetParams = (function () {
    function GetParams() {
        this.common = new common_1.Common();
    }
    GetParams.prototype.parseParam = function (obj) {
        return new model_1.Param({
            name: this.common.getName(obj),
            type: this.getType(obj),
            required: null,
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj)
        });
    };
    GetParams.prototype.getType = function (obj) {
        return obj[doc_js_parser_options_1.CommonOptions.paramType] ? obj[doc_js_parser_options_1.CommonOptions.paramType][doc_js_parser_options_1.CommonOptions.paramType] : '';
    };
    GetParams.prototype.getParams = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.params] && obj[doc_js_parser_options_1.CommonOptions.params].length) {
            return obj[doc_js_parser_options_1.CommonOptions.params].map(function (item) { return _this.parseParam(item); });
        }
        else {
            return [];
        }
    };
    return GetParams;
}());
exports.GetParams = GetParams;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//
// import { DocJsParser } from './doc-js.parser/doc-js.parser';
//
//
// const json = [
//   {
//     "description": {
//       "type": "root",
//       "children": [
//         {
//           "type": "paragraph",
//           "children": [
//             {
//               "type": "inlineCode",
//               "value": "RkButton",
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 11,
//                   "offset": 10
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "text",
//               "value": " is a basic button component.",
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 11,
//                   "offset": 10
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 40,
//                   "offset": 39
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 40,
//               "offset": 39
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 1,
//           "column": 1,
//           "offset": 0
//         },
//         "end": {
//           "line": 1,
//           "column": 40,
//           "offset": 39
//         }
//       }
//     },
//     "tags": [
//       {
//         "title": "extends",
//         "description": null,
//         "lineNumber": 3,
//         "type": null,
//         "name": "RkComponent"
//       },
//       {
//         "title": "example",
//         "description": "Simple usage example:\r\n\r\n```\r\n<RkButton>Button</RkButton>\r\n```",
//         "lineNumber": 5
//       },
//       {
//         "title": "example",
//         "description": "Custom content inside button\r\n\r\n`RkButton` can contains not only text but also other components:\r\n\r\n```\r\n<RkButton>\r\n   <Image\r\n     style={{width: 50, height: 50}}\r\n     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>\r\n</RkButton>\r\n```",
//         "lineNumber": 11
//       },
//       {
//         "title": "example",
//         "description": "Using `rkType`prop\r\n\r\n`RkButton` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n```\r\n<RkButton rkType='success'>Accept</RkButton>\r\n<RkButton rkType='danger small'>Cancel</RkButton>\r\n```",
//         "lineNumber": 24
//       },
//       {
//         "title": "example",
//         "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\n```\r\nimport {RkTheme} from 'react-native-ui-kitten';\r\n\r\n RkTheme.setType('RkButton', 'dark', {\r\n  backgroundColor: 'gray',\r\n  borderRadius: 10,\r\n});\r\n\r\n RkTheme.setType('RkButton', 'icon', {\r\n  fontSize: 24,\r\n  width: 46,\r\n  borderRadius: 25\r\n});\r\n\r\n//...\r\n\r\n<RkButton rkType='dark'>SUBMIT</RkButton>\r\n\r\n<RkButton rkType='dark icon' style={{marginLeft: 20}}>\r\n   <Text>+</Text>\r\n</RkButton>\r\n\r\n```",
//         "lineNumber": 35
//       },
//       {
//         "title": "styles",
//         "description": "Available properties:\r\n- `color` : Color of content of `RkButton`. Applies only if content of `RkButton` is `string`.\r\n- `backgroundColor` : Background color of `RkButton`.\r\n- `borderWidth` : Width of outer border.\r\n- `borderRadius` : Border radius of `RkButton`.\r\n- `borderColor` : Color of border.\r\n- `fontSize` : Size of content inside. Applied only for first level children of `RkButton`.\r\n- `width` : Width of `RkButton`.\r\n- `height` : Height of `RkButton`.",
//         "lineNumber": 64
//       },
//       {
//         "title": "example",
//         "description": "Advanced Styling\r\n\r\nIt's also possible to implement more detailed styling. RkButton consists from couple of base react component. You can easily set styles for each component.\r\n\r\nFor example you can change the opacity of content passed to RkButton:\r\n\r\n```\r\nRkTheme.setType('RkButton', 'faded', {\r\n  content: {\r\n    opacity: 0.6,\r\n  }\r\n});\r\n```",
//         "lineNumber": 75
//       },
//       {
//         "title": "styles",
//         "description": "Available properties:\r\n- `container` : `TouchableOpacity` - container of `RkButton`.\r\n- `content` : If you use plain text then `RkText`. If you insert children - then style will be applied to all children on first level.",
//         "lineNumber": 89
//       },
//       {
//         "title": "example",
//         "description": "Inline styling\r\n\r\nIt's possible to set styles inline. Use props style for container component and contentStyle for content component.\r\n\r\n```\r\n<RkButton\r\n   style={{backgroundColor: 'red'}}\r\n   contentStyle={{color: 'white'}}> Hello </RkButton>\r\n```",
//         "lineNumber": 93
//       },
//       {
//         "title": "property",
//         "description": "Types for stylization component\r\nBy default `RkButton` supports following types: `primary`, `info`, `warning`, `danger`, `success`, `outline`, `rounded`,\r\n`circle`, `small`, `medium`, `large`, `xlarge`, `clear`, `stretch`",
//         "lineNumber": 103,
//         "type": {
//           "type": "NameExpression",
//           "name": "string"
//         },
//         "name": "rkType"
//       },
//       {
//         "title": "property",
//         "description": "Style for button container",
//         "lineNumber": 106,
//         "type": {
//           "type": "NameExpression",
//           "name": "style"
//         },
//         "name": "style"
//       },
//       {
//         "title": "property",
//         "description": "Style for each button's children",
//         "lineNumber": 107,
//         "type": {
//           "type": "NameExpression",
//           "name": "style"
//         },
//         "name": "contentStyle"
//       },
//       {
//         "title": "property",
//         "description": "Called when the touch is released, but not if cancelled.",
//         "lineNumber": 108,
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         },
//         "name": "onPress"
//       },
//       {
//         "title": "property",
//         "description": "Same as `TouchableWithoutFeedback.onPressIn`",
//         "lineNumber": 109,
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         },
//         "name": "onPressIn"
//       },
//       {
//         "title": "property",
//         "description": "Same as `TouchableWithoutFeedback.onPressOut`",
//         "lineNumber": 110,
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         },
//         "name": "onPressOut"
//       },
//       {
//         "title": "property",
//         "description": "Called when the touch is released and is longer than usual press, but not if cancelled.",
//         "lineNumber": 111,
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         },
//         "name": "onLongPress"
//       }
//     ],
//     "loc": {
//       "start": {
//         "line": 10,
//         "column": 0
//       },
//       "end": {
//         "line": 122,
//         "column": 3
//       }
//     },
//     "context": {
//       "loc": {
//         "start": {
//           "line": 124,
//           "column": 0
//         },
//         "end": {
//           "line": 180,
//           "column": 1
//         }
//       },
//       "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\button\\rkButton.js"
//     },
//     "augments": [
//       {
//         "title": "extends",
//         "description": null,
//         "lineNumber": 3,
//         "type": null,
//         "name": "RkComponent"
//       }
//     ],
//     "examples": [
//       {
//         "description": "Simple usage example:\r\n\r\n```\r\n<RkButton>Button</RkButton>\r\n```"
//       },
//       {
//         "description": "Custom content inside button\r\n\r\n`RkButton` can contains not only text but also other components:\r\n\r\n```\r\n<RkButton>\r\n   <Image\r\n     style={{width: 50, height: 50}}\r\n     source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>\r\n</RkButton>\r\n```"
//       },
//       {
//         "description": "Using `rkType`prop\r\n\r\n`RkButton` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n```\r\n<RkButton rkType='success'>Accept</RkButton>\r\n<RkButton rkType='danger small'>Cancel</RkButton>\r\n```"
//       },
//       {
//         "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\n```\r\nimport {RkTheme} from 'react-native-ui-kitten';\r\n\r\n RkTheme.setType('RkButton', 'dark', {\r\n  backgroundColor: 'gray',\r\n  borderRadius: 10,\r\n});\r\n\r\n RkTheme.setType('RkButton', 'icon', {\r\n  fontSize: 24,\r\n  width: 46,\r\n  borderRadius: 25\r\n});\r\n\r\n//...\r\n\r\n<RkButton rkType='dark'>SUBMIT</RkButton>\r\n\r\n<RkButton rkType='dark icon' style={{marginLeft: 20}}>\r\n   <Text>+</Text>\r\n</RkButton>\r\n\r\n```"
//       },
//       {
//         "description": "Advanced Styling\r\n\r\nIt's also possible to implement more detailed styling. RkButton consists from couple of base react component. You can easily set styles for each component.\r\n\r\nFor example you can change the opacity of content passed to RkButton:\r\n\r\n```\r\nRkTheme.setType('RkButton', 'faded', {\r\n  content: {\r\n    opacity: 0.6,\r\n  }\r\n});\r\n```"
//       },
//       {
//         "description": "Inline styling\r\n\r\nIt's possible to set styles inline. Use props style for container component and contentStyle for content component.\r\n\r\n```\r\n<RkButton\r\n   style={{backgroundColor: 'red'}}\r\n   contentStyle={{color: 'white'}}> Hello </RkButton>\r\n```"
//       }
//     ],
//     "params": [],
//     "properties": [
//       {
//         "title": "property",
//         "name": "rkType",
//         "lineNumber": 103,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Types for stylization component\nBy default ",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 12,
//                       "offset": 44
//                     },
//                     "indent": [
//                       1
//                     ]
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "RkButton",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 12,
//                       "offset": 44
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 22,
//                       "offset": 54
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": " supports following types: ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 22,
//                       "offset": 54
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 49,
//                       "offset": 81
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "primary",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 49,
//                       "offset": 81
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 58,
//                       "offset": 90
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 58,
//                       "offset": 90
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 60,
//                       "offset": 92
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "info",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 60,
//                       "offset": 92
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 66,
//                       "offset": 98
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 66,
//                       "offset": 98
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 68,
//                       "offset": 100
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "warning",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 68,
//                       "offset": 100
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 77,
//                       "offset": 109
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 77,
//                       "offset": 109
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 79,
//                       "offset": 111
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "danger",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 79,
//                       "offset": 111
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 87,
//                       "offset": 119
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 87,
//                       "offset": 119
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 89,
//                       "offset": 121
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "success",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 89,
//                       "offset": 121
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 98,
//                       "offset": 130
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 98,
//                       "offset": 130
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 100,
//                       "offset": 132
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "outline",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 100,
//                       "offset": 132
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 109,
//                       "offset": 141
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 109,
//                       "offset": 141
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 111,
//                       "offset": 143
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "rounded",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 111,
//                       "offset": 143
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 120,
//                       "offset": 152
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ",\n",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 120,
//                       "offset": 152
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 1,
//                       "offset": 155
//                     },
//                     "indent": [
//                       1
//                     ]
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "circle",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 1,
//                       "offset": 155
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 9,
//                       "offset": 163
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 9,
//                       "offset": 163
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 11,
//                       "offset": 165
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "small",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 11,
//                       "offset": 165
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 18,
//                       "offset": 172
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 18,
//                       "offset": 172
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 20,
//                       "offset": 174
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "medium",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 20,
//                       "offset": 174
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 28,
//                       "offset": 182
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 28,
//                       "offset": 182
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 30,
//                       "offset": 184
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "large",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 30,
//                       "offset": 184
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 37,
//                       "offset": 191
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 37,
//                       "offset": 191
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 39,
//                       "offset": 193
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "xlarge",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 39,
//                       "offset": 193
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 47,
//                       "offset": 201
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 47,
//                       "offset": 201
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 49,
//                       "offset": 203
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "clear",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 49,
//                       "offset": 203
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 56,
//                       "offset": 210
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 56,
//                       "offset": 210
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 58,
//                       "offset": 212
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "stretch",
//                   "position": {
//                     "start": {
//                       "line": 3,
//                       "column": 58,
//                       "offset": 212
//                     },
//                     "end": {
//                       "line": 3,
//                       "column": 67,
//                       "offset": 221
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 3,
//                   "column": 67,
//                   "offset": 221
//                 },
//                 "indent": [
//                   1,
//                   1
//                 ]
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 3,
//               "column": 67,
//               "offset": 221
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "string"
//         }
//       },
//       {
//         "title": "property",
//         "name": "style",
//         "lineNumber": 106,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Style for button container",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 27,
//                       "offset": 26
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 27,
//                   "offset": 26
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 27,
//               "offset": 26
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "style"
//         }
//       },
//       {
//         "title": "property",
//         "name": "contentStyle",
//         "lineNumber": 107,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Style for each button's children",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 33,
//                       "offset": 32
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 33,
//                   "offset": 32
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 33,
//               "offset": 32
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "style"
//         }
//       },
//       {
//         "title": "property",
//         "name": "onPress",
//         "lineNumber": 108,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Called when the touch is released, but not if cancelled.",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 57,
//                       "offset": 56
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 57,
//                   "offset": 56
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 57,
//               "offset": 56
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         }
//       },
//       {
//         "title": "property",
//         "name": "onPressIn",
//         "lineNumber": 109,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Same as ",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 9,
//                       "offset": 8
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "TouchableWithoutFeedback.onPressIn",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 9,
//                       "offset": 8
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 45,
//                       "offset": 44
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 45,
//                   "offset": 44
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 45,
//               "offset": 44
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         }
//       },
//       {
//         "title": "property",
//         "name": "onPressOut",
//         "lineNumber": 110,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Same as ",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 9,
//                       "offset": 8
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "TouchableWithoutFeedback.onPressOut",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 9,
//                       "offset": 8
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 46,
//                       "offset": 45
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 46,
//                   "offset": 45
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 46,
//               "offset": 45
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         }
//       },
//       {
//         "title": "property",
//         "name": "onLongPress",
//         "lineNumber": 111,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Called when the touch is released and is longer than usual press, but not if cancelled.",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 88,
//                       "offset": 87
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 88,
//                   "offset": 87
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 88,
//               "offset": 87
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "function"
//         }
//       }
//     ],
//     "returns": [],
//     "sees": [],
//     "throws": [],
//     "todos": [],
//     "name": "RkButton",
//     "kind": "class",
//     "members": {
//       "global": [],
//       "inner": [],
//       "instance": [],
//       "events": [],
//       "static": []
//     },
//     "path": [
//       {
//         "name": "RkButton",
//         "kind": "class"
//       }
//     ],
//     "namespace": "RkButton"
//   },
//   {
//     "description": {
//       "type": "root",
//       "children": [
//         {
//           "type": "paragraph",
//           "children": [
//             {
//               "type": "inlineCode",
//               "value": "RkCard",
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 9,
//                   "offset": 8
//                 },
//                 "indent": []
//               }
//             },
//             {
//               "type": "text",
//               "value": " component used to render card view in your application.\nIt's usually being used with its props (described below) applied to standard react or custom components.",
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 9,
//                   "offset": 8
//                 },
//                 "end": {
//                   "line": 2,
//                   "column": 105,
//                   "offset": 170
//                 },
//                 "indent": [
//                   1
//                 ]
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 2,
//               "column": 105,
//               "offset": 170
//             },
//             "indent": [
//               1
//             ]
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 1,
//           "column": 1,
//           "offset": 0
//         },
//         "end": {
//           "line": 2,
//           "column": 105,
//           "offset": 170
//         }
//       }
//     },
//     "tags": [
//       {
//         "title": "extends",
//         "description": null,
//         "lineNumber": 3,
//         "type": null,
//         "name": "RkComponent"
//       },
//       {
//         "title": "example",
//         "description": "Usage example:\r\n\r\n```\r\n<RkCard>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardContent>\r\n    <Text> quick brown fox jumps over the lazy dog</Text>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <Text>Footer</Text>\r\n  </View>\r\n</RkCard>\r\n```",
//         "lineNumber": 6
//       },
//       {
//         "title": "style",
//         "description": "There are 6 `RkCard` nested element props which can be applied to elements inside `RkCard`:\r\n- `rkCardContainer` : Used for styling root card container.\r\n- `rkCardHeader` : Used for styling header of card.\r\n- `rkCardImg` : Used for styling image content in card.\r\n- `rkCardImgOverlay` : Used for styling component which will be displayed over the image.\r\n- `rkCardContent` : Used for styling content.\r\n- `rkCardFooter` : Used for styling footer of card.",
//         "lineNumber": 23
//       },
//       {
//         "title": "example",
//         "description": "Using `rkType`prop\r\n\r\n`RkCard` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n<RkCard rkType='shadowed'>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <View rkCardContent>\r\n    <Text>Shadowed card</Text>\r\n  </View>\r\n</RkCard>\r\n```",
//         "lineNumber": 31
//       },
//       {
//         "title": "example",
//         "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\n`rkType` used here to set style for each of 6 `rkCard` nested element props.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\nRkTheme.setType('RkCard', 'story', {\r\n  img: {\r\n    height: 100,\r\n    opacity: 0.7\r\n  },\r\n  header: {\r\n    alignSelf: 'center'\r\n  },\r\n  content:{\r\n    alignSelf:'center'\r\n  }\r\n});\r\n\r\n//...\r\n\r\n\r\n<RkCard rkType='story'>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardHeader>\r\n    <RkText rkType='header'>Once upon a time</RkText>\r\n  </View>\r\n  <View rkCardContent>\r\n    <RkText style={{textAlign:'center'}}>\r\n      One morning, when Gregor Samsa woke from happy dreams, he found himself transformed in ...\r\n    </RkText>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <RkButton rkType='small outline'>Learn More</RkButton>\r\n    <RkButton rkType='small'>Read later</RkButton>\r\n  </View>\r\n</RkCard>",
//         "lineNumber": 46
//       },
//       {
//         "title": "styles",
//         "description": "Nested element props available for styling:\r\n- `container` : Style key for `rkCardContainer`.\r\n- `header` : Style key for `rkCardHeader`.\r\n- `content` : Style key for `rkCardContent`.\r\n- `footer` : Style key for `rkCardFooter`.\r\n- `img` : Style key for `rkCardImg`.\r\n- `imgOverlay` : Style key for `rkCardImgOverlay`.",
//         "lineNumber": 84
//       },
//       {
//         "title": "property",
//         "description": "Types for stylization component\r\nBy default `RkCard` supports following types: `shadowed`, `heroImage`",
//         "lineNumber": 92,
//         "type": {
//           "type": "NameExpression",
//           "name": "string"
//         },
//         "name": "rkType"
//       },
//       {
//         "title": "property",
//         "description": "Style for root container of `RkCard`",
//         "lineNumber": 94,
//         "type": {
//           "type": "NameExpression",
//           "name": "style"
//         },
//         "name": "style"
//       }
//     ],
//     "loc": {
//       "start": {
//         "line": 5,
//         "column": 0
//       },
//       "end": {
//         "line": 100,
//         "column": 3
//       }
//     },
//     "context": {
//       "loc": {
//         "start": {
//           "line": 101,
//           "column": 0
//         },
//         "end": {
//           "line": 161,
//           "column": 1
//         }
//       },
//       "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\card\\rkCard.js"
//     },
//     "augments": [
//       {
//         "title": "extends",
//         "description": null,
//         "lineNumber": 3,
//         "type": null,
//         "name": "RkComponent"
//       }
//     ],
//     "examples": [
//       {
//         "description": "Usage example:\r\n\r\n```\r\n<RkCard>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardContent>\r\n    <Text> quick brown fox jumps over the lazy dog</Text>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <Text>Footer</Text>\r\n  </View>\r\n</RkCard>\r\n```"
//       },
//       {
//         "description": "Using `rkType`prop\r\n\r\n`RkCard` has `rkType` prop. This prop works similar to CSS-class in web. It's possible to set more than one type.\r\nThere are already some predefined types. Here is example of how to use rkType\r\n\r\n<RkCard rkType='shadowed'>\r\n  <View rkCardHeader>\r\n    <Text>Header</Text>\r\n  </View>\r\n  <View rkCardContent>\r\n    <Text>Shadowed card</Text>\r\n  </View>\r\n</RkCard>\r\n```"
//       },
//       {
//         "description": "Define new rkTypes\r\n\r\nIt's easy and very common to create new types. Main point for all customization is `RkTheme` object.\r\n`rkType` used here to set style for each of 6 `rkCard` nested element props.\r\nNew rkTypes are defined using `setType` method of `RkTheme`:\r\n\r\nRkTheme.setType('RkCard', 'story', {\r\n  img: {\r\n    height: 100,\r\n    opacity: 0.7\r\n  },\r\n  header: {\r\n    alignSelf: 'center'\r\n  },\r\n  content:{\r\n    alignSelf:'center'\r\n  }\r\n});\r\n\r\n//...\r\n\r\n\r\n<RkCard rkType='story'>\r\n  <Image rkCardImg source={require('../img/sea.jpg')}/>\r\n  <View rkCardHeader>\r\n    <RkText rkType='header'>Once upon a time</RkText>\r\n  </View>\r\n  <View rkCardContent>\r\n    <RkText style={{textAlign:'center'}}>\r\n      One morning, when Gregor Samsa woke from happy dreams, he found himself transformed in ...\r\n    </RkText>\r\n  </View>\r\n  <View rkCardFooter>\r\n    <RkButton rkType='small outline'>Learn More</RkButton>\r\n    <RkButton rkType='small'>Read later</RkButton>\r\n  </View>\r\n</RkCard>"
//       }
//     ],
//     "params": [
//       {
//         "title": "param",
//         "name": "props",
//         "lineNumber": 115
//       }
//     ],
//     "properties": [
//       {
//         "title": "property",
//         "name": "rkType",
//         "lineNumber": 92,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Types for stylization component\nBy default ",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 12,
//                       "offset": 44
//                     },
//                     "indent": [
//                       1
//                     ]
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "RkCard",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 12,
//                       "offset": 44
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 20,
//                       "offset": 52
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": " supports following types: ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 20,
//                       "offset": 52
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 47,
//                       "offset": 79
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "shadowed",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 47,
//                       "offset": 79
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 57,
//                       "offset": 89
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "text",
//                   "value": ", ",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 57,
//                       "offset": 89
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 59,
//                       "offset": 91
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "heroImage",
//                   "position": {
//                     "start": {
//                       "line": 2,
//                       "column": 59,
//                       "offset": 91
//                     },
//                     "end": {
//                       "line": 2,
//                       "column": 70,
//                       "offset": 102
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 2,
//                   "column": 70,
//                   "offset": 102
//                 },
//                 "indent": [
//                   1
//                 ]
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 2,
//               "column": 70,
//               "offset": 102
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "string"
//         }
//       },
//       {
//         "title": "property",
//         "name": "style",
//         "lineNumber": 94,
//         "description": {
//           "type": "root",
//           "children": [
//             {
//               "type": "paragraph",
//               "children": [
//                 {
//                   "type": "text",
//                   "value": "Style for root container of ",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 1,
//                       "offset": 0
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 29,
//                       "offset": 28
//                     },
//                     "indent": []
//                   }
//                 },
//                 {
//                   "type": "inlineCode",
//                   "value": "RkCard",
//                   "position": {
//                     "start": {
//                       "line": 1,
//                       "column": 29,
//                       "offset": 28
//                     },
//                     "end": {
//                       "line": 1,
//                       "column": 37,
//                       "offset": 36
//                     },
//                     "indent": []
//                   }
//                 }
//               ],
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 37,
//                   "offset": 36
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 37,
//               "offset": 36
//             }
//           }
//         },
//         "type": {
//           "type": "NameExpression",
//           "name": "style"
//         }
//       }
//     ],
//     "returns": [],
//     "sees": [],
//     "throws": [],
//     "todos": [],
//     "name": "RkCard",
//     "kind": "class",
//     "members": {
//       "global": [],
//       "inner": [],
//       "instance": [],
//       "events": [],
//       "static": []
//     },
//     "path": [
//       {
//         "name": "RkCard",
//         "kind": "class"
//       }
//     ],
//     "namespace": "RkCard"
//   },
//   {
//     "description": {
//       "type": "root",
//       "children": [
//         {
//           "type": "paragraph",
//           "children": [
//             {
//               "type": "text",
//               "value": "RkComponent is component",
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 25,
//                   "offset": 24
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 25,
//               "offset": 24
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 1,
//           "column": 1,
//           "offset": 0
//         },
//         "end": {
//           "line": 1,
//           "column": 25,
//           "offset": 24
//         }
//       }
//     },
//     "tags": [],
//     "loc": {
//       "start": {
//         "line": 7,
//         "column": 0
//       },
//       "end": {
//         "line": 9,
//         "column": 3
//       }
//     },
//     "context": {
//       "loc": {
//         "start": {
//           "line": 10,
//           "column": 0
//         },
//         "end": {
//           "line": 134,
//           "column": 1
//         }
//       },
//       "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//     },
//     "augments": [
//       {
//         "title": "augments",
//         "name": "Component"
//       }
//     ],
//     "examples": [],
//     "params": [],
//     "properties": [],
//     "returns": [],
//     "sees": [],
//     "throws": [],
//     "todos": [],
//     "name": "RkComponent",
//     "kind": "class",
//     "members": {
//       "global": [],
//       "inner": [],
//       "instance": [
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{string} Name of component",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 27,
//                         "offset": 26
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 27,
//                     "offset": 26
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 27,
//                 "offset": 26
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 13,
//               "column": 2
//             },
//             "end": {
//               "line": 15,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 16,
//                 "column": 2
//               },
//               "end": {
//                 "line": 16,
//                 "column": 21
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "componentName",
//           "kind": "member",
//           "memberof": "RkComponent",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "RkComponent",
//               "kind": "class"
//             },
//             {
//               "name": "componentName",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "RkComponent#componentName"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{object} mapping",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 17,
//                         "offset": 16
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 17,
//                     "offset": 16
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 17,
//                 "offset": 16
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 17,
//               "column": 2
//             },
//             "end": {
//               "line": 19,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 20,
//                 "column": 2
//               },
//               "end": {
//                 "line": 20,
//                 "column": 19
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "typeMapping",
//           "kind": "member",
//           "memberof": "RkComponent",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "RkComponent",
//               "kind": "class"
//             },
//             {
//               "name": "typeMapping",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "RkComponent#typeMapping"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{string} base style name",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 25,
//                         "offset": 24
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 25,
//                     "offset": 24
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 25,
//                 "offset": 24
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 21,
//               "column": 2
//             },
//             "end": {
//               "line": 23,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 24,
//                 "column": 2
//               },
//               "end": {
//                 "line": 24,
//                 "column": 22
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "baseStyle",
//           "kind": "member",
//           "memberof": "RkComponent",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "RkComponent",
//               "kind": "class"
//             },
//             {
//               "name": "baseStyle",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "RkComponent#baseStyle"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{string} default type name",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 27,
//                         "offset": 26
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 27,
//                     "offset": 26
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 27,
//                 "offset": 26
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 26,
//               "column": 2
//             },
//             "end": {
//               "line": 28,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 29,
//                 "column": 2
//               },
//               "end": {
//                 "line": 29,
//                 "column": 24
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "defaultType",
//           "kind": "member",
//           "memberof": "RkComponent",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "RkComponent",
//               "kind": "class"
//             },
//             {
//               "name": "defaultType",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "RkComponent#defaultType"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "used to compile rkTypes",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 24,
//                         "offset": 23
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 24,
//                     "offset": 23
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 24,
//                 "offset": 23
//               }
//             }
//           },
//           "tags": [
//             {
//               "title": "param",
//               "description": null,
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "additionalTypes"
//             },
//             {
//               "title": "returns",
//               "description": "styles",
//               "lineNumber": 3,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "array"
//               }
//             }
//           ],
//           "loc": {
//             "start": {
//               "line": 31,
//               "column": 2
//             },
//             "end": {
//               "line": 35,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 36,
//                 "column": 2
//               },
//               "end": {
//                 "line": 41,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [
//             {
//               "title": "param",
//               "name": "additionalTypes",
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             }
//           ],
//           "properties": [],
//           "returns": [
//             {
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "styles",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 7,
//                             "offset": 6
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 7,
//                         "offset": 6
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 7,
//                     "offset": 6
//                   }
//                 }
//               },
//               "title": "returns",
//               "type": {
//                 "type": "NameExpression",
//                 "name": "array"
//               }
//             }
//           ],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "defineStyles",
//           "kind": "function",
//           "memberof": "RkComponent",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "RkComponent",
//               "kind": "class"
//             },
//             {
//               "name": "defineStyles",
//               "kind": "function",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "RkComponent#defineStyles"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "Extracts non style value",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 25,
//                         "offset": 24
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 25,
//                     "offset": 24
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 25,
//                 "offset": 24
//               }
//             }
//           },
//           "tags": [
//             {
//               "title": "param",
//               "description": null,
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "styles"
//             },
//             {
//               "title": "param",
//               "description": null,
//               "lineNumber": 3,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "property"
//             },
//             {
//               "title": "returns",
//               "description": "something",
//               "lineNumber": 4,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "object"
//               }
//             }
//           ],
//           "loc": {
//             "start": {
//               "line": 43,
//               "column": 2
//             },
//             "end": {
//               "line": 48,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 49,
//                 "column": 2
//               },
//               "end": {
//                 "line": 58,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\components\\rkComponent.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [
//             {
//               "title": "param",
//               "name": "styles",
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             },
//             {
//               "title": "param",
//               "name": "property",
//               "lineNumber": 3,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             }
//           ],
//           "properties": [],
//           "returns": [
//             {
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "something",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 10,
//                             "offset": 9
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 10,
//                         "offset": 9
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 10,
//                     "offset": 9
//                   }
//                 }
//               },
//               "title": "returns",
//               "type": {
//                 "type": "NameExpression",
//                 "name": "object"
//               }
//             }
//           ],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "extractNonStyleValue",
//           "kind": "function",
//           "memberof": "RkComponent",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "RkComponent",
//               "kind": "class"
//             },
//             {
//               "name": "extractNonStyleValue",
//               "kind": "function",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "RkComponent#extractNonStyleValue"
//         }
//       ],
//       "events": [],
//       "static": []
//     },
//     "path": [
//       {
//         "name": "RkComponent",
//         "kind": "class"
//       }
//     ],
//     "namespace": "RkComponent"
//   },
//   {
//     "description": {
//       "type": "root",
//       "children": [
//         {
//           "type": "paragraph",
//           "children": [
//             {
//               "type": "text",
//               "value": "Theme manager",
//               "position": {
//                 "start": {
//                   "line": 1,
//                   "column": 1,
//                   "offset": 0
//                 },
//                 "end": {
//                   "line": 1,
//                   "column": 14,
//                   "offset": 13
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 1,
//               "column": 1,
//               "offset": 0
//             },
//             "end": {
//               "line": 1,
//               "column": 14,
//               "offset": 13
//             },
//             "indent": []
//           }
//         },
//         {
//           "type": "paragraph",
//           "children": [
//             {
//               "type": "text",
//               "value": "Theme manager class, entry point for all manipulations with customization.",
//               "position": {
//                 "start": {
//                   "line": 3,
//                   "column": 1,
//                   "offset": 17
//                 },
//                 "end": {
//                   "line": 3,
//                   "column": 75,
//                   "offset": 91
//                 },
//                 "indent": []
//               }
//             }
//           ],
//           "position": {
//             "start": {
//               "line": 3,
//               "column": 1,
//               "offset": 17
//             },
//             "end": {
//               "line": 3,
//               "column": 75,
//               "offset": 91
//             },
//             "indent": []
//           }
//         }
//       ],
//       "position": {
//         "start": {
//           "line": 1,
//           "column": 1,
//           "offset": 0
//         },
//         "end": {
//           "line": 3,
//           "column": 75,
//           "offset": 91
//         }
//       }
//     },
//     "tags": [],
//     "loc": {
//       "start": {
//         "line": 9,
//         "column": 0
//       },
//       "end": {
//         "line": 13,
//         "column": 3
//       }
//     },
//     "context": {
//       "loc": {
//         "start": {
//           "line": 14,
//           "column": 0
//         },
//         "end": {
//           "line": 121,
//           "column": 1
//         }
//       },
//       "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//     },
//     "augments": [],
//     "examples": [],
//     "params": [],
//     "properties": [],
//     "returns": [],
//     "sees": [],
//     "throws": [],
//     "todos": [],
//     "name": "ThemeManager",
//     "kind": "class",
//     "members": {
//       "global": [],
//       "inner": [],
//       "instance": [
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{object} returns current theme object.",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 39,
//                         "offset": 38
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 39,
//                     "offset": 38
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 39,
//                 "offset": 38
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 55,
//               "column": 2
//             },
//             "end": {
//               "line": 57,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 58,
//                 "column": 2
//               },
//               "end": {
//                 "line": 60,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "current",
//           "kind": "member",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "current",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#current"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{object} returns auto styles. Deprecated.",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 42,
//                         "offset": 41
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 42,
//                     "offset": 41
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 42,
//                 "offset": 41
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 62,
//               "column": 2
//             },
//             "end": {
//               "line": 64,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 65,
//                 "column": 2
//               },
//               "end": {
//                 "line": 67,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "styles",
//           "kind": "member",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "styles",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#styles"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "{object} returns object contains material colors.",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 50,
//                         "offset": 49
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 50,
//                     "offset": 49
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 50,
//                 "offset": 49
//               }
//             }
//           },
//           "tags": [],
//           "loc": {
//             "start": {
//               "line": 69,
//               "column": 2
//             },
//             "end": {
//               "line": 71,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 72,
//                 "column": 2
//               },
//               "end": {
//                 "line": 74,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "colors",
//           "kind": "member",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "colors",
//               "kind": "member",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#colors"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "Updates current theme with new one. Note: function will always merge new theme with current.",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 93,
//                         "offset": 92
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 93,
//                     "offset": 92
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 93,
//                 "offset": 92
//               }
//             }
//           },
//           "tags": [
//             {
//               "title": "param",
//               "description": "new theme.",
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "object"
//               },
//               "name": "theme"
//             }
//           ],
//           "loc": {
//             "start": {
//               "line": 76,
//               "column": 2
//             },
//             "end": {
//               "line": 79,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 80,
//                 "column": 2
//               },
//               "end": {
//                 "line": 91,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [
//             {
//               "title": "param",
//               "name": "theme",
//               "lineNumber": 2,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "new theme.",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 11,
//                             "offset": 10
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 11,
//                         "offset": 10
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 11,
//                     "offset": 10
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "object"
//               }
//             },
//             {
//               "title": "param",
//               "name": "baseTheme",
//               "lineNumber": 80
//             }
//           ],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "setTheme",
//           "kind": "function",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "setTheme",
//               "kind": "function",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#setTheme"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "Creates new rkType for ",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 24,
//                         "offset": 23
//                       },
//                       "indent": []
//                     }
//                   },
//                   {
//                     "type": "inlineCode",
//                     "value": "RkComponent",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 24,
//                         "offset": 23
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 37,
//                         "offset": 36
//                       },
//                       "indent": []
//                     }
//                   },
//                   {
//                     "type": "text",
//                     "value": ".",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 37,
//                         "offset": 36
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 38,
//                         "offset": 37
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 38,
//                     "offset": 37
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 38,
//                 "offset": 37
//               }
//             }
//           },
//           "tags": [
//             {
//               "title": "param",
//               "description": "element name for which new rkType should applied.",
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "element"
//             },
//             {
//               "title": "param",
//               "description": "name of new rkType",
//               "lineNumber": 3,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "name"
//             },
//             {
//               "title": "param",
//               "description": "style object for new rkType",
//               "lineNumber": 4,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "object"
//               },
//               "name": "value"
//             }
//           ],
//           "loc": {
//             "start": {
//               "line": 93,
//               "column": 2
//             },
//             "end": {
//               "line": 98,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 99,
//                 "column": 2
//               },
//               "end": {
//                 "line": 101,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [
//             {
//               "title": "param",
//               "name": "element",
//               "lineNumber": 2,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "element name for which new rkType should applied.",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 50,
//                             "offset": 49
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 50,
//                         "offset": 49
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 50,
//                     "offset": 49
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             },
//             {
//               "title": "param",
//               "name": "name",
//               "lineNumber": 3,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "name of new rkType",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 19,
//                             "offset": 18
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 19,
//                         "offset": 18
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 19,
//                     "offset": 18
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             },
//             {
//               "title": "param",
//               "name": "value",
//               "lineNumber": 4,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "style object for new rkType",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 28,
//                             "offset": 27
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 28,
//                         "offset": 27
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 28,
//                     "offset": 27
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "object"
//               }
//             }
//           ],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "setType",
//           "kind": "function",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "setType",
//               "kind": "function",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#setType"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "Register ",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 10,
//                         "offset": 9
//                       },
//                       "indent": []
//                     }
//                   },
//                   {
//                     "type": "inlineCode",
//                     "value": "RkComponent",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 10,
//                         "offset": 9
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 23,
//                         "offset": 22
//                       },
//                       "indent": []
//                     }
//                   },
//                   {
//                     "type": "text",
//                     "value": " in theming system in order to predefine rkTypes.",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 23,
//                         "offset": 22
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 72,
//                         "offset": 71
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 72,
//                     "offset": 71
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 72,
//                 "offset": 71
//               }
//             }
//           },
//           "tags": [
//             {
//               "title": "param",
//               "description": "element name which will be registered.",
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "element"
//             },
//             {
//               "title": "param",
//               "description": "function which takes theme and returns object with themed rkTypes",
//               "lineNumber": 3,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "func"
//               },
//               "name": "types"
//             }
//           ],
//           "loc": {
//             "start": {
//               "line": 103,
//               "column": 2
//             },
//             "end": {
//               "line": 107,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 108,
//                 "column": 2
//               },
//               "end": {
//                 "line": 110,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [
//             {
//               "title": "param",
//               "name": "element",
//               "lineNumber": 2,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "element name which will be registered.",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 39,
//                             "offset": 38
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 39,
//                         "offset": 38
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 39,
//                     "offset": 38
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             },
//             {
//               "title": "param",
//               "name": "types",
//               "lineNumber": 3,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "function which takes theme and returns object with themed rkTypes",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 66,
//                             "offset": 65
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 66,
//                         "offset": 65
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 66,
//                     "offset": 65
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "func"
//               }
//             }
//           ],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "registerComponent",
//           "kind": "function",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "registerComponent",
//               "kind": "function",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#registerComponent"
//         },
//         {
//           "description": {
//             "type": "root",
//             "children": [
//               {
//                 "type": "paragraph",
//                 "children": [
//                   {
//                     "type": "text",
//                     "value": "Add new color to theme",
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 23,
//                         "offset": 22
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 23,
//                     "offset": 22
//                   },
//                   "indent": []
//                 }
//               }
//             ],
//             "position": {
//               "start": {
//                 "line": 1,
//                 "column": 1,
//                 "offset": 0
//               },
//               "end": {
//                 "line": 1,
//                 "column": 23,
//                 "offset": 22
//               }
//             }
//           },
//           "tags": [
//             {
//               "title": "param",
//               "description": "name of new color",
//               "lineNumber": 2,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "name"
//             },
//             {
//               "title": "param",
//               "description": "color value.",
//               "lineNumber": 3,
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               },
//               "name": "value"
//             }
//           ],
//           "loc": {
//             "start": {
//               "line": 112,
//               "column": 2
//             },
//             "end": {
//               "line": 116,
//               "column": 5
//             }
//           },
//           "context": {
//             "loc": {
//               "start": {
//                 "line": 117,
//                 "column": 2
//               },
//               "end": {
//                 "line": 120,
//                 "column": 3
//               }
//             },
//             "file": "D:\\NWork\\GitHub\\react-native-ui-kitten\\src\\styles\\themeManager.js"
//           },
//           "augments": [],
//           "examples": [],
//           "params": [
//             {
//               "title": "param",
//               "name": "name",
//               "lineNumber": 2,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "name of new color",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 18,
//                             "offset": 17
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 18,
//                         "offset": 17
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 18,
//                     "offset": 17
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             },
//             {
//               "title": "param",
//               "name": "value",
//               "lineNumber": 3,
//               "description": {
//                 "type": "root",
//                 "children": [
//                   {
//                     "type": "paragraph",
//                     "children": [
//                       {
//                         "type": "text",
//                         "value": "color value.",
//                         "position": {
//                           "start": {
//                             "line": 1,
//                             "column": 1,
//                             "offset": 0
//                           },
//                           "end": {
//                             "line": 1,
//                             "column": 13,
//                             "offset": 12
//                           },
//                           "indent": []
//                         }
//                       }
//                     ],
//                     "position": {
//                       "start": {
//                         "line": 1,
//                         "column": 1,
//                         "offset": 0
//                       },
//                       "end": {
//                         "line": 1,
//                         "column": 13,
//                         "offset": 12
//                       },
//                       "indent": []
//                     }
//                   }
//                 ],
//                 "position": {
//                   "start": {
//                     "line": 1,
//                     "column": 1,
//                     "offset": 0
//                   },
//                   "end": {
//                     "line": 1,
//                     "column": 13,
//                     "offset": 12
//                   }
//                 }
//               },
//               "type": {
//                 "type": "NameExpression",
//                 "name": "string"
//               }
//             }
//           ],
//           "properties": [],
//           "returns": [],
//           "sees": [],
//           "throws": [],
//           "todos": [],
//           "name": "setColor",
//           "kind": "function",
//           "memberof": "ThemeManager",
//           "scope": "instance",
//           "members": {
//             "global": [],
//             "inner": [],
//             "instance": [],
//             "events": [],
//             "static": []
//           },
//           "path": [
//             {
//               "name": "ThemeManager",
//               "kind": "class"
//             },
//             {
//               "name": "setColor",
//               "kind": "function",
//               "scope": "instance"
//             }
//           ],
//           "namespace": "ThemeManager#setColor"
//         }
//       ],
//       "events": [],
//       "static": []
//     },
//     "path": [
//       {
//         "name": "ThemeManager",
//         "kind": "class"
//       }
//     ],
//     "namespace": "ThemeManager"
//   }
// ];
//
// const ep = new DocJsParser();
// const output = JSON.stringify(ep.parse(json), null, 2);
// console.log(output);
// console.log('Hello world');
var input_output_1 = __webpack_require__(12);
var io = new input_output_1.InputOutput();
io.createFile();
// console.log("hello");
// function iter(obj: any) {
//     for (let property in obj) {
//         if (obj.hasOwnProperty(property) && obj[property] != null) {
//             if (obj[property].constructor == Object) {
//                 iter(obj[property]);
//             } else if (obj[property].constructor == Array) {
//                 for (let i = 0; i < obj[property].length; i++) {
//                     iter(obj[property][i]);
//                 }
//             } else {
//                 console.log(obj[property]);
//             }
//         }
//     }
// } 


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var doc_js_parser_options_1 = __webpack_require__(0);
var getters_1 = __webpack_require__(11);
var DocJsParser = (function () {
    function DocJsParser() {
        this.styles = new getters_1.GetStyles();
        this.props = new getters_1.GetProperties();
        this.examples = new getters_1.GetExamples();
        this.methods = new getters_1.GetMethods();
        this.common = new getters_1.Common();
    }
    DocJsParser.prototype.parse = function (json) {
        this.saveJSON(json);
        return new model_1.Model(this.getClasses(this.json));
    };
    DocJsParser.prototype.saveJSON = function (json) {
        this.json = json;
    };
    DocJsParser.prototype.getClasses = function (json) {
        var _this = this;
        return json
            .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.classKind]; })
            .map(function (item) { return _this.parseClass(item); });
    };
    DocJsParser.prototype.parseClass = function (obj) {
        return new model_1.Class({
            kind: this.common.getKind(obj),
            platform: null,
            examples: this.examples.getExamples(obj),
            props: this.props.getProps(obj),
            methods: this.methods.getMethods(obj),
            name: this.common.getName(obj),
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj),
            styles: this.styles.getStyles(obj)
        });
    };
    return DocJsParser;
}());
exports.DocJsParser = DocJsParser;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var doc_js_parser_options_1 = __webpack_require__(0);
var getParams_1 = __webpack_require__(5);
var getExamples_1 = __webpack_require__(4);
var common_1 = __webpack_require__(2);
var GetMethods = (function () {
    function GetMethods() {
        this.examples = new getExamples_1.GetExamples();
        this.params = new getParams_1.GetParams();
        this.common = new common_1.Common();
    }
    GetMethods.prototype.parseMethodFromInstance = function (obj) {
        return new model_1.Method({
            examples: this.examples.getExamples(obj),
            params: this.params.getParams(obj),
            platform: null,
            name: this.common.getName(obj),
            type: this.getType(obj),
            isStatic: false,
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj)
        });
    };
    GetMethods.prototype.parseMethodFromStatic = function (obj) {
        return new model_1.Method({
            examples: this.examples.getExamples(obj),
            params: this.params.getParams(obj),
            platform: null,
            name: this.common.getName(obj),
            type: this.getType(obj),
            isStatic: true,
            shortDescription: this.common.getShortDescription(obj),
            description: this.common.getDescription(obj)
        });
    };
    GetMethods.prototype.getMethodsInstance = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'function'; })
                .map(function (item) { return _this.parseMethodFromInstance(item); });
        }
        else {
            return [];
        }
    };
    GetMethods.prototype.getMethodsStatic = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'function'; })
                .map(function (item) { return _this.parseMethodFromStatic(item); });
        }
        else {
            return [];
        }
    };
    GetMethods.prototype.getMethods = function (obj) {
        return this.getMethodsInstance(obj).concat(this.getMethodsStatic(obj));
    };
    GetMethods.prototype.getType = function (obj) {
        var temp = [];
        if (obj[doc_js_parser_options_1.CommonOptions.methodType] && obj[doc_js_parser_options_1.CommonOptions.methodType].length) {
            obj[doc_js_parser_options_1.CommonOptions.methodType]
                .forEach(function (item) {
                temp.push(item[doc_js_parser_options_1.CommonOptions.type][doc_js_parser_options_1.CommonOptions.type]);
            });
            return temp;
        }
        else {
            return ['void'];
        }
    };
    return GetMethods;
}());
exports.GetMethods = GetMethods;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var common_1 = __webpack_require__(2);
var doc_js_parser_options_1 = __webpack_require__(0);
var GetProperties = (function () {
    function GetProperties() {
        this.common = new common_1.Common();
    }
    GetProperties.prototype.parsePropFromProperties = function (obj) {
        return new model_1.Prop({
            kind: 'prop',
            platform: null,
            isStatic: false,
            type: this.getTypeProperties(obj),
            required: null,
            name: this.common.getName(obj),
            shortDescription: this.getShortDescriptionProperties(obj),
            description: this.getDescription(obj)
        });
    };
    GetProperties.prototype.parsePropFromInstance = function (obj) {
        return new model_1.Prop({
            kind: 'property',
            platform: null,
            isStatic: false,
            type: this.getTypeInstance(obj),
            required: null,
            name: this.common.getName(obj),
            shortDescription: this.getShortDescriptionInstance(obj),
            description: this.getDescription(obj)
        });
    };
    GetProperties.prototype.parsePropFromStatic = function (obj) {
        return new model_1.Prop({
            kind: 'property',
            platform: null,
            isStatic: true,
            type: this.getTypeStatic(obj),
            required: null,
            name: this.common.getName(obj),
            shortDescription: this.getDescriptionStatic(obj),
            description: this.getDescriptionStatic(obj)
        });
    };
    GetProperties.prototype.getPropsFromProperties = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.properties] && obj[doc_js_parser_options_1.CommonOptions.properties].length) {
            return obj[doc_js_parser_options_1.CommonOptions.properties].map(function (item) { return _this.parsePropFromProperties(item); });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.getPropsFromInstance = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.instance]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'member'; })
                .map(function (item) { return _this.parsePropFromInstance(item); });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.getPropsFromStatic = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.members] && obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static].length) {
            return obj[doc_js_parser_options_1.CommonOptions.members][doc_js_parser_options_1.CommonOptions.static]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.kind] === 'member'; })
                .map(function (item) { return _this.parsePropFromStatic(item); });
        }
        else {
            return [];
        }
    };
    GetProperties.prototype.getProps = function (obj) {
        return this.getPropsFromProperties(obj).concat(this.getPropsFromInstance(obj).concat(this.getPropsFromStatic(obj)));
    };
    GetProperties.prototype.getShortDescriptionProperties = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getShortDescriptionInstance = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value]
                .split('}')[1].trim();
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getDescription = function (obj) {
        var str = '';
        if (obj[doc_js_parser_options_1.CommonOptions.description] && obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children].length > 1) {
            obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children]
                .forEach(function (item) {
                console.log(item[doc_js_parser_options_1.CommonOptions.children]);
                item[doc_js_parser_options_1.CommonOptions.children]
                    .forEach(function (item) {
                    str += item[doc_js_parser_options_1.CommonOptions.value] + ' ';
                });
            });
            return str.split('}')[1].trim();
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getDescriptionStatic = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.tags]) {
            return obj[doc_js_parser_options_1.CommonOptions.tags][0][doc_js_parser_options_1.CommonOptions.description];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getTypeProperties = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.type]) {
            return (obj[doc_js_parser_options_1.CommonOptions.type][doc_js_parser_options_1.CommonOptions.name]);
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getTypeStatic = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.properties]) {
            return obj[doc_js_parser_options_1.CommonOptions.properties][0][doc_js_parser_options_1.CommonOptions.type][doc_js_parser_options_1.CommonOptions.name];
        }
        else {
            return '';
        }
    };
    GetProperties.prototype.getTypeInstance = function (obj) {
        if (obj && obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.children][0][doc_js_parser_options_1.CommonOptions.value]
                .split(' ')[0].replace(/[{}]/g, '');
        }
        else {
            return '';
        }
    };
    return GetProperties;
}());
exports.GetProperties = GetProperties;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(1);
var doc_js_parser_options_1 = __webpack_require__(0);
var GetStyles = (function () {
    function GetStyles() {
    }
    GetStyles.prototype.getStyles = function (obj) {
        var _this = this;
        if (obj[doc_js_parser_options_1.CommonOptions.tags] && obj[doc_js_parser_options_1.CommonOptions.tags].length) {
            return obj[doc_js_parser_options_1.CommonOptions.tags]
                .filter(function (item) { return item[doc_js_parser_options_1.CommonOptions.title] === 'styles'; })
                .map(function (item) { return _this.parseStyle(item); });
        }
        else
            return [];
    };
    GetStyles.prototype.parseStyle = function (obj) {
        return new model_1.Style({
            shortDescription: this.getShortDescription(obj),
            styles: this.getStylesOfStyle(obj)
        });
    };
    GetStyles.prototype.getShortDescription = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            return obj[doc_js_parser_options_1.CommonOptions.description].split('\n')[0];
        }
        else {
            return '';
        }
    };
    GetStyles.prototype.getStylesOfStyle = function (obj) {
        if (obj[doc_js_parser_options_1.CommonOptions.description]) {
            var arr = obj[doc_js_parser_options_1.CommonOptions.description].split('\n');
            var arrTemp_1 = [];
            arr.splice(0, 1);
            arr.forEach(function (item) {
                var _a = item.split(':'), key = _a[0], value = _a[1];
                var styleObj = {};
                // styleObj[key.replace(/[`-]/g, '').trim()] = value.trim();
                styleObj['name'] = key.replace(/[`-]/g, '').trim();
                styleObj['description'] = value.trim();
                arrTemp_1.push(styleObj);
            });
            return arrTemp_1;
        }
        else {
            return [];
        }
    };
    return GetStyles;
}());
exports.GetStyles = GetStyles;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
exports.Common = common_1.Common;
var getExamples_1 = __webpack_require__(4);
exports.GetExamples = getExamples_1.GetExamples;
var getMethods_1 = __webpack_require__(8);
exports.GetMethods = getMethods_1.GetMethods;
var getParams_1 = __webpack_require__(5);
exports.GetParams = getParams_1.GetParams;
var getProperties_1 = __webpack_require__(9);
exports.GetProperties = getProperties_1.GetProperties;
var getStyles_1 = __webpack_require__(10);
exports.GetStyles = getStyles_1.GetStyles;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var doc_js_parser_1 = __webpack_require__(7);
var fs = __webpack_require__(3);
var program = __webpack_require__(21);
var InputOutput = (function () {
    function InputOutput() {
        this.inputStr = '';
        this.outputStr = '';
    }
    InputOutput.prototype.setInputOutputPathes = function () {
        program
            .version('0.0.1')
            .option('-i, --input <value>', 'Path to input file:')
            .option('-o, --output <value>', 'Path to output file: ')
            .parse(process.argv);
        this.inputStr = program['input'];
        this.outputStr = program['output'];
    };
    InputOutput.prototype.createFile = function () {
        var _this = this;
        this.setInputOutputPathes();
        fs.readFile(this.inputStr, function (err, data) {
            var newdoc = new doc_js_parser_1.DocJsParser().parse(JSON.parse(data));
            var outputObj = JSON.stringify(newdoc, null, 2);
            fs.writeFile(_this.outputStr, outputObj);
        });
    };
    return InputOutput;
}());
exports.InputOutput = InputOutput;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Class = (function () {
    function Class(options) {
        this.kind = options.kind;
        this.platform = options.platform;
        this.examples = options.examples;
        this.props = options.props;
        this.methods = options.methods;
        this.name = options.name;
        this.description = options.description;
        this.shortDescription = options.shortDescription;
        this.styles = options.styles;
    }
    return Class;
}());
exports.Class = Class;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Example = (function () {
    function Example(options) {
        this.shortDescription = options.shortDescription;
        this.description = options.description;
        this.code = options.code;
    }
    return Example;
}());
exports.Example = Example;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Method = (function () {
    function Method(options) {
        this.examples = options.examples;
        this.params = options.params;
        this.platform = options.platform;
        this.name = options.name;
        this.type = options.type;
        this.isStatic = options.isStatic;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
    return Method;
}());
exports.Method = Method;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Param = (function () {
    function Param(options) {
        this.name = options.name;
        this.type = options.type;
        this.required = options.required;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
    return Param;
}());
exports.Param = Param;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Prop = (function () {
    function Prop(options) {
        this.kind = options.kind;
        this.platform = options.platform;
        this.isStatic = options.isStatic;
        this.type = options.type;
        this.required = options.required;
        this.name = options.name;
        this.shortDescription = options.shortDescription;
        this.description = options.description;
    }
    return Prop;
}());
exports.Prop = Prop;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Style = (function () {
    function Style(options) {
        this.shortDescription = options.shortDescription;
        this.styles = options.styles;
    }
    return Style;
}());
exports.Style = Style;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Metadata = (function () {
    function Metadata(language, generator, framework) {
        this.language = language;
        this.generator = generator;
        this.framework = framework;
    }
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model(classes /*, metadata: Metadata*/) {
        // this.metadata = metadata;
        this.classes = classes;
    }
    return Model;
}());
exports.Model = Model;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var EventEmitter = __webpack_require__(24).EventEmitter;
var spawn = __webpack_require__(23).spawn;
var readlink = __webpack_require__(22).readlinkSync;
var path = __webpack_require__(25);
var dirname = path.dirname;
var basename = path.basename;
var fs = __webpack_require__(3);

/**
 * Expose the root command.
 */

exports = module.exports = new Command();

/**
 * Expose `Command`.
 */

exports.Command = Command;

/**
 * Expose `Option`.
 */

exports.Option = Option;

/**
 * Initialize a new `Option` with the given `flags` and `description`.
 *
 * @param {String} flags
 * @param {String} description
 * @api public
 */

function Option(flags, description) {
  this.flags = flags;
  this.required = ~flags.indexOf('<');
  this.optional = ~flags.indexOf('[');
  this.bool = !~flags.indexOf('-no-');
  flags = flags.split(/[ ,|]+/);
  if (flags.length > 1 && !/^[[<]/.test(flags[1])) this.short = flags.shift();
  this.long = flags.shift();
  this.description = description || '';
}

/**
 * Return option name.
 *
 * @return {String}
 * @api private
 */

Option.prototype.name = function() {
  return this.long
    .replace('--', '')
    .replace('no-', '');
};

/**
 * Check if `arg` matches the short or long flag.
 *
 * @param {String} arg
 * @return {Boolean}
 * @api private
 */

Option.prototype.is = function(arg) {
  return arg == this.short || arg == this.long;
};

/**
 * Initialize a new `Command`.
 *
 * @param {String} name
 * @api public
 */

function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || '';
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

Command.prototype.__proto__ = EventEmitter.prototype;

/**
 * Add command `name`.
 *
 * The `.action()` callback is invoked when the
 * command `name` is specified via __ARGV__,
 * and the remaining arguments are applied to the
 * function for access.
 *
 * When the `name` is "*" an un-matched command
 * will be passed as the first arg, followed by
 * the rest of __ARGV__ remaining.
 *
 * Examples:
 *
 *      program
 *        .version('0.0.1')
 *        .option('-C, --chdir <path>', 'change the working directory')
 *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
 *        .option('-T, --no-tests', 'ignore test hook')
 *
 *      program
 *        .command('setup')
 *        .description('run remote setup commands')
 *        .action(function() {
 *          console.log('setup');
 *        });
 *
 *      program
 *        .command('exec <cmd>')
 *        .description('run the given remote command')
 *        .action(function(cmd) {
 *          console.log('exec "%s"', cmd);
 *        });
 *
 *      program
 *        .command('teardown <dir> [otherDirs...]')
 *        .description('run teardown commands')
 *        .action(function(dir, otherDirs) {
 *          console.log('dir "%s"', dir);
 *          if (otherDirs) {
 *            otherDirs.forEach(function (oDir) {
 *              console.log('dir "%s"', oDir);
 *            });
 *          }
 *        });
 *
 *      program
 *        .command('*')
 *        .description('deploy the given env')
 *        .action(function(env) {
 *          console.log('deploying "%s"', env);
 *        });
 *
 *      program.parse(process.argv);
  *
 * @param {String} name
 * @param {String} [desc] for git-style sub-commands
 * @return {Command} the new command
 * @api public
 */

Command.prototype.command = function(name, desc, opts) {
  opts = opts || {};
  var args = name.split(/ +/);
  var cmd = new Command(args.shift());

  if (desc) {
    cmd.description(desc);
    this.executables = true;
    this._execs[cmd._name] = true;
    if (opts.isDefault) this.defaultExecutable = cmd._name;
  }

  cmd._noHelp = !!opts.noHelp;
  this.commands.push(cmd);
  cmd.parseExpectedArgs(args);
  cmd.parent = this;

  if (desc) return this;
  return cmd;
};

/**
 * Define argument syntax for the top-level command.
 *
 * @api public
 */

Command.prototype.arguments = function (desc) {
  return this.parseExpectedArgs(desc.split(/ +/));
};

/**
 * Add an implicit `help [cmd]` subcommand
 * which invokes `--help` for the given command.
 *
 * @api private
 */

Command.prototype.addImplicitHelpCommand = function() {
  this.command('help [cmd]', 'display help for [cmd]');
};

/**
 * Parse expected `args`.
 *
 * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parseExpectedArgs = function(args) {
  if (!args.length) return;
  var self = this;
  args.forEach(function(arg) {
    var argDetails = {
      required: false,
      name: '',
      variadic: false
    };

    switch (arg[0]) {
      case '<':
        argDetails.required = true;
        argDetails.name = arg.slice(1, -1);
        break;
      case '[':
        argDetails.name = arg.slice(1, -1);
        break;
    }

    if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {
      argDetails.variadic = true;
      argDetails.name = argDetails.name.slice(0, -3);
    }
    if (argDetails.name) {
      self._args.push(argDetails);
    }
  });
  return this;
};

/**
 * Register callback `fn` for the command.
 *
 * Examples:
 *
 *      program
 *        .command('help')
 *        .description('display verbose help')
 *        .action(function() {
 *           // output help here
 *        });
 *
 * @param {Function} fn
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.action = function(fn) {
  var self = this;
  var listener = function(args, unknown) {
    // Parse any so-far unknown options
    args = args || [];
    unknown = unknown || [];

    var parsed = self.parseOptions(unknown);

    // Output help if necessary
    outputHelpIfNecessary(self, parsed.unknown);

    // If there are still any unknown options, then we simply
    // die, unless someone asked for help, in which case we give it
    // to them, and then we die.
    if (parsed.unknown.length > 0) {
      self.unknownOption(parsed.unknown[0]);
    }

    // Leftover arguments need to be pushed back. Fixes issue #56
    if (parsed.args.length) args = parsed.args.concat(args);

    self._args.forEach(function(arg, i) {
      if (arg.required && null == args[i]) {
        self.missingArgument(arg.name);
      } else if (arg.variadic) {
        if (i !== self._args.length - 1) {
          self.variadicArgNotLast(arg.name);
        }

        args[i] = args.splice(i);
      }
    });

    // Always append ourselves to the end of the arguments,
    // to make sure we match the number of arguments the user
    // expects
    if (self._args.length) {
      args[self._args.length] = self;
    } else {
      args.push(self);
    }

    fn.apply(self, args);
  };
  var parent = this.parent || this;
  var name = parent === this ? '*' : this._name;
  parent.on(name, listener);
  if (this._alias) parent.on(this._alias, listener);
  return this;
};

/**
 * Define option with `flags`, `description` and optional
 * coercion `fn`.
 *
 * The `flags` string should contain both the short and long flags,
 * separated by comma, a pipe or space. The following are all valid
 * all will output this way when `--help` is used.
 *
 *    "-p, --pepper"
 *    "-p|--pepper"
 *    "-p --pepper"
 *
 * Examples:
 *
 *     // simple boolean defaulting to false
 *     program.option('-p, --pepper', 'add pepper');
 *
 *     --pepper
 *     program.pepper
 *     // => Boolean
 *
 *     // simple boolean defaulting to true
 *     program.option('-C, --no-cheese', 'remove cheese');
 *
 *     program.cheese
 *     // => true
 *
 *     --no-cheese
 *     program.cheese
 *     // => false
 *
 *     // required argument
 *     program.option('-C, --chdir <path>', 'change the working directory');
 *
 *     --chdir /tmp
 *     program.chdir
 *     // => "/tmp"
 *
 *     // optional argument
 *     program.option('-c, --cheese [type]', 'add cheese [marble]');
 *
 * @param {String} flags
 * @param {String} description
 * @param {Function|Mixed} fn or default
 * @param {Mixed} defaultValue
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.option = function(flags, description, fn, defaultValue) {
  var self = this
    , option = new Option(flags, description)
    , oname = option.name()
    , name = camelcase(oname);

  // default as 3rd arg
  if (typeof fn != 'function') {
    if (fn instanceof RegExp) {
      var regex = fn;
      fn = function(val, def) {
        var m = regex.exec(val);
        return m ? m[0] : def;
      }
    }
    else {
      defaultValue = fn;
      fn = null;
    }
  }

  // preassign default value only for --no-*, [optional], or <required>
  if (false == option.bool || option.optional || option.required) {
    // when --no-* we make sure default is true
    if (false == option.bool) defaultValue = true;
    // preassign only if we have a default
    if (undefined !== defaultValue) self[name] = defaultValue;
  }

  // register the option
  this.options.push(option);

  // when it's passed assign the value
  // and conditionally invoke the callback
  this.on(oname, function(val) {
    // coercion
    if (null !== val && fn) val = fn(val, undefined === self[name]
      ? defaultValue
      : self[name]);

    // unassigned or bool
    if ('boolean' == typeof self[name] || 'undefined' == typeof self[name]) {
      // if no value, bool true, and we have a default, then use it!
      if (null == val) {
        self[name] = option.bool
          ? defaultValue || true
          : false;
      } else {
        self[name] = val;
      }
    } else if (null !== val) {
      // reassign
      self[name] = val;
    }
  });

  return this;
};

/**
 * Allow unknown options on the command line.
 *
 * @param {Boolean} arg if `true` or omitted, no error will be thrown
 * for unknown options.
 * @api public
 */
Command.prototype.allowUnknownOption = function(arg) {
    this._allowUnknownOption = arguments.length === 0 || arg;
    return this;
};

/**
 * Parse `argv`, settings options and invoking commands when defined.
 *
 * @param {Array} argv
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.parse = function(argv) {
  // implicit help
  if (this.executables) this.addImplicitHelpCommand();

  // store raw args
  this.rawArgs = argv;

  // guess name
  this._name = this._name || basename(argv[1], '.js');

  // github-style sub-commands with no sub-command
  if (this.executables && argv.length < 3 && !this.defaultExecutable) {
    // this user needs help
    argv.push('--help');
  }

  // process argv
  var parsed = this.parseOptions(this.normalize(argv.slice(2)));
  var args = this.args = parsed.args;

  var result = this.parseArgs(this.args, parsed.unknown);

  // executable sub-commands
  var name = result.args[0];
  if (this._execs[name] && typeof this._execs[name] != "function") {
    return this.executeSubCommand(argv, args, parsed.unknown);
  } else if (this.defaultExecutable) {
    // use the default subcommand
    args.unshift(name = this.defaultExecutable);
    return this.executeSubCommand(argv, args, parsed.unknown);
  }

  return result;
};

/**
 * Execute a sub-command executable.
 *
 * @param {Array} argv
 * @param {Array} args
 * @param {Array} unknown
 * @api private
 */

Command.prototype.executeSubCommand = function(argv, args, unknown) {
  args = args.concat(unknown);

  if (!args.length) this.help();
  if ('help' == args[0] && 1 == args.length) this.help();

  // <cmd> --help
  if ('help' == args[0]) {
    args[0] = args[1];
    args[1] = '--help';
  }

  // executable
  var f = argv[1];
  // name of the subcommand, link `pm-install`
  var bin = basename(f, '.js') + '-' + args[0];


  // In case of globally installed, get the base dir where executable
  //  subcommand file should be located at
  var baseDir
    , link = readlink(f);

  // when symbolink is relative path
  if (link !== f && link.charAt(0) !== '/') {
    link = path.join(dirname(f), link)
  }
  baseDir = dirname(link);

  // prefer local `./<bin>` to bin in the $PATH
  var localBin = path.join(baseDir, bin);

  // whether bin file is a js script with explicit `.js` extension
  var isExplicitJS = false;
  if (exists(localBin + '.js')) {
    bin = localBin + '.js';
    isExplicitJS = true;
  } else if (exists(localBin)) {
    bin = localBin;
  }

  args = args.slice(1);

  var proc;
  if (process.platform !== 'win32') {
    if (isExplicitJS) {
      args.unshift(localBin);
      // add executable arguments to spawn
      args = (process.execArgv || []).concat(args);

      proc = spawn('node', args, { stdio: 'inherit', customFds: [0, 1, 2] });
    } else {
      proc = spawn(bin, args, { stdio: 'inherit', customFds: [0, 1, 2] });
    }
  } else {
    args.unshift(localBin);
    proc = spawn(process.execPath, args, { stdio: 'inherit'});
  }

  proc.on('close', process.exit.bind(process));
  proc.on('error', function(err) {
    if (err.code == "ENOENT") {
      console.error('\n  %s(1) does not exist, try --help\n', bin);
    } else if (err.code == "EACCES") {
      console.error('\n  %s(1) not executable. try chmod or run with root\n', bin);
    }
    process.exit(1);
  });

  // Store the reference to the child process
  this.runningCommand = proc;
};

/**
 * Normalize `args`, splitting joined short flags. For example
 * the arg "-abc" is equivalent to "-a -b -c".
 * This also normalizes equal sign and splits "--abc=def" into "--abc def".
 *
 * @param {Array} args
 * @return {Array}
 * @api private
 */

Command.prototype.normalize = function(args) {
  var ret = []
    , arg
    , lastOpt
    , index;

  for (var i = 0, len = args.length; i < len; ++i) {
    arg = args[i];
    if (i > 0) {
      lastOpt = this.optionFor(args[i-1]);
    }

    if (arg === '--') {
      // Honor option terminator
      ret = ret.concat(args.slice(i));
      break;
    } else if (lastOpt && lastOpt.required) {
      ret.push(arg);
    } else if (arg.length > 1 && '-' == arg[0] && '-' != arg[1]) {
      arg.slice(1).split('').forEach(function(c) {
        ret.push('-' + c);
      });
    } else if (/^--/.test(arg) && ~(index = arg.indexOf('='))) {
      ret.push(arg.slice(0, index), arg.slice(index + 1));
    } else {
      ret.push(arg);
    }
  }

  return ret;
};

/**
 * Parse command `args`.
 *
 * When listener(s) are available those
 * callbacks are invoked, otherwise the "*"
 * event is emitted and those actions are invoked.
 *
 * @param {Array} args
 * @return {Command} for chaining
 * @api private
 */

Command.prototype.parseArgs = function(args, unknown) {
  var name;

  if (args.length) {
    name = args[0];
    if (this.listeners(name).length) {
      this.emit(args.shift(), args, unknown);
    } else {
      this.emit('*', args);
    }
  } else {
    outputHelpIfNecessary(this, unknown);

    // If there were no args and we have unknown options,
    // then they are extraneous and we need to error.
    if (unknown.length > 0) {
      this.unknownOption(unknown[0]);
    }
  }

  return this;
};

/**
 * Return an option matching `arg` if any.
 *
 * @param {String} arg
 * @return {Option}
 * @api private
 */

Command.prototype.optionFor = function(arg) {
  for (var i = 0, len = this.options.length; i < len; ++i) {
    if (this.options[i].is(arg)) {
      return this.options[i];
    }
  }
};

/**
 * Parse options from `argv` returning `argv`
 * void of these options.
 *
 * @param {Array} argv
 * @return {Array}
 * @api public
 */

Command.prototype.parseOptions = function(argv) {
  var args = []
    , len = argv.length
    , literal
    , option
    , arg;

  var unknownOptions = [];

  // parse options
  for (var i = 0; i < len; ++i) {
    arg = argv[i];

    // literal args after --
    if ('--' == arg) {
      literal = true;
      continue;
    }

    if (literal) {
      args.push(arg);
      continue;
    }

    // find matching Option
    option = this.optionFor(arg);

    // option is defined
    if (option) {
      // requires arg
      if (option.required) {
        arg = argv[++i];
        if (null == arg) return this.optionMissingArgument(option);
        this.emit(option.name(), arg);
      // optional arg
      } else if (option.optional) {
        arg = argv[i+1];
        if (null == arg || ('-' == arg[0] && '-' != arg)) {
          arg = null;
        } else {
          ++i;
        }
        this.emit(option.name(), arg);
      // bool
      } else {
        this.emit(option.name());
      }
      continue;
    }

    // looks like an option
    if (arg.length > 1 && '-' == arg[0]) {
      unknownOptions.push(arg);

      // If the next argument looks like it might be
      // an argument for this option, we pass it on.
      // If it isn't, then it'll simply be ignored
      if (argv[i+1] && '-' != argv[i+1][0]) {
        unknownOptions.push(argv[++i]);
      }
      continue;
    }

    // arg
    args.push(arg);
  }

  return { args: args, unknown: unknownOptions };
};

/**
 * Return an object containing options as key-value pairs
 *
 * @return {Object}
 * @api public
 */
Command.prototype.opts = function() {
  var result = {}
    , len = this.options.length;

  for (var i = 0 ; i < len; i++) {
    var key = camelcase(this.options[i].name());
    result[key] = key === 'version' ? this._version : this[key];
  }
  return result;
};

/**
 * Argument `name` is missing.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.missingArgument = function(name) {
  console.error();
  console.error("  error: missing required argument `%s'", name);
  console.error();
  process.exit(1);
};

/**
 * `Option` is missing an argument, but received `flag` or nothing.
 *
 * @param {String} option
 * @param {String} flag
 * @api private
 */

Command.prototype.optionMissingArgument = function(option, flag) {
  console.error();
  if (flag) {
    console.error("  error: option `%s' argument missing, got `%s'", option.flags, flag);
  } else {
    console.error("  error: option `%s' argument missing", option.flags);
  }
  console.error();
  process.exit(1);
};

/**
 * Unknown option `flag`.
 *
 * @param {String} flag
 * @api private
 */

Command.prototype.unknownOption = function(flag) {
  if (this._allowUnknownOption) return;
  console.error();
  console.error("  error: unknown option `%s'", flag);
  console.error();
  process.exit(1);
};

/**
 * Variadic argument with `name` is not the last argument as required.
 *
 * @param {String} name
 * @api private
 */

Command.prototype.variadicArgNotLast = function(name) {
  console.error();
  console.error("  error: variadic arguments must be last `%s'", name);
  console.error();
  process.exit(1);
};

/**
 * Set the program version to `str`.
 *
 * This method auto-registers the "-V, --version" flag
 * which will print the version number when passed.
 *
 * @param {String} str
 * @param {String} flags
 * @return {Command} for chaining
 * @api public
 */

Command.prototype.version = function(str, flags) {
  if (0 == arguments.length) return this._version;
  this._version = str;
  flags = flags || '-V, --version';
  this.option(flags, 'output the version number');
  this.on('version', function() {
    process.stdout.write(str + '\n');
    process.exit(0);
  });
  return this;
};

/**
 * Set the description to `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.description = function(str) {
  if (0 === arguments.length) return this._description;
  this._description = str;
  return this;
};

/**
 * Set an alias for the command
 *
 * @param {String} alias
 * @return {String|Command}
 * @api public
 */

Command.prototype.alias = function(alias) {
  if (0 == arguments.length) return this._alias;
  this._alias = alias;
  return this;
};

/**
 * Set / get the command usage `str`.
 *
 * @param {String} str
 * @return {String|Command}
 * @api public
 */

Command.prototype.usage = function(str) {
  var args = this._args.map(function(arg) {
    return humanReadableArgName(arg);
  });

  var usage = '[options]'
    + (this.commands.length ? ' [command]' : '')
    + (this._args.length ? ' ' + args.join(' ') : '');

  if (0 == arguments.length) return this._usage || usage;
  this._usage = str;

  return this;
};

/**
 * Get the name of the command
 *
 * @param {String} name
 * @return {String|Command}
 * @api public
 */

Command.prototype.name = function() {
  return this._name;
};

/**
 * Return the largest option length.
 *
 * @return {Number}
 * @api private
 */

Command.prototype.largestOptionLength = function() {
  return this.options.reduce(function(max, option) {
    return Math.max(max, option.flags.length);
  }, 0);
};

/**
 * Return help for options.
 *
 * @return {String}
 * @api private
 */

Command.prototype.optionHelp = function() {
  var width = this.largestOptionLength();

  // Prepend the help information
  return [pad('-h, --help', width) + '  ' + 'output usage information']
      .concat(this.options.map(function(option) {
        return pad(option.flags, width) + '  ' + option.description;
      }))
      .join('\n');
};

/**
 * Return command help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.commandHelp = function() {
  if (!this.commands.length) return '';

  var commands = this.commands.filter(function(cmd) {
    return !cmd._noHelp;
  }).map(function(cmd) {
    var args = cmd._args.map(function(arg) {
      return humanReadableArgName(arg);
    }).join(' ');

    return [
      cmd._name
        + (cmd._alias ? '|' + cmd._alias : '')
        + (cmd.options.length ? ' [options]' : '')
        + ' ' + args
      , cmd.description()
    ];
  });

  var width = commands.reduce(function(max, command) {
    return Math.max(max, command[0].length);
  }, 0);

  return [
    ''
    , '  Commands:'
    , ''
    , commands.map(function(cmd) {
      var desc = cmd[1] ? '  ' + cmd[1] : '';
      return pad(cmd[0], width) + desc;
    }).join('\n').replace(/^/gm, '    ')
    , ''
  ].join('\n');
};

/**
 * Return program help documentation.
 *
 * @return {String}
 * @api private
 */

Command.prototype.helpInformation = function() {
  var desc = [];
  if (this._description) {
    desc = [
      '  ' + this._description
      , ''
    ];
  }

  var cmdName = this._name;
  if (this._alias) {
    cmdName = cmdName + '|' + this._alias;
  }
  var usage = [
    ''
    ,'  Usage: ' + cmdName + ' ' + this.usage()
    , ''
  ];

  var cmds = [];
  var commandHelp = this.commandHelp();
  if (commandHelp) cmds = [commandHelp];

  var options = [
    '  Options:'
    , ''
    , '' + this.optionHelp().replace(/^/gm, '    ')
    , ''
    , ''
  ];

  return usage
    .concat(cmds)
    .concat(desc)
    .concat(options)
    .join('\n');
};

/**
 * Output help information for this command
 *
 * @api public
 */

Command.prototype.outputHelp = function(cb) {
  if (!cb) {
    cb = function(passthru) {
      return passthru;
    }
  }
  process.stdout.write(cb(this.helpInformation()));
  this.emit('--help');
};

/**
 * Output help information and exit.
 *
 * @api public
 */

Command.prototype.help = function(cb) {
  this.outputHelp(cb);
  process.exit();
};

/**
 * Camel-case the given `flag`
 *
 * @param {String} flag
 * @return {String}
 * @api private
 */

function camelcase(flag) {
  return flag.split('-').reduce(function(str, word) {
    return str + word[0].toUpperCase() + word.slice(1);
  });
}

/**
 * Pad `str` to `width`.
 *
 * @param {String} str
 * @param {Number} width
 * @return {String}
 * @api private
 */

function pad(str, width) {
  var len = Math.max(0, width - str.length);
  return str + Array(len + 1).join(' ');
}

/**
 * Output help information if necessary
 *
 * @param {Command} command to output help for
 * @param {Array} array of options to search for -h or --help
 * @api private
 */

function outputHelpIfNecessary(cmd, options) {
  options = options || [];
  for (var i = 0; i < options.length; i++) {
    if (options[i] == '--help' || options[i] == '-h') {
      cmd.outputHelp();
      process.exit(0);
    }
  }
}

/**
 * Takes an argument an returns its human readable equivalent for help usage.
 *
 * @param {Object} arg
 * @return {String}
 * @api private
 */

function humanReadableArgName(arg) {
  var nameOutput = arg.name + (arg.variadic === true ? '...' : '');

  return arg.required
    ? '<' + nameOutput + '>'
    : '[' + nameOutput + ']'
}

// for versions before node v0.8 when there weren't `fs.existsSync`
function exists(file) {
  try {
    if (fs.statSync(file).isFile()) {
      return true;
    }
  } catch (e) {
    return false;
  }
}



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(3)
  , lstat = fs.lstatSync;

exports.readlinkSync = function (p) {
  if (lstat(p).isSymbolicLink()) {
    return fs.readlinkSync(p);
  } else {
    return p;
  }
};




/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);