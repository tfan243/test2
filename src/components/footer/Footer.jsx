import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Gummy. All rights reserved.</div>
      <div className={styles.social}>
        <a href="https://www.facebook.com/" target="_blank">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="gummy"
          />
        </a>

        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="gummy"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="gummy"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="gummy"
        />
      </div>
    </div>
  );
};

export default Footer;
