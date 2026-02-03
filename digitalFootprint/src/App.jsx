import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from '../src/assets/wallpapers/blue-dark.png'

import Taskbar from './elements/Taskbar.jsx';
import Shortcut from './elements/Shortcut.jsx';
import Window from './elements/Window.jsx';
import { windowsConfig } from './windowsConfig.js'

function App() {
  const [windows, setWindows] = useState([]);

  const openWindow = (config) => {
    setWindows([...windows, { ...config, instanceId: Date.now() }]);
  };

  const closeWindow = (instanceId) => {
    setWindows(windows.filter(win => win.instanceId !== instanceId));
  };

  
  return (
    <>
      <img src={Background} alt="Background" className='wallpaper' style={{ userSelect: 'none' }} />
      <div className="desktop">
        <div className="shortcuts">
          <Shortcut icon="../src/assets/icons/bin-icon.png" label="Corbeille" />
          <Shortcut icon="../src/assets/icons/pc-icon.png" label="Ce Pc" />
          <Shortcut icon="../src/assets/icons/rickastley.webp" label="Rick ?" onClick={() => openWindow(windowsConfig[3])} />
        </div>
      </div>

      {windows.map((win) => (
        <Window key={win.instanceId} config={win} onClose={() => closeWindow(win.instanceId)} />
      ))}

      <Taskbar onOpenWindow={openWindow} />
    </>
  )
}

export default App
