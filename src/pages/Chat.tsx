import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ChatWindow } from "@/components/chat/ChatWindow";

const Chat = () => {
  const [chatKey, setChatKey] = useState(0);

  const handleNewChat = () => {
    setChatKey((prev) => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar onNewChat={handleNewChat} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-4xl mx-auto">
          <ChatWindow key={chatKey} />
        </div>
      </main>
    </div>
  );
};

export default Chat;
