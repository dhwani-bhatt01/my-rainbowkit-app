//import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { Chain } from "@rainbow-me/rainbowkit";
import { configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// Rivera Testnet Mantle details
const riveraTestnetMantle: Chain = {
	id: 5000,
	name: "Rivera Testnet Mantle",
	network: "ETH",
	iconUrl: "path/to/your/icon.png", // Replace with the path to your network icon
	nativeCurrency: {
		decimals: 18,
		name: "Rivera Testnet Mantle",
		symbol: "ETH",
	},
	rpcUrls: {
		default: {
			http: ["https://node.rivera.money/"],
		},
		public: {
			http: ["https://node.rivera.money/"],
		},
	},
	// Add other necessary properties for your network
};

const { chains, publicClient } = configureChains(
	[riveraTestnetMantle],
	[
		alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
		publicProvider(),
	]
);

// const { connectors } = getDefaultWallets({
//   appName: 'My wagmi + RainbowKit App',
//   chains,
//   "projectId":"ee56c353983496c87480ff2ae841a933",
// })

// export const client = createConfig({
//   autoConnect: true,
//   connectors,
//   provider,
// })

export { chains };
