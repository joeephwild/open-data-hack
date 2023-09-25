import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { AudioSpaceAddress, AudioSpace_Abi } from "@/constant/contractInfo";

// Define the structure of the Web3 context state
type Web3ContextType = {};

// Create the context with default values
const Web3Context = createContext<Web3ContextType>({});

// Custom hook to use the Web3 context
export const useWeb3 = () => useContext(Web3Context);

// Provider component to wrap around components that need access to the context
export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
//Auidspace contract address
const AudioAddress = AudioSpaceAddress
const AudioAbi = AudioSpace_Abi


  return <Web3Context.Provider value={{}}>{children}</Web3Context.Provider>;
};
