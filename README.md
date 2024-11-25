# Responsive Analog Clock

This project implements a responsive analog clock that dynamically updates in real-time. It is a visually appealing and functional representation of traditional timekeeping.

## Features

- **Analog Clock:** Displays the current time with hour, minute, and second hands.
- **Responsiveness:** Automatically adjusts sizes and positions to look great on any device.
- **Minimal Design:** Focuses solely on the analog representation of time.

## Live Demo

No live demo link is available; clone the repository and open the HTML file locally to view the project.

## Technologies Used

- **HTML**: For structuring the clock elements.
- **CSS**: For styling the clock and ensuring it is responsive.
- **JavaScript**: For dynamically updating the time in real-time.

## How to Use

1. Clone the repository or download the HTML file.
2. Open the file in any modern web browser.
3. View the clock, which will display the current time.

## Implementation Details

### CSS Styling

- The clock is styled using viewport units (`vmin`, `vw`, `vh`) and percentages to ensure responsiveness.
- Hands and numbers are positioned using absolute positioning and precise transformations.

### JavaScript Logic

- `setInterval` is used to update the clock every second.
- Hands are rotated dynamically using `transform: rotate` based on current time calculations.

### Responsive Design

- Media queries ensure that the clock remains proportionate on smaller screens.
- Relative units allow all elements to scale gracefully.

## Customization

- **Clock Size**: Adjust the `.clock` class's `width` and `height` properties in CSS.
- **Colors**: Change the `background`, `border`, and hand colors in the CSS file.
- **Font**: Update the `font-family` property for any text-related elements.

## Known Limitations

- The clock does not account for time zones or daylight saving time.
- Requires a browser supporting ES6 for proper functionality.

## Credits

This project demonstrates a responsive and interactive analog clock design using HTML, CSS, and JavaScript.
