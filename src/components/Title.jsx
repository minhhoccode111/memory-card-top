/* eslint-disable react/prop-types */
import { Pokemon } from "./Icons";
const Title = ({ buttonOnClickCb, type = "default" }) => {
  return (
    <button type="button" title="Pokemon title" onClick={buttonOnClickCb}>
      <Pokemon type={type} />
    </button>
  );
};

export default Title;
