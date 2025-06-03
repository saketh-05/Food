# FoodTube: A Recipe Sharing and Social Platform

[![FoodTube](https://github.com/saketh-05/Food/blob/main/Frontend/public/vite.svg)](https://github.com/saketh-05/Food)

## Project Title and Description

FoodTube is a web application designed to be a recipe sharing and social platform. It allows users to discover, save, and share recipes, fostering a community around food and cooking. This project provides a user-friendly interface with recipe details, user profiles, and a feedback form, making it both functional and visually appealing.

## What is this project about? and What are the key features?

This project is a full-stack web application focused on providing a platform for users to discover, share, and interact with recipes.

**Key Features:**

*   **User Authentication:** Secure login and signup functionality.
*   **Recipe Discovery:** Browse a curated list of recipes.
*   **User Profiles:** Personalized profile pages.
*   **Bookmarks:** Save favorite recipes.
*   **Responsive Design:** Optimized for various screen sizes.
*   **Frontend:**
    *   React.js for building the user interface.
    *   Vite for fast development and bundling.
    *   Tailwind CSS for styling and responsive design.
    *   React Router DOM for navigation.
*   **Backend:**
    *   Node.js and Express.js for building the API.
    *   MongoDB for data storage.
    *   JWT (JSON Web Tokens) for authentication.
    *   bcrypt for password hashing.
*   **Deployment:**
    *   Docker for containerization.
    *   Nginx for serving the frontend.
    *   GitHub Actions for CI/CD.

## What are the technologies used in this project?

*   **Frontend:**
    *   React.js
    *   Vite
    *   Tailwind CSS
    *   React Router DOM
    *   HTML, CSS, JavaScript
*   **Backend:**
    *   Node.js
    *   Express.js
    *   MongoDB
    *   JWT (jsonwebtoken)
    *   bcrypt
    *   dotenv
    *   cors
*   **Other:**
    *   Docker
    *   Nginx
    *   GitHub Actions
    *   MongoDB Atlas (for cloud database)

## Installation & setup instructions

### Prerequisites

*   Node.js and npm (or yarn/pnpm) installed on your system.
*   Docker installed (for running the application with Docker Compose).
*   MongoDB Atlas account (for database).
*   Git

### Backend Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/saketh-05/Food.git
    cd Food
    ```

2.  **Navigate to the backend directory:**

    ```bash
    cd Backend
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Create a `.env` file in the `Backend` directory and add your environment variables:**

    ```
    MONGODB_USERNAME=your_mongodb_username
    MONGODB_PASSWORD=your_mongodb_password
    PORT=8080
    MONGODB_URI=mongodb+srv://<username>:<password>@merncluster.c3k9g.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster
    ```

5.  **Build the Docker image (optional, if you want to use Docker):**

    ```bash
    docker build -t your-dockerhub-username/foodtube-backend .
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**

    ```bash
    cd ../Frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file in the `Frontend` directory and add your environment variables:**

    ```
    VITE_DEV_BACKEND_URL=http://localhost:8080  # Replace with your backend URL
    VITE_SPOONACULAR_API=your_spoonacular_api_key
    ```

4.  **Build the Docker image (optional, if you want to use Docker):**

    ```bash
    docker build -t your-dockerhub-username/foodtube-frontend .
    ```

## How to run the project?

### Running Locally

1.  **Start the Backend:**

    *   **Without Docker:**

        ```bash
        cd Backend
        npm start
        ```

    *   **With Docker:**

        ```bash
        cd Backend
        docker compose up --build
        ```

2.  **Start the Frontend:**

    *   **Without Docker:**

        ```bash
        cd ../Frontend
        npm run dev
        ```

    *   **With Docker:**

        ```bash
        cd ../Frontend
        docker compose up --build
        ```

<!-- ### Running with Docker Compose

1.  **Create a `docker-compose.yml` file at the root of the project (if you don't have one). You will need to create a network for the containers to communicate:**

    ```yaml
    version: "3.9"
    services:
      backend:
        build:
          context: ./Backend
          dockerfile: Dockerfile
        ports:
          - "8080:8080"
        environment:
          - MONGODB_USERNAME=${MONGODB_USERNAME}
          - MONGODB_PASSWORD=${MONGODB_PASSWORD}
          - PORT=${PORT}
          - MONGODB_URI=${MONGODB_URI}
        depends_on:
          - mongodb
        networks:
          - foodtube-network

      frontend:
        build:
          context: ./Frontend
          dockerfile: Dockerfile
        ports:
          - "8081:80"
        environment:
          - VITE_DEV_BACKEND_URL=http://backend:8080
          - VITE_SPOONACULAR_API=${VITE_SPOONACULAR_API}
        depends_on:
          - backend
        networks:
          - foodtube-network

      mongodb:
        image: mongo:latest
        ports:
          - "27017:27017"
        environment:
          - MONGO_INITDB_ROOT_USERNAME=${MONGODB_USERNAME}
          - MONGO_INITDB_ROOT_PASSWORD=${MONGODB_PASSWORD}
        volumes:
          - mongodb_data:/data/db
        networks:
          - foodtube-network

    volumes:
      mongodb_data:

    networks:
      foodtube-network:
        driver: bridge
    ``` -->

2.  **Set your environment variables in a `.env` file at the root of the project:**

    ```
    MONGODB_USERNAME=your_mongodb_username
    MONGODB_PASSWORD=your_mongodb_password
    PORT=8080
    MONGODB_URI=mongodb+srv://<username>:<password>@merncluster.c3k9g.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster
    VITE_SPOONACULAR_API=your_spoonacular_api_key
    ```

3.  **Run the application:**

    ```bash
    docker-compose up --build
    ```

    This command will build and run the backend, frontend, and MongoDB database.

4.  **Access the application:**

    *   Frontend: `http://localhost:8081`

### Running with Docker (Individual Images)

1.  **Build Docker Images:**

    ```bash
    docker build -t foodtube-backend ./Backend
    docker build -t foodtube-frontend ./Frontend
    ```

2.  **Run the Backend Container:**

    ```bash
    docker run -d --name foodtube-backend -p 8080:8080 -e MONGODB_USERNAME=your_mongodb_username -e MONGODB_PASSWORD=your_mongodb_password foodtube-backend
    ```

3.  **Run the Frontend Container:**

    ```bash
    docker run -d --name foodtube-frontend -p 8081:80 -e VITE_DEV_BACKEND_URL=http://localhost:8080 foodtube-frontend
    ```

4.  **Access the application:**

    *   Frontend: `http://localhost:8081`

## Usage with real executable examples

1.  **Signup:**
    *   Navigate to the signup page (e.g., `http://localhost:5173/signup`).
    *   Enter a username, email, and password.
    *   Click "Sign Up".
2.  **Login:**
    *   Navigate to the login page (e.g., `http://localhost:5173/login`).
    *   Enter your email and password.
    *   Click "Log In".
3.  **Browse Recipes:**
    *   After logging in, you will be redirected to the home page.
    *   You can see the list of recipes.
4.  **Search Recipes:**
    *   Use the search bar in the header to search for recipes.
5.  **View Recipe Details:**
    *   Click on a recipe card to view its details.
6.  **Bookmark Recipes:**
    *   Click the "Bookmark" button on a recipe detail page to save it to your profile.
7.  **View Profile and Bookmarks:**
    *   Navigate to your profile page to view your bookmarked recipes.

## Folder Structure

```
Food/
├── .env                             # Environment variables
├── .gitignore                       # Git ignore file
├── Backend/
│   ├── components/
│   │   ├── login.js                 # Login component
│   │   └── signup.js                # Signup component
│   ├── Dockerfile                   # Backend Dockerfile
│   ├── index.js                     # Backend entry point
│   ├── middleware/
│   │   └── authMiddleware.js        # Authentication middleware
│   ├── models/
│   │   ├── recipeSchema.js          # Recipe schema
│   │   └── userSchema.js            # User schema
│   ├── node_modules/                # Node modules (omitted for brevity)
│   ├── package-lock.json            # Package lock
│   ├── package.json                 # Package file
│   ├── routes/
│   │   ├── bookmarkRoutes.js
│   │   ├── recipeRoutes.js
│   │   └── userRoutes.js
├── Frontend/
│   ├── config/
│   │   └── nginx.conf               # Nginx configuration
│   ├── eslint.config.js             # ESLint configuration
│   ├── index.html                   # Frontend entry point
│   ├── package-lock.json            # Package lock
│   ├── package.json                 # Package file
│   ├── postcss.config.js            # PostCSS configuration
│   ├── src/
│   │   ├── App.css                  # Main app styles
│   │   ├── App.jsx                  # Main app component
│   │   ├── auth.js                  # Authentication logic
│   │   ├── components/
│   │   │   ├── About/
│   │   │   │   ├── About.css        # About page styles
│   │   │   │   └── AboutUs.jsx      # About page component
│   │   │   ├── BackgroundAudio.jsx  # Background audio component
│   │   │   ├── Bookmark/
│   │   │   │   ├── BookmarkCard.jsx  # Bookmark card component
│   │   │   │   ├── BookmarkCard.css  # Bookmark card styles
│   │   │   │   ├── BookmarkList.css  # Bookmark list styles
│   │   │   │   ├── BookmarkList.jsx  # Bookmark list component
│   │   │   │   ├── BookmarksSection.css # Bookmarks Section styles
│   │   │   │   └── BookmarksSection.jsx # Bookmarks Section component
│   │   │   ├── EditProfile/
│   │   │   │   ├── EditProfileModal.css # Edit Profile Modal styles
│   │   │   │   └── EditProfileModal.jsx # Edit Profile Modal component
│   │   │   ├── Foodgrid/
│   │   │   │   ├── Foodgrid.css       # Foodgrid styles
│   │   │   │   ├── Foodgrid.jsx       # Foodgrid component
│   │   │   │   ├── RecipeFormat.css   # Recipe format styles
│   │   │   │   └── RecipeFormat.jsx   # Recipe format component
│   │   │   ├── GoogleLogin.jsx        # Google Login Component
│   │   │   ├── Header/
│   │   │   │   ├── Header.css         # Header styles
│   │   │   │   └── Header.jsx         # Header component
│   │   │   ├── Login-Signup/
│   │   │   │   ├── Headerls.jsx       # Login/Signup Header
│   │   │   │   ├── Input.jsx          # Input component
│   │   │   │   ├── Login.jsx          # Login component
│   │   │   │   ├── Signup.jsx         # Signup component
│   │   │   │   ├── formAction.jsx     # Form action component
│   │   │   │   └── formExtra.jsx      # Form extra component
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.css         # Navbar styles
│   │   │   │   └── Navbar.jsx         # Navbar component
│   │   │   ├── Profilepage/
│   │   │   │   ├── Profile.css        # Profile styles
│   │   │   │   ├── ProfileAvatar.css  # Profile Avatar styles
│   │   │   │   ├── ProfileAvatar.jsx  # Profile Avatar component
│   │   │   │   ├── ProfileHeader.css  # Profile Header styles
│   │   │   │   ├── ProfileHeader.jsx  # Profile Header component
│   │   │   │   ├── ProfileInfo.css    # Profile Info styles
│   │   │   │   ├── ProfileInfo.jsx    # Profile Info component
│   │   │   │   ├── ProfilePage.css    # Profile Page styles
│   │   │   │   └── ProfilePage.jsx    # Profile page component
│   │   │   └── StyledAlert.jsx
│   │   ├── index.css                  # Global styles
│   │   ├── main.jsx                   # Frontend entry point
│   │   ├── pages/
│   │   │   ├── 404page.jsx            # 404 page component
│   │   │   ├── About.jsx              # About page component
│   │   │   ├── Help.css               # Help page styles
│   │   │   ├── Help.jsx               # Help page component
│   │   │   ├── Home.jsx               # Home page component
│   │   │   ├── Login.jsx              # Login page component
│   │   │   ├── Profile.jsx            # Profile page component
│   │   │   ├── Recipe.jsx             # Recipe page component
│   │   │   └── Signup.jsx             # Signup page component
│   ├── tailwind.config.js             # Tailwind config
│   ├── vite.config.js                 # Vite config
├── foodtube/
│   ├── backendapp/
│   │   └── deploy.yaml                # Kubernetes deployment for backend
│   ├── cicd.yml                       # CI/CD configuration
│   ├── dockerimages.yml               # Docker images configuration
│   ├── ec2cicdyaml.txt                # EC2 deployment YAML
│   ├── frontendapp/
│   │   └── deploy.yaml                # Kubernetes deployment for frontend
│   ├── ingress.yaml                   # Kubernetes ingress configuration
│   └── static.yml                     # Static deployment configuration
├── index.html                         # Redirect page
└── README.md                        # This README file
```

---

*   **Author:** Saketh Surya <raisingsurya05@gmail.com>
*   **Last Commit:** Wed May 28 08:55:31 2025 +0530
