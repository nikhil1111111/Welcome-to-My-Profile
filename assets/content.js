/* Edit this file to customize the website content. */
window.SITE_CONTENT = {
  site: {
    name: "Nikhilesh Dangi",
    tagline: "Bioinformatician • Machine Learning • Data Science",
  },
  hero: {
    eyebrow: "Bioinformatics • ML • NGS",
    title: "I build ML systems for biology",
    subtitle: "and sequencing pipelines that stay reliable in practice.",
    lede:
      "I share my projects, sequencing workflows, and practical systems—from whole-genome/exome analysis and variant calling to GenAI-assisted bioinformatics.",
    focus: "NGS pipelines • Computational biology • GenAI (LangChain)",
    nowBuilding: "WGS/WES sequencing workflows with ML/AI-powered analysis",
    location: "Vadodara / Remote",
    quickLinks: [
      { label: "Email", href: "mailto:nikhileshdangi423@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhilesh-dangi-5a5428209", external: true },
      { label: "GitHub", href: "https://github.com/nikhil1111111", external: true },
      { label: "Phone", href: "tel:+919691605270" },
    ],
  },
  highlights: [
    { value: "NGS", label: "Whole-genome / exome sequencing focus" },
    { value: "Pipelines", label: "Alignment • QC • variant calling • annotation" },
    { value: "GenAI", label: "AI-assisted analysis and reporting" },
  ],
  about: {
    subtitle:
      "Bioinformatician and Data Scientist focused on next-generation sequencing (WGS/WES), machine learning, and applied AI.",
    body: [
      "Known for delivering high-quality, scalable solutions through a blend of scientific insight and technical expertise.",
      "Driven, collaborative, and committed to excellence in sequencing workflows, ML/AI, and bioinformatics research.",
    ],
    careAbout: [
      "Clean sequencing pipelines and reproducible analysis (WGS/WES)",
      "QC, alignment, variant calling, and annotation best practices",
      "Applied ML/AI for genomics, interpretability, and reliability",
      "Shipping usable tools (Streamlit, dashboards, automation)",
    ],
    tools: [
      "Python, Java, Bash, Markdown",
      "Bioinformatics: NGS workflows (WGS/WES), Biopython, HTSeq, DGE",
      "ML: scikit-learn, pandas, NumPy, PCA/t-SNE, Random Forest",
      "Deep learning: TensorFlow, Keras, CNNs, Siamese Networks",
      "Geospatial: GeoJSON, QGIS, GDAL, Folium, GeoPandas",
      "GenAI: LangChain, LLMs, Prompt Engineering",
      "Deployment: Streamlit, Flask, Docker, Git/GitHub",
    ],
  },
  experience: {
    subtitle: "Teaching, research supervision, and applied industry work across ML, bioinformatics, and deep learning.",
    items: [
      {
        title: "Assistant Professor",
        kicker: "Parul University, Vadodara • Feb 2025 – Present",
        lede: "Teaching bioinformatics and deep learning; supervising student research and building academic initiatives.",
        tags: ["Teaching", "Supervision", "Deep Learning", "Bioinformatics"],
        details: [
          "Teaching undergraduate and postgraduate students in Bioinformatics and Deep Learning.",
          "Developing and delivering course content: genomics, computational biology, neural networks, and AI in life sciences.",
          "Supervising student projects: data analysis, model development, interpretation of results.",
          "Collaborating on seminars, workshops, and academic initiatives focused on data science and bioinformatics.",
        ],
        links: [],
      },
      {
        title: "Data Scientist Intern",
        kicker: "Sabudh Foundation, Mohali • Jul 2023 – May 2024",
        lede: "Built and deployed road scene segmentation pipelines using U-Net, FPN, and PSPNet.",
        tags: ["Segmentation", "Pipelines", "Deployment", "Collaboration"],
        details: [
          "Developed and deployed a road scene analysis system; improved segmentation accuracy for road/environment use cases.",
          "Designed robust ML pipelines for large-scale processing, scalability, and real-time data integration.",
          "Collaborated with cross-functional teams to refine outcomes and deliver actionable environmental insights.",
        ],
        links: [],
      },
      {
        title: "Bioinformatics Intern",
        kicker: "Govind Ballabh Pant Institute, New Delhi • Feb 2023",
        lede: "Genome assembly and annotation workflows; high-throughput sequencing analysis and molecular techniques.",
        tags: ["NGS", "Genome assembly", "Annotation", "Workshop"],
        details: [
          "Processed and analyzed large-scale bioinformatics data: genome assembly, sequence annotation, and HTS workflows.",
          "Applied techniques from the National Workshop on Molecular Techniques, including DNA/protein structure analysis and genome editing methods.",
          "Used computational tools for high-throughput sequencing, molecular docking, and gene manipulation to streamline research workflows.",
        ],
        links: [],
      },
      {
        title: "Biotechnology Intern",
        kicker: "Government Holkar Science College • Jan 2022",
        lede: "Clinical research support, mammalian cell culture, immunological techniques, and biomedical equipment safety.",
        tags: ["Cell culture", "Immunology", "Instrumentation"],
        details: [
          "Conducted safety evaluations of biomedical equipment and assisted in clinical sample research.",
          "Hands-on experience: mammalian cell culture, gene manipulation, functional genomics in cancer biology.",
          "Advanced immunological techniques, instrumentation, and clinical analysis.",
        ],
        links: [],
      },
    ],
  },
  education: {
    subtitle: "Academic foundation in bioinformatics with hands-on computational biology and data science.",
    schools: [
      {
        title: "M.Sc. in Bioinformatics",
        kicker: "School of Biotechnology, Devi Ahilya Vishwavidyalaya",
        lede: "Focused on computational biology, ML for omics, and applied research methods.",
      },
      {
        title: "B.Sc. in Bioinformatics",
        kicker: "Government Holkar Science College",
        lede: "Built fundamentals in biology, computation, and data analysis.",
      },
    ],
    certifications: [
      "Sabudh Foundation Certificate in Road Scene Analysis",
      "Dataiku: Core Designer, ML Practitioner, Advanced Designer, Developer, MLOps Practitioner",
      "National Workshop on Molecular Techniques (Govind Ballabh Pant Institute)",
      "Mammalian Cell Culture Techniques – Application in Cancer Biology",
      "Enzymes, Gene Manipulation, and Functional Genomics",
      "Instrumentation and Immunological Techniques",
    ],
    achievements: ["Top Intern, Sabudh Foundation (project delivery excellence)"],
  },
  projects: {
    subtitle: "Product work, experiments, and systems I’ve shipped (or am actively iterating on).",
    items: [
      {
        title: "CivicGram",
        kicker: "Social • Super App",
        lede: "An India-first social platform combining communities, posts, channels, messaging, and moderation.",
        tags: ["TypeScript", "NestJS", "Next.js", "Flutter", "Postgres", "Redis"],
        details: [
          "Modular monorepo: API (NestJS), web (Next.js admin/mod tools), mobile (Flutter), shared types, infra (Postgres/Redis/MinIO).",
          "Features: feeds, communities, micro-posts, channels, messaging, moderation, multilingual support, low-bandwidth mode.",
          "Infra: docker-compose for local dev; CI-ready structure for lint/test/build.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/nikhil1111111/CivicGram", external: true }],
      },
      {
        title: "Mental Health Co-Assistance",
        kicker: "Wellbeing • AI Assistant",
        lede: "Anonymous, supportive chat backed by a local Ollama model with empathetic fallbacks.",
        tags: ["Flutter", "AI assistant", "Wellbeing", "Safety"],
        details: [
          "Lightweight mental-health app with emergency response paths and anonymous chat.",
          "Local model (Ollama) plus short empathetic fallback for reliability on-device.",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/nikhil1111111/Mental-Health-Co-Assistance", external: true },
        ],
      },
      {
        title: "Geo India States & Districts Map",
        kicker: "Geospatial • Streamlit",
        lede: "Interactive India map for state/district selection, population coloring, overlays, and downloads.",
        tags: ["Python", "GeoJSON", "Folium", "Streamlit", "Geopandas"],
        details: [
          "Region-wise comparisons, hover tooltips, and downloadable maps for governance, research, and education.",
          "Hosted on Hugging Face Spaces for public access and scalability.",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/nikhil1111111/Geo-Indian-States-Districts-Map-App", external: true },
        ],
      },
      {
        title: "Multi-Cancer Gene Expression Analysis",
        kicker: "Bioinformatics • ML",
        lede: "Gene-expression analysis for biomarker discovery and classification—now being rerun with refreshed data.",
        tags: ["Python", "scikit-learn", "PCA", "t-SNE", "Random Forest"],
        details: [
          "Rebuilding the pipeline: feature selection, dimensionality reduction (PCA/t-SNE), and classifier benchmarking.",
          "Focus on robust validation, interpretability, and updated datasets.",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/nikhil1111111/Multi-Cancer-Gene-Expression-Analysis-for-Biomarker-Discovery-and-Classification",
            external: true,
          },
        ],
      },
      {
        title: "Drug Recommendation System",
        kicker: "Healthcare • ML App",
        lede: "A predictive model that recommends drugs based on disease symptoms with a simple clinical web interface.",
        tags: ["Python", "Streamlit", "Classification", "Case studies"],
        details: [
          "Designed models to recommend drugs and support diagnosis-based suggestions.",
          "Integrated real case studies and delivered an intuitive Streamlit interface for clinical use.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/nikhil1111111/Drug-Recommendation-System", external: true }],
      },
      {
        title: "LangChain Applications for Generative AI",
        kicker: "GenAI • LLM Pipelines",
        lede: "Modular LangChain apps for QA, summarization, and retrieval with a focus on real-world pipeline design.",
        tags: ["Python", "LangChain", "LLMs", "Prompt engineering"],
        details: [
          "Built modular applications using LangChain and combined multiple LLMs for chained tasks.",
          "Implemented question answering, summarization, and knowledge retrieval workflows.",
          "Emphasized prompt engineering and production-friendly pipeline structure.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/nikhil1111111/Langchain", external: true }],
      },
      {
        title: "Road Scene Analysis using Deep Learning",
        kicker: "Computer Vision • Geospatial",
        lede: "Road segmentation and scene detection using U-Net, FPN, PSPNet with QGIS/GDAL preprocessing.",
        tags: ["Python", "TensorFlow", "QGIS", "GDAL", "Segmentation"],
        details: [
          "Applied U-Net, FPN, and PSPNet models for road segmentation and scene detection.",
          "Preprocessed geospatial layers with QGIS and GDAL to improve fragmented road visibility in satellite imagery.",
          "Developed end-to-end ML pipelines designed for scalable deployment.",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/nikhil1111111/Road-Scene-Analysis-using-Deep-Learning", external: true },
        ],
      },
      {
        title: "Image Recognition with Siamese Neural Networks",
        kicker: "Deep Learning",
        lede: "One-shot image recognition via similarity learning for real-time verification use cases.",
        tags: ["Python", "TensorFlow", "OpenCV", "Siamese Networks"],
        details: [
          "Implemented Siamese architecture and trained a similarity function for one-shot recognition.",
          "Applied on image pairs for real-time verification tasks with minimal examples.",
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/nikhil1111111/Image_Recognition-with-Siamese-Neural-Networks",
            external: true,
          },
        ],
      },
      {
        title: "Deep Learning Practice Sessions",
        kicker: "Teaching • Notebooks",
        lede: "Hands-on notebooks: CNNs, activations, optimizers, dropout, overfitting, and experiments.",
        tags: ["Python", "TensorFlow", "Keras", "Notebooks"],
        details: [
          "Created structured learning progression from basics to intermediate topics.",
          "Included visual outputs and experiment logs to support practical understanding.",
        ],
        links: [
          { label: "GitHub", href: "https://github.com/nikhil1111111/Deep-learning-practice-session", external: true },
        ],
      },
      {
        title: "Multi-omics GNN Biomarker Discovery",
        kicker: "Bioinformatics • GNNs",
        lede: "Graph neural networks for early disease prediction and precision medicine.",
        tags: ["GNN", "Multi-omics", "Precision medicine"],
        details: [
          "Exploring multi-omics data integration and biomarker discovery with graph-based models.",
          "Focus on early disease prediction and robust validation.",
        ],
        links: [{ label: "GitHub (private)", href: "https://github.com/nikhil1111111/multi-omics-GNN-biomarker-discovery", external: true }],
      },
    ],
  },
  research: {
    subtitle: "Topics I’m exploring across computational biology, deep learning, and applied GenAI.",
    collabNote:
      "If you’re working on applied bioinformatics, multi-omics analysis, or GenAI for life sciences, I’d love to connect.",
    items: [
      {
        title: "NGS pipelines: WGS/WES",
        kicker: "Sequencing • Bioinformatics",
        lede: "End-to-end sequencing workflows: QC, alignment, variant calling, annotation, and reporting.",
        tags: ["NGS", "WGS/WES", "Variant calling", "QC"],
        details: [
          "Building reproducible pipelines for whole-genome and exome sequencing.",
          "Integrating ML/AI for prioritization, interpretation, and automated summaries.",
        ],
        links: [],
      },
      {
        title: "Deep learning for geospatial understanding",
        kicker: "Vision • Remote sensing",
        lede: "Segmentation pipelines, preprocessing, and validation for satellite imagery.",
        tags: ["Segmentation", "QGIS/GDAL", "Evaluation"],
        details: [
          "Preprocessing strategies that improve road continuity and reduce fragmentation.",
          "Model comparisons (U-Net/FPN/PSPNet) with practical deployment considerations.",
        ],
        links: [],
      },
      {
        title: "GenAI pipelines for scientific workflows",
        kicker: "LangChain • LLMs",
        lede: "Using LLMs for summarization, QA, and retrieval while keeping outputs grounded.",
        tags: ["LangChain", "RAG", "Prompting"],
        details: [
          "Pipeline design patterns for tool use and retrieval.",
          "Evaluation and guardrails for correctness in scientific contexts.",
        ],
        links: [],
      },
    ],
  },
  advancements: {
    subtitle: "Current advancements I’m focused on across NGS, AI/ML, and emerging genomics standards.",
    why: "Applying AI/ML to sequencing accelerates variant calling, interpretation, and reporting—while keeping analysis explainable and reliable.",
    pillars: ["AI-driven genomic analysis", "NGS workflows (WGS/WES)", "Multi-omics integration", "LLMs for bioinformatics", "Emerging references (pangenome)", "Cloud + privacy for genomics"],
    bullets: [
      "AI/ML for variant calling, QC, interpretation, and disease risk prediction—using explainable approaches suitable for clinical contexts.",
      "End-to-end NGS workflows: experimental design, QC, alignment, variant calling, annotation, and automated reporting.",
      "Multi-omics integration (genomics, transcriptomics, proteomics, metabolomics) for richer biomarkers and classification.",
      "LLMs/GenAI assisting sequencing pipelines: summarization, retrieval, and interpretation with grounded outputs.",
      "Human Pangenome reference and population-aware analysis for better variant detection across diverse cohorts.",
      "Cloud-ready, privacy-aware workflows and federated learning for secure, collaborative genomics.",
    ],
  },
  agency: {
    subtitle:
      "Businesses are terrified of being left behind. AAA ships workflow packages that integrate cleanly and pay back fast.",
    product:
      "Instead of selling hours, I sell outcomes: AI agents that monitor leads, draft personalized replies in your voice, and update your CRM—automatically.",
    pricing: {
      setup: "$2,000–$5,000 setup",
      maint: "$300–$500 / month maintenance",
    },
    targets: ["Real estate teams", "Law firms", "E-commerce brands"],
  },
  moneyMap: {
    subtitle: "A simple menu of AI-first offers—from low-effort marketplace products to high-leverage SaaS.",
    rows: [
      {
        effort: "Low",
        strategy: 'Selling "Agentic Workflows" on marketplaces (Gumroad/PromptBase).',
        income: "$100 – $1,000 / mo",
      },
      {
        effort: "Medium",
        strategy: 'Freelance "AI Fixer" for small businesses.',
        income: "$5,000 – $10,000 / mo",
      },
      {
        effort: "High",
        strategy: "Building a Micro-SaaS or starting an AI Automation Agency.",
        income: "$10,000+ / mo",
      },
    ],
  },
  writing: {
    subtitle: "Short notes on building AI products, evaluation, and automation workflows.",
    items: [
      {
        title: "Stop selling hours: sell outcomes",
        kicker: "AAA",
        lede: "Why workflow packages beat hourly labor—and how to price setup + maintenance.",
        tags: ["Productized service", "Pricing"],
        details: [
          "Hourly work scales linearly; workflow packages compound with templates, reuse, and ops.",
          "Maintenance keeps systems healthy as tools, data, and models evolve.",
        ],
        links: [],
      },
      {
        title: 'The "Fixer" role: AI integrator, not prompt engineer',
        kicker: "Freelancing",
        lede: "Where the high-paying work is: APIs, data cleanup, vector DBs, and production integration.",
        tags: ["Integration", "APIs", "RAG"],
        details: [
          "Positioning: connect systems and de-risk deployments; be accountable for outcomes.",
          "Search terms: API integration, vector database, LangChain developer.",
        ],
        links: [],
      },
      {
        title: "Vibe coding a Micro-SaaS in 48 hours",
        kicker: "Micro-SaaS",
        lede: "A repeatable process: find a niche pain, ship small, charge $9/mo, iterate weekly.",
        tags: ["Rapid shipping", "Validation"],
        details: [
          "Start with a real community and a specific complaint.",
          "Launch quickly with a narrow scope and visible value.",
        ],
        links: [],
      },
    ],
  },
  contact: {
    subtitle: "Want to collaborate, hire me, or talk research? Send a message.",
    text: "Email works best. If you include context + goals + timeline, I’ll reply faster.",
    email: "nikhileshdangi423@gmail.com",
    links: [
      { label: "Email", href: "mailto:nikhileshdangi423@gmail.com" },
      { label: "Phone", href: "tel:+919691605270" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhilesh-dangi-5a5428209", external: true },
      { label: "GitHub", href: "https://github.com/nikhil1111111", external: true },
    ],
  },
};
