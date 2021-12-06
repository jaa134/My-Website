const courses = {
  EECS_290: 'EECS 290',
  EECS_345: 'EECS 345',
  EECS_392: 'EECS 392',
  EECS_448: 'EECS 448',
  EECS_275: 'EECS 275',
  EECS_325: 'EECS 325',
  EECS_393: 'EECS 393',
  EECS_395: 'EECS 395',
  PHIL_201: 'PHIL 201',
  COOP_2: 'COOP 2',
  COOP_1: 'COOP 1',
  EEPS_115: 'EEPS 115',
  MUEN_335: 'MUEN 355',
  EECS_293: 'EECS 293',
  EECS_341: 'EECS 341',
  ENGR_398: 'ENGR 398',
  USSY_227: 'USSY 227',
  EECS_338: 'EECS 338',
  EECS_340: 'EECS 340',
  EECS_444: 'EECS 444',
  SOCI_101: 'SOCI 101',
  STAT_312R: 'STAT 312R',
  ENGR_131: 'ENGR 131',
  ENGR_145: 'ENGR 145',
  ENGR_210: 'ENGR 210',
  PHYS_122: 'PHYS 122',
  USSO_286L: 'UUSO 286L',
  EECS_233: 'EECS 233',
  EECS_281: 'EECS 281',
  EECS_302: 'EECS 302',
  PHYS_121: 'PHYS 121',
  PHED_182_S: 'PHED 182 (S)',
  CHEM_111: 'CHEM 111',
  EECS_132: 'EECS 132',
  FSNA_148: 'FSNA 148',
  MATH_224: 'MATH 224',
  PHED_182_F: 'PHED 182 (F)'
};

export const headerData = [{
  key: 'isFavorite',
  header: ''
}, {
  key: 'term',
  header: 'Term'
}, {
  key: 'code',
  header: 'Code'
}, {
  key: 'name',
  header: 'Name'
}, {
  key: 'letterGrade',
  header: 'Letter grade'
}];

export const rowData = [{
  id: courses.EECS_345,
  code: courses.EECS_345,
  term: '2019 - Spring',
  name: 'Programming Language Concepts',
  letterGrade: 'A',
  isFavorite: true
}, {
  id: courses.EECS_392,
  code: courses.EECS_392,
  term: '2019 - Spring',
  name: 'App Development for iOS',
  letterGrade: 'A',
  isFavorite: true
}, {
  id: courses.EECS_448,
  code: courses.EECS_448,
  term: '2019 - Spring',
  name: 'Smartphone Security and Analysis',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_290,
  code: courses.EECS_290,
  term: '2019 - Spring',
  name: 'Intro to Computer Game Design',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_275,
  code: courses.EECS_275,
  term: '2018 - Fall',
  name: 'Fundamentals of Robotics',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_325,
  code: courses.EECS_325,
  term: '2018 - Fall',
  name: 'Computer Networks I',
  letterGrade: 'A',
  isFavorite: true
}, {
  id: courses.EECS_393,
  code: courses.EECS_393,
  term: '2018 - Fall',
  name: 'Software Engineering',
  letterGrade: 'A',
  isFavorite: true
}, {
  id: courses.EECS_395,
  code: courses.EECS_395,
  term: '2018 - Fall',
  name: 'Senior Proj in Computer Science',
  letterGrade: 'A',
  isFavorite: true
}, {
  id: courses.PHIL_201,
  code: courses.PHIL_201,
  term: '2018 - Fall',
  name: 'Introduction to Logic',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.COOP_2,
  code: courses.COOP_2,
  term: '2018 - Spring',
  name: 'Cooperative Education II',
  letterGrade: 'P',
  isFavorite: false
}, {
  id: courses.COOP_1,
  code: courses.COOP_1,
  term: '2017 - Fall',
  name: 'Cooperative Education I',
  letterGrade: 'P',
  isFavorite: false
}, {
  id: courses.EEPS_115,
  code: courses.EEPS_115,
  term: '2017 - Spring',
  name: 'Intro to Oceanography',
  letterGrade: 'P',
  isFavorite: false
}, {
  id: courses.MUEN_335,
  code: courses.MUEN_335,
  term: '2017 - Spring',
  name: 'Miscellaneous Ensembles',
  letterGrade: 'P',
  isFavorite: true
}, {
  id: courses.EECS_293,
  code: courses.EECS_293,
  term: '2016 - Fall',
  name: 'Software Craftsmanship',
  letterGrade: 'B',
  isFavorite: true
}, {
  id: courses.EECS_341,
  code: courses.EECS_341,
  term: '2016 - Fall',
  name: 'Intro to Database Systems',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.ENGR_398,
  code: courses.ENGR_398,
  term: '2016 - Fall',
  name: 'Professional Communication for Engineers',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.USSY_227,
  code: courses.USSY_227,
  term: '2016 - Fall',
  name: 'Travel Writing on Screen',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_338,
  code: courses.EECS_338,
  term: '2016 - Spring',
  name: 'Intro to Operating Systems',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.EECS_340,
  code: courses.EECS_340,
  term: '2016 - Spring',
  name: 'Algorithms',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.EECS_444,
  code: courses.EECS_444,
  term: '2016 - Spring',
  name: 'Computer Security',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.SOCI_101,
  code: courses.SOCI_101,
  term: '2016 - Spring',
  name: 'Intro to Sociology',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.STAT_312R,
  code: courses.STAT_312R,
  term: '2016 - Spring',
  name: 'Statistics for Engineering in R',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.ENGR_131,
  code: courses.ENGR_131,
  term: '2015 - Fall',
  name: 'Elementary Computer Programming in MATLAB',
  letterGrade: 'A',
  isFavorite: true
}, {
  id: courses.ENGR_145,
  code: courses.ENGR_145,
  term: '2015 - Fall',
  name: 'Chemistry of Materials',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.ENGR_210,
  code: courses.ENGR_210,
  term: '2015 - Fall',
  name: 'Intro to Circuits and Instrumentation',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.PHYS_122,
  code: courses.PHYS_122,
  term: '2015 - Fall',
  name: 'General Physics II, Electricity and Magnetism',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.USSO_286L,
  code: courses.USSO_286L,
  term: '2015 - Fall',
  name: 'Exploring Non-Profit Organizations',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_233,
  code: courses.EECS_233,
  term: '2015 - Spring',
  name: 'Intro to Data Structures',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_281,
  code: courses.EECS_281,
  term: '2015 - Spring',
  name: 'Logic Design and Computer Organization',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.EECS_302,
  code: courses.EECS_302,
  term: '2015 - Spring',
  name: 'Discrete Mathematics',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.PHYS_121,
  code: courses.PHYS_121,
  term: '2015 - Spring',
  name: 'General Physics I, Kinematics and Mechanics',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.PHED_182_S,
  code: courses.PHED_182_S,
  term: '2015 - Spring',
  name: 'Varsity Swimming (Spring)',
  letterGrade: 'P',
  isFavorite: false
}, {
  id: courses.CHEM_111,
  code: courses.CHEM_111,
  term: '2014 - Fall',
  name: 'Principles of Chemistry for Engineers',
  letterGrade: 'B',
  isFavorite: false
}, {
  id: courses.EECS_132,
  code: courses.EECS_132,
  term: '2014 - Fall',
  name: 'Introduction to Programming in Java',
  letterGrade: 'B',
  isFavorite: true
}, {
  id: courses.FSNA_148,
  code: courses.FSNA_148,
  term: '2014 - Fall',
  name: 'Science or Pseudoscience? Exploring Extraordinary Claims',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.MATH_224,
  code: courses.MATH_224,
  term: '2014 - Fall',
  name: 'Elementary Differential Equations',
  letterGrade: 'A',
  isFavorite: false
}, {
  id: courses.PHED_182_F,
  code: courses.PHED_182_F,
  term: '2014 - Fall',
  name: 'Varsity Swimming (Fall)',
  letterGrade: 'P',
  isFavorite: false
}];

export const rowDataExtended = {
  [courses.EECS_345]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_392]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_448]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_290]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_275]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_325]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_393]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_395]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.PHIL_201]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.COOP_2]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.COOP_1]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EEPS_115]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.MUEN_335]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_293]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_341]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.ENGR_398]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.USSY_227]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_338]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_340]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_444]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.SOCI_101]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.STAT_312R]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.ENGR_131]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.ENGR_145]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.ENGR_210]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.PHYS_122]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.USSO_286L]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_233]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_281]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.EECS_302]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.PHYS_121]: {
    department: '',
    instructor: '',
    description: '',
    links: [],
    comment: ''
  },
  [courses.PHED_182_S]: {
    department: 'Physical Education',
    instructor: 'Douglas Milliken',
    description: 'A course that varsity swimming athletes can take to meet university requirments on physical health and education. Swimmers will practice up to 11 sessions a week for 2 hours with weekly competitions against local D3 colleges and universities. Expect to be in the pool for 20+ hours each week.',
    links: [
      {
        displayText: 'CWRU Athletics - Swimming',
        href: 'https://athletics.case.edu/sports/mswimdive/index'
      }
    ],
    comment: ''
  },
  [courses.CHEM_111]: {
    department: 'Chemistry',
    instructor: 'Drew Meyer',
    description: 'A first course in university chemistry emphasizing chemistry of materials for engineering students. Atomic theory and quantitative relationships; gas laws and kinetic theory; solutions, acid-base properties and pH; thermodynamics and equilibrium; kinetics, catalysis, and mechanisms; molecular structure and bonding. Recommended preparation: One year of high school chemistry or permission of department.',
    links: [],
    comment: ''
  },
  [courses.EECS_132]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Harold Connamacher',
    description: 'Introduction to computer programming and problem solving with the Java language. Computers, operating systems, and Java applications; software development; conditional statements; loops; methods; arrays; classes and objects; object-oriented design; unit testing; strings and text I/O; inheritance and polymorphism; GUI components; application testing; abstract classes and interfaces; exception handling; files and streams; GUI event handling; generics; collections; threads; comparison of Java to C, C++, and C#.',
    links: [],
    comment: '"Introduction to Programming in Java" is the course in which I decided to pursue a degree in computer science. Harold Connamacher is the best professor/lecturer I have had the pleasure to take a course from. His lectures are engaging and his asignments are challenging, but not impossible.'
  },
  [courses.FSNA_148]: {
    department: 'First Seminar Natural World',
    instructor: 'Michele Hanks',
    description: 'In the contemporary world, extraordinary claims about ghosts, aliens, and the nature of the universe appear on popular television shows, on the Internet, and in the press. Many of these claims are framed as science. In this seminar, we critically examine the nature of these understandings of the world around us. We will ask if these claims are scientific and, if not, whether they constitute a form of pseudoscience. We will explore the role of demarcation, evidence, scientific progress, and fallacies of reasoning in pseudoscience. We will also consider the historical and sociocultural currents that give rise to these pseudoscientific claims as well as their social and political implications. Drawing on anthropological, philosophical, and historical case studies, we will consider topics such as cryptozoology, astrology, ancient aliens, parapsychology, the Nemesis theory of dinosaur extinctions, theories of intelligence, and other extraordinary claims.',
    links: [],
    comment: ''
  },
  [courses.MATH_224]: {
    department: 'Mathematics',
    instructor: 'David Gurarie',
    description: 'A first course in ordinary differential equations. First order equations and applications, linear equations with constant coefficients, linear systems, Laplace transforms, numerical methods of solution.',
    links: [],
    comment: ''
  },
  [courses.PHED_182_F]: {
    department: 'Physical Education',
    instructor: 'Douglas Milliken',
    description: 'A course that varsity swimming athletes can take to meet university requirments on physical health and education. Swimmers will practice up to 11 sessions a week for 2 hours with weekly competitions against local D3 colleges and universities. Expect to be in the pool for 20+ hours each week.',
    links: [
      {
        displayText: 'CWRU Athletics - Swimming',
        href: 'https://athletics.case.edu/sports/mswimdive/index'
      }
    ],
    comment: ''
  }
};
