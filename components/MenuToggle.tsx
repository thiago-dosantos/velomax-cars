import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";

const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button className="z-[999999999] outline-none border-none cursor-pointer relative flex justify-center items-center w-[40px] h-[40px] rounded-[8px] bg-transparent" onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path 
        variants={{
          closed: { d: "M 2 8 L 20 8" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        style={{ fill: 'white' }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
