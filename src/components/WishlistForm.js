import '../App.css'
import React, { useState, useRef, useEffect } from 'react'

function WishlistForm(props) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const change = (e) => {
    setInput(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    props.onSubmit({
      id: `${input}${Math.floor(Math.random() * 10000)}`,
      text: input,
    })
    setInput('')
  }

  return (
    <form className='wishlist-form ' onSubmit={submit}>
      <input
        type='text'
        placeholder='Add item'
        value={input}
        name='text'
        className='item-input'
        onChange={change}
        ref={inputRef}
      />
      <button className='item-button'>Add item</button>
    </form>
  )
}

export default WishlistForm
