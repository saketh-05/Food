# Food-main Project

## Overview
The **Food-main** project is a web application designed for managing food-related services. It features a React-based frontend, a Node.js backend with Express, and MongoDB for database interactions. The project is containerized using Docker for seamless deployment.

---

## Features
- User Authentication (Signup, Login)
- Recipe Management (Create, Read)
- Secure backend with JWT-based authentication
- React + Vite frontend for a fast development experience
- Containerized backend for consistent deployment environments

---

## Technology Stack

### Frontend
- **Framework**: React with Vite
- **Languages**: JavaScript, JSX
- **Plugins**:
  - `@vitejs/plugin-react`
  - `eslint`

### Backend
- **Framework**: Node.js with Express
- **Languages**: JavaScript
- **Libraries**:
  - `bcrypt`
  - `jsonwebtoken`
  - `mongoose`

### Database
- **Database**: MongoDB
- **ODM**: Mongoose

### Deployment
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

---

## Getting Started

### Prerequisites
- Node.js (>= v14)
- MongoDB (local or cloud-based)
- Docker (optional for containerized deployment)

### Installation

#### Clone the Repository
```bash
git clone <repository-url>
cd Food-main
```

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `Backend` folder with the following content:
     ```env
     PORT=5000
     MONGO_URI=<your-mongo-db-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
4. Start the backend server:
   ```bash
   npm start
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Deployment

### Docker Deployment
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Build the Docker image:
   ```bash
   docker build -t food-backend .
   ```
3. Run the container:
   ```bash
   docker run -p 5000:5000 food-backend
   ```

---

## CI/CD
- The project includes a GitHub Actions workflow for automated deployment and testing (`.github/workflows/cicd.yml`).

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Submit a pull request with a detailed explanation of your changes.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements
- React + Vite
- Node.js & Express
- MongoDB
- Docker

