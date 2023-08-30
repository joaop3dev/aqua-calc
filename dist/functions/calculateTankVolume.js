"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTankVolume = void 0;
function calculateTankVolume({ width, length, height }) {
    const volume = width * length * height / 1000;
    return volume;
}
exports.calculateTankVolume = calculateTankVolume;
