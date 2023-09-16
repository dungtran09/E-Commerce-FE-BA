import React, { useEffect, useState } from "react";

const useCounter = (increment) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (increment) {
      setCounter((counter) => counter + 1);
    } else {
      setCounter((counter) => counter - 1);
    }
  }, []);
  return counter;
};

export default useCounter;
