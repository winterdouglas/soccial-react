import { SVGProps } from "react";

const IconSend = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 1 10 12M21 1l-7 20-4-9M21 1 1 8l9 4"
      />
    </svg>
  );
};

export const Icons = {
  send: IconSend,
};

export type IconType = keyof typeof Icons;
