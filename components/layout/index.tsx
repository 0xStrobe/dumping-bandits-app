import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { GameContext } from "../../contexts/gameContext";

export default function Layout({ children }) {
  interface Page {
    name: string;
    href: string;
    match?: string;
  }

  const { roundId } = useContext(GameContext);

  const [pages, setPages] = useState<Page[]>([
    {
      name: "Play",
      href: `/round/${roundId}`,
      match: "/round",
    },
    {
      name: "Rules",
      href: "/rules",
    },
    {
      name: "Lore",
      href: "/lore",
    },
  ]);

  const router = useRouter();
  const [activePage, setActivePage] = useState<string>("Play");
  console.log(router.pathname);
  return (
    <div className="w-full min-h-screen app-gradient">
      <div className="w-full px-20 pt-6 pb-8">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <div className="relative mt-2 text-lg text-brand-green">
              DUMPING BANDITS
            </div>
          </Link>
          <ConnectButton />
        </div>

        <div className="flex gap-3">
          {pages.map((page: Page) => {
            return (
              <div key={page.name}>
                <div className="relative mt-2 text-lg text-brand-green">
                  <Link
                    href={page.href}
                    className="cursor-pointer relative z-20"
                  >
                    {page.name}
                  </Link>
                  {router.pathname === page.name ||
                  router.pathname.includes(page.match) ? (
                    <div className="absolute z-10 flex items-center justify-center w-6 h-4 rounded-full bg-brand-green/30 left-1 top-1.5 animate-pulse blur-sm">
                      <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                    </div>
                  ) : null}
                </div>
                <div
                  className={`h-0 ${activePage === page.name && "h-auto"}`}
                ></div>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
