"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EpicChip = require("./component/EpicChip");

Object.keys(_EpicChip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EpicChip[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EpicChip[key];
    }
  });
});
//# sourceMappingURL=index.js.map