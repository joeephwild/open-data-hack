import { AiFillHome, AiFillRobot } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsFillMicFill, BsHeadset } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdGroups2, MdVideoLibrary } from "react-icons/md";

export const intro = [
  {
    title: "Learn in the Web 3 Era",
    color: "#008EFF",
    desc: "We harness the power of blockchain technology to secure your progress and certifications immutably.",
  },
  {
    title: "AI Personalized Learning",
    color: "#00AF54",
    desc: "Experience AI's magic as it adapts lessons to your pace and style, unlocking your true language learning potential.",
  },
  {
    title: "Community and Live sessions",
    color: "#E03616",
    desc: "Engage with fellow learners and experienced teachers in live sessions, discussions, and collaborative challenges.",
  },
];

const Tab2 = [
  {
    title: "Schedule",
    icon: FaRegCalendarAlt,
    active: "home",
    route: "/dashboard",
  },
  {
    title: "Create a Community",
    icon: MdGroups2,
    active: "ai",
    route: "/ai",
  },
  {
    title: "Upload Podcasts",
    icon: BsHeadset,
    active: "community",
    route: "/",
  },
  {
    title: "Go Live",
    icon: MdVideoLibrary,
    active: "podcast",
    route: "",
  },
];

const Tab = [
  {
    title: "Feed",
    icon: AiFillHome,
    active: "home",
    route: "/dashboard",
  },
  {
    title: "Inbox",
    icon: AiFillRobot,
    active: "Artificail Intelligence",
    route: "/ai",
  },
  {
    title: "Carts",
    icon: HiUserGroup,
    active: "community",
    route: "/community",
  },
  {
    title: "Notification",
    icon: BsFillMicFill,
    active: "podcast",
    route: "/podcast",
  },
  {
    title: "Notification",
    icon: IoNotificationsSharp,
    active: "notify",
    route: "",
  },
];

const Mentors = [
  {
    name: "John Smith",
    nickname: "Johnny",
    experience: "5 years",
    languages: ["English", "Spanish"],
    availability: ["08:00", "08:30", "09:00", "09:30", "10:00"],
    additionalInfo: "Specializes in conversational English.",
    profileImage:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImage: "https://example.com/john_smith_cover.jpg",
  },
  {
    name: "Maria Garcia",
    nickname: "Marie",
    experience: "8 years",
    languages: ["Spanish", "French"],
    availability: ["08:00", "08:30", "09:00", "09:30", "10:00"],
    additionalInfo:
      "Fluent in three languages and teaches with cultural insights.",
    profileImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImage:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Hiroshi Tanaka",
    nickname: "Hiro",
    experience: "10 years",
    languages: ["Japanese", "Chinese"],
    availability: ["08:00", "08:30", "09:00", "09:30", "10:00"],
    additionalInfo:
      "Former translator and skilled in simplifying complex grammar.",
    profileImage:
      "https://images.pexels.com/photos/3970083/pexels-photo-3970083.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImage: "https://example.com/hiroshi_tanaka_cover.jpg",
  },
  {
    name: "Elena Petrov",
    nickname: "Lena",
    experience: "6 years",
    languages: ["Russian", "German"],
    availability: ["08:00", "08:30", "09:00", "09:30", "10:00"],
    additionalInfo:
      "Focuses on practical language use and business communication.",
    profileImage:
      "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImage:
      "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Amir Khan",
    nickname: "Amir",
    experience: "4 years",
    languages: ["Arabic", "Urdu"],
    availability: ["08:00", "08:30", "09:00", "09:30", "10:00"],
    additionalInfo:
      "Teaches with a focus on regional dialects and cultural nuances.",
    profileImage:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImage: "https://example.com/amir_khan_cover.jpg",
  },
];

const MyLesson = [
  {
    course: "Korean Language",
    tutor: "Shin Lee",
    period: "15: 00 EST",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    course: "Spanish Language",
    tutor: "Rodriguez",
    period: "15: 00 EST",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    course: "Yoruba Language",
    tutor: "Tobiloba Adetola",
    period: "15: 00 EST",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Podcast = [
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6919954/pexels-photo-6919954.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6919954/pexels-photo-6919954.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Awesome Tech Talks",
    author: "Tech Enthusiast Productions",
    audio_file: "https://example.com/awesome_tech_talks_episode1.mp3",
    image:
      "https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const languageCommunity = [
  {
    name: "English",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 1200000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    name: "Mandarin Chinese",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 1100000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    name: "Spanish",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 460000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    name: "Hindi",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 600000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    name: "Arabic",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 310000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    name: "French",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 280000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    name: "Russian",
    image:
      "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    num_people: 260000000,
    coverImage:
      "https://images.pexels.com/photos/17899637/pexels-photo-17899637/free-photo-of-woman-wearing-red-sari-standing-on-rocks-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

export { Tab, MyLesson, Mentors, languageCommunity, Tab2, Podcast };
