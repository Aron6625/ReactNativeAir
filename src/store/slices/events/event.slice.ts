import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "@app/types/event.type";

type EventsSliceState = {
  events: IEvent[];
  selectedEvent?: IEvent;
  isLoading: boolean;
  error: string | null;
  favoriteEvents: IEvent[];
};

const initialState: EventsSliceState = {
  events: [],
  selectedEvent: undefined,
  isLoading: false,
  error: null,
  favoriteEvents: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
    setSelectedEvent(state, action: PayloadAction<IEvent>) {
      state.selectedEvent = action.payload;
    },
    addFavoriteEvent(state, action: PayloadAction<IEvent>) {
      if (!state.favoriteEvents.some(e => e.id === action.payload.id)) {
        state.favoriteEvents.push(action.payload);
      }
    },
    removeFavoriteEvent(state, action: PayloadAction<IEvent>) {
      state.favoriteEvents = state.favoriteEvents.filter(
        e => e.id !== action.payload.id
      );
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const eventActions = eventsSlice.actions;
export const EventReducer = eventsSlice.reducer;
