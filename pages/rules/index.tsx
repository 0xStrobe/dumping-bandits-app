import Layout from "../../components/layout";

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
                Dumping bandits is a simple raffle game with 3 winners. Each
                ticket costs 10 CANTO. You can enter the raffle as many times as
                you want. The 3 winners are split up between:
              </p>
              <ul className="pl-4">
                <li className="mb-2 text-lg text-gray-200 lowercase list-disc">
                  Sisyphus - who receives 40% of the pot
                </li>
                <li className="mb-2 text-lg text-gray-200 lowercase list-disc">
                  Nani - who receives 25% of the pot
                </li>
                <li className="mb-2 text-lg text-gray-200 lowercase list-disc">
                  Brent - who receives 15% of the pot
                </li>
              </ul>
              <p className="mb-2 text-lg text-gray-200">
                The remaining 20% of the pot is kept by the Canto Cartel to fund
                their casino operations. The casino will be operational in V2,
                shortly after dumping bandits launch.
              </p>
              <p className="mb-2 text-lg text-gray-200">
                important note: all of the money stays within this casino. The
                devs do not take a cut of any of the winnings (or losings)
              </p>
              <p className="mb-2 text-2xl text-brand-green mt-6">MECHANICS</p>
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
        </div>
      </div>
    </div>
  );
};

export default Rules;

Rules.getLayout = function getLayout(rules) {
  return <Layout>{rules}</Layout>;
};
