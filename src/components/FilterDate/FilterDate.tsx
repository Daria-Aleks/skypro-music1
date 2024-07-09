import React from 'react';
interface FilterDateProps {
    date: any[];
  }
  
const FilterDate: React.FC<FilterDateProps> = ({date}) => {
    return (
       <div>
        {date.map(col => (
          <div key={col}>{col}</div>
          ))}
       </div>
    )
}
export default FilterDate;