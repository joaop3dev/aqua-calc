import { calculateRecommendedFoodAmount } from './calculateRecommendedFoodAmount'
import { type FeedingFrequencyCalculationParams } from '../interfaces/FoodCalculation'

export function calculateFeedingFrequency ({ fishCount, fishSize, foodType }: FeedingFrequencyCalculationParams): {
  recommendedFrequency: number
  recommendedAmountPerFeeding: number
} {
  const minFeedings = 2 // Minimum recommended daily feedings
  const maxFeedings = 4 // Maximum recommended daily feedings

  const foodAmount = calculateRecommendedFoodAmount({
    fishCount,
    fishSize,
    foodType
  })

  const feedingFrequency = Math.max(minFeedings, Math.min(maxFeedings, Math.round(foodAmount * 0.2)))

  const recommendedAmountPerFeeding = foodAmount

  return {
    recommendedFrequency: feedingFrequency,
    recommendedAmountPerFeeding
  }
}
