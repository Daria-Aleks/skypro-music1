import styles from './Track.module.css';
import React from 'react';
import { setTrackState } from "../../store/features/traksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import cn from 'classnames';
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

interface TrackProps {
  track: {
      id: number;
      name: string;
      author: string;
      album: string;
      duration_in_seconds: string;
      release_date: Date;
      genre: string;
      track_file: string;
  };
}

function formatDuration(seconds: string): string {
  const totalSeconds = parseInt(seconds, 10);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  const paddedSeconds = remainingSeconds < 10 ? remainingSeconds : remainingSeconds.toString();
  return `${minutes}:${paddedSeconds}`;
}

const Track: React.FC<TrackProps> = ({track}) => {
  const dispatch = useAppDispatch();
  const trackState = useAppSelector((state) => state.auth.trackState);
  const pause = useAppSelector((state) => state.auth.pauseState);

    return (
        <div className={styles.playlistItem} onClick={() => dispatch(setTrackState(track))}>
        <div className={styles.playlistTrack}>
          {
            track?.id == trackState?.id ? <div className={cn(styles.activeTrack, pause ? '' : styles.blink)}></div> : ''
          }
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
            <span className={styles.trackTimeText} >{formatDuration(track.duration_in_seconds)}</span>
          </div>
        </div>
      </div>
    )
}
export default Track;