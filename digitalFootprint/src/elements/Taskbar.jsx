import './taskbar.css';

import { CgFolder } from "react-icons/cg";
import { CgEye } from "react-icons/cg";
import { CgGlobeAlt } from "react-icons/cg";

import Window from './Window';



function Taskbar() {
    return (
        <div className="taskbar">
            <div className="taskbar-item"><CgFolder /></div>
            <div className="taskbar-item"><CgEye /></div>
            <div className="taskbar-item"><CgGlobeAlt /></div>
        </div>
    );
}

export default Taskbar;