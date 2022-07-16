import './App.css'
import { PngIcon } from './images'
import logo from './logo.svg'
import { SvgDanGao, SvgReactIcon, SvgReactquery } from './svgs'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img
          style={{ width: '150px' }}
          src={PngIcon}
         />
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}>
          <SvgDanGao/>
          <SvgReactIcon/>
          <SvgReactquery/>
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
