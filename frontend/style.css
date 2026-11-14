const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(sender, message) {
  const p = document.createElement("p");
  p.textContent = sender + ": " + message;
  p.style.marginBottom = "12px";
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const message = userInput.value.trim();

  if (message === "") {
    return;
  }

  addMessage("YOU", message);
  userInput.value = "";

  setTimeout(() => {
    addMessage("JARVIS", "Your message received. How can I help you?");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
