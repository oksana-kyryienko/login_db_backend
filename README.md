# React + TypeScript + Vite

Link for a Backend Part [DEMO LINK](https://github.com/oksana-kyryienko/backend_for_autification_react)

This project represents the frontend part of an application for user authentication and registration. It is developed using React.js.

Functionality
User login
User registration


Installation and Setup
Clone the repository:

git clone https://github.com/oksana-kyryienko/login_db_backend

Install dependencies:

cd frontend
npm install

Run the application:

npm run dev
The application will be running at http://localhost:5173.

Usage
Login
URL: /login
Description: Allows existing users to log in with their credentials.
Registration
URL: /signup
Description: Allows new users to create an account.
Project Structure
src/: Source code of the application
components/: Reusable UI components
Header/: Header component
LoginForm/: Login form component
SignUpForm/: Registration form component
pages/: Pages of the application
LoginPage.tsx: Page for user login
SignUpPage.tsx: Page for user registration
ContentPage.tsx: Page with content - is provided after autification
MainPage.tsx: Page that allow login or sign up

store/: Redux store configuration and slices
store.ts: Redux store setup
userSlice.ts: Redux slice for user state management
utils/: Utility functions
utils.ts: Helper functions, such as email validation
App.tsx: Main component of the application
index.tsx: Entry point of the application
App.css: Styles for the main component
Dependencies
The project uses the following dependencies:

react: JavaScript library for building user interfaces
react-redux: Official React bindings for Redux
react-router-dom: DOM bindings for React Router
axios: Promise-based HTTP client for the browser and Node.js
typescript: Typed JavaScript at Any Scale