import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akhil",
  lastName: "Kumar",
  name: `Akhil Kumar`,
  role: "UI/UX DESIGNER",
  avatar: "/images/avatar.jpg",
  email: "akhilkumar.vnos23@gmail.com",
  phone:"+16027052683",
  location: "America/Phoenix", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let&apos;s connect!</>,
  description: <>akhilkumar.vnos23@gmail.com<br></br><br></br>+1 602-705-2683</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akhil-kumar-97a579146/",
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/akhilkumar16",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Phone",
    icon: "phone",
    link: `tel:${person.phone}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I&apos;m Akhil Kumar!</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Strategic and data-informed Senior Product Designer with 7+ years of experience leading user-centered design across enterprise SaaS, e-commerce, and AI-driven platforms — architecting scalable design systems, driving WCAG-compliant accessibility, and delivering multi-million-dollar conversion rate impacts.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a Strategic and data-informed Senior Product Designer with 7+ years of experience leading user-centered design initiatives across enterprise SaaS, e-commerce, and AI-driven platforms.
        <br /><br />
        I specialize in architecting scalable, tokenized design systems in Figma, conducting mixed-methods user research, and deploying WCAG-compliant design strategies that boost product engagement and system usability. My work spans the full design lifecycle — from discovery and research through high-fidelity prototyping and design system governance.
        <br /><br />
        I hold a Master&apos;s in User Experience from Arizona State University and have a proven track record of collaborating with cross-functional engineering pods to automate handoff workflows, improve product discovery, and drive measurable conversion rate optimizations (CRO) that yield multi-million-dollar revenue impacts.
        <br /><br />
        My projects range from redesigning public-safety survey experiences for the City of Mesa, to building AI-assisted research tools with Mayo Clinic and ASU, to crafting end-to-end pilgrim travel mobile experiences. Each challenge fuels my passion for creating digital products that not only look good — but feel right to use.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kroger",
        timeframe: "Feb 2026 – Present",
        role: "Senior Product Designer",
        achievements: [
          <>Architected and scaled a centralized enterprise design system in Figma using component variables and semantic tokens, cutting cross-functional design-to-development handoff cycles by 40%.</>,
          <>Conducted rigorous A/B and multivariate experimentation testing on the digital check-out funnel via Amplitude analytics, refining interaction touchpoints to capture $2.5M in projected annual revenue.</>,
          <>Led a comprehensive accessibility overhaul of the flagship e-commerce application to ensure strict WCAG 2.2 AA compliance, increasing usability metrics by 25% for assistive technology users.</>,
          <>Designed high-throughput internal logistics tracking interface, implementing advanced data visualization layouts that compressed 1M+ daily complex inventory updates into scannable, actionable dashboards.</>,
          <>Directed co-creation and user journey mapping sprints with 50+ key corporate business units, converting qualitative research observations into friction-free user flows that boosted monthly active user (MAU) interaction metrics.</>,
        ],
        images: [],
      },
      {
        company: "AriesView",
        timeframe: "Oct 2025 – Dec 2025",
        role: "Associate Software Engineering Intern (UI/UX / Product Design)",
        achievements: [
          <>Transformed highly abstract, 50,000+ node datasets into simplified relational data visualization interfaces, reducing cognitive load metrics and increasing data-analyst task performance speeds by 28%.</>,
          <>Facilitated targeted context inquiries and contextual mapping sessions with 40 domain specialists, conducting multi-point heuristic audits to mathematically validate and iterate upon automated AI insights.</>,
          <>Programmed highly accurate interactive application prototypes utilizing Figma and ProtoPie, defining conditional logic and complex micro-animations to map out exact front-end browser performance behaviors.</>,
          <>Documented and integrated 50+ new accessible UI components into the core design system repository, standardizing typography and style hierarchies to reduce production layout variances by 20%.</>,
        ],
        images: [],
      },
      {
        company: "Citus Infotech",
        timeframe: "Oct 2022 – Nov 2023",
        role: "Product Designer",
        achievements: [
          <>Engineered conversational flows for an enterprise AI assistant, configuring natural language intent maps and automated query routing states to deflect low-tier client troubleshooting volume by 30%.</>,
          <>Restructured core navigation models for a multi-tenant B2B SaaS system, deploying Framer behavioral prototypes to compress platform onboarding paths and elevate client annual retention rates by 15%.</>,
          <>Spearheaded the responsive system redesign of high-traffic corporate web properties managed via WordPress and AEM, using flexbox-grid mechanics to increase session lengths by 45% while driving bounce rates below 20%.</>,
          <>Pioneered multi-tier heuristic evaluations on dated industrial operations software, using Miro journey mapping to eliminate 15 high-friction workflow gaps and streamline end-to-end task flows.</>,
          <>Integrated micro-animations into system state transitions using Adobe After Effects and Lottie, establishing high-fidelity visual confirmation loops that elevated perceived system speeds by 22%.</>,
        ],
        images: [],
      },
      {
        company: "OnDevice IT Solutions",
        timeframe: "Jul 2021 – Oct 2022",
        role: "UI/UX Designer",
        achievements: [
          <>Designed information layouts for technical telemetry web products using Sketch and InVision, configuring multi-layered analytical charts that scaled enterprise operational speed parameters by 35%.</>,
          <>Translated engineering specifications into low-and-high-fidelity interactive wireframes, establishing structured navigation trees that minimized customer time-to-onboard by 40%.</>,
          <>Managed continuous, recursive digital usability validation testing tracks with 500+ active enterprise professionals, tracking interaction metrics to implement layout optimizations that increased call-to-action engagement by 18%.</>,
          <>Authored and governed comprehensive product typography rules and structural patterns, supplying cross-functional global dev teams with clean web UI kits to accelerate feature release vectors by 25%.</>,
        ],
        images: [],
      },
      {
        company: "DevRabbit IT Solutions",
        timeframe: "Oct 2020 – Jun 2021",
        role: "UI/UX Designer",
        achievements: [
          <>Supervised discovery research tracks and remote user testing panels, converting raw screen recordings into analytical insights to structurally justify high-priority iterative feature updates.</>,
          <>Developed application layouts, cross-platform wireframes, and interactive click-through prototypes using Adobe XD, converting functional platform parameters into tested, high-fidelity consumer interfaces.</>,
          <>Facilitated cross-functional design thinking workshops with external corporate partners, leveraging collaborative empathy maps to align aesthetic deliverables with fundamental commercial bottom-line outcomes.</>,
        ],
        images: [],
      },
      {
        company: "Informative Web Solutions",
        timeframe: "May 2017 – Sep 2020",
        role: "UI/UX Designer",
        achievements: [
          <>Designed and deployed responsive web interfaces for 15+ digital retail applications, configuring streamlined product exploration and carting paths that drove average order value (AOV) metrics up by 12%.</>,
          <>Authored platform-agnostic fluid layouts for smartphone devices, enforcing strict adherence to Apple Human Interface Guidelines and Material Design definitions to generate a 30% surge in mobile transaction conversions.</>,
          <>Re-architected structural sitemaps and indexing structures for an enterprise educational repository portal, compressing total user navigation pathways from 5 down to 3 essential actions.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Arizona State University, Tempe, Arizona",
        description: <>Master&apos;s in User Experience &nbsp;·&nbsp; Jan 2024 – Dec 2025</>,
      },
      {
        name: "Chalapathi Institute of Engineering & Technology, Guntur, India",
        description: <>Bachelor&apos;s in Computer Science & Engineering &nbsp;·&nbsp; Oct 2013 – Apr 2017</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Product Strategy & Design",
        description: (
          <>End-to-End Product Design, User Research (Qualitative & Quantitative), Wireframing, High-Fidelity Prototyping, Information Architecture, Service Blueprints, Persona Development, Customer Journey Mapping, Interaction Design, Growth Design, Mobile & Responsive Web Design.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "UX Design",
        description: (
          <>UX Audits, Conversational Interfaces, AI-Driven UX, Data Visualization, Enterprise SaaS UX, User Personas, Site Mapping, Motion Design, Empathy Mapping, Typography, Color Theory, Use Cases, Agile UX.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Specialized Methodologies",
        description: (
          <>Component Governance, Figma Variables & Tokenization, Design Thinking, Usability Testing, Heuristic Evaluation, Accessibility Testing (WCAG 2.1/2.2 AA Compliance), A/B Testing & Experimentation, Motion & Micro-interactions.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Design & Collaboration Tools",
        description: (
          <>Figma, ProtoPie, Sketch, Miro, Adobe Creative Suite (Illustrator, Photoshop, XD, InDesign, After Effects), InVision, Lottie, Framer, Balsamiq, Notion, Jira, Confluence.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Product & Analytics",
        description: (
          <>Google Analytics, Amplitude, Hotjar, CMS Platforms (WordPress, Adobe Experience Manager/AEM), Slack.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Technical Literacy",
        description: (
          <>Front-End Layout (HTML5, CSS3, JavaScript ES6), Flexbox/Grid Architecture, Resilient Responsive Breakpoints.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/gallery00001.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00002.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00003.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00005.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00006.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00007.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00008.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00009.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00010.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00011.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00012.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00013.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery00014.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
