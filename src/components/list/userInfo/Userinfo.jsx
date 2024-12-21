import "./userInfo.css";

const Userinfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="Avatar" />
                <h2>John Doe</h2>
            </div>
            <div id="icons">
                <img src="./more.png" alt="More options" />
                <img src="./video.png" alt="Video call" />
                <img src="./edit.png" alt="Edit profile" />
            </div>
        </div>
    );
};

export default Userinfo;
