"use client"
import { useEffect } from 'react';
import { setAllFavs } from "../../store/features/traksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import getFavTracks from '../getFavTracks';
import getRefreshToken from '../getRefreshToken';
import Nav from '@/components/Nav/Nav';
import CenterBlock from '@/components/CetnerBlock/CenterBlock';
import Sidebar from '@/components/Sidebar/Sidebar';
import styles from '../page.module.css'
import { useRouter } from 'next/navigation';
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

function Favorites() {
    const router = useRouter();

    const allFavs = useAppSelector((state) => state.tracksSlice.allFavs);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          getAllFavTracks()
        } else {
            router.push('/signin')
        }
      }, []);

    const dispatch = useAppDispatch();

    const getAllFavTracks = async () => {
        const token = localStorage.getItem('token');
        const accessToken = await getRefreshToken(JSON.parse(token).refresh);
        try {
          const tracks: Track[] = await getFavTracks(accessToken.access)
          dispatch(setAllFavs(tracks))
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };

  return (
    <div className="wrapper">
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Nav />
                    <CenterBlock tracks={allFavs} />
                    <Sidebar />
                </main>
            </div>
        </div>
    </div>
  );
}
export default Favorites;