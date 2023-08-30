import { calculateTankVolume } from '../functions/calculateTankVolume'

describe('calculateTankVolume', () => {
  it('calculates tank volume correctly', () => {
    const dimensions = { width: 100, length: 150, height: 60 }
    const volume = calculateTankVolume(dimensions)
    expect(volume).toBeCloseTo(900, 2)
  })
})
