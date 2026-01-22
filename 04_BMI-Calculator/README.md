# BMI Calculator

A simple and intuitive web application to calculate your Body Mass Index (BMI) and determine your weight category based on standard health guidelines.

## Features

- **Instant BMI Calculation**: Calculate your BMI with a single click
- **Weight Category Classification**: Automatically categorizes your weight status:
  - Underweight (BMI ≤ 18.5)
  - Normal (BMI 18.5 - 24.9)
  - Overweight (BMI 24.9 - 29.9)
  - Obese (BMI > 29.9)
- **User-Friendly Interface**: Clean, intuitive design with a gradient background
- **Pre-filled Values**: Default values included for quick testing
- **Input Validation**: Minimum height and weight constraints to ensure valid inputs
- **Real-time Display**: Shows calculated BMI value and weight condition instantly

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Enter Height**: Input your height in centimeters (cm) in the first field
   - Default: 180 cm
   - Minimum: 50 cm
3. **Enter Weight**: Input your weight in kilograms (kg) in the second field
   - Default: 70 kg
   - Minimum: 5 kg
4. **Calculate**: Click the "Compute BMI" button
5. **View Results**: 
   - Your BMI value appears in the result field
   - Your weight condition is displayed below

## Project Structure

```
04_BMI-Calculator/
├── index.html       # HTML markup and structure
├── index.js         # JavaScript logic for BMI calculation
├── index.css        # Styling and layout
└── README.md        # This file
```

## Technologies Used

- **HTML5**: Semantic markup and form inputs
- **CSS3**: Gradient backgrounds, flexbox, and styling effects
- **JavaScript (ES6)**: Event handling and BMI calculation logic

## BMI Formula

$$BMI = \frac{Weight (kg)}{Height (m)^2}$$

Where:
- **Weight** is entered in kilograms (kg)
- **Height** is converted from centimeters to meters by dividing by 100

## Weight Categories

According to standard BMI classifications:

| BMI Range | Category |
|-----------|----------|
| ≤ 18.5 | Underweight |
| 18.5 - 24.9 | Normal Weight |
| 24.9 - 29.9 | Overweight |
| > 29.9 | Obese |

## Code Highlights

### BMI Calculation
```javascript
const heightMeter = height.value / 100;  // Convert cm to meters
const bmiCal = Number.parseFloat(weight.value / (heightMeter * heightMeter));
```

### Weight Category Classification
```javascript
if(bmiCal <= 18.5)
    result.innerText = "Under Weight";
else if(bmiCal > 18.5 && bmiCal <= 24.9)
    result.innerText = "Normal";
else if(bmiCal > 24.9 && bmiCal <= 29.9)
    result.innerText = "Over Weight";
else
    result.innerText = "Obese";
```

## Customization

### Change Default Values
Modify the `value` attribute in `index.html`:
```html
<input type="number" class="input" id="height" value="180" />
<input type="number" class="input" id="weight" value="70" />
```

### Adjust Input Constraints
Modify the `min` attribute:
```html
<input type="number" class="input" id="height" min="50" />
<input type="number" class="input" id="weight" min="5" />
```

### Customize Colors
Edit the background gradient in `index.css`:
```css
body {
    background: linear-gradient(to left bottom, lightgreen, lightblue);
}
```

## Browser Compatibility

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile Browsers**: Full support

## Notes

- BMI is a general screening tool and should not be used as a medical diagnosis
- Consult a healthcare professional for personalized health advice
- BMI calculations are based on standard adult guidelines
- Results are rounded to decimal places for precision

## Future Enhancements

- Add metric/imperial unit toggle (kg/lbs, cm/inches)
- Display BMI chart visualization
- Save calculation history
- Add age-adjusted BMI recommendations
- Implement dietary and exercise suggestions based on results
- Add mobile app version
- Include body composition analysis
- Export results as PDF
