import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of feedback item')
  const handleClick = () => {
    setRating(10)
  }

  return (
    <div classnName='card'>
      <div className="numDisplay">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem