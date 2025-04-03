import { useState } from 'react'
const Button = ({handleClick,text}) => 
  <button onClick={handleClick}>
    {text}
  </button>
const StatisticLine = ({text,value}) => {
  if (text == "positive"){
    return(
      <tr>
        <td>{text}</td>
        <td>{Math.trunc(value*10)/10} %</td>
      </tr>
    )
  }
  if (text == "avg"){
    return(
      <tr>
        <td>{text}</td>
        <td>{Math.trunc(value*10)/10}</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if(props.value4 == 0){
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.value1}/>
        <StatisticLine text="neutral" value={props.value2}/>
        <StatisticLine text="bad" value={props.value3}/>
        <StatisticLine text="all" value={props.value4}/>
        <StatisticLine text="avg" value={props.value5}/>
        <StatisticLine text="positive" value={props.value6}/>
      </tbody>
    </table>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive,setPositive] = useState(0)
  const onClickGood = () => {
    const allGood = good + 1
    const avgTotal = allGood - bad
    const total = allGood + neutral + bad
    setGood(allGood)
    setAll(total)
    setAvg(avgTotal/total)
    setPositive(allGood/total*100)
  }
  const onClickNeutral = () => {
    const allNeutral = neutral + 1
    const total = good + allNeutral + bad
    setNeutral(allNeutral)
    setAll(total)
    setAvg(avg/total)
    setPositive(good/total*100)
  }
  const onClickBad = () => {
    const allBad = bad + 1
    const total = good + neutral + allBad
    const avgTotal = good - allBad
    setBad(allBad)
    setAll(total)
    setAvg(avgTotal/total)
    setPositive(good/total*100)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={onClickGood} text='good'/>
      <Button handleClick={onClickNeutral} text='neutral'/>
      <Button handleClick={onClickBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics value1={good} value2 = {neutral} value3 = {bad} value4 = {all} value5 = {avg} value6 = {positive} />
    </div>
  )
}
export default App