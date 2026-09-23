// Central place for portfolio content. Edit this file to update the site's copy.

export const profile = {
  name: "Axel Sanjiro Yang",
  shortName: "Axel",
  role: "Computer Science Student — Intelligent Systems",
  university: "BINUS University",
  email: "axelsanjiro@gmail.com",
  github: "https://github.com/axelsanjiro",
  linkedin: "https://www.linkedin.com/in/axelsanjiro/",
};

export const hero = {
  greeting: "Axel Sanjiro Yang",
  headlineLead: "I build machine learning systems that turn",
  headlineAccent: "messy data",
  headlineTail: "into decisions.",
  subheadline:
    "Third-year Computer Science student at BINUS University, specializing in Intelligent Systems.",
  // Cycled in the hero as a small typing animation
  rotatingWords: [
    "machine learning",
    "predictive modeling",
    "data pipelines",
    "AI systems",
  ],
};

export const about = {
  paragraphs: [
    "I'm a third-year Computer Science student at BINUS University, specializing in Intelligent Systems, and my focus is machine learning that performs reliably beyond the notebook. I work mainly in Python, using Scikit-learn, TensorFlow, and Keras for predictive modeling, with Pandas and NumPy for the data engineering around them. I care about the whole lifecycle, from cleaning messy datasets to validating that the predictions hold up.",
    "I package models into interactive Streamlit apps, on the principle that a model isn't finished until someone can actually use it. I'm looking to apply that pipeline-driven approach to real problems: data-centric tools that speed up a workflow or point to a better decision.",
  ],
  // Shown as a small side panel next to the bio
  focus: [
    "Machine learning and predictive modeling",
    "Model evaluation and validation",
    "Data cleaning and feature work",
    "Applied AI system development",
  ],
};

export type Skill = {
  category: string;
  blurb: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Languages",
    blurb: "What I write day to day.",
    items: ["Python", "SQL"],
  },
  {
    category: "ML & Modeling",
    blurb: "Where I build and train models.",
    items: ["Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    category: "Data & Analysis",
    blurb: "Cleaning, shaping, and reading the data.",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Text & Vision",
    blurb: "Turning language and images into features.",
    items: ["spaCy", "OpenCV", "TF-IDF"],
  },
  {
    category: "Shipping",
    blurb: "Getting a model in front of someone.",
    items: ["Streamlit", "FastAPI"],
  },
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Handwritten Prescription Word Classification",
    summary: "Decodes doctors' handwriting on a plain CPU",
    description:
      "Most handwriting OCR needs a GPU. With two teammates, I fused HoG, LBP, Gabor, and Zernike descriptors through PCA into an RBF SVM, trained on 4,680 prescription images across 78 medicine classes: 76.41% accuracy and 76.68% macro F1, in under 49 seconds on an Intel i5.",
    tags: ["Python", "OpenCV", "Scikit-learn"],
    year: "2026",
    repo: "https://github.com/axelsanjiro/research-methodology-project",
    link: "https://handwritten-prescription-word-recognition.streamlit.app/",
  },
  {
    title: "Credit Scoring & Risk Analytics",
    summary: "Turns lending data into FICO-like risk scores",
    description:
      "Scores loan applicants by default probability, split temporally so future data never leaks backwards into training. XGBoost, calibrated so a predicted 5% risk matches a real 5% default rate, with SHAP explaining each score and a FastAPI endpoint behind a Streamlit dashboard.",
    tags: ["Python", "XGBoost", "FastAPI", "Streamlit"],
    year: "2026",
    repo: "https://github.com/axelsanjiro/Credit-Scoring-and-Risk-Analytics",
  },
  {
    title: "Supply Chain Demand Forecasting",
    summary: "Forecasts weekly demand to size inventory",
    description:
      "Ordering too much ties up cash, ordering too little loses the sale. A Random Forest regressor predicts weekly demand from pricing and promotional data, and the Streamlit app updates the forecast as you change those inputs.",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    year: "2026",
    repo: "https://github.com/axelsanjiro/supply-chain-demand-forecasting",
    link: "https://supply-chain-demand-forecasting.streamlit.app/",
  },
  {
    title: "Emotion Classification from Spotify Lyrics",
    summary: "Sorts song lyrics into six emotions",
    description:
      "Classifies Spotify lyrics into six emotion categories with TF-IDF features and a LinearSVC classifier. The Streamlit app explores the dataset and predicts on any lyrics you paste in.",
    tags: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    year: "2026",
    repo: "https://github.com/axelsanjiro/song-sentiment-analysis",
    link: "https://song-sentiment-analysis.streamlit.app/",
  },
  {
    title: "Content Based Classification Blocking System",
    summary: "Flags distracting articles as you read them",
    description:
      "Sorts news into work-related categories (business, technology, politics) and distracting ones (sports, entertainment), then simulates blocking the second group. spaCy and TF-IDF feed Logistic Regression and Naive Bayes, wrapped in a Streamlit dashboard with tuning and a live demo.",
    tags: ["Python", "NLP", "spaCy", "Scikit-learn"],
    year: "2026",
    repo:
      "https://github.com/axelsanjiro/content-based-classification-blocking-system",
    link:
      "https://content-based-classification-blocking-system.streamlit.app/",
  },
];

export const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];
