import React, { useEffect } from 'react';
import styles from './FilterDate.module.css';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { setAuthors, setGenre, setYears } from '@/store/features/searchSlice';
import cn from 'classnames';
interface FilterDateProps {
    date: string[];
    offset: number;
    type: string,
  }

const FilterDate: React.FC<FilterDateProps> = ({date, offset, type}) => {
  const genres = useAppSelector((state) => state.search.genres);
  const authors = useAppSelector((state) => state.search.authors);
  const years = useAppSelector((state) => state.search.years);
  const dispatch = useAppDispatch()
  const wrapperStyle = {
    left:` ${offset}px`,
  };


  const searchFor = (col: string) => {
    switch (type) {
      case 'genre':
        if (genres.includes(col)) {
          dispatch(setGenre(genres.filter((el) => el !== col)));
        } else {
          dispatch(setGenre([...genres, col]));
        }
        break;
      case 'years':
        if (years == col) {
          dispatch(setYears(''))
        } else {
          dispatch(setYears(col))
        }
      break; 
      case 'authors':
        if (authors.includes(col)) {
          dispatch(setAuthors(authors.filter((el) => el !== col)));
        } else {
          dispatch(setAuthors([...authors, col]));
        }
        break;
      default:
        break;
    }
  };
    return (
       <div className={styles.wrapper} style={wrapperStyle}>
        {date.map(col => (
          <p className={cn(styles.link, genres.find(el => el == col) || years.includes(col) || authors.find(el => el == col)? styles.active : '')} key={col} onClick={() => searchFor(col)}>{col}</p>
          ))}
       </div>
    )
}
export default FilterDate;