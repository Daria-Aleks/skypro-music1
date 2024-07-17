import styles from './Track.module.css';
import React, { useEffect, useState } from 'react';
import { setAllFavs, setTrackState } from "../../store/features/traksSlice";
import { useAppSelector, useAppDispatch } from "../../store/store";
import cn from 'classnames';
import getRefreshToken from '@/app/getRefreshToken';
import getFavTracks from '@/app/getFavTracks';

interface User {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  username: string;
}

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: string;
  release_date: Date;
  genre: string;
  track_file: string;
  stared_user: User[]
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
      stared_user: User[];
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
  const [isLiked, setIsLiked] = useState(false);
  const user = useAppSelector((state) => state.auth.userDate);
  const trackState = useAppSelector((state) => state.tracksSlice.trackState);
  const pause = useAppSelector((state) => state.tracksSlice.pauseState);
  const allFavs = useAppSelector((state) => state.tracksSlice.allFavs);
  const token = useAppSelector((state) => state.auth.userTokenRefresh);

  useEffect(() => {
    if (track) {
      let fl = false;
      allFavs.forEach(el => {
        if (el.id == track?.id) {
          fl = true
        }
      })
      setIsLiked(fl)
    }
  }, [allFavs]);

  const likeTrack = async (event: React.FormEvent) => {
    event.preventDefault();
    const accessToken = await getRefreshToken(token);
    try {
      const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${track.id}/favorite/`, {
        method: isLiked ? "DELETE" : "POST",
        body: JSON.stringify({
          email: user?.email,
          password: user?.password,
        }),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken.access}`,
        },
      });

      if (response.status == 200) {
        setIsLiked(!isLiked)
        const json = await response.json();
        console.log(json)
        getAllFavTracks()
      } else {
        alert('Введенные данные неверны')
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  const getAllFavTracks = async () => {
    const token = localStorage.getItem('token');
    const accessToken = await getRefreshToken(JSON.parse(token).refresh);
    try {
      const tracks: Track[] = await getFavTracks(accessToken.access)
      dispatch(setAllFavs(tracks))
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
    return (
        <div className={styles.playlistItem} onClick={() => dispatch(setTrackState(track))}>
        <div className={styles.playlistTrack}>

          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
            {
              track?.id == trackState?.id ? <div className={cn(styles.activeTrack, pause ? '' : styles.blink)}></div> : ''
            }
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
            <svg className={cn(styles.trackTimeSvg, isLiked ? styles.liked : '')} onClick={likeTrack}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText} >{formatDuration(track.duration_in_seconds)}</span>
          </div>
        </div>
      </div>
    )
}
export default Track;