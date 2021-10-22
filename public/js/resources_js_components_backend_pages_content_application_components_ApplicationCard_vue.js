"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_content_application_components_ApplicationCard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['application', 'getApplications', 'roles', 'getRoles', 'applications'],
  data: function data() {
    return {
      app: "",
      agent: "",
      comment: "",
      active: false
    };
  },
  methods: {
    openModal: function openModal(val) {
      this.resetForm();
      return this.active_modal = val;
    },
    resetForm: function resetForm() {
      this.active_modal = false;
    },
    updateStatus: function updateStatus() {
      var _this = this;

      var formData = new FormData();
      formData.append('app', this.app);
      formData.append('agent', this.agent);
      axios.put('/update/status/' + this.application.id, formData).then(function (res) {
        _this.$root.alertNotificationMessage(res.status, "Status has been updated successfully");

        setTimeout(function () {
          _this.$router.push({
            name: 'users'
          });
        }, 1000);
      })["catch"](function (err) {
        if (err.response.status == 422) {
          _this.errors = err.response.data.errors;
          return _this.$root.alertNotificationMessage(err.response.status, err.response.data.errors);
        }

        _this.$root.alertNotificationMessage(err.response.status, err.response.data);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('app', this.app);
      formData.append('agent', this.agent);
      axios.post('/assign/app', formData).then(function (res) {
        _this2.$root.alertNotificationMessage(res.status, "Application Assigned To Agent successfully");

        setTimeout(function () {
          _this2.$router.push({
            name: 'users'
          });
        }, 1000);
      })["catch"](function (err) {
        if (err.response.status == 422) {
          _this2.errors = err.response.data.errors;
          return _this2.$root.alertNotificationMessage(err.response.status, err.response.data.errors);
        }

        _this2.$root.alertNotificationMessage(err.response.status, err.response.data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vs-button{\n    background-color:#4b4d72;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApplicationCard_vue_vue_type_template_id_02b744ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationCard.vue?vue&type=template&id=02b744ed& */ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=template&id=02b744ed&");
/* harmony import */ var _ApplicationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationCard.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _ApplicationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationCard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ApplicationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplicationCard_vue_vue_type_template_id_02b744ed___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApplicationCard_vue_vue_type_template_id_02b744ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/content/application/components/ApplicationCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationCard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=template&id=02b744ed&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=template&id=02b744ed& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_template_id_02b744ed___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_template_id_02b744ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationCard_vue_vue_type_template_id_02b744ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationCard.vue?vue&type=template&id=02b744ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=template&id=02b744ed&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=template&id=02b744ed&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/components/ApplicationCard.vue?vue&type=template&id=02b744ed& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "project-box" }, [
        _c(
          "span",
          {
            staticClass: "badge badge-primary",
            staticStyle: { "margin-right": "31px" }
          },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "show-application",
                    params: { id: _vm.application.id }
                  }
                }
              },
              [_c("i", { staticClass: "fa  fa-eye text-light" })]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "badge badge-primary" },
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "update-application",
                    params: { id: _vm.application.id }
                  }
                }
              },
              [_c("i", { staticClass: "fa  fa-edit text-light" })]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h6", [_vm._v(_vm._s(_vm.application.name))]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.application.property_detail) + ".")]),
        _vm._v(" "),
        _c("div", { staticClass: "row details" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 font-primary" }, [
            _vm._v(_vm._s(_vm.application.property_value) + " ")
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 font-primary" }, [
            _vm._v(_vm._s(_vm.application.property_type))
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 font-primary" }, [
            _vm._v(_vm._s(_vm.application.property_update))
          ])
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "project-status mt-4" }, [
          _c(
            "div",
            { staticClass: "media mb-0" },
            [
              _vm.application.status == "1"
                ? _c("p", [_vm._v("Assigned")])
                : _vm._e(),
              _vm._v(" "),
              _vm.application.status == "0"
                ? _c("p", [_vm._v("Pending")])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "assign-apps",
                      params: { id: _vm.application.id }
                    }
                  }
                },
                [
                  _c("vs-button", [
                    _vm._v(
                      "\n                                    Assign\n                                "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "pagination pagination-primary mt-4" },
        [
          _c("pagination", {
            attrs: { data: _vm.application, limit: 5 },
            on: { "pagination-change-page": _vm.getApplications }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h4", { staticClass: "not-margin" }, [
                    _vm._v("\n            Assign  to "),
                    _c("b", [_vm._v("Agent")])
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "footer-dialog" },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "rgb(30, 32, 79)",
                            gradient: "",
                            type: "submit"
                          },
                          on: { click: _vm.updateStatus }
                        },
                        [_vm._v("\n                     Submit\n            ")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _vm._v(" "),
          _c("div", { staticClass: "con-form" }, [
            _c(
              "div",
              { staticClass: "mb-3" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-form-label",
                    attrs: { for: "recipient-name" }
                  },
                  [_vm._v("Application:")]
                ),
                _vm._v(" "),
                _vm.applications.length > 0
                  ? _c(
                      "vs-select",
                      {
                        attrs: {
                          filter: "",
                          "collapse-chips": "",
                          placeholder: "Applications"
                        },
                        model: {
                          value: _vm.app,
                          callback: function($$v) {
                            _vm.app = $$v
                          },
                          expression: "app"
                        }
                      },
                      _vm._l(_vm.applications, function(item) {
                        return _c(
                          "vs-option",
                          {
                            key: item.id,
                            attrs: { value: item.id, label: item.name }
                          },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(item.name) +
                                "\n            "
                            )
                          ]
                        )
                      }),
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-3" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-form-label",
                    attrs: { for: "recipient-name" }
                  },
                  [_vm._v("Agents:")]
                ),
                _vm._v(" "),
                _vm.roles.length > 0
                  ? _c(
                      "vs-select",
                      {
                        attrs: {
                          filter: "",
                          "collapse-chips": "",
                          placeholder: "Agents"
                        },
                        model: {
                          value: _vm.agent,
                          callback: function($$v) {
                            _vm.agent = $$v
                          },
                          expression: "agent"
                        }
                      },
                      _vm._l(_vm.roles, function(item) {
                        return _c(
                          "vs-option",
                          {
                            key: item.id,
                            attrs: { label: item.name, value: item.id }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.name) +
                                "\n                    "
                            )
                          ]
                        )
                      }),
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                {
                  staticClass: "col-form-label",
                  attrs: { for: "recipient-name" }
                },
                [_vm._v("Comment:")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.comment,
                    expression: "comment"
                  }
                ],
                staticClass: "form-control",
                domProps: { value: _vm.comment },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.comment = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c("label", { staticClass: "mb-3" })
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media" }, [
      _c("div", { staticClass: "media-body" }, [_c("p")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("span", [_vm._v("Property Value")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("span", [_vm._v("Property Type")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("span", [_vm._v("Property Update")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "customers" }, [_c("ul")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body text-end" }, [_c("span")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);