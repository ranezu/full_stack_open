const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

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
        <Part name={part1.name} exercises={part1.exercises} />
        <Part name={part2.name} exercises={part2.exercises} />
        <Part name={part3.name} exercises={part3.exercises} />
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

      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App