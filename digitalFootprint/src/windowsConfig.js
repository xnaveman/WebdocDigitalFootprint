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

];
