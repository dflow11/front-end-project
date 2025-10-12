# Movie App

A React application that lets users discover popular movies, search for their favorite films, and create a personalized favorites list. The app uses The Movie Database (TMDB) API to fetch movie data and provides a responsive interface to view them.

## Features

- Browse popular movies
- Search for specific movies
- Add/remove movies to favorites
- Responsive design
- Persistent favorites using localStorage

## Setup Instructions

### Prerequisites

- Node.js
- npm
- A TMDB API key (free)

### Getting a TMDB API Key

1. Visit [The Movie Database website](https://www.themoviedb.org/)
2. Create a free account
3. Go to your account settings
4. Click on "API" in the left sidebar
5. Request an API key for development purposes
6. Fill out the required information
7. Once approved, copy your API key to a .env file in frontend directory

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dflow11/front-end-project.git
   cd front-end-project/frontend
   ```

2. Create a `.env` file in the frontend directory:
   ```bash
   touch .env
   ```

3. Add your TMDB API key to the `.env` file:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The app should now be running at `http://localhost:5173` (or another port if 5173 is in use)

## How It Works

### Architecture

The application is built using:
- React for UI components
- Vite as the build tool
- React Router for navigation
- Local Storage for persisting favorites

### Key Components

1. **Home Page (`/src/pages/home.jsx`)**
   - Displays popular movies
   - Handles movie search functionality
   - Shows loading states and error messages

2. **Favorites Page (`/src/pages/favorites.jsx`)**
   - Displays user's favorited movies
   - Manages the favorites list using localStorage

3. **Movie Card (`/src/components/MovieCard.jsx`)**
   - Displays individual movie information
   - Shows movie details on hover

4. **Navigation (`/src/components/navbar.jsx`)**
   - Provides navigation between pages
   - Responsive design with smooth transitions

## Contributing

Feel free to submit issues and enhancement requests! This is my first project for learning React and Vite, so I will make updates as I improve my skills!
