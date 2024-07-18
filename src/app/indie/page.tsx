"use client"
import { useEffect } from 'react';
import { setIndie } from "../../store/features/traksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Nav from '@/components/Nav/Nav';
import CenterBlock from '@/components/CetnerBlock/CenterBlock';
import Sidebar from '@/components/Sidebar/Sidebar';
import styles from '../page.module.css'
import Bar from '@/components/Bar/Bar';
import getSelections from '../getSelections';

function indieTracks() {

    const indieTracks = useAppSelector((state) => state.tracksSlice.indieTracks);
    useEffect(() => {
        getDayPlayList()
      }, []);
    const dispatch = useAppDispatch();

    const getDayPlayList = async () => {
        try {
          const tracks= await getSelections(3)
          dispatch(setIndie(tracks.items))
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
                    <CenterBlock tracks={indieTracks} />
                    <Sidebar />
                </main>
                <Bar />
            </div>
        </div>
    </div>
  );
}
export default indieTracks;