!function(){"use strict";var e=new Date("2021-07-15"),a=new Date,t=12*e.getFullYear()+e.getMonth(),i=12*a.getFullYear()+a.getMonth()-t;let n={name:"Karthikeyan M",tags:["Web App Developer","Full Stack Developer","Frontend Developer","Backend Developer","Photo Editor"],email:"mkk2001vnr@gmail.com",mobile:"+91 97919 34388",current_location:"Chennai",preferred_location:"Chennai, Bangalore, Virudhunagar, Madurai, Coimbatore",address:"Virudhunagar, Tamilnadu, INDIA",address_link:"https://maps.app.goo.gl/SfCGCmK9ph428SrC8",gender:"Male",dob:"15/07/2001",experience:Math.floor(i/12)+(i%12?"+":"")+" Years",languages:"Tamil, English",linkedin:"https://www.linkedin.com/in/karthikeyan-m-00a19423b",github:"https://github.com/mkk-karthi",instagram:"https://www.instagram.com/m.k.k.2001",facebook:"https://www.facebook.com/profile.php?id=100027787782898&mibextid=ZbWKwL",twitter:"https://twitter.com/m_k_k_2001",cv:"assets/Karthikeyan_M-CV.pdf",projects:[{name:"Organization Project",company:"JCI",content:"Developed a comprehensive Organization Project using Laravel and Vue.js, facilitating user management, position upgrades, seamless payment gateways, and event creation for a feature-rich and organized digital ecosystem."},{name:"Stock & Order Management",company:"Tara Cards",content:"Built a robust Stock Management system with CodeIgniter, empowering efficient product creation, streamlined invoicing processes, and user management functionalities for seamless control and organization of inventory operations."},{name:"E-commerce (B2B)",company:"Ebix Pro",content:"Developed a responsive Business to Business e-commerce platform using Laravel and vue.js, allowing Multi store register, Manage stores and users to browse products, add them to the cart, and complete the checkout process."},{name:"Social Media Application",company:"TPN",content:"Developed a dynamic Social Media platform using PHP, enabling users to seamlessly post updates, engage in live streaming sessions, and participate in real-time chats for a vibrant and interactive online community experience."},{name:"Job Seeker Portal",company:"Human Bridge",content:"Developed a dynamic Job Search Project with advanced features using Express and React, enabling user and company registrations, profile and skills updates with KYC approval, and efficient job creation for a streamlined and interactive employment platform."}],interests:[{name:"Web App developing",img:"web-development.svg"},{name:"Photo & Videos Editing",img:"ps.svg"},{name:"Youtuber",img:"youtube1.svg"},{name:"PC OS & Software Installation",img:"software-installation.svg"}],notExpertSkills:["Angular","CodeIgniter","MongoDB","Wordpress"],skills:{"programming-languages":["HTML5","CSS3","JavaScript","PHP","JSON","TypeScript"],"front-end":["Vue.js","React.js","Next.js","Angular"],"back-end":["Laravel","Node.js","Express.js","CodeIgniter"],database:["MySQL","PostgreSQL","MongoDB"],libraries:["Bootstrap","jQuery","Vuetify","Vuex","Redux"],tools:["Ubuntu","VScode","Git","Composer","npm","OWASP","Restful APIs"],other:["Shopify","Wordpress","Photo Editing","Video Editing","OS Installation"]},experiences:[{role:"Software Engineer",company:"Constient Global Solutions",date:"Aug 2022 - current",content:"Developed e-commerce platforms, enhancing user experience and conversion rates. Integrated Shopify API for efficient product management and order processing. Collaborated on social media applications to boost user engagement. Followed Agile methodologies for timely project delivery and high quality."},{role:"Software Developer",company:"Vaagai Tecknowledge",date:"Jun 2021 - Jul 2022",content:"Developed an Order Management System to enhance order processing and inventory tracking. Created a Members Portal for improved user engagement and personalized access. Collaborated with teams to gather requirements and align with business goals. Used modern frameworks to ensure scalable and maintainable applications."},{role:"Printing & Computer Operator",company:"Xerox shop",date:"May 2019 - Jun 2021",content:"From May 2019 to Jun 2021, I had the privilege of working in a part-time job for a duration of three years. During my time there, I was involved in various responsibilities, including printing, computer operator, and software installation."}],education:[{role:"Bachelors Degree",company:"VHNSN College (2018 - 2021)",content:"I pursued my college education at VHNSNC in 2021, specializing in Bachelor of Computer Science with English as the medium of instruction. I am proud to have achieved a commendable score of 72%, reflecting my dedication and hard work throughout my academic journey."},{role:"HSC",company:"KVS Higher Secondary School (2016 - 2018)",content:"In 2018, I attended KVS HSS, where I studied in the Tamil medium and appeared for the HSC board exams. I am proud to have achieved a respectable score of 70.25%, reflecting my dedication and hard work throughout my academic journey."}]};var o=function(){$(".js-fullheight").css("height",$(window).height()),$(window).resize(function(){$(".js-fullheight").css("height",$(window).height())})},r=function(){$(".js-gotop").on("click",function(e){return e.preventDefault(),$("html, body").animate({scrollTop:$("html").offset().top},500,"easeInOutExpo"),!1}),$(window).scroll(function(){$(window).scrollTop()>200?$(".js-top").addClass("active"):$(".js-top").removeClass("active")})},s=function(){let e=$(".typed");e&&new Typed(".typed",{strings:n.tags,loop:!0,typeSpeed:50,backSpeed:50,backDelay:1e3})},l=function(){n.projects.map((e,a)=>{$("#project-content").append(`<div class="swiper-slide"><div class="card border-0"><div class="card-body text-center"><h4 class="card-title">${e.name}</h4><h6 class="card-subtitle mb-2 text-body-secondary">${e.company}</h6><p class="card-caption text-body-secondary"><i class="bi bi-quote m-0"></i>${e.content}<i class="bi bi-quote m-0"></i></p></div></div></div>`)}),c()},c=function(){new Swiper(".slider",{speed:600,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},720:{slidesPerView:2,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}}})},d=function(){setTimeout(()=>{$(".loader").fadeOut("slow"),$("body").css("overflow","hidden scroll")},500)},m=function(){for(var e of($("#gmap").hide(),$("#name").text(n.name),$("#email").text(n.email),$("#mobile").text(n.mobile),$("#current_location").text(n.current_location),$("#preferred_location").text(n.preferred_location),$("#languages").text(n.languages),$("#experience").text(n.experience),$("#email").attr("href","mailTo:"+n.email),$("#mobile").attr("href","tel:"+n.mobile),$("#footer_location").text("Profile"),$("#footer_location").attr("href",n.instagram),$("#footer_mobile").text(n.mobile),$("#footer_email").text(n.email),$("#footer_email").attr("href","mailTo:"+n.email),$("#footer_mobile").attr("href","tel:"+n.mobile),$(".navbar-social #linkedin").attr("href",n.linkedin),$(".navbar-social #github").attr("href",n.github),$(".navbar-social #instagram").attr("href",n.instagram),$(".navbar-social #cv-download").attr("href",n.cv),$("#profile-content #linkedin").attr("href",n.linkedin),$("#profile-content #github").attr("href",n.github),$("#profile-content #instagram").attr("href",n.instagram),$("#profile-content #cv-download").attr("href",n.cv),n.interests.map((e,a)=>{$("#interest-content").append(`<div class="col-lg-3 col-md-6 col-sm-12 col-12 py-3 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="${200*a}"><div class="card"><div class="card-avatar"><img src="assets/images/icons/${e.img}" class="img" alt="${e.name}"></div><h5 class="card-caption">${e.name}</h5></div></div>`)}),Object.keys(n.skills)))n.skills[e].forEach(a=>{$(`#skills #${e}`).append(`<span>${n.notExpertSkills.includes(a)?'<i class="bi bi-star-half" aria-hidden="true"></i>':'<i class="bi bi-star-fill" aria-hidden="true"></i>'} ${a}</span>`)});l(),p()},p=function(){var e="",a=0;n.experiences.length>0&&(e+=`<li class="timeline-heading center" data-aos="fade-up"><div><h3>Work Experience</h3></div></li>`,n.experiences.map((t,i)=>{e+=`<li class="${++a%2==0?"timeline-inverted":"timeline-unverted"}" data-aos="fade-up"><div class="timeline-badge"><i class="bi bi-suitcase-lg-fill"></i></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">${t.role}</h4><span class="company text-body-tertiary">${t.company}</span><span class="time">${t.date}</span></div><div class="timeline-body"><p>${t.content}</p></div></div></li>`})),n.experiences.length==a&&n.education.length>0&&(e+=`<br><li class="timeline-heading center" data-aos="fade-up"><div><h3>Education</h3></div></li>`,n.education.map((t,i)=>{e+=`<li class="${++a%2==0?"timeline-inverted":"timeline-unverted"}" data-aos="fade-up"><div class="timeline-badge"><i class="bi bi-mortarboard-fill"></i></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">${t.role}</h4><span class="company text-body-tertiary">${t.company}</span></div><div class="timeline-body"><p>${t.content}</p></div></div></li>`})),e&&n.experiences.length+n.education.length==a&&(e+=`<li class="timeline-unverted"><div class="timeline-badge" style="background-color: #e6e6e6;"></div></li>`,$("#resume-timeline").append(e))};$(document).ready(function(){d(),o(),s(),r(),m(),AOS.init({duration:1e3,easing:"ease-in-out",once:!1,mirror:!0}),$("#nav-bar a").on("click",function(e){e.preventDefault();var a=50,t=this.hash;$("#nav-bar .card a").each(function(){t==this.hash?$(this).addClass("active"):$(this).removeClass("active")}),void 0!=$(this).data("offset")&&(a=$(this).data("offset")),$("html, body").stop().animate({scrollTop:t?$(t).offset().top-a:0},500,"swing",function(){})})})}();