import { useLanguage } from '../contexts/LanguageContext';
import './Settings.css';

function Settings() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div className="settings-container">
            <h1>{t('settingsTitle')}</h1>
            
            <div className="settings-section">
                <h2>{t('language')}</h2>
                <div className="settings-options">
                    <button 
                        className={`settings-btn ${language === 'fr' ? 'active' : ''}`}
                        onClick={() => setLanguage('fr')}
                    >
                        🇫🇷 {t('french')}
                    </button>
                    <button 
                        className={`settings-btn ${language === 'en' ? 'active' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        🇬🇧 {t('english')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
