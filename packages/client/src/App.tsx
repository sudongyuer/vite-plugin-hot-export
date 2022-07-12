import './App.css'
import { LongZhu, Love } from './images'
import logo from './logo.svg'
import { Reactquery } from './svgs'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          style={{ width: '150px' }}
          src={Love}
         />
        <Reactquery/>
        <p>Hello Vite + React!</p>
        <p>
          Sudongyuer Demo show 🐟
        </p>
        <p>
          vite-plugin-hot-export
        </p>
        {/* <img src={Gold}></img> */}
      </header>
    </div>
  )
}

export default App
