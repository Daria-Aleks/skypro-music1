import styles from './Bar.module.css'
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
  
}

const Bar: React.FC<BarProps>= () => {
    return (
        <div className={styles.bar}>
          <div className={styles.barContent}>
            <div className={styles.barPlayerProgress} />
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <div className={styles.playerControls}>
                  <div className={styles.playerBtnPrev}>
                    <svg className={styles.playerBtnPrevSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div className={styles.playerBtnPlay}>
                    <svg className={styles.playerBtnPlaySvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div className={styles.playerBtnNext}>
                    <svg className={styles.playerBtnNextSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div className={styles.playerBtnRepeat}>
                    <svg className={styles.playerBtnRepeatSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div  className={styles.playerBtnShuffle}>
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
                        Ты та...
                      </p>
                    </div>
                    <div className={styles.trackPlayAlbum}>
                      <a href="http://" className={styles.trackPlayAlbumLink}>
                        Баста
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