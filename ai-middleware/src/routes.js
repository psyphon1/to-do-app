const express = require('express');
   const { parseTask } = require('./geminiService');
   const router = express.Router();

router.post('/tasks/parse-ai', async (req, res) => {
  const { text } = req.body;
  const result = await parseTask(text);
  res.json(result);
});

module.exports = router;