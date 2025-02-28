import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.setter(props.oldValue + 1)}>{props.text}</button>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral > 0)
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
        <p>positive {good / (good + neutral + bad) * 100} %</p>
      </div>
    )
  else 
    return <p>No feedback given</p>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setter={setGood} oldValue={good} text='good' />
      <Button setter={setNeutral} oldValue={neutral} text='neutral' />
      <Button setter={setBad} oldValue={bad} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App