import { type FiltrationCapacityCalculationParams } from '../interfaces/FiltrationCapacityCalculation'

export function calculateFiltrationCapacity ({ tankVolume }: FiltrationCapacityCalculationParams): { factor3: number, factor5: number } {
  const filtrationFactor3 = 3 // Recommended filtration factor (3 times the tank volume)
  const filtrationFactor5 = 5 // Recommended filtration factor (5 times the tank volume)

  const capacityFactor3 = tankVolume * filtrationFactor3
  const capacityFactor5 = tankVolume * filtrationFactor5

  return {
    factor3: capacityFactor3,
    factor5: capacityFactor5
  }
}
