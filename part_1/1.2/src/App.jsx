const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => (
    <h1>{props.name}</h1>
  )

  const Part = (props) => (
    <p>
      {props.name} {props.exercises}
    </p>
  )

  const Content = () => {
    return (
      <div>
        <Part name={part1} exercises={exercises1} />
        <Part name={part2} exercises={exercises2} />
        <Part name={part3} exercises={exercises3} />
      </div>
    )
  }

  const Total = (props) => (
    <p>Number of exercises {props.sum}</p>
  )

  return (
    <div>
      <Header name={course} />

      <Content />

      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App