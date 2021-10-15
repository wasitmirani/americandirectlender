"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_content_application_ShowApplicationComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      application: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$route.params.id) {
      var url = "/customer/applications/" + this.$route.params.id;
      axios.get(url).then(function (res) {
        // this.user=res.data.user;
        _this.application = res.data.application;
        console.log(_this.application);
      })["catch"](function (err) {
        if (err.response.status == 422) {
          _this.errors = err.response.data.errors;
          return _this.$root.alertNotificationMessage(err.response.status, err.response.data.errors);
        }

        _this.$root.alertNotificationMessage(err.response.status, err.response.data);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowApplicationComponent_vue_vue_type_template_id_4f410bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowApplicationComponent.vue?vue&type=template&id=4f410bd0& */ "./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=template&id=4f410bd0&");
/* harmony import */ var _ShowApplicationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowApplicationComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowApplicationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowApplicationComponent_vue_vue_type_template_id_4f410bd0___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowApplicationComponent_vue_vue_type_template_id_4f410bd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowApplicationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowApplicationComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowApplicationComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=template&id=4f410bd0&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=template&id=4f410bd0& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowApplicationComponent_vue_vue_type_template_id_4f410bd0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowApplicationComponent_vue_vue_type_template_id_4f410bd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowApplicationComponent_vue_vue_type_template_id_4f410bd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowApplicationComponent.vue?vue&type=template&id=4f410bd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=template&id=4f410bd0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=template&id=4f410bd0&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/content/application/ShowApplicationComponent.vue?vue&type=template&id=4f410bd0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "header-faq" }, [
        _c("h5", { staticClass: "mb-0" }, [_vm._v("Application Detail")]),
        _vm._v(" "),
        _c("div", { staticClass: "kanban-item" }, [
          _c("a", { staticClass: "kanban-box", attrs: { href: "#" } }, [
            _c("span", { staticClass: "date" }, [
              _vm._v(_vm._s(this.application.date))
            ]),
            this.application.status == "1"
              ? _c("span", { staticClass: "badge badge-danger f-right" }, [
                  _vm._v("In Process")
                ])
              : _vm._e(),
            _vm._v(" "),
            this.application.status == "0"
              ? _c("span", { staticClass: "badge badge-danger f-right" }, [
                  _vm._v("Done")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("h6", [_vm._v(_vm._s(this.application.name))]),
            _vm._v(" "),
            _c("div", { staticClass: "media" }, [
              _c("div", { staticClass: "media-body" }, [
                _c("p", [
                  _c("span", [
                    _vm._v(
                      "Property Value: $ *:" +
                        _vm._s(_vm.application.property_value)
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _vm._v(
                      "Property Type:" + _vm._s(_vm.application.property_type)
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "row default-according style-1 faq-accordion",
          attrs: { id: "accordionoc" }
        },
        [
          _c(
            "div",
            { staticClass: "col-xl-8 xl-60 col-lg-6 col-md-7 box-col-8" },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v(
                          "Any updates or changes to the property (*which can change value)? "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon",
                      "aria-labelledby": "collapseicon",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.property_update))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon2",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v(
                          " Property Address (if known, confirm loan limits in Lending Pad, as they are based on city/county and might be jumbo under $822k):"
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon2",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [
                        _vm._v(_vm._s(_vm.application.property_address))
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon3",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("HOA?")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon3",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.hoa))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon4",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Any Mello-Roos/Other Fees or Special Taxes")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon4",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.fee))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon5",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Cash Out")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon5",
                      "aria-labelledby": "collapseicon5",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.cash_out))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon7",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Refinance")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon7",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.refinance))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon8",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Payments On-Time in the last 12 Months?")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon8",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [
                        _vm._v(_vm._s(_vm.application.payment_assurance))
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon9",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v(
                          " If Payments Have Been Deferred, have you Made Payments on Time in the Last 3 Months?"
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon9",
                      "aria-labelledby": "collapseicon9",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.payment_surity))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon10",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Purchase")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon10",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.purchase))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon11",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Do You Have a Second Loan?")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon11",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.second_loan))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon12",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("If Have Loan")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon12",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.is_second_loan))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon13",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Loan Amount")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon13",
                      "aria-labelledby": "collapseicon13",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.loan_amount))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon14",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Cash Reserve")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon14",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.is_second_loan))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon16",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Loan Doc Type ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon16",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.doc_type))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon17",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v(" Occupant")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon17",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.Occupant))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h5", { staticClass: "mb-0" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-link collapsed",
                        attrs: {
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseicon18",
                          "aria-expanded": "false",
                          "aria-controls": "collapseicon2"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-help-circle",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              attrs: { cx: "12", cy: "12", r: "10" }
                            }),
                            _c("path", {
                              attrs: {
                                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                              }
                            }),
                            _c("line", {
                              attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
                            })
                          ]
                        ),
                        _vm._v("Income Type")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "collapse",
                    attrs: {
                      id: "collapseicon18",
                      "data-parent": "#accordionoc"
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", [_vm._v(_vm._s(_vm.application.income_type))])
                    ])
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4 xl-40 col-lg-6 col-md-5 box-col-4" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("other applicable sources of income: ")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.source_income))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v(
                              "Recent Promotions, Changes in Salary, and Whether You are Paying Yourself:"
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.promotion_detail))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Type Of Business:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.business_type))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Social Media Existance:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [_vm._v(_vm._s(_vm.application.is_oline))])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Reason Why No Exist In Social Media:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.is_online_rason))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Tax Return:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [_vm._v(_vm._s(_vm.application.tax_return))])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Recently Closed / Opened Business:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.recent_business))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Experience In Same Business:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v("<" + _vm._s(_vm.application.business_line))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Business Partner:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.business_partner))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Credit/Financial History:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.financial_history))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("If Investment Property: Monthly Rent $:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.investment_property))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Renovation:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [_vm._v(_vm._s(_vm.application.renovation))])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Mortgage Statement Provided::")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.mortgage_statement))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v("Is Property Insured:")
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.property_insured))
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", { staticClass: "mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-link collapsed",
                            attrs: {
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#collapseicon",
                              "aria-expanded": "false",
                              "aria-controls": "collapseicon"
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-help-circle",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }
                              },
                              [
                                _c("circle", {
                                  attrs: { cx: "12", cy: "12", r: "10" }
                                }),
                                _c("path", {
                                  attrs: {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                  }
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "12",
                                    y1: "17",
                                    x2: "12",
                                    y2: "17"
                                  }
                                })
                              ]
                            ),
                            _vm._v(
                              "List all Liabilities/Liens/Loans/Investments/Cosign on Loans:"
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "collapse",
                        attrs: {
                          id: "collapseicon",
                          "aria-labelledby": "collapseicon",
                          "data-parent": "#accordionoc"
                        }
                      },
                      [
                        _c("div", { staticClass: "card-body" }, [
                          _c("p", [
                            _vm._v(_vm._s(_vm.application.liabilities_loans))
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
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