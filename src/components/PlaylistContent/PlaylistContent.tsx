import styles from './PlaylistContent.module.css'
import Track from "@/components/Track/Track";
const PlaylistContent = () => {
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
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
          </div>
        </div>
    )
}
export default PlaylistContent;