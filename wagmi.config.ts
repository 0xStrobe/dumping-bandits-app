import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "hooks/useDumpingBandits.ts",
  contracts: [],
  plugins: [
    foundry({
      artifacts: "foundry-artifacts/",
    }),
    react(),
  ],
});
