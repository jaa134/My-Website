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
  ENGL_398: 'ENGL 398',
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
  id: courses.ENGL_398,
  code: courses.ENGL_398,
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
    instructor: 'Harold Connamacher',
    description: 'This course examines the four main programming paradigms: imperative, object-oriented, functional, and logical. It is assumed that students will come to the course with significant exposure to object-oriented programming and some exposure to imperative programming. The course will teach the functional paradigm in depth, enhance the students\' knowledge of the object-oriented and imperative paradigms, and introduce the logical paradigm. The course will explore language syntax, semantics, names/scopes, types, expressions, assignment, subprograms, abstraction and inheritance. This exploration will have several forms. Students will study the programming language concepts at a theoretical level, use the concepts in functional language programming, and implement the concepts by designing language interpreters.',
    links: [],
    comment: ''
  },
  [courses.EECS_392]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Jing Li',
    description: 'This course is an introduction to app development for iPhone and iPad using Cocoa Touch Framework and Xcode development environment. Topics include Swift programming language and iOS SDK/foundations, object-oriented design and model-view-controller framework, user interface design using Xcode. Additional topics may include data management, map applications, animations and some recent developments in iOS.',
    links: [],
    comment: ''
  },
  [courses.EECS_448]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Xusheng Xiao',
    description: 'This course is designed to better prepare undergraduate and graduate students for researching and developing in the neighborhood of mobile and software security. Lectures, paper readings and presentations, in-class discussions, and projects are the main components. The course covers the basics of Android programming and a wide range of security issues and solutions concerning mobile platforms, including permission analysis, textual artifacts analysis, malware analysis, program analysis, and UI analysis. Students should expect one literature survey paper and one system-building or empirical study project on one selected security solution in mobile app security.',
    links: [],
    comment: ''
  },
  [courses.EECS_290]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Michael Fu',
    description: 'This class begins with an examination of the history of video games and of game design. Games will be examined in a systems context to understand gaming and game design fundamentals. Various topics relating directly to the implementation of computer games will be introduced including graphics, animation, artificial intelligence, user interfaces, the simulation of motion, sound generation, and networking. Extensive study of past and current computer games will be used to illustrate course concepts. Individual and group projects will be used throughout the semester to motivate, illustrate and demonstrate the course concepts and ideas. Group game development and implementation projects will culminate in classroom presentation and evaluation.',
    links: [],
    comment: ''
  },
  [courses.EECS_275]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Gregory Lee',
    description: 'This course will expose students to fundamental principles of robotics. Students will explore high level conceptual foundations of robotics beginning with Braitenberg vehicles and apply this knowledge to simulated and physical robot hardware in laboratory experiences and in a final project. Laboratory experiences will guide students through applying theory to practice increasingly complex tasks in a project oriented, group work environment. The course culminates in a robotics challenge project at the end of the semester. Topics covered are: sensors, actuators, kinematics, control, planning and programming. Programming languages and concepts (e.g., C++, object oriented programming) used in robotics will be introduced and used with modern robotics programming toolboxes and frameworks. Prior experience with these languages will not be necessary.',
    links: [],
    comment: ''
  },
  [courses.EECS_325]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Mark Allman',
    description: 'An introduction to computer networks and the Internet. Applications: http, ftp, e-mail, DNS, socket programming. Transport: UDP, TCP, reliable data transfer, and congestion control. Network layer: IP, routing, and NAT. Link layer: taxonomy, Ethernet, 802.11.',
    links: [],
    comment: ''
  },
  [courses.EECS_393]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Andy Podgurski',
    description: 'Introduction to software engineering; software lifecycle models; development team organization and project management; requirements analysis and specification techniques; software design techniques; programming practices; software validation techniques; software maintenance practices; software engineering ethics. Undergraduates work in teams to complete a significant software development project.',
    links: [],
    comment: ''
  },
  [courses.EECS_395]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Soumya Ray',
    description: 'Capstone course for computer science seniors. Material from previous and concurrent courses used to solve computer programming problems and to develop software systems. Professional engineering topics such as project management, engineering design, communications, and professional ethics. Requirements include periodic reporting of progress, plus a final oral presentation and written report. Scheduled formal project presentations during last week of classes.',
    links: [],
    comment: ''
  },
  [courses.PHIL_201]: {
    department: 'Philosophy',
    instructor: 'Colin McLarty',
    description: 'Presentation, application, and evaluation of formal methods for determining the validity of arguments. Discussion of the relationship between logic and other disciplines.',
    links: [],
    comment: ''
  },
  [courses.COOP_2]: {
    department: 'Cooperative Education',
    instructor: 'Genine Apidone',
    description: 'A second semester of cooperative education with businesses nationwide to introduce students into industry.',
    links: [],
    comment: ''
  },
  [courses.COOP_1]: {
    department: 'Cooperative Education',
    instructor: 'Genine Apidone',
    description: 'A first semester of cooperative education with businesses nationwide to introduce students into industry.',
    links: [],
    comment: ''
  },
  [courses.EEPS_115]: {
    department: 'Earth, Environ & Planetary Sci',
    instructor: 'N/A',
    description: 'Quantitative introduction to the composition, structure, dynamics, and evolution of Earth using principles of geophysics and geochemistry. Planetary formation and differentiation, composition and structure of Earth and planets, heat generation and heat flow, mantle convection and plate tectonics, planetary magnetism and core dynamics, chemical evolution of Earth and planets, extrasolar planets and super Earths.',
    links: [],
    comment: ''
  },
  [courses.MUEN_335]: {
    department: 'Music & Ensembles',
    instructor: 'N/A',
    description: 'General musical ensemble course where perofrmances, written reports, and a study of musical origins are rquired',
    links: [],
    comment: ''
  },
  [courses.EECS_293]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Vincenzo Liberatore',
    description: 'A course to improve programming skills, software quality, and the software development process. Software design; Version control; Control issues and routines; Pseudo-code programming process and developer testing; Defensive programming; Classes; Debugging; Self-documenting code; Refactoring.',
    links: [],
    comment: ''
  },
  [courses.EECS_341]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Gurkan Bebek',
    description: 'Relational model, ER model, relational algebra and calculus, SQL, OBE, security, views, files and physical database structures, query processing and query optimization, normalization theory, concurrency control, object relational systems, multimedia databases, Oracle SQL server, Microsoft SQL server.',
    links: [],
    comment: ''
  },
  [courses.ENGR_398]: {
    department: 'Engineering Science',
    instructor: 'Marc Buchner',
    description: 'Students will attend lectures on global, economic, environmental, and societal issues in engineering, which will be the basis for class discussions, written assignments and oral presentations in ENGL 398.',
    links: [],
    comment: ''
  },
  [courses.ENGL_398]: {
    department: 'English',
    instructor: 'Michael Parker',
    description: 'A writing course for Engineering students only, covering academic and professional genres of written and oral communication. Taken in conjunction with Engineering 398, English 398 constitutes an approved SAGES Departmental Seminar.',
    links: [],
    comment: ''
  },
  [courses.USSY_227]: {
    department: 'SAGES: Symbolic World',
    instructor: 'Linda Ehrlich',
    description: 'Through the image of the traveler in a wide range of films, we will examine such issues as border crossing, culture shock, and the nature of memory. Topics include: The Grand Tour, pilgrimage, exile, and imaginary journeys. A group presentation, 5 short-reaction papers, and a take-home final essay are required.',
    links: [],
    comment: ''
  },
  [courses.EECS_338]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Eamon JohnsonEamon Johnson',
    description: 'OS Structures, processes, threads, CPU scheduling, deadlocks, memory management, file system implementations, virtual machines, cloud computing. Concurrent programming: fork, join, concurrent statement, critical section problem, safety and liveness properties of concurrent programs, process synchronization algorithms, semaphores, monitors. UNIX systems programming: system calls, UNIX System V IPCs, threads, RPCs, shell programming.Intro to OS: OS Structures, processes, threads, CPU scheduling, deadlocks, memory management, file system implementations, virtual machines, cloud computing. Concurrent programming: fork, join, concurrent statement, critical section problem, safety and liveness properties of concurrent programs, process synchronization algorithms, semaphores, monitors. UNIX systems programming: system calls, UNIX System V IPCs, threads, RPCs, shell programming.',
    links: [],
    comment: ''
  },
  [courses.EECS_340]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Mehmet Koyuturk',
    description: 'Fundamentals in algorithm design and analysis. Loop invariants, asymptotic notation, recurrence relations, sorting algorithms, divide-and-conquer, dynamic programming, greedy algorithms, basic graph algorithms.',
    links: [],
    comment: ''
  },
  [courses.EECS_444]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Andy Podgurski',
    description: 'General types of security attacks; approaches to prevention; secret key and public key cryptography; message authentication and hash functions; digital signatures and authentication protocols; information gathering; password cracking; spoofing; session hijacking; denial of service attacks; buffer overruns; viruses, worms, etc., principles of secure software design, threat modeling; access control; least privilege; storing secrets; socket security; RPC security; security testing; secure software installation; operating system security; database security; web security; email security; firewalls; intrusions.',
    links: [],
    comment: ''
  },
  [courses.SOCI_101]: {
    department: 'Sociology',
    instructor: 'Michael Flatt',
    description: 'This course examines the basic principles that underlie how sociologists look at the world: "The Sociological Imagination". It addresses the basic questions: How is social order possible and how does change occur? The course is designed as a foundation for further study in field of sociology and related disciplines. It introduces the student to the role that culture and social institutions play in modern society and examines important concepts such as socialization, deviance, social control, patterned inequalities and social change. These concepts are discussed in the context of both contemporary and historical social theories. Additionally, the student will be introduced to the methods of inquiry used by practicing sociologists.',
    links: [],
    comment: ''
  },
  [courses.STAT_312R]: {
    department: 'Statistics',
    instructor: 'Patricia Williamson',
    description: 'For advanced undergraduate students in engineering, physical sciences, life sciences. Comprehensive introduction to probability models and statistical methods of analyzing data with the object of formulating statistical models and choosing appropriate methods for inference from experimental and observational data and for testing the model\'s validity. Balanced approach with equal emphasis on probability, fundamental concepts of statistics, point and interval estimation, hypothesis testing, analysis of variance, design of experiments, and regression modeling.',
    links: [],
    comment: ''
  },
  [courses.ENGR_131]: {
    department: 'Engineering Science',
    instructor: 'Chris Fietkiewicz',
    description: 'Students will learn the fundamentals of computer programming and algorithmic problem solving. Concepts are illustrated using a wide range of examples from engineering, science, and other disciplines. Students learn how to create, debug, and test computer programs, and how to develop algorithmic solution to problems and write programs that implement those solutions. Matlab is the primary programming language used in this course, but other languages may be introduced or used throughout.',
    links: [],
    comment: ''
  },
  [courses.ENGR_145]: {
    department: 'Engineering Science',
    instructor: 'David Schiraldi',
    description: 'Application of fundamental chemistry principles to materials. Emphasis is on bonding and how this relates to the structure and properties in metals, ceramics, polymers and electronic materials. Application of chemistry principles to develop an understanding of how to synthesize materials.',
    links: [],
    comment: ''
  },
  [courses.ENGR_210]: {
    department: 'Engineering Science',
    instructor: 'Gregory Lee',
    description: 'Modeling and circuit analysis of analog and digital circuits. Fundamental concepts in circuit analysis: voltage and current sources, Kirchhoff\'s Laws, Thevenin, and Norton equivalent circuits, inductors capacitors, and transformers. Modeling sensors and amplifiers and measuring DC device characteristics. Characterization and measurement of time dependent waveforms. Transient behavior of circuits. Frequency dependent behavior of devices and amplifiers, frequency measurements. AC power and power measurements. Electronic devices as switches.',
    links: [],
    comment: ''
  },
  [courses.PHYS_122]: {
    department: 'Physics',
    instructor: 'Cory Christenson',
    description: 'Electricity and magnetism, emphasizing the basic electromagnetic laws of Gauss, Ampere, and Faraday. Maxwell\'s equations and electromagnetic waves, interference, and diffraction. This course has a laboratory component.',
    links: [],
    comment: ''
  },
  [courses.USSO_286L]: {
    department: 'SAGES: Social World',
    instructor: 'Barbara Clemenson',
    description: 'This seminar is structured to expose students to the opportunities and challenges of working in and running non-profit organizations. Students will explore the importance and significant roles non-profit organizations play in our society. The class will learn how non-profits are organized and regulated and the importance of the organization\'s mission is to determining the impact of the non-profit organization in the community. Additionally, the students will learn how non-profits are funded and how these organizations maintain their financial stability and sustainability in the community. These goals will be accomplished through group analysis of non-profit organizational principles, and investigation of existing non-profit organizations.',
    links: [],
    comment: ''
  },
  [courses.EECS_233]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Michael Rabinovich',
    description: 'The programming language Java; pointers, files, and recursion. Representation and manipulation of data: one way and circular linked lists, doubly linked lists; the available space list. Different representations of stacks and queues. Representation of binary trees, trees and graphs. Hashing; searching and sorting.',
    links: [],
    comment: ''
  },
  [courses.EECS_281]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Evren Gurkan Cavusoglu',
    description: 'Fundamentals of digital systems in terms of both computer organization and logic level design. Organization of digital computers; information representation; boolean algebra; analysis and synthesis of combinational and sequential circuits; datapaths and register transfers; instruction sets and assembly language; input/output and communication; memory.',
    links: [],
    comment: ''
  },
  [courses.EECS_302]: {
    department: 'Electrical Engr & Comp Sci',
    instructor: 'Carl Entemann',
    description: 'A general introduction to basic mathematical terminology and the techniques of abstract mathematics in the context of discrete mathematics. Topics introduced are mathematical reasoning, Boolean connectives, deduction, mathematical induction, sets, functions and relations, algorithms, graphs, combinatorial reasoning.',
    links: [],
    comment: ''
  },
  [courses.PHYS_121]: {
    department: 'Physics',
    instructor: 'Gary Chottiner',
    description: 'Particle dynamics, Newton\'s laws of motion, energy and momentum conservation, rotational motion, and angular momentum conservation. This course has a laboratory component.',
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
    department: 'SAGES: Natural World',
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
