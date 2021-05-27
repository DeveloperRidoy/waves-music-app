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
        className: "col-3 col-md-2 ",
        children: [format(state.currentSong.currentTime), "/", state.currentSong.durationTime ? format(state.currentSong.durationTime) : "0:00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-6 col-md-8 d-flex align-items-center",
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
        className: "col-3 col-md-2 d-flex justify-content-end d-md-block",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvIiwidXNlUmVmIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJtdXRlU3RhdGUiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJhdWRpb0hhbmRsZXIiLCJlIiwiY3VycmVudFRpbWUiLCJ0YXJnZXQiLCJkdXJhdGlvblRpbWUiLCJkdXJhdGlvbiIsImN1cnJlbnRTb25nIiwiY2hhbmdlU29uZyIsIkZPUldBUkQiLCJ0b2dnbGVBdWRpb1BsYXlpbmciLCJwcmV2U3RhdGUiLCJwbGF5aW5nIiwiZm9ybWF0IiwidGltZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIiwic29uZ1JhbmdlSGFuZGxlciIsImN1cnJlbnQiLCJ2YWx1ZSIsInZvbHVtZVVwZGF0ZUhhbmRsZXIiLCJhY3Rpb24iLCJjdXJyZW50U29uZ0luZGV4Iiwic29uZ3MiLCJmaW5kSW5kZXgiLCJzb25nIiwiaWQiLCJuZXh0IiwicHJldiIsIm5ld1NvbmciLCJuYW1lIiwibGVuZ3RoIiwiQkFDS1dBUkQiLCJhcnRpc3QiLCJjb3ZlciIsIm11dGVWb2x1bWVUb2dnbGVyIiwibG9vcFNvbmdUb2dnbGVyIiwibG9vcCIsInBsYXkiLCJwYXVzZSIsImNsYXNzZXMiLCJhdWRpb1JhbmdlIiwiYWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwidm9sdW1lQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVuQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjs7QUFGbUIsb0JBR09DLHdEQUFVLENBQUNDLGdFQUFELENBSGpCO0FBQUEs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RDtBQUFjLGdCQUFJLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxnQkFHQyxxRUFBQyx5REFBRDtBQUFZLGdCQUFJLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFhRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsbUJBQVMsRUFBRTJDLHlEQUFPLENBQUNDLFVBRnJCO0FBR0UsYUFBRyxFQUFFLENBSFA7QUFJRSxhQUFHLEVBQUUsQ0FKUDtBQUtFLGNBQUksRUFBRSxJQUxSO0FBTUUsZUFBSyxFQUNIM0MsTUFBTSxDQUFDRCxTQUFQLEdBQ0ksR0FESixHQUVJUCxLQUFLLENBQUM0QixPQUFOLEdBQ0E1QixLQUFLLENBQUM0QixPQUFOLENBQWNwQixNQURkLEdBRUEsR0FYUjtBQWFFLGtCQUFRLEVBQUVzQjtBQWJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRixlQTJFRTtBQUNFLFNBQUcsRUFBRTFCLEtBQUssQ0FBQ1ksV0FBTixDQUFrQmhCLEtBRHpCO0FBRUUsU0FBRyxFQUFFQSxLQUZQO0FBR0Usa0JBQVksRUFBRVUsWUFIaEI7QUFJRSxzQkFBZ0IsRUFBRUEsWUFKcEI7QUFLRSxXQUFLLEVBQUVGLE1BQU0sQ0FBQ0QsU0FMaEI7QUFNRSxVQUFJLEVBQUVILEtBQUssQ0FBQzJDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNGRCxDQTVLRDs7R0FBTWhELE07O0tBQUFBLE07QUErS1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYwOGFiMDQ4ODgwMTc2Yzg4ZjlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVBhdXNlLCBGYVBsYXksIEZhU3RlcEJhY2t3YXJkLCBGYVN0ZXBGb3J3YXJkLCBGYVZvbHVtZU11dGUsIEZhVm9sdW1lVXAgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL0hvYy9HbG9iU3RhdGUvR2xvYlN0YXRlJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9QbGF5ZXIubW9kdWxlLmNzcycgXHJcbmltcG9ydCB7IEZPUldBUkQsIEJBQ0tXQVJEIH0gZnJvbSAnLi4vLi4vdXRsbHMvYWN0aW9ucy9hY3Rpb25zJ1xyXG5pbXBvcnQgc29uZ3MgZnJvbSAnLi4vLi4vdXRsbHMvc29uZ3Mvc29uZ3MnO1xyXG5cclxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBhdWRpbyA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoe1xyXG4gICAgbXV0ZVN0YXRlOiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGF1ZGlvSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IGUudGFyZ2V0LmN1cnJlbnRUaW1lO1xyXG4gICAgY29uc3QgZHVyYXRpb25UaW1lID0gZS50YXJnZXQuZHVyYXRpb247XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBjdXJyZW50U29uZzogeyAuLi5zdGF0ZS5jdXJyZW50U29uZywgY3VycmVudFRpbWUsIGR1cmF0aW9uVGltZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gIGN1cnJlbnRUaW1lID09PSBkdXJhdGlvblRpbWUgJiYgY2hhbmdlU29uZyhGT1JXQVJEKVxyXG4gIH07XHJcblxyXG4gICAgXHJcbiAgY29uc3QgdG9nZ2xlQXVkaW9QbGF5aW5nID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUocHJldlN0YXRlID0+ICh7IC4uLnByZXZTdGF0ZSwgY3VycmVudFNvbmc6IHsgLi4ucHJldlN0YXRlLmN1cnJlbnRTb25nLCBwbGF5aW5nOiAhcHJldlN0YXRlLmN1cnJlbnRTb25nLnBsYXlpbmcgfSB9KSlcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGZvcm1hdCA9ICh0aW1lKSA9PiBgJHtNYXRoLmZsb29yKHRpbWUgLyA2MCl9OiR7KCcwJytNYXRoLmZsb29yKHRpbWUgJSA2MCkpLnNsaWNlKC0yKX1gXHJcblxyXG4gIGNvbnN0IHNvbmdSYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgYXVkaW8uY3VycmVudC5jdXJyZW50VGltZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGN1cnJlbnRTb25nOiB7Li4uc3RhdGUuY3VycmVudFNvbmcsIGN1cnJlbnRUaW1lOiBlLnRhcmdldC52YWx1ZX19KSBcclxuICB9XHJcblxyXG4gIGNvbnN0IHZvbHVtZVVwZGF0ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgY3VycmVudFNvbmc6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuY3VycmVudFNvbmcsXHJcbiAgICAgICAgdm9sdW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuXHJcbiAgICBzZXRWb2x1bWUoKHttdXRlU3RhdGU6IGZhbHNlfSkpXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNvbmcgPSAoYWN0aW9uKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFNvbmdJbmRleCA9IHNvbmdzLmZpbmRJbmRleChzb25nID0+IHNvbmcuaWQgPT09IHN0YXRlLmN1cnJlbnRTb25nLmlkKVxyXG4gICAgY29uc3QgbmV4dCA9IGN1cnJlbnRTb25nSW5kZXggKyAxO1xyXG4gICAgY29uc3QgcHJldiA9IGN1cnJlbnRTb25nSW5kZXggLSAxO1xyXG4gICAgY29uc3QgbmV3U29uZyA9IHtcclxuICAgICAgbmFtZTpcclxuICAgICAgICAoYWN0aW9uID09PSBGT1JXQVJEICYmIHNvbmdzW25leHQgPiBzb25ncy5sZW5ndGggLSAxID8gY3VycmVudFNvbmdJbmRleCA6IG5leHRdLm5hbWUpIHx8XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gQkFDS1dBUkQgJiYgc29uZ3NbcHJldiA8IDAgPyAwIDogcHJldl0ubmFtZSksXHJcbiAgICAgIGlkOlxyXG4gICAgICAgIChhY3Rpb24gPT09IEZPUldBUkQgJiYgc29uZ3NbbmV4dCA+IHNvbmdzLmxlbmd0aCAtIDEgPyBjdXJyZW50U29uZ0luZGV4IDogbmV4dF0uaWQpIHx8XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gQkFDS1dBUkQgJiYgc29uZ3NbcHJldiA8IDAgPyAwIDogcHJldl0uaWQpLFxyXG4gICAgICBhcnRpc3Q6XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gRk9SV0FSRCAmJiBzb25nc1tuZXh0ID4gc29uZ3MubGVuZ3RoIC0gMSA/IGN1cnJlbnRTb25nSW5kZXggOiBuZXh0XS5hcnRpc3QpIHx8XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gQkFDS1dBUkQgJiYgc29uZ3NbcHJldiA8IDAgPyAwIDogcHJldl0uYXJ0aXN0KSxcclxuICAgICAgY292ZXI6XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gRk9SV0FSRCAmJiBzb25nc1tuZXh0ID4gc29uZ3MubGVuZ3RoIC0gMSA/IGN1cnJlbnRTb25nSW5kZXggOiBuZXh0XS5jb3ZlcikgfHxcclxuICAgICAgICAoYWN0aW9uID09PSBCQUNLV0FSRCAmJiBzb25nc1twcmV2IDwgMCA/IDAgOiBwcmV2XS5jb3ZlciksXHJcbiAgICAgIGF1ZGlvOlxyXG4gICAgICAgIChhY3Rpb24gPT09IEZPUldBUkQgJiYgc29uZ3NbbmV4dCA+IHNvbmdzLmxlbmd0aCAtIDEgPyBjdXJyZW50U29uZ0luZGV4IDogbmV4dF0uYXVkaW8pIHx8XHJcbiAgICAgICAgKGFjdGlvbiA9PT0gQkFDS1dBUkQgJiYgc29uZ3NbcHJldiA8IDAgPyAwIDogcHJldl0uYXVkaW8pLFxyXG4gICAgfTtcclxuICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgY3VycmVudFNvbmc6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuY3VycmVudFNvbmcsXHJcbiAgICAgICAgLi4ubmV3U29uZyxcclxuICAgICAgfSxcclxuICAgIH0pKTsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBtdXRlVm9sdW1lVG9nZ2xlciA9ICgpID0+IHNldFZvbHVtZShwcmV2U3RhdGUgPT4gKHttdXRlU3RhdGU6ICFwcmV2U3RhdGUubXV0ZVN0YXRlfSkpXHJcblxyXG4gIGNvbnN0IGxvb3BTb25nVG9nZ2xlciA9ICgpID0+IHNldFN0YXRlKHByZXZTdGF0ZSA9PiAoey4uLnByZXZTdGF0ZSwgbG9vcDogIXByZXZTdGF0ZS5sb29wfSkpXHJcblxyXG4gIGF1ZGlvLmN1cnJlbnQ/IGF1ZGlvLmN1cnJlbnQudm9sdW1lID0gc3RhdGUuY3VycmVudFNvbmcudm9sdW1lOiBudWxsXHJcblxyXG4gIGlmIChzdGF0ZS5jdXJyZW50U29uZy5wbGF5aW5nKSB7XHJcbiAgICBhdWRpby5jdXJyZW50LnBsYXkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXVkaW8uY3VycmVudCAmJiBhdWRpby5jdXJyZW50LnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbXgtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItNSBwdC0yIHJvdW5kZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGNvbC1tZC0yIFwiPlxyXG4gICAgICAgICAge2Zvcm1hdChzdGF0ZS5jdXJyZW50U29uZy5jdXJyZW50VGltZSl9L1xyXG4gICAgICAgICAge3N0YXRlLmN1cnJlbnRTb25nLmR1cmF0aW9uVGltZVxyXG4gICAgICAgICAgICA/IGZvcm1hdChzdGF0ZS5jdXJyZW50U29uZy5kdXJhdGlvblRpbWUpXHJcbiAgICAgICAgICAgIDogXCIwOjAwXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbWQtOCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1ZGlvUmFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jdXJyZW50U29uZy5jdXJyZW50VGltZX1cclxuICAgICAgICAgICAgbWF4PXtzdGF0ZS5jdXJyZW50U29uZy5kdXJhdGlvblRpbWUgfHwgMH1cclxuICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzb25nUmFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGNvbC1tZC0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5sb29wID8gY2xhc3Nlcy5hY3RpdmVCdXR0b24gOiBjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17bG9vcFNvbmdUb2dnbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb29wfT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9scyByb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IGNvbC1tZC02IG1sLWF1dG8gbXItYXV0byBtci1tZC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTb25nKEJBQ0tXQVJEKX0+XHJcbiAgICAgICAgICAgIDxGYVN0ZXBCYWNrd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFNvbmcucGxheWluZyA/IGNsYXNzZXMuYnV0dG9uIDogY2xhc3Nlcy5hY3RpdmVCdXR0b25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVBdWRpb1BsYXlpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5jdXJyZW50U29uZy5wbGF5aW5nID8gPEZhUGF1c2UgLz4gOiA8RmFQbGF5IC8+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IGNoYW5nZVNvbmcoRk9SV0FSRCl9PlxyXG4gICAgICAgICAgICA8RmFTdGVwRm9yd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY29sLTUgbXgtYXV0byBteC1tZC0wIGNvbC1tZC0zIG10LTUgbXQtbWQtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLXN0YXJ0ICR7Y2xhc3Nlcy52b2x1bWVDb250YWluZXJ9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dm9sdW1lLm11dGVTdGF0ZSA/IGNsYXNzZXMuYWN0aXZlQnV0dG9uIDogY2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e211dGVWb2x1bWVUb2dnbGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dm9sdW1lLm11dGVTdGF0ZSA/IChcclxuICAgICAgICAgICAgICA8RmFWb2x1bWVNdXRlIHNpemU9XCIxLjRyZW1cIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxGYVZvbHVtZVVwIHNpemU9XCIxLjRyZW1cIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1ZGlvUmFuZ2V9XHJcbiAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgbWF4PXsxfVxyXG4gICAgICAgICAgICBzdGVwPXswLjAxfVxyXG4gICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgdm9sdW1lLm11dGVTdGF0ZVxyXG4gICAgICAgICAgICAgICAgPyBcIjBcIlxyXG4gICAgICAgICAgICAgICAgOiBhdWRpby5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICA/IGF1ZGlvLmN1cnJlbnQudm9sdW1lXHJcbiAgICAgICAgICAgICAgICA6IFwiMVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZvbHVtZVVwZGF0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGF1ZGlvXHJcbiAgICAgICAgc3JjPXtzdGF0ZS5jdXJyZW50U29uZy5hdWRpb31cclxuICAgICAgICByZWY9e2F1ZGlvfVxyXG4gICAgICAgIG9uVGltZVVwZGF0ZT17YXVkaW9IYW5kbGVyfVxyXG4gICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9e2F1ZGlvSGFuZGxlcn1cclxuICAgICAgICBtdXRlZD17dm9sdW1lLm11dGVTdGF0ZX1cclxuICAgICAgICBsb29wPXtzdGF0ZS5sb29wfVxyXG4gICAgICA+PC9hdWRpbz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIgIl0sInNvdXJjZVJvb3QiOiIifQ==