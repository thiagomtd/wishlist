import '../App.css'
import React, { useState, useEffect } from 'react'
import Item from './Item'
import WishlistForm from './WishlistForm'
import axios from 'axios'

function Wishlist({ user }) {
  const [items, setItems] = useState([])

  console.log(user.attributes.sub)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://9et9mm5cqh.execute-api.us-east-1.amazonaws.com/DEV/carrinho?user_id=${user.attributes.sub}`,
    }).then((response) => {
      console.log(response)
      if (response.status === 200) {
        setItems(response.data)
      }
    })
  }, [])

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return
    }
    const newItems = [item, ...items]
    axios({
      method: 'PUT',
      url: `https://9et9mm5cqh.execute-api.us-east-1.amazonaws.com/DEV/carrinho`,
      data: JSON.stringify({
        user_id: user.attributes.sub,
        carrinho: newItems,
      }),
    }).then((response) => {
      if (response.status === 200) {
        setItems(newItems)
      }
    })
  }

  const removeItem = (id) => {
    const removeArr = [...items].filter((item) => item.id !== id)
    axios({
      method: 'PUT',
      url: `https://9et9mm5cqh.execute-api.us-east-1.amazonaws.com/DEV/carrinho`,
      data: {
        user_id: user.attributes.sub,
        carrinho: removeArr,
      },
    }).then((response) => {
      if (response.status === 200) {
        setItems(removeArr)
      }
    })
  }

  return (
    <div>
      <h1>What item do you want on your wish list? </h1>
      <WishlistForm onSubmit={addItem} />
      <Item items={items} removeItem={removeItem} />
    </div>
  )
}

export default Wishlist
