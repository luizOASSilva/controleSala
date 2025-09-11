"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lessonsView_route_1 = __importDefault(require("./routes/lessonsView.route"));
const professorScheduleView_route_1 = __importDefault(require("./routes/professorScheduleView.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/lessons', lessonsView_route_1.default);
app.use('/api/professors', professorScheduleView_route_1.default);
exports.default = app;
