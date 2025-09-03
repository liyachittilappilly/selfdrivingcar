

# 🚗 Self-Driving Car Simulator (No Libraries)

A fascinating implementation of a self-driving car simulation built entirely from scratch without any external libraries. This project demonstrates how neural networks can be used to create autonomous vehicles that navigate through traffic and avoid obstacles.

## ✨ Features

- **Pure JavaScript Implementation**: No external libraries or frameworks used
- **Neural Network Control**: Cars use a simple neural network to make driving decisions
- **Sensor Simulation**: Vehicles equipped with virtual sensors to detect obstacles
- **Interactive Controls**: Switch between manual keyboard control and AI driving
- **Traffic Simulation**: Navigate through other vehicles on the road
- **Neural Network Visualization**: Real-time visualization of the neural network's decision-making process
- **Save/Load Functionality**: Save and load trained neural networks

## 🚀 How to Run

1. Clone or download all the project files
2. Open `index.html` in your web browser
3. Use the arrow keys to control the car manually, or watch the AI navigate
4. Click the 💾 button to save the best performing neural network
5. Click the 🗑️ button to discard saved networks

## 📁 Project Structure

- `index.html` - Main page with canvas elements and UI
- `main.js` - Core simulation logic and animation loop
- `car.js` - Car class with physics, sensors, and AI integration
- `controls.js` - Keyboard input handling
- `road.js` - Road generation and rendering
- `sensor.js` - Car sensor implementation for obstacle detection
- `network.js` - Neural network implementation
- `visualizer.js` - Neural network visualization
- `utils.js` - Utility functions for math calculations
- `style.css` - Styling for the interface

## 🧠 How It Works

The simulation creates a neural network for each car that takes input from virtual sensors (detecting road borders and other vehicles) and outputs driving commands (forward, reverse, left, right). The cars learn through a simple evolutionary process where the best-performing car's neural network is saved and used as a starting point for the next generation with slight mutations.

## 🎮 Controls

- **Arrow Up**: Accelerate forward
- **Arrow Down**: Reverse
- **Arrow Left**: Turn left
- **Arrow Right**: Turn right
- **💾 Button**: Save the current best neural network
- **🗑️ Button**: Discard saved neural networks

## 🛠️ Technical Details

- The neural network has 5 input neurons (one for each sensor ray), 6 hidden neurons, and 4 output neurons (for each control action)
- Cars have realistic physics including acceleration, friction, and turning mechanics
- The simulation runs at 60fps using requestAnimationFrame
- Neural networks are saved to localStorage for persistence between sessions

## 🤝 Contributing

Feel free to submit issues, enhancement requests, or pull requests. Some potential improvements could be:
- More complex road layouts
- Additional traffic scenarios
- Enhanced neural network architectures
- Better visualization features

## 📄 License

This project is open source and available under the MIT License.

---

Built with passion for autonomous vehicles and neural networks! Enjoy watching the cars learn to navigate on their own. 🚙💨
