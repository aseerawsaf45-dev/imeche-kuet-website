export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  year: string;
  time?: string;
  venue?: string;
  organizers?: string;
  description: string;
  speakers?: string[];
  schedule?: { time: string; activity: string }[];
  registrationStatus: "OPEN" | "CLOSED" | "COMPLETED";
  externalLink?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: string;
  team: string[];
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  status: "ONGOING" | "COMPLETED";
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  deptCode: "ME" | "MTE" | "TE" | "MSE" | "ChE" | "IEM" | string;
  batch?: string;
  committee: string;
  roleType: "High Committee" | "Secretariat" | "Chief" | "Manager" | "Officer" | "Director" | "Executive" | "Advisor" | "Analyst";
  bio?: string;
  socials?: { linkedin?: string; email?: string; facebook?: string };
}

export const chapterInfo = {
  name: "IMechE KUET Student Chapter",
  fullName: "Institution of Mechanical Engineers - KUET Student Chapter",
  shortName: "IMechE KUET",
  established: "2015",
  parentBody: "IMechE Bangladesh & South Asia Region",
  university: "Khulna University of Engineering & Technology (KUET)",
  faculty: "Faculty of Mechanical Engineering, KUET",
  department: "Department of Mechanical Engineering (Est. 1967)",
  membersCount: "50+",
  alumniCount: "200+",
  vision: "Improving the world through engineering.",
  globalNetwork: "Over 120,000 members across 140 countries since 1847",
  email: "imeche.kuet@gmail.com",
  contactEmail: "imeche@me.kuet.ac.bd",
  joinFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_2IW3r4Puhv0D0273WoyeV53JMxprDV3IGy5WsXbDErFXPQ/viewform",
  location: "Department of Mechanical Engineering, KUET, Khulna-9203, Bangladesh",
  coordinates: "22.8998° N, 89.5024° E",
  socials: {
    facebook: "https://www.facebook.com/IMechE.KUET/",
    linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all",
    instagram: "https://www.instagram.com/imeche_kuet/",
    youtube: "https://www.youtube.com/@imeche-kuet",
  },
  contacts: [
    { name: "Tahsin Hossain", role: "Chair", phone: "+880 1932-867407", email: "tahsin.kuetme@gmail.com" },
  ],
  missions: [
    {
      num: "01",
      title: "Technical Mastery & Enjoyment",
      desc: "Promote the study, technical curiosity, and practical enjoyment of Mechanical Engineering among students at KUET through advanced workshops, design challenges, and lab sessions."
    },
    {
      num: "02",
      title: "Industry Linkage & Careers",
      desc: "Provide KUET mechanical engineering undergraduates a direct corporate bridge to national and multinational industrial conglomerates for internships, factory visits, and career recruitment."
    },
    {
      num: "03",
      title: "Departmental Collaboration",
      desc: "Strengthen collaborative research and mentoring bonds between the distinguished faculty members of the Department of Mechanical Engineering and student researchers."
    },
    {
      num: "04",
      title: "Global Accreditation & CEng",
      desc: "Guide aspiring KUET engineers along the international IMechE UK-SPEC framework toward Chartered Engineer (CEng) and Institution of Engineers Bangladesh (IEB) qualifications."
    }
  ]
};

export const events: EventItem[] = [
  {
    id: "sofe-2026-kuet",
    title: "Speak Out for Engineering (SOfE) 2026 - Intra KUET Heats",
    category: "Global Flagship Competition",
    date: "19 SEPT (TENTATIVE)",
    year: "2026",
    time: "TBA",
    venue: "ME Seminar Hall, Mechanical Engineering Complex, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "The official KUET chapter heats of IMechE's premier global engineering communication competition. 20-minute verbal presentations + 10-minute jury defense judged 90% on presentation skills and 10% on technical complexity. 100-word abstract due 13 September 2026.",
    speakers: ["Distinguished Jury from KUET ME Faculty", "IMechE Bangladesh Group Representatives"],
    schedule: [
      { time: "10:00 AM", activity: "Opening Address & Keynote Speech" },
      { time: "10:30 AM", activity: "Competitor Oral Presentations & Slides (Round 1)" },
      { time: "01:00 PM", activity: "Lunch & Jury Scoring Deliberation" },
      { time: "02:00 PM", activity: "Competitor Oral Presentations (Round 2)" },
      { time: "03:45 PM", activity: "Awards Ceremony (£300 Winner / £200 Runner-up)" }
    ],
    registrationStatus: "OPEN",
    externalLink: "/sofe"
  },
  {
    id: "smart-solar-irrigation-competition-2026",
    title: "Design Competition 2026: Smart Solar Irrigation System for Smallholder Farmers",
    category: "Design Competition",
    date: "15 SEP / 10 OCT",
    year: "2026",
    time: "Deadline: 11:59 PM BST",
    venue: "Virtual Submission & Presentation Defense",
    organizers: "IMechE Bangladesh Panel & IMechE KUET Student Chapter",
    description: "National engineering design competition challenging teams of 4 undergraduate engineers to design an optimized, low-cost smart solar-powered irrigation system tailored for smallholder agriculture. Required tool: SolidWorks (CAD + Flow Simulation). Registration deadline: 15 Sept 2026; Submission deadline: 10 Oct 2026.",
    speakers: ["IMechE Bangladesh Panel Judges", "Solar & Agricultural Engineering Experts"],
    schedule: [
      { time: "15 SEP 2026", activity: "Team Registration Cutoff (Free Entry)" },
      { time: "10 OCT 2026", activity: "Final SolidWorks CAD & Simulation Report Submission" },
      { time: "OCT 2026", activity: "Jury Defense & National Award Presentation" }
    ],
    registrationStatus: "OPEN",
    externalLink: "https://www.facebook.com/IMechE.KUET"
  },
  {
    id: "scientific-research-paper-writing-seminar",
    title: "Seminar on Scientific Research, Paper Writing & High-Impact Publication",
    category: "Research Symposium",
    date: "24 SEP",
    year: "2024",
    time: "3:00 PM - 5:30 PM",
    venue: "Mechanical Engineering Seminar Hall, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Specialized academic seminar guiding mechanical engineering students through the entire research lifecycle: literature survey methodology, identifying research gaps, scientific manuscript drafting, navigating peer review, and publishing in reputable Scopus/SCI journals.",
    speakers: ["Senior Faculty Professors, ME Dept, KUET", "Published Postgraduate Researchers"],
    schedule: [
      { time: "3:00 PM", activity: "Keynote: Research Methodology in Mechanical Engineering" },
      { time: "4:00 PM", activity: "Scientific Manuscript Structuring & Journal Selection" },
      { time: "5:00 PM", activity: "Q&A Session & Thesis Publishing Guidance" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "cfd-aerodynamics-simulation-workshop",
    title: "Hands-on Workshop: Computational Fluid Dynamics (CFD) & Mesh Modeling",
    category: "Technical Workshop",
    date: "12 NOV",
    year: "2024",
    time: "10:00 AM - 4:00 PM",
    venue: "CAD & Simulation Lab, ME Complex, KUET",
    organizers: "IMechE KUET Technical Committee",
    description: "Intensive practical computational fluid dynamics session for KUET undergraduates. Participants learned geometry cleanup, structured/unstructured mesh discretization, boundary layer formulation, turbulence modeling, and aerodynamic post-processing using ANSYS Fluent and SolidWorks Flow Simulation.",
    speakers: ["CFD Research Specialists, ME Dept, KUET", "Lead Simulation Instructors"],
    schedule: [
      { time: "10:00 AM", activity: "Governing Navier-Stokes Equations & Turbulence Models" },
      { time: "11:30 AM", activity: "Hands-on Meshing & Boundary Condition Setup" },
      { time: "02:00 PM", activity: "Flow Simulation Case Study: Airfoil & Pipe Flow" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "khulna-power-plant-industrial-tour",
    title: "Industrial Study Tour: Khulna 225MW Power Plant & Shipyard Complex",
    category: "Industrial Tour",
    date: "18 JAN",
    year: "2025",
    time: "8:00 AM - 5:00 PM",
    venue: "Khulna Power Station Complex & Khulna Shipyard Ltd.",
    organizers: "IMechE KUET Industrial Relations",
    description: "Comprehensive industrial plant excursion providing mechanical undergraduates hands-on visual exposure to heavy industrial machinery. Students inspected combined-cycle steam turbine generation, water-tube boilers, cooling tower arrays, marine vessel hull fabrication, and heavy dockyard welding.",
    speakers: ["Superintending Engineer, Khulna Power Station", "Head Marine Architect, Khulna Shipyard Ltd."],
    schedule: [
      { time: "08:30 AM", activity: "Departure from KUET ME Building" },
      { time: "10:00 AM", activity: "Combined Cycle Power Plant Turbomachinery Walkthrough" },
      { time: "02:00 PM", activity: "Khulna Shipyard Dry Dock & Marine Fabrication Tour" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "route-to-ceng-kuet",
    title: "Route to Chartered Engineer (CEng) & UK-SPEC Professional Accreditations",
    category: "Professional Development",
    date: "16 FEB",
    year: "2025",
    time: "3:00 PM - 5:30 PM",
    venue: "Auditorium, Mechanical Engineering Complex, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Guidance roadmap session on navigating the international IMechE UK-SPEC framework toward Chartered Engineer (CEng) and MIMechE credentials. Alumni shared portfolio preparation steps, competence matrices, and career advantages in international engineering markets.",
    speakers: ["Distinguished KUET ME Alumni (CEng, MIMechE)", "Faculty Advisor, ME Dept, KUET"],
    schedule: [
      { time: "3:00 PM", activity: "Understanding UK-SPEC & International Accreditations" },
      { time: "4:00 PM", activity: "Career Portfolio & Competence Assessment" },
      { time: "4:45 PM", activity: "Interactive Panel Q&A with Chartered Engineers" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "freshers-orientation-and-induction",
    title: "Annual Chapter Orientation & Mechanical Freshers' Induction",
    category: "Chapter Flagship",
    date: "08 MAR",
    year: "2025",
    time: "10:00 AM - 3:00 PM",
    venue: "Student Welfare Centre (SWC), KUET",
    organizers: "IMechE KUET Executive Committee",
    description: "Official welcome and orientation event inducting incoming 1st-year undergraduates of the Faculty of Mechanical Engineering into the IMechE KUET family. Featured mechanical project exhibitions, senior mentorship, club registration drives, and mechanical design trivia.",
    speakers: ["Head, Department of Mechanical Engineering, KUET", "Executive Committee, IMechE KUET"],
    schedule: [
      { time: "10:00 AM", activity: "Welcome Address & IMechE Global Presentation" },
      { time: "11:30 AM", activity: "Senior Mentorship Panel: Excelling at KUET ME" },
      { time: "01:30 PM", activity: "Mechanical Engineering Quiz & Project Demos" }
    ],
    registrationStatus: "COMPLETED"
  }
];

export const team: TeamMember[] = [
  // 1. High Committee / Executive Board
  {
    id: "tahsin-hossain",
    name: "Tahsin Hossain",
    position: "Chair",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Executive Board",
    roleType: "High Committee",
    bio: "Leading the strategic vision, international engineering competitions, and accreditation expansion of IMechE KUET Student Chapter.",
    socials: { linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all", email: "tahsin.kuetme@gmail.com" }
  },
  {
    id: "auritra-sharma",
    name: "Auritra Sharma",
    position: "Vice Chair",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Executive Board",
    roleType: "High Committee",
    bio: "Spearheading chapter operations, technical workshops, and collaboration across engineering departments.",
    socials: { linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all", email: "vicechair.imeche@kuet.ac.bd" }
  },
  {
    id: "aseer-awsaf",
    name: "Aseer Awsaf",
    position: "General Secretary",
    department: "Department of Textile Engineering",
    deptCode: "TE",
    committee: "Executive Board",
    roleType: "High Committee",
    bio: "Overseeing chapter governance, administrative communications, and liaison with IMechE Bangladesh Group.",
    socials: { linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all", email: "gs.imeche@kuet.ac.bd" }
  },
  {
    id: "talukder-farhan",
    name: "Talukder Farhan Anjum Plabon",
    position: "Treasurer",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Executive Board",
    roleType: "High Committee",
    bio: "Managing chapter fiscal budgeting, sponsorship allocation, and financial compliance for all annual initiatives.",
    socials: { linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all", email: "treasurer.imeche@kuet.ac.bd" }
  },

  // 2. Organizing Secretaries
  {
    id: "nazizus-salehin-nirob",
    name: "Nazizus Salehin Nirob",
    position: "Organizing Secretary",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Event & Organization",
    roleType: "Secretariat"
  },
  {
    id: "tirtho-roy",
    name: "Tirtho Roy",
    position: "Organizing Secretary",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Event & Organization",
    roleType: "Secretariat"
  },
  {
    id: "rizvy-ahmed",
    name: "Rizvy Ahmed",
    position: "Organizing Secretary",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Event & Organization",
    roleType: "Secretariat"
  },

  // 3. Chief of External Affairs
  {
    id: "al-jubayer",
    name: "Al Jubayer",
    position: "Chief of External Affairs",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "External Affairs",
    roleType: "Chief"
  },
  {
    id: "md-mushfiqur-rahman",
    name: "Md. Mushfiqur Rahman",
    position: "Chief of External Affairs",
    department: "Materials Science & Engineering",
    deptCode: "MSE",
    committee: "External Affairs",
    roleType: "Chief"
  },
  {
    id: "mohaimen-zaman",
    name: "Mohaimen Zaman",
    position: "Chief of External Affairs",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "External Affairs",
    roleType: "Chief"
  },

  // 4. Chief of Internal Affairs
  {
    id: "antor-mondal",
    name: "Antor Mondal",
    position: "Chief of Internal Affairs",
    department: "Mechatronics Engineering",
    deptCode: "MTE",
    committee: "Internal Affairs",
    roleType: "Chief"
  },
  {
    id: "fahim-muntasir-nur",
    name: "Fahim Muntasir Nur",
    position: "Chief of Internal Affairs",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Internal Affairs",
    roleType: "Chief"
  },
  {
    id: "nafi-ahmed",
    name: "Nafi Ahmed",
    position: "Chief of Internal Affairs",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Internal Affairs",
    roleType: "Chief"
  },

  // 5. Publication Managers
  {
    id: "monirun-nahar-tabassum",
    name: "Monirun Nahar Tabassum",
    position: "Publication Manager",
    department: "Mechatronics Engineering",
    deptCode: "MTE",
    committee: "Publications & Editorial",
    roleType: "Manager"
  },
  {
    id: "tasnubha-tanzim",
    name: "Tasnubha Tanzim",
    position: "Publication Manager",
    department: "Chemical Engineering",
    deptCode: "ChE",
    committee: "Publications & Editorial",
    roleType: "Manager"
  },

  // 6. Public Relations Officers
  {
    id: "b-s-pritha",
    name: "B. S. Pritha",
    position: "Public Relations Officer",
    department: "Mechatronics Engineering",
    deptCode: "MTE",
    committee: "Public Relations",
    roleType: "Officer"
  },
  {
    id: "jarin-tasnim-mumu",
    name: "Jarin Tasnim Mumu",
    position: "Public Relations Officer",
    department: "Industrial Engineering & Management",
    deptCode: "IEM",
    committee: "Public Relations",
    roleType: "Officer"
  },
  {
    id: "moontaha-sharmin-moon",
    name: "Moontaha Sharmin Moon",
    position: "Public Relations Officer",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Public Relations",
    roleType: "Officer"
  },

  // 7. Human Resource Managers
  {
    id: "abdur-raheem",
    name: "Abdur Raheem",
    position: "Human Resource Manager",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Human Resources",
    roleType: "Manager"
  },
  {
    id: "barkatullah-bin-shahid",
    name: "Barkatullah Bin Shahid",
    position: "Human Resource Manager",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Human Resources",
    roleType: "Manager"
  },
  {
    id: "hridi-medha",
    name: "Hridi Medha",
    position: "Human Resource Manager",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Human Resources",
    roleType: "Manager"
  },

  // 8. Media Officers
  {
    id: "ismail-hossain",
    name: "Ismail Hossain",
    position: "Media Officer",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Media & Outreach",
    roleType: "Officer"
  },
  {
    id: "muhammad-omar-faruk",
    name: "Muhammad Omar Faruk",
    position: "Media Officer",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Media & Outreach",
    roleType: "Officer"
  },
  {
    id: "zihad-rahman",
    name: "Zihad Rahman",
    position: "Media Officer",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Media & Outreach",
    roleType: "Officer"
  },

  // 9. Policy Analysts
  {
    id: "akib-ahmed",
    name: "Akib Ahmed",
    position: "Policy Analyst",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Policy & Strategy",
    roleType: "Analyst"
  },
  {
    id: "faizus-salehin-nafi",
    name: "Faizus Salehin Nafi",
    position: "Policy Analyst",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Policy & Strategy",
    roleType: "Analyst"
  },
  {
    id: "gazi-faysal-jubayer",
    name: "Gazi Faysal Jubayer",
    position: "Policy Analyst",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Policy & Strategy",
    roleType: "Analyst"
  },
  {
    id: "hridam-roshan-paul",
    name: "Hridam Roshan Paul",
    position: "Policy Analyst",
    department: "Department of Mechanical Engineering",
    deptCode: "ME",
    committee: "Policy & Strategy",
    roleType: "Analyst"
  },
];

export const boardsArchive = [
  { year: "2025/2026", theme: "Pioneering Mechanical Ingenuity at KUET", image: "/boards/board-25-26.png" },
  { year: "2024/2025", theme: "Innovate, Build, Lead", image: "/boards/board-24-25.png" },
  { year: "2023/2024", theme: "Engineering the Future", image: "/boards/board-23-24.png" },
  { year: "2022/2023", theme: "Bridging Theory and Industry", image: "/boards/board-22-23.png" },
  { year: "2021/2022", theme: "Resilience Through Engineering", image: "/boards/board-21-22.png" },
  { year: "2019/2020", theme: "Excellence in Mechanical Science", image: "/boards/board-19-20.png" },
  { year: "2018/2019", theme: "Foundations of the Chapter", image: "/boards/board-18-19.png" },
];

export const projects: ProjectItem[] = [
  {
    id: "autonomous-rescue-rover",
    title: "Autonomous All-Terrain Disaster Reconnaissance Rover",
    year: "2025",
    category: "Robotics & Mechatronics",
    team: ["Tanvir Hasan", "Ahmed Shahriar", "Sayem Ahmed"],
    description: "An autonomous exploratory rover engineered by KUET mechanical and mechatronics students, designed to navigate debris-laden environments with real-time environmental hazard mapping.",
    problem: "Urban disaster search operations face acute risks in structurally compromised buildings where human entry is impossible and wireless RF signals degrade.",
    solution: "Designed a lightweight 6-wheel rocker-bogie chassis with high torque planetary DC gearboxes, integrating 3D LiDAR SLAM, thermal imaging, and an autonomous navigation controller.",
    outcome: "Successfully achieved autonomous navigation across 30-degree incline rubble with sub-5cm positional precision in simulated disaster testing at KUET robotics arena.",
    technologies: ["SolidWorks", "ANSYS FEA", "ROS 2", "Python", "LiDAR", "3D Prototyping"],
    status: "COMPLETED"
  },
  {
    id: "industrial-hvac-thermal-audit",
    title: "Industrial Heat Recovery & Smart HVAC Optimization",
    year: "2026",
    category: "Thermofluids & Energy",
    team: ["Kazi Mehedi Hasan", "Sadia Islam", "Faculty Research Group"],
    description: "An experimental study and IoT sensor array developed to reclaim waste flue-gas heat from industrial boilers and optimize commercial HVAC thermal loads.",
    problem: "Industrial processing plants in regional industrial zones discard up to 30% of energy as low-grade exhaust heat.",
    solution: "Engineered a compact cross-flow shell-and-tube heat exchanger coupled with micro-turbines and continuous sensor telemetry.",
    outcome: "Demonstrated a 19.4% improvement in thermal energy recuperation in bench-scale testing at the KUET Heat Engine Laboratory.",
    technologies: ["Thermofluids Simulation", "MATLAB", "CFD", "IoT Microcontrollers"],
    status: "ONGOING"
  }
];
