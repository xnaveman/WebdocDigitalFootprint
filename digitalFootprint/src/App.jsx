import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from '../src/assets/wallpapers/blue-dark.png'

import Taskbar from './elements/taskbar.jsx';
import Shortcut from './elements/Shortcut.jsx';

function App() {

  return (
    <>
      <img src={Background} alt="Background" className='wallpaper' style={{ userSelect: 'none' }} />
      <div className="desktop">
        <div className="shortcuts">
          <Shortcut icon="../src/assets/icons/bin-icon.png" label="Corbeille" />
          <Shortcut icon="../src/assets/icons/pc-icon.png" label="Ce Pc" />
        </div>
      </div>
      <Taskbar />
    </>
  )
}

export default App
