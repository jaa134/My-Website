const projects = {
  WEBSITE: 'My website',
  CWRUDED: 'CWRUded',
  SYNCHRONY: 'Synchrony',
  PICLOCK: 'PiClock',
  ANAGRAM: 'Anagram solver',
  MEDIA_CENTER: 'NightOwl media center',
  TRIVIA: 'Trivia app & server',
  SERVERS: 'Server examples',
  EMAIL_SPOOFER: 'Email spoofer',
  ELECTRONIC_FRAME: 'Electronic picture frame',
  AUTOMATION_EXAMPLES: 'Automation examples',
  CHALLENGES: 'Coding challenges',
  GUEST_LIST: 'Guest list',
  KINGS: 'Kings card game',
  MASTERMIND: 'Mastermind',
  INSTANT_MESSENGER: 'Generic instant messenger'
};

const statuses = {
  COMPLETE: 'Complete',
  ACTIVE: 'Active',
  PAUSED: 'Paused'
};

const tagTypes = {
  LANGUAGE: 'language',
  TECHNOLOGY: 'technology',
  SERVICE: 'service',
  DEV_PRACTICE: 'devPractice'
};

export const headerData = [{
  key: 'isFavorite',
  header: ''
}, {
  key: 'name',
  header: 'Name'
}, {
  key: 'description',
  header: 'Description'
}, {
  key: 'started',
  header: 'Date started'
}, {
  key: 'finished',
  header: 'Date finished'
}, {
  key: 'status',
  header: 'Status'
}];

export const rowData = [{
  id: projects.WEBSITE,
  name: projects.WEBSITE,
  started: 1635789600,
  finished: Number.MAX_SAFE_INTEGER,
  status: statuses.ACTIVE,
  description: 'The website you are currently viewing',
  isFavorite: true
}, {
  id: projects.CWRUDED,
  name: projects.CWRUDED,
  started: 1564682400,
  finished: Number.MAX_SAFE_INTEGER,
  status: statuses.ACTIVE,
  description: 'A data-driven web service that conveys real-time “busyness” metrics for various locations around CWRU campus',
  isFavorite: true
}, {
  id: projects.SYNCHRONY,
  name: projects.SYNCHRONY,
  started: 1533146400,
  finished: 1543690800,
  status: statuses.COMPLETE,
  description: 'A synchronized streaming service that enhances the music listening experience of users through shared playlist collaboration and discovery',
  isFavorite: true
}, {
  id: projects.PICLOCK,
  name: projects.PICLOCK,
  started: 1533146400,
  finished: 1543690800,
  status: statuses.COMPLETE,
  description: 'A smart alarm clock that motivates users to get out of bed on time',
  isFavorite: true
}, {
  id: projects.ANAGRAM,
  name: projects.ANAGRAM,
  started: 1635789600,
  finished: 1635789600,
  status: statuses.COMPLETE,
  description: 'A tool to solve anagram puzzles like the NY Times Spelling Bee',
  isFavorite: false
}, {
  id: projects.MEDIA_CENTER,
  name: projects.MEDIA_CENTER,
  started: 1514833200,
  finished: 1525197600,
  status: statuses.COMPLETE,
  description: 'Turns a Raspberry Pi into a media center',
  isFavorite: false
}, {
  id: projects.TRIVIA,
  name: projects.TRIVIA,
  started: 1554141600,
  finished: 1554141600,
  status: statuses.COMPLETE,
  description: 'A service that lets you answer from thousands of trivia questions using your iPhone',
  isFavorite: false
}, {
  id: projects.SERVERS,
  name: projects.SERVERS,
  started: 1577905200,
  finished: 1577905200,
  status: statuses.COMPLETE,
  description: 'Different kinds of simple server examples',
  isFavorite: true
}, {
  id: projects.EMAIL_SPOOFER,
  name: projects.EMAIL_SPOOFER,
  started: 1427911200,
  finished: 1427911200,
  status: statuses.COMPLETE,
  description: 'A mail client with optional spoofing capabilities',
  isFavorite: true
}, {
  id: projects.ELECTRONIC_FRAME,
  name: projects.ELECTRONIC_FRAME,
  started: 1556733600,
  finished: Number.MAX_SAFE_INTEGER - 1,
  status: statuses.PAUSED,
  description: 'Turns a Raspberry Pi into a electronic picture frame',
  isFavorite: false
}, {
  id: projects.AUTOMATION_EXAMPLES,
  name: projects.AUTOMATION_EXAMPLES,
  started: 1556733600,
  finished: Number.MAX_SAFE_INTEGER,
  status: statuses.ACTIVE,
  description: 'Examples of different scripts that have helped automate work processes',
  isFavorite: false
}, {
  id: projects.CHALLENGES,
  name: projects.CHALLENGES,
  started: 1549047600,
  finished: Number.MAX_SAFE_INTEGER,
  status: statuses.ACTIVE,
  description: 'A collection of coding challenges and solutions',
  isFavorite: false
}, {
  id: projects.GUEST_LIST,
  name: projects.GUEST_LIST,
  started: 1433181600,
  finished: 1433181600,
  status: statuses.COMPLETE,
  description: 'Helps you responsibly keep track of who was in attendance at a social gathering',
  isFavorite: false
}, {
  id: projects.KINGS,
  name: projects.KINGS,
  started: 1430503200,
  finished: 1430503200,
  status: statuses.COMPLETE,
  description: 'A virtualizeed version of the drinking card game known as "Kings"',
  isFavorite: false
}, {
  id: projects.MASTERMIND,
  name: projects.MASTERMIND,
  started: 1443722400,
  finished: 1443722400,
  status: statuses.COMPLETE,
  description: 'A recreation of the popular game "Mastermind"',
  isFavorite: false
}, {
  id: projects.INSTANT_MESSENGER,
  name: projects.INSTANT_MESSENGER,
  started: 1454353200,
  finished: 1454353200,
  status: statuses.COMPLETE,
  description: 'A simple socket-baed instant messenger client',
  isFavorite: false
}];

export const rowDataExtended = {
  [projects.WEBSITE]: {
    startedDisplayText: 'November, 2021',
    finishedDisplayText: '-',
    outline: 'A serverless, React website that I designed and implemented in my free time. This website is meant to showcase my talents as a UI/UX specialist. It utilizes the Carbon Design system to specify design guidelines and define reusable components. The website is hosted by Hostinger, protected by Cloudfare from threat of DDoS, uses Cloudfare as a CDN, and uses GitHub webhooks to integrate with Hostinger for automated deployments. Code style is enforced through use of ESlint linter. Packages are managed using Yarn and npm.',
    tags: [{
      name: 'JavaScript',
      type: tagTypes.LANGUAGE
    }, {
      name: 'HTML',
      type: tagTypes.LANGUAGE
    }, {
      name: 'CSS',
      type: tagTypes.LANGUAGE
    }, {
      name: 'React',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Eslint',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'npm',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Yarn',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Git',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Visual Studio Code',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Github',
      type: tagTypes.SERVICE
    }, {
      name: 'Hostinger',
      type: tagTypes.SERVICE
    }, {
      name: 'Cloudflare CDN',
      type: tagTypes.SERVICE
    }, {
      name: 'Automated deployments',
      type: tagTypes.DEV_PRACTICE
    }],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/My-Website'
    }, {
      displayText: 'Automated deployment submodule',
      href: 'https://github.com/jaa134/My-Website-BUILD'
    }]
  },
  [projects.CWRUDED]: {
    startedDisplayText: 'August, 2019',
    finishedDisplayText: '-',
    outline: 'I designed and developed a data-driven web service and iOS mobile application with senior university faculty that computed and conveyed real-time “busyness” metrics for various locations around campus. My solution leveraged address resolution protocol (ARP) and the Cisco Prime Infrastructure API that manages CWRU wireless network to expose and aggregate unique active clients connected to wireless access points throughout campus. While I was working on this project, I planned and lead meetings with campus deans, network admins, and the IT marketing team as part of an effort to make my service available to students. I tried to create a startup from this project, but these plans were put on hold due to concerns about data privacy.',
    tags: [{
      name: 'Swift',
      type: tagTypes.LANGUAGE
    }, {
      name: 'JavaScript',
      type: tagTypes.LANGUAGE
    }, {
      name: 'HTML',
      type: tagTypes.LANGUAGE
    }, {
      name: 'CSS',
      type: tagTypes.LANGUAGE
    }, {
      name: 'C++',
      type: tagTypes.LANGUAGE
    }, {
      name: 'NoSQL',
      type: tagTypes.LANGUAGE
    }, {
      name: 'ARP requests',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'MongoDB',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Node',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Express',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'npm',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Git',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Visual Studio Code',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Xcode',
      type: tagTypes.TECHNOLOGY
    }, {
      name: 'Github',
      type: tagTypes.SERVICE
    }, {
      name: 'iOS App Store',
      type: tagTypes.SERVICE
    }],
    links: [{
      displayText: 'Documents',
      href: 'https://github.com/jaa134/CWRUded-Presentation_Materials'
    }, {
      displayText: 'Mobile application repository',
      href: 'https://github.com/jaa134/CWRUded-iOS_App'
    }, {
      displayText: 'Server repository',
      href: 'https://github.com/jaa134/CWRUded-NodeJS_Server'
    }, {
      displayText: 'Raspberry Pi prototype repository',
      href: 'https://github.com/jaa134/CWRUded-RPi'
    }]
  },
  [projects.SYNCHRONY]: {
    startedDisplayText: 'August, 2018',
    finishedDisplayText: 'December, 2018',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Synchrony'
    }]
  },
  [projects.PICLOCK]: {
    startedDisplayText: 'August, 2018',
    finishedDisplayText: 'December, 2018',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/PiClock'
    }]
  },
  [projects.ANAGRAM]: {
    startedDisplayText: 'November, 2021',
    finishedDisplayText: 'November, 2021',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Anagram-Solver'
    }, {
      displayText: 'New York Times Spelling Bee',
      href: 'https://www.google.com/search?q=New+York+Time+Spelling+Bee'
    }]
  },
  [projects.MEDIA_CENTER]: {
    startedDisplayText: 'January, 2018',
    finishedDisplayText: 'May, 2018',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Media-Center'
    }]
  },
  [projects.TRIVIA]: {
    startedDisplayText: 'April, 2019',
    finishedDisplayText: 'April, 2019',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/TriviaApp-TriviaServer'
    }]
  },
  [projects.SERVERS]: {
    startedDisplayText: 'January, 2020',
    finishedDisplayText: 'January, 2020',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Server-Examples'
    }]
  },
  [projects.EMAIL_SPOOFER]: {
    startedDisplayText: 'April, 2015',
    finishedDisplayText: 'April, 2015',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Email-Spoofer'
    }]
  },
  [projects.ELECTRONIC_FRAME]: {
    startedDisplayText: 'May, 2019',
    finishedDisplayText: '-',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Digital-Picture-Frame'
    }]
  },
  [projects.AUTOMATION_EXAMPLES]: {
    startedDisplayText: 'May, 2019',
    finishedDisplayText: '-',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Automation-Examples'
    }]
  },
  [projects.CHALLENGES]: {
    startedDisplayText: 'Febuary, 2019',
    finishedDisplayText: '-',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Coding-Challenges'
    }]
  },
  [projects.GUEST_LIST]: {
    startedDisplayText: 'June, 2015',
    finishedDisplayText: 'June, 2015',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Guest-List'
    }]
  },
  [projects.KINGS]: {
    startedDisplayText: 'May, 2015',
    finishedDisplayText: 'May, 2015',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Kings-Card-Game'
    }, {
      displayText: 'Wikipedia',
      href: 'https://en.wikipedia.org/wiki/Kings_(game)'
    }]
  },
  [projects.MASTERMIND]: {
    startedDisplayText: 'October, 2015',
    finishedDisplayText: 'October, 2015',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Mastermind'
    }, {
      displayText: 'Wikipedia',
      href: 'https://en.wikipedia.org/wiki/Mastermind_(board_game)'
    }]
  },
  [projects.INSTANT_MESSENGER]: {
    startedDisplayText: 'Febuary, 2016',
    finishedDisplayText: 'Febuary, 2016',
    outline: '',
    tags: [],
    links: [{
      displayText: 'Repository',
      href: 'https://github.com/jaa134/Instant-Messenger'
    }]
  }
};
