import React, { FormEvent, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            name="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
