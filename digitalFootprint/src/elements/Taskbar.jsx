import './taskbar.css';
import { CgFolder, CgEye, CgGlobeAlt } from "react-icons/cg";
import { windowsConfig } from '../windowsConfig';

const iconMap = {
    CgFolder,
    CgEye,
    CgGlobeAlt
};

function Taskbar({ onOpenWindow }) {
    return (
        <div className="taskbar">
            {windowsConfig.map((config) => {
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
    );
}

export default Taskbar;