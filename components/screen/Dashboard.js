"use client";

import React, { useState } from "react";
import styles from "@/styles/dashboard.module.css";
import Category from "@/components/Category";
import Widget, { WidgetItem } from "@/components/Widget";
import Image from "next/image";
import imageLoader from "@/functions/ImageLoader";
import Overlap from "@/components/Overlap";
import { AiFillCalendar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoIosVideocam } from "react-icons/io";

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("Overview");

  const map = [
    {
      items: [Overview],
      category: "Overview",
    },
    {
      items: [Targets, Meetings, Events],
      category: "Reminder",
    },
  ];

  const categories = [
    {
      title: "Overview",
    },
    {
      title: "Finance",
    },
    {
      title: "Reminder",
    },
  ];

  return (
    <div className="container">
      <Category
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      <div className={styles.container}>
        <div className={styles.outerBox}>
          {map
            ?.filter((i) => i?.category === activeCategory)
            ?.map((widgets, j) => (
              <div className={styles.grid} key={j}>
                {widgets?.items?.map((Item, i) => (
                  <Item key={i} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const Overview = () => {
  return (
    <div className={styles.upperContainer}>
      <div className={styles.updateBox}>
        <p className={styles.boxHeading}>Updates</p>
      </div>
      <div className={styles.analyticsBox}>
        <div className={styles.box}>
          <p className={styles.boxHeading}>Analytics</p>
        </div>
        <div className={styles.box}>{/* <Graph /> */}</div>
      </div>
    </div>
  );
};

const Targets = () => {
  const data = [
    {
      _id: 12345,
      title: "Task",
      email: "suryanshpsurya@gmail.com",
      desc: "New Task",
      createdAt: new Date(),
      remindAt: {
        date: new Date(),
        isTime: true,
      },
      items: [
        {
          _id: 0,
          text: "Subtask 1",
          complete: false,
        },
        {
          _id: 1,
          text: "Subtask 2",
          complete: false,
        },
      ],
      files: [],
      members: [
        {
          email: "suryanshpsurya@gmail.com",
          type: "View and Edit",
        },
      ],
    },
  ];
  return (
    <Widget heading="Targets">
      {data?.map((item, i) => {
        return (
          <WidgetItem key={item?._id || i}>
            <p className={styles.widgetTitle}>By CTO</p>
            <p className={styles.widgetTitle}>Complete this task</p>
            <div className="flex-rowJB">
              <p> with 23 others</p>
              <p>2 Subtask</p>
            </div>
            <div className="flex-rowJB">
              <p>3 Attachments</p>
              <button className={styles.widgetTargetOpenBtn}>Open</button>
            </div>
          </WidgetItem>
        );
      })}
    </Widget>
  );
};

const Meetings = () => {
  const data = [
    {
      _id: 0,
      title: "Meeting",
      desc: "New meeting",
      email: "suryanshpsurya@gmail.com",
      scheduleAt: new Date(2023, 2, 20),
      members: [
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
          name: "Suryansh",
          profession: "CEO",
        },
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
          name: "Suryansh",
          profession: "CEO",
        },
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
          name: "Suryansh",
          profession: "CEO",
        },
      ],
      type: "In person",
      location: "Delhi",
      link: "",
      vayapMeetId: null,
      remindAt: ["30min", "60min"],
    },
    {
      _id: 1,
      title: "Meeting",
      desc: "New meeting",
      email: "suryanshpsurya@gmail.com",
      scheduleAt: new Date(),
      members: [
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
          name: "Suryansh",
          profession: "CEO",
        },
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
          name: "Suryansh",
          profession: "CEO",
        },
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
          name: "Suryansh",
          profession: "CEO",
        },
      ],
      type: "In person",
      location: "Delhi",
      link: "",
      vayapMeetId: null,
      remindAt: ["30min", "60min"],
    },
  ];

  return (
    <Widget heading="Meetings">
      {data?.map((item, i) => {
        return (
          <WidgetItem key={item?._id || i}>
            <p className={styles.widgetTitle}>{item?.title}</p>
            <p className={styles.widgetDesc}>Lorem Ipsum</p>
            <div className={`flex-rowAC ${styles.iconTextGap}`}>
              <AiFillCalendar size={12} />
              <p className={styles.smallText}>Wed 26 Apr 12:00pm</p>
            </div>
            <button className={styles.widgetMeetingBtn}>Vayap Meet</button>
            <div className="flex-rowJB">
              <Overlap items={[0, 1, 2, 3, 4, 5]} />
              <div className={`flex-rowAC ${styles.iconTextGap}`}>
                <button className={`button-none`}>
                  <IoIosCall color="#fff" size={20} />
                </button>
                <button className={`button-none`}>
                  <IoIosVideocam color="#fff" size={20} />
                </button>
              </div>
            </div>
          </WidgetItem>
        );
      })}
    </Widget>
  );
};

const Events = () => {
  const data = [
    {
      _id: 0,
      email: "suryanshpsurya@gmail.com",
      title: "Wake Up",
      desc: "wake up at morning",
      createdAt: new Date(),
      scheduleAt: new Date(2022, 11, 27),
      startAt: new Date(2022, 11, 27),
      endAt: new Date(2022, 11, 28),
      genre: "Party",
      location: "Delhi, India",
      language: "English",
      type: "In Person",
      format: "",
      participant_type: "Paid",
      payout: {
        price: 100,
        curr: "INR",
      },
      discount: "10%",
      members: [
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
        },
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
        },
        {
          type: "Host",
          email: "suryanshpallavi@gmail.com",
        },
        {
          type: "Starring",
          email: "suryanshpallavi@gmail.com",
        },
        {
          type: "Starring",
          email: "suryanshpallavi@gmail.com",
        },
        {
          type: "Starring",
          email: "suryanshpallavi@gmail.com",
        },
      ],
    },
  ];

  return (
    <Widget heading="Events">
      {data?.map((item, i) => {
        return (
          <WidgetItem
            key={item?._id || i}
            className={`flex-rowAC ${styles.imageTextGap}`}
          >
            <Image
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwum?ver=6aed"
              loader={imageLoader}
              alt=""
              width={93}
              height={93}
              className={styles.eventImage}
            />

            <div className={styles.eventContent}>
              <p className={styles.widgetTitle}> {item?.title}</p>
              <p className={styles.widgetDesc}> {item?.desc}</p>
              <div className={`flex-rowAC ${styles.iconTextGap}`}>
                <AiFillCalendar size={12} />
                <p className={styles.smallText}>Wed 26 Apr 12:00pm</p>
              </div>
              <div className={`flex-rowAC ${styles.iconTextGap}`}>
                <FaLocationDot size={12} />
                <p className={styles.smallText}>Delhi, India</p>
              </div>
              <Overlap items={[0, 1, 2, 3, 4, 5]} />
            </div>
          </WidgetItem>
        );
      })}
    </Widget>
  );
};
