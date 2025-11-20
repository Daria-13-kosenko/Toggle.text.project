import { useRef, useState } from 'react'
import styles from '../components/Toggle.module.css'

function ToggleText() {
  const textRef = useRef(null)

  const [isVisible, setIsVisible] = useState(true)
  const [duretion, setDuretion] = useState(500)

  const toggleText = () => {
    setIsVisible(!isVisible)
  }
  const changeDuration = (e) => {
    setDuretion(Number(e.target.value))
  }

  return (
    <div className={styles.container}>
      <button onClick={toggleText} className={styles.btn}>
        {isVisible ? 'Hide text' : 'Snow text'}
      </button>
      <input
        type="number"
        value={duretion}
        onChange={changeDuration}
        className={styles.input}
        placeholder="Animation duration"
      ></input>
      <div
        ref={textRef}
        className={`styles.text-block ${isVisible ? 'snow' : 'hide'}`}
      >
        This is animated text.
      </div>
    </div>
  )
}
export default ToggleText
