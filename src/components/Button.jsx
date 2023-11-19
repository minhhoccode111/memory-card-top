/* eslint-disable react/prop-types */
const Button = ({ text, buttonOnClickCb }) => {
  return (
    <div>
      <button
        type="button"
        onClick={buttonOnClickCb}
        className="hover-shadow capitalize"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
