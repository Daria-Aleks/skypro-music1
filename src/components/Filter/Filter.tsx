"use client"
import styles from './Filter.module.css';
import { useState } from 'react';
import FilterDate from '../FilterDate/FilterDate'
import classNames from 'classnames';
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

function uniqueArray(tracks: Track[], key: keyof Track): string[] {
  return Array.from(new Set(tracks.map(track => track[key] as string)));
}
interface FilterProps {
tracks: Track[];
}
const Filter: React.FC<FilterProps> = ({tracks}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const uniqueYears = ['По умолчанию', 'Новые', 'Старые'];

    return (
        <div className={styles.centerblockFilter}>
          <div className={styles.filterTitle}>Искать по:</div>
          <div className={classNames(styles.filterButton, activeFilter === 'author' ? styles.active : '')} 
            onClick={() => setActiveFilter(activeFilter === 'author' ? null : 'author')}>
            исполнителю
          </div>
          {activeFilter === 'author' && (
            <div>
              <FilterDate date={uniqueArray(tracks, 'author')} offset={460}/> 
              <div className={styles.col}>{uniqueArray(tracks, 'author').length}</div>
            </div>
          )}
          <div className={classNames(styles.filterButton, activeFilter === 'year' ? styles.active : '')}
            onClick={() => setActiveFilter(activeFilter === 'year' ? null : 'year')}>
            году выпуска
          </div>
          {activeFilter === 'year' && (
            <div>
              <FilterDate date={uniqueYears} offset={630}/> 
              <div className={styles.col}>{uniqueYears.length}</div>
          </div>
          )}
          <div className={classNames(styles.filterButton, activeFilter === 'genre' ? styles.active : '')}
           onClick={() => setActiveFilter(activeFilter === 'genre' ? null : 'genre')}
           >жанру</div>
          {activeFilter === 'genre' && (
            <div>
              <FilterDate date={uniqueArray(tracks, 'genre')} offset={790}/> 
              <div className={styles.col}>{uniqueArray(tracks, 'genre').length}</div>
            </div>
          )}
        </div>
    )
}
export default Filter;