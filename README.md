
E-Commerce Product List
Overview
This project is a simple e-commerce application built using React, TypeScript, and Redux for state management. It fetches product data from a fake API using Axios, displays the products on the homepage, and handles loading states and errors with skeleton and not-found components.

Features
Homepage: The main page displays a list of products fetched from a remote API.
API Integration: Utilizes Axios to make asynchronous requests to the Fake Store API for fetching product data.
State Management: Implements Redux for managing the application state, making it easy to share data across components.
Loading State: Displays skeleton components while data is being fetched, providing users with a better loading experience.
Error Handling: Uses a not-found component to gracefully handle API errors and display meaningful messages to the user.
Tech Stack
React: A JavaScript library for building user interfaces.
TypeScript: A strongly typed programming language that builds on JavaScript.
Redux: A predictable state container for JavaScript apps.
Axios: A promise-based HTTP client for the browser and Node.js.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository-url>
cd e-commerce-product-list
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Folder Structure
bash
Copy code
/src
  ├── /components        # Contains reusable components (e.g., Skeleton, NotFound)
  ├── /Store             # Redux store and slices
  ├── /styles            # CSS or Tailwind styles
  ├── App.tsx            # Main application component
  └── index.tsx          # Entry point of the application
Usage
The homepage will display a grid of products with their respective details.
While the products are loading, skeleton components will be shown.
In case of an error (e.g., failed API request), a not-found component will display an error message.