import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import CenterBlock from "@/components/CetnerBlock/CenterBlock";
import styles from './page.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav/>
          <CenterBlock/>
          <Sidebar/>
        </main>
        <Bar/>
      </div>
    </div>
  </>
  
  );
}
