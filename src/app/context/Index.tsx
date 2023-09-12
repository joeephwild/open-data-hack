"use client";
import { useContext, createContext, useState } from "react";

interface ContractChildren {
  children: React.ReactNode;
}

interface ContractContextTypes {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ContractContext = createContext<ContractContextTypes | null>(null);

export const VerbalProvider = ({ children }: ContractChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    setIsOpen,
    isOpen,
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
