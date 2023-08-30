"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateOptimalLightingDuration = void 0;
function calculateOptimalLightingDuration({ tankVolume, lightingType, plantDensity }) {
    let recommendedDuration = 0;
    const lightingFactors = {
        LED: { low: 8, medium: 10, high: 12 },
        fluorescent: { low: 6, medium: 8, high: 10 }
        // Add more lighting types as needed
    };
    if (lightingType in lightingFactors && plantDensity in lightingFactors[lightingType]) {
        recommendedDuration = lightingFactors[lightingType][plantDensity];
    }
    if (recommendedDuration > 0) {
        recommendedDuration += tankVolume * 0.001; // 1 hour per 1000 liters
    }
    return recommendedDuration;
}
exports.calculateOptimalLightingDuration = calculateOptimalLightingDuration;
