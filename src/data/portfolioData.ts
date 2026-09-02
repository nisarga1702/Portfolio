import { Project, SkillCategory, Achievement, EducationItem, InternshipItem } from '../types/portfolio';

export const personalInfo = {
  name: "Nisarga H",
  title: "B.E. Computer Science & Design Undergraduate",
  tagline: "Specializing in AI/ML, Full-Stack Web Development, IoT & Cybersecurity",
  location: "Mysuru, Karnataka, India",
  phone: "+91-9380489963",
  email: "hnisarga24@gmail.com",
  linkedin: "https://linkedin.com/in/nisarga-h-7a92bb292",
  github: "https://github.com/nisarga-h",
  summary: "Computer Science and Design undergraduate (CGPA: 8.7/10) specializing in AI/ML, Full-Stack Web Development, IoT, and Cybersecurity. Winner of NOSTRADAMUS-2K26 (1st Place out of 50+ teams) and National Top 20 Finalist at GCEM HACKS 4.0, with a peer-reviewed publication in IRJMETS (DOI indexed). Experienced in architecting scalable AI applications using Python, Next.js, Vertex AI, and PostgreSQL (pgvector), delivering high-performance solutions with up to 98% prediction accuracy and real-time processing capabilities.",
  stats: [
    { label: "CGPA", value: "8.7 / 10", description: "ATME College of Engineering" },
    { label: "Hackathon Awards", value: "3 Major Wins", description: "Including 1st Winner (50+ teams)" },
    { label: "Research Paper", value: "1 Publication", description: "IRJMETS (DOI Indexed)" },
    { label: "Technical Projects", value: "7+ Built", description: "AI/ML, Web, IoT & Extension" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 95, tags: ["AI/ML", "Backend", "OpenCV"] },
      { name: "JavaScript / TypeScript", level: 90, tags: ["Next.js", "React", "Node"] },
      { name: "C / C++", level: 85, tags: ["Data Structures", "Embedded"] },
      { name: "Java", level: 80, tags: ["OOP", "Core Java"] },
      { name: "HTML5 / CSS3", level: 95, tags: ["Frontend", "Tailwind"] },
      { name: "SQL", level: 88, tags: ["PostgreSQL", "Supabase", "MySQL"] }
    ]
  },
  {
    title: "AI / ML & Computer Vision",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning & Deep Learning", level: 92 },
      { name: "Google Vertex AI & Gemini APIs", level: 90 },
      { name: "OpenCV & Image Processing", level: 88 },
      { name: "SciPy & Signal Processing", level: 85 },
      { name: "Vector Embeddings & pgvector", level: 90 },
      { name: "NLP & R-Peak Detection", level: 82 }
    ]
  },
  {
    title: "Web & Cloud Development",
    iconName: "Globe",
    skills: [
      { name: "Next.js & React", level: 92 },
      { name: "Django & REST APIs", level: 88 },
      { name: "Supabase & PostgreSQL", level: 90 },
      { name: "Netlify & Web Deployment", level: 88 },
      { name: "Full-Stack Web Architecture", level: 90 }
    ]
  },
  {
    title: "IoT, Security & Hardware",
    iconName: "Cpu",
    skills: [
      { name: "ESP32 & Microcontrollers", level: 85 },
      { name: "RFID / NFC & GPS Modules", level: 88 },
      { name: "Chrome Extension APIs", level: 90 },
      { name: "Domain Filtering & Phishing Protection", level: 85 },
      { name: "Real-Time Web Security", level: 85 }
    ]
  },
  {
    title: "Tools & Platforms",
    iconName: "Wrench",
    skills: [
      { name: "GitHub / Git", level: 92 },
      { name: "VS Code & Jupyter Notebook", level: 95 },
      { name: "Figma (UI/UX)", level: 80 },
      { name: "Unity Hub", level: 75 },
      { name: "MySQL Workbench", level: 85 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "tracedna",
    title: "TraceDNA – AI Piracy Detection System",
    subtitle: "Google Solution Challenge 2026",
    category: "AI/ML",
    description: "AI-powered, platform-agnostic video piracy detection engine using semantic video embeddings, achieving 96% transformation detection accuracy vs. traditional hashing.",
    details: [
      "Engineered an AI-powered, platform-agnostic video piracy detection engine using semantic video embeddings, achieving 96% transformation detection accuracy vs. traditional hashing.",
      "Integrated Google Vertex AI and Gemini APIs to evaluate multimodal frames, identifying content transformations (cropping, mirroring, compression, filters) in under 1.5 seconds.",
      "Architected a high-throughput pipeline utilizing PostgreSQL (pgvector) for vector similarity search, indexing 10,000+ video fingerprints and reducing manual review time by 75%.",
      "Developed a responsive Next.js dashboard for real-time piracy alerts and automated DMCA evidence generation, cutting enforcement lead time from days to under 5 minutes."
    ],
    keySkills: ["Python", "Django", "Google Vertex AI", "Gemini AI", "PostgreSQL (pgvector)", "Next.js", "TypeScript", "Vector Search"],
    award: "Google Solution Challenge 2026",
    featured: true
  },
  {
    id: "aura-health",
    title: "Aura Health AI – Health Risk Prediction System",
    subtitle: "NOSTRADAMUS-2K26 — 1st Place Winner",
    category: "AI/ML",
    description: "AI-powered diagnostic web application for early health risk prediction, achieving 94.2% classification accuracy across multi-disease datasets.",
    details: [
      "Built an AI-powered diagnostic web app for early health risk prediction, achieving 94.2% model classification accuracy across multi-disease risk datasets.",
      "Applied machine learning classification pipelines using SciPy and Python to evaluate 20+ clinical symptoms and return personalized health recommendations in under 300ms.",
      "Designed a responsive frontend interface with a real-time prediction engine, validated across 100+ simulated patient test cases.",
      "Deployed full web application on Netlify cloud infrastructure, maintaining 99.9% uptime and ultra-low latency during live hackathon evaluation."
    ],
    keySkills: ["Python", "Machine Learning", "SciPy", "AI Integration", "HTML/CSS/JS", "Netlify Deployment"],
    award: "1st Place Winner out of 50+ Teams",
    featured: true
  },
  {
    id: "gcem-hackathon",
    title: "AI-Driven Smart Prototype",
    subtitle: "GCEM HACKS 4.0 — National Top 20 Finalist",
    category: "AI/ML",
    description: "Nationally recognized AI prototype developed in a 24-hour hackathon environment competing for ₹50,000 prize pool with IEEE Young Professionals.",
    details: [
      "Spearheaded an AI-driven prototype as part of a Top 20 nationally selected team out of 200+ applicants, competing for a ₹50,000 prize pool with IEEE Young Professionals – Bangalore Section.",
      "Architected and deployed real-time machine learning pipelines and predictive models within a high-intensity 24-hour hackathon environment."
    ],
    keySkills: ["Python", "Machine Learning", "AI Prototype", "IEEE Young Professionals", "Rapid Prototyping"],
    award: "National Top 20 Finalist (out of 200+ teams)",
    featured: true
  },
  {
    id: "ecg-digitization",
    title: "ECG Digitization & Myocardial Infarction Detection",
    subtitle: "GSSS – E-MINDS Hackathon 2.0 (National Level)",
    category: "Signal Processing",
    description: "Physics-based ECG waveform digitization system in OpenCV, converting paper ECG scans into digital signals with under 2% signal distortion rate.",
    details: [
      "Developed a physics-based ECG waveform digitization system in OpenCV, converting paper ECG scans into digital signals with under 2% signal distortion rate.",
      "Implemented signal processing algorithms to compute HRV metrics (SDNN, RMSSD, pNN50) and detect R-peaks across 12-lead ECG signals with 97% precision.",
      "Formulated an explainable AI diagnostic logic for 12-lead MI detection with age-adaptive risk interpretation, accelerating diagnostic turnaround by 60%."
    ],
    keySkills: ["Python", "OpenCV", "Image Processing", "Signal Processing", "Machine Learning", "HRV Analysis"],
    award: "National Level Hackathon Finalist",
    featured: false
  },
  {
    id: "smart-bus",
    title: "Smart IoT-Based Bus System",
    subtitle: "MRIT – Mriothon Hackathon",
    category: "IoT & Security",
    description: "Automated public transport fare deduction & accident emergency detection system using ESP32, RFID/NFC, and GPS tracking.",
    details: [
      "Automated fare deduction for a smart public transport system using ESP32 and RFID/NFC integration, processing transactions in under 500ms and eliminating ticket fraud.",
      "Integrated GPS tracking and accelerometer-based accident detection mechanisms, broadcasting emergency alerts with exact location coordinates within 2 seconds.",
      "Formulated an AI-driven crowd tracking model for dynamic route optimization, reducing average passenger wait times by 25%."
    ],
    keySkills: ["ESP32", "RFID/NFC", "GPS Modules", "IoT", "JavaScript", "Domain Filtering"],
    award: "Mriothon Hackathon Highlight",
    featured: false
  },
  {
    id: "browser-blocker",
    title: "Malicious Website Blocker Chrome Extension",
    subtitle: "MRIT Security Project",
    category: "IoT & Security",
    description: "Real-time tab monitoring Chrome Extension using WebRequest APIs for domain filtering & instant phishing domain blocking.",
    details: [
      "Programmed real-time tab monitoring using Chrome WebRequest APIs for domain filtering, analyzing 100+ requests/sec with minimal overhead (less than 15MB RAM consumption).",
      "Implemented pattern-matching security rules and instant alert popups, blocking phishing and malicious domains within 50ms of page request."
    ],
    keySkills: ["JavaScript", "Chrome Extension APIs", "Cybersecurity", "Domain Filtering", "Web Security"],
    featured: false
  },
  {
    id: "event-manager",
    title: "Event Management & Planning Tool",
    subtitle: "Full-Stack Supabase Mini Project",
    category: "Full-Stack",
    description: "Full-stack web platform for event scheduling and task management, integrating Supabase for backend database handling & real-time updates.",
    details: [
      "Created a full-stack web platform for event scheduling and task management, integrating Supabase for backend database handling and user authentication.",
      "Designed relational schemas in Supabase supporting 500+ concurrent event attendees with automated email notifications and real-time scheduling updates."
    ],
    keySkills: ["HTML", "CSS", "JavaScript", "Full Stack Development", "Supabase", "PostgreSQL"],
    featured: false
  }
];

export const achievements: Achievement[] = [
  {
    id: "nostradamus",
    title: "NOSTRADAMUS-2K26 National Hackathon",
    competition: "NOSTRADAMUS 2026",
    result: "1st Place Winner",
    date: "2026",
    description: "Awarded 1st Place Winner out of 50+ competing teams for engineering the Aura Health AI risk prediction platform.",
    badgeColor: "from-amber-500 to-yellow-400"
  },
  {
    id: "gcem",
    title: "GCEM HACKS 4.0 National Level Hackathon",
    competition: "IEEE Young Professionals – Bangalore Section",
    result: "National Top 20 Finalist",
    date: "May 2026",
    description: "Top 20 Finalist out of 200+ national applicant teams; competed for ₹50,000 prize pool.",
    prizePool: "₹50,000 Pool",
    badgeColor: "from-indigo-500 to-cyan-400"
  },
  {
    id: "futurescape",
    title: "FutureScape 2030 – Smart City Challenge",
    competition: "FutureScape National Challenge",
    result: "2nd Place Winner",
    date: "Apr 2026",
    description: "2nd Place Winner for presenting sustainable smart mobility and energy grid concepts in a team of 4.",
    badgeColor: "from-emerald-500 to-teal-400"
  }
];

export const researchPublication = {
  title: "A Centralized Web-Based Event Management System for Multi-Category Entertainment and Cultural Events",
  journal: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
  volume: "Vol. 07, Issue 12",
  date: "Dec 2025",
  doi: "10.56726/IRJMETS86713",
  doiLink: "https://doi.org/10.56726/IRJMETS86713",
  impact: "Proposed a scalable platform architecture improving resource allocation efficiency by 40%."
};

export const certifications = [
  {
    title: "NPTEL – Cloud Computing (SWAYAM)",
    issuer: "IIT Kharagpur",
    score: "67% (ELITE Certificate - Top Grade Distinction)",
    period: "Jul – Oct 2024",
    type: "Certification"
  },
  {
    title: "Honours Degree Specialization",
    issuer: "ATME College of Engineering",
    score: "Advanced Computer Networks, Blockchain Technology & Natural Language Processing (NLP)",
    period: "2023 – 2027",
    type: "Degree Specialization"
  }
];

export const education: EducationItem[] = [
  {
    institution: "ATME College of Engineering, Mysore",
    degree: "B.E. in Computer Science & Design",
    score: "CGPA: 8.7 / 10",
    period: "2023 – 2027",
    location: "Mysuru, Karnataka"
  },
  {
    institution: "Pandit's The Orchid PU College, Mysore",
    degree: "Pre-University Education (PCMB)",
    score: "Score: 85.8%",
    period: "2021 – 2023",
    location: "Mysuru, Karnataka"
  },
  {
    institution: "Police Public School, Mysore",
    degree: "CBSE Class X",
    score: "Score: 86.8%",
    period: "2021",
    location: "Mysuru, Karnataka"
  }
];

export const internship: InternshipItem = {
  role: "Artificial Intelligence Intern",
  company: "Academor EdTech",
  period: "May 2024 – Jun 2024",
  highlights: [
    "Completed an intensive 2-month internship in the AI domain, engineering ML models for real-world datasets and boosting model accuracy metrics by 15%.",
    "Earned a Certificate of Outstanding Performance and a formal Letter of Recommendation for completing 100% of project milestones ahead of schedule."
  ]
};

export const nssImpact = [
  {
    title: "NSS Educational Initiative",
    impact: "+20% Academic Results",
    description: "Assisted local schools in improving academic results by 20% and increasing enrolment in technical/vocational higher education."
  },
  {
    title: "NSS Community Outreach",
    impact: "Rural Health & Literacy",
    description: "Conducted a Rural Outreach Program spreading public health and digital literacy awareness across rural communities."
  },
  {
    title: "NSS Sustainable Agriculture",
    impact: "100+ Local Farmers Guided",
    description: "Participated in NSS Activity on Organic Farming & Agriculture Marketing, guiding 100+ local farmers on digital connectivity."
  }
];
