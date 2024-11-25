; (function () {

    "use strict";

    var df = new Date("2021-07-15");
    var dt = new Date();
    var startMonth = df.getFullYear() * 12 + df.getMonth();  
    var endMonth = dt.getFullYear() * 12 + dt.getMonth();
    var monthInterval = (endMonth - startMonth);

    var years = Math.floor (monthInterval / 12);
    var months = monthInterval % 12;
    var experience_year = years + (months ? "+" : "");

    const config = {
        name: "Karthikeyan M",
        tags: ["Web App Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Photo Editor"],
        email: "mkk2001vnr@gmail.com",
        mobile: "+91 97919 34388",
        current_location: "Virudhunagar",
        preferred_location: "Chennai, Bangalore, Madurai, Coimbatore",
        address: "Virudhunagar, Tamilnadu, INDIA",
        address_link: "https://maps.app.goo.gl/SfCGCmK9ph428SrC8",
        gender: "Male",
        dob: "15/07/2001",
        experience: experience_year + " Years",
        languages: "Tamil, English",
        linkedin: "https://www.linkedin.com/in/karthikeyan-m-00a19423b",
        facebook: "https://www.facebook.com/profile.php?id=100027787782898&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/m.k.k.2001",
        twitter: "https://twitter.com/m_k_k_2001",
        cv: "assets/Karthikeyan_M-CV.pdf",
        projects: [
            {
                name: "Organization Project",
                company: "JCI",
                content: "Developed a comprehensive Organization Project using Laravel and Vue.js, facilitating user management, position upgrades, seamless payment gateways, and event creation for a feature-rich and organized digital ecosystem."
            },
            {
                name: "Stock & Order Management",
                company: "Tara Cards",
                content: "Built a robust Stock Management system with CodeIgniter, empowering efficient product creation, streamlined invoicing processes, and user management functionalities for seamless control and organization of inventory operations."
            },
            {
                name: "E-commerce (B2B)",
                company: "Ebix Pro",
                content: "Developed a responsive Business to Business e-commerce platform using Laravel and vue.js, allowing Multi store register, Manage stores and users to browse products, add them to the cart, and complete the checkout process."
            },
            {
                name: "Social Media Application",
                company: "TPN",
                content: "Developed a dynamic Social Media platform using PHP, enabling users to seamlessly post updates, engage in live streaming sessions, and participate in real-time chats for a vibrant and interactive online community experience."
            },
            {
                name: "Stock Management",
                company: "Penna Cement",
                content: "Crafted an intuitive Order Management system using Angular and PHP, allowing users to register, seamlessly create and track orders for a streamlined and user-friendly experience in managing their transactions."
            },
            {
                name: "Job Seeker Portal",
                company: "Human Bridge",
                content: "Developed a dynamic Job Search Project with advanced features using Express and React, enabling user and company registrations, profile and skills updates with KYC approval, and efficient job creation for a streamlined and interactive employment platform."
            },
            {
                name: "Event Management",
                company: "Bukit",
                content: "Developed a Event Management system with php, allowing users to book and manage their events. Integrated real-time updates, and personalized user experiences for a smooth booking process."
            }
        ],
        interests: [
            {
                name: "Web App developing",
                img: "web-development.svg"
            },
            {
                name: "Photo & Videos Editing",
                img: "ps.svg"
            },
            {
                name: "Youtuber",
                img: "youtube1.svg"
            },
            {
                name: "PC OS & Software Installation",
                img: "software-installation.svg"
            }
        ],
        notExpertSkills: ["Angular", "CodeIgniter", "MongoDB", "Wordpress"],
        skills: {
            "programming-languages": ["HTML5", "CSS3", "JavaScript", "PHP", "JSON", "TypeScript"],
            "front-end": ["Vue.js", "Vuetify", "React.js", "Bootstrap", "Next.js", "jQuery", "Angular"],
            "back-end": ["Laravel", "Node.js", "Express.js", "CodeIgniter"],
            "database": ["MySQL", "PostgreSQL", "MongoDB"],
            "version-control": ["Git", "Bitbucket", "GitHub"],
            "tools": ["Ubuntu", "VScode", "Git", "Composer", "npm"],
            "other": ["Restful APIs", "AJAX", "OWASP", "Shopify", "Wordpress"],
        },
        experiences: [
            {
                role: "Software Engineer",
                company: "Constient Global Solutions",
                date: "Aug 2022 - current",
                content: "Developed e-commerce platforms, enhancing user experience and conversion rates. Integrated Shopify API for efficient product management and order processing. Collaborated on social media applications to boost user engagement. Followed Agile methodologies for timely project delivery and high quality."
            }, {
                role: "Software Developer",
                company: "Vaagai Tecknowledge",
                date: "Jun 2021 - Jul 2022",
                content: "Developed an Order Management System to enhance order processing and inventory tracking. Created a Members Portal for improved user engagement and personalized access. Collaborated with teams to gather requirements and align with business goals. Used modern frameworks to ensure scalable and maintainable applications."
            }, {
                role: "Printing & Computer Operator",
                company: "Xerox shop",
                date: "May 2019 - Jun 2021",
                content: "From May 2019 to Jun 2021, I had the privilege of working in a part-time job for a duration of three years. During my time there, I was involved in various responsibilities, including printing, computer operator, and software installation."
            }
        ],
        education: [
            {
                role: "Bachelors Degree",
                company: "VHNSN College (2018 - 2021)",
                content: "I pursued my college education at VHNSNC in 2021, specializing in Bachelor of Computer Science with English as the medium of instruction. I am proud to have achieved a commendable score of 72%, reflecting my dedication and hard work throughout my academic journey."
            }, {
                role: "HSC",
                company: "KVS Higher Secondary School (2016 - 2018)",
                content: "In 2018, I attended KVS HSS, where I studied in the Tamil medium and appeared for the HSC board exams. I am proud to have achieved a respectable score of 70.25%, reflecting my dedication and hard work throughout my academic journey."
            }
        ]
    }

    var fullHeight = function () {

        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
            $(".js-fullheight").css("height", $(window).height());
        });
    };

    var goToTop = function () {

        $(".js-gotop").on("click", function (event) {

            event.preventDefault();

            $("html, body").animate({
                scrollTop: $("html").offset().top
            }, 500, "easeInOutExpo");

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active");
            } else {
                $(".js-top").removeClass("active");
            }

        });

    };

    // type effect
    var typeEffect = function () {
        const typed = $(".typed")
        if (typed) {
            new Typed(".typed", {
                strings: config.tags,
                loop: true,
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 1000
            });
        }
    }

    // slider
    var fetchSlider = function () {

        config.projects.map((item, index) => {
            $("#project-content").append(
                `<div class="swiper-slide">
                    <div class="card">
                        <div class="card-body text-center">
                            <h4 class="card-title">${item.name}</h4>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${item.company}</h6>
                            <p class="card-caption"><i class="fa fa-quote-left"></i>
                            ${item.content}
                            <i class="fa fa-quote-right"></i></p>
                        </div>
                    </div>
                </div>`
            )
        })
        slider();
    }

    var slider = function () {
        new Swiper(".slider", {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                720: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });
    }

    // Loading page
    var loaderPage = function () {
        setTimeout(() => {
            $(".loader").fadeOut("slow");
            $("body").css("overflow", "hidden scroll");
        }, 500);
    };

    var fetchDatas = function () {
        $("#gmap").hide();
        $("#name").text(config.name);
        $("#email").text(config.email + " | ");
        $("#mobile").text(config.mobile + " | ");
        $("#current_location").text(config.current_location);
        $("#preferred_location").text(config.preferred_location);
        $("#languages").text(config.languages);
        $("#experience").text(config.experience);

        $("#call_email").attr("href", "mailTo:" + config.email);
        $("#call_mobile").attr("href", "tel:" + config.mobile);
        $("#whatsapp_mobile").attr("href", "https://wa.me/" + config.mobile.replaceAll(" ", "").replace("+", ""));

        $("#footer_location").text(config.address);
        $("#footer_location").attr("href", config.address_link);
        $("#footer_mobile").text(config.mobile);
        $("#footer_email").text(config.email);
        $("#footer_email").attr("href", "mailTo:" + config.email);
        $("#footer_mobile").attr("href", "tel:" + config.mobile);
        $(".navbar-social #linkedin").attr("href", config.linkedin);
        $(".navbar-social #facebook").attr("href", config.facebook);
        $(".navbar-social #instagram").attr("href", config.instagram);
        $(".navbar-social #twitter").attr("href", config.twitter);
        $(".navbar-social #cv-download").attr("href", config.cv);

        $(".social-icons #linkedin").attr("href", config.linkedin);
        $(".social-icons #facebook").attr("href", config.facebook);
        $(".social-icons #instagram").attr("href", config.instagram);
        $(".social-icons #twitter").attr("href", config.twitter);
        $(".social-icons #cv-download").attr("href", config.cv);

        // fetch interests
        config.interests.map((item, index) => {
            $("#interest-content").append(
                `<div class="col-lg-3 col-md-6 col-sm-12 col-12 py-3 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="${index * 200}">
                    <div class="card">
                        <div class="card-avatar">
                            <img src="assets/images/icons/${item.img}" class="img" alt="${item.name}">
                        </div>
                        <h5 class="card-caption">${item.name}</h5>
                    </div>
                </div>`
            )
        })

        // fetch 
        for (var key of Object.keys(config.skills)) {
            config.skills[key].forEach(v => {
                $(`#skills #${key}`).append(`<span>${config.notExpertSkills.includes(v) ? '<i class="fa fa-star-half-o" aria-hidden="true"></i>' : '<i class="fa fa-star" aria-hidden="true"></i>'}
                 ${v}</span>`);
            })
        }

        fetchSlider();
        resumeFetch();
    };

    var resumeFetch = function () {
        var print = "";
        var c = 0;
        if (config.experiences.length > 0) {
            print += `<li class="timeline-heading center" data-aos="fade-up">
                        <div>
                            <h3>Work Experience</h3>
                        </div>
                    </li>`;
            config.experiences.map((item, index) => {
                c++;
                var className = c % 2 == 0 ? "timeline-inverted" : "timeline-unverted";
                print += `            
            <li class="${className}" data-aos="fade-up">
                <div class="timeline-badge"><i class="fa fa-suitcase"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4 class="timeline-title">${item.role}</h4>
                        <span class="company">${item.company}</span>
                        <span class="time">${item.date}</span>
                    </div>
                    <div class="timeline-body">
                        <p>${item.content}</p>
                    </div>
                </div>
            </li>`;
            })
        }

        if (config.experiences.length == c) {
            if (config.education.length > 0) {
                print += `<br>
                        <li class="timeline-heading center" data-aos="fade-up">
                            <div>
                                <h3>Education</h3>
                            </div>
                        </li>`;

                config.education.map((item, index) => {
                    c++;
                    var className = c % 2 == 0 ? "timeline-inverted" : "timeline-unverted";
                    print += `<li class="${className}" data-aos="fade-up">
                            <div class="timeline-badge"><i class="fa fa-graduation-cap"></i></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">${item.role}</h4>
                                    <span class="company">${item.company}</span>
                                </div>
                                <div class="timeline-body">
                                    <p>${item.content}</p>
                                </div>
                            </div>
                        </li>`;
                })
            }
        }
        if (print && config.experiences.length + config.education.length == c) {
            print += `<li class="timeline-unverted">
                        <div class="timeline-badge" style="background-color: #e6e6e6;"></div>
                    </li>`;
            $("#resume-timeline").append(print)
        }
    }

    var menuActive = function () {

        var triggerMenu = function () {
            var navbar = $("#navbar");
            var about = $("#about");
            var mobile_navbar = $(".mobile-nav-bar");
            var hamMenuIcon = $(".mobile-nav-bar i");

            var sticky = about.offset().top;
            var w = window.innerWidth;

            $("body").css("overflow-y", "auto");
            mobile_navbar.removeClass("active");
            hamMenuIcon.addClass("fa-bars");
            hamMenuIcon.removeClass("fa-times");
            navbar.removeClass("active");

            if (window.pageYOffset >= sticky) {
                if (w >= 600) {
                    navbar.addClass("flipInX");
                    navbar.addClass("sticky");
                    navbar.css("display", "block");
                } else {
                    navbar.removeClass("sticky");
                    navbar.removeClass("flipInX");
                    mobile_navbar.addClass("active")
                    navbar.css("display", "none");
                }
            } else {
                navbar.removeClass("sticky");
                navbar.removeClass("flipInX");
                if (w >= 600) {
                    navbar.css("display", "none");
                } else {
                    navbar.css("display", "flex");
                }
            }
        }

        triggerMenu();
        $(window).resize(() => { triggerMenu() });
        $(window).scroll(() => { triggerMenu() });

        var navbar = $("#navbar");
        var hamMenuIcon = $(".mobile-nav-bar i");

        $(".mobile-nav-bar").click(() => {

            navbar.css("display", "flex");
            if ($(".mobile-nav-bar i").hasClass("fa-bars")) {
                $("body").css("overflow-y", "hidden")
                hamMenuIcon.removeClass("fa-bars");
                hamMenuIcon.addClass("fa-times");
                $(".js-top").removeClass("active");
            } else {
                hamMenuIcon.addClass("fa-bars");
                hamMenuIcon.removeClass("fa-times");
                $("body").css("overflow-y", "auto")
            }
            navbar.toggleClass("active");

        });
        $("#navbar a").click(() => {
            navbar.removeClass("active");
            hamMenuIcon.addClass("fa-bars");
            hamMenuIcon.removeClass("fa-times");
            $("body").css("overflow-y", "auto")
        });
    }
    $(document).ready(function () {

        loaderPage();
        fullHeight();
        typeEffect();
        goToTop();
        fetchDatas();
        menuActive();

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
            mirror: true
        })

        $('.navbar-item a').on('click', function (e) {
            e.preventDefault();
            var offset = 50;
            var target = this.hash;
            if ($(this).data('offset') != undefined) offset = $(this).data('offset');
            $('html, body').stop().animate({
                'scrollTop': $(target).offset().top - offset
            }, 500, 'swing', function () {
                // window.location.hash = target;
            });
        });
    });


}());
