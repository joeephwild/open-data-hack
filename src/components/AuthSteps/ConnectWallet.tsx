import { wallet } from "@/assests/images";
import Image from "next/image";
import React from "react";
import { DataverseConnector, WALLET } from "@dataverse/dataverse-connector";

const ConnectWallet = () => {
  const dataverse = new DataverseConnector();
  const connectWallet = async () => {
    try {
      const pkh = await dataverse?.connectWallet({
        provider: WALLET.METAMASK,
      });
      console.log(pkh);
    } catch (error) {
      console.log(error);
      alert("bad")
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={wallet}
        alt="wallet"
        className="w-[400px] h-[400px] object-cover"
      />
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-[40px] font-bold leading-normal">
          Connect Your Wallet
        </h1>
        <p className="text-[20px] w-[70%] font-semibold leading-normal text-[#CCCCCCAA]">
          Connect your preferred Web 3 wallet with just one click, earn tokens,
          NFT badges and unlock exclusive rewards as you progress in your
          language learning journey in our decentralized and secure ecosystem
        </p>
        <button
          onClick={connectWallet}
          className="bg-[#f70] w-[70%] py-[17px] rounded-[8px] text-[16px] font-bold"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
