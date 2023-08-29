"use client";

import React, { useState } from "react";
import styles from "@/styles/menu.module.css";

const Category = ({ categories, activeCategory, setActiveCategory }) => {
  const [btnPos, setBtnPos] = useState(0);

  return (
    <div className={styles.category}>
      <div className={styles.categoryBox}>
        <div
          className={styles.categorySwitchBtn}
          style={{
            transform: `translateX(.5rem) translateY(${btnPos}px)`,
          }}
        />
        {categories?.map((item, i) => {
          return (
            <Button
              key={i}
              item={item}
              setBtnPos={setBtnPos}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

const Button = ({ item, setBtnPos, setActiveCategory, activeCategory }) => {
  return (
    <>
      <button
        onClick={(e) => {
          setBtnPos(e?.target?.offsetTop - 5);
          setActiveCategory(item?.title);
        }}
        className={styles.categoryItem}
        style={
          activeCategory === item?.title
            ? {
                color: "#fff",
              }
            : {
                color: "#000",
              }
        }
      >
        {/* <Image
          src={
            isActive
              ? `/Svg/${item?.icon}.svg`
              : `/Svg/${item.icondisabled}.svg`
          }
          alt=""
          width={25}
          height={25}
        /> */}
        {item?.title}
      </button>
    </>
  );
};

export default Category;
