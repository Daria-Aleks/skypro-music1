import getFavTracks from '../getFavTracks';
import Nav from '@/components/Nav/Nav';
import CenterBlock from '@/components/CetnerBlock/CenterBlock';
import Sidebar from '@/components/Sidebar/Sidebar';
import styles from '../page.module.css'
import Bar from '@/components/Bar/Bar';

  async function getData() {
    const res = await getFavTracks();
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }
  
async function Favorites({token}) {
    console.log(token)
    const data = await getData();
    console.log(data)

  return (
    <div className="wrapper">
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
    </div>
  );
}
export default Favorites;