// eventActions.ts
export const SET_SELECTED_EVENT = 'SET_SELECTED_EVENT';

export const setSelectedEvent = (eventId: string) => {
  return {
    type: SET_SELECTED_EVENT,
    payload: eventId,
  };
};
