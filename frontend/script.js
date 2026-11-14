
const API_KEY = "PASTE_YOUR_API_KEY_HERE";

async function ask() {
  const prompt = document.getElementById("prompt").value;
  const reply = document.getElementById("reply");
  const status = document.getElementById("status");
  const button = document.getElementById("sendBtn");

  if (!API_KEY || API_KEY === "PASTE_YOUR_API_KEY_HERE") {
    reply.innerText = "Please add your Gemini API Key.";
    return;
  }

  reply.innerText = "PROCESSING...";
  status.innerText = "CONNECTING...";
  button.disabled = true;

  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error?.message || "API Error: " + res.status
      );
    }

    const answer =
      data.candidates?.[0]?.content?.parts
        ?.map(part => part.text || "")
        .join("\n");

    if (!answer) {
      throw new Error("No response received.");
    }

    reply.innerText = answer;
    status.innerText = "✓ BRAIN ONLINE";
    status.style.color = "#00ff00";

  } catch (error) {
    reply.innerText = "ERROR: " + error.message;
    status.innerText = "CONNECTION FAILED";
    status.style.color = "red";

  } finally {
    button.disabled = false;
  }
}
  
