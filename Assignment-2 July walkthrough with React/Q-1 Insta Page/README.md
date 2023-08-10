# Instagram Login and Signup Page

This project aims to create an Instagram-like login and signup page where users can either log in if they have an existing account or sign up if they are new users.

## Project Structure

The project is organized as follows:

Q-1 Insta Page/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── login/
│   │   │   ├── Login.jsx
│   │   │   └── Login.css
│   │   │
│   │   └── signup/
│   │       ├── Signup.jsx
│   │       └── Signup.css
│   │
│   ├── App.jsx
│   ├── index.js
│   └── ...
│
├── styles/
│   ├── app.css
│   └── ...
│
└── package.json


- The `login` folder contains the `login.jsx` file responsible for the login page functionality.
- The `signup` folder contains the `signup.jsx` file responsible for the signup page functionality.
- Common CSS styles are placed in `app.css` as both pages share common styling.

## Getting Started

1. Clone this repository: `git clone https://github.com/Rishabh6306/React_Assignment`
2. Navigate to the project directory: `cd instagram-login-signup`
3. Install dependencies: `npm install`
4. Start the development server: `npm dev start`

## Usage

- Open your browser and go to `http://localhost:5173` to access the login and signup pages.
- If you have an existing account, use the login page. Otherwise, navigate to the signup page to create a new account.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- CSS: For styling the pages.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.