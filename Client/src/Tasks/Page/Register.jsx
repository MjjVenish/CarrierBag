import React from "react";
import Input from "../components/Input";

const Register = () => {
  return (
    <form action="" className="register">
      <span>New to Carrier Bag Shop? Sign up here!</span>
      <Input type={"text"} label={"First Name:*"} size={"first-input"} />
      <Input type={"text"} label={"Last Name:*"} />
      <Input type={"email"} label={"Email:*"} />
      <Input type={"email"} label={"Confirm Email:*"} />
      <Input type={"password"} label={"Password:*"} />
      <Input type={"password"} label={"Confirm Password:*"} />
      <label htmlFor="" className="flex bus">
        Customer Type:
        <div className="radio">
          <label htmlFor="business">
            Business
            <input type="radio" id="business" value={"business"} />
          </label>
          <label htmlFor="personal">
            Personal
            <input type="radio" id="presonal" />
          </label>
        </div>
      </label>
      <Input type={"text"} label={"Company name:*"} />
      <Input
        type="checkbox"
        label={
          "To receive great offers and packaging tips, sign up to our newsletter"
        }
        size={"check"}
      />
      <div className="regi">
        <input type="submit" value={"Register"} />
      </div>
    </form>
  );
};

export default Register;
