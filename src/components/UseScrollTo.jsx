import { useRef } from "react";

export const useScrollTo = () => {
  const ref = useRef(null);

  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { ref, scrollTo };
};