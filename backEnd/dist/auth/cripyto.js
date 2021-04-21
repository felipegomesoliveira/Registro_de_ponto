"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashPasswordtransform = void 0;
const bcrypt_1 = require("bcrypt");
exports.HashPasswordtransform = {
    to(password) {
        const salt = 10;
        const encripyPasssword = bcrypt_1.hashSync(password, salt);
        return encripyPasssword;
    },
    from(hash) {
        return hash;
    }
};
//# sourceMappingURL=cripyto.js.map