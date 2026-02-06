import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    fr: {
        // Desktop shortcuts
        corbeille: 'Corbeille',
        parametres: 'Paramètres',
        recap: 'RÉCAP.txt',
        affaire1: 'Affaire 1',
        affaire2: 'Affaire 2',
        affaire3: 'Affaire 3',
        affaire4: 'Affaire 4',
        rapport: 'RAPPORT',
        juriste1: 'juriste1.mp4',
        juriste2: 'juriste2.mp4',
        expertCyber: 'expertCyber.mp4',
        rick: 'Rick ?',

        // Settings
        settingsTitle: 'Paramètres',
        language: 'Langue',
        french: 'Français',
        english: 'English',

        // Window titles
        titleFonctionnement: 'Fonctionnement du bureau',
        titleApercu: 'Aperçu',
        titleNavigation: 'Navigation',
        titleRecap: 'Récapitulatif du dossier d\'affaires',
        titleDossier1: 'Dossier Affaire 1',
        titleDossier2: 'Dossier Affaire 2',
        titleDossier3: 'Dossier Affaire 3',
        titleDossier4: 'Dossier Affaire 4',
        titleRapport1: 'Soumettre votre rapport final ?',
        titleRapport2: 'Rapport Final',
        titleExpert: 'Nassim BOUICHE, expert en cybersécurité.',
        titleJuriste1: 'Paul MOUSSIER, doctorant en droit du numérique.',
        titleJuriste2: 'Jean-Christophe, docteur en droit de la propriété intellectuelle - Partie 1.',
        titleJuriste2Part2: 'Jean-Christophe, docteur en droit de la propriété intellectuelle - Partie 2.',

        titleSettings: 'Paramètres',
        titleRickroll: 'Never Gonna Give You Up',
        titleWeLove: 'We love CA',

        // Fonctionnement bureau
        fonctionnementTitre: 'Fonctionnement du bureau',
        fonctionnementBienvenue: 'Bienvenue sur le bureau. Voici un guide pour comprendre comment naviguer et utiliser les documents à votre disposition :',
        fonctionnementClic: 'Cliquez deux fois sur une icône pour ouvrir le fichier.',
        fonctionnementDocsDisponibles: 'Documents disponibles',
        fonctionnementRecap: 'Accédez au récapitulatif des dossiers d\'affaires.',
        fonctionnementDossiers: 'Éléments, témoignages, explications des experts sont disponibles dans ces dossiers pour analyser les affaires.',
        fonctionnementTout: 'Vous pouvez tous les documents et fichiers à votre disposition sur ce bureau et internet.',
        fonctionnementConseils: 'Conseils d\'utilisation',
        fonctionnementSecurise: 'Assurez-vous de naviguer dans un environnement sécurisé.',
        fonctionnementSensibles: 'Ne partagez pas d\'informations sensibles.',
        fonctionnementAvertissement: 'Veuillez investiguer les dossiers d\'affaires afin de vous familiariser avec celles-ci avant de soumettre votre rapport final.',

        // Recap
        recapTitre: 'Récapitulatif des affaires',
        recapIntro: 'Bienvenue dans cette enquête sur l\'empreinte numérique. Votre mission est d\'analyser 4 affaires différentes pour comprendre les dangers liés à notre présence en ligne.',
        recapInstruction: 'Comment procéder ?',
        recapStep1: 'Parcourez chaque dossier d\'affaire (Affaire 1 à 4) en double-cliquant sur les icônes du bureau.',
        recapStep2: 'Analysez les profils des victimes et les méthodes OSINT utilisées.',
        recapStep3: 'Écoutez les témoignages vidéo pour mieux comprendre chaque situation.',
        recapStep4: 'Consultez les avis des experts et juristes.',
        recapStep5: 'Une fois toutes les affaires étudiées, soumettez votre rapport final.',
        recapAffaire1Titre: 'Marc, 45 ans',
        recapAffaire1Desc: 'Politicien en campagne dont le passé numérique refait surface.',
        recapAffaire2Titre: 'Sophie, 35 ans',
        recapAffaire2Desc: 'Mère de famille qui partage la vie de ses enfants sur les réseaux sociaux.',
        recapAffaire3Titre: 'Lucas, 17 ans',
        recapAffaire3Desc: 'Adolescent rêvant de devenir influenceur, exposant sa vie en direct.',
        recapAffaire4Titre: 'Julie, 29 ans',
        recapAffaire4Desc: 'Freelance qui privilégie la rapidité à la sécurité de ses comptes.',
        recapConclusion: 'Après avoir analysé toutes les affaires, vous serez en mesure de rédiger un rapport final complet.',
        recapBouton: 'Commencer l\'investigation',

        // Dossier 1 - Marc
        marc_profil: 'Profil : Marc, 45 ans, candidat aux élections municipales',
        marc_contexte: 'Marc se lance dans la politique locale avec un programme axé sur la transparence et la modernisation. Ancien cadre dans le secteur privé, il souhaite apporter un nouveau souffle à sa commune. Il a créé ses premiers comptes sur les réseaux sociaux il y a 15 ans, sans se préoccuper de sa vie numérique passée.',
        marc_realite: 'Découvertes OSINT :',
        marc_source1: 'Twitter / X (Recherche avancée avec filtres temporels)',
        marc_methode1: 'Utilisation des opérateurs de recherche avancée pour retrouver d\'anciens tweets datant de 2010-2014. Recherche par mots-clés sensibles et analyse des conversations archivées.',
        marc_resultat1: 'Découverte de 23 tweets contenant des propos inappropriés, des blagues douteuses et des opinions controversées qui contredisent son discours actuel. Ces publications ressurgissent pendant la campagne et sont largement partagées par ses opposants.',
        marc_source2: 'Blog personnel abandonné "MarcDurand-Reflexions.skyrock.com" (2008-2012)',
        marc_methode2: 'Exploration via Wayback Machine (Internet Archive) pour récupérer les anciennes versions du blog. Analyse des photos et articles publiés durant ses années étudiantes.',
        marc_resultat2: 'Récupération de photos de soirées étudiantes dans des contextes embarrassants et d\'articles exprimant des opinions politiques radicales opposées à son programme actuel. Ces éléments compromettent gravement sa crédibilité auprès des électeurs.',

        // Dossier 2 - Sophie
        sophie_profil: 'Profil : Sophie, 35 ans, mère de Léo (8 ans) et Emma (4 ans)',
        sophie_contexte: 'Sophie est une mère de famille active sur les réseaux sociaux. Elle partage quotidiennement des moments de vie avec ses enfants sur Facebook et Instagram, pensant que ses paramètres de confidentialité la protègent et que seuls ses "amis" peuvent voir ses publications. Elle utilise les réseaux depuis 2012 et compte plus de 450 amis sur Facebook.',
        sophie_realite: 'Découvertes OSINT :',
        sophie_source1: 'Photo de rentrée scolaire publiée sur Facebook (septembre 2023)',
        sophie_methode1: 'Analyse des métadonnées EXIF de la photo. Identification du logo de l\'école sur le sweat-shirt de Léo. Utilisation de Google Street View pour localiser l\'établissement via l\'architecture visible en arrière-plan. Recoupement avec les informations de géolocalisation.',
        sophie_resultat1: 'Localisation précise de l\'École Primaire Jean Moulin, à 800m du domicile. Identification des horaires d\'entrée et sortie des classes (8h30-16h30). Ces informations créent un risque d\'enlèvement ou de harcèlement physique.',
        sophie_source2: 'Photos d\'Emma en maillot de bain publiées sur Instagram avec hashtags publics',
        sophie_methode2: 'Collecte automatisée par des bots scrappers via les hashtags #vacances #plage #famille. Les photos sont indexées et redistribuées sur des réseaux non contrôlés. Aucune autorisation parentale ne peut empêcher cette diffusion une fois la photo en ligne.',
        sophie_resultat2: 'Découverte des photos d\'Emma sur des forums suspects et sites de partage d\'images détournées. Impossible de supprimer ces copies une fois diffusées. Risque majeur pour la sécurité et la dignité des enfants.',
        sophie_source3: 'Publications d\'anniversaire et informations personnelles',
        sophie_methode3: 'Compilation des posts "Joyeux anniversaire Léo, 8 ans aujourd\'hui !" combinée avec le nom de famille visible sur d\'autres publications, la ville mentionnée dans le profil, et les photos géolocalisées.',
        sophie_resultat3: 'Constitution d\'une identité numérique complète des enfants sans leur consentement : nom complet, date de naissance, adresse de l\'école, activités extra-scolaires, cercle social. Ces données peuvent être utilisées pour de l\'usurpation d\'identité future, du phishing ciblé, ou du harcèlement scolaire basé sur des photos embarrassantes partagées par les camarades.',

        // Dossier 3 - Lucas
        lucas_profil: 'Profil : Lucas "DarkZ_99", 17 ans, aspirant streamer',
        lucas_contexte: 'Lucas est un lycéen passionné de gaming qui rêve de devenir influenceur professionnel. Il stream régulièrement sur Twitch (5-6h par jour) et publie des vidéos sur TikTok. Avec 2 300 abonnés sur Twitch et 8 500 followers sur TikTok, il pense devoir partager un maximum de sa vie pour créer une connexion avec sa communauté et percer dans le milieu.',
        lucas_realite: 'Découvertes OSINT :',
        lucas_source1: 'Analyse des streams Twitch et vidéos TikTok (arrière-plan visible)',
        lucas_methode1: 'Étude systématique de l\'arrière-plan des vidéos : identification d\'une fenêtre donnant sur une rue spécifique. Observation d\'un arrêt de bus ligne 47 visible avec son numéro. Analyse de la météo en temps réel et comparaison avec les données météorologiques locales. Identification d\'enseignes commerciales visibles par la fenêtre. Utilisation de Google Street View pour triangulation.',
        lucas_resultat1: 'Localisation précise de son domicile : 12 rue Victor Hugo, appartement au 3ème étage. Identification des horaires où il est seul (parents au travail 9h-18h). Risque majeur de "Swatting" (fausse alerte police), de harcèlement physique, ou de cambriolage ciblé quand il annonce publiquement ses absences. Plusieurs cas similaires ont mené à des agressions physiques de streamers.',
        lucas_source2: 'Informations personnelles partagées en stream',
        lucas_methode2: 'Compilation des informations involontairement révélées lors des streams : nom du lycée mentionné, prénoms d\'amis, habitudes quotidiennes, absences prévues de la famille.',
        lucas_resultat2: 'Profil détaillé permettant de le localiser physiquement dans sa vie quotidienne. Des "fans" ou personnes malintentionnées peuvent facilement l\'approcher dans la vie réelle.',
        lucas_source3: 'Photos et vidéos avec reflets et métadonnées',
        lucas_methode3: 'Analyse des reflets dans les lunettes, écrans et surfaces brillantes visibles dans les vidéos. Extraction des métadonnées EXIF des photos uploadées.',
        lucas_resultat3: 'Récupération d\'informations supplémentaires sur son environnement et ses déplacements, renforçant le profilage complet de sa vie privée.',

        // Dossier 4 - Julie
        julie_profil: 'Profil : Julie, 29 ans, Graphiste Freelance et Consultante Marketing Digital',
        julie_contexte: 'Julie travaille exclusivement en ligne depuis 2018. Elle jongle entre 34 plateformes différentes : Malt, Fiverr, Upwork pour ses missions, Stripe et PayPal pour les paiements, Boursorama et N26 pour ses comptes bancaires professionnels, Notion et Trello pour la gestion de projets, sans oublier les réseaux sociaux professionnels (LinkedIn, Behance, Dribbble). Par souci de rapidité, elle utilise le même mot de passe sur la majorité de ses comptes, avec de légères variations.',
        julie_realite: 'Découvertes OSINT :',
        julie_source1: 'Base de données de violation HaveIBeenPwned et forums du dark web',
        julie_methode1: 'Vérification de l\'adresse email "julie.mercier.design@gmail.com" sur les bases de données de fuites. Découverte de 7 violations de données entre 2016 et 2023 : MySpace (2016), Canva (2019), LinkedIn (2021), Dropbox (2022), et plusieurs petits forums et sites e-commerce. Recherche sur les bases de données vendues sur le dark web.',
        julie_resultat1: 'Mot de passe principal "JulieDesign88!" exposé en clair dans 3 violations différentes. Ce mot de passe est identique ou très similaire (JulieDesign2024!, JDesign88) sur la plupart de ses comptes professionnels et bancaires.',
        julie_source2: 'Attaque par Credential Stuffing (test automatisé des identifiants volés)',
        julie_methode2: 'Utilisation de bots automatisés testant les combinaisons email/mot de passe volées sur des centaines de sites simultanément. Le taux de réussite est de 0,1% à 2%, mais avec des millions de combinaisons testées, cela représente des milliers de comptes compromis.',
        julie_resultat2: 'Accès réussi à ses comptes Malt (historique clients, conversations), Stripe (coordonnées bancaires, revenus), N26 (compte bancaire professionnel avec 12 450€), LinkedIn (réseau professionnel, messages privés), et Notion (tous ses projets clients avec informations confidentielles). Perte financière directe et vol de propriété intellectuelle.',
        julie_source3: 'Absence d\'authentification à double facteur (2FA)',
        julie_methode3: 'Vérification de la présence de mesures de sécurité supplémentaires sur les comptes. Aucun compte ne possède d\'authentification à deux facteurs activée.',
        julie_resultat3: 'Une fois le mot de passe obtenu, l\'accès est immédiat sans aucune barrière de sécurité supplémentaire. Les attaquants peuvent modifier les mots de passe, exfiltrer les données, et verrouiller Julie hors de ses propres comptes professionnels, paralysant son activité.',

        // Rapport
        rapport_question: 'Êtes-vous prêt à soumettre votre rapport final ?',
        rapport_instruction: 'Commencez uniquement après avoir pris en compte les différentes affaires.',
        rapport_check1: 'Vous avez observé et analysé chaque affaire.',
        rapport_check2: 'Vous avez écouté les différents témoignages des victimes.',
        rapport_check3: 'Vous avez pris en compte les conseils des experts et des juristes.',
        rapport_demarrer: 'Démarrer le rapport',

        // Quiz
        quiz_title: 'Rapport Final - Évaluation',
        quiz_intro: 'En tant qu\'enquêteur, vous avez analysé les 4 affaires liées à l\'empreinte numérique. Répondez aux questions suivantes pour valider votre compréhension des risques.',
        quiz_submit: 'Soumettre mon rapport',
        quiz_completed: 'Rapport soumis avec succès !',
        quiz_takeaway: 'Ce qu\'il faut retenir :',
        quiz_lesson1: 'Vos anciennes publications restent accessibles et peuvent resurgir.',
        quiz_lesson2: 'Les photos partagées peuvent révéler plus d\'informations que prévu.',
        quiz_lesson3: 'Utilisez des mots de passe uniques et activez la double authentification.',
        quiz_lesson4: 'Réfléchissez avant de publier : une fois en ligne, c\'est pour toujours.',
        quiz_thanks: 'Merci d\'avoir participé à cette sensibilisation sur l\'empreinte numérique.',
        quiz_result_excellent: 'Excellent ! Vous maîtrisez parfaitement les enjeux de l\'empreinte numérique.',
        quiz_result_good: 'Bien ! Vous avez une bonne compréhension des risques numériques.',
        quiz_result_average: 'Pas mal ! Mais revoyez certains dossiers pour mieux comprendre les risques.',
        quiz_result_poor: 'Attention ! Il serait utile de revoir les différentes affaires.',
        
        // Questions
        quiz_q1: 'Dans l\'affaire de Marc, quel est le principal risque lié à son passé numérique ?',
        quiz_q1_a: 'Ses photos de vacances peuvent être volées',
        quiz_q1_b: 'D\'anciens tweets ou publications peuvent ressurgir et nuire à sa réputation',
        quiz_q1_c: 'Son adresse email peut être piratée',
        
        quiz_q2: 'Quels risques Sophie fait-elle courir à ses enfants en partageant leurs photos ? (plusieurs réponses)',
        quiz_q2_a: 'Géolocalisation de l\'école via les détails des photos',
        quiz_q2_b: 'Les enfants auront moins d\'amis',
        quiz_q2_c: 'Détournement des images sur des sites malveillants',
        quiz_q2_d: 'Création d\'une empreinte numérique sans leur consentement',
        
        quiz_q3: 'Comment Lucas s\'expose-t-il à des risques en streamant ?',
        quiz_q3_a: 'L\'arrière-plan de ses vidéos peut révéler son adresse',
        quiz_q3_b: 'Il gagne trop d\'argent',
        quiz_q3_c: 'Il risque le "swatting" ou le cambriolage',
        
        quiz_q4: 'Quelles erreurs de sécurité Julie a-t-elle commises ? (plusieurs réponses)',
        quiz_q4_a: 'Elle utilise trop de plateformes différentes',
        quiz_q4_b: 'Elle réutilise le même mot de passe sur plusieurs sites',
        quiz_q4_c: 'Elle ne vérifie pas si ses données ont fuité',
        quiz_q4_d: 'Elle travaille depuis chez elle',
        
        quiz_q5: 'Quelles bonnes pratiques permettent de protéger son empreinte numérique ? (plusieurs réponses)',
        quiz_q5_a: 'Utiliser des mots de passe uniques et complexes',
        quiz_q5_b: 'Activer l\'authentification à deux facteurs',
        quiz_q5_c: 'Partager un maximum pour montrer qu\'on n\'a rien à cacher',
        quiz_q5_d: 'Vérifier régulièrement les paramètres de confidentialité',

        // Labels génériques
        source: 'Source',
        methode: 'Méthode',
        resultat: 'Résultat',
        contexte: 'Contexte',
    },
    en: {
        // Desktop shortcuts
        corbeille: 'Recycle Bin',
        parametres: 'Settings',
        recap: 'RECAP.txt',
        affaire1: 'Case 1',
        affaire2: 'Case 2',
        affaire3: 'Case 3',
        affaire4: 'Case 4',
        rapport: 'REPORT',
        juriste1: 'lawyer1.mp4',
        juriste2: 'lawyer2.mp4',
        expertCyber: 'cyberExpert.mp4',
        rick: 'Rick ?',

        // Settings
        settingsTitle: 'Settings',
        language: 'Language',
        french: 'Français',
        english: 'English',

        // Window titles
        titleFonctionnement: 'How the desktop works',
        titleApercu: 'Preview',
        titleNavigation: 'Navigation',
        titleRecap: 'Case Files Summary',
        titleDossier1: 'Case File 1',
        titleDossier2: 'Case File 2',
        titleDossier3: 'Case File 3',
        titleDossier4: 'Case File 4',
        titleRapport1: 'Submit your final report?',
        titleRapport2: 'Final Report',
        titleExpert: 'Nassim BOUICHE, Cybersecurity Expert.',
        titleJuriste1: 'Paul, PhD student in digital law.',
        titleJuriste2: 'Jean-Christophe, Doctor in intellectual property law - Part 1.',
        titleJuriste2Part2: 'Jean-Christophe, Doctor in intellectual property law - Part 2.',
        titleSettings: 'Settings',
        titleRickroll: 'Never Gonna Give You Up',
        titleWeLove: 'We love CA',

        // Fonctionnement bureau
        fonctionnementTitre: 'How the desktop works',
        fonctionnementBienvenue: 'Welcome to the desktop. Here is a guide to help you navigate and use the documents available:',
        fonctionnementClic: 'Double-click an icon to open the file.',
        fonctionnementDocsDisponibles: 'Available documents',
        fonctionnementRecap: 'Access the case files summary.',
        fonctionnementDossiers: 'Evidence, testimonies, and expert explanations are available in these folders to analyze the cases.',
        fonctionnementTout: 'You can access all documents and files available on this desktop and the internet.',
        fonctionnementConseils: 'Usage tips',
        fonctionnementSecurise: 'Make sure to browse in a secure environment.',
        fonctionnementSensibles: 'Do not share sensitive information.',
        fonctionnementAvertissement: 'Please investigate the case files to familiarize yourself with them before submitting your final report.',

        // Recap
        recapTitre: 'Case Files Summary',
        recapIntro: 'Welcome to this investigation on digital footprint. Your mission is to analyze 4 different cases to understand the dangers related to our online presence.',
        recapInstruction: 'How to proceed?',
        recapStep1: 'Browse each case file (Case 1 to 4) by double-clicking on the desktop icons.',
        recapStep2: 'Analyze the victim profiles and the OSINT methods used.',
        recapStep3: 'Watch the video testimonies to better understand each situation.',
        recapStep4: 'Consult the opinions of experts and lawyers.',
        recapStep5: 'Once all cases have been studied, submit your final report.',
        recapAffaire1Titre: 'Marc, 45 years old',
        recapAffaire1Desc: 'Politician in campaign whose digital past resurfaces.',
        recapAffaire2Titre: 'Sophie, 35 years old',
        recapAffaire2Desc: 'Mother who shares her children\'s lives on social media.',
        recapAffaire3Titre: 'Lucas, 17 years old',
        recapAffaire3Desc: 'Teenager dreaming of becoming an influencer, exposing his life live.',
        recapAffaire4Titre: 'Julie, 29 years old',
        recapAffaire4Desc: 'Freelancer who prioritizes speed over account security.',
        recapConclusion: 'After analyzing all the cases, you will be able to write a complete final report.',
        recapBouton: 'Start the investigation',

        // Dossier 1 - Marc
        marc_profil: 'Profile: Marc, 45 years old, candidate for municipal elections',
        marc_contexte: 'Marc is launching his local political career with a platform focused on transparency and modernization. A former executive in the private sector, he wants to bring fresh ideas to his town. He created his first social media accounts 15 years ago without worrying about his past digital life.',
        marc_realite: 'OSINT Findings:',
        marc_source1: 'Twitter / X (Advanced search with temporal filters)',
        marc_methode1: 'Use of advanced search operators to retrieve old tweets from 2010-2014. Search by sensitive keywords and analysis of archived conversations.',
        marc_resultat1: 'Discovery of 23 tweets containing inappropriate remarks, questionable jokes, and controversial opinions that contradict his current discourse. These posts resurface during the campaign and are widely shared by his opponents.',
        marc_source2: 'Abandoned personal blog "MarcDurand-Reflexions.skyrock.com" (2008-2012)',
        marc_methode2: 'Exploration via Wayback Machine (Internet Archive) to retrieve old versions of the blog. Analysis of photos and articles published during his student years.',
        marc_resultat2: 'Recovery of photos from student parties in embarrassing contexts and articles expressing radical political opinions opposed to his current platform. These elements seriously compromise his credibility with voters.',

        // Dossier 2 - Sophie
        sophie_profil: 'Profile: Sophie, 35 years old, mother of Léo (8) and Emma (4)',
        sophie_contexte: 'Sophie is an active mother on social media. She shares daily moments with her children on Facebook and Instagram, thinking her privacy settings protect her and only her "friends" can see her posts. She has been using social networks since 2012 and has over 450 friends on Facebook.',
        sophie_realite: 'OSINT Findings:',
        sophie_source1: 'Back-to-school photo posted on Facebook (September 2023)',
        sophie_methode1: 'Analysis of EXIF metadata from the photo. Identification of school logo on Léo\'s sweatshirt. Use of Google Street View to locate the school via visible architecture in the background. Cross-referencing with geolocation information.',
        sophie_resultat1: 'Precise location of Jean Moulin Elementary School, 800m from home. Identification of class entry and exit times (8:30am-4:30pm). This information creates a risk of kidnapping or physical harassment.',
        sophie_source2: 'Photos of Emma in swimsuit posted on Instagram with public hashtags',
        sophie_methode2: 'Automated collection by scraper bots via hashtags #vacation #beach #family. Photos are indexed and redistributed on uncontrolled networks. No parental authorization can prevent this distribution once the photo is online.',
        sophie_resultat2: 'Discovery of Emma\'s photos on suspicious forums and misused image sharing sites. Impossible to delete these copies once distributed. Major risk to children\'s safety and dignity.',
        sophie_source3: 'Birthday posts and personal information',
        sophie_methode3: 'Compilation of posts "Happy birthday Léo, 8 years old today!" combined with last name visible on other posts, city mentioned in profile, and geotagged photos.',
        sophie_resultat3: 'Complete digital identity of children without their consent: full name, date of birth, school address, extracurricular activities, social circle. This data can be used for future identity theft, targeted phishing, or school bullying based on embarrassing photos shared by classmates.',

        // Dossier 3 - Lucas
        lucas_profil: 'Profile: Lucas "DarkZ_99", 17 years old, aspiring streamer',
        lucas_contexte: 'Lucas is a high school student passionate about gaming who dreams of becoming a professional influencer. He regularly streams on Twitch (5-6h per day) and posts videos on TikTok. With 2,300 Twitch subscribers and 8,500 TikTok followers, he believes he needs to share as much of his life as possible to create a connection with his community and break into the industry.',
        lucas_realite: 'OSINT Findings:',
        lucas_source1: 'Analysis of Twitch streams and TikTok videos (visible background)',
        lucas_methode1: 'Systematic study of video backgrounds: identification of a window overlooking a specific street. Observation of bus stop line 47 visible with its number. Analysis of real-time weather and comparison with local weather data. Identification of visible commercial signs through the window. Use of Google Street View for triangulation.',
        lucas_resultat1: 'Precise home location: 12 Victor Hugo Street, 3rd floor apartment. Identification of times when he is alone (parents at work 9am-6pm). Major risk of "Swatting" (fake police alert), physical harassment, or targeted burglary when he publicly announces his absences. Several similar cases have led to physical assaults on streamers.',
        lucas_source2: 'Personal information shared during streams',
        lucas_methode2: 'Compilation of information inadvertently revealed during streams: high school name mentioned, friends\' first names, daily routines, planned family absences.',
        lucas_resultat2: 'Detailed profile allowing physical location in daily life. "Fans" or malicious individuals can easily approach him in real life.',
        lucas_source3: 'Photos and videos with reflections and metadata',
        lucas_methode3: 'Analysis of reflections in glasses, screens, and shiny surfaces visible in videos. Extraction of EXIF metadata from uploaded photos.',
        lucas_resultat3: 'Recovery of additional information about his environment and movements, reinforcing complete profiling of his private life.',

        // Dossier 4 - Julie
        julie_profil: 'Profile: Julie, 29 years old, Freelance Graphic Designer and Digital Marketing Consultant',
        julie_contexte: 'Julie has been working exclusively online since 2018. She juggles between 34 different platforms: Malt, Fiverr, Upwork for her gigs, Stripe and PayPal for payments, Boursorama and N26 for her professional bank accounts, Notion and Trello for project management, not to mention professional social networks (LinkedIn, Behance, Dribbble). For speed, she uses the same password on most of her accounts, with slight variations.',
        julie_realite: 'OSINT Findings:',
        julie_source1: 'HaveIBeenPwned breach database and dark web forums',
        julie_methode1: 'Checking email address "julie.mercier.design@gmail.com" on breach databases. Discovery of 7 data breaches between 2016 and 2023: MySpace (2016), Canva (2019), LinkedIn (2021), Dropbox (2022), and several small forums and e-commerce sites. Search on databases sold on the dark web.',
        julie_resultat1: 'Main password "JulieDesign88!" exposed in plain text in 3 different breaches. This password is identical or very similar (JulieDesign2024!, JDesign88) on most of her professional and banking accounts.',
        julie_source2: 'Credential Stuffing attack (automated testing of stolen credentials)',
        julie_methode2: 'Use of automated bots testing stolen email/password combinations on hundreds of sites simultaneously. Success rate is 0.1% to 2%, but with millions of combinations tested, this represents thousands of compromised accounts.',
        julie_resultat2: 'Successful access to her Malt accounts (client history, conversations), Stripe (banking details, income), N26 (professional bank account with €12,450), LinkedIn (professional network, private messages), and Notion (all client projects with confidential information). Direct financial loss and intellectual property theft.',
        julie_source3: 'Absence of two-factor authentication (2FA)',
        julie_methode3: 'Verification of additional security measures on accounts. No account has two-factor authentication enabled.',
        julie_resultat3: 'Once password is obtained, access is immediate without any additional security barrier. Attackers can change passwords, exfiltrate data, and lock Julie out of her own professional accounts, paralyzing her business.',

        // Rapport
        rapport_question: 'Are you ready to submit your final report?',
        rapport_instruction: 'Start only after considering the different cases.',
        rapport_check1: 'You have observed and analyzed each case.',
        rapport_check2: 'You have listened to the various victim testimonies.',
        rapport_check3: 'You have taken into account the advice of experts and lawyers.',
        rapport_demarrer: 'Start the report',

        // Quiz
        quiz_title: 'Final Report - Assessment',
        quiz_intro: 'As an investigator, you have analyzed the 4 cases related to digital footprint. Answer the following questions to validate your understanding of the risks.',
        quiz_submit: 'Submit my report',
        quiz_completed: 'Report successfully submitted!',
        quiz_takeaway: 'Key takeaways:',
        quiz_lesson1: 'Your old posts remain accessible and can resurface.',
        quiz_lesson2: 'Shared photos can reveal more information than expected.',
        quiz_lesson3: 'Use unique passwords and enable two-factor authentication.',
        quiz_lesson4: 'Think before you post: once online, it\'s forever.',
        quiz_thanks: 'Thank you for participating in this digital footprint awareness program.',
        quiz_result_excellent: 'Excellent! You perfectly master the digital footprint issues.',
        quiz_result_good: 'Good! You have a good understanding of digital risks.',
        quiz_result_average: 'Not bad! But review some cases to better understand the risks.',
        quiz_result_poor: 'Warning! It would be helpful to review the different cases.',
        
        // Questions
        quiz_q1: 'In Marc\'s case, what is the main risk related to his digital past?',
        quiz_q1_a: 'His vacation photos can be stolen',
        quiz_q1_b: 'Old tweets or posts can resurface and harm his reputation',
        quiz_q1_c: 'His email address can be hacked',
        
        quiz_q2: 'What risks does Sophie expose her children to by sharing their photos? (multiple answers)',
        quiz_q2_a: 'School geolocation via photo details',
        quiz_q2_b: 'The children will have fewer friends',
        quiz_q2_c: 'Image misuse on malicious websites',
        quiz_q2_d: 'Creating a digital footprint without their consent',
        
        quiz_q3: 'How does Lucas expose himself to risks while streaming?',
        quiz_q3_a: 'The background of his videos can reveal his address',
        quiz_q3_b: 'He earns too much money',
        quiz_q3_c: 'He risks "swatting" or burglary',
        
        quiz_q4: 'What security mistakes did Julie make? (multiple answers)',
        quiz_q4_a: 'She uses too many different platforms',
        quiz_q4_b: 'She reuses the same password on multiple sites',
        quiz_q4_c: 'She doesn\'t check if her data has been leaked',
        quiz_q4_d: 'She works from home',
        
        quiz_q5: 'Which best practices help protect your digital footprint? (multiple answers)',
        quiz_q5_a: 'Use unique and complex passwords',
        quiz_q5_b: 'Enable two-factor authentication',
        quiz_q5_c: 'Share as much as possible to show you have nothing to hide',
        quiz_q5_d: 'Regularly check privacy settings',

        // Labels génériques
        source: 'Source',
        methode: 'Method',
        resultat: 'Result',
        contexte: 'Context',
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('fr');

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
