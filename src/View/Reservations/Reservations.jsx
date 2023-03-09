import {  useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {getHotels, getReservations} from '../../redux/actions';
import style from './Reservations.module.css'
import BackOfficeNavBar from '../../components/BackOffice/BackOfficeNavBar/BackOfficeNavBar'
import CardReservation from '../../components/BackOffice/CardReservation/CardReservation';

export default function Reservations() {
  const dispatch = useDispatch();
  const allHotel = useSelector(store => store.allHotels);
  const reservations = useSelector(store => store.reservations);
console.log("reservations: ",reservations)
  const handlerHotel = (e) =>{
    dispatch(getReservations(e.target.value))
  }

  useEffect(() => {
    dispatch(getHotels())
  },[dispatch]);

  return(
    <main className={style.main}>
      <BackOfficeNavBar />
      <div>
        <div className={style.formGroup}>
          <label htmlFor="hotelCombo">Hotel</label>
          <select name="hotelCombo" id='hotelCombo' onChange={handlerHotel}>
            <option value="all">All</option>
            {
              Object.keys(allHotel).length !== 0 && allHotel.map(hotel => <option value={hotel.id} key={hotel.id}>{hotel.name}{hotel.id}</option>)
            }
          </select>
        </div>
        {
        Array.isArray(reservations) && reservations.length > 0 
          ? <CardReservation reservations={reservations}/>
          : <h1>Sin reservas</h1>
      }
      </div>
    </main>
  )
}