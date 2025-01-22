# Frontend Application

## Overview
This is the frontend of a React application that provides distinct routes for different user types and functionalities. It includes separate pages for user and captain login/signup and a homepage.

## Features
- **Homepage**: Default landing page.
- **User Login**: Page for users to log in.
- **User Signup**: Page for new users to register.
- **Captain Login**: Page for captains to log in.
- **Captain Signup**: Page for new captains to register.

## Project Structure
The main routes and components of the application are as follows:

### App Component
The `App` component sets up the routing for the application using `react-router-dom`.

### Routes
The following routes are defined:

| Path               | Component       | Description                           |
|--------------------|-----------------|---------------------------------------|
| `/`                | `Home`         | Displays the homepage.               |
| `/users-login`     | `UserLogin`    | Login page for users.                |
| `/users-register`  | `UserSignup`   | Registration page for new users.     |
| `/captain-login`   | `CaptainLogin` | Login page for captains.             |
| `/captain-register`| `CaptainSignup`| Registration page for new captains.  |

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. Open the application in your browser at `http://localhost:3000/`.

## Usage
1. Navigate to the homepage at `/`.
2. Use the appropriate routes for user or captain login and signup:
   - **Users** can log in at `/users-login` or register at `/users-register`.
   - **Captains** can log in at `/captain-login` or register at `/captain-register`.

## Dependencies
The application relies on the following main dependencies:
- [React](https://reactjs.org/): For building the UI.
- [React Router](https://reactrouter.com/): For handling routing.

## Contributing
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Create a pull request.

## License
This project is licensed under the MIT License.


