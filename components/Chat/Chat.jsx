import React from 'react'
import { BubbleChat } from 'flowise-embed-react'

const Chat = () => {
  return (
    <BubbleChat
        chatflowid="9b5b425c-aac7-420e-895e-a0edc21861c3"
        apiHost="https://flowise-hlzo.onrender.com"
        theme={{
            button: {
                backgroundColor: "#3B81F6",
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            },
            chatWindow: {
                welcomeMessage: "Hello! This is custom welcome message",
                backgroundColor: "#ffffff",
                height: 700,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#303235",
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#303235",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                    backgroundColor: "#3B81F6",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#3B81F6",
                }
            }
        }}
    />
  )
}

export default Chat