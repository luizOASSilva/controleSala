"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiaDaSemana = void 0;
const getDiaDaSemana = () => {
    const data = new Date();
    console.log(data);
    return data.getDay;
};
exports.getDiaDaSemana = getDiaDaSemana;
