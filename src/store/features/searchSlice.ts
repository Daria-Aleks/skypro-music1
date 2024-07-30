import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchStateType = {
    searchTerm: string,
    genres: string[];
    years: string,
    authors: string[],
  };
  
  const initialState: SearchStateType = {
    searchTerm: '',
    genres: [],
    years: '',
    authors: []
  };
  

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      setSearchTerm: (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
      },
      setGenre: (state, action: PayloadAction<string[]>) => {
        state.genres = action.payload;
      },
      setYears: (state, action: PayloadAction<string>) => {
        state.years = action.payload;
      },
      setAuthors: (state, action: PayloadAction<string[]>) => {
        state.authors = action.payload;
      },
    },
  });
  
  export const { setSearchTerm, setGenre, setYears, setAuthors } = searchSlice.actions;
  export const searchReducer = searchSlice.reducer;