// Reddit-Style Community Forum Data with Kerala & National Aspirant Focus
const INITIAL_POSTS = [
  {
    id: "post-1",
    title: "Brilliant Pala Online Repeaters vs Xylem Yodha: My brutally honest breakdown after completing 1 year",
    author: "kerala_doc_aspirant",
    authorBadge: "GMC Kottayam 2024 Batch (Ex-Repeater)",
    isVerified: true,
    timeAgo: "2 days ago",
    examTag: "NEET",
    flair: "Brilliant vs Xylem",
    upvotes: 247,
    userVote: 0, // -1, 0, 1
    content: `I scored 492 in my first NEET attempt from a state school and decided to repeat online. I had the exact same confusion everyone has here: Brilliant Pala is ₹36,000+ while Xylem Yodha is ₹9,999. Is Brilliant really worth 3.5x the money? Here is the truth:

1. **Test Series Rigor:** Brilliant's Sunday model exams are merciless. If you can score 600+ in Pala's model exams, you are guaranteed a Government Medical College seat in the actual NTA exam. Xylem's tests are decent and very close to standard NCERT, but slightly gentler.
2. **Teaching Style:** Xylem teachers (Dr. Ananth, etc.) make biology and chemistry extremely enjoyable and high-energy in Malayalam. You will never feel bored or sleepy in evening sessions. Brilliant is more traditional, lecture-heavy, and assumes you are serious from day one.
3. **Physics Reality Check:** If your physics is near zero, Xylem builds your basic confidence better. But if you already know basic theory and need brutal speed and 150+ in physics, Brilliant's problem sheets are unmatched.
4. **Conclusion:** If budget is strict, take Xylem Yodha and purchase an external test series (like Allen or Brilliant online test series). If your family can afford ₹36k without loans, Brilliant's discipline and peer pressure will keep you on track.`,
    commentsCount: 38,
    comments: [
      {
        id: "c1-1",
        author: "malappuram_repeater",
        authorBadge: "Xylem Yodha 2025",
        isVerified: true,
        timeAgo: "1 day ago",
        upvotes: 42,
        userVote: 0,
        text: "Spot on about the physics part. In Xylem, teachers explain concepts in simple Malayalam which helped me understand rotational motion for the first time. But I had to solve Neetprep and DC Pandey on my own for extra high-level questions."
      },
      {
        id: "c1-2",
        author: "palakkad_pala_alumni",
        authorBadge: "GMC Thrissur",
        isVerified: true,
        timeAgo: "18 hours ago",
        upvotes: 29,
        userVote: 0,
        text: "The main thing with Brilliant online is their attendance and marks SMS. My dad used to get an SMS every Monday morning with my statewide rank among 25,000 students. That fear alone made me study 12 hours a day."
      },
      {
        id: "c1-3",
        author: "future_surgeon_26",
        authorBadge: "Class 12 Aspirant",
        isVerified: false,
        timeAgo: "6 hours ago",
        upvotes: 8,
        userVote: 0,
        text: "Did you buy the printed study materials for both? How long did courier take to reach Kozhikode?"
      }
    ]
  },
  {
    id: "post-2",
    title: "Can an average student crack 99%ile in JEE Main with Physics Wallah online batch alone from Kerala?",
    author: "keam_to_nitc",
    authorBadge: "NIT Calicut (Mech) 2nd Year",
    isVerified: true,
    timeAgo: "3 days ago",
    examTag: "JEE Main & KEAM",
    flair: "Physics Wallah",
    upvotes: 184,
    userVote: 0,
    content: `A lot of Kerala students hesitate to take PW because classes are primarily in Hinglish or English, and we fear the language barrier or whether it covers KEAM syllabus.

My experience:
- **Pros:** PW teachers like Saleem Sir and Rajwant Sir solve questions at blazing speed. The DPPs (Daily Practice Problems) have video solutions which is a lifesaver when you get stuck at 11 PM.
- **The Catch:** PW teaches at a national JEE Main level. If your only target is KEAM rank within 2,000 to get into CET Trivandrum or Barton Hill, PW covers 100% of the syllabus, but you must additionally solve past 5-year KEAM previous year questions because KEAM speed (120 questions in 150 mins) is very different from JEE depth.
- **Cost:** At ₹5,000, it is unbeatable value. You save enough money to buy a decent second-hand tablet for notes.`,
    commentsCount: 22,
    comments: [
      {
        id: "c2-1",
        author: "cet_aspirant_trivandrum",
        authorBadge: "Repeater 2025",
        isVerified: true,
        timeAgo: "2 days ago",
        upvotes: 31,
        userVote: 0,
        text: "True! For KEAM, speed is king. In PW they teach you deep conceptual derivations. I had to practice KEAM 10-year papers separately to build calculation stamina without calculator."
      },
      {
        id: "c2-2",
        author: "rahul_kochi",
        authorBadge: "Student",
        isVerified: false,
        timeAgo: "1 day ago",
        upvotes: 14,
        userVote: 0,
        text: "Is the Malayalam notes version of PW good or should I stick to regular Lakshya/Prayas?"
      }
    ]
  },
  {
    id: "post-3",
    title: "Hidden costs no coaching institute tells you before you pay for an online batch (Read before enrolling)",
    author: "skeptical_parent_kerala",
    authorBadge: "Parent of 2 Aspirants",
    isVerified: true,
    timeAgo: "4 days ago",
    examTag: "General Advice",
    flair: "Fee & Value",
    upvotes: 312,
    userVote: 0,
    content: `We enrolled our daughter in an online batch last year. The advertised price on the poster was ₹28,000, but by the time the year ended we spent close to ₹52,000. Here are the hidden costs you must budget for:

1. **GST Calculation:** Some institutes quote ₹24,999 *excluding* 18% GST. That instantly adds another ₹4,500 at the payment checkout screen! Always check if the fee is GST-inclusive.
2. **Study Material Courier Charges:** A few coaching centres charge ₹1,500 to ₹3,000 separately for shipping their 16-20 printed modules.
3. **CBT Offline Mock Test Center Fee:** While online tests are included in the app, if you want to sit in an actual computer lab test center in Ernakulam or Thrissur for 5 pre-exam mocks, they charge an extra ₹4,000 to ₹6,000.
4. **Internet & Device Factor:** An online student consumes 4GB to 6GB of high-speed data every single day with live video and tests. A reliable fiber optic connection (₹600/month) + power backup/UPS is compulsory during monsoon power outages in Kerala.

Make sure to ask customer support if the price includes GST and physical book dispatch before making payment.`,
    commentsCount: 45,
    comments: [
      {
        id: "c3-1",
        author: "er_manu",
        authorBadge: "Alum",
        isVerified: false,
        timeAgo: "3 days ago",
        upvotes: 55,
        userVote: 0,
        text: "The monsoon power backup point is so real. During June-July rains in Idukki, our power was out for 3 days and I missed 12 live classes. Getting a 12V mini UPS for the Wi-Fi router is a must."
      },
      {
        id: "c3-2",
        author: "dr_priya_v",
        authorBadge: "GMC Alappuzha",
        isVerified: true,
        timeAgo: "2 days ago",
        upvotes: 27,
        userVote: 0,
        text: "Great summary. Also check their refund policy. Brilliant gives pro-rated refunds in first 14 days, whereas edtech platforms like Unacademy have almost zero refund once OTP is entered."
      }
    ]
  },
  {
    id: "post-4",
    title: "I am in Plus Two state syllabus getting 75-80% marks. Should I repeat with an online batch or go for regular college degree?",
    author: "confused_repeater_kollam",
    authorBadge: "Plus Two Aspirant",
    isVerified: false,
    timeAgo: "5 hours ago",
    examTag: "NEET",
    flair: "Repeater Advice",
    upvotes: 89,
    userVote: 0,
    content: `My Plus Two score is around 78% in Biology science group. My parents are asking whether I should repeat for NEET 2026 by taking an online batch at home, or join a BSc course in a local college.

My main concerns:
1. Sitting at home alone for 10 months in front of a laptop without friends or teachers watching me.
2. Will I lose discipline after the first 2 months?
3. Which online institute has the best personal phone mentor follow-up so I don't slack off?

Need honest advice from people who actually repeated from home.`,
    commentsCount: 19,
    comments: [
      {
        id: "c4-1",
        author: "survived_repeater_24",
        authorBadge: "GMC Manjeri",
        isVerified: true,
        timeAgo: "3 hours ago",
        upvotes: 19,
        userVote: 0,
        text: "I was a 76% student in Plus Two who repeated from home. Here is my single biggest advice: join a local study room or public library if possible. Sitting in the bedroom all day causes massive depression by December. Take an online batch (Xylem or Pala) but study in a reading room."
      },
      {
        id: "c4-2",
        author: "anandhu_k",
        authorBadge: "TKM College of Engineering",
        isVerified: true,
        timeAgo: "1 hour ago",
        upvotes: 7,
        userVote: 0,
        text: "Don't join a regular BSc degree if your heart is in medicine or engineering. Partial drops fail 95% of the time because college internals and practical records take away all your time. Give one full dedicated year."
      }
    ]
  },
  {
    id: "post-5",
    title: "Allen Digital vs Brilliant Pala for Class 11 Two-Year JEE Course: Comparison for Kerala English-medium students",
    author: "kerala_cbse_parent",
    authorBadge: "Parent of Class 10 Student",
    isVerified: true,
    timeAgo: "5 days ago",
    examTag: "JEE Main & Advanced",
    flair: "Institute Review",
    upvotes: 142,
    userVote: 0,
    content: `Our son is completing Class 10 CBSE in Cochin with strong interest in IITs. We are choosing between Allen Digital and Brilliant Pala Two-Year integrated online batches.

Key observations after attending demo classes:
- **Allen Digital:** 100% Kota syllabus. Faculty explains in crisp English/Hindi. Their modules (Race sheets, Target sheets) are the benchmark for JEE Advanced. If your child is purely targeting top 1000 in JEE Advanced, Allen's national test benchmark gives exact All-India rank comparison.
- **Brilliant Pala:** Offers bilingual (English + Malayalam touch) which feels warm and supportive. Also pays attention to the Kerala Plus One/Plus Two board mark normalization, which is essential if KEAM is on the backup radar.

Both are rigorous, but if you don't speak Hindi well, Allen's purely English batches require careful selection during enrollment.`,
    commentsCount: 16,
    comments: [
      {
        id: "c5-1",
        author: "iit_palakkad_cs",
        authorBadge: "IIT Palakkad 3rd Year",
        isVerified: true,
        timeAgo: "4 days ago",
        upvotes: 38,
        userVote: 0,
        text: "If target is IIT, do not worry about KEAM initially. JEE Advanced preparation naturally makes KEAM physics and chemistry feel very simple. Either Allen or Pala will work, but verify the student's problem solving stamina first."
      }
    ]
  }
];
