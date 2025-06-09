   // src/geminiService.js

   // This is a mock. Replace with real Gemini API call if needed.
   exports.parseTask = async (text) => {
     // Simulate AI parsing
     return {
       title: "Submit report",
       due_date: "2025-06-14",
       time: "18:00",
       priority: "high",
       labels: ["work"],
       recurrence: null,
       suggested_subtasks: ["Write report", "Review draft", "Submit on portal"]
     };
   };