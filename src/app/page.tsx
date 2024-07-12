"use client"
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import styles from './page.module.css'
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CetnerBlock/CenterBlock";
import { setTracksState } from "../store/features/traksSlice";
import { useAppDispatch } from "../store/store";
import useSWR from 'swr'
const todosEndpoint = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

const getData = async () => {
  const response = await fetch(todosEndpoint);
  return await response.json();
};

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, error,  isLoading} = useSWR(todosEndpoint, getData); 
  if (error) return <div>ошибка загрузки</div>
  if (isLoading) return <div>загрузка...</div>
  dispatch(setTracksState(data))
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav/>
          <CenterBlock tracks={data}/>
          <Sidebar/>
        </main>
        <Bar />
      </div>
    </div>
  </>
  
  );
}
