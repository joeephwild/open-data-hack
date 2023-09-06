import { AiFillHome, AiFillRobot } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsFillMicFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";

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
    active: "ai",
    route: "",
  },
  {
    title: "Carts",
    icon: HiUserGroup,
    active: "community",
    route: "",
  },
  {
    title: "Notification",
    icon: BsFillMicFill,
    active: "podcast",
    route: "",
  },
  {
    title: "Notification",
    icon: IoNotificationsSharp,
    active: "notify",
    route: "",
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
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    course: "Yoruba Language",
    tutor: "Tobiloba Adetola",
    period: "15: 00 EST",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export { Tab, MyLesson };
