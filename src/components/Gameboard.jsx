/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
const Gameboard = ({ playTurn, currentPokemonList }) => {
  return (
    <main className="flex-1 grid items-center justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 mx-auto gap-4 overflow-y-auto">
      {currentPokemonList.map((item) => (
        <div key={item.id} className="">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="20px"
          >
            <button
              onClick={() => {
                playTurn(item.id);
              }}
              className="flex flex-col justify-between w-48 pt-4 bg-dark"
              type="button"
            >
              <img src={item.imageLink} alt={"An image of " + item.name} />
              <p className="capitalize bg-light text-darker p-4">{item.name}</p>
            </button>
          </Tilt>
        </div>
      ))}
    </main>
  );
};

export default Gameboard;
