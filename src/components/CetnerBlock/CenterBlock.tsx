"use client"
import PlaylistContent from '../PlaylistContent/PlaylistContent';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import styles from './CenterBlock.module.css'
import Track from '../trackType'
import { setTracksState } from "../../store/features/traksSlice";
import { setAuth, setUser, setUserTokens } from "../../store/features/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from 'react';
interface CenterBlockProps {
  tracks: Track[];
}
const CenterBlock: React.FC<CenterBlockProps> = ({tracks}) => {
  const allFavs = useAppSelector((state) => state.tracksSlice.allFavs);
  const playListOfDay = useAppSelector((state) => state.tracksSlice.playListOfDay);
  const danceHits = useAppSelector((state) => state.tracksSlice.danceHits);
  const indieTracks = useAppSelector((state) => state.tracksSlice.indieTracks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const auth = localStorage.getItem('auth');
    const token = localStorage.getItem('token');
    if (userData) {
      dispatch(setUser(JSON.parse(userData)));
    } 
    if (auth) {
      dispatch(setAuth(JSON.parse(auth)))
    }
    if (token) {
      dispatch(setUserTokens(JSON.parse(token)))
    }

  }, []);
  useEffect(() => {
    dispatch(setTracksState(tracks))
  }, [allFavs, playListOfDay, danceHits, indieTracks]);

    return (
        <div className={styles.mainCenterblock}>
        <Search/>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter tracks={tracks}/>
        <PlaylistContent tracks={tracks}/>
      </div>
    )
}
export default CenterBlock;