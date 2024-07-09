import styles from './Filter.module.css'
const Filter = () => {
    return (
        <div className={styles.centerblockFilter}>
          <div className={styles.filterTitle}>Искать по:</div>
          <div className={styles.filterButton}>
            исполнителю
          </div>
          <div className={styles.filterButton}>
            году выпуска
          </div>
          <div className={styles.filterButton}>жанру</div>
        </div>
    )
}
export default Filter;