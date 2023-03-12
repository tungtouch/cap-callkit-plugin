"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.CallKitVoip = void 0;
var core_1 = require("@capacitor/core");
var CallKitVoip = core_1.registerPlugin('CallKitVoip', {
    web: function () { return Promise.resolve().then(function () { return require('./web'); }).then(function (m) { return new m.CallKitVoipWeb(); }); }
});
exports.CallKitVoip = CallKitVoip;
__exportStar(require("./definitions"), exports);
