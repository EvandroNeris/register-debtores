import React from 'react';
import { IList } from '../../interfaces';
import { SItemList } from '../../styles/s.item-list';
import './style.css';

const List: React.FC<IList> = ({
  data
}) => {
  return (
    <ul>
      {
        data.map((item: any, index: number) => {
          return (
          <SItemList key={index}>
            <span>{item.name}</span> 
            <span className="circle-total">{item.totalDebits}</span>
          </SItemList>
          );
        })
      }
    </ul>
  );
}

export default List;
