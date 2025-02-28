import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.setter(props.oldValue + 1)}>{props.text}</button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral > 0)
    return (
      <table>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} />
        <StatisticsLine text="positive" value={`${(good / (good + neutral + bad) * 100)} %`} />
      </table>
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