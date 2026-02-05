import './Shortcut.css';
import { useState } from 'react';

function Shortcut({ icon, label, onDoubleClick }) {
    const [clickTimeout, setClickTimeout] = useState(null);

    const handleClick = () => {
        if (clickTimeout) {
            clearTimeout(clickTimeout);
            setClickTimeout(null);
            onDoubleClick();
        } else {
            const timeout = setTimeout(() => {
                setClickTimeout(null);
            }, 300);
            setClickTimeout(timeout);
        }
    };

    return (
        <div className="shortcut" onClick={handleClick}>
            <img src={icon} alt="Shortcut Icon" className="shortcut-icon" />
            <span className="shortcut-label">{label}</span>
        </div>
    );
}

export default Shortcut;