export interface SubstrateDensities {
    fineSand: number;
    coarseSand: number;
    basalt: number;
    gravel: number;
    other: number;
}
export interface SubstrateCalculationParams {
    tankWidth: number;
    tankLength: number;
    substrateType: keyof SubstrateDensities;
    chosenSubstrateDepth: number;
}
