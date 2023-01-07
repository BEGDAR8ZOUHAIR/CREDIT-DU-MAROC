import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  // const [image, setImage] = useState(null)
  // upload image
  

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
    // setImage('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* apload image */}

        </div>
        {/* upload image */}
        {/* <div className='form-group'>
          <label htmlFor='image'>Image</label>
          <input
            type='file'
            name='image'
            id='image'
            // value={image}
            // onChange={(e) => setImage(e.target.files[0])}
          />
        </div> */}



        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
