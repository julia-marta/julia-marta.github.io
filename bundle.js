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
/*! export Anchore [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Display [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => /* binding */ Display,
/* harmony export */   "Anchore": () => /* binding */ Anchore
/* harmony export */ });
const Display = {
  WIDTH: 460,
  HEIGHT: 300
};

const Anchore = {
  PROJECTS: `#projects`,
  ABOUT: `#about`
}


/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! namespace exports */
/*! export AboutExperience [provided] [no usage info] [missing usage info prevents renaming] */
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
/* harmony export */   "AboutExperience": () => /* binding */ AboutExperience
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
  }
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
  line13: `<span class="code__punctuation">}</span>`
};

const Section = {
  SKILLS: {
    title: `Skills`,
    subtitle: `What I Do`
  },
  PROJECTS: {
    title: `Projects`,
    subtitle: `What I've Done`
  },
  ABOUT: {
    title: `About Me`,
    subtitle: `Who I Am`
  }
}

const Skills = [
  {
    icons: [
      `devicon-html5-plain-wordmark`,
      `devicon-css3-plain-wordmark`,
      `devicon-less-plain-wordmark`,
      `devicon-sass-original`
      ],
    title: `HTML-5 & CSS-3`,
    descriptions: [
      `Responsive/Adaptive Design`,
      `Cross-Browser Development`,
      `LESS/Sass preprocessors`,
      `Mobile First CSS`,
      `BEM-style Markup`
    ]
  },
  {
    icons: [
      `devicon-javascript-plain`,
      `devicon-typescript-plain`,
      `devicon-react-original`,
      `devicon-redux-original`
      ],
    title: `JavaScript`,
    descriptions: [
      `ECMAScript 6 & TypeScript`,
      `OOJS Design Patterns`,
      `React & Redux SPA`,
      `REST APIs (Fetch & Axios)`,
      `Testing (Jest & Enzyme)`
    ]
  },
  {
    icons: [
      `devicon-npm-original-wordmark`,
      `devicon-git-plain-wordmark`,
      `devicon-webpack-plain`,
      `devicon-babel-plain`
      ],
    title: `Development Tools`,
    descriptions: [
      `npm: project management`,
      `Git: version control`,
      `Webpack: bundling`,
      `Babel/Gulp: transpilation`,
      `Firefox DT: debugging`
    ]
  },
];

const Projects = [
  {
    title: `What To Watch`,
    img: `img/what-to-watch.jpg`,
    demo: `https://julia-marta.github.io/what-to-watch`,
    git: `https://github.com/julia-marta/what-to-watch`,
    description: `React + Redux SPA with HTML5 video player to watch movies online. Authorized users also can rate films, write reviews for it and add movies to favorites.`,
    activities: [
      `used <span>React Router</span> for nested routing implementation and utilized Hooks for routing with the History API`,
      `implemented <span>Redux</span> for managing application state and used <span>Redux Thunk</span> middleware for asynchronous actions`,
      `used <span>Axios</span> client for consuming REST API and utilized <span>Reselect</span> library for improving application performance`,
      `implemented <span>React Hooks</span> for handling local state changes and simulate lifecycle methods for functional components`,
      `utilized <span>Jest</span> framework and <span>Enzyme</span> utility for snapshot and unit testing of components`
    ],
    plates: [
      `<i class="devicon-react-original"></i>`,
      `<i class="devicon-redux-original"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-webpack-plain"></i>`,
      `<i class="devicon-babel-plain"></i>`,
      `<span class="iconify" data-icon="logos-jest" data-inline="false"></span>`
    ]
  },
  {
    title: `Cinemaddict`,
    img: `img/cinemaddict.jpg`,
    demo: `https://julia-marta.github.io/cinemaddict`,
    git: `https://github.com/julia-marta/cinemaddict`,
    description: `JavaScript SPA based on MVP design pattern. Users can add films to favorites and watchlist, leave comments and check stats of watched movies.`,
    activities: [
      `used <span>ECMAScript 6</span> classes syntax and utilized its features (abstraction, inheritance, etc)`,
      `implemented <span>MVP pattern</span> for project architecture and utilized other basic design patterns (observer, adapter, etc)`,
      `used <span>Fetch API</span> and <span>Promises</span> for consuming REST API and made SPA synchronize offline changes with the server`,
      `implemented <span>Service Worker API</span> and utilized <span>LocaleStorage</span> for caching and SPA working offline`,
      `utilized <span>Moment.js</span> library for format dates and durations and <span>Chart.js</span> library for creating stat graphs and charts`
    ],
    plates: [
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-webpack-plain"></i>`,
      `<span class="iconify" data-icon="logos:momentjs" data-inline="false"></span>`,
      `<span class="iconify" data-icon="file-icons:chartjs" data-inline="false"></span>`
    ]
  },
  {
    title: `Keksobooking`,
    img: `img/keksobooking.jpg`,
    demo: `https://julia-marta.github.io/keksobooking`,
    git: `https://github.com/julia-marta/keksobooking`,
    description: `JavaScript based service for rental property in Tokyo. Hosts can advertise their property (add photos, amenities and requirements). Guests can search for rental offers on the map using filters.`,

    activities: [
      `implemented the <span>interactive map</span> with draggable marker to get coordinates`,
      `used <span>AJAX</span> and <span>XMLHttpRequest API</span> for fetching adverts from server`,
      `implemented <span>form validation</span> and synchronized inputs with HTML5 and JavaScript`,
      `developed <span>filters</span> and utilized <span>debounce</span> function for increasing the browser performance`,
      `implemented <span>keyboard navigation</span> of all focusable interactive elements (<span>a11y</span>)`
    ],
    plates: [
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-html5-plain"></i>`
    ]
  },
  {
    title: `Kekstagram`,
    img: `img/kekstagram.jpg`,
    demo: `https://julia-marta.github.io/kekstagram`,
    git: `https://github.com/julia-marta/kekstagram`,
    description: `JavaScript based photo sharing social networking service. Users can upload photos, apply filters to their images and add hashtags. Also exploring and filtering photos of other users allowed.`,

    activities: [
      `implemented <span>complex form</span> for photo editing: zooming, filters and slider for effect intensity`,
      `used <span>AJAX</span> and <span>XMLHttpRequest API</span> for fetching photos from server`,
      `implemented <span>hashtags input validation</span> with HTML5 and JavaScript and utilized regular expression`,
      `developed <span>filters</span> and utilized <span>debounce</span> function for increasing the browser performance`,
      `implemented <span>keyboard navigation</span> of all focusable interactive elements (<span>a11y</span>)`
    ],
    plates: [
      `<i class="devicon-javascript-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-html5-plain"></i>`
    ]
  },
  {
    title: `Let's go!`,
    img: `img/pognali.jpg`,
    demo: `https://julia-marta.github.io/pognali`,
    git: `https://github.com/julia-marta/pognali`,
    description: `Adaptive designed service to find travel buddies. Users can search and filter travelers by countries or their preferences and plan the trips.`,

    activities: [
      `implemented <span>adaptive web design</span>: mobile, tablet and desktop version is available`,
      `used <span>Less preprocessor</span> and <span>Gulp</span> for transpile and minify JavaScript, HTML and CSS`,
      `implemented <span>cross-browser development</span>, mobile first CSS pattern, responsive images, Retina-ready design and progressive enhancement `,
      `used <span>JavaScript</span> for pop-up, menu toggle, menu scroll animation, drop-down elements, filtering and sorting implementation`,
      `utilized <span>the BEM methodology</span> for HTML markup and CSS implementation `,
    ],
    plates: [
      `<i class="devicon-less-plain-wordmark"></i>`,
      `<i class="devicon-gulp-plain"></i>`,
      `<i class="devicon-html5-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
    ]
  },
  {
    title: `Gllacy`,
    img: `img/gllacy.jpg`,
    demo: `https://julia-marta.github.io/gllacy`,
    git: `https://github.com/julia-marta/gllacy`,
    description: `Ice cream shop business card website. Displays: main page with slider and map, catalog page with customized filter form, feedback pop-up.`,

    activities: [
      `implemented CSS-only <span>carousel slider</span> with body background color change and hoverable <span>dropdown menu</span>`,
      `used <span>JavaScript</span> for pop-up implementation + animation and <span>LocaleStorage API</span> for cache form inputs`,
      `implemented <span>filter form</span> with custom pure CSS styling inputs (select, checkboxes, radio buttons)`,
      `utilized <span>Google Maps embed API</span> iframe generator for interactive map implementation`,
      `implemented <span>cross-browser development</span> and progressive enhancement`
    ],
    plates: [
      `<i class="devicon-html5-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
    ]
  },
  {
    title: `Nerds`,
    img: `img/nerds.jpg`,
    demo: `https://julia-marta.github.io/nerds`,
    git: `https://github.com/julia-marta/nerds`,
    description: `Design studio business card website. Displays: main page with slider and map, catalog page with customized filter form, feedback pop-up.`,

    activities: [
      `implemented CSS-only <span>carousel slider</span> and hoverable <span>catalog cards</span> with effects`,
      `used <span>JavaScript</span> for pop-up implementation + animation and <span>LocaleStorage API</span> for cache form inputs`,
      `implemented <span>filter form</span> with custom pure CSS styling inputs (checkboxes, radio buttons)`,
      `utilized <span>Google Maps embed API</span> iframe generator for interactive map implementation`,
      `implemented <span>cross-browser development</span> and progressive enhancement`
    ],
    plates: [
      `<i class="devicon-html5-plain"></i>`,
      `<i class="devicon-css3-plain"></i>`,
      `<i class="devicon-javascript-plain"></i>`,
    ]
  }
];

const AboutExperience = [
  {
    name: `work`,
    icon: `<i class="fas fa-briefcase"></i>`,
    title: `Work history`,
    places: [
      {
        title: `Yandex`,
        specialty: `Senior specialist of Yandex Zen content service`,
        dates: `2018 - present`
      },
      {
        title: `ADV Marketing Services`,
        specialty: `Senior specialist of Digital Services group`,
        dates: `2007 - 2017`
      }
    ]
  },
  {
    name: `education`,
    icon: `<i class="fas fa-graduation-cap"></i>`,
    title: `Education`,
    places: [
      {
        title: `HTML Academy`,
        specialty: `React Developer Professional Course`,
        dates: `January - December 2020`
      },
      {
        title: `Moscow Region State University`,
        specialty: `Bachelor of Management Studies`,
        dates: `2000 - 2005`
      }
    ]
  }
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
  footer.style.opacity = (window.pageYOffset > '4400' ? 1 : 0);
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
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");






const {ABOUT} = _data_data_js__WEBPACK_IMPORTED_MODULE_4__.Section;

class About {
  constructor(container) {
    this._container = container;
    this._about = new _view_about_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._header = new _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__.default(ABOUT.title, ABOUT.subtitle);
    this._items = new _view_about_items_js__WEBPACK_IMPORTED_MODULE_2__.default();
  }

  init() {
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this._container, this._about);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this._about, this._header);
    (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this._about, this._items);
  }

  setOnScrollView() {
    this._about.getElement().style.opacity = (window.pageYOffset > '3650' ? 1 : 0);
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
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const.js */ "./src/const.js");








const {PROJECTS} = _data_data_js__WEBPACK_IMPORTED_MODULE_5__.Section;
const {ABOUT} = _const_js__WEBPACK_IMPORTED_MODULE_6__.Anchore;

class Projects {
  constructor(container) {
    this._container = container;
    this._projects = new _view_projects_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._header = new _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__.default(PROJECTS.title, PROJECTS.subtitle, ABOUT);
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
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const.js */ "./src/const.js");







const {SKILLS} = _data_data_js__WEBPACK_IMPORTED_MODULE_4__.Section;
const {PROJECTS} = _const_js__WEBPACK_IMPORTED_MODULE_5__.Anchore;

class Skills {
  constructor(container) {
    this._container = container;
    this._skills = new _view_skills_js__WEBPACK_IMPORTED_MODULE_0__.default();
    this._header = new _view_section_header_js__WEBPACK_IMPORTED_MODULE_1__.default(SKILLS.title, SKILLS.subtitle, PROJECTS);
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
console.log(columns)

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
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");



const createAboutPlacesMarkup = (places) => {
  return places.map((place) =>
    `<div class="about__text-section">
      <p class="about__text about__title">${place.title}</p>
      <p class="about__text">${place.specialty}</p>
      <p class="about__text about__text--dates">${place.dates}</p>
    </div>`
  ).join(``);
}

const createAboutExperienceMarkup = () => {
  return _data_data_js__WEBPACK_IMPORTED_MODULE_1__.AboutExperience.map((item) =>
    `<div class="about__item about__item--${item.name}">
    <h3 class="about__section-title">${item.icon} ${item.title}</h3>
      ${createAboutPlacesMarkup(item.places)}
    </div>`
  ).join(``);
}

const createAboutItemsMarkup = () => {
  const aboutExperienceMarkup = createAboutExperienceMarkup();

  return (
    `<div class="about__items">
      <div class="about__item about__item--bio">
        <div class="about__photo-wrapper">
          <img class="about__photo" src="img/julia.jpg" width="300" alt="Julia Nabiulina">
        </div>
        <p class="about__text"><span class="about__title">Name:</span> Julia Nabiulina</p>
        <p class="about__text"><span class="about__title">Age:</span> 38</p>
        <p class="about__text"><span class="about__title">From:</span> Moscow</p>
        <p class="about__text"><span class="about__title">Interests:</span>
          <span class="about__interests">
          <i class="fas fa-laptop-code"><span class="about__tooltip">Coding</span></i>
          <i class="fas fa-compact-disc"><span class="about__tooltip">Music</span></i>
          <i class="fas fa-book"><span class="about__tooltip">Reading</span></i>
          <i class="fas fa-bicycle"><span class="about__tooltip">Cycling</span></i>
          <i class="fas fa-camera"><span class="about__tooltip">Photography</span></i></i>
          </span>
        </p>
      </div>
      ${aboutExperienceMarkup}
    </div>`
  );
};

class AboutItems extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {

  getTemplate() {
    return createAboutItemsMarkup();
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

const createProjectListItemMarkup = (project) => {
  return (
  `<li class="projects__item">
    <img class="projects__image" src=${project.img} width="450" alt="${project.title} Project">
    <div class="projects__header">
      <h3 class="projects__header-title">${project.title}</h3>
      <div class="projects__header-buttons">
        <a href=${project.demo} target="_blank" class="projects__header-button button button--demo">Live Demo</a>
        <a href=${project.git} target="_blank" class="projects__header-button button button--git">
          <i class="devicon-github-original"></i>
        </a>
      </div>
    </div>
    <p class="projects__description">${project.description}</p>
    <ul class="projects__activities">
      ${createProjectActivitiesMarkup(project.activities)}
    </ul>
    <div class="projects__footer">
      <button type="button" class="projects__footer-button button button--details">
        Details
        <i class="fas fa-chevron-circle-down"></i>
      </button>
      <ul class="projects__footer-plates">
      ${createProjectPlatesMarkup(project.plates)}
      </ul>
    </div>
  </li>`
  );
};

class ProjectItem extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(project) {
    super();
    this._project = project;
    this._details = this.getElement().querySelector(`button`);
    this._activities = this.getElement().querySelector(`.projects__activities`);
    this._rotateDeg = 180;
    this._style = `block`;
    this._handleDetailsButtonClick = this._handleDetailsButtonClick.bind(this);

    this.setDetailsButtonHandler();
  }

  getTemplate() {
    return createProjectListItemMarkup(this._project);
  }

  _handleDetailsButtonClick() {
    const chevron = this._details.querySelector(`i`);
    chevron.style.transform = `rotate(${this._rotateDeg}deg)`;
    this._rotateDeg = this._rotateDeg + 180;
    this._activities.style.display = this._style;
    this._style = (this._style === `none`) ? `block` : `none`;
  }

  setDetailsButtonHandler() {
    this._details.addEventListener(`click`, this._handleDetailsButtonClick);
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


const createSectionHeaderMarkup = (title, subtitle, nextPage) => {
  return (
    `<div class="section__header">
      <h2 class="section__title">${title} <span>${subtitle}</span></h2>
      <div class="section__controls">
        <a class="section__controls-button section__controls-button--top" href="#">
          <i class="far fa-caret-square-up"></i>
        </a>
        ${nextPage ?
        `<a class="section__controls-button section__controls-button--bottom" href=${nextPage}>
          <i class="far fa-caret-square-down"></i>
        </a>`
        : ``}
      </div>
      </div>`
  );
};

class SectionHeader extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(title, subtitle, nextPage) {
    super();

    this._title = title;
    this._subtitle = subtitle;
    this._nextPage = nextPage;
  }

  getTemplate() {
    return createSectionHeaderMarkup(this._title, this._subtitle, this._nextPage);
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



const createSkillsIconsMarkup = (icons) => {
  return icons.map((icon) =>
    `<li><i class="${icon}"></i></li>`
  ).join(``);
}

const createSkillsDescriptionsMarkup = (descriptions) => {
    return descriptions.map((description) =>
    `<li><i class="fas fa-cog"></i>${description}</li>`
  ).join(``);
}

const createSkillListItemsMarkup = () => {
    return _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Skills.map((skill) =>
    `<li class="skills__item">
      <ul class="skills__icons">
        ${createSkillsIconsMarkup(skill.icons)}
      </ul>
      <h3 class="skills__item-title">${skill.title}</h3>
      <ul class="skills__descriptions">
        ${createSkillsDescriptionsMarkup(skill.descriptions)}
      </ul>
    </li>`
    ).join(``);
}

const createSkillListMarkup = () => {
  const skillListItemsMarkup = createSkillListItemsMarkup();

  return (
    `<ul class="skills__list">
      ${skillListItemsMarkup}
    </ul>`
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