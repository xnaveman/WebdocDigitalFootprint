export const windowsConfig = [
    {
        id: 'folder',
        icon: 'CgFolder',
        title: 'Documents disponibles',
        content: {
            type: 'text',
            data: 'Liste des documents disponibles dans les dossiers.'
        }
    },
    {
        id: 'eye',
        icon: 'CgEye',
        title: 'Aperçu',
        content: {
            type: 'image',
            data: '/assets/background.jpeg'
        }
    },
    {
        id: 'globe',
        icon: 'CgGlobeAlt',
        title: 'Navigation',
        content: {
            type: 'html',
            data: '<form action="https://www.google.com/search" method="get" target="_blank" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center;">\n<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" style="width:200px; margin-bottom:20px;" />\n<input type="text" name="q" placeholder="Search Google" style="width:80%; padding:10px; font-size:16px;" />\n<button type="submit" style="margin-top:10px; padding:10px 20px; font-size:16px;">Search</button>\n</form>'
        }
    },


    {
        id: 'rickroll',
        icon: 'CgFolder',
        title: 'Never Gonna Give You Up',
        content: {
            type: 'video',
            data: '/assets/videos/rickvideo.mp4'
        }
    },
    {
        id: 'welovehim',
        icon: 'CgFolder',
        title: 'We love CA',
        content: {
            type: 'video',
            data: '/assets/videos/masterclass.mp4'
        }
    },
    {
        id: 'recap',
        icon: 'CgFolder',
        title: 'Récapitulatif du dossier d\'affaires',
        content: {
            type: 'html',
            data: '<h2>Récapitulatif du dossier d\'affaires</h2>\n<ul>\n<li><strong>Affaire 1 :</strong> Détails de l\'affaire 1...</li>\n<li><strong>Affaire 2 :</strong> Détails de l\'affaire 2...</li>\n<li><strong>Affaire 3 :</strong> Détails de l\'affaire 3...</li>\n</ul>'
        }
    },
    {
        id: 'dossier1',
        icon: 'CgFolder',
        title: 'Dossier Affaire 1',
        content: {
            type: 'html',
            data: '<h2>Profil : Marc, 45 ans, en campagne électorale locale.</h2>\n<p><strong>Contexte :</strong> Il veut moderniser son image et prône la transparence totale, mais néglige son hygiène numérique passée.</p>\n<h3>Réalité OSINT :</h3>\n<ul>\n<li><strong>Source :</strong> Twitter (Recherche avancée).<br><strong>Méthode :</strong> Exhumation de tweets racistes ou sexistes vieux de 10 ans.<br><strong>Résultat :</strong> « Cancel culture » immédiate.</li>\n<li><strong>Source :</strong> Ancien blog personnel abandonné (Skyblog ou vieux WordPress).<br><strong>Méthode :</strong> Photos compromettantes de soirées étudiantes ou opinions politiques extrêmes contradictoires avec son programme actuel.</li>\n</ul>'
        }
    }
    ,
    {
        id: 'dossier1',
        icon: 'CgFolder',
        title: 'Dossier Affaire 2',
        content: {
            type: 'html',
            data: '<h2>Profil : Sophie, 35 ans, mère de Léo (8 ans) et Emma (4 ans).</h2>\n<p><strong>Contexte :</strong> Elle utilise Facebook et Instagram pour partager sa vie de famille, persuadée que c\'est \"juste pour les proches\".</p>\n<h3>Réalité OSINT :</h3>\n<ul>\n<li><strong>Source :</strong> Photo de la rentrée des classes sur Facebook.<br><strong>Méthode :</strong> Zoom sur le logo du pull ou l\'architecture de l\'école en arrière-plan + Google Maps.<br><strong>Résultat :</strong> Adresse exacte de l\'école et horaires de sortie trouvés.</li>\n<li><strong>Source :</strong> Photo rigolote du bain ou en maillot l\'été (Instagram).<br><strong>Méthode :</strong> Aspiration par des bots via des hashtags génériques (#bebe, #vacances).<br><strong>Résultat :</strong> Image trouvée sur des forums pédopornographiques (Détournement d\'image).</li>\n<li><strong>Source :</strong> Posts d\'anniversaire (Joyeux 8 ans Léo !\").<br><strong>Méthode :</strong> Recoupement Nom + Prénom + Date de naissance + Ville.<br><strong>Résultat :</strong> Création d\'une empreinte numérique indélébile (risque d\'usurpation d\'identité future ou harcèlement scolaire basé sur des photos gênantes).</li>\n</ul>'
        }
    }
    ,
    {
        id: 'dossier1',
        icon: 'CgFolder',
        title: 'Dossier Affaire 3',
        content: {
            type: 'html',
            data: '<h2>Profil : Lucas, 17 ans, pseudo \"DarkZ_99\".</h2>\n<p><strong>Contexte :</strong> Il rêve de devenir influenceur/streamer sur Twitch et TikTok. Il veut percer et pense qu\'il doit tout montrer pour fidéliser sa communauté.</p>\n<h3>Réalité OSINT (Ce qui s\'affiche à l\'écran) :</h3>\n<ul>\n<li><strong>Source :</strong> Arrière-plan de la vidéo (TikTok/Twitch).<br><strong>Méthode :</strong> Analyse visuelle : vue par la fenêtre + trajet de bus visible + météo en direct.<br><strong>Résultat :</strong> Géolocalisation précise du domicile (Risque de \"Swatting\" ou cambriolage).</li>\n</ul>'
        }
    }
    ,
    {
        id: 'dossier1',
        icon: 'CgFolder',
        title: 'Dossier Affaire 4',
        content: {
            type: 'html',
            data: '<h2>Profil : Julie, 29 ans, Graphiste et Consultante Marketing.</h2>\n<p><strong>Contexte :</strong> Elle gère tout son business en ligne. Inscrite sur des dizaines de plateformes (banques en ligne, outils de gestion, sites de mission), elle privilégie la rapidité et l\'efficacité à la sécurité.</p>\n<h3>Réalité OSINT (Ce qui s\'affiche à l\'écran) :</h3>\n<ul>\n<li><strong>Source :</strong> Violation de données (Data Breach) d\'un vieux site peu sécurisé (ex: un forum ou un petit site e-commerce).<br><strong>Résultat :</strong> Son mot de passe habituel (\"JulieDesign88\") est visible en clair.</li>\n<li><strong>Source :</strong> Attaque par \"Credential Stuffing\" (Bourrage d\'identifiants).<br><strong>Résultat :</strong> Accès à ses comptes pro et bancaires.</li>\n</ul>'
        }
    }

];
