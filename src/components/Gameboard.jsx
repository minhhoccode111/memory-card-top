/* eslint-disable react/prop-types */
const Gameboard = ({ playTurn, currentPokemonList }) => {
  return (
    <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 mx-auto gap-4 overflow-y-auto">
      {currentPokemonList.map((item) => (
        <button
          onClick={() => playTurn(item.id)}
          key={item.id}
          className="flex flex-col w-48 h-56 bg-cyan-200 p-4"
          type="button"
        >
          <img src={item.imageLink} alt={"An image of " + item.name} />
          <p>{item.name}</p>
        </button>
      ))}
    </main>
  );
};

export default Gameboard;
