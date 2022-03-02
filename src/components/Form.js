import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Youre name</label>
            <input type='text'></input>

            <label>Email</label>
            <input type='email'></input>

            <label>Subject</label>
            <input type='text'></input>

            <label>Details</label>
            <textarea rows='6' placeholder='Type a message' />
            <button className='btn'>SEND</button>
        </form>
    </div>
  )
}

export default Form