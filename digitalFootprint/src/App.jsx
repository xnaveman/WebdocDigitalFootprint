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
import { useLanguage } from './contexts/LanguageContext'

function App() {
  const { t } = useLanguage();
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

          <Shortcut icon={binIcon} label={t('corbeille')} />
          <Shortcut icon={settingsIcon} label={t('parametres')} onDoubleClick={() => openWindow(windowsConfig[13])} />

          <Shortcut icon={docIcon} label={t('recap')} onDoubleClick={() => openWindow(windowsConfig[5])} />

          <Shortcut icon={folderIcon} label={t('affaire1')} onDoubleClick={() => openWindow(windowsConfig[6])} />
          <Shortcut icon={folderIcon} label={t('affaire2')} onDoubleClick={() => openWindow(windowsConfig[7])} />
          <Shortcut icon={folderIcon} label={t('affaire3')} onDoubleClick={() => openWindow(windowsConfig[8])} />
          <Shortcut icon={folderIcon} label={t('affaire4')} onDoubleClick={() => openWindow(windowsConfig[9])} />

          <Shortcut icon={videoIcon} label={t('juriste1')} onDoubleClick={() => openWindow(windowsConfig[14])} />

          <Shortcut icon={videoIcon} label={t('juriste2')} onDoubleClick={() => openWindow(windowsConfig[15])} />
          <Shortcut icon={videoIcon} label={t('juriste2Part2')} onDoubleClick={() => openWindow(windowsConfig[16])} />



          <Shortcut icon={videoIcon} label={t('expertCyber')} onDoubleClick={() => openWindow(windowsConfig[12])} />

          <Shortcut icon={submitIcon} label={t('rapport')} onDoubleClick={() => openWindow(windowsConfig[10])} />


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
