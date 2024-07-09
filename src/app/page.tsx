"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import { useState, useEffect } from "react";
import styles from './page.module.css'
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CetnerBlock/CenterBlock";

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: string;
  release_date: Date;
  genre: string;
}
export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  // const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }
        const data = await response.json();
        setTracks(data)
      } catch (err) {
        alert(err)
      }
    };

    fetchTracks();
  }, []);

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav/>
          <CenterBlock tracks={tracks}/>
          <Sidebar/>
        </main>
        <Bar/>
      </div>
    </div>
  </>
  
  );
}
