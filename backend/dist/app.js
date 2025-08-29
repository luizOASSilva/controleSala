"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_route_1 = __importDefault(require("./routes/home.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', home_route_1.default);
exports.default = app;
