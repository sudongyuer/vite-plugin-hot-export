import './App.css'
import { LongZhu, Love } from './images'
import logo from './logo.svg'
import { DanGao, ReactIcon, Reactquery } from './svgs'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          style={{ width: '150px' }}
          src={LongZhu}
         />
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}>
          <ReactIcon/>
          <DanGao/>
          <Reactquery/>
        </p>
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
