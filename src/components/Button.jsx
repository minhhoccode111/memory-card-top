const Button = ({ text, buttonOnClickCb }) => {
  return (
    <button type="button" onClick={buttonOnClickCb} className="hover-shadow">
      {text}
    </button>
  );
};

export default Button;
