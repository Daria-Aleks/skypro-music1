import PlaylistContent from '../PlaylistContent/PlaylistContent';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import styles from './CenterBlock.module.css'
import Track from '../trackType'

interface CenterBlockProps {
  tracks: Track[];
}
const CenterBlock: React.FC<CenterBlockProps> = ({tracks}) => {
    return (
        <div className={styles.mainCenterblock}>
        <Search/>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter tracks={tracks}/>
        <PlaylistContent tracks={tracks}/>
      </div>
    )
}
export default CenterBlock;