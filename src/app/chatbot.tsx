'use client'

import { useEffect } from 'react'

const CHATBOT_CONFIG = {
  apiBase: 'http://localhost:5001',
  backendUrl: 'http://localhost:5000',
  chatToken: '41dcad8b-955b-48c6-823e-65218181019e',

  theme: {
    primaryColor: '#0066cc',
    secondaryColor: '#eef2ff',
    position: 'right',
    title: 'AI Chat Assistant',
    toggleText: 'AI Chat',
  },

  chat: {
    backgroundColor: '#ffffff',
    textColor: '#111827',
  },

  texts: {
    welcome: 'Welcome to TEST..! How can I assist you today?',
  },

  menu: {
    enabled: true,
    options: [
      { label: 'Know about products or services', value: 'products' },
      { label: 'Talk to our team / Schedule appointment', value: 'appointment' },
    ],
  },
} as const

const WIDGET_SCRIPT_ID = 'medicare-chatbot-widget'
const WIDGET_SRC = `${CHATBOT_CONFIG.backendUrl}/widget.js`

declare global {
  interface Window {
    chatbotConfig?: typeof CHATBOT_CONFIG
    __CHATBOT_WIDGET_LOADED__?: boolean
  }
}

function removeExistingWidget() {
  document
    .querySelectorAll(`script[src^="${WIDGET_SRC}"], #${WIDGET_SCRIPT_ID}`)
    .forEach((element) => element.remove())

  document
    .querySelectorAll(
      '.chatbot-window, .chatbot-toggle, #chatbot-style, #chatbot-fa, #csatFeedbackModal'
    )
    .forEach((element) => element.remove())

  delete window.__CHATBOT_WIDGET_LOADED__
}

export default function Chatbot() {
  useEffect(() => {
    removeExistingWidget()
    window.chatbotConfig = CHATBOT_CONFIG

    const script = document.createElement('script')
    script.id = WIDGET_SCRIPT_ID
    script.src = `${WIDGET_SRC}?v=medicare-two-options-${Date.now()}`
    script.async = true
    document.body.appendChild(script)

    return removeExistingWidget
  }, [])

  return null
}
