import './Taskbar.css';
import { CgFolder, CgEye, CgGlobeAlt, CgBell, CgLogOff, CgBatteryFull } from "react-icons/cg";
import { windowsConfig } from '../windowsConfig';

const iconMap = {
    CgFolder,
    CgEye,
    CgGlobeAlt
};

function Taskbar({ onOpenWindow }) {
    const hardcodedConfigs = windowsConfig.slice(0, 3);

    return (
        <div className="taskbar">
            <div className="taskbar-icons">
                {hardcodedConfigs.map((config) => {
                    const Icon = iconMap[config.icon];
                    return (
                        <div 
                            key={config.id} 
                            className="taskbar-item" 
                            onClick={() => onOpenWindow(config)}
                        >
                            <Icon />
                        </div>
                    );
                })}
            </div>
            <div className="taskbar-statuses">
                <div className="taskbar-status"><CgBell></CgBell></div>
                <div className="taskbar-status"><CgBatteryFull></CgBatteryFull></div>
                <div className="taskbar-status"><CgLogOff></CgLogOff></div>
            </div>
        </div>
    );
}

export default Taskbar;