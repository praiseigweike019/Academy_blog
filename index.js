// ========================================
// 1. BLOG POSTS DATA
// ========================================

const posts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    category: "Web Development",
    date: "Nov 10, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",

    description: "Learn the foundations of modern web development.",
    body: "Learn the foundations of modern web development and discover how HTML, CSS and JavaScript work together to help you build beautiful and responsive websites.",
  },

  {
    id: 2,
    title: "Cybersecurity Tips for Beginners",
    category: "Technology",
    date: "Nov 08, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",

    description: "Explore practical ways to protect your devices.",
    body: "Explore practical ways to protect your devices, create stronger passwords, recognize suspicious links and develop safer habits while browsing the internet.",
  },

  {
    id: 3,
    title: "Small Habits That Improve Productivity",
    category: "Productivity",
    date: "Nov 05, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",

    description: "Discover simple habits that help you manage your time.",
    body: "A few intentional daily habits can help you manage your time, stay focused on important tasks and make steady progress towards your personal goals.",
  },

  {
    id: 4,
    title: "A Beginner's Guide to JavaScript",
    category: "JavaScript",
    date: "Oct 28, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",

    description: "Understand the fundamentals of JavaScript programming.",
    body: "Understand variables, functions, conditions and events through simple examples that make JavaScript easier to learn, practice and use in real projects.",
  },

  {
    id: 5,
    title: "Designing Better User Experiences",
    category: "Design",
    date: "Oct 24, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85",

    description: "Good user experience starts with clarity and consistency.",
    body: "Good user experience starts with clarity, consistency and simplicity. Learn how small design decisions can make websites easier and more enjoyable to use.",
  },

  {
    id: 6,
    title: "Why Every Developer Should Learn Git",
    category: "Development",
    date: "Oct 20, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",

    description: "Learn how Git helps developers manage their projects.",
    body: "Git is an important tool for tracking changes, managing code versions and collaborating with other developers on software projects.",
  },

  {
    id: 7,
    title: "Building Your First Responsive Website",
    category: "Web Design",
    date: "Oct 15, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",

    description: "Learn how to make websites work on different screens.",
    body: "Responsive web design allows websites to adapt to different screen sizes, giving users a better experience on phones, tablets and desktop computers.",
  },

  {
    id: 8,
    title: "The Importance of Continuous Learning",
    category: "Personal Growth",
    date: "Oct 10, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",

    description: "Why developers should never stop learning.",
    body: "Technology continues to change, and continuous learning helps developers improve their skills, discover new opportunities and stay relevant in the industry.",
  },

  {
    id: 9,
    title: "Understanding HTML and CSS",
    category: "Web Development",
    date: "Oct 05, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=85",

    description: "Explore the building blocks of modern websites.",
    body: "HTML provides the structure of a webpage, while CSS controls its appearance, layout, colours and responsiveness.",
  },

  {
    id: 10,
    title: "How to Stay Consistent While Learning",
    category: "Productivity",
    date: "Oct 01, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85",

    description: "Simple strategies for maintaining your learning routine.",
    body: "Consistency is an important part of learning. Setting small goals, practicing regularly and tracking your progress can help you improve over time.",
  },

  {
    title: "Understanding Responsive Web Design",
    body: "Responsive layouts adapt to different screen sizes. Explore flexible grids, media queries and mobile-first thinking to create websites that work across devices.",
    date: "Oct 14, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85",
    tag: "CSS",
  },
  {
    title: "Useful Tools for Student Developers",
    body: "The right tools can simplify your workflow. Discover helpful resources for writing code, debugging projects, organising tasks and collaborating with others.",
    date: "Oct 10, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    tag: "Resources",
  },
  {
    title: "Why Every Developer Should Keep Learning",
    body: "Technology changes quickly, but curiosity and consistent practice help developers adapt, solve problems and continue improving throughout their careers.",
    date: "Oct 05, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    tag: "Career",
  },
  {
    title: "Planning Your First Portfolio Website",
    body: "A thoughtful portfolio explains who you are, what you can build and how people can contact you. Start small and improve it as your skills grow.",
    date: "Sep 30, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=85",
    tag: "Portfolio",
  },
  {
    title: "HTML Elements You Should Know",
    body: "Semantic HTML gives structure and meaning to web content. Learn the common elements that make pages accessible, organised and easier to maintain.",
    date: "Sep 25, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=85",
    tag: "HTML",
  },
  {
    title: "Making Time for Personal Projects",
    body: "Personal projects turn ideas into practical experience. Break large goals into manageable steps and make room for experimentation, mistakes and improvement.",
    date: "Sep 20, 2026",
    author: "Joseph Igweike",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    tag: "Growth",
  },
];

/* ========================================
   2. SELECT HTML ELEMENTS
======================================== */

// Blog posts container
const postsGrid = document.getElementById("postsGrid");

// Pagination container
const pagination = document.getElementById("pagination");

// Mobile menu button
const menuToggle = document.getElementById("menuToggle");

// Navigation menu
const mainNav = document.getElementById("mainNav");

// Posts section
const postsSection = document.getElementById("postsSection");

// Search input
const searchInput = document.getElementById("searchInput");

// Search panel
const searchPanel = document.getElementById("searchPanel");

// Search toggle button (if present in your HTML)
const searchToggle = document.getElementById("searchToggle");

/* ========================================
   3. PAGINATION SETTINGS
======================================== */

// Current page being displayed
let currentPage = 1;

// Number of posts displayed per page
const postsPerPage = 6;

/* ========================================
   4. SCROLL REVEAL ANIMATION
======================================== */

// Check if the browser supports IntersectionObserver
const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              // Make the element visible
              entry.target.classList.add("is-visible");

              // Stop observing after the animation
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -30px 0px",
        },
      )
    : null;

// Observe elements that should animate
function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal:not(.is-visible)");

  revealElements.forEach(function (element) {
    if (revealObserver) {
      revealObserver.observe(element);
    } else {
      // Fallback for older browsers
      element.classList.add("is-visible");
    }
  });
}

/* ========================================
   5. DISPLAY BLOG POSTS
======================================== */

function displayPosts(postsToDisplay) {
  // Clear previously displayed posts
  postsGrid.innerHTML = "";

  // Check if there are no posts
  if (postsToDisplay.length === 0) {
    postsGrid.innerHTML = `
      <p class="empty-state">No blog posts available.</p>
    `;

    return;
  }

  // Loop through the selected posts
  postsToDisplay.forEach(function (post) {
    // Get the first 20 words of the post body
    const shortBody = (post.body || "")
      .trim()
      .split(/\s+/)
      .slice(0, 20)
      .join(" ");

    // Support both category and tag in the post data
    const postCategory = post.category || post.tag || "General";

    // Create the blog card
    const postCard = document.createElement("article");

    postCard.className = "post-card reveal";

    // Add the card content
    postCard.innerHTML = `
      <a href="#" class="post-image" data-id="${post.id}">

        <img src="${post.image || ""}" alt="${post.title || "Blog post"}" loading="lazy">

        <span class="post-tag">${postCategory}</span>

      </a>

      <div class="post-content">

        <div class="post-meta">
          <span>${post.date || ""}</span>
          <i></i>
          <span>By ${post.author || "Unknown author"}</span>
        </div>

        <h2>${post.title || "Untitled post"}</h2>

        <p class="post-description">
          ${post.description || ""}
        </p>

        <p class="post-excerpt">
          ${shortBody}${shortBody ? "..." : ""}
        </p>

        <a href="#" class="read-link" data-id="${post.id}">
          Read article <span>↗</span>
        </a>

      </div>
    `;

    // Add the card to the page
    postsGrid.appendChild(postCard);
  });

  // Observe the newly created cards
  observeRevealElements();
}

/* ========================================
   6. DISPLAY PAGINATION
======================================== */

function displayPagination(totalPosts) {
  // Clear old pagination buttons
  pagination.innerHTML = "";

  // Calculate the number of pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Do not display pagination if there are no posts
  if (totalPages === 0) {
    return;
  }

  // PREVIOUS BUTTON
  const previousButton = document.createElement("button");

  previousButton.type = "button";
  previousButton.className = "page-btn";
  previousButton.textContent = "← Previous";

  previousButton.disabled = currentPage === 1;

  previousButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;

      renderBlog(true);
    }
  });

  pagination.appendChild(previousButton);

  // NUMBERED BUTTONS
  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");

    pageButton.type = "button";
    pageButton.className = "page-btn";
    pageButton.textContent = page;

    // Highlight the current page
    if (currentPage === page) {
      pageButton.classList.add("active");

      pageButton.setAttribute("aria-current", "page");
    }

    pageButton.addEventListener("click", function () {
      currentPage = page;

      renderBlog(true);
    });

    pagination.appendChild(pageButton);
  }

  // NEXT BUTTON
  const nextButton = document.createElement("button");

  nextButton.type = "button";
  nextButton.className = "page-btn";
  nextButton.textContent = "Next →";

  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;

      renderBlog(true);
    }
  });

  pagination.appendChild(nextButton);
}

/* ========================================
   7. RENDER BLOG
======================================== */

// ========================================
// SEARCH BLOG POSTS
// ========================================

function getFilteredPosts() {

  // Get the search text
  const searchText = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  // Filter the blog posts
  return posts.filter(function (post) {

    const searchableContent = [
      post.title,
      post.category,
      post.tag,
      post.author,
      post.description,
      post.body
    ].join(" ").toLowerCase();

    return searchableContent.includes(searchText);

  });

}


// ========================================
// RENDER BLOG
// ========================================

function renderBlog(scrollToPosts = false) {

  // Get posts that match the search
  const filteredPosts = getFilteredPosts();

  // Calculate the starting and ending positions
  const startIndex = (currentPage - 1) * postsPerPage;

  const endIndex = startIndex + postsPerPage;

  // Select posts for the current page
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex);

  // Display the selected posts
  displayPosts(postsToDisplay);

  // Update pagination using filtered results
  displayPagination(filteredPosts.length);

  // Scroll to posts when changing pages
  if (scrollToPosts && postsSection) {

    postsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


// ========================================
// SEARCH INPUT EVENT
// ========================================

if (searchInput) {

  searchInput.addEventListener("input", function () {

    // Return to the first page when searching
    currentPage = 1;

    // Display matching posts
    renderBlog();

  });

}



/* ========================================
   8. MOBILE NAVIGATION DRAWER
======================================== */

// Create a background overlay for the mobile menu
const navOverlay = document.createElement("button");

navOverlay.type = "button";
navOverlay.className = "nav-overlay";
navOverlay.setAttribute("aria-label", "Close navigation menu");

document.body.appendChild(navOverlay);

// Open the mobile navigation
function openMobileMenu() {
  mainNav.classList.add("is-open");

  navOverlay.classList.add("is-active");

  document.body.classList.add("menu-open");

  menuToggle.setAttribute("aria-expanded", "true");

  menuToggle.setAttribute("aria-label", "Close menu");
}

// Close the mobile navigation
function closeMobileMenu() {
  mainNav.classList.remove("is-open");

  navOverlay.classList.remove("is-active");

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.setAttribute("aria-label", "Open menu");
}

// Toggle the menu when the button is clicked
menuToggle.addEventListener("click", function () {
  const menuIsOpen = mainNav.classList.contains("is-open");

  if (menuIsOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Close the menu when the overlay is clicked
navOverlay.addEventListener("click", closeMobileMenu);

// Close the menu when a navigation link is clicked
const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", closeMobileMenu);
});

// Close the menu when Escape is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});



/* ========================================
   9. INITIAL PAGE DISPLAY
======================================== */

// Display the first page when the website loads
renderBlog();
