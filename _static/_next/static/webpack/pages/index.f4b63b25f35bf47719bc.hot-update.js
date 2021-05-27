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
        className: "col-3 col-md-2",
        children: [format(state.currentSong.currentTime), "/", state.currentSong.durationTime ? format(state.currentSong.durationTime) : "0:00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-6 col-md-7 d-flex align-items-center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJtdXRlU3RhdGUiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJhdWRpb0hhbmRsZXIiLCJlIiwiY3VycmVudFRpbWUiLCJ0YXJnZXQiLCJkdXJhdGlvblRpbWUiLCJkdXJhdGlvbiIsImN1cnJlbnRTb25nIiwiY2hhbmdlU29uZyIsIkZPUldBUkQiLCJ0b2dnbGVBdWRpb1BsYXlpbmciLCJwcmV2U3RhdGUiLCJwbGF5aW5nIiwiZm9ybWF0IiwidGltZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIiwic29uZ1JhbmdlSGFuZGxlciIsImN1cnJlbnQiLCJ2YWx1ZSIsInZvbHVtZVVwZGF0ZUhhbmRsZXIiLCJhY3Rpb24iLCJjdXJyZW50U29uZ0luZGV4Iiwic29uZ3MiLCJmaW5kSW5kZXgiLCJzb25nIiwiaWQiLCJuZXh0IiwicHJldiIsIm5ld1NvbmciLCJuYW1lIiwibGVuZ3RoIiwiQkFDS1dBUkQiLCJhcnRpc3QiLCJjb3ZlciIsIm11dGVWb2x1bWVUb2dnbGVyIiwibG9vcFNvbmdUb2dnbGVyIiwibG9vcCIsInBsYXkiLCJwYXVzZSIsImNsYXNzZXMiLCJhdWRpb1JhbmdlIiwiYWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwidm9sdW1lQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVuQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjs7QUFGbUIsb0JBR09DLHdEQUFVLENBQUNDLGdFQUFELENBSGpCO0FBQUEs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O0FBQWMsZ0JBQUksRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGdCQUdDLHFFQUFDLHlEQUFEO0FBQVksZ0JBQUksRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQWFFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxtQkFBUyxFQUFFMkMseURBQU8sQ0FBQ0MsVUFGckI7QUFHRSxhQUFHLEVBQUUsQ0FIUDtBQUlFLGFBQUcsRUFBRSxDQUpQO0FBS0UsY0FBSSxFQUFFLElBTFI7QUFNRSxlQUFLLEVBQ0gzQyxNQUFNLENBQUNELFNBQVAsR0FDSSxHQURKLEdBRUlQLEtBQUssQ0FBQzRCLE9BQU4sR0FDQTVCLEtBQUssQ0FBQzRCLE9BQU4sQ0FBY3BCLE1BRGQsR0FFQSxHQVhSO0FBYUUsa0JBQVEsRUFBRXNCO0FBYlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGLGVBMkVFO0FBQ0UsU0FBRyxFQUFFMUIsS0FBSyxDQUFDWSxXQUFOLENBQWtCaEIsS0FEekI7QUFFRSxTQUFHLEVBQUVBLEtBRlA7QUFHRSxrQkFBWSxFQUFFVSxZQUhoQjtBQUlFLHNCQUFnQixFQUFFQSxZQUpwQjtBQUtFLFdBQUssRUFBRUYsTUFBTSxDQUFDRCxTQUxoQjtBQU1FLFVBQUksRUFBRUgsS0FBSyxDQUFDMkM7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0ZELENBNUtEOztHQUFNaEQsTTs7S0FBQUEsTTtBQStLU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjRiNjNiMjVmMzViZjQ3NzE5YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhUGF1c2UsIEZhUGxheSwgRmFTdGVwQmFja3dhcmQsIEZhU3RlcEZvcndhcmQsIEZhVm9sdW1lTXV0ZSwgRmFWb2x1bWVVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vLi4vSG9jL0dsb2JTdGF0ZS9HbG9iU3RhdGUnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1BsYXllci5tb2R1bGUuY3NzJyBcclxuaW1wb3J0IHsgRk9SV0FSRCwgQkFDS1dBUkQgfSBmcm9tICcuLi8uLi91dGxscy9hY3Rpb25zL2FjdGlvbnMnXHJcbmltcG9ydCBzb25ncyBmcm9tICcuLi8uLi91dGxscy9zb25ncy9zb25ncyc7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGF1ZGlvID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBtdXRlU3RhdGU6IGZhbHNlXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgYXVkaW9IYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZS50YXJnZXQuY3VycmVudFRpbWU7XHJcbiAgICBjb25zdCBkdXJhdGlvblRpbWUgPSBlLnRhcmdldC5kdXJhdGlvbjtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGN1cnJlbnRTb25nOiB7IC4uLnN0YXRlLmN1cnJlbnRTb25nLCBjdXJyZW50VGltZSwgZHVyYXRpb25UaW1lIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgY3VycmVudFRpbWUgPT09IGR1cmF0aW9uVGltZSAmJiBjaGFuZ2VTb25nKEZPUldBUkQpXHJcbiAgfTtcclxuXHJcbiAgICBcclxuICBjb25zdCB0b2dnbGVBdWRpb1BsYXlpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCBjdXJyZW50U29uZzogeyAuLi5wcmV2U3RhdGUuY3VycmVudFNvbmcsIHBsYXlpbmc6ICFwcmV2U3RhdGUuY3VycmVudFNvbmcucGxheWluZyB9IH0pKVxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgZm9ybWF0ID0gKHRpbWUpID0+IGAke01hdGguZmxvb3IodGltZSAvIDYwKX06JHsoJzAnK01hdGguZmxvb3IodGltZSAlIDYwKSkuc2xpY2UoLTIpfWBcclxuXHJcbiAgY29uc3Qgc29uZ1JhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBhdWRpby5jdXJyZW50LmN1cnJlbnRUaW1lID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgY3VycmVudFNvbmc6IHsuLi5zdGF0ZS5jdXJyZW50U29uZywgY3VycmVudFRpbWU6IGUudGFyZ2V0LnZhbHVlfX0pIFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgdm9sdW1lVXBkYXRlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBjdXJyZW50U29uZzoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5jdXJyZW50U29uZyxcclxuICAgICAgICB2b2x1bWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG5cclxuICAgIHNldFZvbHVtZSgoe211dGVTdGF0ZTogZmFsc2V9KSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU29uZyA9IChhY3Rpb24pID0+IHtcclxuICAgIGxldCBjdXJyZW50U29uZ0luZGV4ID0gc29uZ3MuZmluZEluZGV4KHNvbmcgPT4gc29uZy5pZCA9PT0gc3RhdGUuY3VycmVudFNvbmcuaWQpXHJcbiAgICBjb25zdCBuZXh0ID0gY3VycmVudFNvbmdJbmRleCArIDE7XHJcbiAgICBjb25zdCBwcmV2ID0gY3VycmVudFNvbmdJbmRleCAtIDE7XHJcbiAgICBjb25zdCBuZXdTb25nID0ge1xyXG4gICAgICBuYW1lOlxyXG4gICAgICAgIChhY3Rpb24gPT09IEZPUldBUkQgJiYgc29uZ3NbbmV4dCA+IHNvbmdzLmxlbmd0aCAtIDEgPyBjdXJyZW50U29uZ0luZGV4IDogbmV4dF0ubmFtZSkgfHxcclxuICAgICAgICAoYWN0aW9uID09PSBCQUNLV0FSRCAmJiBzb25nc1twcmV2IDwgMCA/IDAgOiBwcmV2XS5uYW1lKSxcclxuICAgICAgaWQ6XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gRk9SV0FSRCAmJiBzb25nc1tuZXh0ID4gc29uZ3MubGVuZ3RoIC0gMSA/IGN1cnJlbnRTb25nSW5kZXggOiBuZXh0XS5pZCkgfHxcclxuICAgICAgICAoYWN0aW9uID09PSBCQUNLV0FSRCAmJiBzb25nc1twcmV2IDwgMCA/IDAgOiBwcmV2XS5pZCksXHJcbiAgICAgIGFydGlzdDpcclxuICAgICAgICAoYWN0aW9uID09PSBGT1JXQVJEICYmIHNvbmdzW25leHQgPiBzb25ncy5sZW5ndGggLSAxID8gY3VycmVudFNvbmdJbmRleCA6IG5leHRdLmFydGlzdCkgfHxcclxuICAgICAgICAoYWN0aW9uID09PSBCQUNLV0FSRCAmJiBzb25nc1twcmV2IDwgMCA/IDAgOiBwcmV2XS5hcnRpc3QpLFxyXG4gICAgICBjb3ZlcjpcclxuICAgICAgICAoYWN0aW9uID09PSBGT1JXQVJEICYmIHNvbmdzW25leHQgPiBzb25ncy5sZW5ndGggLSAxID8gY3VycmVudFNvbmdJbmRleCA6IG5leHRdLmNvdmVyKSB8fFxyXG4gICAgICAgIChhY3Rpb24gPT09IEJBQ0tXQVJEICYmIHNvbmdzW3ByZXYgPCAwID8gMCA6IHByZXZdLmNvdmVyKSxcclxuICAgICAgYXVkaW86XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gRk9SV0FSRCAmJiBzb25nc1tuZXh0ID4gc29uZ3MubGVuZ3RoIC0gMSA/IGN1cnJlbnRTb25nSW5kZXggOiBuZXh0XS5hdWRpbykgfHxcclxuICAgICAgICAoYWN0aW9uID09PSBCQUNLV0FSRCAmJiBzb25nc1twcmV2IDwgMCA/IDAgOiBwcmV2XS5hdWRpbyksXHJcbiAgICB9O1xyXG4gICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBjdXJyZW50U29uZzoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5jdXJyZW50U29uZyxcclxuICAgICAgICAuLi5uZXdTb25nLFxyXG4gICAgICB9LFxyXG4gICAgfSkpOyBcclxuICB9XHJcblxyXG4gIGNvbnN0IG11dGVWb2x1bWVUb2dnbGVyID0gKCkgPT4gc2V0Vm9sdW1lKHByZXZTdGF0ZSA9PiAoe211dGVTdGF0ZTogIXByZXZTdGF0ZS5tdXRlU3RhdGV9KSlcclxuXHJcbiAgY29uc3QgbG9vcFNvbmdUb2dnbGVyID0gKCkgPT4gc2V0U3RhdGUocHJldlN0YXRlID0+ICh7Li4ucHJldlN0YXRlLCBsb29wOiAhcHJldlN0YXRlLmxvb3B9KSlcclxuXHJcbiAgYXVkaW8uY3VycmVudD8gYXVkaW8uY3VycmVudC52b2x1bWUgPSBzdGF0ZS5jdXJyZW50U29uZy52b2x1bWU6IG51bGxcclxuXHJcbiAgaWYgKHN0YXRlLmN1cnJlbnRTb25nLnBsYXlpbmcpIHtcclxuICAgIGF1ZGlvLmN1cnJlbnQucGxheSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhdWRpby5jdXJyZW50ICYmIGF1ZGlvLmN1cnJlbnQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBteC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi01IHB0LTIgcm91bmRlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY29sLW1kLTJcIj5cclxuICAgICAgICAgIHtmb3JtYXQoc3RhdGUuY3VycmVudFNvbmcuY3VycmVudFRpbWUpfS9cclxuICAgICAgICAgIHtzdGF0ZS5jdXJyZW50U29uZy5kdXJhdGlvblRpbWVcclxuICAgICAgICAgICAgPyBmb3JtYXQoc3RhdGUuY3VycmVudFNvbmcuZHVyYXRpb25UaW1lKVxyXG4gICAgICAgICAgICA6IFwiMDowMFwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdWRpb1JhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGUuY3VycmVudFNvbmcuY3VycmVudFRpbWV9XHJcbiAgICAgICAgICAgIG1heD17c3RhdGUuY3VycmVudFNvbmcuZHVyYXRpb25UaW1lIHx8IDB9XHJcbiAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgc3RlcD17MC4xfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c29uZ1JhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmxvb3AgPyBjbGFzc2VzLmFjdGl2ZUJ1dHRvbiA6IGNsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtsb29wU29uZ1RvZ2dsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvb3B9PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggY29sLW1kLTYgbWwtYXV0byBtci1hdXRvIG1yLW1kLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IGNoYW5nZVNvbmcoQkFDS1dBUkQpfT5cclxuICAgICAgICAgICAgPEZhU3RlcEJhY2t3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50U29uZy5wbGF5aW5nID8gY2xhc3Nlcy5idXR0b24gOiBjbGFzc2VzLmFjdGl2ZUJ1dHRvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvUGxheWluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N0YXRlLmN1cnJlbnRTb25nLnBsYXlpbmcgPyA8RmFQYXVzZSAvPiA6IDxGYVBsYXkgLz59XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gY2hhbmdlU29uZyhGT1JXQVJEKX0+XHJcbiAgICAgICAgICAgIDxGYVN0ZXBGb3J3YXJkIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtNSBteC1hdXRvIG14LW1kLTAgY29sLW1kLTMgbXQtNSBtdC1tZC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtc3RhcnQgJHtjbGFzc2VzLnZvbHVtZUNvbnRhaW5lcn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXt2b2x1bWUubXV0ZVN0YXRlID8gY2xhc3Nlcy5hY3RpdmVCdXR0b24gOiBjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17bXV0ZVZvbHVtZVRvZ2dsZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2b2x1bWUubXV0ZVN0YXRlID8gKFxyXG4gICAgICAgICAgICAgIDxGYVZvbHVtZU11dGUgc2l6ZT1cIjEuNHJlbVwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEZhVm9sdW1lVXAgc2l6ZT1cIjEuNHJlbVwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXVkaW9SYW5nZX1cclxuICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICBtYXg9ezF9XHJcbiAgICAgICAgICAgIHN0ZXA9ezAuMDF9XHJcbiAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICB2b2x1bWUubXV0ZVN0YXRlXHJcbiAgICAgICAgICAgICAgICA/IFwiMFwiXHJcbiAgICAgICAgICAgICAgICA6IGF1ZGlvLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgID8gYXVkaW8uY3VycmVudC52b2x1bWVcclxuICAgICAgICAgICAgICAgIDogXCIxXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dm9sdW1lVXBkYXRlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YXVkaW9cclxuICAgICAgICBzcmM9e3N0YXRlLmN1cnJlbnRTb25nLmF1ZGlvfVxyXG4gICAgICAgIHJlZj17YXVkaW99XHJcbiAgICAgICAgb25UaW1lVXBkYXRlPXthdWRpb0hhbmRsZXJ9XHJcbiAgICAgICAgb25Mb2FkZWRNZXRhZGF0YT17YXVkaW9IYW5kbGVyfVxyXG4gICAgICAgIG11dGVkPXt2b2x1bWUubXV0ZVN0YXRlfVxyXG4gICAgICAgIGxvb3A9e3N0YXRlLmxvb3B9XHJcbiAgICAgID48L2F1ZGlvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllciAiXSwic291cmNlUm9vdCI6IiJ9