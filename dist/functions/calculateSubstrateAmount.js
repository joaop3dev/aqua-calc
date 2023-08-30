"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSubstrateAmount = void 0;
function calculateSubstrateAmount({ tankWidth, tankLength, substrateType, chosenSubstrateDepth }) {
    const substrateDensity = getSubstrateDensity(substrateType);
    if (substrateDensity <= 0) {
        return 0;
    }
    const substrateVolumeCubicCentimeters = (tankWidth * tankLength * chosenSubstrateDepth);
    const substrateAmountKilograms = (substrateVolumeCubicCentimeters / 1000) * substrateDensity; // Convert cm³ to liters and then to kilograms
    return substrateAmountKilograms;
}
exports.calculateSubstrateAmount = calculateSubstrateAmount;
function getSubstrateDensity(substrateType) {
    const substrateDensities = {
        fineSand: 1.3,
        coarseSand: 1.4,
        gravel: 1.5,
        basalt: 2.1,
        other: 2.0 // Adjust as needed
        // Add more substrate types as needed
    };
    if (substrateDensities[substrateType] <= 0) {
        return substrateDensities.other;
    }
    return substrateDensities[substrateType];
}
