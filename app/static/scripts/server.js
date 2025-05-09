const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Use your OpenRouter API Key here
const API_KEY =
  "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";

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions", // ✅ OpenRouter endpoint
      {
        model: "openai/gpt-3.5-turbo", // ✅ You can also try "anthropic/claude-3-haiku" (faster)
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
          "HTTP-Referer": "http://localhost:3000", // Replace with your frontend URL if deployed
          "X-Title": "My Chat App",
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(
      "Error from OpenRouter:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Something went wrong!" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
