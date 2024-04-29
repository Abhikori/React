import Card from './components/Card'
import './App.css'


function App() {


  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl' >Tailwind Test</h1>
    <Card username="react" btnText="clickme"/>
    <Card username="react"/>
    </>
  )
}

export default App
