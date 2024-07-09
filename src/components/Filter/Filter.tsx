import styles from './Filter.module.css';
import { useState } from 'react';
import FilterDate from '../FilterDate/FilterDate'

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: string;
  release_date: Date;
  genre: string;
}
interface FilterProps {
tracks: Track[];
}
const Filter: React.FC<FilterProps> = ({tracks}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const uniqueAuthors = Array.from(new Set(tracks.map(track => track.author)));
  const uniqueYears = Array.from(new Set(tracks.map(track => new Date(track.release_date).getFullYear())));
  const uniqueGenres = Array.from(new Set(tracks.map(track => track.genre)));
    return (
        <div className={styles.centerblockFilter}>
          <div className={styles.filterTitle}>Искать по:</div>
          <div className={styles.filterButton} 
            onClick={() => setActiveFilter(activeFilter === 'author' ? null : 'author')}>
            исполнителю
          </div>
          {activeFilter === 'author' && (
            <FilterDate date={uniqueAuthors}/> 
          )}
          <div className={styles.filterButton}
            onClick={() => setActiveFilter(activeFilter === 'year' ? null : 'year')}>
            году выпуска
          </div>
          {activeFilter === 'year' && (
            <FilterDate date={uniqueYears}/> 
          )}
          <div className={styles.filterButton}
           onClick={() => setActiveFilter(activeFilter === 'genre' ? null : 'genre')}
           >жанру</div>
          {activeFilter === 'genre' && (
            <FilterDate date={uniqueGenres}/> 
          )}
        </div>
    )
}
export default Filter;