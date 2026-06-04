'use client'
import Script from 'next/script'

export default function Chatbot() {
  return (
    <>
      <Script id="chatbot-config" strategy="afterInteractive">
        {`window.chatbotConfig = {
  apiBase: "https://customer-services-bot-1.onrender.com",
  backendUrl: "https://customer-services-bot.onrender.com",
  chatToken: "41dcad8b-955b-48c6-823e-65218181019e",

  theme: {
    primaryColor: "#0066cc",
    secondaryColor: "#eef2ff",
    position: "right",
    title: "AI Chat Assistant",
    toggleText: "AI Chat"
  },

  chat: {
    backgroundColor: "#ffffff",
    textColor: "#111827"
  },

  texts: {
    welcome: "👋 Welcome to MediCare..! How can I assist you today?"
  },

  menu: {
    enabled: true,
    options: [{"label":"Know about products or services","value":"products"},{"label":"Talk to our team / Schedule appointment","value":"appointment"}]
  }
};`}
      </Script>
      <Script src="https://customer-services-bot.onrender.com/widget.js" strategy="afterInteractive" />
    </>
  )
}