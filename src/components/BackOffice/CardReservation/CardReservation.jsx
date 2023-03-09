import Grafico from '../Grafico/Grafico'
import style from '../BackOfficeHotels/BackOfficeHotels.module.css'

export default function CardReservation({ reservations }) {
  
  return (
    <div>
      <Grafico />
      <div className={style.backOfficeHotels}>
        <div className={style.backOfficeHotelsContainerModal}>
          <div className={style.backOfficeHotelsContainer}>
            <table>
              <thead>
                <tr>
                  <th>Checkin</th>
                  <th>Checkout</th>
                  <th>Usuario</th>
                  <th>pago</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((e) => (
                  <tr key={e.id}>
                    <td>{e.checkin}</td>
                    <td>{e.checkout}</td>
                    <td>{e.user.name}</td>
                    <td>{e.paymentId}</td>
                  </tr>

                ))}
              </tbody>
            </table>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}