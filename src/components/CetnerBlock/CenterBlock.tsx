import PlaylistContent from '../PlaylistContent/PlaylistContent';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import styles from './CenterBlock.module.css'

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
interface CenterBlockProps {
  tracks: Track[];
  setTrack: (track: Track) => void;
}
const CenterBlock: React.FC<CenterBlockProps> = ({tracks, setTrack}) => {
    return (
        <div className={styles.mainCenterblock}>
        <Search/>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter tracks={tracks}/>
        <PlaylistContent tracks={tracks} setTrack={setTrack}/>
      </div>
    )
}
export default CenterBlock;