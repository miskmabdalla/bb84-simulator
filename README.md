
# BB84 Quantum Key Distribution Simulator

This project is an interactive web-based simulator for the BB84 quantum key distribution protocol. It is built with React and Tailwind CSS, and provides a step-by-step tutorial and visualization of the BB84 process, including the roles of Alice, Bob, and Eve.

## Features
- Interactive tutorial explaining BB84 protocol concepts
- Step-by-step simulation of photon transmission, measurement, and key reconciliation
- Visual representation of Alice, Bob, and Eve
- Responsive and modern UI using Tailwind CSS
- Reusable layout components for consistent design

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/miskmabdalla/bb84-simulator.git
	cd bb84-simulator
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Start the development server:
	```bash
	npm run dev
	```
4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── Components/
│   │   ├── GreenRectangleContainer.jsx
│   │   └── PlayerButton.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── PlayerSelection.jsx
│   │   ├── Alice/
│   │   ├── Bob/
│   │   ├── Eve/
│   │   └── Tutorial/
│   └── assets/
│       └── react.svg
├── package.json
├── vite.config.js
├── README.md
└── ...
```

## Attributions
- Alice, Bob, and Eve icons: [8 bit icons created by frelayasia - Flaticon](https://www.flaticon.com/free-icons/8-bit)

## License
This project is licensed under the MIT License.

## Contributing
Pull requests and suggestions are welcome! Please open an issue or submit a PR for improvements.



## Project Status

| Section         | Status      | Description                                 |
|-----------------|------------|---------------------------------------------|
| Tutorial Pages  | ✅ Done     | Step-by-step BB84 tutorial is complete      |
| Alice Pages     | ✅ Done     | All Alice-related pages are complete        |
| Bob Pages       | 🚧 Ongoing  | Bob-related pages are being improved        |
| Eve Pages       | 🚧 Ongoing  | Eve-related pages are being improved        |

## Author
- GitHub: [miskmabdalla](https://github.com/miskmabdalla)
