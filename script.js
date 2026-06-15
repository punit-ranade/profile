/* ==========================================
   ELEMENTS
========================================== */

const modal = document.querySelector(".modal");
const modalBody = document.querySelector("#modal-body");
const closeModal = document.querySelector(".close-modal");

const detailButtons =
document.querySelectorAll(".details-btn");

const certCards =
document.querySelectorAll(".cert-card");

/* ==========================================
   PROJECT DATA
========================================== */

const projectData = {

    shree: {

        title: "Shree Enterprises",

        overview:
        "Industrial screen printing and graphics solutions company.",

        contribution: [

            "Website Development",
            "Graphic & Prepress Design",
            "Digital Marketing",
            "Analytics & Tracking Setup"

        ],

        tools: [

            "WordPress",
            "Elementor",
            "CorelDRAW",
            "Google Ads",
            "Meta Ads",
            "Google Analytics 4",
            "Google Tag Manager"

        ],

        website:
        "https://www.ranadeudyog.com"

    },

    bhatkanti: {

        title: "Bhatkanti Tours",

        overview:
        "Travel and tourism website focused on enquiries and package showcasing.",

        contribution: [

            "Website Development",
            "Analytics Setup"

        ],

        tools: [

            "WordPress",
            "Elementor"

        ]

    },

    garibi: {

        title: "The Garibi",

        overview:
        "E-commerce platform integrated with payments and social media marketing.",

        contribution: [

            "E-Commerce Website Development",
            "Social Media Marketing",
            "Tracking Setup"

        ],

        tools: [

            "WordPress",
            "Elementor",
            "Razorpay",
            "Meta Ads",
            "Google Analytics"

        ]

    },

    manmastishk: {

        title: "ManMastishk",

        overview:
        "Landing page and informational website.",

        contribution: [

            "Website Development"

        ],

        tools: [

            "WordPress",
            "Elementor"

        ]

    },

    tracking: {

    title:
    "Ranade Udyog - Analytics & Tracking",

    overview:
    "Implemented complete analytics and conversion tracking infrastructure for lead generation and marketing measurement.",

    contribution: [

        "Google Analytics 4 Setup",
        "Google Tag Manager Setup",
        "Form Submission Tracking",
        "WhatsApp Click Tracking",
        "Phone Call Tracking",
        "Google Ads Conversion Tracking"

    ],

    tools: [

        "Google Analytics 4",
        "Google Tag Manager",
        "Google Ads"

    ],

    images: [

        "assets/gtm-tags.png",
        "assets/gtm_triggers.png",
        "assets/gtm_variables.png"

    ]

}

};

/* ==========================================
   CERTIFICATION DATA
========================================== */

const certificationData = {

    0: {

        title:
        "Digital Marketing Bootcamp",

        skills: [

            "SEO",
            "Google Ads",
            "Meta Ads",
            "Content Marketing",
            "Google Analytics",
            "Lead Generation"

        ]

    },

    1: {

        title:
        "CorelDRAW Graphics Suite",

        skills: [

            "Vector Illustration",
            "Logo Design",
            "Print Design",
            "Packaging Design",
            "CMYK Workflow",
            "Prepress Artwork"

        ]

    },

    2: {

        title:
        "CorelDRAW MasterClass",

        skills: [

            "Advanced CorelDRAW",
            "Production Artwork",
            "Color Management",
            "Print File Preparation",
            "Layout Design"

        ]

    },

    3: {

        title:
        "Shopify Development",

        skills: [

            "Store Setup",
            "Theme Customization",
            "Product Management",
            "E-Commerce Development",
            "Store Optimization"

        ]

    }

};

/* ==========================================
   OPEN PROJECT MODAL
========================================== */

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project =
        projectData[
            button.dataset.project
        ];

        let contributionHTML = "";

        project.contribution.forEach(item => {

            contributionHTML +=
            `<li>${item}</li>`;

        });

        let toolsHTML = "";

        project.tools.forEach(item => {

            toolsHTML +=
            `<li>${item}</li>`;

        });

        modalBody.innerHTML = `

            <h2>${project.title}</h2>

            <br>

            <p>${project.overview}</p>

            <br>

            <h3>What I Worked On</h3>

            <ul>
                ${contributionHTML}
            </ul>

            <br>

            <h3>Tools Used</h3>

            <ul>
                ${toolsHTML}
            </ul>

            ${
                project.website
                ?
                `
                <br>

                <a href="${project.website}"
                   target="_blank"
                   class="btn-primary">

                   Visit Website

                </a>
                `
                :
                ""
            }

        `;

        modal.classList.add("active");

    });

});

/* ==========================================
   CERTIFICATION MODAL
========================================== */

certCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        const cert =
        certificationData[index];

        let skillHTML = "";

        cert.skills.forEach(skill=>{

            skillHTML +=
            `<li>${skill}</li>`;

        });

        modalBody.innerHTML = `

            <h2>${cert.title}</h2>

            <br>

            <h3>Skills Gained</h3>

            <ul>
                ${skillHTML}
            </ul>

        `;

        modal.classList.add("active");

    });

});

/* ==========================================
   CLOSE MODAL
========================================== */

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.classList.remove("active");

    }

});

/* ==========================================
   ACTIVE SIDEBAR
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top =
        section.offsetTop - 150;

        const id =
        section.getAttribute("id");

        if(window.scrollY >= top){

            current = id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
document.querySelectorAll(

    ".project-card,\
     .cert-card,\
     .section-header,\
     .hero"

);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(el=>{

    observer.observe(el);

});
