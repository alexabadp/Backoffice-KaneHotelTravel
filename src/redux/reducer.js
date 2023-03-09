import { GET_HOTELS_BACKOFFICE, GET_HOTEL_DETAIL, GET_CITIES, GET_HOTELS } from "./actions";

const initialState = {
  hotelsBackOffice: [],
  detailHotel: [],
  allCities: [],
  allHotels: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_BACKOFFICE:
      return {
        ...state,
        hotelsBackOffice: action.payload,
      };

    case GET_HOTEL_DETAIL:
      return {
        ...state,
        detailHotel: action.payload,
      };

    case GET_CITIES:
      return{
        ...state,
        allCities: action.payload
      }

    case GET_HOTELS:
      
      return{
        ...state,
        allHotels: action.payload
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
