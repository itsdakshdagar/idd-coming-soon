# Coming Soon Page with Text Animation

This project is a simple, visually appealing "Coming Soon" landing page. It features a dark, radial-gradient background and an animated text effect where messages appear character by character, creating a futuristic or terminal-like feel.

## Features

*   **Animated Text Reveal:** Main and subtext messages are revealed letter by letter with a scrambling effect before settling on the final character.
*   **Sequential Animation:** The animation for the subtext starts only after the main text animation is complete.
*   **Responsive Design:** The layout and font sizes adjust for different screen sizes (desktops, tablets, and mobile phones).
*   **Custom Font:** Uses 'Source Code Pro' monospace font for a tech-inspired look.
*   **Scanlines Overlay:** A subtle overlay effect mimics old CRT monitor scanlines, enhancing the theme.

## Technologies Used

*   **HTML5:** For the basic structure of the page.
*   **CSS3:** For styling, including the background, text effects, layout, and responsiveness.
*   **JavaScript (ES6+):** For the core logic of the text animation.
*   **jQuery:** Used for DOM manipulation and to simplify JavaScript interactions.
*   **Lettering.js:** A jQuery plugin used to split text into individual characters (spans) for fine-grained animation control.

## Project Files

*   `index.html`: The main HTML file containing the page structure and text content.
*   `style.css`: Contains all the CSS rules for styling the page, including the animation and responsive design.
*   `script.js`: Houses the JavaScript code responsible for the text animation logic using jQuery and Lettering.js.

## How to Use

1.  Clone or download the repository/files.
2.  Open the `index.html` file in a web browser to view the page.

No special build steps or server configurations are required as it's a static website.

## Customization

*   **Text Content:** Modify the text within the `<div class="word">` and `<div class="word subtext">` elements in `index.html` to change the displayed messages.
*   **Animation Speed/Characters:** Adjust parameters within the `Ticker` function in `script.js` (e.g., `cycleCount`, `chars`) to alter the animation behavior.
*   **Styling:** Modify `style.css` to change colors, fonts, background, or other visual aspects.