// src/hooks/useParallax.js
import { useEffect, useState } from "react";

const useParallax = (speed) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return offset;
};

export default useParallax;
