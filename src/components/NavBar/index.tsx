import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { Cross as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { INav } from "../../models/nav.model";
import { useIntl } from "react-intl";

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const intl = useIntl();
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const NAVS: INav[] = [
    {
      id: 0,
      name: intl.formatMessage({ id: "NAV.INTEGRATION" }),
      to: "/",
    },
    {
      id: 1,
      name: intl.formatMessage({ id: "NAV.CORE_PLATFORM" }),
      to: "/",
      subNav: [],
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "NAV.COMPANY" }),
      to: "/",
      subNav: [],
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "NAV.RESOURCES" }),
      to: "/",
      subNav: [],
    },
  ];

  return (
    <>
      <nav className="font-roboto font-normal text-[15px] text-white hidden md:flex">
        <ul className="list-none flex space-x-10 h-full">
          {NAVS?.map((nav) => {
            if (!nav.subNav) {
              return (
                <li key={nav?.id}>
                  <Link to={nav?.to}>{nav?.name}</Link>
                </li>
              );
            }

            return (
              <li className="relative group" key={nav?.id}>
                <div className="flex items-center space-x-1">
                  <Link to={nav?.to}>{nav?.name}</Link>
                  <BsChevronDown className="text-xs text-white" />
                </div>
                <ul className="list-none absolute top-10 shadow-lg hidden group-hover:block">
                  {nav?.subNav?.map((subNav) => {
                    return (
                      <li key={subNav?.id}>
                        <Link to={subNav?.to}>{subNav?.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="font-[roboto] flex justify-end items-center w-full lg:hidden">
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[7rem] p-5 pt-0 border-b border-b-white/20 bg-[#0E0A0F] flex justify-center z-[100]"
            >
              <ul className="flex flex-col space-y-8 text-center">
                {NAVS?.map((item, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={item.id}
                    className="w-full p-[0.08rem] rounded-xl"
                  >
                    <Link
                      className="text-white text-xl hover:text-[#9966FF] text-center transition duration-300 flex items-center space-x-3"
                      to={item.to}
                    >
                      <p>{item.name}</p>
                      {item.subNav && (
                        <BsChevronDown className="text-xs text-white" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
