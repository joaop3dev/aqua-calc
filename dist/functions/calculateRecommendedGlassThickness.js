"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRecommendedGlassThickness = void 0;
function calculateRecommendedGlassThickness({ tankVolumeLiters, safetyFactor }) {
    let recommendedThickness;
    if (tankVolumeLiters <= 30) {
        recommendedThickness = 3;
    }
    else if (tankVolumeLiters <= 100) {
        recommendedThickness = 5;
    }
    else if (tankVolumeLiters <= 200) {
        recommendedThickness = 6;
    }
    else if (tankVolumeLiters <= 400) {
        recommendedThickness = 8;
    }
    else if (tankVolumeLiters <= 600) {
        recommendedThickness = 10;
    }
    else if (tankVolumeLiters <= 800) {
        recommendedThickness = 12;
    }
    else if (tankVolumeLiters <= 1000) {
        recommendedThickness = 15;
    }
    else {
        recommendedThickness = 20;
    }
    const adjustedThickness = recommendedThickness + (safetyFactor / 100);
    return adjustedThickness;
}
exports.calculateRecommendedGlassThickness = calculateRecommendedGlassThickness;
