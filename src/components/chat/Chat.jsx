import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello", own: true, time: "1 min ago" },
        { id: 2, text: "Hi there!", own: false, time: "1 min ago" },
    ]);

    const endRef = useRef(null);

    // Scroll to the latest message
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
    };

    const handleSend = () => {
        if (text.trim()) {
            setMessages((prev) => [
                ...prev,
                { id: prev.length + 1, text, own: true, time: "Just now" },
            ]);
            setText("");
        }
    };

    return (
        <div className="chat">
            {/* Top Section */}
            <div className="top">
                <div className="user">
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Last seen recently</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="Phone Icon" />
                    <img src="./video.png" alt="Video Icon" />
                    <img src="./info.png" alt="Info Icon" />
                </div>
            </div>

            {/* Center Section */}
            <div className="center">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.own ? "own" : ""}`}>
                        <div className="texts">
                            <p>{msg.text}</p>
                            <span>{msg.time}</span>
                        </div>
                    </div>
                ))}
                <div ref={endRef}></div>
            </div>

            {/* Bottom Section */}
            <div className="bottom">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        alt="Emoji Icon"
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    {open && (
                        <div className="picker">
                            <EmojiPicker onEmojiClick={handleEmoji} />
                        </div>
                    )}
                </div>
                <button className="sendButton" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
