"use client";
import { logo, avatar } from "@/assests/images";
import { Tab } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { DataverseConnector, WALLET } from "@dataverse/dataverse-connector";
import { useVerbalContext } from "@/app/context/Index";

const dataverseConnector = new DataverseConnector();

const MainNav = () => {
  const router = useRouter();
  const { wallet, setWallet, checkuserCapability, accessCapablility } =
    useVerbalContext();

  // const connectWalletWithMetamaskProvider = async () => {
  //   if (!dataverseConnector) return alert("problem");

  //   const provider = (window as any).ethereum;
  //   if (!provider) {
  //     console.error("Ethereum provider is not available");
  //     return;
  //   }
  //   const res = await dataverseConnector.connectWallet({
  //     wallet: WALLET.METAMASK,
  //     provider,
  //   });

  //   if (res.address) {
  //     const capability = await accessCapablility();
  //     console.log(capability);
  //   } else if (res?.address) {
  //     router.push("/dashboard");
  //   }
  //   // if (res.address) {
  //   //   const checkAuth = await checkuserCapability();
  //   // }
  // };

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
  
    if (res.address) {
      const checkAuth = await checkuserCapability();
      if (!checkAuth) {
        const capability = await accessCapablility();
        console.log(capability);
      } else {
        router.push("/dashboard");
      }
    }
  };
  return (
    <div className="flex items-center sticky border-b-2 w-full justify-between px-[40px] py-[10px]">
      <div className="flex items-center space-x-[40px]">
        <Image
          src={logo}
          alt="logo"
          className="w-[132.075px] cursor-pointer h-[40px] object-cover"
        />

        <div className="flex items-center space-x-6">
          {Tab.map((item, i) => (
            <span key={i} className="text-[16px] font-bold cursor-pointer">
              {item.title}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-7">
        <button
          onClick={connectWalletWithMetamaskProvider}
          className="bg-[#f70] px-[56px] py-[16px] rounded-[8px] text-[16px] font-bold"
        >
          Connect Wallet
        </button>
      </div>
      {/* <div onClick={() => router.push("/profile")} className="ml-auto flex">
        <Image
          src={avatar}
          alt="avatar"
          width={65}
          height={65}
          className="rounded-full"
        />
      </div> */}
    </div>
  );
};

export default MainNav;
