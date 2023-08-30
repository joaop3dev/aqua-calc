"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFeedingFrequency = void 0;
const calculateRecommendedFoodAmount_1 = require("./calculateRecommendedFoodAmount");
function calculateFeedingFrequency({ fishCount, fishSize, foodType }) {
    const minFeedings = 2; // Minimum recommended daily feedings
    const maxFeedings = 4; // Maximum recommended daily feedings
    const foodAmount = (0, calculateRecommendedFoodAmount_1.calculateRecommendedFoodAmount)({
        fishCount,
        fishSize,
        foodType
    });
    const feedingFrequency = Math.max(minFeedings, Math.min(maxFeedings, Math.round(foodAmount * 0.2)));
    const recommendedAmountPerFeeding = foodAmount;
    return {
        recommendedFrequency: feedingFrequency,
        recommendedAmountPerFeeding
    };
}
exports.calculateFeedingFrequency = calculateFeedingFrequency;
