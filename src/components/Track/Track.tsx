import styles from './Track.module.css';
import React from 'react';
interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: string;
  release_date: Date;
  genre: string;
  track_file: string;
}

interface TrackProps {
  track: {
      id: number;
      name: string;
      author: string;
      album: string;
      duration: string;
      release_date: Date;
      genre: string;
      track_file: string;
  };
  setTrack: (track: Track) => void;
}

const Track: React.FC<TrackProps> = ({track, setTrack}) => {
    return (
        <div className={styles.playlistItem} onClick={() => setTrack(track)}>
        <div className={styles.playlistTrack} >
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg} >
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div >
              <p className={styles.trackTitleLink} >
                {track.name} <span className="track__title-span" />
              </p>
            </div>
          </div>
          <div className={styles.trackTitleSpan}>
            <p className="track__author-link" >
              {track.author}
            </p>
          </div>
          <div className={styles.trackAuthor} >
            <p className={styles.trackAuthorLink} >
              {track.album}
            </p>
          </div>
          <div >
            <svg className={styles.trackTimeSvg} >
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText} >{track.duration}</span>
          </div>
        </div>
      </div>
    )
}
export default Track;