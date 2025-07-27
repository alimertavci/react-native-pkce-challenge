"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _pkceChallenge = _interopRequireDefault(require("./pkce-challenge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  PkceChallenge
} = _reactNative.NativeModules;
if (PkceChallenge && typeof PkceChallenge.install === 'function') {
  PkceChallenge.install();
}
var _default = exports.default = _pkceChallenge.default;
//# sourceMappingURL=entry.native.js.map