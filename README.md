# Tip Calculator

This is a simple and interactive Tip Calculator built using React. The app allows users to calculate the total bill amount, including tips based on service ratings provided by the user and their friend.

## Features

- **Dynamic Tip Calculation**: Adjust the tip percentage based on service ratings.
- **User-Friendly Interface**: Clear and intuitive design for easy use.
- **Reset Functionality**: Quickly reset the inputs to start a new calculation.

## Demo

![Screenshot 1](public/Screenshot1.png)
*The Tip Calculator interface with inputs for bill amount and service ratings.*

![Screenshot 2](public/Screenshot2.png)
*Displaying the calculated total amount and tip breakdown.*

## How to Use

1. **Enter the Bill Amount**: Input the total bill amount in the text field.
2. **Select Service Ratings**: Choose how you and your friend rated the service from the dropdown menus.
3. **View the Total Amount**: The app dynamically calculates and displays the total amount, including the tip.
4. **Reset**: Click the `Reset` button to clear all fields and start again.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Zakyboss/tip-calculator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tip-calculator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React**: For building the user interface
- **CSS**: For styling the application

## Project Structure

```
.
├── public
│   ├── Screenshot1.png
│   ├── Screenshot2.png
│   └── index.html
├── src
│   ├── components
│   │   ├── TipCalculator.js
│   │   └── ResetButton.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Author

**[Zakariya Mohamed (Zakyboss)](https://github.com/Zakyboss)**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Udemy](https://www.udemy.com/) for the course on React.
- Special thanks to my instructor for the inspiration and guidance.