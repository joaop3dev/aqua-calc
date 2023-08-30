export interface LightingOptions {
  LED: {
    low: number
    medium: number
    high: number
  }
  fluorescent: {
    low: number
    medium: number
    high: number
  }
}

export interface LightingDurationCalculationParams {
  tankVolume: number
  lightingType: 'LED' | 'fluorescent' // Use string literal types
  plantDensity: 'low' | 'medium' | 'high' // Use string literal types
}
