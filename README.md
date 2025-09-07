
## PayTM Clone – Setup and Run

### Prerequisites
- Node.js 18+ and npm

### 1) Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2) Run the backend (port 3000)
```bash
cd backend
npm run dev
```

Base URL: `http://localhost:3000/api/v1`

### 3) Run the frontend (Vite dev server)
```bash
cd frontend
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

### Notes
- Backend uses a MongoDB Atlas URI hardcoded in `backend/db.js` and a JWT secret in `backend/config.js`. Update these for your environment if needed.
