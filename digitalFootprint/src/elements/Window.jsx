import './Window.css';
import { useState } from 'react';

let windowCounter = 0;
const WINDOW_OFFSET = 30;

function Window({ config, onClose }) {
    const [position, setPosition] = useState({ 
        x: 100 + (windowCounter * WINDOW_OFFSET) % 500,
        y: 100 + (windowCounter * WINDOW_OFFSET) % 500
    });
    windowCounter++;

    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const renderContent = () => {
        switch (config.content.type) {
            case 'text':
                return <p>{config.content.data}</p>;
            case 'image':
                return <img src={config.content.data} alt={config.title} style={{ maxWidth: '100%' }} />;
            case 'video':
                return <video src={config.content.data} controls autoPlay style={{ maxWidth: '100%' }} />;
            case 'html':
                return <div dangerouslySetInnerHTML={{ __html: config.content.data }} />;
            default:
                return <p>{config.content.data}</p>;
        }
    };

    return (
        <div 
            className="windowContainer" 
            style={{ left: position.x, top: position.y }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="windowHeader" onMouseDown={handleMouseDown}>
                <div className="windowTitle">{config.title}</div>
                <div className="windowControls">
                    <button className="minimize">_</button>
                    <button className="maximize" onClick={() => {}}>[ ]</button>
                    <button className="close" onClick={onClose}>X</button>
                </div>
            </div>
            <div className="windowContent">
                {renderContent()}
            </div>
        </div>
    );
}

export default Window