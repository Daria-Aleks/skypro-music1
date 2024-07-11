"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import { useState, useEffect } from "react";
import styles from './page.module.css'
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CetnerBlock/CenterBlock";
import useSWR from 'swr'
const todosEndpoint = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

const getData = async () => {
  const response = await fetch(todosEndpoint);
  return await response.json();
};

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
export default function Home() {
  // const [tracks, setTracks] = useState<Track[]>([]);
  const [activeTrack, setActiveTrack] = useState<Track | null>(null);

  const { data, error,  isLoading} = useSWR(todosEndpoint, getData); 
  if (error) return <div>ошибка загрузки</div>
  if (isLoading) return <div>загрузка...</div>
  console.log(data)
  const setTrack = (track: Track) => {
    setActiveTrack(track);
  };
  // useEffect(() => {
  //   const data = await getData()
  // }, []);

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav/>
          <CenterBlock tracks={data} setTrack={setTrack}/>
          <Sidebar/>
        </main>
        <Bar track={activeTrack}/>
      </div>
    </div>
  </>
  
  );
}
