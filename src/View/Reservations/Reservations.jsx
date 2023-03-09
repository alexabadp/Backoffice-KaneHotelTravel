import style from './Reservations.module.css'
import BackOfficeNavBar from '../../components/BackOffice/BackOfficeNavBar/BackOfficeNavBar'

export default function Reservations() {

  const handlerCities = (e) =>{
    console.log("Eligio la ciudad: ", e.target.value);
  }

  return(
    <main className={style.main}>
      <BackOfficeNavBar />
      <div className={style.queryOptions}>
        <div>
          <label htmlFor="citiesCombo">Ciudad</label>
          <select name="citiesCombo" id='citiesCombo' onChange={handlerCities}>
            <option value="all">All</option>
            <option value="Ccuu">Ccuu</option>
          </select>
        </div>
      </div>
    </main>
  )
}