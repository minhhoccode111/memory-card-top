/* eslint-disable react/prop-types */
const Title = ({ buttonOnClickCb }) => {
  return (
    <button type="button" onClick={buttonOnClickCb}>
      <h1 className="text-4xl">Unique Pokemon</h1>
    </button>
  );
};

export default Title;
