/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[4]!./src/styles/main.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[4]!./src/styles/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[4]!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[4]!./src/styles/main.scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_0_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! namespace exports */
/*! export Display [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => /* binding */ Display
/* harmony export */ });
const Display = {
  WIDTH: 460,
  HEIGHT: 300
};


/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! namespace exports */
/*! export AboutItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Code [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Message [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Projects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Section [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Skills [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => /* binding */ Message,
/* harmony export */   "Code": () => /* binding */ Code,
/* harmony export */   "Section": () => /* binding */ Section,
/* harmony export */   "Skills": () => /* binding */ Skills,
/* harmony export */   "Projects": () => /* binding */ Projects,
/* harmony export */   "AboutItems": () => /* binding */ AboutItems
/* harmony export */ });
const Message = {
  START: {
    part1: `Hi, my name is <span>Julia</span>`,
    part2: `and I love coding.`,
    part3: `Let's code something?`,
  },
  END: {
    part1: `Congratulations! `,
    part2: `You are in the <span>Matrix</span> now :)`,
    part3: `Please, check out my <a href="#projects" class="message__link">projects</a>`,
    part4: `and have a nice day!`,
  },
};

const Code = {
  line1: `<span class="code__function">setupAnimation</span><span class="code__punctuation">() {</span>`,
  line2: `&nbsp;&nbsp;<span class="code__keyword">const</span> canvas <span class="code__operator">=</span> <span class="code__keyword">this</span><span class="code__punctuation">.</span><span class="code__function">getElement</span><span class="code__punctuation">()</span>`,
  line3: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="code__punctuation">.</span><span class="code__function">getElementById</span><span class="code__punctuation">(</span><span class="code__string">'display'</span><span class="code__punctuation">);</span>`,
  line4: `&nbsp;&nbsp;<span class="code__keyword">const</span> ctx <span class="code__operator">=</span> canvas<span class="code__punctuation">.</span><span class="code__function">getContext</span><span class="code__punctuation">(</span><span class="code__string">'2d'</span><span class="code__punctuation">);</span>`,
  line5: `&nbsp;&nbsp;<span class="code__keyword">const</span> elements = <span class="code__keyword">new</span> <span class="code__object">Array</span><span class="code__punctuation">(</span>ELEMENTS_IN_ANIMATION<span class="code__punctuation">)</span>`,
  line6: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="code__punctuation">.</span><span class="code__function">fill</span><span class="code__punctuation">(</span><span class="code__string">''</span><span class="code__punctuation">)</span>`,
  line7: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="code__punctuation">.</span><span class="code__function">map</span><span class="code__punctuation">(()</span> <span class="code__operator">=></span> <span class="code__punctuation">{</span>`,
  line8: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code__keyword">return new</span> <span class="code__object">Animation</span><span class="code__punctuation">();</span>`,
  line9: `&nbsp;&nbsp;<span class="code__punctuation">});</span>`,
  line10: `&nbsp;&nbsp;<span class="code__function">setInterval</span><span class="code__punctuation">(()</span> <span class="code__operator">=></span>`,
  line11: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="code__keyword">this</span><span class="code__punctuation">.</span><span class="code__function">_renderAnimation</span><span class="code__punctuation">(</span>ctx<span class="code__punctuation">,</span> elements<span class="code__punctuation">),</span> <span class="code__number">100</span>`,
  line12: `&nbsp;&nbsp;<span class="code__punctuation">);</span>`,
  line13: `<span class="code__punctuation">}</span>`,
};

const Section = {
  SKILLS: {
    title: `Skills`,
    subtitle: `What I Do`,
  },
  PROJECTS: {
    title: `Projects`,
    subtitle: `What I've Done`,
  },
  ABOUT: {
    title: `About Me`,
    subtitle: `Who I Am`,
  },
};

const Skills = [
  {
    icon: `<i class="devicon-javascript-plain"></i>`,
    title: `javascript`,
  },
  {
    icon: `<i class="devicon-typescript-plain"></i>`,
    title: `typescript`,
  },
  {
    icon: `<i class="devicon-react-original"></i>`,
    title: `react`,
  },
  {
    icon: `<i class="devicon-redux-original"></i>`,
    title: `redux`,
  },
  {
    icon: `<i class="devicon-vuejs-plain"></i>`,
    title: `vue.js`,
  },
  {
    icon: `<i class="devicon-angularjs-plain"></i>`,
    title: `angular`,
  },
  {
    icon: `<i class="devicon-nodejs-plain"></i>`,
    title: `node.js`,
  },
  {
    icon: `<i class="devicon-express-original"></i>`,
    title: `express.js`,
  },
  {
    icon: `<i class="devicon-postgresql-plain"></i>`,
    title: `postgreSQL`,
  },
  {
    icon: `<i class="devicon-sequelize-plain"></i>`,
    title: `sequelize`,
  },
  {
    icon: `<i class="devicon-socketio-original"></i>`,
    title: `socket.io`,
  },
  {
    icon: `<i class="devicon-jest-plain"></i>`,
    title: `jest`,
  },
  {
    icon: `<i class="devicon-docker-plain"></i>`,
    title: `docker`,
  },
  {
    icon: `<i class="devicon-webpack-plain"></i>`,
    title: `webpack`,
  },
  {
    icon: `<i class="devicon-gulp-plain"></i>`,
    title: `gulp`,
  },
  {
    icon: `<i class="devicon-babel-plain"></i>`,
    title: `babel`,
  },
  {
    icon: `<i class="devicon-npm-original-wordmark"></i>`,
    title: `npm`,
  },
  {
    icon: `<i class="devicon-yarn-plain"></i>`,
    title: `yarn`,
  },
  {
    icon: `<i class="devicon-html5-plain-wordmark"></i>`,
    title: `html5`,
  },
  {
    icon: `<i class="devicon-css3-plain-wordmark"></i>`,
    title: `css3`,
  },
  {
    icon: `<i class="devicon-sass-original"></i>`,
    title: `sass`,
  },
  {
    icon: `<i class="devicon-less-plain-wordmark"></i>`,
    title: `less`,
  },
  {
    icon: `<span class="iconify" data-icon="simple-icons:pug"></span>`,
    title: `pug`,
  },
  {
    icon: `<i class="devicon-git-plain-wordmark"></i>`,
    title: `git`,
  },
];

const Projects = [
  {
    title: `Vue Pizza`,
    id: `vuepizza`,
    img: `img/vue-pizza.jpg`,
    back: `img/vue-pizza-back.jpg`,
    demo: `https://vue-pizzeria.herokuapp.com`,
    git: `https://github.com/julia-marta/vue-pizza`,
    description: `Vue.js + Vuex virtual pizzeria. Users can assemble their own pizza with favorite ingredients, add additional products, pick delivery method and place an order.`,
    activities: [
      `used <strong>Vue.js</strong> composition API, options API and built-ins (directives, elements and attributes) for development of application`,
      `implemented <strong>Vuex</strong> for managing application state and utilized <strong>Vuex plugins</strong> for app services (API and JWT)`,
      `used <strong>Vue Router</strong> for routing implementation and utilized <strong>automatic router</strong> and middlewares for private routes`,
      `implemented <strong>API and JWT services</strong>, used <strong>Axios</strong> client for REST API requests and <strong>LocaleStorage API</strong> for cache auth token`,
      `utilized <strong>Docker compose</strong> tool for building multi-container app and used <strong>Jest and Vue Test Utils</strong> for unit testing of components`,
    ],
    plates: [
      `<i class="devicon-vuejs-plain"></i>`,
      `<i class="devicon-docker-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-jest-plain"></i>`,
    ],
  },
  {
    title: `Typoteka`,
    id: `typoteka`,
    img: `img/typoteka.jpg`,
    back: `img/typoteka-back.jpg`,
    demo: `https://tipoteka.herokuapp.com`,
    git: `https://github.com/julia-marta/typoteka`,
    description: `Node.js SSR blog app with REST API and database. Blog author can create, edit and delete articles and comments, authorized users can read articles and leave comments.`,
    activities: [
      `used <strong>Express.js</strong> for SSR app and REST API building and utilized <strong>Pug</strong> templates styled with CSS `,
      `implemented <strong>PostgreSQL</strong> database and used <strong>Sequelize ORM</strong> for managing (models, relations, queries)`,
      `used <strong>pino</strong> for logging and <strong>Jest</strong> framework with <strong>supertest</strong> package for end-to-end testing of REST API`,
      `utilized <strong>Joi</strong> for schema validation, <strong>csurf</strong> middleware for CSRF protection and <strong>jsonwebtoken</strong> for authentication`,
      `used <strong>socket.io</strong> library and <strong>http</strong> server for realtime communication between SSR app and REST API`,
    ],
    plates: [
      `<i class="devicon-nodejs-plain"></i>`,
      `<i class="devicon-express-original"></i>`,
      `<i class="devicon-postgresql-plain"></i>`,
      `<i class="devicon-sequelize-plain"></i>`,
      `<span class="iconify" data-icon="simple-icons:pug"></span>`,
    ],
  },
  {
    title: `Liga Bank Credit`,
    id: `ligabankcredit`,
    img: `img/liga-bank-credit.jpg`,
    back: `img/liga-bank-credit-back.jpg`,
    demo: `https://julia-marta.github.io/liga-bank-credit`,
    git: `https://github.com/julia-marta/liga-bank-credit`,
    description: `Responsive designed React + Redux loan calculator for Liga Bank site. Users can calculate mortgage or auto loan offer and fill out online loan application.`,
    activities: [
      `utilized <strong>responsive web design</strong> (mobile, tablet, desktop) and used <strong>react-responsive</strong> package for media queries`,
      `implemented <strong>infinite loop slider</strong> and used <strong>react-swipeable</strong> package for <strong>swiper</strong> implementation in mobil and tablet`,
      `utilized <strong>Create React App</strong> for development, building and optimization and <strong>Redux Toolkit</strong> for managing application store`,
      `implemented <strong>mortgage and auto loan calculator</strong> with complex form and used <strong>localeStorage API</strong> for applications caching`,
      `used <strong>React Yandex Maps API</strong> for map implementation and utilized <strong>react-input-mask</strong> for phone number input mask`,
    ],
    plates: [
      `<i class="devicon-react-original"></i>`,
      `<i class="devicon-redux-original"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-sass-original"></i>`,
    ],
  },
  {
    title: `Avto Moto`,
    id: `avtomoto`,
    img: `img/avto-moto.jpg`,
    back: `img/avto-moto-back.jpg`,
    demo: `https://julia-marta.github.io/avto-moto`,
    git: `https://github.com/julia-marta/avto-moto`,
    description: `Responsive designed React + Redux product page for Avto Moto site. Includes carousel slider and tabs, users can leave reviews and rate the product with a star rating.`,
    activities: [
      `utilized <strong>responsive web design</strong> (mobile, tablet, desktop) and used <strong>react-responsive</strong> package for media queries`,
      `implemented React <strong>carousel slider</strong> with thumbnails navigation and <strong>touch slider</strong> for mobile version`,
      `utilized <strong>Create React App</strong> for development, building and optimization and <strong>Redux Toolkit</strong> for managing application store`,
      `implemented <strong>complex review form</strong> with <strong>star rating</strong> and used <strong>localeStorage API</strong> for reviews caching`,
      `used <strong>React Yandex Maps API</strong> for map and custom map marker implementation`,
    ],
    plates: [
      `<i class="devicon-react-original"></i>`,
      `<i class="devicon-redux-original"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-sass-original"></i>`,
    ],
  },
  {
    title: `Liga Bank`,
    id: `ligabank`,
    img: `img/liga-bank.jpg`,
    back: `img/liga-bank-back.jpg`,
    demo: `https://julia-marta.github.io/liga-bank`,
    git: `https://github.com/julia-marta/liga-bank`,
    description: `React + Redux currency converter for Liga Bank site. Users can convert one currency into another, pick date to get historical rates and save conversion history.`,
    activities: [
      `used <strong>Create React App</strong> for initialization, development, building and optimization of application`,
      `implemented <strong>Redux Toolkit</strong> for managing application store and utilized <strong>createSlice</strong> and <strong>createAsyncThunk</strong> features`,
      `used open-source <strong>Frankfurter API</strong> for getting exchange rates and implemented <strong>Axios</strong> client for REST API requests`,
      `utilized <strong>react-datepicker</strong> library for date selecting implementation and used <strong>SweetAlert</strong> library for error messages`,
      `used <strong>Sass</strong> preprocessor and <strong>node-sass</strong> package for transpile to CSS`,
    ],
    plates: [
      `<i class="devicon-react-original"></i>`,
      `<i class="devicon-redux-original"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-sass-original"></i>`,
    ],
  },
  {
    title: `What To Watch`,
    id: `wtw`,
    img: `img/what-to-watch.jpg`,
    back: `img/what-to-watch-back.jpg`,
    demo: `https://julia-marta.github.io/what-to-watch`,
    git: `https://github.com/julia-marta/what-to-watch`,
    description: `React + Redux SPA with HTML5 video player to watch movies online. Authorized users can rate films, write reviews for it and add movies to favorites.`,
    activities: [
      `used <strong>React Router</strong> for nested routing implementation and utilized Hooks for routing with the History API`,
      `implemented <strong>Redux</strong> for managing application state and used <strong>Redux Thunk</strong> middleware for asynchronous actions`,
      `used <strong>Axios</strong> client for consuming REST API and utilized <strong>Reselect</strong> library for improving application performance`,
      `implemented <strong>React Hooks</strong> for handling local state changes and simulate lifecycle methods for functional components`,
      `utilized <strong>Jest</strong> framework and <strong>Enzyme</strong> utility for snapshot and unit testing of components`,
    ],
    plates: [
      `<i class="devicon-react-original"></i>`,
      `<i class="devicon-redux-original"></i>`,
      `<i class="devicon-jest-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-webpack-plain"></i>`,
    ],
  },
  {
    title: `Cinemaddict`,
    id: `cinemaddict`,
    img: `img/cinemaddict.jpg`,
    back: `img/cinemaddict-back.jpg`,
    demo: `https://julia-marta.github.io/cinemaddict`,
    git: `https://github.com/julia-marta/cinemaddict`,
    description: `JavaScript SPA based on MVP design pattern. Users can add films to favorites and watchlist, leave comments and check stats of watched movies.`,
    activities: [
      `used <strong>ECMAScript 6</strong> classes syntax and utilized its features (abstraction, inheritance, etc)`,
      `implemented <strong>MVP pattern</strong> for project architecture and utilized other basic design patterns (observer, adapter, etc)`,
      `used <strong>Fetch API</strong> and <strong>Promises</strong> for consuming REST API and made SPA synchronize offline changes with the server`,
      `implemented <strong>Service Worker API</strong> and utilized <strong>LocaleStorage</strong> for caching and SPA working offline`,
      `utilized <strong>Moment.js</strong> library for format dates and durations and <strong>Chart.js</strong> library for creating stat graphs and charts`,
    ],
    plates: [
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-webpack-plain"></i>`,
      `<span class="iconify" data-icon="logos:momentjs" data-inline="false"></span>`,
      `<span class="iconify" data-icon="file-icons:chartjs" data-inline="false"></span>`,
    ],
  },
  {
    title: `Keksobooking`,
    id: `keksobooking`,
    img: `img/keksobooking.jpg`,
    back: `img/keksobooking-back.jpg`,
    demo: `https://julia-marta.github.io/keksobooking`,
    git: `https://github.com/julia-marta/keksobooking`,
    description: `JavaScript based service for rental property. Hosts can add photos, amenities and requirements. Guests can search for rental offers on the map using filters.`,

    activities: [
      `implemented the <strong>interactive map</strong> with draggable marker to get coordinates`,
      `used <strong>AJAX</strong> and <strong>XMLHttpRequest API</strong> for fetching adverts from server`,
      `implemented <strong>form validation</strong> and synchronized inputs with HTML5 and JavaScript`,
      `developed <strong>filters</strong> and utilized <strong>debounce</strong> function for increasing the browser performance`,
      `implemented <strong>keyboard navigation</strong> of all focusable interactive elements (<strong>a11y</strong>)`,
    ],
    plates: [
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-html5-plain"></i>`,
    ],
  },
  {
    title: `Kekstagram`,
    id: `kekstagram`,
    img: `img/kekstagram.jpg`,
    back: `img/kekstagram-back.jpg`,
    demo: `https://julia-marta.github.io/kekstagram`,
    git: `https://github.com/julia-marta/kekstagram`,
    description: `JavaScript based photo sharing service. Users can upload photos, apply filters and add hashtags. Also exploring and filtering photos of other users allowed.`,

    activities: [
      `implemented <strong>complex form</strong> for photo editing: zooming, filters and slider for effect intensity`,
      `used <strong>AJAX</strong> and <strong>XMLHttpRequest API</strong> for fetching photos from server`,
      `implemented <strong>hashtags input validation</strong> with HTML5 and JavaScript and utilized regular expression`,
      `developed <strong>filters</strong> and utilized <strong>debounce</strong> function for increasing the browser performance`,
      `implemented <strong>keyboard navigation</strong> of all focusable interactive elements (<strong>a11y</strong>)`,
    ],
    plates: [
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-html5-plain"></i>`,
    ],
  },
  {
    title: `Let's go!`,
    id: `pognali`,
    img: `img/pognali.jpg`,
    back: `img/pognali-back.jpg`,
    demo: `https://julia-marta.github.io/pognali`,
    git: `https://github.com/julia-marta/pognali`,
    description: `Adaptive designed service to find travel buddies. Users can search and filter travelers by countries or their preferences and plan the trips.`,

    activities: [
      `implemented <strong>adaptive web design</strong>: mobile, tablet and desktop version is available`,
      `used <strong>Less preprocessor</strong> and <strong>Gulp</strong> for transpile and minify JavaScript, HTML and CSS`,
      `implemented <strong>cross-browser development</strong>, responsive images, Retina-ready design and progressive enhancement `,
      `used <strong>JavaScript</strong> for pop-up, menu toggle, menu scroll animation, drop-down elements, filtering and sorting`,
      `utilized <strong>the BEM methodology</strong> for HTML markup and CSS implementation `,
    ],
    plates: [
      `<i class="devicon-less-plain-wordmark"></i>`,
      `<i class="devicon-gulp-plain"></i>`,
      `<i class="devicon-html5-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
    ],
  },
  {
    title: `Gllacy`,
    id: `gllacy`,
    img: `img/gllacy.jpg`,
    back: `img/gllacy-back.jpg`,
    demo: `https://julia-marta.github.io/gllacy`,
    git: `https://github.com/julia-marta/gllacy`,
    description: `Ice cream shop business card website. Displays: main page with slider and map, catalog page with customized filter form, feedback pop-up.`,

    activities: [
      `implemented CSS-only <strong>carousel slider</strong> with body background color change and hoverable <strong>dropdown menu</strong>`,
      `used <strong>JavaScript</strong> for pop-up implementation + animation and <strong>LocaleStorage API</strong> for cache form inputs`,
      `implemented <strong>filter form</strong> with custom pure CSS styling inputs (select, checkboxes, radio buttons)`,
      `utilized <strong>Google Maps embed API</strong> iframe generator for interactive map implementation`,
      `implemented <strong>cross-browser development</strong> and progressive enhancement`,
    ],
    plates: [
      `<i class="devicon-html5-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
    ],
  },
  {
    title: `Nerds`,
    id: `nerds`,
    img: `img/nerds.jpg`,
    back: `img/nerds-back.jpg`,
    demo: `https://julia-marta.github.io/nerds`,
    git: `https://github.com/julia-marta/nerds`,
    description: `Design studio business card website. Displays: main page with slider and map, catalog page with customized filter form, feedback pop-up.`,

    activities: [
      `implemented CSS-only <strong>carousel slider</strong> and hoverable <strong>catalog cards</strong> with effects`,
      `used <strong>JavaScript</strong> for pop-up implementation + animation and <strong>LocaleStorage API</strong> for cache form inputs`,
      `implemented <strong>filter form</strong> with custom pure CSS styling inputs (checkboxes, radio buttons)`,
      `utilized <strong>Google Maps embed API</strong> iframe generator for interactive map implementation`,
      `implemented <strong>cross-browser development</strong> and progressive enhancement`,
    ],
    plates: [
      `<i class="devicon-html5-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
    ],
  },
];

const AboutItems = [
  {
    name: `profile`,
    photo: `img/julia.jpg`,
    type: `profile`,
    profile: [
      {
        key: `Name`,
        value: `Julia Nabiulina`,
      },
      {
        key: `Age`,
        value: `39`,
      },
      {
        key: `From`,
        value: `Moscow`,
      },
      {
        key: `Interests`,
        values: [
          {
            icon: `fas fa-laptop-code`,
            title: `Coding`,
          },
          {
            icon: `fas fa-compact-disc`,
            title: `Music`,
          },
          {
            icon: `fas fa-book`,
            title: `Reading`,
          },
          {
            icon: `fas fa-bicycle`,
            title: `Cycling`,
          },
          {
            icon: `fas fa-camera`,
            title: `Photography`,
          },
        ],
      },
    ],
  },
  {
    name: `work`,
    icon: `<i class="fas fa-briefcase"></i>`,
    title: `Work history`,
    type: `experience`,
    places: [
      {
        title: `Takeoff-staff`,
        specialty: `Frontend Developer`,
        dates: `2021 - present`,
      },
      {
        title: `Yandex`,
        specialty: `Team Lead in Yandex Zen service`,
        dates: `2018 - 2021`,
      },
      {
        title: `ADV Marketing Services`,
        specialty: `Senior specialist of Digital Services group`,
        dates: `2007 - 2017`,
      },
    ],
  },
  {
    name: `education`,
    icon: `<i class="fas fa-graduation-cap"></i>`,
    title: `Education`,
    type: `experience`,
    places: [
      {
        title: `Moscow Region State University`,
        specialty: `Bachelor of Management Studies`,
        dates: `2000 - 2005`,
      },
    ],
  },
  {
    name: `courses`,
    icon: `<i class="fa-solid fa-award"></i>`,
    title: `Professional courses`,
    type: `slider`,
    slides: [
      {
        title: `Vue.js. Development of client applications`,
        image: `img/vue.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/223/1237807.pdf`,
        date: `May 2022`,
      },
      {
        title: `Node.js. Application server and API development`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/185/1237807.pdf`,
        image: `img/node.jpg`,
        date: `June 2021`,
      },
      {
        title: `React Developer Professional Course`,
        image: `img/react-professional.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/profession/13/1237807.pdf`,
        date: `January - December 2020`,
      },
      {
        title: `React. Development of complex client applications`,
        image: `img/react.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/171/1237807.pdf`,
        date: `December 2020`,
      },
      {
        title: `JavaScript. Client application architecture`,
        image: `img/javascript2.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/169/1237807.pdf`,
        date: `September 2020`,
      },
      {
        title: `JavaScript. Professional development of web interfaces`,
        image: `img/javascript1.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/167/1237807.pdf`,
        date: `July 2020`,
      },
      {
        title: `HTML & CSS. Responsive layout and automation`,
        image: `img/html2.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/157/1237807.pdf`,
        date: `May 2020`,
      },
      {
        title: `HTML & CSS. Professional website layout`,
        image: `img/html1.jpg`,
        href: `https://assets.htmlacademy.ru/certificates/intensive/155/1237807.pdf`,
        date: `March 2020`,
      },
    ],
  },
];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_greeting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/greeting.js */ "./src/view/greeting.js");
/* harmony import */ var _presenter_greeting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/greeting.js */ "./src/presenter/greeting.js");
/* harmony import */ var _presenter_skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/skills.js */ "./src/presenter/skills.js");
/* harmony import */ var _presenter_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/projects.js */ "./src/presenter/projects.js");
/* harmony import */ var _presenter_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presenter/about.js */ "./src/presenter/about.js");
/* harmony import */ var _utils_background_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/background.js */ "./src/utils/background.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");









const main = document.querySelector(`.main`);
const animatedTitle = document.querySelector(`.header__title`);
const footer = document.querySelector(`.footer`);

const greeting = new _view_greeting_js__WEBPACK_IMPORTED_MODULE_0__.default();

setInterval(_utils_background_js__WEBPACK_IMPORTED_MODULE_5__.setBackground, 33)

;(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)(main, greeting);

const messageStart = greeting.getElement().querySelector(`.message--start`);
const computer = greeting.getElement().querySelector(`.computer`);
const messageEnd = greeting.getElement().querySelector(`.message--end`);

const greetingPresenter = new _presenter_greeting_js__WEBPACK_IMPORTED_MODULE_1__.default(messageStart, computer, messageEnd);
const skillsPresenter = new _presenter_skills_js__WEBPACK_IMPORTED_MODULE_2__.default(main);
const projectsPresenter = new _presenter_projects_js__WEBPACK_IMPORTED_MODULE_3__.default(main);
const aboutPresenter = new _presenter_about_js__WEBPACK_IMPORTED_MODULE_4__.default(main);

animatedTitle.addEventListener('animationend', () => {
  const timer = setTimeout(() => {
    greetingPresenter.init();
    skillsPresenter.init();
    projectsPresenter.init();
    aboutPresenter.init();
    clearTimeout(timer);
  }, 1700);
});

window.onscroll = () => {
  skillsPresenter.setOnScrollView();
  projectsPresenter.setOnScrollView();
  aboutPresenter.setOnScrollView();
  footer.style.opacity = (window.pageYOffset > '4300' ? 1 : 0);
}


/***/ }),

/***/ "./src/presenter/about.js":
/*!********************************!*\
  !*** ./src/presenter/about.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ About
/* harmony export */ });
/* harmony import */ var _view_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/about.js */ "./src/view/about.js");
/* harmony import */ var _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/section-header.js */ "./src/view/section-header.js");
/* harmony import */ var _view_about_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/about-items.js */ "./src/view/about-items.js");
/* harmony import */ var _view_about_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/about-item.js */ "./src/view/about-item.js");
/* harmony import */ var _view_about_profile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/about-profile.js */ "./src/view/about-profile.js");
/* harmony import */ var _view_about_experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/about-experience */ "./src/view/about-experience.js");
/* harmony import */ var _view_about_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/about-slider */ "./src/view/about-slider.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");










const { ABOUT } = _data_data_js__WEBPACK_IMPORTED_MODULE_8__.Section;

class About {
  constructor(container) {
    this._container = container;
    this._about = new _view_about_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._header = new _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__.default(ABOUT.title, ABOUT.subtitle);
    this._items = new _view_about_items_js__WEBPACK_IMPORTED_MODULE_2__.default();
  }

  init() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._container, this._about);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._about, this._header);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._about, this._items);

    _data_data_js__WEBPACK_IMPORTED_MODULE_8__.AboutItems.map((item) => {
      const aboutItem = new _view_about_item_js__WEBPACK_IMPORTED_MODULE_3__.default(item);

      switch (item.type) {
        case `profile`:
          (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(aboutItem, new _view_about_profile_js__WEBPACK_IMPORTED_MODULE_4__.default(item));
          break;
        case `experience`:
          (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(aboutItem, new _view_about_experience__WEBPACK_IMPORTED_MODULE_5__.default(item.places));
          break;
        case `slider`:
          (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(aboutItem, new _view_about_slider__WEBPACK_IMPORTED_MODULE_6__.default(item.slides));
          break;
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._items, aboutItem);
    });
  }

  setOnScrollView() {
    this._about.getElement().style.opacity =
      window.pageYOffset > "3650" ? 1 : 0;
  }
}


/***/ }),

/***/ "./src/presenter/greeting.js":
/*!***********************************!*\
  !*** ./src/presenter/greeting.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Greeting
/* harmony export */ });
/* harmony import */ var _view_message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/message.js */ "./src/view/message.js");
/* harmony import */ var _view_computer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/computer.js */ "./src/view/computer.js");
/* harmony import */ var _view_code_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/code.js */ "./src/view/code.js");
/* harmony import */ var _view_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/line.js */ "./src/view/line.js");
/* harmony import */ var _view_loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/loader.js */ "./src/view/loader.js");
/* harmony import */ var _view_repeat_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/repeat-button.js */ "./src/view/repeat-button.js");
/* harmony import */ var _view_social_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/social.js */ "./src/view/social.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");










const {START, END} = _data_data_js__WEBPACK_IMPORTED_MODULE_8__.Message;
const START_MESSAGES_COUNT = 3;
const CODE_LINES_COUNT = 13;
const END_MESSAGES_COUNT = 4;

class Greeting {
  constructor(messageStart, computer, messageEnd) {

    this._messageStartContainer = messageStart;
    this._computerContainer = computer;
    this._messageEndContainer = messageEnd;

    this._startMessages = new Array(START_MESSAGES_COUNT).fill(``).map((_item, i) => {
      return new _view_message_js__WEBPACK_IMPORTED_MODULE_0__.default(START[`part${i + 1}`]);
    });

    this._endMessages = new Array(END_MESSAGES_COUNT).fill(``).map((_item, i) => {
      return new _view_message_js__WEBPACK_IMPORTED_MODULE_0__.default(END[`part${i + 1}`]);
    });

    this._computer = new _view_computer_js__WEBPACK_IMPORTED_MODULE_1__.default();
    this._code = new _view_code_js__WEBPACK_IMPORTED_MODULE_2__.default();
    this._loader = new _view_loader_js__WEBPACK_IMPORTED_MODULE_4__.default();
    this._button = new _view_repeat_button_js__WEBPACK_IMPORTED_MODULE_5__.default();
    this._social = new _view_social_js__WEBPACK_IMPORTED_MODULE_6__.default();
    this._timer = null;

    this._codeLines = new Array(CODE_LINES_COUNT).fill(``).map((_item, i) => {
      return new _view_line_js__WEBPACK_IMPORTED_MODULE_3__.default(_data_data_js__WEBPACK_IMPORTED_MODULE_8__.Code[`line${i + 1}`]);
    });

    this._handleRepeatButtonClick = this._handleRepeatButtonClick.bind(this);
}

  init() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._messageStartContainer, this._startMessages[0]);
    this._setStartMessagesAnimationHanldlers();
    this._setEndMessagesAnimationHanldlers();
    this._setComputerAnimationHandlers();
    this._setCodeAnimationHandlers();
    this._setLoaderAnimationHandler();
    this._button.setClickHandler(this._handleRepeatButtonClick);
  }

  destroy() {
    this._startMessages.forEach((it, i) => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(it);
    });
    this._endMessages.forEach((it, i) => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(it);
    });
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._computer);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._code);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._loader);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._button);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._social);
  }

  _handleRepeatButtonClick() {
    this.destroy();
    this.init();
  }

  _setStartMessagesAnimationHanldlers() {

    this._startMessages.forEach((it, i) => {
        const message = it.getElement();

      if (i < START_MESSAGES_COUNT - 1) {
       message.addEventListener('animationend', () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._messageStartContainer, this._startMessages[i + 1]);
      });
        } else {
           message.addEventListener('animationend', () => {
            (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._computerContainer, this._computer);
      });
        }
    });
  }

  _setEndMessagesAnimationHanldlers() {
    this._endMessages.forEach((it, i) => {
      const message = it.getElement();

    if (i < END_MESSAGES_COUNT - 1) {
     message.addEventListener('animationend', () => {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._messageEndContainer, this._endMessages[i + 1]);
    });
      } else {
        message.addEventListener('animationend', () => {
         (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._messageEndContainer, this._button);
         (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._messageStartContainer, this._social);
         clearTimeout(this._timer);
   });
     }
  });
  }

  _setComputerAnimationHandlers() {
    this._computer.getElement().addEventListener('animationend', () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._computerContainer, this._code);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._code, this._codeLines[0]);
    });
  }

  _setCodeAnimationHandlers() {
    this._codeLines.forEach((it, i) => {
        const line = it.getElement();

      if (i < CODE_LINES_COUNT - 1) {
       line.addEventListener('animationend', () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._code, this._codeLines[i + 1]);
      });
        } else {
        line.addEventListener('animationend', () => {
          const timer = setTimeout(() => {
            (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.replace)(this._code, this._loader);
            clearTimeout(timer);
          }, 1000)
      });
      };
    });
  }

  _setLoaderAnimationHandler() {
    this._loader.getElement().addEventListener('animationend', () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.remove)(this._loader);
      this._computer.setupAnimation();
      this._timer = setTimeout(() => (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)(this._messageEndContainer, this._endMessages[0]), 2000);
    });
  }
};


/***/ }),

/***/ "./src/presenter/projects.js":
/*!***********************************!*\
  !*** ./src/presenter/projects.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Projects
/* harmony export */ });
/* harmony import */ var _view_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/projects.js */ "./src/view/projects.js");
/* harmony import */ var _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/section-header.js */ "./src/view/section-header.js");
/* harmony import */ var _view_project_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/project-list.js */ "./src/view/project-list.js");
/* harmony import */ var _view_project_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/project-item.js */ "./src/view/project-item.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");







const {PROJECTS} = _data_data_js__WEBPACK_IMPORTED_MODULE_5__.Section;

class Projects {
  constructor(container) {
    this._container = container;
    this._projects = new _view_projects_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._header = new _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__.default(PROJECTS.title, PROJECTS.subtitle);
    this._projectList = new _view_project_list_js__WEBPACK_IMPORTED_MODULE_2__.default();
  }

  init() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(this._container, this._projects);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(this._projects, this._header);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(this._projects, this._projectList);

    _data_data_js__WEBPACK_IMPORTED_MODULE_5__.Projects.map((project) =>
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.render)(this._projectList, new _view_project_item_js__WEBPACK_IMPORTED_MODULE_3__.default(project))
    );
  }

  setOnScrollView() {
    this._projects.getElement().style.opacity = (window.pageYOffset > '950' ? 1 : 0);
  }
}


/***/ }),

/***/ "./src/presenter/skills.js":
/*!*********************************!*\
  !*** ./src/presenter/skills.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Skills
/* harmony export */ });
/* harmony import */ var _view_skills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/skills.js */ "./src/view/skills.js");
/* harmony import */ var _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/section-header.js */ "./src/view/section-header.js");
/* harmony import */ var _view_skill_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/skill-list.js */ "./src/view/skill-list.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");






const {SKILLS} = _data_data_js__WEBPACK_IMPORTED_MODULE_4__.Section;

class Skills {
  constructor(container) {
    this._container = container;
    this._skills = new _view_skills_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._header = new _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__.default(SKILLS.title, SKILLS.subtitle);
    this._skillList = new _view_skill_list_js__WEBPACK_IMPORTED_MODULE_2__.default();
  }

  init() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this._container, this._skills);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this._skills, this._header);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this._skills, this._skillList);

  }

  setOnScrollView() {
    this._skills.getElement().style.opacity = (window.pageYOffset > '250' ? 1 : 0);
  }
}


/***/ }),

/***/ "./src/utils/background.js":
/*!*********************************!*\
  !*** ./src/utils/background.js ***!
  \*********************************/
/*! namespace exports */
/*! export canvas [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ctx [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setBackground [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => /* binding */ canvas,
/* harmony export */   "ctx": () => /* binding */ ctx,
/* harmony export */   "setBackground": () => /* binding */ setBackground
/* harmony export */ });
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';

const canvas = document.querySelector('#background'), ctx = canvas.getContext('2d');

canvas.width = window.screen.width;
canvas.height = window.screen.height;

const letters = LETTERS.split('');

const fontSize = 12;
const columns = Math.floor(canvas.width / fontSize);

const drops = new Array(columns).fill(1);

const setBackground = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
}


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! namespace exports */
/*! export RenderPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export remove [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export replace [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => /* binding */ RenderPosition,
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "replace": () => /* binding */ replace,
/* harmony export */   "remove": () => /* binding */ remove
/* harmony export */ });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  BEFORE: `before`
};

const {AFTERBEGIN, BEFOREEND, BEFORE} = RenderPosition;

const render = (container, element, place = BEFOREEND, targetElement) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    container = container.getElement();
  }

  if (element instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    element = element.getElement();
  }

  if (targetElement instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    targetElement = targetElement.getElement();
  }

  switch (place) {
    case AFTERBEGIN:
      container.prepend(element);
      break;
    case BEFOREEND:
      container.append(element);
      break;
    case BEFORE:
      container.insertBefore(element, targetElement);
  }
};

const createElement = (markup) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = markup;

  return newElement.firstElementChild;
};

const replace = (oldElement, newElement) => {
  if (oldElement instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    oldElement = oldElement.getElement();
  }

  if (newElement instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default) {
    newElement = newElement.getElement();
  }

  if (oldElement === null || newElement === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  oldElement.replaceWith(newElement);
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__.default)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! namespace exports */
/*! export getRandomValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomValue": () => /* binding */ getRandomValue
/* harmony export */ });
const getRandomValue = (min, max) => {
  return Math.random() * (max - min) + min;
};


/***/ }),

/***/ "./src/view/about-experience.js":
/*!**************************************!*\
  !*** ./src/view/about-experience.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AboutExperience
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAboutPlacesMarkup = (places) => {
  return places
    .map(
      ({ title, specialty, dates }) =>
        `<div class="about__text-section">
        <p class="about__text about__title">${title}</p>
        <p class="about__text">${specialty}</p>
        <p class="about__text about__text--dates">${dates}</p>
      </div>`
    )
    .join(``);
};

const createAboutExperienceMarkup = (places) => {
  const placesMarkup = createAboutPlacesMarkup(places);

  return `<div class="about__experience">
        ${placesMarkup}
      </div>`;
};

class AboutExperience extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(places) {
    super();
    this._places = places;
  }

  getTemplate() {
    return createAboutExperienceMarkup(this._places);
  }
}


/***/ }),

/***/ "./src/view/about-item.js":
/*!********************************!*\
  !*** ./src/view/about-item.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AboutItem
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAboutItemMarkup = ({ name, icon, title }) => {
  return `<div class="about__item about__item--${name}">
  ${icon && title ? `<h3 class="about__section-title">${icon} ${title}</h3>` : ``}
  </div>`;
};

class AboutItem extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(item) {
    super();
    this._item = item;
  }

  getTemplate() {
    return createAboutItemMarkup(this._item);
  }
}


/***/ }),

/***/ "./src/view/about-items.js":
/*!*********************************!*\
  !*** ./src/view/about-items.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AboutItems
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAboutItemsMarkup = () => {
  return `<div class="about__items"></div>`;
};

class AboutItems extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  getTemplate() {
    return createAboutItemsMarkup();
  }
}


/***/ }),

/***/ "./src/view/about-profile.js":
/*!***********************************!*\
  !*** ./src/view/about-profile.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AboutProfile
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAboutProfileInfoMarkup = (items) => {
  return items
    .map(
      (item) =>
        `<p class="about__text">
    <span class="about__title">${item.key}: </span>
    ${
      item.value
        ? item.value
        : `<span class="about__interests">
      ${item.values
        .map(
          (val) =>
            `<i class="${val.icon}"><span class="about__tooltip">${val.title}</span></i>`
        )
        .join(``)}
      </span>`
    }
  </p>`
    )
    .join(``);
};

const createAboutProfileMarkup = ({ photo, profile }) => {
  const profileInfoMarkup = createAboutProfileInfoMarkup(profile);

  return `<div class="about__profile">
      <div class="about__photo-wrapper">
        <img class="about__photo" src="${photo}" width="300" alt="Julia Nabiulina">
      </div>
      <div class="about__info-wrapper">
        ${profileInfoMarkup}
      </div>
    </div>`;
};

class AboutProfile extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(profile) {
    super();
    this._profile = profile;
  }

  getTemplate() {
    return createAboutProfileMarkup(this._profile);
  }
}


/***/ }),

/***/ "./src/view/about-slider.js":
/*!**********************************!*\
  !*** ./src/view/about-slider.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ AboutSlider
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSlidesMarkup = (slides) => {
  return slides
    .map(
      (slide) =>
        `<div class="about__slide">
        <a class="about__slide-link" href="${slide.href}" target="_blank">
          <img src="${slide.image}" width="250" alt="${slide.title}">
        </a>
      </div>`
    )
    .join(``);
};

const createSliderMarkup = (slides) => {
  const slidesMarkup = createSlidesMarkup(slides);

  return `<div class="about__slider">
    <div class="about__slider-buttons">
      <button id="previous" class="about__slider-btn about__slider-btn--previous" type="button">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="next" class="about__slider-btn about__slider-btn--next" type="button">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="about__slider-content">
      <div id="slides" class="about__slides">
      ${slidesMarkup}
      </div>
    </div>
  </div>`;
};

class AboutSlider extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(slides) {
    super();
    this._slides =  [...slides];
    this._slides.push(slides[0], slides[1]);
    this._slides.unshift(slides[slides.length - 2], slides[slides.length - 1])
    this._numSlides = slides.length;
    this._currentSlide = 2;
    this._slider = this.getElement();
    this._slide = this._slider.querySelector(`.about__slides`);
    this._slideAnimationEndHandler = this._slideAnimationEndHandler.bind(this);
    this._slideMoveHandler = this._slideMoveHandler.bind(this);
    this._setInnerHandlers();
  }

  getTemplate() {
    return createSliderMarkup(this._slides);
  }

  _slideAnimationEndHandler(evt) {
    if (evt.target.id === `slides`) {
      if (this._currentSlide === this._numSlides + 1 || this._currentSlide === 0) {
        this._slide.style.transition = 'none';
        this._currentSlide = this._currentSlide === 0 ? this._numSlides : 1;
        this._slider.style.setProperty(`--currentSlide`, this._currentSlide);
      }
    }
  }

  _slideMoveHandler(evt) {
    evt.preventDefault();
    this._slide.style.transition = 'transform 0.6s';
    this._currentSlide = evt.target.id === 'next' ? this._currentSlide + 1 : this._currentSlide - 1;
    this._slider.style.setProperty(`--currentSlide`, this._currentSlide);
  }

  _setInnerHandlers() {
    this._slider.style.setProperty(`--currentSlide`, this._currentSlide);
    this.getElement().querySelector(`.about__slider-btn--next`).addEventListener(`click`, this._slideMoveHandler);
    this.getElement().querySelector(`.about__slider-btn--previous`).addEventListener(`click`, this._slideMoveHandler);
    this._slide.addEventListener(`transitionend`, this._slideAnimationEndHandler);
  }
}


/***/ }),

/***/ "./src/view/about.js":
/*!***************************!*\
  !*** ./src/view/about.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ About
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createAboutMarkup = () => {
  return (
    `<section id="about" class="section container"></section>`
  );
};

class About extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createAboutMarkup();
  }
}


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Abstract
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/animation.js":
/*!*******************************!*\
  !*** ./src/view/animation.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Animation
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const Color = {
  LINE: `green`,
  NUMBER: `lime`,
  SQUARE: `#90ee90`,
};

const Number = {
  MIN: 0,
  MAX: 9
};

const SquareSize = {
  MIN: 4,
  MAX: 9,
};

class Animation {
  constructor() {
    this.number = null;
    this.square = null;
  }

  init(ctx) {
    this.number = Math.floor((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(Number.MIN, Number.MAX));
    this.square = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(SquareSize.MIN, SquareSize.MAX);
    this._renderLines(ctx);
    this._renderNumbers(ctx);
    this._renderSquares(ctx);
  }

  _renderLines(ctx) {
    const x = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(-_const_js__WEBPACK_IMPORTED_MODULE_1__.Display.WIDTH, _const_js__WEBPACK_IMPORTED_MODULE_1__.Display.WIDTH);
    const y = _const_js__WEBPACK_IMPORTED_MODULE_1__.Display.HEIGHT;

    ctx.strokeStyle = Color.LINE;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }

  _renderNumbers(ctx) {
    const x = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(-_const_js__WEBPACK_IMPORTED_MODULE_1__.Display.WIDTH, _const_js__WEBPACK_IMPORTED_MODULE_1__.Display.WIDTH);
    const y = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(0, _const_js__WEBPACK_IMPORTED_MODULE_1__.Display.HEIGHT);

    ctx.fillStyle = Color.NUMBER;
    ctx.font = '18px serif';
    ctx.textBaseline = 'hanging';
    ctx.fillText(this.number, x, y);
  }

  _renderSquares(ctx) {
    const x = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(-_const_js__WEBPACK_IMPORTED_MODULE_1__.Display.WIDTH, _const_js__WEBPACK_IMPORTED_MODULE_1__.Display.WIDTH);
    const y = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(0, _const_js__WEBPACK_IMPORTED_MODULE_1__.Display.HEIGHT);

    ctx.fillStyle = Color.SQUARE;
    ctx.fillRect(x, y, this.square, this.square);
  }
};


/***/ }),

/***/ "./src/view/code.js":
/*!**************************!*\
  !*** ./src/view/code.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Code
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createCodeMarkup = () => {
  return (
    `<div id="code" class="computer__display"></div>`
  );
};

class Code extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createCodeMarkup();
  }
}


/***/ }),

/***/ "./src/view/computer.js":
/*!******************************!*\
  !*** ./src/view/computer.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Computer
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/view/animation.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");




const ELEMENTS_IN_ANIMATION = 100;

const createComputerMarkup = () => {
  return (
    `<div class="computer__wrapper">
      <img class="computer__image" src="img/macbook-pro-template.png" width="600" height="338" alt="The Matrix has you...">
      <canvas id="display" class="computer__display" width="460" height="300"></canvas>
    </div>`
  );
};

class Computer extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createComputerMarkup();
  }

  _renderAnimation(ctx, elements) {
    ctx.clearRect(0, 0, _const_js__WEBPACK_IMPORTED_MODULE_2__.Display.WIDTH, _const_js__WEBPACK_IMPORTED_MODULE_2__.Display.HEIGHT);
    elements.forEach((it) => it.init(ctx));
  }

  setupAnimation() {
    const canvas = this.getElement().querySelector(`#display`);
    const ctx = canvas.getContext('2d');
    canvas.width = _const_js__WEBPACK_IMPORTED_MODULE_2__.Display.WIDTH;
    canvas.height = _const_js__WEBPACK_IMPORTED_MODULE_2__.Display.HEIGHT;
    const elements = new Array(ELEMENTS_IN_ANIMATION).fill(``).map(() => {
      return new _animation__WEBPACK_IMPORTED_MODULE_1__.default();
    });

    setInterval(() => this._renderAnimation(ctx, elements), 100);
  }
}


/***/ }),

/***/ "./src/view/greeting.js":
/*!******************************!*\
  !*** ./src/view/greeting.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Greeting
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createGreetingMarkup = () => {
  return (
    `<section class="greeting container">
      <h3 class="visually-hidden">Greeting</h3>
      <ul class="greeting__sections">
        <li class="greeting__sections-item message message--start"></li>
        <li class="greeting__sections-item computer"></li>
        <li class="greeting__sections-item message message--end"></li>
      </ul>
    </section>`
  );
};

class Greeting extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  getTemplate() {
    return createGreetingMarkup();
  }
}


/***/ }),

/***/ "./src/view/line.js":
/*!**************************!*\
  !*** ./src/view/line.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Line
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createLineMarkup = (fragment) => {
  return (
    `<p class="code__line">${fragment}</p>`
  );
};

class Line extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(fragment) {
    super();
    this._fragment = fragment
  }

  getTemplate() {
    return createLineMarkup(this._fragment);
  }
}


/***/ }),

/***/ "./src/view/loader.js":
/*!****************************!*\
  !*** ./src/view/loader.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Code
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createLoaderMarkup = () => {
  return (
    `<div id="loader" class="computer__display">
      <div class="loader-spinner">
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       <div class="loader-spinner__item"></div>
       </div>
     </div>`
  );
};

class Code extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createLoaderMarkup();
  }
}


/***/ }),

/***/ "./src/view/message.js":
/*!*****************************!*\
  !*** ./src/view/message.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Message
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMessageMarkup = (message) => {
  return (
    `<p class="message__text">${message}</p>`
  );
};

class Message extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(text) {
    super();
    this._text = text;
  }

  getTemplate() {
    return createMessageMarkup(this._text);
  }
}


/***/ }),

/***/ "./src/view/project-item.js":
/*!**********************************!*\
  !*** ./src/view/project-item.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ProjectItem
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProjectActivitiesMarkup = (activities) => {
  return activities.map((activity) =>
  `<li><i class="fas fa-check"></i>${activity}</li>`
).join(``);
}

const createProjectPlatesMarkup = (plates) => {
  return plates.map((plate) =>
  `<li>${plate}</li>`
).join(``);
}

const createProjectCardMarkup = (project) => {
  return (
   `<div class="projects__card card ${project.id ? `card--${project.id}` : ``}">
      <div class="card__flip">
        <div class="card__container">
          <div class="card__front">
            <img class="projects__image" src=${project.img} alt="${project.title} Project" width="450" height="300">
          </div>
          <div class="card__back">
            <img class="projects__image" src=${project.back ? project.back : project.img} alt="${project.title} Project" width="450" height="300">
          </div>
        </div>
      </div>
      <div class="card__inside">
        <ul class="card__activities">
          ${createProjectActivitiesMarkup(project.activities)}
        </ul>
      </div>
    </div>`
  );
}

const createProjectListItemMarkup = (project) => {
  return (
  `<li class="projects__item">
    ${createProjectCardMarkup(project)}
    <div class="projects__info">
      <h3 class="projects__title">${project.title}</h3>
      <p class="projects__description">${project.description}</p>
      <div class="projects__footer">
        <div class="projects__footer-buttons">
          <a class="projects__footer-button button button--demo" href=${project.demo} target="_blank">Demo</a>
          <a href=${project.git} target="_blank" class="projects__footer-button button button--git">
            <i class="devicon-github-original"></i>
          </a>
        </div>
        <ul class="projects__footer-plates">
          ${createProjectPlatesMarkup(project.plates)}
        </ul>
      </div>
    </div>
  </li>`
  );
};

class ProjectItem extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(project) {
    super();
    this._project = project;
  }

  getTemplate() {
    return createProjectListItemMarkup(this._project);
  }
}


/***/ }),

/***/ "./src/view/project-list.js":
/*!**********************************!*\
  !*** ./src/view/project-list.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ProjectList
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProjectListMarkup = () => {

  return (
    `<ul class="projects__list"></ul>`
  );
};

class ProjectList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createProjectListMarkup();
  }
}


/***/ }),

/***/ "./src/view/projects.js":
/*!******************************!*\
  !*** ./src/view/projects.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Projects
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createProjectsMarkup = () => {
  return (
    `<section id="projects" class="section container"></section>`
  );
};

class Projects extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createProjectsMarkup();
  }
}


/***/ }),

/***/ "./src/view/repeat-button.js":
/*!***********************************!*\
  !*** ./src/view/repeat-button.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RepeatButton
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createRepeatButtonMarkup = () => {
  return (
    `<button type="button" class="message__repeat button">Restart Coding</button>`
  );
};

class RepeatButton extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor() {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createRepeatButtonMarkup();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.buttonClick();
  }

  setClickHandler(callback) {
    this._callback.buttonClick = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/section-header.js":
/*!************************************!*\
  !*** ./src/view/section-header.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SectionHeader
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSectionHeaderMarkup = (title, subtitle) => {
  return (
    `<div class="section__header">
      <h2 class="section__title">${title} <span>${subtitle}</span></h2>
    </div>`
  );
};

class SectionHeader extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(title, subtitle) {
    super();

    this._title = title;
    this._subtitle = subtitle;
  }

  getTemplate() {
    return createSectionHeaderMarkup(this._title, this._subtitle);
  }
}


/***/ }),

/***/ "./src/view/skill-list.js":
/*!********************************!*\
  !*** ./src/view/skill-list.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SkillList
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");



const createSkillListItemsMarkup = () => {
    return _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Skills.map((skill) =>
    `<li class="skills__item">
      ${skill.icon}
      <p class="skills__title">${skill.title}</p>
    </li>`
    ).join(``);
}

const createSkillListMarkup = () => {
  const skillListItemsMarkup = createSkillListItemsMarkup();

  return (
    `<div class="skills__wrapper">
      <ul class="skills__list">
        ${skillListItemsMarkup}
      </ul>
    </div>`
  );
};

class SkillList extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createSkillListMarkup();
  }
}


/***/ }),

/***/ "./src/view/skills.js":
/*!****************************!*\
  !*** ./src/view/skills.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Skills
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSkillsMarkup = () => {
  return (
    `<section id="skills" class="section container"></section>`
  );
};

class Skills extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createSkillsMarkup();
  }
}


/***/ }),

/***/ "./src/view/social.js":
/*!****************************!*\
  !*** ./src/view/social.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Social
/* harmony export */ });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSocialMarkup = () => {
  return (
    `<ul class="social">
    <li class="social__link social__link--tag">
      <span class="social__tag"><</span>
    </li>
      <li class="social__link">
        <a href="https://github.com/julia-marta" target="_blank">
        <i class="fab fa-github"></i>
        </a>
      </li>
      <li class="social__link">
        <a href="https://t.me/collector_marta" target="_blank">
        <i class="fab fa-telegram"></i>
        </a>
      </li>
      <li class="social__link social__link--tag">
        <span class="social__tag">/></span>
    </li>
    </ul>`
  );
};

class Social extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createSocialMarkup();
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map