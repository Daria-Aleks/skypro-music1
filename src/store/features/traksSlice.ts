import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: string;
  release_date: Date;
  genre: string;
  track_file: string;
}

type TracksStateType = {
  tracksState: Track[];
  trackState: Track | null;
  pauseState: boolean;
};

const initialState: TracksStateType = {
  tracksState: [],
  trackState: null,
  pauseState: true,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracksState: (state, action: PayloadAction<Track[]>) => {
      state.tracksState = action.payload;
    },
    setTrackState: (state, action: PayloadAction<Track>) => {
      state.trackState = action.payload;
    },
    setPauseState: (state, action: PayloadAction<boolean>) => {
      state.pauseState = action.payload
    },
  },
});

export const { setTracksState, setTrackState, setPauseState } = tracksSlice.actions; // Добавлен экспорт setTrackState
export const tracksReducer = tracksSlice.reducer;