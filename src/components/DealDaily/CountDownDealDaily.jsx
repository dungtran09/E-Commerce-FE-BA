import React, { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import ExpiredNotice from "./ExpiredNotice";

const CountDownDealDaily = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    const styles =
      "w-[30%] h-[60px] flex flex-col justify-center items-center bg-gray-100";
    return (
      <div className="flex justify-center gap-2 items-center text-center mt-8 mb-8">
        <div className={styles}>
          <h1 className="font-semibold text-lg">{days}</h1>
          <span>Days</span>
        </div>
        <div className={styles}>
          <h1 className="font-semibold text-lg">{hours}</h1>
          <span>Hours</span>
        </div>
        <div className={styles}>
          <h1 className="font-semibold text-lg">{minutes}</h1>
          <span>Mins</span>
        </div>
        <div className={styles}>
          <h1 className="font-semibold text-lg">{seconds}</h1>
          <span>Secs</span>
        </div>
      </div>
    );
  }
};

export default CountDownDealDaily;
