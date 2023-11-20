/* eslint-disable react/prop-types */
import { Pokemon } from "./Icons";
const Title = ({ buttonOnClickCb }) => {
  return (
    <button type="button" title="Pokemon title" onClick={buttonOnClickCb}>
      <Pokemon />
    </button>
  );
};

export default Title;
