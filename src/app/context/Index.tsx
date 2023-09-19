"use client";
import { useContext, createContext, useState, Dispatch, SetStateAction } from "react";

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
  selectedPlay: Podcast | Podcast[]
  setSelectedPlay: Dispatch<SetStateAction<Podcast | Podcast[]>>
}

const ContractContext = createContext<ContractContextTypes | null>(null);

export const VerbalProvider = ({ children }: ContractChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedPlay, setSelectedPlay] = useState<Podcast | Podcast[]>([]);

  const value = {
    setIsOpen,
    isOpen,
    active,
    setActive,
    playerOpen,
    setPlayerOpen,
    selectedPlay,
    setSelectedPlay
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
