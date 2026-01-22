# Background Video Player

A stylish web page featuring a full-screen background video with interactive play/pause controls. Perfect for portfolio sites, landing pages, or media showcases.

## Features

- **Full-Screen Background Video**: Video covers the entire viewport with a professional darkened overlay
- **Play/Pause Control**: Interactive button to toggle video playback
- **Icon Toggle**: Button icon changes between play and pause based on video state
- **Loading Preloader**: Displays a loading animation while the page loads
- **Responsive Design**: Adapts seamlessly to different screen sizes
- **Professional Styling**: Centered text overlay with proper contrast against the video background

## How to Use

1. **View the Page**: Open `index.html` in a web browser
2. **Wait for Loading**: The preloader will display while assets load
3. **Control Playback**: Click the play/pause button in the top-right corner
   - **Pause Icon**: Indicates video is currently playing
   - **Play Icon**: Indicates video is currently paused
4. **Enjoy**: The video loops continuously in the background

## Project Structure

```
03_Background-Video/
├── index.html          # HTML markup and structure
├── main.js             # JavaScript for video controls and preloader
├── style.css           # Styling and layout
├── background-video.mp4.mp4  # Video file
├── 350.gif             # Loading preloader animation
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup with video element
- **CSS3**: Flexbox, grid layout, and visual effects
- **JavaScript (ES6)**: Event handling and DOM manipulation
- **Bootstrap 5**: Button styling framework
- **Font Awesome**: Icon library for play/pause controls

## Key Features Explained

### Video Background
- Uses HTML5 `<video>` element with `autoplay` and `loop` attributes
- Applied with `position: absolute` to cover the entire viewport
- `object-fit: cover` ensures proper aspect ratio
- `filter: brightness(30%)` darkens the video for text readability

### Play/Pause Toggle
```javascript
// Button click event listener
// Toggles between playing and paused states
// Updates button class and icon based on current state
```

### Preloader
- Displays a loading GIF while page assets load
- Uses `window.addEventListener("load")` to hide when fully loaded
- Smooth transition effect for hiding

## Customization

### Change the Video
Replace `background-video.mp4.mp4` with your own video file:
```html
<video autoplay loop class="background-video" src="your-video.mp4"></video>
```

### Change the Preloader GIF
Replace `350.gif` with your custom loading animation:
```html
<img src="your-loader.gif" alt="preloader">
```

### Change the Heading Text
Modify the `<h1>` tag in `index.html`:
```html
<h1>Your Name or Title Here</h1>
```

### Adjust Video Brightness
Modify the `brightness` filter value in `style.css`:
```css
.background-video {
    filter: brightness(30%);  /* Adjust this value (0-100%) */
}
```

## Browser Compatibility

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile Browsers**: Supported (video may auto-play depending on browser policies)

## Performance Notes

- Optimize video file size for faster loading
- Use modern video formats (MP4) for best compatibility
- Keep preloader GIF lightweight
- Consider using video compression tools to reduce file size

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/) - For button styling
- [Font Awesome 7](https://fontawesome.com/) - For play/pause icons

## Future Enhancements

- Add video volume control
- Implement fullscreen mode toggle
- Add multiple video selection/gallery
- Include video progress bar
- Add keyboard controls (spacebar to play/pause)
- Implement playlist functionality
- Add subtitles/captions support
