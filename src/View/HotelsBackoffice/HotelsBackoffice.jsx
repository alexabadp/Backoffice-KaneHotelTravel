import React from "react";
import BackOfficeHotels from "../../components/BackOffice/BackOfficeHotels/BackOfficeHotels";
import BackOfficeNavBar from "../../components/BackOffice/BackOfficeNavBar/BackOfficeNavBar";
import styles from "./HotelsBackoffice.module.css";

const HotelsBackoffice = () => {
  return (
    <div className={styles.hotelsBackofficeContainer}>
      <BackOfficeNavBar />
      <BackOfficeHotels />
    </div>
  );
};

export default HotelsBackoffice;
