/**
 * Portfolio Profile Application - Single Class Architecture
 *
 * A comprehensive portfolio management system with all functionality
 * encapsulated in a single class for simplicity and ease of understanding.
 *
 * Features:
 * - Experience calculation with overlapping period handling
 * - Portfolio data configuration and management
 * - Layout and viewport management
 * - Animation and scroll effects
 * - Theme switching with persistence
 * - DOM content rendering
 * - Navigation and smooth scrolling
 * - Application initialization and orchestration
 */

"use strict";

/**
 * Main Portfolio Application Class
 *
 * A unified class that handles all portfolio application functionality:
 * configuration, rendering, animations, navigation, and theme management.
 * Single Responsibility principle applied at a higher level - one class
 * handles all portfolio-related operations.
 */
class PortfolioApplication {
  // ========================================
  // CONSTRUCTOR & INITIALIZATION
  // ========================================

  /**
   * Constructor - Initialize all portfolio configuration and data
   */
  constructor() {
    // ===== PERSONAL INFORMATION =====
    this.name = "Karthikeyan M";
    this.email = "mkarthi.dev@gmail.com";
    this.mobile = "+91 97919 34388";
    this.currentLocation = "Chennai, India";
    this.address = "Virudhunagar, Tamil Nadu";
    this.languages = "Tamil, English";

    // ===== SOCIAL PROFILES =====
    this.linkedin = "https://www.linkedin.com/in/karthikeyan-developer-mkk";
    this.github = "https://github.com/mkk-karthi";
    this.cv = "assets/Karthikeyan-M-Resume.pdf";

    // ===== PROFESSIONAL TAGS =====
    this.tags = [
      "Web App Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Photo Editor",
    ];

    // ===== EXPERIENCE CALCULATION =====
    // Job history with employment periods
    this.jobs = [
      { start: "2021-07-15", end: "2022-07-15" },
      { start: "2022-08-01", end: "2024-10-30" },
      { start: "2025-02-10", end: "2025-07-07" },
      { start: "2025-09-02", end: null }, // Current job (null = no end date)
    ];

    // Calculate total years of experience
    this.experience = this.calculateExperienceYears(this.jobs);

    // ===== PROFESSIONAL DESCRIPTION =====
    this.description = `With ${this.experience}+ years of experience, I am a proficient Full Stack Developer specializing in front-end (Vue.js, React.js) and back-end (PHP, Laravel, Node.js) technologies. Skilled in MySQL and PostgreSQL, I excel in building dynamic web applications such as e-commerce sites, social media apps, members portal, and NPM Packages. Adept at troubleshooting and collaborating with teams for timely project completion. Passionate about crafting efficient, scalable solutions for optimal user experience, I am committed to continuous technical skill enhancement. I have also integrated OpenAI, Google Ads and Shopify APIs into various projects, enhancing functionality and optimizing user engagement.`;

    // ===== SEO META DATA =====
    this.metaData = {
      title: "Karthikeyan Portfolio",
      description: `Full Stack Developer | ${this.experience}+ Years | Laravel | MySQL | Vue.js | React.js | Node.js | Express.js`,
      keywords:
        "portfolio, profile, mkk, mkk hitz, mkk profile, karthikeyan, web Developer, Developer",
      author: "MKK",
    };

    // ===== SKILL EXPERTISE LEVELS =====
    // Skills listed here are shown with half-filled stars (partial expertise)
    this.notExpertSkills = ["Angular", "Next.js", "CodeIgniter", "MongoDB", "Wordpress"];

    // ===== TECHNICAL SKILLS =====
    this.skills = {
      programming_languages: ["HTML5", "CSS3", "JavaScript", "PHP", "Python", "TypeScript"],
      frameworks: ["Laravel", "Node.js", "Express.js", "Vue.js", "React.js"],
      libraries: ["Bootstrap", "Tailwind CSS", "jQuery", "Vuex", "Redux"],
      database: ["MySQL", "PostgreSQL"],
      tools: ["Git", "VScode", "Postman", "npm", "Composer", "Docker", "OWASP"],
      languages_known: ["Tamil", "English"],
    };

    // ===== WORK EXPERIENCE =====
    this.experiences = [
      {
        role: "Senior Software Engineer",
        company: "ISYS Technologies",
        date: "SEP 2025 - Current",
        content: "",
      },
      {
        role: "Senior Software Engineer",
        company: "Clarity TTS",
        date: "Feb 2025 - JUL 2025",
        content:
          "Developing B2B and B2C transport websites for booking flights, hotels, and transfers. Integrated third-party APIs for real-time flight and hotel availability. Built features using Laravel (backend), Vue.js (frontend), and Node.js (services). Improved performance and user experience across booking flows. Worked closely with UI/UX and QA teams to ensure smooth releases.",
      },
      {
        role: "Software Engineer",
        company: "Constient Global Solutions",
        date: "Aug 2022 - Oct 2024",
        content:
          "Developed e-commerce platforms, enhancing user experience and conversion rates. Integrated Shopify API for efficient product management and order processing. Collaborated on social media applications to boost user engagement. Followed Waterfall methodologies for timely project delivery and high quality.",
      },
      {
        role: "Software Developer",
        company: "Vaagai Tecknowledge",
        date: "Jun 2021 - Jul 2022",
        content:
          "Developed an Order Management System to enhance order processing and inventory tracking. Created a Members Portal for improved user engagement and personalized access. Collaborated with teams to gather requirements and align with business goals. Used modern frameworks to ensure scalable and maintainable applications.",
      },
      {
        role: "Printing & Computer Operator",
        company: "Xerox shop",
        date: "May 2019 - Jun 2021",
        content:
          "From May 2019 to Jun 2021, I had the privilege of working in a part-time job for a duration of three years. During my time there, I was involved in various responsibilities, including printing, computer operator, and software installation.",
      },
    ];

    // ===== EDUCATION =====
    this.education = [
      {
        role: "Bachelors Degree",
        company: "VHNSN College (2018 - 2021)",
        content:
          "I pursued my college education at VHNSNC in 2021, specializing in Bachelor of Computer Science with English as the medium of instruction. I am proud to have achieved a commendable score of 72%, reflecting my dedication and hard work throughout my academic journey.",
      },
      {
        role: "HSC",
        company: "KVS Higher Secondary School (2016 - 2018)",
        content:
          "In 2018, I attended KVS HSS, where I studied in the Tamil medium and appeared for the HSC board exams. I am proud to have achieved a respectable score of 70.25%, reflecting my dedication and hard work throughout my academic journey.",
      },
    ];

    // ===== FEATURED PROJECTS =====
    this.projects = [
      {
        name: "Create Express Project",
        company: "NPM",
        content:
          '"create-new-express-project" is a CLI tool that scaffolds a ready-to-go Express.js project, empowering developers to kick off backend APIs swiftly by generating boilerplate code, folder structure, and essential configuration with a single command.',
        link: "",
        github: "",
      },
      {
        name: "React Games",
        company: "Own Project",
        content:
          '"React Games" is a collection of small web games built using React. It helps developers learn front-end development, game logic, and user interaction. Each game is easy to play and made with reusable React components, making it useful for learning, practice, or adding games to other web projects.',
        link: "",
        github: "",
      },
      {
        name: "Organization Project",
        company: "JCI",
        content:
          "Developed a comprehensive Organization Project using Laravel and Vue.js, facilitating user management, position upgrades, seamless payment gateways, and event creation for a feature-rich and organized digital ecosystem.",
        link: "",
        github: "",
      },
      {
        name: "E-commerce (B2B)",
        company: "Ebix Pro",
        content:
          "Developed a responsive Business to Business e-commerce platform using Laravel and Vue.js, allowing Multi store register, Manage stores and users to browse products, add them to the cart, and complete the checkout process.",
        link: "",
        github: "",
      },
      {
        name: "Social Media Application",
        company: "TPN",
        content:
          "Developed a dynamic Social Media platform using PHP, enabling users to seamlessly post updates, engage in live streaming sessions, and participate in real-time chats for a vibrant and interactive online community experience.",
        link: "",
        github: "",
      },
    ];

    // ===== ACHIEVEMENTS =====
    this.achievements = [];
  }

  // ========================================
  // UTILITY METHODS - EXPERIENCE CALCULATION
  // ========================================

  /**
   * Calculate total years of experience from an array of job entries
   * Handles overlapping periods correctly by sorting chronologically
   * and summing non-overlapping durations
   *
   * @param {Array<Object>} jobs - Array of job objects with start/end dates
   * @param {string} jobs[].start - Job start date (ISO format)
   * @param {string} jobs[].end - Job end date (ISO format) or null for current job
   * @returns {number} Total years of experience
   */
  calculateExperienceYears(jobs) {
    const today = new Date();

    // Normalize all jobs to date arrays and sort chronologically
    const normalizedJobs = jobs
      .map((job) => [new Date(job.start), new Date(job.end || today)])
      .sort((a, b) => a[0] - b[0]);

    let total = 0;
    let end = null;

    for (const [start, jobEnd] of normalizedJobs) {
      if (!end || start > end) {
        // No overlap: add the full duration
        total += jobEnd - start;
      } else if (jobEnd > end) {
        // Partial overlap: add only the non-overlapping portion
        total += jobEnd - end;
      }
      // Update the end boundary
      end = !end || jobEnd > end ? jobEnd : end;
    }

    // Convert milliseconds to years
    return Math.floor(total / (1000 * 60 * 60 * 24 * 365.25));
  }

  // ========================================
  // LAYOUT METHODS
  // ========================================

  /**
   * Set full height for viewport-filling elements
   * Updates on window resize for responsive behavior
   */
  setFullHeight() {
    const updateHeight = () => {
      $(".js-fullheight").css("height", $(window).height());
    };

    updateHeight();
    $(window).resize(updateHeight);
  }

  /**
   * Initialize scroll-to-top button functionality
   * Shows button when user scrolls past 200px, hides otherwise
   */
  initScrollToTop() {
    // Click handler for scroll to top button
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 500, "easeInOutExpo");
      return false;
    });

    // Show/hide scroll to top button based on scroll position
    $(window).scroll(function () {
      if ($(window).scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  }

  // ========================================
  // ANIMATION METHODS
  // ========================================

  /**
   * Initialize typing effect for skill/tag animations
   * Uses the Typed.js library for character-by-character animation
   */
  initTypingEffect() {
    const $typed = $(".typed");
    if ($typed.length) {
      new Typed(".typed", {
        strings: this.tags,
        loop: true,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
      });
    }
  }

  /**
   * Initialize AOS (Animate On Scroll) library
   * Provides scroll-triggered animations for page elements
   */
  initScrollAnimations() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }

  /**
   * Initialize Bootstrap tooltips
   * Activates all elements with data-bs-toggle="tooltip"
   */
  initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipElements].forEach((el) => new bootstrap.Tooltip(el));
  }

  // ========================================
  // THEME METHODS
  // ========================================

  /**
   * Initialize theme switching functionality
   * Loads saved theme preference from localStorage
   * Persists user's theme choice for future visits
   */
  initThemeSwitch() {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (["dark", "light"].includes(savedTheme)) {
      $("body").attr("data-bs-theme", savedTheme);
    }

    // Handle theme switch button click
    document.getElementById("themeSwitch").addEventListener("click", () => {
      const currentMode = $("body").attr("data-bs-theme");
      const newMode = currentMode === "dark" ? "light" : "dark";

      $("body").attr("data-bs-theme", newMode);
      localStorage.setItem("theme", newMode);
    });
  }

  // ========================================
  // DOM RENDERING METHODS
  // ========================================

  /**
   * Populate profile information into the DOM
   * Sets name, description, contact info, and meta tags
   */
  renderProfileInfo() {
    $("#name").text(this.name);
    $("#description").text(this.description);
    $("#email").text(this.email);
    $("#mobile").text(this.mobile);
    $("#current_location").text(this.currentLocation);
    $("#languages").text(this.languages);
    $("#experience").text(this.experience);

    // Update meta tags for SEO
    this.updateMetaTags();

    // Set email and phone links
    $("#email").attr("href", `mailTo:${this.email}`);
    $("#mobile").attr("href", `tel:${this.mobile}`);

    // Update footer information
    this.updateFooterInfo();

    // Update all social media links
    this.updateSocialLinks();
  }

  /**
   * Update HTML meta tags for SEO optimization
   * Sets title, description, keywords, and Open Graph tags
   */
  updateMetaTags() {
    $("title").text(this.metaData.title);
    $("meta[name=description]").attr("content", this.metaData.description);
    $("meta[name=keywords]").attr("content", this.metaData.keywords);
    $("meta[name=author]").attr("content", this.metaData.author);

    // Open Graph tags for social sharing
    $("meta[property='og:title']").attr("content", this.metaData.title);
    $("meta[property='og:description']").attr("content", this.metaData.description);
    $("meta[property='og:site_name']").attr("content", this.metaData.title);
  }

  /**
   * Update footer section with contact information
   */
  updateFooterInfo() {
    $("#footer_location").text("Profile");
    $("#footer_mobile").text(this.mobile);
    $("#footer_email").text(this.email);
    $("#footer_email").attr("href", `mailTo:${this.email}`);
    $("#footer_mobile").attr("href", `tel:${this.mobile}`);
  }

  /**
   * Update all social media links in navigation and profile sections
   */
  updateSocialLinks() {
    // Navbar social links
    $(".navbar-social #linkedin").attr("href", this.linkedin);
    $(".navbar-social #github").attr("href", this.github);
    $(".navbar-social #cv-download").attr("href", this.cv);

    // Profile section social links
    $("#profile-content #linkedin").attr("href", this.linkedin);
    $("#profile-content #github").attr("href", this.github);
    $("#profile-content #cv-download").attr("href", this.cv);
  }

  /**
   * Render skills section with categorized skills and expertise indicators
   * Full stars indicate expert level, half stars indicate partial expertise
   */
  renderSkills() {
    const $skillsContent = $("#skills-content");

    for (const [key, skillArray] of Object.entries(this.skills)) {
      const skillName = key.replaceAll("_", " ");

      // Build skill tags
      let skillTags = skillArray
        .map((skill) => {
          const isExpert = !this.notExpertSkills.includes(skill);
          const starIcon = isExpert
            ? '<i class="bi bi-star-fill" aria-hidden="true"></i>'
            : '<i class="bi bi-star-half" aria-hidden="true"></i>';
          return `<span>${starIcon}${skill}</span>`;
        })
        .join("");

      // Create skill card
      const $skillCard = $(`
        <div class="col-12 col-md-4 py-3" data-aos="flip-left">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-capitalize">${skillName}</h5>
              <div class="card-tags" id="${key}">
                ${skillTags}
              </div>
            </div>
          </div>
        </div>
      `);

      $skillsContent.append($skillCard);
    }
  }

  /**
   * Render project slider with Swiper.js carousel
   * Displays projects with responsive breakpoints
   */
  renderProjects() {
    const $projectContent = $("#project-content");

    this.projects.forEach((project) => {
      const $projectSlide = $(`
        <div class="swiper-slide">
          <div class="card border-0">
            <div class="card-body text-center">
              <h5 class="card-title">${project.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${project.company}</h6>
              <p class="card-caption text-body-secondary">${project.content}</p>
            </div>
          </div>
        </div>
      `);
      $projectContent.append($projectSlide);
    });

    this.initSlider();
  }

  /**
   * Initialize Swiper.js slider with responsive breakpoints
   * Adapts slide count based on screen size
   */
  initSlider() {
    new Swiper(".slider", {
      speed: 600,
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      slidesPerView: "auto",
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        720: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 2, spaceBetween: 20 },
      },
    });
  }

  /**
   * Render experience and education timeline
   * Displays alternating timeline items with alternating left/right layout
   */
  renderTimeline() {
    const $timeline = $("#resume-timeline");
    let itemCount = 0;

    // ===== WORK EXPERIENCE SECTION =====
    if (this.experiences.length > 0) {
      const $expHeading = $(`
        <li class="timeline-heading center" data-aos="fade-up">
          <div><h3>Work Experience</h3></div>
        </li>
      `);
      $timeline.append($expHeading);

      this.experiences.forEach((experience) => {
        itemCount++;
        const className = itemCount % 2 === 0 ? "timeline-inverted" : "timeline-unverted";
        const $expItem = $(`
          <li class="${className}" data-aos="fade-up">
            <div class="timeline-badge"><i class="bi bi-suitcase-lg-fill"></i></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">${experience.role}</h4>
                <span class="company text-body-tertiary">${experience.company}</span>
                <span class="time">${experience.date}</span>
              </div>
              <div class="timeline-body"><p>${experience.content}</p></div>
            </div>
          </li>
        `);
        $timeline.append($expItem);
      });
    }

    // ===== EDUCATION SECTION =====
    if (this.education.length > 0) {
      const $eduHeading = $(`
        <li class="timeline-heading center" data-aos="fade-up">
          <div><h3>Education</h3></div>
        </li>
      `);
      $timeline.append($("<li></li>")).append($eduHeading);

      this.education.forEach((education) => {
        itemCount++;
        const className = itemCount % 2 === 0 ? "timeline-inverted" : "timeline-unverted";
        const $eduItem = $(`
          <li class="${className}" data-aos="fade-up">
            <div class="timeline-badge"><i class="bi bi-mortarboard-fill"></i></div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="timeline-title">${education.role}</h4>
                <span class="company text-body-tertiary">${education.company}</span>
              </div>
              <div class="timeline-body"><p>${education.content}</p></div>
            </div>
          </li>
        `);
        $timeline.append($eduItem);
      });

      // Add timeline end marker
      const $endMarker = $(`
        <li class="timeline-unverted">
          <div class="timeline-badge" style="background-color: #e6e6e6;"></div>
        </li>
      `);
      $timeline.append($endMarker);
    }
  }

  /**
   * Render all portfolio content sections
   * Central method to render complete portfolio
   */
  renderAll() {
    this.renderProfileInfo();
    this.renderSkills();
    this.renderProjects();
    this.renderTimeline();
  }

  // ========================================
  // NAVIGATION METHODS
  // ========================================

  /**
   * Initialize navigation click handlers
   * Implements smooth scrolling with offset support
   * Updates active navigation state based on current section
   */
  initTabNavigation() {
    $("#nav-bar a, #profile a[href='#contact']").on("click", (e) => {
      e.preventDefault();
      let offset = 50;
      const target = e.currentTarget.hash;

      // Update active navigation state
      $("#nav-bar .card a").each(function () {
        if (target === this.hash) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });

      // Allow custom offset via data attribute
      if ($(e.currentTarget).data("offset")) {
        offset = $(e.currentTarget).data("offset");
      }

      // Smooth scroll to target section
      $("html, body")
        .stop()
        .animate({ scrollTop: target ? $(target).offset().top - offset : 0 }, 500, "swing");
    });
  }

  // ========================================
  // APPLICATION INITIALIZATION
  // ========================================

  /**
   * Initialize all application features and components
   * Called when DOM is ready
   *
   * Initialization Flow:
   * 1. Layout initialization and viewport setup
   * 2. Animation and effects setup
   * 3. Theme management setup
   * 4. Content rendering
   * 5. Navigation initialization
   * 6. Final DOM adjustments
   */
  init() {
    $(document).ready(() => {
      // ===== LAYOUT INITIALIZATION =====
      this.setFullHeight();
      this.initScrollToTop();

      // ===== ANIMATION INITIALIZATION =====
      this.initTypingEffect();
      this.initScrollAnimations();
      this.initTooltips();

      // ===== THEME INITIALIZATION =====
      this.initThemeSwitch();

      // ===== CONTENT RENDERING =====
      this.renderAll();

      // ===== NAVIGATION INITIALIZATION =====
      this.initTabNavigation();

      // ===== FINAL ADJUSTMENTS =====
      // Set footer margin to account for fixed navbar height
      $("#contact").css("margin-bottom", $("#nav-bar").height());

      // Set current copyright year
      $("#rights-year").text(new Date().getFullYear());
    });

    // Handle page load animations
    this.handlePageLoad();
  }

  /**
   * Handle initial page load animations
   * Fades out loader after page content is ready
   */
  handlePageLoad() {
    $(window).on("load", () => {
      $(".loader").fadeOut("slow");
      setTimeout(() => {
        $(".loader").remove();
      }, 800);
    });
  }
}

// ===== APPLICATION ENTRY POINT =====
// Initialize and run the portfolio application
const app = new PortfolioApplication();
app.init();
