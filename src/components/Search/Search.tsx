import styles from './Search.module.css'
const Search = () => {
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
          />
        </div>
    )
}
export default Search;