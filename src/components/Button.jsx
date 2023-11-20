/* eslint-disable react/prop-types */
const Button = ({ text, buttonOnClickCb }) => {
  return (
    <div>
      <button
        type="button"
        title={
          "Button to play " + (text === "play" ? "" : "difficulty " + text)
        }
        onClick={buttonOnClickCb}
        className="hover-shadow capitalize rounded-lg px-4 py-2 text-light"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
