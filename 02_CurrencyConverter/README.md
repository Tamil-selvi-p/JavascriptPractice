# Currency Converter

A simple, interactive web application that converts between multiple currencies in real-time using live exchange rates.

## Features

- **Real-time Exchange Rates**: Fetches live currency conversion rates from the ExchangeRate API
- **Multiple Currencies**: Supports conversion between 7 major currencies:
  - AUD (Australian Dollar)
  - CAD (Canadian Dollar)
  - EUR (Euro)
  - GBP (British Pound)
  - INR (Indian Rupee)
  - JPY (Japanese Yen)
  - USD (US Dollar)
- **Instant Conversion**: Automatically updates conversion rates when currencies are selected or amounts are changed
- **User-Friendly Interface**: Clean, intuitive design with a modern color scheme
- **Responsive Input**: Real-time calculation as you type

## How to Use

1. **Select Source Currency**: Choose the currency you want to convert from (default: USD)
2. **Enter Amount**: Type the amount you want to convert in the first input field
3. **Select Target Currency**: Choose the currency you want to convert to (default: INR)
4. **View Exchange Rate**: The conversion rate automatically displays above the input
5. **Click Convert**: Click the "Convert" button to see the final conversion result

## Project Structure

```
02_currency-converter/
├── index.html      # HTML markup and structure
├── main.js         # JavaScript logic and API calls
├── style.css       # Styling and layout
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Page structure and form elements
- **CSS3**: Styling, flexbox layout, and responsive design
- **JavaScript (ES6)**: DOM manipulation and API integration
- **ExchangeRate API**: For fetching real-time currency exchange rates

## Key Functions

### `updateRecord()`
- Fetches the latest exchange rates for the selected currency from the API
- Updates the conversion rate and calculates the equivalent amount in the target currency
- Triggered on:
  - Page load
  - Currency selection change
  - Amount input change

### Event Listeners
- **Currency select change**: Updates exchange rates
- **Amount input change**: Recalculates conversions
- **Convert button click**: Displays the final conversion result

## API Integration

This project uses the [ExchangeRate API](https://www.exchangerate-api.com/) for fetching real-time exchange rates.

**API Endpoint**: `https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{CURRENCY_CODE}`

## Notes

- The target currency input field is disabled to prevent manual editing and keep the conversion accurate
- Exchange rates are fetched in real-time for accuracy
- All calculations are rounded to 2 decimal places for currency precision

## Future Enhancements

- Add more currencies to the conversion list
- Implement currency swap button (reverse source and target)
- Add conversion history
- Store API key securely (currently hardcoded - for demo purposes only)
- Add offline mode with cached rates
- Implement unit tests
