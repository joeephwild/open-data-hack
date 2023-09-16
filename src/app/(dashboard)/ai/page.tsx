'use client'
import { auth, db } from "@/firebase";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { HiPaperAirplane } from 'react-icons/hi2'

interface ChatMessage {
  // id: string
  [key: string]: any
}

const AiChat = () => {
  const [chatHistory, setChatHistory] =  useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchChat = async () => {
      const user = auth.currentUser;
      const q = query(
        collection(db, "chatrooms"),
        where("userId", "==", user?.uid),
        orderBy("created_at")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let chat: ChatMessage[] = [];
        querySnapshot.forEach((doc) => {
          chat.push({ ...doc.data(), id: doc.id });
        });
        setChatHistory(chat);
      });

      return () => {
        unsubscribe();
      };
    };
    fetchChat();
  }, []);
  return (
    <div className="min-h-screen  flex my-[40px] mx-[111px]">
      <div className="relative border-2 w-full h-[80vh] pl-[39px] pt-[80px] pb-[40px] pr-[40px]">
        <div className="flex flex-col h-full items-center justify-center">
          <span>Verbal AI</span>
          <span>
            I`m here to help you with whatever Language you want to learn, send
            a message let`s start learning.
          </span>
        </div>
        <div className="absolute top-[90%] w-[90%]  h-[48px] flex items-center bg-[#fff] px-[16px] py-[14px]">
          <input
            placeholder="Enter message"
            className="w-full text-[#000] bg-transparent border-none outline-nonr focus:outline-none"
          />
          <HiPaperAirplane color="#A6A39D" size={32} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AiChat;
