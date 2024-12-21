import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import Notification from "../notification/Notification";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

const Login = () => {
  const [avatat, setAvatar] = useState({
    file: null,
    url: ""
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.warn("hey, you")
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {username, email, password} = Object.fromEntries(formData);
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <div className="login">
      {/* Existing User Login Section */}
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign in</button>
        </form>
      </div>

      {/* Separator */}
      <div className="separator"></div>

      {/* New User Registration Section */}
      <div className="item">
        <h2>Create Account</h2>
          {/* Avatar Image */}
          <form onSubmit={handleRegister}>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Create new user</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
