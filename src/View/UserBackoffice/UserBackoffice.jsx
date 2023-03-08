import BackOfficeNavBar from "../../components/BackOffice/BackOfficeNavBar/BackOfficeNavBar";
import style from "./UserBackoffice.module.css";

const userBackoffice = () => {
  return (
    <div className={style.userBackofficeContainer}>
      <BackOfficeNavBar />
      <h1>Aqui va la informacion del Usuario</h1>
    </div>
  );
};

export default userBackoffice;
