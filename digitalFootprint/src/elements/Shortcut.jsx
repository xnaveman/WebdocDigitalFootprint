import './Shortcut.css';

function Shortcut({ icon, label}) {
    return (
        <div className="shortcut">
            <img src={icon} alt="Shortcut Icon" className="shortcut-icon" />
            <span className="shortcut-label">{label}</span>
        </div>
    );
}

export default Shortcut;