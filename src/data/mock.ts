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
  roleType: "High Committee" | "Secretariat" | "Chief" | "Manager" | "Officer" | "Director" | "Executive" | "Advisor";
  bio?: string;
  socials?: { linkedin?: string; email?: string; facebook?: string };
}

export const chapterInfo = {
  name: "IMechE KUET Student Chapter",
  fullName: "Institution of Mechanical Engineers - KUET Student Chapter",
  shortName: "IMechE KUET",
  established: "2018",
  parentBody: "IMechE Bangladesh & South Asia Region",
  university: "Khulna University of Engineering & Technology (KUET)",
  faculty: "Faculty of Mechanical Engineering, KUET",
  department: "Department of Mechanical Engineering (Est. 1967)",
  membersCount: "500+",
  vision: "Improving the world through engineering.",
  globalNetwork: "Over 120,000 members across 140 countries since 1847",
  email: "imeche.kuet@gmail.com",
  contactEmail: "imeche@me.kuet.ac.bd",
  location: "Department of Mechanical Engineering, KUET, Khulna-9203, Bangladesh",
  coordinates: "22.8998° N, 89.5024° E",
  socials: {
    facebook: "https://www.facebook.com/IMechE.KUET/",
    linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all",
    instagram: "https://www.instagram.com/imeche_kuet/",
    youtube: "https://www.youtube.com/@imeche-kuet",
  },
  contacts: [
    { name: "Tahsin Hossain", role: "Chair", phone: "+880 1712-345678", email: "chair.imeche@kuet.ac.bd" },
    { name: "Aseer Awsaf", role: "General Secretary", phone: "+880 1812-987654", email: "gs.imeche@kuet.ac.bd" },
    { name: "Al Jubayer", role: "Chief of External Affairs", phone: "+880 1912-456789", email: "external.imeche@kuet.ac.bd" },
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
    title: "Speak Out for Engineering (SOfE) 2026 - KUET Chapter Heats",
    category: "Global Competition",
    date: "15 OCT",
    year: "2026",
    time: "10:00 AM - 4:00 PM",
    venue: "ME Seminar Hall, Mechanical Engineering Complex, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "The official KUET chapter heats of IMechE's flagship global presentation competition. 20-minute mechanical engineering presentations judged 90% on verbal clarity and communication skills. Winners advance to the Bangladesh National and South Asia Finals.",
    speakers: ["Distinguished Jury from KUET ME Faculty", "IMechE Bangladesh Group Officers"],
    schedule: [
      { time: "10:00 AM", activity: "Opening Address & Keynote Speech" },
      { time: "10:30 AM", activity: "Oral Competitor Presentations (Round 1)" },
      { time: "01:00 PM", activity: "Lunch & Jury Deliberation" },
      { time: "02:00 PM", activity: "Oral Competitor Presentations (Round 2)" },
      { time: "03:45 PM", activity: "Awards Ceremony (£300 Winner / £200 Runner-up)" }
    ],
    registrationStatus: "OPEN",
    externalLink: "/sofe"
  },
  {
    id: "route-to-ceng-kuet",
    title: "Route to Chartered Engineer (CEng) & Global Qualifications",
    category: "Professional Development",
    date: "18 OCT",
    year: "2026",
    time: "3:00 PM - 5:30 PM",
    venue: "Auditorium, Mechanical Engineering Complex, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "An essential roadmap session for KUET mechanical engineering students on attaining Chartered Engineer (CEng) credentials through IMechE UK. Senior Fellows and alumni share application guidelines, competence criteria, and career advantages in international engineering markets.",
    speakers: ["Distinguished KUET ME Alumni (CEng, MIMechE)", "Faculty Advisor, ME Dept, KUET"],
    schedule: [
      { time: "3:00 PM", activity: "Opening Speech & Chapter Welcome" },
      { time: "3:20 PM", activity: "Understanding UK-SPEC & International Accreditations" },
      { time: "4:30 PM", activity: "Interactive Q&A & Portfolio Review" }
    ],
    registrationStatus: "OPEN"
  },
  {
    id: "cad-design-challenge-kuet",
    title: "KUET Annual CAD & Mechanical Prototyping Challenge",
    category: "Engineering Competition",
    date: "05 NOV",
    year: "2026",
    time: "10:00 AM - 4:00 PM",
    venue: "CAD & Simulation Lab, ME Dept, KUET",
    organizers: "IMechE KUET Technical Committee",
    description: "A fast-paced 3D CAD modeling and finite element simulation competition using SolidWorks and ANSYS. Student teams design mechanical transmission mechanisms under strict stress, weight, and manufacturability constraints.",
    speakers: ["Lead Technical Judge, ME Dept.", "Industry Simulation Specialist"],
    schedule: [
      { time: "10:00 AM", activity: "Design Problem Statement Release" },
      { time: "10:30 AM", activity: "3D Parametric Modeling & FEA Phase" },
      { time: "02:30 PM", activity: "Design Defense & Jury Evaluation" }
    ],
    registrationStatus: "OPEN"
  },
  {
    id: "sustainable-energy-industrial-talk",
    title: "Sustainable Thermal Systems & Renewable Energy in Bangladesh",
    category: "Technical Symposium",
    date: "22 NOV",
    year: "2026",
    time: "4:00 PM - 6:30 PM",
    venue: "Seminar Room 101, ME Building, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Exploring the transition toward supercritical thermal power cycles, green hydrogen, and industrial waste-heat recovery across Bangladesh's growing industrial corridor.",
    speakers: ["Chief Engineer, Regional Power Generation", "Professor of Energy Technology, KUET"],
    schedule: [
      { time: "4:00 PM", activity: "Thermal Power Infrastructure in Bangladesh" },
      { time: "5:15 PM", activity: "Industrial Energy Auditing & Waste Heat Recovery" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "corporate-interview-resume-mastery",
    title: "Corporate Interview & Technical Resume Mastery",
    category: "Career & Placement",
    date: "14 DEC",
    year: "2026",
    time: "11:00 AM - 2:00 PM",
    venue: "Virtual & ME Seminar Hall",
    organizers: "IMechE KUET Corporate Liaison",
    description: "Partnered with multinational engineering employers to conduct resume vetting, technical screening simulations, and mock interviews for graduating 4th-year KUET engineers.",
    speakers: ["HR Talent Acquisition Lead, Multinational FMCG/Manufacturing", "Lead Plant Manager"],
    schedule: [
      { time: "11:00 AM", activity: "Engineering Resume Structuring & ATS Standards" },
      { time: "12:15 PM", activity: "Simulated Assessment Center & Technical Mock Interviews" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "freshers-orientation-imeche-day",
    title: "IMechE Day & Freshers' Welcome Session",
    category: "Flagship Event",
    date: "15 JAN",
    year: "2027",
    time: "10:00 AM - 3:00 PM",
    venue: "Student Welfare Centre (SWC), KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Welcoming the incoming 1st-year freshers of the Department of Mechanical Engineering into the IMechE KUET family. Includes technical club showcases, senior mentorship talks, and interactive mechanical quizzes.",
    speakers: ["Head, Department of Mechanical Engineering, KUET", "Executive Committee, IMechE KUET"],
    schedule: [
      { time: "10:00 AM", activity: "Induction & Presidential Address" },
      { time: "11:30 AM", activity: "Senior Mentorship & Engineering Life at KUET" },
      { time: "01:30 PM", activity: "Mechanical Engineering Quiz & Project Showcase" }
    ],
    registrationStatus: "OPEN"
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
    socials: { linkedin: "https://www.linkedin.com/company/imeche-kuet-student-chapter/posts/?feedView=all", email: "chair.imeche@kuet.ac.bd" }
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
