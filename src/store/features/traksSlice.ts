import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  username: string;
}

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: string;
  release_date: Date;
  genre: string;
  track_file: string;
  stared_user: User[]
}

type TracksStateType = {
  tracksState: Track[];
  trackState: Track | null;
  pauseState: boolean;
  isLikedTrack: boolean;
  allFavs: Track[];
};

const initialState: TracksStateType = {
  tracksState: [],
  trackState: null,
  pauseState: true,
  isLikedTrack: false,
  allFavs: []
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
    setIsLikedTrack: (state, action: PayloadAction<boolean>) => {
      state.isLikedTrack = action.payload
    },
    setAllFavs: (state, action: PayloadAction<Track[]>) => {
      state.allFavs = action.payload
    },
  },
});

export const { setTracksState, setTrackState, setPauseState, setIsLikedTrack, setAllFavs } = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;