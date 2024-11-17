 ## Employee Management System (DealsDray)

Introduction


The Employee Management System is a web-based application designed to simplify the management of employee data in an organization. This project was developed as part of my internship assignment and serves as a comprehensive solution to streamline operations related to employee records, roles, and performance tracking.




## Tech Stack

- **Frontend**: React.js, Redux for state management, Bootstrap for styling.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose for ODM).
- **Authentication**: JSON Web Tokens (JWT) and BCrypt for password hashing.
- **Payment Integration**: Stripe API (or PayPal).
- **Database**: MongoDB for storing user, product, and order information.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-mern.git
    cd ecommerce-mern
    ```

2. Install dependencies:
    ```bash
    # Backend dependencies
    cd backend
    npm install
    
    # Frontend dependencies
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the backend folder and add the following environment variables:
    ```bash
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret_key
    STRIPE_SECRET=your_stripe_secret_key
    ```

4. Start the development server:
    ```bash
    # Backend (runs on port 5000)
    cd backend
    npm run backebd
    
    # Frontend (runs on port 3000)
    cd ../frontend
    npm ren frontend
    ```
    # Both Forntend & Backeend
   npm run dev

6. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`
