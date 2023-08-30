import { calculateOptimalLightingDuration } from '../functions/calculateOptimalLightingDuration'
import { type LightingDurationCalculationParams } from '../interfaces/LightingDurationCalculation'

describe('calculateOptimalLightingDuration', () => {
  it('calculates optimal lighting duration correctly', () => {
    const lightingParams: LightingDurationCalculationParams = {
      tankVolume: 100,
      lightingType: 'LED',
      plantDensity: 'medium'
    }
    const lightingDuration = calculateOptimalLightingDuration(lightingParams)
    expect(lightingDuration).toBeCloseTo(10.1, 2)
  })
})
