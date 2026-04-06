// ─── Color Tokens ────────────────────────────────────────────────────────────
export const C = {
  dark:    "#291C0E",
  brown:   "#6E473B",
  accent:  "#A78D78",
  neutral: "#BEB5A9",
  bg:      "#E1D4C2",
  bgAlt:   "#F5EEE3",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_SECTIONS = ["About", "Skills", "Education", "Experience", "Projects", "Contact"];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const SKILLS = [
  "React", "Node.js","Html", "Tailwind CSS", "PostgreSQL","Git","REST APIs", "MongoDB","Javascript"  ,"Python"  , "C++", "Java" , "ML"
];

// ─── Education ───────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    icon: "🎓",
    deg:  "B.TECH. Computer Science",
    inst: "SRM Institute of Technology",
    yr:   "2025",
    desc: "Ramapuram, Chennai, Tamil Nadu ",
  },
  {
    icon: "🎓",
    deg:  "Inter",
    inst: "Narayana junior college",
    yr:   "2021",
    desc: "Nellore , Andhra Pradesh",
  },
  {
    icon: "🎓",
    deg:  "School",
    inst: "Ratnam High School",
    yr:   "2019",
    desc: "Nellore , Andhra Pradesh",
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role:  "ASSOCIATE ANALYST",
    co:    "Firstsource",
    dur:   "2025 – Present",
    tasks: [
      "Designed and implemented a Proof of Concept (POC) for AML (Anti-Money Laundering) solutions",
      "Built a POC for claim denial prediction using data-driven approaches",
      "Developed a POC for PII (Personally Identifiable Information) redaction to enhance data privacy",
      "Conducted research on on-premise transcription architectures, focusing on data privacy and performance optimization"
    ],
  },
  {
    role:  "INTERNSHIP",
    co:    "ACMEGRADE",
    dur:   "Aug, 2024- Oct, 2024",
    tasks: [
      "Gained a foundational understanding of data preprocessing using libraries like NumPy for numerical operations and Pandas for data manipulation",
      "Utilized Matplotlib for data visualization and extracting insights from datasets",
      "Applied OpenCV for image processing tasks and basic computer vision techniques",
    ],
  }
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id:    1,
    title: "WHATSAPP CHATBOT",
    short: "Built and deployed a WhatsApp chatbot using Flask, Twilio, and OpenAI API to intelligently process and respond to both text and image inputs in real time.",
    desc:  "Developed a WhatsApp chatbot using Twilio Sandbox and Python Flask API. Integrated OpenAI API to process text queries and extract text from images. Deployed the Flask server on an EC2 instance,leveraging Ngrok to expose it publicly for Twilio integration. The chatbot processes both text messages and images, providing intelligent responses.",
    tags:  ["Python" , "Twilio" , "AWS EC2" , "Ngrok"],
    img:   "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
  },
  {
    id:    2,
    title: "CARDIAC STROKE PREDICTION USING ENSEMBLE LEARNING",
    short: "Developed a scalable machine learning pipeline using advanced preprocessing and ensemble techniques (Voting, Bagging, XGBoost) to build and evaluate accurate predictive models.",
    desc:  "built using extensive data preprocessing techniques like recursive feature selection method and building comprehensive predictive models using ensemble learning techniques like voting classifier, bagging, xgboost and checking the accuracy of predicted models. created structured code base for reusability and scalability by modularizing preprocessing, modeling, and evaluation stages.",
    tags:  ["data exploration", "Data Processing"],
    img:   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id:    3,
    title: "GOOGLE DOCS CLONE",
    short: "Built a real-time collaborative Google Docs clone using React, Socket.io, MongoDB, and Quill.js, enabling seamless multi-user editing with efficient data synchronization and storage.",
    desc:  "Developed a revolutionary GoogleDocs clone from scratch using ReactJS, Socket.io, MongoDB, and QuillJS, show casing expertise in modern web development technologies. Implemented collaborative features inspired by GoogleDocs, allowing multiple users to edit documents in real-time, demonstrating proficiency in socket - based communication and synchronization. Designed an intuitive user interface and integrated QuillJS for rich text editing capabilities, delivering a seamless and user-friendly document editing experience while leveraging MongoDB for efficient data storage and retrieval.",
    tags:  ["Quill JS", "React JS", "Socket.io", "MongoDB"],
    img:   "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
  },
 
];

// ─── Contact Links ────────────────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { icon: "in", name: "LinkedIn", val: "linkedin.com/in/MukundaPriya",  href: "https://in.linkedin.com/in/mukundapriyarajasri" },
  { icon: "◈",  name: "GitHub",   val: "github.com/MukundaPriya",       href: "https://github.com/amprajasri"   },
  { icon: "✉",  name: "Email",    val: "mprajasriallada@gmail.com",         href: "mailto:mprajasriallada@gmail.com" },
];

// ─── About ───────────────────────────────────────────────────────────────────
export const ABOUT = {
  name:      "Allada Mukunda Priya Rajasri ",
  title:     "Software Developer",
  subtitle:  "Hello, I'm",
  bio:       "Software Engineer with hands-on experience in MERN stack development and Machine Learning. Skilled in building scalable web applications and implementing data-driven solutions. Seeking a Software Developer role to apply technical skills and contribute to impactful projects.",
  avatar:    "/profile.jpg",
  available: true,
};
 