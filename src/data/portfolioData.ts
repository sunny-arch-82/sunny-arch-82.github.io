// ============================================
// PORTFOLIO DATA - EDIT THIS FILE TO CUSTOMIZE
// ============================================

export const portfolioData = {
  // PERSONAL INFO
  personal: {
    name: "Shashidhar Reddy Kanaparthi",
    nameLine1: "Shashidhar Reddy",
    nameLine2: "Kanaparthi",
    firstName: "sK",
    headline: "Data Scientist | AI/ML Engineer",
    tagline: "Building intelligent systems that transform data into impact",
    pitch: "I build reliable AI/ML systems from data to deployment.",
    location: "Boulder, CO - 80301",
    phone: "(720) 742-1391",
    email: "synnychinu@gmail.com",
    github: "https://github.com/sunny-arch-82",
    linkedin: "https://www.linkedin.com/in/shashidhar-reddy-kanaparthi-0081a4290/",
    resumeUrl: "/resume.pdf", // Replace with actual resume URL
    profilePhoto: "/profile.png", // Save your photo as public/profile.png
    contactBio: "I am always open to collaborations, discussions, and new opportunities in data science, AI, and cloud technologies. Whether you have a project idea, a research inquiry, or just want to connect, feel free to reach out!"
  },

  // EDUCATION
  education: [
    {
      logo: "/uni1.png",
      degree: "Master of Science in Computer Science",
      university: "University of Colorado Boulder",
      location: "Boulder, CO",
      startDate: "Aug 2025",
      endDate: "April 2027",
      gpa: "3.77",
      courses: ["Machine Learning", "Natural Language Processing", "Neural Networks", "Datacenter Scaler Computing"]
    },
    {
      logo: "/uni2.png",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      university: "SRM University",
      location: "Chennai, India",
      startDate: "Sep 2021",
      endDate: "May 2025",
      gpa: "3.82",
      courses: ["Artificial Intelligence", "Data Structures", "Computer Networks", "Operating Systems"]
    }
  ],

  // ABOUT SECTION - Bio only (removed highlight cards)
  aboutBio: {
    paragraphs: [
      "I am a Master's student in Computer Science at the University of Colorado Boulder, focused on building reliable AI and ML systems that work in real-world settings. I got into AI by asking a simple question: can AI really replace humans? That curiosity pulled me from traditional computer science into building systems that have to work with messy, real-world data.",
      
      "I enjoy turning ambiguity into structure by making data usable, designing end-to-end machine learning pipelines, and building models that real users can actually trust. I am especially drawn to user-facing ML and bridging the gap between research ideas and production-ready systems.",

      "Lately, I have been working on agentic and autonomous AI systems, with a strong focus on fairness and accessibility. My focus is on building systems that reason clearly and remain understandable as autonomy increases.",
      
      "I am an engineer who believes AI should be understandable, debatable, and used ethically, not treated as a black box."
    ]
  },

    // SKILLS BY CATEGORY
  skills: {
    "Programming": ["Python","SQL"],
    "Libraries & Frameworks": ["PyTorch", "Pandas", "NumPy", "TensorFlow", "scikit-learn", "Matplotlib", "Terraform", "Plotly", "Hugging Face", "LangChain", "XGBoost", "Keras", "FastAPI", "Streamlit", "Spark"],
    "ML & NLP": ["Prompt Engineering", "LLMs", "Transformers", "Speech-to-Text", "LSTM"],
    "Data/DB": ["PostgreSQL", "BigQuery"],
    "Cloud/DevOps": ["GCP", "Docker", "Kubernetes"],
    "Tools & Technologies": ["Git", "Jupyter]",
  },

  // EXPERIENCE / TIMELINE - Single experience from screenshot
  experience: [
    {
      title: "Data Science Intern",
      company: "Trans Global Geomatics",
      logo: "/exp_profile.png", // Save company logo as public/exp_profile.png
      location: "Hyderabad, India",
      startDate: "Dec 2024",
      endDate: "May 2025",
      description: "Worked on real-time GPS analytics and geospatial dashboards, improving anomaly detection workflows and accelerating decision-making.",
      bullets: [
        "Contributed to real-time GPS analytics pipelines in Python, applying Random Forest for anomaly classification and K-Means clustering for unsupervised anomaly detection, improving deployment efficiency by 22%.",
        "Built 4+ interactive dashboards with Plotly and Streamlit, enabling geospatial visualization and boosting decision speed by 15%.",
        "Collaborated with cross-functional teams to integrate real-time analytics and GPS tracking into a mobile application, reducing workflow time for 500+ users."
      ],
      techStack: ["Python", "Random Forest", "K-Means", "Plotly", "Streamlit", "GPS Analytics", "Geospatial"]
    }
  ],

  // PROJECTS
  projects: [
    
    {
      title: "RAAi: Agentic Research Assistant",
      outcome: "Autonomous, multi-stage research with transparent reasoning and source-backed analysis.",
      highlights: [
        "Goal-driven agent pipeline for planning, searching, analysis, and verification",
        "Iterative web research with critical review and gap detection",
        "Designed for deep technical exploration, literature scanning, and exploratory research"
      ],
      techStack: ["LangGraph", "OpenAI", "Streamlit", "ddgs"],
      github: "https://github.com/sunny-arch-82/RAAi",
      featured: false
    },
    
    {
      title: "XploRAG: Explainable RAG",
      outcome: "Explainable RAG with verified sources for fast, transparent technical search.",
      highlights: [
        "Retrieval-augmented generation with a clear citation trail for every claim",
        "Fast semantic search over documents with vector indexing",
        "Designed for trustworthy technical Q&A and quick debugging workflows"
      ],
      techStack: ["RAG", "FAISS", "MPNet", "FLAN-T5"],
      github: "https://github.com/sunny-arch-82/xploRAG",
      featured: true
    },
    {
      title: "WeLearn: AI-Assisted Course Planning",
      outcome: "AI course planner that builds structured learning paths with curated resources.",
      highlights: [
        "Turns goals into week-by-week learning plans with recommended resources",
        "Search + retrieval workflow to ground suggestions in relevant content",
        "Built to scale into a personalized student dashboard experience"
      ],
      techStack: ["LangChain", "Search", "Retrieval", "React"],
      github: "https://github.com/sunny-arch-82/welearn-backend",
      featured: true
    },
    {
      title: "ClimateRiskAI",
      outcome: "Automated climate risk scoring using Earth Engine analytics and BigQuery ML.",
      highlights: [
        "End-to-end pipeline for climate features and risk scoring",
        "Geospatial analytics for region-level climate indicators",
        "BigQuery ML integration for scalable model training and scoring"
      ],
      techStack: ["Python", "GCP", "BigQuery", "GeoML"],
      github: "https://github.com/sunny-arch-82/ClimateRiskAI",
      featured: true
    },
    {
      title: "SynapseOps: Local MVP",
      outcome: "Agentic GenAI MVP with RAG over docs plus telemetry anomaly detection.",
      highlights: [
        "Agent workflow that routes tasks across retrieval, reasoning, and action steps",
        "RAG over internal docs to answer technical questions with context",
        "Telemetry monitoring prototype that flags anomalies and summarizes incidents"
      ],
      techStack: ["Agents", "RAG", "Telemetry", "FastAPI"],
      github: "https://github.com/sunny-arch-82/synapseops",
      featured: false
    },
    {
      title: "JOHN: A Virtual Voice Assistant",
      outcome: "Voice assistant with intent classification and entity extraction for fast actions.",
      highlights: [
        "Intent classification and entity extraction to map speech to actions",
        "Lightweight NLP pipeline for quick command understanding",
        "Designed for extensible skills and new intents over time"
      ],
      techStack: ["NLP", "spaCy", "NLTK", "Speech"],
      github: "https://github.com/sunny-arch-82/johnX",
      featured: false
    },
   ],

  // DOCUMENTS SECTION
  documents: [
    {
      title: "Resume",
      description: "Complete overview of my education, experience, skills, and achievements",
      url: "/resume.pdf",
      icon: "file"
    },
    {
      title: "Cover Letter",
      description: "Personal introduction highlighting my passion and career objectives",
      url: "/cover-letter.pdf",
      icon: "letter"
    },
    {
      title: "Transcript",
      description: "Unofficial academic transcript with course details and grades",
      url: "/transcript.pdf",
      icon: "graduation"
    }
  ],

  // NAVIGATION LINKS
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
};
