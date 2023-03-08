import BackOfficeHotelDetail from "../../components/BackOffice/BackOfficeHotelDetail/BackOfficeHotelDetail";
import BackOfficeNavBarDetails from "../../components/BackOffice/BackOfficeNavBarDetails/BackOfficeNavBarDetails";
import styles from "./HotelDetailBackoffice.module.css";

const HotelDetailBackoffice = () => {
  return (
    <div className={styles.hotelsBackofficeContainer}>
      <BackOfficeNavBarDetails />
      <BackOfficeHotelDetail />
    </div>
  );
};

export default HotelDetailBackoffice;
