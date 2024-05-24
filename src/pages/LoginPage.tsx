import { useEffect, useState } from "react";
import GoogleSignIn from "../components/auth/GoogleSignIn";

export default function LoginPage() {
  const subtext = [
    "Make dinner reservations for 5 at Ferdinando's.",
    "Toss out all the expired fruit.",
    "Buy tickets for the 2/22 Daft Punk concert.",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setActiveIndex((activeIndex) => (activeIndex + 1) % subtext.length);
        setIsVisible(true)
      }, 500);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-[64px] font-bold ">Taskify</p>
      <p className={`text-[28px] transition-all duration-500 ease-in-out ${isVisible? "transform translate-y-0 opacity-100" : "transform translate-y-2 opacity-0"}`}>
        {subtext[activeIndex]}
      </p>
      <p className="text-[24px] text-gray-800 mb-2">Organize your life, one task at a time.</p>
      <GoogleSignIn />
    </div>
  );
}
