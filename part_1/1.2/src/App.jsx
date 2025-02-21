const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

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
        <Part name={parts[0].name} exercises={parts[0].exercises} />
        <Part name={parts[1].name} exercises={parts[1].exercises} />
        <Part name={parts[2].name} exercises={parts[2].exercises} />
      </div>
    )
  }

  const Total = (props) => (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
  )

  return (
    <div>
      <Header name={course} />

      <Content />

      <Total parts={parts} />
    </div>
  )
}

export default App