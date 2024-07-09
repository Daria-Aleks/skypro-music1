import PlaylistContent from '../PlaylistContent/PlaylistContent';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import styles from './CenterBlock.module.css'
const CenterBlock = () => {
    return (
        <div className={styles.mainCenterblock}>
        <Search/>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter/>
        <PlaylistContent/>
      </div>
    )
}
export default CenterBlock;