import React, { useState } from 'react';
import { IList } from '../../interfaces';
import { SItemList } from '../../styles/s.item-list';
import './style.css';

const List: React.FC<IList> = ({
  data,
  click
}) => {
  const [selected, setSelected] = useState(NaN);

  function onSelect(id: number, index: number): void {
    click(id);
    setSelected(index);
  }

  return (
    <ul className="height">
      {
        data ? (data.map((item: any, index: number) => {
          return (
          <SItemList  backgroundColor={selected == index ? '#ebebeb' : '#fff'} key={index} onClick={() => onSelect(item.id, index)}>
            <span>{item.name}</span> 
            <span className="circle-total">{item.totalDebits}</span>
          </SItemList>
          );
        })) : (
          <div className="empty-container">
            <p>Ainda não temos clientes xD</p>
          </div>
        )
      }
    </ul>
  );
}

export default List;
