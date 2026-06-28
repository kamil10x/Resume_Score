<div align="center">

# 📄 Resume AI Scorer

### An AI-powered Resume Scoring Platform that analyzes resumes against job descriptions and provides ATS-style scores with personalized feedback.


[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Cohere AI](https://img.shields.io/badge/Cohere-AI-8A2BE2)](https://cohere.com/)

</div>

---

## 🌟 Overview

**Resume AI Scorer** helps job seekers understand how well their resume matches a job description — just like a real Applicant Tracking System (ATS). Upload your PDF resume, paste a job description, and get an instant AI-generated match score along with actionable feedback to improve your chances of landing an interview.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 📄 **PDF Upload** | Upload resumes in PDF format with ease |
| 🤖 **AI Analysis** | Powered by Cohere AI for intelligent resume parsing |
| 📊 **ATS Match Score** | Get a score from 0–100 reflecting job compatibility |
| 💡 **Smart Feedback** | Detailed, personalized improvement suggestions |
| 🔐 **Google Auth** | Secure sign-in via Firebase Authentication |
| ☁️ **Cloud Storage** | Resume data stored securely in MongoDB Atlas |
| 📱 **Responsive UI** | Modern, mobile-friendly React interface |
| 👨‍💼 **Admin Panel** | View and manage all submitted resumes |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, React Router, Axios, Material UI, CSS Modules, Vite |
| **Backend** | Node.js, Express.js, Multer, PDF-Parse, Cohere AI API |
| **Database** | MongoDB Atlas, Mongoose |
| **Auth** | Firebase Google Authentication |

---

## 📂 Project Structure

```
Resume_Score/
├── Frontend/
│   ├── src/                # React components, pages, hooks
│   ├── public/             # Static assets
│   └── package.json
│
├── Backend/
│   ├── Controllers/        # Route handler logic
│   ├── Models/             # Mongoose schemas
│   ├── Routes/             # Express route definitions
│   ├── uploads/            # Temporary PDF storage
│   ├── utils/              # Helper functions
│   ├── conn.js             # MongoDB connection
│   └── server.js           # Entry point
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/kamil10x/Resume_Score.git
cd Resume_Score
```

### 2. Install Dependencies

**Backend:**
```bash
cd Backend
npm install
```

**Frontend:**
```bash
cd Frontend
npm install
```

---

## 🔑 Environment Variables

### Backend — create `Backend/.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
COHERE_API_KEY=your_cohere_api_key
```

### Frontend — create `Frontend/.env`

```env
VITE_FIREBASE_API_KEY=your_value
VITE_FIREBASE_AUTH_DOMAIN=your_value
VITE_FIREBASE_PROJECT_ID=your_value
VITE_FIREBASE_STORAGE_BUCKET=your_value
VITE_FIREBASE_MESSAGING_SENDER_ID=your_value
VITE_FIREBASE_APP_ID=your_value
```

> ⚠️ Never commit `.env` files to version control. Add them to `.gitignore`.

---

## ▶️ Running the Project

**Backend:**
```bash
cd Backend
npm run dev      # Development (nodemon)
# or
npm start        # Production
```

**Frontend:**
```bash
cd Frontend
npm run dev
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |

---

## 📌 API Endpoints

### Upload Resume
```http
POST /resume/addResume
```

| Field | Type | Description |
|---|---|---|
| `resume` | File | PDF resume file |
| `job_desc` | String | Target job description |
| `user` | String | Authenticated user ID |

### Get User Resumes
```http
GET /resume/get/:user
```

### Admin Dashboard
```http
GET /resume/get/admin
```

---

## 📸 Application Workflow

```
1. 🔐  User signs in with Google
            ↓
2. 📄  Uploads a PDF resume
            ↓
3. 📝  Enters the job description
            ↓
4. ⚙️  Backend extracts text from PDF
            ↓
5. 🤖  Cohere AI analyzes resume vs. job description
            ↓
6. 📊  ATS Match Score (0–100) is generated
            ↓
7. 💾  Score & feedback saved to MongoDB
            ↓
8. 📋  User views current & past analyses
```

---

## 🔮 Future Improvements

- [ ] 🔍 Resume keyword highlighting
- [ ] 📥 Download AI-generated PDF reports
- [ ] 📝 Support for DOCX files
- [ ] 🔄 Multiple resume comparison
- [ ] ✍️ AI-powered resume rewriting
- [ ] 💼 Job recommendation system
- [ ] 📈 Analytics dashboard for score trends

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork the repository

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "feat: add your feature description"

# 4. Push to GitHub
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

Please make sure your code follows the existing style and includes relevant comments.

---


## 👨‍💻 Author

**Shaik Kamil**

[![GitHub](https://img.shields.io/badge/GitHub-kamil10x-181717?logo=github)](https://github.com/kamil10x)

---

<div align="center">

⭐ **If you found this project useful, give it a star on GitHub!** ⭐

</div>
