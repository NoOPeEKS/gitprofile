// gitprofile.config.js

const config = {
  github: {
    username: 'NoOPeEKS', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/arnau-berenguer-jim%C3%A9nez-940683299',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'NoOPeEKS',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://noopeeks.github.io',
    phone: '',
    email: 'arifulalamszn@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Vue.js',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Bon Preu S.A.U',
      position: 'Charcuterie',
      from: 'August 2022',
      to: 'January 2023',
      companyLink: 'https://bonpreuesclat.cat',
    },
    {
      company: 'Materials Per a Tancats Setpark S.L.',
      position: 'Warehouse',
      from: 'June 2020',
      to: 'August 2022',
      companyLink: '',
    },
  ],
   certifications: [
    {
      name: 'Advanced Certificate in English C1',
      body: 'Cambridge CEFR C1 Level',
      year: 'June 2019',
      link: 'https://www.cambridgeenglish.org/'
    },
  ], 
  education: [
    {
      institution: 'Universitat Autònoma de Barcelona',
      degree: 'Computer Engineering Degree',
      from: '2020',
      to: '2025',
    },
    {
      institution: 'Academica High School',
      degree: 'High School',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'LaraZillow',
      description:
        'A real estate listing marketplace app based on Zillow. Created using PHP & Laravel on the backend and VueJS on the frontend.',
      imageUrl: 'https://onesolutionsweb.com/wp-content/uploads/2021/05/langlogosArtboard-1-1.jpg',
      link: 'https://github.com/NoOPeEKS/laravel-inertia-listing-app',
    },
    {
      title: 'Background.rm',
      description:
        'A simple web application to erase image backgrounds using Cloudinary API. Built with Svelte.',
      imageUrl: 'https://shershen08.github.io/sveltejsnews/img/23617963.png',
      link: 'https://background-rm.netlify.app',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
