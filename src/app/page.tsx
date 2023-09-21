import { main, plant } from "@/assests/images";
import Hero from "@/components/Hero";
import MainNav from "@/components/MainNav";
import { ConfirmBooking } from "@/components/Mentors";
// import { PodcastPlayer } from "@/components/Podcast";
import Image from "next/image";

export default function Home() {
  // const podcastDemo = {
  //   name: "The Boring cast",
  //   author: "Otaiki",
  //   audio_file: "",
  //   image:
  //     "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   podcast_length: 300,
  // };
  return (
    <div>
      <MainNav />

      {/** main section */}
      {/* <PodcastPlayer podcast={podcastDemo} /> */}
      <ConfirmBooking date="Sun, August 13" time="8:30pm" />
    </div>
  );
}
