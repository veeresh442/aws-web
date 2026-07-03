const courseTheory = {
  html: {
    definition: "HTML (HyperText Markup Language) describes the structure and meaning of web content. A browser reads its elements as a document tree and turns that tree into the page people see.",
    concepts: [
      ["Elements and document tree", "Elements such as headings, paragraphs, links, and images form a nested tree. Correct nesting keeps the document predictable."],
      ["Attributes", "Attributes add information to an element. Common examples are href for links, src and alt for images, and id or class for identification."],
      ["Semantic structure", "Tags such as header, nav, main, section, article, and footer explain the purpose of content to browsers and assistive technology."],
      ["Forms and validation", "Forms collect input through labels, inputs, selects, and buttons. Built-in attributes can require data and validate its basic format."]
    ],
    points: ["HTML structures content; CSS styles it.", "Use one clear h1 and a logical heading order.", "Every meaningful image needs useful alt text.", "Prefer semantic elements over generic div elements.", "Validate forms on both the browser and server."],
    code: [
      '<!DOCTYPE html>',
      '<html lang="en">',
      '  <head>',
      '    <meta charset="UTF-8">',
      '    <title>My First Page</title>',
      '  </head>',
      '  <body>',
      '    <main>',
      '      <h1>Welcome</h1>',
      '      <p>I am learning semantic HTML.</p>',
      '      <a href="projects.html">View projects</a>',
      '    </main>',
      '  </body>',
      '</html>'
    ].join("\n"),
    project: ["Personal portfolio page", "Build a semantic page with an introduction, skills list, project table, contact form, and accessible navigation."]
  },
  css: {
    definition: "CSS (Cascading Style Sheets) controls presentation. Rules select HTML elements and apply properties while the cascade decides which competing value wins.",
    concepts: [
      ["Selectors and cascade", "Selectors target elements. Specificity, source order, and importance decide which declaration is used when rules compete."],
      ["Box model", "Every element has content, padding, border, and margin. box-sizing: border-box makes declared dimensions easier to reason about."],
      ["Modern layout", "Flexbox arranges content along one dimension, while Grid controls rows and columns for two-dimensional layouts."],
      ["Responsive design", "Flexible sizing, media queries, and responsive images let a layout adapt to phones, tablets, and desktops."]
    ],
    points: ["Start with reusable classes.", "Use rem for scalable text and spacing.", "Prefer Flexbox or Grid for layout.", "Keep adequate color contrast.", "Use transitions only when they clarify a state change."],
    code: [
      ':root {',
      '  --accent: #2563eb;',
      '}',
      '',
      '.card {',
      '  display: grid;',
      '  gap: 1rem;',
      '  padding: 1.25rem;',
      '  border: 1px solid #dbe4f0;',
      '  border-radius: 8px;',
      '}',
      '',
      '@media (max-width: 600px) {',
      '  .card { padding: 1rem; }',
      '}'
    ].join("\n"),
    project: ["Responsive profile card", "Create a profile component with a photo, contact links, Flexbox or Grid layout, hover states, and a mobile breakpoint."]
  },
  javascript: {
    definition: "JavaScript is the programming language of the browser. It stores data, makes decisions, responds to events, updates the DOM, and communicates with web services.",
    concepts: [
      ["Values and variables", "JavaScript includes strings, numbers, booleans, objects, arrays, null, and undefined. const and let create block-scoped variables."],
      ["Functions and scope", "Functions package reusable behavior. Scope controls where a variable can be read, while closures preserve access to outer values."],
      ["DOM and events", "The DOM represents the document as objects. Event listeners respond to clicks, input, keyboard actions, and browser events."],
      ["Asynchronous code", "Promises and async/await handle work that finishes later, including network requests, timers, and file operations."]
    ],
    points: ["Prefer const unless reassignment is needed.", "Use strict equality with ===.", "Keep functions small and focused.", "Handle rejected promises with try/catch.", "Never insert untrusted text as raw HTML."],
    code: [
      'const button = document.querySelector("#countButton");',
      'const output = document.querySelector("#count");',
      'let count = 0;',
      '',
      'button.addEventListener("click", () => {',
      '  count += 1;',
      '  output.textContent = count;',
      '});'
    ].join("\n"),
    project: ["Quiz application", "Build a multiple-choice quiz that tracks the current question, checks answers, shows a score, and saves the best result in localStorage."]
  },
  python: {
    definition: "Python is a readable, high-level programming language used for automation, web development, data work, testing, and artificial intelligence. Indentation defines its code blocks.",
    concepts: [
      ["Types and collections", "Python provides numbers, strings, booleans, lists, tuples, sets, and dictionaries. Each collection serves a different data-access pattern."],
      ["Control flow", "if statements choose a path, while for and while loops repeat work. Comprehensions create collections concisely."],
      ["Functions and modules", "Functions accept arguments and return values. Modules divide programs into reusable files and packages."],
      ["Objects and exceptions", "Classes combine data with behavior. Exceptions separate error handling from the normal path through a program."]
    ],
    points: ["Indent consistently with four spaces.", "Use meaningful snake_case names.", "Iterate directly over collections.", "Open files with a with statement.", "Catch specific exceptions instead of every error."],
    code: [
      'def average(scores):',
      '    if not scores:',
      '        return 0',
      '    return sum(scores) / len(scores)',
      '',
      'student = {"name": "Veeresh", "scores": [82, 91, 88]}',
      'result = average(student["scores"])',
      "print(f\"{student['name']}: {result:.1f}\")"
    ].join("\n"),
    project: ["Expense tracker", "Create a command-line program that adds expenses, groups them by category, stores them in a file, and prints a monthly total."]
  },
  c: {
    definition: "C is a compiled procedural language that gives programmers direct control over memory. Its small core makes it valuable for operating systems, embedded devices, and performance-sensitive software.",
    concepts: [
      ["Types and operators", "Variables have explicit types such as int, char, float, and double. Operators perform arithmetic, comparison, logical, and bitwise work."],
      ["Functions and control flow", "Functions organize behavior, while conditions and loops control execution. Function declarations describe parameters and return types."],
      ["Arrays and pointers", "An array stores adjacent values. A pointer stores a memory address and can be used to access arrays, structures, and dynamically allocated memory."],
      ["Structures and files", "Structures group related fields into one type. The standard file API reads and writes persistent data through FILE pointers."]
    ],
    points: ["Initialize variables before use.", "Check array bounds manually.", "Validate pointer values before dereferencing.", "Match every allocation with free.", "Check function return values for errors."],
    code: [
      '#include <stdio.h>',
      '',
      'int sum(const int values[], int length) {',
      '    int total = 0;',
      '    for (int i = 0; i < length; i++) {',
      '        total += values[i];',
      '    }',
      '    return total;',
      '}',
      '',
      'int main(void) {',
      '    int values[] = {4, 8, 15, 16};',
      '    printf("Total: %d\\n", sum(values, 4));',
      '    return 0;',
      '}'
    ].join("\n"),
    project: ["Student record manager", "Build a menu-driven program that stores student structures, calculates averages, searches by ID, and saves records to a file."]
  },
  cpp: {
    definition: "C++ is a compiled, multi-paradigm language. It combines low-level control with classes, generic programming, and a powerful standard library.",
    concepts: [
      ["References and value semantics", "Values can be copied, moved, or passed by reference. const references avoid unnecessary copies while preventing modification."],
      ["Classes and objects", "Classes define state and behavior. Constructors establish valid objects, and access control protects internal implementation."],
      ["Polymorphism", "Inheritance and virtual functions allow code to work through a common interface while objects provide specialized behavior."],
      ["STL and RAII", "Containers, algorithms, and iterators provide reusable tools. RAII ties resource lifetime to object lifetime for safer cleanup."]
    ],
    points: ["Prefer standard-library containers.", "Use const wherever intent permits.", "Avoid owning raw pointers.", "Let objects manage resource lifetimes.", "Compile with warnings enabled."],
    code: [
      '#include <algorithm>',
      '#include <iostream>',
      '#include <vector>',
      '',
      'int main() {',
      '    std::vector<int> values{7, 2, 9, 4};',
      '    std::sort(values.begin(), values.end());',
      '',
      '    for (const int value : values) {',
      '        std::cout << value << " ";',
      '    }',
      '}'
    ].join("\n"),
    project: ["Library catalog", "Model books and members with classes, store them in STL containers, support search and checkout, and persist the catalog to a file."]
  },
  java: {
    definition: "Java is a strongly typed, object-oriented language compiled to bytecode that runs on the Java Virtual Machine. Its standard library supports applications from backend services to Android systems.",
    concepts: [
      ["Classes and objects", "A class defines fields, constructors, and methods. Objects are instances whose state should remain valid through controlled access."],
      ["Inheritance and interfaces", "Inheritance reuses implementation, while interfaces define capabilities that unrelated classes can share."],
      ["Collections and generics", "List, Set, and Map organize data. Generics provide compile-time type safety without manual casting."],
      ["Exceptions and threads", "Exceptions communicate failures through the call stack. Threads and executors run tasks concurrently and require careful shared-state handling."]
    ],
    points: ["Use descriptive camelCase names.", "Keep fields private.", "Program to interfaces where practical.", "Use try-with-resources for closeable objects.", "Override equals and hashCode together."],
    code: [
      'import java.util.List;',
      '',
      'public class Main {',
      '    public static void main(String[] args) {',
      '        List<Integer> scores = List.of(82, 91, 88);',
      '        double average = scores.stream()',
      '            .mapToInt(Integer::intValue)',
      '            .average()',
      '            .orElse(0);',
      '',
      '        System.out.printf("Average: %.1f%n", average);',
      '    }',
      '}'
    ].join("\n"),
    project: ["Bank account console app", "Create account classes with deposit and withdrawal rules, transaction history, exception handling, and a menu-driven interface."]
  },
  sql: {
    definition: "SQL (Structured Query Language) is a declarative language for relational databases. You describe the result you need, and the database chooses how to retrieve or modify the data.",
    concepts: [
      ["SELECT and filtering", "SELECT chooses columns, FROM chooses a source, and WHERE filters rows. ORDER BY sorts results and LIMIT restricts their count."],
      ["Joins", "Joins combine related tables using matching keys. INNER JOIN keeps matches, while LEFT JOIN also preserves unmatched rows from the left table."],
      ["Aggregation", "COUNT, SUM, AVG, MIN, and MAX summarize rows. GROUP BY creates groups and HAVING filters those grouped results."],
      ["Schema and transactions", "Primary and foreign keys preserve relationships. Transactions group changes so they either complete together or roll back together."]
    ],
    points: ["Name columns explicitly in production queries.", "Use parameters for user-provided values.", "Index columns used often for joins and filtering.", "Use constraints to protect data quality.", "Inspect query plans before guessing about performance."],
    code: [
      'SELECT',
      '    department.name,',
      '    COUNT(student.id) AS student_count,',
      '    AVG(student.score) AS average_score',
      'FROM department',
      'LEFT JOIN student',
      '    ON student.department_id = department.id',
      'GROUP BY department.id, department.name',
      'HAVING COUNT(student.id) > 0',
      'ORDER BY average_score DESC;'
    ].join("\n"),
    project: ["Library database", "Design normalized tables for books, members, and loans, add keys and constraints, then write queries for availability, overdue items, and popular books."]
  }
};

const coursePage = document.querySelector("#coursePage");
const courseThemeToggle = document.querySelector(".theme-toggle");
let currentCourse;
let currentTheory;
let lessons = [];
let activeLessonIndex = 0;

const courseThemes = {
  html: ["#e44d26", "#fff0eb", "#8f2b12"],
  css: ["#1572b6", "#e9f5ff", "#0d4d7d"],
  javascript: ["#d4b800", "#fff9cf", "#5f5200"],
  python: ["#087f5b", "#e7f8f2", "#075b43"],
  c: ["#6842c2", "#f0ebff", "#42278c"],
  cpp: ["#008f9c", "#e4f9fb", "#00626b"],
  java: ["#d73a49", "#fff0f1", "#8e2430"],
  sql: ["#d62e72", "#ffedf5", "#8b1848"]
};

const lessonKnowledge = [
  [/intro|database intro/i, "This lesson explains the purpose of the language, where it is used, and the basic vocabulary you need before writing code."],
  [/setup|install|compiler|jdk|editors/i, "A correct development setup turns source code into a program you can run and test. Learn the toolchain before moving to syntax."],
  [/syntax/i, "Syntax is the set of rules that makes code valid. Pay attention to punctuation, keyword spelling, nesting, and case sensitivity."],
  [/variable|data type/i, "Variables give names to values, while data types describe what those values represent and which operations are valid."],
  [/operator/i, "Operators combine or compare values. Their precedence controls evaluation order, so use parentheses when the intention is not obvious."],
  [/string/i, "Strings store text as a sequence of characters. Common operations include joining, searching, slicing, replacing, and formatting."],
  [/array|list|tuple|set|vector/i, "Collections store multiple values. Choose one based on ordering, uniqueness, resizing, and the type of access your program needs."],
  [/dictionary|map/i, "Key-value collections retrieve a value through a unique key and are useful for records, lookups, counters, and grouped data."],
  [/if|condition|switch|match/i, "Conditional statements choose which block runs based on a boolean expression, allowing a program to make decisions."],
  [/loop|while|for/i, "Loops repeat a block of code. Always define the changing value and stopping condition clearly to avoid infinite loops."],
  [/function|method|lambda|recursion/i, "Functions package reusable behavior behind a name. Good functions have clear inputs, one focused responsibility, and a useful result."],
  [/class|object|constructor|oop|inheritance|interface|polymorphism|encapsulation/i, "Object-oriented programming models state and behavior together. Its main tools help protect data and reuse well-defined behavior."],
  [/pointer|reference|dynamic memory/i, "Memory-related features let code work with addresses and object lifetimes directly. Ownership and valid lifetime are essential for safety."],
  [/exception|error/i, "Error handling separates normal program flow from failures and gives callers a predictable way to recover or report a problem."],
  [/file/i, "File handling makes data persistent. Open the resource safely, check for errors, process the data, and always close it correctly."],
  [/element|heading|paragraph|block|semantic/i, "HTML elements describe the meaning and structure of content. Correct nesting creates a clear document outline for browsers and users."],
  [/link|image|audio|video|media/i, "Web media and links connect documents and enrich content. Use valid paths and provide accessible alternative information."],
  [/form|input|label|validation/i, "Forms collect user data. Every control needs a clear label, an appropriate input type, and validation on both client and server."],
  [/selector|specificity/i, "Selectors target elements for styling. The cascade uses specificity and source order to resolve declarations that compete."],
  [/box model|display|position|overflow|z-index/i, "Layout begins with the box model and normal document flow. Positioning and stacking should be added only when the design requires them."],
  [/flexbox|grid/i, "Modern CSS layout tools arrange items with explicit alignment and spacing rules, making responsive interfaces easier to maintain."],
  [/responsive|media quer/i, "Responsive design adapts content to the available space using flexible dimensions, breakpoints, and readable constraints."],
  [/dom|event/i, "The DOM exposes page elements as JavaScript objects, and events let your code respond to user and browser actions."],
  [/async|fetch|json/i, "Asynchronous operations finish later without freezing the page. Promises and async/await keep this flow readable and testable."],
  [/select|where|order by|limit/i, "A query chooses columns and rows from a table. Filtering and sorting should express exactly which records the result needs."],
  [/join/i, "Joins combine related tables through matching keys. The join type determines whether unmatched rows remain in the result."],
  [/group by|having|subquer/i, "Aggregation summarizes rows into groups. HAVING filters groups after aggregation, while subqueries supply intermediate results."],
  [/key|index|constraint|transaction|view/i, "Database structure protects relationships and consistency. Keys, constraints, indexes, views, and transactions each solve a different data problem."]
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderConcepts(concepts) {
  return concepts.map(function (concept) {
    return '<article class="concept-card"><h3>' + concept[0] + '</h3><p>' + concept[1] + '</p></article>';
  }).join("");
}

function renderRoadmap(syllabus) {
  return syllabus.map(function (module, index) {
    const topics = module[1].map(function (topic) {
      return "<li>" + topic + "</li>";
    }).join("");
    return '<article class="roadmap-module"><h3>' + (index + 1) + ". " + module[0] + '</h3><ol>' + topics + "</ol></article>";
  }).join("");
}

function getLessonExplanation(topic) {
  const entry = lessonKnowledge.find(function (item) {
    return item[0].test(topic);
  });
  return entry ? entry[1] : topic + " is an important part of " + currentCourse.name + ". Learn its purpose, syntax, common use cases, and typical mistakes before moving to the next lesson.";
}

function buildLessons(course) {
  const result = [{ title: "HOME", module: "Overview" }];
  course.syllabus.forEach(function (module) {
    module[1].forEach(function (topic) {
      result.push({ title: topic, module: module[0] });
    });
  });
  return result;
}

function renderSidebar() {
  let lastModule = "";
  return lessons.map(function (lesson, index) {
    let heading = "";
    if (lesson.module !== lastModule) {
      lastModule = lesson.module;
      heading = '<p class="sidebar-module">' + lesson.module + "</p>";
    }
    return heading + '<button class="lesson-link' + (index === activeLessonIndex ? " active" : "") + '" type="button" data-lesson-index="' + index + '">' + currentCourse.name + " " + lesson.title + "</button>";
  }).join("");
}

function renderQuickList() {
  return currentTheory.points.map(function (point) {
    return "<li>" + point + "</li>";
  }).join("");
}

function renderHomeLesson() {
  return '<section class="lesson-welcome">' +
      '<div class="welcome-copy"><div class="welcome-title"><span class="welcome-logo">' + window.logoTemplates[currentCourse.logo] + '</span><h2>Learn ' + currentCourse.name + '</h2></div><p>' + currentTheory.definition + '</p><p>' + currentCourse.name + ' is taught here as short theory notes followed by practical examples and a project.</p></div>' +
      '<div class="welcome-reference"><p class="panel-kicker">Quick reference</p><h2>Remember these</h2><ul class="quick-list">' + renderQuickList() + "</ul></div>" +
    "</section>" +
    '<section class="reader-section"><p class="panel-kicker">Foundation</p><h2>Core concepts</h2><div class="concept-grid">' + renderConcepts(currentTheory.concepts) + "</div></section>" +
    '<section class="reader-section"><p class="panel-kicker">Learning path</p><h2>Course roadmap</h2><div class="roadmap-grid">' + renderRoadmap(currentCourse.syllabus) + "</div></section>" +
    '<section class="reader-section"><p class="panel-kicker">Try it yourself</p><h2>Starter code</h2><pre class="code-example"><code>' + escapeHtml(currentTheory.code) + "</code></pre></section>" +
    '<section class="reader-section project-panel"><div class="project-number">01</div><div class="project-copy"><p class="panel-kicker">Practice project</p><h3>' + currentTheory.project[0] + "</h3><p>" + currentTheory.project[1] + "</p></div></section>";
}

function renderTopicLesson(lesson) {
  const explanation = getLessonExplanation(lesson.title);
  return '<section class="topic-overview">' +
      '<p class="panel-kicker">' + lesson.module + '</p><h2>What is ' + lesson.title + "?</h2><p>" + explanation + "</p>" +
      '<div class="theory-callout"><strong>Key idea</strong><p>Understand what ' + lesson.title + " does, when to use it, and how it connects to the surrounding " + lesson.module.toLowerCase() + " topics.</p></div>" +
    "</section>" +
    '<section class="reader-section"><p class="panel-kicker">Study notes</p><h2>What you should learn</h2><div class="lesson-goals">' +
      '<article><span>1</span><h3>Meaning</h3><p>Learn the purpose and vocabulary of ' + lesson.title + ".</p></article>" +
      '<article><span>2</span><h3>Syntax</h3><p>Recognize the correct structure and the most common mistakes.</p></article>' +
      '<article><span>3</span><h3>Practice</h3><p>Change a small example and explain the result in your own words.</p></article>' +
    "</div></section>" +
    '<section class="reader-section"><p class="panel-kicker">Example</p><h2>' + currentCourse.name + " practice code</h2><p>Use this starter example as a base. Modify it to include " + lesson.title + ' as you work through the lesson.</p><pre class="code-example"><code>' + escapeHtml(currentTheory.code) + "</code></pre></section>";
}

function renderLesson(index) {
  activeLessonIndex = Math.max(0, Math.min(index, lessons.length - 1));
  const lesson = lessons[activeLessonIndex];
  const previousDisabled = activeLessonIndex === 0 ? " disabled" : "";
  const nextDisabled = activeLessonIndex === lessons.length - 1 ? " disabled" : "";
  const lessonTitle = activeLessonIndex === 0 ? currentCourse.name + " Tutorial" : currentCourse.name + " " + lesson.title;

  document.querySelector("#lessonSidebar").innerHTML = renderSidebar();
  document.querySelector("#lessonContent").innerHTML =
    '<div class="reader-heading"><button class="lesson-menu-toggle" id="lessonMenuToggle" type="button" aria-expanded="false">Lessons</button><p class="reader-eyebrow">' + lesson.module + '</p><h1>' + lessonTitle + '</h1></div>' +
    '<div class="lesson-navigation"><button type="button" data-direction="-1"' + previousDisabled + '>&lt; Previous</button><span>Lesson ' + (activeLessonIndex + 1) + " of " + lessons.length + '</span><button type="button" data-direction="1"' + nextDisabled + '>Next &gt;</button></div>' +
    '<div class="lesson-surface">' + (activeLessonIndex === 0 ? renderHomeLesson() : renderTopicLesson(lesson)) + "</div>" +
    '<div class="lesson-navigation lesson-navigation-bottom"><button type="button" data-direction="-1"' + previousDisabled + '>&lt; Previous</button><a href="index.html#languages">All courses</a><button type="button" data-direction="1"' + nextDisabled + '>Next &gt;</button></div>';

  window.location.hash = "lesson-" + activeLessonIndex;
  document.querySelector("#lessonContent").scrollTop = 0;
}

function renderCourse() {
  const slug = new URLSearchParams(window.location.search).get("course") || "html";
  currentCourse = window.courseCatalog.find(function (item) {
    return item.slug === slug;
  });
  currentTheory = courseTheory[slug];

  if (!currentCourse || !currentTheory) {
    coursePage.innerHTML = '<section class="not-found glass-panel"><h1>Course not found</h1><p>Choose a language from the CodeVerse Academy home page.</p><a class="back-link" href="index.html#languages">View all courses</a></section>';
    return;
  }

  const theme = courseThemes[slug];
  document.title = currentCourse.name + " Tutorial | CodeVerse Academy";
  document.body.classList.add("theme-" + slug);
  document.body.style.setProperty("--course-accent", theme[0]);
  document.body.style.setProperty("--course-soft", theme[1]);
  document.body.style.setProperty("--course-deep", theme[2]);
  document.body.style.setProperty("--course-button-text", currentCourse.buttonText);
  lessons = buildLessons(currentCourse);
  activeLessonIndex = Number(window.location.hash.replace("#lesson-", "")) || 0;

  coursePage.innerHTML =
    '<div class="tutorial-layout">' +
      '<aside class="tutorial-sidebar glass-panel" id="tutorialSidebar"><div class="sidebar-heading"><span class="sidebar-logo">' + window.logoTemplates[currentCourse.logo] + '</span><div><small>CodeVerse notes</small><h2>' + currentCourse.name + ' Tutorial</h2></div></div><nav id="lessonSidebar" aria-label="' + currentCourse.name + ' tutorial lessons"></nav></aside>' +
      '<article class="tutorial-reader glass-panel" id="lessonContent"></article>' +
    "</div>";

  renderLesson(activeLessonIndex);

  coursePage.addEventListener("click", function (event) {
    const lessonButton = event.target.closest("[data-lesson-index]");
    const directionButton = event.target.closest("[data-direction]");
    const menuButton = event.target.closest("#lessonMenuToggle");

    if (lessonButton) {
      renderLesson(Number(lessonButton.dataset.lessonIndex));
      document.querySelector("#tutorialSidebar").classList.remove("is-open");
    } else if (directionButton && !directionButton.disabled) {
      renderLesson(activeLessonIndex + Number(directionButton.dataset.direction));
    } else if (menuButton) {
      const sidebar = document.querySelector("#tutorialSidebar");
      const isOpen = sidebar.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    }
  });
}

courseThemeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

renderCourse();
