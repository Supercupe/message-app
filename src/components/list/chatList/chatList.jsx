import React, { useState } from "react";
import "./chatList.css";
import AddUser from "../../addUser/addUser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="Search Icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <img
                    src={addMode ? "/minus.png" : "/plus.png"}
                    alt={addMode ? "Minus Icon" : "Plus Icon"}
                    className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            <div className="item">
                <img src="./avatar.png" alt=""/>
                <span>Hane Doe</span>
                <p>Heleo</p>
            </div>
            <div className="item">
                <img src="./avatar.png" alt=""/>
                <span>Hane Doe</span>
                <p>Heleo</p>
            </div>
            {addMode && <AddUser/>}        
        </div>
    );
};

export default ChatList;
