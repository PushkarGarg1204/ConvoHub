# 💬 ConvoHub

ConvoHub is a full-stack real-time chat application built using the MERN stack. It provides a secure and modern messaging experience with JWT-based authentication, real-time communication using Socket.IO, and a responsive user interface. The project is designed to demonstrate full-stack development skills, scalable backend architecture, and real-time web technologies.

---

## 🚀 Features

### Authentication

* User Registration
* Secure Login with JWT Authentication
* Logout Functionality
* Password Hashing using bcrypt
* HTTP-Only Cookie Authentication

### User Management

* View Other Registered Users
* User Profile with Avatar
* Online/Offline User Status *(In Progress)*

### Messaging

* Real-Time One-to-One Messaging *(In Progress)*
* Chat History *(In Progress)*
* Image Sharing *(Planned)*
* Typing Indicator *(Planned)*
* Read Receipts *(Planned)*

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Zustand
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JWT
* bcryptjs
* Cookie Parser
* dotenv

---

## 📂 Project Structure

```text
ConvoHub/
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/PushkarGarg1204/ConvoHub.git
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** directory.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

---

## 📌 Current Progress

* ✅ User Registration API
* ✅ Login API
* ✅ Logout API
* ✅ Get Other Users API
* 🔄 Real-Time Messaging
* 🔄 Socket.IO Integration
* 🔄 Online User Tracking
* ⏳ Image Sharing
* ⏳ Typing Indicator
* ⏳ Read Receipts

---

## 🎯 Future Improvements

* Group Chats
* Voice & Video Calling
* Emoji Reactions
* Message Search
* Push Notifications
* Message Encryption
* File Sharing
* Dark Mode
* User Presence
* Infinite Scroll for Chats

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository, open issues, or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Pushkar Garg**

If you found this project useful, consider giving it a ⭐ on GitHub.

