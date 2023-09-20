
import { Magic } from "magic-sdk"

// Initialize the Magic instance
export const magic = new Magic("pk_live_A7CCD29F3F73CD02", {
  network: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
    chainId: 11155111,
  },
})