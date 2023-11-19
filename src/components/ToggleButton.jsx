/* eslint-disable react/prop-types */
const ToggleButton = ({ text, isOpen, buttonOnClickCb }) => {
  return (
    <div>
      <button
        type="button"
        onClick={buttonOnClickCb}
        className={"hover-shadow"}
      >
        <span className="capitalize">{text}</span>
        {isOpen ? " is on" : " is off"}
      </button>
    </div>
  );
};

export default ToggleButton;
