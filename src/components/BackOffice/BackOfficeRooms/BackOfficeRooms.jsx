import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailHotel, getHotelsBackOffice } from "../../../redux/actions";
import BackOfficeHotelModal from "../BackOfficeHotels/Modal/BackOfficeHotelModal";
import BackOfficeNavBarDetails from "../BackOfficeNavBarDetails/BackOfficeNavBarDetails";
import BackOfficePaged from "../BackOfficePaged/BackOfficePaged";
import style from "./BackOfficeRooms.module.css";

const BackOfficeRooms = () => {
  const dispatch = useDispatch();
  const detailHotel = useSelector((state) => state.detailHotel);
  const [openModal, setOpenModal] = useState(false);

  const params = useParams();

  useEffect(() => {
    dispatch(getDetailHotel(params.hotel));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsInPage, setHotelsInPage] = useState(10);
  const indexLastHotel = currentPage * hotelsInPage;
  const indexFirstHotel = indexLastHotel - hotelsInPage;
  const currentHotel = detailHotel.rooms?.slice(
    indexFirstHotel,
    indexLastHotel
  );

  const paged = (paged) => {
    setCurrentPage(paged);
  };
  return (
    <div className={style.backOfficeHotels}>
      <div className={style.backOfficeHotelsContainerModal}>
        {openModal && <BackOfficeHotelModal closeModal={setOpenModal} />}
        <div className={style.backOfficeHotelsContainer}>
          <div>
            <h2>Rooms</h2>
            <div className={style.backOfficeHotelsBtn}>
              <button
                className={style.backOfficeHotelsOpenModal}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                CREAR
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre</th>
                <th>Price</th>
                {/* <th>Categoria</th> */}
                <th>Config</th>
              </tr>
            </thead>
            <tbody>
              {currentHotel?.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    {/* <td>{e.category}</td> */}
                    <td className={style.backOfficeHotelsButtons}>
                      <Link to={`/backOffice/${e.name}`}>
                        <button className={style.backOfficeHotelsButtonEdit}>
                          Editar
                        </button>
                      </Link>
                      <button className={style.backOfficeHotelsButtonDelete}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <BackOfficePaged
              itemsInPage={hotelsInPage}
              allItems={detailHotel.rooms}
              paged={paged}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackOfficeRooms;
