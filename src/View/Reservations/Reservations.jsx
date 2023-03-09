import { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {getCities, getHotels} from '../../redux/actions';
import style from './Reservations.module.css'
import BackOfficeNavBar from '../../components/BackOffice/BackOfficeNavBar/BackOfficeNavBar'

export default function Reservations() {
  const dispatch = useDispatch();
  const allHotel = useSelector(store => store.allHotels);
  const allCities = useSelector(store => store.allCities);

  const handlerCities = (e) =>{
    //dispatch(getHotelsByCity(e.target.value))
    
  }

  useEffect(() => {
    dispatch(getHotels())
    dispatch(getCities())

  },[dispatch]);

  return(
    <main className={style.main}>
      <BackOfficeNavBar />
      <div className={style.queryOptions}>
        <div className={style.formGroup}>
          <label htmlFor="citiesCombo">Ciudad</label>
          <select name="citiesCombo" id='citiesCombo' onChange={handlerCities}>
            <option value="all">All</option>
            {
              allCities.map(city => <option value={city.name} key={city.id}>{city.name}</option>)
            }
          </select>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="hotelCombo">Hotel</label>
          <select name="hotelCombo" id='hotelCombo' onChange={handlerCities}>
            <option value="all">All</option>
            {
              Object.keys(allHotel).length !== 0 && allHotel.map(hotel => <option value={hotel.id} key={hotel.id}>{hotel.name}</option>)
            }
          </select>
        </div>
        <div className={style.formGroup}>
          <label htmlFor="initialDate">Fecha inicial</label>
          <input type="date" name="initialDate" id="initialDate" />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="finalDate">Fecha final</label>
          <input type="date" name='finalDate' id='finalDate'/>
        </div>
      </div>
    </main>
  )
}