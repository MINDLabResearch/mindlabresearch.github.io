// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "dropdown-papers",
              title: "papers",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-abstracts",
              title: "abstracts",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/abstracts/";
              },
            },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Listed below are our past and current teaching engagements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-team",
          title: "team",
          description: "Current and previous members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "post-ggseg-visualization-with-freesurfer-data-in-r",
        
          title: "ggseg visualization with Freesurfer data in R",
        
        description: "A step-by-step guide for installing and using the ggseg visualization toolbox in RStudio, covering required libraries, installation steps, and atlas options for neuroimaging data.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/ggseg-viz-freesurfer/";
          
        },
      },{id: "post-installing-freesurfer-using-enhanced-mode-ubuntu-18-04-for-hyper-v-on-windows-10",
        
          title: "Installing Freesurfer Using Enhanced Mode Ubuntu 18.04 for Hyper-V on Windows 10",
        
        description: "Guide to installing FreeSurfer on Ubuntu 18.04 in Hyper-V (Windows 10) with additional setup steps",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/installing-freesurfer/";
          
        },
      },{id: "post-meta-analysis-tools",
        
          title: "Meta-analysis Tools",
        
        description: "Guide on meta-analysis tools",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/meta-analysis-tools/";
          
        },
      },{id: "news-early-career-award-2022-schizophrenia-international-research-society",
          title: 'Early Career Award - 2022 Schizophrenia International Research Society.',
          description: "",
          section: "News",},{id: "news-poster-finalist-for-the-abstract-titled-improved-individualized-identification-of-schizophrenia-and-clinical-high-risk-for-psychosis-when-combining-cognition-with-natural-language-processing-at-the-schizophrenia-international-research-society-congress",
          title: 'Poster Finalist for the abstract titled, Improved individualized identification of schizophrenia and clinical...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-presented-my-work-on-the-clinical-utility-of-combining-linguistic-features-with-cognition-across-the-psychosis-spectrum-at-the-computational-psychiatry-course-in-new-york",
          title: 'Presented my work on the clinical utility of combining linguistic features with cognition...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-guest-talk-at-columbia-university-on-my-work-linking-the-reliability-of-processing-naturalistic-auditory-information-with-language-and-thought-disorder-across-the-psychosis-spectrum-thank-you-gaurav-patel-for-the-invitation-and-insightful-discussions",
          title: 'I was invited to give a guest talk at Columbia University on my...',
          description: "",
          section: "News",},{id: "news-invited-to-give-three-guest-lectures-for-master-39-s-level-course-on-quot-introduction-to-multivariate-and-neuroimaging-methods-quot",
          title: 'Invited to give three guest lectures for Master&amp;#39;s-level course on &amp;quot;Introduction to multivariate...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-travel-award-2023-society-of-biological-psychiatry",
          title: 'Travel Award - 2023 Society of Biological Psychiatry.',
          description: "",
          section: "News",},{id: "news-it-was-a-pleasure-presenting-recent-work-from-two-projects-at-the-international-conference-on-early-intervention-in-mental-health-in-lausanne",
          title: 'It was a pleasure presenting recent work from two projects at the International...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-i-am-excited-to-announce-that-i-have-been-selected-to-participate-in-the-2024-career-development-institute-for-psychiatry-cdi-further-details-about-this-exciting-two-year-career-enhacement-opportunity-for-early-stage-clinical-scientists-are-available-here",
          title: 'I am excited to announce that I have been selected to participate in...',
          description: "",
          section: "News",},{id: "news-we-presented-at-sobp-in-toronto",
          title: 'We presented at SOBP in Toronto!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-bailey-presented-at-iepa-2025",
          title: 'Bailey presented at IEPA 2025!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12/";
            },},{id: "news-bailey-maya-theo-and-sam-presented-at-tips",
          title: 'Bailey, Maya, Theo and Sam presented at TIPS!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11/";
            },},{id: "news-celebrating-a-successful-2025",
          title: 'Celebrating a successful 2025!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-ndex-journal-club-exploring-environmental-adversity-and-brain-maturation",
          title: 'NDEx Journal Club: Exploring Environmental Adversity and Brain Maturation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_14/";
            },},{id: "news-shalaila-spoke-at-the-psyche-psychai-symposium-2026",
          title: 'Shalaila spoke at the PsychE / PsychAI Symposium 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_13/";
            },},{id: "news-master-39-s-students-shine-at-teacher-39-s-college-integrative-project-showcase",
          title: 'Master&amp;#39;s Students Shine at Teacher&amp;#39;s College Integrative Project Showcase',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_15/";
            },},{id: "teaching-computational-psychology",
          title: 'Computational Psychology',
          description: "Introduction to multivariate and neuroimaging methods: using R Studio to navigate through clinical research",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/lmu-ncp/";
            },},{id: "teaching-translational-neuroimaging",
          title: 'Translational Neuroimaging',
          description: "Educational Program",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/tni-ep/";
            },},{id: "team-sam-edwards",
          title: 'Sam Edwards',
          description: "Research Coordinator",
          section: "Team",handler: () => {
              window.location.href = "/team/edwards/";
            },},{id: "team-kendall-fording",
          title: 'Kendall Fording',
          description: "Volunteer",
          section: "Team",handler: () => {
              window.location.href = "/team/fording/";
            },},{id: "team-bree-foster",
          title: 'Bree Foster',
          description: "Volunteer",
          section: "Team",handler: () => {
              window.location.href = "/team/foster/";
            },},{id: "team-matthew-franco",
          title: 'Matthew Franco',
          description: "Volunteer",
          section: "Team",handler: () => {
              window.location.href = "/team/franco/";
            },},{id: "team-aashree-gandhi",
          title: 'Aashree Gandhi',
          description: "Volunteer",
          section: "Team",handler: () => {
              window.location.href = "/team/gandhi/";
            },},{id: "team-debora-gonzalez",
          title: 'Debora Gonzalez',
          description: "PhD Student",
          section: "Team",handler: () => {
              window.location.href = "/team/gonzales/";
            },},{id: "team-dr-shalaila-haas",
          title: 'Dr. Shalaila Haas',
          description: "Assistant Professor and Director of the MIND Lab",
          section: "Team",handler: () => {
              window.location.href = "/team/haas/";
            },},{id: "team-dr-lana-kambeitz-ilankovic",
          title: 'Dr. Lana Kambeitz-Ilankovic',
          description: "Research Group Leader at University of Cologne, Germany",
          section: "Team",handler: () => {
              window.location.href = "/team/kambeitz-ilankovic/";
            },},{id: "team-dr-patrick-kastner",
          title: 'Dr. Patrick Kastner',
          description: "Assistant Professor and Director of the Sustainable Urban Systems Lab at Georgia Tech.",
          section: "Team",handler: () => {
              window.location.href = "/team/kastner/";
            },},{id: "team-daniel-katzman",
          title: 'Daniel Katzman',
          description: "Volunteer",
          section: "Team",handler: () => {
              window.location.href = "/team/katzman/";
            },},{id: "team-dr-benson-ku",
          title: 'Dr. Benson Ku',
          description: "Assistant Professor at Emory University",
          section: "Team",handler: () => {
              window.location.href = "/team/ku/";
            },},{id: "team-danielle-obergh",
          title: 'Danielle Obergh',
          description: "Volunteer",
          section: "Team",handler: () => {
              window.location.href = "/team/obergh/";
            },},{id: "team-sophie-riviere",
          title: 'Sophie Riviere',
          description: "Clinical Research Coordinator",
          section: "Team",handler: () => {
              window.location.href = "/team/riviere/";
            },},{id: "team-theodore-servedio",
          title: 'Theodore Servedio',
          description: "Clinical Research Coordinator",
          section: "Team",handler: () => {
              window.location.href = "/team/servedio/";
            },},{id: "team-nazly-suarez",
          title: 'Nazly Suarez',
          description: "Clinical Research Coordinator",
          section: "Team",handler: () => {
              window.location.href = "/team/suarez/";
            },},{id: "team-bailey-todtfeld",
          title: 'Bailey Todtfeld',
          description: "Clinical Research Coordinator",
          section: "Team",handler: () => {
              window.location.href = "/team/todtfeld/";
            },},{id: "team-maya-valenzano",
          title: 'Maya Valenzano',
          description: "Clinical Research Coordinator",
          section: "Team",handler: () => {
              window.location.href = "/team/valenzano/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MINDLabResearch", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mind-lab-research", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1385-1050", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Shalaila-Haas/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AREhBXYAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://centilebrain.org/#/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.translational-neuro.org/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
