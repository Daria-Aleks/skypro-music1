import styles from './PlaylistContent.module.css'
import Track from "@/components/Track/Track";

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
  setTrack: (track: Trackk) => void;
}
const PlaylistContent: React.FC<PlaylistContentProps>  = ({tracks, setTrack}) => {
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
          {tracks?.map((track, index) => (
                <Track 
                  key={index}
                  track={track}
                  setTrack={setTrack}
                />    
                ))}
          </div>
        </div>
    )
}
export default PlaylistContent;