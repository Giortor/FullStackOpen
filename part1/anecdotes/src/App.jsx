import { useState } from 'react'
const Topvote = ({value,anecdotesTop}) => {
  if (value == 0){
    return (
      <div>
        There are no anecdotes with most votes
      </div>
    )
  }
  return (
    <div>
        {anecdotesTop}
        <div>has {value} votes </div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = Array(anecdotes.length).fill(0)
  //const votes = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
  const [selected, setSelected] = useState(0)
  const [register,setRegister] = useState(votes)
  const [indexTop, setindexTop] = useState(0)
  const [valueTop, setvalueTop] = useState(0)
  const randomUpdate = () => {
    const random = Math.floor(Math.random()*(anecdotes.length))
    setSelected(random)
  }
  const verifyIndex = (array) => {
    let num=0
    let index
    for (let i = 0; i < array.length; i++) {
      if(array[i]>num){
        num=array[i]
        index=i
      }
    }
    return index
  }
  const verifyTop = (array) => {
    let num=0
    for (let i = 0; i < array.length; i++) {
      if(array[i]>num){
        num=array[i]
      }
    }
    return num
  }
  const voteUpdate = () => {
    const copy = { ...register}
    copy[selected] += 1
    setRegister(copy)
    setvalueTop(verifyTop(Object.values(copy)))
    setindexTop(verifyIndex(Object.values(copy)))
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
        <div>has {register[selected]} votes</div>
        <div>
          <button onClick={voteUpdate}>vote</button>
          <button onClick={randomUpdate}>next anecdote</button>
        </div>
      </div>
      <h1>Anedote with most votes</h1>
      <Topvote anecdotesTop={anecdotes[indexTop]} value={valueTop} />
    </div>
  )
}
export default App