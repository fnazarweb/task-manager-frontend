import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleOnWidthChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleOnWidthChange);
    return () => {
      window.removeEventListener("resize", handleOnWidthChange);
    };
  }, []);

  return width;
};
