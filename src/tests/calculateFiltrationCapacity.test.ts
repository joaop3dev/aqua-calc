import { calculateFiltrationCapacity } from '../functions/calculateFiltrationCapacity'

describe('calculateFiltrationCapacity', () => {
  it('calculates filtration capacity correctly', () => {
    const filtrationParams = {
      tankVolume: 200
    }
    const filtrationCapacity = calculateFiltrationCapacity(filtrationParams)
    expect(filtrationCapacity.factor3).toBe(600)
    expect(filtrationCapacity.factor5).toBe(1000)
  })
})
