import { useState } from 'react'
import './App.css'

import docIcon from '/assets/icons/doc-icon.png'
import settingsIcon from '/assets/icons/settings-icon.png'
import imageIcon from '/assets/icons/image-icon.png'
import folderIcon from '/assets/icons/folder-icon.png'
import binIcon from '/assets/icons/bin-icon.png'
import videoIcon from '/assets/icons/video-icon.png'
import submitIcon from '/assets/icons/submit-icon.png'

import Taskbar from './elements/Taskbar.jsx'
import Shortcut from './elements/Shortcut.jsx'
import Window from './elements/Window.jsx'
import { windowsConfig } from './windowsConfig.js'

function App() {
  const [windows, setWindows] = useState([
    { ...windowsConfig.find(win => win.id === 'folder'), instanceId: Date.now() }
  ]);

  const openWindow = (config) => {
    setWindows([...windows, { ...config, instanceId: Date.now() }]);
  };

  const closeWindow = (instanceId) => {
    setWindows(windows.filter(win => win.instanceId !== instanceId));
  };

  const closeWindowById = (windowId) => {
    setWindows(prevWindows => prevWindows.filter(win => win.id !== windowId));
  };

  window.openWindow = openWindow;
  window.closeWindow = closeWindowById;
  window.windowsConfig = windowsConfig;


  return (
    <>
      <img src="/assets/wallpapers/blue-dark.png" alt="Background" className='wallpaper' style={{ userSelect: 'none' }} />
      <div className="desktop">
        <div className="shortcuts">

          <Shortcut icon={binIcon} label="Corbeille" />
          <Shortcut icon={settingsIcon} label="Paramètres" />

          <Shortcut icon={docIcon} label="RÉCAP.txt" onDoubleClick={() => openWindow(windowsConfig[5])} />

          <Shortcut icon={folderIcon} label="Affaire 1" onDoubleClick={() => openWindow(windowsConfig[6])} />
          <Shortcut icon={folderIcon} label="Affaire 2" onDoubleClick={() => openWindow(windowsConfig[7])} />
          <Shortcut icon={folderIcon} label="Affaire 3" onDoubleClick={() => openWindow(windowsConfig[8])} />
          <Shortcut icon={folderIcon} label="Affaire 4" onDoubleClick={() => openWindow(windowsConfig[9])} />

          <Shortcut icon={videoIcon} label="JURISTE1.mp4" onDoubleClick={() => openWindow(windowsConfig[3])} />
          <Shortcut icon={docIcon} label="Transcription1.txt" />

          <Shortcut icon={videoIcon} label="JURISTE2.mp4" onDoubleClick={() => openWindow(windowsConfig[3])} />
          <Shortcut icon={docIcon} label="Transcription2.txt" />

          <Shortcut icon={videoIcon} label="BOUICHE.mp4" onDoubleClick={() => openWindow(windowsConfig[3])} />
          <Shortcut icon={docIcon} label="Transcription3.txt" />

          <Shortcut icon={videoIcon} label="Rick ?" onDoubleClick={() => openWindow(windowsConfig[3])} />


          <Shortcut icon={submitIcon} label="RAPPORT" onDoubleClick={() => openWindow(windowsConfig[10])} />


        </div>
      </div>

      {windows.map((win) => (
        <Window key={win.instanceId} config={win} onClose={() => closeWindow(win.instanceId)} />
      ))}

      <Taskbar onOpenWindow={openWindow} />
    </>
  )
}

//{*<Shortcut icon={docIcon} label="Who this" onDoubleClick={() => openWindow(windowsConfig[4])} />}

export default App
