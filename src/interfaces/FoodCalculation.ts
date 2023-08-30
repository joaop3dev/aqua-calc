export interface RecommendedFoodAmountCalculationParams {
  fishCount: number
  fishSize: 'small' | 'medium' | 'large'
  foodType: 'dry' | 'granulated' | 'frozen'
}

export interface FeedingFrequencyCalculationParams {
  fishCount: number
  fishSize: 'small' | 'medium' | 'large'
  foodType: 'dry' | 'granulated' | 'frozen' // Use string literal types
}

export type FoodFactors = Record<string, {
  dry: number
  granulated: number
  frozen: number
}>
