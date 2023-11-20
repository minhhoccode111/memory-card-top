/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
const Gameboard = ({ playTurn, currentPokemonList }) => {
  return (
    <main className="flex-1 grid-custom mt-8 mb-36 gap-4 overflow-y-auto p-1 overflow-x-hidden">
      {currentPokemonList.map((item) => (
        <Tilt
          key={item.id}
          className="aspect-3/4 p-2 rounded-2xl sm:p-3 md:p-4 bg-darkFade"
          glareEnable={true}
          glareMaxOpacity={0.6}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="16px"
        >
          <button
            onClick={() => {
              playTurn(item.id);
            }}
            className="flex flex-col justify-between w-full h-full rounded-2xl"
            type="button"
          >
            <img
              src={item.imageLink}
              alt={"An image of " + item.name}
              className="block w-full"
            />
            <p className="capitalize bg-transparent text-white w-full whitespace-nowrap overflow-x-auto">
              {item.name}
            </p>
          </button>
        </Tilt>
      ))}
    </main>
  );
};

export default Gameboard;
