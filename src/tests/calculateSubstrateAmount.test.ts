import { calculateSubstrateAmount } from '../functions/calculateSubstrateAmount'
import { type SubstrateCalculationParams } from '../interfaces/SubstrateCalculation'

describe('calculateSubstrateAmount', () => {
  it('calculates substrate amount correctly', () => {
    const substrateParams: SubstrateCalculationParams = {
      tankWidth: 150,
      tankLength: 100,
      substrateType: 'fineSand',
      chosenSubstrateDepth: 4
    }
    const substrateAmount = calculateSubstrateAmount(substrateParams)
    expect(substrateAmount).toBeCloseTo(78, 2)
  })
})
