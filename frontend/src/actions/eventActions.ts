import { Dispatch } from 'redux';

export const SET_SELECTED_EVENT = 'SET_SELECTED_EVENT';

export const setSelectedEvent = (eventId: string) => {
  return {
    type: SET_SELECTED_EVENT,
    payload: eventId,
  };
};

export const FETCH_EVENT_DETAILS_REQUEST = 'FETCH_EVENT_DETAILS_REQUEST';
export const FETCH_EVENT_DETAILS_SUCCESS = 'FETCH_EVENT_DETAILS_SUCCESS';
export const FETCH_EVENT_DETAILS_FAILURE = 'FETCH_EVENT_DETAILS_FAILURE';

export const fetchEventDetails = (eventId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_EVENT_DETAILS_REQUEST });

    try {
      const response = await fetch(`http://localhost:3000/events/${eventId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch event details');
      }

      const eventData = await response.json();

      // Dispara la acción para establecer los detalles del evento en el estado
      dispatch({
        type: FETCH_EVENT_DETAILS_SUCCESS,
        payload: eventData,
      });

      // También podrías utilizar la acción existente setSelectedEvent si se usa para establecer los detalles del evento seleccionado
      dispatch(setSelectedEvent(eventData.id)); // Si la acción setSelectedEvent establece el ID del evento, puedes utilizarla aquí

    } catch (error: any) {
      dispatch({
        type: FETCH_EVENT_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
};

