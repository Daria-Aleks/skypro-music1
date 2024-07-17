"use client"
import PlaylistContent from '../PlaylistContent/PlaylistContent';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import styles from './CenterBlock.module.css'
import Track from '../trackType'
import { setTracksState } from "../../store/features/traksSlice";
import { setAuth, setUser, setUserTokens } from "../../store/features/authSlice";
import { useAppDispatch } from "../../store/store";
import { useEffect } from 'react';
import getRefreshToken from '@/app/getRefreshToken';
interface CenterBlockProps {
  tracks: Track[];
}
const CenterBlock: React.FC<CenterBlockProps> = ({tracks}) => {
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
  dispatch(setTracksState(tracks))

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