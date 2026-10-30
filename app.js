// ==========================================================================
// path2learn - Modern, Clean & Institute-Ordered Application Logic
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------------
  // State Initialization
  // ------------------------------------------------------------------------
  const state = {
    institutes: [...INSTITUTES_CONFIG],
    batches: [...BATCHES_DATA],
    posts: loadStoredPosts(),
    comparedBatchIds: loadStoredCompareIds(),
    activeTab: "directory",
    activeExam: "NEET", // Exam-first: Defaults to NEET Medical
    stageFilter: "ALL", // ALL, Repeater / Dropper, Class 12 Regular
    mediumFilter: "ALL", // ALL, Malayalam, English
    searchQuery: "",
    sortBy: "featured",
    theme: localStorage.getItem("path2learn_theme") || "light",
    forumFilter: {
      sort: "hot",
      flair: "all"
    },
    wizard: {
      step: 1,
      answers: {
        exam: null,
        stage: null,
        language: null,
        budget: null
      }
    }
  };

  // ------------------------------------------------------------------------
  // DOM References
  // ------------------------------------------------------------------------
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");

  const brandHomeLink = document.getElementById("brandHomeLink");
  const globalSearchInput = document.getElementById("globalSearchInput");

  // Header & Catalog Controls
  const headerExamDropdown = document.getElementById("headerExamDropdown");
  const examFilterPillRow = document.getElementById("examFilterPillRow");
  const totalBatchesBadge = document.getElementById("totalBatchesBadge");
  const sortDropdown = document.getElementById("sortDropdown");

  // Views
  const viewDirectory = document.getElementById("viewDirectory");
  const viewComparison = document.getElementById("viewComparison");
  const viewReddit = document.getElementById("viewReddit");
  const viewWizard = document.getElementById("viewWizard");
  const institutesGroupedStream = document.getElementById("institutesGroupedStream");

  // Compare Dock & Elements
  const headerCompareCount = document.getElementById("headerCompareCount");
  const stickyCompareBar = document.getElementById("stickyCompareBar");
  const stickyCompareChips = document.getElementById("stickyCompareChips");
  const clearAllCompareBtn = document.getElementById("clearAllCompareBtn");
  const openCompareFromStickyBtn = document.getElementById("openCompareFromStickyBtn");
  const headerCompareBtn = document.getElementById("headerCompareBtn");
  const goToBrowseFromCompareBtn = document.getElementById("goToBrowseFromCompareBtn");

  const comparisonEmptyState = document.getElementById("comparisonEmptyState");
  const comparisonTableWrapper = document.getElementById("comparisonTableWrapper");
  const comparisonTable = document.getElementById("comparisonTable");

  // Forum Elements
  const forumPostsStream = document.getElementById("forumPostsStream");
  const flairFilterStrip = document.getElementById("flairFilterStrip");
  const openPostModalBtn = document.getElementById("openPostModalBtn");
  const forumNewPostBtn = document.getElementById("forumNewPostBtn");
  const newPostModal = document.getElementById("newPostModal");
  const newPostForm = document.getElementById("newPostForm");
  const submitNewPostBtn = document.getElementById("submitNewPostBtn");

  const threadDetailModal = document.getElementById("threadDetailModal");
  const modalThreadTitle = document.getElementById("modalThreadTitle");
  const modalThreadBody = document.getElementById("modalThreadBody");

  // Batch Detail Modal
  const batchDetailModal = document.getElementById("batchDetailModal");
  const modalBatchTitle = document.getElementById("modalBatchTitle");
  const modalBatchBody = document.getElementById("modalBatchBody");
  const modalAddToCompareBtn = document.getElementById("modalAddToCompareBtn");
  let currentDetailBatchId = null;

  // Wizard Elements
  const wizardStepLabel = document.getElementById("wizardStepLabel");
  const wizardBackBtn = document.getElementById("wizardBackBtn");
  const wizardNextBtn = document.getElementById("wizardNextBtn");
  const wizardResultsArea = document.getElementById("wizardResultsArea");
  const wizardMatchedCards = document.getElementById("wizardMatchedCards");
  const restartWizardBtn = document.getElementById("restartWizardBtn");

  // ------------------------------------------------------------------------
  // Helper: Persistence
  // ------------------------------------------------------------------------
  function loadStoredPosts() {
    try {
      const stored = localStorage.getItem("path2learn_posts");
      return stored ? JSON.parse(stored) : [...INITIAL_POSTS];
    } catch {
      return [...INITIAL_POSTS];
    }
  }

  function savePosts() {
    try {
      localStorage.setItem("path2learn_posts", JSON.stringify(state.posts));
    } catch (e) {
      console.warn("Storage quota exceeded", e);
    }
  }

  function loadStoredCompareIds() {
    try {
      const stored = localStorage.getItem("path2learn_compare");
      return stored ? JSON.parse(stored).filter(id => BATCHES_DATA.some(b => b.id === id)) : [];
    } catch {
      return [];
    }
  }

  function saveCompareIds() {
    try {
      localStorage.setItem("path2learn_compare", JSON.stringify(state.comparedBatchIds));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }

  // ------------------------------------------------------------------------
  // Theme Management (Slate Dark)
  // ------------------------------------------------------------------------
  function applyTheme(theme) {
    state.theme = theme;
    if (theme === "dark") {
      body.classList.add("dark-theme");
      themeIcon.textContent = "☀️";
    } else {
      body.classList.remove("dark-theme");
      themeIcon.textContent = "🌙";
    }
    localStorage.setItem("path2learn_theme", theme);
  }

  themeToggleBtn.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });
  applyTheme(state.theme);

  // ------------------------------------------------------------------------
  // Navigation / Tabs
  // ------------------------------------------------------------------------
  function switchTab(tabKey) {
    state.activeTab = tabKey;

    document.querySelectorAll(".header-nav-btn").forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-tab") === tabKey);
    });

    viewDirectory.style.display = "none";
    viewComparison.style.display = "none";
    viewReddit.style.display = "none";
    viewWizard.style.display = "none";

    if (tabKey === "directory") {
      viewDirectory.style.display = "block";
      renderInstituteGroupedDirectory();
    } else if (tabKey === "comparison") {
      viewComparison.style.display = "block";
      renderComparisonView();
    } else if (tabKey === "reddit") {
      viewReddit.style.display = "grid";
      renderForumPosts();
    } else if (tabKey === "wizard") {
      viewWizard.style.display = "block";
      renderWizardStep();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".header-nav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      switchTab(btn.getAttribute("data-tab"));
    });
  });

  brandHomeLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchTab("directory");
  });

  headerCompareBtn.addEventListener("click", () => switchTab("comparison"));
  goToBrowseFromCompareBtn.addEventListener("click", () => switchTab("directory"));
  openCompareFromStickyBtn.addEventListener("click", () => switchTab("comparison"));

  // ------------------------------------------------------------------------
  // Exam Selection (Modern Custom Dropdown & Minimalist Pills)
  // ------------------------------------------------------------------------
  const examLabels = {
    "NEET": { icon: "🩺", text: "NEET Medical" },
    "JEE": { icon: "⚙️", text: "JEE Main & Adv" },
    "KEAM": { icon: "🏛️", text: "KEAM Kerala" },
    "ALL": { icon: "🌐", text: "All Categories" }
  };

  const sortLabels = {
    "featured": "Featured",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    "rating-desc": "Highest Rated"
  };

  function selectExam(examCode) {
    state.activeExam = examCode;
    if (headerExamDropdown) headerExamDropdown.value = examCode;

    // Update custom modern category dropdown display
    const categoryDropdownText = document.getElementById("categoryDropdownText");
    const categoryDropdownIcon = document.getElementById("categoryDropdownIcon");
    if (categoryDropdownText && examLabels[examCode]) {
      categoryDropdownText.textContent = examLabels[examCode].text;
    }
    if (categoryDropdownIcon && examLabels[examCode]) {
      categoryDropdownIcon.textContent = examLabels[examCode].icon;
    }

    // Update active state in modern dropdown options
    document.querySelectorAll("#categoryDropdownMenu .dropdown-opt-btn").forEach(opt => {
      opt.classList.toggle("active", opt.getAttribute("data-exam") === examCode);
    });

    document.querySelectorAll("#examFilterPillRow .filter-chip-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-exam") === examCode);
    });

    if (state.activeTab !== "directory") {
      switchTab("directory");
    } else {
      renderInstituteGroupedDirectory();
    }
  }

  // Modern Dropdown Elements
  const categoryDropdownWrap = document.getElementById("categoryDropdownWrap");
  const categoryDropdownBtn = document.getElementById("categoryDropdownBtn");
  const sortDropdownWrap = document.getElementById("sortDropdownWrap");
  const sortDropdownBtn = document.getElementById("sortDropdownBtn");
  const sortDropdownText = document.getElementById("sortDropdownText");

  // Category Dropdown Toggle & Selection
  categoryDropdownBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    sortDropdownWrap?.classList.remove("open");
    categoryDropdownWrap?.classList.toggle("open");
  });

  document.querySelectorAll("#categoryDropdownMenu .dropdown-opt-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const exam = btn.getAttribute("data-exam");
      selectExam(exam);
      categoryDropdownWrap?.classList.remove("open");
    });
  });

  // Sort Dropdown Toggle & Selection
  sortDropdownBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    categoryDropdownWrap?.classList.remove("open");
    sortDropdownWrap?.classList.toggle("open");
  });

  document.querySelectorAll("#sortDropdownMenu .dropdown-opt-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const sortVal = btn.getAttribute("data-sort");
      state.sortBy = sortVal;
      if (sortDropdown) sortDropdown.value = sortVal;
      if (sortDropdownText && sortLabels[sortVal]) {
        sortDropdownText.textContent = sortLabels[sortVal];
      }
      document.querySelectorAll("#sortDropdownMenu .dropdown-opt-btn").forEach(opt => {
        opt.classList.toggle("active", opt.getAttribute("data-sort") === sortVal);
      });
      sortDropdownWrap?.classList.remove("open");
      renderInstituteGroupedDirectory();
    });
  });

  // Close dropdowns when clicking anywhere outside
  document.addEventListener("click", () => {
    categoryDropdownWrap?.classList.remove("open");
    sortDropdownWrap?.classList.remove("open");
  });

  headerExamDropdown?.addEventListener("change", (e) => {
    selectExam(e.target.value);
  });

  examFilterPillRow?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip-btn");
    if (btn) {
      const exam = btn.getAttribute("data-exam");
      selectExam(exam);
    }
  });

  // Quick filters: Stage (Repeaters vs 12th)
  document.querySelectorAll(".stage-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      document.querySelectorAll(".stage-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.stageFilter = pill.getAttribute("data-stage");
      renderInstituteGroupedDirectory();
    });
  });

  // Quick filters: Medium (Malayalam vs English)
  document.querySelectorAll(".medium-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      document.querySelectorAll(".medium-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.mediumFilter = pill.getAttribute("data-medium");
      renderInstituteGroupedDirectory();
    });
  });

  // Sort dropdown fallback
  sortDropdown?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    if (sortDropdownText && sortLabels[e.target.value]) {
      sortDropdownText.textContent = sortLabels[e.target.value];
    }
    renderInstituteGroupedDirectory();
  });

  // Global search input
  globalSearchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (state.activeTab !== "directory" && state.searchQuery.length > 0) {
      switchTab("directory");
    }
    renderInstituteGroupedDirectory();
  });

  // Keyboard shortcut: Cmd+K / Ctrl+K or '/' to focus search
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      globalSearchInput?.focus();
      globalSearchInput?.select();
    } else if (e.key === "/" && document.activeElement !== globalSearchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      globalSearchInput?.focus();
    }
  });

  // ------------------------------------------------------------------------
  // Institute-Ordered Directory Rendering
  // ------------------------------------------------------------------------
  function renderInstituteGroupedDirectory() {
    let totalMatchingBatches = 0;
    const instituteBlocksHTML = [];

    // Filter criteria function
    function matchBatch(batch) {
      // 1. Exam filter
      if (state.activeExam !== "ALL") {
        if (!batch.targetExam.toLowerCase().includes(state.activeExam.toLowerCase())) {
          return false;
        }
      }

      // 2. Stage filter
      if (state.stageFilter !== "ALL") {
        if (batch.category !== state.stageFilter) return false;
      }

      // 3. Medium filter (Pure English vs Malayalam)
      if (state.mediumFilter !== "ALL") {
        const langLower = (batch.language || "").toLowerCase();
        if (state.mediumFilter === "Malayalam") {
          if (!langLower.includes("malayalam")) return false;
        } else if (state.mediumFilter === "English") {
          if (langLower.includes("malayalam")) return false;
        }
      }

      // 4. Search query matching across title, institute, acronym, exam, category, and highlights
      if (state.searchQuery) {
        const inst = state.institutes.find(i => i.name === batch.institute);
        const shortCode = inst ? inst.shortCode : "";
        const highlightsStr = (batch.highlights || []).join(" ");
        const haystack = `${batch.name} ${batch.institute} ${shortCode} ${batch.targetExam} ${batch.category} ${batch.language} ${batch.schedule} ${highlightsStr}`.toLowerCase();
        if (!haystack.includes(state.searchQuery)) return false;
      }

      return true;
    }

    // Loop through institutes in predefined priority order
    state.institutes.forEach(inst => {
      // Find all batches belonging to this institute that match criteria
      let instBatches = state.batches.filter(b => b.institute === inst.name && matchBatch(b));

      // Apply sorting within the institute if requested
      if (state.sortBy === "price-asc") {
        instBatches.sort((a, b) => a.price - b.price);
      } else if (state.sortBy === "price-desc") {
        instBatches.sort((a, b) => b.price - a.price);
      } else if (state.sortBy === "rating-desc") {
        instBatches.sort((a, b) => b.rating - a.rating);
      }

      if (instBatches.length > 0) {
        totalMatchingBatches += instBatches.length;

        // Render clean, spacious Institute Card with its batches
        instituteBlocksHTML.push(`
          <div class="institute-group-card">
            <!-- Institute Header Profile -->
            <div class="institute-header-banner">
              <div class="institute-profile">
                <div class="institute-logo-badge">${escapeHTML(inst.shortCode)}</div>
                <div class="institute-meta">
                  <h3>${escapeHTML(inst.name)}</h3>
                  <p>📍 ${escapeHTML(inst.location)} • Estd. ${escapeHTML(inst.established)}</p>
                </div>
              </div>
              <div class="institute-reputation-tag">
                <span>🏅</span>
                <span>${escapeHTML(inst.reputationTag)}</span>
              </div>
            </div>

            <!-- Batches Grid under this Institute -->
            <div class="institute-batches-grid">
              ${instBatches.map(batch => renderBatchCardHTML(batch)).join("")}
            </div>
          </div>
        `);
      }
    });

    totalBatchesBadge.textContent = `${totalMatchingBatches} Batches`;

    if (totalMatchingBatches === 0) {
      institutesGroupedStream.innerHTML = `
        <div class="comparison-empty-state" style="padding:50px 20px;">
          <div style="font-size:36px; margin-bottom:12px;">🔍</div>
          <h3>No batches match your filter criteria</h3>
          <p>Try switching to "All Stages" or "All Languages", or check another exam tab.</p>
          <button class="btn btn-outline" id="clearSearchCriteriaBtn">Reset to All NEET Batches</button>
        </div>
      `;
      document.getElementById("clearSearchCriteriaBtn")?.addEventListener("click", () => {
        state.stageFilter = "ALL";
        state.mediumFilter = "ALL";
        state.searchQuery = "";
        globalSearchInput.value = "";
        document.querySelectorAll(".stage-pill").forEach(p => p.classList.toggle("active", p.getAttribute("data-stage") === "ALL"));
        document.querySelectorAll(".medium-pill").forEach(p => p.classList.toggle("active", p.getAttribute("data-medium") === "ALL"));
        selectExam("NEET");
      });
      return;
    }

    institutesGroupedStream.innerHTML = instituteBlocksHTML.join("");
    attachBatchCardListeners();
  }

  function renderBatchCardHTML(batch) {
    const isCompared = state.comparedBatchIds.includes(batch.id);

    return `
      <article class="course-lms-card" data-batch-id="${batch.id}">
        <!-- Top Course Thumbnail Banner with Rating Pill -->
        <div class="card-thumb-box view-details-trigger" data-id="${batch.id}">
          <img src="${batch.thumbnail}" alt="${escapeHTML(batch.name)}" class="card-thumb-img" loading="lazy" />
          <div class="thumb-rating-badge">
            <span class="star-icon">⭐</span>
            <span>${batch.rating.toFixed(1)}</span>
          </div>
          <div class="thumb-exam-pill">
            <span>${escapeHTML(batch.targetExam)}</span>
          </div>
        </div>

        <!-- Card Content Area -->
        <div class="card-body-box">
          <h4 class="card-course-title view-details-trigger" data-id="${batch.id}" title="${escapeHTML(batch.name)}">
            ${escapeHTML(batch.name)}
          </h4>

          <!-- Author / Institute & Duration Row -->
          <div class="card-meta-row">
            <span class="card-author-text">${escapeHTML(batch.institute)}</span>
            <span class="card-duration-text">${batch.durationMonths} Months</span>
          </div>

          <!-- Bottom Price & Action Row -->
          <div class="card-footer-row">
            <div class="card-price-wrap">
              <span class="card-price-num">₹${batch.price.toLocaleString('en-IN')}</span>
              <span class="card-gst-tag">GST Included</span>
            </div>

            <div class="card-actions-wrap">
              <button class="btn-lms-compare ${isCompared ? 'in-compare' : ''}" data-id="${batch.id}">
                <span class="btn-icon">${isCompared ? '✓' : '🛍️'}</span>
                <span>${isCompared ? 'In Compare' : 'Add to Compare'}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function attachBatchCardListeners() {
    // Compare buttons
    document.querySelectorAll(".btn-lms-compare, .btn-compare").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute("data-id");
        toggleCompareBatch(id);
      });
    });

    // View details (on title, thumbnail or details button)
    document.querySelectorAll(".view-details-trigger, .view-details-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-id");
        openBatchDetailModal(id);
      });
    });
  }

  // ------------------------------------------------------------------------
  // Comparison Management
  // ------------------------------------------------------------------------
  function toggleCompareBatch(batchId) {
    const idx = state.comparedBatchIds.indexOf(batchId);
    if (idx > -1) {
      state.comparedBatchIds.splice(idx, 1);
    } else {
      if (state.comparedBatchIds.length >= 4) {
        alert("You can compare up to 4 batches at once. Remove one to add another.");
        return;
      }
      state.comparedBatchIds.push(batchId);
    }
    saveCompareIds();
    updateCompareUI();
    renderInstituteGroupedDirectory();
    if (state.activeTab === "comparison") {
      renderComparisonView();
    }
  }

  function updateCompareUI() {
    const count = state.comparedBatchIds.length;
    if (headerCompareCount) headerCompareCount.textContent = count;

    if (count > 0) {
      stickyCompareBar.classList.remove("hidden");
      stickyCompareChips.innerHTML = state.comparedBatchIds.map(id => {
        const b = state.batches.find(x => x.id === id);
        if (!b) return "";
        return `
          <div class="compare-chip">
            <span><strong>${escapeHTML(b.institute.split(' ')[0])}</strong> - ${escapeHTML(b.name.substring(0, 20))}...</span>
            <span class="compare-chip-remove" data-remove-id="${b.id}" title="Remove">&times;</span>
          </div>
        `;
      }).join("");

      document.querySelectorAll(".compare-chip-remove").forEach(chip => {
        chip.addEventListener("click", (e) => {
          const id = e.currentTarget.getAttribute("data-remove-id");
          toggleCompareBatch(id);
        });
      });
    } else {
      stickyCompareBar.classList.add("hidden");
    }
  }

  clearAllCompareBtn.addEventListener("click", () => {
    state.comparedBatchIds = [];
    saveCompareIds();
    updateCompareUI();
    renderInstituteGroupedDirectory();
    if (state.activeTab === "comparison") {
      renderComparisonView();
    }
  });

  function renderComparisonView() {
    if (state.comparedBatchIds.length === 0) {
      comparisonEmptyState.style.display = "block";
      comparisonTableWrapper.style.display = "none";
      return;
    }

    comparisonEmptyState.style.display = "none";
    comparisonTableWrapper.style.display = "block";

    const selectedBatches = state.comparedBatchIds
      .map(id => state.batches.find(b => b.id === id))
      .filter(Boolean);

    const thead = `
      <thead>
        <tr>
          <th class="feature-col">Parameters</th>
          ${selectedBatches.map(b => `
            <th>
              <div class="compare-head-card">
                <span class="badge badge-category">${escapeHTML(b.institute)}</span>
                <div class="compare-head-title">${escapeHTML(b.name)}</div>
                <div class="price-main" style="font-size:20px; margin-top:4px;">₹${b.price.toLocaleString('en-IN')}</div>
                <button class="btn-remove-compare" data-remove-id="${b.id}">✕ Remove</button>
              </div>
            </th>
          `).join("")}
        </tr>
      </thead>
    `;

    const rows = [
      { label: "Target Exam & Category", fn: b => `<strong>${b.targetExam}</strong><br><span style="color:var(--text-muted)">${b.category}</span>` },
      { label: "Instruction Medium", fn: b => `<span class="badge badge-language">${b.language}</span>` },
      { label: "Duration & Daily Hours", fn: b => `<strong>${b.durationMonths} Months</strong><br>${b.schedule}` },
      { label: "Lectures Delivery", fn: b => b.lecturesFormat },
      { label: "Study Material & Books", fn: b => `✓ ${b.studyMaterial}` },
      { label: "Doubt Clearing Mechanism", fn: b => `✓ ${b.doubtClearing}` },
      { label: "Test Series & CBT Engine", fn: b => b.testSeries },
      { label: "App & Web Compatibility", fn: b => b.appPlatform },
      { label: "Mentorship & Parents Connect", fn: b => b.mentorSupport },
      { label: "Scholarships & Concessions", fn: b => b.scholarshipDetails },
      { label: "Refund / Exit Policy", fn: b => `ℹ ${b.refundPolicy}` },
      { label: "Student Rating & Reviews", fn: b => `<strong>★ ${b.rating} / 5.0</strong> (${b.reviewsCount} reviews)` },
      { label: "Key Strengths", fn: b => `<ul style="padding-left:14px; font-size:12.5px; color:var(--text-secondary);">${b.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join("")}</ul>` },
      { label: "Points to Keep in Mind", fn: b => `<ul style="padding-left:14px; font-size:12.5px; color:#b91c1c;">${b.cons.map(c => `<li>${escapeHTML(c)}</li>`).join("")}</ul>` }
    ];

    const tbody = `
      <tbody>
        ${rows.map(row => `
          <tr>
            <td class="feature-col">${escapeHTML(row.label)}</td>
            ${selectedBatches.map(b => `<td>${row.fn(b)}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    `;

    comparisonTable.innerHTML = thead + tbody;

    document.querySelectorAll(".btn-remove-compare").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-remove-id");
        toggleCompareBatch(id);
      });
    });
  }

  // ------------------------------------------------------------------------
  // Batch Detail Modal
  // ------------------------------------------------------------------------
  function openBatchDetailModal(batchId) {
    const batch = state.batches.find(b => b.id === batchId);
    if (!batch) return;

    currentDetailBatchId = batch.id;
    modalBatchTitle.textContent = `${batch.name} - ${batch.institute}`;

    const isCompared = state.comparedBatchIds.includes(batch.id);
    modalAddToCompareBtn.textContent = isCompared ? "✓ In Comparison (Click to Remove)" : "+ Add to Comparison";

    modalBatchBody.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-light); padding-bottom:14px;">
        <div>
          <span class="badge badge-exam">${escapeHTML(batch.targetExam)}</span>
          <span class="badge badge-category" style="margin-left:6px;">${escapeHTML(batch.category)}</span>
          <span class="badge badge-language" style="margin-left:6px;">${escapeHTML(batch.language)}</span>
        </div>
        <div style="text-align:right;">
          <div style="font-size:24px; font-weight:800; color:var(--text-primary);">₹${batch.price.toLocaleString('en-IN')}</div>
          <span class="price-gst-badge">GST Inclusive • Official Price</span>
        </div>
      </div>

      <div class="spec-grid-compact" style="grid-template-columns: repeat(2, 1fr); margin: 0;">
        <div class="spec-cell"><span class="spec-cell-label">Duration</span><span class="spec-cell-val">${batch.durationMonths} Months</span></div>
        <div class="spec-cell"><span class="spec-cell-label">Class Schedule</span><span class="spec-cell-val">${escapeHTML(batch.schedule)}</span></div>
        <div class="spec-cell"><span class="spec-cell-label">Medium</span><span class="spec-cell-val">${escapeHTML(batch.language)}</span></div>
        <div class="spec-cell"><span class="spec-cell-label">Rating</span><span class="spec-cell-val">★ ${batch.rating} (${batch.reviewsCount} reviews)</span></div>
      </div>

      <div class="form-field">
        <label class="form-label">Study Material & Physical Books:</label>
        <div style="font-size:13.5px; color:var(--text-secondary); background:var(--bg-page); padding:12px; border-radius:6px; border:1px solid var(--border-light);">
          ${escapeHTML(batch.studyMaterial)}
        </div>
      </div>

      <div class="form-field">
        <label class="form-label">Doubt Resolution Protocol:</label>
        <div style="font-size:13.5px; color:var(--text-secondary); background:var(--bg-page); padding:12px; border-radius:6px; border:1px solid var(--border-light);">
          ${escapeHTML(batch.doubtClearing)}
        </div>
      </div>

      <div class="form-field">
        <label class="form-label">Test Series & CBT Exam Pattern:</label>
        <div style="font-size:13.5px; color:var(--text-secondary); background:var(--bg-page); padding:12px; border-radius:6px; border:1px solid var(--border-light);">
          ${escapeHTML(batch.testSeries)}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <div class="strength-box">
          <strong>Key Strengths:</strong>
          <ul>
            ${batch.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join("")}
          </ul>
        </div>
        <div class="con-box">
          <strong>Points to Keep in Mind:</strong>
          <ul>
            ${batch.cons.map(c => `<li>${escapeHTML(c)}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div style="font-size:12.5px; color:var(--text-muted); border-top:1px solid var(--border-light); padding-top:12px;">
        <strong>Refund Policy:</strong> ${escapeHTML(batch.refundPolicy)}
      </div>
    `;

    batchDetailModal.classList.remove("hidden");
  }

  modalAddToCompareBtn.addEventListener("click", () => {
    if (currentDetailBatchId) {
      toggleCompareBatch(currentDetailBatchId);
      const isCompared = state.comparedBatchIds.includes(currentDetailBatchId);
      modalAddToCompareBtn.textContent = isCompared ? "✓ In Comparison (Click to Remove)" : "+ Add to Comparison";
    }
  });

  // ------------------------------------------------------------------------
  // View 3: Forum Logic (Reddit Style)
  // ------------------------------------------------------------------------
  function getFilteredForumPosts() {
    let list = [...state.posts];
    if (state.forumFilter.flair !== "all") {
      list = list.filter(p => p.flair === state.forumFilter.flair);
    }
    if (state.forumFilter.sort === "hot") {
      list.sort((a, b) => (b.upvotes + b.commentsCount * 2) - (a.upvotes + a.commentsCount * 2));
    } else if (state.forumFilter.sort === "top") {
      list.sort((a, b) => b.upvotes - a.upvotes);
    } else if (state.forumFilter.sort === "new") {
      list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }
    return list;
  }

  function renderForumPosts() {
    const list = getFilteredForumPosts();

    if (list.length === 0) {
      forumPostsStream.innerHTML = `
        <div class="comparison-empty-state" style="padding:40px 20px;">
          <h3>No discussions under this topic yet</h3>
          <p>Be the first to share your batch review or ask a question.</p>
          <button class="btn btn-primary" id="emptyForumAskBtn">+ Ask Community</button>
        </div>
      `;
      document.getElementById("emptyForumAskBtn")?.addEventListener("click", () => newPostModal.classList.remove("hidden"));
      return;
    }

    forumPostsStream.innerHTML = list.map(post => {
      const upvotedClass = post.userVote === 1 ? "upvoted" : "";
      const downvotedClass = post.userVote === -1 ? "downvoted" : "";

      return `
        <article class="reddit-post-card" data-post-id="${post.id}">
          <div class="vote-column">
            <button class="vote-btn ${upvotedClass} vote-up-btn" data-post-id="${post.id}" title="Upvote">▲</button>
            <span class="vote-score ${upvotedClass} ${downvotedClass}">${post.upvotes}</span>
            <button class="vote-btn ${downvotedClass} vote-down-btn" data-post-id="${post.id}" title="Downvote">▼</button>
          </div>

          <div class="post-content-column">
            <div class="post-meta-row">
              <span class="badge badge-category">${escapeHTML(post.flair)}</span>
              <span class="badge badge-exam">${escapeHTML(post.examTag)}</span>
              <span>•</span>
              <span class="post-author">u/${escapeHTML(post.author)}</span>
              ${post.authorBadge ? `<span class="verified-tag">${escapeHTML(post.authorBadge)}</span>` : ""}
              <span>•</span>
              <span>${escapeHTML(post.timeAgo || "Recently")}</span>
            </div>

            <h3 class="post-title-link open-thread-trigger" data-post-id="${post.id}">
              ${escapeHTML(post.title)}
            </h3>

            <p class="post-snippet">
              ${escapeHTML(post.content)}
            </p>

            ${post.content && post.content.length > 180 ? `
              <button class="post-expand-toggle-btn" data-post-id="${post.id}" type="button">
                <span>Read more ▾</span>
              </button>
            ` : ""}

            <div class="post-action-bar">
              <button class="post-action-btn open-thread-trigger" data-post-id="${post.id}">
                💬 ${post.commentsCount || (post.comments ? post.comments.length : 0)} Comments
              </button>
              <button class="post-action-btn share-post-btn" data-title="${escapeHTML(post.title)}">
                ↗ Share
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    attachForumListeners();
  }

  function attachForumListeners() {
    document.querySelectorAll(".vote-up-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        handlePostVote(e.currentTarget.getAttribute("data-post-id"), 1);
      });
    });

    document.querySelectorAll(".vote-down-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        handlePostVote(e.currentTarget.getAttribute("data-post-id"), -1);
      });
    });

    document.querySelectorAll(".post-expand-toggle-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = e.currentTarget.closest(".reddit-post-card");
        if (card) {
          const isExp = card.classList.toggle("expanded");
          btn.innerHTML = isExp ? "<span>Show less ▴</span>" : "<span>Read more ▾</span>";
        }
      });
    });

    document.querySelectorAll(".open-thread-trigger").forEach(el => {
      el.addEventListener("click", (e) => {
        openThreadModal(e.currentTarget.getAttribute("data-post-id"));
      });
    });

    document.querySelectorAll(".share-post-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        navigator.clipboard?.writeText(window.location.href);
        const originalText = e.currentTarget.textContent;
        e.currentTarget.textContent = "✓ Copied";
        setTimeout(() => e.currentTarget.textContent = originalText, 2000);
      });
    });
  }

  function handlePostVote(postId, direction) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    if (post.userVote === direction) {
      post.upvotes -= direction;
      post.userVote = 0;
    } else {
      post.upvotes += direction - (post.userVote || 0);
      post.userVote = direction;
    }

    savePosts();
    renderForumPosts();
  }

  flairFilterStrip.addEventListener("click", (e) => {
    const pill = e.target.closest(".flair-pill");
    if (pill) {
      document.querySelectorAll(".flair-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.forumFilter.flair = pill.getAttribute("data-flair");
      renderForumPosts();
    }
  });

  document.querySelectorAll(".forum-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".forum-tab-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      state.forumFilter.sort = e.currentTarget.getAttribute("data-forum-sort");
      renderForumPosts();
    });
  });

  function openThreadModal(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (!post) return;

    modalThreadTitle.textContent = post.title;
    renderThreadModalContent(post);
    threadDetailModal.classList.remove("hidden");
  }

  function renderThreadModalContent(post) {
    const comments = post.comments || [];

    modalThreadBody.innerHTML = `
      <div class="post-meta-row" style="margin-bottom:10px;">
        <span class="badge badge-category">${escapeHTML(post.flair)}</span>
        <span class="badge badge-exam">${escapeHTML(post.examTag)}</span>
        <span>• Posted by u/<strong>${escapeHTML(post.author)}</strong></span>
        ${post.authorBadge ? `<span class="verified-tag">${escapeHTML(post.authorBadge)}</span>` : ""}
        <span>• ${escapeHTML(post.timeAgo || "Recently")}</span>
      </div>

      <div class="thread-full-content">
        ${escapeHTML(post.content)}
      </div>

      <div style="border-top:1px solid var(--border-light); margin-top:24px; padding-top:20px;">
        <h4 style="font-size:15px; font-weight:700; margin-bottom:14px;">
          Discussion (${comments.length} Comments)
        </h4>

        <!-- Reply Input Box -->
        <div style="background:var(--bg-page); border:1.5px solid var(--border-medium); border-radius:6px; padding:14px; margin-bottom:24px;">
          <textarea id="replyTextInput" class="form-textarea" style="min-height:75px; margin-bottom:10px;" placeholder="Add to the discussion... Share your batch experience or advice..."></textarea>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <input type="text" id="replyAuthorInput" class="form-input" style="max-width:260px; font-size:12.5px;" placeholder="Your Name / Status (e.g., Arjun, Repeater 2025)">
            <button id="submitReplyBtn" class="btn btn-primary btn-sm">Post Comment</button>
          </div>
        </div>

        <div class="comment-list">
          ${comments.length === 0 ? `<p style="font-size:13.5px; color:var(--text-muted)">No comments yet. Share your experience!</p>` : ""}
          ${comments.map(c => `
            <div class="comment-item" data-comment-id="${c.id}">
              <div class="comment-threadline" title="Click to collapse / expand thread"></div>
              <div class="comment-inner">
                <div class="comment-meta">
                  <button class="comment-collapse-btn" title="Collapse comment thread" data-comment-id="${c.id}" type="button">[-]</button>
                  <strong>u/${escapeHTML(c.author)}</strong>
                  ${c.authorBadge ? `<span class="verified-tag">${escapeHTML(c.authorBadge)}</span>` : ""}
                  <span>• ${escapeHTML(c.timeAgo || "Just now")}</span>
                  <span class="collapsed-indicator" style="display:none; font-style:italic; color:var(--text-muted); cursor:pointer;" data-comment-id="${c.id}">(collapsed • click to expand)</span>
                </div>
                <div class="comment-body-collapsible">
                  <div class="comment-text">${escapeHTML(c.text)}</div>
                  <div class="comment-actions">
                    <button class="comment-upvote-btn" data-cid="${c.id}" type="button">▲ Upvote (${c.upvotes || 1})</button>
                    <button class="comment-reply-trigger" data-author="${escapeHTML(c.author)}" type="button">Reply</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Reddit-style Comment Collapse/Expand Listeners
    modalThreadBody.querySelectorAll(".comment-collapse-btn, .comment-threadline, .collapsed-indicator").forEach(el => {
      el.addEventListener("click", (e) => {
        const item = e.currentTarget.closest(".comment-item");
        if (item) {
          const isCollapsed = item.classList.toggle("collapsed");
          const btn = item.querySelector(".comment-collapse-btn");
          if (btn) btn.textContent = isCollapsed ? "[+]" : "[-]";
        }
      });
    });

    // Upvote Comment
    modalThreadBody.querySelectorAll(".comment-upvote-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const cid = e.currentTarget.getAttribute("data-cid");
        const comment = post.comments?.find(c => c.id === cid);
        if (comment) {
          comment.upvotes = (comment.upvotes || 1) + 1;
          savePosts();
          renderThreadModalContent(post);
        }
      });
    });

    // Reply prefill helper
    modalThreadBody.querySelectorAll(".comment-reply-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const author = e.currentTarget.getAttribute("data-author");
        const replyInput = document.getElementById("replyTextInput");
        if (replyInput) {
          replyInput.value = `@u/${author} `;
          replyInput.focus();
        }
      });
    });

    document.getElementById("submitReplyBtn")?.addEventListener("click", () => {
      const text = document.getElementById("replyTextInput").value.trim();
      const author = document.getElementById("replyAuthorInput").value.trim() || "kerala_aspirant";
      if (!text) return;

      if (!post.comments) post.comments = [];
      post.comments.push({
        id: "c-" + Date.now(),
        author: author,
        authorBadge: "Community Aspirant",
        isVerified: false,
        timeAgo: "Just now",
        upvotes: 1,
        text: text
      });
      post.commentsCount = post.comments.length;

      savePosts();
      renderThreadModalContent(post);
      renderForumPosts();
    });
  }

  // New Post Submission
  openPostModalBtn.addEventListener("click", () => newPostModal.classList.remove("hidden"));
  forumNewPostBtn.addEventListener("click", () => newPostModal.classList.remove("hidden"));

  submitNewPostBtn.addEventListener("click", () => {
    const title = document.getElementById("postTitleInput").value.trim();
    const exam = document.getElementById("postExamSelect").value;
    const flair = document.getElementById("postFlairSelect").value;
    const author = document.getElementById("postAuthorInput").value.trim() || "kerala_student";
    const bodyText = document.getElementById("postBodyInput").value.trim();

    if (!title || !bodyText) {
      alert("Please enter both a title and details for your query/review.");
      return;
    }

    const newPost = {
      id: "post-" + Date.now(),
      title: title,
      author: author,
      authorBadge: "Kerala Aspirant",
      isVerified: false,
      timeAgo: "Just now",
      timestamp: Date.now(),
      examTag: exam,
      flair: flair,
      upvotes: 1,
      userVote: 1,
      content: bodyText,
      commentsCount: 0,
      comments: []
    };

    state.posts.unshift(newPost);
    savePosts();

    newPostModal.classList.add("hidden");
    newPostForm.reset();
    switchTab("reddit");
  });

  // ------------------------------------------------------------------------
  // View 4: Wizard Matcher
  // ------------------------------------------------------------------------
  function renderWizardStep() {
    const step = state.wizard.step;
    wizardStepLabel.textContent = `Step ${step} of 4`;

    document.getElementById("wizardStep1").style.display = "none";
    document.getElementById("wizardStep2").style.display = "none";
    document.getElementById("wizardStep3").style.display = "none";
    document.getElementById("wizardStep4").style.display = "none";
    wizardResultsArea.style.display = "none";

    const currentStepEl = document.getElementById(`wizardStep${step}`);
    if (currentStepEl) {
      currentStepEl.style.display = "block";
    }

    wizardBackBtn.style.visibility = step > 1 ? "visible" : "hidden";
    wizardNextBtn.style.display = "";
    wizardNextBtn.textContent = step === 4 ? "Show My Best Matches ✨" : "Next Step →";

    const currentVal = getCurrentStepAnswer(step);
    wizardNextBtn.disabled = !currentVal;

    document.querySelectorAll(`.wizard-choice-box[data-step="${step}"]`).forEach(box => {
      const val = box.getAttribute("data-value");
      box.classList.toggle("selected", val === currentVal);
    });
  }

  function getCurrentStepAnswer(step) {
    if (step === 1) return state.wizard.answers.exam;
    if (step === 2) return state.wizard.answers.stage;
    if (step === 3) return state.wizard.answers.language;
    if (step === 4) return state.wizard.answers.budget;
    return null;
  }

  document.querySelectorAll(".wizard-choice-box").forEach(box => {
    box.addEventListener("click", () => {
      const step = parseInt(box.getAttribute("data-step"), 10);
      const val = box.getAttribute("data-value");

      if (step === 1) state.wizard.answers.exam = val;
      if (step === 2) state.wizard.answers.stage = val;
      if (step === 3) state.wizard.answers.language = val;
      if (step === 4) state.wizard.answers.budget = val;

      renderWizardStep();
    });
  });

  wizardNextBtn.addEventListener("click", () => {
    if (state.wizard.step < 4) {
      state.wizard.step++;
      renderWizardStep();
    } else {
      calculateAndShowMatches();
    }
  });

  wizardBackBtn.addEventListener("click", () => {
    if (state.wizard.step > 1) {
      state.wizard.step--;
      renderWizardStep();
    }
  });

  restartWizardBtn.addEventListener("click", () => {
    state.wizard.step = 1;
    state.wizard.answers = { exam: null, stage: null, language: null, budget: null };
    document.querySelectorAll(".wizard-choice-box").forEach(box => box.classList.remove("selected"));
    renderWizardStep();
  });

  function calculateAndShowMatches() {
    document.getElementById("wizardStep1").style.display = "none";
    document.getElementById("wizardStep2").style.display = "none";
    document.getElementById("wizardStep3").style.display = "none";
    document.getElementById("wizardStep4").style.display = "none";
    wizardBackBtn.style.visibility = "hidden";
    wizardNextBtn.style.display = "none";
    wizardResultsArea.style.display = "block";
    wizardStepLabel.textContent = "Recommended Batches";

    const { exam, stage, language, budget } = state.wizard.answers;

    const scoredBatches = state.batches.map(batch => {
      let score = 0;
      let reasons = [];

      if (exam === "ANY" || batch.targetExam.includes(exam)) {
        score += 35;
        reasons.push(`Targeted directly for ${batch.targetExam}`);
      }

      if (stage && batch.category.includes(stage)) {
        score += 25;
        reasons.push(`Fits your ${stage} schedule`);
      }

      if (language === "Malayalam" && (batch.language.includes("Malayalam") || batch.language.includes("Bilingual"))) {
        score += 20;
        reasons.push("Malayalam / Manglish faculty explanations");
      } else if (language === "English" && (batch.language.includes("English") || batch.language.includes("Hinglish"))) {
        score += 20;
        reasons.push("National English / Kota faculty format");
      }

      if (budget === "budget-low" && batch.price <= 10000) {
        score += 20;
        reasons.push("Fits within your under ₹10,000 budget");
      } else if (budget === "budget-mid" && batch.price > 9000 && batch.price <= 28000) {
        score += 20;
        reasons.push("Comfortable mid-tier balance of physical books & fees");
      } else if (budget === "budget-high" && batch.price > 25000) {
        score += 20;
        reasons.push("Top tier test series & intense discipline");
      } else if (budget === "budget-any") {
        score += 15;
      }

      return { batch, score, reasons };
    });

    scoredBatches.sort((a, b) => b.score - a.score);
    const topMatches = scoredBatches.slice(0, 3);

    wizardMatchedCards.innerHTML = topMatches.map(({ batch, score, reasons }) => {
      const isCompared = state.comparedBatchIds.includes(batch.id);

      return `
        <article class="wizard-match-card" data-batch-id="${batch.id}">
          <div class="wizard-match-main">
            <div class="wizard-match-badges">
              <span class="badge badge-highlight">${score}% Match Score</span>
              <span class="badge badge-category">${escapeHTML(batch.institute)}</span>
              <span class="badge badge-exam">${escapeHTML(batch.targetExam)}</span>
              <span class="badge badge-language">${escapeHTML(batch.language)}</span>
            </div>

            <h4 class="wizard-match-title view-details-trigger" data-id="${batch.id}" style="cursor:pointer;">
              ${escapeHTML(batch.name)}
            </h4>

            <div class="wizard-reasons-box">
              <strong>Why this fits your profile:</strong>
              <ul>
                ${reasons.map(r => `<li>✓ ${escapeHTML(r)}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="wizard-match-side">
            <div class="wizard-match-pricing">
              <div class="price-main">₹${batch.price.toLocaleString('en-IN')}</div>
              <span class="price-gst-badge">✓ GST Included</span>
            </div>

            <div class="wizard-match-actions">
              <button class="btn btn-outline btn-sm view-details-trigger" data-id="${batch.id}">
                Details
              </button>
              <button class="btn-lms-compare ${isCompared ? 'in-compare' : ''}" data-id="${batch.id}">
                <span class="btn-icon">${isCompared ? '✓' : '🛍️'}</span>
                <span>${isCompared ? 'In Compare' : 'Add to Compare'}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    attachBatchCardListeners();
  }

  // ------------------------------------------------------------------------
  // Modal General Handlers
  // ------------------------------------------------------------------------
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      document.getElementById(modalId)?.classList.add("hidden");
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add("hidden");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.add("hidden"));
    }
  });

  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ------------------------------------------------------------------------
  // Initial Boot
  // ------------------------------------------------------------------------
  selectExam(state.activeExam || "NEET");
  updateCompareUI();
});
