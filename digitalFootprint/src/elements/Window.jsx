import './Window.css';
import { useState } from 'react';

let windowCounter = 0;
const WINDOW_OFFSET = 30;

function Window({ config, onClose }) {
    const getInitialPosition = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const windowWidth = screenWidth < 768 ? screenWidth * 0.9 : (screenWidth < 1200 ? 650 : 800);
        const windowHeight = screenHeight < 768 ? screenHeight * 0.7 : (screenHeight < 1200 ? 550 : 650);

        const baseX = (screenWidth - windowWidth) / 3.5;
        const baseY = (screenHeight - windowHeight) / 5;

        const offsetX = (windowCounter * WINDOW_OFFSET) % Math.min(screenWidth / 4, screenWidth - windowWidth - 20);
        const offsetY = (windowCounter * WINDOW_OFFSET) % Math.min(screenHeight / 4, screenHeight - windowHeight - 100);

        return {
            x: Math.min(baseX + offsetX, screenWidth - windowWidth - 10),
            y: Math.min(baseY + offsetY, screenHeight - windowHeight - 80)
        };
    };

    const [position, setPosition] = useState(getInitialPosition());
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