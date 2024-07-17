import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  username: string;
  password: string;
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

interface UserTokens {
  refresh: string;
  access: string;
}

type TracksStateType = {
    authState: boolean;
    userDate: User | null;
    allFavTracks: Track[];
    userTokenRefresh: string | null;
    userTokenAccess: string | null;
  };
  
  const initialState: TracksStateType = {
    authState: false,
    userDate: null,
    allFavTracks: [],
    userTokenRefresh: null,
    userTokenAccess: null,
  };
  

const authSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {
      setAuth: (state, action: PayloadAction<boolean>) => {
        state.authState = action.payload;
        localStorage.setItem('auth', JSON.stringify(action.payload));
      },
      setUser: (state, action: PayloadAction<User>) => {
        state.userDate = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      }, 
      clearUserSession: (state) => {
        state.userDate = null;
        state.authState = false;
        localStorage.removeItem('user');
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
      }, 
      setAllFavTracks: (state, action: PayloadAction<Track[]>) => {
        state.allFavTracks = action.payload
      },
      setUserTokens: (state, action: PayloadAction<UserTokens>) => {
        state.userTokenRefresh = action.payload.refresh;
        state.userTokenAccess = action.payload.access;
        localStorage.setItem('token', JSON.stringify( action.payload));
      }
    },
  });
  
  export const { setAuth, setUser, clearUserSession, setUserTokens, setAllFavTracks } = authSlice.actions;
  export const authSliceReducer = authSlice.reducer;