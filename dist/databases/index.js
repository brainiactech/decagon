"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
exports.dbConnection = {
    url: process.env.DB_URL || 'mongodb://localhost:27017/decagon',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
};
//# sourceMappingURL=index.js.map