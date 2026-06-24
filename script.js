const logoTemplates = {
  html: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="HTML logo">
      <path fill="#e44d26" d="M12 6h40l-3.6 45.1L31.9 58 15.6 51.1 12 6Z"/>
      <path fill="#f16529" d="M32 10v43.4l13.3-5.5L48.4 10H32Z"/>
      <path fill="#ebebeb" d="M22.1 20.5h9.9v5.4h-9.4l.4 5.3h9v5.4H18l-1.2-21.4H32v5.3h-9.9Z"/>
      <path fill="#fff" d="M41.9 20.5H32v-5.3h15.1l-.5 5.3H41.9Zm-.5 10.7H32v5.4h4.4l-.5 6.1-3.9 1.6v5.6l8.9-3.7 1.2-15Z"/>
    </svg>
  `,
  css: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="CSS logo">
      <path fill="#1572b6" d="M12 6h40l-3.6 45.1L31.9 58 15.6 51.1 12 6Z"/>
      <path fill="#33a9dc" d="M32 10v43.4l13.3-5.5L48.4 10H32Z"/>
      <path fill="#ebebeb" d="M18.4 20.5 18 15.2h14v5.3H18.4Zm1.1 10.7-.5-5.3h13v5.3H19.5Zm.8 5.4h5.4l.3 4 6 2.4v5.7l-10.9-4.5-.8-7.6Z"/>
      <path fill="#fff" d="M45.9 15.2 45.4 20.5H32v-5.3h13.9Zm-1.1 10.7-.5 5.3H32v-5.3h12.8Zm-1 10.7-.8 7.6-11 4.5V43l6.1-2.4.3-4H32v-5.4h12.3l-.5 5.4Z"/>
    </svg>
  `,
  javascript: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="JavaScript logo">
      <rect width="48" height="48" x="8" y="8" fill="#f7df1e" rx="6"/>
      <path fill="#111827" d="M25.8 43.7c1 1.7 2.2 3 4.6 3 2 0 3.2-1 3.2-2.4 0-1.7-1.3-2.3-3.5-3.2l-1.2-.5c-3.5-1.5-5.8-3.3-5.8-7.2 0-3.6 2.7-6.3 7-6.3 3 0 5.2 1.1 6.8 3.8l-3.7 2.4c-.8-1.5-1.7-2.1-3.1-2.1s-2.4.9-2.4 2.1c0 1.5.9 2.1 3 3l1.2.5c4.1 1.8 6.4 3.5 6.4 7.5 0 4.3-3.4 6.7-7.9 6.7-4.4 0-7.3-2.1-8.7-4.9l4.1-2.4Zm-16.9.4 4.1-2.5c.8 1.4 1.5 2.6 3.2 2.6 1.6 0 2.6-.6 2.6-3.1V27.4h5v13.8c0 5.2-3 7.5-7.4 7.5-4 0-6.3-2.1-7.5-4.6Z"/>
    </svg>
  `,
  python: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="Python logo">
      <path fill="#3776ab" d="M31.7 8c-10.4 0-9.8 4.5-9.8 4.5v4.7h10v1.4H18.1S8 17.5 8 28.5s8.8 10.6 8.8 10.6h5.3v-7.4s-.3-8.8 8.7-8.8h9.9s8.3.1 8.3-8V12.5S50.2 8 31.7 8Z"/>
      <path fill="#ffd43b" d="M32.3 56c10.4 0 9.8-4.5 9.8-4.5v-4.7h-10v-1.4h13.8S56 46.5 56 35.5s-8.8-10.6-8.8-10.6h-5.3v7.4s.3 8.8-8.7 8.8h-9.9s-8.3-.1-8.3 8v2.4S13.8 56 32.3 56Z"/>
      <circle cx="27.1" cy="13.7" r="2.2" fill="#fff"/>
      <circle cx="36.9" cy="50.3" r="2.2" fill="#6b4f00"/>
    </svg>
  `,
  c: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="C logo">
      <path fill="#5c35d5" d="m32 6 23 13.3v25.4L32 58 9 44.7V19.3L32 6Z"/>
      <path fill="#7a52ef" d="M32 12.7 49 22.5v19L32 51.3 15 41.5v-19l17-9.8Z"/>
      <path fill="#fff" d="M33.5 45.5c-8 0-14-5.7-14-13.5s6-13.5 14-13.5c5 0 8.8 2.2 11.1 5.7L40 27.4c-1.3-2.1-3.5-3.4-6.3-3.4-4.8 0-8.1 3.4-8.1 8s3.3 8 8.1 8c2.9 0 5.1-1.3 6.5-3.6l4.8 3.1c-2.4 3.7-6.4 6-11.5 6Z"/>
    </svg>
  `,
  cpp: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="C++ logo">
      <path fill="#008f9c" d="m32 6 23 13.3v25.4L32 58 9 44.7V19.3L32 6Z"/>
      <path fill="#14b8c5" d="M32 12.7 49 22.5v19L32 51.3 15 41.5v-19l17-9.8Z"/>
      <path fill="#fff" d="M27 43.4c-6.8 0-11.8-4.8-11.8-11.4S20.2 20.6 27 20.6c4.2 0 7.4 1.8 9.3 4.8l-4.1 2.7c-1.1-1.8-2.9-2.9-5.1-2.9-3.9 0-6.4 2.8-6.4 6.8s2.5 6.8 6.4 6.8c2.3 0 4.1-1.1 5.2-3l4.1 2.7c-2 3-5.1 4.9-9.4 4.9Zm15.8-13.5h-3.4v-3.4h-2.8v3.4h-3.4v2.7h3.4V36h2.8v-3.4h3.4v-2.7Zm8.1 0h-3.4v-3.4h-2.8v3.4h-3.4v2.7h3.4V36h2.8v-3.4h3.4v-2.7Z"/>
    </svg>
  `,
  java: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="Java logo">
      <path fill="none" stroke="#f89820" stroke-linecap="round" stroke-width="4" d="M32 7c7 7-8 9-1 16 5 5 13 8-2 17"/>
      <path fill="none" stroke="#5382a1" stroke-linecap="round" stroke-width="4" d="M22 27c-7 3 20 5 29 1M18 36c-8 4 28 6 36 1M21 45c-5 3 19 5 28 1"/>
      <path fill="#5382a1" d="M20 48h28c-.6 5.4-5.8 8-14 8s-13.4-2.6-14-8Z"/>
      <path fill="#fff" d="M25 50h18c-1.6 1.4-4.6 2.3-9 2.3s-7.4-.9-9-2.3Z"/>
    </svg>
  `,
  sql: `
    <svg class="course-logo" viewBox="0 0 64 64" role="img" aria-label="SQL logo">
      <ellipse cx="32" cy="16" fill="#ee3c83" rx="20" ry="8"/>
      <path fill="#d92e74" d="M12 16v26c0 4.4 9 8 20 8s20-3.6 20-8V16c0 4.4-9 8-20 8s-20-3.6-20-8Z"/>
      <path fill="none" stroke="#fff" stroke-width="4" d="M12 25c0 4.4 9 8 20 8s20-3.6 20-8M12 34c0 4.4 9 8 20 8s20-3.6 20-8"/>
      <ellipse cx="32" cy="16" fill="none" stroke="#fff" stroke-width="4" rx="20" ry="8"/>
    </svg>
  `
};

const courses = [
  {
    name: "HTML",
    logo: "html",
    lessons: 35,
    examples: 120,
    accent: "#ff623f",
    buttonText: "#ffffff",
    summary: "Create page structure, forms, tables, media, and semantic layouts.",
    preview: ["Elements", "Forms", "Tables"],
    syllabus: [
      ["HTML Basics", ["Introduction", "Editors", "Elements", "Attributes", "Headings", "Paragraphs"]],
      ["Page Content", ["Links", "Images", "Lists", "Tables", "Block and inline tags", "Classes and IDs"]],
      ["Forms and Media", ["Forms", "Input types", "Labels", "Validation", "Audio", "Video"]],
      ["Modern HTML", ["Semantic tags", "Meta tags", "Accessibility", "HTML APIs", "Mini portfolio page"]]
    ]
  },
  {
    name: "CSS",
    logo: "css",
    lessons: 30,
    examples: 110,
    accent: "#3358f5",
    buttonText: "#ffffff",
    summary: "Style beautiful interfaces using selectors, layout, animations, and responsive design.",
    preview: ["Selectors", "Flexbox", "Grid"],
    syllabus: [
      ["CSS Basics", ["Syntax", "Selectors", "Colors", "Units", "Box model", "Specificity"]],
      ["Layout", ["Display", "Position", "Flexbox", "Grid", "Overflow", "Z-index"]],
      ["Visual Design", ["Fonts", "Borders", "Shadows", "Gradients", "Transitions", "Animations"]],
      ["Responsive CSS", ["Media queries", "Responsive images", "Variables", "Dark mode", "Landing page project"]]
    ]
  },
  {
    name: "JavaScript",
    logo: "javascript",
    lessons: 40,
    examples: 150,
    accent: "#f3d300",
    buttonText: "#111827",
    summary: "Add logic, interaction, events, arrays, functions, and browser behavior.",
    preview: ["Variables", "DOM", "Events"],
    syllabus: [
      ["JS Basics", ["Introduction", "Variables", "Data types", "Operators", "Conditions", "Loops"]],
      ["Functions and Data", ["Functions", "Arrays", "Objects", "Strings", "Numbers", "Dates"]],
      ["Browser JS", ["DOM", "Events", "Forms", "Local storage", "Fetch API", "JSON"]],
      ["Practice", ["Error handling", "ES6 modules", "Async JavaScript", "Quiz app project"]]
    ]
  },
  {
    name: "Python",
    logo: "python",
    lessons: 45,
    examples: 160,
    accent: "#2c88d9",
    buttonText: "#ffffff",
    summary: "Learn Python syntax, data structures, functions, files, OOP, and automation.",
    preview: ["Syntax", "Lists", "OOP"],
    syllabus: [
      ["Python Basics", ["Install Python", "Syntax", "Variables", "Data types", "Input and output", "Operators"]],
      ["Control Flow", ["If else", "Loops", "Functions", "Lambda", "Scope", "Modules"]],
      ["Data Structures", ["Lists", "Tuples", "Sets", "Dictionaries", "List comprehension", "String methods"]],
      ["Beyond Basics", ["File handling", "Exceptions", "OOP", "PIP packages", "Automation script project"]]
    ]
  },
  {
    name: "C",
    logo: "c",
    lessons: 30,
    examples: 110,
    accent: "#6d39d8",
    buttonText: "#ffffff",
    summary: "Understand programming fundamentals, memory, pointers, and structured logic.",
    preview: ["Pointers", "Arrays", "Files"],
    syllabus: [
      ["C Basics", ["Compiler setup", "Syntax", "Variables", "Data types", "Input and output", "Operators"]],
      ["Logic", ["If else", "Switch", "For loop", "While loop", "Functions", "Recursion"]],
      ["Memory and Data", ["Arrays", "Strings", "Pointers", "Structures", "Unions", "Dynamic memory"]],
      ["Files and Practice", ["File handling", "Preprocessors", "Header files", "Mini calculator project"]]
    ]
  },
  {
    name: "C++",
    logo: "cpp",
    lessons: 40,
    examples: 140,
    accent: "#12b5b7",
    buttonText: "#ffffff",
    summary: "Move from C++ basics to OOP, STL, templates, and problem solving.",
    preview: ["OOP", "STL", "Templates"],
    syllabus: [
      ["C++ Basics", ["Setup", "Syntax", "Variables", "Data types", "Operators", "Input and output"]],
      ["Control and Functions", ["Conditions", "Loops", "Functions", "References", "Arrays", "Strings"]],
      ["Object Oriented", ["Classes", "Objects", "Constructors", "Inheritance", "Polymorphism", "Encapsulation"]],
      ["Advanced C++", ["STL vectors", "Maps", "Templates", "Exceptions", "Student record project"]]
    ]
  },
  {
    name: "Java",
    logo: "java",
    lessons: 40,
    examples: 150,
    accent: "#ff3f4f",
    buttonText: "#ffffff",
    summary: "Practice Java syntax, classes, OOP principles, collections, and exceptions.",
    preview: ["Classes", "OOP", "Collections"],
    syllabus: [
      ["Java Basics", ["JDK setup", "Syntax", "Variables", "Data types", "Operators", "Strings"]],
      ["Control Flow", ["If else", "Switch", "Loops", "Methods", "Arrays", "Packages"]],
      ["OOP", ["Classes", "Objects", "Constructors", "Inheritance", "Interfaces", "Polymorphism"]],
      ["Core Java", ["Collections", "Exceptions", "File handling", "Threads", "Bank app project"]]
    ]
  },
  {
    name: "SQL",
    logo: "sql",
    lessons: 30,
    examples: 100,
    accent: "#ee3c83",
    buttonText: "#ffffff",
    summary: "Query databases using tables, filters, joins, grouping, and database design.",
    preview: ["SELECT", "JOIN", "GROUP BY"],
    syllabus: [
      ["SQL Basics", ["Database intro", "Tables", "SELECT", "WHERE", "ORDER BY", "LIMIT"]],
      ["Working With Data", ["INSERT", "UPDATE", "DELETE", "NULL values", "Constraints", "Aliases"]],
      ["Queries", ["JOIN", "INNER JOIN", "LEFT JOIN", "GROUP BY", "HAVING", "Subqueries"]],
      ["Database Design", ["Keys", "Indexes", "Views", "Transactions", "Library database project"]]
    ]
  }
];

const grid = document.querySelector("#languageGrid");
const heroSearch = document.querySelector("#heroSearch");
const themeToggle = document.querySelector(".theme-toggle");
const startLearning = document.querySelector("#startLearning");

function getCourseText(course) {
  const syllabusText = course.syllabus
    .map(([module, topics]) => `${module} ${topics.join(" ")}`)
    .join(" ");

  return `${course.name} ${course.summary} ${course.preview.join(" ")} ${syllabusText}`.toLowerCase();
}

function renderCourses(filter = "") {
  const query = filter.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => getCourseText(course).includes(query));

  grid.innerHTML = visibleCourses
    .map((course, index) => {
      const preview = course.preview.map((topic) => `<li>${topic}</li>`).join("");
      const syllabus = course.syllabus
        .map(([module, topics]) => {
          const topicItems = topics.map((topic) => `<li>${topic}</li>`).join("");

          return `
            <li>
              <span class="module-title">${module}</span>
              <ul class="module-topics">${topicItems}</ul>
            </li>
          `;
        })
        .join("");

      return `
        <article
          class="course-card"
          style="--accent: ${course.accent}; --button-text: ${course.buttonText};"
          data-course-index="${index}"
        >
          <div class="course-top">
            <div class="course-icon">${logoTemplates[course.logo]}</div>
            <h3 class="course-name">${course.name}</h3>
            <p class="course-summary">${course.summary}</p>
          </div>

          <div class="course-meta" aria-label="${course.name} course information">
            <span><span class="mini-icon">L</span>${course.lessons} Lessons</span>
            <span><span class="mini-icon">C</span>${course.examples} Examples</span>
          </div>

          <ul class="topic-preview" aria-label="${course.name} quick topics">${preview}</ul>

          <button class="card-btn" type="button" aria-expanded="false">
            View ${course.name} Syllabus
          </button>

          <div class="syllabus">
            <h4>${course.name} Syllabus</h4>
            <ul class="module-list">${syllabus}</ul>
          </div>
        </article>
      `;
    })
    .join("");

  if (!visibleCourses.length) {
    grid.innerHTML = `<p class="course-summary">No tutorials found. Try HTML, CSS, JavaScript, Python, C, Java, or SQL.</p>`;
  }
}

function syncSearch(value) {
  heroSearch.value = value;
  renderCourses(value);
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".card-btn");

  if (!button) {
    return;
  }

  const card = button.closest(".course-card");
  const isOpen = card.classList.toggle("is-open");
  button.setAttribute("aria-expanded", String(isOpen));
  button.textContent = isOpen
    ? `Hide ${card.querySelector(".course-name").textContent} Syllabus`
    : `View ${card.querySelector(".course-name").textContent} Syllabus`;
});

heroSearch.addEventListener("input", (event) => syncSearch(event.target.value));

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

startLearning.addEventListener("click", () => {
  document.querySelector("#languages").scrollIntoView({ behavior: "smooth" });
});

renderCourses();
