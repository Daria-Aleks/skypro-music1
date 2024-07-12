import styles from './PlaylistContent.module.css'
import Track from "@/components/Track/Track";
import { useAppSelector } from "../../store/store";

interface Trackk {
  id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: string;
  release_date: Date;
  genre: string;
  track_file: string;
}

interface PlaylistContentProps {
  tracks: Trackk[];
}
const PlaylistContent: React.FC<PlaylistContentProps>  = () => {
  const TracksState = useAppSelector((state) => state.auth.tracksState);
    return (
        <div className={styles.contentPlaylist}>
          <div className={styles.contentTitle}>
            <div className={styles.playlistTitleCol}>Трек</div>
            <div className={styles.playlistTitleCol}>Исполнитель</div>
            <div className={styles.playlistTitleCol}>Альбом</div>
            <div className={styles.playlistTitleCol}>
              <svg className={styles.playlistTitleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </svg>
            </div>
          </div>
          <div className={styles.contentPlaylist}>
          {TracksState?.map((track, index) => (
                <Track 
                  key={index}
                  track={track}
                />    
                ))}
          </div>
        </div>
    )
}
export default PlaylistContent;