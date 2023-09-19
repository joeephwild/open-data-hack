import { main, plant } from "@/assests/images";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainNav />

      {/** main section */}
      <Hero />
    </div>
  );
}
