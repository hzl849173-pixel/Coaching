// Institute Metadata & Order Definition
const INSTITUTES_CONFIG = [
  {
    name: "Brilliant Study Centre Pala",
    shortCode: "PALA",
    location: "Pala, Kottayam (Kerala)",
    established: "1984",
    reputationTag: "Kerala Premier • Statewide Rank Standard",
    description: "The gold standard for Kerala repeaters and KEAM/NEET rank holders with demanding weekly model examinations."
  },
  {
    name: "Xylem Learning",
    shortCode: "XYLEM",
    location: "Kozhikode (Kerala)",
    established: "2020",
    reputationTag: "High Energy • Malayalam Medium Value",
    description: "Popular Kerala edtech platform offering engaging Malayalam classes, affordable pricing, and supportive community."
  },
  {
    name: "Physics Wallah (PW)",
    shortCode: "PW",
    location: "National / Kerala Malayalam Wing",
    established: "2020",
    reputationTag: "Lowest Price Champion • High DPP Density",
    description: "Budget powerhouse offering complete syllabus coverage, All-India rank benchmarking, and fast-paced problem solving."
  },
  {
    name: "Allen Digital",
    shortCode: "ALLEN",
    location: "Kota (Rajasthan) / National",
    established: "1988",
    reputationTag: "Kota Standard • Rigorous Advanced Level",
    description: "National benchmark in academic rigor, comprehensive Kota study modules, and renowned Leader Test Series."
  },
  {
    name: "PCMB Entrance Coaching",
    shortCode: "PCMB",
    location: "Thrissur & Kochi (Kerala)",
    established: "1998",
    reputationTag: "Intensive Repeaters • Kerala Rank Legacy",
    description: "Specialized Kerala medical and engineering coaching institute renowned for rigorous problem sessions in central Kerala."
  },
  {
    name: "Zephyr Entrance Coaching",
    shortCode: "ZEPHYR",
    location: "Trivandrum & Ernakulam (Kerala)",
    established: "1994",
    reputationTag: "Personal Attention • 2-Way Voice Doubts",
    description: "Trusted 30-year legacy in South Kerala with smaller virtual batch sizes and direct faculty interaction."
  },
  {
    name: "Rays Edutech Kerala",
    shortCode: "RAYS",
    location: "Calicut, Malabar (Kerala)",
    established: "2000",
    reputationTag: "Malabar Medical Focus • NCERT Line-by-Line",
    description: "Respected Malabar medical coaching institute renowned for deep NCERT drilling for NEET 650+ aspirants."
  },
  {
    name: "Unacademy",
    shortCode: "UNACAD",
    location: "National & Kerala Wing",
    established: "2015",
    reputationTag: "Flexible Multi-Educator Platform",
    description: "Live streaming platform allowing students to choose between different Malayalam and English educators."
  }
];

// Comprehensive Database of Online Batches (24 Detailed Batches)
const BATCHES_DATA = [
  // --- BRILLIANT STUDY CENTRE PALA ---
  {
    id: "brilliant-neet-repeater",
    name: "NEET Repeaters Online (Medical Intensive)",
    institute: "Brilliant Study Centre Pala",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala & National",
    language: "Malayalam + English (Bilingual)",
    price: 36000,
    originalPrice: 42000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Up to 100% concession based on previous NEET score / Screening test",
    durationMonths: 10,
    schedule: "Daily 6 hours (Morning 8:00 AM - 1:30 PM & Doubt hour)",
    lecturesFormat: "Live streaming with permanent recorded backup on Brilliant App",
    studyMaterial: "Hardcopy physical books (18 modules dispatched via speed post to home)",
    doubtClearing: "Daily 1-hour live subject-wise doubt clearing sessions + App doubt forum",
    testSeries: "Brilliant Model Exams (Weekly Unit Tests + 25+ Full Length NTA pattern CBT)",
    appPlatform: "Brilliant Pala Student Portal & Mobile App",
    mentorSupport: "Assigned batch mentor with monthly parent-teacher tele-conference",
    refundPolicy: "Pro-rata refund deduction within first 14 days",
    rating: 4.8,
    reviewsCount: 382,
    badge: "Kerala Gold Standard",
    highlights: [
      "Demanding weekly model exams with statewide rank benchmarking among 25k+ students",
      "High-yield question banks specifically tuned to past 10-year NEET trends",
      "Disciplined attendance monitoring and weekly SMS alerts to parents"
    ],
    cons: [
      "Rigid daily schedule with homework verification",
      "Higher fee tier compared to national digital platforms"
    ]
  },
  {
    id: "brilliant-jee-repeaters",
    name: "JEE (Main & Advanced) Residential / Online Hybrid",
    institute: "Brilliant Study Centre Pala",
    category: "Repeater / Dropper",
    targetExam: "JEE Main & Advanced",
    stateFocus: "Kerala & National",
    language: "Malayalam + English",
    price: 42000,
    originalPrice: 48000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Significant fee waiver for JEE Main 90+ percentile holders",
    durationMonths: 10,
    schedule: "Daily 6.5 hours (Classroom stream 8:30 AM - 3:30 PM)",
    lecturesFormat: "Direct high-definition broadcast of Pala campus classrooms",
    studyMaterial: "Complete 24-volume advanced JEE theory and problem workbook box set",
    doubtClearing: "Designated faculty doubt desks with scheduled Google Meet slots",
    testSeries: "Brilliant CBT Portal simulating actual JEE NTA computer terminal layout",
    appPlatform: "Brilliant E-Learning Desktop & Android Application",
    mentorSupport: "Senior faculty guidance, weekly marks review, KEAM option guidance",
    refundPolicy: "Deduction based on days completed within first 10 days",
    rating: 4.8,
    reviewsCount: 295,
    badge: "Top KEAM & JEE Ranks",
    highlights: [
      "Produces the overwhelming majority of top KEAM and JEE rankers in Kerala",
      "Maths and Physics problem sets strictly tailored to Advanced difficulty",
      "Rigorous exam simulator matches exact NTA keyboard and mouse behavior"
    ],
    cons: [
      "Intensive workload can overwhelm students without strong base fundamentals"
    ]
  },
  {
    id: "brilliant-keam-crash",
    name: "KEAM Fast-Track Engineering Crash Batch",
    institute: "Brilliant Study Centre Pala",
    category: "Crash Course",
    targetExam: "KEAM",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 14000,
    originalPrice: 18000,
    gstIncluded: true,
    scholarshipAvailable: false,
    scholarshipDetails: "Standard early-bird discount applies",
    durationMonths: 3,
    schedule: "Daily 5 hours intensive problem sprint (9:00 AM - 2:00 PM)",
    lecturesFormat: "Live problem-solving lectures focused on KEAM 10-year recurring patterns",
    studyMaterial: "KEAM Formula Compendium & 15 Full-Length Practice Test Papers",
    doubtClearing: "Live teacher chat + instant answer keys with detailed video solutions",
    testSeries: "Daily timed tests + 10 State-wide Mega Mock KEAM CBT simulations",
    appPlatform: "Brilliant E-Learning Portal",
    mentorSupport: "KEAM Rank predictor & college option counseling (CET Trivandrum / TKM)",
    refundPolicy: "Non-refundable after 3 days of batch commencement",
    rating: 4.7,
    reviewsCount: 190,
    badge: "Speed & Shortcut Specialist",
    highlights: [
      "Designed specifically for KEAM speed (120 questions in 150 mins)",
      "High accuracy calculation shortcuts without electronic calculators",
      "Statewide rank predictor calibrated to past 5 years of KEAM cutoffs"
    ],
    cons: [
      "Fast pace requires prior completion of basic Plus Two syllabus"
    ]
  },
  {
    id: "brilliant-plus-one-integrated",
    name: "Plus One Two-Year Integrated Medical (Online)",
    institute: "Brilliant Study Centre Pala",
    category: "Class 11 Two-Year",
    targetExam: "NEET",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 52000,
    originalPrice: 60000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Concessions based on SSLC / Class 10 Board exam GPA",
    durationMonths: 24,
    schedule: "Evenings (5:30 PM - 8:30 PM) + Sunday full-day masterclasses",
    lecturesFormat: "Live evening stream designed to complement school attendance",
    studyMaterial: "Complete 2-year box set of printed theory modules and NCERT maps",
    doubtClearing: "Weekend faculty doubt counters + mobile app Q&A board",
    testSeries: "Fortnightly unit tests synchronized with DHSE Kerala school exam chapters",
    appPlatform: "Brilliant Pala Student Portal",
    mentorSupport: "Dedicated student counselor for academic balance between school and entrance",
    refundPolicy: "Pro-rated refund policy within first 30 days",
    rating: 4.6,
    reviewsCount: 210,
    badge: "Long-Term Foundation",
    highlights: [
      "Paces the massive NEET syllabus smoothly over 2 full academic years",
      "Ensures board marks safety alongside high-difficulty entrance coaching",
      "Builds solid physical chemistry and mechanics fundamentals from Class 11"
    ],
    cons: [
      "Requires consistent evening dedication alongside regular school work"
    ]
  },

  // --- XYLEM LEARNING ---
  {
    id: "xylem-yodha-neet",
    name: "Yodha NEET Repeater Batch 2026",
    institute: "Xylem Learning",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala State Focus",
    language: "Malayalam Medium (Manglish)",
    price: 9999,
    originalPrice: 15000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Discount based on Class 12 board marks and early bird coupon",
    durationMonths: 11,
    schedule: "Daily 5 hours (Evening 4:30 PM - 9:30 PM)",
    lecturesFormat: "High-energy Live interactive classes on Xylem Learning App",
    studyMaterial: "Printed Xylem Concept Modules & Workbooks delivered via Courier",
    doubtClearing: "In-class chat doubt clearance + Dedicated Telegram doubt groups with faculty",
    testSeries: "Weekly Sunday Online Tests + Statewide Mega Mock Tests",
    appPlatform: "Xylem Learning App (Android / iOS / Web browser)",
    mentorSupport: "Academic counselors available on phone + regular motivational sessions",
    refundPolicy: "No questions asked 7-day refund policy",
    rating: 4.6,
    reviewsCount: 640,
    badge: "Best Value for Kerala",
    highlights: [
      "Affordable pricing with full Malayalam explanations by popular teachers",
      "Engaging teaching style, high energy and student-friendly approach",
      "Strong community spirit and motivational support for repeaters"
    ],
    cons: [
      "Large batch sizes can make individual in-class doubt queries fast-moving",
      "Test difficulty slightly more moderate compared to traditional Pala series"
    ]
  },
  {
    id: "xylem-agni-plus-two-jee",
    name: "Agni Class 12 + JEE / KEAM Foundation",
    institute: "Xylem Learning",
    category: "Class 12 Regular",
    targetExam: "JEE Main & KEAM",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 11999,
    originalPrice: 18000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Discounts for SSLC / Class 10 top scorers",
    durationMonths: 12,
    schedule: "Evenings (6:00 PM - 9:00 PM) + Weekend intensive masterclasses",
    lecturesFormat: "Live evening stream designed not to clash with regular school hours",
    studyMaterial: "Printed Board Exam revision guides + Entrance question banks",
    doubtClearing: "Subject doubt threads & weekly Sunday live recap sessions",
    testSeries: "Bi-weekly chapter tests + Kerala Higher Secondary Model Board exams",
    appPlatform: "Xylem App (Mobile, Tablet, Desktop)",
    mentorSupport: "Academic coordinator assigned per school district",
    refundPolicy: "10-day conditional refund",
    rating: 4.6,
    reviewsCount: 420,
    badge: "Board + Entrance Balance",
    highlights: [
      "Synchronized with Kerala DHSE Plus Two syllabus while teaching KEAM shortcuts",
      "Focus on school marks safety alongside engineering entrance preparation",
      "Very approachable faculty with relatable explanations in Malayalam"
    ],
    cons: [
      "Not as deeply focused on JEE Advanced level problems as specialized batches"
    ]
  },
  {
    id: "xylem-target-keam-fastrack",
    name: "Target KEAM 2026 Engineering Batch",
    institute: "Xylem Learning",
    category: "Repeater / Dropper",
    targetExam: "KEAM",
    stateFocus: "Kerala State Focus",
    language: "Malayalam Medium",
    price: 7999,
    originalPrice: 12000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Special discount for KEAM 2025 repeaters",
    durationMonths: 8,
    schedule: "Daily 4 hours (Morning 9:30 AM - 1:30 PM)",
    lecturesFormat: "Dedicated KEAM curriculum live stream focusing on Maths & Physics speed",
    studyMaterial: "Xylem KEAM Problem Bank with 3,000+ chapterwise MCQs",
    doubtClearing: "Daily Telegram live voice doubt room with mentor engineers",
    testSeries: "Weekly KEAM pattern computer based mock exams",
    appPlatform: "Xylem Learning App",
    mentorSupport: "Engineering college branch preference counseling",
    refundPolicy: "7-day standard refund",
    rating: 4.5,
    reviewsCount: 310,
    badge: "KEAM State Seat Specialist",
    highlights: [
      "Targets Kerala government college engineering admissions (CET, GECB, GECT)",
      "Mathematics problem-solving drills with non-calculator calculation methods",
      "Affordable under ₹8,000 price point with printed book shipment"
    ],
    cons: [
      "Not suitable for students whose primary goal is JEE Advanced"
    ]
  },
  {
    id: "xylem-prarambh-class11",
    name: "Prarambh Two-Year NEET Foundation (Class 11)",
    institute: "Xylem Learning",
    category: "Class 11 Two-Year",
    targetExam: "NEET",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 16999,
    originalPrice: 24000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "SSLC merit discount available",
    durationMonths: 24,
    schedule: "3 days a week after school (6:00 PM - 8:30 PM)",
    lecturesFormat: "High-definition live interactive sessions with animations and 3D biology models",
    studyMaterial: "Printed comprehensive Class 11 & 12 modules delivered yearly",
    doubtClearing: "In-class live polls + Sunday dedicated doubt desks",
    testSeries: "Monthly chapterwise assessments with parent progress report card",
    appPlatform: "Xylem App",
    mentorSupport: "District academic mentor assigned for regular check-ins",
    refundPolicy: "14-day pro-rata refund",
    rating: 4.7,
    reviewsCount: 280,
    badge: "Friendly Concept Buildup",
    highlights: [
      "Zero-pressure concept buildup that makes biology and chemistry visual and intuitive",
      "Teachers speak relatable Malayalam which eases the transition from Class 10",
      "Covers state syllabus school exams along with foundational entrance questions"
    ],
    cons: [
      "Moderate pace may feel slow for extremely advanced problem solvers"
    ]
  },

  // --- PHYSICS WALLAH (PW) ---
  {
    id: "pw-yakeen-neet-malayalam",
    name: "Yakeen NEET Malayalam 2026",
    institute: "Physics Wallah (PW)",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala (Malayalam Faculty)",
    language: "Malayalam + English",
    price: 4999,
    originalPrice: 7999,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "PW SAT scholarship test up to 90% fee waiver",
    durationMonths: 10,
    schedule: "Daily 4.5 hours (Recorded + Scheduled Live sessions with planner)",
    lecturesFormat: "Live & Recorded video lectures with dual audio speed and download option",
    studyMaterial: "Digital PDF Notes & DPPs included (Printed books optional addon for ₹1,800)",
    doubtClearing: "AI-assisted 'Saarthi' doubt engine + 24/7 peer community resolution",
    testSeries: "All-India Test Series (AITS) every alternate Sunday with All-India Rank",
    appPlatform: "PW Mobile App & Website (Low-bandwidth optimization)",
    mentorSupport: "Available as paid add-on (PW Saarthi personal mentor)",
    refundPolicy: "Standard PW 5-day return policy",
    rating: 4.5,
    reviewsCount: 1120,
    badge: "Lowest Price Champion",
    highlights: [
      "Extremely affordable with massive question bank and DPP sheets",
      "All-India ranking competition with hundreds of thousands of aspirants",
      "Top-tier physics and chemistry faculty with concise notes"
    ],
    cons: [
      "Printed books must be purchased as an extra addon",
      "Doubt clearing is mostly automated/digital unless you buy Saarthi"
    ]
  },
  {
    id: "pw-lakshya-jee-kerala",
    name: "Lakshya JEE Class 12 (English/Malayalam Notes)",
    institute: "Physics Wallah (PW)",
    category: "Class 12 Regular",
    targetExam: "JEE Main & Advanced",
    stateFocus: "Kerala & National",
    language: "English / Hinglish (Notes in English)",
    price: 5499,
    originalPrice: 8500,
    gstIncluded: true,
    scholarshipAvailable: false,
    scholarshipDetails: "Flat discounted launch price across India",
    durationMonths: 11,
    schedule: "Daily 3 hours after school (5:00 PM - 8:30 PM)",
    lecturesFormat: "Live class with full chat interaction, poll quizzes, and offline downloads",
    studyMaterial: "Comprehensive PDF question banks, Formula sheets, Mindmaps",
    doubtClearing: "PW Doubt engine with video solutions for 85% of textbook problems",
    testSeries: "Fortnightly test series with detailed graphical analytics",
    appPlatform: "Physics Wallah App & Web Portal",
    mentorSupport: "Automated progress tracking on mobile app",
    refundPolicy: "Standard 7-day refund policy",
    rating: 4.6,
    reviewsCount: 950,
    badge: "High Problem Density",
    highlights: [
      "Top-tier problem solving speed and shortcut methods for JEE Main",
      "Includes free access to Khazana recorded lectures of legendary teachers",
      "Extremely affordable for Class 12 students managing school fees"
    ],
    cons: [
      "Requires high self-discipline as there is no daily follow-up phone call"
    ]
  },
  {
    id: "pw-prayas-jee-droppers",
    name: "Prayas JEE 1.0 Dropper Batch (National)",
    institute: "Physics Wallah (PW)",
    category: "Repeater / Dropper",
    targetExam: "JEE Main & Advanced",
    stateFocus: "National",
    language: "English / Hinglish",
    price: 5199,
    originalPrice: 8000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "PW scholarship test applicable",
    durationMonths: 10,
    schedule: "Daily 5 hours (Morning 8:30 AM - 1:45 PM)",
    lecturesFormat: "High-intensity live problem solving directly by Kota's premier PW faculty",
    studyMaterial: "Digital practice problems with video solutions (Books optional)",
    doubtClearing: "Live doubt engine with video solutions for textbook questions",
    testSeries: "Prayas All-India Test Series with percentile benchmarking",
    appPlatform: "PW App & Desktop Web",
    mentorSupport: "Automated test analytics & weakness radar",
    refundPolicy: "Standard PW 5-day return policy",
    rating: 4.6,
    reviewsCount: 1450,
    badge: "National Heavyweight",
    highlights: [
      "Legendary national teachers for Physical Chemistry and Calculus",
      "Huge student volume gives realistic percentile benchmarking",
      "Unbeatable affordability for full-year repeater preparation"
    ],
    cons: [
      "Teaching is in Hinglish/English without Malayalam explanation"
    ]
  },
  {
    id: "pw-arjuna-neet-class11",
    name: "Arjuna NEET 1.0 (Class 11 Two-Year)",
    institute: "Physics Wallah (PW)",
    category: "Class 11 Two-Year",
    targetExam: "NEET",
    stateFocus: "National",
    language: "English / Hinglish",
    price: 4899,
    originalPrice: 7500,
    gstIncluded: true,
    scholarshipAvailable: false,
    scholarshipDetails: "Affordable uniform launch pricing",
    durationMonths: 24,
    schedule: "Daily 3 hours in late afternoon",
    lecturesFormat: "Live interactive lectures with revision summary notes",
    studyMaterial: "PDF Daily Practice Problem (DPP) sets with video solutions",
    doubtClearing: "Doubt portal with 24-hour peer and faculty responses",
    testSeries: "Weekly Sunday tests on NTA pattern",
    appPlatform: "PW App & Web",
    mentorSupport: "App performance graph",
    refundPolicy: "5-day refund window",
    rating: 4.5,
    reviewsCount: 890,
    badge: "Budget 2-Year Program",
    highlights: [
      "Provides complete 2-year preparation at less than the cost of 1 month of offline tuition",
      "Includes animated anatomy and cell biology visuals",
      "Allows unlimited replay of all recorded classes"
    ],
    cons: [
      "Requires student to print their own physical worksheets or use a tablet"
    ]
  },

  // --- ALLEN DIGITAL ---
  {
    id: "allen-leader-neet-digital",
    name: "Leader Online NEET Course (Droppers)",
    institute: "Allen Digital",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "National",
    language: "English / Hinglish",
    price: 49500,
    originalPrice: 58000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "TALLENTEX and Allen scholarship exam up to 90% discount",
    durationMonths: 11,
    schedule: "Daily 5 hours (Morning or Evening slots available)",
    lecturesFormat: "Live interactive classrooms directly by senior Kota faculty",
    studyMaterial: "Comprehensive Allen Kota printed modules dispatched directly to address",
    doubtClearing: "Live audio doubt asking in class + Allen Doubt App with subject experts",
    testSeries: "Allen Leader Test Series (OLTS) with All-India percentile benchmark",
    appPlatform: "Allen Digital App & Web Portal",
    mentorSupport: "Dedicated student success mentor & regular psychological counseling",
    refundPolicy: "Detailed Allen institutional refund rule (sliding scale by month)",
    rating: 4.7,
    reviewsCount: 840,
    badge: "Kota Gold Standard",
    highlights: [
      "Gold-standard curriculum and pedagogy trusted nationally for decades",
      "Allen Test Series is considered closest in difficulty to the real NEET exam",
      "High quality NCERT line-by-line bio and inorganic chemistry materials"
    ],
    cons: [
      "Language is pure English or Hindi; no Malayalam explanation",
      "Expensive fee tier"
    ]
  },
  {
    id: "allen-achiever-jee-adv",
    name: "Achiever Online Course for JEE Advanced (Droppers)",
    institute: "Allen Digital",
    category: "Repeater / Dropper",
    targetExam: "JEE Main & Advanced",
    stateFocus: "National",
    language: "English (Pure)",
    price: 54000,
    originalPrice: 62000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Merit concession for JEE Main 95+ percentile holders",
    durationMonths: 10,
    schedule: "Daily 5.5 hours (8:30 AM - 2:00 PM)",
    lecturesFormat: "Kota star faculty live classroom direct stream",
    studyMaterial: "Allen Kota Advanced modules, Race sheets, and Target problem sets",
    doubtClearing: "Dedicated 1-on-1 virtual doubt appointments with senior HODs",
    testSeries: "Allen Leader Computer Based Test Series with All-India rank predictor",
    appPlatform: "Allen Digital App",
    mentorSupport: "Assigned senior academic counselor",
    refundPolicy: "Standard Allen refund guidelines",
    rating: 4.8,
    reviewsCount: 610,
    badge: "Elite Advanced Prep",
    highlights: [
      "Highest quality conceptual problem selection for top 500 JEE Advanced ranks",
      "Challenging multi-concept physics and physical chemistry problems",
      "Pure English batch available for South Indian students"
    ],
    cons: [
      "Demands high mathematical aptitude from day one"
    ]
  },
  {
    id: "allen-nurture-jee-class11",
    name: "Nurture Two-Year Course for JEE (Class 11)",
    institute: "Allen Digital",
    category: "Class 11 Two-Year",
    targetExam: "JEE Main & Advanced",
    stateFocus: "National",
    language: "English (Pure)",
    price: 72000,
    originalPrice: 85000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Tallentex scholarship up to 90%",
    durationMonths: 24,
    schedule: "3 days a week (5:30 PM - 8:45 PM)",
    lecturesFormat: "Structured two-year pedagogical path matching Kota classroom standards",
    studyMaterial: "Complete printed set of 32 Kota theory modules and workbook volumes",
    doubtClearing: "Audio doubt asking during live class + Allen Doubt app",
    testSeries: "Fortnightly unit tests + Major tests at year end",
    appPlatform: "Allen Digital App",
    mentorSupport: "Dedicated student success mentor with quarterly parent meetings",
    refundPolicy: "Pro-rata refund on sliding scale",
    rating: 4.7,
    reviewsCount: 430,
    badge: "Premium 2-Year Program",
    highlights: [
      "Builds deep conceptual roots in mechanics, electrodynamics, and calculus",
      "National peer group interaction pushing students to stay at peak performance",
      "Unmatched material quality that eliminates the need for external reference books"
    ],
    cons: [
      "Highest fee among all online courses"
    ]
  },

  // --- PCMB ENTRANCE COACHING ---
  {
    id: "pcmb-repeater-medical",
    name: "PCMB Elite Medical Repeater Batch 2026",
    institute: "PCMB Entrance Coaching",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala (Central Kerala Focus)",
    language: "Malayalam + English",
    price: 32000,
    originalPrice: 38000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "PCMB Talent Search Exam fee concessions",
    durationMonths: 10,
    schedule: "Daily 5.5 hours (Morning 8:30 AM - 2:00 PM)",
    lecturesFormat: "High-definition studio stream with Malayalam explanations and English notes",
    studyMaterial: "PCMB 16-book NCERT-centric theory and past 15-year question compendium",
    doubtClearing: "Daily 1-hour live teacher doubt rooms with screen sharing",
    testSeries: "Weekly Sunday model exams simulating NTA NEET OMR and CBT formats",
    appPlatform: "PCMB Learning App & Web Portal",
    mentorSupport: "Small virtual cohorts (50 students) with assigned faculty mentor",
    refundPolicy: "Pro-rata refund within 14 days",
    rating: 4.6,
    reviewsCount: 220,
    badge: "Disciplined Repeaters Focus",
    highlights: [
      "Trusted central Kerala legacy in Thrissur, Ernakulam, and Palakkad",
      "Disciplined daily homework tracking with score updates sent to parents",
      "Strong emphasis on Organic Chemistry reaction mechanisms and Biology NCERT lines"
    ],
    cons: [
      "Lacks the massive marketing visibility of digital edtech platforms"
    ]
  },
  {
    id: "pcmb-keam-speed-sprint",
    name: "PCMB KEAM Engineering Sprint",
    institute: "PCMB Entrance Coaching",
    category: "Repeater / Dropper",
    targetExam: "KEAM",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 12500,
    originalPrice: 16000,
    gstIncluded: true,
    scholarshipAvailable: false,
    scholarshipDetails: "Direct admission flat rate",
    durationMonths: 6,
    schedule: "Daily 4.5 hours (Evening 4:00 PM - 8:30 PM)",
    lecturesFormat: "Live problem-solving sessions tuned to KEAM Mathematics calculation stamina",
    studyMaterial: "PCMB KEAM Question Compendium with 4,000+ past year questions",
    doubtClearing: "Direct WhatsApp faculty doubt hotline + live doubt hour",
    testSeries: "Bi-weekly full-length KEAM simulator exams",
    appPlatform: "PCMB Portal",
    mentorSupport: "Kerala engineering admissions counseling",
    refundPolicy: "7-day standard refund",
    rating: 4.5,
    reviewsCount: 160,
    badge: "Calculations Master",
    highlights: [
      "Intensive focus on KEAM Mathematics Paper (120 marks) with non-calculator shortcuts",
      "Past 12-year question trends broken down topic by topic",
      "Approachable teachers who know Kerala state syllabus nuances"
    ],
    cons: [
      "Focused specifically on KEAM rather than national JEE"
    ]
  },

  // --- ZEPHYR ENTRANCE COACHING ---
  {
    id: "zephyr-target-neet-kerala",
    name: "Target NEET One-Year Online Repeater",
    institute: "Zephyr Entrance Coaching",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 24000,
    originalPrice: 30000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Special discount for government school students & repeaters",
    durationMonths: 10,
    schedule: "Daily 5 hours (9:00 AM - 2:00 PM)",
    lecturesFormat: "Interactive live classes with two-way mic access for doubts",
    studyMaterial: "Printed comprehensive Zephyr module package delivered via post",
    doubtClearing: "Direct mic interaction with teachers during the last 20 minutes",
    testSeries: "Weekly OMR-simulated offline test courier or online timed exam",
    appPlatform: "Zephyr Learning App",
    mentorSupport: "Small batch size (60 students per batch) with direct teacher access",
    refundPolicy: "14-day standard refund scheme",
    rating: 4.4,
    reviewsCount: 180,
    badge: "Personal Attention",
    highlights: [
      "Smaller virtual batch size allowing direct mic questions to teachers",
      "Solid 30-year legacy in Trivandrum and Ernakulam coaching circles",
      "Balanced pace that suits students needing fundamental concept buildup"
    ],
    cons: [
      "App technology is simpler and less gamified than national edtech platforms"
    ]
  },
  {
    id: "zephyr-apex-jee-batch",
    name: "Apex JEE Main & Advanced Engineering Batch",
    institute: "Zephyr Entrance Coaching",
    category: "Class 12 Regular",
    targetExam: "JEE Main & KEAM",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 22000,
    originalPrice: 28000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Merit concession for Class 10 top marks",
    durationMonths: 11,
    schedule: "Evenings (5:30 PM - 8:30 PM) + Sunday masterclass",
    lecturesFormat: "Live broadcast with interactive whiteboard notes saved automatically",
    studyMaterial: "Zephyr Engineering module series delivered via courier",
    doubtClearing: "Voice chat doubt desks twice a week",
    testSeries: "Weekly Chapter exams + NTA style CBT terminal mocks",
    appPlatform: "Zephyr App",
    mentorSupport: "Weekly academic phone calls with parents",
    refundPolicy: "10-day refund window",
    rating: 4.4,
    reviewsCount: 140,
    badge: "Balanced & Supportive",
    highlights: [
      "Careful balance between school Plus Two syllabus and JEE Main problem sets",
      "Approachability of veteran teachers who mentor students personally",
      "Reliable track record in KEAM top ranks across South Kerala"
    ],
    cons: [
      "Does not focus as heavily on top 500 JEE Advanced ranks"
    ]
  },

  // --- RAYS EDUTECH KERALA ---
  {
    id: "rays-repeater-medical",
    name: "Intensive NEET Repeater Stream (Calicut)",
    institute: "Rays Edutech Kerala",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala (Malabar Focus)",
    language: "Malayalam + English",
    price: 28000,
    originalPrice: 35000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Rays MedQuest merit scholarship test discount",
    durationMonths: 10,
    schedule: "Daily 5.5 hours (8:45 AM - 2:30 PM)",
    lecturesFormat: "Live studio broadcast with interactive digital whiteboard",
    studyMaterial: "12-book NCERT-mapped question bank series delivered at home",
    doubtClearing: "Dedicated daily 4:00 PM - 6:00 PM live doubt room",
    testSeries: "Weekly Unit tests + Grand Revision tests before NEET exam",
    appPlatform: "Rays Digital Learning Portal",
    mentorSupport: "Weekly counselor calls and score tracking for weak subjects",
    refundPolicy: "Pro-rated refund within first week",
    rating: 4.3,
    reviewsCount: 140,
    badge: "Strong Biology & Chemistry Focus",
    highlights: [
      "Deeply respected in North Kerala / Malabar region with veteran teachers",
      "Intensive NCERT line-by-line drilling for Biology (360/360 target)",
      "Approachable faculty who teach in comfortable Malayalam"
    ],
    cons: [
      "Physics department pace can feel fast for below-average students"
    ]
  },
  {
    id: "rays-plus-two-bridge",
    name: "Class 12 Medical Bridge Program",
    institute: "Rays Edutech Kerala",
    category: "Class 12 Regular",
    targetExam: "NEET",
    stateFocus: "Kerala State Focus",
    language: "Malayalam Medium",
    price: 18500,
    originalPrice: 24000,
    gstIncluded: true,
    scholarshipAvailable: false,
    scholarshipDetails: "Early admission rate",
    durationMonths: 11,
    schedule: "Evenings (6:00 PM - 8:30 PM) 4 days a week",
    lecturesFormat: "Live studio sessions focusing on NCERT line-by-line decoding",
    studyMaterial: "Printed revision sheets + NCERT highlight booklets",
    doubtClearing: "Telegram doubt counter with faculty",
    testSeries: "Bi-weekly unit exams",
    appPlatform: "Rays App",
    mentorSupport: "Monthly phone review",
    refundPolicy: "7-day pro-rata refund",
    rating: 4.4,
    reviewsCount: 110,
    badge: "NCERT Mastery",
    highlights: [
      "Helps regular Plus Two state syllabus students master tricky NCERT lines",
      "Ideal foundation for students planning to give NEET without taking a drop year",
      "Experienced Calicut teachers who simplify organic chemistry reactions"
    ],
    cons: [
      "Smaller test series pool compared to statewide institutions"
    ]
  },

  // --- UNACADEMY ---
  {
    id: "unacademy-kerala-plus-neet",
    name: "Unacademy Plus Kerala NEET 1-Year",
    institute: "Unacademy",
    category: "Repeater / Dropper",
    targetExam: "NEET",
    stateFocus: "Kerala State Focus",
    language: "Malayalam + English",
    price: 18999,
    originalPrice: 32000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "UNSAT scholarship test up to 100% scholarship",
    durationMonths: 12,
    schedule: "Flexible scheduling with multiple educators per subject",
    lecturesFormat: "Unlimited live classes by choice of multiple Kerala top educators",
    studyMaterial: "Comprehensive digital notes + optional Unacademy books subscription",
    doubtClearing: "Raise-a-Hand live voice chat feature during class + Ask-A-Doubt app tool",
    testSeries: "Weekly mock tests with state-level benchmarking",
    appPlatform: "Unacademy Learning App (Mobile / Tablet / Web)",
    mentorSupport: "Available with Iconic subscription tier",
    refundPolicy: "No refund once subscription is activated",
    rating: 4.4,
    reviewsCount: 310,
    badge: "Flexible Educator Choice",
    highlights: [
      "If you don't like one teacher's style, switch to another batch at zero extra cost",
      "Interactive 'Raise a Hand' feature lets you talk directly to teachers in class",
      "Huge repository of past 5 years' recorded lectures"
    ],
    cons: [
      "Requires subscription literacy; too many options can confuse beginners",
      "Strict no-refund policy"
    ]
  },
  {
    id: "unacademy-phoenix-jee",
    name: "Phoenix JEE Fast-Track Revision (Kerala & National)",
    institute: "Unacademy",
    category: "Class 12 Regular",
    targetExam: "JEE Main & Advanced",
    stateFocus: "National",
    language: "English / Hinglish",
    price: 14999,
    originalPrice: 26000,
    gstIncluded: true,
    scholarshipAvailable: true,
    scholarshipDetails: "Special discount for board exam students",
    durationMonths: 6,
    schedule: "Daily 4 hours intensive crash modules",
    lecturesFormat: "Live problem solving masterclasses with interactive chat and leaderboards",
    studyMaterial: "Digital formula maps and 2,500 curated practice MCQs",
    doubtClearing: "Ask-a-Doubt AI tool + Live doubt sessions",
    testSeries: "Weekly All-India test series with detailed percentile analytics",
    appPlatform: "Unacademy App & Web",
    mentorSupport: "In-app automated mentor progress tracker",
    refundPolicy: "Non-refundable subscription",
    rating: 4.5,
    reviewsCount: 240,
    badge: "High-Paced Revision",
    highlights: [
      "Rapid syllabus coverage with focus on high-weightage topics",
      "Live class gamified leaderboards keeping motivation high",
      "Direct practice with recent 3-year JEE Main question papers"
    ],
    cons: [
      "Pace can be too quick for students with conceptual gaps"
    ]
  }
];
