const Rules = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 cols col-start-4">
        <div className="py-6 text-left max-w-2xl mx-0">
          <div className="mb-8">
            <div className="mb-8 mt-8">
              <p className="mb-2 text-4xl text-brand-green">
                WELCOME WELCOME WELCOME
              </p>
              <p className="mb-2 text-lg text-gray-200 lowercase">
                Now's your chance! You can finally experience what its like to
                be a member of the notorious Dumping Bandits.
              </p>
              <p className="mb-2 text-lg text-gray-200 lowercase">
                But, don't be confused, not everyone wins. It's much more likely
                that you will relive the experience of being dumped on. Over and
                over and over again, for as many rounds as you play.
              </p>
            </div>
            <div className="mb-8">
              <p className="mb-2 text-2xl text-brand-green">
                THE RULES ARE SIMPLE
              </p>
              <p className="mb-2 text-lg text-gray-200">
                Dumping bandits is a simple raffle game with 0 to 3 winners.
              </p>
              <ul className="pl-4">
                <li className="mb-2 text-lg text-gray-200 lowercase list-disc">
                  a new round starts every 15 minutes.
                </li>
                <li className="mb-2 text-lg text-gray-200 lowercase list-disc">
                  It costs 10 Canto to enter a round
                </li>
                <li></li>
                <li className="mb-2 text-lg text-gray-200 lowercase list-disc">
                  There's no minimum number of players and no maximum.
                </li>
              </ul>
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
