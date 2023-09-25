import { main, plant } from "@/assests/images";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainNav />

      {/** main section */}
      {/* <PodcastPlayer podcast={podcastDemo} />
      <ConfirmBooking date="Sun, August 13" time="8:30pm" /> */}
      <Hero />
    </div>
  );
}
