import { useState } from "react";
import { VscSend } from "react-icons/vsc";
import { MessageBox } from "./MessageBox";

const dataSample = [
  {
    id: 1,
    message: "Hello",
    sender: "user",
  },
  {
    id: 2,
    message: "Hi",
    sender: "bot",
  },
  {
    id: 3,
    message: "How are you?",
    sender: "user",
  },
  {
    id: 4,
    message: "I'm fine",
    sender: "bot",
  },
];

export default function ChatBox() {
  const [Chat, setChat] = useState<typeof dataSample>(dataSample);
  const [message, setMessage] = useState("");

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (message === "") return;
    setChat([...Chat, { id: Chat.length + 1, message, sender: "user" }]);
    setMessage("");

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = getBotResponse();
      setChat((prevChat) => [
        ...prevChat,
        { id: prevChat.length + 1, message: botResponse, sender: "bot" },
      ]);
    }, 1000);
  };

  const getBotResponse = () => {
    const responses = ["Hello!", "How can I help you?", "Goodbye!"];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="border-r border-gray-500 dark:border-white/50 w-full h-full overflow-auto flex flex-col">
      <div className="flex flex-col gap-4 p-4 flex-1">
        {Chat.map((data) => (
          <MessageBox
            key={data.id}
            sender={data.sender}
            message={data.message}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 border-t border-gray-500 dark:border-white/50 pt-4 p-2">
        <form
          onSubmit={sendMessage}
          className="flex items-center rounded-md border border-gray-300 overflow-hidden">
          <input
            type="text"
            className="w-full p-2 dark:placeholder:text-white text-white placeholder:text-gray-800"
            placeholder="Type your message..."
            value={message}
            onChange={onChangeMessage}
          />
          <button type="submit" className="bg-primary h-full px-4 text-white">
            <VscSend className="size-5 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
