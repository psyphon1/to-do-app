---

````markdown
<h1 align="center">📝✨ AI-Powered To-Do App</h1>
<p align="center">
  Smart. Predictive. Voice-enabled.<br/>
  Your next-gen task manager powered by AI.
</p>

<div align="center">

![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blueviolet)
![AI](https://img.shields.io/badge/AI-Gemini%20API-brightgreen)
![Database](https://img.shields.io/badge/DB-MySQL-orange)
![Expo](https://img.shields.io/badge/Built%20With-Expo%20(React%20Native)-blue)

</div>

---

## 🧠 Key Features

✅ Natural language to structured task conversion  
✅ AI-generated subtasks & suggestions  
✅ Weekly productivity reports powered by Gemini  
✅ Voice-to-task input (🎙️ speak and add!)  
✅ Reminders & notifications  
✅ Clean light & dark UI modes  
✅ Cross-platform with Android Studio emulator testing

---

## 📌 Project Overview

> **Note:** This app was fully generated using **AI tools** (ChatGPT, Curser AI, Gemini API).  
> I focused on understanding:
> - 🧱 Architecture (Frontend + Backend + AI)
> - 🔗 API integration with Gemini & MySQL
> - ⚙️ Internal backend working
> - 🧪 Running via Android Studio Emulator

This was a **real-world learning project**, building a complete smart app with AI — without writing code manually, but thoroughly understanding how it works.

---

## 🔧 Tech Stack

| Layer         | Technology                           |
|--------------|----------------------------------------|
| 📱 Frontend   | React Native (Expo)                  |
| 🧠 AI/ML      | Google Gemini API                    |
| 🛢️ Database   | MySQL                                |
| 🔐 Auth       | Firebase Auth / JWT                  |
| 🧪 Testing    | Android Studio Emulator              |
| ☁️ Backend    | Node.js (Express) / Python (FastAPI) |

---

## 🚀 Setup & Run

```bash
# 1. Install Expo CLI
npm install -g expo-cli

# 2. Clone the repo
git clone https://github.com/yourusername/todo-ai-app-mobile.git
cd todo-ai-app-mobile

# 3. Install dependencies
npm install

# 4. Run the app
expo start
````

📱 Use the QR code from the terminal or open the app in **Android Studio emulator**.

---

## 🔐 Gemini API Setup

1. Go to: [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Copy your API key
3. Paste it inside the service file:

```js
// services/geminiAPI.js
const GEMINI_API_KEY = "your-api-key-here";
```

---

## 🧠 Example AI Prompt Used

```json
You are a productivity assistant. Convert the user's sentence to this format:
{
  "title": "",
  "description": "",
  "due_date": "",
  "priority": "",
  "labels": [],
  "suggested_subtasks": []
}
Input: "Finish frontend for my project by Friday evening"
```

---

## 📁 Project Structure

```
todo-ai-app-mobile/
├── assets/               # Images, icons, fonts
├── components/           # Reusable UI components
├── screens/              # Home, Add Task, Summary etc.
├── services/             # Gemini API integration
├── utils/                # Task formatting, AI prompts
├── App.js                # Entry point
├── app.json              # Expo config
└── README.md
```

---

## 📦 Backend Notes

Backend includes:

* 📮 `/api/parse-task` for Gemini prompt handling
* 🧾 `/api/tasks` to store, edit, and delete user tasks
* 🔑 JWT Auth or Firebase Auth (pluggable)
* 💾 MySQL schema: `users`, `tasks`, `subtasks`, `history`

---

## 📲 Tested On

* ✅ Android Studio Emulator (Pixel 5 - API 34)
* ⏳ iOS testing in progress

---

## 🚧 Roadmap / Next Features

* [ ] 📅 Drag-and-drop calendar
* [ ] 🤝 Task sharing & collaboration
* [ ] 💬 In-app AI chat assistant
* [ ] 🧠 On-device AI fallback (Gemini Nano)
* [ ] 💳 Subscriptions for premium AI features

---

## 🤖 Built with AI

This entire project was created with **AI tools**, not by hand.
I used:

* `Curser AI` for full-stack generation
* `ChatGPT` to understand and debug code
* `Gemini API` to power the smart features

> My focus was to **learn through implementation**, not manually write every line.
> I now understand full-stack app structure, AI integration, REST APIs, backend logic, and mobile deployment.

---

## 📸 Preview (Add screenshots here)

| Home Screen   | AI Suggestion | Weekly Report |
| ------------- | ------------- | ------------- |
| *(add image)* | *(add image)* | *(add image)* |

---

## 📜 License

**MIT License** — © 2025 \[Your Name]

---

### 🙌 Let’s connect if you’re interested in AI + apps!

```

---

Would you like me to:
- Convert this into a GitHub README with screenshots?
- Auto-generate `package.json`, `geminiAPI.js`, or folder structure?
- Write your backend README next?

Let me know — I’m ready to help you package it all up professionally.
```
