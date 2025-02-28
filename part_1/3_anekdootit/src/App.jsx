import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Map())
  const [refreshCounter, setRefreshCounter] = useState(0)

  const vote = () => () => {
    const copyOfVotes = new Map(votes)
    copyOfVotes.set(selected, (votes.get(selected) || 0) + 1)
    setVotes(copyOfVotes)
    console.log('voted', selected, 'which now has', votes.get(selected), 'votes')
    // force refresh of component. is there really no better way to do this?
    setRefreshCounter(refreshCounter + 1)
  }

  const findAnecdoteWithMostVotes = () => {
    let maxVotes = 0
    let anecdoteWithMostVotes = ''
    for (const [anecdoteIndex, voteCount] of votes.entries()) {
      if (voteCount > maxVotes) {
        maxVotes = voteCount
        anecdoteWithMostVotes = anecdotes[anecdoteIndex]
      }
    }
    return anecdoteWithMostVotes
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes.get(selected) || 0} votes
      <br />
      <button onClick={vote()}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {findAnecdoteWithMostVotes()}
    </div>
  )
}

export default App