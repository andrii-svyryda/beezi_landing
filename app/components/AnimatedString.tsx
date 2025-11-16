"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedStringProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  eraseSpeed?: number; // milliseconds per character
  writeSpeed?: number; // milliseconds per character
}

export default function AnimatedString({
  value,
  className = "",
  style = {},
  eraseSpeed = 20,
  writeSpeed = 30,
}: AnimatedStringProps) {
  const [displayedText, setDisplayedText] = useState(value);
  const previousValue = useRef(value);

  // Animate text change: erase then write
  useEffect(() => {
    if (value === previousValue.current) return;

    const oldText = previousValue.current;
    const newText = value;

    // Erase phase
    let eraseIndex = oldText.length;
    const eraseInterval = setInterval(() => {
      if (eraseIndex > 0) {
        setDisplayedText(oldText.substring(0, eraseIndex));
        eraseIndex--;
      } else {
        clearInterval(eraseInterval);

        // Write phase
        let writeIndex = 0;
        const writeInterval = setInterval(() => {
          if (writeIndex <= newText.length) {
            setDisplayedText(newText.substring(0, writeIndex));
            writeIndex++;
          } else {
            clearInterval(writeInterval);
            previousValue.current = newText;
          }
        }, writeSpeed);
      }
    }, eraseSpeed);

    return () => {
      clearInterval(eraseInterval);
    };
  }, [value, eraseSpeed, writeSpeed]);

  return (
    <span className={className} style={style}>
      {displayedText}
    </span>
  );
}
