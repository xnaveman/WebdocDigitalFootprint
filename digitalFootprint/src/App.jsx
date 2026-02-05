import { useState } from 'react'
import './App.css'

import docIcon from '/assets/icons/doc-icon.png'
import settingsIcon from '/assets/icons/settings-icon.png'
import imageIcon from '/assets/icons/image-icon.png'
import folderIcon from '/assets/icons/folder-icon.png'
import binIcon from '/assets/icons/bin-icon.png'
import videoIcon from '/assets/icons/video-icon.png'

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

          <Shortcut icon={binIcon} label="Corbeille" />
          <Shortcut icon={settingsIcon} label="Ce Pc" />

          <Shortcut icon={docIcon} label="RÉCAP.txt" onClick={() => openWindow(windowsConfig[5])} />

          <Shortcut icon={folderIcon} label="Affaire 1" onClick={() => openWindow(windowsConfig[6])} />
          <Shortcut icon={folderIcon} label="Affaire 2" onClick={() => openWindow(windowsConfig[7])} />
          <Shortcut icon={folderIcon} label="Affaire 3" onClick={() => openWindow(windowsConfig[8])} />
          <Shortcut icon={folderIcon} label="Affaire 4" onClick={() => openWindow(windowsConfig[9])} />

          <Shortcut icon={videoIcon} label="JURISTE.mp4" onClick={() => openWindow(windowsConfig[3])} />
          <Shortcut icon={docIcon} label="Transcription.txt" />

          <Shortcut icon={videoIcon} label="JURISTE.mp4" onClick={() => openWindow(windowsConfig[3])} />
          <Shortcut icon={docIcon} label="Transcription.txt" />

          <Shortcut icon={videoIcon} label="BOUICHE.mp4" onClick={() => openWindow(windowsConfig[3])} />
          <Shortcut icon={docIcon} label="Transcription.txt" />

          <Shortcut icon={docIcon} label="Who this" onClick={() => openWindow(windowsConfig[4])} />
          <Shortcut icon={videoIcon} label="Rick ?" onClick={() => openWindow(windowsConfig[3])} />




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
