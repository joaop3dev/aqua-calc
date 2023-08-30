import { type RecommendedFoodAmountCalculationParams, type FoodFactors } from '../interfaces/FoodCalculation'

export function calculateRecommendedFoodAmount ({ fishCount, fishSize, foodType }: RecommendedFoodAmountCalculationParams): number {
  const foodFactors: FoodFactors = {
    small: { dry: 0.5, granulated: 0.3, frozen: 0.4 },
    medium: { dry: 1, granulated: 0.7, frozen: 0.9 },
    large: { dry: 1.5, granulated: 1, frozen: 1.2 }
  }

  const sizeFactors = foodFactors[fishSize]
  const foodAmount = sizeFactors[foodType] ?? 0

  return Math.round(foodAmount * fishCount * 100) / 100 // Rounded to 2 decimal places
}
