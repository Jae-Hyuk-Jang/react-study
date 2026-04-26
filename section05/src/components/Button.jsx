const Button = ({ children, text, color = "black" }) => {
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} {children}
    </button>
  );
};

export default Button;
