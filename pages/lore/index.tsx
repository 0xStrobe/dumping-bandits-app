import Image from "next/image";
import Layout from "../../components/layout";

const Lore = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 cols">
        <p className="mb-6 text-base text-gray-200">
          There were 3 of them. Sisyphus, considered by some to be the leader.
          Nani, pulling the strings behind the scenes. And Brent - the dog that
          the other two somehow manage to take the blame for their nefarious
          dumping.
        </p>
        <div className="flex gap-6">
          <div className="relative shadow-2xl w-full max-w-[230px] rounded-lg h-80 border-[0.5px] overflow-hidden border-gray-200/30">
            <Image
              src="/images/sis.png"
              fill
              alt="sisyphus"
              className="object-contain"
            />
          </div>
          <div className="relative shadow-2xl w-full max-w-[230px] rounded-lg h-80 border-[0.5px] overflow-hidden border-gray-200/30">
            <Image
              src="/images/nani.png"
              fill
              alt="nani"
              className="object-contain"
            />
          </div>
          <div className="relative shadow-2xl w-full max-w-[230px] rounded-lg h-80 border-[0.5px] overflow-hidden border-gray-200/30">
            <Image
              src="/images/brent.png"
              fill
              alt="brent"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="col-span-4 col-start-9 ">
        <p className="mb-6 text-base text-gray-200">
          And then there is, well, you. The one who crossed the scary bridge in
          search of newfound wealth. You bought the top, and then brent “went
          out to lunch” (dumped on you)
        </p>
        <div className="flex justify-end gap-6">
          <div className="relative shadow-2xl w-full max-w-[230px] rounded-lg h-80 border-[0.5px] overflow-hidden border-gray-200/30">
            <Image
              src="/images/sis.png"
              fill
              alt="sisyphus"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lore;

Lore.getLayout = function getLayout(rules) {
  return <Layout>{rules}</Layout>;
};
