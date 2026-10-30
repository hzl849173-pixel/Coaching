// ==========================================================================
// path2learn - Comprehensive Institute & Course Catalog Database
// Kerala & National Online Batches for NEET, JEE Main & Advanced, and KEAM
// ==========================================================================

// Institute Metadata & Order Definition (16 Premier Institutes)
const INSTITUTES_CONFIG = [
  {
    "id": "pala",
    "name": "Brilliant Study Centre Pala",
    "shortCode": "PALA",
    "location": "Pala, Kottayam, Ernakulam, Thrissur, Kozhikode, Trivandrum",
    "established": "1984",
    "reputationTag": "Kerala Premier • Statewide Rank Benchmark",
    "description": "The gold standard for Kerala repeaters and KEAM/NEET rank holders with demanding weekly model examinations and statewide rank lists."
  },
  {
    "id": "xylem",
    "name": "Xylem Learning",
    "shortCode": "XYLEM",
    "location": "Kozhikode, Kochi, Trivandrum, Thrissur (Kerala)",
    "established": "2020",
    "reputationTag": "High Energy • Malayalam Medium Value",
    "description": "Kerala's fastest growing edtech platform offering engaging Malayalam classes, affordable pricing, and supportive student community."
  },
  {
    "id": "eduport",
    "name": "Eduport Learning",
    "shortCode": "EDUPORT",
    "location": "Malappuram & Kozhikode (Kerala)",
    "established": "2019",
    "reputationTag": "Tech-Forward • Board + Entrance Pioneer",
    "description": "Premier Kerala digital learning powerhouse founded by IIT/NIT alumni, famous for integrated Plus One/Plus Two coaching with Adapt AI doubt resolution."
  },
  {
    "id": "examwinner",
    "name": "Exam Winner Learning",
    "shortCode": "EXAM WINNER",
    "location": "Kozhikode & Statewide Kerala",
    "established": "2019",
    "reputationTag": "Board + NEET Powerhouse • Millions of Aspirants",
    "description": "Kerala's most widely watched educational platform, delivering high-impact Malayalam live coaching, Vedha NEET repeaters, and Plus One/Plus Two tuition integration."
  },
  {
    "id": "pcthomas",
    "name": "Prof. P.C. Thomas & Chaithanya Classes",
    "shortCode": "PC THOMAS",
    "location": "Thrissur (Kerala)",
    "established": "1969",
    "reputationTag": "Kerala Coaching Legend • Uncompromising Rigor",
    "description": "Pioneering Kerala entrance institution with a half-century legacy producing top medical & engineering ranks with comprehensive 28-volume study kits."
  },
  {
    "id": "fiitjee",
    "name": "FIITJEE",
    "shortCode": "FIITJEE",
    "location": "Kochi (Kerala) / National eSchool",
    "established": "1992",
    "reputationTag": "JEE Advanced Authority • Pinnacle Program",
    "description": "National benchmark in IIT-JEE preparation, famous for the PINNACLE 2-year integrated school program, legendary AITS test series, and top IIT single-digit ranks."
  },
  {
    "id": "aakash",
    "name": "Aakash Digital / Institute",
    "shortCode": "AAKASH",
    "location": "Kochi, Trivandrum, Kozhikode, Thrissur, Kannur + Digital",
    "established": "1988",
    "reputationTag": "Medical Legacy • AI-Assisted Phygital Kits",
    "description": "Renowned nationwide medical entrance authority offering live two-way interactive classes, QR-coded study books, and AI-enabled test analysis."
  },
  {
    "id": "srichaitanya",
    "name": "Sri Chaitanya Educational Institutions",
    "shortCode": "SRI CHAITANYA",
    "location": "Kochi, Calicut, Thrissur + Infinity Learn",
    "established": "1986",
    "reputationTag": "National Rank Factory • MEDICON & ELITE",
    "description": "Premier pan-India coaching giant with high-impact Kerala campuses, famed for its MEDICON NEET and ELITE JEE Advanced programs with micro-scheduled drill testing."
  },
  {
    "id": "narayana",
    "name": "Narayana Coaching Academy",
    "shortCode": "NARAYANA",
    "location": "Kochi, Kozhikode & Kerala Centres",
    "established": "1979",
    "reputationTag": "Olympiad & JEE Rigor • CO-SPARK Engine",
    "description": "Pioneering national academic group known for systematic micro-level test schedules, intense doubt-clearing sessions, and specialized CO-SPARK batches."
  },
  {
    "id": "physicswallah",
    "name": "Physics Wallah (PW Malayalam & National)",
    "shortCode": "PW",
    "location": "National / Kerala Malayalam Wing",
    "established": "2020",
    "reputationTag": "Lowest Price Champion • High DPP Density",
    "description": "Budget powerhouse offering complete syllabus coverage, All-India rank benchmarking, and fast-paced problem solving."
  },
  {
    "id": "allen",
    "name": "Allen Digital",
    "shortCode": "ALLEN",
    "location": "Kota / Kochi & Kozhikode Centres",
    "established": "1988",
    "reputationTag": "Kota Standard • Rigorous Advanced Level",
    "description": "National benchmark in academic rigor, comprehensive Kota study modules, and renowned Leader Test Series."
  },
  {
    "id": "zephyr",
    "name": "Zephyr Entrance Coaching",
    "shortCode": "ZEPHYR",
    "location": "Trivandrum, Kollam, Kochi & Calicut (Kerala)",
    "established": "1994",
    "reputationTag": "Personal Attention • 2-Way Voice Doubts",
    "description": "Trusted 30-year legacy in South Kerala with smaller virtual batch sizes, faculty voice interactions, and consistent KEAM/NEET selections."
  },
  {
    "id": "rays",
    "name": "Rays Edutech Kerala",
    "shortCode": "RAYS",
    "location": "Kozhikode, Kannur, Manjeri, Kochi (Kerala)",
    "established": "2002",
    "reputationTag": "Malabar Premier • Super-40 Intensive",
    "description": "North Kerala's established entrance champion producing consistent government medical college admissions through curated small cohorts."
  },
  {
    "id": "alpha",
    "name": "Alpha Entrance Academy",
    "shortCode": "ALPHA",
    "location": "Alappuzha & Changanassery (Kerala)",
    "established": "2000",
    "reputationTag": "Central Travancore • High Conversion Rate",
    "description": "Renowned residential and online entrance academy with intense daily revision papers and strong pastoral support for repeaters."
  },
  {
    "id": "pcmb",
    "name": "PCMB Entrance Coaching",
    "shortCode": "PCMB",
    "location": "Thrissur & Kochi (Kerala)",
    "established": "2012",
    "reputationTag": "Focused Mentorship • Daily Chapter Drills",
    "description": "Specialized entrance hub focusing on targeted numerical practice in Physics and conceptual NCERT biology line-by-line mastery."
  },
  {
    "id": "unacademy",
    "name": "Unacademy Kerala",
    "shortCode": "UNACAD",
    "location": "Statewide Online & Kerala Plus Centres",
    "established": "2015",
    "reputationTag": "Flexible Schedules • Elite Educators",
    "description": "Flexible digital learning powerhouse featuring top Kerala faculties, extensive PYQ test databases, and customizable study tracks."
  }
];


function generateCourseThumbnail(institute, exam, title, badge, theme = "pala") {
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
    unacad: { bg1: "#0c1e33", bg2: "#164e63", text: "#f0fdfa", accent: "#2dd4bf", tagBg: "rgba(45,212,191,0.2)", tagColor: "#99f6e4" }
  };

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
    <text x="50" y="115" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#000">${exam === "NEET" ? "🩺" : (exam === "KEAM" ? "🏛️" : "⚙️")}</text>

    <text x="86" y="103" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="17" font-weight="800" fill="${t.text}" letter-spacing="-0.3">${safeTitle}</text>
    <text x="86" y="124" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="600" fill="${t.accent}">${safeExam} • ${safeBadge}</text>
    
    <line x1="24" y1="165" x2="376" y2="165" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="24" y="188" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="${t.text}" opacity="0.7">ONLINE LIVE &amp; RECORDED • PHYSICAL STUDY BOOKS</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}


// Comprehensive Database of Online Batches (53 Detailed Batches across 16 Institutes)
const COACHING_BATCHES = [
{
  "id": "pala-neet-rep-01",
  "instituteId": "pala",
  "institute": "Brilliant Study Centre Pala",
  "name": "Brilliant AIIMS / NEET Repeater Intensive",
  "badge": "Kerala Gold Standard",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.9,
  "reviewsCount": 3120,
  "price": 78000,
  "originalPrice": 85000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹26,000",
  "mode": "Live Online & Campus Hybrid",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 8:30 AM - 3:30 PM",
  "teachers": [
    "George Thomas (Physics)",
    "Dr. K. S. Pillai (Botany)",
    "M. Mathew (Zoology)",
    "S. Varma (Chemistry)"
  ],
  "studyMaterial": "Complete 18-Volume Brilliant Printed Module Box + Daily Model Exam Papers Delivered via Courier",
  "testsPerMonth": 12,
  "batchSize": "60 Students per Virtual Batch",
  "refundPolicy": "Pro-rata refund minus registration fees within first 14 calendar days",
  "highlights": [
    "Demanding weekly statewide Sunday model exams with 40,000+ peer rankings",
    "Line-by-line NCERT drill sheets with verified video explanations in Malayalam",
    "Mandatory evening 1-on-1 doubt clearing slots with subject heads",
    "Consistently produces 70%+ of Kerala's top 100 Government Medical College admits"
  ]
,
  "image": generateCourseThumbnail("Brilliant Study Centre Pala", "NEET", "Brilliant AIIMS / NEET Repeater Intensive", "Kerala Gold Standard", "pala")
},
{
  "id": "pala-jee-rep-02",
  "instituteId": "pala",
  "institute": "Brilliant Study Centre Pala",
  "name": "IIT-JEE Advanced & Main Repeater Master",
  "badge": "State Benchmark",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 2240,
  "price": 68000,
  "originalPrice": 75000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹23,000",
  "mode": "Live Interactive Virtual Classroom",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 8:30 AM - 3:30 PM",
  "teachers": [
    "Prof. C. K. Varghese (Maths)",
    "Renjit K. (Physics)",
    "Biju Joseph (Physical Chem)"
  ],
  "studyMaterial": "16 Advanced Level Concept Books, 5000+ Solved IIT-JEE Problems",
  "testsPerMonth": 10,
  "batchSize": "55 Students per Virtual Batch",
  "refundPolicy": "Pro-rata refund minus admin cost within 14 days",
  "highlights": [
    "Rigorous problem-solving targeting JEE Advanced 99+ percentile ranks",
    "Specialized computer-based tests matching exact NTA interface",
    "Deep coverage of Irodov & Krotov Physics numerical techniques",
    "Proven track record of top IIT Bombay, Madras & Palakkad placements"
  ]
,
  "image": generateCourseThumbnail("Brilliant Study Centre Pala", "JEE Main & Advanced", "IIT-JEE Advanced & Main Repeater Master", "State Benchmark", "pala")
},
{
  "id": "pala-neet-int-03",
  "instituteId": "pala",
  "institute": "Brilliant Study Centre Pala",
  "name": "Two-Year Integrated Long-Term Medical (Class 11 & 12)",
  "badge": "Two-Year Foundation",
  "targetExam": "NEET",
  "category": "Class 11 Two-Year",
  "rating": 4.9,
  "reviewsCount": 1680,
  "price": 120000,
  "originalPrice": 135000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "4 quarterly installments of ₹30,000",
  "mode": "Weekend Live Online + Evening Doubt Support",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Sat 2:00 PM - 7:00 PM & Sun 8:30 AM - 3:30 PM",
  "teachers": [
    "Dr. K. S. Pillai (Biology)",
    "George Thomas (Physics)",
    "Dr. S. Nair (Chemistry)"
  ],
  "studyMaterial": "24 Concept Modules, NCERT Exemplar Solved Booklets, Formula Cards",
  "testsPerMonth": 8,
  "batchSize": "50 Students per Batch",
  "refundPolicy": "Standard pro-rata within 30 days of academic session start",
  "highlights": [
    "Simultaneous board syllabus mastery (CBSE / Kerala State) with NEET depth",
    "Step-by-step transition from basic 10th science to competitive application",
    "Term-end full-length diagnostic tests with parent performance review",
    "Early syllabus completion by October of Class 12 for 6 months pure revision"
  ]
,
  "image": generateCourseThumbnail("Brilliant Study Centre Pala", "NEET", "Two-Year Integrated Long-Term Medical (Class 11 & 12)", "Two-Year Foundation", "pala")
},
{
  "id": "pala-keam-crash-04",
  "instituteId": "pala",
  "institute": "Brilliant Study Centre Pala",
  "name": "KEAM & NEET Super 45-Day Intensive Crash",
  "badge": "Rank Accelerator",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.8,
  "reviewsCount": 3890,
  "price": 9500,
  "originalPrice": 12000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single upfront payment",
  "mode": "Daily Live Streaming & On-Demand High-Yield Recordings",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Daily • 8:00 AM - 4:30 PM (Post-Board Exams)",
  "teachers": [
    "Brilliant Senior Crash Specialist Team"
  ],
  "studyMaterial": "High-Yield Crash Handouts, 15 Full-Length KEAM Model Exam Papers",
  "testsPerMonth": 16,
  "batchSize": "Open Virtual Stream with Live Chat QA",
  "refundPolicy": "Non-refundable once crash live access begins",
  "highlights": [
    "15 complete statewide mock tests strictly aligned to new computer-based KEAM pattern",
    "Shortcuts, speed calculation tricks, and elimination tactics in Mathematics",
    "High-probability question banks curated from past 15 years Kerala entrance",
    "Dedicated helpline for KEAM option registration and counseling guidance"
  ]
,
  "image": generateCourseThumbnail("Brilliant Study Centre Pala", "KEAM", "KEAM & NEET Super 45-Day Intensive Crash", "Rank Accelerator", "pala")
},
{
  "id": "xylem-neet-rep-01",
  "instituteId": "xylem",
  "institute": "Xylem Learning",
  "name": "Xylem NEET Repeater Batch Malayalam",
  "badge": "High Value Malayalam",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 4210,
  "price": 18500,
  "originalPrice": 24000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹9,500",
  "mode": "Live Classes on Xylem Learning App + Interactive Community",
  "language": "Malayalam Medium Primary",
  "schedule": "Mon - Sat • 8:30 AM - 1:30 PM",
  "teachers": [
    "Dr. Ananthu (Biology)",
    "Shameer Sir (Physics)",
    "Akhil Sir (Chemistry)"
  ],
  "studyMaterial": "Printed Xylem Target Textbooks & Question Bank Mailed Home",
  "testsPerMonth": 8,
  "batchSize": "Interactive Stream with Group Tutors",
  "refundPolicy": "7-day money back guarantee from batch launch date",
  "highlights": [
    "Crystal clear explanations in conversational Malayalam making Physics intuitive",
    "Gamified leaderboards and daily practice problem (DPP) streak rewards",
    "Dedicated student welfare coordinators calling weekly for study tracking",
    "Huge value proposition at less than 1/4th the price of traditional coaching"
  ]
,
  "image": generateCourseThumbnail("Xylem Learning", "NEET", "Xylem NEET Repeater Batch Malayalam", "High Value Malayalam", "xylem")
},
{
  "id": "xylem-jee-rep-02",
  "instituteId": "xylem",
  "institute": "Xylem Learning",
  "name": "Xylem JEE Main & KEAM Engineering Dropper",
  "badge": "Malayalam Engineering",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 1980,
  "price": 16500,
  "originalPrice": 22000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹8,500",
  "mode": "Live App Classes + Dedicated Problem Sessions",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Fri • 9:00 AM - 2:00 PM",
  "teachers": [
    "Prof. Nithin (Maths)",
    "Sujith Sir (Physics)",
    "Anand Sir (Chemistry)"
  ],
  "studyMaterial": "12 Printed Module Handbooks + 3000 Solved Engineering Problems",
  "testsPerMonth": 8,
  "batchSize": "Community Cohort with Assigned Mentors",
  "refundPolicy": "7-day satisfaction trial refund",
  "highlights": [
    "Heavy emphasis on Maths speed solving and shortcut methods for KEAM",
    "Full coverage of JEE Main NTA previous 5 years questions live in class",
    "Weekly Sunday computer-based mock tests on exact exam interfaces",
    "Energetic teaching style keeping students motivated throughout drop year"
  ]
,
  "image": generateCourseThumbnail("Xylem Learning", "JEE Main & Advanced", "Xylem JEE Main & KEAM Engineering Dropper", "Malayalam Engineering", "xylem")
},
{
  "id": "xylem-plus2-03",
  "instituteId": "xylem",
  "institute": "Xylem Learning",
  "name": "Plus Two Tuition + NEET/KEAM Entrance Batch",
  "badge": "Board + Entrance Combo",
  "targetExam": "NEET",
  "category": "Class 12 Regular",
  "rating": 4.9,
  "reviewsCount": 5120,
  "price": 14999,
  "originalPrice": 19999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹7,800",
  "mode": "Live Evening Batches on Xylem App",
  "language": "Malayalam Medium Primary",
  "schedule": "Mon - Fri • 6:00 PM - 8:30 PM",
  "teachers": [
    "Dr. Ananthu (Biology)",
    "Shameer Sir (Physics)",
    "Team Xylem"
  ],
  "studyMaterial": "Board Exam Revision Guides + Entrance Level Worksheets Delivered Home",
  "testsPerMonth": 6,
  "batchSize": "Interactive Stream with Group Tutors",
  "refundPolicy": "7-day cancellation window",
  "highlights": [
    "Covers 100% of Kerala State & CBSE Plus Two board derivations and theory",
    "Integrated entrance level MCQs solved at the conclusion of each chapter",
    "Special model board exam sessions before school practicals and finals",
    "Live doubt clearing with batch mentors directly inside the app"
  ]
,
  "image": generateCourseThumbnail("Xylem Learning", "NEET", "Plus Two Tuition + NEET/KEAM Entrance Batch", "Board + Entrance Combo", "xylem")
},
{
  "id": "xylem-keam-crash-04",
  "instituteId": "xylem",
  "institute": "Xylem Learning",
  "name": "KEAM Super Express Fastrack Crash",
  "badge": "Budget Crash Hit",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.8,
  "reviewsCount": 6200,
  "price": 4999,
  "originalPrice": 7999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single upfront payment",
  "mode": "Daily Live Fast-Paced Crash Streams + Full Mock CBTs",
  "language": "Malayalam + English",
  "schedule": "Daily • 8:30 AM - 4:00 PM",
  "teachers": [
    "Xylem Engineering Faculty Team"
  ],
  "studyMaterial": "Digital Formula Pocketbooks, 10 Full KEAM Mock Tests",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once batch starts",
  "highlights": [
    "Fastest syllabus revision targeting high-weightage topics first",
    "10 full-length Computer Based Tests mimicking Kerala CEE interface",
    "Comprehensive KEAM Mathematics trick sessions saving 45+ minutes in exam",
    "Live rank prediction and state rank benchmarking"
  ]
,
  "image": generateCourseThumbnail("Xylem Learning", "KEAM", "KEAM Super Express Fastrack Crash", "Budget Crash Hit", "xylem")
},
{
  "id": "eduport-neet-rep-01",
  "instituteId": "eduport",
  "institute": "Eduport Learning",
  "name": "Eduport Mediko NEET Repeater Pro (Adapt AI + Printed Books)",
  "badge": "Tech-Forward Adapt AI",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 2340,
  "price": 19500,
  "originalPrice": 26000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹10,000",
  "mode": "Daily Live Interactive App Sessions + AI Practice Engine",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 9:00 AM - 2:00 PM",
  "teachers": [
    "Dr. Nithin (MBBS, AIIMS M)",
    "Rahul Sir (Physics NIT Calicut)",
    "Fasalu Sir (Chemistry)"
  ],
  "studyMaterial": "Complete Eduport Printed Mediko Book Series + Daily Adapt AI Question Bank",
  "testsPerMonth": 8,
  "batchSize": "Personal Mentorship Groups (30 students per mentor)",
  "refundPolicy": "10-day conditional refund before dispatch of printed books",
  "highlights": [
    "Built by IIT/NIT alumni with modern, bite-sized interactive visual animations",
    "Adapt AI dynamically serves questions tailored to each student's weak concepts",
    "Daily personal mentor follow-up calls ensuring zero backlog buildup",
    "Printed physical textbooks with QR codes linked directly to video solutions"
  ]
,
  "image": generateCourseThumbnail("Eduport Learning", "NEET", "Eduport Mediko NEET Repeater Pro (Adapt AI + Printed Books)", "Tech-Forward Adapt AI", "eduport")
},
{
  "id": "eduport-plus2-02",
  "instituteId": "eduport",
  "institute": "Eduport Learning",
  "name": "Plus Two Board Tuition + JEE/KEAM Entrance Combo",
  "badge": "IIT/NIT Alumni Led",
  "targetExam": "JEE Main & Advanced",
  "category": "Class 12 Regular",
  "rating": 4.7,
  "reviewsCount": 1820,
  "price": 17700,
  "originalPrice": 22000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹9,000",
  "mode": "Live App Stream + 24/7 AI Doubt Resolution",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Fri • 6:30 PM - 8:45 PM",
  "teachers": [
    "Rahul Sir (Physics, NITC)",
    "Anoop Sir (Maths)",
    "Dr. Fasalu (Chem)"
  ],
  "studyMaterial": "Plus Two Board Master Kits + Entrance Question Handbooks",
  "testsPerMonth": 6,
  "batchSize": "Interactive Digital Stream with Chat QA",
  "refundPolicy": "7-day refund window",
  "highlights": [
    "Full Kerala State & CBSE syllabus coverage with school exam mock papers",
    "Instant AI doubt camera: take photo of any math/physics problem for instant steps",
    "Weekly chapter-end live quizzes with instant performance analytics",
    "Dedicated mentor checks student homework submissions and test rankings"
  ]
,
  "image": generateCourseThumbnail("Eduport Learning", "JEE Main & Advanced", "Plus Two Board Tuition + JEE/KEAM Entrance Combo", "IIT/NIT Alumni Led", "eduport")
},
{
  "id": "eduport-neet-2yr-03",
  "instituteId": "eduport",
  "institute": "Eduport Learning",
  "name": "Plus One & Plus Two 2-Year NEET Medical Integrated",
  "badge": "Two-Year Master",
  "targetExam": "NEET",
  "category": "Class 11 Two-Year",
  "rating": 4.9,
  "reviewsCount": 1450,
  "price": 27999,
  "originalPrice": 38000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹9,500",
  "mode": "Live Evening Classes on Eduport App + Mentor Desk",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Tue, Thu, Sat • 6:00 PM - 8:30 PM & Sun 9:00 AM - 1:00 PM",
  "teachers": [
    "Dr. Nithin (MBBS)",
    "Rahul Sir (Physics)",
    "Fasalu Sir (Chemistry)"
  ],
  "studyMaterial": "Comprehensive 2-Year Printed Book Box (Physics, Chem, Bio)",
  "testsPerMonth": 6,
  "batchSize": "Personalized Cohorts with Dedicated Tutors",
  "refundPolicy": "14-day trial period refund",
  "highlights": [
    "Solidifies Class 11 base concepts before students get overwhelmed by Class 12",
    "Continuous cycle of revision ensuring Class 11 chapters are never forgotten",
    "Parent monitoring app tracks real-time watch time, test marks and attendance",
    "Complete NEET mock tests matching the latest 200-question NTA pattern"
  ]
,
  "image": generateCourseThumbnail("Eduport Learning", "NEET", "Plus One & Plus Two 2-Year NEET Medical Integrated", "Two-Year Master", "eduport")
},
{
  "id": "eduport-keam-crash-04",
  "instituteId": "eduport",
  "institute": "Eduport Learning",
  "name": "KEAM Extended Crash & Rank Booster Batch",
  "badge": "Speed Optimization",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.7,
  "reviewsCount": 2890,
  "price": 5499,
  "originalPrice": 8000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Live Interactive Crash Sessions + Test Series",
  "language": "Malayalam + English",
  "schedule": "Daily • 9:00 AM - 4:00 PM",
  "teachers": [
    "Eduport Senior Engineering Faculty"
  ],
  "studyMaterial": "Digital Crash Formula Cards & 12 Computer-Based KEAM Mocks",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once live classes start",
  "highlights": [
    "Extensive drill on high-scoring Mathematics topics (Calculus, Vectors, Matrices)",
    "Daily timed sectional tests ensuring students finish 150 questions in time",
    "Detailed video solutions for all questions from previous KEAM examinations",
    "Exclusive option registration strategy webinars by NIT alumni counselors"
  ]
,
  "image": generateCourseThumbnail("Eduport Learning", "KEAM", "KEAM Extended Crash & Rank Booster Batch", "Speed Optimization", "eduport")
},
{
  "id": "examwinner-vedha-plus2-01",
  "instituteId": "examwinner",
  "institute": "Exam Winner Learning",
  "name": "Plus Two Vedha NEET Online Tuition Batch",
  "badge": "Board + NEET Powerhouse",
  "targetExam": "NEET",
  "category": "Class 12 Regular",
  "rating": 4.9,
  "reviewsCount": 7850,
  "price": 7799,
  "originalPrice": 16990,
  "gstNote": "Inclusive of 18% GST (Official Offer Fee)",
  "installments": "2 installments of ₹4,000",
  "mode": "Live Interactive Sessions on Exam Winner Learning App",
  "language": "Malayalam Medium Primary",
  "schedule": "Mon - Sat • 6:30 PM - 9:00 PM",
  "teachers": [
    "Allen Sir (Physics)",
    "Bio Mentor Team",
    "Chemistry Specialist Faculty"
  ],
  "studyMaterial": "Printed Vedha Class 12 Worksheets & Question Handbooks",
  "testsPerMonth": 6,
  "batchSize": "High-Energy Interactive App Stream with Live Quizzes",
  "refundPolicy": "7-day money-back guarantee from enrollment",
  "highlights": [
    "Over 3 million Kerala students learn with Exam Winner for school & entrance exams",
    "Complete coverage of Plus Two SCERT/CBSE board exam syllabus with guaranteed Full A+",
    "Specialized NEET worksheets, PYQs and chapter-end entrance tests included",
    "Extremely affordable high-energy teaching accessible to every Kerala household"
  ]
,
  "image": generateCourseThumbnail("Exam Winner Learning", "NEET", "Plus Two Vedha NEET Online Tuition Batch", "Board + NEET Powerhouse", "examwinner")
},
{
  "id": "examwinner-vedha-rep-02",
  "instituteId": "examwinner",
  "institute": "Exam Winner Learning",
  "name": "Vedha NEET Repeater Dropper Master Batch",
  "badge": "Repeater Value Champion",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 3420,
  "price": 12999,
  "originalPrice": 19999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹6,800",
  "mode": "Daily Live Interactive App Classes + Live Doubt Hours",
  "language": "Malayalam Medium Primary",
  "schedule": "Mon - Sat • 8:45 AM - 2:00 PM",
  "teachers": [
    "Exam Winner Medical Specialist Team"
  ],
  "studyMaterial": "Full Printed Vedha NEET Study Material Kit Delivered via Postal Service",
  "testsPerMonth": 8,
  "batchSize": "Live App Stream with Question-Specific Chat Channels",
  "refundPolicy": "7-day cancellation window",
  "highlights": [
    "Systematic zero-level foundation revision covering entire 11th and 12th syllabus",
    "Line-by-line NCERT Biology decoding with memory mnemonics and diagram tricks",
    "Weekly Sunday full-length NTA NEET mock tests with statewide rank analytics",
    "Daily practice sheets (DPP) with live evening video doubt explanations"
  ]
,
  "image": generateCourseThumbnail("Exam Winner Learning", "NEET", "Vedha NEET Repeater Dropper Master Batch", "Repeater Value Champion", "examwinner")
},
{
  "id": "examwinner-yodha-plus1-03",
  "instituteId": "examwinner",
  "institute": "Exam Winner Learning",
  "name": "Yodha Plus One Science + NEET/KEAM Integrated",
  "badge": "Foundation Winner",
  "targetExam": "NEET",
  "category": "Class 11 Two-Year",
  "rating": 4.9,
  "reviewsCount": 4620,
  "price": 6999,
  "originalPrice": 14999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment or 2 installments",
  "mode": "Live App Evening Batches + Recorded Vault",
  "language": "Malayalam Medium Primary",
  "schedule": "Mon - Fri • 7:00 PM - 9:00 PM",
  "teachers": [
    "Exam Winner Senior Science Faculty"
  ],
  "studyMaterial": "Yodha Printed Handbooks + School Lab Exam Guides",
  "testsPerMonth": 4,
  "batchSize": "Interactive Stream with Live Polls",
  "refundPolicy": "7-day satisfaction guarantee",
  "highlights": [
    "Smooth transition from 10th standard SSLC/CBSE to demanding Plus One science",
    "Covers Physics, Chemistry, Biology and Mathematics for school and entrance",
    "Model exams before Onam, Christmas, and Plus One Annual Board Exams",
    "Proven track record helping students secure top ranks in E-SAT scholarship tests"
  ]
,
  "image": generateCourseThumbnail("Exam Winner Learning", "NEET", "Yodha Plus One Science + NEET/KEAM Integrated", "Foundation Winner", "examwinner")
},
{
  "id": "examwinner-keam-crash-04",
  "instituteId": "examwinner",
  "institute": "Exam Winner Learning",
  "name": "KEAM Express Fastrack Crash Course",
  "badge": "Super Budget Crash",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.7,
  "reviewsCount": 5100,
  "price": 3999,
  "originalPrice": 6999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single upfront payment",
  "mode": "Daily Live Fast-Paced Streams + Online Mock CBTs",
  "language": "Malayalam + English",
  "schedule": "Daily • 9:00 AM - 3:30 PM",
  "teachers": [
    "Exam Winner Engineering Faculty"
  ],
  "studyMaterial": "Digital Crash Handbooks & 10 Full KEAM Online Mock Exams",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once classes begin",
  "highlights": [
    "Ultra-focused 30-day revision targeting the top 70% scoring chapters in KEAM",
    "Extensive calculation shortcuts for Physics and Mathematics",
    "10 complete computer-based tests matching the official CEE format",
    "Affordable entrance prep enabling every aspiring engineer to compete"
  ]
,
  "image": generateCourseThumbnail("Exam Winner Learning", "KEAM", "KEAM Express Fastrack Crash Course", "Super Budget Crash", "examwinner")
},
{
  "id": "pcthomas-neet-rep-01",
  "instituteId": "pcthomas",
  "institute": "Prof. P.C. Thomas & Chaithanya Classes",
  "name": "One Year Long Term NEET Repeater (Chaithanya 28-Volume Kit)",
  "badge": "Kerala Coaching Legend",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.9,
  "reviewsCount": 2670,
  "price": 118000,
  "originalPrice": 128000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹40,000",
  "mode": "Classroom / Live Hybrid with Rigorous Daily Drill",
  "language": "English + Malayalam Explanation",
  "schedule": "Mon - Sat • 8:30 AM - 4:00 PM",
  "teachers": [
    "Prof. P. C. Thomas Academic Council",
    "Chaithanya Master Teachers"
  ],
  "studyMaterial": "Complete 28-Volume Chaithanya Study Material Kit (Widely considered best in South India)",
  "testsPerMonth": 12,
  "batchSize": "Rigid Supervised Academic Batches",
  "refundPolicy": "Standard institutional policy minus kit fees within 10 days",
  "highlights": [
    "Over 55 years of unmatched entrance legacy with tens of thousands of MBBS doctors trained",
    "Legendary 28-volume Chaithanya study kits containing 40,000+ curated problems",
    "Mandatory weekly model examinations with strict negative marking evaluation",
    "Intensive teaching covering every line and diagram in NCERT textbook"
  ]
,
  "image": generateCourseThumbnail("Prof. P.C. Thomas & Chaithanya Classes", "NEET", "One Year Long Term NEET Repeater (Chaithanya 28-Volume Kit)", "Kerala Coaching Legend", "pcthomas")
},
{
  "id": "pcthomas-jee-rep-02",
  "instituteId": "pcthomas",
  "institute": "Prof. P.C. Thomas & Chaithanya Classes",
  "name": "One Year Long Term JEE Advanced & Main Repeater",
  "badge": "Mathematical Rigor",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 1540,
  "price": 105000,
  "originalPrice": 115000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹36,000",
  "mode": "Intensive Classroom & Live Hybrid",
  "language": "English with Malayalam Clarification",
  "schedule": "Mon - Sat • 8:30 AM - 4:00 PM",
  "teachers": [
    "Prof. P. C. Thomas Senior Engineering Department"
  ],
  "studyMaterial": "24 Chaithanya Engineering Master Books, Advanced Numerical Problem Sets",
  "testsPerMonth": 10,
  "batchSize": "Supervised Batch of 50 Students",
  "refundPolicy": "Standard institutional policy within 10 days",
  "highlights": [
    "Demanding mathematical problem-solving drills with multi-concept questions",
    "Detailed past 20-year JEE Advanced analysis and step-by-step solutions",
    "Regular testing simulating both 3-hour Morning and Afternoon JEE Advanced shifts",
    "Dedicated faculty desk for individual doubt clearing after classes"
  ]
,
  "image": generateCourseThumbnail("Prof. P.C. Thomas & Chaithanya Classes", "JEE Main & Advanced", "One Year Long Term JEE Advanced & Main Repeater", "Mathematical Rigor", "pcthomas")
},
{
  "id": "pcthomas-twoyear-03",
  "instituteId": "pcthomas",
  "institute": "Prof. P.C. Thomas & Chaithanya Classes",
  "name": "Two Year Integrated School-Going (Plus One & Plus Two + Entrance)",
  "badge": "Integrated Foundation",
  "targetExam": "NEET",
  "category": "Class 11 Two-Year",
  "rating": 4.9,
  "reviewsCount": 1890,
  "price": 145000,
  "originalPrice": 160000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "4 quarterly installments of ₹37,500",
  "mode": "Weekend / Evening Hybrid with Campus Support",
  "language": "English + Malayalam Clarification",
  "schedule": "Sat 1:30 PM - 6:30 PM & Sun 8:30 AM - 4:00 PM",
  "teachers": [
    "Chaithanya Senior Faculty Council"
  ],
  "studyMaterial": "Complete Chaithanya 2-Year Integrated Textbooks & Question Banks",
  "testsPerMonth": 8,
  "batchSize": "Disciplined Cohort of 45 Students",
  "refundPolicy": "Pro-rata minus admission fee within 20 days",
  "highlights": [
    "Seamless integration of higher secondary school syllabus with entrance excellence",
    "Ensures board exam scores above 95% while keeping students entrance-ready",
    "Monthly parent-teacher evaluation meetings with detailed progress cards",
    "Early syllabus completion allows 5 months of rigorous full-syllabus testing"
  ]
,
  "image": generateCourseThumbnail("Prof. P.C. Thomas & Chaithanya Classes", "NEET", "Two Year Integrated School-Going (Plus One & Plus Two + Entrance)", "Integrated Foundation", "pcthomas")
},
{
  "id": "pcthomas-crash-04",
  "instituteId": "pcthomas",
  "institute": "Prof. P.C. Thomas & Chaithanya Classes",
  "name": "KEAM & NEET Special Revision Crash Course",
  "badge": "Intensive Drills",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.8,
  "reviewsCount": 3100,
  "price": 12000,
  "originalPrice": 15000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Intensive Daily Sessions + Physical Model Exam Centers",
  "language": "Bilingual (English / Malayalam)",
  "schedule": "Daily • 8:30 AM - 4:30 PM",
  "teachers": [
    "Prof. P. C. Thomas Crash Specialists"
  ],
  "studyMaterial": "Chaithanya Crash Handouts + 12 Full-Length Model Exam Booklets",
  "testsPerMonth": 16,
  "batchSize": "Auditorium & Virtual Stream",
  "refundPolicy": "Non-refundable once crash begins",
  "highlights": [
    "12 comprehensive model examinations prepared by veteran entrance examiners",
    "Rapid-fire problem solving in physics mechanics, organic mechanisms and calculus",
    "Detailed answer discussion sessions highlighting common traps and mistakes",
    "Offline test center access in Thrissur and Kochi for actual exam feel"
  ]
,
  "image": generateCourseThumbnail("Prof. P.C. Thomas & Chaithanya Classes", "KEAM", "KEAM & NEET Special Revision Crash Course", "Intensive Drills", "pcthomas")
},
{
  "id": "fiitjee-pinnacle-01",
  "instituteId": "fiitjee",
  "institute": "FIITJEE",
  "name": "PINNACLE Two-Year Integrated School Program (JEE Advanced)",
  "badge": "IIT-JEE Advanced Flagship",
  "targetExam": "JEE Main & Advanced",
  "category": "Class 11 Two-Year",
  "rating": 4.9,
  "reviewsCount": 1780,
  "price": 385000,
  "originalPrice": 420000,
  "gstNote": "Exclusive of GST (Scholarships available up to 100% via FTRE)",
  "installments": "4 semi-annual installments of ₹98,000",
  "mode": "Integrated School Program (Classroom + eSchool Interactive)",
  "language": "Pure English",
  "schedule": "Mon - Fri • Embedded into School Hours (8:30 AM - 3:30 PM)",
  "teachers": [
    "Senior FIITJEE National Faculty Council (Ex-IITians)"
  ],
  "studyMaterial": "FIITJEE Comprehensive Study Package (CSP), GMP & Rankers Study Material",
  "testsPerMonth": 8,
  "batchSize": "Selective Batch of 35 Students",
  "refundPolicy": "FIITJEE National standard exit policy based on terms of registration",
  "highlights": [
    "The undisputed national benchmark for securing Top 100 All-India Ranks in JEE Advanced",
    "Complete synchronization of Class 11-12 CBSE syllabus with IIT preparation",
    "Legendary All India Test Series (AITS) testing against 80,000+ top Indian aspirants",
    "Grand Master Package (GMP) and Rankers Test Series for final percentile enhancement"
  ]
,
  "image": generateCourseThumbnail("FIITJEE", "JEE Main & Advanced", "PINNACLE Two-Year Integrated School Program (JEE Advanced)", "IIT-JEE Advanced Flagship", "fiitjee")
},
{
  "id": "fiitjee-rep-02",
  "instituteId": "fiitjee",
  "institute": "FIITJEE",
  "name": "One-Year Extended Classroom / eSchool for JEE Advanced",
  "badge": "Dropper Rank Booster",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 1250,
  "price": 165000,
  "originalPrice": 195000,
  "gstNote": "Exclusive of GST",
  "installments": "2 installments of ₹85,000",
  "mode": "Live 2-Way Interactive eSchool & Kochi Centre Classroom",
  "language": "Pure English",
  "schedule": "Mon - Sat • 9:00 AM - 3:00 PM",
  "teachers": [
    "Master IIT Mentors & Senior Physics/Maths Specialists"
  ],
  "studyMaterial": "FIITJEE Dropper Study Packages, AITS Question Vault",
  "testsPerMonth": 10,
  "batchSize": "Rigorous Cohort of 40 Students",
  "refundPolicy": "Governed by FIITJEE admission agreement",
  "highlights": [
    "Advanced multi-concept problem drills targeting Top 1000 ranks in JEE Advanced",
    "Intensive test schedule with Phase Tests, Review Tests, and National AITS",
    "Individual performance analytics pinpointing question selection and accuracy",
    "Access to FIITJEE eSchool digital archive with 24/7 video problem solutions"
  ]
,
  "image": generateCourseThumbnail("FIITJEE", "JEE Main & Advanced", "One-Year Extended Classroom / eSchool for JEE Advanced", "Dropper Rank Booster", "fiitjee")
},
{
  "id": "fiitjee-aits-03",
  "instituteId": "fiitjee",
  "institute": "FIITJEE",
  "name": "FIITJEE AITS & Intensive Rank Promoters Package",
  "badge": "All-India Benchmark",
  "targetExam": "JEE Main & Advanced",
  "category": "Crash Course",
  "rating": 4.9,
  "reviewsCount": 4200,
  "price": 24500,
  "originalPrice": 32000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Computer-Based All-India Test Series + Live Test Analysis Webinars",
  "language": "Pure English",
  "schedule": "Every Sunday Morning & Afternoon Shift (Exact JEE Timings)",
  "teachers": [
    "FIITJEE National Test Creation Board"
  ],
  "studyMaterial": "Printed Grand Masters Package (GMP) + 16 Full-Length AITS Papers",
  "testsPerMonth": 8,
  "batchSize": "Open All-India Testing Cohort",
  "refundPolicy": "Non-refundable once first test login generated",
  "highlights": [
    "The toughest and most accurate test series predicting actual JEE Advanced percentile",
    "Detailed national rank cards comparing performance with students from Kota, Delhi and Hyderabad",
    "Video solution analysis highlighting the most elegant mathematical and physical shortcuts",
    "Essential for any student targeting IIT Bombay, Delhi, Madras or Kanpur computer science"
  ]
,
  "image": generateCourseThumbnail("FIITJEE", "JEE Main & Advanced", "FIITJEE AITS & Intensive Rank Promoters Package", "All-India Benchmark", "fiitjee")
},
{
  "id": "fiitjee-keam-jee-04",
  "instituteId": "fiitjee",
  "institute": "FIITJEE",
  "name": "Two-Year Weekend Classroom for JEE Main & KEAM",
  "badge": "Kerala Engineering Target",
  "targetExam": "KEAM",
  "category": "Class 11 Two-Year",
  "rating": 4.7,
  "reviewsCount": 980,
  "price": 240000,
  "originalPrice": 270000,
  "gstNote": "Exclusive of GST",
  "installments": "4 quarterly installments of ₹62,000",
  "mode": "Weekend Kochi Classroom & Live Online",
  "language": "English with Regional Mentorship",
  "schedule": "Sat 2:00 PM - 7:00 PM & Sun 9:00 AM - 4:00 PM",
  "teachers": [
    "FIITJEE Kochi Senior Faculty"
  ],
  "studyMaterial": "FIITJEE Engineering Modules & Kerala CEE Question Compendium",
  "testsPerMonth": 6,
  "batchSize": "40 Students per Batch",
  "refundPolicy": "Standard FIITJEE policy within 14 days",
  "highlights": [
    "Strong conceptual foundation tailored for students prioritizing top KEAM & NIT Calicut seats",
    "Equal emphasis on high-speed KEAM numerical solving and JEE Main multi-choice logic",
    "Regular doubt clearing sessions scheduled every Wednesday and Friday evening",
    "Extensive revision of Class 11 topics during Class 12 first term"
  ]
,
  "image": generateCourseThumbnail("FIITJEE", "KEAM", "Two-Year Weekend Classroom for JEE Main & KEAM", "Kerala Engineering Target", "fiitjee")
},
{
  "id": "aakash-neet-rep-01",
  "instituteId": "aakash",
  "institute": "Aakash Digital / Institute",
  "name": "Aakash Live NEET Repeater Dropper Program",
  "badge": "National Medical Benchmark",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 3950,
  "price": 74500,
  "originalPrice": 88000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹25,500",
  "mode": "Live 2-Way Interactive Classroom via Aakash Live App",
  "language": "Bilingual (English + Malayalam Tutors) or Pure English",
  "schedule": "Mon - Sat • 9:00 AM - 2:30 PM",
  "teachers": [
    "National Aakash Medical Faculty (Ex-AIIMS/MAMC Alumni)"
  ],
  "studyMaterial": "Physical Printed Aakash Study Packages + AI-Assisted Test Series Delivered via Courier",
  "testsPerMonth": 8,
  "batchSize": "Interactive Digital Batch of 55 Students",
  "refundPolicy": "Pro-rata minus admission kit within 15 days of batch launch",
  "highlights": [
    "Access to All-India Aakash Test Series (AIATS) competing with 1,50,000+ national candidates",
    "AI-driven weakness diagnostic engine pointing out specific NCERT sub-topics needing revision",
    "2-way audio interaction allowing students to ask doubts directly during live lectures",
    "Dedicated Kerala regional doubt clearing faculty for Malayalam-assisted clarifications"
  ]
,
  "image": generateCourseThumbnail("Aakash Digital / Institute", "NEET", "Aakash Live NEET Repeater Dropper Program", "National Medical Benchmark", "aakash")
},
{
  "id": "aakash-plus2-02",
  "instituteId": "aakash",
  "institute": "Aakash Digital / Institute",
  "name": "Aakash Live Class 12 Regular AIIMS Target Batch",
  "badge": "Class 12 Medical",
  "targetExam": "NEET",
  "category": "Class 12 Regular",
  "rating": 4.8,
  "reviewsCount": 2840,
  "price": 68000,
  "originalPrice": 79000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹23,000",
  "mode": "Evening Live Interactive Classes + Weekend Tests",
  "language": "Bilingual / English",
  "schedule": "Mon, Wed, Fri • 5:30 PM - 8:45 PM & Sun Tests",
  "teachers": [
    "Aakash Senior Medical Educators"
  ],
  "studyMaterial": "Class 12 Printed Modules, Quick Revision Formula Books, Micro-Tests",
  "testsPerMonth": 6,
  "batchSize": "50 Students per Batch",
  "refundPolicy": "14-day trial refund policy",
  "highlights": [
    "Balances Class 12 board preparations with competitive NEET examination problem depth",
    "Step-by-step subjective board exam answer writing sessions before school finals",
    "Regular AIATS tests simulating real NTA exam pressures and negative marking management",
    "Recorded lecture archives available 24/7 for missed school classes"
  ]
,
  "image": generateCourseThumbnail("Aakash Digital / Institute", "NEET", "Aakash Live Class 12 Regular AIIMS Target Batch", "Class 12 Medical", "aakash")
},
{
  "id": "aakash-jee-rep-03",
  "instituteId": "aakash",
  "institute": "Aakash Digital / Institute",
  "name": "Aakash Repeater JEE Main & Advanced Target IIT",
  "badge": "Engineering Excellence",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 1890,
  "price": 72000,
  "originalPrice": 85000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹24,500",
  "mode": "Live Interactive Digital Classroom + Computer Based Tests",
  "language": "English + Bilingual Help",
  "schedule": "Mon - Sat • 8:30 AM - 2:00 PM",
  "teachers": [
    "Aakash Engineering Specialist Council"
  ],
  "studyMaterial": "Comprehensive 16-Volume JEE Study Package & DPP Compendium",
  "testsPerMonth": 8,
  "batchSize": "50 Students per Batch",
  "refundPolicy": "Standard 14-day refund window",
  "highlights": [
    "Rigorous problem sets covering JEE Main speed solving and JEE Advanced conceptual depth",
    "Aakash National JEE Test Series comparing percentile with students across India",
    "Live interactive doubt resolution with faculty immediately following each lecture",
    "Special numerical answer type (NAT) question drills without options"
  ]
,
  "image": generateCourseThumbnail("Aakash Digital / Institute", "JEE Main & Advanced", "Aakash Repeater JEE Main & Advanced Target IIT", "Engineering Excellence", "aakash")
},
{
  "id": "aakash-keam-crash-04",
  "instituteId": "aakash",
  "institute": "Aakash Digital / Institute",
  "name": "Aakash Digital Power Pack KEAM & JEE Revision",
  "badge": "High-Yield Revision",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.6,
  "reviewsCount": 3120,
  "price": 9900,
  "originalPrice": 14000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "High-Yield Live Crash Classes + CBT Mock Exams",
  "language": "English / Bilingual",
  "schedule": "Daily • 9:00 AM - 4:00 PM (Post-Board Exams)",
  "teachers": [
    "Aakash Crash Specialist Faculty"
  ],
  "studyMaterial": "Digital Crash Handbooks, 12 Full-Length Online Mock CBTs",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once classes commence",
  "highlights": [
    "12 full-length Computer-Based Tests strictly matching the updated KEAM pattern",
    "High-probability question banks curated from past 15 years Kerala entrance exams",
    "Speed calculations, approximation techniques and smart option elimination",
    "Expert option registration webinars assisting in seat selection at CET and GEC"
  ]
,
  "image": generateCourseThumbnail("Aakash Digital / Institute", "KEAM", "Aakash Digital Power Pack KEAM & JEE Revision", "High-Yield Revision", "aakash")
},
{
  "id": "srichaitanya-medicon-01",
  "instituteId": "srichaitanya",
  "institute": "Sri Chaitanya Educational Institutions",
  "name": "Sri Chaitanya MEDICON NEET Long-Term Repeater",
  "badge": "National Medical Factory",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 3650,
  "price": 118000,
  "originalPrice": 135000,
  "gstNote": "Inclusive of 18% GST (Installment facility available)",
  "installments": "3 installments of ₹40,000",
  "mode": "Classroom / Live Hybrid with Intensive Daily Drills",
  "language": "English + Regional Clarification",
  "schedule": "Mon - Sat • 8:30 AM - 4:30 PM",
  "teachers": [
    "Sri Chaitanya National Medical Faculty Council"
  ],
  "studyMaterial": "Complete MEDICON Study Kit (NCERT Extract, Drill Papers, Error Logs)",
  "testsPerMonth": 14,
  "batchSize": "Supervised Batch of 50 Students",
  "refundPolicy": "Pro-rata minus material fees within 10 days",
  "highlights": [
    "Producers of Top 10 All-India Ranks in NEET with military-grade testing discipline",
    "Micro-scheduled daily revision tests ensuring topics are tested within 48 hours of teaching",
    "Error analysis books: mandatory logging of every wrong MCQ to prevent repeat errors",
    "Dedicated Kerala campuses in Kochi, Calicut and Thrissur plus digital access"
  ]
,
  "image": generateCourseThumbnail("Sri Chaitanya Educational Institutions", "NEET", "Sri Chaitanya MEDICON NEET Long-Term Repeater", "National Medical Factory", "srichaitanya")
},
{
  "id": "srichaitanya-elite-jee-02",
  "instituteId": "srichaitanya",
  "institute": "Sri Chaitanya Educational Institutions",
  "name": "Sri Chaitanya ELITE / IPL JEE Main & Advanced Long-Term",
  "badge": "IIT-JEE Powerhouse",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.9,
  "reviewsCount": 2890,
  "price": 125000,
  "originalPrice": 140000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹42,500",
  "mode": "Intensive Classroom & Live Hybrid",
  "language": "English",
  "schedule": "Mon - Sat • 8:00 AM - 4:30 PM",
  "teachers": [
    "Sri Chaitanya ELITE Master IITians"
  ],
  "studyMaterial": "ELITE Concept Handbooks, Advanced Problem Compendium, AITS Tests",
  "testsPerMonth": 12,
  "batchSize": "Selective Batch of 45 Students",
  "refundPolicy": "Standard institutional policy within 10 days",
  "highlights": [
    "The celebrated IPL/ELITE system producing AIR 1 and single-digit ranks in JEE Advanced",
    "Uncompromising problem difficulty covering advanced international Olympiad concepts",
    "Weekly All-India Grand Tests comparing performance across 1,00,000+ top aspirants",
    "Daily 2-hour faculty doubt clearance and problem workshop after lectures"
  ]
,
  "image": generateCourseThumbnail("Sri Chaitanya Educational Institutions", "JEE Main & Advanced", "Sri Chaitanya ELITE / IPL JEE Main & Advanced Long-Term", "IIT-JEE Powerhouse", "srichaitanya")
},
{
  "id": "srichaitanya-score-crash-03",
  "instituteId": "srichaitanya",
  "institute": "Sri Chaitanya Educational Institutions",
  "name": "SCORE Rapid Revision & Crash Course (NEET & KEAM)",
  "badge": "Rapid Drill Revision",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.7,
  "reviewsCount": 3420,
  "price": 11500,
  "originalPrice": 15000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Intensive Daily Sessions + Online CBT Mocks",
  "language": "English / Bilingual",
  "schedule": "Daily • 8:30 AM - 4:00 PM",
  "teachers": [
    "Sri Chaitanya Crash Specialist Team"
  ],
  "studyMaterial": "SCORE High-Yield Formula Booklets & 12 Model Exam Papers",
  "testsPerMonth": 14,
  "batchSize": "Open Virtual & Campus Stream",
  "refundPolicy": "Non-refundable once crash commences",
  "highlights": [
    "Fast-track conceptual summary of entire syllabus in 40 compact days",
    "High-speed numerical solving techniques for Physics mechanics and electrodynamics",
    "12 full-length simulated CBT examinations with detailed solution keys",
    "Personalized rank predictor and college cutoff consultation"
  ]
,
  "image": generateCourseThumbnail("Sri Chaitanya Educational Institutions", "KEAM", "SCORE Rapid Revision & Crash Course (NEET & KEAM)", "Rapid Drill Revision", "srichaitanya")
},
{
  "id": "narayana-medspark-01",
  "instituteId": "narayana",
  "institute": "Narayana Coaching Academy",
  "name": "Narayana MED-SPARK NEET Repeater Intensive Program",
  "badge": "Micro-Scheduled Testing",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 2940,
  "price": 115000,
  "originalPrice": 130000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹39,000",
  "mode": "Campus Classroom & Interactive Live Stream",
  "language": "English + Regional Faculty Support",
  "schedule": "Mon - Sat • 8:30 AM - 4:30 PM",
  "teachers": [
    "Narayana National Medical Faculty Council"
  ],
  "studyMaterial": "Narayana Micro-Syllabus Modules, NCERT Decode Kits, Error Analysis Logs",
  "testsPerMonth": 14,
  "batchSize": "Supervised Cohort of 45 Students",
  "refundPolicy": "Pro-rata minus registration fee within 14 days",
  "highlights": [
    "Famous for micro-schedule blueprints breaking every chapter into 45-minute micro-topics",
    "Daily CDF (Concept Definition Formula) tests ensuring fundamental formulas are memorized",
    "Comprehensive weekly part tests and monthly cumulative full-length mock examinations",
    "High conversion rate for admissions into Top Government Medical Colleges"
  ]
,
  "image": generateCourseThumbnail("Narayana Coaching Academy", "NEET", "Narayana MED-SPARK NEET Repeater Intensive Program", "Micro-Scheduled Testing", "narayana")
},
{
  "id": "narayana-cospark-02",
  "instituteId": "narayana",
  "institute": "Narayana Coaching Academy",
  "name": "Narayana CO-SPARK JEE Advanced Intensive Program",
  "badge": "Olympiad & JEE Benchmark",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.9,
  "reviewsCount": 2450,
  "price": 130000,
  "originalPrice": 145000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹44,000",
  "mode": "Classroom / Live Hybrid with Problem Workshops",
  "language": "English",
  "schedule": "Mon - Sat • 8:00 AM - 4:30 PM",
  "teachers": [
    "Narayana CO-SPARK Master Faculty"
  ],
  "studyMaterial": "CO-SPARK Problem Volumes, Advanced Ranker Series, 20 Years Solved IIT Papers",
  "testsPerMonth": 12,
  "batchSize": "Selective Batch of 40 Students",
  "refundPolicy": "Standard institutional policy within 14 days",
  "highlights": [
    "Narayana's elite CO-SPARK methodology celebrated for producing All-India Top 10 ranks",
    "Intensive multi-concept problem solving with customized guidance from Ex-IIT faculty",
    "Weekly computer-based test series with granular percentile analysis across 23 states",
    "Dedicated doubt sessions ensuring no question remains unanswered"
  ]
,
  "image": generateCourseThumbnail("Narayana Coaching Academy", "JEE Main & Advanced", "Narayana CO-SPARK JEE Advanced Intensive Program", "Olympiad & JEE Benchmark", "narayana")
},
{
  "id": "narayana-keam-2yr-03",
  "instituteId": "narayana",
  "institute": "Narayana Coaching Academy",
  "name": "Two-Year Integrated Classroom Program (Class 11 & 12)",
  "badge": "Two-Year Master",
  "targetExam": "KEAM",
  "category": "Class 11 Two-Year",
  "rating": 4.7,
  "reviewsCount": 1680,
  "price": 185000,
  "originalPrice": 210000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "4 quarterly installments of ₹47,000",
  "mode": "Integrated Classroom & Live Hybrid",
  "language": "English + Bilingual Support",
  "schedule": "Mon - Fri • Integrated Schedule with School Syllabus",
  "teachers": [
    "Narayana Senior Department Heads"
  ],
  "studyMaterial": "Narayana 2-Year Comprehensive Textbooks & Question Banks",
  "testsPerMonth": 8,
  "batchSize": "40 Students per Batch",
  "refundPolicy": "Pro-rata within 20 days of commencement",
  "highlights": [
    "Simultaneous board exam preparation with high-scoring entrance problem tactics",
    "Early completion of Class 12 syllabus by October for 5 full months of revision",
    "Individual student mentorship tracking marks, speed and emotional well-being",
    "Weekly parent progress reports sent via SMS and mobile app"
  ]
,
  "image": generateCourseThumbnail("Narayana Coaching Academy", "KEAM", "Two-Year Integrated Classroom Program (Class 11 & 12)", "Two-Year Master", "narayana")
},
{
  "id": "pw-yakeen-mal-01",
  "instituteId": "physicswallah",
  "institute": "Physics Wallah (PW Malayalam & National)",
  "name": "Yakeen NEET Malayalam 2.0 Repeater Batch",
  "badge": "Lowest Price Champion",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 5890,
  "price": 4800,
  "originalPrice": 8500,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment (Extremely Affordable)",
  "mode": "Live & Recorded Classes on PW App + Daily DPPs",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 8:30 AM - 1:30 PM",
  "teachers": [
    "Jithin Sir (Physics)",
    "Dr. Sreejith (Biology)",
    "Anand Sir (Chemistry)"
  ],
  "studyMaterial": "Digital Notes, PDFs & Optional Printed Yakeen Modules delivered home",
  "testsPerMonth": 6,
  "batchSize": "Mass Virtual Classroom with Doubt Engine",
  "refundPolicy": "Standard PW 7-day app refund terms",
  "highlights": [
    "The undisputed price-to-value champion in competitive exam preparation",
    "Daily Practice Problems (DPP) with high quality Malayalam video step-by-step solutions",
    "AI-powered Saarthi doubt engine and peer discussion rooms on PW app",
    "Full access to test series with national rank benchmarking across 2,00,000+ students"
  ]
,
  "image": generateCourseThumbnail("Physics Wallah (PW Malayalam & National)", "NEET", "Yakeen NEET Malayalam 2.0 Repeater Batch", "Lowest Price Champion", "pw")
},
{
  "id": "pw-prayas-mal-02",
  "instituteId": "physicswallah",
  "institute": "Physics Wallah (PW Malayalam & National)",
  "name": "Prayas JEE Malayalam Dropper Batch",
  "badge": "Budget Engineering",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 3410,
  "price": 4500,
  "originalPrice": 8000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Live Classes on PW App + Computer Based Tests",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 8:30 AM - 1:30 PM",
  "teachers": [
    "Prof. Manu (Maths)",
    "Renjith Sir (Physics)",
    "PW Faculty"
  ],
  "studyMaterial": "Digital Study Modules & Question Banks (Hardcopy optional)",
  "testsPerMonth": 6,
  "batchSize": "Live Stream with Moderated QA",
  "refundPolicy": "7-day cancellation window",
  "highlights": [
    "Complete coverage of JEE Main & Advanced curriculum in accessible Malayalam",
    "Extensive coverage of numerical problems from past 10 years of NTA exams",
    "Bi-weekly tests strictly formatted to the NTA testing system interface",
    "Affordable pricing democratizing quality coaching across all Kerala districts"
  ]
,
  "image": generateCourseThumbnail("Physics Wallah (PW Malayalam & National)", "JEE Main & Advanced", "Prayas JEE Malayalam Dropper Batch", "Budget Engineering", "pw")
},
{
  "id": "pw-lakshya-03",
  "instituteId": "physicswallah",
  "institute": "Physics Wallah (PW Malayalam & National)",
  "name": "Lakshya NEET (Class 12 Regular)",
  "badge": "Class 12 Value",
  "targetExam": "NEET",
  "category": "Class 12 Regular",
  "rating": 4.8,
  "reviewsCount": 4200,
  "price": 4200,
  "originalPrice": 7500,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Live App Classes + Evening Doubts",
  "language": "Malayalam / Hinglish",
  "schedule": "Mon - Fri • 5:00 PM - 8:00 PM",
  "teachers": [
    "PW Senior Faculty Team"
  ],
  "studyMaterial": "PDF Handouts, NCERT Line-by-Line Highlighted Notes",
  "testsPerMonth": 4,
  "batchSize": "Live Stream",
  "refundPolicy": "7-day refund policy",
  "highlights": [
    "Comprehensive board exam derivations plus entrance level MCQ problem solving",
    "Topic-wise DPPs with instant video solutions for self-paced clearing",
    "Regular weekend tests tracking student accuracy and negative marking",
    "24/7 access to recorded lectures for quick revision before school exams"
  ]
,
  "image": generateCourseThumbnail("Physics Wallah (PW Malayalam & National)", "NEET", "Lakshya NEET (Class 12 Regular)", "Class 12 Value", "pw")
},
{
  "id": "pw-keam-crash-04",
  "instituteId": "physicswallah",
  "institute": "Physics Wallah (PW Malayalam & National)",
  "name": "KEAM Ultimate Fastrack Crash Course",
  "badge": "Lowest Price Crash",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.7,
  "reviewsCount": 4900,
  "price": 2199,
  "originalPrice": 4999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Daily Live Fast-Paced Streams + Online Mock Tests",
  "language": "Malayalam + English",
  "schedule": "Daily • 9:00 AM - 3:30 PM",
  "teachers": [
    "PW Kerala Engineering Team"
  ],
  "studyMaterial": "Digital Crash Handbooks & 10 Online KEAM CBTs",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once batch starts",
  "highlights": [
    "Super-fast revision of all key concepts at an unbeatable price of ₹2,199",
    "10 complete computer-based tests matching the official CEE format",
    "Extensive calculation shortcuts for Physics and Mathematics",
    "Accessible to every student across Kerala seeking quick final revision"
  ]
,
  "image": generateCourseThumbnail("Physics Wallah (PW Malayalam & National)", "KEAM", "KEAM Ultimate Fastrack Crash Course", "Lowest Price Crash", "pw")
},
{
  "id": "allen-leader-neet-01",
  "instituteId": "allen",
  "institute": "Allen Digital",
  "name": "Allen Leader NEET Dropper / Repeater Course",
  "badge": "Kota Standard",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.9,
  "reviewsCount": 3120,
  "price": 88000,
  "originalPrice": 98000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹45,000",
  "mode": "Live Interactive Digital Classroom via Allen App",
  "language": "English / Hinglish with English Study Modules",
  "schedule": "Mon - Sat • 8:30 AM - 2:00 PM",
  "teachers": [
    "Kota Benchmark Senior Medical Faculty Council"
  ],
  "studyMaterial": "Complete Set of Allen Kota Printed Study Modules Mailed to Doorstep",
  "testsPerMonth": 8,
  "batchSize": "50 Students per Interactive Group",
  "refundPolicy": "Pro-rata refund minus admin cost within first 14 days",
  "highlights": [
    "Legendary Allen Kota study material refined over 35 years with zero factual errors",
    "Allen Leader Test Series (All-India rank comparison with 1,20,000+ medical aspirants)",
    "Dedicated live doubt clearing counters with subject experts every afternoon",
    "Deep focus on high-yield NCERT diagrams, biotechnology steps, and pedigree analysis"
  ]
,
  "image": generateCourseThumbnail("Allen Digital", "NEET", "Allen Leader NEET Dropper / Repeater Course", "Kota Standard", "allen")
},
{
  "id": "allen-leader-jee-02",
  "instituteId": "allen",
  "institute": "Allen Digital",
  "name": "Allen Leader JEE (Main & Advanced) Dropper Course",
  "badge": "Kota Engineering Benchmark",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 2210,
  "price": 82000,
  "originalPrice": 92000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹42,000",
  "mode": "Live 2-Way Interactive Classroom",
  "language": "English / Hinglish",
  "schedule": "Mon - Sat • 8:30 AM - 2:00 PM",
  "teachers": [
    "Allen Kota Master Engineering Faculty"
  ],
  "studyMaterial": "Complete Allen Kota Engineering Modules, Race Sheet Handouts",
  "testsPerMonth": 8,
  "batchSize": "50 Students per Batch",
  "refundPolicy": "Standard 14-day refund window",
  "highlights": [
    "Comprehensive coverage of challenging multi-step numericals for JEE Advanced",
    "Allen Major Test Series strictly replicating the official NTA testing atmosphere",
    "Race sheets (daily challenge sheets) pushing analytical thought beyond routine formulas",
    "Regular interactive counseling and motivational sessions by Kota directors"
  ]
,
  "image": generateCourseThumbnail("Allen Digital", "JEE Main & Advanced", "Allen Leader JEE (Main & Advanced) Dropper Course", "Kota Engineering Benchmark", "allen")
},
{
  "id": "allen-nurture-03",
  "instituteId": "allen",
  "institute": "Allen Digital",
  "name": "Allen Nurture Course (Class 11 Two-Year NEET/JEE)",
  "badge": "Two-Year Kota Master",
  "targetExam": "NEET",
  "category": "Class 11 Two-Year",
  "rating": 4.9,
  "reviewsCount": 2450,
  "price": 128000,
  "originalPrice": 145000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹44,000",
  "mode": "Live Classes + Weekend Tests",
  "language": "English",
  "schedule": "Mon, Wed, Fri • 4:30 PM - 8:00 PM",
  "teachers": [
    "Allen Senior Foundation Faculty"
  ],
  "studyMaterial": "Complete 2-Year Kota Printed Study Packages & Question Banks",
  "testsPerMonth": 6,
  "batchSize": "45 Students per Batch",
  "refundPolicy": "Standard Allen refund policy within 20 days",
  "highlights": [
    "Gradual conceptual progression from 10th standard science to national competition",
    "Continuous cycle of revision ensuring Class 11 chapters are never forgotten in Class 12",
    "Detailed mentor check-ins with parents every month",
    "Produces consistent All-India ranks in Top 50 of NEET and JEE Advanced"
  ]
,
  "image": generateCourseThumbnail("Allen Digital", "NEET", "Allen Nurture Course (Class 11 Two-Year NEET/JEE)", "Two-Year Kota Master", "allen")
},
{
  "id": "allen-keam-crash-04",
  "instituteId": "allen",
  "institute": "Allen Digital",
  "name": "Allen Digital KEAM & JEE Speed Rank Booster",
  "badge": "Speed Rank Booster",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.7,
  "reviewsCount": 1980,
  "price": 11500,
  "originalPrice": 15000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Live Crash Classes + CBT Mock Exams",
  "language": "English",
  "schedule": "Daily • 9:00 AM - 4:00 PM",
  "teachers": [
    "Allen Crash Specialist Team"
  ],
  "studyMaterial": "Digital Crash Handbooks & 12 Computer-Based Mock Tests",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once classes begin",
  "highlights": [
    "Targeted coverage of the most high-frequency question patterns in KEAM and JEE Main",
    "12 full-length Computer Based Tests strictly matching the updated KEAM pattern",
    "Speed calculations, approximation techniques and smart option elimination",
    "Comprehensive test solution analysis with faculty discussion webinars"
  ]
,
  "image": generateCourseThumbnail("Allen Digital", "KEAM", "Allen Digital KEAM & JEE Speed Rank Booster", "Speed Rank Booster", "allen")
},
{
  "id": "zephyr-neet-rep-01",
  "instituteId": "zephyr",
  "institute": "Zephyr Entrance Coaching",
  "name": "Zephyr Medical Repeaters (Intensive NEET Focus)",
  "badge": "Personal Attention",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 1870,
  "price": 48000,
  "originalPrice": 56000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹16,500",
  "mode": "Live Virtual Classroom with 2-Way Faculty Audio Interaction",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 9:00 AM - 3:00 PM",
  "teachers": [
    "Prof. S. R. Nair (Physics)",
    "Dr. Deepa (Biology)",
    "M. K. Pillai (Chemistry)"
  ],
  "studyMaterial": "Complete 14-Volume Zephyr Entrance Study Series Delivered by Speed Post",
  "testsPerMonth": 8,
  "batchSize": "Strict Limit of 40 Students per Virtual Batch",
  "refundPolicy": "14-day refund window minus study material courier charges",
  "highlights": [
    "Small batch size of 40 students allows teachers to unmute and ask questions directly",
    "South Kerala's most trusted entrance institute with 30-year legacy in Trivandrum",
    "Bi-weekly individual mentor reviews discussing test score trends with parents",
    "Special emphasis on NCERT Biology diagrams and organic chemical conversion pathways"
  ]
,
  "image": generateCourseThumbnail("Zephyr Entrance Coaching", "NEET", "Zephyr Medical Repeaters (Intensive NEET Focus)", "Personal Attention", "zephyr")
},
{
  "id": "zephyr-jee-rep-02",
  "instituteId": "zephyr",
  "institute": "Zephyr Entrance Coaching",
  "name": "Zephyr Engineering Repeaters (JEE & KEAM)",
  "badge": "Kerala Engineering Specialist",
  "targetExam": "JEE Main & Advanced",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 1420,
  "price": 42000,
  "originalPrice": 50000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹14,500",
  "mode": "Live 2-Way Interactive Class + Evening Doubts",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 9:00 AM - 2:30 PM",
  "teachers": [
    "Prof. G. Varma (Maths)",
    "Renjith Sir (Physics)",
    "Zephyr Senior Team"
  ],
  "studyMaterial": "12 Zephyr Engineering Volumes + 2500 Solved Problems",
  "testsPerMonth": 8,
  "batchSize": "40 Students per Batch",
  "refundPolicy": "14-day satisfaction refund",
  "highlights": [
    "Strong historical track record producing top engineering ranks in CET Trivandrum & TKM",
    "Dedicated KEAM mathematics speed-drills with shortcut formulas",
    "Regular testing on updated computer based examination interface",
    "Evening faculty hours dedicated to resolving individual student doubt lists"
  ]
,
  "image": generateCourseThumbnail("Zephyr Entrance Coaching", "JEE Main & Advanced", "Zephyr Engineering Repeaters (JEE & KEAM)", "Kerala Engineering Specialist", "zephyr")
},
{
  "id": "zephyr-keam-crash-03",
  "instituteId": "zephyr",
  "institute": "Zephyr Entrance Coaching",
  "name": "Zephyr Crash Course (NEET & KEAM)",
  "badge": "South Kerala Favorite",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.8,
  "reviewsCount": 2450,
  "price": 8500,
  "originalPrice": 11000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Daily Live Interactive Sessions + Full CBT Mocks",
  "language": "Malayalam + English",
  "schedule": "Daily • 8:30 AM - 4:00 PM",
  "teachers": [
    "Zephyr Senior Crash Specialists"
  ],
  "studyMaterial": "Zephyr Crash Handouts, 12 Computer-Based KEAM Mocks",
  "testsPerMonth": 12,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once classes start",
  "highlights": [
    "12 comprehensive model examinations prepared by veteran entrance examiners",
    "Rapid-fire problem solving in physics mechanics, organic mechanisms and calculus",
    "Detailed answer discussion sessions highlighting common traps and mistakes",
    "Personal counseling for KEAM option registration"
  ]
,
  "image": generateCourseThumbnail("Zephyr Entrance Coaching", "KEAM", "Zephyr Crash Course (NEET & KEAM)", "South Kerala Favorite", "zephyr")
},
{
  "id": "rays-super40-01",
  "instituteId": "rays",
  "institute": "Rays Edutech Kerala",
  "name": "Rays Super 40 NEET Repeater Program",
  "badge": "Super-40 Intensive",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 1650,
  "price": 38000,
  "originalPrice": 46000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹19,500",
  "mode": "Live Small Batch Video Classroom",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 9:00 AM - 3:00 PM",
  "teachers": [
    "Dr. Faisal (Biology)",
    "Nishad Sir (Physics)",
    "Anas Sir (Chemistry)"
  ],
  "studyMaterial": "Complete Rays Printed Entrance Handbooks Delivered Home",
  "testsPerMonth": 8,
  "batchSize": "Strict Limit of 40 Students",
  "refundPolicy": "10-day refund window",
  "highlights": [
    "North Kerala's established entrance champion producing consistent GMC admissions",
    "Rigid limit of 40 students per batch ensures individual oral testing by faculty",
    "Weekly Sunday full-syllabus tests with personalized feedback reports",
    "Strong pastoral care keeping repeaters mentally resilient and focused"
  ]
,
  "image": generateCourseThumbnail("Rays Edutech Kerala", "NEET", "Rays Super 40 NEET Repeater Program", "Super-40 Intensive", "rays")
},
{
  "id": "rays-keam-eng-02",
  "instituteId": "rays",
  "institute": "Rays Edutech Kerala",
  "name": "Rays KEAM & JEE Engineering Rank Batch",
  "badge": "Malabar Engineering",
  "targetExam": "KEAM",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 1210,
  "price": 32000,
  "originalPrice": 40000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹16,500",
  "mode": "Live App Classes + Problem Sessions",
  "language": "Malayalam + English",
  "schedule": "Mon - Fri • 9:00 AM - 2:00 PM",
  "teachers": [
    "Prof. Shaji (Maths)",
    "Rays Engineering Team"
  ],
  "studyMaterial": "Rays Engineering Problem Compendium & 10 Mock CBTs",
  "testsPerMonth": 8,
  "batchSize": "40 Students per Batch",
  "refundPolicy": "10-day refund policy",
  "highlights": [
    "Focused preparation for securing top government engineering seats (NIT Calicut, CET)",
    "Daily problem sheets emphasizing speed and precision",
    "Regular doubt clearing sessions with faculty after class hours",
    "Mock CBTs matching the Kerala CEE online test environment"
  ]
,
  "image": generateCourseThumbnail("Rays Edutech Kerala", "KEAM", "Rays KEAM & JEE Engineering Rank Batch", "Malabar Engineering", "rays")
},
{
  "id": "alpha-neet-rep-01",
  "instituteId": "alpha",
  "institute": "Alpha Entrance Academy",
  "name": "Alpha NEET Repeater Intensive Residential / Online",
  "badge": "High Conversion Rate",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.8,
  "reviewsCount": 1720,
  "price": 45000,
  "originalPrice": 52000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹15,500",
  "mode": "Live Interactive Hybrid + Mentored Study Hours",
  "language": "Malayalam + English",
  "schedule": "Mon - Sat • 8:45 AM - 3:30 PM",
  "teachers": [
    "Dr. Roy (Botany)",
    "Prof. Zacharia (Physics)",
    "P. K. Mathew (Zoology)"
  ],
  "studyMaterial": "Alpha Entrance Core Series Textbooks Delivered Home",
  "testsPerMonth": 10,
  "batchSize": "45 Students per Batch",
  "refundPolicy": "14-day refund policy",
  "highlights": [
    "Renowned Alappuzha & Changanassery institution with highest rank conversion rates",
    "Daily revision papers testing prior day's lessons before morning lectures start",
    "Strict negative marking tracking helping students avoid over-guessing",
    "Supportive academic environment with personal counseling for drop-year anxiety"
  ]
,
  "image": generateCourseThumbnail("Alpha Entrance Academy", "NEET", "Alpha NEET Repeater Intensive Residential / Online", "High Conversion Rate", "alpha")
},
{
  "id": "alpha-keam-eng-02",
  "instituteId": "alpha",
  "institute": "Alpha Entrance Academy",
  "name": "Alpha KEAM Special Engineering Batch",
  "badge": "Central Travancore Favorite",
  "targetExam": "KEAM",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 1140,
  "price": 35000,
  "originalPrice": 42000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹18,000",
  "mode": "Live Online & Classroom",
  "language": "Malayalam + English",
  "schedule": "Mon - Fri • 9:00 AM - 2:30 PM",
  "teachers": [
    "Prof. Zacharia (Physics)",
    "Maths Specialist Team"
  ],
  "studyMaterial": "Alpha Engineering Modules & 12 KEAM CBT Papers",
  "testsPerMonth": 8,
  "batchSize": "45 Students per Batch",
  "refundPolicy": "14-day refund window",
  "highlights": [
    "High selection rate for Rajiv Gandhi Institute of Technology (RIT) & CET",
    "Special emphasis on calculus and coordinate geometry speed tricks",
    "Weekly computer-based test series with granular rank analysis",
    "Dedicated option counseling for KEAM engineering seat selection"
  ]
,
  "image": generateCourseThumbnail("Alpha Entrance Academy", "KEAM", "Alpha KEAM Special Engineering Batch", "Central Travancore Favorite", "alpha")
},
{
  "id": "pcmb-neet-rep-01",
  "instituteId": "pcmb",
  "institute": "PCMB Entrance Coaching",
  "name": "PCMB NEET Repeater Dropper Program",
  "badge": "Focused Mentorship",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 1320,
  "price": 26000,
  "originalPrice": 32000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹13,500",
  "mode": "Live Virtual Classroom + Daily Practice Worksheets",
  "language": "Malayalam + English (Bilingual)",
  "schedule": "Mon - Sat • 9:00 AM - 2:00 PM",
  "teachers": [
    "Prof. S. Nambiar (Physics)",
    "Dr. Haritha (Biology)",
    "Ajith Sir (Chem)"
  ],
  "studyMaterial": "PCMB Core Workbooks & Question Banks Delivered via Courier",
  "testsPerMonth": 8,
  "batchSize": "35 Students per Batch",
  "refundPolicy": "7-day money back guarantee",
  "highlights": [
    "Specialized entrance hub focusing on targeted numerical practice in Physics",
    "Line-by-line NCERT Biology mastery with daily 100-question speed drills",
    "Small cohort size of 35 students ensuring no student falls behind",
    "Affordable pricing structure ideal for middle-class Kerala families"
  ]
,
  "image": generateCourseThumbnail("PCMB Entrance Coaching", "NEET", "PCMB NEET Repeater Dropper Program", "Focused Mentorship", "pcmb")
},
{
  "id": "pcmb-keam-crash-02",
  "instituteId": "pcmb",
  "institute": "PCMB Entrance Coaching",
  "name": "PCMB KEAM Rank Booster Batch",
  "badge": "Numerical Mastery",
  "targetExam": "KEAM",
  "category": "Crash Course",
  "rating": 4.6,
  "reviewsCount": 1540,
  "price": 6500,
  "originalPrice": 9000,
  "gstNote": "Inclusive of 18% GST",
  "installments": "Single payment",
  "mode": "Daily Live Fastrack Sessions + CBT Mocks",
  "language": "Malayalam + English",
  "schedule": "Daily • 9:00 AM - 3:30 PM",
  "teachers": [
    "PCMB Engineering Faculty Team"
  ],
  "studyMaterial": "Digital Crash Handbooks & 8 Full KEAM Mocks",
  "testsPerMonth": 10,
  "batchSize": "Open Virtual Stream",
  "refundPolicy": "Non-refundable once classes begin",
  "highlights": [
    "Focused numerical practice in Physics and Mathematics",
    "8 full-length Computer Based Tests strictly matching the updated KEAM pattern",
    "Shortcuts and speed calculation tricks to maximize scoring speed",
    "Comprehensive test solution analysis with faculty discussion webinars"
  ]
,
  "image": generateCourseThumbnail("PCMB Entrance Coaching", "KEAM", "PCMB KEAM Rank Booster Batch", "Numerical Mastery", "pcmb")
},
{
  "id": "unacad-neet-rep-01",
  "instituteId": "unacademy",
  "institute": "Unacademy Kerala",
  "name": "Unacademy Kerala NEET Dropper Batch (Malayalam & English)",
  "badge": "Flexible Digital Learning",
  "targetExam": "NEET",
  "category": "Repeater / Dropper",
  "rating": 4.7,
  "reviewsCount": 2780,
  "price": 14999,
  "originalPrice": 24999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "3 installments of ₹5,200",
  "mode": "Live Interactive App Streams with Dual Educator Live Doubt Desk",
  "language": "Malayalam + English",
  "schedule": "Mon - Sat • 8:30 AM - 1:30 PM",
  "teachers": [
    "Unacademy Kerala Top Educators Council"
  ],
  "studyMaterial": "Comprehensive Digital Notes, In-App Question Bank & Optional Printed Modules",
  "testsPerMonth": 8,
  "batchSize": "Large Interactive Live Community",
  "refundPolicy": "7-day subscription cancellation policy",
  "highlights": [
    "Learn from top educators across Kerala with choice to switch between teachers anytime",
    "Unlimited access to all previous recorded lectures and test series databases",
    "Live interactive polls during lectures measuring speed and accuracy against peers",
    "Structured micro-courses allowing students to re-learn specific weak chapters"
  ]
,
  "image": generateCourseThumbnail("Unacademy Kerala", "NEET", "Unacademy Kerala NEET Dropper Batch (Malayalam & English)", "Flexible Digital Learning", "unacad")
},
{
  "id": "unacad-keam-02",
  "instituteId": "unacademy",
  "institute": "Unacademy Kerala",
  "name": "Unacademy Kerala KEAM & JEE 1-Year Comprehensive",
  "badge": "Customizable Track",
  "targetExam": "KEAM",
  "category": "Class 12 Regular",
  "rating": 4.6,
  "reviewsCount": 1890,
  "price": 13500,
  "originalPrice": 21999,
  "gstNote": "Inclusive of 18% GST",
  "installments": "2 installments of ₹7,000",
  "mode": "Live App Classes + Test Series",
  "language": "Malayalam + English",
  "schedule": "Mon - Fri • 6:00 PM - 8:30 PM",
  "teachers": [
    "Unacademy Engineering Council"
  ],
  "studyMaterial": "Digital Notes, PYQ Solved Handbooks, 10 Mock CBTs",
  "testsPerMonth": 6,
  "batchSize": "Interactive Live Stream",
  "refundPolicy": "7-day subscription cancellation",
  "highlights": [
    "Customizable study schedules fitting around regular school timings",
    "Comprehensive test series matching the latest online KEAM examination interface",
    "Instant doubt solving tool with step-by-step video solutions",
    "Full coverage of both Class 11 and Class 12 engineering topics"
  ]
,
  "image": generateCourseThumbnail("Unacademy Kerala", "KEAM", "Unacademy Kerala KEAM & JEE 1-Year Comprehensive", "Customizable Track", "unacad")
}
];

const BATCHES_DATA = COACHING_BATCHES;
