import { calculateRecommendedGlassThickness } from '../functions/calculateRecommendedGlassThickness'
import { type GlassThicknessCalculationParams } from '../interfaces/GlassThicknessCalculationParams'

describe('calculateRecommendedGlassThickness', () => {
  it('calculates the recommended glass thickness correctly', () => {
    const params: GlassThicknessCalculationParams = {
      tankVolumeLiters: 200,
      safetyFactor: 3
    }

    const recommendedGlassThickness = calculateRecommendedGlassThickness(params)
    expect(recommendedGlassThickness).toBeCloseTo(6, 1) // Expected result with precision of 1 decimal place
  })
})
