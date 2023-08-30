import { calculateRecommendedFoodAmount } from '../functions/calculateRecommendedFoodAmount'
import { type RecommendedFoodAmountCalculationParams } from '../interfaces/FoodCalculation'

describe('calculateRecommendedFoodAmount', () => {
  it('calculates recommended food amount correctly', () => {
    const foodParams: RecommendedFoodAmountCalculationParams = {
      fishCount: 5,
      fishSize: 'medium',
      foodType: 'granulated'
    }
    const recommendedFoodAmount = calculateRecommendedFoodAmount(foodParams)
    expect(recommendedFoodAmount).toBeCloseTo(3.5, 2)
  })
})
