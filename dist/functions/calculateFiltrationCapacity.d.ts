import { type FiltrationCapacityCalculationParams } from '../interfaces/FiltrationCapacityCalculation';
export declare function calculateFiltrationCapacity({ tankVolume }: FiltrationCapacityCalculationParams): {
    factor3: number;
    factor5: number;
};
