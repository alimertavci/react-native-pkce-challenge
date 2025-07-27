"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pkceChallenge;
var _utils = require("./utils");
var _generateRandomBytes = _interopRequireDefault(require("./generate-random-bytes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function generateVerifier() {
  const bytes = (0, _generateRandomBytes.default)();
  return (0, _utils.base64UrlEncode)(bytes);
}
function pkceChallenge() {
  const verifier = generateVerifier();
  const challenge = (0, _utils.generateChallenge)(verifier);
  return {
    codeChallenge: challenge,
    codeVerifier: verifier
  };
}
//# sourceMappingURL=pkce-challenge.js.map