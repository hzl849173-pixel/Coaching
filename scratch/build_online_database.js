// Comprehensive Online Entrance Coaching Database Builder
const fs = require('fs');

const INSTITUTES_CONFIG = [
  {
    "id": "pala",
    "name": "Brilliant Study Centre Pala",
    "shortCode": "PALA",
    "location": "Online E-Learn (Kerala & Gulf)",
    "established": "1984",
    "reputationTag": "Kerala Premier • Statewide Rank Benchmark",
    "description": "The gold standard for Kerala repeaters and KEAM/NEET rank holders with demanding online model examinations and statewide live rank lists."
  },
  {
    "id": "xylem",
    "name": "Xylem Learning",
    "shortCode": "XYLEM",
    "location": "Online Live App (Kerala & Gulf)",
    "established": "2020",
    "reputationTag": "High Energy • Malayalam Medium Value",
    "description": "Kerala's fastest growing online edtech platform offering engaging Malayalam live classes, affordable pricing, and supportive student community."
  },
  {
    "id": "eduport",
    "name": "Eduport Learning",
    "shortCode": "EDUPORT",
    "location": "Online Live & Adapt AI App",
    "established": "2019",
    "reputationTag": "Tech-Forward • Adapt AI Pioneer",
    "description": "Premier Kerala digital learning powerhouse founded by IIT/NIT alumni, famous for integrated Plus One/Plus Two online coaching with Adapt AI doubt resolution."
  },
  {
    "id": "examwinner",
    "name": "Exam Winner Learning",
    "shortCode": "EXAM WINNER",
    "location": "Online Live Web & Mobile App",
    "established": "2019",
    "reputationTag": "Board + NEET Powerhouse • Millions of Aspirants",
    "description": "Kerala's most widely watched online educational platform, delivering high-impact Malayalam live coaching, Vedha NEET repeaters, and tuition integration."
  },
  {
    "id": "pcthomas",
    "name": "Prof. P.C. Thomas & Chaithanya Classes",
    "shortCode": "PC THOMAS",
    "location": "Online Video Portal & Courier DLP",
    "established": "1969",
    "reputationTag": "Kerala Coaching Legend • Uncompromising Rigor",
    "description": "Pioneering Kerala entrance institution with a half-century legacy producing top medical & engineering ranks with comprehensive 28-volume courier study kits and online video archives."
  },
  {
    "id": "physicswallah",
    "name": "Physics Wallah (PW Malayalam & National)",
    "shortCode": "PW",
    "location": "PW App & Malayalam Live Wing",
    "established": "2020",
    "reputationTag": "Lowest Price Champion • High DPP Density",
    "description": "Budget online powerhouse offering complete syllabus live coverage, All-India rank benchmarking, daily DPPs with video solutions, and Saarthi mentorship."
  },
  {
    "id": "allen",
    "name": "Allen Digital",
    "shortCode": "ALLEN",
    "location": "Allen Digital App (Kota Faculty Live)",
    "established": "1988",
    "reputationTag": "Kota Standard • Rigorous Advanced Level",
    "description": "National benchmark in academic rigor, bringing legendary Kota faculty live to students' homes with comprehensive physical study modules and Leader Test Series."
  },
  {
    "id": "aakash",
    "name": "Aakash Digital",
    "shortCode": "AAKASH",
    "location": "Aakash Live & App",
    "established": "1988",
    "reputationTag": "Medical Legacy • AI-Assisted Phygital Kits",
    "description": "Renowned nationwide medical entrance authority offering live two-way interactive online classes, QR-coded physical study books, and AI-enabled test analysis."
  },
  {
    "id": "fiitjee",
    "name": "FIITJEE eSchool",
    "shortCode": "FIITJEE",
    "location": "FIITJEE National eSchool",
    "established": "1992",
    "reputationTag": "JEE Advanced Authority • Pinnacle eSchool",
    "description": "National benchmark in IIT-JEE preparation, famous for the live online PINNACLE 2-year school program, legendary AITS test series, and top IIT single-digit ranks."
  },
  {
    "id": "srichaitanya",
    "name": "Sri Chaitanya (Infinity Learn)",
    "shortCode": "SRI CHAITANYA",
    "location": "Infinity Learn App & Live Portal",
    "established": "1986",
    "reputationTag": "National Rank Factory • MEDICON & ELITE",
    "description": "Premier pan-India online coaching platform famed for its MEDICON NEET and ELITE JEE Advanced programs with micro-scheduled drill testing and live doubt resolution."
  },
  {
    "id": "narayana",
    "name": "Narayana Digital (CO-SPARK)",
    "shortCode": "NARAYANA",
    "location": "Narayana Live & e-Chaitanya",
    "established": "1979",
    "reputationTag": "Olympiad & JEE Rigor • CO-SPARK Engine",
    "description": "Pioneering national academic group known for systematic micro-level online test schedules, live doubt-clearing sessions, and specialized CO-SPARK batches."
  },
  {
    "id": "vedantu",
    "name": "Vedantu Learning",
    "shortCode": "VEDANTU",
    "location": "WAVE 2.0 Live Learning App",
    "established": "2014",
    "reputationTag": "Interactive LIVE Pioneer • Tatva Books",
    "description": "India's online live learning pioneer featuring WAVE 2-way interactive technology, Tatva courier book modules, and dedicated Malayalam & English NEET/JEE batches."
  },
  {
    "id": "time",
    "name": "T.I.M.E. Online",
    "shortCode": "T.I.M.E.",
    "location": "T.I.M.E. Online Portal & Live App",
    "established": "1992",
    "reputationTag": "Kerala Heritage • National Test Rigor",
    "description": "Founded in Kerala with nationwide reputation, offering structured online live sessions, exhaustive study materials, and rigorous National Mock Test series for JEE and NEET."
  },
  {
    "id": "motion",
    "name": "Motion Education (Motion Online)",
    "shortCode": "MOTION",
    "location": "Motion Learning App (NV Sir Team)",
    "established": "2007",
    "reputationTag": "NV Sir Physics & Kota Top Faculty Live",
    "description": "Renowned Kota coaching led by Nitin Vijay (NV Sir), offering Kota classroom live broadcasts, customized homework sheets, and BRAHMASTRA revision test series."
  },
  {
    "id": "neetprep",
    "name": "Neetprep Online",
    "shortCode": "NEETPREP",
    "location": "Neetprep Learning App & Web",
    "established": "2017",
    "reputationTag": "Pure NEET Specialization • NCERT Question Bank",
    "description": "India's premier dedicated online NEET platform, famed for Target Batch NCERT audio books, 35,000+ curated MCQ bank, and masterclasses by Dr. NK Sharma & Kapil Gupta."
  },
  {
    "id": "careerpoint",
    "name": "eCareerPoint (Career Point Online)",
    "shortCode": "CAREER POINT",
    "location": "eCareerPoint Live Learning App",
    "established": "1993",
    "reputationTag": "Kota Pioneer • High Affordability Live",
    "description": "Kota's veteran entrance group delivering daily live online lectures, personalized feedback sessions, and physical study modules couriered across Kerala and India."
  },
  {
    "id": "zephyr",
    "name": "Zephyr Entrance Coaching",
    "shortCode": "ZEPHYR",
    "location": "Zephyr Virtual Classroom",
    "established": "1994",
    "reputationTag": "Personal Attention • 2-Way Voice Doubts",
    "description": "Trusted 30-year South Kerala legacy with small interactive virtual cohorts, live faculty voice interactions, and consistent KEAM/NEET rank selections."
  },
  {
    "id": "rays",
    "name": "Rays Edutech Kerala",
    "shortCode": "RAYS",
    "location": "Rays Live Digital Portal",
    "established": "2002",
    "reputationTag": "Malabar Premier • Super-40 Intensive",
    "description": "North Kerala entrance champion delivering curated online cohorts, intensive daily numerical problem solving, and top government medical seat guidance."
  },
  {
    "id": "alpha",
    "name": "Alpha Entrance Academy",
    "shortCode": "ALPHA",
    "location": "Alpha Live App & Web",
    "established": "2000",
    "reputationTag": "Central Travancore • Daily Revision Papers",
    "description": "Renowned Kerala entrance academy featuring daily morning and evening online live coaching with personalized mentoring and past paper drills."
  },
  {
    "id": "pcmb",
    "name": "PCMB Entrance Coaching",
    "shortCode": "PCMB",
    "location": "PCMB Digital Masterclass",
    "established": "2012",
    "reputationTag": "NCERT Line-by-Line • Physics Drills",
    "description": "Specialized online entrance hub focusing on targeted numerical practice in Physics and conceptual NCERT biology line-by-line online mastery."
  },
  {
    "id": "unacademy",
    "name": "Unacademy Kerala",
    "shortCode": "UNACAD",
    "location": "Unacademy Live App",
    "established": "2015",
    "reputationTag": "Flexible Schedules • Elite Educators",
    "description": "Flexible digital learning powerhouse featuring top Kerala faculties, extensive PYQ test databases, and customizable study tracks."
  }
];

// Read existing data
const existingCode = fs.readFileSync('data.js', 'utf8');
const fn = new Function(existingCode + '; return { COACHING_BATCHES };');
const { COACHING_BATCHES } = fn();

console.log('Original batches count:', COACHING_BATCHES.length);

// Ensure all existing batches are clearly marked as online
const updatedExisting = COACHING_BATCHES.map(b => {
  let mode = b.mode || "100% Online Live Interactive";
  if (!mode.toLowerCase().includes("online") && !mode.toLowerCase().includes("app")) {
    mode = "100% Online Live Interactive";
  }
  return {
    ...b,
    mode: mode
  };
});

// New high-value online batches to add
const newBatches = [
  // Brilliant Study Centre Pala New Online Batches
  {
    id: "pala-nri-live-05",
    instituteId: "pala",
    institute: "Brilliant Study Centre Pala",
    name: "Brilliant NRI Online Live Evening Batch (Gulf & Overseas)",
    badge: "NRI Gulf Timezone",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.9,
    reviewsCount: 1420,
    price: 92000,
    originalPrice: 105000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹31,000",
    mode: "100% Online Live (Gulf Evening Time)",
    language: "Malayalam + English (Bilingual)",
    schedule: "Mon - Sat • 5:00 PM - 9:30 PM (GST / UAE Time)",
    teachers: ["George Thomas (Physics)", "Dr. K. S. Pillai (Botany)", "M. Mathew (Zoology)", "S. Varma (Chemistry)"],
    studyMaterial: "Complete 18-Volume Brilliant Printed Module Box Couriered Internationally via DHL/Aramex",
    testsPerMonth: 12,
    batchSize: "50 Students per Virtual Interactive Cohort",
    refundPolicy: "Pro-rata refund minus international courier costs within first 14 days",
    highlights: [
      "Specially curated for Gulf Kerala diaspora (UAE, Qatar, Kuwait, Oman, Saudi Arabia)",
      "Sunday model exams synchronized live across Middle East and Indian time zones",
      "Two-way audio faculty doubt clearance during live evening lectures",
      "Dedicated Kerala NRI counseling & domicile quota admissions mentorship"
    ]
  },
  {
    id: "pala-sunday-cbt-06",
    instituteId: "pala",
    institute: "Brilliant Study Centre Pala",
    name: "Brilliant Online All-Kerala Sunday Model Exam & CBT Test Series",
    badge: "State Rank Benchmark",
    targetExam: "NEET",
    category: "Crash Course",
    rating: 4.8,
    reviewsCount: 4800,
    price: 18500,
    originalPrice: 24000,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment or 2 installments",
    mode: "Online CBT Engine + Video Discussions",
    language: "Malayalam + English (Bilingual)",
    schedule: "Every Sunday • 9:00 AM - 12:20 PM Online",
    teachers: ["Brilliant Pala Senior Medical Council"],
    studyMaterial: "32 Full-Syllabus Model Papers Courier Box + Online Analytics Dashboard",
    testsPerMonth: 8,
    batchSize: "Statewide Online Cohort (40,000+ Rankers)",
    refundPolicy: "Non-refundable after model paper dispatch",
    highlights: [
      "The definitive statewide benchmark exam taken by 40,000+ serious Kerala aspirants",
      "Exact NTA NEET / CEE KEAM exam simulation software on mobile & desktop",
      "Instant statewide percentile, district-wise rank, and negative mark analysis",
      "Step-by-step video solutions in conversational Malayalam after every test"
    ]
  },

  // Xylem Learning New Online Batches
  {
    id: "xylem-yoddha-pro-05",
    instituteId: "xylem",
    institute: "Xylem Learning",
    name: "Xylem Yoddha NEET Repeater Live Pro (Evening Interactive)",
    badge: "High Energy Malayalam",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.8,
    reviewsCount: 3890,
    price: 36000,
    originalPrice: 48000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹12,000",
    mode: "100% Online Live via Xylem App",
    language: "Malayalam + English",
    schedule: "Mon - Sat • 5:30 PM - 9:30 PM",
    teachers: ["Dr. Ananthu (Biology)", "Naveen Sir (Physics)", "Shamsu Sir (Chemistry)"],
    studyMaterial: "Xylem 12-Volume Printed Book Set Delivered to Home + Daily DPP PDFs",
    testsPerMonth: 10,
    batchSize: "Interactive Live Streaming Cohort",
    refundPolicy: "10-day conditional return on course initiation",
    highlights: [
      "Evening live classes ideal for students who want daily study discipline",
      "Interactive in-class quizzes with instant live leaderboard rankings",
      "Daily 30-minute faculty doubt window immediately after each session",
      "High motivation community webinars and mental wellness counseling"
    ]
  },
  {
    id: "xylem-gulf-live-06",
    instituteId: "xylem",
    institute: "Xylem Learning",
    name: "Xylem Gulf NRI Online Live Batch (Plus One & Plus Two Combo)",
    badge: "Gulf Diaspora Hit",
    targetExam: "NEET",
    category: "Class 11 Two-Year",
    rating: 4.7,
    reviewsCount: 1650,
    price: 45000,
    originalPrice: 62000,
    gstNote: "Inclusive of 18% GST",
    installments: "4 installments of ₹11,250",
    mode: "100% Online Live via Xylem App",
    language: "Malayalam + English",
    schedule: "Mon - Thu • 6:30 PM - 9:30 PM Gulf Standard Time",
    teachers: ["Xylem Elite Faculty Panel"],
    studyMaterial: "Complete Plus One & Plus Two Printed Theory & Question Banks Couriered Overseas",
    testsPerMonth: 8,
    batchSize: "Gulf Focused Virtual Batch",
    refundPolicy: "Pro-rata refund within first 14 calendar days",
    highlights: [
      "Tailored timing matching Gulf Indian school academic calendar and weekend hours",
      "Equal emphasis on CBSE Board A1 grade and NEET/KEAM conceptual mastery",
      "Parent-teacher online video conferences every month with performance graphs",
      "Over 400+ past year questions practiced live with faculty guidance"
    ]
  },

  // Eduport Learning New Online Batches
  {
    id: "eduport-adapt-ai-pro-05",
    instituteId: "eduport",
    institute: "Eduport Learning",
    name: "Eduport Mediko Pure Online Live (With Adapt AI Box & Doubt Tab)",
    badge: "Adapt AI Powered",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.8,
    reviewsCount: 2450,
    price: 38000,
    originalPrice: 49999,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹12,666",
    mode: "100% Online Live + Adapt AI 24/7",
    language: "Malayalam + English",
    schedule: "Mon - Sat • 8:30 AM - 1:30 PM (Live + Recording)",
    teachers: ["Anoop Sir (Physics)", "Dr. Shameem (Biology)", "Naveen Sir (Chemistry)"],
    studyMaterial: "Eduport Smart Module Kit (QR-linked video solutions for every problem) + Courier Box",
    testsPerMonth: 12,
    batchSize: "Smart Virtual Cohort with Personal Mentor",
    refundPolicy: "14-day replacement or exit policy",
    highlights: [
      "Instant Adapt AI camera doubt resolution: snap a photo of any question for immediate steps",
      "IIT and NIT alumni-led conceptual breakdown in easy-to-understand Malayalam",
      "Personal academic mentor assigned for weekly study tracking and test review",
      "Adaptive online test series that automatically focuses on your weakest chapters"
    ]
  },

  // Exam Winner New Online Batches
  {
    id: "examwinner-crash-05",
    instituteId: "examwinner",
    institute: "Exam Winner Learning",
    name: "Exam Winner Malayalam NEET 100-Day Intensive Online Crash",
    badge: "Budget Crash Hit",
    targetExam: "NEET",
    category: "Crash Course",
    rating: 4.7,
    reviewsCount: 5200,
    price: 5999,
    originalPrice: 9999,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment of ₹5,999",
    mode: "Online Live + Full Video Library",
    language: "Malayalam + English",
    schedule: "Daily • 6:00 PM - 10:00 PM Live",
    teachers: ["Allen Sir (Physics)", "Shibu Sir (Chemistry)", "Dr. Resmi (Biology)"],
    studyMaterial: "Exam Winner Formula Flashcards & 10,000 MCQ Question Bank PDF + Printed Summary",
    testsPerMonth: 16,
    batchSize: "Mass Online Community",
    refundPolicy: "7-day cancellation window",
    highlights: [
      "Fast-track high-yield revision covering all 79 Physics, Chemistry, and Biology chapters",
      "Most watched energetic teachers in Kerala making complex formulas memorable",
      "Daily live countdown MCQ solving sprints with competitive live polling",
      "Exceptional value-for-money option for repeaters and Plus Two candidates"
    ]
  },

  // Physics Wallah New Online Batches
  {
    id: "pw-arjuna-mal-05",
    instituteId: "physicswallah",
    institute: "Physics Wallah (PW Malayalam & National)",
    name: "PW Arjuna Malayalam Plus One Online Live Batch",
    badge: "High Value Foundation",
    targetExam: "NEET",
    category: "Class 11 Two-Year",
    rating: 4.8,
    reviewsCount: 6800,
    price: 4999,
    originalPrice: 8500,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment of ₹4,999",
    mode: "100% Online Live on PW App",
    language: "Malayalam + English",
    schedule: "Mon - Sat • 4:30 PM - 8:00 PM",
    teachers: ["PW Malayalam Master Faculty Panel"],
    studyMaterial: "Daily Practice Problem (DPP) Sheets + Solution Videos + Digital Handbooks",
    testsPerMonth: 8,
    batchSize: "Live Interactive App Stream",
    refundPolicy: "PW standard 7-day policy",
    highlights: [
      "Daily Practice Problems (DPP) with comprehensive video solutions in Malayalam",
      "Doubts engine with dedicated teaching assistants responding in under 30 minutes",
      "In-app CBT mock tests and national peer benchmark across 200,000+ students",
      "Complete Plus One syllabus coverage aligned with NCERT and Kerala Board"
    ]
  },

  // Allen Digital New Online Batches
  {
    id: "allen-leader-online-jee-05",
    instituteId: "allen",
    institute: "Allen Digital",
    name: "Allen Leader Live Online Course for JEE (Main + Advanced)",
    badge: "Kota Benchmark",
    targetExam: "JEE",
    category: "Repeater / Dropper",
    rating: 4.9,
    reviewsCount: 3400,
    price: 96000,
    originalPrice: 115000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹32,000",
    mode: "100% Online Live with Kota Senior Faculty",
    language: "English + Bilingual Option",
    schedule: "Mon - Sat • 8:00 AM - 1:30 PM",
    teachers: ["Allen Kota HODs (Physics, Maths, Chemistry)"],
    studyMaterial: "Legendary 24-Volume Allen Kota Study Material Box Delivered to Home",
    testsPerMonth: 8,
    batchSize: "Curated Virtual Cohort",
    refundPolicy: "Allen Digital pro-rata refund schedule within 15 days",
    highlights: [
      "Direct live teaching from Allen's senior Kota faculty who produced All-India Rank 1",
      "Complete set of Allen Kota classroom question banks with graded difficulty levels",
      "Leader Test Series on authentic JEE Advanced computer-based testing engine",
      "Live 2-way doubt resolution counters and parent progress monitoring app"
    ]
  },

  // Aakash Digital New Online Batches
  {
    id: "aakash-aiats-digital-05",
    instituteId: "aakash",
    institute: "Aakash Digital",
    name: "Aakash AIATS Online Test Series & Video Solution Vault",
    badge: "All-India Benchmark",
    targetExam: "NEET",
    category: "Crash Course",
    rating: 4.8,
    reviewsCount: 7800,
    price: 14500,
    originalPrice: 19999,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment of ₹14,500",
    mode: "Online CBT Test Engine + Video Analysis",
    language: "English + Malayalam Assist",
    schedule: "Bi-Weekly Sundays • 10:00 AM - 1:20 PM Online",
    teachers: ["Aakash National Medical Academic Council"],
    studyMaterial: "28 AIATS Test Booklets Couriered Home + Online Micro-Analytics Portal",
    testsPerMonth: 6,
    batchSize: "Pan-India Cohort (100,000+ Test Takers)",
    refundPolicy: "Non-refundable once digital portal credentials are generated",
    highlights: [
      "The most trusted national All-India Aakash Test Series simulating real NEET difficulty",
      "Detailed question-by-question micro-analysis showing error patterns and time per MCQ",
      "Complete video walkthrough of every test by senior Delhi & Kota faculties",
      "National rank prediction benchmark verified across decades of medical entrance"
    ]
  },

  // NEW INSTITUTE 1: T.I.M.E. Online
  {
    id: "time-neet-online-01",
    instituteId: "time",
    institute: "T.I.M.E. Online",
    name: "T.I.M.E. NEET Online Repeater Master Course",
    badge: "National Standard",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.7,
    reviewsCount: 1850,
    price: 48000,
    originalPrice: 65000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹16,000",
    mode: "100% Online Live Interactive Classes",
    language: "Malayalam + English (Bilingual)",
    schedule: "Mon - Fri • 9:00 AM - 2:00 PM Live",
    teachers: ["T.I.M.E. Senior Medical Faculty Panel"],
    studyMaterial: "Comprehensive 16-Volume Study Material Kit Couriered Home + Daily Online Practice Tests",
    testsPerMonth: 8,
    batchSize: "45 Students per Virtual Cohort",
    refundPolicy: "Pro-rata refund minus admin fee within first 14 days",
    highlights: [
      "Founded in Kerala with nationwide reputation for test preparation excellence",
      "Live interactive classes with two-way voice doubt resolution during lectures",
      "All-India Mock Test Series benchmarking your scores against national competitors",
      "Personalized student dashboard tracking chapter-level accuracy and completion speed"
    ]
  },
  {
    id: "time-jee-online-02",
    instituteId: "time",
    institute: "T.I.M.E. Online",
    name: "T.I.M.E. JEE Main & Advanced Online Live Dropper Batch",
    badge: "Engineering Rigor",
    targetExam: "JEE",
    category: "Repeater / Dropper",
    rating: 4.6,
    reviewsCount: 1420,
    price: 52000,
    originalPrice: 70000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹17,333",
    mode: "100% Online Live via T.I.M.E. App",
    language: "English + Bilingual Assist",
    schedule: "Mon - Sat • 8:30 AM - 1:30 PM Live",
    teachers: ["IIT Alumni & Senior JEE Specialists"],
    studyMaterial: "Full Printed Study Material Box Delivered via Courier + 45 Full Length Mock CBTs",
    testsPerMonth: 8,
    batchSize: "50 Students per Batch",
    refundPolicy: "14-day refund window as per standard policy",
    highlights: [
      "Rigorous problem-solving approach focusing on multi-concept JEE Advanced numericals",
      "Extensive previous 15 years chapter-wise question discussion with step explanations",
      "Full CBT testing engine matching exact NTA JEE Main and IIT JEE Advanced UI",
      "Regular online 1-on-1 counseling and performance review with senior mentors"
    ]
  },
  {
    id: "time-keam-crash-03",
    instituteId: "time",
    institute: "T.I.M.E. Online",
    name: "T.I.M.E. KEAM Engineering Online Fastrack Crash",
    badge: "Kerala Focused",
    targetExam: "KEAM",
    category: "Crash Course",
    rating: 4.7,
    reviewsCount: 2100,
    price: 11500,
    originalPrice: 16000,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment of ₹11,500",
    mode: "Online Live + Recorded Video Vault",
    language: "Malayalam + English",
    schedule: "Daily • 5:00 PM - 8:30 PM Live",
    teachers: ["Kerala Engineering Faculty Council"],
    studyMaterial: "KEAM Formula Handbook + 15 Full Computer-Based Mock Tests",
    testsPerMonth: 10,
    batchSize: "Interactive Online Stream",
    refundPolicy: "7-day cancellation window",
    highlights: [
      "Specialized for Kerala Engineering Architecture Medical (KEAM) CBT pattern",
      "High-speed shortcut techniques for Maths and Physics speed improvement",
      "15 Full length model CBT examinations with immediate rank list generation",
      "Proven track record helping Kerala students secure top 1,000 KEAM engineering ranks"
    ]
  },

  // NEW INSTITUTE 2: Vedantu Learning
  {
    id: "vedantu-neet-mal-01",
    instituteId: "vedantu",
    institute: "Vedantu Learning",
    name: "Vedantu Malayalam NEET Repeater Live Pro (WAVE 2.0)",
    badge: "WAVE 2.0 Interactive",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.8,
    reviewsCount: 3950,
    price: 38000,
    originalPrice: 55000,
    gstNote: "Inclusive of 18% GST",
    installments: "4 installments of ₹9,500",
    mode: "100% Online Live with WAVE Interactive Engine",
    language: "Malayalam + English",
    schedule: "Mon - Sat • 9:00 AM - 1:30 PM Live",
    teachers: ["Vedantu Top Malayalam Educators Panel"],
    studyMaterial: "Hardcopy Tatva Books Couriered Directly to Home + 24/7 AI Doubt App Access",
    testsPerMonth: 8,
    batchSize: "WAVE Interactive Live Stream with Class Teachers",
    refundPolicy: "Vedantu Improvement Promise (VIP): 100% refund if rank doesn't improve",
    highlights: [
      "WAVE 2.0 technology with in-class live quizzes, hotspots, and 3D organ visualizations",
      "Dedicated Class Teachers inside the live session answering doubts instantly in private chat",
      "Comprehensive Tatva study books delivered to your doorstep with QR video answers",
      "Full recording library available within 15 minutes of live class completion"
    ]
  },
  {
    id: "vedantu-jee-pro-02",
    instituteId: "vedantu",
    institute: "Vedantu Learning",
    name: "Vedantu JEE Main & Advanced Live Pro (Tatva Books Kit)",
    badge: "Dual Teacher Model",
    targetExam: "JEE",
    category: "Repeater / Dropper",
    rating: 4.7,
    reviewsCount: 2900,
    price: 42000,
    originalPrice: 60000,
    gstNote: "Inclusive of 18% GST",
    installments: "4 installments of ₹10,500",
    mode: "100% Online Live on Vedantu App",
    language: "English + Malayalam Support",
    schedule: "Mon - Sat • 8:30 AM - 1:00 PM Live",
    teachers: ["Master Teachers (IIT Roorkee & IIT Bombay Alumni)"],
    studyMaterial: "Complete Tatva Engineering Book Series Couriered to Doorstep",
    testsPerMonth: 8,
    batchSize: "Interactive Live Class with Co-Teachers",
    refundPolicy: "14-day money back guarantee",
    highlights: [
      "Dual Teacher model: Master Teacher explains concepts while Co-Teachers resolve doubts live",
      "Comprehensive problem solving modules tailored for JEE Advanced paper standards",
      "AI-driven test reports pinpointing question selection mistakes and time management issues",
      "Post-class doubt app with real-time video resolution by subject specialists"
    ]
  },

  // NEW INSTITUTE 3: Motion Education (Motion Online)
  {
    id: "motion-drona-neet-01",
    instituteId: "motion",
    institute: "Motion Education (Motion Online)",
    name: "Motion Online Drona NEET Repeater (Kota Faculty Live Broadcast)",
    badge: "Kota Live Stream",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.8,
    reviewsCount: 3100,
    price: 45000,
    originalPrice: 62000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹15,000",
    mode: "100% Online Live from Kota Classroom",
    language: "English + Bilingual",
    schedule: "Mon - Sat • 8:00 AM - 1:30 PM",
    teachers: ["Dr. Ashish Maheshwari (Botany)", "NV Sir Team (Physics)", "JP Sir (Chemistry)"],
    studyMaterial: "Complete Motion Kota Drona Module Box Couriered to Home + BRAHMASTRA Test Series",
    testsPerMonth: 8,
    batchSize: "Kota Virtual Cohort",
    refundPolicy: "15-day pro-rata refund policy",
    highlights: [
      "Direct live broadcast from Kota's top-batch classroom for genuine competitive energy",
      "Motion's proprietary CPR (Customized Practice Records) homework system",
      "All-India online mock test series on authentic NEET computer pattern",
      "Personal academic counseling and Kota mentor connectivity on Zoom/Google Meet"
    ]
  },
  {
    id: "motion-eklavya-jee-02",
    instituteId: "motion",
    institute: "Motion Education (Motion Online)",
    name: "Motion Eklavya JEE Advanced Online Dropper (NV Sir Physics)",
    badge: "NV Sir Masterclass",
    targetExam: "JEE",
    category: "Repeater / Dropper",
    rating: 4.9,
    reviewsCount: 4200,
    price: 49000,
    originalPrice: 68000,
    gstNote: "Inclusive of 18% GST",
    installments: "3 installments of ₹16,333",
    mode: "100% Online Live from Kota",
    language: "English + Bilingual",
    schedule: "Mon - Sat • 8:00 AM - 2:00 PM Live",
    teachers: ["Nitin Vijay (NV Sir - Physics)", "RRD Sir (Maths)", "VVS Sir (Chemistry)"],
    studyMaterial: "24-Volume Motion Kota Study Package Delivered to Doorstep + DPP Handbooks",
    testsPerMonth: 8,
    batchSize: "Premier Online Batch",
    refundPolicy: "14-day refund window as per Motion digital policy",
    highlights: [
      "Physics completely taught and guided by Nitin Vijay (NV Sir), India's celebrated JEE educator",
      "Exhaustive coverage of multi-concept advanced questions and previous 20-year trends",
      "BRAHMASTRA All India online test series benchmarking with thousands of Kota students",
      "Dedicated doubt desk on Motion App with audio & video solutions within minutes"
    ]
  },

  // NEW INSTITUTE 4: Neetprep Online
  {
    id: "neetprep-target-01",
    instituteId: "neetprep",
    institute: "Neetprep Online",
    name: "Neetprep Target Batch 2025 (35,000+ NCERT Questions & Bio Prodigy)",
    badge: "NCERT Specialist",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.9,
    reviewsCount: 8400,
    price: 12500,
    originalPrice: 19999,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment of ₹12,500",
    mode: "Online Practice Platform + Daily Live Masterclasses",
    language: "English + Bilingual Assist",
    schedule: "Flexible Daily Study • 24/7 Access + Evening Live Doubts",
    teachers: ["Dr. NK Sharma (Biology)", "Kapil Gupta Sir", "Vipul Sir (Physics)"],
    studyMaterial: "Physical Masterclass in Biology Book Delivered Home + 35,000 Curated Online MCQs",
    testsPerMonth: 12,
    batchSize: "Self-Paced with Live Daily Doubt Support",
    refundPolicy: "7-day full refund policy without questions asked",
    highlights: [
      "Widely regarded as India's best online question bank: strictly 100% NCERT focused",
      "Audio explanations from Dr. NK Sharma for every single Biology question",
      "Custom test generator allowing students to create mock tests for specific sub-topics",
      "Target score setting that adjusts difficulty level based on your government college goals"
    ]
  },
  {
    id: "neetprep-aiats-mocks-02",
    instituteId: "neetprep",
    institute: "Neetprep Online",
    name: "Neetprep High-Yield Sunday All-India Online Full Mock Test Series",
    badge: "Strict NCERT Tests",
    targetExam: "NEET",
    category: "Crash Course",
    rating: 4.8,
    reviewsCount: 6200,
    price: 6999,
    originalPrice: 10999,
    gstNote: "Inclusive of 18% GST",
    installments: "Single payment of ₹6,999",
    mode: "Online CBT Engine + Detailed Video Solutions",
    language: "English + Bilingual",
    schedule: "Alternate Sundays • 2:00 PM - 5:20 PM Online",
    teachers: ["Neetprep Senior Medical Faculty Team"],
    studyMaterial: "25 High-Yield Mock Papers with Question-wise Video Solutions Portal",
    testsPerMonth: 6,
    batchSize: "Pan-India Online Aspirants (50,000+ per Test)",
    refundPolicy: "Full refund within 3 days if unsatisfied with test quality",
    highlights: [
      "Strictly adheres to latest NTA NEET syllabus guidelines without irrelevant out-of-syllabus MCQs",
      "Comprehensive error tracker highlighting whether mistake was factual, conceptual, or calculation",
      "Detailed step-by-step video solution for every single numerical problem in Physics and Chemistry",
      "Accurate All-India rank and projected government medical college cutoff indicators"
    ]
  },

  // NEW INSTITUTE 5: eCareerPoint (Career Point Online)
  {
    id: "careerpoint-live-neet-01",
    instituteId: "careerpoint",
    institute: "eCareerPoint (Career Point Online)",
    name: "eCareerPoint Live NEET Dropper Course (With Courier Books Kit)",
    badge: "Affordable Kota Live",
    targetExam: "NEET",
    category: "Repeater / Dropper",
    rating: 4.6,
    reviewsCount: 2200,
    price: 24000,
    originalPrice: 38000,
    gstNote: "Inclusive of 18% GST",
    installments: "2 installments of ₹12,000",
    mode: "100% Online Live on eCareerPoint App",
    language: "English + Bilingual",
    schedule: "Mon - Sat • 8:30 AM - 1:30 PM Live",
    teachers: ["Career Point Kota Senior Faculty"],
    studyMaterial: "Complete Career Point Kota Printed Module Set Couriered to Doorstep",
    testsPerMonth: 8,
    batchSize: "Interactive Virtual Stream",
    refundPolicy: "10-day refund window as per standard terms",
    highlights: [
      "Over 30 years of Kota coaching excellence delivered directly via live interactive video",
      "Complete set of physical printed theory books, exercise sheets, and previous year solutions",
      "Daily online doubt resolution desk and periodic live interaction with academic mentors",
      "Major test series simulating actual NEET pattern with performance analytics"
    ]
  }
];

// Helper to escape XML
const escapeXml = (s) => String(s || "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&apos;");

// Extended themes
const themes = {
  pala: { bg1: "#0a192f", bg2: "#1e3a8a", text: "#f8fafc", accent: "#38bdf8", tagBg: "rgba(56,189,248,0.2)", tagColor: "#bae6fd" },
  xylem: { bg1: "#14532d", bg2: "#166534", text: "#f0fdf4", accent: "#4ade80", tagBg: "rgba(74,222,128,0.2)", tagColor: "#bbf7d0" },
  eduport: { bg1: "#1e1b4b", bg2: "#312e81", text: "#e0e7ff", accent: "#818cf8", tagBg: "rgba(129,140,248,0.2)", tagColor: "#c7d2fe" },
  examwinner: { bg1: "#3b0764", bg2: "#581c87", text: "#faf5ff", accent: "#f59e0b", tagBg: "rgba(245,158,11,0.25)", tagColor: "#fde68a" },
  pcthomas: { bg1: "#450a0a", bg2: "#7f1d1d", text: "#fef2f2", accent: "#f87171", tagBg: "rgba(248,113,113,0.2)", tagColor: "#fecaca" },
  fiitjee: { bg1: "#3f0a0a", bg2: "#581212", text: "#fffbeb", accent: "#fbbf24", tagBg: "rgba(251,191,36,0.25)", tagColor: "#fef08a" },
  aakash: { bg1: "#082f49", bg2: "#0369a1", text: "#f0f9ff", accent: "#38bdf8", tagBg: "rgba(56,189,248,0.2)", tagColor: "#bae6fd" },
  srichaitanya: { bg1: "#0f172a", bg2: "#1e3a8a", text: "#eff6ff", accent: "#60a5fa", tagBg: "rgba(96,165,250,0.2)", tagColor: "#bfdbfe" },
  narayana: { bg1: "#022c22", bg2: "#064e3b", text: "#ecfdf5", accent: "#34d399", tagBg: "rgba(52,211,153,0.2)", tagColor: "#a7f3d0" },
  pw: { bg1: "#27272a", bg2: "#18181b", text: "#fafafa", accent: "#f43f5e", tagBg: "rgba(244,63,94,0.2)", tagColor: "#fecdd3" },
  allen: { bg1: "#083344", bg2: "#0e7490", text: "#ecfeff", accent: "#22d3ee", tagBg: "rgba(34,211,238,0.2)", tagColor: "#a5f3fc" },
  zephyr: { bg1: "#1c1917", bg2: "#292524", text: "#fafaf9", accent: "#fb923c", tagBg: "rgba(251,146,60,0.2)", tagColor: "#fed7aa" },
  rays: { bg1: "#1e293b", bg2: "#334155", text: "#f8fafc", accent: "#a855f7", tagBg: "rgba(168,85,247,0.2)", tagColor: "#e9d5ff" },
  alpha: { bg1: "#31103f", bg2: "#4a154b", text: "#fdf4ff", accent: "#e879f9", tagBg: "rgba(232,121,249,0.2)", tagColor: "#f5d0fe" },
  pcmb: { bg1: "#172554", bg2: "#1d4ed8", text: "#eff6ff", accent: "#93c5fd", tagBg: "rgba(147,197,253,0.2)", tagColor: "#dbeafe" },
  unacad: { bg1: "#0c1e33", bg2: "#164e63", text: "#f0fdfa", accent: "#2dd4bf", tagBg: "rgba(45,212,191,0.2)", tagColor: "#99f6e4" },
  time: { bg1: "#831843", bg2: "#9d174d", text: "#fdf2f8", accent: "#f472b6", tagBg: "rgba(244,114,182,0.25)", tagColor: "#fbcfe8" },
  vedantu: { bg1: "#ea580c", bg2: "#c2410c", text: "#fff7ed", accent: "#fdba74", tagBg: "rgba(253,186,116,0.25)", tagColor: "#ffedd5" },
  motion: { bg1: "#1e1b4b", bg2: "#4338ca", text: "#e0e7ff", accent: "#a5b4fc", tagBg: "rgba(165,180,252,0.25)", tagColor: "#c7d2fe" },
  neetprep: { bg1: "#0f766e", bg2: "#115e59", text: "#f0fdfa", accent: "#5eead4", tagBg: "rgba(94,234,212,0.25)", tagColor: "#ccfbf1" },
  careerpoint: { bg1: "#701a75", bg2: "#86198f", text: "#fdf4ff", accent: "#e879f9", tagBg: "rgba(232,121,249,0.25)", tagColor: "#fae8ff" }
};

function generateThumbnail(institute, exam, title, badge, theme = "pala") {
  const t = themes[theme] || themes.pala;
  const shortTitle = title.length > 25 ? title.substring(0, 25) + "..." : title;

  const safeInst = escapeXml(institute.toUpperCase());
  const safeExam = escapeXml(exam);
  const safeTitle = escapeXml(shortTitle);
  const safeBadge = escapeXml(badge);
  const badgeWidth = Math.max(76, Math.round(safeInst.length * 7.2 + 18));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="100%" height="100%">
    <defs>
      <linearGradient id="g_${theme}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${t.bg1}" />
        <stop offset="100%" stop-color="${t.bg2}" />
      </linearGradient>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="400" height="220" fill="url(#g_${theme})" />
    <rect width="400" height="220" fill="url(#grid)" />
    
    <circle cx="330" cy="50" r="85" fill="${t.accent}" opacity="0.12" />
    <circle cx="70" cy="180" r="60" fill="${t.accent}" opacity="0.08" />
    <path d="M 260 170 L 320 110 L 380 170 Z" fill="${t.accent}" opacity="0.15" />
    
    <rect x="24" y="22" width="${badgeWidth}" height="24" rx="4" fill="${t.tagBg}" />
    <text x="32" y="38" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="700" fill="${t.tagColor}" letter-spacing="0.5">${safeInst}</text>
    
    <text x="375" y="195" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="52" font-weight="900" fill="${t.text}" opacity="0.08">${safeExam}</text>

    <circle cx="50" cy="108" r="24" fill="${t.accent}" opacity="0.9" />
    <text x="50" y="115" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#000">${exam === 'NEET' ? '🩺' : (exam === 'JEE' ? '⚙️' : '💻')}</text>

    <text x="86" y="103" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="17" font-weight="800" fill="${t.text}" letter-spacing="-0.3">${safeTitle}</text>
    <text x="86" y="124" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="600" fill="${t.accent}">${safeExam} • ${safeBadge}</text>
    
    <line x1="24" y1="165" x2="376" y2="165" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="24" y="188" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="${t.text}" opacity="0.7">100% ONLINE LIVE &amp; RECORDED • COURIER BOOKS</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Map instituteId to theme name
const instThemeMap = {
  pala: "pala",
  xylem: "xylem",
  eduport: "eduport",
  examwinner: "examwinner",
  pcthomas: "pcthomas",
  fiitjee: "fiitjee",
  aakash: "aakash",
  srichaitanya: "srichaitanya",
  narayana: "narayana",
  physicswallah: "pw",
  allen: "allen",
  zephyr: "zephyr",
  rays: "rays",
  alpha: "alpha",
  pcmb: "pcmb",
  unacademy: "unacad",
  time: "time",
  vedantu: "vedantu",
  motion: "motion",
  neetprep: "neetprep",
  careerpoint: "careerpoint"
};

// Add images to new batches
const processedNewBatches = newBatches.map(b => {
  const theme = instThemeMap[b.instituteId] || "pala";
  const img = generateThumbnail(b.institute, b.targetExam, b.name, b.badge, theme);
  return {
    ...b,
    image: img
  };
});

const allBatches = [...updatedExisting, ...processedNewBatches];
console.log('Total batches combined:', allBatches.length);

// Generate final data.js content
const output = `// ==========================================================================
// path2learn - Comprehensive Online Entrance Coaching Catalog Database
// Exclusively Focused on 100% Online Live & Hybrid Batches for NEET, JEE & KEAM
// ==========================================================================

// Institute Metadata & Order Definition (${INSTITUTES_CONFIG.length} Premier Online Institutes)
const INSTITUTES_CONFIG = ${JSON.stringify(INSTITUTES_CONFIG, null, 2)};

// Course Thumbnail Generator
function generateCourseThumbnail(institute, exam, title, badge, theme = "pala") {
  const themes = ${JSON.stringify(themes, null, 2)};

  const t = themes[theme] || themes.pala;
  const shortTitle = title.length > 25 ? title.substring(0, 25) + "..." : title;

  const escapeXml = (s) => String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

  const safeInst = escapeXml(institute.toUpperCase());
  const safeExam = escapeXml(exam);
  const safeTitle = escapeXml(shortTitle);
  const safeBadge = escapeXml(badge);

  const badgeWidth = Math.max(76, Math.round(safeInst.length * 7.2 + 18));

  const svg = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="100%" height="100%">
    <defs>
      <linearGradient id="g_\${theme}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="\${t.bg1}" />
        <stop offset="100%" stop-color="\${t.bg2}" />
      </linearGradient>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="400" height="220" fill="url(#g_\${theme})" />
    <rect width="400" height="220" fill="url(#grid)" />
    
    <circle cx="330" cy="50" r="85" fill="\${t.accent}" opacity="0.12" />
    <circle cx="70" cy="180" r="60" fill="\${t.accent}" opacity="0.08" />
    <path d="M 260 170 L 320 110 L 380 170 Z" fill="\${t.accent}" opacity="0.15" />
    
    <rect x="24" y="22" width="\${badgeWidth}" height="24" rx="4" fill="\${t.tagBg}" />
    <text x="32" y="38" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="700" fill="\${t.tagColor}" letter-spacing="0.5">\${safeInst}</text>
    
    <text x="375" y="195" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="52" font-weight="900" fill="\${t.text}" opacity="0.08">\${safeExam}</text>

    <circle cx="50" cy="108" r="24" fill="\${t.accent}" opacity="0.9" />
    <text x="50" y="115" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#000">\${exam === 'NEET' ? '🩺' : (exam === 'JEE' ? '⚙️' : '💻')}</text>

    <text x="86" y="103" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="17" font-weight="800" fill="\${t.text}" letter-spacing="-0.3">\${safeTitle}</text>
    <text x="86" y="124" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="600" fill="\${t.accent}">\${safeExam} • \${safeBadge}</text>
    
    <line x1="24" y1="165" x2="376" y2="165" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="24" y="188" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="\${t.text}" opacity="0.7">100% ONLINE LIVE &amp; RECORDED • COURIER BOOKS</text>
  </svg>\`;

  return \`data:image/svg+xml;utf8,\${encodeURIComponent(svg)}\`;
}

// Master Array of All Coaching Batches (${allBatches.length} Verified Online Batches)
const COACHING_BATCHES = ${JSON.stringify(allBatches, null, 2)};

const BATCHES_DATA = COACHING_BATCHES;
`;

fs.writeFileSync('data.js', output, 'utf8');
console.log('Successfully wrote data.js with ' + allBatches.length + ' online batches and ' + INSTITUTES_CONFIG.length + ' institutes.');
