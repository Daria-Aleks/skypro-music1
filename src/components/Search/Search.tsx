import { useState } from 'react';
import styles from './Search.module.css'
import { useAppSelector, useAppDispatch } from '@/store/store';
import { setSearchTerm} from '@/store/features/searchSlice';
const Search = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  // const [searchTerm, setSearchTerm] = useState('')
  
  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }
    return (
        <div className={styles.centerblockSearch}>
          <svg className={styles.searchSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </svg>
          <input
            type="search"
            placeholder="Поиск"
            name="search"
            className={styles.searchText}
            value={searchTerm}
            onChange={e => handleInputChange(e)}
          />
        </div>
    )
}
export default Search;