import React from 'react';
import styles from './FilterDate.module.css';

interface FilterDateProps {
    date: [];
    offset: number;
  }

const FilterDate: React.FC<FilterDateProps> = ({date, offset}) => {
  console.log(date)
  const wrapperStyle = {
    left:` ${offset}px`,
  };
  console.log(wrapperStyle)
    return (
       <div className={styles.wrapper} style={wrapperStyle}>
        {date.map(col => (
          <p className={styles.link} key={col}>{col}</p>
          ))}
       </div>
    )
}
export default FilterDate;