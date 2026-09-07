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
  abstractLink?: string;
  registrationLink?: string;
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
  email: "imeche.kuetchapter@gmail.com",
  contactEmail: "imeche@me.kuet.ac.bd",
  joinFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_2IW3r4Puhv0D0273WoyeV53JMxprDV3IGy5WsXbDErFXPQ/viewform",
  location: "Department of Mechanical Engineering, KUET, Khulna-9203, Bangladesh",
  coordinates: "22.8998° N, 89.5024° E",
  socials: {
    facebook: "https://www.facebook.com/IMechE.KUET/",
    facebookEvents: "https://www.facebook.com/IMechE.KUET/events",
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
    externalLink: "/sofe",
    abstractLink: "https://forms.gle/YcVCi8GGXUBEMSDY6"
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
    externalLink: "https://www.facebook.com/photo/?fbid=1096849249539106",
    registrationLink: "https://www.facebook.com/photo/?fbid=1096849249539106"
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
  },
  {
    id: "sofe-2024-kuet",
    title: "Speak Out for Engineering (SOfE) 2024 - 'Speak Out for Engineers'",
    category: "Global Flagship Competition",
    date: "07 OCT",
    year: "2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Mechanical Engineering Seminar Hall, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "The 2024 institutional round of IMechE's global engineering communication championship. Student engineers delivered 20-minute presentations judged 90% on oral delivery and communication clarity and 10% on technical content.",
    speakers: ["IMechE Bangladesh Panel Judges", "Distinguished Faculty Jury, ME Dept, KUET"],
    schedule: [
      { time: "10:00 AM", activity: "Opening Address & Keynote" },
      { time: "10:30 AM", activity: "Competitor Presentations (Session 1)" },
      { time: "01:30 PM", activity: "Competitor Presentations (Session 2)" },
      { time: "03:30 PM", activity: "Jury Scoring Deliberation & Prize Giving" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "workshop-cfd-2024",
    title: "Workshop on Computational Fluid Dynamics (CFD) 2024",
    category: "Technical Workshop",
    date: "09 FEB",
    year: "2024",
    time: "09:30 AM - 4:30 PM",
    venue: "CAD & Simulation Lab, ME Dept, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Intensive practical CFD workshop guiding KUET undergraduates through Navier-Stokes equations, mesh discretization, boundary layer physics, and hands-on aerodynamic simulations using ANSYS Fluent.",
    speakers: ["CFD Specialists, ME Dept, KUET", "Senior Simulation Mentors"],
    schedule: [
      { time: "09:30 AM", activity: "Fluid Flow Governing Equations & Physics" },
      { time: "11:00 AM", activity: "Geometry Cleanup & Mesh Discretization" },
      { time: "02:00 PM", activity: "Pipe Flow & Airfoil Case Studies" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "sofe-2023-kuet",
    title: "Speak Out for Engineering (SOfE) 2023",
    category: "Global Flagship Competition",
    date: "01 OCT",
    year: "2023",
    time: "10:00 AM - 5:00 PM",
    venue: "ME Seminar Hall, Mechanical Engineering Complex, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Annual intra-university communication championship challenging student engineers to present complex engineering concepts clearly and persuasively before an esteemed faculty jury.",
    speakers: ["Faculty Panel, ME Dept, KUET", "IMechE Bangladesh Representatives"],
    schedule: [
      { time: "10:00 AM", activity: "Inaugural Speech & Contestant Briefing" },
      { time: "10:30 AM", activity: "Round 1 Presentations" },
      { time: "02:00 PM", activity: "Round 2 Presentations" },
      { time: "04:30 PM", activity: "Awards Ceremony & Certificate Distribution" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "seminar-3d-animation-rendering-2023",
    title: "Seminar on 3D Animation, Rendering, Game Development & Commercial Product Animation",
    category: "Technical Workshop",
    date: "10 SEP",
    year: "2023",
    time: "3:00 PM - 6:00 PM",
    venue: "Department of Mechanical Engineering, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Specialized technical seminar covering industrial rendering, 3D mechanical model visualization, Blender workflows, Unreal Engine integration, and commercial CAD product animation.",
    speakers: ["Industry 3D Animators & Visualizers", "KUET ME Multimedia Leads"],
    schedule: [
      { time: "3:00 PM", activity: "3D Modeling & CAD Asset Extraction" },
      { time: "4:00 PM", activity: "PBR Texturing, Lighting & Photorealistic Rendering" },
      { time: "5:00 PM", activity: "Commercial Product Animation & Game Engine Integration" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "seminar-scientific-research-publication-2022",
    title: "Seminar on Scientific Research and Publication",
    category: "Research Symposium",
    date: "23 SEP",
    year: "2022",
    time: "3:30 PM - 5:30 PM",
    venue: "ME Seminar Room, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Guidance on literature reviews, scientific paper framing, methodology formulation, navigating peer-reviewed international journals, and publication ethics for mechanical engineering scholars.",
    speakers: ["Professors, Department of Mechanical Engineering, KUET"],
    schedule: [
      { time: "3:30 PM", activity: "Research Topic Selection & Literature Survey" },
      { time: "4:15 PM", activity: "Scientific Manuscript Drafting & Journal Review Process" },
      { time: "5:00 PM", activity: "Q&A and Interactive Mentorship" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "sofe-2021-virtual",
    title: "Virtual Speak Out for Engineering (SOfE) 2021 - KUET Institutional Heat",
    category: "Global Flagship Competition",
    date: "26 NOV",
    year: "2021",
    time: "6:30 PM - 9:30 PM",
    venue: "Virtual Session (Online / Zoom)",
    organizers: "IMechE KUET Student Chapter",
    description: "Virtual institutional heats of Speak Out for Engineering 2021. KUET mechanical engineering competitors presented technical projects online before a panel of IMechE judges and faculty members.",
    speakers: ["IMechE Bangladesh Panel Judges", "KUET ME Faculty Mentors"],
    schedule: [
      { time: "6:30 PM", activity: "Virtual Welcome Address & Scoring Rules" },
      { time: "7:00 PM", activity: "Online Oral Presentations & Jury Defense" },
      { time: "9:00 PM", activity: "Result Announcement & Closing Ceremony" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "seminar-higher-study-career-roadmap-usa",
    title: "Seminar on Higher Study & Career Roadmap in USA",
    category: "Professional Development",
    date: "26 JUN",
    year: "2021",
    time: "7:00 PM - 9:00 PM",
    venue: "Student Welfare Centre (SWC), KUET / Virtual",
    organizers: "IMechE KUET Student Chapter",
    description: "Invaluable roadmap session featuring KUET ME alumni pursuing graduate studies and industry careers in the USA, discussing GRE/TOEFL preparation, professor outreach, and scholarship strategies.",
    speakers: ["KUET ME Alumni (US Graduate Scholars & Industry Engineers)"],
    schedule: [
      { time: "7:00 PM", activity: "US Graduate Admissions Roadmap & Timeline" },
      { time: "7:45 PM", activity: "Research Assistantships, Fellowships & Visa Processes" },
      { time: "8:30 PM", activity: "Interactive Open Q&A Session" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "sofe-2020-virtual",
    title: "Virtual Speak Out for Engineering (SOfE) 2020 - Khulna Regional Heat",
    category: "Global Flagship Competition",
    date: "24 OCT",
    year: "2020",
    time: "5:00 PM - 8:30 PM",
    venue: "Virtual Regional Heat (Online)",
    organizers: "IMechE KUET Student Chapter",
    description: "Khulna regional round of SOfE 2020 hosted virtually. Participants from across the region competed with technical oral dissertations, judged on oral delivery, visual slides, and defense.",
    speakers: ["IMechE Regional Panel Judges", "Senior Faculty Members, KUET"],
    schedule: [
      { time: "5:00 PM", activity: "Opening Remarks & Competition Overview" },
      { time: "5:30 PM", activity: "Regional Competitor Presentations" },
      { time: "8:00 PM", activity: "Scores Compilation & Winner Declaration" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "sofe-2019-regional",
    title: "Speak Out for Engineering (SOfE) 2019 - Regional Heat",
    category: "Global Flagship Competition",
    date: "22 JUN",
    year: "2019",
    time: "10:00 AM - 4:00 PM",
    venue: "Student Welfare Centre (SWC), KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Regional heat of the prestigious Speak Out for Engineering competition gathering premier mechanical engineering speakers from the South-Western region of Bangladesh.",
    speakers: ["IMechE Bangladesh Panel Judges", "Distinguished KUET Faculty Jury"],
    schedule: [
      { time: "10:00 AM", activity: "Inaugural Ceremony & National Anthem" },
      { time: "10:45 AM", activity: "Competitive Presentation Heats" },
      { time: "01:00 PM", activity: "Lunch & Networking Session" },
      { time: "03:15 PM", activity: "Awards Ceremony & Regional Representative Selection" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "sofe-2018-regional",
    title: "Speak Out for Engineering (SOfE) 2018 - Khulna Regional Heat",
    category: "Global Flagship Competition",
    date: "16 JUL",
    year: "2018",
    time: "10:00 AM - 3:30 PM",
    venue: "Student Welfare Centre (SWC), KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Historic 2018 regional heat of SOfE hosted at KUET. Participants presented innovative mechanical designs and engineering solutions, evaluated on international IMechE criteria.",
    speakers: ["IMechE Bangladesh Branch Leaders", "KUET Mechanical Engineering Faculty"],
    schedule: [
      { time: "10:00 AM", activity: "Inauguration by Head of ME Dept" },
      { time: "10:30 AM", activity: "Participant Presentations & Q&A Defense" },
      { time: "02:45 PM", activity: "Prize Distribution & Regional Trophy Handover" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "sofe-2017-regional",
    title: "Speak Out for Engineering (SOfE) 2017 - Regional Heat",
    category: "Global Flagship Competition",
    date: "19 MAY",
    year: "2017",
    time: "9:30 AM - 3:00 PM",
    venue: "ME Seminar Room, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Pioneering regional presentation heat evaluating young engineers' capacity to deliver coherent verbal descriptions of technical mechanical engineering concepts to a non-specialist audience.",
    speakers: ["IMechE South Asia Representatives", "KUET Faculty Advisory Board"],
    schedule: [
      { time: "09:30 AM", activity: "Opening Address & Presentation Guidelines" },
      { time: "10:00 AM", activity: "Presentation Sessions (Heats)" },
      { time: "02:00 PM", activity: "Jury Deliberation & Awarding" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "introducing-imeche-2017",
    title: "Introducing IMechE: Chapter Orientation & Membership Drive",
    category: "Chapter Flagship",
    date: "11 APR",
    year: "2017",
    time: "3:30 PM - 5:30 PM",
    venue: "Mechanical Engineering Complex, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Inaugural chapter orientation introducing KUET undergraduates to the Institution of Mechanical Engineers (IMechE, UK), student affiliate benefits, global network access, and CEng pathways.",
    speakers: ["Founding Executive Committee, IMechE KUET", "Faculty Advisors, ME Dept"],
    schedule: [
      { time: "3:30 PM", activity: "History and Heritage of IMechE Worldwide" },
      { time: "4:15 PM", activity: "Student Benefits & International Accreditation Pathways" },
      { time: "5:00 PM", activity: "Membership Registration Drive" }
    ],
    registrationStatus: "COMPLETED"
  },
  {
    id: "seminar-research-publication-europe-2016",
    title: "Seminar on Research & Publication and Study in Europe",
    category: "Research Symposium",
    date: "31 DEC",
    year: "2016",
    time: "3:00 PM - 5:00 PM",
    venue: "Department of Mechanical Engineering, KUET",
    organizers: "IMechE KUET Student Chapter",
    description: "Foundational academic seminar exploring higher studies across European universities, Erasmus Mundus scholarships, research proposal structuring, and journal publishing.",
    speakers: ["Distinguished European Scholars & KUET ME Alumni"],
    schedule: [
      { time: "3:00 PM", activity: "Opportunities for Higher Studies in Europe" },
      { time: "3:45 PM", activity: "Scientific Publishing for Undergraduates" },
      { time: "4:30 PM", activity: "Q&A and Networking" }
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

export interface AlumniOfficer {
  name: string;
  dept?: string;
  role?: string;
}

export interface AlumniWing {
  title: string;
  members: AlumniOfficer[];
}

export interface AlumniCommitteeData {
  id: string;
  session: string;
  title: string;
  batchBadge: string;
  executiveBoard: {
    role: string;
    name: string;
    dept?: string;
  }[];
  wings: AlumniWing[];
}

export const alumniCommittees: AlumniCommitteeData[] = [
  {
    id: "committee-2025-26",
    session: "2025–26",
    title: "Committee 2025–26",
    batchBadge: "2K20 Batch",
    executiveBoard: [
      { role: "Chairperson", name: "Nasif Bin Nazrul", dept: "ChE’20" },
      { role: "Vice-Chair", name: "Jubaer Hossain Sazin", dept: "ME’20" },
      { role: "General Secretary", name: "Md. Redwanur Rahman", dept: "ME’20" },
      { role: "Treasurer", name: "Razu Ahmed Joy", dept: "IEM’20" }
    ],
    wings: [
      {
        title: "Event Team",
        members: [
          { name: "Kamrul Hossain Rafi", dept: "ME’20" },
          { name: "Samin Khan Hridoy", dept: "ChE’20" },
          { name: "Marzan Ferdous Srot", dept: "ME’20" },
          { name: "Saiful Islam Shuvo", dept: "ME’20" }
        ]
      },
      {
        title: "Chief of External Affairs",
        members: [
          { name: "Kotha Koli", dept: "ME’20" },
          { name: "Md. Sadman Sakib", dept: "IEM’20" }
        ]
      },
      {
        title: "Chief of Internal Affairs",
        members: [
          { name: "Abday Mohaimin", dept: "IEM’20" },
          { name: "Rubaba Tasnim", dept: "MTE’20" }
        ]
      },
      {
        title: "Public Relations",
        members: [
          { name: "Kazi Mansif Haque Mahin", dept: "ME’20" },
          { name: "Tahmid Al Mustakim", dept: "ME’20" },
          { name: "Swagoto Roy", dept: "ChE’20" }
        ]
      },
      {
        title: "Media & Content Officers",
        members: [
          { name: "Md. Faiaz Zaman Dehan", dept: "IEM’20" },
          { name: "Mahia Mahjabin", dept: "MTE’20" },
          { name: "Tasnin Hasan Anto", dept: "ME’20" }
        ]
      },
      {
        title: "Policy Analysts",
        members: [
          { name: "Raiya Azad", dept: "ME’20" },
          { name: "Protichi Chakraborti", dept: "ME’20" }
        ]
      },
      {
        title: "Human Resources",
        members: [
          { name: "Mostofa Aadeeb Chowdhury", dept: "ME’20" },
          { name: "Shadesh Roy", dept: "ME’20" }
        ]
      }
    ]
  },
  {
    id: "committee-2024-25",
    session: "2024–25",
    title: "Committee 2024–25",
    batchBadge: "2K19 Batch",
    executiveBoard: [
      { role: "Chairperson", name: "Tanvir Ahmed Fahim", dept: "ME’19" },
      { role: "Vice-Chair", name: "Saif Bin Osmani", dept: "IEM’19" },
      { role: "General Secretary", name: "Srijib Mukherjee", dept: "ME’19" },
      { role: "Treasurer", name: "Sopnil Ahmed", dept: "ME’19" },
      { role: "Treasurer", name: "Imrul Haque Hiron", dept: "ME’19" }
    ],
    wings: [
      {
        title: "Event Managers",
        members: [
          { name: "Ishrak Ibn Zahid", dept: "ME’19" },
          { name: "Rokonuzzaman Ramim", dept: "ME’19" }
        ]
      },
      {
        title: "Media & Content Officer",
        members: [
          { name: "Mubtasin Mondol Niloy", dept: "ME’19" }
        ]
      },
      {
        title: "Public Relation Officers",
        members: [
          { name: "Zarin Rahman Tapti", dept: "ME’19" },
          { name: "Ashfaqur Rahman", dept: "IEM’19" }
        ]
      },
      {
        title: "Policy Analyst",
        members: [
          { name: "Adnan Roshid Shawon", dept: "ME’19" }
        ]
      },
      {
        title: "Human Resource Officers",
        members: [
          { name: "Sadman Sadik", dept: "LE’19" },
          { name: "Mohammad Rafat Islam", dept: "ME’19" }
        ]
      },
      {
        title: "Internal Affairs",
        members: [
          { name: "Shamim Ahmed Himel", dept: "ME’19" }
        ]
      }
    ]
  },
  {
    id: "committee-2k18",
    session: "Committee 2K18",
    title: "Committee 2K18",
    batchBadge: "2K18 Batch",
    executiveBoard: [
      { role: "Chairperson", name: "Md. Sabbir Hossain", dept: "ME’18" },
      { role: "Vice-Chair", name: "Sakina Islam", dept: "LE’18" },
      { role: "General Secretary", name: "Didarul Hasan Saharaj", dept: "ME’18" },
      { role: "Treasurer", name: "Md. Mahfuz Kabir", dept: "ME’18" }
    ],
    wings: [
      {
        title: "Policy & Strategy",
        members: [
          { role: "Policy Analyst", name: "Abdullah Saihan Taki", dept: "MTE’18" }
        ]
      },
      {
        title: "External Affairs",
        members: [
          { role: "Chief of External Affairs", name: "Md. Shahriar Shajib", dept: "ME’18" }
        ]
      },
      {
        title: "Public Relation Officers",
        members: [
          { name: "Arithra Debnath Prithu", dept: "ME’18" },
          { name: "Tazry Khan Shailo", dept: "ESE’18" }
        ]
      },
      {
        title: "Media and Content Officers",
        members: [
          { name: "Mashaba Nadia", dept: "MTE’18" },
          { name: "Anurupa Barua", dept: "MTE’18" },
          { name: "Aasef Bin Hasnain", dept: "ME’18" }
        ]
      },
      {
        title: "Event Managers",
        members: [
          { name: "Golam Rabbi", dept: "ME’18" },
          { name: "Sayed Abdullah Mumit", dept: "ME’18" }
        ]
      },
      {
        title: "Human Resource Officers",
        members: [
          { name: "Anisha Anjum Meem", dept: "MTE’18" },
          { name: "Nowshin Nawal", dept: "LE’18" }
        ]
      },
      {
        title: "Internal Affairs",
        members: [
          { name: "Amit Kumar Gosh", dept: "ME’18" },
          { name: "Maftahul Mahmud", dept: "ME’18" },
          { name: "Amlan Biswas", dept: "ME’18" }
        ]
      }
    ]
  },
  {
    id: "committee-2k17",
    session: "Committee 2K17",
    title: "Committee 2K17",
    batchBadge: "2K17 Batch",
    executiveBoard: [
      { role: "Chairperson", name: "S.M. Toha Al Kadir", dept: "ME’17" },
      { role: "Vice-Chair", name: "Yeasin Arafat Leon", dept: "ME’17" },
      { role: "General Secretary", name: "Zubair Islam", dept: "ME’17" },
      { role: "Treasurer", name: "Nazmul Sakib Fahim", dept: "LE’17" },
      { role: "Assistant General Secretary", name: "Md Rahatuzzaman", dept: "KUET" }
    ],
    wings: [
      {
        title: "Administration & Program Strategy",
        members: [
          { role: "Chief of Administration", name: "Ashfaq Jamil", dept: "IEM’17" },
          { role: "Policy Analyst", name: "Samira Tasnim", dept: "KUET" },
          { role: "Director of Engineering Programs", name: "Apurba Roy", dept: "ME’17" },
          { role: "Spokesperson", name: "Tasmia Nourin", dept: "LE’17" }
        ]
      },
      {
        title: "Public Relations & Media",
        members: [
          { role: "Head of Public Relation", name: "Hridoy Paul", dept: "LE’17" },
          { role: "Chief of Media Content", name: "Toufik Ahmed", dept: "KUET" }
        ]
      },
      {
        title: "Projects & Event Logistics",
        members: [
          { role: "Project Manager", name: "Al Mamun Arabi", dept: "ME’17" },
          { role: "Event Coordinator", name: "Farhin Tasnim", dept: "LE’17" },
          { role: "Admin (SOFE)", name: "Md Muntasir Rashid", dept: "ME’17" },
          { role: "Senior Logistic Officer", name: "Shadikul Islam", dept: "IEM’17" }
        ]
      },
      {
        title: "Technology & Internal Operations",
        members: [
          { role: "Chief of Technology", name: "Md Sunney-Ul-Alam", dept: "ME’17" },
          { role: "Head of Internal Affairs", name: "Masuka Mahnur", dept: "ME’17" }
        ]
      }
    ]
  },
  {
    id: "committee-2019-20",
    session: "2019–20",
    title: "Committee 2019–20",
    batchBadge: "2K16 & 2K17 Batches",
    executiveBoard: [
      { role: "Chairperson", name: "Rhysharul Islam", dept: "ME’16" },
      { role: "Vice-Chair", name: "SK Sabbir Hossain", dept: "ME’16" },
      { role: "General Secretary", name: "Souvik Biswas", dept: "LE’16" },
      { role: "Treasurer", name: "Shadman Jamiun", dept: "ME’16" },
      { role: "Assistant General Secretary", name: "S.M. Toha Al Kadir", dept: "ME’17" },
      { role: "Assistant Treasurer", name: "Zubair Islam", dept: "ME’17" }
    ],
    wings: [
      {
        title: "Policy & Strategy",
        members: [
          { role: "Policy Analyst", name: "Muntasir Mamun Jeio", dept: "ME’16" }
        ]
      },
      {
        title: "Public Relation & Media Officers",
        members: [
          { name: "Farhana Islam Muma", dept: "ME’16" },
          { name: "Raydah Nudrat Turna", dept: "ME’16" }
        ]
      },
      {
        title: "Event Managers",
        members: [
          { name: "Fahim Faisal", dept: "ME’16" },
          { name: "Saif Bin Suaib Labib", dept: "ME’16" },
          { name: "Sarjil Arafat Chowdhury", dept: "ME’16" },
          { name: "Monwar Oishik", dept: "LE’16" }
        ]
      },
      {
        title: "Assistant Event Managers",
        members: [
          { name: "Yeasin Arafat Leon", dept: "ME’17" },
          { name: "Al Mamun Arabi", dept: "ME’17" },
          { name: "Md Shadikul Islam Bipul", dept: "IEM’17" },
          { name: "Ashfaq Jamil", dept: "IEM’17" },
          { name: "Hridoy Paul", dept: "LE’17" },
          { name: "Nazmul Sakib Fahim", dept: "LE’17" }
        ]
      },
      {
        title: "Assistant Public Relation & Media Officers",
        members: [
          { name: "Md Samney-ul-Islam", dept: "ME’17" },
          { name: "Md Muntasir Rashid", dept: "ME’17" },
          { name: "Apurba Roy", dept: "ME’17" },
          { name: "Masuka Mahnur Oishiy", dept: "ME’17" },
          { name: "Tasmia Nouri Pollen", dept: "LE’17" },
          { name: "Farhin Tasnim Maisha", dept: "LE’17" }
        ]
      }
    ]
  }
];

export const boardsArchive = [
  { year: "2025/2026", theme: "Pioneering Mechanical Ingenuity at KUET", image: "/boards/board-25-26.png" },
  { year: "2024/2025", theme: "Innovate, Build, Lead", image: "/boards/board-24-25.png" },
  { year: "2022/2023", theme: "Bridging Theory and Industry (2K18)", image: "/boards/board-22-23.png" },
  { year: "2021/2022", theme: "Resilience Through Engineering (2K17)", image: "/boards/board-21-22.png" },
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
