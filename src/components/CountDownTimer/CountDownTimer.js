import { useState, useEffect } from "react";

const CountDownTimer = () => {
  const countDownDate = new Date("Oct 26, 2021 22:00:0").getTime();
  const [result, setResult] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let now = new Date().getTime();
      let dif = countDownDate - now;
      setDifference(dif);
    }, 1000);
  });

  useEffect(() => {
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setResult({ days, hours, minutes, seconds });
    if (difference <= 0) {
      setResult({ days: -1, hours: -1, minutes: -1, seconds: -1 });
    }
  }, [difference]);

  return result;
};

export default CountDownTimer;
