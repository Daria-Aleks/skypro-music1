import styles from './Filter.module.css';
import { useState } from 'react';
import FilterDate from '../FilterDate/FilterDate'
import cn from 'classnames';
import Track from '../../app/trackType'

interface FilterProps {
tracks: Track[];
}
const Filter: React.FC<FilterProps> = ({tracks}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const uniqueAuthors = Array.from(new Set(tracks.map(track => track.author)));
  const uniqueYears = ['По умоллчанию', 'Новые', 'Старые']
  const uniqueGenres = Array.from(new Set(tracks.map(track => track.genre)));

    return (
        <div className={styles.centerblockFilter}>
          <div className={styles.filterTitle}>Искать по:</div>
          <div className={cn(styles.filterButton, activeFilter === 'author' ? styles.active : '')} 
            onClick={() => setActiveFilter(activeFilter === 'author' ? null : 'author')}>
            исполнителю
          </div>
          {activeFilter === 'author' && (
            <div>
              <FilterDate date={uniqueAuthors} offset={460}/> 
              <div className={styles.col}>{uniqueAuthors.length}</div>
            </div>
          )}
          <div className={cn(styles.filterButton, activeFilter === 'year' ? styles.active : '')}
            onClick={() => setActiveFilter(activeFilter === 'year' ? null : 'year')}>
            году выпуска
          </div>
          {activeFilter === 'year' && (
            <div>
              <FilterDate date={uniqueYears} offset={630}/> 
              <div className={styles.col}>{uniqueYears.length}</div>
          </div>
          )}
          <div className={cn(styles.filterButton, activeFilter === 'genre' ? styles.active : '')}
           onClick={() => setActiveFilter(activeFilter === 'genre' ? null : 'genre')}
           >жанру</div>
          {activeFilter === 'genre' && (
            <div>
              <FilterDate date={uniqueGenres} offset={790}/> 
              <div className={styles.col}>{uniqueGenres.length}</div>
            </div>
          )}
        </div>
    )
}
export default Filter;