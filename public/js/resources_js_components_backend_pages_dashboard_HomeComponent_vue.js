(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_pages_dashboard_HomeComponent_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      logs: [],
      user: {},
      app_name: "",
      total_users: 0,
      total_applications: 0,
      total_roles: 0,
      assigned_apps: 0,
      roles: {},
      apps: {}
    };
  },
  methods: {
    dashboardChart: function dashboardChart() {
      var dataSeries = [[{
        "date": "",
        "value": 20
      }, {
        "date": "2014-01-02",
        "value": 10379978
      }, {
        "date": "2014-01-03",
        "value": 30493749
      }, {
        "date": "2014-01-04",
        "value": 10785250
      }, {
        "date": "2014-01-05",
        "value": 33901904
      }, {
        "date": "2014-01-06",
        "value": 11576838
      }, {
        "date": "2014-01-07",
        "value": 14413854
      }, {
        "date": "2014-01-08",
        "value": 15177211
      }, {
        "date": "2014-01-09",
        "value": 16622100
      }, {
        "date": "2014-01-10",
        "value": 17381072
      }, {
        "date": "2014-01-11",
        "value": 18802310
      }, {
        "date": "2014-01-12",
        "value": 15531790
      }, {
        "date": "2014-01-13",
        "value": 15748881
      }, {
        "date": "2014-01-14",
        "value": 18706437
      }, {
        "date": "2014-01-15",
        "value": 19752685
      }, {
        "date": "2014-01-16",
        "value": 21016418
      }, {
        "date": "2014-01-17",
        "value": 25622924
      }, {
        "date": "2014-01-18",
        "value": 25337480
      }, {
        "date": "2014-01-19",
        "value": 22258882
      }, {
        "date": "2014-01-20",
        "value": 23829538
      }, {
        "date": "2014-01-21",
        "value": 24245689
      }, {
        "date": "2014-01-22",
        "value": 26429711
      }, {
        "date": "2014-01-23",
        "value": 26259017
      }, {
        "date": "2014-01-24",
        "value": 25396183
      }, {
        "date": "2014-01-25",
        "value": 23107346
      }, {
        "date": "2014-01-26",
        "value": 28659852
      }, {
        "date": "2014-01-27",
        "value": 25270783
      }, {
        "date": "2014-01-28",
        "value": 26270783
      }, {
        "date": "2014-01-29",
        "value": 27270783
      }, {
        "date": "2014-01-30",
        "value": 28270783
      }, {
        "date": "2014-01-31",
        "value": 29270783
      }, {
        "date": "2014-02-01",
        "value": 30270783
      }, {
        "date": "2014-02-02",
        "value": 31270783
      }, {
        "date": "2014-02-03",
        "value": 32270783
      }, {
        "date": "2014-02-04",
        "value": 33270783
      }, {
        "date": "2014-02-05",
        "value": 28270783
      }, {
        "date": "2014-02-06",
        "value": 27270783
      }, {
        "date": "2014-02-07",
        "value": 35270783
      }, {
        "date": "2014-02-08",
        "value": 34270783
      }, {
        "date": "2014-02-09",
        "value": 28270783
      }, {
        "date": "2014-02-10",
        "value": 35270783
      }, {
        "date": "2014-02-11",
        "value": 36270783
      }, {
        "date": "2014-02-12",
        "value": 34127078
      }, {
        "date": "2014-02-13",
        "value": 33124078
      }, {
        "date": "2014-02-14",
        "value": 36227078
      }, {
        "date": "2014-02-15",
        "value": 37827078
      }, {
        "date": "2014-02-16",
        "value": 36427073
      }, {
        "date": "2014-02-17",
        "value": 37570783
      }, {
        "date": "2014-02-18",
        "value": 38627073
      }, {
        "date": "2014-02-19",
        "value": 37727078
      }, {
        "date": "2014-02-20",
        "value": 38827073
      }, {
        "date": "2014-02-21",
        "value": 40927078
      }, {
        "date": "2014-02-22",
        "value": 41027078
      }, {
        "date": "2014-02-23",
        "value": 42127073
      }, {
        "date": "2014-02-24",
        "value": 43220783
      }, {
        "date": "2014-02-25",
        "value": 44327078
      }, {
        "date": "2014-02-26",
        "value": 40427078
      }, {
        "date": "2014-02-27",
        "value": 41027078
      }, {
        "date": "2014-02-28",
        "value": 45627078
      }, {
        "date": "2014-03-01",
        "value": 44727078
      }, {
        "date": "2014-03-02",
        "value": 44227078
      }, {
        "date": "2014-03-03",
        "value": 45227078
      }, {
        "date": "2014-03-04",
        "value": 46027078
      }, {
        "date": "2014-03-05",
        "value": 46927078
      }, {
        "date": "2014-03-06",
        "value": 47027078
      }, {
        "date": "2014-03-07",
        "value": 46227078
      }, {
        "date": "2014-03-08",
        "value": 47027078
      }, {
        "date": "2014-03-09",
        "value": 48027078
      }, {
        "date": "2014-03-10",
        "value": 47027078
      }, {
        "date": "2014-03-11",
        "value": 47027078
      }, {
        "date": "2014-03-12",
        "value": 48017078
      }, {
        "date": "2014-03-13",
        "value": 48077078
      }, {
        "date": "2014-03-14",
        "value": 48087078
      }, {
        "date": "2014-03-15",
        "value": 48017078
      }, {
        "date": "2014-03-16",
        "value": 48047078
      }, {
        "date": "2014-03-17",
        "value": 48067078
      }, {
        "date": "2014-03-18",
        "value": 48077078
      }, {
        "date": "2014-03-19",
        "value": 48027074
      }, {
        "date": "2014-03-20",
        "value": 48927079
      }, {
        "date": "2014-03-21",
        "value": 48727071
      }, {
        "date": "2014-03-22",
        "value": 48127072
      }, {
        "date": "2014-03-23",
        "value": 48527072
      }, {
        "date": "2014-03-24",
        "value": 48627027
      }, {
        "date": "2014-03-25",
        "value": 48027040
      }, {
        "date": "2014-03-26",
        "value": 48027043
      }, {
        "date": "2014-03-27",
        "value": 48057022
      }, {
        "date": "2014-03-28",
        "value": 49057022
      }, {
        "date": "2014-03-29",
        "value": 50057022
      }, {
        "date": "2014-03-30",
        "value": 51057022
      }, {
        "date": "2014-03-31",
        "value": 52057022
      }, {
        "date": "2014-04-01",
        "value": 53057022
      }, {
        "date": "2014-04-02",
        "value": 54057022
      }, {
        "date": "2014-04-03",
        "value": 52057022
      }, {
        "date": "2014-04-04",
        "value": 55057022
      }, {
        "date": "2014-04-05",
        "value": 58270783
      }, {
        "date": "2014-04-06",
        "value": 56270783
      }, {
        "date": "2014-04-07",
        "value": 55270783
      }, {
        "date": "2014-04-08",
        "value": 58270783
      }, {
        "date": "2014-04-09",
        "value": 59270783
      }, {
        "date": "2014-04-10",
        "value": 60270783
      }, {
        "date": "2014-04-11",
        "value": 61270783
      }, {
        "date": "2014-04-12",
        "value": 62270783
      }, {
        "date": "2014-04-13",
        "value": 63270783
      }, {
        "date": "2014-04-14",
        "value": 64270783
      }, {
        "date": "2014-04-15",
        "value": 65270783
      }, {
        "date": "2014-04-16",
        "value": 66270783
      }, {
        "date": "2014-04-17",
        "value": 67270783
      }, {
        "date": "2014-04-18",
        "value": 68270783
      }, {
        "date": "2014-04-19",
        "value": 69270783
      }, {
        "date": "2014-04-20",
        "value": 70270783
      }, {
        "date": "2014-04-21",
        "value": 71270783
      }, {
        "date": "2014-04-22",
        "value": 72270783
      }, {
        "date": "2014-04-23",
        "value": 73270783
      }, {
        "date": "2014-04-24",
        "value": 74270783
      }, {
        "date": "2014-04-25",
        "value": 75270783
      }, {
        "date": "2014-04-26",
        "value": 76660783
      }, {
        "date": "2014-04-27",
        "value": 77270783
      }, {
        "date": "2014-04-28",
        "value": 78370783
      }, {
        "date": "2014-04-29",
        "value": 79470783
      }, {
        "date": "2014-04-30",
        "value": 80170783
      }], [{
        "date": "2014-01-01",
        "value": 150000000
      }, {
        "date": "2014-01-02",
        "value": 160379978
      }, {
        "date": "2014-01-03",
        "value": 170493749
      }, {
        "date": "2014-01-04",
        "value": 160785250
      }, {
        "date": "2014-01-05",
        "value": 167391904
      }, {
        "date": "2014-01-06",
        "value": 161576838
      }, {
        "date": "2014-01-07",
        "value": 161413854
      }, {
        "date": "2014-01-08",
        "value": 152177211
      }, {
        "date": "2014-01-09",
        "value": 140762210
      }, {
        "date": "2014-01-10",
        "value": 144381072
      }, {
        "date": "2014-01-11",
        "value": 154352310
      }, {
        "date": "2014-01-12",
        "value": 165531790
      }, {
        "date": "2014-01-13",
        "value": 175748881
      }, {
        "date": "2014-01-14",
        "value": 187064037
      }, {
        "date": "2014-01-15",
        "value": 197520685
      }, {
        "date": "2014-01-16",
        "value": 210176418
      }, {
        "date": "2014-01-17",
        "value": 196122924
      }, {
        "date": "2014-01-18",
        "value": 207337480
      }, {
        "date": "2014-01-19",
        "value": 200258882
      }, {
        "date": "2014-01-20",
        "value": 186829538
      }, {
        "date": "2014-01-21",
        "value": 192456897
      }, {
        "date": "2014-01-22",
        "value": 204299711
      }, {
        "date": "2014-01-23",
        "value": 192759017
      }, {
        "date": "2014-01-24",
        "value": 203596183
      }, {
        "date": "2014-01-25",
        "value": 208107346
      }, {
        "date": "2014-01-26",
        "value": 196359852
      }, {
        "date": "2014-01-27",
        "value": 192570783
      }, {
        "date": "2014-01-28",
        "value": 177967768
      }, {
        "date": "2014-01-29",
        "value": 190632803
      }, {
        "date": "2014-01-30",
        "value": 203725316
      }, {
        "date": "2014-01-31",
        "value": 218226177
      }, {
        "date": "2014-02-01",
        "value": 210698669
      }, {
        "date": "2014-02-02",
        "value": 217640656
      }, {
        "date": "2014-02-03",
        "value": 216142362
      }, {
        "date": "2014-02-04",
        "value": 201410971
      }, {
        "date": "2014-02-05",
        "value": 196704289
      }, {
        "date": "2014-02-06",
        "value": 190436945
      }, {
        "date": "2014-02-07",
        "value": 178891686
      }, {
        "date": "2014-02-08",
        "value": 171613962
      }, {
        "date": "2014-02-09",
        "value": 157579773
      }, {
        "date": "2014-02-10",
        "value": 158677098
      }, {
        "date": "2014-02-11",
        "value": 147129977
      }, {
        "date": "2014-02-12",
        "value": 151561876
      }, {
        "date": "2014-02-13",
        "value": 151627421
      }, {
        "date": "2014-02-14",
        "value": 143543872
      }, {
        "date": "2014-02-15",
        "value": 136581057
      }, {
        "date": "2014-02-16",
        "value": 135560715
      }, {
        "date": "2014-02-17",
        "value": 122625263
      }, {
        "date": "2014-02-18",
        "value": 112091484
      }, {
        "date": "2014-02-19",
        "value": 98810329
      }, {
        "date": "2014-02-20",
        "value": 99882912
      }, {
        "date": "2014-02-21",
        "value": 94943095
      }, {
        "date": "2014-02-22",
        "value": 104875743
      }, {
        "date": "2014-02-23",
        "value": 116383678
      }, {
        "date": "2014-02-24",
        "value": 125028841
      }, {
        "date": "2014-02-25",
        "value": 123967310
      }, {
        "date": "2014-02-26",
        "value": 133167029
      }, {
        "date": "2014-02-27",
        "value": 128577263
      }, {
        "date": "2014-02-28",
        "value": 115836969
      }, {
        "date": "2014-03-01",
        "value": 119264529
      }, {
        "date": "2014-03-02",
        "value": 109363374
      }, {
        "date": "2014-03-03",
        "value": 113985628
      }, {
        "date": "2014-03-04",
        "value": 114650999
      }, {
        "date": "2014-03-05",
        "value": 110866108
      }, {
        "date": "2014-03-06",
        "value": 96473454
      }, {
        "date": "2014-03-07",
        "value": 104075886
      }, {
        "date": "2014-03-08",
        "value": 103568384
      }, {
        "date": "2014-03-09",
        "value": 101534883
      }, {
        "date": "2014-03-10",
        "value": 115825447
      }, {
        "date": "2014-03-11",
        "value": 126133916
      }, {
        "date": "2014-03-12",
        "value": 116502109
      }, {
        "date": "2014-03-13",
        "value": 130169411
      }, {
        "date": "2014-03-14",
        "value": 124296886
      }, {
        "date": "2014-03-15",
        "value": 126347399
      }, {
        "date": "2014-03-16",
        "value": 131483669
      }, {
        "date": "2014-03-17",
        "value": 142811333
      }, {
        "date": "2014-03-18",
        "value": 129675396
      }, {
        "date": "2014-03-19",
        "value": 115514483
      }, {
        "date": "2014-03-20",
        "value": 117630630
      }, {
        "date": "2014-03-21",
        "value": 122340239
      }, {
        "date": "2014-03-22",
        "value": 132349091
      }, {
        "date": "2014-03-23",
        "value": 125613305
      }, {
        "date": "2014-03-24",
        "value": 135592466
      }, {
        "date": "2014-03-25",
        "value": 123408762
      }, {
        "date": "2014-03-26",
        "value": 111991454
      }, {
        "date": "2014-03-27",
        "value": 116123955
      }, {
        "date": "2014-03-28",
        "value": 112817214
      }, {
        "date": "2014-03-29",
        "value": 113029590
      }, {
        "date": "2014-03-30",
        "value": 108753398
      }, {
        "date": "2014-03-31",
        "value": 99383763
      }, {
        "date": "2014-04-01",
        "value": 100151737
      }, {
        "date": "2014-04-02",
        "value": 94985209
      }, {
        "date": "2014-04-03",
        "value": 82913669
      }, {
        "date": "2014-04-04",
        "value": 78748268
      }, {
        "date": "2014-04-05",
        "value": 63829135
      }, {
        "date": "2014-04-06",
        "value": 78694727
      }, {
        "date": "2014-04-07",
        "value": 80868994
      }, {
        "date": "2014-04-08",
        "value": 93799013
      }, {
        "date": "2014-04-09",
        "value": 99042416
      }, {
        "date": "2014-04-10",
        "value": 97298692
      }, {
        "date": "2014-04-11",
        "value": 83353499
      }, {
        "date": "2014-04-12",
        "value": 71248129
      }, {
        "date": "2014-04-13",
        "value": 75253744
      }, {
        "date": "2014-04-14",
        "value": 68976648
      }, {
        "date": "2014-04-15",
        "value": 71002284
      }, {
        "date": "2014-04-16",
        "value": 75052401
      }, {
        "date": "2014-04-17",
        "value": 83894030
      }, {
        "date": "2014-04-18",
        "value": 90236528
      }, {
        "date": "2014-04-19",
        "value": 99739114
      }, {
        "date": "2014-04-20",
        "value": 96407136
      }, {
        "date": "2014-04-21",
        "value": 108323177
      }, {
        "date": "2014-04-22",
        "value": 101578914
      }, {
        "date": "2014-04-23",
        "value": 115877608
      }, {
        "date": "2014-04-24",
        "value": 112088857
      }, {
        "date": "2014-04-25",
        "value": 112071353
      }, {
        "date": "2014-04-26",
        "value": 101790062
      }, {
        "date": "2014-04-27",
        "value": 115003761
      }, {
        "date": "2014-04-28",
        "value": 120457727
      }, {
        "date": "2014-04-29",
        "value": 118253926
      }, {
        "date": "2014-04-30",
        "value": 117956992
      }], [{
        "date": "2014-01-01",
        "value": 50000000
      }, {
        "date": "2014-01-02",
        "value": 60379978
      }, {
        "date": "2014-01-03",
        "value": 40493749
      }, {
        "date": "2014-01-04",
        "value": 60785250
      }, {
        "date": "2014-01-05",
        "value": 67391904
      }, {
        "date": "2014-01-06",
        "value": 61576838
      }, {
        "date": "2014-01-07",
        "value": 61413854
      }, {
        "date": "2014-01-08",
        "value": 82177211
      }, {
        "date": "2014-01-09",
        "value": 103762210
      }, {
        "date": "2014-01-10",
        "value": 84381072
      }, {
        "date": "2014-01-11",
        "value": 54352310
      }, {
        "date": "2014-01-12",
        "value": 65531790
      }, {
        "date": "2014-01-13",
        "value": 75748881
      }, {
        "date": "2014-01-14",
        "value": 47064037
      }, {
        "date": "2014-01-15",
        "value": 67520685
      }, {
        "date": "2014-01-16",
        "value": 60176418
      }, {
        "date": "2014-01-17",
        "value": 66122924
      }, {
        "date": "2014-01-18",
        "value": 57337480
      }, {
        "date": "2014-01-19",
        "value": 100258882
      }, {
        "date": "2014-01-20",
        "value": 46829538
      }, {
        "date": "2014-01-21",
        "value": 92456897
      }, {
        "date": "2014-01-22",
        "value": 94299711
      }, {
        "date": "2014-01-23",
        "value": 62759017
      }, {
        "date": "2014-01-24",
        "value": 103596183
      }, {
        "date": "2014-01-25",
        "value": 108107346
      }, {
        "date": "2014-01-26",
        "value": 66359852
      }, {
        "date": "2014-01-27",
        "value": 62570783
      }, {
        "date": "2014-01-28",
        "value": 77967768
      }, {
        "date": "2014-01-29",
        "value": 60632803
      }, {
        "date": "2014-01-30",
        "value": 103725316
      }, {
        "date": "2014-01-31",
        "value": 98226177
      }, {
        "date": "2014-02-01",
        "value": 60698669
      }, {
        "date": "2014-02-02",
        "value": 67640656
      }, {
        "date": "2014-02-03",
        "value": 66142362
      }, {
        "date": "2014-02-04",
        "value": 101410971
      }, {
        "date": "2014-02-05",
        "value": 66704289
      }, {
        "date": "2014-02-06",
        "value": 60436945
      }, {
        "date": "2014-02-07",
        "value": 78891686
      }, {
        "date": "2014-02-08",
        "value": 71613962
      }, {
        "date": "2014-02-09",
        "value": 107579773
      }, {
        "date": "2014-02-10",
        "value": 58677098
      }, {
        "date": "2014-02-11",
        "value": 87129977
      }, {
        "date": "2014-02-12",
        "value": 51561876
      }, {
        "date": "2014-02-13",
        "value": 51627421
      }, {
        "date": "2014-02-14",
        "value": 83543872
      }, {
        "date": "2014-02-15",
        "value": 66581057
      }, {
        "date": "2014-02-16",
        "value": 65560715
      }, {
        "date": "2014-02-17",
        "value": 62625263
      }, {
        "date": "2014-02-18",
        "value": 92091484
      }, {
        "date": "2014-02-19",
        "value": 48810329
      }, {
        "date": "2014-02-20",
        "value": 49882912
      }, {
        "date": "2014-02-21",
        "value": 44943095
      }, {
        "date": "2014-02-22",
        "value": 104875743
      }, {
        "date": "2014-02-23",
        "value": 96383678
      }, {
        "date": "2014-02-24",
        "value": 105028841
      }, {
        "date": "2014-02-25",
        "value": 63967310
      }, {
        "date": "2014-02-26",
        "value": 63167029
      }, {
        "date": "2014-02-27",
        "value": 68577263
      }, {
        "date": "2014-02-28",
        "value": 95836969
      }, {
        "date": "2014-03-01",
        "value": 99264529
      }, {
        "date": "2014-03-02",
        "value": 109363374
      }, {
        "date": "2014-03-03",
        "value": 93985628
      }, {
        "date": "2014-03-04",
        "value": 94650999
      }, {
        "date": "2014-03-05",
        "value": 90866108
      }, {
        "date": "2014-03-06",
        "value": 46473454
      }, {
        "date": "2014-03-07",
        "value": 84075886
      }, {
        "date": "2014-03-08",
        "value": 103568384
      }, {
        "date": "2014-03-09",
        "value": 101534883
      }, {
        "date": "2014-03-10",
        "value": 95825447
      }, {
        "date": "2014-03-11",
        "value": 66133916
      }, {
        "date": "2014-03-12",
        "value": 96502109
      }, {
        "date": "2014-03-13",
        "value": 80169411
      }, {
        "date": "2014-03-14",
        "value": 84296886
      }, {
        "date": "2014-03-15",
        "value": 86347399
      }, {
        "date": "2014-03-16",
        "value": 31483669
      }, {
        "date": "2014-03-17",
        "value": 82811333
      }, {
        "date": "2014-03-18",
        "value": 89675396
      }, {
        "date": "2014-03-19",
        "value": 95514483
      }, {
        "date": "2014-03-20",
        "value": 97630630
      }, {
        "date": "2014-03-21",
        "value": 62340239
      }, {
        "date": "2014-03-22",
        "value": 62349091
      }, {
        "date": "2014-03-23",
        "value": 65613305
      }, {
        "date": "2014-03-24",
        "value": 65592466
      }, {
        "date": "2014-03-25",
        "value": 63408762
      }, {
        "date": "2014-03-26",
        "value": 91991454
      }, {
        "date": "2014-03-27",
        "value": 96123955
      }, {
        "date": "2014-03-28",
        "value": 92817214
      }, {
        "date": "2014-03-29",
        "value": 93029590
      }, {
        "date": "2014-03-30",
        "value": 108753398
      }, {
        "date": "2014-03-31",
        "value": 49383763
      }, {
        "date": "2014-04-01",
        "value": 100151737
      }, {
        "date": "2014-04-02",
        "value": 44985209
      }, {
        "date": "2014-04-03",
        "value": 52913669
      }, {
        "date": "2014-04-04",
        "value": 48748268
      }, {
        "date": "2014-04-05",
        "value": 23829135
      }, {
        "date": "2014-04-06",
        "value": 58694727
      }, {
        "date": "2014-04-07",
        "value": 50868994
      }, {
        "date": "2014-04-08",
        "value": 43799013
      }, {
        "date": "2014-04-09",
        "value": 4042416
      }, {
        "date": "2014-04-10",
        "value": 47298692
      }, {
        "date": "2014-04-11",
        "value": 53353499
      }, {
        "date": "2014-04-12",
        "value": 71248129
      }, {
        "date": "2014-04-13",
        "value": 75253744
      }, {
        "date": "2014-04-14",
        "value": 68976648
      }, {
        "date": "2014-04-15",
        "value": 71002284
      }, {
        "date": "2014-04-16",
        "value": 75052401
      }, {
        "date": "2014-04-17",
        "value": 83894030
      }, {
        "date": "2014-04-18",
        "value": 50236528
      }, {
        "date": "2014-04-19",
        "value": 59739114
      }, {
        "date": "2014-04-20",
        "value": 56407136
      }, {
        "date": "2014-04-21",
        "value": 108323177
      }, {
        "date": "2014-04-22",
        "value": 101578914
      }, {
        "date": "2014-04-23",
        "value": 95877608
      }, {
        "date": "2014-04-24",
        "value": 62088857
      }, {
        "date": "2014-04-25",
        "value": 92071353
      }, {
        "date": "2014-04-26",
        "value": 81790062
      }, {
        "date": "2014-04-27",
        "value": 105003761
      }, {
        "date": "2014-04-28",
        "value": 100457727
      }, {
        "date": "2014-04-29",
        "value": 98253926
      }, {
        "date": "2014-04-30",
        "value": 67956992
      }]];
      var options = {
        chart: {
          height: 350,
          type: 'area',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        series: [{
          name: "Applications",
          data: series.monthDataSeries1.prices
        }],
        title: {
          text: 'Applications Statistics',
          align: 'left'
        },
        subtitle: {
          text: '',
          align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        },
        colors: [vihoAdminConfig.primary]
      };
      var chart = new ApexCharts(document.querySelector("#basic-apex"), options);
      chart.render(); // second chart dashbord dafault

      var options17 = {
        series: [10022, 67, 61, 90],
        chart: {
          height: 380,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, vihoAdminConfig.primary, vihoAdminConfig.secondary],
        labels: ["Total order", "Total product", "Quantity", "Page views"],
        legend: {
          show: true,
          floating: true,
          fontSize: "14px",
          position: "left",
          fontFamily: "Roboto",
          fontweight: 400,
          // offsetX:30,
          offsetY: 20,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0,
            show: false
          },
          formatter: function formatter(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 5,
            horizontal: 2
          }
        },
        stroke: {
          lineCap: "round"
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: true,
              fontSize: "10px"
            }
          }
        }]
      };
    },
    getDashboardData: function getDashboardData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("dashboard").then(function (res) {
                  //   console.log(res)
                  _this.total_users = res.data.users;
                  _this.total_applications = res.data.total_application;
                  _this.roles = res.data.roles;
                  _this.total_roles = res.data.total_roles;
                  _this.assigned_apps = res.data.assigned_apps;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.getDashboardData(); // console.log("userss",user);

    this.user = user;
    this.app_name = "American Lender";
    this.dashboardChart();
    axios.get("/recent/applications/").then(function (res) {
      _this2.apps = res.data.applications; //    console.log(res.data.applications)

      _this2.loading = false;
    })["catch"](function (err) {
      _this2.$root.alertNotificationMessage(err.response.status, err.response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_1fd4e942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true& */ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeComponent_vue_vue_type_template_id_1fd4e942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeComponent_vue_vue_type_template_id_1fd4e942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1fd4e942",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/pages/dashboard/HomeComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_1fd4e942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_1fd4e942_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_1fd4e942_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/pages/dashboard/HomeComponent.vue?vue&type=template&id=1fd4e942&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-6 col-md-4 box-col-4 des-xl-50" }, [
          _c("div", { staticClass: "card profile-greeting" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body text-center p-t-0" }, [
              _c("h3", { staticClass: "font-light" }, [
                _vm._v("Wellcome Back, " + _vm._s(_vm.user.name) + "!!")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n              Welcome to the " +
                    _vm._s(_vm.app_name) +
                    " Family! we are glad that you are\n              visite this dashboard. we will be happy to help you grow your\n              business.\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-sm-6 col-xl-3 col-lg-6" }, [
            _c("div", { staticClass: "card o-hidden border-0" }, [
              _c("div", { staticClass: "bg-primary b-r-4 card-body" }, [
                _c("div", { staticClass: "media static-top-widget" }, [
                  _c("div", { staticClass: "align-self-center text-center" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-user-plus",
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
                        _c("path", {
                          attrs: {
                            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          }
                        }),
                        _vm._v(" "),
                        _c("circle", { attrs: { cx: "8.5", cy: "7", r: "4" } }),
                        _vm._v(" "),
                        _c("line", {
                          attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
                        }),
                        _vm._v(" "),
                        _c("line", {
                          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("span", { staticClass: "m-0" }, [_vm._v("Total Users")]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-0 counter" }, [
                      _vm._v(_vm._s(_vm.total_users))
                    ]),
                    _vm._v(" "),
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-user-plus icon-bg",
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
                        _c("path", {
                          attrs: {
                            d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          }
                        }),
                        _vm._v(" "),
                        _c("circle", { attrs: { cx: "8.5", cy: "7", r: "4" } }),
                        _vm._v(" "),
                        _c("line", {
                          attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
                        }),
                        _vm._v(" "),
                        _c("line", {
                          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
                        })
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.roles, function(item) {
            return _c(
              "div",
              { key: item.id, staticClass: "col-sm-6 col-xl-3 col-lg-6" },
              [
                _c("div", { staticClass: "card o-hidden border-0" }, [
                  _c("div", { staticClass: "bg-primary b-r-4 card-body" }, [
                    _c("div", { staticClass: "media static-top-widget" }, [
                      _c(
                        "div",
                        { staticClass: "align-self-center text-center" },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-user-plus",
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
                              _c("path", {
                                attrs: {
                                  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                }
                              }),
                              _vm._v(" "),
                              _c("circle", {
                                attrs: { cx: "8.5", cy: "7", r: "4" }
                              }),
                              _vm._v(" "),
                              _c("line", {
                                attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
                              }),
                              _vm._v(" "),
                              _c("line", {
                                attrs: {
                                  x1: "23",
                                  y1: "11",
                                  x2: "17",
                                  y2: "11"
                                }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("span", { staticClass: "m-0" }, [
                          _vm._v(" " + _vm._s(item.name) + "s")
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0 counter" }, [
                          _vm._v(_vm._s(item.users_count))
                        ]),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-user-plus icon-bg",
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
                            _c("path", {
                              attrs: {
                                d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                              }
                            }),
                            _vm._v(" "),
                            _c("circle", {
                              attrs: { cx: "8.5", cy: "7", r: "4" }
                            }),
                            _vm._v(" "),
                            _c("line", {
                              attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
                            }),
                            _vm._v(" "),
                            _c("line", {
                              attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
                            })
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "col-xl-12 xl-50 box-col-12" }, [
          _c("div", { staticClass: "widget-joins card widget-arrow" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6 pe-0" }, [
                _c("div", { staticClass: "media border-after-xs" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body align-self-center" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-arrow-down font-primary",
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
                        _c("line", {
                          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
                        }),
                        _vm._v(" "),
                        _c("polyline", {
                          attrs: { points: "19 12 12 19 5 12" }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(this.total_applications)
                      ),
                      _c("span", { staticClass: "counter" })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "mb-1" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6 ps-0" }, [
                _c("div", { staticClass: "media" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body align-self-center" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-arrow-up font-primary",
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
                        _c("line", {
                          attrs: { x1: "12", y1: "19", x2: "12", y2: "5" }
                        }),
                        _vm._v(" "),
                        _c("polyline", { attrs: { points: "5 12 12 5 19 12" } })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body ps-2" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n                    " + _vm._s(this.assigned_apps)
                      ),
                      _c("span", { staticClass: "counter" })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "mb-1" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6 pe-0" }, [
                _c("div", { staticClass: "media border-after-xs" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body align-self-center" }, [
                    _c(
                      "svg",
                      {
                        staticClass: "feather feather-arrow-up font-primary",
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
                        _c("line", {
                          attrs: { x1: "12", y1: "19", x2: "12", y2: "5" }
                        }),
                        _vm._v(" "),
                        _c("polyline", { attrs: { points: "5 12 12 5 19 12" } })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h5", { staticClass: "mb-0" }, [
                      _c("span", { staticClass: "counter" }, [
                        _vm._v(
                          _vm._s(
                            parseInt(this.total_applications) -
                              parseInt(this.assigned_apps)
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "mb-1" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(6)
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c("h5", [_vm._v("Recent Applications")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-bordernone" }, [
              _vm._m(8),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.apps, function(app) {
                  return _c("tr", { key: app.id }, [
                    _c("td", [
                      _c("div", { staticClass: "media" }, [
                        _c("img", {
                          staticClass: "img-fluid rounded-circle",
                          attrs: {
                            src: "",
                            alt: "",
                            "data-original-title": "",
                            title: ""
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "media-body" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "show-application",
                                    params: { id: app.id }
                                  }
                                }
                              },
                              [_c("span", [_vm._v(_vm._s(app.name))])]
                            )
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      app.status === "1" ? _c("p", [_vm._v("Done")]) : _vm._e(),
                      _vm._v(" "),
                      app.status === "0"
                        ? _c("p", [_vm._v("In Proccess")])
                        : _vm._e()
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "header-top" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "confetti" }, [
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" }),
      _vm._v(" "),
      _c("div", { staticClass: "confetti-piece" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xl-6 box-col-12 des-xl-100 invoice-sec" },
      [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header pb-0" }, [
            _c("h5", [_vm._v("Daily Register Applications")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { attrs: { id: "basic-apex" } })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "align-self-center me-3 text-start" }, [
      _c("span", { staticClass: "widget-t mb-1" }),
      _vm._v(" "),
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Total Applications")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "align-self-center me-3 text-start" }, [
      _c("span", { staticClass: "widget-t mb-1" }),
      _vm._v(" "),
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Approved Applications")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "align-self-center me-3 text-start" }, [
      _c("span", { staticClass: "widget-t mb-1" }),
      _vm._v(" "),
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Pending Application")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 ps-0" }, [
      _c("div", { staticClass: "media" }, [
        _c("div", { staticClass: "align-self-center me-3 text-start" }, [
          _c("span", { staticClass: "widget-t mb-1" }),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-0" }, [_vm._v("Agents")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "media-body ps-2" }, [
          _c("h5", { staticClass: "mb-0" }, [
            _c("span", { staticClass: "counter" })
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "mb-1" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-4 col-sm-6" }, [
        _c("div", { staticClass: "card browser-widget" }, [
          _c("div", { staticClass: "media card-body" }, [
            _c("div", { staticClass: "media-img" }, [
              _c("img", {
                attrs: { src: "/assets/images/dashboard/chrome.png", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body align-self-center" }, [
              _c("div", [
                _c("p", [_vm._v("Daily")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("20")]),
                  _vm._v("%")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Month")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("53")]),
                  _vm._v("%")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Week")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("25")]),
                  _vm._v("%")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-sm-6" }, [
        _c("div", { staticClass: "card browser-widget" }, [
          _c("div", { staticClass: "media card-body" }, [
            _c("div", { staticClass: "media-img" }, [
              _c("img", {
                attrs: { src: "assets/images/dashboard/firefox.png", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body align-self-center" }, [
              _c("div", [
                _c("p", [_vm._v("Daily")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("20")]),
                  _vm._v("%")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Month")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("53")]),
                  _vm._v("%")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Week")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("25")]),
                  _vm._v("%")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-sm-6" }, [
        _c("div", { staticClass: "card browser-widget" }, [
          _c("div", { staticClass: "media card-body" }, [
            _c("div", { staticClass: "media-img" }, [
              _c("img", {
                attrs: { src: "/assets/images/dashboard/safari.png", alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-body align-self-center" }, [
              _c("div", [
                _c("p", [_vm._v("Daily")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("19")]),
                  _vm._v("%")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Month")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("52")]),
                  _vm._v("%")
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Week")]),
                _vm._v(" "),
                _c("h4", [
                  _c("span", { staticClass: "counter" }, [_vm._v("25")]),
                  _vm._v("%")
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Application Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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