const Rules = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 cols">
        <div className="py-6 text-left">
          <p className="mb-2 text-lg text-gray-200">
            It costs 10 CANTO to play, and there is a max 100 players per round
          </p>
          <p className="mb-2 text-lg text-gray-200">
            When the round starts, you will be assigned a role of Sisyphus,
            Nani, Brent, or Wojak at random
          </p>
          <p className="mb-2 text-lg text-gray-200">
            There is 1 Sisyphus, 1 Nani, 1 Brant, and everyone else are Wojaks
          </p>
          <p className="mb-2 text-lg text-gray-200">Sisyphus gets 40%</p>
          <p className="mb-2 text-lg text-gray-200">Nani gets 25%</p>
          <p className="mb-2 text-lg text-gray-200">Brent gets 15%</p>
          <p className="mb-2 text-lg text-gray-200">Wojak gets 0%</p>
          <p className="mb-2 text-lg text-gray-200">
            The last 20% is burnt, to grease the palms of the Canto Cartel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
