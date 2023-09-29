const Input = ({ type, label, className, size }) => {
  return (
    <div
      className={`${className ? className : ""} ${
        type === "checkbox" ? "me" : "input-container"
      }  ${size} flex`}
    >
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} />
    </div>
  );
};

export default Input;
