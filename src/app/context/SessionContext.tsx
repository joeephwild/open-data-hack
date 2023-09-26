import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  LearningSessionAddress,
  LearningSession_Abi,
} from "@/constant/contractInfo";

// Define the structure of the Web3 context state
type SessionContextType = {
  sessionContract: ethers.Contract | null;
  scheduleSession: (
    mentorAddress: string,
    meetingLink: string,
    meetingTime: number,
    meetingAmount: number
  ) => Promise<boolean>;
  registerMentorPrice: (mentorAmount: number) => Promise<boolean>;
  fetchMentorPrice: (mentorAddress: string) => Promise<number | null>;
  cancelSession: (sessionId: number) => Promise<boolean>;
  acceptSession: (sessionId: number) => Promise<boolean>;
};

// Create the context with default values
const SessionContext = createContext<SessionContextType>({
  sessionContract: null,
  scheduleSession: async () => false,
  registerMentorPrice: async () => false,
  fetchMentorPrice: async () => null,
  cancelSession: async () => false,
  acceptSession: async () => false,
});

// Provider component to wrap around components that need access to the context
export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sessionContract, setSessionContract] =
    useState<ethers.Contract | null>(null);

  // Address and ABI definitions
  const SessionAddress = LearningSessionAddress;
  const SessionAbi = LearningSession_Abi;

  useEffect(() => {
    const connectToContract = async () => {
      try {
        //method for fetching provider shpould be changed
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const sessionContractInstance = new ethers.Contract(
          SessionAddress,
          SessionAbi,
          provider
        );
        return sessionContractInstance;
      } catch (err: any) {
        throw new Error("Failed to connect to contract: " + err.message);
      }
    };

    connectToContract()
      .then((contractInstance) => {
        setSessionContract(contractInstance);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const scheduleSession = async (
    mentorAddress: string,
    meetingLink: string,
    meetingTime: number,
    meetingAmount: number
  ): Promise<boolean> => {
    try {
      if (!sessionContract) throw new Error("Session contract not available");
      await sessionContract.scheduleSession(
        mentorAddress,
        meetingLink,
        meetingTime,
        { value: meetingAmount }
      );
      return true;
    } catch (err) {
      console.error("Error scheduling session: ", err);
      return false;
    }
  };

  const registerMentorPrice = async (
    mentorAmount: number
  ): Promise<boolean> => {
    try {
      if (!sessionContract) throw new Error("Session contract not available");
      await sessionContract.registerMentorPrice(mentorAmount);
      return true;
    } catch (err) {
      console.error("Error registering mentor price: ", err);
      return false;
    }
  };

  const fetchMentorPrice = async (
    mentorAddress: string
  ): Promise<number | null> => {
    try {
      if (!sessionContract) throw new Error("Session contract not available");
      const mentorPrice = await sessionContract.fetchMentorPrice(mentorAddress);
      return mentorPrice;
    } catch (err) {
      console.error("Error fetching mentor price: ", err);
      return null;
    }
  };

  const cancelSession = async (sessionId: number): Promise<boolean> => {
    try {
      if (!sessionContract) throw new Error("Session contract not available");
      await sessionContract.cancelSession(sessionId);
      return true;
    } catch (err) {
      console.error("Error canceling session: ", err);
      return false;
    }
  };

  const acceptSession = async (sessionId: number): Promise<boolean> => {
    try {
      if (!sessionContract) throw new Error("Session contract not available");
      await sessionContract.acceptSession(sessionId);
      return true;
    } catch (err) {
      console.error("Error accepting session: ", err);
      return false;
    }
  };

  return (
    <SessionContext.Provider
      value={{
        sessionContract: sessionContract,
        scheduleSession: scheduleSession,
        registerMentorPrice: registerMentorPrice,
        fetchMentorPrice: fetchMentorPrice,
        cancelSession: cancelSession,
        acceptSession: acceptSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
