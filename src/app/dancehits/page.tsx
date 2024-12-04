"use client"
import { useEffect } from 'react';
import { setDanceHits, setPlayListOfDay } from "../../store/features/traksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Nav from '@/components/Nav/Nav';
import CenterBlock from '@/components/CetnerBlock/CenterBlock';
import Sidebar from '@/components/Sidebar/Sidebar';
import styles from '../page.module.css'
import Bar from '@/components/Bar/Bar';
import getSelections from '../getSelections';

function danceHits() {

    const danceHits = useAppSelector((state) => state.tracksSlice.danceHits);
    useEffect(() => {
        getDayPlayList()
      }, []);
    const dispatch = useAppDispatch();

    const getDayPlayList = async () => {
        try {
          const tracks= await getSelections(2)
          dispatch(setDanceHits(tracks.items))
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
                    <CenterBlock tracks={danceHits} />
                    <Sidebar />
                </main>
                <Bar />
            </div>
        </div>
    </div>
  );
}
export default danceHits;