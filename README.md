# Tic-Tac-Toe Game

A 1vs1 Tic-Tac-Toe game developed with Node.js and Express.js. This is a web-based implementation of the classic Tic-Tac-Toe game where two players can take turns marking X and O on a 3x3 grid.

## Features

- Interactive 3x3 game board
- Turn-based gameplay (X goes first, then O)
- Score tracking for both players
- Visual feedback for the current player's turn
- Win detection for rows, columns, and diagonals
- Game reset functionality
- Responsive design with SCSS styling
- Colorblind friendly color scheme

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3 (SCSS), Vanilla JavaScript
- **Build Tools**: express-dart-sass for SCSS compilation
- **Development**: Nodemon for auto-reloading during development

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tic-tac-toe-node-js.git
   cd tic-tac-toe-node-js
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. For production:
   ```
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. Play the game:
   - Players take turns clicking on the grid cells
   - X goes first, followed by O
   - The game announces the winner when a player gets three in a row
   - Use the "Reset Game" button to start a new game

## Project Structure

- `index.js` - Main server file
- `public/` - Static assets (CSS, JS, images)
- `src/scss/` - SCSS source files
- `views/` - HTML templates

