// Base config - titles use translation keys
export const windowsConfig = [
    {
        id: 'folder',
        icon: 'CgFolder',
        titleKey: 'titleFonctionnement',
        content: {
            type: 'translated',
            template: 'fonctionnement'
        }
    },
    {
        id: 'eye',
        icon: 'CgEye',
        titleKey: 'titleApercu',
        content: {
            type: 'image',
            data: '/assets/background.jpeg'
        }
    },
    {
        id: 'globe',
        icon: 'CgGlobeAlt',
        titleKey: 'titleNavigation',
        content: {
            type: 'html',
            data: '<form action="https://www.google.com/search" method="get" target="_blank" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center;">\n<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" style="width:200px; margin-bottom:20px;" />\n<input type="text" name="q" placeholder="Search Google" style="width:80%; padding:10px; font-size:16px;" />\n<button type="submit" style="margin-top:10px; padding:10px 20px; font-size:16px;">Search</button>\n</form>'
        }
    },
    {
        id: 'rickroll',
        icon: 'CgFolder',
        titleKey: 'titleRickroll',
        content: {
            type: 'video',
            data: '/assets/videos/rickvideo.mp4'
        }
    },
    {
        id: 'welovehim',
        icon: 'CgFolder',
        titleKey: 'titleWeLove',
        content: {
            type: 'video',
            data: '/assets/videos/masterclass.mp4'
        }
    },
    {
        id: 'recap',
        icon: 'CgFolder',
        titleKey: 'titleRecap',
        content: {
            type: 'translated',
            template: 'recap'
        }
    },
    {
        id: 'dossier1',
        icon: 'CgFolder',
        titleKey: 'titleDossier1',
        content: {
            type: 'translated',
            template: 'dossier1',
            video: 'https://www.youtube.com/embed/gu0GYwdPfAk'
        }
    },
    {
        id: 'dossier2',
        icon: 'CgFolder',
        titleKey: 'titleDossier2',
        content: {
            type: 'translated',
            template: 'dossier2',
            video: 'https://www.youtube.com/embed/77hQGESR4V0'
        }
    },
    {
        id: 'dossier3',
        icon: 'CgFolder',
        titleKey: 'titleDossier3',
        content: {
            type: 'translated',
            template: 'dossier3',
            video: 'https://www.youtube.com/embed/LM7imrwJS5E'
        }
    },
    {
        id: 'dossier4',
        icon: 'CgFolder',
        titleKey: 'titleDossier4',
        content: {
            type: 'translated',
            template: 'dossier4',
            video: 'https://www.youtube.com/embed/V_E0G4MOQ3k'
        }
    },
    {
        id: 'rapport1',
        icon: 'CgFolder',
        titleKey: 'titleRapport1',
        content: {
            type: 'translated',
            template: 'rapport1'
        }
    },
    {
        id: 'rapport2',
        icon: 'CgFolder',
        titleKey: 'titleRapport2',
        content: {
            type: 'component',
            data: 'Quiz',
        }
    },
    {
        id: 'nassim',
        icon: 'CgFolder',
        titleKey: 'titleExpert',
        content: {
            type: 'html',
            data: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/Aw1jkyP4EGc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }
    },
    {
        id: 'settings',
        icon: 'CgFolder',
        titleKey: 'titleSettings',
        content: {
            type: 'component',
            data: 'Settings'
        }
    },
    {
        id: 'moussier',
        icon: 'CgFolder',
        titleKey: 'titleJuriste1',
        content: {
            type: 'html',
            data: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/uiL7evyg__g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }
    },
    {
        id: 'pasco',
        icon: 'CgFolder',
        titleKey: 'titleJuriste2',
        content: {
            type: 'html',
            data: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/i_YaOLAuRZc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }
    },
    {
        id: 'pasco2',
        icon: 'CgFolder',
        titleKey: 'titleJuriste2Part2',
        content: {
            type: 'html',
            data: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/4-jJ-FFp4B4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        }
    },
    
];

// Template generators for translated content
export const getTranslatedContent = (template, t, video = null) => {
    switch (template) {
        case 'fonctionnement':
            return `<h1>${t('fonctionnementTitre')}</h1>
    <p>${t('fonctionnementBienvenue')}</p>
    <li>${t('fonctionnementClic')}</li>
    </ul>
    <h2>${t('fonctionnementDocsDisponibles')}</h2>
    <ul>
        <li><strong>RECAP :</strong> ${t('fonctionnementRecap')}</li>
        <li><strong>${t('affaire1')} - ${t('affaire4')} :</strong> ${t('fonctionnementDossiers')}</li>
        <li>${t('fonctionnementTout')}</li>
    </ul>
    <h2>${t('fonctionnementConseils')}</h2>
    <ul>
        <li>${t('fonctionnementSecurise')}</li>
        <li>${t('fonctionnementSensibles')}</li>
    </ul>
    <h3 style="color: red;">${t('fonctionnementAvertissement')}</h3>`;

        case 'recap':
            return `<h2>${t('recapTitre')}</h2>
<p>${t('recapIntro')}</p>
<h3>${t('recapInstruction')}</h3>
<ol>
<li>${t('recapStep1')}</li>
<li>${t('recapStep2')}</li>
<li>${t('recapStep3')}</li>
<li>${t('recapStep4')}</li>
<li>${t('recapStep5')}</li>
</ol>
<h3>${t('affaire1')} - ${t('recapAffaire1Titre')}</h3>
<p>${t('recapAffaire1Desc')}</p>
<h3>${t('affaire2')} - ${t('recapAffaire2Titre')}</h3>
<p>${t('recapAffaire2Desc')}</p>
<h3>${t('affaire3')} - ${t('recapAffaire3Titre')}</h3>
<p>${t('recapAffaire3Desc')}</p>
<h3>${t('affaire4')} - ${t('recapAffaire4Titre')}</h3>
<p>${t('recapAffaire4Desc')}</p>
<p style="margin-top: 20px; font-style: italic;">${t('recapConclusion')}</p>`;

        case 'dossier1':
            return `<h2>${t('marc_profil')}</h2>
<p><strong>${t('contexte')} :</strong> ${t('marc_contexte')}</p>
<h3>${t('marc_realite')}</h3>
<ul>
<li><strong>${t('source')} :</strong> ${t('marc_source1')}<br><strong>${t('methode')} :</strong> ${t('marc_methode1')}<br><strong>${t('resultat')} :</strong> ${t('marc_resultat1')}</li>
<li><strong>${t('source')} :</strong> ${t('marc_source2')}<br><strong>${t('methode')} :</strong> ${t('marc_methode2')}</li>
</ul>
<div style="margin-top: 20px;"><iframe width="100%" height="400" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

        case 'dossier2':
            return `<h2>${t('sophie_profil')}</h2>
<p><strong>${t('contexte')} :</strong> ${t('sophie_contexte')}</p>
<h3>${t('sophie_realite')}</h3>
<ul>
<li><strong>${t('source')} :</strong> ${t('sophie_source1')}<br><strong>${t('methode')} :</strong> ${t('sophie_methode1')}<br><strong>${t('resultat')} :</strong> ${t('sophie_resultat1')}</li>
<li><strong>${t('source')} :</strong> ${t('sophie_source2')}<br><strong>${t('methode')} :</strong> ${t('sophie_methode2')}<br><strong>${t('resultat')} :</strong> ${t('sophie_resultat2')}</li>
<li><strong>${t('source')} :</strong> ${t('sophie_source3')}<br><strong>${t('methode')} :</strong> ${t('sophie_methode3')}<br><strong>${t('resultat')} :</strong> ${t('sophie_resultat3')}</li>
</ul>
<div style="margin-top: 20px;"><iframe width="100%" height="400" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

        case 'dossier3':
            return `<h2>${t('lucas_profil')}</h2>
<p><strong>${t('contexte')} :</strong> ${t('lucas_contexte')}</p>
<h3>${t('lucas_realite')}</h3>
<ul>
<li><strong>${t('source')} :</strong> ${t('lucas_source1')}<br><strong>${t('methode')} :</strong> ${t('lucas_methode1')}<br><strong>${t('resultat')} :</strong> ${t('lucas_resultat1')}</li>
</ul>
<div style="margin-top: 20px;"><iframe width="100%" height="400" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

        case 'dossier4':
            return `<h2>${t('julie_profil')}</h2>
<p><strong>${t('contexte')} :</strong> ${t('julie_contexte')}</p>
<h3>${t('julie_realite')}</h3>
<ul>
<li><strong>${t('source')} :</strong> ${t('julie_source1')}<br><strong>${t('resultat')} :</strong> ${t('julie_resultat1')}</li>
<li><strong>${t('source')} :</strong> ${t('julie_source2')}<br><strong>${t('resultat')} :</strong> ${t('julie_resultat2')}</li>
</ul>
<div style="margin-top: 20px;"><iframe width="100%" height="400" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

        case 'rapport1':
            return `<div style="padding: 20px;">
    <h1>${t('rapport_question')}</h1>
    <p>${t('rapport_instruction')}</p>
    <ul>
        <li>${t('rapport_check1')}</li>
        <li>${t('rapport_check2')}</li>
        <li>${t('rapport_check3')}</li>
    </ul>
</div>
<div style="text-align: center;">
    <button onclick="closeWindow('rapport1'); openWindow(windowsConfig[11]);" style="padding: 10px 20px; font-size: 16px; background-color: #ce3639; color: white; border: none; border-radius: 5px; cursor: pointer;">${t('rapport_demarrer')}</button>
</div>`;

        default:
            return '';
    }
};
