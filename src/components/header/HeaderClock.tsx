import { useEffect, useState } from "react";

const HeaderClock = () => {
  const getFormattedTime = () => {
    return new Date().toLocaleString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default HeaderClock;
