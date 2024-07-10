import { useEffect, useRef, useState } from 'react';
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from './Bar.module.css';
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
interface BarProps {
  track: Track | null;
}

const Bar: React.FC<BarProps>= ({track}) => {

  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [rep, setRep] = useState<boolean>(false)
  const [volume, setVolume] = useState(50);
  const duration = audioRef.current?.duration ?? 0;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else{
        audioRef.current.play();
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
    if (audioRef.current && track) {
      audioRef.current.play();
      setIsPlaying(true)
    }
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value); // Преобразуем строку в число
    setVolume(newValue);
  };


    return (
        <div className={styles.bar}>
          <div className={styles.barContent}>
            {/* <div className={styles.barPlayerProgress} /> */}
            <ProgressBar
              max={isNaN(duration) ? '0' : duration.toString()}
              value={currentTime}
              step={0.01}
              onChange={handleSeek}
            />
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <div className={styles.playerControls}>
                  <div className={styles.playerBtnPrev} onClick={() => alert('Еще не реализовано')}>
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
                  <div className={styles.playerBtnNext} onClick={() => alert('Еще не реализовано')}>
                    <svg className={styles.playerBtnNextSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div className={cn(styles.playerBtnRepeat, rep ? styles.active : '')} onClick={repeat}>
                    <svg className={styles.playerBtnRepeatSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div  className={styles.playerBtnShuffle} onClick={() => alert('Еще не реализовано')}>
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
                    <div className={styles.trackPlayLike}>
                      <svg className={styles.trackPlayLikeSvg}>
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
                        onTimeUpdate={(e) => {
                          setCurrentTime(e.currentTarget.currentTime);
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
//
export default Bar;