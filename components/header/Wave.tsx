import { memo, MouseEventHandler } from "react";

type TonMapType = {
  [index: number]: string;
};

const toneMap: TonMapType = {
  0: "👋",
  1: "👋🏻",
  2: "👋🏼",
  3: "👋🏽",
  4: "👋🏾",
  5: "👋🏿",
};

export type WaveProps = {
  options: { animate: boolean; tone: keyof typeof toneMap };
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Wave({ options, onClick }: WaveProps) {
  return (
    <button
      role="img"
      aria-label="hand waving"
      className={options.animate ? "text-5xl wave" : "text-5xl"}
      onClick={onClick}
    >
      {toneMap[options.tone || 0]}
    </button>
  );
}

export default memo(Wave);
