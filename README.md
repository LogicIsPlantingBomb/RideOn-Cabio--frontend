# RideOn Cabio Frontend..

## Overview
RideOn Cabio is a frontend application built using React, designed for a ride-hailing service. The application features pages for user login, user signup, captain login, and captain signup, along with a dynamic home page. The project leverages React Router for routing and Tailwind CSS for styling.

---

## Features

- **Dynamic Routing**: Implemented with React Router to provide seamless navigation.
- **Responsive Design**: Styled using Tailwind CSS for modern and mobile-friendly UI.
- **Reusable Components**: Modular React components for easier maintenance and scaling.
- **Authentication Forms**: Simple and effective forms for user and captain login/sign-up.

---

## Project Structure
```
frontend/
├── public/                # Public assets
├── src/
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserSignup.jsx
│   │   ├── CaptainLogin.jsx
│   │   ├── CaptainSignup.jsx
│   ├── images/           # Image assets
│   ├── App.jsx           # Main application component
│   └── index.jsx         # Entry point
├── node_modules/         # Dependencies
├── package.json          # Project metadata and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/LogicIsPlantingBomb/RideOn-Cabio--frontend.git
   cd RideOn-Cabio--frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## Routing

The following routes are defined in the application:

| Path               | Component         | Description                  |
|--------------------|-------------------|------------------------------|
| `/`                | `Home`           | Landing page                 |
| `/users-login`     | `UserLogin`      | User login page              |
| `/users-register`  | `UserSignup`     | User registration page       |
| `/captain-login`   | `CaptainLogin`   | Captain login page           |
| `/captain-register`| `CaptainSignup`  | Captain registration page    |

---

## Key Components

### Home.jsx
The landing page displaying the logo and a button to get started.

### UserLogin.jsx
A form for users to log in, featuring fields for email and password. Includes a link for new users to create an account and an option to sign in as a captain.

### UserSignup.jsx
A form for new users to register, collecting essential information.

### CaptainLogin.jsx
A form for captains to log in.

### CaptainSignup.jsx
A form for new captains to register.

---

## Styling
The project uses **Tailwind CSS** for styling. Key classes are applied directly to elements to create a responsive and modern design.

---

## Screenshots
Add screenshots of your application here to showcase the UI.

---

## Contribution
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Your commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any inquiries, please reach out to the project maintainer.

---

Happy Coding!! 🚀
