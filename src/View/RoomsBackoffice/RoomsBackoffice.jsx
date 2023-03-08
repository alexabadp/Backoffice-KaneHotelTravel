import BackOfficeNavBarDetails from "../../components/BackOffice/BackOfficeNavBarDetails/BackOfficeNavBarDetails";
import BackOfficeRooms from "../../components/BackOffice/BackOfficeRooms/BackOfficeRooms";
import styles from "./RoomsBackoffice.module.css";

const RoomsBackoffice = () => {
  return (
    <div className={styles.roomsBackofficeContainer}>
      <BackOfficeNavBarDetails />
      <BackOfficeRooms />
    </div>
  );
};

export default RoomsBackoffice;
