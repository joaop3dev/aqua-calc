export interface LightingOptions {
    LED: {
        low: number;
        medium: number;
        high: number;
    };
    fluorescent: {
        low: number;
        medium: number;
        high: number;
    };
}
export interface LightingDurationCalculationParams {
    tankVolume: number;
    lightingType: 'LED' | 'fluorescent';
    plantDensity: 'low' | 'medium' | 'high';
}
