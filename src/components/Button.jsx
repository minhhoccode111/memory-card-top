/* eslint-disable react/prop-types */
const Button = ({ text, buttonOnClickCb }) => {
  return (
    <div>
      <button
        type="button"
        onClick={buttonOnClickCb}
        className="hover-shadow capitalize rounded-lg sm:px-4 sm:py-2 px-2 py-1 text-light"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
