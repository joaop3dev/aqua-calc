import { type FeedingFrequencyCalculationParams } from '../interfaces/FoodCalculation';
export declare function calculateFeedingFrequency({ fishCount, fishSize, foodType }: FeedingFrequencyCalculationParams): {
    recommendedFrequency: number;
    recommendedAmountPerFeeding: number;
};
