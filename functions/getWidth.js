import { useState, useEffect } from 'react';

export default function getWidth() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return width;
}