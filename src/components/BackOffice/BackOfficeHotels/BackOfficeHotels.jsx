import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getHotelsBackOffice } from "../../../redux/actions";
import BackOfficeNavBar from "../BackOfficeNavBar/BackOfficeNavBar";
import BackOfficePaged from "../BackOfficePaged/BackOfficePaged";
import style from "./BackOfficeHotels.module.css";
import BackOfficeHotelModal from "./Modal/BackOfficeHotelModal";

const BackOfficeHotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelsBackOffice);
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();

  useEffect(() => {
    dispatch(getHotelsBackOffice());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsInPage, setHotelsInPage] = useState(8);
  const indexLastHotel = currentPage * hotelsInPage;
  const indexFirstHotel = indexLastHotel - hotelsInPage;
  const currentHotel = hotels?.slice(indexFirstHotel, indexLastHotel);

  const paged = (paged) => {
    setCurrentPage(paged);
  };

  return (
    <div className={style.backOfficeHotels}>
      <div className={style.backOfficeHotelsContainerModal}>
        {openModal && <BackOfficeHotelModal closeModal={setOpenModal} />}
        <div className={style.backOfficeHotelsContainer}>
          <div>
            <h2>Hoteles</h2>
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
                <th>Rating</th>
                <th>Categoria</th>
                <th>Config</th>
              </tr>
            </thead>
            <tbody>
              {currentHotel?.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.rating}</td>
                    <td>{e.category}</td>
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
              allItems={hotels}
              paged={paged}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackOfficeHotels;
