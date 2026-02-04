import { useState } from 'react'
import './App.css'

import Taskbar from './elements/Taskbar.jsx'
import Shortcut from './elements/Shortcut.jsx'
import Window from './elements/Window.jsx'
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
      <img src="/assets/wallpapers/blue-dark.png" alt="Background" className='wallpaper' style={{ userSelect: 'none' }} />
      <div className="desktop">
        <div className="shortcuts">
          <Shortcut icon="/assets/icons/bin-icon.png" label="Corbeille" />
          <Shortcut icon="/assets/icons/pc-icon.png" label="Ce Pc" />
          <Shortcut icon="/assets/icons/rickastley.webp" label="Rick ?" onClick={() => openWindow(windowsConfig[3])} />
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
