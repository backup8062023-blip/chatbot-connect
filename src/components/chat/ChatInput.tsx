import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

export const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-end gap-2 p-4 bg-muted/30 rounded-xl border border-border/50">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Assistant..."
          className="min-h-[44px] max-h-[200px] resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm"
          rows={1}
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim() || isLoading}
          className="flex-shrink-0 h-9 w-9 rounded-lg"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Press Enter to send, Shift + Enter for new line
      </p>
    </form>
  );
};
