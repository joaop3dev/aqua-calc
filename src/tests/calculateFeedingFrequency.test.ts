import { calculateFeedingFrequency } from '../functions/calculateFeedingFrequency'
import { type FeedingFrequencyCalculationParams } from '../interfaces/FoodCalculation'

describe('calculateFeedingFrequency', () => {
  it('calculates feeding frequency correctly', () => {
    const feedingParams: FeedingFrequencyCalculationParams = {
      fishCount: 5,
      fishSize: 'medium',
      foodType: 'granulated'
    }

    const feedingFrequency = calculateFeedingFrequency(feedingParams)

    expect(feedingFrequency.recommendedFrequency).toBe(2)
    expect(feedingFrequency.recommendedAmountPerFeeding).toBe(3.5)
  })
})
