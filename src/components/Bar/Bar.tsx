"use client"
import { useEffect, useRef, useState } from 'react';
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from './Bar.module.css';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setTrackState, setPauseState, setAllFavs, setCurrentTime, setDuration} from "../../store/features/traksSlice";
import Track from '../Track/Track';
import getRefreshToken from '@/app/getRefreshToken';
import getFavTracks from '@/app/getFavTracks';

interface User {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  username: string;
}

interface TrackK {
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

const Bar = () => {
  const track = useAppSelector((state) => state.tracksSlice.trackState);
  const tracks = useAppSelector((state) => state.tracksSlice.tracksState);
  const allFavTracks = useAppSelector((state) => state.tracksSlice.allFavs);
  const currentTime = useAppSelector((state) => state.tracksSlice.currentTime);
  const user = useAppSelector((state) => state.auth.userDate);
  const [shuffleTracks, setShuffleTracks] = useState(false);
  const [isLiked, setIsLiked] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [rep, setRep] = useState<boolean>(false)
  const [volume, setVolume] = useState(50);
  const token = useAppSelector((state) => state.auth.userTokenRefresh);
  const duration = useAppSelector((state) => state.tracksSlice.duration);
  const dispatch = useAppDispatch();
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        dispatch(setPauseState(true))
      } else{
        audioRef.current.play();
        dispatch(setPauseState(false))
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const repeat = () => {
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop
      setRep(!rep)
    }
  }

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(event.target.value);
    }
  };

  useEffect(() => {
    dispatch(setDuration(audioRef?.current?.duration ? audioRef?.current?.duration : 0))
  }, [audioRef.current?.duration]);

  useEffect(() => {
    if (audioRef.current && track) {
      audioRef.current.play();
      setIsPlaying(true)
      dispatch(setPauseState(false))
    }
  }, [track]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getAllFavTracks()
    }
  }, []);

  useEffect(() => {
    if (track) {
      let fl = false
      allFavTracks.forEach(el => {
        if (el.id == track?.id) {
          fl = true
        }
      })
      setIsLiked(fl)
    }
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (currentTime == duration) {
      const id = track?.id;
      tracks.forEach((el: Track, index: number) => {
        if (el.id == id && tracks[index + 1]) {
          dispatch(setTrackState(tracks[index + 1]))
        } 
      });

    }
  }, [currentTime]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setVolume(newValue);
  };

  const shuffle = () => {
    setShuffleTracks((prev) => !prev)
  };

  const nextTrack = () => {
    const id = track?.id
    if (!shuffleTracks) {
      tracks.forEach((el: Track, index: number) => {
        if (el.id == id && tracks[index + 1]) {
          dispatch(setTrackState(tracks[index + 1]))
        } 
      });
    } else {
      const index = Math.floor(Math.random() * tracks.length)
      dispatch(setTrackState(tracks[index]))
    }
  };

  const prevTrack = () => {
    const id = track?.id;
    if (!shuffleTracks) {
      tracks.forEach((el: Track, index: number) => {
        if (el.id == id && tracks[index - 1]) {
          dispatch(setTrackState(tracks[index - 1]))
        } 
      });
    } else {
      const index = Math.floor(Math.random() * tracks.length)
      dispatch(setTrackState(tracks[index]))
    }
  };

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
      const tracks: TrackK[] = await getFavTracks(accessToken.access)
      dispatch(setAllFavs(tracks))
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch(setCurrentTime(audioRef.current.currentTime));
    }
  };


    return (
        <div className={styles.bar}>
          <div className={styles.barContent}>
            <ProgressBar
              max={isNaN(duration) ? '0' : duration.toString()}
              value={currentTime}
              step={0.01}
              onChange={handleSeek}
            />
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <div className={styles.playerControls}>
                  <div className={styles.playerBtnPrev} onClick={prevTrack}>
                    <svg className={styles.playerBtnPrevSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div className={styles.playerBtnPlay} onClick={togglePlay}>
                  {
                    isPlaying ? 
                    <svg className={styles.playerBtnPlaySvg} width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="5" height="19" fill="#D9D9D9"/>
                      <rect x="10" width="5" height="19" fill="#D9D9D9"/>
                      </svg>
                    :
                  <svg className={styles.playerBtnPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </svg>
                  }
                  </div>
                  <div className={styles.playerBtnNext} onClick={nextTrack}>
                    <svg className={styles.playerBtnNextSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-next"/>
                    </svg>
                  </div>
                  <div className={cn(styles.playerBtnRepeat, rep ? styles.active : '')} onClick={repeat}>
                    <svg className={styles.playerBtnRepeatSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div  className={cn(styles.playerBtnShuffle, shuffleTracks ? styles.active : '')} onClick={shuffle}>
                    <svg  className={styles.playerBtnShuffleSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </div>
                <div className={styles.playerTrackPlay}>
                  <div className={styles.trackPlayContain}>
                    <div className={styles.trackPlayImage}>
                      <svg className={styles.trackPlaySvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className={styles.trackPlayAuthor}>
                      <p className={styles.trackPlayAuthorLink}>
                        {track?.name}
                      </p>
                    </div>
                    <div className={styles.trackPlayAlbum}>
                      <a href="http://" className={styles.trackPlayAlbumLink}>
                      {track?.author}
                      </a>
                    </div>
                  </div>
                  <div className={styles.trackPlayLikeDis}>
                    <div className={styles.trackPlayLike} onClick={likeTrack}>
                      <svg className={cn(styles.trackPlayLikeSvg, isLiked? styles.liked : '')}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div className={styles.trackPlayDislike}>
                      <svg className={styles.trackPlayDislikeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.barVolumeBlock}>
                <div className={styles.volumeContent}>
                  <div className={styles.volumeImage}>
                    <svg className={styles.volumeSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"/>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="range"
                      name="range"
                      className={styles.volumeProgressLine}
                      value={volume}
                      onChange={(e) => handleVolumeChange(e)}
                    />
                    <audio
                        src={track?.track_file}
                        ref={audioRef}
                        onTimeUpdate={() => {
                          handleTimeUpdate()
                        }}
                        onLoadedMetadata={() => {
                          if (audioRef.current) {
                            audioRef.current.currentTime = currentTime;
                          }
                        }}
              
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Bar;