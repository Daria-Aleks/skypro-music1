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
  playListOfDay: Track[];
  danceHits: Track[];
  indieTracks: Track[];
  currentTime: number,
  duration: number,
};

const initialState: TracksStateType = {
  tracksState: [],
  trackState: null,
  pauseState: true,
  isLikedTrack: false,
  allFavs: [],
  playListOfDay: [],
  danceHits: [],
  indieTracks: [],
  currentTime: 0,
  duration: 0,
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
    setPlayListOfDay: (state, action: PayloadAction<[]>) => {
      state.playListOfDay = action.payload
    },
    setDanceHits: (state, action: PayloadAction<[]>) => {
      state.danceHits = action.payload
    },
    setIndie: (state, action: PayloadAction<[]>) => {
      state.indieTracks = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
  },
});

export const { setTracksState, setTrackState, setPauseState, setIsLikedTrack, setAllFavs, setPlayListOfDay, setDanceHits, setIndie, setDuration, setCurrentTime } = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;