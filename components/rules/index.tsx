const Rules = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 cols">
        <div className="py-6 text-left">
          <div className="mb-8">
            <div className="mb-8">
              <p className="mb-2 text-lg text-gray-200">THIS IS YOUR CHANCE.</p>
              <p className="mb-2 text-lg text-gray-200 lowercase">
                you can experience what its like to be a member of the notorious
                Dumping Bandits. But, don't be confused, not everyone wins. It's
                much more likely that you will relive the experience of being
                dumped on. Over and over and over again, for as many rounds as
                you play.
              </p>
            </div>
            <div className="mb-8">
              <p className="mb-2 text-lg text-gray-200">HOW IT WORKS</p>
              <p className="mb-2 text-lg text-gray-200 lowercase">
                its simple. a new round starts every 15 minutes. The only
                requirement is that there are at least 100 players. Oh and you
                can only enter once per wallet. If there are 100 players, the
                game will execute and you will be assigned your role
              </p>
            </div>
          </div>
          <div className="mb-8">
            <p className="mb-2 text-lg text-gray-200">ROLES:</p>
            <ul className="pl-3 mb-6">
              <li className="mb-2 text-lg text-gray-200 lowercase">
                Sisyphus – always the first to accumulate. so when they dump,
                they make the most.
              </li>
              <li className="mb-2 text-lg text-gray-200 lowercase">
                Nani – working behind the scenes, always follows Sisy. Makes the
                second most.
              </li>
              <li className="mb-2 text-lg text-gray-200 lowercase">
                Brent – the third wheel, always buys last but manages to get
                blamed for the bandit's shenanigans.
              </li>
              <li className="mb-2 text-lg text-gray-200 lowercase">
                Wojak – The dumping victim, gets 0% of the total dumped amount.
              </li>
            </ul>
          </div>
          <p className="mb-2 text-lg text-gray-200">100 players per round</p>
          <p className="mb-2 text-lg text-gray-200">
            There are only 3 dumping bandits — Sisyphus, Nani, and Brent
          </p>
          <p className="mb-2 text-lg text-gray-200">
            Everyone else gets dumped on
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
