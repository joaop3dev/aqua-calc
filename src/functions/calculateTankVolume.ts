import { type TankDimensions } from '../interfaces/TankDimensions'

export function calculateTankVolume ({ width, length, height }: TankDimensions): number {
  const volume = width * length * height / 1000
  return volume
}
