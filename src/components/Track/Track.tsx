import styles from './Track.module.css'
const Track = () => {
    return (
        <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div>
              <a className={styles.trackTitleLink} href="http://">
                Guilt <span className="track__title-span" />
              </a>
            </div>
          </div>
          <div className={styles.trackTitleSpan}>
            <a className="track__author-link" href="http://">
              Nero
            </a>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              Welcome Reality
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText}>4:44</span>
          </div>
        </div>
      </div>
    )
}
export default Track;