import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form action="" className="login">
      <span>Already registered? You can login here!</span>
      <Input type={"email"} label={"Email:*"} size={"first-input"} />
      <Input type={"password"} label={"Password:*"} />
      <Input
        type={"checkbox"}
        label={"Remember my details"}
        className={"rember"}
      />
      <div className="submit ">
        <Link>Forgotten Password?</Link>
        <input type="submit" value={"Login"} />
      </div>
    </form>
  );
};

export default Login;
