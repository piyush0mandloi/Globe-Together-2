import React, { useEffect } from "react";
// import "toastify-js/src/toastify.css";

const Chatbot = () => {
  useEffect(() => {
    // Dynamically inject the required scripts
    const toastifyScript = document.createElement("script");
    toastifyScript.src =
      "https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js";
    toastifyScript.async = true;
    document.body.appendChild(toastifyScript);

    const botpressInjectScript = document.createElement("script");
    botpressInjectScript.src =
      "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    botpressInjectScript.async = true;
    document.body.appendChild(botpressInjectScript);

    const botpressConfigScript = document.createElement("script");
    botpressConfigScript.src =
      "https://files.bpcontent.cloud/2024/12/19/04/20241219042452-M2DM8JU7.js";
    botpressConfigScript.defer = true;
    document.body.appendChild(botpressConfigScript);

    window.botpressWebChat = {
      init: {
        botName: "My Custom Bot",
        botAvatarUrl: "https://via.placeholder.com/50", // Replace with your logo URL
        backgroundColor: "#f4f4f4",
        textColorOnBackground: "#333",
        textColor: "#444",
        customStylesheet: "https://example.com/custom-styles.css", // Optional custom CSS
        enableReset: true, // Adds a reset button
      },
    };

    // Event listeners for botpress
    const handleEvents = () => {
      if (window.botpress) {
        window.botpress.on("*", (event) => {
          Toastify({ text: `Event: ${event.type}` }).showToast();
        });

        window.botpress.on("webchat:ready", () => {
          Toastify({ text: "Webchat Ready" }).showToast();
        });

        window.botpress.on("webchat:opened", () => {
          Toastify({ text: "Webchat Opened" }).showToast();
        });

        window.botpress.on("webchat:closed", () => {
          Toastify({ text: "Webchat Closed" }).showToast();
        });

        window.botpress.on("conversation", (conversationId) => {
          Toastify({ text: `Conversation: ${conversationId}` }).showToast();
        });

        window.botpress.on("message", (message) => {
          Toastify({ text: `Message Received: ${message.id}` }).showToast();
        });

        window.botpress.on("messageSent", (message) => {
          Toastify({ text: `Message Sent: ${message}` }).showToast();
        });

        window.botpress.on("error", (error) => {
          Toastify({ text: `Error: ${error}` }).showToast();
        });

        window.botpress.on("webchatVisibility", (visibility) => {
          Toastify({ text: `Visibility: ${visibility}` }).showToast();
        });

        window.botpress.on("webchatConfig", () => {
          Toastify({ text: "Webchat Config" }).showToast();
        });

        window.botpress.on("customEvent", () => {
          Toastify({ text: "Received a custom event" }).showToast();
        });
      }
    };

    // Check if botpress is ready
    const interval = setInterval(() => {
      if (window.botpress) {
        handleEvents();
        clearInterval(interval);
      }
    }, 100);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(toastifyScript);
      document.body.removeChild(botpressInjectScript);
      document.body.removeChild(botpressConfigScript);
      clearInterval(interval);
    };
  }, []);

  return <div id="botpress-webchat-container"></div>;
};

export default Chatbot;
