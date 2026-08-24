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
        I&apos;m an accomplished Senior Product Designer with 8+ years of experience delivering end-to-end product design
        solutions that balance business objectives, user needs, and technical feasibility across enterprise applications.
        <br /><br />
        I specialize in establishing scalable design systems, interface standards, and consistent UX strategies for complex
        digital products ‚AI leading Human-Centered Design initiatives that translate strategic business goals into
        actionable, customer-focused design solutions. My work spans the full product lifecycle, from user research,
        journey mapping, and information architecture through high-fidelity prototyping, design governance, and release
        readiness review.
        <br /><br />
        I hold a Master&apos;s in User Experience from Arizona State University and a Bachelor&apos;s in Computer Science
        Engineering, and have a proven track record of mentoring design teams, driving Design Operations (DesignOps),
        and partnering with cross-functional stakeholders ‚AI from product managers to executive leadership ‚AI to ship
        accessible, business-aligned digital experiences.
        <br /><br />
        My experience spans enterprise retail and healthcare platforms, including leading design governance at Kroger,
        shaping product experiences at McKesson, and building research-driven interfaces earlier in my career across
        UI/UX roles in Hyderabad, India. Each engagement fuels my passion for creating digital products that not only
        look good ‚AI but feel right to use.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kroger",
        timeframe: "Sep 2025 ‚AI Present",
        role: "Senior Product Designer",
        achievements: [
          <>Spearheaded enterprise product design initiatives, defining scalable interface standards and consistent design principles for complex, cross-functional business objectives.</>,
          <>Directed product vision planning, translating strategic business goals into actionable design initiatives aligned with organizational priorities and customer expectations.</>,
          <>Built out design leadership practices ‚AI mentoring designers, reviewing deliverables, and setting quality benchmarks to raise organizational design maturity.</>,
          <>Established UX and design governance frameworks, including review procedures, usability standards, approval workflows, and documentation practices for consistent enterprise experiences.</>,
          <>Led Design Operations (DesignOps), optimizing resource planning, workflow efficiency, and design asset organization across multiple concurrent product initiatives.</>,
          <>Owned product portfolio planning and product benchmarking, evaluating opportunities and competitive positioning to guide design investment and prioritization decisions.</>,
          <>Ran design review management and release readiness reviews, validating deliverables against organizational standards prior to implementation and deployment.</>,
        ],
        images: [],
      },
      {
        company: "McKesson",
        timeframe: "Oct 2024 ‚AI Aug 2025",
        role: "Product Designer",
        achievements: [
          <>Designed detailed product interfaces in Figma, maintaining organized, reusable component libraries to support efficient design collaboration and future scalability.</>,
          <>Built interactive, motion-rich prototypes in Framer and Origami Studio, and responsive browser-based demos in Webflow, to validate interface behavior ahead of implementation.</>,
          <>Documented process flows and BPMN diagrams in Lucidchart and Miro, clarifying product workflows, decision points, and feature functionality for cross-functional teams.</>,
          <>Developed Value Proposition and Business Model Canvases to define customer needs, value drivers, and product positioning that informed feature planning.</>,
          <>Ran accessibility reviews and maintained visual consistency across screens, and led structured design critique sessions to continuously improve interface quality.</>,
        ],
        images: [],
      },
      {
        company: "On Device IT Solutions",
        timeframe: "Aug 2020 ‚AI Nov 2023",
        role: "UI/UX Designer",
        achievements: [
          <>Conducted end-to-end user research ‚AI personas, user flows, and journey mapping ‚AI to establish user-centered design requirements across the product lifecycle.</>,
          <>Facilitated card sorting and tree testing sessions with real users to improve navigation structures and information discoverability.</>,
          <>Executed heuristic evaluations and cognitive walkthroughs to identify usability obstacles and validate interface effectiveness for first-time users.</>,
          <>Coordinated formal usability testing sessions and UX audits, translating findings into actionable design enhancements.</>,
          <>Prototyped realistic interface behaviors in Proto.io and Principle, and produced detailed screen specifications and interaction guidelines for development handoff.</>,
        ],
        images: [],
      },
      {
        company: "DevRabbit IT Solutions",
        timeframe: "Jun 2017 ‚AI Jul 2020",
        role: "UI Designer",
        achievements: [
          <>Designed pixel-perfect web interfaces and visual assets in Photoshop and Illustrator, aligned with branding and visual hierarchy standards.</>,
          <>Produced interactive prototypes in Axure RP and low-fidelity wireframes in Balsamiq to accelerate stakeholder review and approval cycles.</>,
          <>Built responsive web pages with semantic HTML, CSS, and JavaScript/jQuery, ensuring cross-browser compatibility and accessibility.</>,
          <>Validated interface consistency through cross-browser compatibility testing and optimized graphics for page load performance.</>,
          <>Documented screen structures and navigation flows in Microsoft Visio to support clear design-to-development communication.</>,
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
