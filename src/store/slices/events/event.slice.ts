import { IEvent } from "../../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EvensSliceState = {
    events: IEvent[],
    selectedEvent: IEvent | undefined,
    isLoading: boolean,
    error: string | null,
    favoriteEvents: IEvent[],
};

const initialState: EvensSliceState = {
    events: [],
    selectedEvent: undefined,
    isLoading: false,
    error: null,
    favoriteEvents: [],
};

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
        },
        setSelectedEvent(state, action: PayloadAction<IEvent>) {
            state.selectedEvent = action.payload;
        },
        addFavoriteEvent(state, action: PayloadAction<IEvent>) {
            const event = action.payload;
            if(!state.favoriteEvents.some(e => e.id === event.id)){
                state.favoriteEvents = [...state.favoriteEvents, event];
            }
        },
        removeFavoriteEvent(state, action: PayloadAction<IEvent>) {
            const event = action.payload;
            state.favoriteEvents = state.favoriteEvents.filter(e => e.id !== event.id);
        },

    },
});

export const EventActions = eventSlice.actions;
// export const EventReducer = eventSlice.reducer;
export default eventSlice.reducer;