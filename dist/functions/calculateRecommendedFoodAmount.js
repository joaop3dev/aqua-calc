"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRecommendedFoodAmount = void 0;
function calculateRecommendedFoodAmount({ fishCount, fishSize, foodType }) {
    const foodFactors = {
        small: { dry: 0.5, granulated: 0.3, frozen: 0.4 },
        medium: { dry: 1, granulated: 0.7, frozen: 0.9 },
        large: { dry: 1.5, granulated: 1, frozen: 1.2 }
    };
    const sizeFactors = foodFactors[fishSize];
    const foodAmount = sizeFactors[foodType] ?? 0;
    return Math.round(foodAmount * fishCount * 100) / 100; // Rounded to 2 decimal places
}
exports.calculateRecommendedFoodAmount = calculateRecommendedFoodAmount;
