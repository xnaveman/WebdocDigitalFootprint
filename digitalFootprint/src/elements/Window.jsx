import './Window.css';
import { useState } from 'react';
import Settings from './Settings';
import Quiz from './Quiz';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslatedContent } from '../windowsConfig';

let windowCounter = 0;
const WINDOW_OFFSET = 30;

function Window({ config, onClose }) {
    const { t } = useLanguage();
    
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

    // Get the translated title
    const getTitle = () => {
        if (config.titleKey) {
            return t(config.titleKey);
        }
        return config.title || '';
    };

    const renderContent = () => {
        switch (config.content.type) {
            case 'text':
                return <p>{config.content.data}</p>;
            case 'image':
                return <img src={config.content.data} alt={getTitle()} className="window-media" />;
            case 'video':
                return <video src={config.content.data} controls autoPlay className="window-media" />;
            case 'html':
                return <div dangerouslySetInnerHTML={{ __html: config.content.data }} />;
            case 'translated':
                const translatedHtml = getTranslatedContent(config.content.template, t, config.content.video);
                return <div dangerouslySetInnerHTML={{ __html: translatedHtml }} />;
            case 'component':
                if (config.content.data === 'Settings') {
                    return <Settings />;
                }
                if (config.content.data === 'Quiz') {
                    return <Quiz />;
                }
                return null;
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
                <div className="windowTitle">{getTitle()}</div>
                <div className="windowControls">
                    <button className="minimize">_</button>
                    <button className="maximize" onClick={() => {}}>[ ]</button>
                    <button className="close" onClick={onClose}>X</button>
                </div>
            </div>
            <div className={`windowContent ${config.content.type === 'image' || config.content.type === 'video' ? 'windowContent-media' : ''}`}>
                {renderContent()}
                {isDragging && <div className="drag-overlay" />}
            </div>
        </div>
    );
}

export default Window