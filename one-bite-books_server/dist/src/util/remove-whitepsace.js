"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWhitespace = void 0;
function removeWhitespace(value) {
    if (typeof value === 'string') {
        return value.replace(/\s+/g, '');
    }
    return value.map((str) => str.replace(/\s+/g, '')).join('');
}
exports.removeWhitespace = removeWhitespace;
//# sourceMappingURL=remove-whitepsace.js.map