"use client";

import React, { useState } from "react";
import styles from "@/styles/menu.module.css";

import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineHome,
  AiFillInfoCircle,
} from "react-icons/ai";

import {
  RiContactsFill,
  RiContactsLine,
  RiFunctionFill,
  RiFunctionLine,
} from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = () => {
  const pathname = usePathname();
  const [btnPos, setBtnPos] = useState(20);
  const [btnWidth, setBtnWidth] = useState(100);

  const buttons = [
    {
      link: "/",
      icon: AiFillHome,
      icondisabled: AiOutlineHome,
      title: "Dashboard",
    },
    {
      link: "/Service",
      icon: RiFunctionFill,
      icondisabled: RiFunctionLine,
      title: "Contacts",
    },
    {
      link: "/Contact",
      icon: RiContactsFill,
      icondisabled: RiContactsLine,
      title: "Co",
    },
    {
      link: "/About",
      icon: AiFillInfoCircle,
      icondisabled: AiOutlineInfoCircle,
      title: "Contacts",
    },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.menuBox}>
        {buttons?.map((item, i) => {
          const isActive = pathname === item?.link;
          return (
            <Link
              key={i}
              href={item?.link}
              className={isActive ? styles.menuLinkActive : styles.menuLink}
              onClick={(e) => {
                setBtnWidth(e?.target?.scrollWidth);
                setBtnPos(e?.target?.offsetLeft);
              }}
            >
              {item?.title}
            </Link>
          );
        })}
      </div>
      <div
        className={styles.menuActiveBtn}
        style={{
          transform: `translateX(${btnPos}px)`,
          width: `${btnWidth}px`,
        }}
      />
    </div>
  );
};

export default Menu;
