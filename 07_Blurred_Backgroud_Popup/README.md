# Blur Popup - 20% Offer Modal

A modern, interactive popup modal project that demonstrates blur effects and DOM manipulation with vanilla JavaScript. The application features a background that blurs and darkens when a popup modal appears.

## Features

- **Interactive Popup Modal**: Click the "Click to Join" button to trigger the popup
- **Blur & Brightness Effects**: Background automatically blurs and darkens when popup is active
- **Email Subscription Form**: Collect user emails with a simple form inside the modal
- **Close Functionality**: Click the X icon to close the popup and restore the background
- **Responsive Design**: Modern, centered layout with smooth transitions
- **Beautiful UI**: Uses a laptop keyboard background image with gradient effects

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox, filters (blur, brightness), transitions, and background images
- **JavaScript (Vanilla)**: Event listeners and DOM manipulation
- **Font Awesome 7**: Icon library for the close button

## Project Structure

```
07_Blur_Popup/
├── index.html      # Main HTML file
├── main.js         # JavaScript functionality
├── style.css       # Styling and effects
└── README.md       # Documentation
```

## How It Works

### HTML Structure
- **Container**: Main background section with heading and CTA button
- **Popup Container**: Fixed modal with special offer and email input

### CSS Effects
- **Blur Filter**: `filter: blur(5px) brightness(0.7);` applied to background when active
- **Transitions**: Smooth 0.7s animations when toggling states
- **Background Images**: Unsplash images for visual appeal

### JavaScript Logic
- **Button Click**: Adds `.active` class to container (triggers blur), removes it from popup-container
- **Close Icon Click**: Removes `.active` class from container, adds it to popup-container
- **Event Listeners**: Two click handlers managing state toggle

## Usage

1. Open `index.html` in a web browser
2. Click the "Click to Join" button to open the popup
3. The background will blur and darken automatically
4. Enter your email address in the popup form
5. Click the X icon to close the popup and restore the normal background

## Customization

- **Button Text**: Change "Click to Join" in the HTML
- **Offer Text**: Modify the heading in the popup container
- **Colors**: Edit the `background-color` and `color` properties in CSS
- **Blur Amount**: Adjust the blur value in `.active.container` filter property
- **Modal Size**: Change `height` and `width` of `.popup-container`

## Notes

- The popup starts in an active state (visible by default)
- Smooth CSS transitions provide a polished user experience
- Font Awesome CDN is used for the close icon
- Background images are from Unsplash

## Browser Compatibility

Works on all modern browsers that support:
- CSS Flexbox
- CSS Filters
- ES6 JavaScript

---

**Created as part of the JavaScript Daily practice project**
