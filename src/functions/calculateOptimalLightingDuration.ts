import { type LightingOptions, type LightingDurationCalculationParams } from '../interfaces/LightingDurationCalculation'

export function calculateOptimalLightingDuration (
  { tankVolume, lightingType, plantDensity }: LightingDurationCalculationParams
): number {
  let recommendedDuration = 0

  const lightingFactors: LightingOptions = {
    LED: { low: 8, medium: 10, high: 12 },
    fluorescent: { low: 6, medium: 8, high: 10 }
    // Add more lighting types as needed
  }

  if (lightingType in lightingFactors && plantDensity in lightingFactors[lightingType]) {
    recommendedDuration = lightingFactors[lightingType][plantDensity]
  }

  if (recommendedDuration > 0) {
    recommendedDuration += tankVolume * 0.001 // 1 hour per 1000 liters
  }

  return recommendedDuration
}
