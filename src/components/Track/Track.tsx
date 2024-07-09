import styles from './Track.module.css';
import React from 'react';
interface TrackProps {
  track: {
    id: number;
    name: string;
    author: string;
    album: string;
    duration: string;
  };
}
const Track: React.FC<TrackProps> = ({track}) => {
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
                {track.name} <span className="track__title-span" />
              </a>
            </div>
          </div>
          <div className={styles.trackTitleSpan}>
            <a className="track__author-link" href="http://">
              {track.author}
            </a>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              {track.album}
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText}>{track.duration}</span>
          </div>
        </div>
      </div>
    )
}
export default Track;