export interface SubstrateDensities {
  fineSand: number
  coarseSand: number
  basalt: number
  gravel: number
  other: number
  // Add more substrate types as needed
}

export interface SubstrateCalculationParams {
  tankWidth: number // in centimeters
  tankLength: number // in centimeters
  substrateType: keyof SubstrateDensities
  chosenSubstrateDepth: number // in centimeters
}
