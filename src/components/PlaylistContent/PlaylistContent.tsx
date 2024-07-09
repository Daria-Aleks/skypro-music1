import styles from './PlaylistContent.module.css'
import Track from "@/components/Track/Track";

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: string;
  release_date: Date;
  genre: string;
}

interface PlaylistContentProps {
  tracks: Track[];
}
const PlaylistContent: React.FC<PlaylistContentProps>  = ({tracks}) => {
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
                />    
                ))}
          </div>
        </div>
    )
}
export default PlaylistContent;