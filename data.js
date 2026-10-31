// ==========================================================================
// path2learn - Comprehensive Online Entrance Coaching Catalog Database
// Exclusively Focused on 100% Online Live & Hybrid Batches for NEET, JEE & KEAM
// ==========================================================================

// Institute Metadata & Order Definition (21 Premier Online Institutes)
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
    "shortCode": "EDU",
    "location": "Online Live & Adapt AI App",
    "established": "2019",
    "reputationTag": "Tech-Forward • Adapt AI Pioneer",
    "description": "Premier Kerala digital learning powerhouse founded by IIT/NIT alumni, famous for integrated Plus One/Plus Two online coaching with Adapt AI doubt resolution."
  },
  {
    "id": "examwinner",
    "name": "Exam Winner Learning",
    "shortCode": "EW",
    "location": "Online Live Web & Mobile App",
    "established": "2019",
    "reputationTag": "Board + NEET Powerhouse • Millions of Aspirants",
    "description": "Kerala's most widely watched online educational platform, delivering high-impact Malayalam live coaching, Vedha NEET repeaters, and tuition integration."
  },
  {
    "id": "pcthomas",
    "name": "Prof. P.C. Thomas & Chaithanya Classes",
    "shortCode": "PCT",
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
    "shortCode": "SC",
    "location": "Infinity Learn App & Live Portal",
    "established": "1986",
    "reputationTag": "National Rank Factory • MEDICON & ELITE",
    "description": "Premier pan-India online coaching platform famed for its MEDICON NEET and ELITE JEE Advanced programs with micro-scheduled drill testing and live doubt resolution."
  },
  {
    "id": "narayana",
    "name": "Narayana Digital (CO-SPARK)",
    "shortCode": "NAR",
    "location": "Narayana Live & e-Chaitanya",
    "established": "1979",
    "reputationTag": "Olympiad & JEE Rigor • CO-SPARK Engine",
    "description": "Pioneering national academic group known for systematic micro-level online test schedules, live doubt-clearing sessions, and specialized CO-SPARK batches."
  },
  {
    "id": "vedantu",
    "name": "Vedantu Learning",
    "shortCode": "VED",
    "location": "WAVE 2.0 Live Learning App",
    "established": "2014",
    "reputationTag": "Interactive LIVE Pioneer • Tatva Books",
    "description": "India's online live learning pioneer featuring WAVE 2-way interactive technology, Tatva courier book modules, and dedicated Malayalam & English NEET/JEE batches."
  },
  {
    "id": "time",
    "name": "T.I.M.E. Online",
    "shortCode": "TIME",
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
    "shortCode": "NP",
    "location": "Neetprep Learning App & Web",
    "established": "2017",
    "reputationTag": "Pure NEET Specialization • NCERT Question Bank",
    "description": "India's premier dedicated online NEET platform, famed for Target Batch NCERT audio books, 35,000+ curated MCQ bank, and masterclasses by Dr. NK Sharma & Kapil Gupta."
  },
  {
    "id": "careerpoint",
    "name": "eCareerPoint (Career Point Online)",
    "shortCode": "CP",
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
    "shortCode": "UNA",
    "location": "Unacademy Live App",
    "established": "2015",
    "reputationTag": "Flexible Schedules • Elite Educators",
    "description": "Flexible digital learning powerhouse featuring top Kerala faculties, extensive PYQ test databases, and customizable study tracks."
  }
];

// Course Thumbnail Generator
function generateCourseThumbnail(institute, exam, title, badge, theme = "pala") {
  const themes = {
  "pala": {
    "bg1": "#0a192f",
    "bg2": "#1e3a8a",
    "text": "#f8fafc",
    "accent": "#38bdf8",
    "tagBg": "rgba(56,189,248,0.2)",
    "tagColor": "#bae6fd"
  },
  "xylem": {
    "bg1": "#14532d",
    "bg2": "#166534",
    "text": "#f0fdf4",
    "accent": "#4ade80",
    "tagBg": "rgba(74,222,128,0.2)",
    "tagColor": "#bbf7d0"
  },
  "eduport": {
    "bg1": "#1e1b4b",
    "bg2": "#312e81",
    "text": "#e0e7ff",
    "accent": "#818cf8",
    "tagBg": "rgba(129,140,248,0.2)",
    "tagColor": "#c7d2fe"
  },
  "examwinner": {
    "bg1": "#3b0764",
    "bg2": "#581c87",
    "text": "#faf5ff",
    "accent": "#f59e0b",
    "tagBg": "rgba(245,158,11,0.25)",
    "tagColor": "#fde68a"
  },
  "pcthomas": {
    "bg1": "#450a0a",
    "bg2": "#7f1d1d",
    "text": "#fef2f2",
    "accent": "#f87171",
    "tagBg": "rgba(248,113,113,0.2)",
    "tagColor": "#fecaca"
  },
  "fiitjee": {
    "bg1": "#3f0a0a",
    "bg2": "#581212",
    "text": "#fffbeb",
    "accent": "#fbbf24",
    "tagBg": "rgba(251,191,36,0.25)",
    "tagColor": "#fef08a"
  },
  "aakash": {
    "bg1": "#082f49",
    "bg2": "#0369a1",
    "text": "#f0f9ff",
    "accent": "#38bdf8",
    "tagBg": "rgba(56,189,248,0.2)",
    "tagColor": "#bae6fd"
  },
  "srichaitanya": {
    "bg1": "#0f172a",
    "bg2": "#1e3a8a",
    "text": "#eff6ff",
    "accent": "#60a5fa",
    "tagBg": "rgba(96,165,250,0.2)",
    "tagColor": "#bfdbfe"
  },
  "narayana": {
    "bg1": "#022c22",
    "bg2": "#064e3b",
    "text": "#ecfdf5",
    "accent": "#34d399",
    "tagBg": "rgba(52,211,153,0.2)",
    "tagColor": "#a7f3d0"
  },
  "pw": {
    "bg1": "#27272a",
    "bg2": "#18181b",
    "text": "#fafafa",
    "accent": "#f43f5e",
    "tagBg": "rgba(244,63,94,0.2)",
    "tagColor": "#fecdd3"
  },
  "allen": {
    "bg1": "#083344",
    "bg2": "#0e7490",
    "text": "#ecfeff",
    "accent": "#22d3ee",
    "tagBg": "rgba(34,211,238,0.2)",
    "tagColor": "#a5f3fc"
  },
  "zephyr": {
    "bg1": "#1c1917",
    "bg2": "#292524",
    "text": "#fafaf9",
    "accent": "#fb923c",
    "tagBg": "rgba(251,146,60,0.2)",
    "tagColor": "#fed7aa"
  },
  "rays": {
    "bg1": "#1e293b",
    "bg2": "#334155",
    "text": "#f8fafc",
    "accent": "#a855f7",
    "tagBg": "rgba(168,85,247,0.2)",
    "tagColor": "#e9d5ff"
  },
  "alpha": {
    "bg1": "#31103f",
    "bg2": "#4a154b",
    "text": "#fdf4ff",
    "accent": "#e879f9",
    "tagBg": "rgba(232,121,249,0.2)",
    "tagColor": "#f5d0fe"
  },
  "pcmb": {
    "bg1": "#172554",
    "bg2": "#1d4ed8",
    "text": "#eff6ff",
    "accent": "#93c5fd",
    "tagBg": "rgba(147,197,253,0.2)",
    "tagColor": "#dbeafe"
  },
  "unacad": {
    "bg1": "#0c1e33",
    "bg2": "#164e63",
    "text": "#f0fdfa",
    "accent": "#2dd4bf",
    "tagBg": "rgba(45,212,191,0.2)",
    "tagColor": "#99f6e4"
  },
  "time": {
    "bg1": "#831843",
    "bg2": "#9d174d",
    "text": "#fdf2f8",
    "accent": "#f472b6",
    "tagBg": "rgba(244,114,182,0.25)",
    "tagColor": "#fbcfe8"
  },
  "vedantu": {
    "bg1": "#ea580c",
    "bg2": "#c2410c",
    "text": "#fff7ed",
    "accent": "#fdba74",
    "tagBg": "rgba(253,186,116,0.25)",
    "tagColor": "#ffedd5"
  },
  "motion": {
    "bg1": "#1e1b4b",
    "bg2": "#4338ca",
    "text": "#e0e7ff",
    "accent": "#a5b4fc",
    "tagBg": "rgba(165,180,252,0.25)",
    "tagColor": "#c7d2fe"
  },
  "neetprep": {
    "bg1": "#0f766e",
    "bg2": "#115e59",
    "text": "#f0fdfa",
    "accent": "#5eead4",
    "tagBg": "rgba(94,234,212,0.25)",
    "tagColor": "#ccfbf1"
  },
  "careerpoint": {
    "bg1": "#701a75",
    "bg2": "#86198f",
    "text": "#fdf4ff",
    "accent": "#e879f9",
    "tagBg": "rgba(232,121,249,0.25)",
    "tagColor": "#fae8ff"
  }
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
    <text x="50" y="115" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="900" fill="#000">${exam === 'NEET' ? '🩺' : (exam === 'JEE' ? '⚙️' : '💻')}</text>

    <text x="86" y="103" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="17" font-weight="800" fill="${t.text}" letter-spacing="-0.3">${safeTitle}</text>
    <text x="86" y="124" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="600" fill="${t.accent}">${safeExam} • ${safeBadge}</text>
    
    <line x1="24" y1="165" x2="376" y2="165" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
    <text x="24" y="188" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="${t.text}" opacity="0.7">100% ONLINE LIVE &amp; RECORDED • COURIER BOOKS</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Master Array of All Coaching Batches (72 Verified Online Batches)
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a192f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pala)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22212%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EBRILLIANT%20STUDY%20CENTRE%20PALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3EBrilliant%20AIIMS%20%2F%20NEET%20Re...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20Kerala%20Gold%20Standard%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a192f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pala)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22212%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EBRILLIANT%20STUDY%20CENTRE%20PALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3EIIT-JEE%20Advanced%20%26amp%3B%20Main%20R...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20State%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a192f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pala)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22212%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EBRILLIANT%20STUDY%20CENTRE%20PALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3ETwo-Year%20Integrated%20Long-...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20Two-Year%20Foundation%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a192f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pala)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22212%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EBRILLIANT%20STUDY%20CENTRE%20PALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3EKEAM%20%26amp%3B%20NEET%20Super%2045-Day%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3EKEAM%20%E2%80%A2%20Rank%20Accelerator%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_xylem%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23166534%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_xylem)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%234ade80%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%234ade80%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(74%2C222%2C128%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bbf7d0%22%20letter-spacing%3D%220.5%22%3EXYLEM%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%234ade80%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdf4%22%20letter-spacing%3D%22-0.3%22%3EXylem%20NEET%20Repeater%20Batch...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%234ade80%22%3ENEET%20%E2%80%A2%20High%20Value%20Malayalam%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_xylem%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23166534%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_xylem)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%234ade80%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%234ade80%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(74%2C222%2C128%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bbf7d0%22%20letter-spacing%3D%220.5%22%3EXYLEM%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%234ade80%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdf4%22%20letter-spacing%3D%22-0.3%22%3EXylem%20JEE%20Main%20%26amp%3B%20KEAM%20Eng...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%234ade80%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Malayalam%20Engineering%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_xylem%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23166534%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_xylem)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%234ade80%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%234ade80%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(74%2C222%2C128%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bbf7d0%22%20letter-spacing%3D%220.5%22%3EXYLEM%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%234ade80%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdf4%22%20letter-spacing%3D%22-0.3%22%3EPlus%20Two%20Tuition%20%2B%20NEET%2FK...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%234ade80%22%3ENEET%20%E2%80%A2%20Board%20%2B%20Entrance%20Combo%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_xylem%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23166534%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_xylem)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%234ade80%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%234ade80%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(74%2C222%2C128%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bbf7d0%22%20letter-spacing%3D%220.5%22%3EXYLEM%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%234ade80%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdf4%22%20letter-spacing%3D%22-0.3%22%3EKEAM%20Super%20Express%20Fastra...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%234ade80%22%3EKEAM%20%E2%80%A2%20Budget%20Crash%20Hit%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_eduport%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_eduport)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(129%2C140%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EEDUPORT%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EEduport%20Mediko%20NEET%20Repea...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23818cf8%22%3ENEET%20%E2%80%A2%20Tech-Forward%20Adapt%20AI%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_eduport%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_eduport)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(129%2C140%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EEDUPORT%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EPlus%20Two%20Board%20Tuition%20%2B%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23818cf8%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20IIT%2FNIT%20Alumni%20Led%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_eduport%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_eduport)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(129%2C140%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EEDUPORT%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EPlus%20One%20%26amp%3B%20Plus%20Two%202-Yea...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23818cf8%22%3ENEET%20%E2%80%A2%20Two-Year%20Master%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_eduport%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_eduport)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(129%2C140%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EEDUPORT%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EKEAM%20Extended%20Crash%20%26amp%3B%20Ran...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23818cf8%22%3EKEAM%20%E2%80%A2%20Speed%20Optimization%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_examwinner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b0764%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581c87%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_examwinner)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22162%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(245%2C158%2C11%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fde68a%22%20letter-spacing%3D%220.5%22%3EEXAM%20WINNER%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23faf5ff%22%20letter-spacing%3D%22-0.3%22%3EPlus%20Two%20Vedha%20NEET%20Onlin...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f59e0b%22%3ENEET%20%E2%80%A2%20Board%20%2B%20NEET%20Powerhouse%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_examwinner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b0764%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581c87%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_examwinner)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22162%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(245%2C158%2C11%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fde68a%22%20letter-spacing%3D%220.5%22%3EEXAM%20WINNER%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23faf5ff%22%20letter-spacing%3D%22-0.3%22%3EVedha%20NEET%20Repeater%20Dropp...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f59e0b%22%3ENEET%20%E2%80%A2%20Repeater%20Value%20Champion%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_examwinner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b0764%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581c87%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_examwinner)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22162%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(245%2C158%2C11%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fde68a%22%20letter-spacing%3D%220.5%22%3EEXAM%20WINNER%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23faf5ff%22%20letter-spacing%3D%22-0.3%22%3EYodha%20Plus%20One%20Science%20%2B%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f59e0b%22%3ENEET%20%E2%80%A2%20Foundation%20Winner%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_examwinner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b0764%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581c87%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_examwinner)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22162%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(245%2C158%2C11%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fde68a%22%20letter-spacing%3D%220.5%22%3EEXAM%20WINNER%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23faf5ff%22%20letter-spacing%3D%22-0.3%22%3EKEAM%20Express%20Fastrack%20Cra...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f59e0b%22%3EKEAM%20%E2%80%A2%20Super%20Budget%20Crash%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pcthomas%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23450a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pcthomas)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f87171%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f87171%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22320%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(248%2C113%2C113%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecaca%22%20letter-spacing%3D%220.5%22%3EPROF.%20P.C.%20THOMAS%20%26amp%3B%20CHAITHANYA%20CLASSES%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f87171%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fef2f2%22%20letter-spacing%3D%22-0.3%22%3EOne%20Year%20Long%20Term%20NEET%20R...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f87171%22%3ENEET%20%E2%80%A2%20Kerala%20Coaching%20Legend%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pcthomas%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23450a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pcthomas)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f87171%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f87171%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22320%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(248%2C113%2C113%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecaca%22%20letter-spacing%3D%220.5%22%3EPROF.%20P.C.%20THOMAS%20%26amp%3B%20CHAITHANYA%20CLASSES%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f87171%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fef2f2%22%20letter-spacing%3D%22-0.3%22%3EOne%20Year%20Long%20Term%20JEE%20Ad...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f87171%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Mathematical%20Rigor%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pcthomas%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23450a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pcthomas)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f87171%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f87171%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22320%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(248%2C113%2C113%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecaca%22%20letter-spacing%3D%220.5%22%3EPROF.%20P.C.%20THOMAS%20%26amp%3B%20CHAITHANYA%20CLASSES%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f87171%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fef2f2%22%20letter-spacing%3D%22-0.3%22%3ETwo%20Year%20Integrated%20Schoo...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f87171%22%3ENEET%20%E2%80%A2%20Integrated%20Foundation%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pcthomas%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23450a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pcthomas)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f87171%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f87171%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22320%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(248%2C113%2C113%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecaca%22%20letter-spacing%3D%220.5%22%3EPROF.%20P.C.%20THOMAS%20%26amp%3B%20CHAITHANYA%20CLASSES%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f87171%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fef2f2%22%20letter-spacing%3D%22-0.3%22%3EKEAM%20%26amp%3B%20NEET%20Special%20Revis...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f87171%22%3EKEAM%20%E2%80%A2%20Intensive%20Drills%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fef2f2%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_fiitjee%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f0a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581212%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_fiitjee)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%2276%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C191%2C36%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fef08a%22%20letter-spacing%3D%220.5%22%3EFIITJEE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fffbeb%22%20letter-spacing%3D%22-0.3%22%3EPINNACLE%20Two-Year%20Integra...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fbbf24%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20IIT-JEE%20Advanced%20Flagship%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_fiitjee%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f0a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581212%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_fiitjee)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%2276%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C191%2C36%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fef08a%22%20letter-spacing%3D%220.5%22%3EFIITJEE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fffbeb%22%20letter-spacing%3D%22-0.3%22%3EOne-Year%20Extended%20Classro...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fbbf24%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Dropper%20Rank%20Booster%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_fiitjee%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f0a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581212%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_fiitjee)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%2276%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C191%2C36%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fef08a%22%20letter-spacing%3D%220.5%22%3EFIITJEE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fffbeb%22%20letter-spacing%3D%22-0.3%22%3EFIITJEE%20AITS%20%26amp%3B%20Intensive%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fbbf24%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20All-India%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_fiitjee%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233f0a0a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581212%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_fiitjee)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%2276%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C191%2C36%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fef08a%22%20letter-spacing%3D%220.5%22%3EFIITJEE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fbbf24%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fffbeb%22%20letter-spacing%3D%22-0.3%22%3ETwo-Year%20Weekend%20Classroo...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fbbf24%22%3EKEAM%20%E2%80%A2%20Kerala%20Engineering%20Target%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fffbeb%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_aakash%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23082f49%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230369a1%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_aakash)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22205%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EAAKASH%20DIGITAL%20%2F%20INSTITUTE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0f9ff%22%20letter-spacing%3D%22-0.3%22%3EAakash%20Live%20NEET%20Repeater...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20National%20Medical%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_aakash%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23082f49%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230369a1%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_aakash)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22205%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EAAKASH%20DIGITAL%20%2F%20INSTITUTE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0f9ff%22%20letter-spacing%3D%22-0.3%22%3EAakash%20Live%20Class%2012%20Regu...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20Class%2012%20Medical%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_aakash%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23082f49%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230369a1%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_aakash)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22205%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EAAKASH%20DIGITAL%20%2F%20INSTITUTE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0f9ff%22%20letter-spacing%3D%22-0.3%22%3EAakash%20Repeater%20JEE%20Main%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Engineering%20Excellence%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_aakash%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23082f49%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230369a1%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_aakash)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22205%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EAAKASH%20DIGITAL%20%2F%20INSTITUTE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0f9ff%22%20letter-spacing%3D%22-0.3%22%3EAakash%20Digital%20Power%20Pack...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3EKEAM%20%E2%80%A2%20High-Yield%20Revision%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_srichaitanya%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f172a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_srichaitanya)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22292%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(96%2C165%2C250%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bfdbfe%22%20letter-spacing%3D%220.5%22%3ESRI%20CHAITANYA%20EDUCATIONAL%20INSTITUTIONS%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23eff6ff%22%20letter-spacing%3D%22-0.3%22%3ESri%20Chaitanya%20MEDICON%20NEE...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2360a5fa%22%3ENEET%20%E2%80%A2%20National%20Medical%20Factory%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_srichaitanya%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f172a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_srichaitanya)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22292%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(96%2C165%2C250%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bfdbfe%22%20letter-spacing%3D%220.5%22%3ESRI%20CHAITANYA%20EDUCATIONAL%20INSTITUTIONS%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23eff6ff%22%20letter-spacing%3D%22-0.3%22%3ESri%20Chaitanya%20ELITE%20%2F%20IPL...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2360a5fa%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20IIT-JEE%20Powerhouse%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_srichaitanya%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f172a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_srichaitanya)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22292%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(96%2C165%2C250%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bfdbfe%22%20letter-spacing%3D%220.5%22%3ESRI%20CHAITANYA%20EDUCATIONAL%20INSTITUTIONS%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2360a5fa%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23eff6ff%22%20letter-spacing%3D%22-0.3%22%3ESCORE%20Rapid%20Revision%20%26amp%3B%20Cr...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2360a5fa%22%3EKEAM%20%E2%80%A2%20Rapid%20Drill%20Revision%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_narayana%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23022c22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_narayana)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2334d399%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2334d399%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2334d399%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22198%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(52%2C211%2C153%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a7f3d0%22%20letter-spacing%3D%220.5%22%3ENARAYANA%20COACHING%20ACADEMY%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfdf5%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2334d399%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfdf5%22%20letter-spacing%3D%22-0.3%22%3ENarayana%20MED-SPARK%20NEET%20R...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2334d399%22%3ENEET%20%E2%80%A2%20Micro-Scheduled%20Testing%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfdf5%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_narayana%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23022c22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_narayana)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2334d399%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2334d399%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2334d399%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22198%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(52%2C211%2C153%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a7f3d0%22%20letter-spacing%3D%220.5%22%3ENARAYANA%20COACHING%20ACADEMY%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfdf5%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2334d399%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfdf5%22%20letter-spacing%3D%22-0.3%22%3ENarayana%20CO-SPARK%20JEE%20Adv...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2334d399%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Olympiad%20%26amp%3B%20JEE%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfdf5%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_narayana%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23022c22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23064e3b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_narayana)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2334d399%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2334d399%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2334d399%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22198%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(52%2C211%2C153%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a7f3d0%22%20letter-spacing%3D%220.5%22%3ENARAYANA%20COACHING%20ACADEMY%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfdf5%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2334d399%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfdf5%22%20letter-spacing%3D%22-0.3%22%3ETwo-Year%20Integrated%20Class...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2334d399%22%3EKEAM%20%E2%80%A2%20Two-Year%20Master%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfdf5%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pw%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2327272a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2318181b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pw)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22335%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C63%2C94%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecdd3%22%20letter-spacing%3D%220.5%22%3EPHYSICS%20WALLAH%20(PW%20MALAYALAM%20%26amp%3B%20NATIONAL)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafafa%22%20letter-spacing%3D%22-0.3%22%3EYakeen%20NEET%20Malayalam%202.0...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f43f5e%22%3ENEET%20%E2%80%A2%20Lowest%20Price%20Champion%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pw%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2327272a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2318181b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pw)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22335%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C63%2C94%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecdd3%22%20letter-spacing%3D%220.5%22%3EPHYSICS%20WALLAH%20(PW%20MALAYALAM%20%26amp%3B%20NATIONAL)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafafa%22%20letter-spacing%3D%22-0.3%22%3EPrayas%20JEE%20Malayalam%20Drop...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f43f5e%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Budget%20Engineering%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pw%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2327272a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2318181b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pw)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22335%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C63%2C94%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecdd3%22%20letter-spacing%3D%220.5%22%3EPHYSICS%20WALLAH%20(PW%20MALAYALAM%20%26amp%3B%20NATIONAL)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafafa%22%20letter-spacing%3D%22-0.3%22%3ELakshya%20NEET%20(Class%2012%20Re...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f43f5e%22%3ENEET%20%E2%80%A2%20Class%2012%20Value%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pw%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2327272a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2318181b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pw)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22335%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C63%2C94%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecdd3%22%20letter-spacing%3D%220.5%22%3EPHYSICS%20WALLAH%20(PW%20MALAYALAM%20%26amp%3B%20NATIONAL)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafafa%22%20letter-spacing%3D%22-0.3%22%3EKEAM%20Ultimate%20Fastrack%20Cr...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f43f5e%22%3EKEAM%20%E2%80%A2%20Lowest%20Price%20Crash%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_allen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230e7490%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_allen)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22112%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(34%2C211%2C238%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a5f3fc%22%20letter-spacing%3D%220.5%22%3EALLEN%20DIGITAL%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfeff%22%20letter-spacing%3D%22-0.3%22%3EAllen%20Leader%20NEET%20Dropper...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2322d3ee%22%3ENEET%20%E2%80%A2%20Kota%20Standard%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_allen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230e7490%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_allen)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22112%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(34%2C211%2C238%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a5f3fc%22%20letter-spacing%3D%220.5%22%3EALLEN%20DIGITAL%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfeff%22%20letter-spacing%3D%22-0.3%22%3EAllen%20Leader%20JEE%20(Main%20%26amp%3B%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2322d3ee%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Kota%20Engineering%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_allen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230e7490%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_allen)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22112%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(34%2C211%2C238%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a5f3fc%22%20letter-spacing%3D%220.5%22%3EALLEN%20DIGITAL%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfeff%22%20letter-spacing%3D%22-0.3%22%3EAllen%20Nurture%20Course%20(Cla...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2322d3ee%22%3ENEET%20%E2%80%A2%20Two-Year%20Kota%20Master%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_allen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230e7490%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_allen)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22112%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(34%2C211%2C238%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a5f3fc%22%20letter-spacing%3D%220.5%22%3EALLEN%20DIGITAL%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfeff%22%20letter-spacing%3D%22-0.3%22%3EAllen%20Digital%20KEAM%20%26amp%3B%20JEE%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2322d3ee%22%3EKEAM%20%E2%80%A2%20Speed%20Rank%20Booster%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_zephyr%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231c1917%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23292524%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_zephyr)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22191%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C146%2C60%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%220.5%22%3EZEPHYR%20ENTRANCE%20COACHING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafaf9%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafaf9%22%20letter-spacing%3D%22-0.3%22%3EZephyr%20Medical%20Repeaters%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fb923c%22%3ENEET%20%E2%80%A2%20Personal%20Attention%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafaf9%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_zephyr%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231c1917%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23292524%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_zephyr)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22191%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C146%2C60%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%220.5%22%3EZEPHYR%20ENTRANCE%20COACHING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafaf9%22%20opacity%3D%220.08%22%3EJEE%20Main%20%26amp%3B%20Advanced%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafaf9%22%20letter-spacing%3D%22-0.3%22%3EZephyr%20Engineering%20Repeat...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fb923c%22%3EJEE%20Main%20%26amp%3B%20Advanced%20%E2%80%A2%20Kerala%20Engineering%20Specialist%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafaf9%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_zephyr%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231c1917%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23292524%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_zephyr)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22191%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(251%2C146%2C60%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%220.5%22%3EZEPHYR%20ENTRANCE%20COACHING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafaf9%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fb923c%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafaf9%22%20letter-spacing%3D%22-0.3%22%3EZephyr%20Crash%20Course%20(NEET...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fb923c%22%3EKEAM%20%E2%80%A2%20South%20Kerala%20Favorite%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafaf9%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_rays%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e293b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23334155%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_rays)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22155%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(168%2C85%2C247%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23e9d5ff%22%20letter-spacing%3D%220.5%22%3ERAYS%20EDUTECH%20KERALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3ERays%20Super%2040%20NEET%20Repeat...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23a855f7%22%3ENEET%20%E2%80%A2%20Super-40%20Intensive%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_rays%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e293b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23334155%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_rays)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22155%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(168%2C85%2C247%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23e9d5ff%22%20letter-spacing%3D%220.5%22%3ERAYS%20EDUTECH%20KERALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23a855f7%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3ERays%20KEAM%20%26amp%3B%20JEE%20Engineeri...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23a855f7%22%3EKEAM%20%E2%80%A2%20Malabar%20Engineering%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_alpha%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2331103f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234a154b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_alpha)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22176%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(232%2C121%2C249%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23f5d0fe%22%20letter-spacing%3D%220.5%22%3EALPHA%20ENTRANCE%20ACADEMY%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fdf4ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fdf4ff%22%20letter-spacing%3D%22-0.3%22%3EAlpha%20NEET%20Repeater%20Inten...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23e879f9%22%3ENEET%20%E2%80%A2%20High%20Conversion%20Rate%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fdf4ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_alpha%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2331103f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234a154b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_alpha)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22176%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(232%2C121%2C249%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23f5d0fe%22%20letter-spacing%3D%220.5%22%3EALPHA%20ENTRANCE%20ACADEMY%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fdf4ff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fdf4ff%22%20letter-spacing%3D%22-0.3%22%3EAlpha%20KEAM%20Special%20Engine...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23e879f9%22%3EKEAM%20%E2%80%A2%20Central%20Travancore%20Favorite%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fdf4ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pcmb%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23172554%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231d4ed8%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pcmb)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22176%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(147%2C197%2C253%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23dbeafe%22%20letter-spacing%3D%220.5%22%3EPCMB%20ENTRANCE%20COACHING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23eff6ff%22%20letter-spacing%3D%22-0.3%22%3EPCMB%20NEET%20Repeater%20Droppe...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2393c5fd%22%3ENEET%20%E2%80%A2%20Focused%20Mentorship%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    "mode": "100% Online Live Interactive",
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pcmb%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23172554%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231d4ed8%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pcmb)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22176%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(147%2C197%2C253%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23dbeafe%22%20letter-spacing%3D%220.5%22%3EPCMB%20ENTRANCE%20COACHING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2393c5fd%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23eff6ff%22%20letter-spacing%3D%22-0.3%22%3EPCMB%20KEAM%20Rank%20Booster%20Ba...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2393c5fd%22%3EKEAM%20%E2%80%A2%20Numerical%20Mastery%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23eff6ff%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_unacad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230c1e33%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_unacad)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(45%2C212%2C191%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%2399f6e4%22%20letter-spacing%3D%220.5%22%3EUNACADEMY%20KERALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdfa%22%20letter-spacing%3D%22-0.3%22%3EUnacademy%20Kerala%20NEET%20Dro...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%232dd4bf%22%3ENEET%20%E2%80%A2%20Flexible%20Digital%20Learning%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
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
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_unacad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230c1e33%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23164e63%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_unacad)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(45%2C212%2C191%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%2399f6e4%22%20letter-spacing%3D%220.5%22%3EUNACADEMY%20KERALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%232dd4bf%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%8F%9B%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdfa%22%20letter-spacing%3D%22-0.3%22%3EUnacademy%20Kerala%20KEAM%20%26amp%3B%20J...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%232dd4bf%22%3EKEAM%20%E2%80%A2%20Customizable%20Track%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.7%22%3EONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20PHYSICAL%20STUDY%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "pala-nri-live-05",
    "instituteId": "pala",
    "institute": "Brilliant Study Centre Pala",
    "name": "Brilliant NRI Online Live Evening Batch (Gulf & Overseas)",
    "badge": "NRI Gulf Timezone",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.9,
    "reviewsCount": 1420,
    "price": 92000,
    "originalPrice": 105000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹31,000",
    "mode": "100% Online Live (Gulf Evening Time)",
    "language": "Malayalam + English (Bilingual)",
    "schedule": "Mon - Sat • 5:00 PM - 9:30 PM (GST / UAE Time)",
    "teachers": [
      "George Thomas (Physics)",
      "Dr. K. S. Pillai (Botany)",
      "M. Mathew (Zoology)",
      "S. Varma (Chemistry)"
    ],
    "studyMaterial": "Complete 18-Volume Brilliant Printed Module Box Couriered Internationally via DHL/Aramex",
    "testsPerMonth": 12,
    "batchSize": "50 Students per Virtual Interactive Cohort",
    "refundPolicy": "Pro-rata refund minus international courier costs within first 14 days",
    "highlights": [
      "Specially curated for Gulf Kerala diaspora (UAE, Qatar, Kuwait, Oman, Saudi Arabia)",
      "Sunday model exams synchronized live across Middle East and Indian time zones",
      "Two-way audio faculty doubt clearance during live evening lectures",
      "Dedicated Kerala NRI counseling & domicile quota admissions mentorship"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a192f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pala)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22212%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EBRILLIANT%20STUDY%20CENTRE%20PALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3EBrilliant%20NRI%20Online%20Live...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20NRI%20Gulf%20Timezone%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "pala-sunday-cbt-06",
    "instituteId": "pala",
    "institute": "Brilliant Study Centre Pala",
    "name": "Brilliant Online All-Kerala Sunday Model Exam & CBT Test Series",
    "badge": "State Rank Benchmark",
    "targetExam": "NEET",
    "category": "Crash Course",
    "rating": 4.8,
    "reviewsCount": 4800,
    "price": 18500,
    "originalPrice": 24000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment or 2 installments",
    "mode": "Online CBT Engine + Video Discussions",
    "language": "Malayalam + English (Bilingual)",
    "schedule": "Every Sunday • 9:00 AM - 12:20 PM Online",
    "teachers": [
      "Brilliant Pala Senior Medical Council"
    ],
    "studyMaterial": "32 Full-Syllabus Model Papers Courier Box + Online Analytics Dashboard",
    "testsPerMonth": 8,
    "batchSize": "Statewide Online Cohort (40,000+ Rankers)",
    "refundPolicy": "Non-refundable after model paper dispatch",
    "highlights": [
      "The definitive statewide benchmark exam taken by 40,000+ serious Kerala aspirants",
      "Exact NTA NEET / CEE KEAM exam simulation software on mobile & desktop",
      "Instant statewide percentile, district-wise rank, and negative mark analysis",
      "Step-by-step video solutions in conversational Malayalam after every test"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230a192f%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pala)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22212%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EBRILLIANT%20STUDY%20CENTRE%20PALA%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f8fafc%22%20letter-spacing%3D%22-0.3%22%3EBrilliant%20Online%20All-Kera...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20State%20Rank%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f8fafc%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "xylem-yoddha-pro-05",
    "instituteId": "xylem",
    "institute": "Xylem Learning",
    "name": "Xylem Yoddha NEET Repeater Live Pro (Evening Interactive)",
    "badge": "High Energy Malayalam",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.8,
    "reviewsCount": 3890,
    "price": 36000,
    "originalPrice": 48000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹12,000",
    "mode": "100% Online Live via Xylem App",
    "language": "Malayalam + English",
    "schedule": "Mon - Sat • 5:30 PM - 9:30 PM",
    "teachers": [
      "Dr. Ananthu (Biology)",
      "Naveen Sir (Physics)",
      "Shamsu Sir (Chemistry)"
    ],
    "studyMaterial": "Xylem 12-Volume Printed Book Set Delivered to Home + Daily DPP PDFs",
    "testsPerMonth": 10,
    "batchSize": "Interactive Live Streaming Cohort",
    "refundPolicy": "10-day conditional return on course initiation",
    "highlights": [
      "Evening live classes ideal for students who want daily study discipline",
      "Interactive in-class quizzes with instant live leaderboard rankings",
      "Daily 30-minute faculty doubt window immediately after each session",
      "High motivation community webinars and mental wellness counseling"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_xylem%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23166534%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_xylem)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%234ade80%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%234ade80%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(74%2C222%2C128%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bbf7d0%22%20letter-spacing%3D%220.5%22%3EXYLEM%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%234ade80%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdf4%22%20letter-spacing%3D%22-0.3%22%3EXylem%20Yoddha%20NEET%20Repeate...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%234ade80%22%3ENEET%20%E2%80%A2%20High%20Energy%20Malayalam%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "xylem-gulf-live-06",
    "instituteId": "xylem",
    "institute": "Xylem Learning",
    "name": "Xylem Gulf NRI Online Live Batch (Plus One & Plus Two Combo)",
    "badge": "Gulf Diaspora Hit",
    "targetExam": "NEET",
    "category": "Class 11 Two-Year",
    "rating": 4.7,
    "reviewsCount": 1650,
    "price": 45000,
    "originalPrice": 62000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "4 installments of ₹11,250",
    "mode": "100% Online Live via Xylem App",
    "language": "Malayalam + English",
    "schedule": "Mon - Thu • 6:30 PM - 9:30 PM Gulf Standard Time",
    "teachers": [
      "Xylem Elite Faculty Panel"
    ],
    "studyMaterial": "Complete Plus One & Plus Two Printed Theory & Question Banks Couriered Overseas",
    "testsPerMonth": 8,
    "batchSize": "Gulf Focused Virtual Batch",
    "refundPolicy": "Pro-rata refund within first 14 calendar days",
    "highlights": [
      "Tailored timing matching Gulf Indian school academic calendar and weekend hours",
      "Equal emphasis on CBSE Board A1 grade and NEET/KEAM conceptual mastery",
      "Parent-teacher online video conferences every month with performance graphs",
      "Over 400+ past year questions practiced live with faculty guidance"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_xylem%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2314532d%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23166534%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_xylem)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%234ade80%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%234ade80%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(74%2C222%2C128%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bbf7d0%22%20letter-spacing%3D%220.5%22%3EXYLEM%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%234ade80%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdf4%22%20letter-spacing%3D%22-0.3%22%3EXylem%20Gulf%20NRI%20Online%20Liv...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%234ade80%22%3ENEET%20%E2%80%A2%20Gulf%20Diaspora%20Hit%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdf4%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "eduport-adapt-ai-pro-05",
    "instituteId": "eduport",
    "institute": "Eduport Learning",
    "name": "Eduport Mediko Pure Online Live (With Adapt AI Box & Doubt Tab)",
    "badge": "Adapt AI Powered",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.8,
    "reviewsCount": 2450,
    "price": 38000,
    "originalPrice": 49999,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹12,666",
    "mode": "100% Online Live + Adapt AI 24/7",
    "language": "Malayalam + English",
    "schedule": "Mon - Sat • 8:30 AM - 1:30 PM (Live + Recording)",
    "teachers": [
      "Anoop Sir (Physics)",
      "Dr. Shameem (Biology)",
      "Naveen Sir (Chemistry)"
    ],
    "studyMaterial": "Eduport Smart Module Kit (QR-linked video solutions for every problem) + Courier Box",
    "testsPerMonth": 12,
    "batchSize": "Smart Virtual Cohort with Personal Mentor",
    "refundPolicy": "14-day replacement or exit policy",
    "highlights": [
      "Instant Adapt AI camera doubt resolution: snap a photo of any question for immediate steps",
      "IIT and NIT alumni-led conceptual breakdown in easy-to-understand Malayalam",
      "Personal academic mentor assigned for weekly study tracking and test review",
      "Adaptive online test series that automatically focuses on your weakest chapters"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_eduport%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23312e81%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_eduport)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(129%2C140%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EEDUPORT%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23818cf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EEduport%20Mediko%20Pure%20Onlin...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23818cf8%22%3ENEET%20%E2%80%A2%20Adapt%20AI%20Powered%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "examwinner-crash-05",
    "instituteId": "examwinner",
    "institute": "Exam Winner Learning",
    "name": "Exam Winner Malayalam NEET 100-Day Intensive Online Crash",
    "badge": "Budget Crash Hit",
    "targetExam": "NEET",
    "category": "Crash Course",
    "rating": 4.7,
    "reviewsCount": 5200,
    "price": 5999,
    "originalPrice": 9999,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment of ₹5,999",
    "mode": "Online Live + Full Video Library",
    "language": "Malayalam + English",
    "schedule": "Daily • 6:00 PM - 10:00 PM Live",
    "teachers": [
      "Allen Sir (Physics)",
      "Shibu Sir (Chemistry)",
      "Dr. Resmi (Biology)"
    ],
    "studyMaterial": "Exam Winner Formula Flashcards & 10,000 MCQ Question Bank PDF + Printed Summary",
    "testsPerMonth": 16,
    "batchSize": "Mass Online Community",
    "refundPolicy": "7-day cancellation window",
    "highlights": [
      "Fast-track high-yield revision covering all 79 Physics, Chemistry, and Biology chapters",
      "Most watched energetic teachers in Kerala making complex formulas memorable",
      "Daily live countdown MCQ solving sprints with competitive live polling",
      "Exceptional value-for-money option for repeaters and Plus Two candidates"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_examwinner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233b0764%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23581c87%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_examwinner)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22162%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(245%2C158%2C11%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fde68a%22%20letter-spacing%3D%220.5%22%3EEXAM%20WINNER%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f59e0b%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23faf5ff%22%20letter-spacing%3D%22-0.3%22%3EExam%20Winner%20Malayalam%20NEE...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f59e0b%22%3ENEET%20%E2%80%A2%20Budget%20Crash%20Hit%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23faf5ff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "pw-arjuna-mal-05",
    "instituteId": "physicswallah",
    "institute": "Physics Wallah (PW Malayalam & National)",
    "name": "PW Arjuna Malayalam Plus One Online Live Batch",
    "badge": "High Value Foundation",
    "targetExam": "NEET",
    "category": "Class 11 Two-Year",
    "rating": 4.8,
    "reviewsCount": 6800,
    "price": 4999,
    "originalPrice": 8500,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment of ₹4,999",
    "mode": "100% Online Live on PW App",
    "language": "Malayalam + English",
    "schedule": "Mon - Sat • 4:30 PM - 8:00 PM",
    "teachers": [
      "PW Malayalam Master Faculty Panel"
    ],
    "studyMaterial": "Daily Practice Problem (DPP) Sheets + Solution Videos + Digital Handbooks",
    "testsPerMonth": 8,
    "batchSize": "Live Interactive App Stream",
    "refundPolicy": "PW standard 7-day policy",
    "highlights": [
      "Daily Practice Problems (DPP) with comprehensive video solutions in Malayalam",
      "Doubts engine with dedicated teaching assistants responding in under 30 minutes",
      "In-app CBT mock tests and national peer benchmark across 200,000+ students",
      "Complete Plus One syllabus coverage aligned with NCERT and Kerala Board"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_pw%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2327272a%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2318181b%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_pw)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22335%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C63%2C94%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fecdd3%22%20letter-spacing%3D%220.5%22%3EPHYSICS%20WALLAH%20(PW%20MALAYALAM%20%26amp%3B%20NATIONAL)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f43f5e%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fafafa%22%20letter-spacing%3D%22-0.3%22%3EPW%20Arjuna%20Malayalam%20Plus%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f43f5e%22%3ENEET%20%E2%80%A2%20High%20Value%20Foundation%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fafafa%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "allen-leader-online-jee-05",
    "instituteId": "allen",
    "institute": "Allen Digital",
    "name": "Allen Leader Live Online Course for JEE (Main + Advanced)",
    "badge": "Kota Benchmark",
    "targetExam": "JEE",
    "category": "Repeater / Dropper",
    "rating": 4.9,
    "reviewsCount": 3400,
    "price": 96000,
    "originalPrice": 115000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹32,000",
    "mode": "100% Online Live with Kota Senior Faculty",
    "language": "English + Bilingual Option",
    "schedule": "Mon - Sat • 8:00 AM - 1:30 PM",
    "teachers": [
      "Allen Kota HODs (Physics, Maths, Chemistry)"
    ],
    "studyMaterial": "Legendary 24-Volume Allen Kota Study Material Box Delivered to Home",
    "testsPerMonth": 8,
    "batchSize": "Curated Virtual Cohort",
    "refundPolicy": "Allen Digital pro-rata refund schedule within 15 days",
    "highlights": [
      "Direct live teaching from Allen's senior Kota faculty who produced All-India Rank 1",
      "Complete set of Allen Kota classroom question banks with graded difficulty levels",
      "Leader Test Series on authentic JEE Advanced computer-based testing engine",
      "Live 2-way doubt resolution counters and parent progress monitoring app"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_allen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23083344%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230e7490%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_allen)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22112%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(34%2C211%2C238%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23a5f3fc%22%20letter-spacing%3D%220.5%22%3EALLEN%20DIGITAL%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.08%22%3EJEE%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2322d3ee%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23ecfeff%22%20letter-spacing%3D%22-0.3%22%3EAllen%20Leader%20Live%20Online%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2322d3ee%22%3EJEE%20%E2%80%A2%20Kota%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23ecfeff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "aakash-aiats-digital-05",
    "instituteId": "aakash",
    "institute": "Aakash Digital",
    "name": "Aakash AIATS Online Test Series & Video Solution Vault",
    "badge": "All-India Benchmark",
    "targetExam": "NEET",
    "category": "Crash Course",
    "rating": 4.8,
    "reviewsCount": 7800,
    "price": 14500,
    "originalPrice": 19999,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment of ₹14,500",
    "mode": "Online CBT Test Engine + Video Analysis",
    "language": "English + Malayalam Assist",
    "schedule": "Bi-Weekly Sundays • 10:00 AM - 1:20 PM Online",
    "teachers": [
      "Aakash National Medical Academic Council"
    ],
    "studyMaterial": "28 AIATS Test Booklets Couriered Home + Online Micro-Analytics Portal",
    "testsPerMonth": 6,
    "batchSize": "Pan-India Cohort (100,000+ Test Takers)",
    "refundPolicy": "Non-refundable once digital portal credentials are generated",
    "highlights": [
      "The most trusted national All-India Aakash Test Series simulating real NEET difficulty",
      "Detailed question-by-question micro-analysis showing error patterns and time per MCQ",
      "Complete video walkthrough of every test by senior Delhi & Kota faculties",
      "National rank prediction benchmark verified across decades of medical entrance"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_aakash%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23082f49%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230369a1%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_aakash)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22119%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(56%2C189%2C248%2C0.2)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23bae6fd%22%20letter-spacing%3D%220.5%22%3EAAKASH%20DIGITAL%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%2338bdf8%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0f9ff%22%20letter-spacing%3D%22-0.3%22%3EAakash%20AIATS%20Online%20Test%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%2338bdf8%22%3ENEET%20%E2%80%A2%20All-India%20Benchmark%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0f9ff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "time-neet-online-01",
    "instituteId": "time",
    "institute": "T.I.M.E. Online",
    "name": "T.I.M.E. NEET Online Repeater Master Course",
    "badge": "National Standard",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.7,
    "reviewsCount": 1850,
    "price": 48000,
    "originalPrice": 65000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹16,000",
    "mode": "100% Online Live Interactive Classes",
    "language": "Malayalam + English (Bilingual)",
    "schedule": "Mon - Fri • 9:00 AM - 2:00 PM Live",
    "teachers": [
      "T.I.M.E. Senior Medical Faculty Panel"
    ],
    "studyMaterial": "Comprehensive 16-Volume Study Material Kit Couriered Home + Daily Online Practice Tests",
    "testsPerMonth": 8,
    "batchSize": "45 Students per Virtual Cohort",
    "refundPolicy": "Pro-rata refund minus admin fee within first 14 days",
    "highlights": [
      "Founded in Kerala with nationwide reputation for test preparation excellence",
      "Live interactive classes with two-way voice doubt resolution during lectures",
      "All-India Mock Test Series benchmarking your scores against national competitors",
      "Personalized student dashboard tracking chapter-level accuracy and completion speed"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_time%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23831843%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239d174d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_time)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22126%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C114%2C182%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fbcfe8%22%20letter-spacing%3D%220.5%22%3ET.I.M.E.%20ONLINE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fdf2f8%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fdf2f8%22%20letter-spacing%3D%22-0.3%22%3ET.I.M.E.%20NEET%20Online%20Repe...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f472b6%22%3ENEET%20%E2%80%A2%20National%20Standard%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fdf2f8%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "time-jee-online-02",
    "instituteId": "time",
    "institute": "T.I.M.E. Online",
    "name": "T.I.M.E. JEE Main & Advanced Online Live Dropper Batch",
    "badge": "Engineering Rigor",
    "targetExam": "JEE",
    "category": "Repeater / Dropper",
    "rating": 4.6,
    "reviewsCount": 1420,
    "price": 52000,
    "originalPrice": 70000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹17,333",
    "mode": "100% Online Live via T.I.M.E. App",
    "language": "English + Bilingual Assist",
    "schedule": "Mon - Sat • 8:30 AM - 1:30 PM Live",
    "teachers": [
      "IIT Alumni & Senior JEE Specialists"
    ],
    "studyMaterial": "Full Printed Study Material Box Delivered via Courier + 45 Full Length Mock CBTs",
    "testsPerMonth": 8,
    "batchSize": "50 Students per Batch",
    "refundPolicy": "14-day refund window as per standard policy",
    "highlights": [
      "Rigorous problem-solving approach focusing on multi-concept JEE Advanced numericals",
      "Extensive previous 15 years chapter-wise question discussion with step explanations",
      "Full CBT testing engine matching exact NTA JEE Main and IIT JEE Advanced UI",
      "Regular online 1-on-1 counseling and performance review with senior mentors"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_time%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23831843%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239d174d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_time)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22126%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C114%2C182%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fbcfe8%22%20letter-spacing%3D%220.5%22%3ET.I.M.E.%20ONLINE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fdf2f8%22%20opacity%3D%220.08%22%3EJEE%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fdf2f8%22%20letter-spacing%3D%22-0.3%22%3ET.I.M.E.%20JEE%20Main%20%26amp%3B%20Advan...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f472b6%22%3EJEE%20%E2%80%A2%20Engineering%20Rigor%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fdf2f8%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "time-keam-crash-03",
    "instituteId": "time",
    "institute": "T.I.M.E. Online",
    "name": "T.I.M.E. KEAM Engineering Online Fastrack Crash",
    "badge": "Kerala Focused",
    "targetExam": "KEAM",
    "category": "Crash Course",
    "rating": 4.7,
    "reviewsCount": 2100,
    "price": 11500,
    "originalPrice": 16000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment of ₹11,500",
    "mode": "Online Live + Recorded Video Vault",
    "language": "Malayalam + English",
    "schedule": "Daily • 5:00 PM - 8:30 PM Live",
    "teachers": [
      "Kerala Engineering Faculty Council"
    ],
    "studyMaterial": "KEAM Formula Handbook + 15 Full Computer-Based Mock Tests",
    "testsPerMonth": 10,
    "batchSize": "Interactive Online Stream",
    "refundPolicy": "7-day cancellation window",
    "highlights": [
      "Specialized for Kerala Engineering Architecture Medical (KEAM) CBT pattern",
      "High-speed shortcut techniques for Maths and Physics speed improvement",
      "15 Full length model CBT examinations with immediate rank list generation",
      "Proven track record helping Kerala students secure top 1,000 KEAM engineering ranks"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_time%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23831843%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239d174d%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_time)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22126%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(244%2C114%2C182%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fbcfe8%22%20letter-spacing%3D%220.5%22%3ET.I.M.E.%20ONLINE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fdf2f8%22%20opacity%3D%220.08%22%3EKEAM%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23f472b6%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%92%BB%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fdf2f8%22%20letter-spacing%3D%22-0.3%22%3ET.I.M.E.%20KEAM%20Engineering...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23f472b6%22%3EKEAM%20%E2%80%A2%20Kerala%20Focused%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fdf2f8%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "vedantu-neet-mal-01",
    "instituteId": "vedantu",
    "institute": "Vedantu Learning",
    "name": "Vedantu Malayalam NEET Repeater Live Pro (WAVE 2.0)",
    "badge": "WAVE 2.0 Interactive",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.8,
    "reviewsCount": 3950,
    "price": 38000,
    "originalPrice": 55000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "4 installments of ₹9,500",
    "mode": "100% Online Live with WAVE Interactive Engine",
    "language": "Malayalam + English",
    "schedule": "Mon - Sat • 9:00 AM - 1:30 PM Live",
    "teachers": [
      "Vedantu Top Malayalam Educators Panel"
    ],
    "studyMaterial": "Hardcopy Tatva Books Couriered Directly to Home + 24/7 AI Doubt App Access",
    "testsPerMonth": 8,
    "batchSize": "WAVE Interactive Live Stream with Class Teachers",
    "refundPolicy": "Vedantu Improvement Promise (VIP): 100% refund if rank doesn't improve",
    "highlights": [
      "WAVE 2.0 technology with in-class live quizzes, hotspots, and 3D organ visualizations",
      "Dedicated Class Teachers inside the live session answering doubts instantly in private chat",
      "Comprehensive Tatva study books delivered to your doorstep with QR video answers",
      "Full recording library available within 15 minutes of live class completion"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_vedantu%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ea580c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23c2410c%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_vedantu)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(253%2C186%2C116%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23ffedd5%22%20letter-spacing%3D%220.5%22%3EVEDANTU%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fff7ed%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fff7ed%22%20letter-spacing%3D%22-0.3%22%3EVedantu%20Malayalam%20NEET%20Re...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fdba74%22%3ENEET%20%E2%80%A2%20WAVE%202.0%20Interactive%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fff7ed%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "vedantu-jee-pro-02",
    "instituteId": "vedantu",
    "institute": "Vedantu Learning",
    "name": "Vedantu JEE Main & Advanced Live Pro (Tatva Books Kit)",
    "badge": "Dual Teacher Model",
    "targetExam": "JEE",
    "category": "Repeater / Dropper",
    "rating": 4.7,
    "reviewsCount": 2900,
    "price": 42000,
    "originalPrice": 60000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "4 installments of ₹10,500",
    "mode": "100% Online Live on Vedantu App",
    "language": "English + Malayalam Support",
    "schedule": "Mon - Sat • 8:30 AM - 1:00 PM Live",
    "teachers": [
      "Master Teachers (IIT Roorkee & IIT Bombay Alumni)"
    ],
    "studyMaterial": "Complete Tatva Engineering Book Series Couriered to Doorstep",
    "testsPerMonth": 8,
    "batchSize": "Interactive Live Class with Co-Teachers",
    "refundPolicy": "14-day money back guarantee",
    "highlights": [
      "Dual Teacher model: Master Teacher explains concepts while Co-Teachers resolve doubts live",
      "Comprehensive problem solving modules tailored for JEE Advanced paper standards",
      "AI-driven test reports pinpointing question selection mistakes and time management issues",
      "Post-class doubt app with real-time video resolution by subject specialists"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_vedantu%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ea580c%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23c2410c%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_vedantu)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22133%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(253%2C186%2C116%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23ffedd5%22%20letter-spacing%3D%220.5%22%3EVEDANTU%20LEARNING%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fff7ed%22%20opacity%3D%220.08%22%3EJEE%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23fdba74%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fff7ed%22%20letter-spacing%3D%22-0.3%22%3EVedantu%20JEE%20Main%20%26amp%3B%20Advanc...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23fdba74%22%3EJEE%20%E2%80%A2%20Dual%20Teacher%20Model%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fff7ed%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "motion-drona-neet-01",
    "instituteId": "motion",
    "institute": "Motion Education (Motion Online)",
    "name": "Motion Online Drona NEET Repeater (Kota Faculty Live Broadcast)",
    "badge": "Kota Live Stream",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.8,
    "reviewsCount": 3100,
    "price": 45000,
    "originalPrice": 62000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹15,000",
    "mode": "100% Online Live from Kota Classroom",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 8:00 AM - 1:30 PM",
    "teachers": [
      "Dr. Ashish Maheshwari (Botany)",
      "NV Sir Team (Physics)",
      "JP Sir (Chemistry)"
    ],
    "studyMaterial": "Complete Motion Kota Drona Module Box Couriered to Home + BRAHMASTRA Test Series",
    "testsPerMonth": 8,
    "batchSize": "Kota Virtual Cohort",
    "refundPolicy": "15-day pro-rata refund policy",
    "highlights": [
      "Direct live broadcast from Kota's top-batch classroom for genuine competitive energy",
      "Motion's proprietary CPR (Customized Practice Records) homework system",
      "All-India online mock test series on authentic NEET computer pattern",
      "Personal academic counseling and Kota mentor connectivity on Zoom/Google Meet"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_motion%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234338ca%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_motion)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22248%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(165%2C180%2C252%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EMOTION%20EDUCATION%20(MOTION%20ONLINE)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EMotion%20Online%20Drona%20NEET%20...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23a5b4fc%22%3ENEET%20%E2%80%A2%20Kota%20Live%20Stream%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "motion-eklavya-jee-02",
    "instituteId": "motion",
    "institute": "Motion Education (Motion Online)",
    "name": "Motion Eklavya JEE Advanced Online Dropper (NV Sir Physics)",
    "badge": "NV Sir Masterclass",
    "targetExam": "JEE",
    "category": "Repeater / Dropper",
    "rating": 4.9,
    "reviewsCount": 4200,
    "price": 49000,
    "originalPrice": 68000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹16,333",
    "mode": "100% Online Live from Kota",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 8:00 AM - 2:00 PM Live",
    "teachers": [
      "Nitin Vijay (NV Sir - Physics)",
      "RRD Sir (Maths)",
      "VVS Sir (Chemistry)"
    ],
    "studyMaterial": "24-Volume Motion Kota Study Package Delivered to Doorstep + DPP Handbooks",
    "testsPerMonth": 8,
    "batchSize": "Premier Online Batch",
    "refundPolicy": "14-day refund window as per Motion digital policy",
    "highlights": [
      "Physics completely taught and guided by Nitin Vijay (NV Sir), India's celebrated JEE educator",
      "Exhaustive coverage of multi-concept advanced questions and previous 20-year trends",
      "BRAHMASTRA All India online test series benchmarking with thousands of Kota students",
      "Dedicated doubt desk on Motion App with audio & video solutions within minutes"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_motion%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231e1b4b%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234338ca%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_motion)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22248%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(165%2C180%2C252%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23c7d2fe%22%20letter-spacing%3D%220.5%22%3EMOTION%20EDUCATION%20(MOTION%20ONLINE)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.08%22%3EJEE%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23a5b4fc%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%E2%9A%99%EF%B8%8F%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23e0e7ff%22%20letter-spacing%3D%22-0.3%22%3EMotion%20Eklavya%20JEE%20Advanc...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23a5b4fc%22%3EJEE%20%E2%80%A2%20NV%20Sir%20Masterclass%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23e0e7ff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "neetprep-target-01",
    "instituteId": "neetprep",
    "institute": "Neetprep Online",
    "name": "Neetprep Target Batch 2025 (35,000+ NCERT Questions & Bio Prodigy)",
    "badge": "NCERT Specialist",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.9,
    "reviewsCount": 8400,
    "price": 12500,
    "originalPrice": 19999,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment of ₹12,500",
    "mode": "Online Practice Platform + Daily Live Masterclasses",
    "language": "English + Bilingual Assist",
    "schedule": "Flexible Daily Study • 24/7 Access + Evening Live Doubts",
    "teachers": [
      "Dr. NK Sharma (Biology)",
      "Kapil Gupta Sir",
      "Vipul Sir (Physics)"
    ],
    "studyMaterial": "Physical Masterclass in Biology Book Delivered Home + 35,000 Curated Online MCQs",
    "testsPerMonth": 12,
    "batchSize": "Self-Paced with Live Daily Doubt Support",
    "refundPolicy": "7-day full refund policy without questions asked",
    "highlights": [
      "Widely regarded as India's best online question bank: strictly 100% NCERT focused",
      "Audio explanations from Dr. NK Sharma for every single Biology question",
      "Custom test generator allowing students to create mock tests for specific sub-topics",
      "Target score setting that adjusts difficulty level based on your government college goals"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_neetprep%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f766e%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23115e59%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_neetprep)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%235eead4%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%235eead4%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%235eead4%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22126%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(94%2C234%2C212%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23ccfbf1%22%20letter-spacing%3D%220.5%22%3ENEETPREP%20ONLINE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%235eead4%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdfa%22%20letter-spacing%3D%22-0.3%22%3ENeetprep%20Target%20Batch%20202...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%235eead4%22%3ENEET%20%E2%80%A2%20NCERT%20Specialist%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "neetprep-aiats-mocks-02",
    "instituteId": "neetprep",
    "institute": "Neetprep Online",
    "name": "Neetprep High-Yield Sunday All-India Online Full Mock Test Series",
    "badge": "Strict NCERT Tests",
    "targetExam": "NEET",
    "category": "Crash Course",
    "rating": 4.8,
    "reviewsCount": 6200,
    "price": 6999,
    "originalPrice": 10999,
    "gstNote": "Inclusive of 18% GST",
    "installments": "Single payment of ₹6,999",
    "mode": "Online CBT Engine + Detailed Video Solutions",
    "language": "English + Bilingual",
    "schedule": "Alternate Sundays • 2:00 PM - 5:20 PM Online",
    "teachers": [
      "Neetprep Senior Medical Faculty Team"
    ],
    "studyMaterial": "25 High-Yield Mock Papers with Question-wise Video Solutions Portal",
    "testsPerMonth": 6,
    "batchSize": "Pan-India Online Aspirants (50,000+ per Test)",
    "refundPolicy": "Full refund within 3 days if unsatisfied with test quality",
    "highlights": [
      "Strictly adheres to latest NTA NEET syllabus guidelines without irrelevant out-of-syllabus MCQs",
      "Comprehensive error tracker highlighting whether mistake was factual, conceptual, or calculation",
      "Detailed step-by-step video solution for every single numerical problem in Physics and Chemistry",
      "Accurate All-India rank and projected government medical college cutoff indicators"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_neetprep%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f766e%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23115e59%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_neetprep)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%235eead4%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%235eead4%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%235eead4%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22126%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(94%2C234%2C212%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23ccfbf1%22%20letter-spacing%3D%220.5%22%3ENEETPREP%20ONLINE%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%235eead4%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23f0fdfa%22%20letter-spacing%3D%22-0.3%22%3ENeetprep%20High-Yield%20Sunda...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%235eead4%22%3ENEET%20%E2%80%A2%20Strict%20NCERT%20Tests%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23f0fdfa%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "careerpoint-live-neet-01",
    "instituteId": "careerpoint",
    "institute": "eCareerPoint (Career Point Online)",
    "name": "eCareerPoint Live NEET Dropper Course (With Courier Books Kit)",
    "badge": "Affordable Kota Live",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.6,
    "reviewsCount": 2200,
    "price": 24000,
    "originalPrice": 38000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "2 installments of ₹12,000",
    "mode": "100% Online Live on eCareerPoint App",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 8:30 AM - 1:30 PM Live",
    "teachers": [
      "Career Point Kota Senior Faculty"
    ],
    "studyMaterial": "Complete Career Point Kota Printed Module Set Couriered to Doorstep",
    "testsPerMonth": 8,
    "batchSize": "Interactive Virtual Stream",
    "refundPolicy": "10-day refund window as per standard terms",
    "highlights": [
      "Over 30 years of Kota coaching excellence delivered directly via live interactive video",
      "Complete set of physical printed theory books, exercise sheets, and previous year solutions",
      "Daily online doubt resolution desk and periodic live interaction with academic mentors",
      "Major test series simulating actual NEET pattern with performance analytics"
    ],
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g_careerpoint%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23701a75%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2386198f%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fpattern%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23g_careerpoint)%22%20%2F%3E%0A%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22220%22%20fill%3D%22url(%23grid)%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Ccircle%20cx%3D%22330%22%20cy%3D%2250%22%20r%3D%2285%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.12%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2270%22%20cy%3D%22180%22%20r%3D%2260%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.08%22%20%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%20260%20170%20L%20320%20110%20L%20380%20170%20Z%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.15%22%20%2F%3E%0A%20%20%20%20%0A%20%20%20%20%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%22263%22%20height%3D%2224%22%20rx%3D%224%22%20fill%3D%22rgba(232%2C121%2C249%2C0.25)%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2232%22%20y%3D%2238%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22700%22%20fill%3D%22%23fae8ff%22%20letter-spacing%3D%220.5%22%3EECAREERPOINT%20(CAREER%20POINT%20ONLINE)%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Ctext%20x%3D%22375%22%20y%3D%22195%22%20text-anchor%3D%22end%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2252%22%20font-weight%3D%22900%22%20fill%3D%22%23fdf4ff%22%20opacity%3D%220.08%22%3ENEET%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%22108%22%20r%3D%2224%22%20fill%3D%22%23e879f9%22%20opacity%3D%220.9%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2250%22%20y%3D%22115%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22900%22%20fill%3D%22%23000%22%3E%F0%9F%A9%BA%3C%2Ftext%3E%0A%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22103%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2217%22%20font-weight%3D%22800%22%20fill%3D%22%23fdf4ff%22%20letter-spacing%3D%22-0.3%22%3EeCareerPoint%20Live%20NEET%20Dr...%3C%2Ftext%3E%0A%20%20%20%20%3Ctext%20x%3D%2286%22%20y%3D%22124%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22600%22%20fill%3D%22%23e879f9%22%3ENEET%20%E2%80%A2%20Affordable%20Kota%20Live%3C%2Ftext%3E%0A%20%20%20%20%0A%20%20%20%20%3Cline%20x1%3D%2224%22%20y1%3D%22165%22%20x2%3D%22376%22%20y2%3D%22165%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.12)%22%20stroke-width%3D%221%22%20%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%2224%22%20y%3D%22188%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Segoe%20UI%2C%20Roboto%2C%20sans-serif%22%20font-size%3D%2211%22%20font-weight%3D%22600%22%20fill%3D%22%23fdf4ff%22%20opacity%3D%220.7%22%3E100%25%20ONLINE%20LIVE%20%26amp%3B%20RECORDED%20%E2%80%A2%20COURIER%20BOOKS%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E"
  },
  {
    "id": "fiitjee-eschool-2yr-jee",
    "instituteId": "fiitjee",
    "institute": "FIITJEE eSchool",
    "name": "FIITJEE eSchool 2-Year Live Classroom Program for JEE Advanced (Class 11 & 12)",
    "badge": "Elite IIT Benchmark",
    "targetExam": "JEE Main & Advanced",
    "category": "Class 11 Two-Year",
    "rating": 4.8,
    "reviewsCount": 3100,
    "price": 185000,
    "originalPrice": 220000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "4 installments of ₹46,250",
    "mode": "100% Online Live by Senior Faculty",
    "language": "English",
    "schedule": "Tue, Thu, Sat • 5:00 PM - 8:30 PM + Sunday AITS",
    "teachers": ["FIITJEE National Senior Faculty","IITian Physics & Math Mentors"],
    "studyMaterial": "Comprehensive Megacosm Printed Workbooks & GMP Couriered Directly Home",
    "testsPerMonth": 8,
    "batchSize": "35 Students (Strict Cap)",
    "refundPolicy": "Pro-rata refund within 14 days of session start",
    "highlights": [
          "Rigorous multi-concept problem solving designed strictly for Top 500 AIR in JEE Advanced",
          "All-India Test Series (AITS) with national percentile benchmarking against 60,000+ top aspirants",
          "Two-way live audio-visual doubt clearing with faculty at the end of every live class",
          "Complete set of physical Megacosm modules, Grand Masters Package (GMP), and RTPF couriered"
    ],
    "image": generateCourseThumbnail("FIITJEE eSchool", "JEE Main & Advanced", "FIITJEE eSchool 2-Year Live Classroom Program for JEE Advanced (Class 11 & 12)", "Elite IIT Benchmark", "fiitjee")
  },
  {
    "id": "fiitjee-eschool-dropper-jee",
    "instituteId": "fiitjee",
    "institute": "FIITJEE eSchool",
    "name": "FIITJEE eSchool One-Year Dropper Live Batch for JEE Advanced & Main",
    "badge": "Intensive IIT Dropper",
    "targetExam": "JEE Main & Advanced",
    "category": "Repeater / Dropper",
    "rating": 4.7,
    "reviewsCount": 2840,
    "price": 120000,
    "originalPrice": 155000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹40,000",
    "mode": "100% Online Live Daily Classes",
    "language": "English",
    "schedule": "Mon - Fri • 9:00 AM - 1:30 PM Live",
    "teachers": ["Senior FIITJEE IIT-JEE Advanced Faculty"],
    "studyMaterial": "Complete FIITJEE Dropper Study Modules, GMP & Review Test Series Couriered",
    "testsPerMonth": 10,
    "batchSize": "40 Students Online Cohort",
    "refundPolicy": "Pro-rata refund within 10 days of course launch",
    "highlights": [
          "Intensive 1000+ hours of advanced problem-solving drill focusing on conceptual depth",
          "Weekly Part Tests, Phase Tests, and full-syllabus AITS under strict CBT exam conditions",
          "Dedicated doubt resolution desk and individual performance analysis with academic mentor",
          "Full digital library access to class recordings, solutions, and chapter-wise quiz banks"
    ],
    "image": generateCourseThumbnail("FIITJEE eSchool", "JEE Main & Advanced", "FIITJEE eSchool One-Year Dropper Live Batch for JEE Advanced & Main", "Intensive IIT Dropper", "fiitjee")
  },
  {
    "id": "chaitanya-infinity-neet-dropper",
    "instituteId": "srichaitanya",
    "institute": "Sri Chaitanya (Infinity Learn)",
    "name": "Infinity Learn NEET Repeater Online Live Batch (Rankers Course)",
    "badge": "High-Yield Medical Drill",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.7,
    "reviewsCount": 4200,
    "price": 32000,
    "originalPrice": 48000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "2 installments of ₹16,000",
    "mode": "100% Online Live Daily 6-Hour Sessions",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 8:30 AM - 2:00 PM Live",
    "teachers": ["Sri Chaitanya Hyderabad & National NEET Senior Faculty"],
    "studyMaterial": "Complete Sri Chaitanya MEDICON Printed Modules Couriered Home",
    "testsPerMonth": 10,
    "batchSize": "Interactive Online Classroom",
    "refundPolicy": "Standard 7-day refund guarantee",
    "highlights": [
          "Signature Sri Chaitanya daily drill model adapted for high-focus online home learning",
          "Full-color physical study books and error-tracker notebooks delivered to your door",
          "Weekly AIIMS & NEET full-syllabus mock tests with detailed question-by-question analysis",
          "Live 2-way doubt clearing and daily homework checks by dedicated mentors"
    ],
    "image": generateCourseThumbnail("Sri Chaitanya (Infinity Learn)", "NEET", "Infinity Learn NEET Repeater Online Live Batch (Rankers Course)", "High-Yield Medical Drill", "srichaitanya")
  },
  {
    "id": "chaitanya-infinity-jee-dropper",
    "instituteId": "srichaitanya",
    "institute": "Sri Chaitanya (Infinity Learn)",
    "name": "Infinity Learn JEE Main & Advanced Online Dropper Batch (Pro Live)",
    "badge": "Hyderabad Drill System",
    "targetExam": "JEE Main & Advanced",
    "category": "Repeater / Dropper",
    "rating": 4.6,
    "reviewsCount": 3600,
    "price": 34000,
    "originalPrice": 50000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "2 installments of ₹17,000",
    "mode": "100% Online Live Interactive",
    "language": "English",
    "schedule": "Mon - Sat • 8:30 AM - 2:00 PM Live",
    "teachers": ["Sri Chaitanya IIT Academy Senior Faculty"],
    "studyMaterial": "Complete Sri Chaitanya JEE Advanced Theory & Practice Workbooks Couriered",
    "testsPerMonth": 10,
    "batchSize": "Interactive Online Batch",
    "refundPolicy": "7-day trial refund window",
    "highlights": [
          "Rigorous problem-solving speed drill honed over 35 years in Hyderabad and Andhra campuses",
          "Daily practice problems (DPP) with video explanations for every tough question",
          "Computer-based test engine replicating the exact NTA JEE Main and IIT JEE Advanced UI",
          "Personalized rank predictor and micro-analytics pin-pointing subject weaknesses"
    ],
    "image": generateCourseThumbnail("Sri Chaitanya (Infinity Learn)", "JEE Main & Advanced", "Infinity Learn JEE Main & Advanced Online Dropper Batch (Pro Live)", "Hyderabad Drill System", "srichaitanya")
  },
  {
    "id": "narayana-cospark-neet-dropper",
    "instituteId": "narayana",
    "institute": "Narayana Digital (CO-SPARK)",
    "name": "Narayana CO-SPARK NEET Dropper Online Intensive (Rankers Program)",
    "badge": "Precision Error-Analysis",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.7,
    "reviewsCount": 3800,
    "price": 35000,
    "originalPrice": 52000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "2 installments of ₹17,500",
    "mode": "100% Online Live + Daily Micro-Tests",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 8:00 AM - 1:30 PM Live",
    "teachers": ["Narayana National Medical Faculty","Kota Top Rank Coaches"],
    "studyMaterial": "Complete Narayana Printed Modules & Micro-Syllabus Kits Couriered",
    "testsPerMonth": 12,
    "batchSize": "Interactive Virtual Stream",
    "refundPolicy": "7-day exit policy with refund as per terms",
    "highlights": [
          "CO-SPARK micro-schedule dividing the entire NEET syllabus into daily manageable milestones",
          "Mandatory Error Log drill where every incorrect answer is re-solved with conceptual notes",
          "Weekly All-India Grand Tests benchmarking against 75,000+ national medical aspirants",
          "Courier delivery of 24 printed modules, daily revision sheets, and NCERT-based mind maps"
    ],
    "image": generateCourseThumbnail("Narayana Digital (CO-SPARK)", "NEET", "Narayana CO-SPARK NEET Dropper Online Intensive (Rankers Program)", "Precision Error-Analysis", "narayana")
  },
  {
    "id": "narayana-cospark-jee-dropper",
    "instituteId": "narayana",
    "institute": "Narayana Digital (CO-SPARK)",
    "name": "Narayana CO-SPARK JEE Main & Advanced Online Dropper Batch",
    "badge": "Elite Engineering Drill",
    "targetExam": "JEE Main & Advanced",
    "category": "Repeater / Dropper",
    "rating": 4.6,
    "reviewsCount": 3100,
    "price": 38000,
    "originalPrice": 55000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "2 installments of ₹19,000",
    "mode": "100% Online Live with Kota & Hyderabad Experts",
    "language": "English",
    "schedule": "Mon - Sat • 8:30 AM - 2:00 PM Live",
    "teachers": ["Narayana Elite IIT Wing Faculty"],
    "studyMaterial": "Printed Narayana JEE Advanced Modules & Question Banks Couriered Home",
    "testsPerMonth": 10,
    "batchSize": "Virtual Classroom Stream",
    "refundPolicy": "7-day refund guarantee",
    "highlights": [
          "Proven Andhra/Telangana numerical drill ensuring rapid calculation speed in JEE Main",
          "Deep dive into advanced multi-correct, matrix-match, and paragraph MCQs for JEE Advanced",
          "All-India Narayana Test Series with question-level time tracking and peer comparison",
          "Direct live audio interaction with lecturers during designated doubt clarification hours"
    ],
    "image": generateCourseThumbnail("Narayana Digital (CO-SPARK)", "JEE Main & Advanced", "Narayana CO-SPARK JEE Main & Advanced Online Dropper Batch", "Elite Engineering Drill", "narayana")
  },
  {
    "id": "aakash-digital-neet-repeater",
    "instituteId": "aakash",
    "institute": "Aakash Digital",
    "name": "Aakash Digital Repeater Course for NEET (Live Interactive + Courier Books)",
    "badge": "Trusted National Brand",
    "targetExam": "NEET",
    "category": "Repeater / Dropper",
    "rating": 4.8,
    "reviewsCount": 6500,
    "price": 65000,
    "originalPrice": 85000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹21,667",
    "mode": "100% Online Live Interactive via Aakash App",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 9:00 AM - 2:00 PM Live",
    "teachers": ["Aakash National Senior Medical Faculty (Delhi / Kota)"],
    "studyMaterial": "Complete Set of 32 Aakash Printed Modules & Fast Track Question Banks Couriered",
    "testsPerMonth": 10,
    "batchSize": "Live Interactive App Cohort",
    "refundPolicy": "Pro-rata refund within 15 days as per national Aakash policy",
    "highlights": [
          "Aakash's 36-year medical coaching pedigree delivered directly via cutting-edge live app streaming",
          "Full access to AIATS (All India Aakash Test Series) with over 1,50,000 active test takers",
          "Complete set of physical printed study packages and Know Your NCERT biology modules couriered",
          "Dedicated 2-way doubt resolution with subject matter experts and recorded library backup"
    ],
    "image": generateCourseThumbnail("Aakash Digital", "NEET", "Aakash Digital Repeater Course for NEET (Live Interactive + Courier Books)", "Trusted National Brand", "aakash")
  },
  {
    "id": "aakash-digital-jee-repeater",
    "instituteId": "aakash",
    "institute": "Aakash Digital",
    "name": "Aakash Digital Target JEE (Main & Advanced) Dropper Course",
    "badge": "National Engineering Live",
    "targetExam": "JEE Main & Advanced",
    "category": "Repeater / Dropper",
    "rating": 4.7,
    "reviewsCount": 4800,
    "price": 62000,
    "originalPrice": 82000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "3 installments of ₹20,667",
    "mode": "100% Online Live Interactive",
    "language": "English",
    "schedule": "Mon - Sat • 9:00 AM - 2:00 PM Live",
    "teachers": ["Senior IIT-JEE Faculty of Aakash National"],
    "studyMaterial": "Aakash JEE Main & Advanced Printed Modules Couriered Directly to Home",
    "testsPerMonth": 8,
    "batchSize": "Interactive Stream",
    "refundPolicy": "Pro-rata refund within 15 days as per Aakash policy",
    "highlights": [
          "Systematic syllabus coverage from fundamental mechanics to advanced physical chemistry",
          "Regular AIATS computer-based testing simulating actual JEE Main examination hall experience",
          "Physical books couriered right away including past 20 years chapterwise question banks",
          "Interactive polling, in-class quizzes, and dedicated academic mentor for each student"
    ],
    "image": generateCourseThumbnail("Aakash Digital", "JEE Main & Advanced", "Aakash Digital Target JEE (Main & Advanced) Dropper Course", "National Engineering Live", "aakash")
  },
  {
    "id": "careerpoint-live-jee-02",
    "instituteId": "careerpoint",
    "institute": "eCareerPoint (Career Point Online)",
    "name": "eCareerPoint Live JEE Main & Advanced Dropper Course (With Courier Books)",
    "badge": "Kota Online Value",
    "targetExam": "JEE Main & Advanced",
    "category": "Repeater / Dropper",
    "rating": 4.6,
    "reviewsCount": 2100,
    "price": 26000,
    "originalPrice": 42000,
    "gstNote": "Inclusive of 18% GST",
    "installments": "2 installments of ₹13,000",
    "mode": "100% Online Live on eCareerPoint App",
    "language": "English + Bilingual",
    "schedule": "Mon - Sat • 8:30 AM - 1:30 PM Live",
    "teachers": ["Career Point Kota Senior IIT Wing Faculty"],
    "studyMaterial": "Complete Career Point Kota Printed Module Set Couriered to Doorstep",
    "testsPerMonth": 8,
    "batchSize": "Interactive Virtual Stream",
    "refundPolicy": "10-day refund window as per standard terms",
    "highlights": [
          "Direct interactive live lectures streamed from Career Point Kota studios",
          "Complete set of physical theory modules, daily practice sheets, and previous 15 years solved papers",
          "Regular online doubt resolution desk and continuous academic guidance",
          "Full-length CBT mock tests with comprehensive graphical performance reports"
    ],
    "image": generateCourseThumbnail("eCareerPoint (Career Point Online)", "JEE Main & Advanced", "eCareerPoint Live JEE Main & Advanced Dropper Course (With Courier Books)", "Kota Online Value", "careerpoint")
  }
];

const BATCHES_DATA = COACHING_BATCHES;
