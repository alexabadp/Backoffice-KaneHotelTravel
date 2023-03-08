import BackOfficeNavBar from "../../components/BackOffice/BackOfficeNavBar/BackOfficeNavBar";
import styles from "./ActivitiesBackoffice.module.css";

const ActivitiesBackoffice = () => {
  return (
    <div className={styles.activitiesBackofficeContainer}>
      <BackOfficeNavBar />
      <h1>Aqui se listan todas las actividades</h1>
    </div>
  );
};

export default ActivitiesBackoffice;
