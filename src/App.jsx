import './App.css'
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import Cards from './component/Cards/Cards'
import Cook from './component/Cook/Cook'

function App() {
  
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='flex mb-16'>
      <Cards></Cards>
      <Cook></Cook>
      </div>
    </>
  )
}

export default App
