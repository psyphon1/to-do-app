---

```markdown

---

> ⚠️ **Status: Incomplete & Discontinued**  
This project is **currently not completed** and has been **abandoned**.  
I am no longer actively working on it. The repository remains public for learning/reference purposes.

---

## 🧠 Key Features (Planned / Partially Implemented)

✅ Natural language to structured task conversion  
✅ AI-generated subtasks & suggestions  
✅ Weekly productivity reports powered by Gemini  
✅ Voice-to-task input (🎙️ speak and add!)  
✅ Reminders & notifications  
✅ Clean light & dark UI modes  
✅ Cross-platform with Android Studio emulator testing

---

## 📌 Project Overview

> **Note:** This app was built entirely with **AI assistance** from tools like **ChatGPT, Curser AI, and Gemini API**.  
> I did **not write the code manually**, but I focused on:
> - Understanding frontend–backend architecture
> - Learning how AI APIs integrate with real-world apps
> - Designing database and task management structure
> - Running and testing with **Android Studio Emulator**

This was a **learning-through-AI project** to deeply explore how AI enhances productivity app development.

---

## 🛠️ Tech Stack

| Layer         | Technology                           |
|--------------|----------------------------------------|
| 📱 Frontend   | React Native (Expo)                  |
| 🧠 AI/ML      | Google Gemini API                    |
| 🛢️ Database   | MySQL                                |
| 🔐 Auth       | Firebase Auth / JWT                  |
| 🧪 Testing    | Android Studio Emulator              |
| ☁️ Backend    | Node.js (Express) / Python (FastAPI) |

---

## 📂 Project Structure

```

todo-ai-app-mobile/
├── assets/
├── components/
├── screens/
├── services/
│   └── geminiAPI.js
├── utils/
├── App.js
├── app.json
├── package.json
└── README.md

````

---

## 🔐 Gemini API Setup

1. Get your API key from: [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to `services/geminiAPI.js`

```js
const GEMINI_API_KEY = "your-api-key-here";
````

---

## 🧠 Example AI Prompt

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

## 📲 Tested On

* ✅ Android Studio Emulator (Pixel 5 - API 34)
* ❌ iOS (Not tested)

---

## 🚧 Roadmap / Future Scope (Paused)

* [ ] Calendar-based task view
* [ ] Drag-and-drop task manager
* [ ] AI Assistant Chat Interface
* [ ] Team collaboration features
* [ ] In-app billing / AI quota usage

---

## 🤖 AI-Generated Code Acknowledgment

All code in this repository was generated with the help of AI tools.
I focused entirely on:

* Understanding AI & backend integration
* Reviewing architecture and flow
* Experimenting with prompt design
* Testing UI in Android Studio Emulator

---

## ❌ Why the Project is Discontinued

Due to time constraints and shifting focus to other projects, I have **paused** development of this app.
I’ve kept the code public for:

* Educational purposes
* AI-integration examples
* UI/UX reference

---

## 📜 License

**MIT License** — © 2025 \Chinmay Duse

---

> 💬 Want to fork it and continue? Feel free!
> If you'd like help understanding the structure, prompts, or backend design, reach out via LinkedIn check My profile. 

```

---
```
