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
};

const initialState: TracksStateType = {
  tracksState: [],
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracksState: (state, action: PayloadAction<Track[]>) => {
      state.tracksState = action.payload;
    },
  },
});

export const { setTracksState } = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;