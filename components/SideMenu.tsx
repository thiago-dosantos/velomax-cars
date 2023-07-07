'use client';
import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "@/components/MenuToggle";
import { Navigation } from "@/components/Navigation";

const sidebar = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="fixed top-0 left-[0] bottom-0 w-[60%] backdrop-blur-sm bg-black/30 items-center" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
