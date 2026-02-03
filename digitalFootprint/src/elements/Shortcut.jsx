import './Shortcut.css';

function Shortcut({ icon, label, onClick}) {
    return (
        <div className="shortcut" onClick={onClick}>
            <img src={icon} alt="Shortcut Icon" className="shortcut-icon" />
            <span className="shortcut-label">{label}</span>
        </div>
    );
}

export default Shortcut;