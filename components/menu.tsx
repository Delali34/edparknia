"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/.#contact" },
];

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileNavLinkProps {
  title: string;
  href: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href }) => {
  const handleClick = () => {
    // Close the menu when a link is clicked
    toggleMenu();
  };

  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl font-semibold uppercase text-black"
    >
      <Link href={href} onClick={handleClick}>
        {title}
      </Link>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-5">
        <div className="flex items-center gap-[1ch]">
          <Image src="/logo.jpeg" width={60} height={60} alt="" />
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-red-400 text-white p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <Image src="/logo.jpeg" width={60} height={60} alt="" />
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => (
                  <div className="overflow-hidden" key={index}>
                    <MobileNavLink title={link.title} href={link.href} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
function toggleMenu() {
  throw new Error("Function not implemented.");
}
