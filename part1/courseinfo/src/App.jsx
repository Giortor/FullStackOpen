const Header = (props) => {
  const course = props.course
  return (
    <h1>{course.name}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exer}</p>
  )
}
const Content = (props) => {
  const  course= props.course
  return (
    <div>
      <Part part = {course.parts[0].name} exer = {course.parts[0].exercises}/>
      <Part part = {course.parts[1].name} exer = {course.parts[1].exercises}/>
      <Part part = {course.parts[2].name} exer = {course.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  const course = props.course
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  console.log(sum)
  return (
    <p>Number of exercises {sum}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
export default App