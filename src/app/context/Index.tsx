"use client";
import {
  DataverseConnector,
  SYSTEM_CALL,
  WALLET,
} from "@dataverse/dataverse-connector";
import { useRouter } from "next/navigation";
import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { RESOURCE } from "@dataverse/dataverse-connector";

interface ContractChildren {
  children: React.ReactNode;
}

interface ContractContextTypes {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  playerOpen: boolean;
  setPlayerOpen: Dispatch<SetStateAction<boolean>>;
  selectedPlay: Podcast | Podcast[];
  setSelectedPlay: Dispatch<SetStateAction<Podcast | Podcast[]>>;
  wallet: string;
  setWallet: Dispatch<SetStateAction<string>>;
  checkuserCapability(): Promise<boolean | undefined>;
  accessCapablility(): Promise<string | undefined>;
  dataverseConnector: DataverseConnector | undefined;
  setDataverseConnector: Dispatch<
    SetStateAction<DataverseConnector | undefined>
  >;
  connectWalletWithMetamaskProvider: () => Promise<void>;
}

const ContractContext = createContext<ContractContextTypes | null>(null);

export const VerbalProvider = ({ children }: ContractChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedPlay, setSelectedPlay] = useState<Podcast | Podcast[]>([]);
  const [wallet, setWallet] = useState("");
  console.log(wallet);
  const [dataverseConnector, setDataverseConnector] =
    useState<DataverseConnector>();

  useEffect(() => {
    setDataverseConnector(new DataverseConnector());
  }, []);

  // ...
  useEffect(() => {
    const getLoggedinUser = async () => {
      if (dataverseConnector) {
        const res = await dataverseConnector?.getCurrentWallet();
        // ...
      }
    };
    getLoggedinUser();
  }, [wallet, dataverseConnector]); // add dataverseConnector as a dependency
  const router = useRouter();

  async function accessCapablility() {
    try {
      const res = await dataverseConnector?.runOS({
        method: SYSTEM_CALL.createCapability,
        params: {
          appId: "949a2e74-1299-4032-bba8-4eb0d6c831e7",
          resource: RESOURCE.CERAMIC,
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log("error with creating capability", error);
    }
  }

  async function checkuserCapability() {
    try {
      const res = await dataverseConnector?.runOS({
        method: SYSTEM_CALL.checkCapability,
        params: {
          appId: "949a2e74-1299-4032-bba8-4eb0d6c831e7",
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log("error check if user is authorised", error);
    }
  }

  const connectWalletWithMetamaskProvider = async () => {
    if (!dataverseConnector) return alert("problem");

    const provider = (window as any).ethereum;
    if (!provider) {
      console.error("Ethereum provider is not available");
      return;
    }
    const res = await dataverseConnector.connectWallet({
      wallet: WALLET.METAMASK,
      provider,
    });

    setWallet(res.address)

    const checkAuth = await checkuserCapability();
    if (!checkAuth) {
      const capability = await accessCapablility();
      console.log(capability);
    }

    if (wallet && checkAuth) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    const getLoggedinUser = async () => {
      const res = await dataverseConnector?.getCurrentWallet();
      console.log(res?.address);
      setWallet(res?.address || "");
    };
    getLoggedinUser();
  }, [wallet]);

  useEffect(() => {
    if (wallet) {
      router.push("/dashboard");
    }
  }, [wallet]);

  const value = {
    setIsOpen,
    isOpen,
    active,
    setActive,
    playerOpen,
    setPlayerOpen,
    selectedPlay,
    setSelectedPlay,
    wallet,
    setWallet,
    checkuserCapability,
    accessCapablility,
    dataverseConnector,
    setDataverseConnector,
    connectWalletWithMetamaskProvider,
  };

  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};

export const useVerbalContext = (): ContractContextTypes => {
  const context = useContext(ContractContext);

  if (context === null) {
    throw new Error(
      "useContractContext must be used within a TradeVerseProvider"
    );
  }

  return context;
};
