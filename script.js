document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const chatPopup = document.getElementById("chat-popup");
    const openChatbotButton = document.getElementById("open-chatbot");
    const closeChatbotButton = document.getElementById("close-chatbot");

    const botResponses = {
        "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
        "sucursal central": "Sucursal Central en Jr. Dos de mayo 1398",
        "sucursal norte": "Sucursal Norte en Puente Piedra 15121",
        "sucursal sur": "Sucursal Sur en Via Colectora Pillco Marca 126",
        "horarios": "De 9 de la mañana a 1 de la tarde y de 3 de la tarde a 7 de la noche",
        "numeros": "No se cuales son xd",
        "default": "Lo siento, no entiendo tu pregunta. Por favor, intenta de nuevo."
    };

    openChatbotButton.addEventListener("click", () => {
        chatPopup.style.display = "block";
    });

    closeChatbotButton.addEventListener("click", () => {
        chatPopup.style.display = "none";
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        addMessage(userMessage, "user-message", "user.png");

        const botMessage = getBotResponse(userMessage.toLowerCase());
        setTimeout(() => {
            addMessage(botMessage, "bot-message", "bot.png");
        }, 500);

        userInput.value = "";
    }

    function addMessage(message, className, imgSrc) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${className}`;
        
        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = className === "user-message" ? "User" : "Bot";
        
        const textElement = document.createElement("div");
        textElement.className = "message-text";
        textElement.textContent = message;
        
        if (className === "user-message") {
            messageElement.appendChild(textElement);
            messageElement.appendChild(imgElement);
        } else {
            messageElement.appendChild(imgElement);
            messageElement.appendChild(textElement);
        }
        
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        return botResponses[userMessage] || botResponses["default"];
    }

    document.getElementById("user-input").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
