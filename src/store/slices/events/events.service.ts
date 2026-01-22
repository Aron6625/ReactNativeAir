import { AppDispatch } from '@app/store/store';
import { eventActions } from './event.slice';
import { moviesData } from '@app/assets/data/moviesData';

export const getEventsService = () => (dispatch: AppDispatch) => {
  try {
    dispatch(eventActions.setIsLoading(true));

    setTimeout(() => {
      dispatch(eventActions.setEvents(moviesData));
      dispatch(eventActions.setIsLoading(false));
      dispatch(eventActions.setError(null));
    }, 500);

  } catch (error) {
    dispatch(eventActions.setError(String(error)));
    dispatch(eventActions.setIsLoading(false));
  }
};
