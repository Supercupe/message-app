import "./addUser.css";

const AddUser = () => {
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder="Username" name="username" />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <image src="./avatar.png" alt=""/>
                    <span>John Doe</span>
                    </div>
                    <button>Add to Friends</button>
                </div>
            </div>
    )
};

export default AddUser;