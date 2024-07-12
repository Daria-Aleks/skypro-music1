import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import styles from './page.module.css';
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CetnerBlock/CenterBlock";

const todosEndpoint = "https://skypro-music-api.skyeng.tech/catalog/track/all/";

async function getData() {
  const res = await fetch(todosEndpoint);
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Home() {
  const data = await getData();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <CenterBlock tracks={data} />
          <Sidebar />
        </main>
        <Bar />
      </div>
    </div>
  );
}