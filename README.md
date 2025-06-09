
```markdown
# ✅ AI-Powered To-Do App 📱✨

A smart, cross-platform productivity app built using **AI-assisted development** with **Gemini API integration**, **MySQL backend**, and **React Native (Expo)** frontend. Designed to intelligently manage your tasks, parse natural language input, and boost personal productivity.

---

## 🧠 Key Features

- 🌟 **Smart Task Parsing** — Input tasks like “Pay bill before Friday” and let Gemini convert them into structured data.
- 🧭 **AI Task Suggestions** — Automatically recommends tasks based on your time and behavior.
- 📆 **Goal Breakdown** — Input a goal and Gemini breaks it down into actionable subtasks.
- 🎙️ **Voice-to-Task** — Speak your to-do and get it instantly created.
- 📊 **Weekly Productivity Reports**
- 🔔 **Reminders & Notifications**
- 🌓 **Dark Mode UI**

---

## 🙋‍♂️ About This Project

> ⚠️ **Important Note:**  
This app was **entirely built using AI assistance**. I used tools like **ChatGPT, Gemini, and Curser AI** to generate the full codebase.

I focused on:
- Understanding **frontend-backend architecture**
- Integrating **Gemini AI API**
- Learning how **task parsing and NLP** can be used in real-world apps
- Studying **REST API structure**, **routing**, and **MySQL database design**
- Running and testing the app using **Android Studio Emulator**

This was a **learning-through-AI project**, helping me gain deep insight into how advanced AI can be integrated into mobile apps, while building a production-ready system.

---

## 🛠️ Tech Stack

| Layer         | Technology                               |
|--------------|-------------------------------------------|
| Frontend     | React Native (Expo)                      |
| Backend      | Node.js (Express) / Python (FastAPI)     |
| Database     | MySQL                                    |
| AI/ML        | Google Gemini API                        |
| Auth         | JWT / Firebase Auth                      |
| Emulator     | Android Studio Emulator                  |

---

## 📂 Project Structure (Expo)

```

todo-ai-app-mobile/
├── assets/
├── components/
├── screens/
├── services/
│   └── geminiAPI.js
├── utils/
│   └── taskParser.js
├── App.js
├── app.json
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### 1️⃣ Install Expo CLI

```bash
npm install -g expo-cli
````

### 2️⃣ Clone This Repo

```bash
git clone https://github.com/yourusername/todo-ai-app-mobile.git
cd todo-ai-app-mobile
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Development Server

```bash
expo start
```

Then scan the QR code or launch the app in **Android Studio emulator**.

---

## 🔐 Gemini API Setup

1. Get your API key from: [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add the key to your app:

```js
// services/geminiAPI.js
const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
```

---

## 🧠 AI Prompt Template (used in app)

```plaintext
You are a productivity assistant. Parse the user's sentence and return a task in this JSON structure:
{
  "title": "",
  "description": "",
  "due_date": "",
  "priority": "",
  "labels": [],
  "suggested_subtasks": []
}
Input: "Prepare for final exam next Monday"
```

---

## 📦 Backend Notes

The backend was designed with:

* REST API architecture
* Secure JWT-based authentication
* Scalable MySQL schema for tasks and users
* AI interaction endpoint `/api/parse-task` for Gemini integration

---

## 📲 Tested On

* ✅ Android Studio Emulator
* ⏳ iOS (in development)

---

## ✅ Upcoming Features

* [ ] Drag-and-drop task reordering
* [ ] Calendar view
* [ ] Task sharing and collaboration
* [ ] AI chat assistant integration
* [ ] In-app subscriptions for premium AI usage

---

## ✍️ Author & AI Collaboration

This project was created by **\[Your Name]** with 100% code generated using **AI tools** like ChatGPT, Gemini, and Curser AI.

> I did not manually write the code. Instead, I focused on:
>
> * Understanding how everything works under the hood
> * Studying architecture, integration flows, and APIs
> * Testing and deploying the app using Android Studio

This approach helped me **learn how modern full-stack apps are built** using AI.

---

## 📜 License

MIT © 2025 \[Your Name]

```

---

Would you like a `.zip` version or want me to generate a GitHub repo structure for this?
```
