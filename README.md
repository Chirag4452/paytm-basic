# PayTM Clone

A full-stack web application that replicates PayTM's core functionality, allowing users to sign up, sign in, check their balance, and transfer money to other users.

## 🚀 Features

- **User Authentication**: Secure signup and signin with JWT tokens
- **Dashboard**: View account balance and transaction history
- **Money Transfer**: Send money to other registered users
- **User Search**: Find and filter users by name
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Updates**: Instant balance and transaction updates

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
paytm/
├── backend/                 # Express.js server
│   ├── config.js           # JWT secret configuration
│   ├── db.js               # MongoDB connection
│   ├── index.js            # Server entry point
│   ├── middleware.js       # Authentication middleware
│   ├── routes/
│   │   ├── index.js        # Route aggregation
│   │   ├── user.js         # User auth & profile routes
│   │   └── accounts.js     # Account & transfer routes
│   └── package.json
├── frontend/               # React application
│   ├── public/
│   │   └── _redirects      # Netlify SPA redirects
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── config.js       # API configuration
│   │   ├── main.jsx        # App entry point
│   │   └── App.jsx         # Main app component
│   ├── vite.config.js      # Vite configuration
│   └── package.json
├── .env                    # Environment variables (create this)
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd paytm
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your values:
# PORT=3000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Environment Variables

Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:3000
```

## 🚀 Running Locally

### Backend
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:3000`

### Frontend
```bash
cd frontend
npm run dev
```
App runs on `http://localhost:5173`

## 🔐 API Endpoints

### Authentication
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login
- `GET /api/v1/user/me` - Get user profile (protected)
- `PUT /api/v1/user/` - Update user info (protected)
- `GET /api/v1/user/bulk` - Search users (protected)

### Account Management
- `GET /api/v1/account/balance` - Get account balance (protected)
- `POST /api/v1/account/transfer` - Transfer money (protected)

## 🌐 Deployment

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variables:
   - `PORT` (provided by Render)
   - `MONGODB_URI`
   - `JWT_SECRET`

### Frontend (Netlify)
1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add environment variable:
   - `VITE_API_BASE_URL` = your Render backend URL

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Zod schemas for request validation
- **Password Storage**: Basic password storage (consider hashing in production)
- **CORS**: Configured for cross-origin requests
- **Protected Routes**: Middleware for authenticated endpoints

## 🎨 UI Components

The application includes these reusable components:
- `AppBar` - Navigation header
- `Balance` - Account balance display
- `Users` - User list with search
- `Button` - Custom button component
- `InputBox` - Form input fields
- Various layout components (`Heading`, `SubHeading`, `BottomWarning`)

## 📱 Usage

1. **Sign Up**: Create a new account with email, name, and password
2. **Sign In**: Login with your credentials
3. **Dashboard**: View your balance and recent activity
4. **Transfer Money**:
   - Search for users by name
   - Select a user to send money to
   - Enter amount and confirm transfer
5. **Profile**: View and update your information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues:

**Connection Refused Error:**
- Ensure backend is running on port 3000
- Check if `.env` file has correct `VITE_API_BASE_URL`

**MongoDB Connection Error:**
- Verify your MongoDB Atlas connection string
- Check network access and IP whitelist

**Build Errors:**
- Ensure all dependencies are installed: `npm install`
- Check Node.js version compatibility

**Authentication Issues:**
- Verify JWT_SECRET is set in backend
- Check token expiration and validity

## 🔄 Future Enhancements

- [ ] Password hashing with bcrypt
- [ ] Email verification for signup
- [ ] Transaction history
- [ ] Admin dashboard
- [ ] Two-factor authentication
- [ ] Mobile app (React Native)
- [ ] Payment gateway integration
- [ ] Real-time notifications

---

Built with ❤️ using the MERN stack
