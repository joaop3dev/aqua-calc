# **Aqua-Calc**

Aqua-Calc is a library for calculating various parameters related to aquarium maintenance and care.

## **Installation**

To use Aqua-Calc in your project, you can install it via npm:

```
npm install aqua-calc
```

## **Usage**

### **Calculate Tank Volume**

```typescript
import { calculateTankVolume } from 'aqua-calc';

const volumeLiters = calculateTankVolume({
  width: 60, // in centimeters
  length: 120, // in centimeters
  height: 50 // in centimeters
});

console.log(`Tank volume: ${volumeLiters} liters`);
```

### **Calculate Tank Volume**

```typescript
import { calculateRecommendedGlassThickness } from 'aqua-calc';

const recommendedThickness = calculateRecommendedGlassThickness({
  tankVolumeLiters: 200,
  safetyFactor: 3
});

console.log(`Recommended glass thickness: ${recommendedThickness} millimeters`);
```

## **Other Calculations**

Aqua-Calc also provides functions for calculating substrate amount, filtration capacity, optimal lighting duration, recommended food amount, and feeding frequency. Refer to the source code and documentation for more details on using these functions.

## **Contributing**

If you find any issues or want to contribute to this project, feel free to open an issue or submit a pull request on GitHub.

## **License**

This project is licensed under the ISC License.

## **Help me with a coffee**

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/joaop3dev)