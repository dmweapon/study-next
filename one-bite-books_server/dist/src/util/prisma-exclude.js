"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaExclude = void 0;
const client_1 = require("@prisma/client");
function prismaExclude(type, omit) {
    const result = {};
    for (const key in client_1.Prisma[`${type}ScalarFieldEnum`]) {
        if (!omit.includes(key)) {
            result[key] = true;
        }
    }
    return result;
}
exports.prismaExclude = prismaExclude;
//# sourceMappingURL=prisma-exclude.js.map