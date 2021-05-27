webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Player/Player.js":
/*!*************************************!*\
  !*** ./components/Player/Player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Hoc_GlobState_GlobState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hoc/GlobState/GlobState */ "./Hoc/GlobState/GlobState.js");
/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player.module.css */ "./components/Player/Player.module.css");
/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Player_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utlls/actions/actions */ "./utlls/actions/actions.js");
/* harmony import */ var _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utlls/songs/songs */ "./utlls/songs/songs.js");



var _jsxFileName = "F:\\practice\\solo react projects\\next music\\components\\Player\\Player.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Player = function Player() {
  _s();

  var audio = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Hoc_GlobState_GlobState__WEBPACK_IMPORTED_MODULE_4__["Context"]),
      state = _useContext[0],
      setState = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    muteState: false
  }),
      volume = _useState[0],
      setVolume = _useState[1];

  var audioHandler = function audioHandler(e) {
    var currentTime = e.target.currentTime;
    var durationTime = e.target.duration;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      currentSong: _objectSpread(_objectSpread({}, state.currentSong), {}, {
        currentTime: currentTime,
        durationTime: durationTime
      })
    }));
    currentTime === durationTime && changeSong(_utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"]);
  };

  var toggleAudioPlaying = function toggleAudioPlaying() {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        currentSong: _objectSpread(_objectSpread({}, prevState.currentSong), {}, {
          playing: !prevState.currentSong.playing
        })
      });
    });
  };

  var format = function format(time) {
    return "".concat(Math.floor(time / 60), ":").concat(('0' + Math.floor(time % 60)).slice(-2));
  };

  var songRangeHandler = function songRangeHandler(e) {
    audio.current.currentTime = e.target.value;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      currentSong: _objectSpread(_objectSpread({}, state.currentSong), {}, {
        currentTime: e.target.value
      })
    }));
  };

  var volumeUpdateHandler = function volumeUpdateHandler(e) {
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        currentSong: _objectSpread(_objectSpread({}, prevState.currentSong), {}, {
          volume: e.target.value
        })
      });
    });
    setVolume({
      muteState: false
    });
  };

  var changeSong = function changeSong(action) {
    var currentSongIndex = _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"].findIndex(function (song) {
      return song.id === state.currentSong.id;
    });
    var next = currentSongIndex + 1;
    var prev = currentSongIndex - 1;
    var newSong = {
      name: action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][next > _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"].length - 1 ? currentSongIndex : next].name || action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["BACKWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][prev < 0 ? 0 : prev].name,
      id: action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][next > _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"].length - 1 ? currentSongIndex : next].id || action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["BACKWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][prev < 0 ? 0 : prev].id,
      artist: action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][next > _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"].length - 1 ? currentSongIndex : next].artist || action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["BACKWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][prev < 0 ? 0 : prev].artist,
      cover: action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][next > _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"].length - 1 ? currentSongIndex : next].cover || action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["BACKWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][prev < 0 ? 0 : prev].cover,
      audio: action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][next > _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"].length - 1 ? currentSongIndex : next].audio || action === _utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["BACKWARD"] && _utlls_songs_songs__WEBPACK_IMPORTED_MODULE_7__["default"][prev < 0 ? 0 : prev].audio
    };
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        currentSong: _objectSpread(_objectSpread({}, prevState.currentSong), newSong)
      });
    });
  };

  var muteVolumeToggler = function muteVolumeToggler() {
    return setVolume(function (prevState) {
      return {
        muteState: !prevState.muteState
      };
    });
  };

  var loopSongToggler = function loopSongToggler() {
    return setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        loop: !prevState.loop
      });
    });
  };

  audio.current ? audio.current.volume = state.currentSong.volume : null;

  if (state.currentSong.playing) {
    audio.current.play();
  } else {
    audio.current && audio.current.pause();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "player",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col mx-auto d-flex align-items-center justify-content-center mb-5 pt-2 rounded",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-3",
        children: [format(state.currentSong.currentTime), "/", state.currentSong.durationTime ? format(state.currentSong.durationTime) : "0:00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8 d-flex align-items-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "range",
          className: _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.audioRange,
          value: state.currentSong.currentTime,
          max: state.currentSong.durationTime || 0,
          min: 0,
          step: 0.1,
          onChange: songRangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: state.loop ? _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton : _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,
          onClick: loopSongToggler,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "controls row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8 col-md-6 ml-auto mr-auto mr-md-0 d-flex align-items-center justify-content-around",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,
          onClick: function onClick() {
            return changeSong(_utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["BACKWARD"]);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStepBackward"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: state.currentSong.playing ? _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button : _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton,
          onClick: toggleAudioPlaying,
          children: state.currentSong.playing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPause"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 42
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 56
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,
          onClick: function onClick() {
            return changeSong(_utlls_actions_actions__WEBPACK_IMPORTED_MODULE_6__["FORWARD"]);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStepForward"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-5 mx-auto mx-md-0 col-md-3 mt-5 mt-md-0 d-flex align-items-center justify-content-center justify-content-md-start ".concat(_Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.volumeContainer),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: volume.muteState ? _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton : _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button,
          onClick: muteVolumeToggler,
          children: volume.muteState ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaVolumeMute"], {
            size: "1.4rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaVolumeUp"], {
            size: "1.4rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "range",
          className: _Player_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.audioRange,
          min: 0,
          max: 1,
          step: 0.01,
          value: volume.muteState ? "0" : audio.current ? audio.current.volume : "1",
          onChange: volumeUpdateHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
      src: state.currentSong.audio,
      ref: audio,
      onTimeUpdate: audioHandler,
      onLoadedMetadata: audioHandler,
      muted: volume.muteState,
      loop: state.loop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, _this);
};

_s(Player, "nqUq5s7GFHHQgI4+qXtYIcXD3fE=");

_c = Player;
/* harmony default export */ __webpack_exports__["default"] = (Player);

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJtdXRlU3RhdGUiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJhdWRpb0hhbmRsZXIiLCJlIiwiY3VycmVudFRpbWUiLCJ0YXJnZXQiLCJkdXJhdGlvblRpbWUiLCJkdXJhdGlvbiIsImN1cnJlbnRTb25nIiwiY2hhbmdlU29uZyIsIkZPUldBUkQiLCJ0b2dnbGVBdWRpb1BsYXlpbmciLCJwcmV2U3RhdGUiLCJwbGF5aW5nIiwiZm9ybWF0IiwidGltZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIiwic29uZ1JhbmdlSGFuZGxlciIsImN1cnJlbnQiLCJ2YWx1ZSIsInZvbHVtZVVwZGF0ZUhhbmRsZXIiLCJhY3Rpb24iLCJjdXJyZW50U29uZ0luZGV4Iiwic29uZ3MiLCJmaW5kSW5kZXgiLCJzb25nIiwiaWQiLCJuZXh0IiwicHJldiIsIm5ld1NvbmciLCJuYW1lIiwibGVuZ3RoIiwiQkFDS1dBUkQiLCJhcnRpc3QiLCJjb3ZlciIsIm11dGVWb2x1bWVUb2dnbGVyIiwibG9vcFNvbmdUb2dnbGVyIiwibG9vcCIsInBsYXkiLCJwYXVzZSIsImNsYXNzZXMiLCJhdWRpb1JhbmdlIiwiYWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwidm9sdW1lQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVuQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjs7QUFGbUIsb0JBR09DLHdEQUFVLENBQUNDLGdFQUFELENBSGpCO0FBQUEs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QUFBYyxnQkFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZ0JBR0MscUVBQUMseURBQUQ7QUFBWSxnQkFBSSxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBYUU7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLG1CQUFTLEVBQUUyQyx5REFBTyxDQUFDQyxVQUZyQjtBQUdFLGFBQUcsRUFBRSxDQUhQO0FBSUUsYUFBRyxFQUFFLENBSlA7QUFLRSxjQUFJLEVBQUUsSUFMUjtBQU1FLGVBQUssRUFDSDNDLE1BQU0sQ0FBQ0QsU0FBUCxHQUNJLEdBREosR0FFSVAsS0FBSyxDQUFDNEIsT0FBTixHQUNBNUIsS0FBSyxDQUFDNEIsT0FBTixDQUFjcEIsTUFEZCxHQUVBLEdBWFI7QUFhRSxrQkFBUSxFQUFFc0I7QUFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkYsZUEyRUU7QUFDRSxTQUFHLEVBQUUxQixLQUFLLENBQUNZLFdBQU4sQ0FBa0JoQixLQUR6QjtBQUVFLFNBQUcsRUFBRUEsS0FGUDtBQUdFLGtCQUFZLEVBQUVVLFlBSGhCO0FBSUUsc0JBQWdCLEVBQUVBLFlBSnBCO0FBS0UsV0FBSyxFQUFFRixNQUFNLENBQUNELFNBTGhCO0FBTUUsVUFBSSxFQUFFSCxLQUFLLENBQUMyQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzRkQsQ0E1S0Q7O0dBQU1oRCxNOztLQUFBQSxNO0FBK0tTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NjI1NDU3ZjExZDhjYjg4NThkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFQYXVzZSwgRmFQbGF5LCBGYVN0ZXBCYWNrd2FyZCwgRmFTdGVwRm9yd2FyZCwgRmFWb2x1bWVNdXRlLCBGYVZvbHVtZVVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi8uLi9Ib2MvR2xvYlN0YXRlL0dsb2JTdGF0ZSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vUGxheWVyLm1vZHVsZS5jc3MnIFxyXG5pbXBvcnQgeyBGT1JXQVJELCBCQUNLV0FSRCB9IGZyb20gJy4uLy4uL3V0bGxzL2FjdGlvbnMvYWN0aW9ucydcclxuaW1wb3J0IHNvbmdzIGZyb20gJy4uLy4uL3V0bGxzL3NvbmdzL3NvbmdzJztcclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgYXVkaW8gPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKHtcclxuICAgIG11dGVTdGF0ZTogZmFsc2VcclxuICB9KVxyXG5cclxuICBjb25zdCBhdWRpb0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBlLnRhcmdldC5jdXJyZW50VGltZTtcclxuICAgIGNvbnN0IGR1cmF0aW9uVGltZSA9IGUudGFyZ2V0LmR1cmF0aW9uO1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgY3VycmVudFNvbmc6IHsgLi4uc3RhdGUuY3VycmVudFNvbmcsIGN1cnJlbnRUaW1lLCBkdXJhdGlvblRpbWUgfSxcclxuICAgIH0pO1xyXG5cclxuICBjdXJyZW50VGltZSA9PT0gZHVyYXRpb25UaW1lICYmIGNoYW5nZVNvbmcoRk9SV0FSRClcclxuICB9O1xyXG5cclxuICAgIFxyXG4gIGNvbnN0IHRvZ2dsZUF1ZGlvUGxheWluZyA9ICgpID0+IHtcclxuICAgIHNldFN0YXRlKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIGN1cnJlbnRTb25nOiB7IC4uLnByZXZTdGF0ZS5jdXJyZW50U29uZywgcGxheWluZzogIXByZXZTdGF0ZS5jdXJyZW50U29uZy5wbGF5aW5nIH0gfSkpXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBmb3JtYXQgPSAodGltZSkgPT4gYCR7TWF0aC5mbG9vcih0aW1lIC8gNjApfTokeygnMCcrTWF0aC5mbG9vcih0aW1lICUgNjApKS5zbGljZSgtMil9YFxyXG5cclxuICBjb25zdCBzb25nUmFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGF1ZGlvLmN1cnJlbnQuY3VycmVudFRpbWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U3RhdGUoey4uLnN0YXRlLCBjdXJyZW50U29uZzogey4uLnN0YXRlLmN1cnJlbnRTb25nLCBjdXJyZW50VGltZTogZS50YXJnZXQudmFsdWV9fSkgXHJcbiAgfVxyXG5cclxuICBjb25zdCB2b2x1bWVVcGRhdGVIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGN1cnJlbnRTb25nOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmN1cnJlbnRTb25nLFxyXG4gICAgICAgIHZvbHVtZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgfVxyXG4gICAgfSkpXHJcblxyXG4gICAgc2V0Vm9sdW1lKCh7bXV0ZVN0YXRlOiBmYWxzZX0pKVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTb25nID0gKGFjdGlvbikgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRTb25nSW5kZXggPSBzb25ncy5maW5kSW5kZXgoc29uZyA9PiBzb25nLmlkID09PSBzdGF0ZS5jdXJyZW50U29uZy5pZClcclxuICAgIGNvbnN0IG5leHQgPSBjdXJyZW50U29uZ0luZGV4ICsgMTtcclxuICAgIGNvbnN0IHByZXYgPSBjdXJyZW50U29uZ0luZGV4IC0gMTtcclxuICAgIGNvbnN0IG5ld1NvbmcgPSB7XHJcbiAgICAgIG5hbWU6XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gRk9SV0FSRCAmJiBzb25nc1tuZXh0ID4gc29uZ3MubGVuZ3RoIC0gMSA/IGN1cnJlbnRTb25nSW5kZXggOiBuZXh0XS5uYW1lKSB8fFxyXG4gICAgICAgIChhY3Rpb24gPT09IEJBQ0tXQVJEICYmIHNvbmdzW3ByZXYgPCAwID8gMCA6IHByZXZdLm5hbWUpLFxyXG4gICAgICBpZDpcclxuICAgICAgICAoYWN0aW9uID09PSBGT1JXQVJEICYmIHNvbmdzW25leHQgPiBzb25ncy5sZW5ndGggLSAxID8gY3VycmVudFNvbmdJbmRleCA6IG5leHRdLmlkKSB8fFxyXG4gICAgICAgIChhY3Rpb24gPT09IEJBQ0tXQVJEICYmIHNvbmdzW3ByZXYgPCAwID8gMCA6IHByZXZdLmlkKSxcclxuICAgICAgYXJ0aXN0OlxyXG4gICAgICAgIChhY3Rpb24gPT09IEZPUldBUkQgJiYgc29uZ3NbbmV4dCA+IHNvbmdzLmxlbmd0aCAtIDEgPyBjdXJyZW50U29uZ0luZGV4IDogbmV4dF0uYXJ0aXN0KSB8fFxyXG4gICAgICAgIChhY3Rpb24gPT09IEJBQ0tXQVJEICYmIHNvbmdzW3ByZXYgPCAwID8gMCA6IHByZXZdLmFydGlzdCksXHJcbiAgICAgIGNvdmVyOlxyXG4gICAgICAgIChhY3Rpb24gPT09IEZPUldBUkQgJiYgc29uZ3NbbmV4dCA+IHNvbmdzLmxlbmd0aCAtIDEgPyBjdXJyZW50U29uZ0luZGV4IDogbmV4dF0uY292ZXIpIHx8XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gQkFDS1dBUkQgJiYgc29uZ3NbcHJldiA8IDAgPyAwIDogcHJldl0uY292ZXIpLFxyXG4gICAgICBhdWRpbzpcclxuICAgICAgICAoYWN0aW9uID09PSBGT1JXQVJEICYmIHNvbmdzW25leHQgPiBzb25ncy5sZW5ndGggLSAxID8gY3VycmVudFNvbmdJbmRleCA6IG5leHRdLmF1ZGlvKSB8fFxyXG4gICAgICAgIChhY3Rpb24gPT09IEJBQ0tXQVJEICYmIHNvbmdzW3ByZXYgPCAwID8gMCA6IHByZXZdLmF1ZGlvKSxcclxuICAgIH07XHJcbiAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGN1cnJlbnRTb25nOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmN1cnJlbnRTb25nLFxyXG4gICAgICAgIC4uLm5ld1NvbmcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSk7IFxyXG4gIH1cclxuXHJcbiAgY29uc3QgbXV0ZVZvbHVtZVRvZ2dsZXIgPSAoKSA9PiBzZXRWb2x1bWUocHJldlN0YXRlID0+ICh7bXV0ZVN0YXRlOiAhcHJldlN0YXRlLm11dGVTdGF0ZX0pKVxyXG5cclxuICBjb25zdCBsb29wU29uZ1RvZ2dsZXIgPSAoKSA9PiBzZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHsuLi5wcmV2U3RhdGUsIGxvb3A6ICFwcmV2U3RhdGUubG9vcH0pKVxyXG5cclxuICBhdWRpby5jdXJyZW50PyBhdWRpby5jdXJyZW50LnZvbHVtZSA9IHN0YXRlLmN1cnJlbnRTb25nLnZvbHVtZTogbnVsbFxyXG5cclxuICBpZiAoc3RhdGUuY3VycmVudFNvbmcucGxheWluZykge1xyXG4gICAgYXVkaW8uY3VycmVudC5wbGF5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF1ZGlvLmN1cnJlbnQgJiYgYXVkaW8uY3VycmVudC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG14LWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTUgcHQtMiByb3VuZGVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAge2Zvcm1hdChzdGF0ZS5jdXJyZW50U29uZy5jdXJyZW50VGltZSl9L1xyXG4gICAgICAgICAge3N0YXRlLmN1cnJlbnRTb25nLmR1cmF0aW9uVGltZVxyXG4gICAgICAgICAgICA/IGZvcm1hdChzdGF0ZS5jdXJyZW50U29uZy5kdXJhdGlvblRpbWUpXHJcbiAgICAgICAgICAgIDogXCIwOjAwXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1ZGlvUmFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jdXJyZW50U29uZy5jdXJyZW50VGltZX1cclxuICAgICAgICAgICAgbWF4PXtzdGF0ZS5jdXJyZW50U29uZy5kdXJhdGlvblRpbWUgfHwgMH1cclxuICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzb25nUmFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUubG9vcCA/IGNsYXNzZXMuYWN0aXZlQnV0dG9uIDogY2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2xvb3BTb25nVG9nZ2xlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9vcH0+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHMgcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBjb2wtbWQtNiBtbC1hdXRvIG1yLWF1dG8gbXItbWQtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gY2hhbmdlU29uZyhCQUNLV0FSRCl9PlxyXG4gICAgICAgICAgICA8RmFTdGVwQmFja3dhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRTb25nLnBsYXlpbmcgPyBjbGFzc2VzLmJ1dHRvbiA6IGNsYXNzZXMuYWN0aXZlQnV0dG9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQXVkaW9QbGF5aW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3RhdGUuY3VycmVudFNvbmcucGxheWluZyA/IDxGYVBhdXNlIC8+IDogPEZhUGxheSAvPn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTb25nKEZPUldBUkQpfT5cclxuICAgICAgICAgICAgPEZhU3RlcEZvcndhcmQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC01IG14LWF1dG8gbXgtbWQtMCBjb2wtbWQtMyBtdC01IG10LW1kLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1zdGFydCAke2NsYXNzZXMudm9sdW1lQ29udGFpbmVyfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3ZvbHVtZS5tdXRlU3RhdGUgPyBjbGFzc2VzLmFjdGl2ZUJ1dHRvbiA6IGNsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXttdXRlVm9sdW1lVG9nZ2xlcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZvbHVtZS5tdXRlU3RhdGUgPyAoXHJcbiAgICAgICAgICAgICAgPEZhVm9sdW1lTXV0ZSBzaXplPVwiMS40cmVtXCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8RmFWb2x1bWVVcCBzaXplPVwiMS40cmVtXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdWRpb1JhbmdlfVxyXG4gICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgIG1heD17MX1cclxuICAgICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgIHZvbHVtZS5tdXRlU3RhdGVcclxuICAgICAgICAgICAgICAgID8gXCIwXCJcclxuICAgICAgICAgICAgICAgIDogYXVkaW8uY3VycmVudFxyXG4gICAgICAgICAgICAgICAgPyBhdWRpby5jdXJyZW50LnZvbHVtZVxyXG4gICAgICAgICAgICAgICAgOiBcIjFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2b2x1bWVVcGRhdGVIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxhdWRpb1xyXG4gICAgICAgIHNyYz17c3RhdGUuY3VycmVudFNvbmcuYXVkaW99XHJcbiAgICAgICAgcmVmPXthdWRpb31cclxuICAgICAgICBvblRpbWVVcGRhdGU9e2F1ZGlvSGFuZGxlcn1cclxuICAgICAgICBvbkxvYWRlZE1ldGFkYXRhPXthdWRpb0hhbmRsZXJ9XHJcbiAgICAgICAgbXV0ZWQ9e3ZvbHVtZS5tdXRlU3RhdGV9XHJcbiAgICAgICAgbG9vcD17c3RhdGUubG9vcH1cclxuICAgICAgPjwvYXVkaW8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyICJdLCJzb3VyY2VSb290IjoiIn0=