import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex gap-4 p-4 rounded-lg",
        role === "user" ? "bg-muted/50" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          role === "user" ? "bg-primary" : "bg-accent"
        )}
      >
        {role === "user" ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-accent-foreground" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium text-foreground">
          {role === "user" ? "You" : "Assistant"}
        </p>
        <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </div>
    </div>
  );
};
