import React, { useState, useEffect } from "react";

const SmallClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const dateString = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="fixed bottom-4 right-4 bg-indigo-600 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 text-white rounded-md px-3 py-2 shadow-md font-mono select-none text-center w-32 transition-colors">
      <div className="text-xl font-semibold">{timeString}</div>
      <div className="text-xs tracking-wide">{dateString}</div>
    </div>
  );
};

export default SmallClock;
