import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'

function Item({ items, removeItem }) {
  return items.map((item, index) => (
    <div className='item-row' key={index}>
      <div key={item.id}>{item.text}</div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeItem(item.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ))
}

export default Item
