"use client";

import { useCallback, useMemo, useState } from "react";
import Wave, { WaveProps } from "./Wave";

export function WaveGreeting() {
  const [waveIndex, setWaveIndex] = useState(0);
  const handleWaveClick = useCallback(() => {
    setWaveIndex((i) => {
      return i === 5 ? 0 : i + 1;
    });
  }, []);

  const options: WaveProps["options"] = useMemo(() => {
    return {
      animate: true,
      tone: waveIndex,
    };
  }, [waveIndex]);

  return (
    <div className="flex mb-4">
      <h1 className="text-5xl">Hi, I am Beibei Yang</h1>
      <Wave onClick={handleWaveClick} options={options} />
    </div>
  );
}
